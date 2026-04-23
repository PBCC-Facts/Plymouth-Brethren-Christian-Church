export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
};

// Nav structure mirrors the PBCC site's URL space for SEO head-term match,
// but label text is ours (third-person, journalism flavour). Source of
// truth for the PBCC nav capture: research/tokens.json > nav.primary.
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Mission", href: "/mission" },
  {
    label: "Way of life",
    href: "/way-of-life",
    children: [
      { label: "Dining", href: "/way-of-life/dining" },
      { label: "Alcohol", href: "/way-of-life/alcohol" },
      { label: "Marriage", href: "/way-of-life/marriage" },
      { label: "Burials and Funerals", href: "/way-of-life/funerals" },
      {
        label: "Technology and Entertainment",
        href: "/way-of-life/technology-and-entertainment",
      },
      {
        label: "Holidays and Celebrations",
        href: "/way-of-life/holidays-and-celebrations",
      },
      {
        label: "Clothing, Hair and Fashion",
        href: "/way-of-life/clothing-hair-and-fashion",
      },
      { label: "Politics and Voting", href: "/way-of-life/voting" },
      { label: "Beliefs", href: "/way-of-life/beliefs" },
      { label: "History", href: "/way-of-life/history" },
      { label: "Network", href: "/way-of-life/network" },
      { label: "Neighbours", href: "/way-of-life/neighbours" },
    ],
  },
  {
    label: "People",
    href: "/people",
    children: [{ label: "Any questions?", href: "/people/any-questions" }],
  },
  {
    label: "News",
    href: "/news",
    children: [
      { label: "Podcast", href: "/resources/podcast" },
      {
        label: "Videos",
        href: "https://www.youtube.com/channel/UC76fGueDJBbLvhs988yTBXQ",
        external: true,
      },
    ],
  },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "Mission", href: "/mission" },
  { label: "Resources", href: "/resources" },
  { label: "Way of life", href: "/way-of-life" },
  { label: "People", href: "/people" },
  { label: "News", href: "/news" },
  { label: "Legal", href: "/legal" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookies Policy", href: "/cookies" },
  { label: "Contact", href: "/contact" },
];

/**
 * Browse-everything strip. Every top-level destination on the site, grouped
 * by build status. Items with {exists:false} render with an "(in progress)" tag.
 */
export type BrowseItem = NavItem & { exists?: boolean };

export const browseAll: BrowseItem[] = [
  { label: "Home", href: "/", exists: true },
  { label: "Mission", href: "/mission", exists: true },
  { label: "Way of life", href: "/way-of-life" },
  { label: "People", href: "/people", exists: true },
  { label: "News", href: "/news" },
  { label: "Reporting", href: "/news" },
  { label: "Resources", href: "/resources", exists: true },
  { label: "Doctrine", href: "/doctrine" },
  { label: "Timeline", href: "/timeline" },
  { label: "FAQ", href: "/faq" },
  { label: "Litigation", href: "/litigation" },
  { label: "Glossary", href: "/glossary" },
  { label: "Contact", href: "/contact" },
  {
    label: "GitHub",
    href: "https://github.com/trentwaskey/Plymouth-Brethren-Christian-Church",
    external: true,
    exists: true,
  },
];
