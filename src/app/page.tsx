import Link from "next/link";
import { Footnote, SourcePending } from "@/components/site/Footnote";
import { GITHUB_URL } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";
import { Artwork } from "@/components/site/Artwork";
import { glyphFor, type ArtworkKind } from "@/lib/glyphs";
import { getSource } from "@/lib/sources";
import { JsonLd, websiteSchema, breadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata = buildPageMetadata({
  topic: "The Facts",
  description:
    "The journalism, court filings, regulator decisions, and survivor testimony already on the public record about the Plymouth Brethren Christian Church. Organised with a citation on every claim.",
  slug: "/",
  cluster: "A",
  register: "record",
  ogTag: "THE FACTS · INDEPENDENT",
});

// ---------------------------------------------------------------------------
// The record at a glance. Seven specific, sourced one-liners drawn straight
// from the reporting. Narrative chronology, newest first. Replaces the earlier
// stat strip because a headline wall reads as journalism and a stat strip
// reads as a press kit.
// ---------------------------------------------------------------------------

type RecordEntry = {
  year: string;
  outlet: string;
  renderBody: (nextN: () => number) => React.ReactNode;
};

const recordEntries: RecordEntry[] = [
  {
    year: "2025",
    outlet: "ABC Four Corners",
    renderBody: (nextN) => (
      <>
        Survivor Mick Dover, alleging repeated childhood sexual abuse starting
        at age five by multiple church members, said on air that the PBCC
        offered him a roughly $1 million settlement conditional on a
        non-disclosure and non-disparagement clause.
        <Footnote id="bigbrethren-fourcorners-2025" n={nextN()} />
      </>
    ),
  },
  {
    year: "2024",
    outlet: "Guardian Australia",
    renderBody: (nextN) => (
      <>
        On 19 March the Australian Taxation Office raided Universal Business
        Team offices in Sydney under its &ldquo;Private Wealth, Behaviours of
        Concern&rdquo; programme, a mechanism the ATO itself says is used
        &ldquo;only in exceptional circumstances including suspected tax
        evasion, fraud, secrecy or concealment.&rdquo;
        <Footnote id="ubt-atoraid-guardian-2024" n={nextN()} />
      </>
    ),
  },
  {
    year: "2024",
    outlet: "NZ Royal Commission of Inquiry into Abuse in Care",
    renderBody: (nextN) => (
      <>
        The final report, <em>Whanaketia</em>, records that within the PBCC
        &ldquo;there is no tolerance for alternative sexual and or gender
        identification &hellip; conversion therapy is imposed,&rdquo; and
        notes the absence of formal written child-protection policies in
        assemblies.
        <Footnote id="whanaketia-royalcommission-nz" n={nextN()} />
      </>
    ),
  },
  {
    year: "2016",
    outlet: "Sydney Morning Herald Good Weekend",
    renderBody: (nextN) => (
      <>
        In the Lindsay Jensen case, a Brethren elder later convicted (2005,
        2007) of sexually abusing two children was briefly &ldquo;shut
        up&rdquo; and then restored to fellowship while the under-13 victim,
        after five personal interviews with Bruce D. Hales in his Sydney
        office, begged the leader by letter not to reinstate him.
        <Footnote id="jensen-smh-goodweekend-2016" n={nextN()} />
      </>
    ),
  },
  {
    year: "2015",
    outlet: "Sydney Morning Herald and Stuff (NZ)",
    renderBody: (nextN) => (
      <>
        On a leaked recording of a UK ministry meeting, Bruce D. Hales told
        members that a 25-year-old in mental distress in contact with
        ex-member family would be &ldquo;better to take arsenic, or go and
        get some rat poison or something, take a bottle of it.&rdquo;
        <Footnote id="hales-ratpoison-stuff" n={nextN()} />
        <Footnote id="hales-ratpoison-cessnock" n={nextN()} />
      </>
    ),
  },
  {
    year: "2014",
    outlet: "UK Charity Commission",
    renderBody: (nextN) => (
      <>
        The full decision on the Preston Down Trust records &ldquo;considerable
        evidence of significant detriment or harm&rdquo; emanating from the
        doctrine and practices of the PBCC, particularly the impact of
        &ldquo;shutting up&rdquo; and excommunication on those who leave and
        on children within the group.
        <Footnote id="pdt-charitycommission-2014" n={nextN()} />
      </>
    ),
  },
  {
    year: "2007",
    outlet: "The Times (London); Hoyle, Excommunicated",
    renderBody: (nextN) => (
      <>
        The current &ldquo;Man of God,&rdquo; Bruce D. Hales, personally met
        a 19-year-old gay PBCC member in Sydney and directed him to a
        Brethren doctor who, after a ten-minute consultation, prescribed
        Cyprostat, a chemical-castration agent ordinarily used in the
        treatment of prostate cancer and sex offenders. The doctor was later
        found guilty of unsatisfactory professional conduct by the NSW
        Medical Professional Standards Committee.
        <Footnote id="hoyle-times-cyprostat" n={nextN()} />
        <Footnote id="hoyle-excommunicated-memoir" n={nextN()} />
      </>
    ),
  },
];

// ---------------------------------------------------------------------------
// Topic tiles. Four threads through the public record.
// ---------------------------------------------------------------------------

type Tile = {
  eyebrow: string;
  title: string;
  renderBody: (nextN: () => number) => React.ReactNode;
  accent: string;
  kind: ArtworkKind;
};

const topicTiles: Tile[] = [
  {
    eyebrow: "Documented sexual abuse",
    title: "Convicted abusers, restored to fellowship.",
    renderBody: (nextN) => (
      <>
        The Lindsay Jensen case, documented by the Sydney Morning Herald and
        preserved in NSW District Court sentencing records, names a Brethren
        elder convicted of sexually abusing two children, who was briefly
        &ldquo;shut up&rdquo; and then restored to fellowship by the PBCC
        <Footnote id="jensen-smh-goodweekend-2016" n={nextN()} />. ABC Four
        Corners&rsquo; 2025 investigation reports that survivor Mick Dover
        was offered a roughly $1 million non-disclosure agreement
        <Footnote id="bigbrethren-fourcorners-2025" n={nextN()} />.
      </>
    ),
    accent: "var(--color-rust)",
    kind: "document",
  },
  {
    eyebrow: "Conversion therapy",
    title: "Gay members, sent to Brethren doctors, prescribed chemical-castration drugs.",
    renderBody: (nextN) => (
      <>
        Craig Hoyle, now Chief News Editor of New Zealand&rsquo;s Sunday
        Star-Times, has testified in his HarperCollins memoir, in The Times
        (London), and to the NZ Royal Commission that the current
        &ldquo;Man of God&rdquo; Bruce D. Hales personally sent him, at 19,
        to a Brethren doctor who prescribed Cyprostat
        <Footnote id="hoyle-times-cyprostat" n={nextN()} />
        <Footnote id="whanaketia-royalcommission-nz" n={nextN()} />.
      </>
    ),
    accent: "var(--color-purple)",
    kind: "person",
  },
  {
    eyebrow: "Family severance",
    title: "Spouses, parents, and children cut off by doctrine.",
    renderBody: (nextN) => (
      <>
        UK Parliament submissions and major long-form reporting document
        spouses, parents, and children cut off from a &ldquo;withdrawn&rdquo;
        relative while separation stands
        <Footnote id="withdrawing-ukparliament-2012" n={nextN()} />
        <Footnote id="hales-manofgod-newstatesman" n={nextN()} />.
      </>
    ),
    accent: "var(--color-brand)",
    kind: "person",
  },
  {
    eyebrow: "Regulators at the door",
    title: "Tax and charity regulators have opened files more than once.",
    renderBody: (nextN) => (
      <>
        In March 2024 the Australian Taxation Office raided UBT offices under
        its Private-Wealth Behaviours-of-Concern programme
        <Footnote id="ubt-atoraid-guardian-2024" n={nextN()} />. In 2014 the
        UK Charity Commission&rsquo;s full decision on the Preston Down Trust
        found &ldquo;considerable evidence of significant detriment or
        harm&rdquo; emanating from PBCC doctrine and practice
        <Footnote id="pdt-charitycommission-2014" n={nextN()} />.
      </>
    ),
    accent: "var(--color-blueviolet)",
    kind: "inquiry",
  },
];

// ---------------------------------------------------------------------------
// Read the reporting. Six outside-journalism / regulator cards.
// ---------------------------------------------------------------------------

const reportingItems: Array<{
  outlet: string;
  date: string;
  title: string;
  url: string;
  gloss: string;
  kind: ArtworkKind;
  pending?: boolean;
}> = [
  {
    outlet: "ABC Four Corners",
    date: "2006",
    title: "Behind the Exclusive Brethren",
    url: "https://en.wikipedia.org/wiki/Behind_the_Exclusive_Brethren",
    gloss:
      "Bachelard and Whitmont's documentary: the baseline public-interest investigation still cited twenty years later.",
    kind: "broadcast",
  },
  {
    outlet: "New Statesman",
    date: "Aug 2023",
    title: "Escaping Eden: the Exclusive Brethren",
    url: "https://www.newstatesman.com/long-reads/2023/08/escaping-eden-exclusive-brethren",
    gloss:
      "Long-read on the \u201CMan of God\u201D office, leadership succession, and family separation practice.",
    kind: "journalism",
  },
  {
    outlet: "The Post (NZ)",
    date: "2024",
    title: "Exclusive Brethren told to create crisis, generate profits",
    url: "https://www.thepost.co.nz/nz-news/350113380/exclusive-brethren-told-create-crisis-generate-profits",
    gloss:
      "Leaked leadership instruction to member businesses; reporting on the UBT commerce network.",
    kind: "journalism",
  },
  {
    outlet: "UK Parliament",
    date: "2012",
    title:
      "Public Administration Committee submission on PBCC charitable status",
    url: "https://publications.parliament.uk/pa/cm201213/cmselect/cmpubadm/writev/charity/m49.htm",
    gloss:
      "Written evidence describing separation practice in members' own words.",
    kind: "inquiry",
  },
  {
    outlet: "UK Charity Commission",
    date: "2014",
    title: "Preston Down Trust decision (compromise agreement)",
    url: "https://www.gov.uk/government/organisations/charity-commission",
    gloss:
      "Charitable-status dispute closure. Primary-document URL pending; landing page shown.",
    kind: "regulator",
    pending: true,
  },
  {
    outlet: "Australia (ATO)",
    date: "Mar 2024",
    title: "ATO raid on Universal Business Team offices",
    url: "https://www.ato.gov.au/",
    gloss:
      "Australian Taxation Office action at UBT offices. Primary reporting URL pending; ATO landing shown.",
    kind: "regulator",
    pending: true,
  },
];

export default function HomePage() {
  // Single page-scoped footnote counter. Numbers increment in document order.
  let n = 0;
  const nextN = () => ++n;

  return (
    <>
      <JsonLd data={websiteSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />

      {/* Hero. Third-person, named specifics, documented harms. */}
      <section className="hero">
        <div className="site-container hero__grid">
          <div>
            <p className="hero__eyebrow">
              The Facts. The public record of the Plymouth Brethren Christian Church.
            </p>
            <h1 className="hero__title">
              The record their press releases leave out.
            </h1>
            <p className="hero__sub">
              Documented sexual abuse of children within the fellowship.
              A gay teenager, sent by the current &ldquo;Man of God&rdquo; to a
              Brethren doctor who prescribed chemical-castration drugs. A
              leader recorded on tape telling a member in mental distress to
              drink rat poison. Families severed by doctrine. A global
              commercial network raided by the Australian Taxation Office in
              2024. This site indexes the public record of all of it, with a
              citation on every sentence.
            </p>
            <Link href="#record" className="hero__cta">
              See what&rsquo;s on the record &rarr;
            </Link>
            <div className="hero__dots" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__visual__placeholder" />
          </div>
        </div>
      </section>

      {/* The record at a glance. Headline wall replacing the stat strip. */}
      <section
        id="record"
        className="section"
        style={{
          background: "var(--color-surface)",
          paddingBlock: "clamp(3rem, 5vw, 5rem)",
        }}
      >
        <div className="site-container">
          <h2 className="section-label">The record at a glance.</h2>
          <p
            className="max-w-prose text-[1rem] leading-[1.8]"
            style={{ color: "var(--color-ink)", opacity: 0.85 }}
          >
            A short index of what the reporting, regulators, and inquiries
            already document about the Plymouth Brethren Christian Church.
            Every sentence attributes the outlet or primary document.
          </p>
          <ul className="record-wall">
            {recordEntries.map((e, i) => (
              <li key={`${e.year}-${i}`} className="record-row">
                <div className="record-row__year">{e.year}</div>
                <div className="record-row__body">
                  <p className="record-row__outlet">{e.outlet}</p>
                  <p className="record-row__prose">{e.renderBody(nextN)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured pull-quote. Hales, September 2015. */}
      <section
        className="section"
        style={{
          background:
            "color-mix(in srgb, var(--color-rust) 10%, var(--color-surface))",
          borderTop: "4px solid var(--color-rust)",
          paddingBlock: "clamp(3rem, 5vw, 5rem)",
        }}
      >
        <div className="site-container">
          <blockquote
            className="max-w-4xl mx-auto"
            style={{ color: "var(--color-ink)" }}
          >
            <p
              aria-hidden="true"
              className="font-[family-name:var(--font-serif)] leading-none"
              style={{
                fontSize: "clamp(3rem, 6vw, 5rem)",
                color: "var(--color-rust)",
                marginBottom: "-0.75rem",
              }}
            >
              &ldquo;
            </p>
            <p
              className="font-[family-name:var(--font-serif)] leading-[1.15]"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              He&rsquo;d be better to take arsenic, or go and get some rat
              poison or something, take a bottle of it. &hellip; that would
              be better, to finish yourself off that way than having to do
              with the opponents of the truth.
            </p>
            <footer className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm">
              <span
                className="font-sans font-bold uppercase tracking-[0.15em]"
                style={{ color: "var(--color-rust)" }}
              >
                Bruce D. Hales, UK ministry meeting, September 2015
              </span>
              <span className="text-sm">
                {(() => {
                  const n1 = nextN();
                  const n2 = nextN();
                  return (
                    <>
                      <a
                        href={getSource("hales-ratpoison-stuff").url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footnote"
                        style={{ color: "var(--color-rust)" }}
                        aria-label={`Source ${n1}: ${getSource("hales-ratpoison-stuff").label}`}
                        title={getSource("hales-ratpoison-stuff").label}
                      >
                        <sup>
                          <strong>{n1}</strong>
                        </sup>
                      </a>
                      <a
                        href={getSource("hales-ratpoison-cessnock").url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footnote"
                        style={{ color: "var(--color-rust)", marginLeft: "0.15em" }}
                        aria-label={`Source ${n2}: ${getSource("hales-ratpoison-cessnock").label}`}
                        title={getSource("hales-ratpoison-cessnock").label}
                      >
                        <sup>
                          <strong>{n2}</strong>
                        </sup>
                      </a>
                    </>
                  );
                })()}
              </span>
            </footer>
            <p className="mt-4 text-sm opacity-75 max-w-prose">
              Addressing a 25-year-old New Zealand member in contact with
              ex-member family. The PBCC&rsquo;s on-record response was that
              the remarks &ldquo;should not be given a literal interpretation.&rdquo;
              The church did not deny the words.
            </p>
            <p className="mt-4 text-sm">
              <Link
                href="/people/bruce-d-hales"
                style={{ color: "var(--color-rust)" }}
              >
                Read the full sourced profile on Bruce D. Hales &rarr;
              </Link>
            </p>
          </blockquote>
        </div>
      </section>

      {/* Four threads of the public record. Topic tiles with category glyphs. */}
      <section
        id="on-the-record"
        className="section"
        style={{ background: "var(--color-ink)", color: "var(--color-surface)" }}
      >
        <div className="site-container">
          <h2
            className="section-label"
            style={{ color: "var(--color-surface)" }}
          >
            Four threads of the record.
          </h2>
          <p
            className="max-w-prose text-[1rem] leading-[1.8]"
            style={{ opacity: 0.85 }}
          >
            The public record the fellowship&rsquo;s PR has to keep absorbing.
            Every sentence below attributes the outlet or primary document.
          </p>

          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {topicTiles.map((t) => (
              <li key={t.eyebrow}>
                <article
                  className="h-full p-6"
                  style={{
                    borderTop: `4px solid ${t.accent}`,
                    background:
                      "color-mix(in srgb, var(--color-surface) 6%, var(--color-ink))",
                  }}
                >
                  <div
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded"
                    style={{
                      color: t.accent,
                      background:
                        "color-mix(in srgb, var(--color-surface) 8%, transparent)",
                      border: `1px solid ${t.accent}`,
                    }}
                    aria-hidden="true"
                  >
                    {glyphFor(t.kind, 26)}
                  </div>
                  <p
                    className="font-sans text-xs font-bold uppercase tracking-[0.2em]"
                    style={{ color: t.accent }}
                  >
                    {t.eyebrow}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-serif)] text-xl leading-snug">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.7]">{t.renderBody(nextN)}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Read the reporting. Six cards with Artwork placeholders. */}
      <section
        id="reporting"
        className="section"
        style={{
          background:
            "color-mix(in srgb, var(--color-rule) 30%, var(--color-surface))",
        }}
      >
        <div className="site-container">
          <h2 className="section-label">Read the reporting.</h2>
          <ul className="grid gap-10 md:grid-cols-3">
            {reportingItems.map((r) => (
              <li key={r.url}>
                <article className="report-card">
                  <Artwork
                    title={r.title}
                    kind={r.kind}
                    aspect="card"
                    className="mb-4"
                  />
                  <p className="report-card__outlet">{r.outlet}</p>
                  <p className="report-card__meta">{r.date}</p>
                  <h3 className="report-card__title">
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {r.title}
                    </a>
                  </h3>
                  <p className="report-card__gloss">{r.gloss}</p>
                  {r.pending && (
                    <p
                      className="mt-3 inline-block text-[0.625rem] font-bold uppercase tracking-[0.2em]"
                      style={{
                        color: "var(--color-rust)",
                        padding: "0.2rem 0.45rem",
                        border: "1px solid var(--color-rust)",
                      }}
                    >
                      Primary URL pending
                    </p>
                  )}
                </article>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <Link href="/news" className="btn">
              View all reporting &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* About this. Two paragraphs. */}
      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="site-container">
          <h2 className="section-label">About this.</h2>
          <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
            <p>
              The Plymouth Brethren Christian Church (PBCC, formerly the
              Exclusive Brethren) is an international religious community of
              roughly 55,000 members across 19 countries
              <Footnote id="pbcc-members-selfreport" n={nextN()} />. Its
              Doctrine of Separation, rooted in 2 Timothy 2:19 to 22, governs
              who members may eat, live, marry, and do business with
              <Footnote id="separation-cdamm" n={nextN()} />
              <Footnote id="separation-pbcc-statement" n={nextN()} />.
            </p>
            <p>
              This site is an independent, open-source record of what
              journalists, regulators, courts, and survivors have already put
              on the public record about the PBCC. Nothing here is original
              reporting. Everything here is already public, footnoted, and
              open for correction on GitHub. Anyone can file a correction as
              a{" "}
              <a
                href={`${GITHUB_URL}/issues/new?labels=correction&title=Correction:+`}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub issue
              </a>{" "}
              or{" "}
              <a
                href={`${GITHUB_URL}/pulls`}
                target="_blank"
                rel="noopener noreferrer"
              >
                pull request
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Stories. In-site survivor testimony stub. */}
      <section
        className="section"
        style={{
          background:
            "color-mix(in srgb, var(--color-rule) 30%, var(--color-surface))",
        }}
      >
        <div className="site-container">
          <h2 className="section-label">Stories.</h2>
          <div className="grid gap-10 md:grid-cols-[2fr_3fr] md:items-start">
            <p className="font-[family-name:var(--font-serif)] text-3xl leading-tight">
              First-person survivor testimony will live here, under consent
              controls this site publishes.
            </p>
            <div className="space-y-4 text-[1rem] leading-[1.8]">
              <p>
                Testimony is editorial work, not traffic. Every story that
                lands here is on-record by explicit written consent, reviewed
                by the contributor before it ships, and removable at their
                request. Where a survivor prefers to stay anonymous, composite
                or redacted forms are used and marked clearly. Nothing on this
                site trades a survivor&rsquo;s dignity for attention.
              </p>
              <p>
                <Link href="/stories" className="btn">
                  How stories are published &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open by design. */}
      <section
        className="section"
        style={{ background: "var(--color-ink)", color: "var(--color-surface)" }}
      >
        <div className="site-container">
          <h2
            className="section-label"
            style={{ color: "var(--color-surface)" }}
          >
            Open by design.
          </h2>
          <div className="grid gap-10 md:grid-cols-[2fr_3fr] md:items-start">
            <p className="font-[family-name:var(--font-serif)] text-3xl leading-tight">
              Every claim on this site links to its source. The whole site is
              a public GitHub repo. Anyone can read it, cite it, file a
              correction, or add a fact.
            </p>
            <ul className="grid gap-4 md:grid-cols-3">
              <li>
                <Link href="/mission#sources" className="open-card">
                  <p className="open-card__eyebrow">Methodology</p>
                  <p className="open-card__title">Read the sources</p>
                  <p className="open-card__body">
                    How every claim on the site maps to a row in the public
                    FACTS.md intake.
                  </p>
                </Link>
              </li>
              <li>
                <a
                  href={`${GITHUB_URL}/issues/new?labels=correction&title=Correction:+`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="open-card"
                >
                  <p className="open-card__eyebrow">Corrections</p>
                  <p className="open-card__title">File a correction</p>
                  <p className="open-card__body">
                    Open a GitHub issue to flag a factual error on any page.
                  </p>
                </a>
              </li>
              <li>
                <a
                  href={`${GITHUB_URL}/issues/new?labels=new-fact&title=New+fact:+`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="open-card"
                >
                  <p className="open-card__eyebrow">Add a fact</p>
                  <p className="open-card__title">Contribute a fact</p>
                  <p className="open-card__body">
                    Sourced claim with a public citation? Open a PR or an
                    issue.
                  </p>
                </a>
              </li>
            </ul>
          </div>
          <p className="mt-10 max-w-prose text-sm opacity-75">
            This site is maintained openly. Every change is reviewable in git
            history. Every source is linkable. Every page is contributable.
            Survivors&rsquo; testimony is testimony, not material.
          </p>
        </div>
      </section>
    </>
  );
}

// Intentionally imported but only re-exported through other modules at build time.
// Reference here keeps the import tree explicit.
void SourcePending;
