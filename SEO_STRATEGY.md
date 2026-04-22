# SEO Strategy — PBCC Parody / Criticism Site

The strategic goal: **rank on branded PBCC searches so that researchers investigating the church find this site as a counterweight to the PR rebrand.** Secondary goal: rank on doctrine-specific and practice-specific long-tail queries so that ex-members and journalists land on explanatory content.

Parody alone doesn't rank. Depth + structure + schema + internal linking + page speed + a sustained supporting content library is what does.

---

## 1. Title tag and meta formula

**Title formula (all pages):**

```
{page-topic} — Plymouth Brethren Christian Church (parody · criticism · survivor resources)
```

Keeps the brand term in every title (essential for ranking on it) while making the parody/criticism nature unambiguous to both Google's deceptive-content classifier and human readers.

**Meta description formula:**

```
A satirical mirror and critical companion to the Plymouth Brethren Christian Church's PR site. Original parody and documented commentary on {page topic}, with sources. Not affiliated with the PBCC.
```

Both formulas are enforced by `src/lib/seo.ts` via a `buildPageMetadata({ topic, description, slug })` helper. Any page that opts out of the formula has to do so explicitly and document why.

**Slug strategy:**

- Mirror PBCC slugs where they exist (`/way-of-life`, `/our-members`, `/news`, `/contact`) to concentrate topical authority on the same URL tokens PBCC targets.
- New slugs for supporting content, chosen for keyword match (`/glossary`, `/faq`, `/timeline`, `/doctrine/separation`, `/litigation`, `/about-this-site`).

---

## 2. Keyword cluster map

