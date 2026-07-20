/**
 * The rules registry. One entry per documented rule; the /way-of-life wall
 * renders every row. The point of the wall is volume: keep statements flat
 * and short ("X is banned"), push nuance into `detail`, and let the citation
 * carry the weight.
 *
 * Tiers mirror FACTS.md:
 *  - "verified"  ✅ two independent sources, or primary + journalism. Stated flat.
 *  - "exmember"  🟣 verified ex-member reports on file (docs/REPORTS_SYSTEM.md);
 *                ships with the ex-member badge, phrased as reported practice.
 *
 * 🟡 single-source rows stay in FACTS.md §9 until pinned; they do not ship here.
 * Every sourceId must exist in src/lib/sources.ts. Ex-member rows may have an
 * empty sourceIds array; anything else must cite.
 */

export const RULE_CATEGORIES = [
  "Food & drink",
  "Home",
  "Technology & media",
  "Entertainment",
  "Education & work",
  "Clothing & appearance",
  "Marriage & family",
  "Money",
  "Discipline & leaving",
  "Civic life",
] as const;

export type RuleCategory = (typeof RULE_CATEGORIES)[number];

export type Rule = {
  id: string;
  category: RuleCategory;
  /** Flat, plain-English prohibition. Max ~10 words. */
  statement: string;
  /** Optional 1–2 sentence nuance; never re-hedges the statement. */
  detail?: string;
  /** Optional verbatim quote that makes the rule land. */
  quote?: { text: string; by: string };
  tier: "verified" | "exmember";
  sourceIds: string[];
};

