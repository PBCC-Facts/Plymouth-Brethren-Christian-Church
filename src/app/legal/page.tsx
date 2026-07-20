import Link from "next/link";
import { Footnote, SourcePending } from "@/components/site/Footnote";
import { buildPageMetadata } from "@/lib/seo";
import {
  JsonLd,
  articleSchema,
  breadcrumbSchema,
} from "@/components/seo/JsonLd";
import { GITHUB_URL } from "@/lib/site";

export const metadata = buildPageMetadata({
  topic: "Legal",
  description:
    "Legal posture of The Facts: news aggregation, criticism, and research on the Plymouth Brethren Christian Church, and why it is protected under fair use, fair dealing, and the First Amendment. Correction process, counsel contact, and our policy on legal threats.",
  slug: "/legal",
  cluster: "A",
  register: "explanatory",
});

export default function LegalPage() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          headline:
            "Legal. The Facts about the Plymouth Brethren Christian Church",
          description:
            "Legal posture: news aggregation, criticism, fair use, fair dealing, sourcing discipline, correction process, and how we respond to legal threats.",
          slug: "/legal",
          datePublished: "2026-04-23",
          dateModified: "2026-04-23",
          register: "explanatory",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Legal", path: "/legal" },
        ])}
      />

      {/* Lede */}
      <section className="hero">
        <div className="site-container hero__grid">
          <div>
            <p className="hero__eyebrow">Legal posture</p>
            <h1 className="hero__title">Legal.</h1>
            <p className="hero__sub">
              This site is news aggregation, criticism, and research about a
              public religious organisation and its public-facing leadership.
              That is protected expression under United States law, and the
              equivalent fair-dealing doctrines in the United Kingdom,
              Australia, and New Zealand. the jurisdictions in which
              the Plymouth Brethren Christian Church most visibly operates.
              Every factual sentence on this site carries a public source.
              Nothing here is invented.
            </p>
            <Link href="/mission" className="hero__cta">
              How we source every claim &rarr;
            </Link>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__visual__placeholder" />
          </div>
        </div>
      </section>

      {/* What this site is */}
      <section
        className="section"
        style={{ background: "var(--color-surface)" }}
      >
        <div className="site-container">
          <h2 className="section-label">What this site is.</h2>
          <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
            <p>
              <em>The Facts</em> is an independent, open-source
              news-aggregation and criticism project about the Plymouth
              Brethren Christian Church (PBCC), formerly and still widely
              known as the Exclusive Brethren. It is not affiliated with the PBCC, any successor to
              the Exclusive Brethren, or any other religious organisation.
              Every page of the repository is public on GitHub, under an
              open licence, with the full edit history visible at{" "}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/trentwaskey/Plymouth-Brethren-Christian-Church
              </a>
              .
            </p>
            <p>
              The site operates in a single editorial register, documented in
              our public editorial guide: plainspoken, third-person, and
              aggregator-framed. Reporting is attributed to the outlet, court,
              or regulator that published it first. The site does not claim
              original reporting, and it does not imitate the PBCC&rsquo;s
              voice. The site&rsquo;s masthead, every page title, every
              metadata description, and the footer of every page identify it
              as an independent publication not affiliated with the PBCC.
            </p>
            <p>
              Our mission, methodology, correction process, and sourcing rules
              are published in full at{" "}
              <Link href="/mission">/mission</Link>. Nothing on this page is
              intended to limit or qualify them.
            </p>
          </div>
        </div>
      </section>

      {/* The legal frame */}
      <section
        className="section"
        style={{
          background:
            "color-mix(in srgb, var(--color-rule) 30%, var(--color-surface))",
        }}
      >
        <div className="site-container">
          <h2 className="section-label">The legal frame.</h2>
          <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
            <p>
              <strong>News reporting, criticism, and research about a public
              religious organisation are protected expression.</strong> In
              the United States, where this site is hosted and from which
              most readers access it, commentary, criticism, and news
              aggregation are squarely within the First Amendment and within
              the statutory fair-use doctrine at 17 U.S.C. &sect; 107. The
              four fair-use factors, in the order Congress lists them, weigh
              in favour of this project: the use is transformative (critical
              commentary and organisation of a public record, not
              republication); the source material is largely
              factual/promotional rather than creative fiction; we do not
              reproduce the PBCC&rsquo;s copy at length; and a criticism and
              research site does not substitute in the market for the
              PBCC&rsquo;s own communications, it offers a different
              product to a different audience.
            </p>
            <p>
              The United Kingdom, Australia, and New Zealand reach the same
              result by different doctrines. UK law provides fair-dealing
              exceptions for criticism, review, and reporting current events
              in sections 30(1) and 30(2) of the Copyright, Designs and
              Patents Act 1988. Australian copyright law provides fair
              dealing for criticism or review (Copyright Act 1968 (Cth)
              s 41) and for reporting news (s 42). New Zealand&rsquo;s
              Copyright Act 1994 provides fair-dealing exceptions for
              criticism, review, and news reporting (s 42). Each of these
              doctrines accommodates, in substance, what this site does:
              original commentary and critical writing about a public
              religious organisation, with short attributed quotation of
              its own published material where necessary.
            </p>
            <p>
              <strong>This is a criticism site. The PBCC is a public
              subject.</strong> The Plymouth Brethren Christian Church
              presents itself publicly, runs a global communications
              operation across multiple countries, operates a network of
              outward-facing philanthropy and business entities, and its
              current leadership is identified and discussed by name in its
              own publications
              <Footnote id="hales-manofgod-pbcc" n={1} />. Public
              religious organisations and their public leadership are
              long-established permissible subjects of commentary,
              journalism, and satire.
            </p>
          </div>
        </div>
      </section>

      {/* On the name */}
      <section className="section">
        <div className="site-container">
          <h2 className="section-label">On the name.</h2>
          <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
            <p>
              The name &ldquo;Plymouth Brethren Christian Church&rdquo;
              appears on this site because it is the subject of the site.
              Using the accurate name of a public organisation to identify,
              discuss, and criticise that organisation is nominative use
             . a doctrine recognised in US trademark law and in the
              equivalent &ldquo;honest-use&rdquo; and comparative-reference
              carve-outs across UK, Australian, and New Zealand law. It is
              how every journalist, academic, and reviewer refers to a
              subject by name.
            </p>
            <p>
              The domain, every page title, every metadata description, the
              Open Graph tag on every share card, the site&rsquo;s masthead
              and its footer all identify the site as an independent
              record not affiliated with the PBCC. A reasonable reader is
              not confused about the source of this material. No visitor who
              lands on a page headed <em>&ldquo;The Facts &middot; Plymouth
              Brethren Christian Church&rdquo;</em>, with an independent-
              publisher notice in the masthead and footer, believes they are
              on the PBCC&rsquo;s own site.
            </p>
          </div>
        </div>
      </section>

      {/* On the facts */}
      <section
        className="section"
        style={{ background: "var(--color-surface)" }}
      >
        <div className="site-container">
          <h2 className="section-label">On the facts.</h2>
          <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
            <p>
              Defamation, in every jurisdiction that matters here, requires a
              false statement of fact. This site ships no factual statement
              that is not footnoted to a public source. Sources live in a
              single typed registry at{" "}
              <a
                href={`${GITHUB_URL}/blob/main/src/lib/sources.ts`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <code className="font-mono text-sm">src/lib/sources.ts</code>
              </a>
              . Claims enter that registry only after a corresponding row in{" "}
              <a
                href={`${GITHUB_URL}/blob/main/FACTS.md`}
                target="_blank"
                rel="noopener noreferrer"
              >
                FACTS.md
              </a>{" "}
              reaches verified status. meaning either two independent
              sources, or one primary source (court ruling, parliamentary
              inquiry, or regulator finding) plus one journalism source.
              Where a claim is true but we have not yet pinned a public
              citation, it ships with a visible{" "}
              <span className="footnote footnote--pending">&#9888;&#65038;</span>{" "}
              marker pointing back to the open row. never silently.
              The full editorial rulebook is public at{" "}
              <a
                href={`${GITHUB_URL}/blob/main/EDITORIAL_GUIDE.md`}
                target="_blank"
                rel="noopener noreferrer"
              >
                EDITORIAL_GUIDE.md
              </a>
              .
            </p>
            <p>
              The practical consequence is that every factual sentence on
              this site is a sentence we can stand behind in front of a
              judge. That is by design. If a specific sentence turns out to
              be wrong, the correction process is a pull request.
              fast, public, and visible in the commit history.
            </p>
            <p>
              <strong>Opinion and characterisation.</strong> Where we
              characterise the PBCC&rsquo;s communications strategy, its
              doctrine of separation, its handling of members who depart,
              or its public posture towards journalists and critics, those
              characterisations are opinion grounded in the disclosed
              factual record, which is the form of opinion protected in
              every jurisdiction this site operates in.
            </p>
          </div>
        </div>
      </section>

      {/* For PBCC counsel */}
      <section
        className="section"
        style={{
          background:
            "color-mix(in srgb, var(--color-rule) 30%, var(--color-surface))",
        }}
      >
        <div className="site-container">
          <h2 className="section-label">For PBCC counsel.</h2>
          <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
            <p>
              If you act for the PBCC, a PBCC-affiliated entity (including
              but not limited to Universal Business Team, OneSchool Global,
              or the Rapid Relief Team), a named member of the current
              leadership, or any individual identified on this site, the
              fastest way to have a factual error corrected is to{" "}
              <a
                href={`${GITHUB_URL}/issues/new?labels=correction&title=Correction:+`}
                target="_blank"
                rel="noopener noreferrer"
              >
                open a correction issue on GitHub
              </a>{" "}
              or to send written correspondence to the editorial address
              on <Link href="/contact">/contact</Link>. Identify the URL,
              quote the specific sentence, state what is factually wrong,
              and. ideally. point to the public source that
              establishes the correct fact. A sentence that is factually
              wrong will be corrected or removed. A sentence that is
              accurate and sourced will not be.
            </p>
            <p>
              <strong>On legal threats.</strong> This project is familiar
              with the PBCC and related entities&rsquo; track record on
              defamation proceedings, injunctions, and takedown
              correspondence directed at journalists, former members, and
              academic critics
              <SourcePending note="Specific named cases (e.g. Australian defamation proceedings against Michael Bachelard / Fairfax; UK injunction proceedings against ex-member fora) to be pinned from FACTS.md §5 before ship." />
              . It does not change what this site publishes. Our policy is
              simple and stated up front:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                We will not remove accurate, sourced content in response to a
                legal threat. We will correct or remove content that is
                demonstrably factually wrong, on the same terms we correct
                anything else on the site: as a public pull request, with
                the correction visible in the commit history.
              </li>
              <li>
                Demand letters, cease-and-desist correspondence, and
                pre-action letters received in connection with the public
                editorial content of this site will be treated as part of
                the public record of the project. We reserve the right to
                publish them, in full, alongside our response, on{" "}
                <Link href="/news">/news</Link>. If you do not want a
                letter read by our readers, do not send it.
              </li>
              <li>
                Confidential correspondence that is clearly marked as such
                and that addresses a specific factual correction.
                rather than demanding the removal of accurate, sourced
                commentary. will be handled confidentially and
                responded to on that basis. The correction itself, once
                made, will be public.
              </li>
              <li>
                This project operates with editorial counsel. Legal costs
                associated with defending accurate reporting will be funded
                publicly, and any action against the editor or a contributor
                will be reported to the journalists, academics, and
                regulators already engaged with the PBCC as a subject.
              </li>
            </ul>
            <p>
              <em>This section is a statement of editorial policy, not a
              legal opinion. Nothing on this page is legal advice. Counsel
              for any party is encouraged to take their own.</em>
            </p>
          </div>
        </div>
      </section>

      {/* Copyright / takedown */}
      <section className="section">
        <div className="site-container">
          <h2 className="section-label">Copyright and takedown notices.</h2>
          <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
            <p>
              This site does not host PBCC photography, video, or audio. All
              imagery on the site is original or licensed stock. Short
              attributed quotation of PBCC publications. the kind
              routinely used in reviews, journalism, and academic writing
             . falls within fair use and the equivalent fair-dealing
              exceptions, and is the only PBCC material that appears here.
            </p>
            <p>
              If you believe specific material on this site infringes a
              copyright you own, send a written notice to the editorial
              address on <Link href="/contact">/contact</Link> that
              identifies the work claimed to be infringed, the specific URL
              on this site where the allegedly infringing material appears,
              your contact information, and a statement of good-faith
              belief and accuracy consistent with the usual requirements of
              the Digital Millennium Copyright Act (17 U.S.C. &sect; 512).
              Good-faith notices are actioned promptly. Notices that target
              short attributed quotation of the notice-sender&rsquo;s own
              publications, used for the purpose of criticism or news
              reporting, will be declined on fair-use grounds and, where
              appropriate, published as part of the public record of the
              project.
            </p>
          </div>
        </div>
      </section>

      {/* Contributors and survivors */}
      <section
        className="section"
        style={{ background: "var(--color-surface)" }}
      >
        <div className="site-container">
          <h2 className="section-label">Contributors and survivors.</h2>
          <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
            <p>
              This project welcomes contributions from researchers,
              journalists, ex-members, counsel, and anyone with a sourced
              fact or a correction. Identifying details of contributors are
              not published without their explicit, written consent. First-
              person survivor testimony at{" "}
              <Link href="/stories">/stories</Link> is accepted only under
              the consent controls published there. on-record by
              explicit written consent, reviewed by the contributor before
              ship, and removable on request. No survivor story is used
              without that sign-off, and no identifiable private member of
              the PBCC who has not chosen to be public is named on this
              site.
            </p>
            <p>
              Correspondence intended to identify, pressure, or retaliate
              against contributors will be treated as part of the public
              record of the project on the same terms as any other legal
              correspondence received.
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section
        className="section"
        style={{ background: "var(--color-ink)", color: "var(--color-surface)" }}
      >
        <div className="site-container">
          <h2
            className="section-label"
            style={{ color: "var(--color-surface)" }}
          >
            In plain English.
          </h2>
          <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
            <p>
              This is a news-aggregation and criticism site about a public
              religious organisation. Every factual sentence has a public source.
              Every page of this site, every edit to every page, and the
              full editorial rulebook are public on GitHub. Our corrections
              process is a pull request. Our legal posture is a paragraph
              long: we publish accurate, sourced commentary on a public
              subject, and we will not take it down on demand.
            </p>
            <p>
              If the PBCC or an affiliated entity has a specific factual
              correction, we want it. it makes the record better.
              If what is objected to is the existence of accurate
              reporting and sourced criticism on the same search terms the
              fellowship spends real money to dominate, that is the point
              of the project, and it is going to continue.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
