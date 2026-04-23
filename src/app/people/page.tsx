import { MemberIndex } from "@/components/site/MemberIndex";
import {
  JsonLd,
  articleSchema,
  breadcrumbSchema,
} from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "People",
  description:
    "Sourced profiles of named figures in and around the Plymouth Brethren Christian Church: leadership, historical leaders, and executives of the commercial network. Every claim footnoted. Inclusion rule published.",
  slug: "/people",
  cluster: "D",
  register: "record",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          headline:
            "People. Sourced profiles of named PBCC figures.",
          description:
            "Index of sourced profiles of named Plymouth Brethren Christian Church leadership, historical leaders, and executives of the commercial network. Each profile carries a citation on every claim.",
          slug: "/people",
          datePublished: "2026-04-23",
          dateModified: "2026-04-23",
          register: "record",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "People", path: "/people" },
        ])}
      />
      <MemberIndex />
    </>
  );
}
