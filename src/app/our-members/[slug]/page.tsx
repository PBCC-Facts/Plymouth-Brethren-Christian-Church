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
      slug: `/our-members/${slug}`,
      noindex: true,
    });
  }
  return buildPageMetadata({
    topic: `${member.name} — ${member.currentRole ?? "Profile"}`,
    description: member.overview,
    slug: `/our-members/${member.slug}`,
    cluster: "D",
    register: "criticism",
    ogType: "article",
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
          headline: `${member.name} — ${member.currentRole ?? "Profile"}`,
          description: member.overview,
          slug: `/our-members/${member.slug}`,
          datePublished: member.publishedAt ?? "2026-04-23",
          dateModified: member.lastReviewedAt ?? member.publishedAt ?? "2026-04-23",
          register: "criticism",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Our members", path: "/our-members" },
          { name: member.name, path: `/our-members/${member.slug}` },
        ])}
      />
      <MemberProfile member={member} />
    </>
  );
}
