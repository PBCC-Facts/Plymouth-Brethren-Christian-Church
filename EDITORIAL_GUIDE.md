# Editorial Guide. Voice, sourcing, and aggregator hygiene.

This guide is the editorial spine for all copy on the site. Everyone writing (human or AI) must follow it. Deviation weakens both the record and the fair-use posture.

> **Change log, 2026-04-23.** The site has moved off a parody / criticism framing (old Register A and Register C both retired) to a single journalism-and-transparency register: plainspoken, aggregator, third-person. What this site does is organise the record that journalists, regulators, courts, and survivors have already put in public. It does not claim original reporting. Editorial "we" is permitted only when the referent is the editors of this project, and impersonal constructions ("this site," "the project") are preferred.

---

## 1. The register. Plainspoken aggregator, with teeth.

Used on every page of the site. One register, no mixing.

Rules:

1. **Third-person, named subject.** "The Plymouth Brethren Christian Church," "the PBCC," or "the fellowship." Never "we" when the referent is the PBCC. Editorial "we" is permitted only when the referent is clearly the editors of this project (methodology sections, correction notes, site footer). Prefer impersonal constructions where natural.
2. **Aggregator framing.** Reporting is attributed to the outlet that published it. The site does not claim original reporting. Body copy reads: *"New Statesman's long-read described…," "The UK Charity Commission found…," "ABC Four Corners reported…"* rather than *"we found / we report / our investigation."*
3. **Specific, not hyperbolic.** Name the practice, the case, the outlet, the date. *"Hundreds of ex-members documented in Senate submissions"* is better than *"countless victims."* The facts do the work.
4. **Teeth where the facts warrant.** The register is plainspoken **and** unsoftened. "The Plymouth Brethren Christian Church spends real money softening a record that includes a leader recorded telling members in mental distress to drink rat poison" is appropriate. "We think they're bad" is not.
5. **Every claim footnotes.** The site's single enforceable rule. Use `<Footnote id="…" />` or `<SourcePending note="…" />`, never a bare claim.
6. **Survivor-first.** The subject of every sharp sentence is the fellowship's rebrand, its leadership, or its institutions. Never a survivor. When in doubt, cut.
7. **Quoting the PBCC.** Short attributed quotes only. Paraphrase their framing in our own third-person sentences. Block-quoting their copy weakens the fair-use posture and is unnecessary.
8. **No em-dashes.** Replace with colons, full stops, or parenthetical commas. Preserved only inside verbatim quotations from primary sources (Hales ministry transcripts, court filings, outlet copy).

### Pages where this register applies

Every page. The homepage, `/mission`, `/resources`, `/people` index and profiles, the future `/news` and `/litigation` and `/way-of-life/*` pages, the future `/doctrine/*` pages, all of them. One voice across the board.

### What is retired

