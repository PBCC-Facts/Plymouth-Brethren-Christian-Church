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
      "heading": "Public record",
      "paragraphs": [
        "Reporting in The Post (NZ) has quoted leadership instructions delivered under Hales that direct members to generate commercial surplus for the community, citing recordings and member testimony. [[cite:hales-manofgod-thepost]]",
        "New Statesman''s 2023 long-read on the fellowship describes the authority structure under the current Man of God and the consequences of dissent for members inside it. [[cite:hales-manofgod-newstatesman]]"
      ]
    },
    {
      "heading": "How this profile is sourced",
      "paragraphs": [
        "Every sentence above footnotes to a public source in the site''s source registry. Any claim we believe but have not yet pinned to a URL would render with a visible warning marker; none appear on this page. Corrections are welcomed via the repository. See MEMBERS_POLICY.md for the inclusion rule and correction protocol."
      ]
    }
  ]'::jsonb,
  'Self-disclosed by PBCC on its official resource page; subject of substantive reporting in New Statesman and The Post (NZ).',
  array['hales-manofgod-pbcc','hales-manofgod-newstatesman','hales-manofgod-thepost'],
  true,
  false,
  now()
);
