-- Initial schema for the PBCC facts / parody site backend.
-- Schema is sourced from INFRASTRUCTURE.md § "Schema sketch".
-- RLS posture: private tables are default-deny (no policies); public
-- tables get explicit anon SELECT policies.

create extension if not exists "pgcrypto";
create extension if not exists "citext";

-- ---------------------------------------------------------------------------
-- submissions: tip / correction intake
-- ---------------------------------------------------------------------------
create table public.submissions (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  message text not null check (char_length(message) between 10 and 10000),
  context text,
  source_url text,
  affiliation text check (affiliation in ('ex-member','current-member','journalist','researcher','other')),
  ip_hash text,
  status text default 'new' check (status in ('new','acknowledged','resolved','spam')),
  created_at timestamptz default now()
);
alter table public.submissions enable row level security;
-- No policies -> default-deny for anon. Inserts must route through an
-- Edge Function or Route Handler using the service_role key.

-- ---------------------------------------------------------------------------
-- subscribers: newsletter (double opt-in)
-- ---------------------------------------------------------------------------
create table public.subscribers (
  email citext primary key,
  confirmed_at timestamptz,
  confirm_token text,
  unsubscribed_at timestamptz,
  created_at timestamptz default now()
);
alter table public.subscribers enable row level security;

-- ---------------------------------------------------------------------------
-- testimonies: survivor-story intake, moderated before any publish
-- ---------------------------------------------------------------------------
create table public.testimonies (
  id uuid primary key default gen_random_uuid(),
  submitter_email citext,
  body text not null,
  display_policy text not null check (display_policy in ('private','anonymous','first-name','attributed')),
  consent_version text not null,
  is_public boolean default false,
  moderated_at timestamptz,
  moderated_by uuid references auth.users(id),
  created_at timestamptz default now()
);
alter table public.testimonies enable row level security;

-- ---------------------------------------------------------------------------
-- cases: litigation tracker (public read)
-- ---------------------------------------------------------------------------
create table public.cases (
  slug text primary key,
  title text not null,
  jurisdiction text,
  status text,
  filed_at date,
  summary text,
  source_urls text[],
  updated_at timestamptz default now()
);
alter table public.cases enable row level security;
create policy "cases are readable by anyone"
  on public.cases for select
  to anon, authenticated
  using (true);

-- ---------------------------------------------------------------------------
-- rank_snapshots: SEO rank tracking (public read optional)
-- ---------------------------------------------------------------------------
create table public.rank_snapshots (
  id bigserial primary key,
  keyword text not null,
  cluster char(1),
  position int,
  engine text default 'google',
  captured_at timestamptz default now()
);
alter table public.rank_snapshots enable row level security;
create policy "rank snapshots are readable by anyone"
  on public.rank_snapshots for select
  to anon, authenticated
  using (true);
