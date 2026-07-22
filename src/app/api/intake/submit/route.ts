import { NextRequest, NextResponse } from "next/server";
import {
  KINDS,
  MAX_FILES,
  type SubmissionKind,
  fillTimeIsHuman,
  insertSubmission,
  intakeConfigured,
  refCodeFor,
  sourceHash,
  underRateLimit,
  verifyFormToken,
} from "@/lib/intake";

// No-log zone: this handler must not record request metadata (no IP, no UA).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  if (!intakeConfigured()) {
    return NextResponse.json({ error: "unavailable" }, { status: 503 });
  }

  let body: {
    submissionId?: string;
    kind?: string;
    message?: string;
    contact?: string;
    followUpOk?: boolean;
    attachmentPaths?: string[];
    token?: string;
    website?: string; // honeypot; must be empty
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad-request" }, { status: 400 });
  }

  // 1. Honeypot: a filled hidden field means a bot. Accept silently, discard.
  if (body.website && body.website.trim() !== "") {
    return NextResponse.json({ ok: true, refCode: "0000-0000" });
  }

  // 2. Signed time token: valid signature, and slow enough to be a human.
  const token = verifyFormToken(body.token);
  if (!token.ok || !fillTimeIsHuman(token.ageMs)) {
    return NextResponse.json({ error: "token" }, { status: 403 });
  }

  // 3. Rate limit on a daily-salted hash of the IP (raw IP never stored).
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "0.0.0.0";
  if (!(await underRateLimit(sourceHash(ip)))) {
    return NextResponse.json({ error: "rate-limited" }, { status: 429 });
  }

  // 4. Validate payload.
  const kind = body.kind as SubmissionKind;
  const message = (body.message ?? "").trim();
  const submissionId = body.submissionId ?? "";
  if (!KINDS.includes(kind) || message.length < 1 || message.length > 20000) {
    return NextResponse.json({ error: "invalid" }, { status: 422 });
  }
  if (!/^[0-9a-f-]{36}$/i.test(submissionId)) {
    return NextResponse.json({ error: "invalid" }, { status: 422 });
  }
  const attachmentPaths = Array.isArray(body.attachmentPaths)
    ? body.attachmentPaths
        .filter((p) => typeof p === "string" && p.startsWith(`${submissionId}/`))
        .slice(0, MAX_FILES)
    : [];

  // Contact is required: the editor must be able to follow up and honour
  // removal requests. Anonymity is preserved by the submitter's choice of
  // channel (a Proton address, a Signal number), not by omitting it.
  const contact = body.contact?.trim().slice(0, 500) ?? "";
  if (contact.length < 1) {
    return NextResponse.json({ error: "contact-required" }, { status: 422 });
  }
  const followUpOk = body.followUpOk === true;

  const refCode = refCodeFor(submissionId);
  const ok = await insertSubmission({
    id: submissionId,
    kind,
    message,
    contact,
    follow_up_ok: followUpOk,
    attachment_paths: attachmentPaths,
    ref_code: refCode,
  });
  if (!ok) return NextResponse.json({ error: "store" }, { status: 502 });

  return NextResponse.json(
    { ok: true, refCode },
    { headers: { "Cache-Control": "no-store" } },
  );
}
