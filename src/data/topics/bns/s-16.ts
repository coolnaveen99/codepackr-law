import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 16: nothing is an offence which is done by any person in pursuance of, or which is warranted by, the judgment or order of a Court, if done whilst such judgment or order remains in force. Successor to IPC s. 78.',
  study: `Section 16 protects acts done under a court judgment or order while it remains in force.\n\nRule: Nothing is an offence which is done pursuant to, or warranted by, a judgment or order of a Court, if done whilst such judgment or order remains in force, notwithstanding that the Court may have had no jurisdiction, provided the person doing the act believed in good faith that the Court had jurisdiction.\n\nKey points: the protection lasts only while the judgment/order is in force; good-faith belief in jurisdiction is required when jurisdiction is later found wanting. Cite BNS s. 16 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-16-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 78. Protects execution of court orders.'] },
    { id: 's-16-m2', title: 'Text', order: 2, content: ['Act pursuant to / warranted by judgment or order; while in force; good-faith belief in jurisdiction if jurisdiction is later held lacking.'] },
    { id: 's-16-m3', title: 'Ingredients', order: 3, content: ['Judgment/order of a Court; act done pursuant to it while in force; good faith as to jurisdiction where relevant.'] },
    { id: 's-16-m4', title: 'Evidence', order: 4, content: ['Existence and currency of the order; good faith.'] },
    { id: 's-16-m5', title: 'Procedure', order: 5, content: ['Complete defence to criminal liability for the act of execution.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-16', section: 's. 16', title: 'Act done pursuant to judgment or order of Court' }],
  examples: [
    { id: 's-16-ex1', title: 'Protected execution', illustrationType: 'practical', description: 'A court officer executes a decree of possession. The act is protected by s. 16 while the decree remains in force.' },
    { id: 's-16-ex2', title: 'Order set aside / stayed', illustrationType: 'fail-scenario', description: 'Once the order is stayed or set aside, further acts under it are no longer protected.' },
  ],
  hypotheticals: [{ id: 's-16-hypo', title: 'Court order', facts: 'Bailiff executes a warrant later held to be without jurisdiction; he believed in good faith that the court had jurisdiction.', question: 'Is s. 16 available?', applicableLaw: 'BNS s. 16.', analysis: 'Yes, if the act was done while the order was in force and the belief was in good faith.', conclusion: 'Protected.' }],
  distinctions: [],
  misconceptions: [{ id: 's-16-trap', trap: 'Any act connected with a court case is protected.', correction: 'Only acts done pursuant to or warranted by a judgment/order while it remains in force, with good faith as to jurisdiction where relevant.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-16-brief', draftingCategory: 'brief', question: 'Explain BNS s. 16.', answer: 'Nothing is an offence done pursuant to or warranted by a Court judgment/order while it remains in force, even if the Court lacked jurisdiction, provided the actor believed in good faith that jurisdiction existed.', explanation: 'Short note.' },
    { id: 's-16-sub', draftingCategory: 'submissions', question: 'Submissions on s. 16.', answer: 'I. Order in force. II. Act pursuant to it. III. Good faith. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 16', 'IPC s. 78 (historical)'],
  examTips: ['Emphasise “while the order remains in force” and good-faith belief in jurisdiction.'],
  revisionPoints: ['Act under court order while in force = no offence (good faith as to jurisdiction).'],
  relatedTopics: ['s-15', 's-14', 'general-exceptions'],
}

export default content
