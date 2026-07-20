import Link from "next/link";
import { Footnote } from "@/components/site/Footnote";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata = buildPageMetadata({
  topic: "The record",
  description:
    "The public record on the Plymouth Brethren Christian Church, in one timeline: investigative reporting, court findings, parliamentary inquiries, and regulator decisions, each linked to its source.",
  slug: "/news",
  cluster: "B",
  register: "record",
});

// ---------------------------------------------------------------------------
// The full record wall. Chronological, newest first, one citation per row.
// The homepage shows a four-row excerpt; this page is the whole ledger.
// ---------------------------------------------------------------------------

type RecordEntry = {
  year: string;
  outlet: string;
  render: (nextN: () => number) => React.ReactNode;
};

const recordEntries: RecordEntry[] = [
  {
    year: "2025",
    outlet: "ABC Four Corners",
    render: (nextN) => (
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
    render: (nextN) => (
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
    render: (nextN) => (
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
    render: (nextN) => (
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
    render: (nextN) => (
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
    render: (nextN) => (
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
    render: (nextN) => (
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
// Read the reporting. The primary outside works, linked directly.
// ---------------------------------------------------------------------------

const reportingItems: Array<{
  outlet: string;
  date: string;
  title: string;
  url: string;
  gloss: string;
}> = [
  {
    outlet: "ABC Four Corners",
    date: "2006",
    title: "Behind the Exclusive Brethren",
    url: "https://en.wikipedia.org/wiki/Behind_the_Exclusive_Brethren",
    gloss:
      "Bachelard and Whitmont's documentary: the baseline public-interest investigation still cited twenty years later.",
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
    outlet: "RNZ",
    date: "Jul 2022",
    title: "Former members detail the church's 'money-go-round'",
    url: "https://www.rnz.co.nz/news/national/471615/former-exclusive-brethren-members-detail-the-church-s-money-go-round",
    gloss:
      "Ex-member accounts of congregational cash flows, the National Assistance Fund, and the Vision investment vehicles.",
  },
  {
    outlet: "UK Parliament",
    date: "2012",
    title:
      "Public Administration Committee submission on PBCC charitable status",
    url: "https://publications.parliament.uk/pa/cm201213/cmselect/cmpubadm/writev/charity/m49.htm",
    gloss:
      "Written evidence describing separation practice in members' own words.",
  },
  {
    outlet: "UK Charity Commission",
    date: "2014",
    title: "Preston Down Trust decision (full text)",
    url: "https://assets.publishing.service.gov.uk/media/5a74c214e5274a3cb2866f23/preston_down_trust_full_decision.pdf",
    gloss:
      "The regulator's primary document: 'considerable evidence of significant detriment or harm.'",
  },
];

export default function NewsPage() {
  let n = 0;
  const nextN = () => ++n;

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: "The record on the Plymouth Brethren Christian Church",
          description:
            "Investigations, court findings, and regulator decisions on the PBCC, in one sourced timeline.",
          slug: "/news",
          datePublished: "2026-07-19",
          dateModified: "2026-07-19",
          register: "record",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "The record", path: "/news" },
        ])}
      />

      <section className="hero">
        <div className="site-container hero__grid">
          <div>
            <p className="hero__eyebrow">The record</p>
            <h1 className="hero__title">
              What is already documented.
            </h1>
            <p className="hero__sub">
              Investigative reporting, court findings, parliamentary
              inquiries, and regulator decisions on the Plymouth Brethren
              Christian Church, in one timeline. Every row links to the
              outlet or primary document that established it.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <h2 className="section-label">The timeline.</h2>
          <ul className="record-wall">
            {recordEntries.map((e, i) => (
              <li key={`${e.year}-${i}`} className="record-row">
                <div className="record-row__year">{e.year}</div>
                <div className="record-row__body">
                  <p className="record-row__outlet">{e.outlet}</p>
                  <p className="record-row__prose">{e.render(nextN)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="site-container">
          <h2 className="section-label">Read the reporting.</h2>
          <ul className="grid gap-8 md:grid-cols-3">
            {reportingItems.map((r) => (
              <li key={r.url}>
                <article className="report-card">
                  <p className="report-card__outlet">{r.outlet}</p>
                  <p className="report-card__meta">{r.date}</p>
                  <h3 className="report-card__title">
                    <a href={r.url} target="_blank" rel="noopener noreferrer">
                      {r.title}
                    </a>
                  </h3>
                  <p className="report-card__gloss">{r.gloss}</p>
                </article>
              </li>
            ))}
          </ul>
          <p className="mt-12 max-w-prose text-sm leading-[1.7] opacity-80">
            More outlets, podcasts, and survivor-run archives are indexed on{" "}
            <Link href="/resources">/resources</Link>. If a link here rots,
            or a major work is missing, file a correction on GitHub.
          </p>
        </div>
      </section>
    </>
  );
}
