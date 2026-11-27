# `oauth-proxy` — GitHub OAuth Proxy for `/admin/`

Stateless Cloudflare Worker exchanging GitHub OAuth Web Flow authorization `code` values for access tokens on behalf of `/admin/`, without exposing `GITHUB_CLIENT_SECRET` in the static GitHub Pages bundle.

## Endpoints

- `GET /health` — Health probe returning `{ "ok": true, "service": "adriel-portfolio-oauth-proxy" }`.
- `OPTIONS /token` — Strict CORS preflight (`ALLOWED_ORIGINS`).
- `POST /token` — Expects `{ "code": "...", "redirect_uri": "..." }`, validates `Origin` and `redirect_uri`, exchanges with `https://github.com/login/oauth/access_token`, and returns `{ "access_token", "token_type", "scope" }` with `Cache-Control: no-store`.

## Local Tests (Zero Dependencies)

```bash
node --test test/index.test.mjs
```

## Deploy to Cloudflare Workers (Wrangler v4)

Requires Wrangler v4 (`^4.0.0`, declared in `package.json`) for `secrets.required` and `compatibility_date` in `wrangler.jsonc`. Run `wrangler secret put` **before** `wrangler deploy`:

```bash
npm install
npx wrangler login
npx wrangler secret put GITHUB_CLIENT_ID
npx wrangler secret put GITHUB_CLIENT_SECRET
npx wrangler deploy
```

Never commit `.dev.vars` or `.env*` files. See `../docs/ADMIN_OAUTH_SETUP.md` for full setup instructions and primary official references.
