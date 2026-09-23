import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 55: when an act is abetted and a different act is done, the abettor is liable for the act done in the same manner and to the same extent as if he had directly abetted it — provided the act done was a probable consequence of the abetment and was committed under the influence of the instigation, or with the aid, or in pursuance of the conspiracy. Successor to IPC s. 111.',
  study: `Section 55 deals with divergence between the act abetted and the act actually done.\n\nRule: When an act is abetted and a different act is done, the abettor is liable for the act done, in the same manner and to the same extent as if he had directly abetted it — provided:\n(1) the act done was a probable consequence of the abetment, and\n(2) it was committed under the influence of the instigation, or with the aid, or in pursuance of the conspiracy which constituted the abetment.\n\nEffect: the abettor can be fixed with liability for a different (often more serious) act if it was a probable consequence. Contrast with s. 50 (different intention of the principal — liability keyed to abettor’s own intention).\n\nCite BNS s. 55 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-55-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 111. Liability for a different act that is a probable consequence of the abetment.'] },
    { id: 's-55-m2', title: 'Text', order: 2, content: ['Different act done; abettor liable as if he had directly abetted it; if probable consequence and under influence of the abetment.'] },
    { id: 's-55-m3', title: 'Ingredients', order: 3, content: ['(1) Abetment of an act. (2) A different act done. (3) Probable consequence of the abetment. (4) Committed under influence of instigation/aid/conspiracy.'] },
    { id: 's-55-m4', title: 'Evidence', order: 4, content: ['Nature of the abetment; nature of the act done; probability/causal link.'] },
    { id: 's-55-m5', title: 'Procedure', order: 5, content: ['Charge the abettor for the act done under s. 55 read with the substantive offence.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-55', section: 's. 55', title: 'Liability of abettor when one act abetted and different act done' }],
  examples: [
    { id: 's-55-ex1', title: 'Probable consequence', illustrationType: 'practical', description: 'A abets B to beat C. B, in the course of the beating, causes C’s death in a manner that was a probable consequence. A may be liable for the homicide under s. 55.' },
    { id: 's-55-ex2', title: 'Not a probable consequence', illustrationType: 'fail-scenario', description: 'A abets a simple assault. B independently commits an unrelated arson. The arson is not a probable consequence of the abetment; s. 55 does not fix A with the arson.' },
  ],
  hypotheticals: [{ id: 's-55-hypo', title: 'Different act', facts: 'Abetment to cause hurt; principal causes grievous hurt in a way that was probable.', question: 'Is the abettor liable for GH?', applicableLaw: 'BNS s. 55.', analysis: 'If GH was a probable consequence and done under the influence of the abetment — yes.', conclusion: 'Liable for the act done under s. 55.' }],
  distinctions: [{ id: 's-55-dist', title: 's. 55 vs s. 50', left: 's. 55 (different act)', right: 's. 50 (different intention)', rows: [{ point: 'Focus', left: 'Different act done; probable consequence', right: 'Same act; principal’s intention differs; liability keyed to abettor’s intention' }] }],
  misconceptions: [{ id: 's-55-trap', trap: 'The abettor is always liable for whatever the principal does.', correction: 'Only if the act done was a probable consequence of the abetment and was committed under its influence.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-55-brief', draftingCategory: 'brief', question: 'Explain BNS s. 55.', answer: 'When an act is abetted and a different act is done, the abettor is liable for the act done as if he had directly abetted it, provided the act done was a probable consequence of the abetment and was committed under the influence of the instigation, aid, or conspiracy.', explanation: 'Short note.' },
    { id: 's-55-sub', draftingCategory: 'submissions', question: 'Submissions on s. 55.', answer: 'I. Abetment. II. Different act done. III. Probable consequence and influence. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 55', 'BNS s. 45', 'BNS s. 50', 'IPC s. 111 (historical)'],
  examTips: ['Stress “probable consequence” and “under the influence of the abetment”.', 'Contrast with s. 50.'],
  revisionPoints: ['Different act + probable consequence + under influence of abetment → abettor liable for the act done.', 'Not automatic liability for every different act.'],
  relatedTopics: ['s-45', 's-50', 's-49', 's-54'],
}

export default content
