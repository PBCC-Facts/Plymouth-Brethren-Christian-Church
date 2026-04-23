import Link from "next/link";
import { MemberCard } from "@/components/site/MemberCard";
import {
  listPublishedMembers,
  listRoadmapMembers,
} from "@/lib/members";
import { getSource } from "@/lib/sources";
import { GITHUB_URL } from "@/lib/site";

/**
 * /people landing. Plainspoken. The page's first job is to declare the
 * inclusion rule so readers see the editorial gate before the roster;
 * the second is to list the roster.
 */
export function MemberIndex() {
  const published = listPublishedMembers();
  const roadmap = listRoadmapMembers();

  return (
    <>
      {/* Lede */}
      <section className="hero">
        <div className="site-container hero__grid">
          <div>
            <p className="hero__eyebrow">The Facts. People</p>
            <h1 className="hero__title">People.</h1>
            <p className="hero__sub">
              Sourced profiles of named figures in and around the Plymouth
              Brethren Christian Church: leadership, historical leaders, and
              executives of the commercial network. Every claim on every
              profile footnotes to a public source. Inclusion is bright-line
              and published.
            </p>
            <a
              href={`${GITHUB_URL}/blob/main/MEMBERS_POLICY.md`}
              className="hero__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the inclusion rule &rarr;
            </a>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__visual__placeholder" />
          </div>
        </div>
      </section>

      {/* Inclusion rule summary */}
      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="site-container">
          <h2 className="section-label">Who appears on this page.</h2>
          <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
            <p>
              A person is profiled here only if they clear at least one of four
              buckets:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Self-disclosed by PBCC.</strong> Named on the church&rsquo;s
                own resource pages, press releases, or official publications.
              </li>
              <li>
                <strong>Documented leadership role.</strong> Current or former
                office within the fellowship, established by independent
                reporting or the church&rsquo;s own record.
              </li>
              <li>
                <strong>Substantive naming in major journalism or in court /
                regulator filings.</strong> ABC Four Corners, New Statesman,
                The Guardian, The Post (NZ), or equivalent; and named parties
                in public court or charity-regulator proceedings.
              </li>
              <li>
                <strong>Named executives of the commercial network</strong>{" "}
                (UBT, OneSchool Global, Rapid Relief Team) who appear by name
                in regulatory actions. including the 2024 ATO raid on
                UBT offices.
              </li>
            </ul>
            <p>
              The full rule, review protocol, and correction process live in{" "}
              <a
                href={`${GITHUB_URL}/blob/main/MEMBERS_POLICY.md`}
                target="_blank"
                rel="noopener noreferrer"
              >
                MEMBERS_POLICY.md
              </a>
              . Private members of the fellowship who have not chosen to be
              public are not listed here and never will be.
            </p>
          </div>
        </div>
      </section>

      {/* Published profiles */}
      <section
        className="section"
        style={{
          background:
            "color-mix(in srgb, var(--color-rule) 30%, var(--color-surface))",
        }}
      >
        <div className="site-container">
          <h2 className="section-label">Profiles.</h2>
          {published.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {published.map((m) => (
                <MemberCard key={m.slug} member={m} />
              ))}
            </div>
          ) : (
            <p className="max-w-prose text-[1rem] leading-[1.8] opacity-80">
              No profiles have been published yet.
            </p>
          )}
        </div>
      </section>

      {/* Roadmap */}
      {roadmap.length > 0 ? (
        <section
          className="section"
          style={{ background: "var(--color-surface)" }}
        >
          <div className="site-container">
            <h2 className="section-label">Researched, not yet profiled.</h2>
            <p className="max-w-prose text-[1rem] leading-[1.8]">
              People who clear the inclusion rule and for whom we have at least
              one registered public source, but whose full profile is still in
              draft. Adding a source or drafting a row is a pull request away.
            </p>
            <ul className="mt-8 max-w-prose space-y-6">
              {roadmap.map((m) => (
                <li
                  key={m.slug}
                  className="border-l-4 pl-4"
                  style={{ borderColor: "var(--color-brand)" }}
                >
                  <p className="font-[family-name:var(--font-serif)] text-xl leading-tight">
                    {m.name}
                  </p>
                  {m.currentRole ? (
                    <p className="mt-1 text-sm opacity-75">{m.currentRole}</p>
                  ) : null}
                  <p className="mt-2 text-[0.95rem] leading-[1.7]">
                    {m.overview}
                  </p>
                  {m.sourceIds.length > 0 ? (
                    <p className="mt-2 text-sm opacity-75">
                      Registered source:{" "}
                      {m.sourceIds.map((id, i) => {
                        const s = getSource(id);
                        return (
                          <span key={id}>
                            {i > 0 ? "; " : ""}
                            <a
                              href={s.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {s.label}
                            </a>
                          </span>
                        );
                      })}
                      .
                    </p>
                  ) : null}
                  <p className="mt-3 text-sm">
                    <a
                      href={`${GITHUB_URL}/issues/new?labels=new-fact&title=${encodeURIComponent(
                        `Profile draft: ${m.name}`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Help source this profile &rarr;
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* Contribute CTA */}
      <section
        className="section"
        style={{ background: "var(--color-ink)", color: "var(--color-surface)" }}
      >
        <div className="site-container">
          <h2
            className="section-label"
            style={{ color: "var(--color-surface)" }}
          >
            Contribute.
          </h2>
          <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
            <p>
              Suggest a person who clears the inclusion rule, a source we
              missed, or a correction on a published profile. The lightest way
              in is a GitHub issue; the heaviest is a fully-drafted pull
              request.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <a
                  href={`${GITHUB_URL}/issues/new?labels=new-fact&title=New+profile:+`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--color-brand)" }}
                >
                  Propose a new profile
                </a>{" "}
               . name + inclusion bucket + at least one public source URL.
              </li>
              <li>
                <a
                  href={`${GITHUB_URL}/issues/new?labels=correction&title=Correction:+`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--color-brand)" }}
                >
                  File a correction
                </a>{" "}
               . for any factual error on a published profile.
              </li>
              <li>
                <Link href="/contact" style={{ color: "var(--color-brand)" }}>
                  Send a confidential tip
                </Link>{" "}
               . when GitHub is not appropriate.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
