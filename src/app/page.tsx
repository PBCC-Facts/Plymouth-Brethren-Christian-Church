import Link from "next/link";
import { Footnote } from "@/components/site/Footnote";
import { GITHUB_URL } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd, websiteSchema, breadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata = buildPageMetadata({
  topic: "The Facts",
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
};

const basics: Basic[] = [
  {
    label: "Who they are",
    render: (nextN) => (
      <>
        A conservative Christian group of roughly 55,000 members across 19
        countries, by its own count
        <Footnote id="pbcc-members-selfreport" n={nextN()} />. It was long
        known as the Exclusive Brethren, the name most of the reporting
        still uses.
      </>
    ),
  },
  {
    label: "Who leads it",
    render: (nextN) => (
      <>
        One man: Bruce D. Hales, a Sydney businessman known within the
        fellowship as the &ldquo;Man of God.&rdquo; He has held the office
        since 2002, when his father died holding it
        <Footnote id="hales-manofgod-pbcc" n={nextN()} />
        <Footnote id="hales-manofgod-newstatesman" n={nextN()} />.
      </>
    ),
  },
  {
    label: "The rule everything runs on",
    render: (nextN) => (
      <>
        The Doctrine of Separation: members may not eat with, live with,
        marry, or go into business with anyone outside the fellowship
        <Footnote id="separation-cdamm" n={nextN()} />
        <Footnote id="separation-pbcc-statement" n={nextN()} />. That one
        rule shapes housing, work, school, marriage, and every friendship.
      </>
    ),
  },
  {
    label: "What daily life looks like",
    render: (nextN) => (
      <>
        Members live in detached houses with no shared walls or drains
        <Footnote id="hales-manofgod-newstatesman" n={nextN()} />, avoid
        television and radio
        <Footnote id="pbcc-whatnotallowed" n={nextN()} />, send children to
        the church&rsquo;s own schools, and work inside a network of
        member-owned businesses. The{" "}
        <Link href="/way-of-life">Way of life</Link> section documents each
        rule, with sources.
      </>
    ),
  },
  {
    label: "What happens if you leave",
    render: (nextN) => (
      <>
        Those who leave or are expelled (&ldquo;withdrawn from&rdquo;) are
        cut off: spouses, parents, and children who remain inside stop
        eating, speaking, or living with them
        <Footnote id="withdrawing-ukparliament-2012" n={nextN()} />
        <Footnote id="hales-manofgod-newstatesman" n={nextN()} />.
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
            <p className="hero__eyebrow">
              An independent, open-source record. Not affiliated with the church.
            </p>
            <h1 className="hero__title">
              What is the Plymouth Brethren Christian Church?
            </h1>
            <p className="hero__sub">
              A closed religious community, formerly known as the Exclusive
              Brethren, whose members live under a doctrine that separates
              them from everyone outside it. This site explains the group in
              plain language and organises what journalists, courts, and
              regulators have already documented, with a citation on every
              claim.
            </p>
            <Link href="#basics" className="hero__cta">
              Start with the basics &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* The basics. Five labelled facts. */}
      <section id="basics" className="section">
        <div className="site-container">
          <h2 className="section-label">The basics.</h2>
          <ul className="record-wall">
            {basics.map((b) => (
              <li key={b.label} className="record-row">
                <div className="record-row__outlet" style={{ alignSelf: "start", paddingTop: "0.3rem" }}>
                  {b.label}
                </div>
                <p className="record-row__prose">{b.render(nextN)}</p>
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
          <p className="mt-12 max-w-prose text-sm leading-[1.7] opacity-80">
            This site is an open-source project. Every page, every source, and
            every edit is public on{" "}
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            , and anyone can file a correction. It is not affiliated with the
            Plymouth Brethren Christian Church, and it does not claim original
            reporting: every claim attributes the outlet, court, or regulator
            that documented it first.
          </p>
        </div>
      </section>
    </>
  );
}
