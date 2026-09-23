import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 49: if the act abetted is committed in consequence of the abetment, and no express provision is made for the punishment of such abetment, the abettor is punished with the punishment provided for the offence. Successor to IPC s. 109.',
  study: `Section 49 is the general punishment provision for abetment when the abetted act is committed and no specific punishment section applies.\n\nRule: Whoever abets an offence shall, if the act abetted is committed in consequence of the abetment, and no express provision is made by this Sanhita for the punishment of such abetment, be punished with the punishment provided for the offence.\n\n“In consequence” means the act was done under the influence of the instigation, or in pursuance of the conspiracy, or with the aid of the abettor.\n\nWhere a specific section provides a different punishment for the abetment, that section prevails. Cite BNS s. 49 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-49-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 109. Default punishment when abetted act is committed and no specific section applies.'] },
    { id: 's-49-m2', title: 'Text', order: 2, content: ['Abetted act committed in consequence; no express provision for the abetment → abettor gets the punishment provided for the offence.'] },
    { id: 's-49-m3', title: 'Ingredients', order: 3, content: ['(1) Abetment. (2) Act abetted committed in consequence. (3) No express punishment provision for that abetment.'] },
    { id: 's-49-m4', title: 'Evidence', order: 4, content: ['Proof of abetment, of the commission of the act, and of the causal link (“in consequence”).'] },
    { id: 's-49-m5', title: 'Procedure', order: 5, content: ['Charge under the substantive offence read with s. 49 (or the specific abetment section if any).'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-49', section: 's. 49', title: 'Punishment of abetment if act abetted is committed in consequence and where no express provision is made for its punishment' }],
  examples: [
    { id: 's-49-ex1', title: 'Abetment punished as the offence', illustrationType: 'practical', description: 'A instigates B to commit theft. B commits the theft in consequence. If no specific abetment section applies, A is punished under s. 49 with the punishment for theft.' },
    { id: 's-49-ex2', title: 'Specific provision prevails', illustrationType: 'fail-scenario', description: 'Where a specific section provides a different punishment for the abetment, that section applies instead of s. 49.' },
  ],
  hypotheticals: [{ id: 's-49-hypo', title: 'Punishment of abettor', facts: 'Abetment proved; abetted offence committed in consequence; no specific abetment section.', question: 'What is the punishment?', applicableLaw: 'BNS s. 49.', analysis: 'The abettor receives the punishment provided for the offence.', conclusion: 'Same punishment as the principal offence.' }],
  distinctions: [],
  misconceptions: [{ id: 's-49-trap', trap: 'The abettor always gets a lesser sentence than the principal.', correction: 'Under s. 49, when the act is committed in consequence and no specific provision applies, the abettor gets the same punishment as provided for the offence.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-49-brief', draftingCategory: 'brief', question: 'Explain the punishment rule in BNS s. 49.', answer: 'If the act abetted is committed in consequence of the abetment and no express provision is made for the punishment of such abetment, the abettor is punished with the punishment provided for the offence.', explanation: 'Short note.' },
    { id: 's-49-sub', draftingCategory: 'submissions', question: 'Submissions on s. 49.', answer: 'I. Abetment and commission in consequence. II. No specific provision. III. Punishment same as the offence. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 49', 'BNS s. 45', 'BNS s. 50', 'IPC s. 109 (historical)'],
  examTips: ['State the “in consequence” requirement and that specific provisions override s. 49.'],
  revisionPoints: ['Abetted act committed in consequence + no specific provision → same punishment as the offence.'],
  relatedTopics: ['s-45', 's-46', 's-50'],
}

export default content
