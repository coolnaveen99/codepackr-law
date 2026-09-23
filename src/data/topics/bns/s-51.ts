import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 51: if the act abetted is not committed in consequence of the abetment, and no express provision is made for the punishment of such abetment, the abettor is punished with imprisonment that may extend to one-fourth of the longest term provided for the offence, or with fine, or both (and higher fraction if the abettor is a public servant whose duty is to prevent the offence). Successor to IPC s. 116.',
  study: `Section 51 deals with abetment when the abetted act is not committed.\n\nRule: Whoever abets an offence shall, if the act abetted is not committed in consequence of the abetment, and no express provision is made for the punishment of such abetment, be punished with imprisonment of any description provided for the offence, for a term which may extend to one-fourth of the longest term provided for that offence, or with such fine as is provided, or with both.\n\nIf the abettor is a public servant whose duty it is to prevent the commission of the offence, the fraction is higher (as in the text).\n\nCite BNS s. 51 for post-1 July 2024 acts. Contrast with s. 49 (act committed → full punishment of the offence).`,
  sections: [
    { id: 's-51-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 116. Punishment when the abetted act is not committed.'] },
    { id: 's-51-m2', title: 'Text', order: 2, content: ['Act abetted not committed; no express provision → up to 1/4 of the longest term (higher for certain public servants) and/or fine.'] },
    { id: 's-51-m3', title: 'Ingredients', order: 3, content: ['Abetment; act not committed in consequence; no specific punishment section for that abetment.'] },
    { id: 's-51-m4', title: 'Evidence', order: 4, content: ['Proof of abetment; proof that the act was not committed in consequence.'] },
    { id: 's-51-m5', title: 'Procedure', order: 5, content: ['Charge under the abetment framework with s. 51 for the reduced scale.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-51', section: 's. 51', title: 'Punishment of abetment if act abetted is not committed' }],
  examples: [
    { id: 's-51-ex1', title: 'Abetment without commission', illustrationType: 'practical', description: 'A instigates B to commit theft. B refuses. A is punishable under s. 51 with up to one-fourth of the term for theft (absent a specific section).' },
    { id: 's-51-ex2', title: 'Act committed', illustrationType: 'fail-scenario', description: 'If B commits the theft in consequence, s. 49 (full punishment of the offence) applies, not s. 51.' },
  ],
  hypotheticals: [{ id: 's-51-hypo', title: 'Failed abetment', facts: 'Abetment proved; abetted offence never committed.', question: 'Which punishment section?', applicableLaw: 'BNS s. 51; s. 49.', analysis: 'Act not committed → s. 51 reduced scale (unless a specific section applies).', conclusion: 's. 51.' }],
  distinctions: [{ id: 's-51-dist', title: 's. 49 vs s. 51', left: 's. 49 (act committed)', right: 's. 51 (act not committed)', rows: [{ point: 'Punishment', left: 'Same as for the offence', right: 'Up to 1/4 of longest term (or higher for certain public servants)' }] }],
  misconceptions: [{ id: 's-51-trap', trap: 'If the abetted act is not committed, there is no liability for abetment.', correction: 'Abetment is still punishable under s. 51 (reduced scale) when no specific provision applies.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-51-brief', draftingCategory: 'brief', question: 'Explain BNS s. 51.', answer: 'If the act abetted is not committed in consequence of the abetment and no express provision is made for such abetment, the abettor is punished with up to one-fourth of the longest term provided for the offence, or fine, or both (higher fraction for certain public servants).', explanation: 'Short note.' },
    { id: 's-51-sub', draftingCategory: 'submissions', question: 'Submissions on s. 51.', answer: 'I. Abetment proved. II. Act not committed. III. No specific provision. IV. s. 51 scale. V. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 51', 'BNS s. 49', 'BNS s. 45', 'IPC s. 116 (historical)'],
  examTips: ['Contrast s. 49 (committed) with s. 51 (not committed).'],
  revisionPoints: ['Act not committed → up to 1/4 of longest term (s. 51).', 'Act committed → full punishment of the offence (s. 49).'],
  relatedTopics: ['s-45', 's-49', 's-50'],
}

export default content
