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
  "hoyle-excommunicated-memoir": {
    id: "hoyle-excommunicated-memoir",
    label:
      "Craig Hoyle — Excommunicated: My Escape from the Exclusive Brethren (HarperCollins NZ, 2023)",
    url: "https://www.harpercollins.co.nz/9781775542469/excommunicated/",
    accessedOn: "2026-04-23",
    notes:
      "On-record first-person memoir. Hoyle is Chief News Editor of the Sunday Star-Times (NZ). Primary source for the December 2007 Bruce Hales meeting, the 'There's medication you can go on for these things' directive, and the subsequent Cyprostat prescription by Dr Mark Craddock.",
  },
  "hoyle-times-cyprostat": {
    id: "hoyle-times-cyprostat",
    label:
      "The Times (London) — Brethren doctor gave gay teenager 'chemical castration' drug (Kenber & Mostrous)",
    url: "https://www.thetimes.co.uk/article/brethren-doctor-gave-gay-teenager-chemical-castration-drug-sqg3p36kl6h",
    accessedOn: "2026-04-23",
    notes:
      "Documents Dr Mark Craddock's Cyprostat prescription and the subsequent NSW Medical Professional Standards Committee finding of unsatisfactory professional conduct. Paywalled; offline copy in research/raw/ if needed.",
  },
  "whanaketia-royalcommission-nz": {
    id: "whanaketia-royalcommission-nz",
    label:
      "Whanaketia — Final report, NZ Royal Commission of Inquiry into Abuse in Care (2024)",
    url: "https://www.abuseincare.org.nz/reports/whanaketia/",
    accessedOn: "2026-04-23",
    notes:
      "Government-published Royal Commission final report. Chapter 8 contains PBCC-specific findings on conversion therapy, sexual-detail disclosure in assembly settings, and absence of formal child-protection policies. Primary source the PBCC has not rebutted.",
  },
  "bigbrethren-fourcorners-2025": {
    id: "bigbrethren-fourcorners-2025",
    label:
      "ABC Four Corners — Big Brethren (Louise Milligan, 15 September 2025)",
    url: "https://www.abc.net.au/4corners/big-brethren/105776802",
    accessedOn: "2026-04-23",
    notes:
      "The most recent mainstream PBCC documentary. Source for Mick Dover's ~$1m NDA allegation, 2023 Ministry-volume readings ('bunkum', 'jaws of hell', 'journalists are trash'), and documentation of ATO/UBT and the 2025 federal-election deployment. PBCC's formal rebuttal on the church site implicitly confirms the broadcast content.",
  },
  "jensen-smh-goodweekend-2016": {
    id: "jensen-smh-goodweekend-2016",
    label:
      "Sydney Morning Herald Good Weekend — Tony McCorkell reveals secrets of the wealthy Christian sect Exclusive Brethren (Bachelard, June 2016)",
    url: "https://www.smh.com.au/lifestyle/tony-mccorkell-reveals-secrets-of-the-wealthy-christian-sect-exclusive-brethren-20160609-gpez4k.html",
    accessedOn: "2026-04-23",
    notes:
      "Documents the Lindsay Jensen case, Jensen's 2003 'shutting up' and December 2003 restoration while the child victims begged Bruce Hales by letter not to reinstate him, and Hales's five personal meetings with the under-13 victim in his Sydney office. Justice William Knight's ruling quoted.",
  },
  "mccorkell-smh-bachelard-2017": {
    id: "mccorkell-smh-bachelard-2017",
    label:
      "Sydney Morning Herald — Exclusive Brethren tried to pay witness $920,000 to keep quiet about child sex abuse (Bachelard, 21 October 2017)",
    url: "https://www.smh.com.au/national/exclusive-brethren-tried-to-pay-witness-920000-to-keep-quiet-about-child-sex-abuse-20171020-gz4w3u.html",
    accessedOn: "2026-04-23",
    notes:
      "Bank records and text messages documenting the $275,000 paid on 25 October and 22 November 2016 as part of a proposed $920,000 Services and Confidentiality Deed. Michael Bachelard is expressly named in Schedule 3 as the sole prohibited recipient.",
  },
  "byline-ppe-halessons-2020": {
    id: "byline-ppe-halessons-2020",
    label:
      "Byline Times — Exclusive: COVID-19 PPE contracts worth £2.6 billion awarded to Brethren-linked firms (2020)",
    url: "https://bylinetimes.com/2020/11/18/the-ppe-scandal-457-million-of-contracts-linked-to-the-religious-sect-behind-the-tories/",
    accessedOn: "2026-04-23",
    notes:
      "Documents UK Department of Health contracts to Sante Global LLP (99% owned by Charles and Gareth Hales) and other Hales-family firms. Companies House filings and contract-award records preserved in the Byline piece.",
  },
  "rudd-cult-2007-age": {
    id: "rudd-cult-2007-age",
    label:
      "The Age — Rudd rules out meeting with Brethren 'extremist cult' (22 August 2007)",
    url: "https://www.theage.com.au/national/rudd-rules-out-meeting-with-brethren-20070822-ge5qca.html",
    accessedOn: "2026-04-23",
    notes:
      "Then-Opposition Leader Kevin Rudd on the record: 'extremist cult and sect', 'dangerous cult', 'they split families'. Corroborated across AAP wire and ABC Lateline contemporaneous coverage.",
  },
  "albanese-cult-2025-sbs": {
    id: "albanese-cult-2025-sbs",
    label:
      "SBS News — Labor accuses religious sect of trying to help the Liberals win the federal election (April 2025)",
    url: "https://www.sbs.com.au/news/article/labor-accuses-religious-sect-of-trying-to-help-the-liberals-win-the-federal-election/nmayswnvx",
    accessedOn: "2026-04-23",
    notes:
      "Prime Minister Anthony Albanese's 2025 federal-election-campaign 'cult' label, and the 'What is the quid pro quo' question about non-voting members working pre-poll booths in marginal seats.",
  },
  "ubt-atoraid-guardian-2024": {
    id: "ubt-atoraid-guardian-2024",
    label:
      "Guardian Australia — ATO raids offices of Plymouth Brethren's Universal Business Team (Anne Davies and Ben Butler, April 2024)",
    url: "https://www.theguardian.com/australia-news/2024/apr/02/ato-raids-offices-of-plymouth-brethrens-universal-business-team",
    accessedOn: "2026-04-23",
    notes:
      "Documents the 19 March 2024 ATO action at UBT Australia's Sydney Olympic Park offices under the 'Private Wealth — Behaviours of Concern' section. Describes UBT as 'the umbrella organisation for the various businesses and charities run by the sect under the leadership of Bruce Hales.'",
  },
  "hollowmen-hager-2006": {
    id: "hollowmen-hager-2006",
    label:
      "Nicky Hager — The Hollow Men (Craig Potton Publishing, 2006)",
    url: "https://www.nickyhager.info/books/the-hollow-men/",
    accessedOn: "2026-04-23",
    notes:
      "Book-length investigation of the Brethren's simultaneous 2004-05 four-country political campaign and its chain of command: 'no major decisions are made without Hales's approval or direction.' Source for the NZ $1 million 'Wake-up Call' campaign.",
  },
  "osg-guardian-surveillance-2023": {
    id: "osg-guardian-surveillance-2023",
    label:
      "Guardian Australia — OneSchool Global investigation series (2022-2023)",
    url: "https://www.theguardian.com/australia-news/2023/apr/15/oneschool-global-plymouth-brethren-christian-church-investigation",
    accessedOn: "2026-04-23",
    notes:
      "Reporting on OneSchool Global's curriculum restrictions, Hales's March 2022 US ministry on schooling, and the Streamline3 device-monitoring system's real-time alerting on restricted searches.",
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
