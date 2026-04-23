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
  "hales-ratpoison-stuff": {
    id: "hales-ratpoison-stuff",
    label:
      "Stuff (NZ) — The sect with millions of dollars in tax breaks whose secretive leader tells followers to drink rat poison (2016)",
    url: "https://www.stuff.co.nz/national/78573007/exclusive-brethrens-the-sect-with-millions-of-dollars-in-tax-breaks-whose-secretive-leader-tells-followers-to-drink-rat-poison",
    accessedOn: "2026-04-23",
    notes: "Fairfax NZ syndication of the reporting on a September 2015 UK ministry meeting. Brethren spokesman response is on the record within the same piece. Confirm verbatim quote against live page before any prose change.",
  },
  "hales-ratpoison-cessnock": {
    id: "hales-ratpoison-cessnock",
    label:
      "Cessnock Advertiser — Exclusive Brethren leader Bruce Hales says man in torment should kill himself (April 2016)",
    url: "https://www.cessnockadvertiser.com.au/story/3360281/exclusive-brethren-leader-bruce-hales-says-man-in-torment-should-kill-himself/",
    accessedOn: "2026-04-23",
    notes: "ACM / Fairfax-stable Australian sibling of the Stuff (NZ) story. Same underlying reporting.",
  },
  "hales-times-infiltrate": {
    id: "hales-times-infiltrate",
    label:
      "The Times (London) — 'No mercy' project: how a tiny Christian sect made it to the heart of Westminster (Kenber & Mostrous)",
    url: "https://times-deck.s3-eu-west-1.amazonaws.com/projects/470e7a4f017a5476afb7eeb3f8b96f9b.html",
    accessedOn: "2026-04-23",
    notes: "The Times's public microsite for the investigation; the thetimes.co.uk edition is paywalled. Source for the directly-attributed line that Hales 'had instructed members to infiltrate the meeting, to take a tape recorder and dress up as an out'.",
  },
  "hales-rnz-moneygoround": {
    id: "hales-rnz-moneygoround",
    label:
      "RNZ — Former Exclusive Brethren members detail the church's money-go-round (2022)",
    url: "https://www.rnz.co.nz/news/national/471615/former-exclusive-brethren-members-detail-the-church-s-money-go-round",
    accessedOn: "2026-04-23",
    notes: "Names ex-member witness Peter Hart and the 'GCF' fund; describes cash payments varied in size to avoid looking like wages.",
  },
  "hales-illawarra-mccorkell": {
    id: "hales-illawarra-mccorkell",
    label:
      "Illawarra Mercury — Texts reveal how Exclusive Brethren paid witness to keep quiet (October 2017)",
    url: "https://www.illawarramercury.com.au/story/5003814/texts-reveal-how-exclusive-brethren-paid-witness-to-keep-quiet/",
    accessedOn: "2026-04-23",
    notes: "Names Lloyd Grimshaw (PBCC media spokesman / company director) signing the Services and Confidentiality Deed; texts in evidence reference Dean Hales (Bruce Hales's son). Does not name Bruce Hales personally as authorising the payment.",
  },
  "hales-jet-nzherald": {
    id: "hales-jet-nzherald",
    label:
      "NZ Herald — Behind the Brotherhood: the Elect Vessel, Bruce Hales (Patrick Gower)",
    url: "https://www.nzherald.co.nz/nz/ibehind-the-brotherhoodi-the-elect-vessel-bruce-hales/VGMHDADWYHA6ZUQXDN7K5BSV2I/",
    accessedOn: "2026-04-23",
    notes: "Describes Hales touring NZ congregations by private jet. Single-source for this claim; safe for uncontested factual matter (mode of travel).",
  },
  "pdt-charitycommission-2014": {
    id: "pdt-charitycommission-2014",
    label:
      "UK Charity Commission — Preston Down Trust full decision (3 January 2014)",
    url: "https://assets.publishing.service.gov.uk/media/5a74c214e5274a3cb2866f23/preston_down_trust_full_decision.pdf",
    accessedOn: "2026-04-23",
    notes: "Primary document. Records the Commission's finding of 'considerable evidence of significant detriment or harm' and discusses the authority held by the 'worldwide leader of the Brethren' — the office held by Bruce Hales.",
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
