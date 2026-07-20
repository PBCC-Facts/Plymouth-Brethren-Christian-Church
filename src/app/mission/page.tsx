import Link from "next/link";
import { Footnote } from "@/components/site/Footnote";
import { buildPageMetadata } from "@/lib/seo";
import {
  JsonLd,
  articleSchema,
  breadcrumbSchema,
} from "@/components/seo/JsonLd";

const REPO_URL =
  "https://github.com/PBCC-Facts/Plymouth-Brethren-Christian-Church";

export const metadata = buildPageMetadata({
  topic: "Mission",
  description:
    "Why this project exists: to organise, in public, the journalism, court filings, regulator decisions, and survivor testimony already on the public record about the Plymouth Brethren Christian Church. The site is the library; the reporting happened elsewhere.",
  slug: "/mission",
  cluster: "A",
  register: "explanatory",
});

export default function MissionPage() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: "Mission. The Facts about the Plymouth Brethren Christian Church.",
          description:
            "The editorial mission of The Facts: a sourced, open-source aggregator of the public record on the PBCC. Produced openly on GitHub.",
          slug: "/mission",
          datePublished: "2026-04-22",
          dateModified: "2026-04-23",
          register: "explanatory",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Mission", path: "/mission" },
        ])}
      />
      {/* Lede band */}
      <section className="hero">
        <div className="site-container hero__grid">
          <div>
            <p className="hero__eyebrow">Why this exists</p>
            <h1 className="hero__title">Mission.</h1>
            <p className="hero__sub">
              Organise, in public and on the same search terms, the record that
              journalists, regulators, courts, and survivors have already put
              in public about the Plymouth Brethren Christian Church. The
              original reporting is elsewhere. This site is the library that
              points to all of it, with a citation on every claim.
            </p>
            <Link href="#sources" className="hero__cta">
              How every claim is sourced &rarr;
            </Link>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__visual__placeholder" />
          </div>
        </div>
      </section>

      {/* The problem */}
      <section
        className="section"
        style={{ background: "var(--color-surface)" }}
      >
        <div className="site-container">
          <h2 className="section-label">The problem.</h2>
          <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
            <p>
              Since the 2020s rebrand, the Plymouth Brethren Christian Church
              (PBCC, formerly the Exclusive Brethren) has built an industrial
              public-relations operation: a polished microsite, a steady
              cadence of press releases, dedicated communications staff in
              multiple countries, and a suite of outward-facing philanthropy
              brands (Rapid Relief Team, OneSchool Global, Universal Business
              Team).
            </p>
            <p>
              The result is that anyone searching{" "}
              <em>&ldquo;Plymouth Brethren&rdquo;</em>,{" "}
              <em>&ldquo;Exclusive Brethren&rdquo;</em>, or{" "}
              <em>&ldquo;is the Plymouth Brethren a cult&rdquo;</em> lands
              first on pages written by the fellowship&rsquo;s own
              communications team. Sourced, public-record accounts produced by
              academics
              <Footnote id="separation-cdamm" n={1} />, parliamentary
              inquiries
              <Footnote id="withdrawing-ukparliament-2012" n={2} />,
              investigative journalists
              <Footnote id="hales-manofgod-newstatesman" n={3} />
              <Footnote id="fourcorners-wikipedia" n={4} />, and survivors get
              pushed down the page.
            </p>
            <p>
              That would be a public-information problem on its own. It is a
              more serious one given what the rebrand is covering for:
              documented family separation, allegations of sexual and physical
              abuse within the fellowship, defamation and injunction
              proceedings against journalists and ex-members, and a 2024
              Australian Tax Office raid on UBT offices. This site is the
              counterweight.
            </p>
          </div>
        </div>
      </section>

      {/* The response */}
      <section
        className="section"
        style={{
          background:
            "color-mix(in srgb, var(--color-rule) 30%, var(--color-surface))",
        }}
      >
        <div className="site-container">
          <h2 className="section-label">The response.</h2>
          <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
            <p>
              <strong>Aggregator, not originator.</strong> Nothing on this site
              is original reporting. Every claim attributes the outlet that
              reported it: ABC Four Corners, The Times (London), Stuff NZ,
              Guardian Australia, Byline Times, Sydney Morning Herald, the NZ
              Royal Commission, the UK Charity Commission, the Australian
              Taxation Office, plus named academic and survivor sources. The
              site organises what already exists; it does not invent.
            </p>
            <p>
              <strong>Sourced facts over adjectives.</strong> The site does not
              call the PBCC a cult. It describes, sentence by sentence, the
              Doctrine of Separation
              <Footnote id="separation-pbcc-statement" n={5} />
              <Footnote id="separation-cdamm" n={6} /> and the practices it
              produces: restrictions on meals, accommodation, marriage,
              business, and schooling with non-members; the practice of
              "withdrawing from" members who depart; a global leadership
              structure under the current "Man of God"
              <Footnote id="hales-manofgod-pbcc" n={7} />
              <Footnote id="hales-manofgod-newstatesman" n={8} />. Readers
              draw their own conclusion.
            </p>
            <p>
              <strong>Name what&rsquo;s in the reporting.</strong> Abuse
              allegations, defamation suits against critics, and regulatory
              action are not subtext. They are the current public record.
              Where the record carries the claim, this site carries it too,
              with the same citation.
            </p>
            <p>
              <strong>Survivor-first, in-site.</strong> First-person testimony
              is editorial work, not decoration. It lives on this site under
              consent controls this site publishes: on-record by explicit
              written consent, reviewed by the contributor before it ships,
              removable at their request. See{" "}
              <Link href="/stories">Stories</Link> for the intake process.
            </p>
            <p>
              <strong>Open by design.</strong> The repository is public on
              GitHub. Every change is a commit. Every claim maps to a row in
              the public{" "}
              <a
                href={`${REPO_URL}/blob/main/FACTS.md`}
                target="_blank"
                rel="noopener noreferrer"
              >
                FACTS.md
              </a>{" "}
              file. Corrections, new sources, and additional facts come in as
              issues and pull requests. Anyone can read the full editorial
              history.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <h2 className="section-label">What this site will do.</h2>
          <ul className="max-w-prose space-y-3 text-[1rem] leading-[1.8] list-disc pl-5">
            <li>Organise PBCC doctrine and practice on pages that rank for those search terms.</li>
            <li>Footnote every factual claim to a public source.</li>
            <li>
              Index abuse-allegation reporting, defamation and injunction
              proceedings against journalists and ex-members, regulatory
              findings, and parliamentary-inquiry history as they land.
            </li>
            <li>
              Host first-person survivor testimony under written consent, and
              signpost external cult-recovery resources.
            </li>
            <li>Accept corrections in public. If a fact is wrong, the fix is a pull request away.</li>
            <li>Update pages when sources change; mark every page with a visible last-modified date.</li>
          </ul>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--color-surface)" }}
      >
        <div className="site-container">
          <h2 className="section-label">What this site will not do.</h2>
          <ul className="max-w-prose space-y-3 text-[1rem] leading-[1.8] list-disc pl-5">
            <li>Out identifiable private members of the PBCC who have not chosen to be public.</li>
            <li>Use survivors&rsquo; stories without their explicit, on-record, written consent.</li>
            <li>Fabricate, estimate, or guess at citations. Unsourced claims ship with a visible source-pending marker or do not ship.</li>
            <li>Claim original reporting. The journalism happened elsewhere; this site attributes and links out.</li>
            <li>Make jokes at survivors&rsquo; expense. The subject of every sharp sentence is the fellowship&rsquo;s rebrand or its leadership, never a former member.</li>
            <li>Reuse PBCC photography. Every image here is original or licensed stock.</li>
          </ul>
        </div>
      </section>

      <section
        className="section"
        style={{
          background:
            "color-mix(in srgb, var(--color-rule) 30%, var(--color-surface))",
        }}
      >
        <div className="site-container">
          <h2 className="section-label">How to contribute.</h2>
          <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
            <p>
              This project welcomes contributions from researchers,
              journalists, ex-members, counsel, and anyone who finds a
              factual error. The lightest-weight way in is a GitHub issue;
              the heaviest is a fully-drafted pull request.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <a
                  href={`${REPO_URL}/issues/new?labels=correction&title=Correction:+`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  File a correction
                </a>
                : for a factual error on any page.
              </li>
              <li>
                <a
                  href={`${REPO_URL}/issues/new?labels=new-fact&title=New+fact:+`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contribute a fact
                </a>
                : a sourced claim that belongs on the site.
              </li>
              <li>
                <a
                  href={`${REPO_URL}/issues/new?labels=source-request&title=Source+request:+`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request a source
                </a>
                : for a claim currently marked source-pending.
              </li>
              <li>
                <Link href="/contact">Send a confidential tip</Link> when a
                GitHub issue is not appropriate.
              </li>
              <li>
                Survivors: on-record testimony intake is described at{" "}
                <Link href="/stories">Stories</Link>. Identifiable testimony
                is never published without explicit written consent.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <h2 className="section-label">Who&rsquo;s behind this.</h2>
          <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
            <p>
              This site is an open-source project, maintained by its editor
              alongside anyone who contributes on GitHub. The full source,
              edit history, editorial rulebook, and claims record are public
              in the repository, and corrections or new evidence are welcome
              from anyone as issues or pull requests.
            </p>
            <p>
              This project is independent. It is not affiliated with the
              Plymouth Brethren Christian Church, any successor to the former
              Exclusive Brethren, or any other religious organisation.
            </p>
          </div>
        </div>
      </section>

      <section
        id="sources"
        className="section"
        style={{ background: "var(--color-ink)", color: "var(--color-surface)" }}
      >
        <div className="site-container">
          <h2
            className="section-label"
            style={{ color: "var(--color-surface)" }}
          >
            Sources and methodology.
          </h2>
          <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
            <p>
              Every factual claim on the site carries a numbered superscript
              linking to an outside source. The numbered links resolve through
              a typed registry at{" "}
              <code className="font-mono text-sm">src/lib/sources.ts</code>,
              which is the single place where URLs live. No page hardcodes a
              citation URL.
            </p>
            <p>
              The registry is seeded from the public{" "}
              <a
                href={`${REPO_URL}/blob/main/FACTS.md`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-brand)" }}
              >
                FACTS.md
              </a>{" "}
              intake file. A claim reaches the site only after its FACTS.md
              row is promoted to one of:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>&#10003; Verified</strong>: two independent sources,
                or one primary (court ruling, inquiry, or regulator finding)
                plus one journalism source.
              </li>
              <li>
                <strong>&#127993; Single source</strong>: acceptable for
                uncontested factual matters (dates, locations, leadership
                succession). Borderline for severity claims.
              </li>
              <li>
                <strong>&#128308; Source pending</strong>: the claim is true
                but no public citation is pinned yet. Such claims ship with a
                visible&nbsp;
                <span className="footnote footnote--pending">&#9888;&#65038;</span>{" "}
                marker, not a hidden gap.
              </li>
            </ul>
            <p>
              Anyone can read{" "}
              <a
                href={`${REPO_URL}/blob/main/EDITORIAL_GUIDE.md`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-brand)" }}
              >
                EDITORIAL_GUIDE.md
              </a>{" "}
              for the full voice and sourcing rules, open an issue to
              challenge any row in FACTS.md, or submit a PR updating a source
              URL.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
