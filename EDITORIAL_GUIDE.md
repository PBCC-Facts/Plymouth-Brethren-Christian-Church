# Editorial Guide — Voice, Sourcing, and Parody Hygiene

This guide is the editorial spine for all copy on the site. Everyone writing (human or AI) must follow it. Deviation weakens both the humor and the fair-use posture.

---

## 1. Two registers, strictly separated

The site has two voices. Never mix them on the same page.

### Register A — Parody / Criticism (used on the mirror pages)

Pages using Register A: homepage, `/way-of-life`, `/our-members`, `/news`, and any other page that structurally mirrors a PBCC page.

Rules:

1. **Deadpan, warm, corporate PR voice.** Never wink. Never break character. The humor is entirely in what the words say, not in how they're said.
2. **Never editorialize.** No "shockingly", "horrifyingly", "disturbingly", "alarmingly". No exclamation points. No rhetorical questions aimed at the reader. The sentence "Members are doctrinally prohibited from sharing a meal with their adult children who have been withdrawn from" is stronger than any amount of adjectives around it.
3. **Write in the third person, present tense, active voice.** "Members celebrate the Lord's Supper every Sunday with other current members in good standing."
4. **Prefer calm abstract nouns** ("fellowship", "participation", "guidance", "stewardship", "care", "commitment") — the PR voice loves them. Use them to frame the documented reality. "Fellowship is extended each week to members in good standing; members who have been withdrawn from are, in care, excluded from fellowship until such time as restoration is appropriate."
5. **Never lift PBCC sentences and swap words.** Every sentence is original. If you find yourself word-for-word close to their page, rewrite from scratch.
6. **The humor is the same sentence as the indictment.** A good parody sentence should read as plausibly the real PBCC site for exactly one beat, and then reveal the practice. Don't put the punch at the end as a "gotcha"; let the calm PR language *be* the reveal.
7. **No first-person plural** ("we", "our church") in Register A unless it is inside quoted parody voice that is itself framed as satire (e.g. hero subheads). When in doubt, third person.
8. **Every factual claim gets a footnote.** If you cannot source a sentence to a verifiable third party, cut the sentence or mark `{/* TODO: source */}` in the MDX.

### Register B — Explanatory / Journalistic (used on supporting content)

Pages using Register B: `/about-this-site`, `/sources`, `/glossary`, `/faq`, `/timeline`, `/doctrine/*`, `/litigation`.

Rules:

1. **Plainspoken, direct, journalistic.** No satire. No parody voice. This is the page someone lands on from a Google search when they want to understand what this doctrine is or what this term means.
2. **Lede-first.** The first sentence answers the question in the H1. FAQ answers target ~50 words. Glossary definitions start with a one-sentence plain-English definition before the context.
3. **Sources inline.** Every factual claim has a superscript footnote, same as Register A. Google rewards cited content on YMYL-adjacent topics.
4. **Define jargon on first use, link to glossary.** "When a member is *withdrawn from* — PBCC's term for excommunication — [...]".
5. **Distinguish PBCC's self-description from documented practice.** "The church states that members live alongside people of other faiths.¹ In practice, the Doctrine of Separation prohibits eating, marrying, working in business with, or sharing accommodation with non-members.²"
6. **No adjectives doing argumentative work.** "Coercive", "abusive", "cruel" should appear only in direct quotes from named sources (court rulings, Senate findings, investigative journalism). Describe the practice; let readers draw the conclusion.

---

## 2. Sourcing rules (applies to both registers)

1. Every claim about PBCC belief, practice, history, or leadership is footnoted to one of:
   - Peer-reviewed academic source
   - Court ruling, Senate/parliamentary inquiry, or charity regulator finding
   - Major investigative journalism (ABC Four Corners, New Statesman, NYT, Guardian, The Post NZ, etc.)
   - Official PBCC publication or Bruce D. Hales ministry text (quoted accurately)
   - PBCCstories.org survivor testimony (when on-record and the survivor has consented to identification)
2. One-source claims are acceptable for uncontested factual matters (dates, locations, leadership succession). Contested or severity claims should have ≥2 sources when available.
3. Sources live in a typed registry: `src/lib/sources.ts`. Every page imports from that registry; no ad-hoc URLs in body copy. This means we never break a citation by changing a URL, and we can audit every claim by reading one file.
4. When a claim is true but cannot be sourced to a public document right now, mark `{/* TODO: source — [claim] */}` in the MDX and add it to the end-of-session flag list. **Do not invent a citation.**
5. Paraphrase PBCC's own words rather than quoting at length. Short quotes (≤40 words) of PBCC published statements, clearly attributed, are fine and well within fair use for purposes of criticism. Block quotes of their copy are not.

---

## 3. Transformation examples (the core of the craft)

These are the worked examples. The pattern: take a real PBCC framing → write an original sentence in the same register that states the documented practice with a footnote. The sentence must be original prose, not a word-swap.

### Example 1 — Neighbors and separation

**PBCC framing (paraphrased from public materials):** "Members live and work alongside people of other faiths as good neighbors."

