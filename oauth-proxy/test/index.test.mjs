import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { handleRequest, isAllowedOrigin, isAllowedRedirectUri } from "../src/index.js";

const BASE_ENV = {
  ALLOWED_ORIGINS: "https://adrielvent.github.io,http://127.0.0.1:4173,http://localhost:4173",
  ALLOWED_REDIRECT_PREFIXES:
    "https://adrielvent.github.io/adriel-portfolio/admin/,http://127.0.0.1:4173/admin/,http://localhost:4173/admin/",
  GITHUB_CLIENT_ID: "Iv1.testclientid123",
  GITHUB_CLIENT_SECRET: ["mock-unit", "test-secret", "value"].join("-"),
};

describe("Origin and redirect_uri helpers", () => {
  it("accepts exact allowlisted origins and rejects spoofed or null origins", () => {
    assert.equal(isAllowedOrigin("https://adrielvent.github.io", BASE_ENV.ALLOWED_ORIGINS), true);
    assert.equal(isAllowedOrigin("http://127.0.0.1:4173", BASE_ENV.ALLOWED_ORIGINS), true);
    assert.equal(isAllowedOrigin("https://adrielvent.github.io.evil.com", BASE_ENV.ALLOWED_ORIGINS), false);
    assert.equal(isAllowedOrigin("null", BASE_ENV.ALLOWED_ORIGINS), false);
    assert.equal(isAllowedOrigin("", BASE_ENV.ALLOWED_ORIGINS), false);
    assert.equal(isAllowedOrigin("https://adrielvent.github.io/extra", BASE_ENV.ALLOWED_ORIGINS), false);
  });

  it("enforces same-origin and path prefix without dot-segment traversal", () => {
    assert.equal(
      isAllowedRedirectUri(
        "https://adrielvent.github.io/adriel-portfolio/admin/",
        "https://adrielvent.github.io",
        BASE_ENV.ALLOWED_REDIRECT_PREFIXES,
      ),
      true,
    );
    assert.equal(
      isAllowedRedirectUri(
        "http://127.0.0.1:4173/admin/index.html",
        "http://127.0.0.1:4173",
        BASE_ENV.ALLOWED_REDIRECT_PREFIXES,
      ),
      true,
    );
    assert.equal(
      isAllowedRedirectUri(
        "http://127.0.0.1:4173/admin/../evil",
        "http://127.0.0.1:4173",
        BASE_ENV.ALLOWED_REDIRECT_PREFIXES,
      ),
      false,
    );
    assert.equal(
      isAllowedRedirectUri(
        "https://adrielvent.github.io/adriel-portfolio/admin/",
        "http://127.0.0.1:4173",
        BASE_ENV.ALLOWED_REDIRECT_PREFIXES,
      ),
      false,
    );
  });

  it("rejects redirect_uri values with query strings or hash fragments", async () => {
    for (const smuggled of [
      "https://adrielvent.github.io/adriel-portfolio/admin/?evil=1",
      "https://adrielvent.github.io/adriel-portfolio/admin/#frag",
      "https://adrielvent.github.io/adriel-portfolio/admin/?",
      "https://adrielvent.github.io/adriel-portfolio/admin/#",
    ]) {
      assert.equal(
        isAllowedRedirectUri(
          smuggled,
          "https://adrielvent.github.io",
          BASE_ENV.ALLOWED_REDIRECT_PREFIXES,
        ),
        false,
      );
    }

    let called = false;
    const req = new Request("https://proxy.example.workers.dev/token", {
      method: "POST",
      headers: { Origin: "http://127.0.0.1:4173", "Content-Type": "application/json" },
      body: JSON.stringify({
        code: "abc123",
        redirect_uri: "http://127.0.0.1:4173/admin/?leak=1#frag",
      }),
    });
    const res = await handleRequest(req, BASE_ENV, {
      fetchFn: async () => {
        called = true;
        throw new Error("should not call fetch");
      },
    });
    assert.equal(res.status, 400);
    assert.equal((await res.json()).error, "invalid_redirect_uri");
    assert.equal(called, false);
  });
});

