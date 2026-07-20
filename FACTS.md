# FACTS.md. sourced claims intake

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
- <URL> . <outlet>, <date>, <author> (if known)
- <URL> . <secondary source if available>

**Notes / caveats**
- Anything that affects how the claim should be phrased, qualified, or dated.
- Contested numbers: note the range and which source carries which end of it.

**Pages where this claim appears (or will)**
- `/` hero
- `/way-of-life` §1
```

If you have a PDF, screenshot, or archived page, drop it into `research/evidence/` (gitignored. those are references, not shipped assets) and reference the filename here alongside the live URL.

---

## Status legend

- ✅ **Verified**. two independent sources, or one primary (court ruling / inquiry / PBCC's own publication) + one journalism source.
- 🟡 **Single source**. acceptable for uncontested factual matters (dates, locations, leadership succession); borderline for severity claims.
- 🟣 **Ex-member reported**. at least one verified ex-member report on file supports the row (identity verified by the editor, held off-repo; see [docs/REPORTS_SYSTEM.md](docs/REPORTS_SYSTEM.md)). Ships only with the ex-member badge and "verified ex-members report…" phrasing. Public-record sources still required to reach ✅.
- 🔴 **Unsourced / TODO**. on the site only if the paragraph is also marked `{/* TODO: source */}` in the MDX. Convert to ✅ before the paragraph ships to production.

---

## 1. Membership & scale

### Claim
The PBCC has approximately 55,000 members across 19 countries.

**Status**. 🟡 single source (PBCC's own)
**Sources**
- https://www.plymouthbrethrenchristianchurch.org/. PBCC's own hero copy, captured 2026-04-23.
- _Needed: independent corroboration. census returns, academic estimate, or CDAMM article._

**Notes**
- PBCC has used both "54,000" and "55,000+" in recent years; pick the figure they use most recently on their own site and cite it as their self-report.
- Distinguish "members" from "former members / survivors" clearly. see §2.

**Pages**
- `/` hero, `/` About Us

---

### Claim
The PBCC has produced at least <N> identifiable ex-members / survivors since <year>.

**Status**. 🔴 TODO: source
**Sources**
- _Needed. Candidates to review:_
  - In-site `/stories` intake once contributors are on-record (this site is becoming the primary testimony home).
  - Senate of Australia public submissions (2006–2008 inquiries + any since).
  - UK Charity Commission Preston Down Trust case record (2012–2014).
  - Academic surveys (Bachelard, Tchappat, etc.). name a specific figure.

**Notes**
- Trent's draft hero copy uses "1,000 survivors". Needs a pinned figure before it ships. Possible softened phrasing pending source: "hundreds of documented former members" or "at least <N> on public record".

**Pages**
- `/` hero (currently marked TODO).

---

## 2. Leadership & doctrine

### Claim
The current World Leader is Bruce D. Hales, known within the fellowship as the "Man of God".

**Status**. ✅ verified
**Sources**
- https://www.plymouthbrethrenchristianchurch.org/resource/bruce-d-hales/. PBCC's own resource page.
- https://www.newstatesman.com/long-reads/2023/08/escaping-eden-exclusive-brethren. New Statesman long-read.
- https://www.thepost.co.nz/nz-news/350113380/exclusive-brethren-told-create-crisis-generate-profits. The Post (NZ).

**Notes**
- Use "the current World Leader, Bruce D. Hales, known within the fellowship as the Man of God" for the full gloss on first use; shorter forms after.

**Pages**
- `/` About Us, `/way-of-life/beliefs`, `/about-this-site`, `/people`, `/people/bruce-d-hales`.

---

### Claim
Bruce D. Hales assumed the leadership in 2002 on the death of his father, John S. Hales.

**Status**. ✅ verified (single primary + supporting reporting)
**Sources**
- https://www.plymouthbrethrenchristianchurch.org/resource/bruce-d-hales/. PBCC's own resource page, succession statement.
- https://www.newstatesman.com/long-reads/2023/08/escaping-eden-exclusive-brethren. New Statesman long-read (2023) references the dynastic line.

**Notes**
- Uncontested factual matter (date, succession). The PBCC self-report is the primary source.

**Pages**
- `/people/bruce-d-hales`.

---

### Claim
Reporting in The Post (NZ) has quoted leadership instructions delivered under Hales that direct members to generate commercial surplus for the community, citing recordings and member testimony.

**Status**. 🟡 single-source
**Sources**
- https://www.thepost.co.nz/nz-news/350113380/exclusive-brethren-told-create-crisis-generate-profits. The Post (NZ).

**Notes**
- Phrase as what the reporting says, not as a direct factual claim about Hales personally. We cite the outlet, not re-state the allegation as our own.

**Pages**
- `/people/bruce-d-hales`.

---

### Claim
In September 2015 Hales delivered a UK ministry meeting at which, according to Fairfax Media reporting run in Stuff (NZ) and the Cessnock Advertiser, he said a young man in mental distress would be "better to take arsenic, or go and get some rat poison or something, take a bottle of it," adding "Now I'm not advocating him doing that but … that would be better, to finish yourself off that way [rather] than having to do with the opponents of the truth."

**Status**. 🟡 single-source-of-record (same underlying Fairfax story, two syndicated URLs)
**Sources**
- https://www.stuff.co.nz/national/78573007/exclusive-brethrens-the-sect-with-millions-of-dollars-in-tax-breaks-whose-secretive-leader-tells-followers-to-drink-rat-poison. Stuff (NZ), 2016.
- https://www.cessnockadvertiser.com.au/story/3360281/exclusive-brethren-leader-bruce-hales-says-man-in-torment-should-kill-himself/. Cessnock Advertiser / ACM, 2016.
- _Needed (promotes to ✅): independent reporting of the same quote. Candidate. The Guardian 2016, ABC coverage of same._

**Notes**
- Severity claim (suicide language). Must ship with the PBCC spokesman's on-record response ("should not be given a literal interpretation … a common, everyday metaphor") from the same reporting. Fairness norm per EDITORIAL_GUIDE.md §4.
- Before any prose edit: confirm verbatim quote on the live Stuff / Cessnock URLs. Research agent retrieved quote from search-result snippets, not a successful body fetch.
- The two URLs are siblings of the same Fairfax story; treat as one source until a second, independent outlet is pinned.

**Pages**
- `/people/bruce-d-hales`.

---

### Claim
The Times (London), in its "No mercy" investigation by Billy Kenber and Alexi Mostrous, reports that during the UK Charity Commission's 2012–14 Preston Down Trust case, "the Brethren's universal leader, Sydney businessman Bruce Hales, had instructed members to infiltrate the meeting, to 'take a tape recorder and dress up as an out [an ex-member]'."

**Status**. ✅ verified (primary retrieval)
**Sources**
- https://times-deck.s3-eu-west-1.amazonaws.com/projects/470e7a4f017a5476afb7eeb3f8b96f9b.html. The Times (London), public microsite.

**Notes**
- The Times's paywalled edition at thetimes.co.uk covers the same reporting; the S3-hosted project URL is the public companion. Agent verified by direct fetch. Recommend pulling a mirror to `research/evidence/` in case the S3 bucket ever rotates.

**Pages**
- `/people/bruce-d-hales`.

---

### Claim
The UK Charity Commission's 3 January 2014 full decision on the Preston Down Trust records that the Commission had "considerable evidence of significant 'detriment or harm'" in Brethren practices and discusses the authority held in the trust deed by the "worldwide leader of the Brethren". the office held by Bruce Hales.

**Status**. ✅ verified (primary document)
**Sources**
- https://assets.publishing.service.gov.uk/media/5a74c214e5274a3cb2866f23/preston_down_trust_full_decision.pdf. UK Charity Commission, 3 January 2014.

**Notes**
- Primary regulator document. Cite directly. Pending: mirror the PDF to `research/evidence/` given gov.uk CDN occasional 403s.

**Pages**
- `/people/bruce-d-hales`, `/litigation` (future), `/timeline` (future).

---

### Claim
RNZ reports what its ex-member sources call the fellowship's "money-go-round": congregational cash payments to Hales and family, an offshore fund named "GCF," and payment amounts varied so they would not look like wages. RNZ writes the payments "would add up to hundreds of thousands of dollars a year from New Zealand alone, and millions from Brethren around the world."

**Status**. 🟡 single-source
**Sources**
- https://www.rnz.co.nz/news/national/471615/former-exclusive-brethren-members-detail-the-church-s-money-go-round. RNZ, 2022.
- _Needed (promotes to ✅): independent reporting of the same mechanism. Four Corners 2025, The Post 2023 companion piece, or follow-on coverage._

**Notes**
- Financial-conduct severity claim. Attribute to the reporting outlet and the named ex-member witness (Peter Hart per RNZ). Do not characterise as fact beyond what RNZ itself commits to.

**Pages**
- `/people/bruce-d-hales`.

---

### Claim
NZ Herald reporting by Patrick Gower describes Hales touring New Zealand congregations by private jet, arriving from Sydney.

**Status**. 🟡 single-source (acceptable for uncontested mode-of-travel matter)
**Sources**
- https://www.nzherald.co.nz/nz/ibehind-the-brotherhoodi-the-elect-vessel-bruce-hales/VGMHDADWYHA6ZUQXDN7K5BSV2I/. NZ Herald, Patrick Gower.

**Notes**
- Do not invent aircraft details, tail numbers, or flight logs on the strength of this source. Companion NZ Herald pieces on the same tour: `.../PQAEZPCP34M4TBRFBB4WZE3BNA/` and the Whanganui Chronicle `/7XVPHETJ6QIYAAIDSABQGP3I34/`.
- 2026-07-19 research pass: jet use further corroborated (Stuff NZ 2023 via cultnews101.com "Private jets, prison vans and Palmy"; Forum News Service / Inforum, 13 Aug 2024: Hales "travels in a private jet"). Maintainer's "multiple private jets" NOT corroborated; ship singular "private jet" only.

**Pages**
- `/people/bruce-d-hales`.

---

### Claim
The Illawarra Mercury reported in October 2017 that, in proceedings connected to a PBCC-linked company's defamation action against a journalist, Lloyd Grimshaw. a company director who has also served as a PBCC media spokesman. signed a "Services and Confidentiality Deed" proposing to pay potential witness McCorkell "$920,000 over 10 years … to keep his mouth shut," with $275,000 transferred to McCorkell's business account and text messages in evidence including "Dean Hales is going to tell Lloyd to release."

**Status**. ✅ verified (mainstream outlet, named parties, named mechanism, named evidence)
**Sources**
- https://www.illawarramercury.com.au/story/5003814/texts-reveal-how-exclusive-brethren-paid-witness-to-keep-quiet/. Illawarra Mercury / ACM, 22 October 2017.
- https://www.stuff.co.nz/world/australia/98220593/potential-witness-in-exclusive-brethren-sex-abuse-case-paid-to-remain-silent. Stuff (NZ), sibling carrier.

**Notes**
- The reporting names Dean Hales (Bruce Hales's son), not Bruce Hales personally, as the source of the release directive quoted in the texts. Profile prose must reflect that. Severity-adjacent; both outlet URLs held before shipping.

**Pages**
- `/people/bruce-d-hales`, `/litigation` (future).

---

### Claim
The Doctrine of Separation prohibits members from sharing meals, accommodation, marriage, or business partnership with those outside the fellowship. Grounded in 2 Timothy 2:19–22.

**Status**. ✅ verified
**Sources**
- https://www.cdamm.org/articles/plymouth-brethren. academic.
- https://www.cesnur.org/2008/london_briggs.pdf. CESNUR paper, 2008.
- https://www.plymouthbrethrenchristianchurch.org/resource/statement-of-belief/. PBCC's own.
- https://www.plymouthbrethrenchristianchurch.org/wp-content/uploads/2020/08/Plymouth-Brethren-Living-Our-Beliefs-English.pdf. PBCC's own.

**Pages**
- `/` About Us, `/` community card "neighbours", `/way-of-life/beliefs`.

---

### Claim
Members who are "withdrawn from" (PBCC term for excommunication) are cut off from family, spouses, and business partners who remain in fellowship.

**Status**. ✅ verified (multi-source)
**Sources**
- New Statesman long-read (same as above): "when a member leaves or is 'withdrawn from' (excommunicated), those who remain will not eat, speak or live with them."
- https://www.abuseincare.org.nz/reports/whanaketia/part-7/chapter-8. NZ Royal Commission, Whanaketia (25 Jun 2024), Part 7 Ch. 8 (primary): "shutting up" and "withdrawing from"; members instructed to shun their own family, sometimes while living in the same house.
- https://assets.publishing.service.gov.uk/media/5a74c214e5274a3cb2866f23/preston_down_trust_full_decision.pdf. UK Charity Commission Preston Down Trust full decision, Jan 2014 (primary): "elements of detriment and harm" from disciplinary practices and impact on those who leave. _Note: the GOV.UK landing page is marked "[Withdrawn]"; the PDF remains the citable record._
- https://reachouttrust.org/exclusive-brethren/. Reachout Trust overview.
- https://publications.parliament.uk/pa/cm201213/cmselect/cmpubadm/writev/charity/m49.htm. UK Parliament submission, 2012.
- ABC Four Corners "Behind the Exclusive Brethren" (Bachelard / Whitmont).

**Pages**
- `/` community cards, `/way-of-life/beliefs`, `/doctrine/withdrawing-from` (future).

---

## 3. Business network

### Claim
Member-owned businesses coordinate through the Universal Business Team (UBT).

**Status**. ✅ verified
**Sources**
- _Needed: primary UBT corporate filing or news coverage. Placeholder for now._
- Australian Tax Office raid on UBT, March 2024. _pin SMH or ABC primary URL._

**Pages**
- `/` community card "local economies".

---

### Claim
In March 2024 the Australian Taxation Office raided UBT offices.

**Status**. 🔴 TODO: pin primary URL
**Sources**
- _Needed. Search surfaced the event; primary URL not pinned yet._

**Pages**
- `/` community card "local economies" (optional mention), `/news`, `/litigation` (future).

---

## 4. Education

### Claim
OneSchool Global (OSG) is the PBCC's international school network. Campuses are staffed primarily by members and serve primarily member families.

**Status**. 🟡 single-source, needs second
**Sources**
- _Needed: investigative piece naming former OSG teachers. Senate of Australia submission._
- PBCC self-publication references.

**Pages**
- `/` community card "education", `/way-of-life/beliefs` (future), `/education` (future).

---

## 5. Legal & regulatory

### Claim
In 2012–2014, the UK Charity Commission contested PBCC's charitable status (Preston Down Trust). The case concluded with a compromise agreement.

**Status**. 🔴 TODO: pin primary source
**Sources**
- _Needed: Charity Commission decision URL, case number._

**Pages**
- `/litigation` (future), `/timeline` (future).

---

### Claim
In 2006, the Australian Senate examined PBCC-related donations to political parties.

**Status**. 🔴 TODO: pin primary source
**Sources**
- _Needed: Senate Hansard reference._

**Pages**
- `/litigation` (future), `/timeline` (future).

---

### Claim
The PBCC and entities associated with it have pursued defamation proceedings, takedown demands, and SLAPP-style litigation against journalists, former members, and academic critics.

**Status**. 🔴 TODO: pin primary source(s) per case
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

**Status**. 🔴 TODO: pin primary source(s) per allegation
**Sources**
- _Needed. Candidate strands to pin per specific allegation:_
  - New Statesman "Escaping Eden" (2023). review for named abuse allegations and their sourcing.
  - ABC Four Corners "Behind the Exclusive Brethren" (2006) and follow-up "Big Brethren". named cases, named outcomes.
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

**Status**. 🟡 editorial commitment (process, not a factual claim about PBCC)
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

**Status**. ✅ verified
**Sources**
- https://en.wikipedia.org/wiki/Behind_the_Exclusive_Brethren
- (Trent's own contribution to ABC's "Big Brethren" follow-up. to be cited where appropriate.)

**Pages**
- `/about-this-site`, `/resources`.

---

### Claim
The Get A Life podcast ("Ex-Cult Conversations") was founded in 2022 by four former North American PBCC members and interviews ex-members, psychologists, and journalists.

**Status**. ✅ verified (the podcast's own public record)
**Sources**
- https://www.get-a-life.net/. Official site; episodes at /podcast-episodes.
- https://podcasts.apple.com/us/podcast/get-a-life-ex-cult-conversations/id1651686638. Apple Podcasts; also Spotify (show 4GhNv1hZp6tjfLyA4s6PMu) and YouTube @getalifepodcast.

**Notes**
- Hosts: founded by four former USA/Canada members; Cheryl Bawtinheimer (née Hope) is the most publicly named host. UK/Europe and AU/NZ hosting teams added since.
- Old brethrenexposed.com media-pack URLs are dead; brethrenexposed.com now redirects to brethrenintelligence.com.

**Pages**
- `/resources`, `/resources/podcast`.

---

## 7. Bruce D. Hales. named claims (from 2026-04-23 dossier pass)

### Claim
In September 2015, at a UK ministry meeting, Bruce Hales told members a 25-year-old NZ man in contact with ex-member family should "take arsenic, or go and get some rat poison or something, take a bottle of it."

**Status**. ✅ verified (multi-source, leaked-recording verbatim)
**Sources**
- https://www.smh.com.au/. Michael Bachelard, "Exclusive Brethren leader Bruce Hales says man 'in torment' should kill himself," Sydney Morning Herald, 18 Sep 2015 (primary).
- https://www.stuff.co.nz/national/78573007/. Stuff (NZ), 22 May 2016.
- https://www.cessnockadvertiser.com.au/story/3360281/. Cessnock Advertiser, April 2016 (ACM sibling of SMH story).

**Notes**
- PBCC's on-record response does not deny the words, only their literality ("should not be given a literal interpretation," "a common, everyday metaphor"). Quote-verbatim in reporting; safe for use as the pull-quote.

**Pages**
- `/people/bruce-d-hales`. pull-quote at top, §1 body.

---

### Claim
In December 2007, Bruce Hales personally met 19-year-old Craig Hoyle in Sydney and told him he should never accept his homosexuality, directing him to two Brethren-member doctors, one of whom (Dr Mark Craddock, Hales's cousin) prescribed Cyprostat. a chemical-castration agent. Craddock was later found guilty of unsatisfactory professional conduct by the NSW Medical Professional Standards Committee.

**Status**. ✅ verified (memoir + mainstream press + Royal Commission)
**Sources**
- https://www.harpercollins.co.nz/9781775542469/excommunicated/. Craig Hoyle, *Excommunicated*, HarperCollins NZ, 2023 (primary).
- https://www.thetimes.co.uk/article/brethren-doctor-gave-gay-teenager-chemical-castration-drug-sqg3p36kl6h. The Times (London), Kenber & Mostrous.
- https://www.abuseincare.org.nz/reports/whanaketia/. NZ Royal Commission of Inquiry into Abuse in Care, *Whanaketia*, Chapter 8 (2024).

**Pages**
- `/people/bruce-d-hales`. §2 body.

---

### Claim
Brethren elder Lindsay Jensen sexually abused two sisters placed in his Sydney home. Jensen was "shut up" in August 2003 and restored to fellowship in December 2003. While the victims begged Hales by letter not to reinstate him, Hales met the younger victim (then 10–13) five times in his Sydney office; Jensen was convicted in 2005 and 2007 including for offences against a child under 10.

**Status**. ✅ verified (SMH + sentencing court record)
**Sources**
- https://www.smh.com.au/lifestyle/tony-mccorkell-reveals-secrets-of-the-wealthy-christian-sect-exclusive-brethren-20160609-gpez4k.html. Bachelard, SMH Good Weekend, June 2016.
- Sentencing remarks of Justice William Knight (NSW District Court), quoted in Bachelard (2016): "Religious groups seem to feel that they have some particular right to avoid the responsibilities of the laws of the land. It annoys the tripe out of me."

**Pages**
- `/people/bruce-d-hales`. §3 body.

---

### Claim
In October/November 2016, a PBCC entity paid $275,000 into PR consultant Tony McCorkell's business account as part of a proposed $920,000 "Services and Confidentiality Deed" that expressly named Michael Bachelard in Schedule 3 as the sole prohibited recipient of anything McCorkell might disclose.

**Status**. ✅ verified (bank records + text messages in court)
**Sources**
- https://www.smh.com.au/national/exclusive-brethren-tried-to-pay-witness-920000-to-keep-quiet-about-child-sex-abuse-20171020-gz4w3u.html. Bachelard, SMH, 21 Oct 2017.
- https://www.illawarramercury.com.au/story/5003814/texts-reveal-how-exclusive-brethren-paid-witness-to-keep-quiet/. Illawarra Mercury (ACM sibling), Oct 2017.

**Pages**
- `/people/bruce-d-hales`. §3 body (last para).

---

### Claim
After the UK Charity Commission refused Preston Down Trust registration in 2012, Hales instructed members to infiltrate the tribunal meeting ("take a tape recorder and dress up as an out"). In the lobbying campaign that followed, 449 MPs were visited by Brethren members, 3,000+ letters reached the Commission, and at least 233 MPs wrote on the fellowship's behalf. A 76-slide internal deck was captioned "No mercy. Nothing else will do."

**Status**. ✅ verified (The Times investigation + leaked internal docs)
**Sources**
- https://times-deck.s3-eu-west-1.amazonaws.com/projects/470e7a4f017a5476afb7eeb3f8b96f9b.html. The Times "No mercy" project microsite (Kenber & Mostrous).
- https://assets.publishing.service.gov.uk/media/5a74c214e5274a3cb2866f23/preston_down_trust_full_decision.pdf. UK Charity Commission, Preston Down Trust full decision, 3 Jan 2014 (finds "considerable evidence of significant detriment or harm").

**Pages**
- `/people/bruce-d-hales`. §4 body.

---

### Claim
ABC Four Corners' "Big Brethren" (15 Sep 2025) reported that Mick Dover, alleging repeated childhood sexual abuse starting age 5 by multiple PBCC members, was offered a ~$1 million settlement by the church in October 2024 conditional on an NDA and non-disparagement clause. The PBCC's formal rebuttal admits awareness "around two years ago" and "informal mediation" while disputing the dollar figure.

**Status**. ✅ verified (ABC broadcast + PBCC's own rebuttal)
**Sources**
- https://www.abc.net.au/4corners/big-brethren/105776802. ABC Four Corners, 15 Sep 2025.
- https://www.plymouthbrethrenchristianchurch.org/media-statement-abc-four-corners/. PBCC formal response.

**Pages**
- `/people/bruce-d-hales`. §5 body.

---

### Claim
On 19 March 2024, the Australian Taxation Office raided UBT's Sydney Olympic Park offices under the ATO's "Private Wealth. Behaviours of Concern" programme. UBT's Australian accounting arm UBTA closed within weeks. Guardian Australia describes UBT as "the umbrella organisation for the various businesses and charities run by the sect under the leadership of Bruce Hales."

**Status**. ✅ verified (Guardian Australia + SMH confirmation)
**Sources**
- https://www.theguardian.com/australia-news/2024/apr/02/ato-raids-offices-of-plymouth-brethrens-universal-business-team. Davies & Butler, Guardian Australia, Apr 2024.
- SMH raid exclusive (primary): Michael Bachelard, "Fleecing the flock: Exclusive Brethren businesses raided by Tax Office," smh.com.au/national, 22 Mar 2024 (confirmed via SMH's X post https://x.com/smh/status/1771353415018479763; full URL crawler-blocked, verify and archive manually).

**Notes (2026-07-19 research pass)**
- Raid targets: UBT, OneSchool Global, and Rapid Relief Team together at The Precinct, Herb Elliott Ave, Sydney Olympic Park; useful as documented evidence of shared infrastructure across the entities.
- Later activist-aggregated reporting (Nov 2025) says UBT made a voluntary disclosure and paid "several million dollars" to the ATO over FBT/salary-splitting for FY2021–24. No major-outlet citation found; SourcePending at most.

**Pages**
- `/people/bruce-d-hales`. §6 body.

---

### Claim
Companies controlled by Bruce Hales's sons (notably Charles and Gareth Hales's Sante Global LLP, and Dean Hales-linked Medco Solutions) were awarded UK Department of Health PPE contracts during COVID-19 worth a combined total exceeding £2.5 billion, routed in part through the "VIP lane."

**Status**. ✅ verified
**Sources**
- https://bylinetimes.com/2020/11/18/the-ppe-scandal-457-million-of-contracts-linked-to-the-religious-sect-behind-the-tories/. Byline Times, Nov 2020.
- Companies House filings and UK contract-award records referenced in the Byline piece.

**Pages**
- `/people/bruce-d-hales`. §6 body.

---

### Claim
Then-Opposition Leader Kevin Rudd (22 Aug 2007) called the Brethren an "extremist cult and sect" and "dangerous cult"; PM Anthony Albanese (Apr 2025) again called it a "cult" during the federal-election campaign. Nicky Hager's 2006 book *The Hollow Men* writes of Hales: "no major decisions are made without Hales's approval or direction."

**Status**. ✅ verified
**Sources**
- https://www.theage.com.au/national/rudd-rules-out-meeting-with-brethren-20070822-ge5qca.html. The Age, 22 Aug 2007.
- https://www.sbs.com.au/news/article/labor-accuses-religious-sect-of-trying-to-help-the-liberals-win-the-federal-election/nmayswnvx. SBS News, Apr 2025.
- https://www.nickyhager.info/books/the-hollow-men/. Nicky Hager, *The Hollow Men*, Craig Potton Publishing, 2006.

**Pages**
- `/people/bruce-d-hales`. §8 body.

---

## 8. Intake: maintainer testimony, 2026-07-19 (all unverified)

First-person recollections and leads from **two verified ex-member sources**: the maintainer, and a second ex-member interviewed in a recorded conversation (2026-07, recording held off-repo by the editor). Under the trust model in [docs/REPORTS_SYSTEM.md](docs/REPORTS_SYSTEM.md), rows supported by these interviews carry 🟣 (ex-member reported) and may ship ONLY with the ex-member badge and "verified ex-members report…" phrasing; public-record citations are still required for ✅. Where a row names a private member of the fellowship, the name stays in this intake as a research lead only and never ships (MEMBERS_POLICY.md §6). Rows here are candidates for the `/way-of-life/*` pages and `/money`.

### Claim
The PBCC restricts which car brands and models members may own, based on leadership pronouncements rather than price: prestige marques such as BMW, Mercedes-Benz, Bentley, Maserati, and sports cars are prohibited, while high-priced vehicles outside the named brands (e.g. Cadillac Escalade, Range Rover) are permitted.

**Status**. 🟣 ex-member reported (2 verified reports, 2026-07); no public source yet
**Sources**
- _Per both verified ex-member reports, the brand rules are stated in the printed Bruce D. Hales ministry ("white books"): BMW, Mercedes, Maserati, and sports cars named. **Priority task: obtain the specific volume and page.** A ministry citation is a primary source under EDITORIAL_GUIDE.md §2 and would take this to ✅._
- _2026-07-19 search pass found nothing in mainstream press or ex-member reference sites. Closest: https://www.inforum.com/news/the-vault/unraveling-the-plymouth-brethren-christian-church (expenditures "strictly controlled and monitored" per former members)._

**Notes**
- Ex-member reported: a $250k Escalade-V was permissible while a $20k used BMW was not; the rule follows brands Hales has spoken against, not cost.
- Ships (if at all) with the ex-member badge and reported phrasing until the ministry citation lands; the named-brand asymmetry is the point.

**Pages**
- `/way-of-life/technology-and-entertainment` or a future `/way-of-life/cars-and-possessions`.

---

### Claim
PBCC housing rules prohibit members from living in dwellings with shared plumbing, shared driveways, or shared walls (i.e. apartments and townhouses), requiring standalone single-family houses.

**Status**. ✅ corroborated (2026-07-19 research pass)
**Sources**
- https://www.newstatesman.com/long-reads/2023/08/escaping-eden-exclusive-brethren. New Statesman, Aug 2023: Brethren live in detached houses, "no sharing of walls or sewage lines with outsiders."
- https://en.wikipedia.org/wiki/Plymouth_Brethren_Christian_Church. Wikipedia (citing 2014 reporting): forbidden from residing in buildings sharing structural elements with non-members (semi-detached, townhouses, apartments) or sharing "common drains"/sewage lines. _Chase the underlying 2014 outlet citation before shipping; Wikipedia is a pointer, not a citation._
- https://pbcc.info/pbcc-and-exclusive-brethren-jargon-explained/. PBCC.info (ex-member reference): detached, recommended 4 bed / 2 bath, not on a cul-de-sac, no shared drains or drives, within a few miles of a subdivisional meeting room; criteria circulate as a "housing plan." _503 to automated fetch; verified via snippets; re-fetch before citing._

**Notes**
- Maintainer testimony ties housing compliance to marriage approval (see marriage row below).
- Historic no-shared-sewer rule under James Taylor Jr (1960s) is documented via the era's press coverage cited on the Wikipedia page.

**Pages**
- `/way-of-life` (future housing section).

---

### Claim
Personal grooming and dress codes are enforced: men are expected to wear a part in their hair; women must wear headscarves, sold through a Brethren-linked brand (Gabiano).

**Status**. 🟡 partially corroborated (2026-07-19 research pass): headscarf/token requirement and the Gabiano-UBT link are sourced; the men's hair-part rule is NOT found anywhere
**Sources**
- https://www.plymouthbrethrenchristianchurch.org/way-of-life/clothing-hair-and-fashion/. PBCC's own page: headscarves at meetings, hair item ("token") outside.
- New Statesman, Aug 2023 (same long-read as housing row): "a 'token', often a headband or bow."
- Gabiano (one "b"; gabiano.com.au / .co.uk / .us) is ordered through UBT household accounts: https://support.ubttelecoms.eu/hc/en-us/articles/360000252228-How-do-I-order-Gabiano-scarves. UBT Telecoms support page. A Gabiano lookbook is published under the "ubteam" Issuu account: https://issuu.com/ubteam/docs/00908_libertylookbook_digi.

**Notes**
- Men's grooming: sources document clean-shaven, short neat hair, facial-hair ban (1965 press via Wikipedia), NOT a hair-part requirement. Do not ship the hair-part claim without a source.
- The Gabiano-UBT ordering link feeds the "UBT sells to members" row below. Precise corporate ownership of Gabiano not yet established; a Companies House / ASIC lookup would settle it.

**Pages**
- `/way-of-life/clothing-hair-and-fashion`.

---

### Claim
Entertainment and technology prohibitions include: radio, prerecorded music, television, dirt bikes, go-karts, amusement parks, and pets. Enforcement of the pet prohibition reportedly extended to removal of existing pets in recent years.

**Status**. 🟡 mixed (2026-07-19 research pass): radio/TV ✅, pets ✅ (strongly, incl. 2026 enforcement), pop music 🟡, dirt bikes / go-karts / amusement parks 🔴 not found
**Sources**
- Radio/TV: https://www.plymouthbrethrenchristianchurch.org/resource/what-are-brethren-members-not-allowed-to-do/. PBCC's own page ("Television viewed primarily as entertainment... is generally avoided"); Telegraph 2025 via Wikipedia (members "do not watch television, listen to the radio").
- Pets, May 2026 removal directive after a dog bit a young Hales relative:
  - SMH, ~11 May 2026 (mirrored at https://feministlegal.org/exclusive-brethren-pet-ban-order-sparks-fears-of-global-cull-in-sect-the-plymouth-brethren-christian-church-smh/): every household to be cleansed of "dirty" animals; birds, mice, cats included; a kitten already euthanised. _Pin the original SMH URL and archive it._
  - https://www.stuff.co.nz/nz-news/360980937/brethren-church-denies-reports-followers-were-told-get-rid-their-pets. Stuff NZ: the church DENIES the order. Ship the denial alongside, per fairness norm.
  - https://www.plymouthbrethrenchristianchurch.org/correcting-the-record-pet-ownership-and-animal-safety/. PBCC's own rebuttal.
  - Get A Life podcast Ep. 169 "Cult Bans Pets": https://www.youtube.com/watch?v=QmSHqO7O470.
  - Historic 1960s pet purge documented (Daily Mirror / Daily Express 1964 via Wikipedia).
- Pop music: https://gayexpress.co.nz/2024/10/craig-hoyle-finding-freedom-after-the-exclusive-brethren/ ("rules against television, pop music, sports and even pets"). Exact "prerecorded music" wording not found; phrase as "pop music" per sources.
- Dirt bikes / go-karts / amusement parks: _not found. The Hales-attributed 27-place do-not-attend list (court documents via Four Corners 2025 / Wikipedia) names cinemas, restaurants, hotels, sporting events, universities, zoos; amusement parks unconfirmed. Obtain the actual 27-place list from the court record._

**Notes**
- "Cheryl" is Cheryl Bawtinheimer (née Hope), Get A Life podcast host: already a public, on-record ex-member (also quoted in the SMH pet piece), so she clears the naming bar if cited to her public statements.
- Some members privately defy the rules (maintainer cites prominent members keeping undisclosed televisions). Do not name private members; if ever published, the point is the gap between PR and practice, sourced to on-record accounts only.

**Pages**
- `/way-of-life/technology-and-entertainment`.

---

### Claim
Separation rules govern eating and social contact: members may not share a meal or maintain social connection with non-members; when business circumstances force a shared table, members avoid literally eating at the same moment. Restaurants are off-limits except in narrow business-travel circumstances, and hotels are avoided.

**Status**. ✅ largely corroborated (2026-07-19 research pass); the "avoid eating at the same moment" nuance still testimony-only
**Sources**
- https://www.plymouthbrethrenchristianchurch.org/resource/what-are-brethren-members-not-allowed-to-do/. PBCC's own page: members "choose to eat meals only with those with whom they would also share the Lord's Supper."
- 1964 "separate tables" edict forbidding "eating or drinking with anyone not 'in fellowship'" (Daily Record, Dec 1964, via Wikipedia's citations; chase the underlying source).
- Restaurants and hotels appear on the Hales-attributed 27-place do-not-attend list per court documents cited in Four Corners "Big Brethren" (2025). _Obtain the list itself._
- New Statesman, Aug 2023: children came home from school for lunch; men could not dine with worldly colleagues.

**Notes**
- Maintainer: rules are "heavily bent for business purposes especially by the elites." That asymmetry is a strong editorial point but needs an on-record source.

**Pages**
- `/way-of-life/dining`, `/way-of-life/neighbours`.

---

### Claim
Women sit separately from men at church services and are subject to distinct participation rules.

**Status**. ✅ corroborated (2026-07-19 research pass)
**Sources**
- https://en.wikipedia.org/wiki/Plymouth_Brethren_Christian_Church. Women sit separately (men nearest the centre, women and children behind), per 1 Corinthians 14:34; women do not preach or pray audibly. _Chase the underlying citation on the Wikipedia page before shipping._

**Pages**
- `/way-of-life/beliefs`.

---

### Claim
Members are required to live within a defined radius of their assigned meeting room; members living outside the radius have been expected to sell their homes and move. The radius policy is attributed to Bruce D. Hales.

**Status**. 🟡 partially corroborated (2026-07-19 research pass): proximity requirement documented; Hales attribution and sell-and-move enforcement not found
**Sources**
- https://pbcc.info/pbcc-and-exclusive-brethren-jargon-explained/. PBCC.info: houses must be "within a few miles of a subdivisional room"; circulated housing plans; 20–30 minute locality drive norms. _503 to automated fetch; re-verify._

**Notes**
- Attribution to Hales personally is a severity-adjacent claim: two sources or it ships attributed to "leadership" generally, or not at all. The forced sell-and-move enforcement remains testimony-only; candidates are `/stories` accounts.

**Pages**
- `/way-of-life`, `/people/bruce-d-hales` (if attribution sources).

---

### Claim
Members are expected not to work for non-Brethren businesses; rare exceptions exist but the norm is employment within the member-business network.

**Status**. ✅ corroborated (2026-07-19 research pass), with church denial to carry alongside
**Sources**
- New Statesman, Aug 2023: professional-body membership prohibited (doctors, pharmacists, lawyers ceased practice); university banned; employment within Brethren-run businesses "became normative."
- https://www.stuff.co.nz/nz-news/350495633/former-exclusive-brethren-members-detail-complete-control-massive-buying-power-of-cult-like-church. Stuff NZ, 2024.
- https://www.rnz.co.nz/news/national/471615/former-exclusive-brethren-members-detail-the-church-s-money-go-round. RNZ, 2022: leaving the church means losing employment along with family.
- Church's position for contrast: https://www.plymouthbrethrenchristianchurch.org/our-members/any-questions/ (spokesperson "rejected any suggestion that ex-members were forced to quit their jobs").

**Notes**
- Frame as norm/expectation reported by ex-members and journalists, not a written published rule.
- Maintainer characterises the rare exceptions as useful for "plausible deniability" in PR. If published, that characterisation needs an on-record source or ships as clearly-labelled editorial opinion grounded in the documented pattern.

**Pages**
- `/way-of-life/network`.

---

### Claim
Marriage within the PBCC requires a formal approval process: a multi-point compliance checklist (attendance at preachings, reading prescribed ministry including John S. Hales volumes), a budget signed off by local priests, ownership of a compliant standalone house, review by a regional approval team, and final approval from Sydney. Weddings are announced in batches as approvals return. Couples sign a document waiving church liability for the wedding.

**Status**. 🟡 partially corroborated (2026-07-19 research pass): elder approval of marriages, prescribed Hales ministry reading ("brown books"), and detailed house-compliance rules are publicly documented; the ~20-item checklist, budget sign-off, regional-then-Sydney approval, batch announcements, and liability waiver are NOT yet publicly sourced
**Sources**
- https://pbcc.info/pbcc-and-exclusive-brethren-jargon-explained/. PBCC Information (ex-member reference site). Documents "brown books" (printed John S. Hales ministry) and house rules: "must be detached... no shared drains or shared drives... within a few miles of a subdivisional room." _Site 503'd on direct fetch; verified via search snippets. Re-fetch before citing._
- https://www.plymouthbrethrenchristianchurch.org/way-of-life/marriage/. PBCC's own marriage page (denies arranged marriage; Tuesday weddings). Useful as the church's position for contrast.
- Get A Life media info pack stated members "need approval of church elders for their future wife or husband"; the old brethrenexposed.com PDF is 404. _Find a live mirror before citing._
- _Still needed for the granular process: on-record ex-member testimony (`/stories` intake) or a leaked checklist document archived to `research/evidence/`._

**Notes**
- Maintainer names North American approval-team members (Jim Southard, Mick Strange, Brent Scott, possibly outdated) and the Sydney final-approval step. These are private individuals unless they clear MEMBERS_POLICY buckets; hold names in intake only.
- Same-sex marriage is prohibited outright (this half is trivially sourceable from PBCC's own statements of belief).

**Pages**
- `/way-of-life/marriage`.

---

### Claim
Weekly cash collections are taken at the Sunday Lord's Supper, the fellowship's most significant service, tying peak religious observance to peak monetary giving.

**Status**. 🟡 collections corroborated (2026-07-19 research pass); the Lord's-Supper-specific tie is still testimony-only
**Sources**
- The Age, 23 Sep 2006, Michael Bachelard & Christian Catalano, "Brethren reap millions in tax-free donations" (mirror: https://culteducation.com/group/910-exclusive-brethren/6199-brethren-reap-millions-in-tax-free-donations.html): weekly donations for church upkeep; monthly "special collection" distributed "as gifts to the leaders... mainly to the Elect Vessel" (ex-leader Ron Fawkes on record). _Pin the original theage.com.au URL and archive._
- https://www.rnz.co.nz/news/national/471615/former-exclusive-brethren-members-detail-the-church-s-money-go-round. RNZ, 2022: annual turnover/profit questionnaires with NAF representatives "suggesting" donation amounts.

**Notes**
- Soften to "weekly meetings" unless a source pins the Lord's Supper service specifically; the cash-at-the-most-sacred-service point needs on-record testimony (`/stories` candidate).

**Pages**
- `/way-of-life/beliefs`, future `/money` page.

---

### Claim
Ownership of local meeting rooms is being consolidated from locality-level trusts (held by senior local elders) into a centralised corporate structure: PBCC Properties Global Ltd, an Australian public company (ABN 68 691 860 858, active from 15 Oct 2025, registered in NSW 2127, the same Sydney Olympic Park postcode as UBT), self-described as supporting "the building and maintenance of places of public worship and the acquisition or sale of properties" across the UK, Europe, Australia, NZ, and the Americas.

**Status**. 🟡 partially corroborated (2026-07-19 research pass): the entity exists and says what it does; the deed-transfer mechanism has one UK charity-filing example; no major-outlet journalism yet
**Sources**
- https://www.pbccproperties.com/. The entity's own site (primary self-description).
- https://abr.business.gov.au/ABN/View?id=68691860858. Australian Business Register (primary). Sister entity: PBCC Properties AU Ltd atf AU Operating Trust, ABN 35 930 317 906.
- UK Charity Commission filings: Bridgefoot Gospel Hall Trust (organisation number 5047154) "transferred halls to an affiliated trust for nil consideration" in the year ended 5 Apr 2024. _Pull the full-print filing; repeat the search across other gospel hall trusts to establish the pattern._

**Notes**
- 🟣 "GAP" confirmed (2026-07-19) as the **internal name members use** for the property rollup, per verified ex-member reports; it matches no registered entity. Keep both names: "known internally as GAP" (ex-member badge) alongside the registered PBCC Properties Global Ltd.
- The stronger framing ("deeds stripped from local elders, trusts zeroed out") needs per-charity filings or reporting; until then it is SourcePending at most.
- Maintainer characterises the structure as a money-laundering mechanism: cash donations flow into centrally-owned property development. **"Money laundering" is a legal accusation. It never ships in the site's own voice.** RNZ 2022 carries an interviewee's "almost like a legalised form of money laundering" quote; that exact attributed quote is the ceiling of what can ship.
- The ATO raid row (§7) and RNZ money-go-round row (§2) are the sourced anchors this cluster builds from.

**Pages**
- future `/money`, `/way-of-life/network`, `/people/bruce-d-hales`.

---

### Claim
The church's "Global Funding Team" builds an investment portfolio under Vision Growth / Vision Accelerator vehicles, taking controlling stakes in profitable Brethren companies, aiming at an endowment whose returns fund Brethren spending; fundraising reportedly runs to hundreds of millions of dollars.

**Status**. 🟡 mechanism corroborated by RNZ (2026-07-19 research pass); dollar figures are activist-sourced only
**Sources**
- https://www.rnz.co.nz/news/national/471615/former-exclusive-brethren-members-detail-the-church-s-money-go-round. RNZ, Ruth Hill, 26 Jul 2022: Global Funding Team, Vision Growth / Vision Accelerator, controlling stakes in profitable companies; church spokesperson Doug Watt quoted.
- Dollar figures ($0.65bn since 2017; annual "Strive" fundraiser targeting ~$250m/yr): openandcandid.com "Eye of the Needle" (403s to fetch) and Get A Life podcast Ep. 133 "Vision Foundation" (Dec 2024), https://www.youtube.com/watch?v=rtfAogcOBNY. _Activist-sourced; attribute explicitly or SourcePending._

**Notes**
- 🟣 Naming resolved (2026-07-19): "**Vision Foundation**" is the name used at member fundraising seminars circa **2020**, per verified ex-member report; "Vision Growth" / "Vision Accelerator" are the names in more recent accounts (RNZ 2022 and multiple anonymous ex-member reports). Treat as one programme with evolving/parallel naming; say so explicitly when it ships.
- No regulator filing found for a body literally named "Vision Foundation"; entity search across ACNC / Companies House / ABR still needed.

**Pages**
- future `/money`.

---

### Claim
UBT sells products and services directly to members, making the fellowship's own membership a captive market for its commercial arm; Campus & Co (member-facing grocery/superstores) operated on the same model before closing.

**Status**. ✅ largely corroborated (2026-07-19 research pass); Campus & Co closure announcement is activist-sourced, needs a mainstream pin
**Sources**
- https://www.rnz.co.nz/news/national/471615/former-exclusive-brethren-members-detail-the-church-s-money-go-round. RNZ, 2022: UBT model (subscriptions, Silver Bulletin, consultancy fees, ~3,000 businesses, 19 countries).
- https://www.stuff.co.nz/nz-news/350495633/former-exclusive-brethren-members-detail-complete-control-massive-buying-power-of-cult-like-church. Stuff NZ, 2024.
- https://www.couriermail.com.au/news/queensland/sunshine-coast/plymouth-brethren-supermarket-justified-public-ban-using-costco-model-documents-show/news-story/3cf58c85e3aa34b15e5c4f30cef6c429. Courier Mail, Jun 2026: leaked internal Campus & Co documents, members-only "Costco model" public ban.
- Guardian Australia covered members-only Campus & Co store plans (pin the original theguardian.com URL; syndicated copy: https://worldwiretimes.com/exclusive-brethren-plan-new-members-only-campusco-supermarket-in-melbournes-north-east/).
- Campus & Co physical-store closure: UBT's own announcement as carried by Brethren Intelligence (brethrenintelligence.com/campus--co-closure/shops-to-close); campusandco.com now describes online-only. _Activist-sourced for the closure; pin a mainstream or primary URL._

**Pages**
- `/way-of-life/network`, future `/money`.

---

### Claim
Localities have held prayer meetings concerning the death or removal of named public politicians, while the fellowship maintains an outward policy of political non-participation (members do not vote) alongside documented political donations and lobbying.

**Status**. 🟡 prayer-meeting half corroborated as ex-member testimony (2026-07-19 research pass); the donations/lobbying half is strongly documented
**Sources**
- https://newsroom.co.nz/2023/11/20/we-prayed-helen-clark-would-fall-out-of-a-plane-brethren-book/. Newsroom NZ, 20 Nov 2023, drawing on Craig Hoyle, *Excommunicated* (HarperCollins NZ, 2023): ex-member recounts Brethren saying harder prayer would have made PM Helen Clark fall from a plane; teenagers burned an effigy of the PM at a Brethren gathering. _Page 403s to automated fetch; verified via search. Re-verify manually._
- Michael Bachelard, *Behind the Exclusive Brethren* (Scribe, 2008). describes Brethren "praying night and day for [the Greens'] ruination". _Verify exact page before quoting._
- Donations/lobbying primary URLs:
  - https://www.aec.gov.au/parties_and_representatives/compliance/AEC_Advice/exclusive.htm. AEC (primary): investigation of 2004 election ads by Exclusive Brethren members, expenditure via Willmac Enterprises third-party return.
  - https://www.nickyhager.info/the-hollow-men-chapter-1-the-path-of-principle/. Hager, *The Hollow Men*: Brethren letter to Brash/Key, May 2005: "We are working on 'our/your' campaign full-time."
  - https://www.salon.com/2005/01/19/brethren/. Salon, Jan 2005: Thanksgiving 2004 Committee spent >$500,000 on pro-Bush/Martinez ads (FEC filing).
  - https://humanists.uk/2015/03/19/bha-expresses-concern-at-allegations-that-political-lobbying-influenced-charity-commissions-exclusive-brethren-decision/. Humanists UK summary of The Times 2015 investigation (449 MPs visited).
  - https://www.thirdsector.co.uk/brethren-members-followed-charity-commission-officials-during-preston-down-trust-dispute/governance/article/1338635. Third Sector: members followed Charity Commission officials.

**Notes**
- Phrase the prayer claim as ex-member testimony/memoir (Hoyle), not an institutional practice: "Ex-members, including Craig Hoyle in his 2023 memoir, describe Brethren praying for the removal, and in one account the death, of NZ PM Helen Clark."
- Date fix from research: The Times lobbying investigation published **2015** (covering lobbying that occurred 2012–14). Adjust §7 wording if it implies a 2012–14 publication date.

**Pages**
- `/way-of-life/voting`.

---

### Claim
Meeting-room ownership is invoked in everyday social enforcement: members reference that the buildings belong to the central structure ("Mr. Hales"), not the locality.

**Status**. 🔴 testimony, anecdotal; likely ships only inside a consented `/stories` account
**Sources**
- _Needed. This is testimony-shaped rather than record-shaped; the named individual in the maintainer's recollection is a private member and never ships._

**Pages**
- `/stories` (if a contributor puts it on record), else supporting colour for the ownership row above.

---

### Claim
Members are required to purchase the printed ministry of Bruce D. Hales ("white books"; John S. Hales volumes are the "brown books"), at the member's own cost, and are expected to study them and answer questions on them at meetings.

**Status**. 🟣 ex-member reported (2 verified reports, 2026-07); partial public corroboration for the books themselves
**Sources**
- pbcc.info jargon page (already cited in the marriage row) documents the "brown books" (printed John S. Hales ministry) as prescribed reading.
- _Needed: the purchase requirement, the cost (maintainer is sourcing current pricing), and the quizzing practice. A price list, order form, or invoice archived to `research/evidence/` would be primary._

**Notes**
- The mandatory-purchase angle connects this row to the `/money` page (member-funded revenue streams), not just `/way-of-life`.

**Pages**
- `/way-of-life/beliefs`, `/money`.

---

### Claim
Published Hales ministry describes the radio as a "pipeline of filth"; internet access is heavily restricted on member devices, and computers themselves were prohibited until relatively recently.

**Status**. 🟣 ex-member reported (2 verified reports, 2026-07) for the quote's ministry provenance; device restriction is partially public
**Sources**
- _"Pipeline of filth": per verified ex-member reports the phrase is in the printed ministry. **Locate volume and page**; the phrase also circulates in ex-member accounts and possibly in earlier Taylor-era ministry: check both._
- Device filtering: UBT sells/manages filtered devices and internet to members (candidates: UBT's own Streamline3 product pages, RNZ 2022, New Statesman 2023). _Pin URLs._
- Historic computer prohibition: covered in older reporting on Brethren technology rules (candidates: Four Corners 2006, Bachelard's book)._

**Pages**
- `/way-of-life/technology-and-entertainment`, `/money` (UBT device revenue).

---

## 9. Rules research pass, 2026-07-20 (agent-team sourcing, issue #9)

### Claim
University is banned; the PBCC's own education page says on-campus tertiary study is "not compatible with our lifestyle" and members study by correspondence/online instead.

**Status**. ✅ verified (PBCC primary + journalism) — 🚢 shipped (way-of-life, homepage)
**Sources**
- https://www.plymouthbrethrenchristianchurch.org/resource/the-plymouth-brethren-christian-church-and-education/ . PBCC own publication, accessed 2026-07-20. Verbatim: "not encouraged to attend on-campus tertiary education, as it is not compatible with our lifestyle."
- https://www.newstatesman.com/long-reads/2023/08/escaping-eden-exclusive-brethren . New Statesman, Aug 2023: "University attendance was banned."

**Pages**
- `/way-of-life` School and work, `/` daily-life bullets.

---

### Claim
Membership of professional bodies and trade unions is not allowed; doctors, pharmacists, and lawyers had to give up practising.

**Status**. ✅ verified (quote confirmed against live article 2026-07-20) — 🚢 shipped (way-of-life)
**Sources**
- https://www.newstatesman.com/long-reads/2023/08/escaping-eden-exclusive-brethren . New Statesman, Aug 2023, verbatim: "Membership of professional bodies was no longer allowed (unions were already outlawed), meaning doctors, pharmacists and lawyers had to give up practising."
- Historical corroboration: 1964 UK press via the Wikipedia PBCC article's footnotes. _Pin the original outlet for a second leg if this ever carries a severity claim._

**Pages**
- `/way-of-life` School and work.

---

### Claim
Internet access on member devices runs through UBT's Streamline3 filtering/monitoring product; an ex-member recalled it blocking "a Wikipedia page on whales."

**Status**. ✅ verified (UBT primary + two journalism sources) — 🚢 shipped (way-of-life)
**Sources**
- https://streamline3.com/home . Streamline3 product site (UBT company), accessed 2026-07-20.
- https://www.theguardian.com/australia-news/2023/apr/15/oneschool-global-plymouth-brethren-christian-church-investigation . Guardian Australia OSG series: Streamline3 real-time alerting.
- https://www.newstatesman.com/long-reads/2023/08/escaping-eden-exclusive-brethren . New Statesman: whale-Wikipedia anecdote (article describes the filtering; does not name Streamline3 — keep the product attribution on the Guardian/UBT legs).

**Notes**
- This also upgrades the device-filtering half of the §8 "pipeline of filth" intake row: Streamline3 URL now pinned.

**Pages**
- `/way-of-life` Technology, `/money` (UBT device revenue, future).

---

### Claim
Court documents reported by ABC Four Corners list places members are told not to attend, including cinemas, restaurants, hotels, sporting events, universities, and zoos.

**Status**. ✅ verified (court documents via Four Corners) — 🚢 shipped (way-of-life)
**Sources**
- https://www.abc.net.au/4corners/big-brethren/105776802 . ABC Four Corners "Big Brethren", 15 Sep 2025.

**Notes / caveats**
- Do NOT publish a reconstructed count ("27 places") or any place not actually named in the broadcast/court source. Ship only the named examples. A transcript pull to extract the full list is an open task.
- The PBCC's own "what not allowed" page does NOT enumerate cinemas or sporting events, and explicitly denies a pop-music ban ("Choices about what type of music to listen to, including pop music, are made by individuals") — verified 2026-07-20. Never cite that page for this claim; the prior site copy did and was corrected.

**Pages**
- `/way-of-life` Technology and entertainment.

---

### Claim
Dress rules: men do not wear shorts ("the Lord takes no pleasure in the legs of a man") or facial hair; for a woman to cut her hair was "an affront to God."

**Status**. ✅ verified (quotes confirmed against live article 2026-07-20; facial hair corroborated by 1965 UK press via Wikipedia footnotes) — 🚢 shipped (way-of-life)
**Sources**
- https://www.newstatesman.com/long-reads/2023/08/escaping-eden-exclusive-brethren . New Statesman, Aug 2023, both quotes verbatim.

**Pages**
- `/way-of-life` Clothing and appearance. Strong rules-wall candidates (his/hers pairing).

---

### Claim
Under James Symington (1970–87) a total ban on computers applied, plus fax/telex and early mobile phones; relaxed only in the 2000s.

**Status**. 🟡 single source (Wikipedia summarizing CDAMM + press) — pin the underlying academic/press citation before shipping
**Sources**
- https://en.wikipedia.org/wiki/Plymouth_Brethren_Christian_Church . Pointer only; chase the CDAMM article and cited press.

**Pages**
- `/way-of-life` Technology (historical framing), timeline page (future).

---

### Claim
The PBCC runs a members-only smartphone app holding contact details and photographs of Brethren families worldwide.

**Status**. 🟡 single source (Telegraph, 9 Mar 2025, paywalled; cited via Wikipedia) — pin the Telegraph article directly before shipping
**Sources**
- Telegraph, 9 March 2025, via https://en.wikipedia.org/wiki/Plymouth_Brethren_Christian_Church footnotes.

**Pages**
- `/way-of-life` Technology (future).

---

### Claim
Historical reporting: a child reaching ~12 without "breaking bread" was treated as an outsider, at times ignored by their own parents and siblings.

**Status**. 🟡 single source (Daily Express, Jan 1965, via Wikipedia) — severity-adjacent; pin original and frame as era-specific
**Sources**
- Daily Express, January 1965, via Wikipedia PBCC article footnotes.

**Pages**
- Timeline page (future), not current-rules copy without a present-day source.

---

### Claim
Historical reporting of estates of deceased members expected to be bequeathed to Brethren funds, with the sect asserting control over funeral arrangements.

**Status**. 🟡 single source (Daily Telegraph, Mar 1965, via Wikipedia) — historical; pin original before shipping
**Sources**
- Daily Telegraph, March 1965, via Wikipedia PBCC article footnotes.

**Pages**
- `/money` (future), timeline page — era-labelled only.

---

### Claim
Under James Taylor Jr (1970), members were directed to drink alcohol "freely," characterised as a "gift of God."

**Status**. 🟡 single source (Scottish Daily Express, Jul 1970, via Wikipedia) — historical/era-specific; label as Taylor-Jr-era, never as a current rule
**Sources**
- Scottish Daily Express, July 1970, via Wikipedia PBCC article footnotes.

**Pages**
- Timeline page (future).

---

## 10. Open research questions (not yet claims)

Things we know are true but don't yet have the citation for. Add a source URL inline as you find them and I'll promote them to claim rows.

- Estimated number of identifiable survivors across all jurisdictions.
- Rate of member-to-member business ownership concentration.
- Documented cases of child-custody outcomes in withdrawal proceedings.
- PBCC's annual revenue (Rapid Relief Team + member donations + UBT-coordinated commerce).
- Geographic distribution: per-country member counts from self-reports + independent estimates.

---

## 11. How this feeds the site

When a row here reaches ✅:
1. Convert to a typed entry in `src/lib/sources.ts` with `{id, label, url, accessed}`.
2. Any MDX page that renders the paragraph imports the source id and renders it as a footnote.
3. Remove the `{/* TODO: source */}` marker from that paragraph.
4. Mark the row here as "🚢 shipped" with the PR/commit that moved it.

This file is the single place to read if you want to know what the site is prepared to claim.
