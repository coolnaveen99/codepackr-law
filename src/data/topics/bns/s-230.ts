import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 230 (and related): using evidence known to be false — whoever corruptly uses or attempts to use as true or genuine evidence any evidence which he knows to be false or fabricated is punished as if he had given or fabricated false evidence. Successor to IPC s. 196.',
  study: `Using false evidence under the BNS:\n\nWhoever corruptly uses or attempts to use as true or genuine evidence any evidence which he knows to be false or fabricated is punished in the same manner as if he gave or fabricated false evidence.\n\nKey points\n• Use or attempt to use as true/genuine.\n• Knowledge that the evidence is false or fabricated.\n• Corruptly.\n\nThis catches the party who did not themselves give or fabricate the false evidence but knowingly deploys it. Cite the applicable BNS section for post-1 July 2024 acts.`,
  sections: [
    { id: 's-230-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 196. Corrupt use of evidence known to be false or fabricated.'] },
    { id: 's-230-m2', title: 'Elements', order: 2, content: ['Use or attempt to use as true/genuine; evidence known to be false or fabricated; corruptly.'] },
    { id: 's-230-m3', title: 'Ingredients', order: 3, content: ['(1) Evidence that is false or fabricated. (2) Knowledge of falsity. (3) Use or attempt to use as true. (4) Corruptly.'] },
    { id: 's-230-m4', title: 'Evidence', order: 4, content: ['Nature of the evidence; knowledge of the user; manner of use in the proceeding.'] },
    { id: 's-230-m5', title: 'Procedure', order: 5, content: ['Often linked to the same proceeding in which the false evidence was deployed; court complaint may be required.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-230', section: 's. 230', title: 'Using evidence known to be false' }],
  examples: [
    { id: 's-230-ex1', title: 'Deploying known false document', illustrationType: 'practical', description: 'A knowingly tenders a fabricated document as genuine in a judicial proceeding. Using false evidence is made out.' },
    { id: 's-230-ex2', title: 'No knowledge of falsity', illustrationType: 'fail-scenario', description: 'A tenders a document believing it to be genuine. Without knowledge of falsity, s. 230 does not apply.' },
  ],
  hypotheticals: [{ id: 's-230-hypo', title: 'Use of false evidence', facts: 'Accused knows a witness statement is false and still relies on it as true in court.', question: 'Is s. 230 attracted?', applicableLaw: 'BNS using-false-evidence provisions.', analysis: 'Corrupt use of evidence known to be false — yes.', conclusion: 'Offence established.' }],
  distinctions: [],
  misconceptions: [{ id: 's-230-trap', trap: 'Only the person who fabricated the evidence is liable.', correction: 'The person who corruptly uses evidence knowing it to be false or fabricated is also liable, as if he had given or fabricated it.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-230-brief', draftingCategory: 'brief', question: 'Explain using evidence known to be false under the BNS.', answer: 'Whoever corruptly uses or attempts to use as true or genuine any evidence which he knows to be false or fabricated is punished as if he had given or fabricated false evidence.', explanation: 'Short note.' },
    { id: 's-230-sub', draftingCategory: 'submissions', question: 'Submissions on using false evidence.', answer: 'I. Evidence false or fabricated. II. Knowledge. III. Corrupt use as true. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS using-false-evidence provisions', 'BNS giving/fabricating false evidence', 'IPC s. 196 (historical)'],
  examTips: ['Stress knowledge of falsity and corrupt use.', 'Liability is as if the user had given/fabricated the false evidence.'],
  revisionPoints: ['Corrupt use of evidence known to be false/fabricated.', 'Punished as if he gave or fabricated it.', 'Knowledge is essential.'],
  relatedTopics: ['s-227', 's-336', 's-248'],
}

export default content
