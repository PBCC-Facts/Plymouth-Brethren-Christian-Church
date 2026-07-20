import type { Member } from "@/lib/members";

/**
 * Source of truth for /people content in v1.
 *
 * This file mirrors public.members (see
 * supabase/migrations/20260423052145_add_members_table.sql). When the
 * /litigation route wires Supabase reads against public.cases, this
 * file is retired and src/lib/members.ts switches to the same read
 * pattern against public.members. The migration seed INSERT stays
 * byte-equivalent to this file until then.
 *
 * Rules for adding a row:
 *   1. The person must clear one of the MEMBERS_POLICY.md inclusion buckets.
 *   2. Every [[cite:id]] token references an id registered in src/lib/sources.ts.
 *   3. Every factual claim has a matching row in FACTS.md.
 *   4. Severity claims (abuse, finance misconduct, pending litigation) have
 *      at least two independent sources. Single-source entries are permitted
 *      for uncontested facts (dates, roles, succession).
 *   5. Anything you can't pin to a public URL uses [[pending:note]] inline.
 *      Never invent citations.
 */

export const members: Member[] = [
  {
    slug: "bruce-d-hales",
    name: "Bruce D. Hales",
    aliases: ["Bruce Hales", "Man of God", "Elect Vessel", "Universal Leader"],
    category: "leadership",
    currentRole:
      'World Leader ("Man of God"), Plymouth Brethren Christian Church',
    seoTopic: "Who is Bruce D. Hales?",
    faq: [
      {
        question: "Who is Bruce Hales?",
        answer:
          "Bruce D. Hales is a Sydney businessman and the World Leader of the Plymouth Brethren Christian Church (formerly the Exclusive Brethren), a role he has held since 2002 and which the church calls the “Man of God” and “Elect Vessel.” Members treat his ministry as the voice of God; investigative reporting, a UK charity regulator, and a New Zealand Royal Commission have documented his authority over the church's doctrine, schools, and commercial network.",
      },
      {
        question: "What is Bruce Hales known for?",
        answer:
          "Outside the church, Hales is best known for documented episodes reported by major outlets: telling a distressed young member on a leaked 2015 recording to “take arsenic, or go and get some rat poison”; personally directing a gay teenager to a Brethren doctor who prescribed a chemical-castration drug; meeting an underage abuse victim five times while her abuser was restored to fellowship; and leading a church whose commercial arm was raided by the Australian Taxation Office in 2024.",
      },
      {
        question: "Is the Plymouth Brethren Christian Church a cult?",
        answer:
          "Two Australian prime ministers have publicly called it one: Kevin Rudd called it “an extremist cult” in 2007, and Anthony Albanese called it a “cult” in 2025. The UK Charity Commission found “considerable evidence of significant detriment or harm” from its doctrine and practices in 2014. The church rejects the label.",
      },
      {
        question: "How rich is Bruce Hales?",
        answer:
          "No audited public figure exists. Guardian Australia describes the Universal Business Team he leads as the umbrella for roughly 3,000 member businesses with combined revenue above NZ$12 billion; RNZ reporting describes congregational cash payments flowing to Hales and his family; and companies controlled by his sons won UK PPE contracts exceeding £2.5 billion during COVID-19. He travels by private jet.",
      },
    ],
    overview:
      "Sydney accountant. World Leader of the Plymouth Brethren Christian Church since 2002, a role internal documents call the \u201CMan of God\u201D and \u201CElect Vessel.\u201D Documented in mainstream investigative journalism, court and regulator records, a New Zealand Royal Commission and named ex-member testimony as the operational and doctrinal authority over a trans-national religious-commercial network whose internal directives include instructing a young man in mental distress to drink rat poison, directing a gay teenager into chemical-castration drugs, and personally interviewing an underage child-abuse victim before the church restored her abuser to fellowship.",
    pullQuote: {
      quote:
        "He\u2019d be better to take arsenic, or go and get some rat poison or something, take a bottle of it. \u2026 that would be better, to finish yourself off that way than having to do with the opponents of the truth.",
      attribution:
        "Bruce D. Hales, UK ministry meeting, September 2015, addressing the case of a 25-year-old New Zealand member in contact with ex-member family",
      sourceIds: [
        "hales-ratpoison-stuff",
        "hales-ratpoison-cessnock",
      ],
    },
    inclusionBasis:
      "Named office-holder on PBCC's own resource page; verbatim-from-recording sermons reported by the Sydney Morning Herald, Stuff (NZ), The Times (London) and ABC Four Corners; directly named in the UK Charity Commission's Preston Down Trust decision, the NZ Royal Commission of Inquiry into Abuse in Care, and multiple defamation-proceeding court records.",
    sourceIds: [
      "hales-manofgod-pbcc",
      "hales-manofgod-newstatesman",
      "hales-manofgod-thepost",
      "hales-ratpoison-stuff",
      "hales-ratpoison-cessnock",
      "hales-times-infiltrate",
      "hales-rnz-moneygoround",
      "hales-illawarra-mccorkell",
      "hales-jet-nzherald",
      "pdt-charitycommission-2014",
      "hoyle-excommunicated-memoir",
      "hoyle-times-cyprostat",
      "whanaketia-royalcommission-nz",
      "bigbrethren-fourcorners-2025",
      "jensen-smh-goodweekend-2016",
      "mccorkell-smh-bachelard-2017",
      "byline-ppe-halessons-2020",
      "rudd-cult-2007-age",
      "albanese-cult-2025-sbs",
      "ubt-atoraid-guardian-2024",
      "hollowmen-hager-2006",
      "osg-guardian-surveillance-2023",
    ],
    isPublished: true,
    isRoadmapOnly: false,
    publishedAt: "2026-04-23",
    lastReviewedAt: "2026-04-23",
    body: [
      {
        heading: "Who is Bruce Hales?",
        paragraphs: [
          "Bruce David Hales is a Sydney accountant and businessman who has led the Plymouth Brethren Christian Church since 2002, when his father John S. Hales died holding the office. [[cite:hales-manofgod-pbcc]] Inside the church he is called the “Man of God” and the “Elect Vessel”: members treat his ministry as the voice of God on earth, and his printed sermons are required reading in every Brethren household. [[cite:hales-manofgod-newstatesman]]",
          "The office makes him more than a religious figurehead. On the public record, his word reaches into:",
        ],
        bullets: [
          "What members may own, watch, and listen to. They're not allowed to have televisions or radios, and their internet is filtered through church-linked systems. [[cite:osg-guardian-surveillance-2023]]",
          "Who members may eat with, marry, and work for: nobody outside the church. [[cite:pdt-charitycommission-2014]]",
          "The schools. OneSchool Global's 120-plus campuses teach a curriculum vetted by community volunteers, with subjects like biology and music simply not offered at senior level. [[cite:osg-guardian-surveillance-2023]]",
          "The businesses. Guardian Australia calls the Universal Business Team “the umbrella organisation for the various businesses and charities run by the sect under the leadership of Bruce Hales.” [[cite:ubt-atoraid-guardian-2024]]",
          "Politics. Members don't vote, but Brethren money and volunteers have appeared in campaigns across four countries; Nicky Hager's investigation concluded “no major decisions are made without Hales's approval or direction.” [[cite:hollowmen-hager-2006]]",
        ],
      },
      {
        heading: "The rat-poison sermon",
        paragraphs: [
          "In September 2015, addressing a UK ministry meeting about a 25-year-old New Zealand member (\u201CBS\u201D) who was in contact with ex-member family, Bruce Hales said on the recording: \u201CHe might as well get a shot of \u2014 what\u2019s the best thing to kill you quickly? \u2026 Cyanide? No, not cyanide. Arsenic. How do you get arsenic into you? \u2026 He\u2019d be better to take arsenic, or go and get some rat poison or something, take a bottle of it.\u201D [[cite:hales-ratpoison-stuff]] [[cite:hales-ratpoison-cessnock]]",
          "He added: \u201CNow I\u2019m not advocating him doing that but \u2026 that would be better, to finish yourself off that way [rather] than having to do with the opponents of the truth.\u201D He called the family contact \u201Crotten poison\u201D and said \u201Csend the bastard back\u201D to New Zealand. [[cite:hales-ratpoison-stuff]]",
          "The PBCC\u2019s response, quoted in the same reporting, was that the remarks \u201Cshould not be given a literal interpretation\u201D and that the phrase was \u201Ca common, everyday metaphor.\u201D The church did not deny the words; it denied their literality. [[cite:hales-ratpoison-cessnock]]",
        ],
      },
      {
        heading:
          "Conversion therapy, the Craig Hoyle meeting (December 2007)",
        paragraphs: [
          "In December 2007, Bruce Hales personally met 19-year-old Craig Hoyle in Sydney after Hoyle had disclosed he was gay. Hoyle, now Chief News Editor of New Zealand\u2019s Sunday Star-Times and author of a HarperCollins memoir, has testified publicly, in his book, in The Times (London) and to the NZ Royal Commission of Inquiry into Abuse in Care that Hales told him to \u201Cnever accept\u201D his homosexuality and said: \u201CThere\u2019s medication you can go on for these things.\u201D [[cite:hoyle-excommunicated-memoir]] [[cite:hoyle-times-cyprostat]]",
          "Hales directed Hoyle to two Brethren-member doctors. One, Dr Mark Craddock, Hales\u2019s cousin, after a ten-minute consultation prescribed Cyprostat, a chemical-castration agent ordinarily used in the treatment of prostate cancer and sex offenders. Craddock was later found guilty of unsatisfactory professional conduct by the NSW Medical Professional Standards Committee. [[cite:hoyle-times-cyprostat]]",
          "The NZ Royal Commission\u2019s 2024 final report, \u201CWhanaketia,\u201D records in its PBCC chapter that \u201Cthere is no tolerance for alternative sexual and or gender identification \u2026 conversion therapy is imposed.\u201D [[cite:whanaketia-royalcommission-nz]]",
          "Hoyle himself, on RNZ: \u201CWe believed that Bruce Hales was God\u2019s voice on Earth, that literally everything that came out of his mouth was God speaking to us through a man \u2026 It was unthinkable for me that I would refuse even what they would call a \u2018suggestion\u2019 from the man of God.\u201D [[cite:hoyle-excommunicated-memoir]]",
        ],
      },
      {
        heading:
          "A child abuser restored to fellowship, the Lindsay Jensen case",
        paragraphs: [
          "Brethren elder Lindsay Jensen sexually abused two sisters placed in his Sydney home. Jensen was briefly \u201Cshut up\u201D by the fellowship in August 2003 and was restored to fellowship in December 2003. He was convicted in 2005 and again in 2007 for offences including against a child under ten. [[cite:jensen-smh-goodweekend-2016]]",
          "Between the ages of ten and thirteen, the younger victim met Bruce Hales personally five times in his Sydney office. The Sydney Morning Herald reports that Hales \u201Cran through every humiliating detail of the abuse\u201D and told her he was \u201Ca bit like a judge\u201D who had to \u201Chear both sides.\u201D While Hales conducted those meetings, the girls\u2019 older sister wrote to him begging the fellowship not to reinstate Jensen, writing of the younger victim: \u201CShe has lost faith in the Brethren \u2026 She talks of killing herself.\u201D [[cite:jensen-smh-goodweekend-2016]]",
          "The same reporting records a senior Brethren woman telling the victims\u2019 mother: \u201CIt would be better for a millstone to be hung around your neck and for you to be cast into the depths of the sea rather than go to the police.\u201D Justice William Knight, sentencing Jensen, said: \u201CReligious groups seem to feel that they have some particular right to avoid the responsibilities of the laws of the land. It annoys the tripe out of me.\u201D [[cite:jensen-smh-goodweekend-2016]]",
          "In 2016-17, a PBCC entity signed a Services and Confidentiality Deed worth a proposed $920,000 with PR consultant Tony McCorkell. Bank records and texts reported by the Sydney Morning Herald show two transfers totalling $275,000 in October and November 2016. Michael Bachelard, the journalist who reported the Jensen case, is named in Schedule 3 of the deed as the sole prohibited recipient of anything McCorkell might disclose. [[cite:mccorkell-smh-bachelard-2017]]",
        ],
      },
      {
        heading:
          "\u201CNo mercy\u201D, lobbying the UK Charity Commission",
        paragraphs: [
          "After the UK Charity Commission refused charitable registration to the Preston Down Trust (a PBCC congregation) on 7 June 2012, citing harm arising from the doctrine of separation, the fellowship mounted what The Times (London) later called a \u201CNo mercy\u201D lobbying campaign against the regulator. [[cite:hales-times-infiltrate]]",
          "The Times\u2019s investigation, based on leaked internal documents, reports that Hales \u201Chad instructed members to infiltrate the meeting, to take a tape recorder and dress up as an out [ex-member],\u201D and that the campaign produced a 76-slide internal deck captioned \u201CNo mercy. Nothing else will do.\u201D Members were instructed to \u201Cgo for the jugular, go for the underbelly.\u201D [[cite:hales-times-infiltrate]]",
          "In the course of the lobbying, 449 MPs were visited by Brethren members, more than 3,000 letters reached the Commission and at least 233 MPs wrote to the regulator on the fellowship\u2019s behalf. Conservative MP Peter Bone emailed the Brethren: \u201CYour wish is my command.\u201D [[cite:hales-times-infiltrate]]",
          "On 3 January 2014 the Commission reversed and registered Preston Down Trust under a binding Deed of Variation. The full decision records \u201Cconsiderable evidence of significant \u2018detriment or harm\u2019\u201D emanating from the doctrine and practices of the Plymouth Brethren Christian Church, and discusses the authority held by the \u201Cworldwide leader of the Brethren\u201D, the office Hales holds. [[cite:pdt-charitycommission-2014]]",
        ],
      },
      {
        heading: "A seven-figure NDA, the Mick Dover case (2024\u20132025)",
        paragraphs: [
          "ABC Four Corners\u2019 \u201CBig Brethren\u201D (Louise Milligan, 15 September 2025) reported that Mick Dover, who alleges repeated childhood sexual abuse starting at age five by multiple church members, is suing 75 PBCC individuals he says did nothing to stop it. The program reports that in October 2024 the church offered Dover a settlement of approximately $1 million conditional on a non-disclosure and non-disparagement clause. [[cite:bigbrethren-fourcorners-2025]]",
          "Dover on the broadcast: \u201CI\u2019m here today because I don\u2019t give a damn about a million dollars.\u201D The PBCC\u2019s formal rebuttal, posted on its own website, admits awareness of the matter \u201Caround two years ago\u201D and confirms \u201Cinformal mediation\u201D while disputing the specific $1 million figure, without denying that a settlement process with an NDA attached exists. [[cite:bigbrethren-fourcorners-2025]]",
        ],
      },
      {
        heading: "The commercial arm, UBT, the Hales family, and the ATO raid",
        paragraphs: [
          "Universal Business Team (UBT) is, in Guardian Australia\u2019s description, \u201Cthe umbrella organisation for the various businesses and charities run by the sect under the leadership of Bruce Hales.\u201D UBT claims to service 3,000 Brethren-owned businesses across 19 countries with combined revenue above NZ$12 billion. [[cite:ubt-atoraid-guardian-2024]]",
          "On 19 March 2024, the Australian Taxation Office raided UBT\u2019s Sydney Olympic Park offices under the ATO\u2019s \u201CPrivate Wealth, Behaviours of Concern\u201D programme, used (in the ATO\u2019s own description) \u201Conly in exceptional circumstances including suspected tax evasion, fraud, secrecy or concealment.\u201D UBT\u2019s Australian accounting arm, UBTA, closed within weeks. [[cite:ubt-atoraid-guardian-2024]]",
          "During the COVID-19 pandemic, companies controlled by Bruce Hales\u2019s sons were awarded UK Department of Health and Social Care PPE contracts reported at a combined value exceeding \u00A32.5 billion, including Sante Global LLP (99% owned by Charles and Gareth Hales) and Medco Solutions, routed in part through the government\u2019s so-called \u201CVIP lane.\u201D [[cite:byline-ppe-halessons-2020]]",
          "The Post (NZ) and RNZ report that leaked UBT material and named ex-members describe a \u201Cmoney-go-round\u201D in which Brethren congregations sent cash payments, described by RNZ sources as varied in size to avoid looking like wages, flowing upward toward Hales and his family, the sums putatively totalling millions of dollars a year worldwide. [[cite:hales-manofgod-thepost]] [[cite:hales-rnz-moneygoround]]",
          "Hales tours New Zealand Brethren congregations by private jet, arriving from Sydney. [[cite:hales-jet-nzherald]]",
        ],
      },
      {
        heading: "Schools and surveillance, OneSchool Global and Streamline3",
        paragraphs: [
          "OneSchool Global, the fellowship\u2019s 120-plus-campus international school network, serving ~10,000 students in 20 countries, operates under what former teachers tell Guardian Australia is a community-volunteer review of every teaching resource. Biology, dance, visual arts, music and sociology are not offered in Australian years 11\u201312; UK campuses exclude evolution, sex education, and IT at GCSE. [[cite:osg-guardian-surveillance-2023]]",
          "Devices issued to students and teachers run Streamline3, the UBT-distributed filtering, monitoring and device-lockdown system, which alerts staff in real time when flagged searches occur. One teacher, Guardian Australia reports, was disciplined after the system flagged the teacher\u2019s search related to a famous person who was gay. [[cite:osg-guardian-surveillance-2023]]",
          "Hales in a March 2022 US ministry, as reported by Guardian Australia: \u201CThe devil is against them \u2026 We have to be very watchful in regard of our schooling.\u201D [[cite:osg-guardian-surveillance-2023]]",
        ],
      },
      {
        heading: "On the public record as a cult",
        paragraphs: [
          "On 22 August 2007, then-Opposition Leader Kevin Rudd called the Brethren \u201Can extremist cult and sect,\u201D a \u201Cdangerous cult,\u201D and said: \u201CThey split families and I am deeply concerned about their impact on communities across Australia.\u201D [[cite:rudd-cult-2007-age]]",
          "During the 2025 Australian federal election, Prime Minister Anthony Albanese again called the PBCC a \u201Ccult\u201D after reports that hundreds of PBCC members had been deployed to Liberal Party pre-poll booths in marginal seats, asking on camera: \u201CWhat is the quid pro quo, given that that organisation doesn\u2019t vote in elections?\u201D [[cite:albanese-cult-2025-sbs]]",
          "Nicky Hager\u2019s 2006 book \u201CThe Hollow Men,\u201D investigating the simultaneous appearance of Brethren-funded political advertising in Australia, New Zealand, the United States and Canada in 2004\u201305, writes of Hales and the international political operation: \u201Cno major decisions are made without Hales\u2019s approval or direction.\u201D [[cite:hollowmen-hager-2006]]",
          "ABC Four Corners\u2019 \u201CBig Brethren\u201D (September 2025) summarises the same pattern across two decades of reporting: \u201CWhat the Plymouth Brethren say to the so-called worldlys, that\u2019s you and me, and what the church\u2019s man of God says to its flock are two quite different things.\u201D [[cite:bigbrethren-fourcorners-2025]]",
        ],
      },
      {
        heading: "How this profile is sourced",
        paragraphs: [
          "Every claim above footnotes to a public source registered in src/lib/sources.ts. Verbatim quotes from Hales are presented as the reporting names them, leaked recording, leaked internal document, or named-witness testimony, not as our paraphrase. Anything we cannot pin to a public URL renders with a visible warning marker rather than ship silently. Corrections are welcomed via the repository; see MEMBERS_POLICY.md for inclusion rules and the correction protocol.",
        ],
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // Roadmap entries: persons cleared under MEMBERS_POLICY.md for a future
  // profile, surfaced on the index so readers can see who we plan to cover.
  // Each must carry at least one registered source and a documented public
  // role. No bare-name listings.
  // ---------------------------------------------------------------------------
  {
    slug: "john-s-hales",
    name: "John S. Hales",
    aliases: ["J. S. Hales"],
    category: "historical",
    currentRole: "Former World Leader, Plymouth Brethren (1987–2002)",
    overview:
      "John S. Hales led the fellowship from 1987 until his death in 2002. His succession is referenced on PBCC's own leadership resource alongside that of his son Bruce D. Hales.",
    inclusionBasis:
      "Historical leadership role referenced by PBCC's own resource page and in mainstream reporting on the current leadership line.",
    sourceIds: ["hales-manofgod-pbcc"],
    isPublished: false,
    isRoadmapOnly: true,
    body: [],
  },
];
