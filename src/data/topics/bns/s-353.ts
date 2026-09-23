import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 353 (and related): statements conducing to public mischief — making, publishing, or circulating any statement, rumour, or report with intent to cause (or which is likely to cause) fear or alarm to the public, or to induce a person to commit an offence against the State or public tranquillity, or to incite one class/community against another. Successor structure to IPC s. 505. Distinct from s. 152 (sovereignty/unity) and from defamation.',
  study: `Public-mischief statements under the BNS:\n\nWhoever makes, publishes, or circulates any statement, rumour, or report:\n• with intent to cause, or which is likely to cause, fear or alarm to the public or a section of the public, whereby any person may be induced to commit an offence against the State or against public tranquillity; or\n• with intent to incite, or which is likely to incite, one class or community against another;\nis punished as provided.\n\nExceptions typically protect statements made in good faith to warn of danger or for other legitimate purposes as specified.\n\nCite the applicable BNS section for post-1 July 2024 acts. Distinguish from s. 152 (secession/rebellion/sovereignty) and from defamation (harm to individual reputation).`,
  sections: [
    { id: 's-353-m1', title: 'Provenance', order: 1, content: ['Successor structure to IPC s. 505. Statements/rumours conducing to public mischief.'] },
    { id: 's-353-m2', title: 'Elements', order: 2, content: ['Make/publish/circulate statement, rumour, or report; intent or likelihood of fear/alarm inducing offence against State/tranquillity, or inciting class/community against another.'] },
    { id: 's-353-m3', title: 'Ingredients', order: 3, content: ['(1) Statement/rumour/report. (2) Making, publishing, or circulating. (3) Intent or likelihood of the specified public harm. (4) No exception.'] },
    { id: 's-353-m4', title: 'Evidence', order: 4, content: ['Content; medium; reach; intent; actual or likely effect on public order or inter-community relations.'] },
    { id: 's-353-m5', title: 'Procedure', order: 5, content: ['Sensitive public-order offence; forum per BNSS Schedule; free-speech limits relevant in interpretation.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-353', section: 's. 353', title: 'Statements conducing to public mischief' }],
  examples: [
    { id: 's-353-ex1', title: 'Rumour causing alarm', illustrationType: 'practical', description: 'A circulates a false rumour intending to cause public fear so that people riot. The offence is made out.' },
    { id: 's-353-ex2', title: 'Good-faith warning', illustrationType: 'fail-scenario', description: 'A in good faith warns the public of a genuine danger. An exception may protect the statement.' },
  ],
  hypotheticals: [{ id: 's-353-hypo', title: 'Public mischief statement', facts: 'Accused publishes a communal rumour likely to incite one community against another.', question: 'Is the offence made out?', applicableLaw: 'BNS public-mischief statement provisions.', analysis: 'Publish + likelihood of inciting class/community against another — yes, absent exception.', conclusion: 'Offence established.' }],
  distinctions: [{ id: 's-353-dist', title: 's. 353 vs s. 152 vs Defamation', left: 's. 353 (public mischief statements)', right: 's. 152 / Defamation', rows: [{ point: 'Focus', left: 'Fear/alarm inducing offence against State/tranquillity, or inter-community incitement', right: 'Secession/rebellion/sovereignty / harm to individual reputation' }] }],
  misconceptions: [{ id: 's-353-trap', trap: 'Any false statement online is this offence.', correction: 'The statement must be made/published/circulated with intent or likelihood of the specified public harms (fear/alarm inducing offence against State/tranquillity, or inter-community incitement). Ordinary falsehoods without that public dimension are not this offence.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-353-brief', draftingCategory: 'brief', question: 'Explain statements conducing to public mischief under the BNS.', answer: 'Making, publishing, or circulating a statement, rumour, or report with intent to cause (or which is likely to cause) fear or alarm inducing an offence against the State or public tranquillity, or with intent to incite (or which is likely to incite) one class or community against another. Exceptions protect good-faith warnings and similar conduct.', explanation: 'Short note.' },
    { id: 's-353-sub', draftingCategory: 'submissions', question: 'Submissions on public-mischief statements.', answer: 'I. Statement/rumour/report. II. Publish/circulate. III. Intent or likelihood of specified public harm. IV. Exception if any. V. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS public-mischief statement provisions', 'BNS s. 152', 'BNS s. 356', 'IPC s. 505 (historical)'],
  examTips: ['Distinguish from s. 152 (sovereignty) and defamation.', 'State the public-order / inter-community focus.'],
  revisionPoints: ['Statement/rumour + intent/likelihood of public fear/alarm or inter-community incitement.', 'Exceptions for good faith.', 'Not the same as sedition-replacement (s. 152) or defamation.'],
  relatedTopics: ['s-152', 's-189', 's-356', 's-351'],
}

export default content
