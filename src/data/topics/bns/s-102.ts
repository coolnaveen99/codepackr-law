import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 102: culpable homicide by causing death of person other than the person whose death was intended. If a person, by doing anything which he intends or knows to be likely to cause death, commits culpable homicide by causing the death of any person whose death he neither intends nor knows himself to be likely to cause, the culpable homicide is dealt with as if the death of the intended person had been caused. Successor to IPC s. 301. Transferred malice in homicide.',
  study: `Section 102 is the transferred-malice rule for culpable homicide.\n\nRule: If a person, by doing anything which he intends or knows to be likely to cause death, commits culpable homicide by causing the death of any person whose death he neither intends nor knows himself to be likely to cause, the culpable homicide committed by the offender is of the description of which it would have been if he had caused the death of the person whose death he intended or knew himself to be likely to cause.\n\nEffect: the mental element directed at A is transferred to the death of B. Whether the resulting offence is murder or culpable homicide not amounting to murder depends on how the case would have been classified if A had died.\n\nCite BNS s. 102 for post-1 July 2024 acts. Always read with ss. 100, 101, 103, 105.`,
  sections: [
    { id: 's-102-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 301. Transferred malice in culpable homicide.'] },
    { id: 's-102-m2', title: 'Text', order: 2, content: ['Act intended/known likely to cause death; death of a different person actually caused; treated as if the intended person had died.'] },
    { id: 's-102-m3', title: 'Ingredients', order: 3, content: ['(1) Act with intention or knowledge of likelihood of causing death. (2) Death of a person other than the one intended/foreseen. (3) Classification follows what it would have been for the intended victim.'] },
    { id: 's-102-m4', title: 'Evidence', order: 4, content: ['Intention/knowledge directed at the intended victim; causal link to the actual victim’s death.'] },
    { id: 's-102-m5', title: 'Procedure', order: 5, content: ['Charge and sentence as for the homicide type that would have applied to the intended victim (murder or CHNAM).'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-102', section: 's. 102', title: 'Culpable homicide by causing death of person other than person whose death was intended' }],
  examples: [
    { id: 's-102-ex1', title: 'Transferred malice', illustrationType: 'practical', description: 'A shoots at B intending to kill B; the bullet kills C. Under s. 102 the case is treated as if A had killed B — if that would have been murder, it is murder of C.' },
    { id: 's-102-ex2', title: 'No intention/knowledge of death', illustrationType: 'fail-scenario', description: 'If A had no intention or knowledge of likelihood of causing death at all, s. 102 does not apply; the analysis falls under ordinary causation and mens rea rules.' },
  ],
  hypotheticals: [{ id: 's-102-hypo', title: 'Wrong victim', facts: 'A aims a fatal blow at B; C intervenes and dies from the blow.', question: 'How is A’s liability classified?', applicableLaw: 'BNS s. 102; ss. 100–101.', analysis: 's. 102 transfers the mens rea; classify as if B had died (murder or CHNAM accordingly).', conclusion: 'Liability follows the classification that would have applied to B’s death.' }],
  distinctions: [],
  misconceptions: [{ id: 's-102-trap', trap: 'Killing the wrong person is always only culpable homicide not amounting to murder.', correction: 's. 102 classifies the homicide as it would have been for the intended victim — including murder if a s. 101 clause would have applied.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-102-brief', draftingCategory: 'brief', question: 'Explain transferred malice under BNS s. 102.', answer: 'If a person by an act intended or known to be likely to cause death commits culpable homicide by causing the death of someone other than the intended person, the homicide is of the description it would have been if the intended person had died. Mens rea is transferred; classification (murder or CHNAM) follows accordingly.', explanation: 'Short note.' },
    { id: 's-102-sub', draftingCategory: 'submissions', question: 'Submissions on s. 102.', answer: 'I. Intention/knowledge directed at intended victim. II. Death of different person. III. Classification as if intended victim died. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 102', 'BNS s. 100', 'BNS s. 101', 'BNS s. 103', 'BNS s. 105', 'IPC s. 301 (historical)'],
  examTips: ['Always run the “as if the intended person had died” classification.', 'Link to ss. 100/101/103/105.'],
  revisionPoints: ['Transferred malice: classify as if the intended victim had died.', 'Can be murder or CHNAM depending on the intended case.', 'Requires intention or knowledge of likelihood of causing death.'],
  relatedTopics: ['s-100', 's-101', 's-103', 's-105'],
}

export default content
