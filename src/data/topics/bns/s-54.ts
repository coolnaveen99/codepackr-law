import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 54: abettor present when offence is committed — if the abettor is present when the act abetted is committed, he is deemed to have committed the offence. Successor to IPC s. 114. Presence converts the abettor into a principal for punishment purposes.',
  study: `Section 54 deals with the abettor who is present at the commission of the offence.\n\nRule: Whenever any person who is absent would be liable to be punished as an abettor, is present when the act or offence for which he would be punishable in consequence of the abetment is committed, he shall be deemed to have committed such act or offence.\n\nEffect: presence at the scene upgrades the abettor’s liability to that of a principal offender for the completed offence. This is distinct from common intention (s. 3(5)), though on facts the two may overlap.\n\nCite BNS s. 54 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-54-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 114. Presence of abettor → deemed to have committed the offence.'] },
    { id: 's-54-m2', title: 'Text', order: 2, content: ['Abettor who would be liable if absent is present when the act is committed → deemed to have committed the act/offence.'] },
    { id: 's-54-m3', title: 'Ingredients', order: 3, content: ['(1) Abetment. (2) Presence when the act/offence is committed. (3) Deemed commission of the offence.'] },
    { id: 's-54-m4', title: 'Evidence', order: 4, content: ['Proof of abetment; proof of presence at the time of commission.'] },
    { id: 's-54-m5', title: 'Procedure', order: 5, content: ['Charge as for the principal offence; distinguish from s. 3(5) common intention on the facts.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-54', section: 's. 54', title: 'Abettor present when offence is committed' }],
  examples: [
    { id: 's-54-ex1', title: 'Abettor present', illustrationType: 'practical', description: 'A instigates B to assault C and is present when B assaults C. Under s. 54, A is deemed to have committed the assault.' },
    { id: 's-54-ex2', title: 'Abettor absent', illustrationType: 'fail-scenario', description: 'A instigates but is not present. s. 54 does not apply; ordinary abetment punishment (s. 49 or s. 51) applies.' },
  ],
  hypotheticals: [{ id: 's-54-hypo', title: 'Presence upgrade', facts: 'Abettor is at the scene when the abetted offence is completed.', question: 'How is liability assessed?', applicableLaw: 'BNS s. 54.', analysis: 'Deemed to have committed the offence — principal-level liability.', conclusion: 'Liable as if he committed the offence.' }],
  distinctions: [{ id: 's-54-dist', title: 's. 54 vs s. 3(5)', left: 's. 54 (abettor present)', right: 's. 3(5) (common intention)', rows: [{ point: 'Basis', left: 'Prior abetment + presence at commission', right: 'Shared common intention and participation in the criminal act' }] }],
  misconceptions: [{ id: 's-54-trap', trap: 'Presence alone makes a person an abettor under s. 54.', correction: 's. 54 applies to a person who is already an abettor and is present when the act is committed. Mere presence without abetment is not enough.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-54-brief', draftingCategory: 'brief', question: 'Explain BNS s. 54.', answer: 'If a person who would be liable as an abettor is present when the act abetted is committed, he is deemed to have committed such act or offence. Presence upgrades abetment liability to principal-level liability for the completed offence.', explanation: 'Short note.' },
    { id: 's-54-sub', draftingCategory: 'submissions', question: 'Submissions on s. 54.', answer: 'I. Abetment. II. Presence at commission. III. Deemed commission. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 54', 'BNS s. 45', 'BNS s. 49', 'BNS s. 3(5)', 'IPC s. 114 (historical)'],
  examTips: ['Require both abetment and presence.', 'Distinguish from common intention.'],
  revisionPoints: ['Abettor + present at commission → deemed to have committed the offence.', 'Not mere presence without abetment.', 'Distinct from s. 3(5).'],
  relatedTopics: ['s-45', 's-49', 's-3'],
}

export default content
