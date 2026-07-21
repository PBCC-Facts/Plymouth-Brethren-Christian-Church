/**
 * The question library. One data file per article, rendered at
 * /questions/[slug] by QuestionArticleView. See docs/QUESTIONS_SPEC.md.
 *
 * Paragraph strings support three inline markers:
 *   {{cite:source-id}}     numbered Footnote. Resolves against the article's
 *                          own `sources` block first, then src/lib/sources.ts.
 *                          Unknown ids throw at render time.
 *   {{pending:short note}} visible SourcePending marker for claims that are
 *                          true but not yet pinned to a public URL.
 *   [[/path|link text]]    internal link.
 *
 * No raw HTML, no markdown, no em-dashes (EDITORIAL_GUIDE.md §1.8).
 */

export const QUESTION_CATEGORIES = [
  "Everyday life",
  "Clothing & appearance",
  "Marriage & family",
  "Beliefs & practice",
  "Education & work",
  "Leadership & organisation",
  "Leaving & shunning",
  "Money & institutions",
  "History & identity",
] as const;

export type QuestionCategory = (typeof QUESTION_CATEGORIES)[number];

/** Same shape as src/lib/sources.ts entries, minus the redundant id field. */
export type ArticleSource = {
  label: string;
  url: string;
  accessedOn: string;
  notes?: string;
};

export type QuestionSection = {
  /** H2. Carry a secondary keyword where natural. */
  heading: string;
  paragraphs: string[];
};

export type QuestionArticle = {
  /** URL slug, mirrors the query: "can-plymouth-brethren-drink-alcohol". */
  slug: string;
  /** The H1, phrased exactly as people search it, with the question mark. */
  question: string;
  /** Page-specific sentence for the meta description formula. */
  metaDescription: string;
  category: QuestionCategory;
  /** ISO dates. */
  datePublished: string;
  dateModified: string;
  /**
   * 40-70 words. A direct, cited answer to the question. Rendered in the
   * callout box and (marker-stripped) as the FAQPage schema answerText.
   */
  shortAnswer: string;
  /** 3-5 sections. */
  sections: QuestionSection[];
  /** 3-5 internal links for the RelatedReading block. */
  related: { href: string; label: string }[];
  /** Article-local sources. Local ids shadow global ids on collision. */
  sources?: Record<string, ArticleSource>;
};
