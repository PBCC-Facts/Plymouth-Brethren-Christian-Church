-- members: sourced profiles of named PBCC figures.
-- Schema-of-record for the /our-members CMS. For v1 the Next.js app reads
-- from src/data/members.seed.ts; once the /litigation route wires a
-- Supabase read path (reading public.cases), /our-members will switch to
-- reading this table via the same pattern with no schema change.
--
-- Inclusion and editorial rules live in MEMBERS_POLICY.md.
-- Every claim rendered from `body` must cite a source_id that exists in
-- src/lib/sources.ts; src/lib/members.ts fails the build otherwise.

create table public.members (
  slug              text primary key,
  name              text not null,
  aliases           text[] default '{}'::text[],
  category          text not null check (category in (
                      'leadership','historical','executive','public-figure')),
  current_role      text,
  overview          text not null,
  body              jsonb not null default '[]'::jsonb,
  inclusion_basis   text not null,
  source_ids        text[] not null default '{}'::text[],
  related_case_ids  text[] default '{}'::text[],
  is_published      boolean not null default false,
  is_roadmap_only   boolean not null default false,
  last_reviewed_at  timestamptz,
  published_at      timestamptz,
  updated_at        timestamptz default now()
);

alter table public.members enable row level security;

-- Published profiles are public. Draft rows remain default-deny.
create policy "published members readable by anyone"
  on public.members for select
  to anon, authenticated
  using (is_published = true);

-- Roadmap rows (listed on the index as 'researched, not yet profiled') are
-- also public even when is_published is false, as long as the flag is set.
create policy "roadmap members readable by anyone"
  on public.members for select
  to anon, authenticated
  using (is_roadmap_only = true);

