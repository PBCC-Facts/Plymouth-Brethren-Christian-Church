import { NextRequest, NextResponse } from "next/server";
import {
  ALLOWED_MIME,
  MAX_FILE_BYTES,
  intakeConfigured,
  sanitizeFilename,
  signUpload,
  verifyFormToken,
} from "@/lib/intake";

// No-log zone: this handler must not record request metadata.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Mints a short-lived signed upload URL for one attachment. The client
 * generates the submission id up front and uploads each file under
 * `submissions/<id>/<sanitized-filename>`, then passes the paths to /submit.
 */
export async function POST(req: NextRequest) {
  if (!intakeConfigured()) {
    return NextResponse.json({ error: "unavailable" }, { status: 503 });
  }

  let body: {
    submissionId?: string;
    filename?: string;
    contentType?: string;
    size?: number;
    token?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad-request" }, { status: 400 });
  }

  const token = verifyFormToken(body.token);
  if (!token.ok) return NextResponse.json({ error: "token" }, { status: 403 });

  const { submissionId, filename, contentType, size } = body;
  if (
    !submissionId ||
    !/^[0-9a-f-]{36}$/i.test(submissionId) ||
    !filename ||
    typeof size !== "number"
  ) {
    return NextResponse.json({ error: "bad-request" }, { status: 400 });
  }
  if (size <= 0 || size > MAX_FILE_BYTES) {
    return NextResponse.json({ error: "too-large" }, { status: 413 });
  }
  if (!contentType || !ALLOWED_MIME.has(contentType)) {
    return NextResponse.json({ error: "type" }, { status: 415 });
  }

  const path = `${submissionId}/${sanitizeFilename(filename)}`;
  const signed = await signUpload(path);
  if (!signed) return NextResponse.json({ error: "sign" }, { status: 502 });

  return NextResponse.json(
    { uploadUrl: signed.uploadUrl, path: signed.path },
    { headers: { "Cache-Control": "no-store" } },
  );
}
