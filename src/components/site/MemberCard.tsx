import Link from "next/link";
import type { Member } from "@/lib/members";
import { Artwork } from "@/components/site/Artwork";

/**
 * Listing-card for /people. Plainspoken: name, role, one-sentence
 * overview, category chip. No snark. Profile links live here.
 */
export function MemberCard({ member }: { member: Member }) {
  return (
    <article
      className="flex flex-col border overflow-hidden"
      style={{ borderColor: "var(--color-rule)" }}
    >
      <Link href={`/people/${member.slug}`} className="block" aria-label={member.name}>
        <Artwork
          title={member.name}
          kind="person"
          aspect="portrait"
          src={member.imageUrl}
        />
      </Link>
      <div className="flex flex-col p-6">
        <p
          className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.15em]"
          style={{ color: "var(--color-brand)" }}
        >
          {categoryLabel(member.category)}
        </p>
        <h3 className="mt-2 font-[family-name:var(--font-serif)] text-2xl leading-tight">
          <Link href={`/people/${member.slug}`}>{member.name}</Link>
        </h3>
        {member.currentRole ? (
          <p className="mt-1 text-sm opacity-75">{member.currentRole}</p>
        ) : null}
        <p className="mt-4 text-[0.95rem] leading-[1.7]">{member.overview}</p>
        <p className="mt-5">
          <Link
            href={`/people/${member.slug}`}
            className="font-sans text-sm font-bold uppercase tracking-[0.05em]"
            style={{ color: "var(--color-brand)" }}
          >
            Read the profile &rarr;
          </Link>
        </p>
      </div>
    </article>
  );
}

function categoryLabel(c: Member["category"]): string {
  switch (c) {
    case "leadership":
      return "Leadership";
    case "historical":
      return "Historical";
    case "executive":
      return "Commercial network";
    case "public-figure":
      return "Public figure";
  }
}
