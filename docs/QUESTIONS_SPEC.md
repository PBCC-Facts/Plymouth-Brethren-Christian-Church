# /questions. The question library spec.

Goal: rank for "People also ask" style queries (can Plymouth Brethren drink alcohol,
do Plymouth Brethren have arranged marriages, who runs the Plymouth Brethren Church,
etc.) with clean, fast, heavily cited explainer articles. Target 50+ articles;
first batch ~38.

## Where it lives

- Hub: `/questions` (indexable, in drawer + footer nav, linked from /way-of-life).
- Articles: `/questions/[slug]`, slug mirroring the query
  (`/questions/can-plymouth-brethren-drink-alcohol`).
- Content: one TypeScript data file per article in `src/data/questions/`,
  registered in `src/data/questions/index.ts`. Rendered by
  `src/components/site/QuestionArticleView.tsx` via
  `src/app/questions/[slug]/page.tsx`.

## Why data-driven, not freeform TSX

Every paragraph is a plain string with inline markers; the renderer converts
markers into the site's `Footnote` / `SourcePending` components and internal
links. A claim physically cannot ship with an invented `<a href>`: cites must
resolve to the global registry (`src/lib/sources.ts`) or to the article's own
`sources` block, or the build throws. Writers (human or AI) author content, not
markup.

### Inline marker syntax

| Marker | Renders as |
| --- | --- |
| `{{cite:source-id}}` | numbered superscript `Footnote` (page-scoped, first-occurrence numbering) |
| `{{pending:short note}}` | visible `SourcePending` marker |
| `[[/way-of-life|the rules wall]]` | internal `next/link` |

### Article shape (`src/data/questions/types.ts`)

- `question` is the H1, phrased exactly as searched.
- `shortAnswer`: 40–70 words, direct answer, cited. Rendered in a callout box at
  the top (featured-snippet bait) and reused as the FAQPage schema answer text.
- `sections`: 3–5 H2 sections, each heading carrying a secondary keyword.
- `related`: 3–5 internal links, rendered as a RelatedReading block.
- `sources`: article-local source entries (same shape as `src/lib/sources.ts`).
  Local ids win over global on collision. Promote recurring ones to the global
  registry later.

## Page anatomy (`/questions/[slug]`)

1. Breadcrumb (Home → Questions → question).
2. H1 = the question. Byline row: category chip, dateModified.
3. Short-answer callout (bordered box, "The short answer" label).
4. Body sections (H2 + paragraphs, max-w-prose).
5. Sources list: numbered, matching footnote order.
6. RelatedReading block.
7. Schema: Article + FAQPage (one Question/Answer, plain-text short answer)
   + BreadcrumbList.
8. Metadata via `buildPageMetadata({ topic: question, cluster: "B"|"C",
   register: "explanatory" })`.

## SEO wiring

- `/questions` is in `src/lib/routes.ts`; article URLs are appended to the
  sitemap from the questions index (priority 0.6, monthly).
- Hub groups articles by category with ItemList schema.
- Cannibalization guardrail: an article never targets a query owned by another
  page in its H1/title; it links to the owner instead (SEO_STRATEGY.md §8).

## Editorial stance (2026-07-21, per Trent)

This section is the ex-member side and the reported record. The PBCC publishes
its own side on its own site; we do not republish it here.

- **Verdict first.** The shortAnswer opens with the direct answer: "No.",
  "Yes, unequivocally.", "Only within the fellowship." Then the evidence.
- **No church pushback.** Do not include PBCC denials, rebuttals, or PR
  framing ("the church describes it as personal choice", "the PBCC rejects
  the term"). Exception: the PBCC's own publications remain first-class
  sources when they *document a rule or practice* (their own admission is
  evidence, not PR).
- **Report the strong label, attributed.** "Described by two Australian prime
  ministers, journalists, and ex-members as a cult" is the correct register:
  flat, unhedged, and cited. We report what others said; we do not soften it.
- **No positive-light institutional framing.** RRT, OneSchool, UBT are
  described per the investigative record, not per their brochures.

## Editorial rules (unchanged, enforced)

Everything in EDITORIAL_GUIDE.md applies: aggregator register, third person,
named subjects, no em-dashes, every claim cited or `{{pending:…}}`, survivor-first.
Gold-standard example: `src/data/questions/who-runs-the-plymouth-brethren-christian-church.ts`.
