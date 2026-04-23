# CLAUDE.md

Light orientation for Claude. Expand as the project grows.

## What this is

A public GitHub project for a strategic parody / criticism site targeting the Plymouth Brethren Christian Church's PR rebrand. The site structurally mirrors the official PBCC site to win branded search, while the content is original satire + sourced journalism. The repo is deliberately open so researchers, ex-members, journalists, and contributors can file issues, PRs, and corrections.

## Draft mission (pending Trent's sign-off)

> Document — in public, on the same search terms, with a citation on every sentence — the doctrines, practices, and recent reporting the Plymouth Brethren Christian Church spends real money to soften. Family separation. Allegations of abuse. Defamation suits against critics. Tax and charity regulators at the door. Not vibes: footnotes. Every page a pull request away. First-person survivor testimony lives on this site, under explicit written consent, via `/stories`.

Four load-bearing commitments inside that mission:

1. **Sourced, not strident.** Documented practice, not adjectives. Register discipline per [EDITORIAL_GUIDE.md](EDITORIAL_GUIDE.md). Severity claims (abuse, SLAPP-style litigation) cite a specific named case or ship with a visible `SourcePending` marker — never silently.
2. **Name what's in the reporting.** Abuse allegations, defamation proceedings against journalists and ex-members, regulatory action (e.g. the 2024 ATO raid on UBT) are not subtext. Where the public record carries the claim, we carry it too, with the same citation.
3. **Open by design.** Issues, PRs, corrections, and new evidence are welcome from anyone. A `CONTRIBUTING.md` and issue templates are a near-term must.
4. **Survivor-first, in-site.** First-person testimony is hosted on this site via `/stories`, on-record by explicit written consent, reviewed by the contributor before ship, and removable on request. Nothing on this site trades a survivor's dignity for a joke. When in doubt, cut the joke.

## Status

Pre-code. Only planning docs exist:

- [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) — provisional tokens (pending live-site fetch)
- [EDITORIAL_GUIDE.md](EDITORIAL_GUIDE.md) — the editorial spine; read this before writing any copy
- [SEO_STRATEGY.md](SEO_STRATEGY.md) — keyword clusters, title/meta formulas, schema plan
- [INFRASTRUCTURE.md](INFRASTRUCTURE.md) — Next.js on Vercel + Supabase
- [FETCH_PLAN.md](FETCH_PLAN.md) — runbook to capture real PBCC tokens from an open-egress machine
- [RESEARCH_NOTES.md](RESEARCH_NOTES.md) — verified sources gathered so far

## Working agreements

- Every factual claim gets a footnote. No invented citations — mark `{/* TODO: source */}` and render `<SourcePending />` instead.
- Never mix Register C (snarky mirror) and Register B (explanatory) on the same page.
- Keep this file light. Long-form guidance lives in the docs above.
