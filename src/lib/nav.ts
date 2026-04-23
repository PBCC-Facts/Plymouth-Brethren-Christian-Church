export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
};

// Measured from research/captures/home.html on 2026-04-22.
// Source of truth: research/tokens.json > nav.primary.
export const primaryNav: NavItem[] = [
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
      { label: "Our beliefs", href: "/way-of-life/our-beliefs" },
      { label: "Our history", href: "/way-of-life/our-history" },
      { label: "Our network", href: "/way-of-life/our-network" },
      { label: "Our Neighbours", href: "/way-of-life/our-neighbours" },
    ],
  },
  {
    label: "Our members",
    href: "/our-members",
    children: [{ label: "Any questions?", href: "/our-members/any-questions" }],
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
  { label: "Way of life", href: "/way-of-life" },
  { label: "Our members", href: "/our-members" },
  { label: "News", href: "/news" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookies Policy", href: "/cookies" },
  { label: "Contact", href: "/contact" },
];
