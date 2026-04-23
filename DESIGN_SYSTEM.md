# Design System — PBCC Parody / Criticism Site

Status: **measured** against the live PBCC site (re-captured 2026-04-23). Canonical token source is [`research/tokens.json`](research/tokens.json), derived from `research/captures/theme-public_frontend.css` and verified by mapping every NATO-lettered custom property (`--color-alpha` … `--color-hotel`) to the selectors and properties that consume it.

See [INFRASTRUCTURE.md](INFRASTRUCTURE.md) for hosting and [EDITORIAL_GUIDE.md](EDITORIAL_GUIDE.md) for voice.

> **Earlier confusion (worth flagging):** the theme's utility classes are legacy-named and misleading. `.bg-orange` paints **teal** `#4c868f`; `.bg-brown` paints **rust** `#a44200`. Trust the hex values, not the class names. This design system uses semantic names (`--color-brand`, `--color-ink`, …) that match the actual visual role.

---

## 1. Color palette (measured, role-correct)

| Authored token | Hex | Upstream | Role |
| --- | --- | --- | --- |
| `--color-brand` | `#4c868f` | `--color-bravo` | **Primary brand — teal.** Sidebar background, every `.btn`, active nav item, pagination current, breadcrumb separator, `.module__rich-media` bullet color, rich-media ordered-list counters. |
| `--color-brand-hover` | `#3e6f77` | (derived) | Button hover — slightly darker teal. |
| `--color-ink` | `#1b2327` | `--color-echo` | **Ink AND dark surfaces.** Body text; hero section background; `.site-footer` background; `.mobile-menu__content-wrapper`; the charcoal hamburger nub on top of the sidebar; sub-menu dropdown surface. |
| `--color-surface` | `#ffffff` | `--color-foxtrot` | Page background; text on dark surfaces. |
| `--color-purple` | `#534588` | `--color-alpha` | Secondary accent — news-module headings, active pagination dot, `<strong>` inside hero slides. |
| `--color-blueviolet` | `#5f6eb3` | `--color-hotel` | Featured-card post-date accent. Used sparingly. |
| `--color-rust` | `#a44200` | `--color-charlie` | **Link hover + form-focus border only.** Not a section color, not a CTA color. |
| `--color-rule` | `#dfe1e1` | `--color-delta` | The thin gray rule to the right of every `.heading__separator` label. Hairline dividers. |
| `--color-banner-bg` | `#f9d54a` | ours | Parody banner — sticky, off-palette, meta-layer. |
| `--color-banner-ink` | `#1a1a1a` | ours | Parody banner text. |

---

## 2. Typography (measured)

- **Body + section labels — Open Sans** (400, 700, italic 400). Loaded via `next/font/google` → `src/lib/fonts.ts`.
- **Display headings — Rockwell** (slab-serif). System-installed only; no `@font-face`. Fallback stack: `"Rockwell", "Rockwell Std", "Roboto Slab", "Courier New", serif`. Used on `h1–h6`, hero slide titles (up to 8rem–20rem), ordered-list counters inside rich-media blocks. We do **not** ship Rockwell — it is not freely redistributable; this matches the source site's own approach.

### Two distinct heading patterns — don't conflate them

1. **Display heading** — Rockwell slab serif. Used for hero titles, section-body headlines (e.g. the big quote in the Contact band, news card titles, community-card titles). Varies in size; generally large.
2. **Section label** (`.heading__separator`, our class: `.section-label`) — **Open Sans 700**, uppercase, ~15px, with a flex-grown light-gray rule extending to its right. This is the small label above each homepage section ("ABOUT US", "NEWS", "GET TO KNOW OUR COMMUNITY"). **Not** Rockwell, **not** centered, **not** rust-underlined. Mistaking this for a display heading is the single easiest way to get the visual wrong.

---

## 3. Layout primitives

| Token | Value | Notes |
| --- | --- | --- |
| `--container-wide` | `1280px` | Section wrappers, hero, footer. |
| `--container-prose` | `68ch` | Long-form body copy. |
| section padding | `clamp(3rem, 6vw, 6rem)` | Vertical padding on each section. |

### Sidebar — a distinctive two-block chrome

