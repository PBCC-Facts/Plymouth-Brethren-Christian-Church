import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { getPublishedStories, getStoriesPipeline } from "@/lib/supabase";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata = buildPageMetadata({
  topic: "Stories",
  description:
    "First-person survivor testimony about the Plymouth Brethren Christian Church, published on-record by explicit written consent, reviewed by the contributor before publication, and removable on request.",
  slug: "/stories",
  cluster: "B",
  register: "explanatory",
});

export const revalidate = 300;

export default async function StoriesPage() {
  const [stories, pipeline] = await Promise.all([
    getPublishedStories(),
    getStoriesPipeline(),
  ]);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Stories", path: "/stories" },
        ])}
      />

      <section className="hero">
        <div className="site-container hero__grid">
          <div>
            <p className="hero__eyebrow">Stories</p>
            <h1 className="hero__title">Told by the people who lived it.</h1>
            <p className="hero__sub">
              First-person accounts from people the Plymouth Brethren
              Christian Church has withdrawn from, cut off, schooled, or
              employed. Every story here is on-record by explicit written
              consent, reviewed by its author before publication, and comes
              down the day they ask.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <h2 className="section-label">Published stories.</h2>
          {stories.length === 0 ? (
            <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
              <p>
                None yet, and that is by design: no story ships until its
                author has read the final draft and signed off in writing.
                {pipeline && pipeline.in_review > 0 ? (
                  <>
                    {" "}
                    <strong>
                      {pipeline.in_review}{" "}
                      {pipeline.in_review === 1 ? "story is" : "stories are"}{" "}
                      in the pipeline now.
                    </strong>
                  </>
                ) : null}
              </p>
              <p>
                Have one to tell? Start with{" "}
                <Link href="/contact">how to get in touch safely</Link>.
              </p>
            </div>
          ) : (
            <ul className="record-wall">
              {stories.map((s) => (
                <li key={s.slug} className="record-row" id={s.slug}>
                  <div
                    className="record-row__outlet"
                    style={{ alignSelf: "start", paddingTop: "0.3rem" }}
                  >
                    {s.byline}
                    {s.is_pseudonym ? " · pseudonym" : ""}
                  </div>
                  <div className="record-row__body">
                    <h3 className="font-[family-name:var(--font-serif)] text-xl leading-snug m-0">
                      {s.title}
                    </h3>
                    <p className="text-[0.95rem] leading-[1.7] max-w-prose">
                      {s.excerpt}
                    </p>
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
            How a story gets published.
          </h2>
          <div>
            <ol className="max-w-prose space-y-3 text-[1rem] leading-[1.8] list-decimal pl-5 m-0">
              <li>
                <strong>You send a draft, privately.</strong> In your own
                words, through any channel on <Link href="/contact" style={{ color: "var(--color-surface)" }}>/contact</Link>.
              </li>
              <li>
                <strong>Editing is for clarity, never tone.</strong> Your
                voice stays yours.
              </li>
              <li>
                <strong>You approve the final draft in writing</strong>:
                byline or pseudonym, every identifying detail, anything to
                redact.
              </li>
              <li>
                <strong>It ships with your consent statement</strong> and a
                removal contact.
              </li>
              <li>
                <strong>Ask us to take it down and it comes down.</strong>{" "}
                Promptly, no argument.
              </li>
            </ol>
          </div>
          <p className="mt-8 max-w-prose text-sm leading-[1.7] opacity-80">
            Named private individuals appear in a story only where a public
            record already carries them. Stories are never syndicated or
            licensed: we publish yours, you own it. If you need support
            rather than a byline, start with{" "}
            <Link href="/resources" style={{ color: "var(--color-surface)" }}>
              /resources
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
