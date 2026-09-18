export type BnsChapter = {
  id: string;
  roman: string;
  n: number;
  title: string;
  from: number;
  to: number;
  blurb: string;
};

export const BNS_CHAPTERS: BnsChapter[] = [
  { id: "i", roman: "I", n: 1, title: "Preliminary", from: 1, to: 3, blurb: "Name, commencement, extra-territorial reach, the dictionary, and how the Sanhita is read — including common intention in s. 3(5)." },
  { id: "ii", roman: "II", n: 2, title: "Of Punishments", from: 4, to: 13, blurb: "Death, life, imprisonment, forfeiture, fine, and community service. How sentences combine, commute and enhance." },
  { id: "iii", roman: "III", n: 3, title: "General Exceptions", from: 14, to: 44, blurb: "When an act is not an offence: mistake, accident, infancy, unsoundness, consent, compulsion — and the right of private defence." },
  { id: "iv", roman: "IV", n: 4, title: "Of Abetment, Criminal Conspiracy and Attempt", from: 45, to: 62, blurb: "The inchoate trio. Abetment now covers extra-territorial aid; conspiracy and attempt sit next to it." },
  { id: "v", roman: "V", n: 5, title: "Of Offences Against Woman and Child", from: 63, to: 99, blurb: "Sexual offences, assault, marriage, miscarriage, and offences against the child — placed first among the offence chapters." },
  { id: "vi", roman: "VI", n: 6, title: "Of Offences Affecting the Human Body", from: 100, to: 146, blurb: "Homicide, organised crime, terrorism, hurt, acid, restraint, assault, kidnapping and trafficking." },
  { id: "vii", roman: "VII", n: 7, title: "Of Offences Against the State", from: 147, to: 158, blurb: "Waging war, and the new s. 152 on sovereignty, unity and integrity — not a relabel of sedition." },
  { id: "viii", roman: "VIII", n: 8, title: "Of Offences Relating to the Army, Navy and Air Force", from: 159, to: 168, blurb: "Mutiny, desertion, insubordination, and wearing a service garb." },
  { id: "ix", roman: "IX", n: 9, title: "Of Offences Relating to Elections", from: 169, to: 177, blurb: "Bribery, undue influence, personation, and election accounts." },
  { id: "x", roman: "X", n: 10, title: "Of Offences Relating to Coin, Currency-Notes, Bank-Notes and Government Stamps", from: 178, to: 188, blurb: "Counterfeiting is merged. Currency-note forgeries that lived across IPC 489A–E sit here." },
  { id: "xi", roman: "XI", n: 11, title: "Of Offences Against the Public Tranquillity", from: 189, to: 197, blurb: "Unlawful assembly, common object, rioting, affray, and promoting enmity." },
  { id: "xii", roman: "XII", n: 12, title: "Of Offences by or Relating to Public Servants", from: 198, to: 205, blurb: "Disobedience, unlawful trade, personation — and a new duty to treat a victim." },
  { id: "xiii", roman: "XIII", n: 13, title: "Of Contempts of the Lawful Authority of Public Servants", from: 206, to: 226, blurb: "Summons, proclamations, false information — and the recast suicide-attempt-to-coerce offence." },
  { id: "xiv", roman: "XIV", n: 14, title: "Of False Evidence and Offences Against Public Justice", from: 227, to: 269, blurb: "Perjury, screening, harbouring, false charge, and failing to appear on a bond." },
  { id: "xv", roman: "XV", n: 15, title: "Of Offences Affecting the Public Health, Safety, Convenience, Decency and Morals", from: 270, to: 297, blurb: "Nuisance, adulteration, rash driving, obscenity, lottery." },
  { id: "xvi", roman: "XVI", n: 16, title: "Of Offences Relating to Religion", from: 298, to: 302, blurb: "Defiling a place of worship, outraging religious feelings, disturbing an assembly." },
  { id: "xvii", roman: "XVII", n: 17, title: "Of Offences Against Property", from: 303, to: 334, blurb: "Theft, snatching, extortion, robbery, dacoity, trust, cheating, mischief, trespass." },
  { id: "xviii", roman: "XVIII", n: 18, title: "Of Offences Relating to Documents and to Property Marks", from: 335, to: 350, blurb: "False documents, forgery, using a forged electronic record, property marks." },
  { id: "xix", roman: "XIX", n: 19, title: "Of Criminal Intimidation, Insult, Annoyance, Defamation, etc.", from: 351, to: 357, blurb: "Threats, insult, public mischief, drunken misconduct, defamation." },
  { id: "xx", roman: "XX", n: 20, title: "Repeal and Savings", from: 358, to: 358, blurb: "The IPC goes. Offences committed before 1 July 2024 stay under the old Code." },
];

export function bnsChapterById(id: string) {
  return BNS_CHAPTERS.find((c) => c.id === id);
}
