import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 33: nothing is an offence by reason that it causes, or that it is intended to cause, or that it is known to be likely to cause, any harm, if that harm is so slight that no person of ordinary sense and temper would complain of such harm. Successor to IPC s. 95 (de minimis).',
  study: `Section 33 is the de minimis exception.\n\nRule: Nothing is an offence by reason that it causes, or that it is intended to cause, or that it is known to be likely to cause, any harm, if that harm is so slight that no person of ordinary sense and temper would complain of such harm.\n\nIt filters out trivial harms that the criminal law is not meant to address. The standard is objective: the ordinary person of sense and temper. Cite BNS s. 33 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-33-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 95. Excludes trivial harms from the reach of the criminal law.'] },
    { id: 's-33-m2', title: 'Text', order: 2, content: ['Harm caused / intended / known to be likely; so slight that no person of ordinary sense and temper would complain.'] },
    { id: 's-33-m3', title: 'Ingredients', order: 3, content: ['The only “harm” in issue is so slight that an ordinary person would not complain of it.'] },
    { id: 's-33-m4', title: 'Evidence', order: 4, content: ['Nature and degree of the harm; objective ordinary-person standard.'] },
    { id: 's-33-m5', title: 'Procedure', order: 5, content: ['May be raised to seek discharge or acquittal on the ground that no offence is constituted.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-33', section: 's. 33', title: 'Act causing slight harm' }],
  examples: [
    { id: 's-33-ex1', title: 'Trivial harm', illustrationType: 'practical', description: 'A lightly brushes past B in a crowd, causing no real injury or offence that an ordinary person would complain of. s. 33 may apply.' },
    { id: 's-33-ex2', title: 'Not slight', illustrationType: 'fail-scenario', description: 'A deliberately strikes B causing visible injury. The harm is not “slight” under the ordinary-person standard; s. 33 fails.' },
  ],
  hypotheticals: [{ id: 's-33-hypo', title: 'De minimis', facts: 'Very minor contact with no real injury.', question: 'Is an offence constituted?', applicableLaw: 'BNS s. 33.', analysis: 'If the harm is so slight that no ordinary person would complain, no offence.', conclusion: 'No offence if the threshold is met.' }],
  distinctions: [],
  misconceptions: [{ id: 's-33-trap', trap: 'Section 33 applies whenever the accused says the harm was minor.', correction: 'The test is objective — whether a person of ordinary sense and temper would complain — not the accused’s subjective view.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-33-brief', draftingCategory: 'brief', question: 'Explain the de minimis rule in BNS s. 33.', answer: 'Nothing is an offence by reason of harm that is so slight that no person of ordinary sense and temper would complain of it.', explanation: 'Short note.' },
    { id: 's-33-sub', draftingCategory: 'submissions', question: 'Submissions on s. 33.', answer: 'I. Nature of the harm. II. Ordinary-person standard. III. Prayer for discharge/acquittal.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 33', 'IPC s. 95 (historical)'],
  examTips: ['State the objective “ordinary sense and temper” standard.'],
  revisionPoints: ['Slight harm that no ordinary person would complain of = no offence.'],
  relatedTopics: ['s-18', 's-19', 'general-exceptions'],
}

export default content
