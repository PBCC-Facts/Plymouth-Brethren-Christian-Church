import Image from "next/image";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { GITHUB_URL } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";
import { ContactForm } from "@/components/site/ContactForm";

export const metadata = buildPageMetadata({
  topic: "Submit information",
  description:
    "Send a tip, documents, or your story to The Facts securely and anonymously. No account, no IP logging with your submission. For current and former Plymouth Brethren Christian Church members, and factual corrections from anyone.",
  slug: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Submit information", path: "/contact" },
        ])}
      />

      <section className="hero">
        <div className="site-container">
          <div className="intake-hero">
            <div className="intake-hero__intro">
              <p className="hero__eyebrow">Submit information</p>
              <h1 className="intake-hero__title">
                Tell us what you know. Anonymously.
              </h1>
              <p className="intake-hero__sub">
                This record grows by what members and ex-members send it. Use
                the form: no account, and you can stay anonymous.
              </p>
            </div>
            <Image
              src="/images/illustrations/document-through-wall.webp"
              alt="Hand-drawn marker illustration: through a gap in a heavy brick wall, one hand passes a folded document to a hand waiting on the other side."
              width={200}
              height={200}
              className="intake-hero__art"
              style={{ mixBlendMode: "multiply" }}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(2rem, 4vw, 3rem)" }}>
        <div className="site-container">
          <ContactForm />

          <div className="intake-other">
            <h2 className="section-label">Other ways to reach us</h2>
            <ul>
              <li>
                <strong>A public correction.</strong> Wrong fact or dead link?
                File it in the open on{" "}
                <a href={`${GITHUB_URL}/issues/new?labels=correction&title=Correction:+`} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                , with the fix visible in the edit history. This offer extends
                to the PBCC.
              </li>
              <li>
                <strong>An encrypted channel.</strong> For sources who will not
                use a web form (journalists, lawyers, at-risk members), a
                dedicated Signal or Proton channel is being stood up and will be
                published here.
              </li>
              <li>
                <strong>A specific document.</strong> See{" "}
                <Link href="/what-we-need">what we need</Link>: the exact
                records that would settle open questions about the money.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
