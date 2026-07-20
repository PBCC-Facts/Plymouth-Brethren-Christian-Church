# Design System. The Record

Status: **v2, shipped 2026-07-19.** This replaces the retired parody-era system that mirrored the PBCC's own site chrome (teal sidebar, Rockwell display, yellow parody banner). The site no longer imitates anyone. It looks like what it is: an independent record.

The identity in one line: **a black-and-white broadsheet on warm paper, with one brick-red accent and monospace citation chrome.**

Canonical token source: `src/app/globals.css` (`@theme` block). Variable *names* are inherited from v1 so page-level references keep working; the *values* define v2.

## 1. Color

| Token | Hex | Role |
| --- | --- | --- |
| `--color-surface` | `#f9f7f2` | Paper. The page surface. |
| `--color-ink` | `#171512` | Ink. Text, buttons, dark bands (footer, inverted sections), notice bar. |
| `--color-brand` / `--color-rust` | `#8f2b1f` | **The single accent.** Brick red. Eyebrows, footnote markers, CTAs-as-links, active nav, pending markers. Never used for large surfaces. |
| `--color-brand-hover` | `#6e2015` | Accent hover. |
| `--color-rule` | `#d9d4c9` | Hairline rules on paper. |
| `--color-purple` | `#45413a` | Legacy slot, remapped: warm dark gray. |
| `--color-blueviolet` | `#6e6a62` | Legacy slot, remapped: warm mid gray. |
| `--color-banner-bg` / `--color-banner-ink` | ink / paper | Notice bar. inverted, slim, unmissable. |

Rules: black-and-white does the identity work; red does the pointing. If a design choice adds a third color, it is wrong. Dark bands (ink background, paper text) are the inversion rhythm of the page: hero is paper, footer is ink, and at most two inverted bands between.

## 2. Typography

Three families, loaded via `next/font` in `src/lib/fonts.ts`:

| Token | Face | Role |
| --- | --- | --- |
| `--font-serif` | **Newsreader** (400–700, italics) | Display headlines, record-wall prose, long-form body. The journal voice. |
| `--font-sans` | **IBM Plex Sans** (400–700) | UI, nav, card bodies, general copy. |
| `--font-mono` | **IBM Plex Mono** (400–600) | Section labels, eyebrows, footnote markers, meta lines, badges. The citation/archive register. |

Heading defaults: Newsreader 600, tight leading (1.08), slight negative tracking. The mono register is what makes the site read as a *record* rather than a blog: anything that annotates evidence (labels, footnotes, "feeds: FACTS.md §8" lines, the ex-member badge) is mono, small, uppercase, letterspaced.

Links in prose: ink with a visible underline; accent red on hover. Links are never bare color changes.

## 3. Chrome

- **Notice bar** (`SiteBanner`): sticky, slim, ink background, paper text: "The Facts · Independent journalism and open-source transparency · Not affiliated with the PBCC." The affordance survives from v1; the styling no longer shouts.
- **Masthead** (`Masthead.tsx`): broadsheet header. Wordmark line ("The Facts." in Newsreader 700 + mono subject line "Plymouth Brethren Christian Church · the public record"), then a nav row of top-level destinations, uppercase Plex Sans 600, with an "All pages ☰" toggle for the full drawer. Active item: red with a 2px inset underline. The masthead ends in a 1px ink rule.
- **Hero** (`.hero`): paper, not dark. Mono eyebrow in red → huge Newsreader headline (clamp to 5rem, -0.02em tracking) → serif sub at 1.125rem → mono uppercase CTA underlined in red. Bottom edge: 3px double ink rule (the broadsheet fold line). The v1 circle visual and slider dots render as nothing (`display: none`); do not reintroduce.
- **Footer**: ink band. Mono eyebrow, serif invitation ("Corrections, new evidence, and tips make this record better."), inverted button, two-column nav, hairline, © line.

## 4. Components

- **`.btn`**: ink block, paper text, square corners, uppercase Plex Sans. Hover inverts (paper block, ink text, ink border). `--on-dark` starts inverted.
- **Section label** (`.section-label`): mono 0.75rem uppercase, letterspaced, hairline rule flexing right. Every section gets one.
- **Record wall** (`.record-wall` / `.record-row`): the signature component. 2px ink rule on top, hairline rules between rows; big serif year (or index number) left, mono outlet line in red + serif prose right. Used for the homepage record, /what-we-need requests, and any evidence ledger.
- **Footnotes** (`.footnote`): mono superscript numerals in red. `--pending` renders the ⚠ source-pending state in red.
- **Ex-member badge** (`ExMemberBadge.tsx` / `.exmember-badge`): bordered mono chip with a red dot and report count ("2 verified ex-member reports"). The visible form of the 🟣 tier in docs/REPORTS_SYSTEM.md. It is an evidentiary marker: never decorate with it.
- **Cards**: 1px ink border on paper (contact channels), or 1px paper-alpha border on ink (`.open-card`). Square corners everywhere. No shadows, no rounding, no gradients.

## 5. Iconography and imagery

- Iconography: line glyphs (`src/lib/glyphs.tsx`) inherit currentColor; use ink on paper, paper on ink, red only when the glyph itself marks evidence class.
- Imagery: original or licensed only, no PBCC photography (unchanged from v1). Diagrams (the /money graphs) are original SVG in this palette: ink nodes/edges on paper, red for flagged flows, mono labels.

## 6. Layout

- `--container-wide: 1200px`; prose measures at `--container-prose: 68ch`.
- Section rhythm: `clamp(3rem, 6vw, 5.5rem)` vertical.
- The page reads top-to-bottom as: notice bar → masthead → paper lede → alternating paper/ink bands → browse strip → ink footer.

## 7. What is retired from v1

- The teal palette, the vertical teal sidebar, Rockwell (and any PBCC-mirroring type choice), the yellow parody banner, the hero circle visual and slider dots, rounded accents, and the "mirror their site's chrome" strategy wholesale. Do not reintroduce any of it.
