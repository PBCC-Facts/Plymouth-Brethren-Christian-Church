# Fetch Plan. capturing the live PBCC site for authentic mirroring

## Why this document exists

This sandbox's network egress does not reach `plymouthbrethrenchristianchurch.org` or `web.archive.org`, so I cannot directly extract the design tokens, exact nav structure, or page markup that would let us mirror the site authentically. The tokens currently in `DESIGN_SYSTEM.md` are reasoned inferences, not measurements.

When you are next at a machine with open internet (laptop, or this agent running in a different environment without the allowlist), run the steps below and paste the outputs back into the thread. I'll replace the provisional tokens with measured ones and re-derive anything downstream.

This takes **~20 minutes end-to-end** if done once, and each output is small enough to paste into chat or commit to the repo.

---

## Pages to capture

Primary (structural mirror targets):

1. `https://www.plymouthbrethrenchristianchurch.org/`. homepage
2. `https://www.plymouthbrethrenchristianchurch.org/way-of-life/` (priority mirror target for SEO head-term match)
3. `https://www.plymouthbrethrenchristianchurch.org/way-of-life/our-beliefs/`
4. `https://www.plymouthbrethrenchristianchurch.org/way-of-life/our-neighbours/`
5. `https://www.plymouthbrethrenchristianchurch.org/our-members/`
6. `https://www.plymouthbrethrenchristianchurch.org/our-members/any-questions/`
7. `https://www.plymouthbrethrenchristianchurch.org/news/`
8. `https://www.plymouthbrethrenchristianchurch.org/contact/`

Secondary (context, optional):

