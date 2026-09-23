import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 75 (and related): sexual harassment — unwelcome physical contact and advances, demand or request for sexual favours, showing pornography against the will of a woman, or making sexually coloured remarks. Successor structure to IPC s. 354A. Distinct from rape (s. 63/64) and from outraging modesty.',
  study: `Sexual harassment under the BNS:\n\nA man commits sexual harassment by:\n• unwelcome physical contact and advances involving unwelcome and explicit sexual overtures; or\n• a demand or request for sexual favours; or\n• showing pornography against the will of a woman; or\n• making sexually coloured remarks.\n\nPunishment differs by limb (sexually coloured remarks often carry a lighter maximum than the other limbs).\n\nKey points\n• Unwelcome character of the conduct.\n• Distinct from rape (which requires the defined sexual act) and from assault/criminal force with intent to outrage modesty.\n\nCite the applicable BNS section for post-1 July 2024 acts. Workplace and institutional policies may run in parallel but do not replace the criminal offence.`,
  sections: [
    { id: 's-75-m1', title: 'Provenance', order: 1, content: ['Successor structure to IPC s. 354A. Four limbs of sexual harassment.'] },
    { id: 's-75-m2', title: 'Four Limbs', order: 2, content: ['Unwelcome physical contact/advances with explicit sexual overtures; demand/request for sexual favours; showing pornography against will; sexually coloured remarks.'] },
    { id: 's-75-m3', title: 'Ingredients', order: 3, content: ['(1) Conduct within one of the four limbs. (2) Unwelcome / against the will of the woman. (3) By a man (as per the statutory framing).'] },
    { id: 's-75-m4', title: 'Evidence', order: 4, content: ['Nature of the conduct; unwelcome character; context; corroboration where available but not a rigid requirement.'] },
    { id: 's-75-m5', title: 'Procedure', order: 5, content: ['Forum per BNSS Schedule; often compoundable in limited forms as per schedule; distinct from departmental inquiries.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-75', section: 's. 75', title: 'Sexual harassment' }],
  examples: [
    { id: 's-75-ex1', title: 'Unwelcome advances', illustrationType: 'practical', description: 'A makes repeated unwelcome explicit sexual advances and physical contact toward B. Sexual harassment is made out.' },
    { id: 's-75-ex2', title: 'Rape instead', illustrationType: 'fail-scenario', description: 'If the conduct amounts to the defined sexual act of rape, charge under s. 63/64 (or aggravated sections), not merely sexual harassment.' },
  ],
  hypotheticals: [{ id: 's-75-hypo', title: 'Sexually coloured remarks', facts: 'Accused repeatedly makes sexually coloured remarks to a woman at the workplace.', question: 'Is s. 75 attracted?', applicableLaw: 'BNS sexual harassment provisions.', analysis: 'Sexually coloured remarks are a listed limb — yes.', conclusion: 'Sexual harassment made out.' }],
  distinctions: [{ id: 's-75-dist', title: 'Sexual harassment vs Rape vs Outraging modesty', left: 'Sexual harassment', right: 'Rape / Outraging modesty', rows: [{ point: 'Conduct', left: 'Four listed limbs (advances, demand, pornography, remarks)', right: 'Defined sexual act / assault or criminal force with intent to outrage modesty' }] }],
  misconceptions: [{ id: 's-75-trap', trap: 'Sexual harassment requires physical contact.', correction: 'Physical contact is only one limb. Demand for sexual favours, showing pornography against will, and sexually coloured remarks are also sexual harassment without contact.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-75-brief', draftingCategory: 'brief', question: 'Define sexual harassment under the BNS.', answer: 'A man commits sexual harassment by unwelcome physical contact and advances involving explicit sexual overtures, or a demand/request for sexual favours, or showing pornography against a woman’s will, or making sexually coloured remarks. Distinct from rape and from outraging modesty.', explanation: 'Short note.' },
    { id: 's-75-sub', draftingCategory: 'submissions', question: 'Submissions on sexual harassment.', answer: 'I. Conduct within a listed limb. II. Unwelcome character. III. Distinction from rape. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS sexual harassment provisions', 'BNS s. 64', 'BNS outraging-modesty provisions', 'IPC s. 354A (historical)'],
  examTips: ['List all four limbs.', 'Distinguish from rape and outraging modesty.'],
  revisionPoints: ['Four limbs: contact/advances, demand for favours, pornography against will, sexually coloured remarks.', 'Contact not always required.', 'Not the same as rape.'],
  relatedTopics: ['s-64', 's-63', 's-77', 's-28'],
}

export default content
