import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 140 (and related kidnapping/abduction provisions): kidnapping from lawful guardianship and other forms. Taking or enticing a minor (or person of unsound mind) out of the keeping of the lawful guardian without consent. Distinct from abduction. Successor structure to IPC ss. 359–363. Aggravated forms (kidnapping for ransom, etc.) have higher sections.',
  study: `Kidnapping under the BNS retains the classic two forms:\n\n1. Kidnapping from India — conveying a person beyond the limits of India without consent.\n2. Kidnapping from lawful guardianship — taking or enticing a minor (under 16 for male / under 18 for female in the traditional formulation, or as updated in the BNS text) or a person of unsound mind, out of the keeping of the lawful guardian without the guardian’s consent.\n\nAbduction is a distinct concept (compelling by force or inducing by deceitful means to go from any place).\n\nPunishment for the base offence is under the applicable section; aggravated forms (ransom, murder, etc.) carry much higher penalties.\n\nCite the applicable BNS kidnapping section for post-1 July 2024 acts. Always check the current age thresholds in the statutory text.`,
  sections: [
    { id: 's-140-m1', title: 'Provenance', order: 1, content: ['Successor structure to IPC ss. 359–363. Kidnapping from India / from lawful guardianship.'] },
    { id: 's-140-m2', title: 'Forms', order: 2, content: ['From India; from lawful guardianship (minor / unsound mind). Distinct from abduction.'] },
    { id: 's-140-m3', title: 'Ingredients (guardianship form)', order: 3, content: ['(1) Taking or enticing. (2) Minor or person of unsound mind. (3) Out of keeping of lawful guardian. (4) Without guardian’s consent.'] },
    { id: 's-140-m4', title: 'Evidence', order: 4, content: ['Age; guardianship; taking/enticing; absence of consent.'] },
    { id: 's-140-m5', title: 'Procedure', order: 5, content: ['Forum as per BNSS Schedule; aggravated forms (ransom etc.) are Sessions cases.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-140', section: 's. 140', title: 'Kidnapping' }],
  examples: [
    { id: 's-140-ex1', title: 'Taking a minor from guardian', illustrationType: 'practical', description: 'A takes a 12-year-old from the custody of the lawful guardian without consent. Kidnapping from lawful guardianship is made out.' },
    { id: 's-140-ex2', title: 'Adult with free consent', illustrationType: 'fail-scenario', description: 'An adult goes voluntarily with another person. Neither kidnapping from guardianship nor (without force/deceit) abduction is made out.' },
  ],
  hypotheticals: [{ id: 's-140-hypo', title: 'Kidnapping from guardianship', facts: 'Minor is taken from parent’s custody without consent.', question: 'Is kidnapping made out?', applicableLaw: 'BNS kidnapping provisions.', analysis: 'Taking a minor out of lawful guardianship without consent fits the guardianship form.', conclusion: 'Kidnapping established.' }],
  distinctions: [{ id: 's-140-dist', title: 'Kidnapping vs Abduction', left: 'Kidnapping', right: 'Abduction', rows: [{ point: 'Focus', left: 'From India or from lawful guardianship (age/unsound mind)', right: 'Force or deceit inducing a person to go from any place' }] }],
  misconceptions: [{ id: 's-140-trap', trap: 'Any taking of a person is kidnapping.', correction: 'Kidnapping has specific forms (from India / from lawful guardianship). Other forced or deceitful takings may be abduction, not kidnapping.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-140-brief', draftingCategory: 'brief', question: 'Outline kidnapping under the BNS.', answer: 'Kidnapping has two main forms: from India, and from lawful guardianship (taking or enticing a minor or person of unsound mind out of the guardian’s keeping without consent). It is distinct from abduction (force or deceit).', explanation: 'Short note.' },
    { id: 's-140-sub', draftingCategory: 'submissions', question: 'Submissions on kidnapping.', answer: 'I. Form (India / guardianship). II. Ingredients. III. Distinction from abduction. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS kidnapping provisions', 'BNS abduction provisions', 'IPC ss. 359–363 (historical)'],
  examTips: ['Always distinguish kidnapping from abduction.', 'Check the current age thresholds in the BNS text.'],
  revisionPoints: ['Kidnapping: from India or from lawful guardianship.', 'Abduction: force or deceit.', 'Aggravated forms (ransom etc.) have higher sections.'],
  relatedTopics: ['s-28', 's-2', 's-64'],
}

export default content
