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
        heading: "Public record",
        paragraphs: [
          "Reporting in The Post (NZ) has quoted leadership instructions delivered under Hales that direct members to generate commercial surplus for the community, citing recordings and member testimony. [[cite:hales-manofgod-thepost]]",
          "New Statesman's 2023 long-read on the fellowship describes the authority structure under the current Man of God and the consequences of dissent for members inside it. [[cite:hales-manofgod-newstatesman]]",
        ],
      },
      {
        heading: "How this profile is sourced",
        paragraphs: [
          "Every sentence above footnotes to a public source in the site's source registry. Any claim we believe but have not yet pinned to a URL would render with a visible warning marker; none appear on this page. Corrections are welcomed via the repository — see MEMBERS_POLICY.md for the inclusion rule and correction protocol.",
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