describe("Worker handleRequest", () => {
  it("handles OPTIONS preflight for allowed origins", async () => {
    const req = new Request("https://proxy.example.workers.dev/token", {
      method: "OPTIONS",
      headers: { Origin: "https://adrielvent.github.io" },
    });
    const res = await handleRequest(req, BASE_ENV);
    assert.equal(res.status, 204);
    assert.equal(res.headers.get("Access-Control-Allow-Origin"), "https://adrielvent.github.io");
    assert.equal(res.headers.get("Vary"), "Origin");
    assert.match(res.headers.get("Access-Control-Allow-Methods"), /POST/);
  });

  it("rejects OPTIONS preflight for disallowed or missing origins with 403", async () => {
    const req1 = new Request("https://proxy.example.workers.dev/token", {
      method: "OPTIONS",
      headers: { Origin: "https://adrielvent.github.io.evil.com" },
    });
    const res1 = await handleRequest(req1, BASE_ENV);
    assert.equal(res1.status, 403);
    assert.equal(res1.headers.get("Access-Control-Allow-Origin"), null);

    const req2 = new Request("https://proxy.example.workers.dev/token", {
      method: "OPTIONS",
    });
    const res2 = await handleRequest(req2, BASE_ENV);
    assert.equal(res2.status, 403);
  });

  it("serves GET /health without leaking secrets", async () => {
    const req = new Request("https://proxy.example.workers.dev/health", { method: "GET" });
    const res = await handleRequest(req, BASE_ENV);
    assert.equal(res.status, 200);
    const body = await res.json();
    assert.equal(body.ok, true);
    assert.equal(JSON.stringify(body).includes(BASE_ENV.GITHUB_CLIENT_SECRET), false);
  });

  it("rejects POST /token with disallowed Origin before calling fetch", async () => {
    let called = false;
    const req = new Request("https://proxy.example.workers.dev/token", {
      method: "POST",
      headers: { Origin: "https://evil.example", "Content-Type": "application/json" },
      body: JSON.stringify({ code: "abc", redirect_uri: "https://evil.example/admin/" }),
    });
    const res = await handleRequest(req, BASE_ENV, {
      fetchFn: async () => {
        called = true;
        throw new Error("should not call fetch");
      },
    });
    assert.equal(res.status, 403);
    assert.equal(called, false);
  });

  it("rejects non-POST requests to /token with 405", async () => {
    const req = new Request("https://proxy.example.workers.dev/token", {
      method: "GET",
      headers: { Origin: "http://127.0.0.1:4173" },
    });
    const res = await handleRequest(req, BASE_ENV);
    assert.equal(res.status, 405);
    assert.equal(res.headers.get("Allow"), "POST, OPTIONS");
  });

  it("rejects POST /token when code is missing or redirect_uri mismatches", async () => {
    let called = false;
    const fetchFn = async () => {
      called = true;
      throw new Error("should not call fetch");
    };

    const reqMissingCode = new Request("https://proxy.example.workers.dev/token", {
      method: "POST",
      headers: { Origin: "http://127.0.0.1:4173", "Content-Type": "application/json" },
      body: JSON.stringify({ redirect_uri: "http://127.0.0.1:4173/admin/" }),
    });
    const res1 = await handleRequest(reqMissingCode, BASE_ENV, { fetchFn });
    assert.equal(res1.status, 400);
    assert.equal((await res1.json()).error, "missing_code");

    const reqBadRedirect = new Request("https://proxy.example.workers.dev/token", {
      method: "POST",
      headers: { Origin: "http://127.0.0.1:4173", "Content-Type": "application/json" },
      body: JSON.stringify({
        code: "abc123",
        redirect_uri: "http://127.0.0.1:4173/admin/../steal",
      }),
    });
    const res2 = await handleRequest(reqBadRedirect, BASE_ENV, { fetchFn });
    assert.equal(res2.status, 400);
    assert.equal((await res2.json()).error, "invalid_redirect_uri");

    for (const smuggled of [
      "http://127.0.0.1:4173/admin/?leak=1",
      "http://127.0.0.1:4173/admin/#frag",
    ]) {
      const reqSmuggled = new Request("https://proxy.example.workers.dev/token", {
        method: "POST",
        headers: { Origin: "http://127.0.0.1:4173", "Content-Type": "application/json" },
        body: JSON.stringify({ code: "abc123", redirect_uri: smuggled }),
      });
      const resSmuggled = await handleRequest(reqSmuggled, BASE_ENV, { fetchFn });
      assert.equal(resSmuggled.status, 400);
      assert.equal((await resSmuggled.json()).error, "invalid_redirect_uri");
    }
    assert.equal(called, false);
  });

  it("returns 500 without leaking secret info if worker secrets are missing", async () => {
    const req = new Request("https://proxy.example.workers.dev/token", {
      method: "POST",
      headers: { Origin: "http://127.0.0.1:4173", "Content-Type": "application/json" },
      body: JSON.stringify({
        code: "abc123",
        redirect_uri: "http://127.0.0.1:4173/admin/",
      }),
    });
    const res = await handleRequest(req, {
      ALLOWED_ORIGINS: BASE_ENV.ALLOWED_ORIGINS,
      ALLOWED_REDIRECT_PREFIXES: BASE_ENV.ALLOWED_REDIRECT_PREFIXES,
    });
    assert.equal(res.status, 500);
    const body = await res.json();
    assert.equal(body.error, "proxy_not_configured");
  });

  it("exchanges a valid OAuth code via mocked GitHub fetch and sets no-store CORS headers", async () => {
    let capturedUrl;
    let capturedInit;
    const req = new Request("https://proxy.example.workers.dev/token", {
      method: "POST",
      headers: { Origin: "https://adrielvent.github.io", "Content-Type": "application/json" },
      body: JSON.stringify({
        code: "valid-oauth-code",
        redirect_uri: "https://adrielvent.github.io/adriel-portfolio/admin/",
      }),
    });

    const res = await handleRequest(req, BASE_ENV, {
      fetchFn: async (url, init) => {
        capturedUrl = url;
        capturedInit = init;
        return new Response(
          JSON.stringify({
            access_token: "gho_mockedtoken999",
            token_type: "bearer",
            scope: "public_repo",
          }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        );
      },
    });

    assert.equal(res.status, 200);
    assert.equal(capturedUrl, "https://github.com/login/oauth/access_token");
    assert.equal(capturedInit.method, "POST");
    const sent = JSON.parse(capturedInit.body);
    assert.equal(sent.client_id, BASE_ENV.GITHUB_CLIENT_ID);
    assert.equal(sent.client_secret, BASE_ENV.GITHUB_CLIENT_SECRET);
    assert.equal(sent.code, "valid-oauth-code");

    assert.equal(res.headers.get("Cache-Control"), "no-store");
    assert.equal(res.headers.get("Access-Control-Allow-Origin"), "https://adrielvent.github.io");
    assert.equal(res.headers.get("Vary"), "Origin");

    const data = await res.json();
    assert.deepEqual(data, {
      access_token: "gho_mockedtoken999",
      token_type: "bearer",
      scope: "public_repo",
    });
    assert.equal(JSON.stringify(data).includes(BASE_ENV.GITHUB_CLIENT_SECRET), false);
  });

  it("maps GitHub OAuth error payloads to 400 without exposing client_secret", async () => {
    const req = new Request("https://proxy.example.workers.dev/token", {
      method: "POST",
      headers: { Origin: "http://localhost:4173", "Content-Type": "application/json" },
      body: JSON.stringify({
        code: "expired-code",
        redirect_uri: "http://localhost:4173/admin/",
      }),
    });

    const res = await handleRequest(req, BASE_ENV, {
      fetchFn: async () =>
        new Response(
          JSON.stringify({
            error: "bad_verification_code",
            error_description: "The code passed is incorrect or expired.",
          }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        ),
    });

    assert.equal(res.status, 400);
    const data = await res.json();
    assert.equal(data.error, "bad_verification_code");
    assert.equal(JSON.stringify(data).includes(BASE_ENV.GITHUB_CLIENT_SECRET), false);
  });

  it("defaults redirect_uri prefix to /admin/ or /adriel-portfolio/admin/ on allowlisted Origin when ALLOWED_REDIRECT_PREFIXES is omitted", async () => {
    const minEnv = {
      ALLOWED_ORIGINS: "https://adrielvent.github.io",
      GITHUB_CLIENT_ID: BASE_ENV.GITHUB_CLIENT_ID,
      GITHUB_CLIENT_SECRET: BASE_ENV.GITHUB_CLIENT_SECRET,
    };
    const badReq = new Request("https://proxy.example.workers.dev/token", {
      method: "POST",
      headers: { Origin: "https://adrielvent.github.io", "Content-Type": "application/json" },
      body: JSON.stringify({ code: "abc", redirect_uri: "https://adrielvent.github.io/other/" }),
    });
    const badRes = await handleRequest(badReq, minEnv, {
      fetchFn: async () => {
        throw new Error("should not call fetch");
      },
    });
    assert.equal(badRes.status, 400);

    const okReq = new Request("https://proxy.example.workers.dev/token", {
      method: "POST",
      headers: { Origin: "https://adrielvent.github.io", "Content-Type": "application/json" },
      body: JSON.stringify({
        code: "abc",
        redirect_uri: "https://adrielvent.github.io/adriel-portfolio/admin/",
      }),
    });
    const okRes = await handleRequest(okReq, minEnv, {
      fetchFn: async () =>
        new Response(JSON.stringify({ access_token: "gho_ok", token_type: "bearer" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }),
    });
    assert.equal(okRes.status, 200);
  });
});
