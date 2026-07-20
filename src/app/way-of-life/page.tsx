import Link from "next/link";
import Image from "next/image";
import { Footnote, SourcePending } from "@/components/site/Footnote";
import { buildPageMetadata } from "@/lib/seo";
import {
  JsonLd,
  articleSchema,
  breadcrumbSchema,
} from "@/components/seo/JsonLd";

export const metadata = buildPageMetadata({
  topic: "The rules members live under",
  description:
    "What Plymouth Brethren Christian Church members are and aren't allowed to do: eating with outsiders, housing, television and radio, clothing, marriage, school, work, voting, and what happens to those who leave. Each rule sourced.",
  slug: "/way-of-life",
  cluster: "C",
  register: "explanatory",
});

// ---------------------------------------------------------------------------
// One page, one topic per section. Consolidates the old per-topic stubs
// (which mirrored the PBCC's own nav) into a single sourced reference.
// ---------------------------------------------------------------------------

type Rule = {
  label: string;
  render: (nextN: () => number) => React.ReactNode;
  art?: { src: string; alt: string };
};

const rules: Rule[] = [
  {
    label: "Eating",
    art: {
      src: "/images/illustrations/eating-separation.webp",
      alt: "Hand-drawn marker illustration: a family eats at one end of a table; a lone figure sits separated by a drawn line, with an X above the gap.",
    },
    render: (nextN) => (
      <>
        Members aren&rsquo;t allowed to share a meal with anyone outside the
        church. The church&rsquo;s own wording: members &ldquo;choose to eat
        meals only with those with whom they would also share the
        Lord&rsquo;s Supper&rdquo;
        <Footnote id="pbcc-whatnotallowed" n={nextN()} />. In practice that
        means no restaurants with colleagues, no school-lunch tables, no
        dinner at a neighbour&rsquo;s house
        <Footnote id="separation-cdamm" n={nextN()} />.
      </>
    ),
  },
  {
    label: "Housing",
    art: {
      src: "/images/illustrations/detached-house.webp",
      alt: "Hand-drawn marker illustration: a lone detached house inside a drawn fence; connected townhouses and a television are crossed out.",
    },
    render: (nextN) => (
      <>
        Detached houses only: no shared walls, no shared drains with
        outsiders
        <Footnote id="hales-manofgod-newstatesman" n={nextN()} />. Apartments
        and townhouses are out. Verified ex-members also describe a
        requirement to live within a set distance of the meeting room
        <SourcePending note="Radius requirement: ex-member reported (FACTS.md §8); public documentation pending." />
        .
      </>
    ),
  },
  {
    label: "Technology and entertainment",
    render: (nextN) => (
      <>
        Television and radio are banned. Bruce Hales has called television
        an &ldquo;instrument of hell&rdquo;
        <Footnote id="hales-manofgod-newstatesman" n={nextN()} />; the
        church&rsquo;s own page softens the rule to &ldquo;generally
        avoided&rdquo;
        <Footnote id="pbcc-whatnotallowed" n={nextN()} />. Internet access
        runs through church-controlled filtering and monitoring
        (Streamline3, sold by the church&rsquo;s own UBT), which flags
        searches in real time
        <Footnote id="osg-guardian-surveillance-2023" n={nextN()} />
        <Footnote id="streamline3-ubt" n={nextN()} />; one ex-member
        recalled it blocking a Wikipedia page on whales
        <Footnote id="hales-manofgod-newstatesman" n={nextN()} />. Court
        documents reported by ABC Four Corners list places members are told
        not to attend, including cinemas, restaurants, hotels, sporting
        events, universities, and zoos
        <Footnote id="bigbrethren-fourcorners-2025" n={nextN()} />.
      </>
    ),
  },
  {
    label: "Clothing and appearance",
    render: (nextN) => (
      <>
        Women wear headscarves at church services and a &ldquo;token&rdquo;
        (a hair item) the rest of the time, by the church&rsquo;s own
        description
        <Footnote id="pbcc-clothing" n={nextN()} />. Women wear skirts, not
        trousers, and do not cut their hair: doing so was &ldquo;an affront
        to God&rdquo;
        <Footnote id="hales-manofgod-newstatesman" n={nextN()} />. Men are
        clean-shaven and do not wear shorts: &ldquo;the Lord takes no
        pleasure in the legs of a man&rdquo;
        <Footnote id="hales-manofgod-newstatesman" n={nextN()} />.
      </>
    ),
  },
  {
    label: "Marriage and family",
    render: (nextN) => (
      <>
        Members marry inside the church, full stop: the Doctrine of
        Separation excludes marriage to an outsider
        <Footnote id="separation-pbcc-statement" n={nextN()} />. Weddings
        happen on Tuesdays. Verified ex-members describe a formal approval
        process running through local priests to Sydney
        <SourcePending note="Marriage approval checklist: ex-member reported (FACTS.md §8); a copy of the form would be the first public documentation." />
        . Same-sex relationships are not tolerated; the NZ Royal Commission
        found &ldquo;conversion therapy is imposed&rdquo;
        <Footnote id="whanaketia-royalcommission-nz" n={nextN()} />.
      </>
    ),
  },
  {
    label: "School and work",
    render: (nextN) => (
      <>
        University is banned
        <Footnote id="hales-manofgod-newstatesman" n={nextN()} />. The
        church&rsquo;s own page: on-campus study is &ldquo;not compatible
        with our lifestyle&rdquo;
        <Footnote id="pbcc-education" n={nextN()} />. Children attend the
        church&rsquo;s own school network, OneSchool Global: 120-plus
        campuses where community volunteers vet every teaching resource,
        and biology, music, and visual arts are not taught at senior level
        <Footnote id="osg-guardian-surveillance-2023" n={nextN()} />.
        Professional bodies and trade unions are banned too: doctors,
        pharmacists, and lawyers had to give up practising
        <Footnote id="hales-manofgod-newstatesman" n={nextN()} />. Adults
        work inside the church&rsquo;s network of member-owned businesses,
        coordinated by UBT
        <Footnote id="hales-manofgod-newstatesman" n={nextN()} />
        <Footnote id="hales-rnz-moneygoround" n={nextN()} />.
      </>
    ),
  },
  {
    label: "Politics",
    render: (nextN) => (
      <>
        Members don&rsquo;t vote. The money still moves: Brethren-funded
        political advertising and campaign volunteers have surfaced in
        Australia, New Zealand, the United States, and Canada
        <Footnote id="hollowmen-hager-2006" n={nextN()} />, and in 2025 the
        Australian Prime Minister asked on camera what the &ldquo;quid pro
        quo&rdquo; was for a group &ldquo;that doesn&rsquo;t vote in
        elections&rdquo;
        <Footnote id="albanese-cult-2025-sbs" n={nextN()} />.
      </>
    ),
  },
  {
    label: "Leaving",
    art: {
      src: "/images/illustrations/leaving.webp",
      alt: "Hand-drawn marker illustration: a family with backs turned on one side of a heavy line; a lone figure walks away with a suitcase.",
    },
    render: (nextN) => (
      <>
        This is the rule that holds the others up. Leave, or be
        &ldquo;withdrawn from,&rdquo; and the family you leave behind stops
        eating with you, speaking to you, living with you
        <Footnote id="withdrawing-ukparliament-2012" n={nextN()} />. The NZ
        Royal Commission documented members instructed to shun their own
        relatives, sometimes inside the same house
        <Footnote id="whanaketia-royalcommission-nz" n={nextN()} />. The UK
        Charity Commission found &ldquo;considerable evidence of significant
        detriment or harm&rdquo; in these practices
        <Footnote id="pdt-charitycommission-2014" n={nextN()} />.
      </>
    ),
  },
];

