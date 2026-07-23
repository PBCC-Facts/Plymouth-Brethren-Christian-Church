import "server-only";

/**
 * Outbound notifications for contact intake. Fetch-based (no SDK), same
 * zero-dependency posture as src/lib/supabase.ts.
 *
 * Privacy invariants:
 *  - Team alerts (Slack + email) carry METADATA ONLY: kind, ref code,
 *    attachment count. Never the message body, never the contact detail.
 *    Email and Slack are third-party channels; submission content stays in
 *    Supabase behind the service role and is read there.
 *  - The submitter receipt goes only to a contact that is a plain email
 *    address, and only when the submitter ticked follow-up consent.
 *  - No tracking: Resend click/open tracking is off (never enabled on the
 *    sending domain), templates are plain text.
 *  - All senders fail silently. A notification failure must never surface
 *    to, block, or fail the submission itself.
 */

const RESEND_API_KEY = process.env.RESEND_API_KEY?.trim();
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL?.trim();
const NOTIFY_TO = process.env.INTAKE_NOTIFY_TO?.trim(); // comma-separated
const FROM =
  process.env.INTAKE_FROM_EMAIL?.trim() ||
  "The Facts <intake@mail.pbccfacts.com>";

const KIND_LABEL: Record<string, string> = {
  tip: "Tip",
  evidence: "Evidence",
  story: "Story",
  correction: "Correction",
  press: "Press enquiry",
};

export interface SubmissionAlert {
  kind: string;
  refCode: string;
  attachmentCount: number;
  followUpOk: boolean;
}

/** Fire all configured alerts; never throws, never blocks on failure. */
export async function notifySubmission(alert: SubmissionAlert): Promise<void> {
  await Promise.allSettled([slackAlert(alert), teamEmail(alert)]);
}

async function slackAlert(a: SubmissionAlert): Promise<void> {
  if (!SLACK_WEBHOOK_URL) return;
  const label = KIND_LABEL[a.kind] ?? a.kind;
  const files = a.attachmentCount
    ? ` · ${a.attachmentCount} attachment${a.attachmentCount === 1 ? "" : "s"}`
    : "";
  try {
    await fetch(SLACK_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `New contact submission: ${label} · ref ${a.refCode}${files}. Read it in Supabase (table: submissions).`,
      }),
    });
  } catch {
    // deliberate: alerts are best-effort
  }
}

async function teamEmail(a: SubmissionAlert): Promise<void> {
  if (!RESEND_API_KEY || !NOTIFY_TO) return;
  const label = KIND_LABEL[a.kind] ?? a.kind;
  const to = NOTIFY_TO.split(",").map((s) => s.trim()).filter(Boolean);
  if (to.length === 0) return;
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to,
        subject: `New submission: ${label} (ref ${a.refCode})`,
        text: [
          `A new ${label.toLowerCase()} was submitted via the contact form.`,
          "",
          `Reference: ${a.refCode}`,
          `Attachments: ${a.attachmentCount}`,
          `Follow-up consent: ${a.followUpOk ? "yes" : "no"}`,
          "",
          "The message and contact details are in Supabase (table: submissions).",
          "They are not included here by design.",
        ].join("\n"),
      }),
    });
  } catch {
    // deliberate: alerts are best-effort
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Plain-text receipt to the submitter. Sent only when they consented to
 * follow-up and their contact is an email address.
 */
export async function sendReceipt(opts: {
  contact: string;
  followUpOk: boolean;
  refCode: string;
}): Promise<void> {
  if (!RESEND_API_KEY) return;
  if (!opts.followUpOk) return;
  const to = opts.contact.trim();
  if (!EMAIL_RE.test(to)) return;
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [to],
        subject: `We received your submission (ref ${opts.refCode})`,
        text: [
          "Thank you. Your submission reached the editor.",
          "",
          `Your reference code is ${opts.refCode}. Keep it: quoting it lets you`,
          "ask at any time for your submission to be removed, no questions asked.",
          "",
          "Someone will reply if follow-up is needed. This inbox is monitored.",
          "",
          "The Facts",
          "https://pbccfacts.com/contact",
        ].join("\n"),
      }),
    });
  } catch {
    // deliberate: receipt is best-effort
  }
}
