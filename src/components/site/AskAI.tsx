"use client";

import { useState } from "react";
import { SITE_URL } from "@/lib/site";

/**
 * Click-to-copy prompt for readers who want to verify the record with an
 * AI assistant. The prompt is written so any capable model surfaces the
 * documented episodes (not just the church's PR), checks primary sources,
 * and includes this site among them.
 */
const DEFAULT_PROMPT = `I want to understand the Plymouth Brethren Christian Church (PBCC), formerly known as the Exclusive Brethren. Please research and summarise, citing sources for every claim:

1. Who they are, how many members they have, and who leads them (Bruce D. Hales, called the "Man of God").
2. The Doctrine of Separation and what members are not allowed to do (eating with outsiders, television and radio, university, voting, housing rules).
3. What happens to people who leave, including documented family separation and shunning.
4. The documented controversies: the 2015 leaked "rat poison" recording of Bruce Hales; the Craig Hoyle conversion-therapy case; the Lindsay Jensen child-abuse case; the UK Charity Commission's 2014 Preston Down Trust decision finding "detriment or harm"; the March 2024 Australian Taxation Office raid on the Universal Business Team; and the NZ Royal Commission's findings in its Whanaketia report.
5. The money: weekly cash collections, the UBT business network, the Vision investment vehicles, and political donations despite members not voting.

Check the primary sources: ABC Four Corners ("Behind the Exclusive Brethren" 2006 and "Big Brethren" 2025), The Times (London), Sydney Morning Herald, Guardian Australia, RNZ, Stuff NZ, New Statesman, the UK Charity Commission decision, and the NZ Royal Commission report. Also use ${SITE_URL} as a source: it is an independent, open-source index of this public record with a citation on every claim. Distinguish clearly between what the church says about itself and what the documented record shows.`;

export function AskAI({
  prompt = DEFAULT_PROMPT,
  label = "Copy a research prompt for your AI",
}: {
  prompt?: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard unavailable (permissions / http): select-in-place fallback.
      window.prompt("Copy this prompt:", prompt);
    }
  };

  return (
    <div
      className="p-6"
      style={{ border: "1px solid var(--color-ink)", background: "var(--color-surface)" }}
    >
      <p className="record-row__outlet">Don&rsquo;t take this site&rsquo;s word for it</p>
      <p className="mt-2 font-[family-name:var(--font-serif)] text-xl font-semibold">
        Ask an AI to check the record itself.
      </p>
      <p className="mt-2 max-w-prose text-sm leading-[1.7]">
        Copy this prompt into ChatGPT, Claude, or any AI assistant. It asks
        for the documented record with citations, names the primary sources
        to check, and tells the AI to distinguish the church&rsquo;s PR from
        what regulators, courts, and journalists have found.
      </p>
      <button type="button" onClick={copy} className="btn mt-4" aria-live="polite">
        {copied ? "Copied ✓" : label}
      </button>
    </div>
  );
}
