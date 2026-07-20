/**
 * The money graph. typed dataset behind the /money diagrams (docs/MONEY.md).
 * Every node and edge is auditable: sourceIds resolve to src/lib/sources.ts
 * once registered; badge marks the evidence tier where a flow is not yet
 * public record. Diagrams and prose both render from this single dataset.
 *
 * Population status: SKELETON. Node/edge set drafted from the 2026-07
 * research pass (FACTS.md §8). Do not render on /money until each edge's
 * sourceIds are registered, per EDITORIAL_GUIDE.md §2.
 */

export type EntityKind =
  | "household" // member families
  | "congregation" // localities / gospel halls
  | "company" // registered commercial entity
  | "charity" // registered charity
  | "trust" // property or grant trust
  | "programme" // named internal programme without confirmed registration
  | "regulator";

export type FlowKind =
  | "cash-collection"
  | "purchase" // members buying goods/services
  | "rebate"
  | "donation"
  | "grant"
  | "investment"
  | "deed-transfer"
  | "enforcement"; // regulator action

export type EvidenceBadge = "exMember" | "activist";

export interface MoneyNode {
  id: string;
  name: string;
  kind: EntityKind;
  jurisdiction?: string;
  registrationId?: string;
  /** Internal name members use, where it differs from the registered name. */
  internalName?: string;
  gloss: string;
  sourceIds: string[];
  badge?: EvidenceBadge;
}

export interface MoneyEdge {
  id: string;
  from: string;
  to: string;
  kind: FlowKind;
  label: string;
  sourceIds: string[];
  badge?: EvidenceBadge;
}

export const moneyNodes: MoneyNode[] = [
  {
    id: "households",
    name: "Member households",
    kind: "household",
    gloss:
      "Roughly 55,000 members across 19 countries (PBCC self-report). The origin of every flow on this page.",
    sourceIds: [/* pbcc-members-selfreport */],
  },
  {
    id: "congregations",
    name: "Local congregations (gospel halls)",
    kind: "congregation",
    gloss:
      "Localities holding weekly meetings; historically owned their halls through local trusts held by senior elders.",
    sourceIds: [],
  },
  {
    id: "ubt",
    name: "Universal Business Team (UBT)",
    kind: "company",
    jurisdiction: "AU (global network)",
    gloss:
      "Group-buying, consultancy, and subscription network across ~3,000 member businesses in 19 countries (RNZ, 2022). Sells goods and services to members through household accounts.",
    sourceIds: [/* rnz-money-go-round-2022 */],
  },
  {
    id: "naf",
    name: "National Assistance Fund",
    kind: "charity",
    jurisdiction: "NZ",
    gloss:
      "Charity RNZ describes as 'controlled by but not formally linked to the church'; receives donations and makes grants to non-charity PBCC trusts.",
    sourceIds: [/* rnz-money-go-round-2022 */],
  },
  {
    id: "vision",
    name: "Vision Growth / Vision Accelerator",
    kind: "programme",
    internalName: "Vision Foundation (name used at 2020 member seminars)",
    gloss:
      "Investment vehicles under the church's Global Funding Team; take controlling stakes in profitable Brethren companies toward an endowment (RNZ, 2022).",
    sourceIds: [/* rnz-money-go-round-2022 */],
  },
  {
    id: "pbcc-properties",
    name: "PBCC Properties Global Ltd",
    kind: "company",
    jurisdiction: "AU",
    registrationId: "ABN 68 691 860 858",
    internalName: "GAP",
    gloss:
      "Australian public company (active Oct 2025, NSW 2127) self-described as acquiring, selling, building, and maintaining PBCC places of worship worldwide. Sister entity: PBCC Properties AU Ltd atf AU Operating Trust (ABN 35 930 317 906).",
    sourceIds: [/* pbcc-properties-abr, pbcc-properties-site */],
    badge: undefined,
  },
  {
    id: "local-trusts",
    name: "Locality gospel-hall trusts",
    kind: "trust",
    gloss:
      "Historic hall-owning trusts. UK Charity Commission filings show at least one (Bridgefoot Gospel Hall Trust) transferring halls to an affiliated trust for nil consideration (YE 5 Apr 2024).",
    sourceIds: [/* bridgefoot-charity-filing */],
  },
  {
    id: "campus-and-co",
    name: "Campus & Co",
    kind: "company",
    gloss:
      "Members-only grocery/superstore chain, often on OneSchool grounds; leaked internal documents describe a 'Costco model' public ban (Courier Mail, Jun 2026). Physical stores closed; brand now online-only.",
    sourceIds: [/* campusandco-couriermail-2026 */],
  },
  {
    id: "osg",
    name: "OneSchool Global",
    kind: "charity",
    gloss: "The PBCC's international school network.",
    sourceIds: [],
  },
  {
    id: "rrt",
    name: "Rapid Relief Team",
    kind: "charity",
    gloss: "The PBCC's outward-facing philanthropy arm.",
    sourceIds: [],
  },
  {
    id: "leadership",
    name: "Church leadership",
    kind: "programme",
    gloss:
      "RNZ's ex-member sources describe congregational cash payments reaching Hales and family ('money-go-round'); The Age (2006) reported monthly special collections distributed 'as gifts to the leaders… mainly to the Elect Vessel.'",
    sourceIds: [/* rnz-money-go-round-2022, theage-collections-2006 */],
  },
  {
    id: "ato",
    name: "Australian Taxation Office",
    kind: "regulator",
    gloss:
      "Raided UBT, OneSchool Global, and RRT at The Precinct, Sydney Olympic Park, 19 Mar 2024, under the Private Wealth 'Behaviours of Concern' programme.",
    sourceIds: [/* ubt-atoraid-guardian-2024, smh-fleecing-2024 */],
  },
];

