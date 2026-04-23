# research/raw/

**This entire directory is gitignored.** Nothing here ships. Nothing here is committed.

## What lives here

Raw research artefacts — primarily Claude deep-research dossiers in markdown form — used as input to the public parts of the site. These files can include:

- Claude deep-research investigation output (compass artifacts, etc.).
- Tip emails, cleaned transcripts, private correspondence forwarded by survivors or journalists.
- Working notes where a specific source has not yet been cleared for public attribution.
- Any material where the **methodology** (how the research was conducted, what queries were used, which sources were evaluated and rejected) is itself sensitive and should not be exposed.

## What does NOT live here

- Raw HTML / CSS / assets fetched from the live PBCC site — those go in `research/captures/` (also gitignored).
- Publishable research notes, sourced facts, citation-ready material — those go in [`FACTS.md`](../../FACTS.md) at the repo root.
- Anything that belongs on a page — that goes in `src/app/**/page.tsx`.

## The pipeline

```
research/raw/*.md          (local only, gitignored)
        ↓  editor reads, extracts sourced claims
FACTS.md                   (committed — public source of truth)
        ↓  claims reach ✅ status
src/lib/sources.ts         (committed — typed registry)
        ↓  rendered via <Footnote id=... />
Published page             (committed, deployed)
```

## Naming convention

Drop files in as `YYYY-MM-DD-short-topic-slug.md` so chronological sort = research order. Example: `2026-04-23-bruce-hales-dossier.md`.

## Legal hygiene

- Do not commit this directory.
- Do not paste its contents into issue comments or PR descriptions without first cleaning sources.
- If a file here contains identifiable private-member information, treat it as confidential — share only under survivor-first consent norms.
