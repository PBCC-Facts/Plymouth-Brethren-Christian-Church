# CLAUDE.md

Light orientation for Claude. Expand as the project grows.

## What this is

A public GitHub project for a strategic parody / criticism site targeting the Plymouth Brethren Christian Church's PR rebrand. The site structurally mirrors the official PBCC site to win branded search, while the content is original satire + sourced journalism. The repo is deliberately open so researchers, ex-members, journalists, and contributors can file issues, PRs, and corrections.

## Draft mission (pending Trent's sign-off)

> To document — in public, in plain view, and in the PBCC's own PR register — the doctrines and practices the Plymouth Brethren Christian Church spends real money to soften. Every claim is sourced. Every page is contributable. The goal is a durable counterweight to the rebrand: one that ranks on the same search terms, reads credibly to first-time researchers, takes survivors seriously, and invites the world to help keep it accurate.

Three load-bearing commitments inside that mission:

1. **Sourced, not strident.** Documented practice, not adjectives. Register discipline per [EDITORIAL_GUIDE.md](EDITORIAL_GUIDE.md).
2. **Open by design.** Issues, PRs, corrections, and new evidence are welcome from anyone. A `CONTRIBUTING.md` and issue templates are a near-term must.
3. **Survivor-first.** Nothing on this site trades a survivor's dignity for a joke. When in doubt, cut the joke.

## Status

Pre-code. Only planning docs exist:

- [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) — provisional tokens (pending live-site fetch)
- [EDITORIAL_GUIDE.md](EDITORIAL_GUIDE.md) — the editorial spine; read this before writing any copy
- [SEO_STRATEGY.md](SEO_STRATEGY.md) — keyword clusters, title/meta formulas, schema plan
- [INFRASTRUCTURE.md](INFRASTRUCTURE.md) — Next.js on Vercel + Supabase
- [FETCH_PLAN.md](FETCH_PLAN.md) — runbook to capture real PBCC tokens from an open-egress machine
- [RESEARCH_NOTES.md](RESEARCH_NOTES.md) — verified sources gathered so far

## Working agreements

- Every factual claim gets a footnote. No invented citations — mark `{/* TODO: source */}` instead.
- Never mix Register A (parody) and Register B (explanatory) on the same page.
- Keep this file light. Long-form guidance lives in the docs above.
