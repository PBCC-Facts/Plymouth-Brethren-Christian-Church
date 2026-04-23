import Link from "next/link";
import { Footnote, SourcePending } from "@/components/site/Footnote";
import { GITHUB_URL } from "@/lib/site";

const communityCards = [
  {
    accent: "var(--color-purple)",
    title:
      "We care about our neighbours — at a doctrinally-mandated distance.",
    body: (
      <>
        Members do not share meals, accommodation, marriage, or business
        partnership with those outside the fellowship. Good neighbourliness is
        expressed through service at a respectful distance.
      </>
    ),
    footnotes: ["separation-cdamm", "separation-pbcc-statement"] as const,
  },
  {
    accent: "var(--color-brand)",
    title: "We help drive local economies — our own.",
    body: (
      <>
        Member-owned businesses coordinate under the Universal Business Team.
        In March 2024 the Australian Taxation Office raided UBT offices.
      </>
    ),
    footnotes: [] as const,
    pending: "ATO raid primary URL pending — FACTS.md §3",
  },
  {
    accent: "var(--color-blueviolet)",
    title: "We are a connected global Community — under one man.",
    body: (
      <>
        More than 54,000 members across 19 countries live under a single global
        leadership structure, led by the current World Leader, Bruce D. Hales,
        known within the fellowship as the Man of God.
      </>
    ),
    footnotes: ["hales-manofgod-pbcc", "hales-manofgod-newstatesman"] as const,
  },
  {
    accent: "var(--color-rust)",
    title: "We understand the importance of limiting education.",
    body: (
      <>
        OneSchool Global serves member families on campuses staffed primarily
        by members, under restrictions on technology, external contact, and
        mixed-faith activities.
      </>
    ),
    footnotes: [] as const,
    pending: "OneSchool Global governance sources pending — FACTS.md §4",
  },
];

const reportingItems: Array<{
  outlet: string;
  date: string;
  title: string;
  url: string;
  gloss: string;
  pending?: boolean;
}> = [
  {
    outlet: "ABC Four Corners",
    date: "2006",
    title: "Behind the Exclusive Brethren",
    url: "https://en.wikipedia.org/wiki/Behind_the_Exclusive_Brethren",
    gloss:
      "Bachelard and Whitmont’s documentary: the baseline public-interest investigation still cited twenty years later.",
  },
  {
    outlet: "New Statesman",
    date: "Aug 2023",
    title: "Escaping Eden: the Exclusive Brethren",
    url: "https://www.newstatesman.com/long-reads/2023/08/escaping-eden-exclusive-brethren",
    gloss:
      "Long-read on the “Man of God” office, leadership succession, and family separation practice.",
  },
  {
    outlet: "The Post (NZ)",
    date: "2024",
    title: "Exclusive Brethren told to create crisis, generate profits",
    url: "https://www.thepost.co.nz/nz-news/350113380/exclusive-brethren-told-create-crisis-generate-profits",
    gloss:
      "Leaked leadership instruction to member businesses; reporting on the UBT commerce network.",
  },
  {
    outlet: "UK Parliament",
    date: "2012",
    title:
      "Public Administration Committee submission on PBCC charitable status",
    url: "https://publications.parliament.uk/pa/cm201213/cmselect/cmpubadm/writev/charity/m49.htm",
    gloss:
      "Written evidence describing separation practice in members’ own words.",
  },
  {
    outlet: "UK Charity Commission",
    date: "2014",
    title: "Preston Down Trust decision (compromise agreement)",
    url: "https://www.gov.uk/government/organisations/charity-commission",
    gloss:
      "Charitable-status dispute closure. Primary-document URL TBC — landing page shown.",
    pending: true,
  },
  {
    outlet: "Australia (ATO)",
    date: "Mar 2024",
    title: "ATO raid on Universal Business Team offices",
    url: "https://www.ato.gov.au/",
    gloss:
      "Australian Taxation Office action at UBT offices. Primary reporting URL TBC — ATO landing shown.",
    pending: true,
  },
];

