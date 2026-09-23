import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 15: nothing is an offence which is done by a Judge when acting judicially in the exercise of any power which is, or which in good faith he believes to be, given to him by law. Successor to IPC s. 77.',
  study: `Section 15 protects judicial acts.\n\nRule: Nothing is an offence which is done by a Judge when acting judicially in the exercise of any power which is, or which in good faith he believes to be, given to him by law.\n\nKey points: the act must be done in a judicial capacity; the power must exist or be believed in good faith to exist. Purely administrative or personal acts of a judge are not protected. Cite BNS s. 15 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-15-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 77. Protects judges acting judicially.'] },
    { id: 's-15-m2', title: 'Text', order: 2, content: ['Judge acting judicially; power given by law or believed in good faith to be given by law.'] },
    { id: 's-15-m3', title: 'Ingredients', order: 3, content: ['Act by a Judge; acting judicially; power exists or good-faith belief that it exists.'] },
    { id: 's-15-m4', title: 'Evidence', order: 4, content: ['Judicial character of the act and good faith as to jurisdiction.'] },
    { id: 's-15-m5', title: 'Procedure', order: 5, content: ['Raised as a complete defence to criminal liability for the judicial act.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-15', section: 's. 15', title: 'Act of Judge when acting judicially' }],
  examples: [
    { id: 's-15-ex1', title: 'Protected judicial act', illustrationType: 'practical', description: 'A judge passes a sentence within jurisdiction. The act is protected by s. 15 even if the sentence is later set aside on appeal.' },
    { id: 's-15-ex2', title: 'Non-judicial act', illustrationType: 'fail-scenario', description: 'A judge personally assaults a litigant outside court. s. 15 does not apply.' },
  ],
  hypotheticals: [{ id: 's-15-hypo', title: 'Judicial act', facts: 'Judge orders detention under a power he in good faith believes he has.', question: 'Is s. 15 available?', applicableLaw: 'BNS s. 15.', analysis: 'If acting judicially and good-faith belief in the power, yes.', conclusion: 'Protected.' }],
  distinctions: [],
  misconceptions: [{ id: 's-15-trap', trap: 'Every act of a judge is protected.', correction: 'Only acts done when acting judicially in the exercise of (or good-faith belief in) a legal power.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-15-brief', draftingCategory: 'brief', question: 'Explain BNS s. 15.', answer: 'Nothing is an offence done by a Judge when acting judicially in the exercise of a power given by law or believed in good faith to be given by law.', explanation: 'Short note.' },
    { id: 's-15-sub', draftingCategory: 'submissions', question: 'Submissions on s. 15.', answer: 'I. Judicial capacity. II. Power or good-faith belief. III. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 15', 'IPC s. 77 (historical)'],
  examTips: ['Emphasise “acting judicially” and good-faith belief as to power.'],
  revisionPoints: ['Judge acting judicially + power or good-faith belief = no offence.'],
  relatedTopics: ['s-14', 's-16', 'general-exceptions'],
}

export default content
