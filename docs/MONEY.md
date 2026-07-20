# MONEY.md. plan for `/money`

The flagship investigative-aggregation page: how money moves through the PBCC. Nav tab "The Money". The centrepiece is a set of original diagrams that map the documented entity structure and cash flows end to end. This has not been done visually anywhere in public; the page's job is to make the record legible, not to add to it.

## Editorial frame (non-negotiable)

- The site's own voice describes **documented flows**: who collects, who owns, who invests, who was raided. Every arrow in every diagram carries a footnote.
- **"Money laundering" never ships in the site's own voice.** The ceiling is quotation: RNZ's 2022 interviewee called the structure "almost like a legalised form of money laundering" (RNZ, 26 Jul 2022). Quote, attribute, link. Same rule for "fraud", "fleecing" (SMH's headline word, quotable as such), and "tax abuse".
- Ex-member reported claims render with the verified ex-member badge (see EDITORIAL_GUIDE.md §2), visually distinct from public-record footnotes.
- The PBCC's on-record responses (e.g. spokesperson Doug Watt in RNZ 2022; the church's rebuttal pages) appear on the page. Fairness is part of the armour.

## Page structure (draft)

1. **Lede.** What the record shows in three sentences, RNZ "money-go-round" quote as the anchor.
2. **Diagram 1: the collection layer.** Household → weekly congregation collections (cash) → locality → monthly "special collection" → leadership ("gifts to the leaders... mainly to the Elect Vessel", The Age 2006, ex-leader Ron Fawkes on record). Ex-member reported: collections tied to the Sunday Lord's Supper service.
3. **Diagram 2: the commercial layer.** ~3,000 member businesses → UBT (subscriptions, group buying, consultancy, Silver Bulletin) → rebates → National Assistance Fund ("controlled by but not formally linked to the church", RNZ) → grants to non-charity PBCC trusts. Member-facing commerce: UBT household accounts (Gabiano scarves et al.), Campus & Co (members-only, "Costco model" per leaked docs, Courier Mail Jun 2026).
4. **Diagram 3: the investment layer.** Global Funding Team → Vision Growth / Vision Accelerator → controlling stakes in profitable Brethren companies → endowment returns fund Brethren spending (RNZ 2022). Ex-member reported: fundraising seminars under the name "Vision Foundation" (2020); ~$0.65bn since 2017 and ~$250m/yr "Strive" targets are activist-sourced (Get A Life Ep. 133; Open & Candid), badge accordingly.
5. **Diagram 4: the property layer.** Locality gospel-hall trusts → transfers "for nil consideration" (UK Charity Commission filing, Bridgefoot Gospel Hall Trust, YE 5 Apr 2024) → PBCC Properties Global Ltd (ABN 68 691 860 858, est. Oct 2025, NSW 2127) + PBCC Properties AU Ltd atf AU Operating Trust. Ex-member reported: internal name "GAP" for the property rollup; deeds moved out of senior-elder trusts.
6. **The regulator layer.** 19 Mar 2024 ATO raid (UBT + OneSchool Global + RRT, The Precinct, Sydney Olympic Park; SMH "Fleecing the flock", 22 Mar 2024; Guardian Australia Apr 2024). ATO "Private Wealth. Behaviours of Concern" programme. Four Corners "Big Brethren" (15 Sep 2025). UK: Preston Down Trust decision context, ~£13m tax relief at stake per The Times 2015 reporting.
7. **What is established vs. what is alleged.** A plain two-column ledger. Left: documented (with footnotes). Right: alleged/ex-member reported (with badges), each with what evidence would settle it.
8. **The church's response.** On-record denials and rebuttals, quoted and linked.

## Diagram build notes

- Original SVG diagrams in-repo (no external chart libs; matches DESIGN_SYSTEM black-and-white paper aesthetic). Each node = entity (typed: charity / company / trust / informal), each edge = flow (cash, rebate, grant, deed transfer, investment), each edge carries a footnote marker that resolves to `src/lib/sources.ts`.
- Entity data lives in a typed registry, e.g. `src/data/money-graph.ts`: `{ nodes: [{id, name, kind, jurisdiction, registrationId?, sourceIds}], edges: [{from, to, kind, label, sourceIds, badge?: "exMember" | "activist"}] }` so diagrams and prose render from one dataset and every element is auditable.
- Print/share-friendly: each diagram exports as its own OG image eventually.

## Research still needed (feeds FACTS.md §8 rows)

- Pull ABR/ASIC extracts for PBCC Properties Global Ltd and PBCC Properties AU Ltd (directors, registered office) and archive to `research/evidence/`.
- Repeat the Bridgefoot search across other UK gospel-hall trusts to establish the transfer pattern (Charity Commission full-print filings).
- Pin the original SMH "Fleecing the flock" URL and The Age 2006 URL; archive both.
- Cost of the printed Hales ministry ("white books") and the purchase requirement: sourcing in progress.
- Four Corners "Big Brethren" financial segments: transcribe relevant claims with timestamps.
- ACNC filings: RRT, OneSchool Global entities, National Assistance Fund.
