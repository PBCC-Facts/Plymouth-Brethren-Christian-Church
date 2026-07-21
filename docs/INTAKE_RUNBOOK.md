# Intake runbook. /contact submissions.

How material sent through the `/contact` form is received, triaged, and moved
into the record. Built per GitHub #30; trust model per
[REPORTS_SYSTEM.md](REPORTS_SYSTEM.md).

## Where things live

- **Table `public.submissions`** (Supabase project `pbcc-facts`,
  `qdboaafvxkeirjonkvjb`): one row per submission. Columns: `kind`, `message`,
  `contact` (nullable; blank means anonymous), `attachment_paths[]`,
  `ref_code`, `triage_status` (`new` → `reviewed` → `archived`), `created_at`.
  **No IP, no user agent, ever.** RLS is default-deny; only the service role
  reads it.
- **Storage bucket `submissions`** (private): attachments at
  `submissions/<submission-id>/<filename>`. No public access, no anon policy.
- **Table `public.rate_limits`**: hourly hit counts keyed on a daily-salted IP
  hash. Not linkable to any submission; purged after 24h.

## The submit path (how a row gets there)

1. Form loads → `GET /api/intake/prepare` issues a signed time token.
2. Per file → `POST /api/intake/upload-url` mints a short-lived signed upload
   URL; the browser strips EXIF from JPEG/PNG, then uploads directly to the
   private bucket.
3. `POST /api/intake/submit` checks honeypot + token age (≥3s) + rate limit,
   then inserts the row with the service role and returns the `ref_code`.

All three handlers are marked no-log zones: they never record request
metadata. Server routes use `SUPABASE_SERVICE_ROLE_KEY`; the anon key cannot
read, insert, update, or delete submissions (verified: anon SELECT returns
`[]`, anon INSERT returns a 42501 RLS violation).

## Triage (editor, with the service role)

Read submissions from the Supabase SQL editor or a service-role client. Never
expose the service role to the browser.

```sql
select id, created_at, kind, ref_code, contact is not null as has_contact,
       array_length(attachment_paths, 1) as files, left(message, 200) as preview
from submissions where triage_status = 'new' order by created_at desc;
```

1. **New → reviewed.** Read the message. Download attachments **only inside a
   sandbox or throwaway VM** (treat every upload as hostile: malware, tracking
   pixels, embedded metadata). Signed download URL:
   `select storage.get_presigned_url('submissions', '<path>', 3600);` or mint
   from the dashboard.
2. **Classify against the trust model.** A tip that corroborates a FACTS.md row
   and comes from a contactable ex-member starts the verification flow
   (REPORTS_SYSTEM.md): a verified report can move a row to 🟣 with a count,
   never a name. Public-record material moves a row toward ✅.
3. **Move evidence off Supabase** into the off-repo encrypted evidence store.
   Supabase is the inbox, not the archive.
4. **Reviewed → archived** once the material is either filed off-repo or
   discarded. Purge the raw row and its attachments from Supabase after
   archiving so the live store holds the minimum.

## Removal requests

A submitter has only their `ref_code`. On a removal request quoting it:

```sql
select id, attachment_paths from submissions where ref_code = '<CODE>';
-- delete the storage objects at those paths, then:
delete from submissions where ref_code = '<CODE>';
```

Honour removal always, including after anything derived from it has shipped
(pull the 🟣 count / any excerpt too).

## Retention & housekeeping

- Raw submissions purged from Supabase once archived off-repo or discarded.
- `rate_limits` self-expires; run `select public.purge_rate_limits();` on a
  schedule (or a Supabase cron) as belt-and-braces.
- Orphaned uploads (files uploaded but never submitted) in `submissions/<id>/`
  with no matching row: sweep periodically and delete.

## Notifications (optional, set up separately)

A Supabase Database Webhook or Edge Function on insert can email the editor the
**row id only** (never message content) so triage is timely without content
leaving the secure store.

## Hard lines (from REPORTS_SYSTEM.md, restated)

- Identity data never enters git, FACTS.md, or any public table.
- The `contact` value is service-role-only and never published; it exists to
  enable verification, not attribution.
- The page's privacy promises are load-bearing: if the code changes, re-audit
  the four bullets in `ContactForm.tsx` against actual behaviour before ship.
- Transport-level logs (Vercel edge, Supabase) exist outside our control; that
  is exactly why the bullet says "with your submission" and why the encrypted
  channel (#16) exists for the highest-risk sources.
