# research/

Reference materials for building the parody site.

- `captures/` — raw HTML/CSS/assets pulled from the live PBCC site. **Gitignored.** Used only as local reference to match tokens and structure. Never served, never committed.
- `raw/` — deep-research dossiers and source-sensitive working notes. **Gitignored** (except its README). The pipeline is: raw dossier → extract sourced claims into [`FACTS.md`](../FACTS.md) → promote to `src/lib/sources.ts` → render via `<Footnote>` on a page. See [`raw/README.md`](raw/README.md) for naming and legal hygiene.
- Token extracts, nav manifests, and anything else derived from captures and safe to share lives at this level (not inside `captures/` or `raw/`).

See [`FETCH_PLAN.md`](../FETCH_PLAN.md) for the capture runbook and legal hygiene notes.
