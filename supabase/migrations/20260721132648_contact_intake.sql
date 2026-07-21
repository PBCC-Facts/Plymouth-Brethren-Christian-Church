-- Contact intake rebuild (GitHub #30).
-- Reshapes the tip/evidence intake around the streamlined /contact form:
-- anonymous by default, attachments in a private bucket, no IP/UA persisted.
--
-- RLS posture: default-deny everywhere. Nothing here is reachable with the
-- anon (publishable) key. All writes route through the server handler in
-- src/app/api/intake/*, which uses the service_role key. This is deliberately
-- stronger than an anon INSERT policy: it means the bot-protection checks
-- (honeypot, signed time token, rate limit) cannot be bypassed by posting
-- straight to PostgREST.

-- The v1 submissions table (public.submissions from the init migration) had
-- name/email/ip_hash columns that contradict the anonymity promise on the new
-- /contact page. It has never held a row in production. Replace it wholesale.
drop table if exists public.submissions cascade;

create table public.submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  -- what the submitter said they are sending
  kind text not null check (kind in ('tip','evidence','story','correction','press')),
  message text not null check (char_length(message) between 1 and 20000),
  -- optional; blank means the submitter chose to stay anonymous
  contact text,
  -- storage paths under the private `submissions` bucket, set by the handler
  attachment_paths text[] not null default '{}',
  -- 8-hex handle shown to the submitter; the only key an anonymous person has
  -- for a later removal request
  ref_code text not null unique,
  triage_status text not null default 'new'
    check (triage_status in ('new','reviewed','archived'))
  -- NOTE: no ip, no user_agent, no headers. Ever.
);
alter table public.submissions enable row level security;
-- No policies -> default-deny for anon and authenticated. Service role bypasses RLS.

-- Rate limiting for the intake handler. The handler computes
-- sha256(ip + daily_rotating_salt) and counts submissions per hour bucket.
-- The raw IP is never stored; once the daily salt rotates the hash is
-- unlinkable, which keeps the "we do not log IP addresses" promise true. The
-- hash is never written onto a submissions row.
create table public.rate_limits (
  source_hash text not null,
  bucket_hour timestamptz not null,
  hits int not null default 1,
  primary key (source_hash, bucket_hour)
);
alter table public.rate_limits enable row level security;
-- No policies -> service-role only.

-- Atomically bump the hourly bucket for a source hash and return the new
-- count. security definer so the intake handler can call it via the anon
-- PostgREST rpc path if ever needed; today it is called with service role.
create or replace function public.incr_rate_limit(p_source_hash text, p_bucket_hour timestamptz)
returns int
language plpgsql
security definer
set search_path = public
as $$
declare
  v_hits int;
begin
  insert into public.rate_limits (source_hash, bucket_hour, hits)
  values (p_source_hash, p_bucket_hour, 1)
  on conflict (source_hash, bucket_hour)
    do update set hits = public.rate_limits.hits + 1
  returning hits into v_hits;
  return v_hits;
end;
$$;
revoke all on function public.incr_rate_limit(text, timestamptz) from anon, authenticated;

-- Purge rate-limit rows older than a day (belt-and-braces; the salt already
-- makes them meaningless). Called by the scheduled job / cron.
create or replace function public.purge_rate_limits()
returns void
language sql
security definer
set search_path = public
as $$
  delete from public.rate_limits where bucket_hour < now() - interval '24 hours';
$$;

-- Private attachment bucket. Not public; no storage RLS policies are created,
-- so anon/authenticated cannot list, read, or upload. The handler mints
-- short-lived signed upload URLs with the service role.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'submissions',
  'submissions',
  false,
  26214400, -- 25 MB
  null      -- mime allow-list is enforced in the handler, not the bucket
)
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit;
