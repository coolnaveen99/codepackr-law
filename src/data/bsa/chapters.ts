export type bsaChapter = {
  id: string
  roman: string
  n: number
  title: string
  from: number
  to: number
  blurb: string
}

export const BSA_CHAPTERS: bsaChapter[] = [
  { id: "i", roman: "I", n: 1, title: "Preliminary", from: 1, to: 2, blurb: "Sections 1–2." },
  { id: "ii", roman: "II", n: 2, title: "Relevancy of facts", from: 3, to: 50, blurb: "Sections 3–50." },
  { id: "iii", roman: "III", n: 3, title: "Facts which need not be proved", from: 51, to: 53, blurb: "Sections 51–53." },
  { id: "iv", roman: "IV", n: 4, title: "Oral evidence", from: 54, to: 55, blurb: "Sections 54–55." },
  { id: "v", roman: "V", n: 5, title: "Documentary evidence", from: 56, to: 93, blurb: "Sections 56–93." },
  { id: "vi", roman: "VI", n: 6, title: "Exclusion of oral evidence by documentary evidence", from: 94, to: 103, blurb: "Sections 94–103." },
  { id: "vii", roman: "VII", n: 7, title: "Burden of proof", from: 104, to: 120, blurb: "Sections 104–120." },
  { id: "viii", roman: "VIII", n: 8, title: "Estoppel", from: 121, to: 123, blurb: "Sections 121–123." },
  { id: "ix", roman: "IX", n: 9, title: "Witnesses", from: 124, to: 139, blurb: "Sections 124–139." },
  { id: "x", roman: "X", n: 10, title: "Examination of witnesses", from: 140, to: 168, blurb: "Sections 140–168." },
  { id: "xi", roman: "XI", n: 11, title: "Improper admission and rejection of evidence", from: 169, to: 169, blurb: "Sections 169–169." },
  { id: "xii", roman: "XII", n: 12, title: "Repeal and savings", from: 170, to: 170, blurb: "Sections 170–170." },
]

export function bsaChapterById(id: string) {
  return BSA_CHAPTERS.find((c) => c.id === id)
}
