import Link from "next/link";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";
import { GITHUB_URL } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata = buildPageMetadata({
  topic: "Get in touch",
  description:
    "How to contact The Facts safely: confidential tips from current and former Plymouth Brethren Christian Church members, survivor stories, and factual corrections from anyone, including the church.",
  slug: "/contact",
  noindex: true,
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Get in touch", path: "/contact" },
        ])}
      />

      <section className="hero">
        <div className="site-container hero__grid">
          <div>
            <p className="hero__eyebrow">Get in touch</p>
            <h1 className="hero__title">
              This record grows by what people send it.
            </h1>
            <p className="hero__sub">
              Whether you are still inside, recently out, or just spotted a
              mistake: what you know matters here. Your identity is never
              published without your explicit written consent, and factual
              corrections are welcome from anyone, including the church.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="grid gap-12 md:grid-cols-[1fr_300px] md:items-start">
            <div className="max-w-prose space-y-8 text-[1rem] leading-[1.8]">
              <div>
                <h2 className="section-label">If you are inside, or just out.</h2>
                <p>
                  You are the person this page is for, and your safety comes
                  before anything this site wants to publish.
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-2">
                  <li>
                    Use a device and account the community did not supply.
                    Devices managed through the church&rsquo;s commercial
                    network are filtered and may be monitored.
                  </li>
                  <li>
                    You can stay anonymous. The editor can verify who you are
                    and still keep your name entirely off the site.
                  </li>
                  <li>
                    Anything you share can be used quietly, held back, or
                    deleted at your request. Nothing is published without
                    your written consent.
                  </li>
                </ul>
                <p className="mt-3">
                  A dedicated encrypted channel is being set up and will be
                  announced here. Until then, open a{" "}
                  <a
                    href={`${GITHUB_URL}/issues/new?title=Private+channel+request`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    private-channel request on GitHub
                  </a>{" "}
                  without including anything sensitive, and the conversation
                  moves somewhere safe from there.
                </p>
              </div>

              <div>
                <h2 className="section-label">If you spotted an error.</h2>
                <p>
                  This site wants to be corrected. A factual mistake, a dead
                  link, a claim that overreaches its source: file it and it
                  gets fixed in the open, with the change visible in the
                  public edit history. That offer extends to the PBCC itself.
                </p>
                <p className="mt-3">
                  <a
                    href={`${GITHUB_URL}/issues/new?labels=correction&title=Correction:+`}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    File a correction
                  </a>
                </p>
              </div>
            </div>

            <Image
              src="/images/illustrations/reaching-hands.webp"
              alt="Hand-drawn marker illustration: two hands reach toward each other across a wide gap, fingertips almost touching, a small envelope floating between them."
              width={300}
              height={300}
              className="hidden md:block"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--color-ink)", color: "var(--color-surface)" }}
      >
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-2">
            <Link href="/what-we-need" className="open-card">
              <p className="open-card__eyebrow">Know something specific?</p>
              <p className="open-card__title">What we need &rarr;</p>
              <p className="open-card__body">
                The public list of documents, recordings, and first-hand
                accounts that would settle open questions. See if you
                recognise something.
              </p>
            </Link>
            <Link href="/stories" className="open-card">
              <p className="open-card__eyebrow">Have a story to tell?</p>
              <p className="open-card__title">Stories &rarr;</p>
              <p className="open-card__body">
                First-person testimony, published only with your written
                consent, reviewed by you before it ships, removable whenever
                you say.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
