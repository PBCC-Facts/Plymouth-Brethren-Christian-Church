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
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "The money", path: "/money" },
        ])}
      />

      <section className="hero">
        <div className="site-container hero__grid hero__grid--split">
          <div>
            <p className="hero__eyebrow">The money · in progress</p>
            <h1 className="hero__title">Follow the money.</h1>
            <p className="hero__sub">
              Cash in from members, rebates through the commercial arm, stakes
              in member companies, and the halls held by a global company.
              This page is being built to map every documented flow, entity by
              entity, with a citation on every arrow.
            </p>
          </div>
          <Image
            src="/images/illustrations/money-flow.webp"
            alt="Hand-drawn marker illustration: a row of small figures releases coins that flow upward along arrows into one large building with a coin slot in its roof."
            width={300}
            height={300}
            className="hero__art"
            style={{ mixBlendMode: "multiply" }}
            priority
          />
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <h2 className="section-label">What the record already shows</h2>

          <ul className="fact-list">
            <li>
              Members are required to give cash weekly
              <Footnote id="hales-rnz-moneygoround" n={1} />
            </li>
            <li>
              Donation amounts are &ldquo;suggested&rdquo; to members after
              annual turnover questionnaires
              <Footnote id="hales-rnz-moneygoround" n={1} />
            </li>
            <li>
              Member businesses route rebates through the church&rsquo;s
              commercial arm, Universal Business Team
              <Footnote id="hales-rnz-moneygoround" n={1} />
            </li>
            <li>
              Investment vehicles take controlling stakes in profitable member
              companies
              <Footnote id="hales-rnz-moneygoround" n={1} />
            </li>
            <li>
              A church endowment, the Vision Foundation, grew to £50 million by
              2024 in UK charity filings
              <Footnote id="vision-grace-trust-cc" n={2} />
            </li>
            <li>
              The Australian Taxation Office raided UBT&rsquo;s Sydney offices in
              March 2024, under its &ldquo;Private Wealth, Behaviours of
              Concern&rdquo; programme
              <Footnote id="ubt-atoraid-guardian-2024" n={3} />
            </li>
            <li>
              Companies supporting the church &ldquo;have amassed billions&rdquo;
              <Footnote id="bigbrethren-fourcorners-2025" n={4} />
            </li>
          </ul>

          <div className="max-w-prose space-y-4 text-[1rem] leading-[1.8] mt-10">
            <p>
              One insurance broker told RNZ the structure was &ldquo;almost like
              a legalised form of money laundering.&rdquo; That is the
              interviewee&rsquo;s characterisation, quoted by RNZ; this site
              documents the flows and lets the record speak.
            </p>
            <p>
              The full page will diagram four layers: weekly cash collections,
              the UBT commercial network, the Vision investment vehicles, and
              PBCC Properties Global Ltd. The working plan and the entity
              dataset are public in the repository:{" "}
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
        </div>
      </section>
    </>
  );
}
