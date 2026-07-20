import Link from "next/link";
import Image from "next/image";
import { Footnote } from "@/components/site/Footnote";
import { RulesWall } from "@/components/site/RulesWall";
import { rules, ruleCounts } from "@/data/rules";
import { buildPageMetadata } from "@/lib/seo";
import {
  JsonLd,
  articleSchema,
  breadcrumbSchema,
} from "@/components/seo/JsonLd";

export const metadata = buildPageMetadata({
  topic: "The rules members live under",
  description: `${ruleCounts.total} documented rules Plymouth Brethren Christian Church members live under: eating with outsiders, housing, television, clothing, marriage, university, work, voting, and what happens to those who leave. Each rule carries its citation.`,
  slug: "/way-of-life",
  cluster: "C",
  register: "explanatory",
});

// ---------------------------------------------------------------------------
// The rules wall. One card per documented rule (src/data/rules.ts), filterable
// by category. The page's design goal is scale: a stranger should feel the
// sheer number and reach of the rules before reading any single one.
// The prose that used to live here was folded into the cards' detail lines;
// "Leaving" keeps its own narrative section because it is the enforcement
// mechanism holding the rest up.
// ---------------------------------------------------------------------------

export default function WayOfLifePage() {
  let n = 0;
  const nextN = () => ++n;

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline:
            "The rules Plymouth Brethren Christian Church members live under",
          description: `${ruleCounts.total} documented rules: eating, housing, technology, clothing, marriage, school, work, voting, and leaving. Each with a source.`,
          slug: "/way-of-life",
          datePublished: "2026-07-19",
          dateModified: "2026-07-20",
          register: "explanatory",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Documented rules of the Plymouth Brethren Christian Church",
          numberOfItems: ruleCounts.total,
          itemListElement: rules.map((r, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: r.statement,
          })),
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Way of life", path: "/way-of-life" },
        ])}
      />

      <section className="hero">
        <div className="site-container hero__grid">
          <div>
            <p className="hero__eyebrow">Way of life</p>
            <p className="rules-count">
              {ruleCounts.total}
              <span className="rules-count__accent"> rules.</span>
            </p>
            <h1 className="hero__title" style={{ fontSize: "1.6rem", marginTop: "1rem" }}>
              And counting. Here is what members live under.
            </h1>
            <p className="hero__sub">
              One doctrine, the Doctrine of Separation, decides who members
              can eat with, marry, live beside, and work for
              <Footnote id="separation-cdamm" n={nextN()} />
              <Footnote id="separation-pbcc-statement" n={nextN()} />. It
              reaches from the dinner table to the driveway to a woman&rsquo;s
              haircut. Every card below carries its citation; where the church
              documents a rule itself, its own page is the source. This list
              only grows as the record does.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <RulesWall />
          <p className="mt-8 max-w-prose text-sm leading-[1.7] opacity-80">
            Cards marked <strong>ex-member reported</strong> rest on verified
            ex-member reports on file (identities verified by the editor, held
            off-repo); the public evidence that would settle each one is
            listed on <Link href="/what-we-need">/what-we-need</Link>. If you
            lived under a rule that isn&rsquo;t here, or can document one that
            is, <Link href="/contact">get in touch</Link>.
          </p>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--color-ink)", color: "var(--color-surface)" }}
      >
        <div className="site-container">
          <h2 className="section-label" style={{ color: "var(--color-surface)" }}>
            The rule that holds the others up.
          </h2>
          <div className="grid gap-8 md:grid-cols-[1fr_220px] md:items-start">
            <div className="max-w-prose">
              <p className="text-lg leading-[1.8]">
                None of the rules above needs a police force. Leave, or be
                &ldquo;withdrawn from,&rdquo; and the family you leave behind
                stops eating with you, speaking to you, living with you
                <Footnote id="withdrawing-ukparliament-2012" n={nextN()} />.
                The NZ Royal Commission documented members instructed to shun
                their own relatives, sometimes inside the same house
                <Footnote id="whanaketia-royalcommission-nz" n={nextN()} />.
                The UK Charity Commission found &ldquo;considerable evidence
                of significant detriment or harm&rdquo; in these practices
                <Footnote id="pdt-charitycommission-2014" n={nextN()} />.
              </p>
              <p className="mt-6 text-lg leading-[1.8]">
                That is the enforcement mechanism. Survivors tell their own
                stories at{" "}
                <Link href="/stories" style={{ color: "var(--color-surface)" }}>
                  /stories
                </Link>
                .
              </p>
            </div>
            <Image
              src="/images/illustrations/leaving.webp"
              alt="Hand-drawn marker illustration: a family with backs turned on one side of a heavy line; a lone figure walks away with a suitcase."
              width={220}
              height={220}
              className="hidden md:block justify-self-end"
              style={{ filter: "invert(1)", mixBlendMode: "screen", opacity: 0.9 }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
