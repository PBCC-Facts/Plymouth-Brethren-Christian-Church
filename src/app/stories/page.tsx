import type { Metadata } from "next";
import Link from "next/link";
import { GITHUB_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "First-person survivor testimony about the Plymouth Brethren Christian Church, published on-record by explicit written consent. Intake is open; the first stories are in review.",
  alternates: { canonical: "/stories" },
};

export default function StoriesPage() {
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
            The Facts.. stories
          </p>
          <h1
            className="hero__title"
            style={{ color: "var(--color-surface)" }}
          >
            Stories.
          </h1>
          <p className="hero__sub" style={{ maxWidth: "62ch" }}>
            First-person accounts from people the Plymouth Brethren Christian
            Church has withdrawn from, cut off, sued, schooled, or employed.
            On-record by explicit written consent. Reviewed by the contributor
            before publication. Removable at their request. Never used for a
            joke.
          </p>
          <p
            className="mt-6 inline-block text-[0.625rem] font-bold uppercase tracking-[0.2em]"
            style={{
              color: "var(--color-brand)",
              padding: "0.3rem 0.6rem",
              border: "1px solid var(--color-brand)",
            }}
          >
            Intake open. first stories in review
          </p>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--color-surface)" }}
      >
        <div className="site-container">
          <h2 className="section-label">How we&rsquo;ll publish.</h2>
          <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
            <p>
              Testimony is editorial work. Every story that lands here will
              go through the same pipeline:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>Intake.</strong> You send us a draft in your own
                words, privately. See the contact options below.
              </li>
              <li>
                <strong>Editorial pass.</strong> We edit for clarity and
                factual sourcing, not tone. Your voice stays yours.
              </li>
              <li>
                <strong>Consent on file.</strong> You sign off in writing on
                the final draft, your byline (or pseudonym), any identifying
                detail, and whether specific people, dates, or places should
                be redacted.
              </li>
              <li>
                <strong>Publish.</strong> The story ships with a clear
                consent statement, an edit history, and a removal contact.
              </li>
              <li>
                <strong>Takedown on request.</strong> If you later ask us to
                take it down, we do. Promptly. No argument.
              </li>
            </ol>
            <p>
              Where a contributor needs anonymity, we publish under a
              pseudonym or as a composite account and mark that clearly.
              Where a named individual appears in a story, we limit detail to
              what a named public-record source (court document,
              parliamentary submission, mainstream-journalism piece) already
              carries.
            </p>
          </div>
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
          <h2 className="section-label">What we will not do.</h2>
          <ul className="max-w-prose space-y-3 text-[1rem] leading-[1.8] list-disc pl-5">
            <li>
              Publish identifying detail without your explicit written
              consent.
            </li>
            <li>
              Use your story to make a joke. Register C (the snarky mirror)
              and testimony do not share pages.
            </li>
            <li>
              Sell, syndicate, or license your story to anyone else. We
              publish it; you own it.
            </li>
            <li>
              Name private minors, spouses, or relatives unless they are
              already named in a public-record source and you have asked us
              to.
            </li>
            <li>
              Keep your story up after you ask us to take it down.
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <h2 className="section-label">Send a story.</h2>
          <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
            <p>
              Two routes, pick the one you&rsquo;re comfortable with:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <Link href="/contact">Send a confidential tip</Link>.
                the primary intake. This is the route to use if you want any
                identifying detail off GitHub.
              </li>
              <li>
                <a
                  href={`${GITHUB_URL}/issues/new?labels=story-intake&title=Story+intake:+`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open a GitHub issue
                </a>{" "}
               . only when there is no identifying detail you need to
                keep off a public repo. We will move the conversation off
                GitHub before any draft is written.
              </li>
            </ul>
            <p>
              If you&rsquo;re in crisis or need support now, start with the{" "}
              <Link href="/resources">Resources</Link> page. This site is a
              signpost, not a crisis service.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/mission" className="btn">
              Read the mission
            </Link>
            <Link href="/resources" className="btn">
              See resources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
