import type { Metadata } from "next";
import "./globals.css";
import { openSans } from "@/lib/fonts";
import { ParodyBanner } from "@/components/site/ParodyBanner";
import { Shell } from "@/components/site/Shell";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: {
    default:
      "The Facts — Plymouth Brethren Christian Church (parody · criticism · survivor resources)",
    template: "%s — The Facts · Plymouth Brethren Christian Church",
  },
  description:
    "The Facts about the Plymouth Brethren Christian Church. A sourced, survivor-first parody and criticism companion to the PBCC's PR site. Every claim footnoted. Contributable on GitHub. Not affiliated with the PBCC.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title:
      "Plymouth Brethren Christian Church (parody · criticism · survivor resources)",
    description:
      "Original parody and documented commentary on the PBCC, with sources. Not affiliated.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="min-h-dvh flex flex-col">
        <ParodyBanner />
        <Shell>
          <main className="flex-1">{children}</main>
          <Footer />
        </Shell>
      </body>
    </html>
  );
}
