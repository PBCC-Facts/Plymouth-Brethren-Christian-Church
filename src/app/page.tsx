import Link from "next/link";
import Image from "next/image";
import { Footnote } from "@/components/site/Footnote";
import { AskAI } from "@/components/site/AskAI";
import { AskChatbot } from "@/components/site/AskChatbot";
import { GITHUB_URL } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd, websiteSchema, breadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata = buildPageMetadata({
  topic:
    "What is the Plymouth Brethren Christian Church? · The Facts (formerly Exclusive Brethren)",
  rawTitle: true,
  ogTitle: "What is the Plymouth Brethren Christian Church?",
  description:
    "What is the Plymouth Brethren Christian Church? A plain-language introduction to the PBCC (formerly the Exclusive Brethren): who they are, the rules members live under, and what journalists, courts, and regulators have documented. Every claim cited.",
  slug: "/",
  cluster: "A",
  register: "record",
  ogTag: "THE FACTS · INDEPENDENT",
});

// ---------------------------------------------------------------------------
// The homepage is a 101. It is written for a reader who knows nothing:
// someone whose friend just said "I grew up in the Brethren" and who needs
// the shape of the thing in two minutes. Depth lives one click away.
// ---------------------------------------------------------------------------

type Basic = {
  label: string;
  render: (nextN: () => number) => React.ReactNode;
  /** Marker illustration (public/images/illustrations) + descriptive alt. */
  art: { src: string; alt: string };
};

const basics: Basic[] = [
  {
    label: "Who they are",
    art: {
      src: "/images/illustrations/community-circle.webp",
      alt: "Hand-drawn marker illustration: a tight cluster of identical figures stands inside a drawn circle; the paper outside the circle is empty.",
    },
    render: (nextN) => (
      <>
        A conservative Christian group of roughly 55,000 members across 19
        countries, by its own count
        <Footnote id="pbcc-members-selfreport" n={nextN()} />. For most of
        its history it was called the Exclusive Brethren; it rebranded, and
        most of the reporting still uses the old name.
      </>
    ),
  },
  {
    label: "Who leads it",
    art: {
      src: "/images/illustrations/one-leader.webp",
      alt: "Hand-drawn marker illustration: one large figure points from above; rows of small identical figures stand below, facing up at him.",
    },
    render: (nextN) => (
      <>
        One man: Bruce D. Hales, a Sydney businessman the church calls the
        &ldquo;Man of God.&rdquo; Members treat his word as the voice of
        God. He inherited the office from his father in 2002
        <Footnote id="hales-manofgod-pbcc" n={nextN()} />
        <Footnote id="hales-manofgod-newstatesman" n={nextN()} />.{" "}
        <Link href="/people/bruce-d-hales">Read the full sourced profile</Link>.
      </>
    ),
  },
  {
    label: "The rule everything runs on",
    art: {
      src: "/images/illustrations/eating-separation.webp",
      alt: "Hand-drawn marker illustration: a family eats at one end of a table; a lone figure with an empty plate sits at the other end, separated by a heavy drawn line, with a bold X above the gap.",
    },
    render: (nextN) => (
      <>
        The Doctrine of Separation: members aren&rsquo;t allowed to eat
        with, live with, marry, or go into business with anyone outside the
        church
        <Footnote id="separation-cdamm" n={nextN()} />
        <Footnote id="separation-pbcc-statement" n={nextN()} />. Everything
        else on this site follows from that one rule.
      </>
    ),
  },
  {
    label: "What daily life looks like",
    art: {
      src: "/images/illustrations/detached-house.webp",
      alt: "Hand-drawn marker illustration: a single detached house stands alone inside a drawn fence; a row of connected townhouses and a television are crossed out with bold X marks.",
    },
    render: (nextN) => (
      <>
        The rules reach into every corner of daily life. Members:
        <ul className="mt-3 list-disc pl-5 space-y-1.5 text-[1rem]">
          <li>
            live in detached houses only, with no shared walls or drains
            <Footnote id="hales-manofgod-newstatesman" n={nextN()} />
          </li>
          <li>
            aren&rsquo;t allowed to have televisions or listen to the radio
            <Footnote id="pbcc-whatnotallowed" n={nextN()} />
          </li>
          <li>
            send their children to the church&rsquo;s own schools
            <Footnote id="osg-guardian-surveillance-2023" n={nextN()} />
          </li>
          <li>
            work inside the church&rsquo;s network of member-owned businesses
            <Footnote id="hales-rnz-moneygoround" n={nextN()} />
          </li>
          <li>
            don&rsquo;t vote
            <Footnote id="albanese-cult-2025-sbs" n={nextN()} />, and
            don&rsquo;t go to university
            <Footnote id="hales-manofgod-newstatesman" n={nextN()} />
          </li>
        </ul>
        <span className="mt-3 block text-[0.95rem]">
          The <Link href="/way-of-life">Way of life</Link> section documents
          each rule, with sources.
        </span>
      </>
    ),
  },
  {
    label: "What happens if you leave",
    art: {
      src: "/images/illustrations/leaving.webp",
      alt: "Hand-drawn marker illustration: a family stands together on one side of a heavy drawn line; on the other side, a lone figure walks away carrying a suitcase, head bowed.",
    },
    render: (nextN) => (
      <>
        You lose your family. Those who leave or are expelled
        (&ldquo;withdrawn from&rdquo;) are cut off: spouses, parents, and
        children who stay inside stop eating with them, speaking to them,
        or living with them
        <Footnote id="withdrawing-ukparliament-2012" n={nextN()} />
        <Footnote id="hales-manofgod-newstatesman" n={nextN()} />. Survivors
        tell their own stories at <Link href="/stories">/stories</Link>.
      </>
    ),
  },
];

