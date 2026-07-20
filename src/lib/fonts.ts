import { Newsreader, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

/**
 * The Record design system types (see DESIGN_SYSTEM.md):
 * - Newsreader: display + long-form serif. Editorial, journal-like.
 * - IBM Plex Sans: UI, nav, body-adjacent copy.
 * - IBM Plex Mono: section labels, eyebrows, footnotes, meta. The
 *   "document/archive" register of the citation chrome.
 */
export const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

export const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-plex-sans",
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});
