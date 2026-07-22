export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
};

// Masthead nav: primary destinations. Home lives on the wordmark; everything
// secondary is reachable through the footer.
export const primaryNav: NavItem[] = [
  { label: "Way of life", href: "/way-of-life" },
  { label: "The Money", href: "/money" },
  { label: "People", href: "/people" },
  { label: "The Record", href: "/news" },
  { label: "What we need", href: "/what-we-need" },
];

export const footerNav: NavItem[] = [
  { label: "Way of life", href: "/way-of-life" },
  { label: "Questions", href: "/questions" },
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
  { label: "Privacy", href: "/privacy" },
];
