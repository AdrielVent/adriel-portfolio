# Owner-Only `/admin/` OAuth Proxy Setup, Local Operational Proof & `Vnua-Connect` Compatibility

This document covers the architecture, production deployment steps, reproducible local verification, and `Vnua-Connect` (`spring-2027/launch`) compatibility boundary for the owner-only `/admin/` self-editing workflow in `adriel-portfolio`.

> **Evidence-tier notation (Global Rules §1):**
> - `[VERIFIED]` — Opened primary source, executed command, or fetched official URL directly on `2026-11-26`.
> - `[USER-STATED]` — Confirmed by Adriel Ventura in the project request (`ORIGINAL_REQUEST.md`).
> - `[ASSUMED]` — Engineering boundary assumption explicitly noted.
> - `[UNKNOWN]` / `[TBC]` — Live deployment value or off-repo item pending owner action.

---

## 1. Architecture & Security Model

1. **Why a static site needs an OAuth proxy (`[VERIFIED]`):**
   - `adriel-portfolio` deploys as static HTML, CSS, and native ES modules on GitHub Pages with `.nojekyll` (`DESIGN.md:1-12`, `.nojekyll`) `[VERIFIED]`.
   - GitHub's OAuth Web Application Flow requires two steps ([Authorizing OAuth apps](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps), accessed `2026-11-26`) `[VERIFIED]`:
     1. Browser redirects the user to `GET https://github.com/login/oauth/authorize` with `client_id`, `redirect_uri`, `scope=public_repo`, and a single-use cryptographic `state` parameter (24 random bytes generated via `window.crypto.getRandomValues` in `admin/admin.js:2687-2701`) `[VERIFIED]`.
     2. After GitHub redirects back with `?code=...&state=...`, exchanging the 10-minute `code` at `POST https://github.com/login/oauth/access_token` **requires `client_secret`** alongside `client_id`, `code`, `redirect_uri`, and `Accept: application/json`.
   - Because static client bundles are readable by any visitor (as GitHub warns in [Creating an OAuth app](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app), accessed `2026-11-26`), `GITHUB_CLIENT_SECRET` **never** resides in `admin/admin.js` or `assets/data/site.json` (`oauth-proxy/src/index.js:1-7`) `[VERIFIED]`.

2. **Stateless Cloudflare Worker token exchange (`oauth-proxy/src/index.js`) (`[VERIFIED]`):**
   - Holds `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` exclusively as encrypted Cloudflare Worker secrets declared via `secrets.required` in `oauth-proxy/wrangler.jsonc:11-16` `[VERIFIED]`.
   - Enforces exact `Origin` allowlist (`isAllowedOrigin`, `oauth-proxy/src/index.js:19-46`) and same-origin `redirect_uri` path prefix matching while rejecting embedded credentials, dot-segment traversal, `?query` parameters, and `#hash` fragments (`isAllowedRedirectUri`, `oauth-proxy/src/index.js:48-77`) `[VERIFIED]`.
   - Exchanges `code` with `https://github.com/login/oauth/access_token` (`Accept: application/json`) and returns `{ access_token, token_type, scope }` with `Cache-Control: no-store` and `Pragma: no-cache` (`oauth-proxy/src/index.js:84-94, 180-235`) `[VERIFIED]`.

