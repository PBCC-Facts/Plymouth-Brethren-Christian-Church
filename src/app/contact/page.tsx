import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { getInfoRequests } from "@/lib/supabase";
import { GITHUB_URL } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata = buildPageMetadata({
  topic: "Contact",
  description:
    "How to reach the editor of The Facts: corrections, new evidence, confidential tips, and survivor stories about the Plymouth Brethren Christian Church. Journalists and researchers welcome.",
  slug: "/contact",
  noindex: true,
});

export const revalidate = 300;

export default async function ContactPage() {
  const requests = await getInfoRequests();
  const top = requests.filter((r) => r.status === "open").slice(0, 4);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <section className="hero">
        <div className="site-container hero__grid">
          <div>
            <p className="hero__eyebrow">Contact</p>
            <h1 className="hero__title">Reach the editor.</h1>
            <p className="hero__sub">
              Corrections, new evidence, tips, and testimony all make this
              record better. Choose the channel that matches how public you
              want to be. Contributor identities are never published without
              explicit written consent.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <h2 className="section-label">Channels.</h2>
          <ul className="grid gap-6 md:grid-cols-3">
            <li
              className="p-6"
              style={{ border: "1px solid var(--color-ink)" }}
            >
              <p className="record-row__outlet">Public · fastest</p>
              <h3 className="mt-2 font-[family-name:var(--font-serif)] text-xl">
                GitHub issues
              </h3>
              <p className="mt-2 text-sm leading-[1.7]">
                For factual corrections and new sourced facts. Public,
                trackable, and resolved in the open.
              </p>
              <p className="mt-4 text-sm">
                <a
                  href={`${GITHUB_URL}/issues/new?labels=correction&title=Correction:+`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  File a correction &rarr;
                </a>
                <br />
                <a
                  href={`${GITHUB_URL}/issues/new?labels=new-fact&title=New+fact:+`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Submit a new fact &rarr;
                </a>
              </p>
            </li>
            <li
              className="p-6"
              style={{ border: "1px solid var(--color-ink)" }}
            >
              <p className="record-row__outlet">Confidential</p>
              <h3 className="mt-2 font-[family-name:var(--font-serif)] text-xl">
                Direct to the editor
              </h3>
              <p className="mt-2 text-sm leading-[1.7]">
                For documents, recordings, and anything you do not want on
                the public record. Identity can be verified by the editor and
                withheld from the site. A dedicated encrypted channel is being
                set up; until it is announced here, open a GitHub issue asking
                for a private channel without including the material itself.
              </p>
            </li>
            <li
              className="p-6"
              style={{ border: "1px solid var(--color-ink)" }}
            >
              <p className="record-row__outlet">Survivor stories</p>
              <h3 className="mt-2 font-[family-name:var(--font-serif)] text-xl">
                The stories intake
              </h3>
              <p className="mt-2 text-sm leading-[1.7]">
                First-person testimony is published only with explicit
                written consent, reviewed by you before it ships, and
                removable on request.
              </p>
              <p className="mt-4 text-sm">
                <Link href="/stories">How stories are published &rarr;</Link>
              </p>
            </li>
          </ul>
          <p className="mt-8 max-w-prose text-sm leading-[1.7] opacity-80">
            If you are a current member: assume devices and accounts managed
            through the church&rsquo;s commercial network are filtered and may
            be monitored. Use a device the community did not supply.
          </p>
        </div>
      </section>

      {/* What we need. live preview from the database. */}
      <section
        className="section"
        style={{ background: "var(--color-ink)", color: "var(--color-surface)" }}
      >
        <div className="site-container">
          <h2
            className="section-label"
            style={{ color: "var(--color-surface)" }}
          >
            What we need right now.
          </h2>
          <p className="max-w-prose text-[1rem] leading-[1.8]" style={{ opacity: 0.85 }}>
            The project keeps a public list of the specific documents,
            recordings, and first-hand accounts that would move reported
            claims to documented record.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {top.map((r) => (
              <li key={r.slug}>
                <Link href={`/what-we-need#${r.slug}`} className="open-card">
                  <p className="open-card__eyebrow">
                    {r.category.replace("-", " ")}
                  </p>
                  <p className="open-card__title">{r.title}</p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link href="/what-we-need" className="btn btn--on-dark">
              See the full list &rarr;
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
