import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 17: nothing is an offence which is done by a person justified by law, or who by reason of a mistake of fact (not of law) in good faith believes himself justified by law, in doing it. Successor to IPC s. 79. Closely related to s. 14.',
  study: `Section 17 is the “justified by law” counterpart to s. 14.\n\nRule: Nothing is an offence which is done by any person who is justified by law, or who by reason of a mistake of fact (and not by reason of a mistake of law) in good faith believes himself justified by law, in doing it.\n\nDifference from s. 14: s. 14 focuses on being “bound” by law; s. 17 focuses on being “justified” by law. Both exclude pure mistake of law. Cite BNS s. 17 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-17-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 79. Protects acts justified by law or believed in good faith (mistake of fact) to be so justified.'] },
    { id: 's-17-m2', title: 'Text', order: 2, content: ['Justified by law; or good-faith mistake of fact believing oneself justified by law. Mistake of law excluded.'] },
    { id: 's-17-m3', title: 'Ingredients', order: 3, content: ['Act done; either actual legal justification, or good-faith factual mistake leading to belief of justification.'] },
    { id: 's-17-m4', title: 'Evidence', order: 4, content: ['Burden on accused on preponderance (BSA s. 108).'] },
    { id: 's-17-m5', title: 'Procedure', order: 5, content: ['Raised as a defence at trial.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-17', section: 's. 17', title: 'Act done by a person justified, or by mistake of fact believing himself justified, by law' }],
  examples: [
    { id: 's-17-ex1', title: 'Justified by law', illustrationType: 'practical', description: 'A uses reasonable force to prevent a cognizable offence being committed in his presence. The act may be justified under the relevant preventive power and protected by s. 17.' },
    { id: 's-17-ex2', title: 'Mistake of law fails', illustrationType: 'fail-scenario', description: 'A believes (wrongly) that the law allows him to seize a neighbour’s property for a private debt. Mistake of law; s. 17 does not protect.' },
  ],
  hypotheticals: [{ id: 's-17-hypo', title: 'Justification', facts: 'A intervenes to stop an assault, using force he believes is authorised.', question: 'Is s. 17 available?', applicableLaw: 'BNS s. 17.', analysis: 'If the force was actually justified or he had a good-faith factual basis for believing it was, yes. Pure legal error fails.', conclusion: 'Fact-specific.' }],
  distinctions: [{ id: 's-17-dist', title: 's. 14 vs s. 17', left: 's. 14 (bound by law)', right: 's. 17 (justified by law)', rows: [{ point: 'Focus', left: 'Legal duty / obligation', right: 'Legal justification / permission' }] }],
  misconceptions: [{ id: 's-17-trap', trap: 'Any honest belief that one is justified is enough.', correction: 'The belief must rest on a mistake of fact, not of law, and must be in good faith.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-17-brief', draftingCategory: 'brief', question: 'Explain BNS s. 17.', answer: 'Nothing is an offence done by a person justified by law, or who by mistake of fact (not of law) in good faith believes himself justified by law in doing it.', explanation: 'Short note.' },
    { id: 's-17-sub', draftingCategory: 'submissions', question: 'Submissions on s. 17.', answer: 'I. Justification or good-faith factual belief. II. Exclusion of mistake of law. III. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 17', 'BNS s. 14', 'BSA s. 108', 'IPC s. 79 (historical)'],
  examTips: ['Pair with s. 14; both exclude mistake of law.'],
  revisionPoints: ['Justified by law, or good-faith mistake of fact believing justified.', 'Mistake of law is no defence.'],
  relatedTopics: ['s-14', 's-18', 'general-exceptions'],
}

export default content
