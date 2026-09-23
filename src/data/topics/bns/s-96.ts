import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 96 (and related): procurement of a child for illicit intercourse or related child-protection offences under Chapter V. Complements s. 95 (hiring a child to commit an offence) and the sexual-offence provisions. Child = below 18 (s. 2(3)).',
  study: `Child-procurement and related protective offences under the BNS sit in Chapter V.\n\nTypical structure: whoever procures or attempts to procure a child for illicit intercourse or for other prohibited purposes is punished as provided. The exact text defines the prohibited purpose and the age threshold.\n\nKey points\n• Child (below 18 under s. 2(3), or as specified).\n• Procurement or attempt.\n• Prohibited purpose (illicit intercourse or as listed).\n\nThese provisions work alongside POCSO (where applicable) and the general sexual-offence and abetment sections. Cite the applicable BNS section for post-1 July 2024 acts; always check concurrent special-law liability.`,
  sections: [
    { id: 's-96-m1', title: 'Provenance', order: 1, content: ['Chapter V child-protection provisions. Procurement for prohibited purposes.'] },
    { id: 's-96-m2', title: 'Elements', order: 2, content: ['Procurement or attempt; child; prohibited purpose as defined.'] },
    { id: 's-96-m3', title: 'Ingredients', order: 3, content: ['(1) Child. (2) Procurement or attempt. (3) Prohibited purpose.'] },
    { id: 's-96-m4', title: 'Evidence', order: 4, content: ['Age; acts of procurement; purpose; communications and conduct.'] },
    { id: 's-96-m5', title: 'Procedure', order: 5, content: ['May run concurrently with POCSO and other special laws; Sessions trial as applicable.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-96', section: 's. 96', title: 'Procurement of child (Chapter V protective offence)' }],
  examples: [
    { id: 's-96-ex1', title: 'Procurement for illicit intercourse', illustrationType: 'practical', description: 'A procures a child for the purpose of illicit intercourse. The protective offence is made out (and POCSO may also apply).' },
    { id: 's-96-ex2', title: 'Adult with free consent', illustrationType: 'fail-scenario', description: 'An adult participates voluntarily. Child-procurement provisions do not apply; other offences may still be relevant.' },
  ],
  hypotheticals: [{ id: 's-96-hypo', title: 'Child procurement', facts: 'Accused arranges for a 15-year-old to be taken for prohibited sexual purposes.', question: 'Is the BNS protective offence attracted?', applicableLaw: 'BNS Chapter V child provisions; s. 2(3).', analysis: 'Child + procurement + prohibited purpose — yes; check concurrent POCSO liability.', conclusion: 'Offence made out under BNS and possibly special law.' }],
  distinctions: [],
  misconceptions: [{ id: 's-96-trap', trap: 'BNS child-procurement sections replace POCSO.', correction: 'They are concurrent. POCSO and other special laws continue to apply; charge under both where ingredients are met.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-96-brief', draftingCategory: 'brief', question: 'Outline child-procurement protective offences under BNS Chapter V.', answer: 'Provisions in Chapter V punish procurement or attempted procurement of a child for illicit intercourse or other prohibited purposes. Child generally means below 18 (s. 2(3)). These run concurrently with POCSO and other special laws.', explanation: 'Short note.' },
    { id: 's-96-sub', draftingCategory: 'submissions', question: 'Submissions on child procurement.', answer: 'I. Child. II. Procurement/attempt. III. Prohibited purpose. IV. Concurrent special-law liability. V. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS Chapter V child-protection provisions', 'BNS s. 95', 'BNS s. 2(3)', 'POCSO Act'],
  examTips: ['Always mention concurrent POCSO liability where sexual purposes involving a child are on the facts.', 'Link to s. 2(3) child definition.'],
  revisionPoints: ['Procurement of child for prohibited purpose.', 'Child = below 18 (s. 2(3)).', 'Concurrent with POCSO.'],
  relatedTopics: ['s-95', 's-2', 's-64', 's-28'],
}

export default content