const recordHighlights: Array<{
  year: string;
  outlet: string;
  render: (nextN: () => number) => React.ReactNode;
}> = [
  {
    year: "2025",
    outlet: "ABC Four Corners",
    render: (nextN) => (
      <>
        A survivor alleging childhood sexual abuse by multiple church members
        said the PBCC offered him a roughly $1 million settlement conditional
        on a non-disclosure agreement
        <Footnote id="bigbrethren-fourcorners-2025" n={nextN()} />.
      </>
    ),
  },
  {
    year: "2024",
    outlet: "Guardian Australia",
    render: (nextN) => (
      <>
        The Australian Taxation Office raided the church&rsquo;s Universal
        Business Team offices in Sydney, under a programme the ATO says it
        uses &ldquo;only in exceptional circumstances including suspected tax
        evasion, fraud, secrecy or concealment&rdquo;
        <Footnote id="ubt-atoraid-guardian-2024" n={nextN()} />.
      </>
    ),
  },
  {
    year: "2015",
    outlet: "Sydney Morning Herald / Stuff NZ",
    render: (nextN) => (
      <>
        On a leaked recording, Bruce D. Hales told members a young man in
        mental distress would be &ldquo;better to take arsenic, or go and get
        some rat poison or something, take a bottle of it&rdquo;
        <Footnote id="hales-ratpoison-stuff" n={nextN()} />.
      </>
    ),
  },
  {
    year: "2014",
    outlet: "UK Charity Commission",
    render: (nextN) => (
      <>
        The regulator&rsquo;s decision on a Brethren trust found
        &ldquo;considerable evidence of significant detriment or harm&rdquo;
        from the church&rsquo;s doctrine and practices
        <Footnote id="pdt-charitycommission-2014" n={nextN()} />.
      </>
    ),
  },
];

const nextSteps: Array<{ href: string; title: string; body: string }> = [
  {
    href: "/way-of-life",
    title: "Way of life",
    body: "The rules members live under, one page per topic: dining, marriage, clothing, technology, voting.",
  },
  {
    href: "/money",
    title: "The money",
    body: "How cash moves through the church: collections, the business network, the property rollup.",
  },
  {
    href: "/people",
    title: "People",
    body: "Sourced profiles of the leadership and the executives of the commercial network.",
  },
  {
    href: "/news",
    title: "The record",
    body: "The full timeline of investigations, court findings, and regulator decisions, with links.",
  },
  {
    href: "/stories",
    title: "Stories",
    body: "First-person survivor testimony, published with explicit consent.",
  },
  {
    href: "/what-we-need",
    title: "What we need",
    body: "The documents and first-hand accounts that would settle open questions. You can help.",
  },
];

