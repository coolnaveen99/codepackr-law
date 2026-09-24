import {
  BNS_ACT,
  BNS_CHAPTERS,
  BNS_DISCLAIMER,
  BNS_HIGHLIGHTS,
  BNS_IN_FORCE,
  BNS_NAME,
  BNS_SECTIONS_COUNT,
} from './bns'
import {
  BNSS_ACT,
  BNSS_CHAPTERS,
  BNSS_DISCLAIMER,
  BNSS_HIGHLIGHTS,
  BNSS_IN_FORCE,
  BNSS_NAME,
  BNSS_SECTIONS_COUNT,
} from './bnss'
import {
  BSA_ACT,
  BSA_CHAPTERS,
  BSA_DISCLAIMER,
  BSA_HIGHLIGHTS,
  BSA_IN_FORCE,
  BSA_NAME,
  BSA_SECTIONS_COUNT,
} from './bsa'

export type SubjectIntro = {
  act: string
  inForce: string
  counts: string
  body: string
  howTo: string
  highlights: readonly { title: string; body: string }[]
  disclaimer: string
  chapterCount: number
  sectionCount: number
}

const CONSTITUTION_INTRO: SubjectIntro = {
  act: 'Constitution of India',
  inForce: '26 January 1950 · current through the 106th Amendment (2023)',
  counts: '500 articles · official 2024 Legislative Department text',
  body: 'There is no Cytrain page for the Constitution. Article text on every article page is taken from the official Legislative Department English edition, 2024 (as on 1 May 2024, through the 106th Amendment — women’s reservation, Arts 330A / 332A / 334A). The 131st Amendment Bill, 2026 was negatived; do not treat it as law. Open any article for the full study page: official text, meaning, statutory illustrations, extracted case law ratios, and chamber written submissions.',
  howTo: 'Type an article number (21, 368, 330A). Click it. Core doctrines (basic structure, writs) sit above the complete list.',
  highlights: [
    { title: 'Part III is the heart', body: 'Fundamental Rights (Arts 12–35) form the constitutional bedrock. Article 32 is the heart and soul.' },
    { title: '106th Amendment', body: 'Women’s reservation in the Lok Sabha and State Assemblies. In force as a provision; the seats themselves await delimitation after the first census following 2023.' },
  ],
  disclaimer: 'Educational notes from the official 2024 text. Always cross-check the latest Bare Act / India Code.',
  chapterCount: 22,
  sectionCount: 500,
}

export function getSubjectIntro(slug: string): SubjectIntro | null {
  if (slug === 'constitution') return CONSTITUTION_INTRO
  if (slug === 'bns') {
    return {
      act: `${BNS_NAME}, 2023 (${BNS_ACT})`,
      inForce: BNS_IN_FORCE,
      counts: `${BNS_SECTIONS_COUNT} sections · ${BNS_CHAPTERS.length} chapters`,
      body: 'The Bharatiya Nyaya Sanhita is India’s current penal Code. This subject opens with the introduction, then every section from s. 1 to s. 358. Click Section 1 or Section 107 — each has its own study page (meaning, mapping, illustration, exam framework). IPC numbers are history only.',
      howTo: 'Type a section number in the box (107) and jump. Or walk a Chapter. Exam essays (homicide, mens rea) sit above the full list.',
      highlights: BNS_HIGHLIGHTS,
      disclaimer: BNS_DISCLAIMER,
      chapterCount: BNS_CHAPTERS.length,
      sectionCount: BNS_SECTIONS_COUNT,
    }
  }
  if (slug === 'bnss') {
    return {
      act: `${BNSS_NAME}, 2023 (${BNSS_ACT})`,
      inForce: BNSS_IN_FORCE,
      counts: `${BNSS_SECTIONS_COUNT} sections · ${BNSS_CHAPTERS.length} chapters`,
      body: 'The Bharatiya Nagarik Suraksha Sanhita is the criminal procedure Code. Open any of the 531 sections — FIR (s. 173), arrest (s. 35), bail (s. 480), charge (s. 251), appeals (s. 413). CrPC numbers are concordance only. BNSS 482 is anticipatory bail; inherent power is s. 528.',
      howTo: 'Type a section number and jump. Exam essays (FIR, arrest, bail) sit above the complete list.',
      highlights: BNSS_HIGHLIGHTS,
      disclaimer: BNSS_DISCLAIMER,
      chapterCount: BNSS_CHAPTERS.length,
      sectionCount: BNSS_SECTIONS_COUNT,
    }
  }
  if (slug === 'bsa') {
    return {
      act: `${BSA_NAME}, 2023 (${BSA_ACT})`,
      inForce: BSA_IN_FORCE,
      counts: `${BSA_SECTIONS_COUNT} sections · ${BSA_CHAPTERS.length} chapters`,
      body: 'The Bharatiya Sakshya Adhiniyam is the evidence Code. All 170 sections are listed. Res gestae is s. 4, burden of proof starts at s. 104, estoppel at s. 121, electronic records at ss. 61–63. IEA numbers are history only.',
      howTo: 'Type a section number (4, 104, 121) and jump. Doctrine essays sit above the complete list.',
      highlights: BSA_HIGHLIGHTS,
      disclaimer: BSA_DISCLAIMER,
      chapterCount: BSA_CHAPTERS.length,
      sectionCount: BSA_SECTIONS_COUNT,
    }
  }
  return null
}
