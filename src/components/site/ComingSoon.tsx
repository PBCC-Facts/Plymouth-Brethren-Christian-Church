import Link from "next/link";
import { GITHUB_URL } from "@/lib/site";

export function ComingSoon({
  title,
  note,
}: {
  title: string;
  note?: string;
}) {
  return (
    <section className="site-container py-24">
      <p
        className="font-sans text-xs font-bold uppercase tracking-[0.2em]"
        style={{ color: "var(--color-brand)" }}
      >
        Coming soon
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-serif)] text-5xl leading-[1.05]">
        {title}
      </h1>
      <p className="mt-6 max-w-prose text-lg leading-relaxed opacity-80">
        {note ??
          "This page is under construction. The site is in active build. Every published claim will be sourced and footnoted before it lands here."}
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/" className="btn">
          Back to home
        </Link>
        <a
          href={GITHUB_URL}
          className="underline opacity-80 hover:opacity-100 self-center"
          target="_blank"
          rel="noreferrer"
        >
          Track progress on GitHub →
        </a>
      </div>
    </section>
  );
}
