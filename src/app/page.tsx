import Link from "next/link";

const communityCards = [
  {
    accent: "var(--color-purple)",
    title: "We care about our neighbours \u2014 at a doctrinally-mandated distance",
    body: "Members do not share meals, accommodation, marriage, or business partnership with those outside the fellowship. Good neighbourliness is expressed through service at a respectful distance.",
  },
  {
    accent: "var(--color-brand)",
    title: "We help drive local economies \u2014 our own",
    body: "Member-owned businesses coordinate under the Universal Business Team. In March 2024 the Australian Taxation Office raided UBT offices. {/* TODO: source */}",
  },
  {
    accent: "var(--color-blueviolet)",
    title: "We are a connected global Community \u2014 under one man",
    body: "More than 54,000 members across 19 countries live under a single global leadership structure, led by the current World Leader, Bruce D. Hales, known within the fellowship as the Man of God.",
  },
  {
    accent: "var(--color-rust)",
    title: "We understand the importance of limiting education",
    body: "OneSchool Global serves member families on campuses staffed primarily by members, under restrictions on technology, external contact, and mixed-faith activities.",
  },
];

const newsItems = [
  {
    title:
      "Correcting the Record: \u201CBrethren charity sues woman allegedly abused by an elder\u201D",
    date: "2025-10-14",
  },
  {
    title:
      "Plymouth Brethren Christian Church pledges support to the Jewish community",
    date: "2025-09-02",
  },
  {
    title:
      "Submission to the Parliamentary Inquiry into the 2025 Australian election",
    date: "2025-08-21",
  },
  {
    title:
      "Plymouth Brethren Christian Church welcomes in Australian journalist",
    date: "2025-08-08",
  },
  {
    title:
      "More than 100k views for Behind the Plymouth Brethren \u2014 a not-so Exclusive podcast",
    date: "2025-07-17",
  },
  {
    title:
      "Behind the Plymouth Brethren \u2014 a not-so Exclusive podcast launches today",
    date: "2025-06-30",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — dark charcoal, big white serif, teal "Learn more" link, circle visual */}
      <section className="hero">
        <div className="site-container hero__grid">
          <div>
            <p className="hero__eyebrow">A global high-control religious group &mdash; since 1848</p>
            <h1 className="hero__title">
              We are a high-control religious sect with over 55,000 members and
              hundreds of survivors.
            </h1>
            <p className="hero__sub">
              Founded 200 years ago by John Nelson Darby, author of the Doctrine
              of Separation that still defines how members may treat everyone
              outside the fellowship. Every claim on this site is footnoted
              &mdash; or publicly flagged for sourcing on GitHub.
            </p>
            <Link href="/way-of-life" className="hero__cta">
              Learn what our way of life costs &rarr;
            </Link>
            <div className="hero__dots" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__visual__placeholder" />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="site-container">
          <h2 className="section-label">About us</h2>
          <div className="rich-media">
            <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
              <p>
                Established around 200 years ago, the Plymouth Brethren
                Christian Church (PBCC) was founded by John Nelson Darby &mdash;
                author of the Doctrine of Separation that still governs who
                members may eat with, live with, marry, and do business with.
              </p>
              <p>
                Today the church counts just over 55,000 members across 19
                countries, and, by conservative estimate, hundreds of
                ex-members who have been withdrawn from, shunned, or cut off
                from their families under that same doctrine.{" "}
                {/* TODO: source — FACTS.md §1 survivors count */}
              </p>
              <p>
                Community life is organised around the recorded ministry of the
                current World Leader, Bruce D. Hales, known within the
                fellowship as the Man of God. His addresses are studied in homes
                and meetings as the authoritative current expression of
                scriptural guidance.
              </p>
              <p>
                Every claim on this site is footnoted. Corrections are welcome
                as GitHub issues, pull requests, or tips via the contact form.
              </p>
            </div>
            <div
              aria-hidden="true"
              className="aspect-[4/3] w-full"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in srgb, var(--color-brand) 30%, var(--color-ink)), var(--color-ink))",
              }}
            />
          </div>
        </div>
      </section>

      {/* News */}
      <section
        className="section"
        style={{
          background:
            "color-mix(in srgb, var(--color-rule) 30%, var(--color-surface))",
        }}
      >
        <div className="site-container">
          <h2 className="section-label">News</h2>
          <ul className="grid gap-10 md:grid-cols-3">
            {newsItems.map((n) => (
              <li key={n.title}>
                <article className="h-full">
                  <div
                    className="aspect-[4/3] w-full"
                    style={{
                      background:
                        "linear-gradient(135deg, color-mix(in srgb, var(--color-brand) 35%, var(--color-ink)), var(--color-ink))",
                    }}
                    aria-hidden="true"
                  />
                  <time
                    dateTime={n.date}
                    className="mt-4 block text-[0.7rem] font-bold uppercase tracking-[0.2em]"
                    style={{ color: "var(--color-brand)" }}
                  >
                    {new Date(n.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <h3 className="mt-2 font-[family-name:var(--font-serif)] text-xl leading-snug">
                    <Link
                      href="/news"
                      className="hover:underline"
                      style={{ color: "var(--color-ink)" }}
                    >
                      {n.title}
                    </Link>
                  </h3>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Get to know our Community */}
      <section className="section">
        <div className="site-container">
          <h2 className="section-label">Get to know our Community</h2>
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {communityCards.map((c) => (
              <li key={c.title}>
                <article
                  className="h-full p-6"
                  style={{
                    borderTop: `4px solid ${c.accent}`,
                    background:
                      "color-mix(in srgb, var(--color-rule) 25%, var(--color-surface))",
                  }}
                >
                  <h3
                    className="font-[family-name:var(--font-serif)] text-xl leading-snug"
                    style={{ color: "var(--color-ink)" }}
                  >
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.7]">{c.body}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stay connected */}
      <section
        className="section"
        style={{ background: "var(--color-ink)", color: "var(--color-surface)" }}
      >
        <div className="site-container">
          <h2
            className="section-label"
            style={{ color: "var(--color-surface)" }}
          >
            Stay connected
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-[2fr_3fr] md:items-center">
            <p className="font-[family-name:var(--font-serif)] text-3xl leading-tight">
              Follow the project on GitHub, or open an issue to flag a source
              that needs adding or a correction.
            </p>
            <div>
              <a
                href="https://github.com/trentwaskey/Plymouth-Brethren-Christian-Church"
                className="btn btn--on-dark"
                target="_blank"
                rel="noreferrer"
              >
                Contribute on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
