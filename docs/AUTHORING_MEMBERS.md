# Authoring `/people` profiles

Short runbook for adding or editing a member profile. The editorial rule. **who** qualifies and **what** must accompany them. lives in [MEMBERS_POLICY.md](../MEMBERS_POLICY.md). This file is the mechanical "how."

## Where the data lives

- **v1 (today):** `src/data/members.seed.ts` is the authoring surface. Each exported row is a `Member`, typed against `src/lib/members.tsx`.
- **Schema of record:** `supabase/migrations/20260423052145_add_members_table.sql` defines `public.members`. The seed file is kept byte-equivalent to the migration's INSERT until the Supabase read path is wired.
- **v2 (planned, following the `/litigation` reader):** reads switch from the seed file to `public.members` via Supabase. No schema or component changes at that point; only the body of `listPublishedMembers`, `getMember`, and friends in `src/lib/members.tsx`.

## Add a new profile

1. **Confirm inclusion.** The subject must clear at least one bucket in [MEMBERS_POLICY.md §1](../MEMBERS_POLICY.md). Write the one-sentence `inclusionBasis` first. if you can't write it clearly, the subject probably shouldn't be on the page.
2. **Register sources.** For every URL you plan to cite, add an entry to `src/lib/sources.ts` with `id`, `label`, `url`, `accessedOn`. The id is used in `[[cite:id]]` tokens. If the source isn't registered, the build fails when the profile renders. that's intentional.
3. **Add FACTS.md rows.** Every factual claim in the profile body needs a row in `FACTS.md`, status ✅ verified (or 🟡 single-source for uncontested matters). See the existing §2 "Leadership & doctrine" rows for shape.
4. **Draft the row.** Append to `members` in `src/data/members.seed.ts`:

   ```ts
   {
     slug: "kebab-case-name",
     name: "Full Name",
     aliases: ["Common Variant"],
     category: "leadership" | "historical" | "executive" | "public-figure",
     currentRole: "Short role label (null for historical)",
     overview: "1–2 plain sentences. No citation tokens here.",
     inclusionBasis: "Which inclusion bucket, and why this person clears it.",
     sourceIds: ["id-one", "id-two"],
     isPublished: false, // flip to true only when review clears
     isRoadmapOnly: false,
     body: [
       {
         heading: "Section heading without a period",
         paragraphs: [
           "Plain text. Tokens sit inline at sentence end: [[cite:id-one]]",
           "Unsourced? Use [[pending:short note explaining what's missing]].",
         ],
       },
     ],
   }
   ```

5. **Keep the migration in sync.** Copy the same row into an INSERT at the bottom of `supabase/migrations/20260423052145_add_members_table.sql` (or a follow-up migration, whichever is cleaner). Until Supabase reads are wired this is paperwork; after, it's how the row reaches production.
6. **Open a draft PR.** At least one reviewer other than the author. Do not flip `isPublished: true` until review clears.

## Add a roadmap entry

Same shape as a full profile, but `isPublished: false, isRoadmapOnly: true`. `body` can be empty. Required: `overview`, `inclusionBasis`, and at least one registered `source_id`. No bare-name listings.

## Update an existing profile

- Body edits are the common case: change paragraph text, add a `[[cite:id]]` where a `[[pending:…]]` was, bump `lastReviewedAt`.
- Role change: update `currentRole`; add a note in the body's "Public record" section.
- Death: flip `category` to `historical`; keep the profile.
- Subject correspondence / right-of-reply: publish verbatim in a new section; never silently edit and never unpublish truthful sourced material.

## Local verification

```bash
npm run typecheck
npm run build
npm run dev
# visit http://localhost:3000/people and click through to the profile
```

The build fails if any `[[cite:id]]` references an unknown source. that catch lives in `assertCitationsResolve` in `src/lib/members.tsx` and runs when the profile renders.

## Citation tokens

Two tokens are supported inside paragraph strings:

- `[[cite:source-id]]`. renders a numbered footnote linking to the URL registered for `source-id`. Ordinals run sequentially down the profile.
- `[[pending:short note]]`. renders the red ⚠︎ marker (`SourcePending`) with the note as hover text. Use when a claim is true but a public URL is not yet pinned.

No other tokens exist. No Markdown is parsed. Keep paragraphs as plain strings; break them into new entries in `paragraphs: []` instead of inline newlines.
