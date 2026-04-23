import { getSource } from "@/lib/sources";

type Props =
  | { id: string; n: number; label?: never; url?: never }
  | { id?: never; n: number; label: string; url: string };

/**
 * Superscript source citation. Pass either a registered `id` (preferred) or an
 * inline `label`+`url` pair. `n` is the page-scoped ordinal (1-indexed).
 *
 * Renders a small teal superscript link that opens the source in a new tab.
 * Caller is responsible for incrementing `n`; this keeps numbering deterministic
 * across server-rendered output and avoids a client-side counter context.
 */
export function Footnote(props: Props) {
  const { n } = props;
  const label = "id" in props && props.id ? getSource(props.id).label : props.label!;
  const url = "id" in props && props.id ? getSource(props.id).url : props.url!;

  return (
    <sup className="footnote">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Source ${n}: ${label}`}
        title={label}
      >
        {n}
      </a>
    </sup>
  );
}

/**
 * Placeholder for claims we haven't pinned a source for yet.
 * Renders a visible red marker so unsourced claims can never silently ship.
 */
export function SourcePending({ note }: { note?: string }) {
  return (
    <sup
      className="footnote footnote--pending"
      title={note ?? "Source pending. see FACTS.md"}
      aria-label={note ?? "Source pending"}
    >
      ⚠︎
    </sup>
  );
}
