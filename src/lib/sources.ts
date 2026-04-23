export type Source = {
  id: string;
  label: string;
  url: string;
  accessedOn?: string;
  notes?: string;
};

/**
 * Canonical source registry. Every factual claim on the site footnotes to an entry here.
 * Add new rows by promoting ✅-status entries in FACTS.md.
 * Never add an entry that isn't publicly verifiable at the `url` right now.
 */
export const sources: Record<string, Source> = {
  "hales-manofgod-pbcc": {
    id: "hales-manofgod-pbcc",
    label: "Plymouth Brethren Christian Church — Bruce D. Hales resource page",
    url: "https://www.plymouthbrethrenchristianchurch.org/resource/bruce-d-hales/",
    accessedOn: "2026-04-23",
  },
  "hales-manofgod-newstatesman": {
    id: "hales-manofgod-newstatesman",
    label: "New Statesman — Escaping Eden: the Exclusive Brethren (2023)",
    url: "https://www.newstatesman.com/long-reads/2023/08/escaping-eden-exclusive-brethren",
    accessedOn: "2026-04-23",
  },
  "hales-manofgod-thepost": {
    id: "hales-manofgod-thepost",
    label: "The Post (NZ) — Exclusive Brethren told to create crisis, generate profits",
    url: "https://www.thepost.co.nz/nz-news/350113380/exclusive-brethren-told-create-crisis-generate-profits",
    accessedOn: "2026-04-23",
  },
  "separation-cdamm": {
    id: "separation-cdamm",
    label: "CDAMM — Plymouth Brethren",
    url: "https://www.cdamm.org/articles/plymouth-brethren",
    accessedOn: "2026-04-23",
  },
  "separation-cesnur": {
    id: "separation-cesnur",
    label: "CESNUR — Briggs, Plymouth Brethren and Human Rights (2008)",
    url: "https://www.cesnur.org/2008/london_briggs.pdf",
    accessedOn: "2026-04-23",
  },
  "separation-pbcc-statement": {
    id: "separation-pbcc-statement",
    label: "Plymouth Brethren Christian Church — Statement of Belief",
    url: "https://www.plymouthbrethrenchristianchurch.org/resource/statement-of-belief/",
    accessedOn: "2026-04-23",
  },
  "separation-pbcc-living": {
    id: "separation-pbcc-living",
    label: "Plymouth Brethren Christian Church — Living Our Beliefs (PDF)",
    url: "https://www.plymouthbrethrenchristianchurch.org/wp-content/uploads/2020/08/Plymouth-Brethren-Living-Our-Beliefs-English.pdf",
    accessedOn: "2026-04-23",
  },
  "withdrawing-reachout": {
    id: "withdrawing-reachout",
    label: "Reach Out Trust — Exclusive Brethren",
    url: "https://reachouttrust.org/exclusive-brethren/",
    accessedOn: "2026-04-23",
  },
  "withdrawing-ukparliament-2012": {
    id: "withdrawing-ukparliament-2012",
    label:
      "UK Parliament — Public Administration Committee, charity submission m49 (2012)",
    url: "https://publications.parliament.uk/pa/cm201213/cmselect/cmpubadm/writev/charity/m49.htm",
    accessedOn: "2026-04-23",
  },
  "fourcorners-wikipedia": {
    id: "fourcorners-wikipedia",
    label: "Wikipedia — Behind the Exclusive Brethren (ABC Four Corners, 2006)",
    url: "https://en.wikipedia.org/wiki/Behind_the_Exclusive_Brethren",
    accessedOn: "2026-04-23",
  },
  "pbcc-members-selfreport": {
    id: "pbcc-members-selfreport",
    label: "Plymouth Brethren Christian Church — homepage (self-reported member count)",
    url: "https://www.plymouthbrethrenchristianchurch.org/",
    accessedOn: "2026-04-23",
    notes: "Uses this row for the 55,000-members / 19-countries figure, which is a PBCC self-report. Independent corroboration still outstanding — see FACTS.md §1.",
  },
  "pbccstories": {
    id: "pbccstories",
    label: "PBCCstories.org — first-person survivor testimony",
    url: "https://pbccstories.org/",
    accessedOn: "2026-04-23",
  },
};

export function getSource(id: string): Source {
  const s = sources[id];
  if (!s) {
    throw new Error(
      `Unknown source id: "${id}". Add it to src/lib/sources.ts after promoting the matching FACTS.md row to ✅.`,
    );
  }
  return s;
}
