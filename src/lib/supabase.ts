/**
 * Minimal server-side Supabase REST access. No client SDK: the public read
 * paths on this site are simple PostgREST GETs, and keeping the dependency
 * surface at zero matters more than an ORM. All access uses the publishable
 * key and therefore sees only what RLS exposes to `anon`.
 */

// .trim(): the values stored in Vercel carry a trailing newline.
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const SUPABASE_KEY = (
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)?.trim();

export interface InfoRequest {
  id: string;
  slug: string;
  title: string;
  body: string;
  category: "document" | "recording" | "testimony" | "record-lookup";
  priority: number;
  facts_ref: string | null;
  status: "open" | "partial" | "fulfilled" | "retired";
  created_at: string;
}

export interface Story {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  byline: string;
  is_pseudonym: boolean;
  published_at: string | null;
}

export interface StoriesPipeline {
  in_review: number;
  published: number;
}

/** Published stories only; RLS hides everything else from the anon key. */
export async function getPublishedStories(): Promise<Story[]> {
  if (!SUPABASE_URL || !SUPABASE_KEY) return [];
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/stories?select=slug,title,excerpt,body,byline,is_pseudonym,published_at&order=published_at.desc`,
      {
        headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
        next: { revalidate: 300 },
      },
    );
    if (!res.ok) return [];
    return (await res.json()) as Story[];
  } catch {
    return [];
  }
}

/** Aggregate pipeline counts (in-review vs published). Null on failure. */
export async function getStoriesPipeline(): Promise<StoriesPipeline | null> {
  if (!SUPABASE_URL || !SUPABASE_KEY) return null;
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/stories_pipeline?select=*`, {
      headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    const rows = (await res.json()) as StoriesPipeline[];
    return rows[0] ?? null;
  } catch {
    return null;
  }
}

/**
 * Fetch published information requests, highest priority first.
 * Returns [] when Supabase is unreachable or unconfigured, so the page
 * degrades to its static explainer instead of erroring.
 */
export async function getInfoRequests(): Promise<InfoRequest[]> {
  if (!SUPABASE_URL || !SUPABASE_KEY) return [];
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/info_requests?select=id,slug,title,body,category,priority,facts_ref,status,created_at&order=priority.asc,created_at.asc`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
        // ISR: refresh the list every 5 minutes without a redeploy.
        next: { revalidate: 300 },
      },
    );
    if (!res.ok) return [];
    return (await res.json()) as InfoRequest[];
  } catch {
    return [];
  }
}
