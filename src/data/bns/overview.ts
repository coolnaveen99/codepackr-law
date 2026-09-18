export const BNS_NAME = "Bharatiya Nyaya Sanhita";
export const BNS_SHORT = "BNS";
export const BNS_ACT = "Act No. 45 of 2023";
export const BNS_ASSENT = "25 December 2023";
export const BNS_IN_FORCE = "1 July 2024";
export const BNS_SECTIONS_COUNT = 358;
export const BNS_CHAPTERS_COUNT = 20;
export const BNS_CURRENT_AS_OF = "September 2026";

export const BNS_STATS = {
  sections: 358,
  chapters: 20,
  newOffences: 20,
  ipcDropped: 19,
  imprisonmentRaised: 33,
  finesRaised: 83,
  mandatoryMinima: 23,
  communityServiceOffences: 6,
  ipcSections: 511,
} as const;

export const BNS_DISCLAIMER =
  "Study companion compiled from the Bharatiya Nyaya Sanhita, 2023 (Act 45 of 2023), the MHA commencement notification S.O. 850(E), PRS Legislative Research, the BPRD/Delhi Police Academy concordance, and later case-law notes. It is not the official Gazette. For authentic wording, consult the Legislative Department / India Code.";

export const BNS_SOURCES = [
  {
    title: "Bharatiya Nyaya Sanhita, 2023 — India Code",
    detail: "Act 45 of 2023. Arrangement of sections and authentic text.",
  },
  {
    title: "Ministry of Home Affairs — S.O. 850(E), 23 February 2024",
    detail: "Appoints 1 July 2024 as the commencement date, except section 106(2).",
  },
  {
    title: "PRS Legislative Research",
    detail: "Bill track and comparison of BNS with the Indian Penal Code, 1860.",
  },
  {
    title: "BPRD / Delhi Police Academy BNS Handbook",
    detail: "Official training concordance of BNS sections with IPC predecessors.",
  },
  {
    title: "iPleaders — IPC vs BNS comparison (2026)",
    detail: "Practice mapping, transition traps, and continuity of precedent.",
  },
] as const;

export const BNS_HIGHLIGHTS = [
  {
    title: "Women and children first",
    body: "Offences against woman and child sit in Chapter V — before offences against the human body. Gang-rape of a woman under 18 now carries remainder-of-life or death.",
  },
  {
    title: "Sedition is gone; s. 152 is not sedition",
    body: "IPC 124A is repealed. Section 152 punishes acts endangering sovereignty, unity and integrity. The ingredients differ; Kedarnath does not migrate on autopilot.",
  },
  {
    title: "Community service",
    body: "A sixth punishment in s. 4(f). Used for specified petty offences — first theft under ₹5,000, s. 226, public drunkenness, and a handful of official-duty defaults.",
  },
  {
    title: "106(2) is not in force",
    body: "Hit-and-run causing death and fleeing was kept out of the 1 July 2024 commencement. Section 106(1) (rash or negligent death) is in force.",
  },
] as const;

export const BNS_DROPPED = [
  { ipc: "124A", label: "Sedition", note: "Replaced by a different offence in s. 152." },
  { ipc: "309", label: "Attempt to suicide (general)", note: "Only the public-servant coercion form survives as s. 226." },
  { ipc: "377", label: "Unnatural offences", note: "Not revived after Navtej Singh Johar. Non-consensual male rape is a charged gap." },
  { ipc: "497", label: "Adultery", note: "Already struck down in Joseph Shine; not re-enacted." },
  { ipc: "Ch. XIII", label: "Weights and measures", note: "Moved to the Legal Metrology Act, 2009." },
] as const;
