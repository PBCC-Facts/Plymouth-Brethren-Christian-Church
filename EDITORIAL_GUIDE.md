# Editorial Guide — Voice, Sourcing, and Parody Hygiene

This guide is the editorial spine for all copy on the site. Everyone writing (human or AI) must follow it. Deviation weakens both the criticism and the fair-use posture.

> **Change log — 2026-04-23.** The site has moved from a deadpan parody register (old "Register A") to an openly snarky one ("Register C"). Register A is retired. Anything on disk that reads as deadpan corporate PR voice is now legacy and will be rewritten on its next edit. Register B (plainspoken journalistic) is unchanged and is still correct for explanatory content.

---

## 1. Two registers, strictly separated

### Register C — Openly snarky inversion (used on mirror pages)

Pages: homepage, `/way-of-life`, `/our-members`, `/news`, and any page that structurally mirrors a PBCC page. These are the pages whose job is to rank against PBCC's own copy on the same search terms, and to reframe what that copy says.

Rules:

1. **Openly snarky inversion.** The framing is the punch. Take the PR sentence and flip the spin while keeping every factual noun. *"We help drive local economies"* → *"We help drive local economies — our own."* *"We are a connected global Community"* → *"We are a connected global Community — under one man."*
2. **Specific, not hyperbolic.** Name the practice. *"Hundreds of survivors"* > *"countless victims"*. *"Members do not share meals, accommodation, marriage, or business partnership with those outside the fellowship"* > *"members are cut off."* Concrete detail beats emotional adjectives every time — and it is what makes the register legally and editorially defensible.
3. **Humor lives in the literal meaning of the sentence.** Not in punctuation, not in adjectives, not in asides. No exclamation marks. No scare quotes. No *"(yes, really)"*. If the sentence is funny, the facts are doing it.
4. **Never at a survivor's expense.** The subject of every joke is the fellowship's rebrand or its leadership — never a former member. When in doubt, cut the joke.
5. **Every claim still carries a footnote.** Register C does not relax the sourcing rule; it sharpens it. Snark without a citation is libel. If you cannot source a sentence, cut it or mark `{/* TODO: source */}` in the MDX and add a `<SourcePending />` component so it can never silently ship.
6. **Third person, present tense, active voice.** *"Members live under a single global leadership structure, led by the current Man of God, Bruce D. Hales."* Avoid first-person plural unless it is framed as the parody voice of the fellowship itself (hero titles, eyebrows — where the "we" is clearly read as the PBCC's own voice, reframed).
7. **Never lift PBCC sentences verbatim.** Every sentence is originally written. If you find yourself word-for-word close to the source, rewrite from scratch. Paraphrase their framing; never adopt it.
8. **Section labels are deadpan.** The small uppercase labels above each section (`About this.` / `Read the reporting.` / `Get to know about this.` / `Open by design.`) stay in a calm, period-terminated register. That contrast — calm labels over snarky body copy — is the visual signature of the site.

### Register B — Plainspoken journalistic (used on explanatory content)

Pages: `/mission` (methodology sections), `/sources`, `/glossary`, `/faq`, `/timeline`, `/doctrine/*`, `/litigation`, `/resources`, `/about-this-site`.

Rules:

1. **Plainspoken, direct, journalistic.** No satire. No parody voice. This is the page someone lands on from a Google search when they want to understand what a doctrine is, or what a term means, or what a case is about.
2. **Lede-first.** The first sentence answers the question in the H1. FAQ answers target ~50 words. Glossary definitions start with a one-sentence plain-English definition before the context.
3. **Sources inline.** Every factual claim has a superscript footnote. Same rule as Register C. Google rewards cited content on YMYL-adjacent topics.
4. **Define jargon on first use, link to glossary.** *"When a member is* withdrawn from *— PBCC's term for excommunication — […]"*.
5. **Distinguish PBCC's self-description from documented practice.** *"The church states that members live alongside people of other faiths.¹ In practice, the Doctrine of Separation prohibits eating, marrying, working in business with, or sharing accommodation with non-members.²"*
6. **No adjectives doing argumentative work.** *"Coercive"*, *"abusive"*, *"cruel"* appear only in direct quotes from named sources (court rulings, Senate findings, investigative journalism). Describe the practice; let readers draw the conclusion.

---

## 2. Sourcing rules (apply to both registers)

1. Every claim about PBCC belief, practice, history, or leadership is footnoted to one of:
   - Peer-reviewed academic source
   - Court ruling, Senate / parliamentary inquiry, or charity-regulator finding
   - Major investigative journalism (ABC Four Corners, New Statesman, NYT, Guardian, The Post NZ, etc.)
   - Official PBCC publication or Bruce D. Hales ministry text (quoted accurately)
   - PBCCstories.org survivor testimony (when on-record and the survivor has consented to identification)
2. One-source claims are acceptable for uncontested factual matters (dates, locations, leadership succession). Contested or severity claims should have ≥ 2 sources when available.
3. Sources live in a typed registry: `src/lib/sources.ts`. Every page imports from that registry; no ad-hoc URLs in body copy. Any claim appearing on the site maps to a row in [`FACTS.md`](FACTS.md) at status ✅ before it ships with a `<Footnote>` component.
4. When a claim is true but cannot be sourced to a public document right now, mark `{/* TODO: source */}` and render a visible `<SourcePending />` component. **Do not invent a citation.** Do not silently ship.
5. Paraphrase PBCC's own words rather than quoting at length. Short quotes (≤ 40 words) of published PBCC statements, clearly attributed, are fine and well within fair use for purposes of criticism. Block quotes of their copy are not.

---

## 3. Transformation examples

The pattern: take a real PBCC framing → write an original sentence in Register C that states the documented practice with footnotes. The sentence is original prose, not a word-swap.

### Example 1 — Neighbours and separation

**PBCC framing:** *"Members live and work alongside people of other faiths as good neighbours."*

**Register C:**
> We care about our neighbours — at a doctrinally-mandated distance. Members do not share meals, accommodation, marriage, or business partnership with those outside the fellowship.¹ Good neighbourliness is expressed through service at a respectful distance.

Footnote 1 → CDAMM + CESNUR (Briggs 2008) + PBCC's Statement of Belief explaining 2 Timothy 2:19–22 as the scripture of separation.

Why this works: the title is the flip. The body names the practice in list form. The closing line is PR-voice reframed as the joke-that-isn't-a-joke — "respectful distance" is exactly how the PR register would describe prohibition.

### Example 2 — Leadership

**PBCC framing:** *"Our community values participation and mutual decision-making."*

**Register C:**
> We are a connected global Community — under one man. More than 54,000 members across 19 countries live under a single global leadership structure, led by the current World Leader, Bruce D. Hales, known within the fellowship as the Man of God.¹²

Footnotes → PBCC's own resource page on Bruce D. Hales + New Statesman long-read.

Why this works: "under one man" does all the work. The body copy is plain fact: how many members, where, under whom. No editorializing needed — the scale of the concentration is the point.

### Example 3 — Family and the withdrawn

**PBCC framing:** *"Family is central to our way of life. We value strong family bonds."*

**Register C:**
> Family is central to the fellowship — right up until it isn't. Bonds between parents, spouses, siblings, and children are treasured, and, when a member is withdrawn from, those bonds are prayerfully adjusted: the remaining members decline to eat with the withdrawn person, share accommodation with them, or remain married to them while separation stands.¹ Minor children are frequently retained with the remaining member.²

Footnotes → New Statesman, Reach Out Trust, UK Parliament submission 2012, PBCCstories.org case studies.

Why this works: the reveal is in "right up until it isn't". The body then does the paraphrasing job in flat, specific language. "Prayerfully adjusted" is lifted as a lexical echo of PR-voice, but the content around it is documented practice.

### Example 4 — Education (Register B, for contrast)

**Plainspoken journalistic version — for a `/doctrine/education` page:**

> The Plymouth Brethren Christian Church educates member children at OneSchool Global, an international school network with campuses in 19 countries.¹ Campuses are staffed primarily by members and serve primarily member families. Governance documents and former-teacher testimony indicate restrictions on technology use, external contact, and participation in activities alongside children of other faiths.²

Notice: no inversion, no joke, no "—". Plain facts, footnoted, for the reader who wants to understand the model. This is the register a journalist linking to our site expects when they click through from a hot page.

---

## 4. Anti-patterns (reject on sight)

- **Over-the-top satire.** *"Cult leader"*, *"brainwashed"*, *"sinister"*, *"evil"*. Weakens us legally, weakens us editorially.
- **Unsourced severity claims.** *"Abuse is covered up."* → unless you can point to a specific documented case, do not. Use the specific case: *"In [named case], [specific outcome].¹"*
- **Word-swap parody.** Taking a PBCC sentence and substituting *"shunning"* for *"fellowship"* without rewriting the structure. This is weak commentary and weakens fair use.
- **Breaking character with punctuation.** Parenthetical asides like *"(yes, really)"*, emoji, winks, exclamation marks. The voice is the whole game.
- **Quoting PBCC at length.** Short attributed quotes only. We describe; they don't ghostwrite us.
- **Invented footnotes.** Anything not verifiable at the cited URL right now is falsified. Mark `{/* TODO: source */}` and use `<SourcePending />` instead.
- **Jokes at survivor expense.** Non-negotiable.
- **Register mixing on a single page.** Pick C or B per page. Section labels (the small uppercase labels with the gray rule) stay deadpan in both registers; that's not mixing.

---

## 5. The self-test

Before shipping a paragraph, ask:

1. Is every factual claim footnoted to a source in `src/lib/sources.ts`, or marked `<SourcePending />`? *(If no: fix before merge.)*
2. Does the sentence still work if I delete every adjective and punctuation-mark aside? *(If no: the humor is in decoration, not content. Rewrite.)*
3. Is the humor inside the literal meaning of the sentence? *(It should be.)*
4. Could a judge reading this see transformative commentary and criticism rather than derivative copying? *(If no: rewrite.)*
5. Would a survivor reading this feel their experience was taken seriously rather than played for laughs? *(Non-negotiable.)*
