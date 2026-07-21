import "server-only";
import { createHash, createHmac, timingSafeEqual } from "node:crypto";

/**
 * Server-only intake helpers for /contact (GitHub #30). All submission writes
 * and signed-upload minting use the service_role key and go through the route
 * handlers in src/app/api/intake. Nothing here is bundled to the client.
 *
 * Privacy invariants enforced in this module:
 *  - No IP address or user agent is ever persisted. The IP is used only,
 *    transiently, to derive a daily-salted rate-limit hash that is unlinkable
 *    once the salt rotates and is never written onto a submission row.
 *  - No request metadata is logged. Do not add console.* on the submit path.
 */

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
const TOKEN_SECRET = process.env.INTAKE_TOKEN_SECRET?.trim();

export const BUCKET = "submissions";
export const MAX_FILES = 5;
export const MAX_FILE_BYTES = 25 * 1024 * 1024; // 25 MB
export const RATE_LIMIT_PER_HOUR = 5;
const MIN_FILL_MS = 3000; // reject sub-3s "fills" (bots)
const MAX_TOKEN_AGE_MS = 2 * 60 * 60 * 1000; // token good for 2 hours

export const KINDS = ["tip", "evidence", "story", "correction", "press"] as const;
export type SubmissionKind = (typeof KINDS)[number];

export const ALLOWED_MIME = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/heic",
  "application/pdf",
  "audio/mpeg",
  "audio/mp4",
  "audio/x-m4a",
  "audio/wav",
  "video/mp4",
  "video/quicktime",
  "text/plain",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
]);

/** Enough config to issue signed tokens (the /prepare route). */
export function canIssueToken(): boolean {
  return Boolean(SUPABASE_URL && TOKEN_SECRET);
}

/** Full config for writing submissions and minting uploads (service role). */
export function intakeConfigured(): boolean {
  return Boolean(SUPABASE_URL && SERVICE_KEY && TOKEN_SECRET);
}

// --- signed time token -----------------------------------------------------

/** Issue a signed token stamping render time: `${ms}.${hmac}`. */
export function issueFormToken(): string {
  const ms = Date.now().toString();
  return `${ms}.${hmac(ms)}`;
}

type TokenCheck = { ok: true; ageMs: number } | { ok: false; reason: string };

/** Verify signature and return the token's age. */
export function verifyFormToken(token: string | undefined): TokenCheck {
  if (!token || !token.includes(".")) return { ok: false, reason: "missing" };
  const [ms, sig] = token.split(".");
  const expected = hmac(ms);
  if (
    sig.length !== expected.length ||
    !timingSafeEqual(Buffer.from(sig), Buffer.from(expected))
  ) {
    return { ok: false, reason: "bad-signature" };
  }
  const ageMs = Date.now() - Number(ms);
  if (!Number.isFinite(ageMs) || ageMs < 0 || ageMs > MAX_TOKEN_AGE_MS) {
    return { ok: false, reason: "expired" };
  }
  return { ok: true, ageMs };
}

/** True once enough time has passed that a human could plausibly have filled the form. */
export function fillTimeIsHuman(ageMs: number): boolean {
  return ageMs >= MIN_FILL_MS;
}

// --- rate limiting (no raw IP stored) --------------------------------------

/**
 * Derive the unlinkable rate-limit key from the request IP and a daily salt.
 * The raw IP never leaves this function.
 */
export function sourceHash(ip: string): string {
  const dailySalt = hmac(new Date().toISOString().slice(0, 10)); // YYYY-MM-DD
  return createHash("sha256").update(`${ip}:${dailySalt}`).digest("hex");
}

/** Increment the hourly bucket for this source; true if still under the cap. */
export async function underRateLimit(hash: string): Promise<boolean> {
  const bucketHour = new Date();
  bucketHour.setMinutes(0, 0, 0);
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/incr_rate_limit`, {
    method: "POST",
    headers: serviceHeaders({ json: true }),
    body: JSON.stringify({
      p_source_hash: hash,
      p_bucket_hour: bucketHour.toISOString(),
    }),
  });
  if (!res.ok) return true; // fail open: never block a real submitter on infra error
  const hits = (await res.json()) as number;
  return hits <= RATE_LIMIT_PER_HOUR;
}

// --- storage + insert ------------------------------------------------------

export function sanitizeFilename(name: string): string {
  const base = name.split(/[\\/]/).pop() ?? "file";
  const cleaned = base.replace(/[^a-zA-Z0-9._-]/g, "_").replace(/_{2,}/g, "_");
  return cleaned.slice(0, 100) || "file";
}

/** Mint a short-lived signed upload URL for one object in the private bucket. */
export async function signUpload(
  path: string,
): Promise<{ uploadUrl: string; path: string } | null> {
  const res = await fetch(
    `${SUPABASE_URL}/storage/v1/object/upload/sign/${BUCKET}/${path}`,
    { method: "POST", headers: serviceHeaders({ json: true }) },
  );
  if (!res.ok) return null;
  const { url } = (await res.json()) as { url: string };
  return { uploadUrl: `${SUPABASE_URL}/storage/v1${url}`, path };
}

/** 8-hex removal handle derived from the row id, formatted XXXX-XXXX. */
export function refCodeFor(id: string): string {
  const h = createHash("sha256").update(id).digest("hex").slice(0, 8).toUpperCase();
  return `${h.slice(0, 4)}-${h.slice(4)}`;
}

export async function insertSubmission(row: {
  id: string;
  kind: SubmissionKind;
  message: string;
  contact: string | null;
  attachment_paths: string[];
  ref_code: string;
}): Promise<boolean> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/submissions`, {
    method: "POST",
    headers: serviceHeaders({ json: true, prefer: "return=minimal" }),
    body: JSON.stringify(row),
  });
  return res.ok;
}

// --- internals -------------------------------------------------------------

function hmac(value: string): string {
  return createHmac("sha256", TOKEN_SECRET as string).update(value).digest("hex");
}

function serviceHeaders(opts: { json?: boolean; prefer?: string }): HeadersInit {
  const h: Record<string, string> = {
    apikey: SERVICE_KEY as string,
    Authorization: `Bearer ${SERVICE_KEY}`,
  };
  if (opts.json) h["Content-Type"] = "application/json";
  if (opts.prefer) h["Prefer"] = opts.prefer;
  return h;
}