export const rules: Rule[] = [
  // -------------------------------------------------------------- Food & drink
  {
    id: "eating-outsiders",
    category: "Food & drink",
    statement: "Eating with non-members is banned.",
    detail:
      "The church's own wording: members “choose to eat meals only with those with whom they would also share the Lord's Supper.” No restaurants with colleagues, no school-lunch tables, no dinner at a neighbour's.",
    tier: "verified",
    sourceIds: ["pbcc-whatnotallowed", "separation-cdamm"],
  },
  {
    id: "drinking-outsiders",
    category: "Food & drink",
    statement: "No social drinking with outsiders.",
    detail:
      "By the church's own description, members “choose not to drink socially with those outside the Church.”",
    tier: "verified",
    sourceIds: ["pbcc-whatnotallowed"],
  },
  {
    id: "restaurants",
    category: "Food & drink",
    statement: "Restaurants are off-limits.",
    detail:
      "Named on a court-document list of places members are told not to attend, reported by ABC Four Corners. Ex-members describe narrow business-travel exceptions.",
    tier: "verified",
    sourceIds: ["bigbrethren-fourcorners-2025"],
  },
  {
    id: "same-moment-eating",
    category: "Food & drink",
    statement: "Forced to share a business table? Avoid eating at the same moment.",
    detail:
      "Ex-members report that when work makes a shared table unavoidable, members avoid literally eating at the same time as outsiders.",
    tier: "exmember",
    sourceIds: [],
  },

  // ---------------------------------------------------------------------- Home
  {
    id: "detached-only",
    category: "Home",
    statement: "Apartments and townhouses are banned.",
    detail: "Detached houses only.",
    tier: "verified",
    sourceIds: ["hales-manofgod-newstatesman"],
  },
  {
    id: "shared-walls",
    category: "Home",
    statement: "No shared walls, drains, or driveways with outsiders.",
    tier: "verified",
    sourceIds: ["hales-manofgod-newstatesman"],
  },
  {
    id: "radius",
    category: "Home",
    statement: "Live within a set radius of your meeting room.",
    detail:
      "Ex-members report that members outside the radius were expected to sell their homes and move, and attribute the policy to Bruce D. Hales.",
    tier: "exmember",
    sourceIds: [],
  },
  {
    id: "pets",
    category: "Home",
    statement: "No pets.",
    detail:
      "The church's page frames it as preference (“Brethren don't generally keep pets”); ex-members report enforcement extending to removal of existing pets.",
    tier: "verified",
    sourceIds: ["pbcc-whatnotallowed"],
  },

  // -------------------------------------------------------- Technology & media
  {
    id: "television",
    category: "Technology & media",
    statement: "Television is banned.",
    quote: { text: "an instrument of hell", by: "Bruce D. Hales, on television" },
    detail:
      "The church's own page softens the rule to “generally avoided.”",
    tier: "verified",
    sourceIds: ["hales-manofgod-newstatesman", "pbcc-whatnotallowed"],
  },
  {
    id: "radio",
    category: "Technology & media",
    statement: "Radio is banned.",
    detail:
      "Ex-members report published Hales ministry calls the radio a “pipeline of filth.”",
    tier: "verified",
    sourceIds: ["hales-manofgod-newstatesman", "pbcc-whatnotallowed"],
  },
  {
    id: "internet-filtered",
    category: "Technology & media",
    statement: "Internet only through church-controlled filtering.",
    detail:
      "Streamline3, sold by the church's own UBT, flags restricted searches in real time. One ex-member recalled it blocking a Wikipedia page on whales.",
    tier: "verified",
    sourceIds: ["osg-guardian-surveillance-2023", "streamline3-ubt", "hales-manofgod-newstatesman"],
  },
  {
    id: "prerecorded-music",
    category: "Technology & media",
    statement: "No prerecorded music.",
    tier: "exmember",
    sourceIds: [],
  },

  // ------------------------------------------------------------- Entertainment
  {
    id: "cinema",
    category: "Entertainment",
    statement: "Cinemas are banned.",
    detail:
      "On the court-document do-not-attend list reported by ABC Four Corners.",
    tier: "verified",
    sourceIds: ["bigbrethren-fourcorners-2025"],
  },
  {
    id: "sporting-events",
    category: "Entertainment",
    statement: "Attending sporting events is banned.",
    detail: "On the court-document do-not-attend list.",
    tier: "verified",
    sourceIds: ["bigbrethren-fourcorners-2025"],
  },
  {
    id: "hotels",
    category: "Entertainment",
    statement: "Hotels are avoided.",
    detail:
      "On the court-document do-not-attend list; ex-members describe narrow business-travel exceptions.",
    tier: "verified",
    sourceIds: ["bigbrethren-fourcorners-2025"],
  },
  {
    id: "zoos",
    category: "Entertainment",
    statement: "Zoos are on the do-not-attend list.",
    tier: "verified",
    sourceIds: ["bigbrethren-fourcorners-2025"],
  },
  {
    id: "dirtbikes-gokarts",
    category: "Entertainment",
    statement: "No dirt bikes, go-karts, or amusement parks.",
    tier: "exmember",
    sourceIds: [],
  },

  // ---------------------------------------------------------- Education & work
  {
    id: "university",
    category: "Education & work",
    statement: "University is banned.",
    detail:
      "The church's own education page: on-campus study is “not compatible with our lifestyle.” Further study happens by correspondence.",
    tier: "verified",
    sourceIds: ["pbcc-education", "hales-manofgod-newstatesman"],
  },
  {
    id: "church-schools",
    category: "Education & work",
    statement: "Children attend the church's own schools.",
    detail:
      "OneSchool Global: 120-plus campuses where community volunteers vet every teaching resource.",
    tier: "verified",
    sourceIds: ["osg-guardian-surveillance-2023"],
  },
  {
    id: "curriculum",
    category: "Education & work",
    statement: "No biology, music, or visual arts at senior level.",
    tier: "verified",
    sourceIds: ["osg-guardian-surveillance-2023"],
  },
  {
    id: "professional-bodies",
    category: "Education & work",
    statement: "Professional bodies are banned.",
    detail:
      "Doctors, pharmacists, and lawyers had to give up practising.",
    tier: "verified",
    sourceIds: ["hales-manofgod-newstatesman"],
  },
  {
    id: "unions",
    category: "Education & work",
    statement: "Trade unions are banned.",
    tier: "verified",
    sourceIds: ["hales-manofgod-newstatesman"],
  },
  {
    id: "work-inside",
    category: "Education & work",
    statement: "Members work inside the church's own business network.",
    detail:
      "Member-owned businesses coordinated by UBT. Ex-members report working for non-Brethren businesses is not permitted, with rare exceptions.",
    tier: "verified",
    sourceIds: ["hales-manofgod-newstatesman", "hales-rnz-moneygoround"],
  },
  {
    id: "ministry-study",
    category: "Education & work",
    statement: "Members must buy and study the leader's printed ministry.",
    detail:
      "Ex-members report the “white books” (Bruce D. Hales) are purchased at the member's own cost, with questions answered on them at meetings.",
    tier: "exmember",
    sourceIds: [],
  },

  // ---------------------------------------------------- Clothing & appearance
  {
    id: "headscarves",
    category: "Clothing & appearance",
    statement: "Women wear headscarves at services.",
    detail: "By the church's own description.",
    tier: "verified",
    sourceIds: ["pbcc-clothing"],
  },
  {
    id: "token",
    category: "Clothing & appearance",
    statement: "A “token” hair item the rest of the time.",
    detail: "By the church's own description.",
    tier: "verified",
    sourceIds: ["pbcc-clothing"],
  },
  {
    id: "skirts",
    category: "Clothing & appearance",
    statement: "Women wear skirts, never trousers.",
    tier: "verified",
    sourceIds: ["hales-manofgod-newstatesman"],
  },
  {
    id: "haircut",
    category: "Clothing & appearance",
    statement: "Women do not cut their hair.",
    quote: { text: "an affront to God", by: "on a woman cutting her hair" },
    tier: "verified",
    sourceIds: ["hales-manofgod-newstatesman"],
  },
  {
    id: "shorts",
    category: "Clothing & appearance",
    statement: "Men cannot wear shorts.",
    quote: {
      text: "the Lord takes no pleasure in the legs of a man",
      by: "ministry teaching, per New Statesman",
    },
    tier: "verified",
    sourceIds: ["hales-manofgod-newstatesman"],
  },
  {
    id: "clean-shaven",
    category: "Clothing & appearance",
    statement: "Men must be clean-shaven.",
    tier: "verified",
    sourceIds: ["hales-manofgod-newstatesman"],
  },
  {
    id: "hair-part",
    category: "Clothing & appearance",
    statement: "Men are expected to wear a part in their hair.",
    tier: "exmember",
    sourceIds: [],
  },

  // --------------------------------------------------------- Marriage & family
  {
    id: "marry-inside",
    category: "Marriage & family",
    statement: "Marriage outside the church is forbidden.",
    detail: "The Doctrine of Separation excludes marriage to an outsider.",
    tier: "verified",
    sourceIds: ["separation-pbcc-statement", "separation-cdamm"],
  },
  {
    id: "marriage-approval",
    category: "Marriage & family",
    statement: "Marriage requires formal approval, ending in Sydney.",
    detail:
      "Ex-members describe a compliance checklist (preaching attendance, ministry reading, a priest-approved budget, a compliant house), regional review, and final approval from Sydney.",
    tier: "exmember",
    sourceIds: [],
  },
  {
    id: "conversion-therapy",
    category: "Marriage & family",
    statement: "Same-sex relationships are not tolerated.",
    quote: {
      text: "conversion therapy is imposed",
      by: "NZ Royal Commission of Inquiry",
    },
    tier: "verified",
    sourceIds: ["whanaketia-royalcommission-nz"],
  },
  {
    id: "women-seating",
    category: "Marriage & family",
    statement: "Women sit separately from men at services.",
    detail:
      "Ex-members report distinct participation rules for women in church settings.",
    tier: "exmember",
    sourceIds: [],
  },

  // ---------------------------------------------------------------------- Money
  {
    id: "cash-collections",
    category: "Money",
    statement: "Weekly cash collections at the most important service.",
    detail:
      "Ex-members report collections taken at the Sunday Lord's Supper, tying peak religious observance to peak giving.",
    tier: "exmember",
    sourceIds: [],
  },

  // -------------------------------------------------------- Discipline & leaving
  {
    id: "shunning",
    category: "Discipline & leaving",
    statement: "Leave, and your family stops speaking to you.",
    detail:
      "Those who leave or are expelled (“withdrawn from”) are cut off by the spouses, parents, and children who stay.",
    tier: "verified",
    sourceIds: ["withdrawing-ukparliament-2012", "whanaketia-royalcommission-nz"],
  },
  {
    id: "shut-up",
    category: "Discipline & leaving",
    statement: "“Shut up”: confined at home while priests decide your fate.",
    detail:
      "Church discipline documented in court reporting and the UK Charity Commission's Preston Down Trust decision.",
    tier: "verified",
    sourceIds: ["jensen-smh-goodweekend-2016", "pdt-charitycommission-2014"],
  },
  {
    id: "same-house-shunning",
    category: "Discipline & leaving",
    statement: "Shunning applies even inside the same house.",
    detail:
      "The NZ Royal Commission documented members instructed to shun their own relatives under the same roof.",
    tier: "verified",
    sourceIds: ["whanaketia-royalcommission-nz"],
  },

  // ------------------------------------------------------------------ Civic life
  {
    id: "no-voting",
    category: "Civic life",
    statement: "Members do not vote.",
    detail:
      "The money still moves: Brethren-funded political campaigns are documented in four countries.",
    tier: "verified",
    sourceIds: ["hollowmen-hager-2006", "albanese-cult-2025-sbs"],
  },
];

export const ruleCounts = {
  total: rules.length,
  verified: rules.filter((r) => r.tier === "verified").length,
  exmember: rules.filter((r) => r.tier === "exmember").length,
};
