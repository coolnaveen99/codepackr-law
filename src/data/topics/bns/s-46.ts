import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 46: a person abets an offence who abets either the commission of an offence, or the commission of an act which would be an offence if committed by a person capable by law of committing an offence with the same intention or knowledge as that of the abettor. Successor to IPC s. 108.',
  study: `Section 46 defines who is an abettor.\n\nRule: A person abets an offence who abets either the commission of an offence, or the commission of an act which would be an offence if committed by a person capable by law of committing an offence with the same intention or knowledge as that of the abettor.\n\nEffect: one can abet even if the person who does the act is incapable (e.g. a child under seven) — the abettor is still liable as if the act had been done by a capable person with the abettor’s intention/knowledge. Cite BNS s. 46 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-46-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 108. Defines abettor and covers abetment of incapable persons.'] },
    { id: 's-46-m2', title: 'Text', order: 2, content: ['Abets an offence, or an act that would be an offence if done by a capable person with the abettor’s intention/knowledge.'] },
    { id: 's-46-m3', title: 'Ingredients', order: 3, content: ['Abetment under s. 45 of an offence, or of an act that would be an offence if done by a capable person.'] },
    { id: 's-46-m4', title: 'Evidence', order: 4, content: ['Proof of the abetment and of the nature of the abetted act.'] },
    { id: 's-46-m5', title: 'Procedure', order: 5, content: ['Abettor may be charged even when the principal is incapable or has not been prosecuted.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-46', section: 's. 46', title: 'Abettor' }],
  examples: [
    { id: 's-46-ex1', title: 'Abetment of a child', illustrationType: 'practical', description: 'A instigates a six-year-old to set fire to a house. The child commits no offence (s. 20), but A is an abettor under s. 46 and may be punished for abetment.' },
    { id: 's-46-ex2', title: 'Abetment of capable person', illustrationType: 'practical', description: 'A instigates B (adult) to commit theft. A is an abettor of the offence of theft.' },
  ],
  hypotheticals: [{ id: 's-46-hypo', title: 'Abettor of incapable principal', facts: 'Accused instigates a child under seven to commit arson.', question: 'Is the accused liable as an abettor?', applicableLaw: 'BNS s. 46 read with s. 45.', analysis: 'Yes — s. 46 covers abetment of an act that would be an offence if done by a capable person.', conclusion: 'Liable as abettor.' }],
  distinctions: [],
  misconceptions: [{ id: 's-46-trap', trap: 'If the principal is not liable, the abettor cannot be liable.', correction: 's. 46 expressly allows abetment liability even when the person who does the act is incapable of committing the offence.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-46-brief', draftingCategory: 'brief', question: 'Who is an abettor under BNS s. 46?', answer: 'A person who abets either the commission of an offence, or the commission of an act which would be an offence if committed by a person capable by law of committing an offence with the same intention or knowledge as that of the abettor.', explanation: 'Short note.' },
    { id: 's-46-sub', draftingCategory: 'submissions', question: 'Submissions on s. 46.', answer: 'I. Abetment under s. 45. II. Offence or act that would be an offence. III. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 46', 'BNS s. 45', 'IPC s. 108 (historical)'],
  examTips: ['Important when the principal is a child or of unsound mind.'],
  revisionPoints: ['Abettor can be liable even if the principal is incapable of committing the offence.'],
  relatedTopics: ['s-45', 's-20', 's-49'],
}

export default content
