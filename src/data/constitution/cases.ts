export type LandmarkCase = {
  id: string;
  name: string;
  citation: string;
  year: number;
  bench?: string;
  holding: string;
  articles: string[];
  tags: string[];
};

export const CASES: LandmarkCase[] = [
  {
    id: "shankari-prasad",
    name: "Shankari Prasad v. Union of India",
    citation: "AIR 1951 SC 458",
    year: 1951,
    holding:
      "Parliament’s amending power under Article 368 includes Fundamental Rights. “Law” in Article 13 does not cover a constitutional amendment. Upheld the 1st Amendment.",
    articles: ["13", "368"],
    tags: ["amendment", "fundamental rights"],
  },
  {
    id: "sajjan-singh",
    name: "Sajjan Singh v. State of Rajasthan",
    citation: "AIR 1965 SC 845",
    year: 1965,
    holding:
      "Reaffirmed Shankari Prasad: Fundamental Rights can be amended. Two judges dissented and planted the seed of the later Golaknath reversal.",
    articles: ["13", "368"],
    tags: ["amendment"],
  },
  {
    id: "golaknath",
    name: "I.C. Golaknath v. State of Punjab",
    citation: "AIR 1967 SC 1643",
    year: 1967,
    bench: "11-judge",
    holding:
      "Overruled Shankari Prasad and Sajjan Singh. Parliament cannot abridge Fundamental Rights; an amendment is “law” under Article 13. Prospective overruling was used so past amendments stood.",
    articles: ["13", "368"],
    tags: ["amendment", "fundamental rights"],
  },
  {
    id: "kesavananda",
    name: "Kesavananda Bharati v. State of Kerala",
    citation: "(1973) 4 SCC 225",
    year: 1973,
    bench: "13-judge, 7:6",
    holding:
      "Parliament may amend any part of the Constitution, including Fundamental Rights, but cannot damage or destroy the basic structure. Overruled Golaknath on the total bar; introduced India’s most important constitutional doctrine.",
    articles: ["13", "31C", "368"],
    tags: ["basic structure", "amendment"],
  },
  {
    id: "raj-narain",
    name: "Indira Nehru Gandhi v. Raj Narain",
    citation: "1975 Supp SCC 1",
    year: 1975,
    holding:
      "Struck down clauses (4) and (5) of Article 329A (39th Amendment) that placed the Prime Minister’s election beyond judicial review. Free and fair elections and rule of law are part of the basic structure.",
    articles: ["329A", "368"],
    tags: ["basic structure", "elections"],
  },
  {
    id: "maneka",
    name: "Maneka Gandhi v. Union of India",
    citation: "(1978) 1 SCC 248",
    year: 1978,
    holding:
      "“Procedure established by law” in Article 21 must be fair, just and reasonable. Articles 14, 19 and 21 form a golden triangle. Overthrew the narrow A.K. Gopalan reading.",
    articles: ["14", "19", "21"],
    tags: ["article 21", "due process"],
  },
  {
    id: "minerva-mills",
    name: "Minerva Mills v. Union of India",
    citation: "(1980) 3 SCC 625",
    year: 1980,
    holding:
      "Struck down the 42nd Amendment’s attempt to give Directive Principles absolute primacy over Fundamental Rights (Art. 31C as expanded) and to immunise amendments from judicial review (Art. 368(4)–(5)). Harmony between Parts III and IV is basic structure.",
    articles: ["31C", "368"],
    tags: ["basic structure", "42nd amendment"],
  },
  {
    id: "waman-rao",
    name: "Waman Rao v. Union of India",
    citation: "(1981) 2 SCC 362",
    year: 1981,
    holding:
      "Amendments made before 24 April 1973 (Kesavananda) are valid; those after that date that damage the basic structure are not. Drew the Ninth Schedule cut-off later confirmed in I.R. Coelho.",
    articles: ["31B", "368"],
    tags: ["ninth schedule", "basic structure"],
  },
  {
    id: "indra-sawhney",
    name: "Indra Sawhney v. Union of India",
    citation: "1992 Supp (3) SCC 217",
    year: 1992,
    bench: "9-judge",
    holding:
      "Upheld 27% OBC reservation, imposed the 50% ceiling as a rule, excluded the “creamy layer”, and barred reservation in promotions (later diluted by the 77th, 81st, 82nd and 85th Amendments).",
    articles: ["16"],
    tags: ["reservation"],
  },
  {
    id: "bommai",
    name: "S.R. Bommai v. Union of India",
    citation: "(1994) 3 SCC 1",
    year: 1994,
    holding:
      "President’s rule under Article 356 is justiciable. The President’s satisfaction can be examined, the floor test is the proper method to test majority, and secularism is part of the basic structure.",
    articles: ["356"],
    tags: ["federalism", "emergency", "secularism"],
  },
  {
    id: "kihoto",
    name: "Kihoto Hollohan v. Zachillhu",
    citation: "1992 Supp (2) SCC 651",
    year: 1992,
    holding:
      "Upheld the Tenth Schedule (anti-defection) but struck down the Speakers’ finality clause. The Speaker’s decision is subject to judicial review.",
    articles: ["102", "191"],
    tags: ["anti-defection", "tenth schedule"],
  },
  {
    id: "vishaka",
    name: "Vishaka v. State of Rajasthan",
    citation: "(1997) 6 SCC 241",
    year: 1997,
    holding:
      "Sexual harassment at the workplace violates Articles 14, 15, 19 and 21. Laid down binding guidelines until Parliament enacted the POSH Act, 2013.",
    articles: ["14", "15", "19", "21"],
    tags: ["article 21", "equality"],
  },
  {
    id: "coelho",
    name: "I.R. Coelho v. State of Tamil Nadu",
    citation: "(2007) 2 SCC 1",
    year: 2007,
    bench: "9-judge",
    holding:
      "A law inserted in the Ninth Schedule after 24 April 1973 can be struck down if it damages the basic structure, especially the golden triangle of Articles 14, 19 and 21.",
    articles: ["31B", "14", "19", "21"],
    tags: ["ninth schedule", "basic structure"],
  },
  {
    id: "nagaraaj",
    name: "M. Nagaraj v. Union of India",
    citation: "(2006) 8 SCC 212",
    year: 2006,
    holding:
      "Upheld the 77th, 81st, 82nd and 85th Amendments on reservation in promotions, subject to the State proving backwardness, inadequacy of representation, and no compromise of efficiency (Art. 335).",
    articles: ["16", "335"],
    tags: ["reservation"],
  },
  {
    id: "puttaswamy",
    name: "Justice K.S. Puttaswamy v. Union of India",
    citation: "(2017) 10 SCC 1",
    year: 2017,
    bench: "9-judge",
    holding:
      "Privacy is a fundamental right flowing from Articles 14, 19 and 21. Overruled the ADM Jabalpur observation that fundamental rights can be suspended into nothingness, and the M.P. Sharma / Kharak Singh contrary notes.",
    articles: ["14", "19", "21"],
    tags: ["privacy", "article 21"],
  },
  {
    id: "navtej",
    name: "Navtej Singh Johar v. Union of India",
    citation: "(2018) 10 SCC 1",
    year: 2018,
    holding:
      "Section 377 IPC, insofar as it criminalised consensual same-sex relations between adults, violates Articles 14, 15, 19 and 21. Sexual orientation is intrinsic to identity and dignity.",
    articles: ["14", "15", "19", "21"],
    tags: ["equality", "article 21"],
  },
  {
    id: "njac",
    name: "Supreme Court Advocates-on-Record Association v. Union of India",
    citation: "(2016) 5 SCC 1",
    year: 2015,
    bench: "5-judge",
    holding:
      "Struck down the 99th Amendment and the NJAC Act. Judicial primacy in appointments is part of the basic structure. The collegium system revived.",
    articles: ["124", "217"],
    tags: ["judiciary", "99th amendment", "basic structure"],
  },
  {
    id: "janhit",
    name: "Janhit Abhiyan v. Union of India",
    citation: "(2023) 5 SCC 1",
    year: 2022,
    bench: "5-judge, 3:2",
    holding:
      "Upheld the 103rd Amendment (10% EWS reservation). Economic criteria can be a basis for reservation; the 50% ceiling is not an inflexible basic-structure rule in this context; EWS exclusion of SCs/STs/OBCs was held valid.",
    articles: ["15", "16"],
    tags: ["reservation", "103rd amendment", "EWS"],
  },
  {
    id: "article-370",
    name: "In Re: Article 370 of the Constitution",
    citation: "(2023) INSC 1058",
    year: 2023,
    bench: "5-judge",
    holding:
      "Upheld the 2019 constitutional orders that rendered Article 370 inoperative and reorganised the State of Jammu and Kashmir into two Union Territories. Held that Article 370 was a temporary provision.",
    articles: ["370", "3"],
    tags: ["federalism", "jammu and kashmir"],
  },
  {
    id: "electoral-bonds",
    name: "Association for Democratic Reforms v. Union of India",
    citation: "(2024) INSC 113",
    year: 2024,
    holding:
      "Struck down the Electoral Bond Scheme. Anonymous political donations violate the voter’s right to information under Article 19(1)(a).",
    articles: ["19"],
    tags: ["elections", "transparency"],
  },
];

export function caseById(id: string) {
  return CASES.find((c) => c.id === id);
}