3. **Owner-only permission gate & serial commits (`admin/admin.js`) (`[VERIFIED]`):**
   - Upon receiving `access_token`, `/admin/index.html` calls `GET https://api.github.com/user` and `GET https://api.github.com/repos/${owner}/${repo}` with `X-GitHub-Api-Version: 2026-03-10` (`admin/admin.js:2504-2548`) `[VERIFIED]`.
   - Editing and commit controls unlock **only** when `user.login === allowedLogin` (`"AdrielVent"`) **and** `(repoMeta.permissions.push || repoMeta.permissions.admin)` is `true`; any mismatch or HTTP error purges `sessionStorage` and locks the UI in `403 Access Denied` (`admin/admin.js:2516-2547`) `[VERIFIED]`.
   - Before any commit, `getAllDiagnostics()` validates JSON schemas (`validateSchema`), Rule 8 internal part numbers / vendor SKUs / fastener specs / company-program metadata (`GLB_HYGIENE_RULES`), `RESUME_MASTER.md` §9 stale/banned claims (while preserving `Lean Six Sigma White Belt`), and `commitMessage` (`lintCommitMessage`), disabling `#btn-quick-commit` and `#btn-commit` whenever diagnostics > 0 (`admin/admin.js:1120-1248`) `[VERIFIED]`.
   - Authorized writes execute strictly **serially** (`GET` current `sha` -> `PUT`/`DELETE /repos/${owner}/${repo}/contents/{path}`) via `commitOperationsSerially()` (`admin/admin.js:859-888`), following GitHub's Contents API concurrency rule ([Repository contents REST API](https://docs.github.com/en/rest/repos/contents), accessed `2026-11-26`) `[VERIFIED]`.

---

## 2. Step-by-Step Production Setup (R3)

### Step 1 — Register a GitHub OAuth App

Primary reference: [Creating an OAuth app](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) & [Scopes for OAuth apps](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps) (accessed `2026-11-26`) `[VERIFIED]`.

1. Sign in to GitHub as `AdrielVent` and open **Settings → Developer settings → OAuth Apps → New OAuth App**.
2. Fill in:
   - **Application name:** `adriel-portfolio Admin`
   - **Homepage URL:** `https://adrielvent.github.io/adriel-portfolio/`
   - **Authorization callback URL (production):** `https://adrielvent.github.io/adriel-portfolio/admin/`
   - *(Optional local dev)* Click **Add callback URL** (GitHub supports up to 10 callback URLs per OAuth App) and add `http://127.0.0.1:4173/admin/`.
3. Click **Register application**, copy the public **Client ID**, and generate a **Client Secret** (keep the Client Secret out of Git; store it only in your Worker/Netlify secret store in Step 2).

### Step 2 — Deploy the Cloudflare Worker OAuth Proxy (`oauth-proxy/`)

