# Contributing

This project accepts corrections, new evidence, new sources, and code from anyone. The bar is the same for everyone, including the maintainer: every factual claim carries a public citation.

## The one rule

**No claim ships without a source.** A claim enters the site only after its row in [FACTS.md](FACTS.md) reaches ✅ verified status: two independent sources, or one primary source (court ruling, parliamentary inquiry, regulator finding, or PBCC's own publication) plus one journalism source. If you cannot source it yet, it can still be filed: it sits in FACTS.md at 🔴 until someone pins the citation.

## Ways to contribute

### 1. Correct an error

Open an issue with the `correction` label. Include:

- The URL of the page and the specific sentence.
- What is factually wrong.
- Ideally, the public source that establishes the correct fact.

Factually wrong sentences get corrected or removed, as a public pull request. Accurate, sourced sentences do not get removed on request; see [/legal](https://pbccfacts.com/legal).

### 2. Add a fact or source

Open an issue with the `new-fact` label, or PR a new row into [FACTS.md](FACTS.md) following the format at the top of that file. Strong sources, in order of weight:

1. Court rulings, parliamentary inquiries, charity-regulator and tax-authority findings.
2. Peer-reviewed academic work.
3. Major investigative journalism (attribute the outlet).
4. PBCC's own publications and ministry texts (quoted accurately, briefly).
5. On-record survivor testimony with explicit consent to identification.

Archive-worthy documents (PDFs, captures) go in `research/evidence/` (gitignored; referenced by filename from FACTS.md).

### 3. Propose a `/people` profile

Read [MEMBERS_POLICY.md](MEMBERS_POLICY.md) first. Private members of the fellowship who have not chosen to be public are never listed. File a `new-fact` issue with the name, the inclusion bucket they clear, and at least one public-source URL.

### 4. Survivor stories

Not via GitHub. First-person testimony runs through the consent-controlled intake at [/stories](https://pbccfacts.com/stories): on-record by explicit written consent, contributor-reviewed before ship, removable on request. Do not post testimony, yours or anyone else's, in a public issue.

### 5. Code

Standard flow: fork, branch, PR. `npm run dev` to run locally, `npm run build` must pass. Match the register in [EDITORIAL_GUIDE.md](EDITORIAL_GUIDE.md) for any copy change: third person, named subject, attributed reporting, no em-dashes in body copy.

## Editorial register, in brief

- Third person, named subject: "the PBCC," "the fellowship," "Bruce D. Hales." Never "we" for the church.
- Attribute reporting to the outlet that published it first.
- Specific, not hyperbolic. The facts do the work; adjectives don't.
- Severity claims (abuse, financial misconduct, litigation) need two independent sources and a named case.
- The subject of every sharp sentence is the fellowship's rebrand, leadership, or institutions. Never a survivor.

Full rulebook: [EDITORIAL_GUIDE.md](EDITORIAL_GUIDE.md).

## Safety notes for contributors

- Contributor identities are never published without explicit written consent.
- If you are a current or recent member and contributing could expose you, consider contributing through the confidential channel at [/contact](https://pbccfacts.com/contact) instead of a public GitHub account.
- Correspondence intended to identify or pressure contributors is treated as part of the public record of the project.
