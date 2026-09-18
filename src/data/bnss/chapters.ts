export type bnssChapter = {
  id: string
  roman: string
  n: number
  title: string
  from: number
  to: number
  blurb: string
}

export const BNSS_CHAPTERS: bnssChapter[] = [
  { id: "i", roman: "I", n: 1, title: "Preliminary", from: 1, to: 5, blurb: "Sections 1–5." },
  { id: "ii", roman: "II", n: 2, title: "Constitution of Criminal Courts and Offices", from: 6, to: 20, blurb: "Sections 6–20." },
  { id: "iii", roman: "III", n: 3, title: "Power of Courts", from: 21, to: 29, blurb: "Sections 21–29." },
  { id: "iv", roman: "IV", n: 4, title: "Powers of superior officers of police and aid to Magistrates and the police", from: 30, to: 34, blurb: "Sections 30–34." },
  { id: "v", roman: "V", n: 5, title: "Arrest of persons", from: 35, to: 62, blurb: "Sections 35–62." },
  { id: "vi", roman: "VI", n: 6, title: "Processes to compel appearance", from: 63, to: 93, blurb: "Sections 63–93." },
  { id: "vii", roman: "VII", n: 7, title: "Processes to compel the production of things", from: 94, to: 110, blurb: "Sections 94–110." },
  { id: "viii", roman: "VIII", n: 8, title: "Reciprocal arrangements and attachment / forfeiture of property", from: 111, to: 124, blurb: "Sections 111–124." },
  { id: "ix", roman: "IX", n: 9, title: "Security for keeping the peace and for good behaviour", from: 125, to: 143, blurb: "Sections 125–143." },
  { id: "x", roman: "X", n: 10, title: "Order for maintenance of wives, children and parents", from: 144, to: 147, blurb: "Sections 144–147." },
  { id: "xi", roman: "XI", n: 11, title: "Maintenance of public order and tranquillity", from: 148, to: 167, blurb: "Sections 148–167." },
  { id: "xii", roman: "XII", n: 12, title: "Preventive action of the police", from: 168, to: 172, blurb: "Sections 168–172." },
  { id: "xiii", roman: "XIII", n: 13, title: "Information to the police and their powers to investigate", from: 173, to: 196, blurb: "Sections 173–196." },
  { id: "xiv", roman: "XIV", n: 14, title: "Jurisdiction of the criminal courts in inquiries and trials", from: 197, to: 209, blurb: "Sections 197–209." },
  { id: "xv", roman: "XV", n: 15, title: "Conditions requisite for initiation of proceedings", from: 210, to: 222, blurb: "Sections 210–222." },
  { id: "xvi", roman: "XVI", n: 16, title: "Complaints to Magistrates", from: 223, to: 226, blurb: "Sections 223–226." },
  { id: "xvii", roman: "XVII", n: 17, title: "Commencement of proceedings before Magistrates", from: 227, to: 233, blurb: "Sections 227–233." },
  { id: "xviii", roman: "XVIII", n: 18, title: "The charge", from: 234, to: 247, blurb: "Sections 234–247." },
  { id: "xix", roman: "XIX", n: 19, title: "Trial before a Court of Session", from: 248, to: 260, blurb: "Sections 248–260." },
  { id: "xx", roman: "XX", n: 20, title: "Trial of warrant-cases by Magistrates", from: 261, to: 273, blurb: "Sections 261–273." },
  { id: "xxi", roman: "XXI", n: 21, title: "Trial of summons-cases by Magistrates", from: 274, to: 282, blurb: "Sections 274–282." },
  { id: "xxii", roman: "XXII", n: 22, title: "Summary trials", from: 283, to: 288, blurb: "Sections 283–288." },
  { id: "xxiii", roman: "XXIII", n: 23, title: "Plea bargaining", from: 289, to: 300, blurb: "Sections 289–300." },
  { id: "xxiv", roman: "XXIV", n: 24, title: "Attendance of persons confined or detained in prisons", from: 301, to: 306, blurb: "Sections 301–306." },
  { id: "xxv", roman: "XXV", n: 25, title: "Evidence in inquiries and trials", from: 307, to: 336, blurb: "Sections 307–336." },
  { id: "xxvi", roman: "XXVI", n: 26, title: "General provisions as to inquiries and trials", from: 337, to: 366, blurb: "Sections 337–366." },
  { id: "xxvii", roman: "XXVII", n: 27, title: "Provisions as to accused persons of unsound mind", from: 367, to: 378, blurb: "Sections 367–378." },
  { id: "xxviii", roman: "XXVIII", n: 28, title: "Provisions as to offences affecting the administration of justice", from: 379, to: 391, blurb: "Sections 379–391." },
  { id: "xxix", roman: "XXIX", n: 29, title: "The judgment", from: 392, to: 406, blurb: "Sections 392–406." },
  { id: "xxx", roman: "XXX", n: 30, title: "Submission of death sentences for confirmation", from: 407, to: 412, blurb: "Sections 407–412." },
  { id: "xxxi", roman: "XXXI", n: 31, title: "Appeals", from: 413, to: 435, blurb: "Sections 413–435." },
  { id: "xxxii", roman: "XXXII", n: 32, title: "Reference and revision", from: 436, to: 445, blurb: "Sections 436–445." },
  { id: "xxxiii", roman: "XXXIII", n: 33, title: "Transfer of criminal cases", from: 446, to: 452, blurb: "Sections 446–452." },
  { id: "xxxiv", roman: "XXXIV", n: 34, title: "Execution, suspension, remission and commutation of sentences", from: 453, to: 477, blurb: "Sections 453–477." },
  { id: "xxxv", roman: "XXXV", n: 35, title: "Provisions as to bail and bonds", from: 478, to: 496, blurb: "Sections 478–496." },
  { id: "xxxvi", roman: "XXXVI", n: 36, title: "Disposal of property", from: 497, to: 505, blurb: "Sections 497–505." },
  { id: "xxxvii", roman: "XXXVII", n: 37, title: "Irregular proceedings", from: 506, to: 512, blurb: "Sections 506–512." },
  { id: "xxxviii", roman: "XXXVIII", n: 38, title: "Limitation for taking cognizance of certain offences", from: 513, to: 519, blurb: "Sections 513–519." },
  { id: "xxxix", roman: "XXXIX", n: 39, title: "Miscellaneous", from: 520, to: 531, blurb: "Sections 520–531." },
]

export function bnssChapterById(id: string) {
  return BNSS_CHAPTERS.find((c) => c.id === id)
}