export const moneyEdges: MoneyEdge[] = [
  {
    id: "weekly-collections",
    from: "households",
    to: "congregations",
    kind: "cash-collection",
    label: "Weekly cash collections",
    sourceIds: [/* theage-collections-2006 */],
  },
  {
    id: "lords-supper-tie",
    from: "households",
    to: "congregations",
    kind: "cash-collection",
    label: "Collections taken at the Sunday Lord's Supper service",
    sourceIds: [],
    badge: "exMember",
  },
  {
    id: "special-collections",
    from: "congregations",
    to: "leadership",
    kind: "donation",
    label: "Monthly 'special collection' distributed as gifts to leaders",
    sourceIds: [/* theage-collections-2006 */],
  },
  {
    id: "member-purchases",
    from: "households",
    to: "ubt",
    kind: "purchase",
    label:
      "Member purchases through UBT household accounts (devices, Gabiano scarves, subscriptions)",
    sourceIds: [/* ubt-gabiano-support */],
  },
  {
    id: "ministry-purchases",
    from: "households",
    to: "leadership",
    kind: "purchase",
    label: "Mandatory purchase of printed Hales ministry ('white books')",
    sourceIds: [],
    badge: "exMember",
  },
  {
    id: "campus-purchases",
    from: "households",
    to: "campus-and-co",
    kind: "purchase",
    label: "Members-only grocery purchases (pre-closure)",
    sourceIds: [/* campusandco-couriermail-2026 */],
  },
  {
    id: "rebates-naf",
    from: "ubt",
    to: "naf",
    kind: "rebate",
    label: "Rebates routed to the National Assistance Fund as donations",
    sourceIds: [/* rnz-money-go-round-2022 */],
  },
  {
    id: "naf-grants",
    from: "naf",
    to: "local-trusts",
    kind: "grant",
    label: "Grants to non-charity PBCC trusts",
    sourceIds: [/* rnz-money-go-round-2022 */],
  },
  {
    id: "vision-fundraising",
    from: "households",
    to: "vision",
    kind: "donation",
    label:
      "Fundraising seminars ('Vision Foundation', 2020); ~$0.65bn since 2017 per activist accounting",
    sourceIds: [/* getalife-ep133 */],
    badge: "activist",
  },
  {
    id: "vision-investments",
    from: "vision",
    to: "ubt",
    kind: "investment",
    label: "Controlling stakes in profitable Brethren companies",
    sourceIds: [/* rnz-money-go-round-2022 */],
  },
  {
    id: "deed-transfers",
    from: "local-trusts",
    to: "pbcc-properties",
    kind: "deed-transfer",
    label: "Hall transfers 'for nil consideration' to affiliated trusts",
    sourceIds: [/* bridgefoot-charity-filing */],
  },
  {
    id: "ato-raid",
    from: "ato",
    to: "ubt",
    kind: "enforcement",
    label: "19 Mar 2024 raid (UBT, OneSchool Global, RRT)",
    sourceIds: [/* ubt-atoraid-guardian-2024, smh-fleecing-2024 */],
  },
];
