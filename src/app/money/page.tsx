import Link from "next/link";
import Image from "next/image";
import { Footnote } from "@/components/site/Footnote";
import { buildPageMetadata } from "@/lib/seo";
import { GITHUB_URL } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata = buildPageMetadata({
  topic: "The money",
  description:
    "How money moves through the Plymouth Brethren Christian Church: weekly cash collections, UBT rebates, the Vision investment vehicles, PBCC Properties Global Ltd, and what ex-members describe to reporters as a 'money-go-round'. Mapped, diagrammed, and sourced.",
  slug: "/money",
  cluster: "E",
  noindex: true,
});

export default function MoneyPage() {
  let n = 0;
  const nextN = () => ++n;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "The money", path: "/money" },
        ])}
      />

      <section className="hero">
        <div className="site-container hero__grid">
          <div>
            <p className="hero__eyebrow">The money · in progress</p>
            <h1 className="hero__title">Follow the money.</h1>
            <p className="hero__sub">
              Members give cash weekly. Member businesses route rebates
              through the church&rsquo;s commercial network. Investment
              vehicles take controlling stakes in member companies. A new
              global company now holds the meeting halls. This page is being
              built to map every documented flow, entity by entity, with a
              citation on every arrow.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="grid gap-10 md:grid-cols-[1fr_320px] md:items-start">
            <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8]">
              <h2 className="section-label">What the record already shows.</h2>
              <p>
                RNZ&rsquo;s 2022 investigation, built on ex-member accounts,
                describes what its sources call the church&rsquo;s
                &ldquo;money-go-round&rdquo;: congregational cash payments, an
                investment portfolio built under the church&rsquo;s Global
                Funding Team, and donation amounts &ldquo;suggested&rdquo; to
                members after annual turnover questionnaires
                <Footnote id="hales-rnz-moneygoround" n={nextN()} />. One
                insurance broker told RNZ the structure was &ldquo;almost like
                a legalised form of money laundering.&rdquo; That is the
                interviewee&rsquo;s characterisation, quoted by RNZ; this site
                documents the flows and lets the record speak.
              </p>
              <p>
                On 19 March 2024 the Australian Taxation Office raided the
                church&rsquo;s Universal Business Team offices in Sydney under
                its &ldquo;Private Wealth, Behaviours of Concern&rdquo;
                programme
                <Footnote id="ubt-atoraid-guardian-2024" n={nextN()} />. ABC
                Four Corners&rsquo; 2025 investigation charted how companies
                supporting the church &ldquo;have amassed billions&rdquo;
                <Footnote id="bigbrethren-fourcorners-2025" n={nextN()} />.
              </p>
              <p>
                The full page will diagram four layers: the collection layer
                (weekly cash), the commercial layer (UBT and member
                purchases), the investment layer (Vision Growth / Vision
                Accelerator), and the property layer (PBCC Properties Global
                Ltd). The working plan and the entity dataset are public in
                the repository:{" "}
                <a
                  href={`${GITHUB_URL}/blob/main/docs/MONEY.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  docs/MONEY.md
                </a>
                .
              </p>
              <p>
                <Link href="/what-we-need" className="btn">
                  Help document it &rarr;
                </Link>
              </p>
            </div>
            <Image
              src="/images/illustrations/money-flow.webp"
              alt="Hand-drawn marker illustration: a row of small figures releases coins that flow upward along arrows into one large building with a coin slot in its roof."
              width={320}
              height={320}
              className="hidden md:block"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
