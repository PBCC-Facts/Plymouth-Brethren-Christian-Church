import Link from "next/link";
import { footerNav } from "@/lib/nav";

export function Footer() {
  return (
    <footer
      className="mt-auto"
      style={{ background: "var(--color-ink)", color: "var(--color-surface)" }}
    >
      <div className="site-container py-20">
        <div className="grid gap-12 md:grid-cols-[2fr_3fr] md:items-center">
          <div>
            <p
              className="font-sans text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: "var(--color-brand)" }}
            >
              Contact
            </p>
            <h2
              className="mt-3 font-[family-name:var(--font-serif)] text-3xl leading-tight"
              style={{ color: "var(--color-surface)" }}
            >
              If you have any questions or just want more information about us,
              please click below, and we&rsquo;ll be happy to help!
            </h2>
            <Link href="/contact" className="btn btn--on-dark mt-6">
              Get in touch
            </Link>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="opacity-80 hover:opacity-100"
                    style={{ color: "var(--color-surface)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <hr className="my-12 border-white/10" />

        <div className="flex flex-wrap items-center justify-between gap-4 text-xs opacity-70">
          <p>
            © {new Date().getFullYear()} Plymouth Brethren Christian Church
            parody / criticism project. Independent. Not affiliated.
          </p>
          <p>
            Source:{" "}
            <a
              href="https://github.com/trentwaskey/Plymouth-Brethren-Christian-Church"
              className="underline"
              style={{ color: "var(--color-surface)" }}
            >
              github.com/trentwaskey/Plymouth-Brethren-Christian-Church
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