| | Top block | Bottom block |
| --- | --- | --- |
| Background | `--color-ink` (charcoal) | `--color-brand` (teal) |
| Contents | Hamburger toggle, white on charcoal | Brand — on desktop, full text `Plymouth Brethren Christian Church` in Rockwell rendered vertically using `writing-mode: vertical-rl; transform: rotate(180deg)`. On mobile, a horizontal wordmark. |
| Size | 96px tall (desktop) / 72px (mobile) | Fills remaining height |

Desktop: 80px fixed left column, flex-column, sticky to viewport.
Mobile: full-width top bar, flex-row (hamburger left, wordmark right).

### Hero — dark surface, serif display, teal CTA, circle visual

- Background: `--color-ink` charcoal.
- Left: eyebrow in teal small-caps → Rockwell display title (clamp to ~4.5rem) in white → sub-copy at 85% opacity → teal "Learn more about our way of life →" link underlined → four pagination dots (first purple, rest 35% white).
- Right: circle-clipped visual with a 6px teal ring. The real site clips it against a curved teal arc — we render a simple circle with a teal halo for now.
- The real hero is a Vue-hydrated slider (`<vue id="55">`); our build renders a single static slide.

---

## 4. Section-label component (real markup)

```html
<h2 class="heading__separator">About us</h2>
```

```css
.heading__separator {
  font: 700 1.6rem/1 "Open Sans", sans-serif;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  color: #000;
}
.heading__separator::after {
  content: "";
  flex: 1;
  height: 2px;
  background: #dfe1e1;
  margin-left: 4rem;
}
```

Our CSS-module equivalent is `.section-label` in [`src/app/globals.css`](src/app/globals.css).

---

## 5. Footer

- Background: `--color-ink` (same charcoal as the hero, so the hero-to-content-to-footer cadence reads dark → light → dark).
- Contact block: teal "CONTACT" eyebrow → large Rockwell invitation → teal `Get in touch` button.
- Nav column: two columns of small white links at 80% opacity.
- Bottom row: © line + source-repo link.

---

## 6. Buttons (`.btn`)

- Teal `--color-brand` background, white text.
- Open Sans 700, uppercase, 0.875rem, letter-spacing 0.04em.
- **Square corners.** No rounded variant in the source.
- Padding: ~0.9rem / 1.6rem.
- Hover: slightly darker teal (`--color-brand-hover`).

---

## 7. Parody banner (ours, not theirs)

Sticky top, full-width, non-dismissible. `--color-banner-bg` yellow. Bold uppercase lead ("PARODY / CRITICISM SITE"), then "Not affiliated …" inline, then an "About this site" link. Sits **above** the source-site chrome so it reads unambiguously as a meta-layer. Do not soften; do not collapse into the palette. This is the single most important fair-use affordance on the site.

---

## 8. Image strategy

- All imagery locally hosted in `/public/images`. **No reuse of PBCC photography.**
- Original photography or licensed stock (Unsplash/Pexels, verified licenses).
- Every image captioned `"Illustrative — not affiliated with PBCC"`.
- No identifiable private members. Bruce D. Hales + public litigants who have self-identified are fair game with clear attribution.
- `<Image>` components carry explicit width/height to prevent CLS.

---

## 9. Tailwind v4 translation

Tokens live in `src/app/globals.css` under `@theme`. The full file is canonical; the shape is:

```css
@import "tailwindcss";
@theme {
  --color-brand: #4c868f;
  --color-brand-hover: #3e6f77;
  --color-ink: #1b2327;
  --color-surface: #ffffff;
  --color-purple: #534588;
  --color-blueviolet: #5f6eb3;
  --color-rust: #a44200;
  --color-rule: #dfe1e1;
  --color-banner-bg: #f9d54a;
  --color-banner-ink: #1a1a1a;

  --font-serif: "Rockwell", "Rockwell Std", "Roboto Slab", "Courier New", serif;
  --font-sans: var(--font-open-sans), ui-sans-serif, system-ui, sans-serif;
}
```

`--font-open-sans` comes from `next/font/google` (see `src/lib/fonts.ts`). Rockwell is **not** bundled.
