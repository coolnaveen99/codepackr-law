export type BnsCase = {
  id: string;
  name: string;
  citation: string;
  year: number;
  holding: string;
  sections: string[];
};

export const BNS_CASES: BnsCase[] = [
  {
    id: "govinda",
    name: "Regina v. Govinda",
    citation: "(1876) 1 Bom 342",
    year: 1876,
    holding:
      "The classic Indian distinction between culpable homicide and murder — intention and the degree of probability of death. Still the starting case for ss. 100–101.",
    sections: ["100", "101", "105"],
  },
  {
    id: "virsa-singh",
    name: "Virsa Singh v. State of Punjab",
    citation: "AIR 1958 SC 465",
    year: 1958,
    holding:
      "Clause 3 of murder: the bodily injury intended must be sufficient in the ordinary course of nature to cause death. The offender need not intend death itself. Reads on to s. 101 thirdly.",
    sections: ["101", "103"],
  },
  {
    id: "nanavati",
    name: "K.M. Nanavati v. State of Maharashtra",
    citation: "AIR 1962 SC 605",
    year: 1962,
    holding:
      "Grave and sudden provocation is an exception to murder, not a free pass. The reasonable-person test and the cooling-off interval. Exception 1 to s. 101.",
    sections: ["101", "105"],
  },
  {
    id: "bachan-singh",
    name: "Bachan Singh v. State of Punjab",
    citation: "(1980) 2 SCC 684",
    year: 1980,
    holding:
      "Death is the exception: rarest of rare, after weighing aggravating and mitigating circumstances. Governs sentencing under s. 103.",
    sections: ["4", "103"],
  },
  {
    id: "machhi-singh",
    name: "Machhi Singh v. State of Punjab",
    citation: "(1983) 3 SCC 470",
    year: 1983,
    holding:
      "Operationalises rarest-of-rare: manner of commission, motive, anti-social nature, magnitude, personality of the victim.",
    sections: ["103"],
  },
  {
    id: "independent-thought",
    name: "Independent Thought v. Union of India",
    citation: "(2017) 10 SCC 800",
    year: 2017,
    holding:
      "The marital-rape exception cannot apply to a wife under 18. The exception in s. 63 must be read with this holding and the POCSO overlap.",
    sections: ["63", "64", "2"],
  },
  {
    id: "navtej",
    name: "Navtej Singh Johar v. Union of India",
    citation: "(2018) 10 SCC 1",
    year: 2018,
    holding:
      "IPC 377 read down for consenting adults. BNS does not re-enact 377. Consensual same-sex intimacy is not an offence; non-consensual male rape is a legislative gap.",
    sections: ["63", "358"],
  },
  {
    id: "joseph-shine",
    name: "Joseph Shine v. Union of India",
    citation: "(2019) 3 SCC 39",
    year: 2019,
    holding:
      "Adultery (IPC 497) struck down. BNS does not revive it. Marital infidelity is not, by itself, a crime.",
    sections: ["82", "358"],
  },
  {
    id: "kedarnath",
    name: "Kedar Nath Singh v. State of Bihar",
    citation: "AIR 1962 SC 955",
    year: 1962,
    holding:
      "Sedition (IPC 124A) was read down to incitement of violence or public-order disorder. 124A is repealed. s. 152 is a different offence — do not paste Kedarnath onto it uncritically.",
    sections: ["152"],
  },
  {
    id: "barendra-kumar",
    name: "Barendra Kumar Ghosh v. King Emperor",
    citation: "AIR 1925 PC 1",
    year: 1925,
    holding:
      "“They also serve who only stand and wait.” Presence in furtherance of common intention is enough. The ancestor of s. 3(5).",
    sections: ["3"],
  },
  {
    id: "mehboob-shah",
    name: "Mahbub Shah v. Emperor",
    citation: "AIR 1945 PC 118",
    year: 1945,
    holding:
      "Common intention requires a pre-arranged plan. Mere presence at the scene is not s. 3(5). Contrast with common object under s. 190.",
    sections: ["3", "190"],
  },
  {
    id: "tukaram",
    name: "Tukaram v. State of Maharashtra",
    citation: "AIR 1979 SC 185",
    year: 1979,
    holding:
      "The Mathura case — a cautionary tale on consent. The 1983 reforms, and later the 2013 package, are why s. 63 now requires unequivocal voluntary consent.",
    sections: ["63", "64"],
  },
  {
    id: "mukesh",
    name: "Mukesh v. State (NCT of Delhi)",
    citation: "(2017) 6 SCC 1",
    year: 2017,
    holding:
      "The Nirbhaya appeals. Confirmed death in a gang-rape-and-murder case and is the backdrop to the 2013 reforms now folded into ss. 63–71.",
    sections: ["63", "64", "66", "70"],
  },
  {
    id: "laxmi",
    name: "Laxmi v. Union of India",
    citation: "(2014) 4 SCC 427",
    year: 2014,
    holding:
      "Acid-attack directions on sale, compensation and treatment. Statutory shape is now s. 124, with the fine going to the victim.",
    sections: ["124", "200"],
  },
  {
    id: "pyare-lal",
    name: "Pyare Lal Bhargava v. State of Rajasthan",
    citation: "AIR 1963 SC 1094",
    year: 1963,
    holding:
      "Criminal breach of trust: entrustment is the hinge. Without entrustment you are in misappropriation or theft, not s. 316.",
    sections: ["314", "316"],
  },
  {
    id: "hira-lal",
    name: "Hira Lal v. State (Govt. of NCT), Delhi",
    citation: "(2003) 8 SCC 80",
    year: 2003,
    holding:
      "Dowry death: the 7-year window, “soon before”, and the presumption. Reads onto s. 80.",
    sections: ["80", "85"],
  },
];

export function bnsCasesForSection(id: string) {
  return BNS_CASES.filter((c) => c.sections.includes(id));
}
