"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Streamlined intake form for /contact (GitHub #30). Anonymous by default.
 * Flow: fetch a signed time token on mount, strip EXIF from images in the
 * browser, upload each file to a per-submission signed URL, then post the
 * submission. On success the submitter gets a reference code (their only
 * handle for a later removal request).
 */

const KINDS = [
  { value: "tip", label: "A tip or lead" },
  { value: "evidence", label: "Documents or evidence" },
  { value: "story", label: "My story" },
  { value: "correction", label: "A correction to the site" },
  { value: "press", label: "Press / other" },
] as const;

const MAX_FILES = 5;
const MAX_FILE_BYTES = 25 * 1024 * 1024;
const IMAGE_REENCODE = new Set(["image/jpeg", "image/png"]);

type Status = "idle" | "submitting" | "done" | "error";

/** Re-encode JPEG/PNG through a canvas to drop EXIF (incl. GPS). Others pass through. */
async function stripImageMetadata(file: File): Promise<File> {
  if (!IMAGE_REENCODE.has(file.type)) return file;
  try {
    const bitmap = await createImageBitmap(file);
    const canvas = document.createElement("canvas");
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return file;
    ctx.drawImage(bitmap, 0, 0);
    bitmap.close();
    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, file.type, 0.92),
    );
    if (!blob) return file;
    return new File([blob], file.name, { type: file.type });
  } catch {
    return file; // never block a submission on a strip failure
  }
}

export function ContactForm() {
  const [token, setToken] = useState<string | null>(null);
  const [available, setAvailable] = useState<boolean | null>(null);
  const [kind, setKind] = useState<string>("tip");
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [refCode, setRefCode] = useState<string>("");
  const [error, setError] = useState<string>("");
  const submissionId = useRef<string>("");

  useEffect(() => {
    submissionId.current = crypto.randomUUID();
    fetch("/api/intake/prepare")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d: { token: string }) => {
        setToken(d.token);
        setAvailable(true);
      })
      .catch(() => setAvailable(false));
  }, []);

  function onPickFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const picked = Array.from(e.target.files ?? []);
    const next = [...files, ...picked]
      .filter((f) => f.size <= MAX_FILE_BYTES)
      .slice(0, MAX_FILES);
    setFiles(next);
    e.target.value = "";
  }

  function removeFile(i: number) {
    setFiles(files.filter((_, idx) => idx !== i));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!token) return;
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const message = String(data.get("message") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const website = String(data.get("website") ?? ""); // honeypot

    try {
      const attachmentPaths: string[] = [];
      for (const raw of files) {
        const file = await stripImageMetadata(raw);
        const signRes = await fetch("/api/intake/upload-url", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            submissionId: submissionId.current,
            filename: file.name,
            contentType: file.type || "application/octet-stream",
            size: file.size,
            token,
          }),
        });
        if (!signRes.ok) throw new Error("upload");
        const { uploadUrl, path } = (await signRes.json()) as {
          uploadUrl: string;
          path: string;
        };
        const put = await fetch(uploadUrl, {
          method: "PUT",
          headers: { "Content-Type": file.type || "application/octet-stream" },
          body: file,
        });
        if (!put.ok) throw new Error("upload");
        attachmentPaths.push(path);
      }

      const res = await fetch("/api/intake/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submissionId: submissionId.current,
          kind,
          message,
          contact,
          attachmentPaths,
          token,
          website,
        }),
      });
      if (!res.ok) throw new Error("submit");
      const { refCode } = (await res.json()) as { refCode: string };
      setRefCode(refCode);
      setStatus("done");
    } catch {
      setStatus("error");
      setError(
        "Something went wrong sending that. Nothing was saved. Please try again, or use one of the other channels below.",
      );
    }
  }

  if (available === false) {
    return (
      <div className="intake-card">
        <p className="text-[0.95rem] leading-[1.7]">
          The secure form is temporarily unavailable. Please use one of the
          other channels below to reach the editor.
        </p>
      </div>
    );
  }

  if (status === "done") {
    return (
      <div className="intake-card" role="status" aria-live="polite">
        <p className="section-label">Received.</p>
        <p className="text-[1rem] leading-[1.8]">
          Your reference code is <strong className="intake-ref">{refCode}</strong>.
          Save it. Quote it if you ever want your material removed. This is the
          only handle to your submission, and there is no way to look it up
          again.
        </p>
      </div>
    );
  }

  return (
    <form className="intake-card" onSubmit={onSubmit}>
      {/* Honeypot: hidden from humans, catnip for bots. */}
      <div aria-hidden="true" className="intake-hp">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="intake-field">
        <label htmlFor="kind">What are you sending</label>
        <select
          id="kind"
          name="kind"
          value={kind}
          onChange={(e) => setKind(e.target.value)}
        >
          {KINDS.map((k) => (
            <option key={k.value} value={k.value}>
              {k.label}
            </option>
          ))}
        </select>
      </div>

      <div className="intake-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={20000}
          placeholder="What do you know, and how do you know it? Dates, places, and the names of entities (not private members) help."
        />
      </div>

      <div className="intake-field">
        <label htmlFor="files">
          Attachments <span className="intake-optional">optional</span>
        </label>
        <input
          id="files"
          type="file"
          multiple
          onChange={onPickFiles}
          accept="image/*,application/pdf,audio/*,video/*,.doc,.docx,.xls,.xlsx,.txt"
        />
        <p className="intake-help">
          Up to {MAX_FILES} files, 25 MB each. Photos are stripped of location
          and camera metadata in your browser before upload. PDFs and documents
          may still carry author details.
        </p>
        {files.length > 0 && (
          <ul className="intake-files">
            {files.map((f, i) => (
              <li key={i}>
                <span>{f.name}</span>
                <button type="button" onClick={() => removeFile(i)} aria-label={`Remove ${f.name}`}>
                  remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="intake-field">
        <label htmlFor="contact">
          How can we reach you <span className="intake-optional">optional</span>
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          autoComplete="off"
          placeholder="Email or Signal, or leave blank to stay anonymous."
        />
        <p className="intake-help">
          Leaving this blank keeps you anonymous. Providing it lets the editor
          verify your account so it can carry the verified ex-member badge;
          verification details are never published.
        </p>
      </div>

      <button type="submit" className="btn" disabled={status === "submitting" || !token}>
        {status === "submitting" ? "Sending securely..." : "Send securely"}
      </button>

      {status === "error" && (
        <p className="intake-error" role="alert">
          {error}
        </p>
      )}

      <ul className="intake-promise">
        <li>
          No account, no login. The contact field is optional: leave it blank
          and you are anonymous.
        </li>
        <li>
          This form does not log your IP address or device with your
          submission.
        </li>
        <li>
          Only the editor can read submissions. Nothing is published as-is;
          anything used follows the verified ex-member rules and is removable
          on request.
        </li>
        <li>
          Current members: use a device the community did not supply.
          Church-managed devices may be filtered and monitored.
        </li>
      </ul>
    </form>
  );
}
