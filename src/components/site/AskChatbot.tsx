"use client";

import { useState } from "react";
import Link from "next/link";
import { AskAI } from "@/components/site/AskAI";

type ChatMessage = { role: "user" | "assistant"; text: string };

const STUB_REPLY =
  "The chatbot isn't live yet. It's being built to answer questions like this from the site's sourced record, with a citation on every answer. Until it launches, the fastest routes are below: copy the research prompt into your own AI, or start with the basics on this page.";

/**
 * Public-facing Q&A chatbot: UI STUB. The interface is real (message list,
 * input, send), the brain is not wired yet. Sending any question returns a
 * canned reply pointing at the interim options. When the backend lands
 * (grounded on /llms-full.txt + the source registry), only the submit
 * handler changes.
 */
export function AskChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");

  const send = () => {
    const q = input.trim();
    if (!q) return;
    setMessages((m) => [
      ...m,
      { role: "user", text: q },
      { role: "assistant", text: STUB_REPLY },
    ]);
    setInput("");
  };

  return (
    <div style={{ border: "1px solid var(--color-ink)" }}>
      {/* Header */}
      <div
        className="flex items-baseline justify-between px-5 py-3"
        style={{ borderBottom: "1px solid var(--color-rule)" }}
      >
        <p className="record-row__outlet m-0">Ask about the Brethren</p>
        <p
          className="m-0 font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.12em] opacity-60"
        >
          Preview · not live yet
        </p>
      </div>

      {/* Messages */}
      <div className="px-5 py-4 space-y-3 max-h-72 overflow-y-auto">
        {messages.length === 0 ? (
          <p className="m-0 text-sm leading-[1.7] opacity-70">
            A question-and-answer assistant grounded in this site&rsquo;s
            sourced record is in development. Ask anything to see how it will
            work, e.g. &ldquo;Why can&rsquo;t members eat with
            outsiders?&rdquo; or &ldquo;Who is Bruce Hales?&rdquo;
          </p>
        ) : (
          messages.map((m, i) =>
            m.role === "user" ? (
              <p
                key={i}
                className="m-0 ml-auto w-fit max-w-[85%] px-3 py-2 text-sm leading-[1.6]"
                style={{
                  background: "var(--color-ink)",
                  color: "var(--color-surface)",
                }}
              >
                {m.text}
              </p>
            ) : (
              <div
                key={i}
                className="m-0 w-fit max-w-[85%] px-3 py-2 text-sm leading-[1.6] space-y-2"
                style={{ border: "1px solid var(--color-rule)" }}
              >
                <p className="m-0">{m.text}</p>
                <p className="m-0">
                  <Link href="#basics">Start with the basics &darr;</Link>
                </p>
              </div>
            ),
          )
        )}
        {messages.length > 0 ? (
          <div className="pt-1">
            <AskAI label="Copy the research prompt instead" />
          </div>
        ) : null}
      </div>

      {/* Input */}
      <form
        className="flex gap-0"
        style={{ borderTop: "1px solid var(--color-ink)" }}
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question about the PBCC…"
          aria-label="Ask a question about the Plymouth Brethren Christian Church"
          className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm outline-none"
          style={{ color: "var(--color-ink)" }}
        />
        <button type="submit" className="btn" style={{ border: 0 }}>
          Ask
        </button>
      </form>
    </div>
  );
}
