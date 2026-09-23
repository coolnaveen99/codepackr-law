import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 63 (and related definitional provisions in Chapter V) define rape. Sexual intercourse or sexual acts with a woman against her will, without her consent, or with consent obtained under fear/misconception, or with a woman under the statutory age, constitute rape. Consent is governed by s. 28. Punishment is under s. 64 and aggravated sections. Chapter V places these offences before body offences.',
  study: `The definition of rape under the BNS sits in Chapter V (Offences Against Woman and Child).\n\nCore idea: sexual intercourse / specified sexual acts with a woman\n• against her will, or\n• without her consent, or\n• with consent obtained under fear of death/hurt or misconception of fact (when the man knows or has reason to believe the consent was so given), or\n• with a woman under the age fixed by the section (statutory rape), or\n• in other circumstances set out in the statutory text (e.g. consent under false promise of marriage in the limited form recognised by the section, if any).\n\ns. 28 is critical: consent under fear or misconception known to the doer is not valid consent. Consent of a child under 12 is never valid.\n\nPunishment: s. 64 (base) and aggravated provisions. Date-of-offence rule applies (BNS for ≥ 1 July 2024).\n\nAlways read the exact current text of the definitional section and s. 64 together.`,
  sections: [
    { id: 's-63-m1', title: 'Provenance & Placement', order: 1, content: ['Chapter V elevates offences against woman and child. Definition succeeds IPC s. 375 with reforms; punishment in s. 64.'],
    },
    { id: 's-63-m2', title: 'Definitional Elements', order: 2, content: ['Sexual act as defined; against will / without consent / invalid consent under s. 28 / under-age; other statutory circumstances.'] },
    { id: 's-63-m3', title: 'Consent (s. 28)', order: 3, content: ['Fear of injury or misconception of fact + knowledge of the doer = invalid consent. Child under 12: no valid consent.'] },
    { id: 's-63-m4', title: 'Evidence', order: 4, content: ['Testimony of the prosecutrix; medical and forensic evidence; BSA rules; no universal corroboration requirement but quality of evidence is tested.'],
    },
    { id: 's-63-m5', title: 'Procedure', order: 5, content: ['Cognizable, non-bailable; Sessions trial; BNSS victim protections and in-camera trial.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-63', section: 's. 63', title: 'Rape (definitional pathway)' }],
  examples: [
    { id: 's-63-ex1', title: 'Without consent', illustrationType: 'practical', description: 'Sexual intercourse without the woman’s consent. The definitional ingredients are met; punishment under s. 64.' },
    { id: 's-63-ex2', title: 'Consent under misconception', illustrationType: 'practical', description: 'Consent obtained under a misconception of fact known to the accused. Invalid under s. 28; rape is made out.' },
  ],
  hypotheticals: [{ id: 's-63-hypo', title: 'Consent issue', facts: 'Accused claims consent; evidence shows fear of injury known to him.', question: 'Is rape made out?', applicableLaw: 'BNS definition; s. 28; s. 64.', analysis: 'Consent under fear known to the doer is invalid. Definitional ingredients satisfied.', conclusion: 'Offence made out; punishable under s. 64.' }],
  distinctions: [],
  misconceptions: [{ id: 's-63-trap', trap: 'Absence of physical resistance means consent.', correction: 'Consent must be free and voluntary. Fear, misconception, or incapacity under s. 28 invalidate consent. Lack of resistance is not conclusive of consent.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-63-brief', draftingCategory: 'brief', question: 'Outline the definition of rape under the BNS and the role of s. 28.', answer: 'Rape is the defined sexual act with a woman against her will, without consent, with invalid consent under s. 28, or under the statutory age/other circumstances. Consent under fear or misconception known to the accused is not valid. Punishment is under s. 64.', explanation: 'Short note.' },
    { id: 's-63-sub', draftingCategory: 'submissions', question: 'Submissions on the definitional pathway for rape.', answer: 'I. Definitional act. II. Absence of valid consent (s. 28). III. Evidence. IV. Punishment under s. 64. V. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS Chapter V definitional section for rape', 'BNS s. 64', 'BNS s. 28', 'IPC ss. 375–376 (historical)'],
  examTips: ['Always pair the definition with s. 28 and s. 64.', 'Do not treat absence of resistance as proof of consent.'],
  revisionPoints: ['Definition in Chapter V; punishment s. 64.', 's. 28 controls validity of consent.', 'Statutory age / incapacity = no valid consent.'],
  relatedTopics: ['s-64', 's-28', 'sexual-offences'],
}

export default content
