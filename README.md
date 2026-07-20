# The Facts. Plymouth Brethren Christian Church

An independent, open-source record of the Plymouth Brethren Christian Church (PBCC), formerly known as the Exclusive Brethren.

**Live site:** https://factsaboutplymouthbrethrenchristianchurch.org

## What this is

The original reporting on the PBCC happens elsewhere: ABC Four Corners, The Times (London), Stuff NZ, Guardian Australia, Byline Times, the NZ Royal Commission of Inquiry into Abuse in Care, the UK Charity Commission, the Australian Taxation Office, and survivor-run archives like the Get A Life podcast. This site is the library that organises all of it, in public, on the same search terms, with one citation per claim.

It is not affiliated with the PBCC or any religious organisation. It does not claim original reporting. It aggregates, attributes, and links.

## The rules this project runs on

1. **Sourced, not strident.** Every factual claim on the site maps to a row in [FACTS.md](FACTS.md) and a citation in [`src/lib/sources.ts`](src/lib/sources.ts). Claims that are true but not yet publicly sourced ship with a visible "source pending" marker, never silently.
2. **Aggregator, not originator.** Every body paragraph attributes the outlet, court, or regulator that said it first.
3. **Open by design.** The full edit history, editorial rulebook, and claims intake are public in this repository. Corrections arrive as issues or pull requests, from anyone, including the PBCC itself.
4. **Survivor-first.** First-person testimony is published only with explicit written consent, reviewed by the contributor before ship, and removable on request. Private members of the fellowship who have not chosen to be public are never named.

## Contributing

Corrections, new evidence, and new sources are welcome from researchers, journalists, ex-members, and anyone with a sourced fact. See [CONTRIBUTING.md](CONTRIBUTING.md).

- **Factual error on the site:** open a [correction issue](../../issues/new?labels=correction&title=Correction:+).
- **New evidence or source:** open a [new-fact issue](../../issues/new?labels=new-fact&title=New+fact:+).
- **Survivor story:** do not open a public issue. Use the consent-controlled intake described at [/stories](https://factsaboutplymouthbrethrenchristianchurch.org/stories).

## Repository map

| Path | What it is |
| --- | --- |
| [FACTS.md](FACTS.md) | The claims intake. Every claim on the site maps to a row here. |
| [EDITORIAL_GUIDE.md](EDITORIAL_GUIDE.md) | The editorial spine. Read before writing any copy. |
| [MEMBERS_POLICY.md](MEMBERS_POLICY.md) | Inclusion rule for `/people` profiles. |
| [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) | Tokens, typography, component patterns. |
| [SEO_STRATEGY.md](SEO_STRATEGY.md) | Keyword clusters, schema plan. |
| `src/app/` | Next.js App Router pages. |
| `src/lib/sources.ts` | The typed source registry. Every footnote on the site resolves here. |
| `research/` | Gitignored evidence drop-zone (archived PDFs, captures). |

## Stack

Next.js (App Router) on Vercel, with Supabase planned for the `/stories` and `/people` data paths. See [INFRASTRUCTURE.md](INFRASTRUCTURE.md).

```bash
npm install
npm run dev
```

## Maintainer

This project is owned and maintained by the [PBCC-Facts](https://github.com/PBCC-Facts) organization and its contributors. Issues and pull requests are triaged by the project maintainers; profile and severity-claim changes require the sourcing bar described in [EDITORIAL_GUIDE.md](EDITORIAL_GUIDE.md) §2 before merge.

## Licence

Code is licensed under [MIT](LICENSE). Site content (prose in `src/app/` and the claims record in `FACTS.md`) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/): reuse it, with attribution and a link back.
