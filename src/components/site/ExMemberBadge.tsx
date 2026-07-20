/**
 * ExMemberBadge. renders the 🟣 evidence tier from docs/REPORTS_SYSTEM.md:
 * a claim supported by verified ex-member reports (identity verified by the
 * editor and held off-repo; anonymous on the site).
 *
 * Usage: place immediately after the claim sentence, the way <Footnote>
 * follows a public-record claim. Copy around it must use reported phrasing
 * ("verified ex-members report that…"), per EDITORIAL_GUIDE.md §2.
 */
export function ExMemberBadge({
  count,
  note,
}: {
  /** Number of verified ex-member reports on file for this claim. */
  count: number;
  /** Optional override for the hover explanation. */
  note?: string;
}) {
  const label = `${count} verified ex-member report${count === 1 ? "" : "s"}`;
  return (
    <span
      className="exmember-badge"
      role="note"
      tabIndex={0}
      aria-label={`${label}. ${note ?? defaultNote}`}
      title={note ?? defaultNote}
    >
      <span className="exmember-badge__count">{count}</span>
      <span>
        verified ex-member report{count === 1 ? "" : "s"}
      </span>
    </span>
  );
}

const defaultNote =
  "This claim is supported by ex-members whose identity and membership history the editor has verified and holds on file. It is reported testimony, not yet public record. See the methodology on /mission.";
