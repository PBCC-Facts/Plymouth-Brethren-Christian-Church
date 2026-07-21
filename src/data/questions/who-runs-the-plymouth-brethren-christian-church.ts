import type { QuestionArticle } from "./types";

/**
 * GOLD-STANDARD ARTICLE. Writers: match this register, citation density,
 * and structure. Every cite here resolves to src/lib/sources.ts.
 */
export const article: QuestionArticle = {
  slug: "who-runs-the-plymouth-brethren-christian-church",
  question: "Who runs the Plymouth Brethren Christian Church?",
  metaDescription:
    "Bruce D. Hales, a Sydney businessman known within the fellowship as the Man of God, has led the Plymouth Brethren Christian Church since 2002. What the public record says about how the role works.",
  category: "Leadership & organisation",
  datePublished: "2026-07-21",
  dateModified: "2026-07-21",
  shortAnswer:
    "One man. Bruce D. Hales, a Sydney businessman, has led the Plymouth Brethren Christian Church since 2002{{cite:hales-manofgod-pbcc}}. Within the fellowship the role is called the \"Man of God\" or \"Elect Vessel,\" and reporting describes it as the operational and doctrinal authority over roughly 54,000 members across 19 countries{{cite:hales-manofgod-newstatesman}}.",
  sections: [
    {
      heading: "The Man of God: one office, worldwide authority",
      paragraphs: [
        "The PBCC's own resource page names Bruce D. Hales as the church's current leader and places him in a line of \"men of God\" stretching back through his father, John S. Hales, to James Taylor Sr and John Nelson Darby{{cite:hales-manofgod-pbcc}}. New Statesman's 2023 long-read described what the office actually holds: Hales is the doctrinal and operational authority over the whole fellowship, whose ministry is printed, distributed, and read in gatherings worldwide{{cite:hales-manofgod-newstatesman}}.",
        "The UK Charity Commission's 2014 Preston Down Trust decision, the primary regulatory document on the fellowship's practices, discusses the authority held by the \"worldwide leader of the Brethren\" as a structural feature of how the church operates{{cite:pdt-charitycommission-2014}}. Decisions of doctrine and discipline made at the centre reach every local assembly.",
      ],
    },
    {
      heading: "How far the leader's word reaches",
      paragraphs: [
        "Nicky Hager's book The Hollow Men, the book-length investigation of the Brethren's 2004-05 political campaigns in four countries, quoted the chain of command flatly: \"no major decisions are made without Hales's approval or direction\"{{cite:hollowmen-hager-2006}}. NZ Herald reporting describes Hales touring New Zealand congregations by private jet{{cite:hales-jet-nzherald}}.",
        "The reach is doctrinal as well as organisational. Hales's ministry, published in bound volumes, is treated within the fellowship as authoritative teaching. ABC Four Corners' 2025 documentary Big Brethren broadcast readings from the 2023 volumes{{cite:bigbrethren-fourcorners-2025}}.",
      ],
    },
    {
      heading: "Is there a board, a synod, or elections?",
      paragraphs: [
        "No. The PBCC has no synod, elected leadership, or congregational vote on doctrine. Local assemblies have priests (senior men), but the office of Man of God is not elected and has passed through the Taylor, Symington, and Hales families since the fellowship separated from the wider Brethren movement{{cite:hales-manofgod-newstatesman}}{{cite:separation-cdamm}}. Bruce Hales succeeded his father John S. Hales in 2002{{cite:hales-manofgod-pbcc}}.",
      ],
    },
    {
      heading: "What this means in practice",
      paragraphs: [
        "The single-leader structure is why one man's recorded words become church-wide practice. It is the mechanism behind the rules documented on [[/way-of-life|the rules wall]]: the Doctrine of Separation as applied today, the technology restrictions, and the discipline system are administered locally but set centrally{{cite:pdt-charitycommission-2014}}{{cite:separation-cdamm}}. The public record on Hales himself, including the September 2015 \"rat poison\" ministry remarks reported by Stuff NZ, is collected on [[/people/bruce-d-hales|his profile page]]{{cite:hales-ratpoison-stuff}}.",
      ],
    },
  ],
  related: [
    { href: "/people/bruce-d-hales", label: "Bruce D. Hales: the profile" },
    { href: "/way-of-life", label: "The rules members live under" },
    { href: "/people", label: "People: the leadership index" },
    { href: "/questions", label: "All questions" },
  ],
};
