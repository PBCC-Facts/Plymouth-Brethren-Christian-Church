import Link from "next/link";
import { browseAll } from "@/lib/nav";

/**
 * Thin dense link row that sits above the main footer on every page.
 * Expresses the "link to everything on the site" commitment: every top-level
 * destination is one click from wherever you are, with "(in progress)" tags
 * on pages that don't exist yet.
 */
export function BrowseStrip() {
  return (
    <div className="browse-strip">
      <div className="site-container browse-strip__inner">
        <span className="browse-strip__label">Browse the whole site:</span>
        {browseAll.map((item, i) => (
          <span key={item.label} className="inline-flex items-center">
            {item.external ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
            {!item.exists && (
              <span className="browse-strip__pending">(in progress)</span>
            )}
            {i < browseAll.length - 1 && (
              <span aria-hidden="true" style={{ opacity: 0.4 }}>
                &nbsp;&middot;
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
