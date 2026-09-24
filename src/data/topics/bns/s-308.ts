import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 308: extortion — intentionally putting a person in fear of injury and thereby dishonestly inducing that person to deliver property or valuable security. Delivery by the victim under fear is the hallmark; contrast with theft (taking without consent) and robbery (theft/extortion with violence or fear of instant death/hurt). Successor to IPC s. 383/384.',
  study: `Section 308 is the principal extortion provision.\n\nIngredients:\n1. Intentionally putting a person in fear of injury to himself or another\n2. Thereby dishonestly inducing that person\n3. To deliver to any person any property or valuable security (or anything signed/sealed that may be converted into valuable security)\n\nThe property is delivered by the victim (not taken by the accused as in theft). The fear need not be of instant injury (that may elevate the case toward robbery).\n\nCite BNS s. 308 for post-1 July 2024 extortion cases. Aggravated forms (fear of death, etc.) have higher sections.`,
  sections: [
    { id: 's-308-m1', title: 'Provenance', order: 1, content: ['Successor to IPC ss. 383/384. Fear + dishonest inducement to deliver property.'] },
    { id: 's-308-m2', title: 'Ingredients', order: 2, content: ['Intentional fear of injury; dishonest inducement; delivery of property/valuable security by the victim.'] },
    { id: 's-308-m3', title: 'Detailed elements', order: 3, content: ['Fear of injury to self or another; inducement must cause the delivery; dishonest intention.'] },
    { id: 's-308-m4', title: 'Evidence', order: 4, content: ['Threat; fear; delivery; causal link; dishonest intention.'] },
    { id: 's-308-m5', title: 'Procedure', order: 5, content: ['Forum per BNSS Schedule; often more serious than simple theft.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-308', section: 's. 308', title: 'Extortion' }],
  examples: [
    { id: 's-308-ex1', title: 'Threat inducing delivery', illustrationType: 'practical', description: 'A threatens to harm B’s family unless B pays money. B pays. Extortion under s. 308.' },
    { id: 's-308-ex2', title: 'Theft not extortion', illustrationType: 'fail-scenario', description: 'A secretly takes B’s wallet without any threat. Theft (s. 303), not extortion.' },
  ],
  hypotheticals: [{ id: 's-308-hypo', title: 'Extortion vs theft', facts: 'Victim hands over a phone after a threat of injury.', question: 'Extortion or theft?', applicableLaw: 'BNS s. 308; s. 303.', analysis: 'Delivery by the victim under fear = extortion, not theft (which is taking without consent).', conclusion: 'Extortion under s. 308.' }],
  distinctions: [{ id: 's-308-dist', title: 'Extortion vs Theft vs Robbery', left: 'Extortion (s. 308)', right: 'Theft (s. 303) / Robbery (s. 309)', rows: [{ point: 'Method', left: 'Victim delivers under fear of injury', right: 'Accused takes without consent / theft or extortion with violence or fear of instant death/hurt' }] }],
  misconceptions: [{ id: 's-308-trap', trap: 'Extortion requires fear of instant death.', correction: 'Fear of injury (not necessarily instant death) is enough for extortion. Fear of instant death/hurt may elevate the case to robbery.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-308-brief', draftingCategory: 'brief', question: 'Define extortion under BNS s. 308.', answer: 'Intentionally putting a person in fear of injury and thereby dishonestly inducing that person to deliver property or valuable security. The victim delivers under fear; contrast with theft (taking) and robbery (theft/extortion plus violence or fear of instant death/hurt).', explanation: 'Short note.' },
    { id: 's-308-sub', draftingCategory: 'submissions', question: 'Submissions on extortion under s. 308.', answer: 'I. Fear of injury. II. Dishonest inducement. III. Delivery by victim. IV. Distinction from theft/robbery. V. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 308', 'BNS s. 303', 'BNS s. 309', 'IPC ss. 383–384 (historical)'],
  examTips: ['Stress delivery by the victim under fear.', 'Distinguish theft, extortion, and robbery clearly.'],
  revisionPoints: ['Fear of injury + dishonest inducement to deliver = extortion.', 'Victim delivers (not accused takes).', 'Robbery = theft/extortion + violence or fear of instant death/hurt.'],
  relatedTopics: ['s-303', 's-304', 's-309'],
}

export default content