9. `https://www.plymouthbrethrenchristianchurch.org/resource/statement-of-belief/`
10. `https://www.plymouthbrethrenchristianchurch.org/resource/bruce-d-hales/`
11. `https://staging.plymouthbrethrenchristianchurch.org/home/community/` (staging variant that surfaced in search. confirm it's live)

---

## What I need from each page

### A. Design tokens (capture once, from the homepage. they're site-wide)

1. **Brand hex values.** DevTools → Elements → pick any brand-colored element (nav link, CTA, heading accent) → Computed → copy `color` / `background-color` hex. Do this for:
   - Primary brand color (the green).
   - Brand dark (hover state of brand links or dark header variant).
   - Brand tint (any subtle tinted section background).
   - Body text color.
   - Muted text color (captions, bylines).
   - Any accent color not in the above.
2. **Font families.** Elements → `<head>` → find the Google Fonts `<link>` OR the stylesheet URL that contains `@font-face`. Paste:
   - The full `href` of the Google Fonts link (tells me exact families and weights), OR
   - `font-family` computed values for: a H1, a body paragraph, a nav link.
3. **Type scale.** For H1, H2, H3, body, small. copy Computed `font-size`, `line-height`, `font-weight`. Five elements × three values = 15 numbers. I can paste a DevTools snippet below to dump them all at once.
4. **Container widths.** Right-click main content → Computed → `width` and `max-width`. Do it at desktop width (1440px window) and mobile (375px window).
5. **Section padding.** Computed `padding-top` and `padding-bottom` on a main section wrapper.

### B. Page structure (one pass per page)

For each page:

1. **Full HTML.** In DevTools Elements panel: right-click `<html>` → Copy → Copy outerHTML. Paste into a file named `/tmp/pbcc/{slug}.html` and commit to a `research/captures/` branch or gist (not main. these are for reference only, we do not serve them). Or attach as PR comment.
2. **Nav markup.** Right-click the `<nav>` → Copy outerHTML. Paste here or commit. This gives me the exact dropdown structure.
3. **Footer markup.** Same, for the `<footer>`.
4. **Section order.** List the H1 and every H2 on the page in order, with a one-line gloss of what each section is about.
5. **Image inventory.** For each hero and section image: right-click → Inspect → note the natural width × height, the aspect ratio, and whether it's a CSS background or an `<img>`.

### C. Screenshots (fastest way to resolve ambiguity)

- Full-page screenshot at 1440×900 (DevTools → ⋮ → Capture full size screenshot).
- Full-page screenshot at 375×812 (mobile viewport emulation on).
- One each per priority page is plenty.

### D. Performance baseline (to beat)

Run Lighthouse (DevTools → Lighthouse → Analyze) on `/way-of-life`. Paste the four scores (Performance, Accessibility, Best Practices, SEO) and the Core Web Vitals numbers. Our build needs to beat or match these.

---

## One-shot DevTools snippet (paste into Console on any page)

Run this in the Chrome/Firefox DevTools Console on `/way-of-life/` after the page loads. It dumps the tokens we need in one JSON blob:

```js
(() => {
  const pick = (sel, ...props) => {
    const el = document.querySelector(sel);
    if (!el) return { selector: sel, missing: true };
    const cs = getComputedStyle(el);
    return Object.fromEntries([["selector", sel], ...props.map(p => [p, cs.getPropertyValue(p).trim()])]);
  };
  const nav = [...document.querySelectorAll("nav a")].map(a => ({
    text: a.textContent.trim(),
    href: a.getAttribute("href"),
    depth: a.closest("li ul") ? 2 : 1,
  }));
  const out = {
    url: location.href,
    tokens: {
      h1: pick("h1", "color", "font-family", "font-size", "font-weight", "line-height"),
      h2: pick("h2", "color", "font-family", "font-size", "font-weight", "line-height"),
      body: pick("main p, article p, .entry-content p", "color", "font-family", "font-size", "line-height"),
      navLink: pick("nav a", "color", "font-family", "font-size", "font-weight"),
      brandEl: pick("a[href='/'] img, .site-logo, header a", "color"),
      ctaBg: pick(".btn, .wp-block-button__link, button", "background-color", "color", "border-radius", "padding"),
      footerBg: pick("footer", "background-color", "color"),
    },
    container: {
      mainMaxWidth: pick("main, .site-main, #content", "max-width", "padding-left", "padding-right"),
    },
    fontsLinkHrefs: [...document.querySelectorAll("link[rel=stylesheet]")]
      .map(l => l.href)
      .filter(h => h.includes("font") || h.includes("googleapis")),
    nav,
    headings: [...document.querySelectorAll("h1, h2")].map(h => ({ tag: h.tagName, text: h.textContent.trim() })),
  };
  copy(JSON.stringify(out, null, 2));
  console.log("Copied to clipboard. Paste into a .json file or the PR comment.");
  return out;
})();
```

Paste the resulting JSON into the PR as a comment, or save as `research/way-of-life.tokens.json` in a follow-up commit. I'll re-derive DESIGN\_SYSTEM.md tokens against it.

---

## `wget` fallback (if browser DevTools not convenient)

From any machine with open internet:

```bash
mkdir -p ~/pbcc-mirror && cd ~/pbcc-mirror
wget --mirror \
  --convert-links \
  --adjust-extension \
  --page-requisites \
  --no-parent \
  --user-agent="Mozilla/5.0" \
  https://www.plymouthbrethrenchristianchurch.org/way-of-life/
```

This pulls HTML + CSS + images locally. Then:

- `grep -rhoE "#[0-9A-Fa-f]{6}" www.plymouth*/wp-content | sort -u` → every hex color used in stylesheets.
- `grep -rhoE "font-family:[^;]+;" www.plymouth*/wp-content | sort -u` → every font-family declaration.
- Share the HTML of the two priority pages (`way-of-life/index.html`, `index.html`) as gists or attach to the PR.

**Do not commit the mirrored HTML/CSS/assets to the repo.** We should not serve or distribute their content; we only need it as reference for matching our own original build. Keep captures in an ignored `research/captures/` dir (added to `.gitignore`) or a separate local location.

---

## What I will do with the outputs

Once you paste the JSON blob (or the `grep`'d hex list + nav markup), I will:

1. Replace the provisional palette in `DESIGN_SYSTEM.md` with measured hex values and regenerate the Tailwind `@theme` block.
2. Pin the exact font family + weights in `src/lib/fonts.ts` using `next/font` so we self-host and pass Lighthouse "avoid render-blocking resources."
3. Update the nav manifest in `src/lib/nav.ts` to match the real dropdown tree.
4. Update `DESIGN_SYSTEM.md` "What I couldn't verify" section → delete it.
5. Run a Lighthouse-on-our-build comparison against their Lighthouse numbers so we can claim parity or better in the README.

Total turnaround after you paste the outputs: ~30 min of build work, then I hand you back a preview deploy URL.

---

## Legal hygiene reminder for the fetch

- We are **capturing the public markup of a website for the purpose of criticism and commentary**. This is fine under both U.S. and most Commonwealth law.
- We are **not** scraping logged-in pages, evading access controls, or publishing the captured markup.
- Captures live in your local filesystem (or gitignored `research/captures/`). **never** in the deployed site's `public/` directory or the git-tracked tree.
- All images shipped with this site are original or licensed stock, not mirrored from the source.
- When in doubt, paste excerpts into a PR comment rather than committing files. comment contents are still auditable but don't ship.
