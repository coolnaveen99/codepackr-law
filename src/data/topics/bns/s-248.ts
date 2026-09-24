import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 248 (and related): false charge of offence made with intent to injure — whoever, with intent to cause injury to any person, institutes or causes to be instituted any criminal proceeding against that person, or falsely charges that person with having committed an offence, knowing that there is no just or lawful ground, is punished as provided. Successor to IPC s. 211. Distinct from defamation and from giving false evidence.',
  study: `False charge with intent to injure under the BNS:\n\nWhoever, with intent to cause injury to any person, institutes or causes to be instituted any criminal proceeding against that person, or falsely charges any person with having committed an offence, knowing that there is no just or lawful ground for such proceeding or charge against that person, is punished as provided (higher when the charge is of a serious offence).\n\nKey points\n• Institution of criminal proceeding or false charge.\n• Knowledge that there is no just or lawful ground.\n• Intent to cause injury.\n\nThis protects persons from malicious false accusations. Cite the applicable BNS section for post-1 July 2024 acts.`,
  sections: [
    { id: 's-248-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 211. False charge / institution of proceeding with intent to injure and knowledge of no just ground.'] },
    { id: 's-248-m2', title: 'Elements', order: 2, content: ['Institutes proceeding or falsely charges; knowledge of no just or lawful ground; intent to cause injury.'] },
    { id: 's-248-m3', title: 'Ingredients', order: 3, content: ['(1) Criminal proceeding or false charge. (2) Knowledge of absence of just/lawful ground. (3) Intent to injure.'] },
    { id: 's-248-m4', title: 'Evidence', order: 4, content: ['Nature of the charge/proceeding; absence of ground; knowledge; intent to injure.'] },
    { id: 's-248-m5', title: 'Procedure', order: 5, content: ['Often requires careful scrutiny of the original complaint; higher punishment for serious false charges.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-248', section: 's. 248', title: 'False charge of offence made with intent to injure' }],
  examples: [
    { id: 's-248-ex1', title: 'Malicious false FIR', illustrationType: 'practical', description: 'A files an FIR accusing B of theft, knowing the accusation is baseless, intending to harm B. The offence is made out.' },
    { id: 's-248-ex2', title: 'Bona fide complaint', illustrationType: 'fail-scenario', description: 'A complains on a reasonable belief that an offence occurred. Without knowledge of absence of just ground and intent to injure, the offence is not made out.' },
  ],
  hypotheticals: [{ id: 's-248-hypo', title: 'False charge', facts: 'Accused institutes a criminal case knowing there is no basis, to harass the opposite party.', question: 'Is the offence made out?', applicableLaw: 'BNS false-charge provisions.', analysis: 'Proceeding + knowledge of no just ground + intent to injure — yes.', conclusion: 'Offence established.' }],
  distinctions: [{ id: 's-248-dist', title: 'False charge vs Defamation vs False evidence', left: 'False charge (s. 248)', right: 'Defamation / False evidence', rows: [{ point: 'Focus', left: 'Instituting proceeding or charging with offence knowing no just ground, intent to injure', right: 'Harm to reputation / false statement under legal obligation' }] }],
  misconceptions: [{ id: 's-248-trap', trap: 'Every acquittal means the complainant committed this offence.', correction: 'The complainant must have known there was no just or lawful ground and must have acted with intent to injure. A failed but bona fide complaint is not this offence.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-248-brief', draftingCategory: 'brief', question: 'Explain false charge with intent to injure under the BNS.', answer: 'Whoever, with intent to cause injury, institutes a criminal proceeding or falsely charges a person with an offence, knowing that there is no just or lawful ground, commits the offence. A bona fide complaint that fails is not enough; knowledge of absence of ground and intent to injure are essential.', explanation: 'Short note.' },
    { id: 's-248-sub', draftingCategory: 'submissions', question: 'Submissions on false charge.', answer: 'I. Proceeding or charge. II. Knowledge of no just ground. III. Intent to injure. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS false-charge provisions', 'BNS s. 227', 'BNS s. 356', 'IPC s. 211 (historical)'],
  examTips: ['Stress knowledge of no just ground and intent to injure.', 'Acquittal alone does not prove this offence.'],
  revisionPoints: ['False charge/proceeding + knowledge of no just ground + intent to injure.', 'Not every failed complaint.', 'Higher punishment for serious false charges.'],
  relatedTopics: ['s-227', 's-356', 's-230'],
}

export default content
