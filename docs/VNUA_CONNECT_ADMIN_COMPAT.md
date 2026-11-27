# Vnua-Connect × Portfolio Admin — Compatibility Verification

> This document confirms that the portfolio `/admin` CMS approach is **fully
> compatible with and completely independent from** the Vnua-Connect app
> backend. No changes to `AdrielVent/Vnua-Connect` are needed or made.

---

## Summary

| Property | Portfolio `/admin` | Vnua-Connect |
|---|---|---|
| Auth mechanism | GitHub OAuth (Decap CMS + Cloudflare Worker) | Supabase Auth (email / magic link) |
| Write path | GitHub API → `main` branch JSON files | Supabase RLS + SECURITY DEFINER RPCs |
| Secrets storage | Cloudflare Worker encrypted secrets | Supabase Vault / environment variables |
| Data format | JSON files in repo (`assets/data/*.json`) | PostgreSQL tables via Supabase |
| Who can write | GitHub repo owner only (OAuth scoped to `AdrielVent` account) | Authenticated Supabase users per RLS policy |
| Deployment | GitHub Pages (static) | Supabase-hosted web app + native iOS |
| Repo | `AdrielVent/adriel-portfolio` | `AdrielVent/Vnua-Connect` |

---

## Why they don't interfere

1. **Completely separate repos.** The portfolio CMS writes to
   `AdrielVent/adriel-portfolio` only. Vnua-Connect's database is in
   Supabase; it has no dependency on the portfolio repo or GitHub Pages.

2. **Different auth layers.** The OAuth proxy for the portfolio uses a GitHub
   OAuth App scoped to `repo` permission on `adriel-portfolio`. It has no
   credentials for Supabase and cannot touch the Vnua-Connect database.

3. **Different write paths.** Portfolio writes → GitHub REST API → JSON files
   in a static site. Vnua-Connect writes → Supabase RPC (SECURITY DEFINER) →
   PostgreSQL. No shared network path.

4. **No shared secrets.** `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` live in
   the Cloudflare Worker. Supabase `ANON_KEY` / `SERVICE_ROLE_KEY` live in
   the Vnua-Connect environment. They are never co-located.

---

## Vnua-Connect ground rules (unchanged)

Per the Spring 2027 build brief:

- Branch: `spring-2027/launch` only. Never `main`, never force-push.
- No changes to the live Supabase project — local only (`supabase start`).
- New migrations only — never edit applied migrations.
- Every new RPC: explicit `REVOKE … FROM anon, authenticated, public` + `GRANT`.
- No AI/LLM features, no AI-generated copy in UI.

None of these rules are affected by the portfolio CMS setup.

---

## Conclusion

**No action required in `AdrielVent/Vnua-Connect`.** The portfolio admin panel
is a self-contained GitHub-Pages-only feature that uses a completely separate
auth and write pipeline. Both projects can coexist safely on the same GitHub
account.
