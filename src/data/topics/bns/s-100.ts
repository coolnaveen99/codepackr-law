import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 100 defines culpable homicide — the genus. Causing death with intention of causing death, or with intention of causing such bodily injury as is likely to cause death, or with knowledge that the act is likely to cause death. Murder (s. 101) is the species. Punishment for pure culpable homicide not amounting to murder is s. 105. IPC 299 → BNS 100.',
  study: `Section 100 is the definition of culpable homicide — the genus of which murder is the species.\n\nText (core)\nWhoever causes death by doing an act with the intention of causing death, or with the intention of causing such bodily injury as is likely to cause death, or with the knowledge that he is likely by such act to cause death, commits the offence of culpable homicide.\n\nThree mental elements (any one suffices)\n1. Intention to cause death.\n2. Intention to cause bodily injury that is likely to cause death.\n3. Knowledge that the act is likely to cause death.\n\nRelationship with murder (s. 101)\nEvery murder is culpable homicide, but not every culpable homicide is murder. s. 101 adds the four classic “murder clauses”. If an exception to s. 101 applies, or if only the residual s. 100 knowledge/intention is made out without a murder clause, the offence is culpable homicide not amounting to murder, punished under s. 105.\n\ns. 106 (rash/negligent death) is a still lower grade — no intention or knowledge of the degree required by s. 100.\n\nDate-of-offence rule: offences on or after 1 July 2024 → BNS 100/101/103/105; before that date → IPC 299/300/302/304.\n\nNumber trap: BNS 304 is snatching, not culpable homicide. CHNAM punishment is s. 105.`,
  sections: [
    { id: 's-100-m1', title: 'Provenance & Genus-Species Doctrine', order: 1, content: ['Successor to IPC s. 299. Culpable homicide is the genus; murder is the species (State of A.P. v. Rayavarapu Punnayya). Always start with s. 100 before climbing to s. 101.'] },
    { id: 's-100-m2', title: 'Textual Anatomy — Three Mental Elements', order: 2, content: ['Intention to cause death; intention to cause bodily injury likely to cause death; knowledge that the act is likely to cause death.'] },
    { id: 's-100-m3', title: 'Essential Ingredients', order: 3, content: ['(1) Death of a human being. (2) Caused by an act of the accused. (3) One of the three mental elements in s. 100.'] },
    { id: 's-100-m4', title: 'Evidence & Burden', order: 4, content: ['Prosecution proves death, causation and the mental element beyond reasonable doubt. Intention/knowledge are inferred from weapons, injuries, conduct and circumstances (Virsa Singh line on the “sufficient in ordinary course” clause of murder is relevant when climbing to s. 101).'] },
    { id: 's-100-m5', title: 'Procedure & Punishment Path', order: 5, content: ['If s. 101 clauses are met and no exception → s. 103 (murder). If exception or only s. 100 residual → s. 105. If only rashness/negligence → s. 106. Forum follows BNSS Schedule for the eventual offence.'] },
  ],
  provisions: [
    { actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-100', section: 's. 100', title: 'Culpable homicide' },
    { actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-101', section: 's. 101', title: 'Murder' },
    { actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-103', section: 's. 103', title: 'Punishment for murder' },
    { actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-105', section: 's. 105', title: 'Punishment for culpable homicide not amounting to murder' },
  ],
  examples: [
    { id: 's-100-ex1', title: 'Knowledge limb', illustrationType: 'practical', description: 'A strikes B with a heavy stick on the head, knowing that such a blow is likely to cause death. B dies. Even without a proven intention to kill, the knowledge limb of s. 100 is made out; whether it is murder depends on the s. 101 clauses.' },
    { id: 's-100-ex2', title: 'Number trap', illustrationType: 'fail-scenario', description: 'Do not write “punishable under s. 304 BNS” for culpable homicide not amounting to murder. BNS 304 is snatching. The correct punishment section is s. 105.' },
  ],
  hypotheticals: [{ id: 's-100-hypo', title: 'Genus before species', facts: 'A causes B’s death by a single stab to the chest in a sudden quarrel.', question: 'How should the analysis proceed under the BNS?', applicableLaw: 'BNS ss. 100, 101, 103, 105; Virsa Singh; Punnayya.', analysis: '1. Start with s. 100 — death + act + intention/knowledge. 2. Climb to s. 101 — does a murder clause fit (e.g., injury sufficient in ordinary course to cause death)? 3. Check exceptions (provocation, sudden fight, etc.). 4. If murder clause + no exception → s. 103; if exception or only residual s. 100 → s. 105.', conclusion: 'Structured genus → species → exception → punishment path is mandatory.' }],
  distinctions: [{ id: 's-100-dist', title: 'Culpable homicide vs Murder', left: 's. 100 / s. 105', right: 's. 101 / s. 103', rows: [{ point: 'Mental element', left: 'Intention or knowledge that death is likely', right: 'The four higher-quality murder clauses' }, { point: 'Punishment', left: 's. 105', right: 's. 103 (death or life)' }, { point: 'IPC concordance', left: '299 / 304', right: '300 / 302' }] }],
  misconceptions: [
    { id: 's-100-trap-1', trap: 'BNS 304 is culpable homicide not amounting to murder.', correction: 'BNS 304 is snatching. CHNAM is punished under s. 105.' },
    { id: 's-100-trap-2', trap: 'BNS 101 is the punishment for murder.', correction: '101 is the definition of murder. Punishment is s. 103.' },
  ],
  cases: [
    { name: 'State of A.P. v. Rayavarapu Punnayya', year: 1976, citation: '(1977) 1 SCC 373', court: 'Supreme Court of India', holding: 'Culpable homicide is the genus, murder the species. Always begin with the definition of culpable homicide before examining the murder clauses.', relevance: 'Opening sentence of any homicide answer under BNS 100/101.' },
    { name: 'Virsa Singh v. State of Punjab', year: 1958, citation: 'AIR 1958 SC 465', court: 'Supreme Court of India', holding: 'Once the bodily injury intended is established and that injury is sufficient in the ordinary course of nature to cause death, the third murder clause is satisfied even if death as such was not desired.', relevance: 'Foundational on the third clause of murder (s. 101).' },
  ],
  questionsAndAnswers: [
    { id: 's-100-brief', draftingCategory: 'brief', question: 'Define culpable homicide under BNS s. 100 and explain its relationship with murder.', answer: 'Culpable homicide (s. 100) is causing death with intention of causing death, or intention of causing bodily injury likely to cause death, or knowledge that the act is likely to cause death. It is the genus; murder (s. 101) is the species. If a murder clause is met and no exception applies, punishment is s. 103; otherwise s. 105.', explanation: 'IRAC-ready note.' },
    { id: 's-100-sub', draftingCategory: 'submissions', question: 'Written submissions on the scheme of homicide under BNS ss. 100–106.', answer: 'I. Genus (s. 100). II. Species (s. 101 four clauses + Virsa Singh). III. Exceptions → s. 105. IV. Rash/negligent death (s. 106). V. Number traps (304 = snatching; 103 not 101). VI. Prayer.', explanation: 'Full submissions.' },
  ],
  bareActPointers: ['BNS s. 100', 'BNS s. 101', 'BNS s. 103', 'BNS s. 105', 'BNS s. 106', 'IPC 299–304A (historical)'],
  examTips: ['Always start with genus (s. 100) before species (s. 101).', 'Never write “punishable under s. 101” or “s. 304 BNS” for CHNAM.'],
  revisionPoints: ['100 = definition CH; 101 = definition murder; 103 = punishment murder; 105 = CHNAM.', 'IPC 302 → BNS 103. BNS 304 = snatching.', 'Punnayya: genus then species.'],
  relatedTopics: ['s-101', 's-103', 's-105', 'culpable-homicide-murder', 's-106'],
}

export default content
