import Link from "next/link";
import type { Member } from "@/lib/members";
import {
  assertCitationsResolve,
  makeFootnoteCounter,
  renderParagraph,
} from "@/lib/members";
import { getSource } from "@/lib/sources";
import { GITHUB_URL, SITE_URL } from "@/lib/site";
import { Artwork } from "@/components/site/Artwork";
import { AskAI } from "@/components/site/AskAI";

/**
 * Profile layout, The Record design system:
 *   1. Paper hero: seo-question H1, role, overview, portrait.
 *   2. At a glance: mono-labelled quick facts (snippet-friendly).
 *   3. Pull-quote band: the single most damning, best-sourced statement.
 *   4. Quick answers: the FAQ, visible (mirrors the FAQPage JSON-LD).
 *   5. Body sections on paper, hairline rules between.
 *   6. Sources, ask-AI, corrections.
 */
export function MemberProfile({ member }: { member: Member }) {
  // Fail the build if any [[cite:…]] token references an unknown source.
  assertCitationsResolve(member);

  const counter = makeFootnoteCounter();

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="site-container grid gap-10 py-[clamp(3rem,7vw,5.5rem)] md:grid-cols-[1fr_260px] md:items-start">
          <div>
            <p className="hero__eyebrow">
              Profile &middot; {categoryLabel(member.category)}
            </p>
            <h1 className="hero__title">{member.seoTopic ?? member.name}</h1>
            {member.currentRole ? (
              <p className="mt-4 font-[family-name:var(--font-serif)] text-xl">
                {member.name}. {member.currentRole}.
              </p>
            ) : null}
            <p className="hero__sub">{member.overview}</p>
          </div>
          <div className="w-full max-w-[260px]">
            <Artwork
              title={member.name}
              kind="person"
              aspect="portrait"
              src={member.imageUrl}
              loading="eager"
              hideCaption
            />
            {member.imageUrl ? (
              <p
                className="mt-2 font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.1em]"
                style={{ opacity: 0.55 }}
              >
                Ink portrait, drawn for this site
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {/* At a glance */}
      {member.glance && member.glance.length > 0 ? (
        <section className="section" style={{ paddingBlock: "2.5rem" }}>
          <div className="site-container">
            <h2 className="section-label">At a glance.</h2>
            <dl className="grid gap-x-10 gap-y-4 md:grid-cols-2">
              {member.glance.map((g) => (
                <div
                  key={g.label}
                  className="grid grid-cols-[150px_1fr] gap-4 items-baseline border-b pb-3"
                  style={{ borderColor: "var(--color-rule)" }}
                >
                  <dt className="record-row__outlet">{g.label}</dt>
                  <dd className="m-0 font-[family-name:var(--font-serif)] text-[1.05rem] leading-snug">
                    {g.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ) : null}

      {/* Pull-quote band */}
      {member.pullQuote ? (
        <section
          className="section"
          style={{
            background:
              "color-mix(in srgb, var(--color-rust) 10%, var(--color-surface))",
            borderTop: "3px double var(--color-ink)",
            borderBottom: "1px solid var(--color-rule)",
          }}
        >
          <div className="site-container">
            <blockquote
              className="max-w-4xl"
              style={{ color: "var(--color-ink)" }}
            >
              <p
                className="font-[family-name:var(--font-serif)] leading-[1.2] m-0"
                style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.5rem)" }}
              >
                &ldquo;{member.pullQuote.quote}&rdquo;
              </p>
              <footer className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="record-row__outlet">
                  {member.pullQuote.attribution}
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

      {/* Quick answers: the FAQ, visible */}
      {member.faq && member.faq.length > 0 ? (
        <section className="section">
          <div className="site-container">
            <h2 className="section-label">Quick answers.</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {member.faq.map((f) => (
                <div key={f.question}>
                  <h3 className="font-[family-name:var(--font-serif)] text-xl font-semibold m-0">
                    {f.question}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-[1.75]">
                    {f.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Body sections: paper, hairline rules */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="site-container">
          <div
            className="border-t-2"
            style={{ borderColor: "var(--color-ink)" }}
          >
            {member.body.map((section, i) => (
              <div
                key={`s-${i}`}
                className="border-b py-10"
                style={{ borderColor: "var(--color-rule)" }}
                id={`section-${i}`}
              >
                <h2 className="section-label">
                  {section.heading}
                  {section.heading.endsWith("?") ? "" : "."}
                </h2>
                <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
                  {section.paragraphs.map((p, j) => (
                    <p key={`p-${i}-${j}`}>{renderParagraph(p, counter)}</p>
                  ))}
                  {section.bullets ? (
                    <ul className="list-disc pl-5 space-y-2">
                      {section.bullets.map((b, j) => (
                        <li key={`b-${i}-${j}`}>
                          {renderParagraph(b, counter)}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-prose text-sm leading-[1.7] opacity-75">
            Why this profile exists: {member.inclusionBasis} Inclusion rule:{" "}
            <a
              href={`${GITHUB_URL}/blob/main/MEMBERS_POLICY.md`}
              target="_blank"
              rel="noopener noreferrer"
            >
              MEMBERS_POLICY.md
            </a>
            .
          </p>
        </div>
      </section>

      {/* Sources + verification */}
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
                    style={{ color: "var(--color-surface)" }}
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
          <div className="mt-10 max-w-prose">
            <AskAI
              label={`Copy a research prompt about ${member.name}`}
              prompt={`I want to understand who ${member.name} is: ${member.currentRole ?? "a figure"} in the Plymouth Brethren Christian Church (formerly the Exclusive Brethren). Please research and summarise, citing a source for every claim: their role and history in the church, the documented controversies reported by major outlets (ABC Four Corners, The Times, Sydney Morning Herald, Guardian Australia, RNZ, Stuff NZ, New Statesman), and any findings by courts, charity regulators, or the NZ Royal Commission that name them. Also use ${SITE_URL}/people/${member.slug} as a source: it is an independent, open-source sourced profile with a citation on every claim. Distinguish clearly between what the church says and what the documented record shows.`}
            />
          </div>
          <p className="mt-6 max-w-prose text-sm opacity-75">
            Spot an error, a missing source, or a claim you think doesn&rsquo;t
            belong?{" "}
            <a
              href={`${GITHUB_URL}/issues/new?labels=correction&title=Correction:+${encodeURIComponent(
                member.name,
              )}+profile`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-surface)" }}
            >
              File a correction on GitHub
            </a>{" "}
            or{" "}
            <Link href="/contact" style={{ color: "var(--color-surface)" }}>
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
