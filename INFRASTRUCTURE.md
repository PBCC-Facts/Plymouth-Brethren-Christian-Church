# Infrastructure. PBCC Parody / Criticism Site

## Summary

- **Frontend + hosting:** Next.js 15 (App Router) on **Vercel**, static-first with selective ISR where dynamic data is needed.
- **Backend:** **Supabase** (Postgres + Auth + Storage + Edge Functions) for intake forms, survivor-story moderation, rank-tracking history, and any admin surface we build.
- **Domain:** TBD (publisher to register; flag a "parody"-containing domain as an option for initial launch per `RESPONSE_TEMPLATES.md` posture).
- **DNS + SSL:** Vercel-managed.

Both services are chosen for the same reason: they give us speed-to-launch and low-cost scaling without pulling in infra work that distracts from the editorial and SEO goals.

---

## 1. Vercel

### Why

- Native Next.js deployment. SSG + ISR + Edge Middleware all first-class.
- Preview deployments on every PR (so corrections land in a reviewable URL, not a local-only diff).
- Edge cache and image optimization covered without extra config.
- Free tier is fine for initial traffic; Pro is inexpensive if traffic grows.
- Analytics option (first-party) or easy integration with Plausible/Fathom if we want CSP-strict, cookieless telemetry.

### Project configuration

