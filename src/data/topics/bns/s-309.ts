import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 309: robbery — theft or extortion when accompanied by violence or fear of instant death, hurt, or wrongful restraint (as defined). Robbery is an aggravated form of theft/extortion. Dacoity is robbery by five or more. Successor to IPC s. 390/392.',
  study: `Section 309 defines and punishes robbery.\n\nRobbery is:\n• Theft, when in order to commit theft, or in committing theft, or in carrying away property obtained by theft, the offender voluntarily causes or attempts to cause death, hurt, or wrongful restraint, or creates fear of instant death, hurt, or wrongful restraint; or\n• Extortion, when the offender, at the time of committing extortion, is in the presence of the person put in fear and commits the extortion by putting that person in fear of instant death, hurt, or wrongful restraint.\n\nDacoity (related section) is robbery committed by five or more persons conjointly.\n\nCite BNS s. 309 for post-1 July 2024 robbery cases. Punishment is higher than for simple theft or extortion.`,
  sections: [
    { id: 's-309-m1', title: 'Provenance', order: 1, content: ['Successor to IPC ss. 390/392. Theft or extortion + violence or fear of instant death/hurt/wrongful restraint.'] },
    { id: 's-309-m2', title: 'Two Paths to Robbery', order: 2, content: ['Theft path: violence or fear of instant death/hurt/wrongful restraint in connection with the theft. Extortion path: presence + fear of instant death/hurt/wrongful restraint.'] },
    { id: 's-309-m3', title: 'Ingredients', order: 3, content: ['(1) Theft or extortion. (2) The additional violence / fear-of-instant element as defined.'] },
    { id: 's-309-m4', title: 'Evidence', order: 4, content: ['Underlying theft/extortion; violence or fear of instant death/hurt/wrongful restraint; timing relative to the taking/delivery.'] },
    { id: 's-309-m5', title: 'Procedure', order: 5, content: ['Serious offence; forum per BNSS Schedule; dacoity when five or more.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-309', section: 's. 309', title: 'Robbery' }],
  examples: [
    { id: 's-309-ex1', title: 'Theft with violence', illustrationType: 'practical', description: 'A snatches B’s bag and, when B resists, strikes B. Theft + voluntary causing of hurt in committing theft = robbery.' },
    { id: 's-309-ex2', title: 'Simple theft only', illustrationType: 'fail-scenario', description: 'A stealthily takes B’s wallet without any violence or fear of instant injury. Theft (s. 303), not robbery.' },
  ],
  hypotheticals: [{ id: 's-309-hypo', title: 'Robbery path', facts: 'Accused threatens instant hurt and takes the victim’s phone in the victim’s presence.', question: 'Robbery?', applicableLaw: 'BNS s. 309.', analysis: 'Fear of instant hurt + taking in presence fits the robbery definition (theft or extortion path).', conclusion: 'Robbery under s. 309.' }],
  distinctions: [{ id: 's-309-dist', title: 'Robbery vs Theft vs Extortion vs Dacoity', left: 'Robbery (s. 309)', right: 'Theft / Extortion / Dacoity', rows: [{ point: 'Extra element', left: 'Violence or fear of instant death/hurt/wrongful restraint', right: 'No such element / delivery under fear of (not necessarily instant) injury / five or more committing robbery' }] }],
  misconceptions: [{ id: 's-309-trap', trap: 'Any theft with any force is robbery.', correction: 'The violence or fear must meet the statutory description (death, hurt, or wrongful restraint — and for the extortion path, fear of instant such harm in the offender’s presence).' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-309-brief', draftingCategory: 'brief', question: 'Define robbery under BNS s. 309.', answer: 'Robbery is theft or extortion accompanied by voluntary causing (or attempting to cause) death, hurt, or wrongful restraint, or by fear of instant death, hurt, or wrongful restraint, in the circumstances defined in the section. Dacoity is robbery by five or more.', explanation: 'Short note.' },
    { id: 's-309-sub', draftingCategory: 'submissions', question: 'Submissions on robbery under s. 309.', answer: 'I. Theft or extortion base. II. Violence or fear of instant death/hurt/wrongful restraint. III. Timing and presence. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 309', 'BNS s. 303', 'BNS s. 308', 'BNS dacoity provisions', 'IPC ss. 390–392 (historical)'],
  examTips: ['Map the facts onto the theft path or the extortion path.', 'Mention dacoity when five or more are involved.'],
  revisionPoints: ['Robbery = theft/extortion + violence or fear of instant death/hurt/wrongful restraint.', 'Dacoity = robbery by 5+.', 'Simple theft/extortion lack the instant-violence element.'],
  relatedTopics: ['s-303', 's-304', 's-308', 's-189'],
}

export default content
