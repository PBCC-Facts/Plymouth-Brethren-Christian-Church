# Design System — PBCC Parody / Criticism Site

Status: **provisional, pending visual verification from you.**

This sandbox cannot reach `plymouthbrethrenchristianchurch.org` directly (host is not in egress allowlist), so the tokens below are inferred from:

- Public descriptions of the current PBCC rebrand (your own characterization of "calm green", mainstream-corporate posture).
- Verbal descriptions in search results that confirm the page layout and nav structure (see SOURCES.md / research notes).
- Patterns typical of modern corporate-church PR microsites built in WordPress (which PBCC's site appears to be — `/wp-content/uploads/` paths surface in search results).

**Before component work starts, I need you to confirm or correct four things** (see "Questions for you" at the bottom).

---

## 1. Color palette (provisional)

The source site reads as a low-saturation, photography-led, mainstream-corporate palette anchored on a muted green. The parody brand mark should sit on the same palette; the **parody banner is deliberately off-palette** (high-contrast yellow/red) so it reads as a meta-layer, not part of the site.

Role                  | Token               | Proposed hex | Notes
---                   | ---                 | ---          | ---
Brand primary (green) | `--brand-primary`   | `#5B7F6A`    | Muted sage/forest. Used on primary headings, links, and small accents. Confirm against the real site.
Brand primary dark    | `--brand-primary-d` | `#3F5A4B`    | Hover / focus darkening.
Brand primary tint    | `--brand-primary-t` | `#E6EDE7`    | Soft section background tint.
Ink (body)            | `--ink`             | `#1F2A24`    | Near-black with a green undertone so it feels warm next to brand.
Ink muted             | `--ink-muted`       | `#4A544D`    | Secondary text, captions.
Surface               | `--surface`         | `#FFFFFF`    | Default page background.
Surface alt           | `--surface-alt`     | `#F6F5F1`    | Warm cream for alternating sections.
Rule                  | `--rule`            | `#D8D6CF`    | Hairline dividers.
Link                  | `--link`            | `#3F5A4B`    | Brand-dark by default; underline on hover.
Parody banner bg      | `--banner-bg`       | `#F9D54A`    | High-contrast yellow. Meta-layer.
Parody banner ink     | `--banner-ink`      | `#1A1A1A`    | On yellow.
Danger / warning      | `--danger`          | `#B23A2E`    | For source-flag UI, not page chrome.

Confirm the exact brand green — either paste me the hex from DevTools or a screenshot and I'll re-derive the palette.

## 2. Typography (provisional)

PBCC PR materials appear to use a humanist sans-serif, with headings in the same family at heavier weight — no serif. This is the dominant pattern for post-2020 corporate-church rebrands.

Role          | Proposed family                         | Weights    | Notes
---           | ---                                     | ---        | ---
Headings      | **Inter** (fallback: system sans)       | 600, 700   | Tight tracking, generous size ramp. Swap to a near-equivalent if the real site uses e.g. Poppins, Work Sans, or Source Sans.
Body          | **Inter**                               | 400, 500   | Same family for cohesion; common in modern sites.
Mono (code / footnote numerals) | **JetBrains Mono** or system mono | 400 | Only used in footnote tooltips and the `/sources` page.

Size ramp (rem; mobile → desktop via clamp):

Token | Clamp
--- | ---
`--fs-hero` | `clamp(2.25rem, 5vw, 3.75rem)`
`--fs-h1` | `clamp(1.875rem, 3.5vw, 2.75rem)`
`--fs-h2` | `clamp(1.375rem, 2.2vw, 1.875rem)`
`--fs-h3` | `clamp(1.125rem, 1.6vw, 1.375rem)`
`--fs-body` | `1.0625rem` (17px — generous for long-form)
`--fs-small` | `0.875rem`

Line heights: 1.15 on display, 1.3 on H1/H2, 1.65 on body.

Confirm the font family from the real site (View Source → look for Google Fonts link tag or `@font-face` in stylesheet). If you can paste me the family name I'll align exactly.

## 3. Layout primitives

Token | Value | Notes
--- | --- | ---
`--container-prose` | `68ch` | Way-of-life body copy max width. Comfortable long-form reading.
`--container-wide`  | `1200px` | Nav, footer, hero image-text sections.
`--container-narrow`| `48ch` | FAQ answers, standalone prose blocks.
`--space-section` | `clamp(3rem, 6vw, 6rem)` | Vertical section padding.
`--space-block` | `1.5rem` | Paragraph spacing, card padding.
`--gap-grid` | `clamp(1.5rem, 3vw, 3rem)` | Image/text two-col gap.
`--radius-image` | `0.25rem` | Slight corner rounding on images (matches PR-site convention).
`--radius-card` | `0.5rem` | Any card surfaces.
`--shadow-soft` | `0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06)` | Understated. Barely visible.

Mobile-first. All two-column image/text sections collapse to stacked on <768px.

## 4. Component patterns

**Hero.** Full-width photograph, overlaid H1 on a tinted gradient, no CTA button on the Way of Life page (just scroll). Photograph is warm, natural light, shows members in modest dress — we will not reuse PBCC photography; parody uses original imagery or licensed stock matched in composition. Caption beneath hero in `--ink-muted`.

**Image / text alternating sections.** Left-image/right-text → right-image/left-text pattern. Image aspect ~3:2 at desktop, stacked on mobile. Images are not captioned in the source; we will caption every image with a visibly-parody flag ("Illustrative — not affiliated") for fair-use hygiene.

**Values / beliefs lists.** Plain bulleted lists in body copy size, generous item spacing (~0.75rem between items). No icons in the source — PBCC uses text-only lists, contributing to the calm PR register.

**Buttons.** Flat, no gradient. Solid brand green background, white text. 12px vertical / 20px horizontal padding. Hover → brand dark + subtle shadow.

**Footnotes.** Superscript numeral that is:
- Keyboard-accessible (`<button>` not `<a>`).
- Hover / focus reveals a tooltip card with the full citation + outbound link.
- Clicking scrolls to the footnote list at the bottom of the page (with `:target` highlight).
- Mobile → tap opens tooltip; second tap follows link.

**ParodyBanner.** Sticky top, full width. `--banner-bg` yellow. Non-dismissible. 14px text, bold lead ("PARODY SITE"), inline link to `/about-this-site`. Does not obscure any content on scroll (the page content simply starts below it).

**RelatedReading cluster.** Footer block on every page. "Related on this site" H2, 3–5 internal links with a one-line gloss each. Internal-linking SEO + reader service.

## 5. Navigation structure (to mirror)

Primary nav (from the source, confirmed via search result metadata):

1. **Home** → `/`
2. **Way of life** → `/way-of-life/` *(has dropdown)*
3. **Our members** → `/our-members/` *(has dropdown; includes "Any Questions?")*
4. **News** → `/news/`
5. **Any questions?** → `/our-members/any-questions/` *(may be nested under "Our members" in the source — I'll confirm in the markup once you paste it, or mirror exactly)*
6. **Contact** → `/contact/`

**Unconfirmed:** the exact dropdown children under "Way of life" and "Our members." From public PBCC content I can infer children like "Our beliefs", "Our neighbours", "Rapid Relief Team", "OneSchool Global", "Living our beliefs – Family", but I need the real nav markup to get the order and labels precisely. In the interim, layout.tsx will render the dropdowns against a typed nav manifest in `src/lib/nav.ts` so we can correct without component changes.

Our parody nav **adds** one thing the source does not have: a visible "Resources" or "Survivor resources" top-level item routing to `/resources` (survivor resources + real outbound links). This is deliberate — it's part of what makes the site useful rather than just satirical.

## 6. Image strategy

- All imagery locally hosted in `/public/images`.
- No reuse of PBCC photography. Use original photography or licensed stock (Unsplash/Pexels with verified licenses).
- Every image has a `"Illustrative — not affiliated with PBCC"` caption.
- No images of identifiable real members without verified public-source status. Bruce D. Hales and public litigants who have identified themselves are fair to use with clear attribution; private members are not.
- All `<Image>` components have explicit width/height to prevent CLS.

## 7. Tailwind v4 translation

CSS custom properties above go in `src/app/globals.css` under `@theme`. Tailwind v4's `@theme` directive will expose them as utilities (`bg-brand-primary`, `text-ink`, etc.). Example skeleton:

```css
@import "tailwindcss";

@theme {
  --color-brand-primary: #5B7F6A;
  --color-brand-primary-dark: #3F5A4B;
  --color-brand-primary-tint: #E6EDE7;
  --color-ink: #1F2A24;
  --color-ink-muted: #4A544D;
  --color-surface: #FFFFFF;
  --color-surface-alt: #F6F5F1;
  --color-rule: #D8D6CF;
  --color-banner-bg: #F9D54A;
  --color-banner-ink: #1A1A1A;

  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  --radius-image: 0.25rem;
  --radius-card: 0.5rem;
}
```

## 8. What I couldn't verify and need from you

1. **Brand green hex.** From DevTools on the live site — or a screenshot I can sample.
2. **Heading font family name** (look for `<link rel="stylesheet" href="https://fonts.googleapis.com/...` in View Source, or a `font-family:` declaration in the stylesheet).
3. **Exact dropdown children** under "Way of life" and "Our members." Paste the HTML of `<nav>` if easy; otherwise I'll mirror publicly visible paths and we can correct.
4. **SEO keyword map** (see `SEO_STRATEGY.md`) — is there anything on the list that should be dropped for legal-exposure reasons before I start optimizing for it?

Once I have items 1–4 confirmed (or "proceed with your provisional tokens"), I'll build components.
