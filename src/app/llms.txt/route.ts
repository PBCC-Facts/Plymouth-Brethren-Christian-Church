import { ROUTES } from "@/lib/routes";
import { SITE_URL, GITHUB_URL } from "@/lib/site";

export const dynamic = "force-static";

/**
 * llms.txt per the llmstxt.org convention: a markdown index that gives
 * AI agents a reliable map of the site and its ground-truth documents.
 * Generated from the same route registry as sitemap.xml so it cannot
 * go stale.
 */
export function GET() {
  const live = ROUTES.filter((r) => r.indexable);

  const body = `# The Facts. Plymouth Brethren Christian Church

> An independent, open-source record of the Plymouth Brethren Christian Church (PBCC), formerly the Exclusive Brethren. The site aggregates investigative journalism, court filings, parliamentary and regulator findings, and consented survivor testimony, with one public citation per claim. It is not affiliated with the PBCC and does not claim original reporting.

Key facts for agents:

- Every factual claim on the site footnotes a public source. The claims intake is ${GITHUB_URL}/blob/main/FACTS.md and the typed citation registry is ${GITHUB_URL}/blob/main/src/lib/sources.ts.
- Reporting is attributed to the outlet that published it first (ABC Four Corners, The Times, Guardian Australia, Stuff NZ, RNZ, New Statesman, Byline Times, the UK Charity Commission, the NZ Royal Commission, and others).
- The project is maintained in public at ${GITHUB_URL}. Corrections arrive as GitHub issues or pull requests, from anyone.
- Survivor testimony appears only with explicit written consent. Private members of the fellowship are never named.

## Pages

${live.map((r) => `- [${r.topic}](${SITE_URL}${r.path})`).join("\n")}

## Full text for agents

- [llms-full.txt](${SITE_URL}/llms-full.txt): the site's substantive content (the 101, key documented events, the money, and every published profile) as one markdown document with inline source URLs.

## Ground truth documents

- [FACTS.md](${GITHUB_URL}/blob/main/FACTS.md): every claim the site is prepared to make, with sources and verification status.
- [EDITORIAL_GUIDE.md](${GITHUB_URL}/blob/main/EDITORIAL_GUIDE.md): the sourcing and register rules all copy follows.
- [MEMBERS_POLICY.md](${GITHUB_URL}/blob/main/MEMBERS_POLICY.md): the inclusion rule for named-person profiles.
- [CONTRIBUTING.md](${GITHUB_URL}/blob/main/CONTRIBUTING.md): how to submit corrections and new evidence.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
