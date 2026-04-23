import { MemberIndex } from "@/components/site/MemberIndex";
import {
  JsonLd,
  articleSchema,
  breadcrumbSchema,
} from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "Our members",
  description:
    "Sourced profiles of named figures in the Plymouth Brethren Christian Church: leadership, historical leaders, and executives of the commercial network. Every claim footnoted. Inclusion rule published.",
  slug: "/our-members",
  cluster: "D",
  register: "criticism",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          headline:
            "Our members — sourced profiles of named PBCC figures",
          description:
            "Index of sourced profiles of named Plymouth Brethren Christian Church leadership, historical leaders, and executives of the commercial network. Each profile carries a citation on every claim.",
          slug: "/our-members",
          datePublished: "2026-04-23",
          dateModified: "2026-04-23",
          register: "criticism",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Our members", path: "/our-members" },
        ])}
      />
      <MemberIndex />
    </>
  );
}
