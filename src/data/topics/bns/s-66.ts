import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 66 (and related aggravated rape provisions): rape causing death or resulting in persistent vegetative state, or other specified aggravated forms, carries enhanced minimum terms up to life or death as provided. Successor structure to IPC s. 376A and related. Base offence remains the definitional section + s. 64; this section enhances for the most serious consequences.',
  study: `Aggravated rape provisions under the BNS enhance punishment when rape results in death or a persistent vegetative state, or in other specified aggravated circumstances (e.g. certain public-servant or custodial contexts, as in the statutory text).\n\nKey points\n• The base offence of rape must be established (definition + absence of valid consent).\n• The aggravating consequence (death, PVS, or other listed circumstance) elevates the punishment scale.\n• Minimum terms are high; death may be available in the rarest circumstances as per the text and Bachan Singh principles where death is prescribed.\n\nCite the applicable BNS aggravated-rape section for post-1 July 2024 acts. Always plead the definitional ingredients and s. 28 first.`,
  sections: [
    { id: 's-66-m1', title: 'Provenance', order: 1, content: ['Successor structure to IPC s. 376A and related aggravated forms. Enhanced punishment for rape with extreme consequences.'] },
    { id: 's-66-m2', title: 'Aggravating Triggers', order: 2, content: ['Death or persistent vegetative state of the victim; other listed aggravated circumstances in the statutory text.'] },
    { id: 's-66-m3', title: 'Ingredients', order: 3, content: ['(1) Rape as defined. (2) Aggravating consequence or circumstance. (3) Causal link where consequence-based.'] },
    { id: 's-66-m4', title: 'Evidence', order: 4, content: ['Proof of rape; medical evidence of death/PVS or other aggravating fact; causation.'] },
    { id: 's-66-m5', title: 'Procedure', order: 5, content: ['Sessions trial; BNSS victim protections; sentencing under the enhanced scale.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-66', section: 's. 66', title: 'Aggravated rape (death / PVS / specified forms)' }],
  examples: [
    { id: 's-66-ex1', title: 'Rape resulting in death', illustrationType: 'practical', description: 'Rape is established and the victim dies as a result. The aggravated section enhancing punishment for rape causing death is attracted.' },
    { id: 's-66-ex2', title: 'Base rape only', illustrationType: 'fail-scenario', description: 'Rape without the aggravating consequence or circumstance remains under the base punishment section (s. 64), not the aggravated form.' },
  ],
  hypotheticals: [{ id: 's-66-hypo', title: 'Aggravated consequence', facts: 'Victim of rape is left in a persistent vegetative state.', question: 'Which punishment scale?', applicableLaw: 'BNS aggravated-rape provisions; s. 64.', analysis: 'PVS is a classic aggravating consequence → enhanced scale applies.', conclusion: 'Aggravated section attracted.' }],
  distinctions: [],
  misconceptions: [{ id: 's-66-trap', trap: 'Every rape is punished under the death/PVS section.', correction: 'The enhanced section applies only when the statutory aggravating consequence or circumstance is proved. Base rape is under s. 64.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-66-brief', draftingCategory: 'brief', question: 'When does the enhanced punishment for rape causing death or PVS apply under the BNS?', answer: 'When rape is established and it causes the death of the woman or results in a persistent vegetative state (or another listed aggravating circumstance), the enhanced minimum terms (up to life or death as provided) apply. Base rape without those consequences remains under s. 64.', explanation: 'Short note.' },
    { id: 's-66-sub', draftingCategory: 'submissions', question: 'Submissions on aggravated rape.', answer: 'I. Rape established. II. Aggravating consequence/circumstance. III. Enhanced scale. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS aggravated-rape provisions', 'BNS s. 64', 'BNS s. 70', 'IPC s. 376A (historical)'],
  examTips: ['Always establish base rape first, then the aggravating consequence.', 'Do not apply the death/PVS scale to ordinary rape.'],
  revisionPoints: ['Enhanced scale for rape causing death or PVS (and other listed forms).', 'Base rape = s. 64.', 'Causal link required for consequence-based aggravation.'],
  relatedTopics: ['s-64', 's-63', 's-70', 's-28'],
}

export default content