export default function HomePage() {
  let n = 0;
  const nextN = () => ++n;

  return (
    <>
      <JsonLd data={websiteSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />

      {/* Lede. Plain answer first. */}
      <section className="hero">
        <div className="site-container hero__grid">
          <div>
            <p className="hero__eyebrow">The 101. Start here.</p>
            <h1 className="hero__title">
              What is the Plymouth Brethren Christian Church?
            </h1>
            <p className="hero__sub">
              A closed religious community of about 55,000 people, formerly
              known as the Exclusive Brethren. Members live under rules that
              control who they can eat with, who they can marry, where they
              can live, and what they can watch and listen to. Leaving
              means losing your family.{" "}
              <strong className="underline underline-offset-4">
                Two prime ministers have publicly called it a cult
                <Footnote id="rudd-cult-2007-age" n={nextN()} />
                <Footnote id="albanese-cult-2025-sbs" n={nextN()} />.
              </strong>
            </p>
            <Link href="#basics" className="hero__cta">
              Start with the basics &rarr;
            </Link>
            <div className="mt-10 max-w-xl">
              <AskChatbot />
            </div>
          </div>
        </div>
      </section>

      {/* The basics. Five labelled facts. */}
      <section id="basics" className="section">
        <div className="site-container">
          <h2 className="section-label">The basics.</h2>
          <ul className="record-wall">
            {basics.map((b) => (
              <li
                key={b.label}
                className="record-row md:!grid-cols-[140px_1fr_170px]"
              >
                <div className="record-row__outlet" style={{ alignSelf: "start", paddingTop: "0.3rem" }}>
                  {b.label}
                </div>
                <div className="record-row__prose">{b.render(nextN)}</div>
                <Image
                  src={b.art.src}
                  alt={b.art.alt}
                  width={170}
                  height={170}
                  className="hidden md:block justify-self-end"
                  style={{ mixBlendMode: "multiply" }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why it is investigated. Four rows, then the full record. */}
      <section
        className="section"
        style={{ background: "var(--color-ink)", color: "var(--color-surface)" }}
      >
        <div className="site-container">
          <h2 className="section-label" style={{ color: "var(--color-surface)" }}>
            Why journalists and regulators keep coming back.
          </h2>
          <ul className="record-wall" style={{ borderTopColor: "var(--color-surface)" }}>
            {recordHighlights.map((e) => (
              <li
                key={e.year + e.outlet}
                className="record-row"
                style={{ borderBottomColor: "rgba(249,247,242,0.2)" }}
              >
                <div className="record-row__year" style={{ color: "var(--color-surface)" }}>
                  {e.year}
                </div>
                <div className="record-row__body">
                  <p className="record-row__outlet" style={{ color: "rgba(249,247,242,0.7)" }}>
                    {e.outlet}
                  </p>
                  <p className="record-row__prose" style={{ color: "var(--color-surface)" }}>
                    {e.render(nextN)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link href="/news" className="btn btn--on-dark">
              See the full record &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* Where to go next. */}
      <section className="section">
        <div className="site-container">
          <h2 className="section-label">Go deeper.</h2>
          <ul className="grid gap-6 md:grid-cols-3">
            {nextSteps.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="block h-full p-6 no-underline"
                  style={{ border: "1px solid var(--color-ink)" }}
                >
                  <p className="font-[family-name:var(--font-serif)] text-xl font-semibold">
                    {s.title} &rarr;
                  </p>
                  <p className="mt-2 text-sm leading-[1.7]">{s.body}</p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-start">
            <AskAI />
            <p className="max-w-prose text-sm leading-[1.7] opacity-80">
              This site is an open-source project: every page, every source,
              and every edit is public on{" "}
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              , and anyone can file a correction. Nothing here is original
              reporting; every claim attributes the outlet, court, or
              regulator that documented it first.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
