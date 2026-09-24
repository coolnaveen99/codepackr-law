import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Chapter XVII (ss. 303–334): theft, snatching, extortion, robbery, dacoity, criminal breach of trust, cheating. Headline traps: BNS 304 is snatching (not CHNAM); BNS 309 is robbery (not attempt to suicide).',

  study: `Topic at a glance
Property offences keep the IPC structure and move the numbers. Examiners hunt the collisions.

Map
Theft s. 303 (old 378/379). First theft of property under ₹5,000 can draw community service (s. 4(f) is the new sixth punishment).
Snatching s. 304 — new. Forcefully taking movable property from possession, typically a sudden pull. Not old IPC 304.
Extortion, robbery s. 309 (old 390/392), dacoity.
Criminal misappropriation and criminal breach of trust s. 316 (entrustment is the hinge — Pyare Lal).
Cheating s. 318 (old 415/420).
Stolen property, mischief, criminal trespass follow in the Chapter.

Why snatching was added
Street-snatching of phones and chains sat awkwardly between theft and robbery. s. 304 names it. Do not charge it as 105 (CHNAM) because you remembered “304”.

Current-law position
Cite BNS numbers for 1 July 2024 onwards. Community service is available only where the section allows it — do not write it onto robbery.

Educational note
Open s. 303 onwards for ingredients and punishments.`,

  provisions: [
    { actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-303', section: 's. 303', title: 'Theft' },
    { actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-304', section: 's. 304', title: 'Snatching' },
    { actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-309', section: 's. 309', title: 'Robbery' },
    { actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-316', section: 's. 316', title: 'Criminal breach of trust' },
    { actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-318', section: 's. 318', title: 'Cheating' },
  ],

  examples: [
    { id: 'pr-ex-1', title: 'Example 1 — simple', description: 'A pulls a phone from B’s hand and runs. That is snatching (s. 304), not CHNAM, and usually not robbery unless the extra elements of robbery are present.' },
    { id: 'pr-ex-2', title: 'Example 2 — legal', description: 'A goldsmith is given gold to make a chain and sells it. Entrustment + dishonest misappropriation is criminal breach of trust (s. 316), not merely cheating.' },
  ],

  hypotheticals: [
    {
      id: 'pr-hypo',
      title: 'Examination hypothetical',
      facts: 'A charge-sheet dated August 2024 alleges “s. 304 BNS — culpable homicide not amounting to murder” for a killing. The facts are a stabbing, not a snatch.',
      question: 'What is wrong with the charge?',
      applicableLaw: 'Number collision; s. 105 is CHNAM; s. 304 is snatching; [[REF:PROCEDURE:CRIMINAL-LAW:IPC-TO-BNS]].',
      analysis: 'The prosecutor has pasted old IPC 304 into a BNS number. BNS 304 is snatching. A stabbing, if CHNAM, is s. 105. The charge is legally misconceived and must be recast.',
      conclusion: 'Charge s. 105 (or 103), not 304. Educational hypothetical.',
    },
  ],

  distinctions: [
    {
      id: 'pr-theft-snatch',
      title: 'Theft, snatching, robbery',
      left: 'Theft s. 303 / snatching s. 304',
      right: 'Robbery s. 309',
      rows: [
        { point: 'Force', left: 'Theft: dishonest taking. Snatching: sudden force from possession', right: 'Theft or extortion plus the statutory fear/force for robbery' },
        { point: 'Number trap', left: '304 is not culpable homicide', right: '309 is not attempt to suicide' },
      ],
    },
  ],

  misconceptions: [
    { id: 'pr-trap-1', trap: 'BNS 304 is the new 304 IPC.', correction: 'BNS 304 is snatching. CHNAM is s. 105.' },
    { id: 'pr-trap-2', trap: 'BNS 309 is attempt to suicide.', correction: 'Attempt to suicide was not re-enacted. BNS 309 is robbery.' },
  ],

  questionsAndAnswers: [
    { id: 'pr-qa-1', question: 'What is BNS s. 304?', answer: 'Snatching — a new offence. Not culpable homicide.', relatedProvisionIds: ['bns-304'] },
    { id: 'pr-qa-2', question: 'IPC 420 maps to which BNS section?', answer: 's. 318 (cheating).', relatedProvisionIds: ['bns-318'] },
  ],

  relatedTopics: ['bns-ipc-map', 's-303', 's-304', 's-309', 's-316', 's-318'],

  cases: [
    { name: 'Pyare Lal Bhargava v. State of Rajasthan', year: 1963, citation: 'AIR 1963 SC 1094', holding: 'Criminal breach of trust requires entrustment. Without entrustment the offence is not made out.', relevance: 'Apply to BNS s. 316.' },
  ],

  bareActPointers: ['BNS Chapter XVII', 's. 303', 's. 304', 's. 309', 's. 316', 's. 318', 's. 4(f)'],

  examFrameworks: [
    {
      draftingCategory: 'brief',
      question: 'Explain theft and snatching under the BNS.',
      steps: [
        's. 303 theft; community service for first petty theft where the section allows.',
        's. 304 snatching as a new offence.',
        'Number trap vs old 304.',
        'One illustration.',
      ],
    },
    {
      draftingCategory: 'submissions',
      question: 'Survey offences against property in the BNS with special reference to number collisions.',
      steps: [
        'Chapter map.',
        'Theft / snatching / robbery table.',
        'CBT s. 316 (Pyare Lal) and cheating s. 318.',
        '304 / 309 / 353 collisions.',
        'Hypothetical of a mis-numbered charge-sheet.',
        'Community service s. 4(f).',
        'Conclusion.',
      ],
    },
  ],

  answerSkeleton: [
    'Introduction — Chapter XVII.',
    'Theft and snatching.',
    'Robbery number trap.',
    'CBT / cheating.',
    'Conclusion.',
  ],

  revisionPoints: [
    '303 theft; 304 snatching; 309 robbery; 316 CBT; 318 cheating.',
    'IPC 304 ≠ BNS 304. IPC 309 ≠ BNS 309.',
  ],

  examTips: [
    'If you remember only one collision, remember 304.',
  ],
}

export default content
