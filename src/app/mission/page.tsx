import Link from "next/link";
import type { Metadata } from "next";
import { Footnote, SourcePending } from "@/components/site/Footnote";

const REPO_URL =
  "https://github.com/trentwaskey/Plymouth-Brethren-Christian-Church";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "The mission of The Facts: document, in public and with sources, the doctrines and practices the Plymouth Brethren Christian Church spends real money to soften — including family separation, abuse allegations, litigation against critics, and regulatory action. Every claim footnoted. Every page contributable.",
};

export default function MissionPage() {
  return (
    <>
      {/* Lede band */}
      <section className="hero">
        <div className="site-container hero__grid">
          <div>
            <p className="hero__eyebrow">The Facts. &mdash; why this exists</p>
            <h1 className="hero__title">Mission.</h1>
            <p className="hero__sub">
              Document &mdash; in public, on the same search terms, with a
              citation on every sentence &mdash; the doctrines, practices, and
              recent reporting the Plymouth Brethren Christian Church spends
              real money to soften. Family separation. Allegations of abuse.
              Defamation suits against critics. Tax and charity regulators at
              the door. Not vibes: footnotes. Every page a pull request away.
            </p>
            <Link href="#sources" className="hero__cta">
              How we source every claim &rarr;
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
          <h2 className="section-label">The problem we&rsquo;re fighting.</h2>
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
              communications team. Sourced, public-record accounts &mdash;
              produced by academics
              <Footnote id="separation-cdamm" n={1} />, parliamentary
              inquiries
              <Footnote id="withdrawing-ukparliament-2012" n={2} />,
              investigative journalists
              <Footnote id="hales-manofgod-newstatesman" n={3} />
              <Footnote id="fourcorners-wikipedia" n={4} />, and survivors
              &mdash; get pushed down the page.
            </p>
            <p>
              That would be a public-information problem on its own. It is a
              more serious one given what the rebrand is covering for:
              documented family separation, allegations of sexual and
              physical abuse within the fellowship, defamation and
              injunction proceedings against journalists and ex-members, and
              a 2024 Australian Tax Office raid on UBT offices. This site is
              the counterweight.
            </p>
          </div>
        </div>
      </section>

      {/* Our response */}
      <section
        className="section"
        style={{
          background:
            "color-mix(in srgb, var(--color-rule) 30%, var(--color-surface))",
        }}
      >
        <div className="site-container">
          <h2 className="section-label">Our response.</h2>
          <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
            <p>
              <strong>Sourced facts over adjectives.</strong> We do not call
              the PBCC a cult. We describe, sentence by sentence, a documented
              Doctrine of Separation
              <Footnote id="separation-pbcc-statement" n={5} />
              <Footnote id="separation-cdamm" n={6} />
              {" "}and the practices it produces: restrictions on meals,
              accommodation, marriage, business, and schooling with
              non-members; the practice of withdrawing from members who
              depart; a global leadership structure under the current
              &ldquo;Man of God&rdquo;
              <Footnote id="hales-manofgod-pbcc" n={7} />
              <Footnote id="hales-manofgod-newstatesman" n={8} />. Readers
              draw their own conclusion.
            </p>
            <p>
              <strong>Name what&rsquo;s in the reporting.</strong> Abuse
              allegations, defamation suits against critics, and regulatory
              action are not subtext &mdash; they are the current public
              record. Where the record carries the claim, we carry it too,
              with the same citation. Where we cannot yet pin a public URL to
              a severity claim, we mark it{" "}
              <span className="footnote footnote--pending">&#9888;&#65038;</span>{" "}
              on the page and open the row in{" "}
              <a
                href={`${REPO_URL}/blob/main/FACTS.md`}
                target="_blank"
                rel="noopener noreferrer"
              >
                FACTS.md
              </a>
              . We do not invent citations
              <SourcePending note="SLAPP-style litigation + abuse allegations: specific case URLs being pinned in FACTS.md §5 before ship." />
              .
            </p>
            <p>
              <strong>Mirror the structure, invert the content.</strong> This
              site structurally mirrors the PBCC&rsquo;s public site so that
              Google indexes it against the same search terms. The copy is
              original, the facts are sourced, the perspective is inverted.
            </p>
            <p>
              <strong>Survivor-first, in-site.</strong> First-person testimony
              is editorial work, not decoration. It will live on this site,
              under consent controls we publish &mdash; on-record by explicit
              written consent, reviewed by the contributor before it ships,
              removable at their request, and never used for a joke. See{" "}
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
          <h2 className="section-label">What we will do.</h2>
          <ul className="max-w-prose space-y-3 text-[1rem] leading-[1.8] list-disc pl-5">
            <li>Document PBCC doctrine and practice on the pages that rank for those search terms.</li>
            <li>Footnote every factual claim to a public source.</li>
            <li>
              Publish abuse-allegation reporting, defamation and injunction
              proceedings against journalists and ex-members, regulatory
              findings, and parliamentary-inquiry history as they land.
            </li>
            <li>
              Host first-person survivor testimony on this site, under written
              consent, and signpost external cult-recovery resources.
            </li>
            <li>Accept corrections in public. If we get a fact wrong, the fix is a pull request away.</li>
            <li>Update pages when sources change; mark every page with a visible last-modified date.</li>
          </ul>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--color-surface)" }}
      >
        <div className="site-container">
          <h2 className="section-label">What we will not do.</h2>
          <ul className="max-w-prose space-y-3 text-[1rem] leading-[1.8] list-disc pl-5">
            <li>Out identifiable private members of the PBCC who have not chosen to be public.</li>
            <li>Use survivors&rsquo; stories without their explicit, on-record, written consent.</li>
            <li>Fabricate, estimate, or guess at citations. Unsourced claims ship with a visible source-pending marker or do not ship.</li>
            <li>Mix registers on a single page. Pages are either openly parodic (Register C) or plainspoken journalistic (Register B).</li>
            <li>Make jokes at survivors&rsquo; expense. The subject of every critical sentence is the fellowship&rsquo;s rebrand or its leadership; never a former member.</li>
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
                </a>{" "}
                &mdash; for a factual error on any page.
              </li>
              <li>
                <a
                  href={`${REPO_URL}/issues/new?labels=new-fact&title=New+fact:+`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contribute a fact
                </a>{" "}
                &mdash; for a sourced claim you think belongs on the site.
              </li>
              <li>
                <a
                  href={`${REPO_URL}/issues/new?labels=source-request&title=Source+request:+`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request a source
                </a>{" "}
                &mdash; for a claim we&rsquo;ve marked as source-pending.
              </li>
              <li>
                <Link href="/contact">Send a confidential tip</Link> &mdash;
                when a GitHub issue is not appropriate.
              </li>
              <li>
                Survivors: on-record testimony intake is described at{" "}
                <Link href="/stories">Stories</Link>. We do not publish
                identifiable testimony without explicit written consent.
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
              This site is maintained by Trent Waskey, a contributor to ABC
              Four Corners&rsquo; &ldquo;Big Brethren&rdquo; follow-up
              reporting, alongside anyone who contributes on GitHub.
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
              <code className="font-mono text-sm">src/lib/sources.ts</code>
              , which is the single place where URLs live. No page hardcodes
              a citation URL.
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
              intake file. A claim reaches the site only after its FACTS.md row
              is promoted to one of:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>&#10003; Verified</strong> &mdash; two independent
                sources, or one primary (court ruling, inquiry, or regulator
                finding) plus one journalism source.
              </li>
              <li>
                <strong>&#127993; Single source</strong> &mdash; acceptable
                for uncontested factual matters (dates, locations, leadership
                succession). Borderline for severity claims.
              </li>
              <li>
                <strong>&#128308; Source pending</strong> &mdash; the claim is
                true but we cannot yet pin a public citation. Such claims
                ship with a visible&nbsp;
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