**Register A parody:**
> Members live and work alongside people of other faiths as good neighbors, within the guidance of the Doctrine of Separation, under which members do not share meals, accommodation, marriage, or business partnership with those outside the fellowship.¹ Good neighborliness is expressed through service at a respectful distance.

Footnote 1 → CDAMM + New Statesman + PBCC's own statement-of-belief explaining 2 Timothy 2:19–22 as separation scripture.

Why this works: the first clause is reassuring boilerplate; the "within the guidance" pivot is the same register; the explicit list is documented practice; the closing sentence reframes distance as a virtue. Not a single word is lifted from the source.

### Example 2 — Leadership and participation

**PBCC framing:** "Our community values participation and mutual decision-making."

**Register A parody:**
> The community values participation and mutual decision-making, guided by a global leadership structure through which the World Leader — known within the fellowship as the Man of God — offers direction to regional priests and local leading brothers.¹ Members are warmly encouraged to defer to this guidance in matters of doctrine, marriage, business, schooling, and personal devotion.²

Footnotes → public reporting on Bruce D. Hales and the "Man of God" office (Wikipedia, New Statesman, The Post NZ, PBCC's own resource page on Bruce D. Hales).

Why this works: "guided by" and "warmly encouraged to defer" are exactly how the PR voice would soften a top-down authority structure. The word "defer" lands the point without any editorializing.

### Example 3 — Family and the withdrawn

**PBCC framing:** "Family is central to our way of life. We value strong family bonds."

**Register A parody:**
> Family is central to the way of life of the fellowship. Bonds between parents, spouses, siblings, and children are treasured and, when a member is withdrawn from, are prayerfully adjusted: the remaining members continue in their care for the withdrawn person by declining to eat with them, share accommodation with them, or remain married to them while separation stands.¹ In the care of the assembly, minor children are frequently retained with the remaining member.²

Footnotes → New Statesman long-read, ABC Four Corners "Behind the Exclusive Brethren", Senate of Australia inquiries, PBCCstories.org case studies.

Why this works: "prayerfully adjusted" is perfect PR euphemism register. The list of prohibitions is documented. The final sentence, in the same tone, states the child-custody consequence in a phrasing that reads as concern for welfare.

### Example 4 — Bible study and authority

**PBCC framing:** "Members study the Bible daily and draw on the ministry of our leadership for guidance."

**Register A parody:**
> Members study the Bible daily. For collective interpretation, the fellowship draws on the recorded ministry of the Man of God, whose addresses are published in bound volumes and studied in homes and meetings as the authoritative current expression of scriptural guidance.¹ Attending services of other churches, or engaging in independent scriptural study with those outside the fellowship, is a matter the assembly addresses with pastoral care.²

Footnotes → PBCC's own publications (volumes of ministry), New Statesman, Reachout Trust, CDAMM.

Why this works: "authoritative current expression of scriptural guidance" is dense PR speak that accurately describes the doctrinal status of leader ministry. The final sentence, with "pastoral care" as the soft cover for disciplinary consequences, is the joke-that-isn't-a-joke.

### Example 5 — Education and OneSchool Global

**PBCC framing:** "Our school network provides excellent education grounded in Christian values."

**Register A parody:**
> The fellowship's school network, OneSchool Global, provides members' children with education grounded in the church's values.¹ Campuses are staffed primarily by members of the fellowship, serve primarily member families, and operate within guidance on technology use, external contact, and participation in activities with children of other faiths.² The model is considered by the fellowship to balance academic standards with the integrity of the community's way of life.

Footnote → reporting on OneSchool Global governance, Senate inquiry submissions, former OSG teachers' testimony.

Why this works: everything is literally true and neutrally phrased. "Balance academic standards with the integrity of the community's way of life" is PR-voice for "insulate from outside influence." The reader does the work.

---

## 4. Anti-patterns (reject on sight)

- **Word-swap parody.** Taking a PBCC sentence and substituting "shunning" for "fellowship." This is weak commentary and weakens fair use.
- **Over-the-top satire.** Phrases like "cult leader", "brainwashed", "sinister", "evil". Makes us look unserious and triggers Google's deceptive-content classifier negatively.
- **Unsourced severity claims.** "Abuse is covered up." → unless you can point to a specific documented case, don't. Use the specific case: "In [named case], [specific outcome]¹" with citation.
- **Breaking character.** Parenthetical asides like "(yes, really)", emoji, winks. The voice is the whole game.
- **Quoting PBCC at length.** Short attributed quotes only. We describe; they don't ghostwrite us.
- **Invented footnotes.** Anything not verifiable at the cited URL right now is falsified. Mark TODO instead.

---

## 5. The self-test

Before you ship a paragraph, ask:

1. Could this sentence plausibly appear on the real PBCC site for at least one second? *(If no: too strident.)*
2. Is every factual claim footnoted to a source on file in `lib/sources.ts`? *(If no: fix before merge.)*
3. Is the humor/indictment inside the sentence's literal meaning, or is it in the framing? *(It should be in the literal meaning.)*
4. Would a judge reading this see transformative commentary and criticism rather than derivative copying? *(If no: rewrite.)*
5. Would a survivor reading this feel their experience was taken seriously rather than played for laughs? *(Non-negotiable.)*
