# FACTS.md — sourced claims intake

Working document for any factual claim that will appear on the site. The goal: every claim on the site maps to a row in this file, and every row maps to a public-source citation that we can link.

Ownership: Trent populates (or approves pasted research); Claude converts rows into the typed source registry at `src/lib/sources.ts` during build passes.

> **Rule (from [EDITORIAL_GUIDE.md](EDITORIAL_GUIDE.md) §2):** every factual claim on the site has a footnote. Unsourced claims are marked `{/* TODO: source */}` in the MDX and live here until verified. **Do not invent citations.**

---

## How to add a fact

Drop a row under the most relevant section. Format:

```
### Claim
<one-sentence version of the claim as it would appear on the site>

**Sources**
- <URL>  — <outlet>, <date>, <author> (if known)
- <URL>  — <secondary source if available>

**Notes / caveats**
- Anything that affects how the claim should be phrased, qualified, or dated.
- Contested numbers: note the range and which source carries which end of it.

**Pages where this claim appears (or will)**
- `/` hero
- `/way-of-life` §1
```

If you have a PDF, screenshot, or archived page, drop it into `research/evidence/` (gitignored — those are references, not shipped assets) and reference the filename here alongside the live URL.

---

## Status legend

- ✅ **Verified** — two independent sources, or one primary (court ruling / inquiry / PBCC's own publication) + one journalism source.
- 🟡 **Single source** — acceptable for uncontested factual matters (dates, locations, leadership succession); borderline for severity claims.
- 🔴 **Unsourced / TODO** — on the site only if the paragraph is also marked `{/* TODO: source */}` in the MDX. Convert to ✅ before the paragraph ships to production.

---

## 1. Membership & scale

### Claim
The PBCC has approximately 55,000 members across 19 countries.

**Status** — 🟡 single source (PBCC's own)
**Sources**
- https://www.plymouthbrethrenchristianchurch.org/ — PBCC's own hero copy, captured 2026-04-23.
- _Needed: independent corroboration — census returns, academic estimate, or CDAMM article._

**Notes**
- PBCC has used both "54,000" and "55,000+" in recent years; pick the figure they use most recently on their own site and cite it as their self-report.
- Distinguish "members" from "former members / survivors" clearly — see §2.

**Pages**
- `/` hero, `/` About Us

---

### Claim
The PBCC has produced at least <N> identifiable ex-members / survivors since <year>.

**Status** — 🔴 TODO: source
**Sources**
- _Needed. Candidates to review:_
  - In-site `/stories` intake once contributors are on-record (this site is becoming the primary testimony home).
  - Senate of Australia public submissions (2006–2008 inquiries + any since).
  - UK Charity Commission Preston Down Trust case record (2012–2014).
  - Academic surveys (Bachelard, Tchappat, etc.) — name a specific figure.

**Notes**
- Trent's draft hero copy uses "1,000 survivors". Needs a pinned figure before it ships. Possible softened phrasing pending source: "hundreds of documented former members" or "at least <N> on public record".

**Pages**
- `/` hero (currently marked TODO).

---

## 2. Leadership & doctrine

### Claim
The current World Leader is Bruce D. Hales, known within the fellowship as the "Man of God".

**Status** — ✅ verified
**Sources**
- https://www.plymouthbrethrenchristianchurch.org/resource/bruce-d-hales/ — PBCC's own resource page.
- https://www.newstatesman.com/long-reads/2023/08/escaping-eden-exclusive-brethren — New Statesman long-read.
- https://www.thepost.co.nz/nz-news/350113380/exclusive-brethren-told-create-crisis-generate-profits — The Post (NZ).

**Notes**
- Use "the current World Leader, Bruce D. Hales, known within the fellowship as the Man of God" for the full gloss on first use; shorter forms after.

**Pages**
- `/` About Us, `/way-of-life/our-beliefs`, `/about-this-site`, `/our-members`, `/our-members/bruce-d-hales`.

---

### Claim
Bruce D. Hales assumed the leadership in 2002 on the death of his father, John S. Hales.

**Status** — ✅ verified (single primary + supporting reporting)
**Sources**
- https://www.plymouthbrethrenchristianchurch.org/resource/bruce-d-hales/ — PBCC's own resource page, succession statement.
- https://www.newstatesman.com/long-reads/2023/08/escaping-eden-exclusive-brethren — New Statesman long-read (2023) references the dynastic line.

**Notes**
- Uncontested factual matter (date, succession). The PBCC self-report is the primary source.

**Pages**
- `/our-members/bruce-d-hales`.

---

### Claim
Reporting in The Post (NZ) has quoted leadership instructions delivered under Hales that direct members to generate commercial surplus for the community, citing recordings and member testimony.

**Status** — 🟡 single-source
**Sources**
- https://www.thepost.co.nz/nz-news/350113380/exclusive-brethren-told-create-crisis-generate-profits — The Post (NZ).

**Notes**
- Phrase as what the reporting says, not as a direct factual claim about Hales personally. We cite the outlet, not re-state the allegation as our own.

**Pages**
- `/our-members/bruce-d-hales`.

---

### Claim
In September 2015 Hales delivered a UK ministry meeting at which, according to Fairfax Media reporting run in Stuff (NZ) and the Cessnock Advertiser, he said a young man in mental distress would be "better to take arsenic, or go and get some rat poison or something, take a bottle of it," adding "Now I'm not advocating him doing that but … that would be better, to finish yourself off that way [rather] than having to do with the opponents of the truth."

**Status** — 🟡 single-source-of-record (same underlying Fairfax story, two syndicated URLs)
**Sources**
- https://www.stuff.co.nz/national/78573007/exclusive-brethrens-the-sect-with-millions-of-dollars-in-tax-breaks-whose-secretive-leader-tells-followers-to-drink-rat-poison — Stuff (NZ), 2016.
- https://www.cessnockadvertiser.com.au/story/3360281/exclusive-brethren-leader-bruce-hales-says-man-in-torment-should-kill-himself/ — Cessnock Advertiser / ACM, 2016.
- _Needed (promotes to ✅): independent reporting of the same quote. Candidate — The Guardian 2016, ABC coverage of same._

**Notes**
- Severity claim (suicide language). Must ship with the PBCC spokesman's on-record response ("should not be given a literal interpretation … a common, everyday metaphor") from the same reporting. Fairness norm per EDITORIAL_GUIDE.md §4.
- Before any prose edit: confirm verbatim quote on the live Stuff / Cessnock URLs. Research agent retrieved quote from search-result snippets, not a successful body fetch.
- The two URLs are siblings of the same Fairfax story; treat as one source until a second, independent outlet is pinned.

**Pages**
- `/our-members/bruce-d-hales`.

---

### Claim
The Times (London), in its "No mercy" investigation by Billy Kenber and Alexi Mostrous, reports that during the UK Charity Commission's 2012–14 Preston Down Trust case, "the Brethren's universal leader, Sydney businessman Bruce Hales, had instructed members to infiltrate the meeting, to 'take a tape recorder and dress up as an out [an ex-member]'."

**Status** — ✅ verified (primary retrieval)
**Sources**
- https://times-deck.s3-eu-west-1.amazonaws.com/projects/470e7a4f017a5476afb7eeb3f8b96f9b.html — The Times (London), public microsite.

**Notes**
- The Times's paywalled edition at thetimes.co.uk covers the same reporting; the S3-hosted project URL is the public companion. Agent verified by direct fetch. Recommend pulling a mirror to `research/evidence/` in case the S3 bucket ever rotates.

**Pages**
- `/our-members/bruce-d-hales`.

---

### Claim
The UK Charity Commission's 3 January 2014 full decision on the Preston Down Trust records that the Commission had "considerable evidence of significant 'detriment or harm'" in Brethren practices and discusses the authority held in the trust deed by the "worldwide leader of the Brethren" — the office held by Bruce Hales.

**Status** — ✅ verified (primary document)
**Sources**
- https://assets.publishing.service.gov.uk/media/5a74c214e5274a3cb2866f23/preston_down_trust_full_decision.pdf — UK Charity Commission, 3 January 2014.

**Notes**
- Primary regulator document. Cite directly. Pending: mirror the PDF to `research/evidence/` given gov.uk CDN occasional 403s.

**Pages**
- `/our-members/bruce-d-hales`, `/litigation` (future), `/timeline` (future).

---

### Claim
RNZ reports what its ex-member sources call the fellowship's "money-go-round": congregational cash payments to Hales and family, an offshore fund named "GCF," and payment amounts varied so they would not look like wages. RNZ writes the payments "would add up to hundreds of thousands of dollars a year from New Zealand alone, and millions from Brethren around the world."

**Status** — 🟡 single-source
**Sources**
- https://www.rnz.co.nz/news/national/471615/former-exclusive-brethren-members-detail-the-church-s-money-go-round — RNZ, 2022.
- _Needed (promotes to ✅): independent reporting of the same mechanism — Four Corners 2025, The Post 2023 companion piece, or follow-on coverage._

**Notes**
- Financial-conduct severity claim. Attribute to the reporting outlet and the named ex-member witness (Peter Hart per RNZ). Do not characterise as fact beyond what RNZ itself commits to.

**Pages**
- `/our-members/bruce-d-hales`.

---

### Claim
NZ Herald reporting by Patrick Gower describes Hales touring New Zealand congregations by private jet, arriving from Sydney.

**Status** — 🟡 single-source (acceptable for uncontested mode-of-travel matter)
**Sources**
- https://www.nzherald.co.nz/nz/ibehind-the-brotherhoodi-the-elect-vessel-bruce-hales/VGMHDADWYHA6ZUQXDN7K5BSV2I/ — NZ Herald, Patrick Gower.

**Notes**
- Do not invent aircraft details, tail numbers, or flight logs on the strength of this source. Companion NZ Herald pieces on the same tour: `.../PQAEZPCP34M4TBRFBB4WZE3BNA/` and the Whanganui Chronicle `/7XVPHETJ6QIYAAIDSABQGP3I34/`.

**Pages**
- `/our-members/bruce-d-hales`.

---

### Claim
The Illawarra Mercury reported in October 2017 that, in proceedings connected to a PBCC-linked company's defamation action against a journalist, Lloyd Grimshaw — a company director who has also served as a PBCC media spokesman — signed a "Services and Confidentiality Deed" proposing to pay potential witness McCorkell "$920,000 over 10 years … to keep his mouth shut," with $275,000 transferred to McCorkell's business account and text messages in evidence including "Dean Hales is going to tell Lloyd to release."

**Status** — ✅ verified (mainstream outlet, named parties, named mechanism, named evidence)
**Sources**
- https://www.illawarramercury.com.au/story/5003814/texts-reveal-how-exclusive-brethren-paid-witness-to-keep-quiet/ — Illawarra Mercury / ACM, 22 October 2017.
- https://www.stuff.co.nz/world/australia/98220593/potential-witness-in-exclusive-brethren-sex-abuse-case-paid-to-remain-silent — Stuff (NZ), sibling carrier.

**Notes**
- The reporting names Dean Hales (Bruce Hales's son), not Bruce Hales personally, as the source of the release directive quoted in the texts. Profile prose must reflect that. Severity-adjacent; both outlet URLs held before shipping.

**Pages**
- `/our-members/bruce-d-hales`, `/litigation` (future).

---

### Claim
The Doctrine of Separation prohibits members from sharing meals, accommodation, marriage, or business partnership with those outside the fellowship. Grounded in 2 Timothy 2:19–22.

**Status** — ✅ verified
**Sources**
- https://www.cdamm.org/articles/plymouth-brethren — academic.
- https://www.cesnur.org/2008/london_briggs.pdf — CESNUR paper, 2008.
- https://www.plymouthbrethrenchristianchurch.org/resource/statement-of-belief/ — PBCC's own.
- https://www.plymouthbrethrenchristianchurch.org/wp-content/uploads/2020/08/Plymouth-Brethren-Living-Our-Beliefs-English.pdf — PBCC's own.

**Pages**
- `/` About Us, `/` community card "neighbours", `/way-of-life/our-beliefs`.

---

### Claim
Members who are "withdrawn from" (PBCC term for excommunication) are cut off from family, spouses, and business partners who remain in fellowship.

**Status** — ✅ verified (multi-source)
**Sources**
- New Statesman long-read (same as above).
- https://reachouttrust.org/exclusive-brethren/ — Reachout Trust overview.
- https://publications.parliament.uk/pa/cm201213/cmselect/cmpubadm/writev/charity/m49.htm — UK Parliament submission, 2012.
- ABC Four Corners "Behind the Exclusive Brethren" (Bachelard / Whitmont).

**Pages**
- `/` community cards, `/way-of-life/our-beliefs`, `/doctrine/withdrawing-from` (future).

---

## 3. Business network

### Claim
Member-owned businesses coordinate through the Universal Business Team (UBT).

**Status** — ✅ verified
**Sources**
- _Needed: primary UBT corporate filing or news coverage. Placeholder for now._
- Australian Tax Office raid on UBT, March 2024 — _pin SMH or ABC primary URL._

**Pages**
- `/` community card "local economies".

---

### Claim
In March 2024 the Australian Taxation Office raided UBT offices.

**Status** — 🔴 TODO: pin primary URL
**Sources**
- _Needed. Search surfaced the event; primary URL not pinned yet._

**Pages**
- `/` community card "local economies" (optional mention), `/news`, `/litigation` (future).

---

## 4. Education

### Claim
OneSchool Global (OSG) is the PBCC's international school network. Campuses are staffed primarily by members and serve primarily member families.

**Status** — 🟡 single-source, needs second
**Sources**
- _Needed: investigative piece naming former OSG teachers. Senate of Australia submission._
- PBCC self-publication references.

**Pages**
- `/` community card "education", `/way-of-life/our-beliefs` (future), `/education` (future).

---

## 5. Legal & regulatory

### Claim
In 2012–2014, the UK Charity Commission contested PBCC's charitable status (Preston Down Trust). The case concluded with a compromise agreement.

**Status** — 🔴 TODO: pin primary source
**Sources**
- _Needed: Charity Commission decision URL, case number._

**Pages**
- `/litigation` (future), `/timeline` (future).

---

### Claim
In 2006, the Australian Senate examined PBCC-related donations to political parties.

**Status** — 🔴 TODO: pin primary source
**Sources**
- _Needed: Senate Hansard reference._

**Pages**
- `/litigation` (future), `/timeline` (future).

---

### Claim
The PBCC and entities associated with it have pursued defamation proceedings, takedown demands, and SLAPP-style litigation against journalists, former members, and academic critics.

**Status** — 🔴 TODO: pin primary source(s) per case
**Sources**
- _Needed. Candidate strands to pin per case:_
  - Australian defamation proceedings against Michael Bachelard / Fairfax in the mid-2000s (book + Four Corners coverage).
  - UK injunction proceedings against ex-member blogs and forums.
  - NZ and AU takedown / cease-and-desist correspondence referenced in ex-member and reporter accounts.
- Any row that ships on the homepage cites the specific case with a primary-document URL (court judgment, filing, or news coverage).

**Notes**
- Severity claim. Must list a specific case with a specific citation before the `/` "Litigation against critics" card moves from `SourcePending` to footnoted.
- Do not generalise beyond what a single named case supports. "SLAPP-style" is a characterisation used in reporting; where we use it, cite the reporter who used it.

**Pages**
- `/` "What the record says" card, `/litigation` (future), `/mission` (one severity sentence marked `SourcePending` until pinned).

---

### Claim
Mainstream reporting and survivor accounts have raised allegations of child sexual abuse, domestic violence, and coercive control within PBCC households and member-staffed institutions.

**Status** — 🔴 TODO: pin primary source(s) per allegation
**Sources**
- _Needed. Candidate strands to pin per specific allegation:_
  - New Statesman "Escaping Eden" (2023) — review for named abuse allegations and their sourcing.
  - ABC Four Corners "Behind the Exclusive Brethren" (2006) and follow-up "Big Brethren" — named cases, named outcomes.
  - Australian Senate / child-safety inquiry submissions referencing OneSchool Global and member households.
  - Specific named civil or criminal proceedings, where reporting has already identified them.

**Notes**
- Severity claim. Editorial guide §4 is explicit: do not ship generalised abuse-claim language. Ship a specific named case with a named citation, or do not ship.
- Homepage card currently marked `SourcePending` with a note pointing to this row. Do not remove the marker until the specific citation lands.
- Survivor-first: named survivors appear only with explicit written consent via `/stories` intake.

**Pages**
- `/` "What the record says" card, `/litigation` (future), `/stories`.

---

## 6. Survivor testimony (in-site) / documentary

### Claim
First-person survivor testimony is published on this site, under explicit written consent, via the `/stories` intake.

**Status** — 🟡 editorial commitment (process, not a factual claim about PBCC)
**Sources**
- This repository (`/src/app/stories/page.tsx` describes the intake pipeline).

**Notes**
- External reference PBCCstories.org has been deprecated from this site. Survivor testimony is being brought in-house so consent controls, edit history, and takedown are on our own infrastructure.
- No story ships without a signed-off consent statement and a removal contact.

**Pages**
- `/` stories band, `/stories`, `/resources`, `/mission`.

---

### Claim
The ABC Four Corners documentary "Behind the Exclusive Brethren" (2006, Michael Bachelard / Debbie Whitmont) is one of the most-cited investigative works on the community.

**Status** — ✅ verified
**Sources**
- https://en.wikipedia.org/wiki/Behind_the_Exclusive_Brethren
- (Trent's own contribution to ABC's "Big Brethren" follow-up — to be cited where appropriate.)

**Pages**
- `/about-this-site`, `/resources`.

---

## 7. Open research questions (not yet claims)

Things we know are true but don't yet have the citation for. Add a source URL inline as you find them and I'll promote them to claim rows.

- Estimated number of identifiable survivors across all jurisdictions.
- Rate of member-to-member business ownership concentration.
- Documented cases of child-custody outcomes in withdrawal proceedings.
- PBCC's annual revenue (Rapid Relief Team + member donations + UBT-coordinated commerce).
- Geographic distribution: per-country member counts from self-reports + independent estimates.

---

## 8. How this feeds the site

When a row here reaches ✅:
1. Convert to a typed entry in `src/lib/sources.ts` with `{id, label, url, accessed}`.
2. Any MDX page that renders the paragraph imports the source id and renders it as a footnote.
3. Remove the `{/* TODO: source */}` marker from that paragraph.
4. Mark the row here as "🚢 shipped" with the PR/commit that moved it.

This file is the single place to read if you want to know what the site is prepared to claim.
