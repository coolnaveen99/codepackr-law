import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 108 (and related attempt-to-homicide provisions): attempt to commit culpable homicide / murder. When a person does an act with the intention or knowledge required for culpable homicide/murder and toward its commission, but death does not result, the attempt is punished under the applicable attempt section. Distinct from the completed offences under ss. 100–103 and from rash/negligent death under s. 106.',
  study: `Attempt to commit culpable homicide or murder under the BNS:\n\nThe offender does an act with the intention or knowledge that would make the resulting death culpable homicide or murder, and the act is toward the commission of that offence, but death does not ensue.\n\nKey points\n• Mens rea of s. 100 / s. 101 is present.\n• An act beyond preparation toward causing death.\n• Death does not result (otherwise charge the completed offence).\n\nPunishment is as provided in the specific attempt section (often a high fraction of the completed offence’s maximum).\n\nCite the applicable BNS attempt-to-homicide section for post-1 July 2024 acts. Distinguish from s. 106 (no s. 100 mens rea) and from abetment of suicide (s. 107).`,
  sections: [
    { id: 's-108-m1', title: 'Provenance', order: 1, content: ['Attempt structure succeeding IPC attempt-to-murder / CH provisions. Mens rea of homicide + act toward commission + no death.'] },
    { id: 's-108-m2', title: 'Elements', order: 2, content: ['Intention or knowledge under s. 100/101; act beyond preparation toward causing death; death does not result.'] },
    { id: 's-108-m3', title: 'Ingredients', order: 3, content: ['(1) Homicidal mens rea. (2) Act toward commission. (3) Beyond preparation. (4) Death does not ensue.'] },
    { id: 's-108-m4', title: 'Evidence', order: 4, content: ['Nature of the act (weapon, target, force); intention/knowledge; medical evidence that death did not result.'] },
    { id: 's-108-m5', title: 'Procedure', order: 5, content: ['May be charged in the alternative with the completed offence where death is in issue; Sessions trial as applicable.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-108', section: 's. 108', title: 'Attempt to commit culpable homicide / related attempt' }],
  examples: [
    { id: 's-108-ex1', title: 'Attempted murder', illustrationType: 'practical', description: 'A shoots at B intending to kill; B survives. Attempt with murder mens rea is made out.' },
    { id: 's-108-ex2', title: 'Rash act only', illustrationType: 'fail-scenario', description: 'A drives rashly and nearly causes death but has no s. 100 intention/knowledge. Not attempt to commit culpable homicide; may be other offences, but not this attempt.' },
  ],
  hypotheticals: [{ id: 's-108-hypo', title: 'Attempt vs completed', facts: 'Accused stabs with intent to kill; victim survives after surgery.', question: 'Completed murder or attempt?', applicableLaw: 'BNS attempt-to-homicide provisions; ss. 100–101.', analysis: 'Death did not result → attempt with murder mens rea, not the completed offence.', conclusion: 'Attempt established.' }],
  distinctions: [{ id: 's-108-dist', title: 'Attempt vs s. 106 vs s. 107', left: 'Attempt to commit CH/murder', right: 's. 106 / s. 107', rows: [{ point: 'Mens rea', left: 's. 100/101 intention or knowledge', right: 'Rashness/negligence only / abetment of suicide' }] }],
  misconceptions: [{ id: 's-108-trap', trap: 'Any act that nearly causes death is attempt to murder.', correction: 'The mens rea of s. 100/101 is required. Rash or negligent acts that nearly cause death fall under other provisions, not attempt to commit culpable homicide/murder.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-108-brief', draftingCategory: 'brief', question: 'When is attempt to commit culpable homicide/murder made out under the BNS?', answer: 'When the accused does an act with the intention or knowledge required for culpable homicide or murder, toward its commission and beyond preparation, but death does not result. Distinct from s. 106 (rash/negligent) and s. 107 (abetment of suicide).', explanation: 'Short note.' },
    { id: 's-108-sub', draftingCategory: 'submissions', question: 'Submissions on attempt to commit homicide.', answer: 'I. Homicidal mens rea. II. Act beyond preparation. III. Death did not result. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS attempt-to-homicide provisions', 'BNS ss. 100–103', 'BNS s. 106', 'BNS s. 107', 'IPC attempt provisions (historical)'],
  examTips: ['Require s. 100/101 mens rea.', 'Distinguish from rash/negligent near-miss and from abetment of suicide.'],
  revisionPoints: ['Attempt = homicidal mens rea + act toward commission + no death.', 'Not the same as s. 106 or s. 107.', 'Beyond preparation required.'],
  relatedTopics: ['s-100', 's-101', 's-106', 's-107', 's-109'],
}

export default content
