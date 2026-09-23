import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 5 empowers the appropriate Government to commute a sentence of death, life imprisonment, or other sentences to a lesser punishment, without the consent of the offender. It is the statutory counterpart of the constitutional clemency powers and the successor to IPC ss. 54–55.',
  study: `Section 5 restates the commutation power formerly found in IPC sections 54 and 55.\n\nKey points\n• The appropriate Government may commute any sentence to a lesser form of punishment without the consent of the person sentenced.\n• Death may be commuted to any other punishment in s. 4.\n• Life imprisonment may be commuted to imprisonment of either description for a term not exceeding fourteen years or to fine.\n• Other sentences may be commuted to a fine.\n\nThe power is distinct from the President’s / Governor’s clemency powers under Articles 72 and 161 of the Constitution, which continue to operate. Section 5 is the ordinary statutory commutation route.\n\nDate-of-offence note: for offences committed on or after 1 July 2024 the BNS number is cited; the substance is continuous with the old IPC provisions.`,
  sections: [
    { id: 's-5-m1', title: 'Provenance & Objective', order: 1, content: ['Successor to IPC ss. 54–55. Objective: allow the executive to reduce sentences without requiring the offender’s consent.'] },
    { id: 's-5-m2', title: 'Textual Scope', order: 2, content: ['Death → any other s. 4 punishment; life → term ≤ 14 years or fine; other sentences → fine.'] },
    { id: 's-5-m3', title: 'Ingredients', order: 3, content: ['Valid sentence; decision by the appropriate Government; no consent of the convict required.'] },
    { id: 's-5-m4', title: 'Evidence & Procedure', order: 4, content: ['Commutation is an executive act. Judicial review is limited to the grounds available against executive clemency/commutation decisions (arbitrariness, non-application of mind, etc.).'] },
    { id: 's-5-m5', title: 'Forum & Relationship with Constitution', order: 5, content: ['Statutory power under s. 5 co-exists with Arts. 72 and 161. The two streams are distinct.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-5', section: 's. 5', title: 'Commutation of sentence' }],
  examples: [
    { id: 's-5-ex1', title: 'Death commuted', illustrationType: 'practical', description: 'A death sentence is lawfully commuted by the appropriate Government to imprisonment for life under s. 5. The convict’s consent is not required.' },
    { id: 's-5-ex2', title: 'Boundary', illustrationType: 'fail-scenario', description: 'A court cannot itself “commute” a sentence under s. 5; the power belongs to the appropriate Government.' },
  ],
  hypotheticals: [{ id: 's-5-hypo', title: 'Commutation hypothetical', facts: 'A convict sentenced to death seeks commutation.', question: 'Which authority acts under s. 5?', applicableLaw: 'BNS s. 5; Arts. 72/161.', analysis: 'The appropriate Government may commute under s. 5. Separately, the President or Governor may exercise constitutional clemency.', conclusion: 'Both routes remain open; s. 5 is the statutory route.' }],
  distinctions: [{ id: 's-5-dist', title: 'Statutory commutation vs Constitutional clemency', left: 's. 5 BNS', right: 'Arts. 72 / 161', rows: [{ point: 'Source', left: 'Statute', right: 'Constitution' }, { point: 'Authority', left: 'Appropriate Government', right: 'President / Governor' }] }],
  misconceptions: [{ id: 's-5-trap', trap: 'Commutation requires the convict’s consent.', correction: 'Section 5 expressly permits commutation without the consent of the offender.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-5-brief', draftingCategory: 'brief', question: 'Explain the power of commutation under BNS s. 5.', answer: 'The appropriate Government may commute death, life or other sentences to a lesser punishment without the convict’s consent. It co-exists with constitutional clemency under Arts. 72 and 161.', explanation: 'Short note.' },
    { id: 's-5-sub', draftingCategory: 'submissions', question: 'Submissions on commutation under s. 5.', answer: 'I. Power and scope. II. No consent required. III. Relationship with Arts. 72/161. IV. Prayer for consideration of commutation.', explanation: 'Submissions format.' },
  ],
  bareActPointers: ['BNS s. 5', 'IPC ss. 54–55 (historical)', 'Constitution Arts. 72, 161'],
  examTips: ['Emphasise that consent of the offender is not required.', 'Distinguish statutory commutation from constitutional clemency.'],
  revisionPoints: ['Commutation without consent of offender.', 'Death / life / other sentences may be reduced.', 'Co-exists with Arts. 72 & 161.'],
  relatedTopics: ['s-4', 's-6', 's-8'],
}

export default content
