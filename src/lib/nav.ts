export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
};

// Masthead nav: five destinations, nothing else. Home lives on the
// wordmark; everything secondary is reachable through the "All pages"
// drawer (drawerNav) and the footer.
export const primaryNav: NavItem[] = [
  { label: "Way of life", href: "/way-of-life" },
  { label: "The Money", href: "/money" },
  { label: "People", href: "/people" },
  { label: "The Record", href: "/news" },
  { label: "What we need", href: "/what-we-need" },
];

// Full site map for the "All pages" drawer. Grouped, complete.
export const drawerNav: NavItem[] = [
  { label: "Home", href: "/" },
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
  { label: "The Money", href: "/money" },
  {
    label: "People",
    href: "/people",
    children: [{ label: "Any questions?", href: "/people/any-questions" }],
  },
  {
    label: "The Record",
    href: "/news",
    children: [{ label: "Podcast", href: "/resources/podcast" }],
  },
  { label: "Stories", href: "/stories" },
  { label: "What we need", href: "/what-we-need" },
  { label: "Resources", href: "/resources" },
  { label: "Mission", href: "/mission" },
  { label: "Legal", href: "/legal" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "Way of life", href: "/way-of-life" },
  { label: "The Money", href: "/money" },
  { label: "People", href: "/people" },
  { label: "The Record", href: "/news" },
  { label: "Stories", href: "/stories" },
  { label: "What we need", href: "/what-we-need" },
  { label: "Resources", href: "/resources" },
  { label: "Mission", href: "/mission" },
  { label: "Legal", href: "/legal" },
  { label: "Contact", href: "/contact" },
];

/** Small-print row at the very bottom of the footer. */
export const policyNav: NavItem[] = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Cookies", href: "/cookies" },
];