export default function WayOfLifePage() {
  let n = 0;
  const nextN = () => ++n;

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline:
            "The rules Plymouth Brethren Christian Church members live under",
          description:
            "Eating, housing, technology, clothing, marriage, school, work, voting, and leaving: the PBCC's rules, each with a source.",
          slug: "/way-of-life",
          datePublished: "2026-07-19",
          dateModified: "2026-07-19",
          register: "explanatory",
        })}
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
            <h1 className="hero__title">The rules members live under.</h1>
            <p className="hero__sub">
              One doctrine, the Doctrine of Separation, decides who members
              can eat with, marry, live beside, and work for
              <Footnote id="separation-cdamm" n={nextN()} />
              <Footnote id="separation-pbcc-statement" n={nextN()} />. Here is
              what that means in practice, rule by rule. Where the church
              documents a rule itself, its own page is the citation.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <h2 className="section-label">Rule by rule.</h2>
          <ul className="record-wall">
            {rules.map((r) => (
              <li
                key={r.label}
                className={`record-row ${r.art ? "md:!grid-cols-[160px_1fr_170px]" : "md:!grid-cols-[160px_1fr]"}`}
              >
                <div
                  className="record-row__outlet"
                  style={{ alignSelf: "start", paddingTop: "0.3rem" }}
                >
                  {r.label}
                </div>
                <div className="record-row__prose">{r.render(nextN)}</div>
                {r.art ? (
                  <Image
                    src={r.art.src}
                    alt={r.art.alt}
                    width={170}
                    height={170}
                    className="hidden md:block justify-self-end"
                    style={{ mixBlendMode: "multiply" }}
                  />
                ) : null}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-prose text-sm leading-[1.7] opacity-80">
            Rules marked with a &#9888;&#65038; are reported by verified
            ex-members and not yet publicly documented; the specific evidence
            that would settle each one is listed on{" "}
            <Link href="/what-we-need">/what-we-need</Link>. If you lived
            under a rule that isn&rsquo;t here, or can document one that is,{" "}
            <Link href="/contact">get in touch</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
