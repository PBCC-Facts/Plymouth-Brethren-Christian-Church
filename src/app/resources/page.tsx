import type { Metadata } from "next";
import Link from "next/link";
import { GITHUB_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Cult-recovery, PBCC-specific, investigative, and official-record resources. Linked, not endorsed. Starter list — every entry is open to review.",
  alternates: { canonical: "/resources" },
};

type ResourceEntry = {
  name: string;
  url: string;
  gloss: string;
  /** Set true once Trent has confirmed the listing as intended to ship. */
  approved?: boolean;
};

type ResourceGroup = {
  id: string;
  title: string;
  intro?: string;
  entries: ResourceEntry[];
};

const groups: ResourceGroup[] = [
  {
    id: "leaving",
    title: "If you or someone you know is leaving a high-control group",
    intro:
      "General cult-recovery organisations. Not PBCC-specific. All are well-established, publicly operating, and signposted (not endorsed) here.",
    entries: [
      {
        name: "International Cultic Studies Association (ICSA)",
        url: "https://www.icsahome.com/",
        gloss:
          "Academic + practitioner body. Research, recovery groups, referral network.",
      },
      {
        name: "Open Minds Foundation",
        url: "https://www.openmindsfoundation.org/",
        gloss:
          "Education on coercive control and undue influence. Plain-language resources.",
      },
      {
        name: "Cult Recovery 101",
        url: "https://www.cultrecovery101.com/",
        gloss:
          "Practical resources and reading list for former members and families.",
      },
      {
        name: "Cult Information Centre (UK)",
        url: "https://cultinformation.org.uk/",
        gloss: "UK-based advisory. Confidential information and referrals.",
      },
      {
        name: "FECRIS (Europe)",
        url: "https://www.fecris.org/",
        gloss:
          "European federation of associations and centres studying sectarianism.",
      },
    ],
  },
  {
    id: "pbcc-specific",
    title: "PBCC-specific",
    intro:
      "Resources that specifically address the Plymouth Brethren Christian Church (formerly the Exclusive Brethren).",
    entries: [
      {
        name: "PBCCstories.org",
        url: "https://pbccstories.org/",
        gloss:
          "First-person survivor testimony. On-record accounts from former members. Primary source for many claims on this site.",
      },
      {
        name: "Reach Out Trust — Exclusive Brethren",
        url: "https://reachouttrust.org/exclusive-brethren/",
        gloss:
          "Long-standing UK-based overview of Exclusive Brethren doctrine and separation practice.",
      },
      {
        name: "r/exbrethren",
        url: "https://www.reddit.com/r/exbrethren/",
        gloss:
          "Community forum for former members. Unmoderated first-hand accounts.",
      },
    ],
  },
  {
    id: "reporting",
    title: "Investigative and archival reporting",
    intro:
      "Major outside journalism and academic sources. Use these to verify or deepen anything on the site.",
    entries: [
      {
        name: "ABC Four Corners — \u201CBehind the Exclusive Brethren\u201D",
        url: "https://en.wikipedia.org/wiki/Behind_the_Exclusive_Brethren",
        gloss:
          "2006 documentary by Michael Bachelard and Debbie Whitmont. Baseline public-interest investigation.",
      },
      {
        name: "New Statesman — \u201CEscaping Eden\u201D (2023)",
        url: "https://www.newstatesman.com/long-reads/2023/08/escaping-eden-exclusive-brethren",
        gloss:
          "Long-read on leadership succession, the \u201CMan of God\u201D office, and family separation.",
      },
      {
        name: "The Post (NZ) \u2014 Exclusive Brethren coverage",
        url: "https://www.thepost.co.nz/nz-news/350113380/exclusive-brethren-told-create-crisis-generate-profits",
        gloss:
          "New Zealand investigation into leadership instructions on commerce and crisis-creation.",
      },
      {
        name: "CDAMM \u2014 Plymouth Brethren",
        url: "https://www.cdamm.org/articles/plymouth-brethren",
        gloss: "Academic encyclopedia entry. Useful for doctrine history.",
      },
      {
        name: "CESNUR \u2014 Briggs, 2008",
        url: "https://www.cesnur.org/2008/london_briggs.pdf",
        gloss:
          "Academic paper on Plymouth Brethren separation doctrine and human-rights context.",
      },
    ],
  },
  {
    id: "official",
    title: "Official records",
    intro:
      "Primary-source government, regulator, and parliamentary documents. These are load-bearing for the litigation page.",
    entries: [
      {
        name: "UK Parliament \u2014 Public Administration Committee submission (2012)",
        url: "https://publications.parliament.uk/pa/cm201213/cmselect/cmpubadm/writev/charity/m49.htm",
        gloss:
          "Written evidence to the 2012 charity-status inquiry. Describes separation practice in members' own words.",
      },
      {
        name: "UK Charity Commission \u2014 Preston Down Trust (case record)",
        url: "https://www.gov.uk/government/organisations/charity-commission",
        gloss:
          "Commission portal. The Preston Down Trust case (2012\u20132014) closed with a compromise. Primary-document URL TBC.",
      },
      {
        name: "Australian Parliament \u2014 committee submissions portal",
        url: "https://www.aph.gov.au/Parliamentary_Business/Committees",
        gloss:
          "Starting point for Senate and Joint-Committee submissions referencing PBCC-related matters.",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section
        className="section"
        style={{ background: "var(--color-ink)", color: "var(--color-surface)" }}
      >
        <div className="site-container">
          <p
            className="hero__eyebrow"
            style={{ color: "var(--color-brand)" }}
          >
            The Facts. &mdash; resources
          </p>
          <h1
            className="hero__title"
            style={{ color: "var(--color-surface)" }}
          >
            Resources.
          </h1>
          <p className="hero__sub" style={{ maxWidth: "58ch" }}>
            Support for people leaving high-control groups, PBCC-specific
            references, investigative journalism, and official records.
            Linked, not endorsed. This is a starter list &mdash; if a resource
            belongs here and is missing,{" "}
            <a
              href={`${GITHUB_URL}/issues/new?labels=resources&title=Resource+suggestion:+`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-brand)" }}
            >
              open an issue on GitHub
            </a>
            .
          </p>
        </div>
      </section>

      <section
        style={{
          background:
            "color-mix(in srgb, var(--color-rust) 18%, var(--color-surface))",
          paddingBlock: "2.5rem",
        }}
      >
        <div className="site-container">
          <div className="max-w-prose text-[1rem] leading-[1.7]">
            <h2
              className="font-[family-name:var(--font-serif)] text-xl"
              style={{ color: "var(--color-ink)", margin: 0 }}
            >
              If you need help right now
            </h2>
            <p className="mt-3">
              This page is a signpost, not a crisis service. If you are in
              immediate danger, call emergency services in your country. If you
              are in crisis and not in immediate danger, the organisations
              listed in the first section below include referral lines and
              peer-support groups. When in doubt, start with ICSA.
            </p>
          </div>
        </div>
      </section>

      {groups.map((group, i) => (
        <section
          key={group.id}
          id={group.id}
          className="section"
          style={{
            background:
              i % 2 === 0
                ? "var(--color-surface)"
                : "color-mix(in srgb, var(--color-rule) 30%, var(--color-surface))",
          }}
        >
          <div className="site-container">
            <h2 className="section-label">{group.title}</h2>
            {group.intro && (
              <p className="max-w-prose text-[0.95rem] leading-[1.7] mb-8">
                {group.intro}
              </p>
            )}
            <ul className="grid gap-8 md:grid-cols-2">
              {group.entries.map((entry) => (
                <li key={entry.url}>
                  <article className="h-full">
                    <h3 className="font-[family-name:var(--font-serif)] text-lg leading-snug">
                      <a
                        href={entry.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--color-ink)" }}
                      >
                        {entry.name}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-[1.6]">{entry.gloss}</p>
                    {!entry.approved && (
                      <p
                        className="mt-3 inline-block text-[0.625rem] font-bold uppercase tracking-[0.2em]"
                        style={{
                          color: "var(--color-rust)",
                          padding: "0.2rem 0.45rem",
                          border: "1px solid var(--color-rust)",
                        }}
                      >
                        Editor review pending
                      </p>
                    )}
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section
        className="section"
        style={{ background: "var(--color-ink)", color: "var(--color-surface)" }}
      >
        <div className="site-container">
          <h2
            className="section-label"
            style={{ color: "var(--color-surface)" }}
          >
            Help keep this list accurate.
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-[2fr_3fr] md:items-center">
            <p className="font-[family-name:var(--font-serif)] text-2xl leading-tight">
              If a resource is missing, out-of-date, or shouldn&rsquo;t be here,
              say so publicly.
            </p>
            <div>
              <a
                href={`${GITHUB_URL}/issues/new?labels=resources&title=Resource+suggestion:+`}
                className="btn btn--on-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open an issue
              </a>{" "}
              <Link href="/mission" className="btn btn--on-dark ml-3">
                Read the mission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
