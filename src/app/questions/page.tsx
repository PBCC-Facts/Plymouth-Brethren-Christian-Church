import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";
import { questionArticles } from "@/data/questions";
import { QUESTION_CATEGORIES } from "@/data/questions/types";
import { plainText } from "@/components/site/QuestionArticleView";
import { SITE_URL } from "@/lib/site";

export const metadata = buildPageMetadata({
  topic: "Common questions, answered from the public record",
  description: `${questionArticles.length} common questions about the Plymouth Brethren Christian Church (alcohol, marriage, television, leaving, leadership, money), each answered from cited public sources.`,
  slug: "/questions",
  cluster: "B",
  register: "explanatory",
});

export default function QuestionsHubPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Common questions about the Plymouth Brethren Christian Church",
          numberOfItems: questionArticles.length,
          itemListElement: questionArticles.map((a, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: a.question,
            url: new URL(`/questions/${a.slug}`, SITE_URL).toString(),
          })),
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Questions", path: "/questions" },
        ])}
      />

      <section className="hero">
        <div className="site-container hero__grid">
          <div>
            <p className="hero__eyebrow">Questions</p>
            <h1 className="hero__title">
              Common questions about the Plymouth Brethren Christian Church.
            </h1>
            <p className="hero__sub">
              Direct answers from the public record: the fellowship&rsquo;s own
              publications, investigative journalism, court and regulator
              findings, and on-record survivor testimony. Every claim carries
              its citation. If a question is missing,{" "}
              <Link href="/contact">ask for it</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container space-y-12">
          {QUESTION_CATEGORIES.map((cat) => {
            const items = questionArticles.filter((a) => a.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat}>
                <h2 className="section-label mb-4">{cat}</h2>
                <ul className="grid gap-x-10 gap-y-4 md:grid-cols-2">
                  {items.map((a) => (
                    <li key={a.slug} className="max-w-prose">
                      <Link
                        href={`/questions/${a.slug}`}
                        className="font-semibold underline underline-offset-2"
                      >
                        {a.question}
                      </Link>
                      <p className="text-sm opacity-80 mt-1 leading-[1.6]">
                        {plainText(a.shortAnswer).split(". ")[0]}.
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