Primary references: [Cloudflare Workers Get Started](https://developers.cloudflare.com/workers/get-started/guide/), [Wrangler Configuration](https://developers.cloudflare.com/workers/wrangler/configuration/), [Workers Secrets](https://developers.cloudflare.com/workers/configuration/secrets/), and [Wrangler General Commands](https://developers.cloudflare.com/workers/wrangler/commands/general/) (accessed `2026-11-26`) `[VERIFIED]`.

1. Install Wrangler v4 (`^4.0.0`, required for `secrets.required` and `compatibility_date` in `oauth-proxy/wrangler.jsonc:5-16`) `[VERIFIED]`:
   ```bash
   cd oauth-proxy
   npm install
   ```
2. *(Optional local Worker preview)* Create a git-ignored `.dev.vars` file inside `oauth-proxy/` (listed in `oauth-proxy/.gitignore`) `[VERIFIED]` with your OAuth App credentials, then run:
   ```bash
   npx wrangler dev --port 8787
   ```
3. Authenticate Wrangler with your Cloudflare account:
   ```bash
   npx wrangler login
   ```
4. Upload the secrets **before** deploying (required when `secrets.required` is declared in `oauth-proxy/wrangler.jsonc:11-16`) `[VERIFIED]`:
   ```bash
   npx wrangler secret put GITHUB_CLIENT_ID
   npx wrangler secret put GITHUB_CLIENT_SECRET
   ```
5. Deploy the Worker and record the resulting `https://adriel-portfolio-oauth-proxy.<subdomain>.workers.dev` URL `[TBC: deployed workers.dev URL]`:
   ```bash
   npx wrangler deploy
   ```
6. Verify the Worker health endpoint responds HTTP `200`:
   ```bash
   curl -s https://adriel-portfolio-oauth-proxy.<subdomain>.workers.dev/health
   # Expected: {"ok":true,"service":"adriel-portfolio-oauth-proxy"}
   ```

### Alternative — Netlify Functions Equivalent

Primary references: [Netlify Functions Overview](https://docs.netlify.com/build/functions/overview/), [Functions API](https://docs.netlify.com/build/functions/api/), and [Environment Variables Overview](https://docs.netlify.com/build/environment-variables/overview/) (accessed `2026-11-26`) `[VERIFIED]`.

If you prefer hosting the proxy on Netlify instead of Cloudflare Workers:
1. Place a Web `Request`/`Response` function at `netlify/functions/token.mjs` that delegates directly to `handleRequest(req, { ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS, ALLOWED_REDIRECT_PREFIXES: process.env.ALLOWED_REDIRECT_PREFIXES, GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET })` (exported by `oauth-proxy/src/index.js:96`).
2. Add `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`, `ALLOWED_ORIGINS`, and `ALLOWED_REDIRECT_PREFIXES` in **Netlify Site Configuration → Environment variables** (Functions scope).
3. Point `site.json`'s `oauth.proxyUrl` to `https://<your-site>.netlify.app/.netlify/functions` (so `/admin/` posts to `${proxyUrl}/token`).

### Step 3 — Connect `assets/data/site.json` & Verify GitHub Pages Hosting

Primary references: [About GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages), [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), and [About GitHub Pages and Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll) (accessed `2026-11-26`) `[VERIFIED]`.

1. Update the **public** `oauth` block in `assets/data/site.json:28-35` (never put `client_secret` here) `[VERIFIED]`:
   ```json
   "oauth": {
     "githubOwner": "AdrielVent",
     "githubRepo": "adriel-portfolio",
     "branch": "main",
     "clientId": "<your-github-oauth-client-id>",
     "proxyUrl": "https://adriel-portfolio-oauth-proxy.<subdomain>.workers.dev",
     "allowedLogin": "AdrielVent"
   }
   ```
2. Confirm `.nojekyll` remains at repository root so GitHub Pages serves `admin/` and `assets/data/*.json` verbatim without Jekyll filtering `[VERIFIED]`.
3. Open `https://adrielvent.github.io/adriel-portfolio/admin/`, click **[Sign in with GitHub]**, authorize as `AdrielVent`, and confirm `Authorized: AdrielVent` appears. Signing in with any non-owner GitHub account will display `403 Access Denied` and keep all edit/commit controls locked.

---

## 3. Reproducible Local Operational Proof (R3)

All checks below were executed directly on `2026-11-26` after the final M4 code edits (`[VERIFIED]`):

### 3.1 Syntax & `oauth-proxy` Unit Tests (`node --test`)

Command:
```bash
cd /Users/vnua/Desktop/DATA/adriel-portfolio \
  && node --check admin/admin.js \
  && node --check oauth-proxy/src/index.js \
  && node --check oauth-proxy/test/index.test.mjs \
  && (cd oauth-proxy && node --test test/index.test.mjs)
```
Observed output (exit `0`):
- `Origin and redirect_uri helpers`: 3/3 passed (exact allowlist, path prefix without traversal, and `?query` / `#hash` rejection returning `400 invalid_redirect_uri`).
- `Worker handleRequest`: 10/10 passed (`OPTIONS` 204/403, `GET /health` without secret leakage, `POST /token` 403 disallowed Origin, 405 non-POST, 400 missing code / bad `redirect_uri`, 500 missing secrets, 200 valid exchange with `Cache-Control: no-store` + CORS, 400 upstream OAuth error mapping, default prefix fallback when `ALLOWED_REDIRECT_PREFIXES` is omitted).
- **Summary:** `tests 13 | suites 2 | pass 13 | fail 0` (`[VERIFIED]`).

### 3.2 `admin/admin.js` Schema, Lint, GLB Inspection & Serial Commit Checks

Command (`node --input-type=module` against `assets/data/*.json` and synthetic probes):
- **All 5 live JSON files pass with zero errors:**
  - `site.json -> valid=true (0 schema errs), lintOk=true (0 lint errs)`
  - `projects.json -> valid=true (0 schema errs), lintOk=true (0 lint errs)`
  - `models.json -> valid=true (0 schema errs), lintOk=true (0 lint errs)`
  - `experience.json -> valid=true (0 schema errs), lintOk=true (0 lint errs)`
  - `press.json -> valid=true (0 schema errs), lintOk=true (0 lint errs)`
- **Schema edge cases verified:** `projects.projects[].imageAlt: null` accepted when `image` is empty; `models[].format: "gltf"` and `caseStudyHref: null` accepted while `caseStudyHref: ""` is rejected (`[VERIFIED]`).
- **Rule 8 / §9 linter probes verified:**
  - Preserved: `"Lean Six Sigma White Belt"`, `"122.5 to 64.9 C"`, `"not validation; experimental validation pending"`, `"Live-round semifinalist"`, `"now in shop-floor use"`, `"assets/projects/gdt-c-frame-drawing.jpg"` (`ok: true`) `[VERIFIED]`.
  - Blocked in both payloads and `lintCommitMessage()`: synthetic internal part-number prefixes, vendor SKU formats, `ECN-xxxx` codes, overstated membership/competition claims, removed AI attribution strings, and dirty model title/ID metadata (`ok: false`) `[VERIFIED]`.
- **`inspectGlbArrayBuffer` verified:** Clean glTF 2.0 binary accepted; dirty Chunk 0 `buffers[0].name` containing company/fastener tokens rejected (`[VERIFIED]`).
- **`commitOperationsSerially` verified:** Staged binary + modified JSON + deleted binary produced strict sequential trace `GET -> PUT` (`assets/models/new.glb`), `GET -> PUT` (`assets/data/models.json`), `GET -> DELETE` (`assets/models/old.glb`) `[VERIFIED]`.

### 3.3 Ephemeral Local HTTP Server + Headless Playwright Proof (`/admin/index.html`)

Served `/Users/vnua/Desktop/DATA/adriel-portfolio` on `127.0.0.1` and executed headless Chromium Playwright suites (`T1-F6-01..05`, `T2-F6-01..07`, `T2-F7-01..05`) plus viewport/role/delete checks (`[VERIFIED]`):
- **`T1-F6-01..05` (5/5 PASS):** `/admin/index.html` booted `200 OK` with 0 console/404 errors; `DESIGN.md` `#f7f4ee` background, zero gradients, zero removed AI-attribution text, zero dark-mode toggles; unauthenticated `/admin/` locked all write controls and made 0 `PUT`/`DELETE` requests; `/admin/index.html?mock=1` unlocked editor offline with 0 GitHub requests; pre-save linter blocked synthetic part codes and banned claims and disabled commit buttons (`[VERIFIED]`).
- **`T2-F6-01..07` & `T2-F7-01..05` (12/12 PASS):** Confirmed OAuth authorize URL (`client_id`, `redirect_uri`, `scope=public_repo`, 48-char `state`); single-use CSRF `state` mismatch rejection (0 `/token` calls) and matching state exchange; rejection of non-owner login (`StrangerUser`) and owner without `push`/`admin`; `?mock=1` CRUD add → edit → delete lifecycle and deterministic reorder; pre-save rejection of part numbers, SKUs, and banned claims; serial `GET -> PUT` Contents API commit (`sha=abc123sha`, max concurrent `PUT = 1`); `oauth-proxy/src/index.js` Worker contract (`403` / `400` / `200` + CORS) (`[VERIFIED]`).
- **Responsive & extra checks (5/5 PASS):** `1200x800`, `860x900`, and `375x812` viewports passed with 0 console/HTTP errors, 0 `auditNoDesignTropes` violations (transparent `.button` tabs), 0 WCAG AA contrast failures, and 0 horizontal overflow; `?mock=1&mockRole=nonowner` locked UI with `403 Access Denied` and `data-admin-authenticated="false"`; deleting a model and checking `"Delete orphaned file ... from assets/models/ on commit"` emitted `DELETE assets/models/...` in `#commit-log` (`[VERIFIED]`).

To reproduce locally without GitHub credentials, run an HTTP server at the repo root and visit:
- `http://127.0.0.1:4173/admin/index.html?mock=1` (loopback mock owner mode)
- `http://127.0.0.1:4173/admin/index.html?mock=1&mockRole=nonowner` (mock `403 Access Denied` gate)

---

## 4. `Vnua-Connect` Compatibility Verification (R4, Read-Only)

Inspected `/Users/vnua/Desktop/Vnua-Connect` on branch `spring-2027/launch` (`git -C /Users/vnua/Desktop/Vnua-Connect rev-parse --abbrev-ref HEAD`) strictly **read-only** (`[VERIFIED]`). Note: `ORIGINAL_REQUEST.md:14` references the `Vnua-Connect` Spring 2027 launch build prompt (`VNUA_CONNECT_PROMPT.txt` is not stored on disk in this workspace `[TBC]`); all `Vnua-Connect` architectural claims below are verified directly against the `spring-2027/launch` repository files and `assets/data/projects.json:130-141` (`[VERIFIED]`).

### 4.1 Plane A (Compatible with `/admin/` + OAuth Proxy) vs. Plane B (Must Remain in Supabase)

| Layer in `Vnua-Connect` | Verified File & Line (`spring-2027/launch`) | Compatibility Verdict | Engineering Rationale |
|---|---|---|---|
| **Plane A — Static editorial & public client config** | `web/config.js:1-22` (`campus`, `signInCodeLength`, `signInEmail`, `founderName`, `founderEmail`); `web/js/constants.js:1-103` (`KNOWN_CLUBS`, `INTEREST_GROUPS`, `NEWCOMER`, `HELP`, `LOOKING`, `recogLabel`, `roleLabel`); `web/js/profile.js:61-130` (`FOUNDER_ROLES`, `DESIGN_NOTES`, `"Why this exists"` bio & Hofstra non-affiliation footer) | **Compatible** `[VERIFIED]` | These static editorial strings and public client settings contain zero PII or secrets. Externalizing them into repo JSON files edited via a separate `/admin/index.html` + `oauth-proxy/` gives Adriel git-backed self-editing without touching `web/app.js`. |
| **Dual-enforced server enums** | `web/js/constants.js:1, 77` (`"The server enforces the ones it stores (interests, perks, roles…)"`); `supabase/README.md:6, 55-58` (`campuses.email_domains`) | **Conditional** `[ASSUMED]` | Editorial labels/prompts (`KNOWN_CLUBS`, `FOUNDER_ROLES`, `DESIGN_NOTES`, `founderEmail`) need no SQL migration. Changing server-checked enums (`PERKS`, `INTERESTS`, `campuses.emailDomains`) still requires a matching Postgres migration (`docs/HANDOFF.md:30`). |
| **Plane B — Multi-tenant operational & moderation data** | `supabase/README.md:3-7`; `supabase/migrations/20261113000000_init.sql:219-307` (`profiles`, `clubs`, `memberships`, `events`, `rsvps`, `attendance`, `reports`); `20261202010000_security_grants.sql:8-24`; `20261202030000_security_founder_gate.sql:1-6` (`RLS` SELECT-only + `SECURITY DEFINER` RPCs + `founder_unlocked()`) | **Incompatible (Keep in Supabase)** `[VERIFIED]` | GitHub OAuth `public_repo` grants repo-wide writes to a maintainer, whereas students and club officers must only mutate scoped rows enforced by `auth.uid()`, `my_campus()`, and `SECURITY DEFINER` RPCs; private student emails and moderation reports cannot live in a public Git repository (`docs/SECURITY.md:14-56`). |

### 4.2 Preservation of `Vnua-Connect` CSP, Security Linters, and iOS Bundle Boundaries

1. **Strict `index.html` CSP preserved (`index.html:8`, `tests/security.spec.js:220-237`) (`[VERIFIED]`):**
   - `Vnua-Connect/index.html:8` enforces `default-src 'self'; script-src 'self'; ... connect-src 'self' https://mjxriwbyvfyndrwtqeeh.supabase.co wss://mjxriwbyvfyndrwtqeeh.supabase.co; ... object-src 'none'; base-uri 'none'; form-action 'none'`.
   - `tests/security.spec.js:220-237` fails if `index.html` adds any external `connect-src` host or external `<script src>`.
   - Mounting the self-editor on a **separate `/admin/index.html` route** leaves `index.html:8` completely untouched, while `/admin/index.html` uses its own `<meta http-equiv="Content-Security-Policy">` permitting `connect-src 'self' https://<worker>.workers.dev https://api.github.com` and keeping `script-src 'self'`, `object-src 'none'`, `base-uri 'none'`, and `form-action 'none'` (OAuth authorize navigates via `window.location.assign`, not `<form>`).
2. **`scripts/check-innerhtml.mjs` (`:1-18`) (`[VERIFIED]`):**
   - Scans `web/js/*.js` and `web/app.js`. Moreover, `admin/admin.js` uses zero `innerHTML` / `outerHTML` / `insertAdjacentHTML` (`createElement` + `textContent` only), so even if `/admin/` is added to `check-innerhtml.mjs` later, it introduces zero template-interpolation XSS risk.
3. **`scripts/check-client-secrets.mjs` (`:1-45`) (`[VERIFIED]`):**
   - Scans `CLIENT_PATHS` (`index.html`, `sw.js`, `manifest.json`, `capacitor.config.json`, `web`, `demo`, `marketing`, `VnuaConnect-iOS`) and fails on any non-`anon` JWT (`service_role` keys, private keys, SMTP/VAPID secrets). Because `/admin/` stores only public `clientId` + `proxyUrl` (identical to `web/config.js`'s public `anon` key rule) and keeps `GITHUB_CLIENT_SECRET` in Cloudflare Worker secrets, it satisfies `check-client-secrets.mjs`.
4. **`scripts/check-vendor.mjs` (`:1-13`) & Capacitor iOS `package.json:8` (`[VERIFIED]`):**
   - `/admin/` uses zero third-party JS dependencies, leaving `web/vendor/` SRI hashes untouched.
   - `package.json:8` (`"build:web": "rm -rf www && mkdir -p www && cp -R index.html manifest.json sw.js web *.png www/"`) copies only root app files and `web/`, automatically excluding a sibling `/admin/index.html` directory from the Capacitor iOS bundle.
5. **CORS & Static Hosting Parity (`supabase/functions/_shared/http.ts:5-23`, `.nojekyll`) (`[VERIFIED]`):**
   - `PROD_ORIGINS` (`https://adrielvent.github.io`, `capacitor://localhost`) and `oauth-proxy`'s `ALLOWED_ORIGINS` (`https://adrielvent.github.io`) share the same strict origin-allowlist model, and `.nojekyll` allows `/admin/` to serve directly alongside `web/` on GitHub Pages.

---

## 5. Claims & Verification Ledger (Global Rules §7)

| Claim | Tier | Source |
|---|---|---|
| GitHub OAuth Web Flow requires `client_secret` on `POST /login/oauth/access_token`; `public_repo` scopes writes to public repos | `VERIFIED` | `https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps` (`2026-11-26`), `https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps` (`2026-11-26`) |
| GitHub Contents API (`GET`/`PUT`/`DELETE /contents/{path}`) requires `sha` for updates/deletes and strictly serial requests | `VERIFIED` | `https://docs.github.com/en/rest/repos/contents` (`2026-11-26`) |
| `oauth-proxy` uses Wrangler v4 (`^4.0.0`), `wrangler.jsonc` `secrets.required`, and `wrangler secret put` before `wrangler deploy` | `VERIFIED` | `oauth-proxy/package.json:13`, `oauth-proxy/wrangler.jsonc:1-17`, `https://developers.cloudflare.com/workers/configuration/secrets/` (`2026-11-26`) |
| `oauth-proxy` unit tests pass `13/13` (`fail 0`) and syntax checks pass (exit `0`) | `VERIFIED` | `oauth-proxy/test/index.test.mjs`, `node --test test/index.test.mjs` (`2026-11-26`) |
| All 5 `assets/data/*.json` files pass `validateSchema` and `lintPortfolioPayload` (`0` errors); `Lean Six Sigma White Belt` preserved | `VERIFIED` | `admin/admin.js`, `assets/data/{site,projects,models,experience,press}.json` (`2026-11-26`) |
| `/admin/index.html` passes `T1-F6-01..05` (5/5), `T2-F6-01..07` & `T2-F7-01..05` (12/12), `1200x800`/`860x900`/`375x812` `DESIGN.md`/WCAG checks | `VERIFIED` | Headless Chromium Playwright run against local HTTP server (`2026-11-26`) |
| `Vnua-Connect` (`spring-2027/launch`) enforces strict `index.html:8` CSP (`connect-src`, `form-action 'none'`), CI linters, and Postgres RLS + `SECURITY DEFINER` RPCs | `VERIFIED` | `/Users/vnua/Desktop/Vnua-Connect/{index.html:8,tests/security.spec.js:220-237,web/config.js:1-22,web/js/constants.js:1-103,web/js/profile.js:61-130,scripts/check-innerhtml.mjs,scripts/check-client-secrets.mjs,scripts/check-vendor.mjs,package.json:8,supabase/migrations/*}` (`2026-11-26`) |
| Live `oauth.clientId`, deployed `oauth.proxyUrl`, and standalone `VNUA_CONNECT_PROMPT.txt` file | `UNKNOWN` | Not deployed / prompt file not on disk in workspace (`[TBC]`) |

### Could Not Verify
- Live end-to-end GitHub OAuth sign-in and `wrangler deploy` against Cloudflare Workers and `https://adrielvent.github.io/adriel-portfolio/admin/` (requires Adriel's interactive `wrangler login`, GitHub OAuth App creation, and live `GITHUB_CLIENT_SECRET`).
- `VNUA_CONNECT_PROMPT.txt` as a standalone file on disk (referenced in `ORIGINAL_REQUEST.md:14`; verified `Vnua-Connect` Spring 2027 launch architecture directly from `/Users/vnua/Desktop/Vnua-Connect` `spring-2027/launch` and `assets/data/projects.json:130-141`).

### Remaining `[TBC]` Items
- `[TBC: GitHub OAuth App clientId]` — Resolved by Adriel when registering the OAuth App in GitHub Developer Settings and updating `assets/data/site.json`.
- `[TBC: Deployed oauth-proxy proxyUrl]` — Resolved by Adriel after running `npx wrangler secret put GITHUB_CLIENT_ID`, `npx wrangler secret put GITHUB_CLIENT_SECRET`, and `npx wrangler deploy`, then updating `assets/data/site.json`.

### One Next Action
- Register the GitHub OAuth App, run `cd oauth-proxy && npm install && npx wrangler login && npx wrangler secret put GITHUB_CLIENT_ID && npx wrangler secret put GITHUB_CLIENT_SECRET && npx wrangler deploy`, and paste the resulting `clientId` and `proxyUrl` into `assets/data/site.json`.
