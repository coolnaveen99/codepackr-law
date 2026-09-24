import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 99 (and related end-of-Chapter-V provisions): remaining child-protection and woman-protection offences that close Chapter V before the homicide block (s. 100 onward). Read with ss. 63–98 for the full Chapter V scheme. Always apply the date-of-offence rule and concurrent special laws (POCSO, Dowry Prohibition Act, etc.).',
  study: `Chapter V of the BNS groups offences against woman and child before the general body-offence chapters.\n\nBy the end of the chapter (around s. 99), the scheme has covered:\n• Sexual offences (rape definition and punishment, aggravated forms, gang rape)\n• Sexual harassment, stalking, insulting modesty\n• Dowry death and cruelty\n• Child-related offences (hiring to commit offence, exposure/abandonment, procurement)\n• Related protective provisions\n\nWhen analysing any Chapter V offence:\n1. Identify the exact section and ingredients.\n2. Apply s. 2 definitions (especially “child”, “woman”).\n3. Apply s. 28 (consent) where relevant.\n4. Check concurrent special-law liability (POCSO, Dowry Prohibition Act, etc.).\n5. Apply the date-of-offence rule (BNS for ≥ 1 July 2024).\n\nCite the specific BNS section for the charged conduct.`,
  sections: [
    { id: 's-99-m1', title: 'Chapter V Overview', order: 1, content: ['Offences against woman and child placed before general body offences. Covers sexual offences, harassment, stalking, dowry death, cruelty, child protection.'] },
    { id: 's-99-m2', title: 'Cross-Cutting Rules', order: 2, content: ['s. 2 definitions; s. 28 consent; concurrent special laws; date-of-offence rule.'] },
    { id: 's-99-m3', title: 'High-Yield Sections', order: 3, content: ['63–64 (rape); 66, 70 (aggravated/gang); 75, 77 (harassment/stalking); 80, 85 (dowry death/cruelty); 93, 95 (child exposure/hiring).'] },
    { id: 's-99-m4', title: 'Evidence Themes', order: 4, content: ['Consent and s. 28; age of child; medical and digital evidence; dying declarations in dowry/suicide cases.'] },
    { id: 's-99-m5', title: 'Procedure', order: 5, content: ['BNSS victim protections; in-camera trial; Sessions trial for serious forms; concurrent special-law procedure where applicable.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-99', section: 's. 99', title: 'Chapter V closing / related protective offences' }],
  examples: [
    { id: 's-99-ex1', title: 'Chapter V charging', illustrationType: 'practical', description: 'A fact pattern involving rape and cruelty may attract s. 64 and s. 85 (and s. 80 if death within seven years). Charge all applicable Chapter V sections.' },
    { id: 's-99-ex2', title: 'Special law overlap', illustrationType: 'practical', description: 'Sexual offence involving a child under 18: charge under BNS and POCSO where both sets of ingredients are met.' },
  ],
  hypotheticals: [{ id: 's-99-hypo', title: 'Chapter V map', facts: 'Married woman dies within 4 years of marriage after documented dowry harassment; prior sexual violence also alleged.', question: 'Which Chapter V sections are in play?', applicableLaw: 'BNS ss. 64, 80, 85; s. 28.', analysis: 'Rape (if ingredients met); cruelty (s. 85); dowry death (s. 80) given death within 7 years + dowry-linked cruelty.', conclusion: 'Multiple Chapter V sections may be charged together.' }],
  distinctions: [],
  misconceptions: [{ id: 's-99-trap', trap: 'Chapter V offences replace all special laws on women and children.', correction: 'Chapter V is the BNS component. POCSO, Dowry Prohibition Act, and other special laws continue to apply concurrently where their ingredients are met.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-99-brief', draftingCategory: 'brief', question: 'Outline the structure of Chapter V of the BNS (offences against woman and child).', answer: 'Chapter V places offences against woman and child before general body offences. It covers rape and aggravated/gang forms, sexual harassment and stalking, insulting modesty, dowry death and cruelty, and child-protection offences (exposure, hiring to commit offence, procurement). Apply s. 2 definitions, s. 28 consent, concurrent special laws, and the date-of-offence rule.', explanation: 'Short note.' },
    { id: 's-99-sub', draftingCategory: 'submissions', question: 'Submissions on Chapter V charging.', answer: 'I. Identify each applicable section. II. Definitions and consent. III. Concurrent special law. IV. Date-of-offence. V. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS Chapter V', 'BNS s. 2', 'BNS s. 28', 'POCSO', 'Dowry Prohibition Act'],
  examTips: ['Map the facts onto specific Chapter V sections; do not stop at one section when several apply.', 'Always check POCSO/Dowry Act overlap.'],
  revisionPoints: ['Chapter V = woman & child before body offences.', 'Key stack: 63–64, 66, 70, 75, 77, 80, 85, 93, 95.', 'Concurrent special laws still apply.'],
  relatedTopics: ['s-64', 's-80', 's-85', 's-95', 's-2', 's-28'],
}

export default content