- **Framework preset:** Next.js.
- **Build command:** `next build && next-sitemap` (the sitemap step produces `public/sitemap.xml` post-build).
- **Output:** Default (Next.js optimized output).
- **Node version:** 20 (pinned in `package.json` `engines`).
- **Environment variables** (see Secrets section):
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY` (server-only. used by the `/api/intake/*` route handlers to write submissions and mint signed uploads. **Must be set in Vercel for the contact form to accept submissions**; when absent the form degrades gracefully and shows the other channels.)
  - `INTAKE_TOKEN_SECRET` (server-only. HMAC secret for the contact form's anti-bot signed time token. Any long random string.)
  - `NEXT_PUBLIC_SITE_URL` (canonical origin. used by sitemap, OG, schema)
- **Preview deployments:** enabled for every PR. Use a password-protected preview if counsel prefers pre-launch review to be unindexed.
- **Production branch:** `main` (after we merge Step 1 and subsequent step PRs).
- **Git integration:** connect the repo; auto-deploy on merge to `main`.
- **Headers (`next.config.js`):** Content-Security-Policy including `supabase.co`, `*.supabase.co` for the backend, plus the standard `X-Content-Type-Options`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` minimal.
- **Redirects:** placeholder. mirror any structural URLs PBCC redirects for, and catch common ex-member search queries (`/cult`, `/shunning`, `/leaving`) → appropriate canonical pages.

### Pages strategy

- All **Register A** (parody) pages and all explanatory content under `/doctrine`, `/glossary`, `/timeline`, `/about-this-site`, `/sources`, `/faq` → **statically generated** at build time.
- `/litigation` → **ISR** with `revalidate: 3600` so case-status updates can land without a full deploy.
- `/contact` and any tip/submission forms → **dynamic** Route Handlers hitting Supabase.

---

## 2. Supabase

### Why

- Postgres for structured content that grows over time (cases, sources, submissions).
- Built-in Auth for a future admin surface (me + any co-editors; not public).
- Storage for any uploaded evidence (court filings PDFs, screenshots, etc.).
- Row-Level Security means even if an API key leaks, data stays safe.
- Runs close to Vercel's edge (both on global infra).
- Generous free tier.

### What we actually use it for (initial scope)

1. **Tip / evidence intake.** `/contact` form → `submissions` table. **Shipped (GitHub #30), current shape:** `kind`, `message`, `contact` (required; anonymised by the submitter's channel choice, e.g. a Proton address or Signal number, per migration `20260721140838`), `follow_up_ok` (consent to proactive follow-up), `attachment_paths[]` (private `submissions` storage bucket), `ref_code`, `triage_status`, `created_at`. **No name/email/ip_hash column: the v1 shape in the schema sketch below was replaced by migration `20260721132648_contact_intake.sql` because IP/PII contradict the page's anonymity promise.** Writes route through `src/app/api/intake/*` with the service role (anon key is default-deny); anti-bot is honeypot + signed time token + salted-hash rate limit, no CAPTCHA. Operator flow in [docs/INTAKE_RUNBOOK.md](docs/INTAKE_RUNBOOK.md).
2. **Newsletter signup.** `subscribers` table. Double opt-in via Supabase Edge Function sending a confirmation email through a transactional provider (Resend recommended).
3. **Survivor-story intake (opt-in public).** `testimonies` table with `is_public`, `is_moderated`, `display_name_policy` (anonymous / first-name / attributed), `consent_checkbox_version`. Default state is private; publishing requires explicit moderation.
4. **Source registry mirror.** `src/lib/sources.ts` stays the canonical source of truth (typed, versioned in git). Supabase holds a read-replica for the `/sources` page's optional search UI.
5. **Rank tracking history.** Small cron'd Edge Function writes weekly SERP positions for keyword clusters A–C into `rank_snapshots`. Lets us chart progress without paying for a dedicated SEO tool.
6. **Litigation tracker.** `cases` table with `title`, `jurisdiction`, `status`, `filed_at`, `summary`, `source_urls[]`. `/litigation` reads via ISR.

### Explicitly NOT in scope for Supabase (at least initially)

- Auth for regular site visitors. The site is fully public and read-only to the outside world.
- Comments. Comment threads on a site like this become a moderation liability; defer indefinitely.
- Member-identifying data. No fields that could constitute a register of PBCC members or ex-members. Survivor-story rows are keyed to the submitter only, not to other named people.

### Schema sketch (to confirm in session that stands up the DB)

```sql
-- tip / correction intake
create table public.submissions (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  message text not null check (char_length(message) between 10 and 10000),
  context text,
  source_url text,
  affiliation text check (affiliation in ('ex-member','current-member','journalist','researcher','other')),
  ip_hash text,
  status text default 'new' check (status in ('new','acknowledged','resolved','spam')),
  created_at timestamptz default now()
);

-- newsletter (double opt-in)
create table public.subscribers (
  email citext primary key,
  confirmed_at timestamptz,
  confirm_token text,
  unsubscribed_at timestamptz,
  created_at timestamptz default now()
);

-- survivor testimony (moderated before any publish)
create table public.testimonies (
  id uuid primary key default gen_random_uuid(),
  submitter_email citext,
  body text not null,
  display_policy text not null check (display_policy in ('private','anonymous','first-name','attributed')),
  consent_version text not null,
  is_public boolean default false,
  moderated_at timestamptz,
  moderated_by uuid references auth.users(id),
  created_at timestamptz default now()
);

-- litigation
create table public.cases (
  slug text primary key,
  title text not null,
  jurisdiction text,
  status text,
  filed_at date,
  summary text,
  source_urls text[],
  updated_at timestamptz default now()
);

-- SEO rank tracking
create table public.rank_snapshots (
  id bigserial primary key,
  keyword text not null,
  cluster char(1),
  position int,
  engine text default 'google',
  captured_at timestamptz default now()
);
```

RLS policies:

- `submissions`, `subscribers`, `testimonies`: no public read. Inserts via an Edge Function that enforces rate limits and captchas, not via anon key directly.
- `cases`: public read, no public write.
- `rank_snapshots`: public read (optional, if we ever ship a chart), admin-only write.

### Supabase integration pattern

- `src/lib/supabase/server.ts`. service-role client for Route Handlers / Edge Functions.
- `src/lib/supabase/browser.ts`. anon client for any isolated client-side reads (likely none in session 1).
- Zod schemas in `src/lib/schemas/` for every insert payload. Server-side validation before DB write.
- Rate limiting on the `submissions` and `testimonies` intake endpoints via Vercel Edge Middleware (IP + Upstash Redis if volumes grow; initially a simple per-IP daily cap in Postgres is fine).

### Secrets management

- Development: `.env.local` (gitignored from the first commit of the Next.js scaffold).
- Production: Vercel project env vars.
- Supabase `service_role` key **never** leaves server code. Route Handlers and Edge Functions only. No `NEXT_PUBLIC_` prefix.
- Rotation: quarterly on a calendar reminder, plus immediately on any incident.

---

## 3. Email / transactional

Recommend **Resend** for newsletter confirmations and tip-intake auto-acknowledgments:

- Clean API, React Email templates (matches our Next stack).
- Vercel integration.
- Cheap and transparent pricing.

Defer wiring this until session 3 or 4; session 2 focuses on the content build.

---

## 4. Analytics

Recommend **Plausible** (self-hosted or cloud):

- Cookieless, GDPR-friendly, small script.
- Clean CSP story.
- Good SEO/engagement signals without turning the site into a tracking surface (which would undermine our survivor-advocacy posture).

Alternative: Vercel Web Analytics (first-party). simpler to wire; fewer detailed event capabilities.

Decision deferred to post-launch; neither blocks the build.

---

## 5. Deployment cadence

- **Session 1 (this PR):** planning docs only. No Vercel project, no Supabase project yet.
- **Session 2:** scaffold Next.js, build components and `/way-of-life`. At end of session, connect GitHub → Vercel so a preview URL exists.
- **Session 3:** stand up Supabase project, wire `/contact` intake, add litigation tracker.
- **Session 4:** domain + production launch.

---

## 6. Questions for you

1. **Supabase scope:** the initial-scope list above (intake, newsletter, testimony moderation, rank tracking, litigation). drop anything you don't want?
2. **Testimony intake:** survivor stories are being brought in-site at `/stories` under explicit written consent. Confirm the Supabase-backed moderation queue remains the right mechanism (draft → consent-on-file → publish → removable on request), or whether a lighter form-only intake is sufficient for launch.
3. **Newsletter:** is that a channel you actually want to operate? It's valuable for launch announcements and litigation updates, but it's also an ongoing commitment.
4. **Analytics:** Plausible (cookieless, paid) vs Vercel Web Analytics (free, first-party, simpler) vs no analytics?
5. **Domain preference for initial launch:** parody-signaling (e.g. `pbcc-parody.org`, `plymouthbrethrencriticism.org`) vs a neutral publisher domain you already own?
