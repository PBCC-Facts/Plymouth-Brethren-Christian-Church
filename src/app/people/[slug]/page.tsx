import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MemberProfile } from "@/components/site/MemberProfile";
import {
  JsonLd,
  articleSchema,
  breadcrumbSchema,
} from "@/components/seo/JsonLd";
import {
  getMember,
  listPublishedSlugs,
} from "@/lib/members";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { existsSync } from "node:fs";
import { join } from "node:path";

/** True when a dedicated OG portrait PNG exists for this slug. Automatic for
 *  future people: drop public/images/og/people/<slug>.png and the share card
 *  uses it. */
function hasOgPortrait(slug: string): boolean {
  return existsSync(
    join(process.cwd(), "public", "images", "og", "people", `${slug}.png`),
  );
}

export function generateStaticParams() {
  return listPublishedSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) {
    return buildPageMetadata({
      topic: "Profile not found",
      description: "This profile does not exist.",
      slug: `/people/${slug}`,
      noindex: true,
    });
  }
  return buildPageMetadata({
    topic: member.seoTopic ?? `${member.name}. ${member.currentRole ?? "Profile"}`,
    description: member.seoTopic
      ? `${member.overview} Sourced profile: every claim linked to journalism, court, or regulator records. Not affiliated with the PBCC.`
      : member.overview,
    rawDescription: Boolean(member.seoTopic),
    slug: `/people/${member.slug}`,
    cluster: "D",
    register: "record",
    ogType: "article",
    ogImageKey: hasOgPortrait(member.slug) ? member.slug : undefined,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) notFound();

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: `${member.name}. ${member.currentRole ?? "Profile"}`,
          description: member.overview,
          slug: `/people/${member.slug}`,
          datePublished: member.publishedAt ?? "2026-04-23",
          dateModified: member.lastReviewedAt ?? member.publishedAt ?? "2026-04-23",
          register: "record",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "People", path: "/people" },
          { name: member.name, path: `/people/${member.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: member.name,
          alternateName: member.aliases ?? [],
          jobTitle: member.currentRole ?? "",
          description: member.overview,
          url: `${SITE_URL}/people/${member.slug}`,
        }}
      />
      {member.faq && member.faq.length > 0 ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: member.faq.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }}
        />
      ) : null}
      <MemberProfile member={member} />
    </>
  );
}
