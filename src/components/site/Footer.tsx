import Link from "next/link";
import { footerNav, policyNav } from "@/lib/nav";
import { GITHUB_URL, LINKEDIN_URL, X_URL } from "@/lib/site";

const SOCIALS = [
  {
    href: LINKEDIN_URL,
    label: "The Facts on LinkedIn",
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z" />
    ),
  },
  {
    href: X_URL,
    label: "The Facts on X",
    icon: (
      <path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-4.5-5.9L5.2 22H2.1l8.1-9.3L1 2h7.1l4.1 5.4L18.9 2Zm-1.2 18h1.9L7.4 4H5.4z" />
    ),
  },
];

export function Footer() {
  return (
    <footer
      className="mt-auto"
      style={{ background: "var(--color-ink)", color: "var(--color-surface)" }}
    >
      <div className="site-container py-14">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4">
          <div className="flex items-center gap-5">
            <p className="font-[family-name:var(--font-serif)] text-2xl font-semibold m-0">
              The Facts.
            </p>
            <ul className="flex items-center gap-3">
              {SOCIALS.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="block opacity-70 transition-opacity hover:opacity-100"
                    style={{ color: "var(--color-surface)" }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      {s.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
