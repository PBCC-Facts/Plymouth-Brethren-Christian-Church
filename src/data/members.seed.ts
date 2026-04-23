import type { Member } from "@/lib/members";

/**
 * Source of truth for /our-members content in v1.
 *
 * This file mirrors public.members (see
 * supabase/migrations/20260423052145_add_members_table.sql). When the
 * /litigation route wires Supabase reads against public.cases, this
 * file is retired and src/lib/members.ts switches to the same read
 * pattern against public.members. The migration seed INSERT stays
 * byte-equivalent to this file until then.
 *
 * Rules for adding a row:
 *   1. The person must clear one of the MEMBERS_POLICY.md inclusion buckets.
 *   2. Every [[cite:id]] token references an id registered in src/lib/sources.ts.
 *   3. Every factual claim has a matching row in FACTS.md.
 *   4. Severity claims (abuse, finance misconduct, pending litigation) have
 *      at least two independent sources. Single-source entries are permitted
 *      for uncontested facts (dates, roles, succession).
 *   5. Anything you can't pin to a public URL uses [[pending:note]] inline.
 *      Never invent citations.
 */

export const members: Member[] = [
  {
    slug: "bruce-d-hales",
    name: "Bruce D. Hales",
    aliases: ["Bruce Hales", "Man of God"],
    category: "leadership",
    currentRole:
      'World Leader ("Man of God"), Plymouth Brethren Christian Church',
    overview:
      'Bruce D. Hales has led the Plymouth Brethren Christian Church (formerly Exclusive Brethren) since 2002. Within the fellowship the office he holds is called the "Man of God".',
    inclusionBasis:
      "Self-disclosed by PBCC on its official resource page; subject of substantive reporting in New Statesman and The Post (NZ).",
    sourceIds: [
      "hales-manofgod-pbcc",
      "hales-manofgod-newstatesman",
      "hales-manofgod-thepost",
      "hales-ratpoison-stuff",
      "hales-ratpoison-cessnock",
      "hales-times-infiltrate",
      "hales-rnz-moneygoround",
      "hales-illawarra-mccorkell",
      "hales-jet-nzherald",
      "pdt-charitycommission-2014",
    ],
    isPublished: true,
    isRoadmapOnly: false,
    publishedAt: "2026-04-23",
    lastReviewedAt: "2026-04-23",
    body: [
      {
        heading: "Role within PBCC",
        paragraphs: [
          "Bruce D. Hales is the global leader of the Plymouth Brethren Christian Church. The church publishes his leadership on its own resource site. [[cite:hales-manofgod-pbcc]]",
          'Within the fellowship the role is known as the "Man of God". Independent long-form reporting has described both the title and the authority it carries. [[cite:hales-manofgod-newstatesman]]',
        ],
      },
      {
        heading: "Succession",
        paragraphs: [
          "Hales assumed the leadership in 2002 on the death of his father, John S. Hales, in what the church itself describes as a continuation of an established line of leaders. [[cite:hales-manofgod-pbcc]]",
        ],
      },
      {
        heading: "Recorded ministry — the “rat poison” quote",
        paragraphs: [
          "In September 2015 Hales delivered a ministry meeting in the United Kingdom at which, according to reporting by Fairfax Media run in Stuff (NZ) and the Cessnock Advertiser, he said that a young man going through what the report describes as mental distress would be “better to take arsenic, or go and get some rat poison or something, take a bottle of it.” [[cite:hales-ratpoison-stuff]] [[cite:hales-ratpoison-cessnock]]",
          "The reporting attributes a follow-on line to the same meeting: “Now I’m not advocating him doing that but … that would be better, to finish yourself off that way [rather] than having to do with the opponents of the truth.” [[cite:hales-ratpoison-stuff]]",
          "The Brethren’s spokesman is quoted in the same reporting saying the remarks “should not be given a literal interpretation” and that the phrase was “a common, everyday metaphor.” [[cite:hales-ratpoison-cessnock]]",
        ],
      },
      {
        heading: "Recorded directives to members",
        paragraphs: [
          "The Times (London), in its long-form “No mercy” investigation into the fellowship by Billy Kenber and Alexi Mostrous, reports that in the context of the UK Charity Commission’s 2012–14 case on the Preston Down Trust, “the Brethren’s universal leader, Sydney businessman Bruce Hales, had instructed members to infiltrate the meeting, to ‘take a tape recorder and dress up as an out [an ex-member]’.” [[cite:hales-times-infiltrate]]",
        ],
      },
      {
        heading: "The UK regulator’s view",
        paragraphs: [
          "The UK Charity Commission’s January 2014 full decision on the Preston Down Trust — the case that contested the charitable status of a PBCC congregation — records the Commission’s finding that it had “considerable evidence of significant ‘detriment or harm’” in Brethren practices and discusses the authority held by the “worldwide leader of the Brethren” in the trust deed, the office held by Hales. [[cite:pdt-charitycommission-2014]]",
        ],
      },
      {
        heading: "The commercial network",
        paragraphs: [
          "The Post (NZ) reports that leaked Universal Business Team material and current and former members describe an aggressive focus on generating revenue from members and from wider society, with reporting attributing to insiders the description of the sect as a “pyramid scheme.” The Post writes that “large sums of money were flowing upward towards world leader Bruce Hales.” [[cite:hales-manofgod-thepost]]",
          "RNZ reporting on what its ex-member sources call the fellowship’s “money-go-round” names an offshore fund (“GCF”) and describes a mechanism under which Brethren congregations sent cash payments to Hales and members of his family, which the reporting says “would add up to hundreds of thousands of dollars a year from New Zealand alone, and millions from Brethren around the world,” with the amounts varied so they would not look like wages. [[cite:hales-rnz-moneygoround]]",
        ],
      },
      {
        heading: "Travel",
        paragraphs: [
          "NZ Herald reporting by Patrick Gower has described Hales touring New Zealand congregations by private jet, arriving from Sydney. [[cite:hales-jet-nzherald]]",
        ],
      },
      {
        heading: "Legal action against critics",
        paragraphs: [
          "The Illawarra Mercury reported in October 2017 that in proceedings connected to a PBCC-linked company’s defamation action against a journalist, Lloyd Grimshaw — a company director who has also served as a PBCC media spokesman — signed a “Services and Confidentiality Deed” proposing to pay a potential witness, McCorkell, “$920,000 over 10 years … to keep his mouth shut.” The report quotes text messages in evidence including “Dean Hales is going to tell Lloyd to release” and records a transfer of $275,000 to McCorkell’s business account. [[cite:hales-illawarra-mccorkell]]",
          "Dean Hales is Bruce Hales’s son. The reporting does not name Bruce Hales personally as authorising the payment; the directive quoted in the text messages attributes the release to Dean Hales.",
        ],
      },
      {
        heading: "How this profile is sourced",
        paragraphs: [
          "Every sentence above footnotes to a public source in the site’s source registry. Quotes are presented as reporting, not as first-party factual claims; the voice on the page is what named outlets have published. Anything we believe but have not yet pinned to a URL renders with a visible warning marker rather than ship silently. Corrections are welcomed via the repository — see MEMBERS_POLICY.md for the inclusion rule and correction protocol.",
        ],
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // Roadmap entries: persons cleared under MEMBERS_POLICY.md for a future
  // profile, surfaced on the index so readers can see who we plan to cover.
  // Each must carry at least one registered source and a documented public
  // role. No bare-name listings.
  // ---------------------------------------------------------------------------
  {
    slug: "john-s-hales",
    name: "John S. Hales",
    aliases: ["J. S. Hales"],
    category: "historical",
    currentRole: "Former World Leader, Plymouth Brethren (1987–2002)",
    overview:
      "John S. Hales led the fellowship from 1987 until his death in 2002. His succession is referenced on PBCC's own leadership resource alongside that of his son Bruce D. Hales.",
    inclusionBasis:
      "Historical leadership role referenced by PBCC's own resource page and in mainstream reporting on the current leadership line.",
    sourceIds: ["hales-manofgod-pbcc"],
    isPublished: false,
    isRoadmapOnly: true,
    body: [],
  },
];
