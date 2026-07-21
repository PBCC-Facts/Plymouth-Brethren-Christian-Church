import { NextResponse } from "next/server";
import { canIssueToken, issueFormToken } from "@/lib/intake";

// No-log zone: this handler must not record request metadata.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Issues the signed time token the form needs before it can submit. */
export function GET() {
  if (!canIssueToken()) {
    return NextResponse.json({ configured: false }, { status: 503 });
  }
  return NextResponse.json(
    { configured: true, token: issueFormToken() },
    { headers: { "Cache-Control": "no-store" } },
  );
}
