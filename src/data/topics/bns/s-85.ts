import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 85: cruelty by husband or relative of husband — subjecting a woman to cruelty (wilful conduct likely to drive her to suicide or cause grave injury, or harassment for dowry). Successor to IPC s. 498A. Cognizable and non-bailable in the usual form. Often charged with s. 80 when death occurs.',
  study: `Section 85 is the cruelty provision protecting married women.\n\nCruelty means:\n(a) any wilful conduct which is of such a nature as is likely to drive the woman to commit suicide or to cause grave injury or danger to life, limb or health (mental or physical); or\n(b) harassment of the woman where such harassment is with a view to coercing her or any person related to her to meet any unlawful demand for any property or valuable security, or is on account of failure by her or any person related to her to meet such demand.\n\nThe accused is the husband or a relative of the husband.\n\nPunishment is as stated in the section. The offence is widely used and has been the subject of guidelines on arrest and investigation to prevent misuse, but the substantive offence remains.\n\nCite BNS s. 85 for post-1 July 2024 acts. Often paired with s. 80 when death occurs within seven years.`,
  sections: [
    { id: 's-85-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 498A. Cruelty by husband or relative of husband.'] },
    { id: 's-85-m2', title: 'Two Limbs of Cruelty', order: 2, content: ['(a) Wilful conduct likely to drive to suicide or cause grave injury/danger to life, limb or health. (b) Harassment for unlawful demand for property/valuable security (dowry-linked).'] },
    { id: 's-85-m3', title: 'Ingredients', order: 3, content: ['(1) Woman is the wife. (2) Accused is husband or relative of husband. (3) Conduct amounting to cruelty under (a) or (b).'] },
    { id: 's-85-m4', title: 'Evidence', order: 4, content: ['Nature and frequency of conduct; impact on the woman; link to dowry demand if limb (b) is relied upon.'] },
    { id: 's-85-m5', title: 'Procedure', order: 5, content: ['Cognizable; arrest and investigation subject to judicial guidelines; often tried with related offences.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-85', section: 's. 85', title: 'Cruelty by husband or relatives of husband' }],
  examples: [
    { id: 's-85-ex1', title: 'Dowry harassment', illustrationType: 'practical', description: 'Husband and in-laws repeatedly harass the wife for more dowry. Limb (b) of s. 85 is attracted.' },
    { id: 's-85-ex2', title: 'Ordinary marital discord', illustrationType: 'fail-scenario', description: 'Ordinary quarrels without wilful conduct of the statutory gravity or dowry-linked harassment do not amount to cruelty under s. 85.' },
  ],
  hypotheticals: [{ id: 's-85-hypo', title: 'Cruelty limbs', facts: 'Wife is subjected to continuous mental harassment linked to dowry demands by the husband.', question: 'Is s. 85 made out?', applicableLaw: 'BNS s. 85.', analysis: 'Harassment for unlawful demand for property fits limb (b).', conclusion: 's. 85 attracted.' }],
  distinctions: [{ id: 's-85-dist', title: 's. 85 vs s. 80', left: 's. 85 (cruelty)', right: 's. 80 (dowry death)', rows: [{ point: 'Result required', left: 'Cruelty as defined (no death required)', right: 'Death within 7 years + dowry-linked cruelty → deeming' }] }],
  misconceptions: [{ id: 's-85-trap', trap: 'Every marital dispute is cruelty under s. 85.', correction: 'Only wilful conduct of the statutory gravity (likely to drive to suicide or cause grave injury) or harassment for unlawful demand for property/valuable security.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-85-brief', draftingCategory: 'brief', question: 'Explain cruelty under BNS s. 85.', answer: 'Cruelty by the husband or his relative means (a) wilful conduct likely to drive the woman to suicide or cause grave injury/danger to life, limb or health, or (b) harassment for or on account of an unlawful demand for property or valuable security. It is a standalone offence and often paired with s. 80 when death occurs.', explanation: 'Short note.' },
    { id: 's-85-sub', draftingCategory: 'submissions', question: 'Submissions on s. 85.', answer: 'I. Relationship (husband/relative). II. Limb (a) or (b) conduct. III. Evidence. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 85', 'BNS s. 80', 'IPC s. 498A (historical)'],
  examTips: ['State both limbs of cruelty.', 'Link to s. 80 when death within seven years is on the facts.'],
  revisionPoints: ['Two limbs: grave wilful conduct / dowry-linked harassment.', 'Accused = husband or relative of husband.', 'Often charged with s. 80.'],
  relatedTopics: ['s-80', 's-64', 's-28'],
}

export default content
