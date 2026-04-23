import type { Metadata } from "next";
import "./globals.css";
import { openSans } from "@/lib/fonts";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { ParodyBanner } from "@/components/site/ParodyBanner";
import { Shell } from "@/components/site/Shell";
import { Footer } from "@/components/site/Footer";
import { BrowseStrip } from "@/components/site/BrowseStrip";
import { JsonLd, organizationSchema } from "@/components/seo/JsonLd";
import { ogImageUrl } from "@/lib/seo";

/**
 * Site-wide metadata defaults. Every page should override via
 * `buildPageMetadata()` from `@/lib/seo`. The `title.template` below is a
 * safety net: any page that forgets to set its title still gets a
 * strategy-conforming suffix appended.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Plymouth Brethren Christian Church (parody · criticism · survivor resources)",
    template:
      "%s — Plymouth Brethren Christian Church (parody · criticism · survivor resources)",
  },
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
    <html lang="en" className={openSans.variable}>
      <body className="min-h-dvh flex flex-col">
        <JsonLd data={organizationSchema()} />
        <ParodyBanner />
        <Shell>
          <main className="flex-1">{children}</main>
          <BrowseStrip />
          <Footer />
        </Shell>
      </body>
    </html>
  );
}
