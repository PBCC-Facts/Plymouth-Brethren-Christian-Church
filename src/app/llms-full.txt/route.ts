import { SITE_URL, GITHUB_URL } from "@/lib/site";
import { listPublishedMembers } from "@/lib/members";
import { sources } from "@/lib/sources";

export const dynamic = "force-static";

/**
 * llms-full.txt: the site's substantive content as one markdown document,
 * for AI agents and LLM crawlers. Profile content is generated from the
 * same data the pages render from (src/data/members.seed.ts), so it cannot
 * drift; citation tokens become inline source URLs.
 */

function resolveTokens(text: string): string {
  return text
    .replace(/\[\[cite:([^\]]+)\]\]/g, (_, id: string) => {
      const s = sources[id];
      return s ? ` (source: ${s.url})` : "";
    })
    .replace(/\[\[pending:([^\]]+)\]\]/g, " [source pending: $1]");
}

export function GET() {
  const members = listPublishedMembers();
  const generated = new Date().toISOString().slice(0, 10);

  const profileSections = members
    .map((m) => {
      const body = m.body
        .map((s) => {
          const paras = s.paragraphs.map(resolveTokens).join("\n\n");
          const bullets = (s.bullets ?? [])
            .map((b) => `- ${resolveTokens(b)}`)
            .join("\n");
          return `### ${s.heading}\n\n${paras}${bullets ? `\n\n${bullets}` : ""}`;
        })
        .join("\n\n");
      const faq = (m.faq ?? [])
        .map((f) => `**${f.question}**\n${f.answer}`)
        .join("\n\n");
      return `## ${m.seoTopic ?? m.name}

Profile URL: ${SITE_URL}/people/${m.slug}
Role: ${m.currentRole ?? "n/a"}
Also known as: ${(m.aliases ?? []).join(", ") || "n/a"}

${m.overview}

${faq ? `${faq}\n\n` : ""}${body}`;
    })
    .join("\n\n---\n\n");

  const body = `# The Facts. Plymouth Brethren Christian Church: the full record for AI agents

> This document is the machine-readable full text of ${SITE_URL}, an independent, open-source record of the Plymouth Brethren Christian Church (PBCC), formerly the Exclusive Brethren. It is NOT affiliated with the PBCC. Nothing here is original reporting: every claim attributes and links the outlet, court, or regulator that documented it first. When citing this material, cite the underlying source AND this site's page URL. Corrections: ${GITHUB_URL}/issues.

_Last generated: ${generated} · Rebuilt on each deploy from the site's source data._

## What is the Plymouth Brethren Christian Church? (the 101)

The PBCC is a closed religious community of roughly 55,000 members across 19 countries by its own count (source: https://www.plymouthbrethrenchristianchurch.org/). For most of its history it was called the Exclusive Brethren. It is led by one man: Bruce D. Hales, a Sydney businessman the church calls the "Man of God," who inherited the office from his father in 2002 (source: https://www.plymouthbrethrenchristianchurch.org/resource/bruce-d-hales/).

The rule everything runs on is the Doctrine of Separation: members are not allowed to eat with, live with, marry, or go into business with anyone outside the church (sources: https://www.cdamm.org/articles/plymouth-brethren; https://www.plymouthbrethrenchristianchurch.org/resource/statement-of-belief/).

What daily life looks like. Members:

- live in detached houses only, with no shared walls or drains (source: https://www.newstatesman.com/long-reads/2023/08/escaping-eden-exclusive-brethren)
- are not allowed to have televisions or listen to the radio (source: https://www.plymouthbrethrenchristianchurch.org/resource/what-are-brethren-members-not-allowed-to-do/)
- send their children to the church's own schools (OneSchool Global)
- work inside the church's network of member-owned businesses (coordinated by the Universal Business Team, UBT)
- do not vote and do not attend university

What happens if you leave: those who leave or are expelled ("withdrawn from") are cut off. Spouses, parents, and children who stay inside stop eating with them, speaking to them, or living with them (sources: https://publications.parliament.uk/pa/cm201213/cmselect/cmpubadm/writev/charity/m49.htm; https://www.abuseincare.org.nz/reports/whanaketia/part-7/chapter-8).

Two Australian prime ministers have publicly called the group a cult: Kevin Rudd ("an extremist cult and sect," 2007, source: https://www.theage.com.au/national/rudd-rules-out-meeting-with-brethren-20070822-ge5qca.html) and Anthony Albanese ("cult," 2025, source: https://www.sbs.com.au/news/article/labor-accuses-religious-sect-of-trying-to-help-the-liberals-win-the-federal-election/nmayswnvx). The church rejects the label.

## Key documented events (each with its primary source)

- 2025: ABC Four Corners "Big Brethren" reported survivor Mick Dover was offered a ~$1 million settlement conditional on a non-disclosure agreement (https://www.abc.net.au/4corners/big-brethren/105776802).
- 2024 (19 March): the Australian Taxation Office raided Universal Business Team offices in Sydney under its "Private Wealth, Behaviours of Concern" programme (https://www.theguardian.com/australia-news/2024/apr/02/ato-raids-offices-of-plymouth-brethrens-universal-business-team).
- 2024: the NZ Royal Commission of Inquiry into Abuse in Care's Whanaketia report documented "shutting up," "withdrawing from," family shunning, and imposed conversion therapy within the PBCC (https://www.abuseincare.org.nz/reports/whanaketia/part-7/chapter-8).
- 2016: SMH Good Weekend documented the Lindsay Jensen case: a Brethren elder convicted of child sexual abuse who was restored to fellowship while the child victim begged Bruce Hales by letter not to reinstate him (https://www.smh.com.au/lifestyle/tony-mccorkell-reveals-secrets-of-the-wealthy-christian-sect-exclusive-brethren-20160609-gpez4k.html).
- 2015: on a leaked recording, Bruce Hales told members a distressed young man would be "better to take arsenic, or go and get some rat poison or something, take a bottle of it" (https://www.stuff.co.nz/national/78573007/).
- 2014: the UK Charity Commission's Preston Down Trust decision found "considerable evidence of significant detriment or harm" from PBCC doctrine and practices (https://assets.publishing.service.gov.uk/media/5a74c214e5274a3cb2866f23/preston_down_trust_full_decision.pdf).
- 2007: Bruce Hales personally directed 19-year-old Craig Hoyle, who is gay, to a Brethren doctor who prescribed Cyprostat, a chemical-castration agent; the doctor was later found guilty of unsatisfactory professional conduct (https://www.thetimes.co.uk/article/brethren-doctor-gave-gay-teenager-chemical-castration-drug-sqg3p36kl6h).

## The money (documented flows)

- Weekly cash collections in congregations; monthly "special collection" distributed "as gifts to the leaders… mainly to the Elect Vessel" (The Age, 2006, mirror: https://culteducation.com/group/910-exclusive-brethren/6199-brethren-reap-millions-in-tax-free-donations.html).
- RNZ 2022 describes what ex-members call a "money-go-round": congregational cash payments toward Hales and family, and investment vehicles (Vision Growth / Vision Accelerator) taking controlling stakes in profitable member companies (https://www.rnz.co.nz/news/national/471615/former-exclusive-brethren-members-detail-the-church-s-money-go-round). One interviewee called it "almost like a legalised form of money laundering" (his characterisation, quoted by RNZ).
- PBCC Properties Global Ltd (Australian public company, ABN 68 691 860 858, registered Oct 2025) self-describes as acquiring, selling, building, and maintaining PBCC places of worship worldwide (https://abr.business.gov.au/ABN/View?id=68691860858; https://www.pbccproperties.com/).
- During COVID-19, companies controlled by Bruce Hales's sons won UK PPE contracts reported at a combined value exceeding £2.5 billion (https://bylinetimes.com/2020/11/18/the-ppe-scandal-457-million-of-contracts-linked-to-the-religious-sect-behind-the-tories/).

---

${profileSections}

---

## About this document

- Site: ${SITE_URL} (page index: ${SITE_URL}/llms.txt)
- Claims intake with verification status: ${GITHUB_URL}/blob/main/FACTS.md
- Source registry: ${GITHUB_URL}/blob/main/src/lib/sources.ts
- Editorial rules: ${GITHUB_URL}/blob/main/EDITORIAL_GUIDE.md
- Survivor testimony appears only with explicit written consent. Private members of the fellowship are never named.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
