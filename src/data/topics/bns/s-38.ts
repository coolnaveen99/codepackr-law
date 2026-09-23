import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 38: when the right of private defence of the body extends to the voluntary causing of death. Six situations (deadly assault, rape, kidnapping, acid attack, etc.). Successor to IPC s. 100. Exceeding the right is still culpable (see exception 2 to s. 101).',
  study: `Section 38 lists the cases in which the right of private defence of the body extends to causing death.\n\nThe right extends to the voluntary causing of death or of any other harm to the assailant if the offence which occasions the exercise of the right is of any of the following descriptions:\n\n1. Such an assault as may reasonably cause the apprehension that death will otherwise be the consequence of the assault.\n2. Such an assault as may reasonably cause the apprehension that grievous hurt will otherwise be the consequence.\n3. An assault with the intention of committing rape.\n4. An assault with the intention of gratifying unnatural lust.\n5. An assault with the intention of kidnapping or abducting.\n6. An assault with the intention of wrongfully confining a person under circumstances that may reasonably cause him to apprehend that he will be unable to have recourse to the public authorities for his release.\n\n(The BNS text tracks the classic six heads; acid-attack and similar modern formulations are read within the grievous-hurt / deadly-assault heads where the facts fit.)\n\nKey limits\n• The apprehension must be reasonable.\n• The right does not extend to causing more harm than is necessary (general principle of private defence).\n• There is no right against acts protected by s. 37.\n• If the right is exceeded in good faith, the killing may fall within Exception 2 to s. 101 (culpable homicide not amounting to murder) rather than full murder.\n\nCite BNS s. 38 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-38-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 100. Defines when private defence of body may extend to causing death.'] },
    { id: 's-38-m2', title: 'The Six Situations', order: 2, content: ['Reasonable apprehension of death; of grievous hurt; assault with intent to commit rape; unnatural lust; kidnapping/abducting; wrongful confinement with no recourse to authorities.'] },
    { id: 's-38-m3', title: 'Essential Ingredients', order: 3, content: ['(1) Occasion for private defence of body. (2) One of the six situations. (3) Reasonable apprehension. (4) Force used does not exceed what is necessary.'] },
    { id: 's-38-m4', title: 'Evidence & Burden', order: 4, content: ['Accused must establish the occasion and the reasonable apprehension on preponderance. Injuries, weapons, numbers, and the sequence of events are the usual materials.'] },
    { id: 's-38-m5', title: 'Exceeding the Right', order: 5, content: ['If death is caused but the right was exceeded (e.g., force continued after the threat ceased), Exception 2 to s. 101 may reduce murder to culpable homicide not amounting to murder.'],
    },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-38', section: 's. 38', title: 'When right of private defence of body extends to causing death' }],
  examples: [
    { id: 's-38-ex1', title: 'Apprehension of death', illustrationType: 'practical', description: 'A is attacked by B with a drawn sword in circumstances that reasonably cause A to fear death. A kills B. s. 38 protects the killing if the force was necessary.' },
    { id: 's-38-ex2', title: 'Right exceeded', illustrationType: 'fail-scenario', description: 'A disarms B and then, after the threat has clearly ceased, continues to strike B until B dies. The continued force exceeds the right; s. 38 does not fully protect; Exception 2 to s. 101 may still apply.' },
  ],
  hypotheticals: [{ id: 's-38-hypo', title: 'Private defence causing death', facts: 'A is confronted by an armed intruder who threatens to kill him. A shoots and kills the intruder.', question: 'Is the killing protected by s. 38?', applicableLaw: 'BNS s. 38; s. 34; Exception 2 to s. 101.', analysis: 'If there was a reasonable apprehension of death and the force was not excessive, s. 38 protects. If the threat had ended before the shot, the right may have ceased (s. 40) and the killing may be only partially excused under the murder exceptions.', conclusion: 'Fact-specific; reasonable apprehension + necessity are the controlling tests.' }],
  distinctions: [{ id: 's-38-dist', title: 'Full private defence vs Exceeding the right', left: 'Within s. 38 (no offence)', right: 'Exceeded (Exception 2 to s. 101)', rows: [{ point: 'Result', left: 'Complete protection', right: 'Culpable homicide not amounting to murder (s. 105 punishment)' }] }],
  misconceptions: [{ id: 's-38-trap', trap: 'Any killing in a fight is protected by private defence.', correction: 'Only when one of the six situations is present, the apprehension is reasonable, and the force does not exceed what is necessary. Exceeding the right remains culpable.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-38-brief', draftingCategory: 'brief', question: 'When does the right of private defence of the body extend to causing death under BNS s. 38?', answer: 'When the offence that occasions the right is one of the six listed situations (apprehension of death or grievous hurt, rape, unnatural lust, kidnapping/abduction, wrongful confinement without recourse to authorities), the apprehension is reasonable, and the force used is not excessive.', explanation: 'Short note.' },
    { id: 's-38-sub', draftingCategory: 'submissions', question: 'Submissions on s. 38 and exceeding the right.', answer: 'I. Occasion and one of the six heads. II. Reasonable apprehension. III. Necessity / no excess. IV. Alternatively, Exception 2 to s. 101. V. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 38', 'BNS s. 34', 'BNS s. 40', 'BNS s. 101 Exception 2', 'IPC s. 100 (historical)'],
  examTips: ['List the six situations.', 'Always discuss “exceeding the right” and Exception 2 to s. 101 when death is caused.'],
  revisionPoints: ['Six situations → may cause death.', 'Reasonable apprehension + necessity.', 'Exceeding → Exception 2 to s. 101.'],
  relatedTopics: ['s-34', 's-41', 's-101', 'culpable-homicide-murder'],
}

export default content
