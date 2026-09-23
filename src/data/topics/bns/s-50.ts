import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 50: if the person abetted does the act with a different intention or knowledge from that of the abettor, the abettor is punished as if the act had been done with the intention or knowledge of the abettor. Successor to IPC s. 110.',
  study: `Section 50 deals with divergence of intention between abettor and principal.\n\nRule: Whoever abets the commission of an offence shall, if the person abetted does the act with a different intention or knowledge from that of the abettor, be punished as if the act had been done with the intention or knowledge of the abettor.\n\nEffect: the abettor’s liability is measured by his own intention/knowledge, not by the principal’s different mental state. Cite BNS s. 50 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-50-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 110. Abettor’s liability follows his own intention/knowledge.'] },
    { id: 's-50-m2', title: 'Text', order: 2, content: ['Person abetted does the act with different intention/knowledge; abettor punished as if the act had been done with the abettor’s intention/knowledge.'] },
    { id: 's-50-m3', title: 'Ingredients', order: 3, content: ['Abetment; commission of the act by the person abetted; divergence of intention/knowledge; punishment keyed to abettor’s mental state.'] },
    { id: 's-50-m4', title: 'Evidence', order: 4, content: ['Abettor’s intention/knowledge; principal’s different intention/knowledge; the act done.'] },
    { id: 's-50-m5', title: 'Procedure', order: 5, content: ['Charge and sentence the abettor according to his own mens rea.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-50', section: 's. 50', title: 'Punishment of abetment if person abetted does act with different intention from that of the abettor' }],
  examples: [
    { id: 's-50-ex1', title: 'Different intention', illustrationType: 'practical', description: 'A abets B to cause grievous hurt. B, with a different intention, causes death. A is punished as if the act had been done with A’s intention (grievous hurt abetment), not necessarily for murder.' },
    { id: 's-50-ex2', title: 'Same intention', illustrationType: 'practical', description: 'If the principal acts with the same intention as the abettor, ordinary abetment punishment rules apply.' },
  ],
  hypotheticals: [{ id: 's-50-hypo', title: 'Divergent mens rea', facts: 'Abettor intends hurt; principal causes death with different intention.', question: 'How is the abettor punished?', applicableLaw: 'BNS s. 50.', analysis: 'As if the act had been done with the abettor’s intention/knowledge.', conclusion: 'Liability keyed to abettor’s mens rea.' }],
  distinctions: [],
  misconceptions: [{ id: 's-50-trap', trap: 'The abettor is always liable for whatever the principal actually does.', correction: 'Under s. 50, when intentions diverge, the abettor is punished as if the act had been done with the abettor’s own intention/knowledge.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-50-brief', draftingCategory: 'brief', question: 'Explain BNS s. 50.', answer: 'If the person abetted does the act with a different intention or knowledge from that of the abettor, the abettor is punished as if the act had been done with the intention or knowledge of the abettor.', explanation: 'Short note.' },
    { id: 's-50-sub', draftingCategory: 'submissions', question: 'Submissions on s. 50.', answer: 'I. Abetment. II. Divergent intention/knowledge. III. Punishment keyed to abettor’s mens rea. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 50', 'BNS s. 45', 'BNS s. 49', 'IPC s. 110 (historical)'],
  examTips: ['Stress that the abettor’s own intention/knowledge controls the level of liability when the principal’s differs.'],
  revisionPoints: ['Different intention of principal → abettor punished as if act done with abettor’s intention/knowledge.'],
  relatedTopics: ['s-45', 's-49', 's-46'],
}

export default content
