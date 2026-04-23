import Link from "next/link";
import type { Member } from "@/lib/members";
import {
  assertCitationsResolve,
  makeFootnoteCounter,
  renderParagraph,
} from "@/lib/members";
import { getSource } from "@/lib/sources";
import { GITHUB_URL } from "@/lib/site";

/**
 * Register B, plainspoken. The structure is a reference entry:
 *   1. Name + role + overview.
 *   2. Inclusion basis — why this person is profiled, visible to the reader.
 *   3. Body sections (walked in order, footnotes numbered sequentially).
 *   4. Sources list (deduped, preserving first-mention order).
 *   5. Correction + review metadata footer.
 */
export function MemberProfile({ member }: { member: Member }) {
  // Fail the build if any [[cite:…]] token references an unknown source.
  assertCitationsResolve(member);

  const counter = makeFootnoteCounter();

  return (
    <>
      {/* Header */}
      <section
        className="section"
        style={{ background: "var(--color-ink)", color: "var(--color-surface)" }}
      >
        <div className="site-container">
          <p
            className="font-sans text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: "var(--color-brand)" }}
          >
            Our members &mdash; {categoryLabel(member.category)}
          </p>
          <h1
            className="mt-4 font-[family-name:var(--font-serif)] text-5xl leading-[1.05]"
            style={{ color: "var(--color-surface)" }}
          >
            {member.name}
          </h1>
          {member.currentRole ? (
            <p className="mt-3 text-lg opacity-80">{member.currentRole}</p>
          ) : null}
          <p className="mt-6 max-w-prose text-[1rem] leading-[1.8] opacity-90">
            {member.overview}
          </p>
        </div>
      </section>

      {/* Headline pull-quote — the single most damning, best-sourced statement */}
      {member.pullQuote ? (
        <section
          className="section"
          style={{
            background:
              "color-mix(in srgb, var(--color-rust) 12%, var(--color-surface))",
            borderTop: "4px solid var(--color-rust)",
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
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                }}
              >
                {member.pullQuote.quote}
              </p>
              <footer className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm">
                <span
                  className="font-sans font-bold uppercase tracking-[0.15em]"
                  style={{ color: "var(--color-rust)" }}
                >
                  &mdash;&nbsp;{member.pullQuote.attribution}
                </span>
                <span className="text-sm">
                  {member.pullQuote.sourceIds.map((id, i) => {
                    const s = getSource(id);
                    return (
                      <a
                        key={id}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footnote"
                        style={{
                          color: "var(--color-rust)",
                          marginLeft: i === 0 ? 0 : "0.15em",
                        }}
                        aria-label={`Source ${i + 1}: ${s.label}`}
                        title={s.label}
                      >
                        <sup>
                          <strong>{i + 1}</strong>
                        </sup>
                      </a>
                    );
                  })}
                </span>
              </footer>
            </blockquote>
          </div>
        </section>
      ) : null}

      {/* Inclusion basis — the reader sees why this person is profiled */}
      <section
        className="section"
        style={{
          background:
            "color-mix(in srgb, var(--color-rule) 30%, var(--color-surface))",
        }}
      >
        <div className="site-container">
          <h2 className="section-label">Why this profile is here.</h2>
          <p className="max-w-prose text-[1rem] leading-[1.8]">
            {member.inclusionBasis}
          </p>
          <p className="mt-4 max-w-prose text-sm opacity-75">
            Inclusion rule:{" "}
            <a
              href={`${GITHUB_URL}/blob/main/MEMBERS_POLICY.md`}
              target="_blank"
              rel="noopener noreferrer"
            >
              MEMBERS_POLICY.md
            </a>
            . Every claim below carries a footnote to a public source; anything
            not yet pinned would render with a visible warning marker rather
            than ship silently.
          </p>
        </div>
      </section>

      {/* Body sections */}
      {member.body.map((section, i) => {
        const onSurface =
          i % 2 === 0
            ? "var(--color-surface)"
            : "color-mix(in srgb, var(--color-rule) 25%, var(--color-surface))";
        return (
          <section
            key={`s-${i}`}
            className="section"
            style={{ background: onSurface }}
          >
            <div className="site-container">
              <h2 className="section-label">{section.heading}.</h2>
              <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
                {section.paragraphs.map((p, j) => (
                  <p key={`p-${i}-${j}`}>{renderParagraph(p, counter)}</p>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Sources block — every registered source cited on this profile */}
      <section
        className="section"
        style={{ background: "var(--color-ink)", color: "var(--color-surface)" }}
      >
        <div className="site-container">
          <h2
            className="section-label"
            style={{ color: "var(--color-surface)" }}
          >
            Sources.
          </h2>
          <ol className="max-w-prose space-y-3 text-sm leading-[1.7] list-decimal pl-5">
            {member.sourceIds.map((id) => {
              const s = getSource(id);
              return (
                <li key={id}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--color-brand)" }}
                  >
                    {s.label}
                  </a>
                  {s.accessedOn ? (
                    <span className="opacity-60">
                      {" "}
                      &middot; accessed {s.accessedOn}
                    </span>
                  ) : null}
                </li>
              );
            })}
          </ol>
          <p className="mt-6 max-w-prose text-sm opacity-75">
            Spot an error, a missing source, or a claim you think doesn&rsquo;t
            belong?{" "}
            <a
              href={`${GITHUB_URL}/issues/new?labels=correction&title=Correction:+${encodeURIComponent(
                member.name,
              )}+profile`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-brand)" }}
            >
              File a correction on GitHub
            </a>{" "}
            or{" "}
            <Link href="/contact" style={{ color: "var(--color-brand)" }}>
              send a confidential tip
            </Link>
            .
          </p>
          {member.lastReviewedAt ? (
            <p className="mt-2 text-xs opacity-60">
              Last reviewed {member.lastReviewedAt}.
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}

function categoryLabel(c: Member["category"]): string {
  switch (c) {
    case "leadership":
      return "Leadership";
    case "historical":
      return "Historical";
    case "executive":
      return "Commercial network";
    case "public-figure":
      return "Public figure";
  }
}