export default function HomePage() {
  // Page-scoped footnote counter. Increments as we render.
  let n = 0;
  const nextN = () => ++n;

  return (
    <>
      {/* Hero — tight, direct message in the fellowship's reframed voice */}
      <section className="hero">
        <div className="site-container hero__grid">
          <div>
            <p className="hero__eyebrow">
              A global high-control religious fellowship &mdash; on the public
              record since 1848
            </p>
            <h1 className="hero__title">
              We spend real money softening what we do to our own members.
            </h1>
            <p className="hero__sub">
              The Plymouth Brethren Christian Church runs a global PR operation
              to file down the edges of a documented Doctrine of Separation,
              a shunning practice called &ldquo;withdrawing from,&rdquo; a
              leadership cult around the current &ldquo;Man of God,&rdquo; and
              a growing public record of abuse allegations, defamation suits
              against critics, and a 2024 Australian Tax Office raid. This
              site puts every claim back on the page, with a source.
            </p>
            <Link href="#reporting" className="hero__cta">
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

      {/* About this */}
      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="site-container">
          <h2 className="section-label">About this.</h2>
          <div className="rich-media">
            <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
              <p>
                Founded around 200 years ago by John Nelson Darby, the Plymouth
                Brethren Christian Church (PBCC, formerly the Exclusive
                Brethren) still governs its 54,000-plus members
                <Footnote id="pbcc-members-selfreport" n={nextN()} />{" "}
                through the Doctrine of Separation: a rule on who members may
                eat with, live with, marry, and do business with
                <Footnote id="separation-cdamm" n={nextN()} />
                <Footnote id="separation-pbcc-statement" n={nextN()} />.
              </p>
              <p>
                Community life is organised around the recorded ministry of
                the current World Leader, Bruce D. Hales, known within the
                fellowship as the Man of God
                <Footnote id="hales-manofgod-pbcc" n={nextN()} />
                <Footnote id="hales-manofgod-newstatesman" n={nextN()} />. His
                addresses are studied in homes and meetings as the
                authoritative current expression of scriptural guidance.
              </p>
              <p>
                Members who depart, or who are deemed out of fellowship, are
                &ldquo;withdrawn from&rdquo; &mdash; the PBCC term for
                excommunication. The remaining members decline to share meals,
                accommodation, or marriage with them while separation stands
                <Footnote id="withdrawing-ukparliament-2012" n={nextN()} />
                <Footnote id="hales-manofgod-newstatesman" n={nextN()} />.
                Families split. Minor children are commonly retained with the
                in-fellowship parent.
              </p>
              <p>
                Every claim below is sourced. Anyone can file a correction as
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
            <div
              aria-hidden="true"
              className="aspect-[4/3] w-full"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in srgb, var(--color-brand) 30%, var(--color-ink)), var(--color-ink))",
              }}
            />
          </div>
        </div>
      </section>

      {/* What the record says — harder-edged severity band, Register C */}
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
            What the record says.
          </h2>
          <p
            className="max-w-prose text-[1rem] leading-[1.8]"
            style={{ opacity: 0.85 }}
          >
            Four strands of public reporting the rebrand has to keep absorbing.
            We quote what&rsquo;s been printed and what&rsquo;s been filed;
            nothing on this page is our claim &mdash; it&rsquo;s someone
            else&rsquo;s, footnoted.
          </p>

          <ul className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <li>
              <article
                className="h-full p-6"
                style={{
                  borderTop: "4px solid var(--color-brand)",
                  background:
                    "color-mix(in srgb, var(--color-surface) 6%, var(--color-ink))",
                }}
              >
                <p
                  className="font-sans text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: "var(--color-brand)" }}
                >
                  Shunning
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-serif)] text-xl leading-snug">
                  Families are split by doctrine, not by choice.
                </h3>
                <p className="mt-3 text-sm leading-[1.7]">
                  UK Parliament submissions and major long-form reporting
                  describe spouses, parents, and children cut off from a
                  withdrawn relative while separation stands
                  <Footnote id="withdrawing-ukparliament-2012" n={nextN()} />
                  <Footnote id="hales-manofgod-newstatesman" n={nextN()} />.
                </p>
              </article>
            </li>
            <li>
              <article
                className="h-full p-6"
                style={{
                  borderTop: "4px solid var(--color-rust)",
                  background:
                    "color-mix(in srgb, var(--color-surface) 6%, var(--color-ink))",
                }}
              >
                <p
                  className="font-sans text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: "var(--color-rust)" }}
                >
                  Abuse allegations
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-serif)] text-xl leading-snug">
                  Allegations of sexual and physical abuse within the fellowship.
                </h3>
                <p className="mt-3 text-sm leading-[1.7]">
                  Allegations of child sexual abuse, domestic violence, and
                  coercive control within member households and institutions
                  have surfaced in mainstream reporting and in survivor
                  accounts across multiple jurisdictions
                  <SourcePending note="Abuse-allegations severity claim — specific cases and citations to be pinned in FACTS.md §5 before ship." />
                  . Specific cases and citations are being pinned before
                  anything ships to production.
                </p>
              </article>
            </li>
            <li>
              <article
                className="h-full p-6"
                style={{
                  borderTop: "4px solid var(--color-purple)",
                  background:
                    "color-mix(in srgb, var(--color-surface) 6%, var(--color-ink))",
                }}
              >
                <p
                  className="font-sans text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: "var(--color-purple)" }}
                >
                  Litigation against critics
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-serif)] text-xl leading-snug">
                  Defamation suits and injunctions used against journalists
                  and ex-members.
                </h3>
                <p className="mt-3 text-sm leading-[1.7]">
                  The fellowship and entities associated with it have pursued
                  defamation proceedings, takedown demands, and SLAPP-style
                  litigation against journalists, former members, and academic
                  critics
                  <SourcePending note="SLAPP-style litigation claim — specific case references pending in FACTS.md §5 before ship." />
                  . Specific cases are being cited before this card leaves
                  draft.
                </p>
              </article>
            </li>
            <li>
              <article
                className="h-full p-6"
                style={{
                  borderTop: "4px solid var(--color-blueviolet)",
                  background:
                    "color-mix(in srgb, var(--color-surface) 6%, var(--color-ink))",
                }}
              >
                <p
                  className="font-sans text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: "var(--color-blueviolet)" }}
                >
                  Regulators
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-serif)] text-xl leading-snug">
                  Tax and charity regulators have opened the doors, more than
                  once.
                </h3>
                <p className="mt-3 text-sm leading-[1.7]">
                  In March 2024, the Australian Taxation Office raided
                  Universal Business Team offices
                  <SourcePending note="ATO raid primary URL pending — FACTS.md §3." />
                  . In 2012&ndash;2014, the UK Charity Commission contested
                  PBCC charitable status before closing with a compromise
                  agreement
                  <SourcePending note="Preston Down Trust primary document URL pending — FACTS.md §5." />
                  .
                </p>
              </article>
            </li>
          </ul>
        </div>
      </section>

      {/* Read the reporting — outside journalism / records index */}
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
                  <div
                    className="aspect-[16/10] w-full mb-4"
                    style={{
                      background:
                        "linear-gradient(135deg, color-mix(in srgb, var(--color-brand) 35%, var(--color-ink)), var(--color-ink))",
                    }}
                    aria-hidden="true"
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

      {/* Get to know about this */}
      <section className="section">
        <div className="site-container">
          <h2 className="section-label">Get to know about this.</h2>
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {communityCards.map((c) => (
              <li key={c.title}>
                <article
                  className="h-full p-6"
                  style={{
                    borderTop: `4px solid ${c.accent}`,
                    background:
                      "color-mix(in srgb, var(--color-rule) 25%, var(--color-surface))",
                  }}
                >
                  <h3
                    className="font-[family-name:var(--font-serif)] text-xl leading-snug"
                    style={{ color: "var(--color-ink)" }}
                  >
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.7]">
                    {c.body}
                    {c.footnotes.map((id) => (
                      <Footnote key={id} id={id} n={nextN()} />
                    ))}
                    {c.pending && <SourcePending note={c.pending} />}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stories — in-site survivor testimony stub */}
      <section
        className="section"
        style={{ background: "var(--color-surface)" }}
      >
        <div className="site-container">
          <h2 className="section-label">Stories.</h2>
          <div className="grid gap-10 md:grid-cols-[2fr_3fr] md:items-start">
            <p className="font-[family-name:var(--font-serif)] text-3xl leading-tight">
              First-person survivor testimony will live here, on this site,
              under consent controls we publish.
            </p>
            <div className="space-y-4 text-[1rem] leading-[1.8]">
              <p>
                Testimony is editorial work, not traffic. Every story that
                lands here will be on-record by explicit written consent,
                reviewed by the contributor before it ships, and removable at
                their request. Where a survivor prefers to stay anonymous, we
                use composite or redacted forms and mark them clearly. Nothing
                on this site trades a survivor&rsquo;s dignity for a joke.
              </p>
              <p>
                <Link href="/stories" className="btn">
                  How we&rsquo;ll publish stories &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open by design */}
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
              Every claim on this site links to its source. The whole site is a
              public GitHub repo. Anyone can read it, cite it, file a
              correction, or add a fact.
            </p>
            <ul className="grid gap-4 md:grid-cols-3">
              <li>
                <Link href="/mission#sources" className="open-card">
                  <p className="open-card__eyebrow">Methodology</p>
                  <p className="open-card__title">Read the sources</p>
                  <p className="open-card__body">
                    How every claim on the site maps to a row in our public
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
                    Sourced claim with a public citation? PR it or open an
                    issue.
                  </p>
                </a>
              </li>
            </ul>
          </div>
          <p className="mt-10 max-w-prose text-sm opacity-75">
            This site is maintained openly. Every change is reviewable in git
            history. Every source is linkable. Every page is contributable. We
            treat survivors&rsquo; testimony as testimony, not as material.
          </p>
        </div>
      </section>

    </>
  );
}
