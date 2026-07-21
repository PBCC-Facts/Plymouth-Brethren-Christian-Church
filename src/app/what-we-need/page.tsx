import Link from "next/link";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";
import { getInfoRequests, type InfoRequest } from "@/lib/supabase";
import { GITHUB_URL } from "@/lib/site";
import {
  JsonLd,
  articleSchema,
  breadcrumbSchema,
} from "@/components/seo/JsonLd";

export const metadata = buildPageMetadata({
  topic: "What we need",
  description:
    "Open information requests from The Facts, focused on the money: the Vision funds, Rapid Relief Team finances, UBT's ATO settlement, OneSchool contracts, and the trust transfers. The documents that would move claims about the Plymouth Brethren Christian Church from reported to documented.",
  slug: "/what-we-need",
  cluster: "B",
  register: "explanatory",
});

const CATEGORY_LABEL: Record<InfoRequest["category"], string> = {
  document: "Document",
  recording: "Recording",
  testimony: "First-hand account",
  "record-lookup": "Public-record lookup",
};

export const revalidate = 300;

export default async function WhatWeNeedPage() {
  const requests = await getInfoRequests();
  const open = requests.filter((r) => r.status === "open" || r.status === "partial");

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: "What we need. Open information requests",
          description:
            "The documents, recordings, and first-hand accounts that would move claims about the PBCC from reported to documented.",
          slug: "/what-we-need",
          datePublished: "2026-07-19",
          dateModified: "2026-07-19",
          register: "explanatory",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "What we need", path: "/what-we-need" },
        ])}
      />

      <section className="hero">
        <div className="site-container hero__grid">
          <div>
            <p className="hero__eyebrow">Open information requests</p>
            <h1 className="hero__title">What we need.</h1>
            <p className="hero__sub">
              Every claim on this site needs a source it can stand on, and the
              requests below now concentrate on one thing: the money. Where
              the Vision funds sit and who manages them, how Rapid Relief
              Team&rsquo;s finances are structured, what UBT settled with the
              ATO, what OneSchool paid Unispace, and where the trust
              transfers went. The paperwork exists; filings already confirm
              the outline. If you are inside or recently out and have seen
              any of it, you can move the record from reported to documented.
            </p>
            <Link href="/contact" className="hero__cta">
              How to reach the editor safely &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container grid gap-10 md:grid-cols-[1fr_280px] md:items-start">
          <div>
          <h2 className="section-label">Before you send anything.</h2>
          <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
            <p>
              Your identity is never published without your explicit written
              consent, and material you send can be used with your identity
              verified by the editor but withheld from the site. If you are a
              current member: assume devices managed through the church&rsquo;s
              commercial network are filtered and may be monitored. Use a
              device and account the community did not supply, and see{" "}
              <Link href="/contact">/contact</Link> for channels.
            </p>
            <p>
              Photographs of printed ministry pages should include the volume
              title page or spine where possible, so the citation is complete.
            </p>
          </div>
          </div>
          <Image
            src="/images/illustrations/document-through-wall.webp"
            alt="Hand-drawn marker illustration: through a small gap in a heavy brick wall, one hand passes a folded document to an open hand waiting on the other side."
            width={280}
            height={280}
            className="hidden md:block"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--color-surface)", paddingTop: 0 }}
      >
        <div className="site-container">
          <h2 className="section-label">The open requests.</h2>
          {open.length === 0 ? (
            <p className="max-w-prose text-[1rem] leading-[1.8]">
              The request list is temporarily unavailable. The current list is
              always mirrored in the public repository&rsquo;s{" "}
              <a
                href={`${GITHUB_URL}/blob/main/FACTS.md`}
                target="_blank"
                rel="noopener noreferrer"
              >
                FACTS.md
              </a>
              : any row marked with a pending source is an open request.
            </p>
          ) : (
            <ul className="record-wall">
              {open.map((r, i) => (
                <li key={r.slug} className="record-row" id={r.slug}>
                  <div
                    className="record-row__year"
                    aria-label={`Request ${i + 1}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="record-row__body">
                    <p className="record-row__outlet">
                      {CATEGORY_LABEL[r.category]}
                      {r.status === "partial" ? " · partially fulfilled" : ""}
                    </p>
                    <h3 className="font-[family-name:var(--font-serif)] text-xl leading-snug m-0">
                      {r.title}
                    </h3>
                    <p className="text-[0.95rem] leading-[1.7] max-w-prose">
                      {r.body}
                    </p>
                    {r.facts_ref && (
                      <p
                        className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.12em]"
                        style={{ opacity: 0.6 }}
                      >
                        Feeds: {r.facts_ref}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--color-ink)", color: "var(--color-surface)" }}
      >
        <div className="site-container">
          <h2
            className="section-label"
            style={{ color: "var(--color-surface)" }}
          >
            How material is handled.
          </h2>
          <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
            <p>
              Documents and recordings are archived off-repo, verified, and
              cited on the site only once they meet the sourcing bar published
              in the open editorial rulebook. Contributors choose whether they
              are named, anonymous with editor verification, or entirely
              off-record. Material is removable on request.
            </p>
            <p>
              <Link href="/contact" className="btn btn--on-dark">
                Get in touch &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
