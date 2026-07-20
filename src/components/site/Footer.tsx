import Link from "next/link";
import { footerNav, policyNav } from "@/lib/nav";
import { GITHUB_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer
      className="mt-auto"
      style={{ background: "var(--color-ink)", color: "var(--color-surface)" }}
    >
      <div className="site-container py-14">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4">
          <p className="font-[family-name:var(--font-serif)] text-2xl font-semibold m-0">
            The Facts.
          </p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="no-underline opacity-80 hover:opacity-100 hover:underline"
                    style={{ color: "var(--color-surface)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <hr className="my-8 border-white/10" />

        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 text-xs opacity-70">
          <p className="m-0">
            © {new Date().getFullYear()} The Facts. An independent,
            open-source record of the Plymouth Brethren Christian Church. Not
            affiliated with the PBCC. Source on{" "}
            <a
              href={GITHUB_URL}
              className="underline"
              style={{ color: "var(--color-surface)" }}
            >
              GitHub
            </a>
            .
          </p>
          <ul className="flex gap-x-5">
            {policyNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="no-underline opacity-80 hover:opacity-100 hover:underline"
                  style={{ color: "var(--color-surface)" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/llms-full.txt"
                className="no-underline opacity-80 hover:opacity-100 hover:underline"
                style={{ color: "var(--color-surface)" }}
                title="The site's full content as one markdown document, for AI agents and LLMs"
              >
                For AI agents: llms-full.txt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