- **Register A** (deadpan parody voice mimicking the PBCC's PR register). Retired 2026-04-23.
- **Register C** (openly snarky inversion). Retired 2026-04-23.
- The "mirror the structure, invert the content" transformation examples. Retired; do not reintroduce.

---

## 2. Sourcing rules

1. Every claim about PBCC belief, practice, history, leadership, or conduct footnotes to one of:
   - Peer-reviewed academic source.
   - Court ruling, Senate or parliamentary inquiry, or charity-regulator finding.
   - Major investigative journalism (ABC Four Corners, New Statesman, NYT, Guardian, The Post NZ, Stuff NZ, The Times (London), etc.).
   - Official PBCC publication or Bruce D. Hales ministry text (quoted accurately).
   - First-person survivor testimony published on the record, with the survivor's explicit consent to identification, hosted on this site under the `/stories` pipeline once live, or at a survivor-run archive like PBCCstories.org or the Get A Life podcast.
   - **Verified ex-member reports** (see [docs/REPORTS_SYSTEM.md](docs/REPORTS_SYSTEM.md)): the reporter's identity and membership history are verified by the editor and held on file, off-repo; the report may be anonymous on the site. Claims supported only by this class render a visible ex-member badge and are phrased as reported ("verified ex-members report that…"), never as established fact. FACTS.md marks these rows 🟣.
2. One-source claims are acceptable for uncontested factual matters (dates, locations, leadership succession). Contested or severity claims must have two or more independent sources when available. Ex-member reports corroborate and count, but only public-record sources move a row to ✅.
3. Sources live in a typed registry: `src/lib/sources.ts`. Every page imports from that registry. No ad-hoc URLs in body copy. Any claim on the site maps to a row in [`FACTS.md`](FACTS.md) at status ✅ before it ships with a `<Footnote>` component.
4. When a claim is true but cannot be sourced to a public document right now, mark `{/* TODO: source */}` and render a visible `<SourcePending />` component. Do not invent a citation. Do not silently ship.
5. Paraphrase PBCC's own words rather than quoting at length. Short quotes (40 words or fewer) of published PBCC statements, clearly attributed, are fine under § 107 for criticism and commentary.

---

## 3. Transformation examples

The pattern: take a reported fact or public-record finding and write an original sentence in the aggregator register that states the practice with footnotes. Attribute the reporting; do not smuggle the outlet's voice in as ours.

### Example 1. Neighbours and separation

**PBCC framing (from `/our-neighbours` on PBCC's site):** *"Members live and work alongside people of other faiths as good neighbours."*

**Aggregator register:**
> Academic surveys and the UK Charity Commission's 2014 Preston Down Trust decision record the Doctrine of Separation as governing who PBCC members may eat with, live with, marry, or do business with.¹ ² Members do not share meals, accommodation, marriage, or business partnership with those outside the fellowship.¹ ³

Footnote 1 is CDAMM; footnote 2 is the Preston Down Trust decision; footnote 3 is PBCC's own Statement of Belief. Three independent sources on one separation paragraph: two external, one the fellowship's own.

### Example 2. Leadership

**Aggregator register:**
> The Plymouth Brethren Christian Church's current World Leader, Bruce D. Hales, has held the office since 2002. Mainstream reporting has characterised the role, known within the fellowship as the "Man of God," as the operational and doctrinal authority over roughly 54,000 members across 19 countries.¹ ²

Footnotes: PBCC's own resource page on Bruce D. Hales, plus New Statesman's 2023 long-read. The sentence quotes no one; it attributes reporting and states documented fact.

### Example 3. The 2015 UK ministry meeting

**Aggregator register:**
> In September 2015, at a UK ministry meeting, Hales told members that a 25-year-old New Zealand man in contact with ex-member family would be "better to take arsenic, or go and get some rat poison or something, take a bottle of it."¹ ² The PBCC's on-record response was that the remarks "should not be given a literal interpretation" and that the phrase was "a common, everyday metaphor."²

Direct quotation from the primary source (the reporting, which reproduces the leaked recording) is appropriate and fair-use-defensible. The aggregator voice frames the citation; it does not paraphrase or embellish.

### Example 4. Regulators

**Aggregator register:**
> On 19 March 2024 the Australian Taxation Office raided Universal Business Team offices at Sydney Olympic Park, under the ATO's "Private Wealth, Behaviours of Concern" programme.¹ Guardian Australia describes UBT as "the umbrella organisation for the various businesses and charities run by the sect under the leadership of Bruce Hales."¹

One source per clause where available; severity claims double-sourced where possible.

---

## 4. Anti-patterns (reject on sight)

- **Over-the-top satire.** *"Cult leader"*, *"brainwashed"*, *"sinister"*, *"evil."* Weakens the site legally and editorially. Named official-designations from mainstream outlets ("extremist cult" per Rudd 2007, "cult" per Albanese 2025) are quoted to those sources, not adopted as the site's own voice.
- **Unsourced severity claims.** *"Abuse is covered up."* Unless a specific documented case backs it, do not publish. Use the named case: *"In the Lindsay Jensen case, the PBCC shut-up-then-restored Jensen while the child victims begged Bruce Hales by letter not to reinstate him.¹"*
- **First-person mimicry.** Any sentence that reads as if the PBCC's PR team wrote it. *"We care about our neighbours"* inverted or not. Retired with Register C.
- **Breaking character with punctuation.** Scare quotes, exclamation marks, parenthetical asides like *"(yes, really)"*, emoji. The register is plain.
- **Quoting PBCC at length.** Short attributed quotes only. We describe; they do not ghostwrite us.
- **Invented footnotes.** Anything not verifiable at the cited URL right now is falsified. Mark `{/* TODO: source */}` and use `<SourcePending />` instead.
- **Jokes at survivor expense.** Non-negotiable.
- **Em-dashes.** Out, everywhere except verbatim quotations from primary sources.

---

## 5. The self-test

Before shipping a paragraph:

1. Is every factual claim footnoted to a source in `src/lib/sources.ts`, or marked `<SourcePending />`? (If no: fix before merge.)
2. Is the subject of the sentence named? (PBCC / the fellowship / Bruce D. Hales / the UK Charity Commission / ABC Four Corners, not "we".)
3. Is the reporting attributed? (If you wrote a factual claim, the source has to say it first.)
4. Does the sentence still work if I delete every adjective? (If no: the humour or the hedge is doing the work; rewrite.)
5. Would a judge reading this see news reporting, criticism, and research, properly sourced? (If no: rewrite.)
6. Would a survivor reading this feel their experience was taken seriously rather than played for sides? (Non-negotiable.)
