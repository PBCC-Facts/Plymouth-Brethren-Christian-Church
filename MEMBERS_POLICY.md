# MEMBERS_POLICY.md. inclusion rule for `/people`

This is the editorial and legal gate for the `/people` section. Read this before proposing, drafting, or merging a profile.

The page exists to document, with sources, the named individuals who shape public-facing PBCC activity. leadership, historical leaders, and executives of the commercial network. It is deliberately narrow. Private members of the fellowship who have not chosen to be public do not appear here and never will.

## 1. Inclusion buckets

A person may be profiled if they clear **at least one** of the following:

1. **Self-disclosed by PBCC.** Named on the church's own resource pages, press releases, official publications, or affiliated charity filings.
2. **Documented leadership role.** Current or former office within the fellowship, established by independent reporting, court record, or the church's own record. Dead leaders are in scope.
3. **Substantive naming in major journalism, or in court / regulator filings.** Named (not merely referenced in passing) in ABC Four Corners, New Statesman, The Guardian, NYT, The Post (NZ), SMH, or equivalent outlets; or a named party in public court, charity-regulator, tax, or parliamentary-inquiry proceedings.
4. **Named executives of the commercial network.** Directors or senior officers of Brethren-linked business entities (UBT, OneSchool Global, Rapid Relief Team, and the like) who appear by name in regulatory actions. including the 2024 ATO raid on UBT offices. or in sworn filings.

A person who does not clear any bucket is not profiled, regardless of what we believe.

## 2. Required fields for a profile

No row is merged without every one of these:

- **`inclusion_basis`**. one or two sentences stating which bucket(s) the subject clears and why. This text renders on the profile page; the reader sees the editorial gate.
- **At least one registered source.** Every `source_id` on a row must exist in `src/lib/sources.ts`.
- **Every factual claim footnoted.** Any `[[cite:id]]` token in the body must reference a registered source; any claim we cannot pin to a URL uses `[[pending:note]]` and renders a visible ⚠︎ marker.
- **FACTS.md row for every claim.** The profile and FACTS.md move together. A claim that is not in FACTS.md does not ship in a profile.
- **Severity-claim rule.** Anything touching abuse, finance misconduct, or pending litigation requires **at least two independent sources**. Single-source rows are permitted for uncontested facts (dates, roles, succession).
- **Register B throughout.** Plainspoken, active voice, third person. No snark on an individual. If a section wants to mirror PBCC's framing, the section goes on a mirror page elsewhere on the site, not here.

## 3. Review protocol

1. Draft as a new row in `src/data/members.seed.ts` (v1) or `public.members` (once the Supabase read path lands) with `is_published = false`.
2. Land any new sources in `src/lib/sources.ts` in the same pull request.
3. Add or update FACTS.md rows for every claim.
4. Open the pull request as **draft**. At least one reviewer other than the author approves before the draft is flipped to ready-for-review.
5. Flip `is_published = true` only in the merge commit. Never ship a profile and its sourcing in separate commits.

## 4. Correction process

Anyone reading the site can file a correction. The profile footer carries a pre-filled issue link; `/contact` handles confidential tips.

- **Factual error on a published profile:** file a correction issue. We aim to acknowledge within 7 days and resolve (merge a correction PR, or explain the dispute) within 30. Persistent disputes are recorded on the profile page.
- **Removal request by the subject:** we do not unpublish truthful, sourced material on request. We will add on-record context, correct errors, and publish a right-of-reply statement verbatim if supplied in writing.
- **Source URL rot:** report via an issue. We keep archived copies of primary URLs in `research/` where practical and swap to the archive URL when the live one disappears.

## 5. Lifecycle: death, role change, departure

- **Role change.** Update `current_role` and add a note in the "Public record" section. Old role lives in the body as history.
- **Death.** `category` moves to `historical`. The profile stays. Obituaries and named-in-obituary details are in scope for the same sourcing rules.
- **Departure from the fellowship.** The person remains profiled as `historical` for the period they held a qualifying role. Post-departure material is in scope only if it meets the inclusion rule on its own (e.g. they become a public figure elsewhere).

## 6. Hard lines

- Private members of PBCC who have not chosen to be public are never listed. not in profiles, not in the roadmap, not in bare-name lists.
- No family members, spouses, or children of public figures appear by name unless they independently clear the inclusion rule.
- No claim is shipped without a source. The `[[pending:…]]` escape hatch renders a visible warning; it does not substitute for a citation.
- No profile may carry Register C (snarky mirror) on the individual. Register C stays on the institutional mirror pages (home, `/way-of-life`).
- Outing is never in scope. Sexual orientation, mental health, and similar personal facts appear only where the subject has made them public themselves.

## 7. How to propose a profile

File a GitHub issue labeled `new-fact` with:

- **Name.**
- **Which inclusion bucket** they clear.
- **At least one public-source URL** supporting the bucket.
- **Role** within PBCC or its commercial network.

We will triage, add a stub row (`is_roadmap_only = true`) if the inclusion bucket is clear, and open a draft profile pull request when sourcing is sufficient.