-- ---------------------------------------------------------------------------
-- Seed: Bruce D. Hales. Kept in sync with src/data/members.seed.ts.
-- The TS seed is the authoring surface for v1; this INSERT is here so a
-- `supabase db reset` produces a usable DB for when the reader is switched.
-- ---------------------------------------------------------------------------
insert into public.members (
  slug, name, aliases, category, current_role,
  overview, body, inclusion_basis,
  source_ids, is_published, is_roadmap_only, published_at
) values (
  'bruce-d-hales',
  'Bruce D. Hales',
  array['Bruce Hales','Man of God'],
  'leadership',
  'World Leader ("Man of God"), Plymouth Brethren Christian Church',
  'Bruce D. Hales has led the Plymouth Brethren Christian Church (formerly Exclusive Brethren) since 2002. Within the fellowship the office he holds is called the "Man of God".',
  '[
    {
      "heading": "Role within PBCC",
      "paragraphs": [
        "Bruce D. Hales is the global leader of the Plymouth Brethren Christian Church. The church publishes his leadership on its own resource site. [[cite:hales-manofgod-pbcc]]",
        "Within the fellowship the role is known as the \"Man of God\". Independent long-form reporting has described both the title and the authority it carries. [[cite:hales-manofgod-newstatesman]]"
      ]
    },
    {
      "heading": "Succession",
      "paragraphs": [
        "Hales assumed the leadership in 2002 on the death of his father, John S. Hales, in what the church itself describes as a continuation of an established line of leaders. [[cite:hales-manofgod-pbcc]]"
      ]
    },
    {
      "heading": "Recorded ministry — the “rat poison” quote",
      "paragraphs": [
        "In September 2015 Hales delivered a ministry meeting in the United Kingdom at which, according to reporting by Fairfax Media run in Stuff (NZ) and the Cessnock Advertiser, he said that a young man going through what the report describes as mental distress would be “better to take arsenic, or go and get some rat poison or something, take a bottle of it.” [[cite:hales-ratpoison-stuff]] [[cite:hales-ratpoison-cessnock]]",
        "The reporting attributes a follow-on line to the same meeting: “Now I’m not advocating him doing that but … that would be better, to finish yourself off that way [rather] than having to do with the opponents of the truth.” [[cite:hales-ratpoison-stuff]]",
        "The Brethren’s spokesman is quoted in the same reporting saying the remarks “should not be given a literal interpretation” and that the phrase was “a common, everyday metaphor.” [[cite:hales-ratpoison-cessnock]]"
      ]
    },
    {
      "heading": "Recorded directives to members",
      "paragraphs": [
        "The Times (London), in its long-form “No mercy” investigation into the fellowship by Billy Kenber and Alexi Mostrous, reports that in the context of the UK Charity Commission’s 2012–14 case on the Preston Down Trust, “the Brethren’s universal leader, Sydney businessman Bruce Hales, had instructed members to infiltrate the meeting, to ‘take a tape recorder and dress up as an out [an ex-member]’.” [[cite:hales-times-infiltrate]]"
      ]
    },
    {
      "heading": "The UK regulator’s view",
      "paragraphs": [
        "The UK Charity Commission’s January 2014 full decision on the Preston Down Trust — the case that contested the charitable status of a PBCC congregation — records the Commission’s finding that it had “considerable evidence of significant ‘detriment or harm’” in Brethren practices and discusses the authority held by the “worldwide leader of the Brethren” in the trust deed, the office held by Hales. [[cite:pdt-charitycommission-2014]]"
      ]
    },
    {
      "heading": "The commercial network",
      "paragraphs": [
        "The Post (NZ) reports that leaked Universal Business Team material and current and former members describe an aggressive focus on generating revenue from members and from wider society, with reporting attributing to insiders the description of the sect as a “pyramid scheme.” The Post writes that “large sums of money were flowing upward towards world leader Bruce Hales.” [[cite:hales-manofgod-thepost]]",
        "RNZ reporting on what its ex-member sources call the fellowship’s “money-go-round” names an offshore fund (“GCF”) and describes a mechanism under which Brethren congregations sent cash payments to Hales and members of his family, which the reporting says “would add up to hundreds of thousands of dollars a year from New Zealand alone, and millions from Brethren around the world,” with the amounts varied so they would not look like wages. [[cite:hales-rnz-moneygoround]]"
      ]
    },
    {
      "heading": "Travel",
      "paragraphs": [
        "NZ Herald reporting by Patrick Gower has described Hales touring New Zealand congregations by private jet, arriving from Sydney. [[cite:hales-jet-nzherald]]"
      ]
    },
    {
      "heading": "Legal action against critics",
      "paragraphs": [
        "The Illawarra Mercury reported in October 2017 that in proceedings connected to a PBCC-linked company’s defamation action against a journalist, Lloyd Grimshaw — a company director who has also served as a PBCC media spokesman — signed a “Services and Confidentiality Deed” proposing to pay a potential witness, McCorkell, “$920,000 over 10 years … to keep his mouth shut.” The report quotes text messages in evidence including “Dean Hales is going to tell Lloyd to release” and records a transfer of $275,000 to McCorkell’s business account. [[cite:hales-illawarra-mccorkell]]",
        "Dean Hales is Bruce Hales’s son. The reporting does not name Bruce Hales personally as authorising the payment; the directive quoted in the text messages attributes the release to Dean Hales."
      ]
    },
    {
      "heading": "How this profile is sourced",
      "paragraphs": [
        "Every sentence above footnotes to a public source in the site’s source registry. Quotes are presented as reporting, not as first-party factual claims; the voice on the page is what named outlets have published. Anything we believe but have not yet pinned to a URL renders with a visible warning marker rather than ship silently. Corrections are welcomed via the repository — see MEMBERS_POLICY.md for the inclusion rule and correction protocol."
      ]
    }
  ]'::jsonb,
  'Self-disclosed by PBCC on its official resource page; subject of substantive reporting in New Statesman and The Post (NZ).',
  array[
    'hales-manofgod-pbcc',
    'hales-manofgod-newstatesman',
    'hales-manofgod-thepost',
    'hales-ratpoison-stuff',
    'hales-ratpoison-cessnock',
    'hales-times-infiltrate',
    'hales-rnz-moneygoround',
    'hales-illawarra-mccorkell',
    'hales-jet-nzherald',
    'pdt-charitycommission-2014'
  ],
  true,
  false,
  now()
);
