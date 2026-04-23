# CLAUDE.md

Light orientation for Claude. Expand as the project grows.

## What this is

A public GitHub project for an independent, open-source record of the Plymouth Brethren Christian Church (formerly the Exclusive Brethren). The site organises the investigative journalism, court filings, parliamentary and regulator findings, and survivor testimony that already exist in public, and puts a citation on every claim. Branded **The Facts.** The repo is deliberately open so researchers, ex-members, journalists, and contributors can file issues, PRs, and corrections.

## Mission

> Organise, in public and on the same search terms, the record that journalists, regulators, courts, and survivors have already put on the public record about the Plymouth Brethren Christian Church. The original reporting happens elsewhere: ABC Four Corners, The Times, Stuff NZ, Guardian Australia, Byline Times, the NZ Royal Commission, the UK Charity Commission, the ATO, and survivor-run archives like PBCCstories.org and the Get A Life podcast. This site is the library that points to all of it, one citation per claim. First-person survivor testimony lives on this site via `/stories`, on-record by explicit written consent.

Four load-bearing commitments:

1. **Sourced, not strident.** Documented practice, not adjectives. Register discipline per [EDITORIAL_GUIDE.md](EDITORIAL_GUIDE.md). Severity claims cite a specific named case or ship with a visible `SourcePending` marker. Never silently.
2. **Aggregator, not originator.** The site does not claim original reporting. Every body paragraph attributes the reporting outlet that said it first. This is the fair-use posture: news reporting, criticism and commentary, research and education, stacked under § 107.
3. **Open by design.** Issues, PRs, corrections, and new evidence are welcome from anyone. A `CONTRIBUTING.md` and issue templates are a near-term must.
4. **Survivor-first, in-site.** First-person testimony is hosted on this site via `/stories`, on-record by explicit written consent, reviewed by the contributor before ship, and removable on request. The subject of every sharp sentence is the fellowship's rebrand, its leadership, or its institutions. Never a survivor.

## Status

Live: `/`, `/mission`, `/resources`, `/people`, `/people/bruce-d-hales`, `/legal`. ComingSoon placeholders elsewhere.

Planning docs:

- [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md). Tokens, typography, component patterns.
- [EDITORIAL_GUIDE.md](EDITORIAL_GUIDE.md). The editorial spine; read this before writing any copy.
- [SEO_STRATEGY.md](SEO_STRATEGY.md). Keyword clusters, title/meta formulas, schema plan.
- [INFRASTRUCTURE.md](INFRASTRUCTURE.md). Next.js on Vercel plus Supabase.
- [FETCH_PLAN.md](FETCH_PLAN.md). Runbook to capture real PBCC tokens from an open-egress machine.
- [RESEARCH_NOTES.md](RESEARCH_NOTES.md). Verified sources gathered so far.
- [MEMBERS_POLICY.md](MEMBERS_POLICY.md). Inclusion rule for `/people` profiles; read before adding a person.
- [FACTS.md](FACTS.md). The claims intake; every ✅ row is a candidate for `src/lib/sources.ts`.

## Working agreements

- Every factual claim gets a footnote. No invented citations: mark `{/* TODO: source */}` and render `<SourcePending />` instead.
- One register only (see EDITORIAL_GUIDE.md §1). Third-person, named subject, aggregator framing.
- No em-dashes in body copy. Colon, full stop, or parenthetical comma. Verbatim quotations from primary sources are the sole exception.
- Keep this file light. Long-form guidance lives in the docs above.
