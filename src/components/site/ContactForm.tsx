"use client";

import { useEffect, useRef, useState } from "react";
import PhoneInput, {
  isValidPhoneNumber,
  type Flags,
} from "react-phone-number-input";
import * as flagComponents from "country-flag-icons/react/3x2";
import "react-phone-number-input/style.css";

// Bundle flags locally (no external CDN calls on an anonymity-sensitive page).
const flags = flagComponents as unknown as Flags;

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
type ContactMethod = "email" | "phone";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  const [contactMethod, setContactMethod] = useState<ContactMethod>("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [followUpOk, setFollowUpOk] = useState(true);
  const [contactError, setContactError] = useState("");
  const submissionId = useRef<string>("");

  function pickMethod(method: ContactMethod) {
    setContactMethod(method);
    setContactError("");
  }

  /** Validate the required contact and return the value to store, or an error. */
  function resolveContact(): { value: string } | { error: string } {
    if (contactMethod === "email") {
      if (!email.trim()) {
        return { error: "Add an email so the editor can follow up. A Proton or Tutanota address keeps you anonymous." };
      }
      if (!EMAIL_RE.test(email.trim())) {
        return { error: "Enter a valid email address." };
      }
      return { value: email.trim() };
    }
    if (!phone) {
      return { error: "Add a phone or Signal number so the editor can follow up. A number not tied to your name keeps you anonymous." };
    }
    if (!isValidPhoneNumber(phone)) {
      return { error: "Enter a valid phone number." };
    }
    return { value: phone };
  }

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

    const data = new FormData(e.currentTarget);
    const message = String(data.get("message") ?? "").trim();
    const website = String(data.get("website") ?? ""); // honeypot

    const resolved = resolveContact();
    if ("error" in resolved) {
      setContactError(resolved.error);
      return;
    }
    const contact = resolved.value;

    setStatus("submitting");
    setError("");
    setContactError("");

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
          followUpOk,
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
        <label id="contact-label">How to reach you</label>
        <div className="intake-toggle" role="group" aria-labelledby="contact-label">
          <button
            type="button"
            className="intake-toggle__btn"
            aria-pressed={contactMethod === "email"}
            onClick={() => pickMethod("email")}
          >
            Email
          </button>
          <button
            type="button"
            className="intake-toggle__btn"
            aria-pressed={contactMethod === "phone"}
            onClick={() => pickMethod("phone")}
          >
            Phone
          </button>
        </div>

        {contactMethod === "email" && (
          <input
            type="email"
            inputMode="email"
            autoComplete="off"
            aria-label="Email address"
            aria-invalid={Boolean(contactError)}
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setContactError("");
            }}
          />
        )}

        {contactMethod === "phone" && (
          <PhoneInput
            international
            flags={flags}
            defaultCountry="AU"
            aria-label="Phone number"
            placeholder="Enter phone number"
            value={phone}
            onChange={(v) => {
              setPhone(v);
              setContactError("");
            }}
          />
        )}

        <p className="intake-help">
          Required, so the editor can follow up and so you can have your
          material removed later. To stay anonymous, use an address or number
          not tied to your name: a Proton or Tutanota email, or a Signal
          number. It is never published, and enables the verified ex-member
          badge.
        </p>
        {contactError && (
          <p className="intake-error" role="alert">
            {contactError}
          </p>
        )}

        <label className="intake-check">
          <input
            type="checkbox"
            checked={followUpOk}
            onChange={(e) => setFollowUpOk(e.target.checked)}
          />
          <span>
            The editor can contact me with follow-up questions about this
            submission.
          </span>
        </label>
      </div>

      <button type="submit" className="btn" disabled={status === "submitting" || !token}>
        {status === "submitting" ? "Sending securely..." : "Send securely"}
      </button>

      {status === "error" && (
        <p className="intake-error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
