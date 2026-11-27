/**
 * Stateless GitHub OAuth Web Flow token-exchange proxy for adriel-portfolio /admin/.
 *
 * Holds GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET exclusively as Cloudflare Worker
 * secrets (`wrangler secret put`), enforces exact Origin allowlist + redirect_uri
 * prefix checks, and exchanges `code` via https://github.com/login/oauth/access_token.
 */

const GITHUB_TOKEN_URL = "https://github.com/login/oauth/access_token";

export function parseCsvList(raw) {
  if (typeof raw !== "string") return [];
  return raw
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}

export function isAllowedOrigin(originHeader, allowedOriginsCsv) {
  if (typeof originHeader !== "string" || !originHeader || originHeader === "null") {
    return false;
  }
  let parsedOrigin;
  try {
    const parsed = new URL(originHeader);
    parsedOrigin = parsed.origin;
    if (parsedOrigin === "null" || parsedOrigin !== originHeader) {
      return false;
    }
  } catch {
    return false;
  }

  const allowedSet = new Set();
  for (const item of parseCsvList(allowedOriginsCsv)) {
    try {
      const u = new URL(item);
      if (u.origin && u.origin !== "null") {
        allowedSet.add(u.origin);
      }
    } catch {
      // Ignore malformed entries in env config
    }
  }
  return allowedSet.has(parsedOrigin);
}

export function isAllowedRedirectUri(redirectUri, requestOrigin, allowedPrefixesCsv) {
  if (typeof redirectUri !== "string" || !redirectUri) return false;
  if (typeof requestOrigin !== "string" || !requestOrigin) return false;

  let normalizedHref;
  try {
    const parsed = new URL(redirectUri);
    if (parsed.origin !== requestOrigin) return false;
    if (parsed.username || parsed.password) return false;
    if (parsed.search || parsed.hash || redirectUri.includes("?") || redirectUri.includes("#")) {
      return false;
    }
    normalizedHref = parsed.href;
  } catch {
    return false;
  }

  const prefixes = parseCsvList(allowedPrefixesCsv);
  return prefixes.some((prefix) => {
    try {
      const parsedPrefix = new URL(prefix);
      if (parsedPrefix.origin !== requestOrigin) return false;
      return normalizedHref.startsWith(parsedPrefix.href);
    } catch {
      return false;
    }
  });
}

export function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function jsonResponse(payload, status, extraHeaders = {}) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      Pragma: "no-cache",
      ...extraHeaders,
    },
  });
}

export async function handleRequest(request, env = {}, deps = {}) {
  const fetchFn = deps.fetchFn || globalThis.fetch;
  const url = new URL(request.url);
  const origin = request.headers.get("Origin");
  const hasOrigin = origin !== null;
  const allowedOrigins = env.ALLOWED_ORIGINS || env.ALLOWED_ORIGIN || "";
  const originAllowed = hasOrigin && isAllowedOrigin(origin, allowedOrigins);

  if (request.method === "OPTIONS") {
    if (!originAllowed) {
      return jsonResponse({ error: "origin_not_allowed" }, 403, { Vary: "Origin" });
    }
    return new Response(null, {
      status: 204,
      headers: corsHeaders(origin),
    });
  }

  if (url.pathname === "/health") {
    if (request.method !== "GET") {
      return jsonResponse(
        { error: "method_not_allowed" },
        405,
        {
          Allow: "GET, OPTIONS",
          ...(originAllowed ? corsHeaders(origin) : {}),
        },
      );
    }
    if (hasOrigin && !originAllowed) {
      return jsonResponse({ error: "origin_not_allowed" }, 403, { Vary: "Origin" });
    }
    return jsonResponse(
      { ok: true, service: "adriel-portfolio-oauth-proxy" },
      200,
      originAllowed ? corsHeaders(origin) : {},
    );
  }

  if (url.pathname === "/token") {
    if (!originAllowed) {
      return jsonResponse({ error: "origin_not_allowed" }, 403, { Vary: "Origin" });
    }

    const headers = corsHeaders(origin);

    if (request.method !== "POST") {
      return jsonResponse({ error: "method_not_allowed" }, 405, {
        ...headers,
        Allow: "POST, OPTIONS",
      });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ error: "invalid_json" }, 400, headers);
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return jsonResponse({ error: "invalid_payload" }, 400, headers);
    }

    const code = typeof body.code === "string" ? body.code.trim() : "";
    const redirectUri = typeof body.redirect_uri === "string" ? body.redirect_uri.trim() : "";

    if (!code) {
      return jsonResponse({ error: "missing_code" }, 400, headers);
    }

    const allowedRedirectPrefixes =
      typeof env.ALLOWED_REDIRECT_PREFIXES === "string"
        ? env.ALLOWED_REDIRECT_PREFIXES
        : `${origin}/adriel-portfolio/admin/,${origin}/admin/`;

    if (!isAllowedRedirectUri(redirectUri, origin, allowedRedirectPrefixes)) {
      return jsonResponse({ error: "invalid_redirect_uri" }, 400, headers);
    }

    const clientId = typeof env.GITHUB_CLIENT_ID === "string" ? env.GITHUB_CLIENT_ID.trim() : "";
    const clientSecret =
      typeof env.GITHUB_CLIENT_SECRET === "string" ? env.GITHUB_CLIENT_SECRET.trim() : "";

    if (!clientId || !clientSecret) {
      return jsonResponse({ error: "proxy_not_configured" }, 500, headers);
    }

    let ghRes;
    try {
      ghRes = await fetchFn(GITHUB_TOKEN_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "User-Agent": "adriel-portfolio-oauth-proxy",
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code,
          redirect_uri: redirectUri,
        }),
      });
    } catch {
      return jsonResponse({ error: "upstream_unreachable" }, 502, headers);
    }

    let ghData;
    try {
      ghData = await ghRes.json();
    } catch {
      return jsonResponse({ error: "upstream_invalid_json" }, 502, headers);
    }

    if (!ghRes.ok) {
      return jsonResponse({ error: "upstream_error", status: ghRes.status }, 502, headers);
    }

    if (ghData && ghData.error) {
      return jsonResponse(
        {
          error: String(ghData.error),
          error_description: ghData.error_description
            ? String(ghData.error_description)
            : "GitHub rejected OAuth code exchange.",
        },
        400,
        headers,
      );
    }

    if (!ghData || typeof ghData.access_token !== "string" || !ghData.access_token) {
      return jsonResponse({ error: "missing_access_token" }, 502, headers);
    }

    return jsonResponse(
      {
        access_token: ghData.access_token,
        token_type: ghData.token_type || "bearer",
        scope: ghData.scope || "",
      },
      200,
      headers,
    );
  }

  return jsonResponse(
    { error: "not_found" },
    404,
    originAllowed ? corsHeaders(origin) : {},
  );
}

export default {
  async fetch(request, env) {
    return handleRequest(request, env);
  },
};
