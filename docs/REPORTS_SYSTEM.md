# REPORTS_SYSTEM.md. ex-member reports intake

Goal: centralise ex-member reports as a first-class evidence stream, safely. This extends the `/stories` consent pipeline (long-form, named, on-record testimony) with a second lane: **structured reports** that corroborate specific factual claims, publishable anonymously once the editor has verified the reporter is a genuine ex-member.

## Why a second lane

`/stories` is testimony: a person telling their story under their name. Reports are evidence: "the marriage checklist existed in my locality in 2019 and here is what was on it." Many ex-members will corroborate facts who will never publish a story. The claims record (FACTS.md) needs a way to count them.

## Trust model

Three tiers, rendered as visible badges wherever a claim relies on them:

| Tier | Meaning | Renders |
| --- | --- | --- |
| **Public record** | Court, regulator, parliament, major outlet, PBCC's own publication | standard `<Footnote>` |
| **Verified ex-member report** | Reporter's identity and membership history verified by the editor; identity on file, not published; report may be anonymous or pseudonymous on the site | `ExMemberBadge` (count shown: "3 verified ex-member reports") |
| **Unverified / activist-sourced** | Anonymous tips, activist-site claims not independently checked | `<SourcePending>` only; never a badge |

Verification of "verified ex-member" status: a recorded or written interview with the editor, plus enough biographical corroboration (locality, years, family connections checked against known-public record) that the editor would stand behind the classification. The verification record lives off-repo (see Safety), never in git.

Editorial ceiling: a claim supported **only** by ex-member reports ships with the badge and is phrased as reported ("verified ex-members report that…"), never as established fact. Two or more independent verified reports may upgrade a row in FACTS.md from 🔴 to 🟣; only public record upgrades to ✅.

## FACTS.md integration

New status marker: 🟣 **ex-member reported**. Meaning: at least one verified ex-member report on file supports the row; not yet publicly sourced. Rows carry a count and date, never a name: `🟣 ex-member reported (2 verified reports, 2026-07)`.

## Supabase design (sketch)

Private schema; nothing in this system is publicly readable by default.

- `reporters` (service-role only): `id`, `contact` (encrypted), `verification_status` (`pending | verified | rejected`), `verified_at`, `verifier_note`. **No membership-history detail in this table**; the interview record stays off-database entirely (editor's encrypted storage).
- `reports` (service-role only): `id`, `reporter_id`, `body`, `claim_refs text[]` (FACTS.md row slugs), `created_at`, `status` (`new | reviewed | corroborating | published_anon`), `consent_scope` (`internal_only | anonymous_public | attributed_public`), `redaction_note`.
- `public.claim_support` (the only public read path, via view): `claim_ref`, `verified_report_count`, `last_report_at`. Aggregate counts only. No report bodies, no reporter data, ever, in the public path.
- RLS: default deny; anon key gets `SELECT` on the aggregate view only. Intake happens through a server route using the service role; no client-side inserts with anon key.

## Intake flow

1. `/reports` page (future): explains the lanes, the trust model, and the safety posture. Form posts to a server route: free-text report + optional claim references + contact channel + consent scope.
2. Editor triages in a private admin view: verify reporter (interview), classify, link to FACTS.md rows.
3. On `corroborating`: FACTS.md row gains/updates its 🟣 line (manual for now; the repo stays the audit trail).
4. On `anonymous_public` consent + editorial review: excerpt may render on a claim page with the badge. Attributed publication only via the full `/stories` consent pipeline.

## Safety posture (hard lines)

- Identity data never enters the git repo, FACTS.md, or any public table. Aggregate counts only.
- Contact details encrypted at rest; service-role access only; no third-party analytics on intake pages.
- Reports are removable on request, always, including after publication.
- Current members reporting from inside get an explicit warning about device monitoring (UBT-managed devices are filtered/monitored) and an off-platform contact option.
- A subpoena/legal-demand policy consistent with `/legal`: the project stores the minimum it needs, so there is little to demand.

## Build order

1. Ship the badge + 🟣 status in FACTS.md and the `ExMemberBadge` component (no backend needed). **Done first; already usable for the maintainer's own verified interviews.**
2. `/reports` explainer page + email/Signal intake (no database).
3. Supabase schema + server-route intake + admin triage.
4. Aggregate `claim_support` view wired into claim pages.
