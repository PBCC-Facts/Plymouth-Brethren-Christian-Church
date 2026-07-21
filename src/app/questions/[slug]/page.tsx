import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo";
import {
  JsonLd,
  articleSchema,
  breadcrumbSchema,
} from "@/components/seo/JsonLd";
import { questionArticles, getQuestionArticle } from "@/data/questions";
import {
  QuestionArticleView,
  plainText,
} from "@/components/site/QuestionArticleView";

export const dynamicParams = false;

export function generateStaticParams() {
  return questionArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getQuestionArticle(slug);
  if (!article) return {};
  return buildPageMetadata({
    topic: article.question,
    description: article.metaDescription,
    slug: `/questions/${article.slug}`,
    cluster: "B",
    register: "explanatory",
  });
}

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getQuestionArticle(slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: article.question,
          description: article.metaDescription,
          slug: `/questions/${article.slug}`,
          datePublished: article.datePublished,
          dateModified: article.dateModified,
          register: "explanatory",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: article.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: plainText(article.shortAnswer),
              },
            },
          ],
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Questions", path: "/questions" },
          { name: article.question, path: `/questions/${article.slug}` },
        ])}
      />
      <QuestionArticleView article={article} />
    </>
  );
}
