import type { Metadata } from "next";
import "./globals.css";
import { newsreader, plexSans, plexMono } from "@/lib/fonts";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { SiteBanner } from "@/components/site/SiteBanner";
import { Shell } from "@/components/site/Shell";
import { Footer } from "@/components/site/Footer";
import { BrowseStrip } from "@/components/site/BrowseStrip";
import { JsonLd, organizationSchema } from "@/components/seo/JsonLd";
import { ogImageUrl } from "@/lib/seo";

/**
 * Site-wide metadata defaults. Every page should override via
 * `buildPageMetadata()` from `@/lib/seo`. The `title.template` below is a
 * safety net: any page that forgets to set its title still gets the
 * strategy-conforming suffix appended.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Plymouth Brethren Christian Church · the public record",
    template: "%s · Plymouth Brethren Christian Church · the public record",
  },
  description:
    "The Facts. An independent, open-source record of the Plymouth Brethren Christian Church (formerly the Exclusive Brethren). Journalism, court filings, regulator decisions, and survivor testimony, organised with a citation on every claim. Not affiliated with the PBCC.",
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    images: [{ url: ogImageUrl("The Facts"), width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false, address: false, email: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="min-h-dvh flex flex-col">
        <JsonLd data={organizationSchema()} />
        <SiteBanner />
        <Shell>
          <main className="flex-1">{children}</main>
          <BrowseStrip />
          <Footer />
        </Shell>
      </body>
    </html>
  );
}