Clusters ordered by strategic priority. Each cluster has a **primary** target page (the one we're optimizing to rank) and **supporting** pages (where internal links flow from and from which topical authority accumulates to the primary).

### Cluster A — Brand head terms (highest priority)

Primary target: **Homepage** `/`

Queries | Intent | Notes
--- | --- | ---
plymouth brethren christian church | navigational / informational | PBCC owns this; our goal is top-3 organic below their site.
plymouth brethren | informational | Older brand; still searched heavily. We target because PBCC owns the new brand and this is where investigative intent concentrates.
pbcc | navigational | Initialism. Ambiguous (other PBCCs exist); target lightly.
plymouth brethren church | informational | Variant.
exclusive brethren | informational | Former name; enormous search volume historically. Major target.

Supporting: `/about-this-site`, `/timeline`, `/faq`, `/glossary`.

### Cluster B — Brand + investigative modifiers (highest commercial SEO value)

Primary targets: **Homepage**, **FAQ**, **doctrine pages**.

Queries | Target | Notes
--- | --- | ---
is plymouth brethren a cult | FAQ (anchor question), Homepage | Classic PAA query.
plymouth brethren cult | FAQ, Homepage | High intent.
plymouth brethren shunning | /doctrine/withdrawing-from | Long-tail, very high intent.
leaving plymouth brethren | FAQ (anchor) + future /leaving page | Survivor-intent; serve them seriously.
plymouth brethren abuse | /litigation + FAQ | Tread carefully — source every claim.
plymouth brethren controversy | Homepage + /timeline | Broad.
exclusive brethren cult | FAQ, Homepage | Former-name variant.

### Cluster C — Doctrine and practice (long-tail, sustained traffic)

Primary targets: **`/doctrine/[slug]`** and **`/glossary`**.

Queries | Target
--- | ---
doctrine of separation plymouth brethren | /doctrine/separation
2 timothy 2:19 brethren | /doctrine/separation (anchor)
withdrawing from brethren | /doctrine/withdrawing-from
shut up brethren | /doctrine/withdrawing-from (anchor)
brethren dress code | /way-of-life (anchor) + /glossary
brethren head covering | /glossary + /way-of-life
lord's supper brethren | /doctrine/lords-supper
brethren rules | /glossary + /way-of-life
can plymouth brethren vote | /faq
can plymouth brethren use the internet | /faq
brethren streamline3 | /doctrine/technology (future)

### Cluster D — People

Primary targets: specific pages.

Queries | Target
--- | ---
bruce hales | /doctrine/man-of-god (with strong H2 section on Bruce D. Hales) + /timeline entry
bruce d hales | same
man of god brethren | /doctrine/man-of-god
john hales brethren | /timeline
james taylor jr brethren | /timeline
aberdeen incident brethren | /timeline

Author pages for living non-public persons are not created. We describe roles and cite public events.

### Cluster E — Adjacent institutions

Queries | Target
--- | ---
oneschool global | /doctrine/education (future) + mentioned on /way-of-life
universal business team | /doctrine/business-network (future)
ubt brethren | same
rapid relief team | mentioned on /way-of-life with critical context + footnotes

### Cluster F — Litigation and regulation

Primary target: **`/litigation`**.

Queries | Target
--- | ---
bawtinheimer brethren | /litigation
preston down trust charity commission | /litigation
australian senate inquiry brethren | /litigation
ato raid ubt | /litigation (March 2024 ATO access-without-notice action)
plymouth brethren charity commission | /litigation

### Cluster G — Documentary / media

Primary targets: **FAQ**, **news commentary** (future).

Queries | Target
--- | ---
big brethren four corners | FAQ + future /media page
abc plymouth brethren documentary | same
behind the exclusive brethren | /timeline + FAQ
new statesman plymouth brethren | /about-this-site (press-citations section)

---

## 3. On-page SEO checklist (every page)

- [ ] Title follows the formula.
- [ ] Meta description follows the formula.
- [ ] `<link rel="canonical">` points to the page itself.
- [ ] One H1, cluster-primary keyword in it.
- [ ] At least 2 H2s referencing secondary keywords from the cluster map.
- [ ] Article schema (JSON-LD). Parody pages use `genre: "satire"`.
- [ ] BreadcrumbList schema.
- [ ] Per-page Open Graph: title, description, image with "PARODY" or "CRITICISM" overlay.
- [ ] First mention of "Plymouth Brethren Christian Church" in body copy links to homepage.
- [ ] First mention of any doctrine links to its explainer page.
- [ ] `RelatedReading` block at bottom with 3–5 internal links.
- [ ] All outbound citations use `rel="noopener"` (not `nofollow` — journalism, not manipulation).
- [ ] LCP image has explicit width/height.
- [ ] No client-side JS except what the page actually needs.

## 4. Technical SEO

- **Sitemap.** Generated by `next-sitemap` at build. Submitted to Google Search Console + Bing Webmaster Tools at deploy.
- **robots.txt.** Allow all. Sitemap URL included.
- **Canonical.** Every page self-canonical.
- **hreflang.** Not in scope for session 1 (English only). When we add translations, add hreflang.
- **404.** Custom 404 that lists the top-5 site pages and the Search Console-feedback widget.
- **Page speed budget.** LCP < 2.5s, CLS < 0.1, INP < 200ms. Lighthouse SEO: 100. Lighthouse Performance: ≥ 95 on `/way-of-life` post-build.
- **Mobile-first.** Tested at 375px.
- **Image hosting.** All in `/public/images`, served via `next/image`.
- **Fonts.** `next/font` with subset and display: swap.

## 5. E-E-A-T signals

PBCC topics sit next to YMYL (life decisions, mental health, family separation). Google rewards Experience, Expertise, Authoritativeness, Trust on these. Our signals:

- **Publisher identity:** full name, credentials, attorney relationship, documentary contribution, PBCCstories.org operator — on `/about-this-site` with Person schema and `sameAs` links to press appearances.
- **Sources on every claim.** Public, checkable, stable URLs where possible.
- **Clear statement of purpose and non-affiliation.**
- **Contact page with real response.** (Low-friction for journalists and regulators.)
- **Consistent update cadence.** `dateModified` on every page; at least quarterly review.

## 6. Off-site (post-launch — out of scope for session 1, tracked here)

- Backlink from PBCCstories.org immediately at launch (publisher controls).
- Outreach to ex-PBCC bloggers/podcasters for organic links.
- Wikipedia "Further reading" pitch via talk page with full disclosure; do not edit main article ourselves.
- Reddit (`r/exbrethren` and adjacent) organic engagement only, never seeded.
- Journalist outreach when a page is newsworthy (e.g. litigation tracker).
- Podcast appearances (each = a show-notes backlink).

## 7. Measurement

On deploy:

1. Verify Google Search Console + Bing Webmaster Tools.
2. Submit sitemap.
3. Baseline current SERP positions for every keyword in clusters A–C via a free rank tracker (or manual incognito checks). Record in `SEO_STRATEGY.md` under a new "Rankings baseline" section.
4. Re-check at 30 / 60 / 90 / 180 days. Adjust cluster priorities based on what's moving.
5. Search Console queries report weekly for 90 days → find unexpected queries we rank for, build dedicated pages for the strongest.

## 8. Keyword cannibalization guardrail

When two pages could target the same query, decide up-front which one owns it. The losing page links to the winner in its body copy, in the RelatedReading block, and never targets the query in its title/H1. Keep this list in sync as we add pages.

## 9. Questions for you before I start optimizing

1. Is there anything on the keyword cluster list you'd rather not target yet (e.g. litigation-specific terms that might be premature, or people's names where you want to defer until counsel weighs in)?
2. Do you want the homepage to target the head term `plymouth brethren christian church` directly, or to target a slightly softer variant like `plymouth brethren christian church — criticism and survivor resources` and push the head term onto `/about-this-site`? Head-term targeting maximizes reach but is the most legally visible posture.
3. Are there keyword clusters we should add that aren't in my map (e.g. specific countries, specific congregations, Rapid Relief Team scrutiny)?

Once I have answers (or "proceed with the map as drafted"), I'll wire `lib/seo.ts` to enforce the formulas and start on components.
