import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 101 defines murder — the species of culpable homicide. Four classic clauses (intention to cause death; intention of injury known to be likely to cause death of the person; intention of injury sufficient in ordinary course of nature to cause death; knowledge of imminent danger so great that death must in all probability result). Exceptions drop the case to culpable homicide not amounting to murder (s. 105). Punishment is s. 103. IPC 300 → BNS 101.',
  study: `Section 101 is the definition of murder.\n\nCulpable homicide is murder in four cases (summary):\n1. Act done with the intention of causing death.\n2. Act done with the intention of causing such bodily injury as the offender knows to be likely to cause the death of the person to whom the harm is caused.\n3. Act done with the intention of causing bodily injury to any person, and the bodily injury intended to be inflicted is sufficient in the ordinary course of nature to cause death (Virsa Singh).\n4. Person commits the act knowing that it is so imminently dangerous that it must, in all probability, cause death or such bodily injury as is likely to cause death, and commits such act without any excuse for incurring the risk.\n\nExceptions (grave and sudden provocation; private defence exceeded in good faith; public servant exceeding powers in good faith; sudden fight; consent — as detailed in the section) take the case out of murder and into culpable homicide not amounting to murder (punished under s. 105).\n\nPunishment for murder is s. 103 (death or life + fine); s. 103(2) is the group/lynching clause.\n\nNumber traps: BNS 101 is definition, not punishment. BNS 304 is snatching, not CHNAM. Cite BNS 101/103 for post-1 July 2024 offences.`,
  sections: [
    { id: 's-101-m1', title: 'Provenance & Genus-Species', order: 1, content: ['Successor to IPC s. 300. Murder is the species of the genus culpable homicide (s. 100). Punnayya: always start with s. 100 before climbing to s. 101.'] },
    { id: 's-101-m2', title: 'Four Murder Clauses', order: 2, content: ['(1) Intention to cause death. (2) Intention of injury known to be likely to cause death of that person. (3) Intention of injury sufficient in ordinary course of nature to cause death (Virsa Singh). (4) Knowledge of imminent danger that death must in all probability result, without excuse.'] },
    { id: 's-101-m3', title: 'Exceptions', order: 3, content: ['Grave and sudden provocation; private defence exceeded in good faith; public servant exceeding powers in good faith; sudden fight; consent — as in the statutory text. Effect: CHNAM under s. 105, not acquittal.'] },
    { id: 's-101-m4', title: 'Evidence & Burden', order: 4, content: ['Prosecution proves a murder clause beyond reasonable doubt. Accused raises exception on preponderance (BSA s. 108). Virsa Singh: once the intended injury is proved and is sufficient in ordinary course to cause death, the third clause is satisfied even without desire for death as such.'] },
    { id: 's-101-m5', title: 'Punishment Path', order: 5, content: ['Murder clause + no exception → s. 103. Exception made out → s. 105. Only residual s. 100 knowledge → s. 105. Only rash/negligence → s. 106.'] },
  ],
  provisions: [
    { actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-101', section: 's. 101', title: 'Murder' },
    { actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-100', section: 's. 100', title: 'Culpable homicide' },
    { actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-103', section: 's. 103', title: 'Punishment for murder' },
    { actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-105', section: 's. 105', title: 'Punishment for culpable homicide not amounting to murder' },
  ],
  examples: [
    { id: 's-101-ex1', title: 'Third clause (Virsa Singh)', illustrationType: 'practical', description: 'A intentionally inflicts a stab wound that is sufficient in the ordinary course of nature to cause death. Even if A did not desire death as such, the third clause of s. 101 is satisfied.' },
    { id: 's-101-ex2', title: 'Exception — sudden fight', illustrationType: 'practical', description: 'Death is caused in a sudden fight in the heat of passion upon a sudden quarrel without premeditation and without the offender taking undue advantage. The exception may take the case to s. 105.' },
  ],
  hypotheticals: [{ id: 's-101-hypo', title: 'Murder vs CHNAM', facts: 'A stabs B in the chest in a sudden quarrel after grave provocation; B dies.', question: 'Murder or culpable homicide not amounting to murder?', applicableLaw: 'BNS ss. 100, 101, 103, 105; exceptions to s. 101.', analysis: 'Chest stab is ordinarily sufficient to cause death (third clause). The live issue is whether the grave-and-sudden-provocation or sudden-fight exception is made out. If yes → s. 105; if no → s. 103.', conclusion: 'Fact-specific; structure the answer genus → species → exception → punishment.' }],
  distinctions: [{ id: 's-101-dist', title: 'Murder vs Culpable homicide not amounting to murder', left: 's. 101 / s. 103', right: 's. 100 residual / exceptions → s. 105', rows: [{ point: 'Mental element', left: 'One of the four murder clauses', right: 'Only s. 100 intention/knowledge, or exception to s. 101' }, { point: 'Punishment', left: 'Death or life + fine (s. 103)', right: 's. 105 scale' }] }],
  misconceptions: [
    { id: 's-101-trap-1', trap: 'BNS 101 is the punishment for murder.', correction: '101 is the definition. Punishment is s. 103.' },
    { id: 's-101-trap-2', trap: 'BNS 304 is culpable homicide not amounting to murder.', correction: 'BNS 304 is snatching. CHNAM is punished under s. 105.' },
  ],
  cases: [
    { name: 'Virsa Singh v. State of Punjab', year: 1958, citation: 'AIR 1958 SC 465', court: 'Supreme Court of India', holding: 'Once the bodily injury intended is established and that injury is sufficient in the ordinary course of nature to cause death, the third murder clause is satisfied even if death as such was not desired.', relevance: 'Foundational on the third clause of s. 101.' },
    { name: 'State of A.P. v. Rayavarapu Punnayya', year: 1976, citation: '(1977) 1 SCC 373', court: 'Supreme Court of India', holding: 'Culpable homicide is the genus, murder the species. Always begin with the definition of culpable homicide.', relevance: 'Opening structure of any homicide answer.' },
  ],
  questionsAndAnswers: [
    { id: 's-101-brief', draftingCategory: 'brief', question: 'Define murder under BNS s. 101 and state when it is reduced to culpable homicide not amounting to murder.', answer: 'Murder is culpable homicide that falls within one of the four clauses of s. 101. If an exception to s. 101 is made out, the offence is culpable homicide not amounting to murder, punished under s. 105 — not an acquittal. Punishment for murder is s. 103.', explanation: 'IRAC-ready note.' },
    { id: 's-101-sub', draftingCategory: 'submissions', question: 'Written submissions on murder under BNS s. 101.', answer: 'I. Genus (s. 100). II. Species — four clauses (Virsa Singh on third). III. Exceptions. IV. Punishment path (103 vs 105). V. Number traps. VI. Prayer.', explanation: 'Full submissions.' },
  ],
  bareActPointers: ['BNS s. 101', 'BNS s. 100', 'BNS s. 103', 'BNS s. 105', 'IPC 300/302/304 (historical)'],
  examTips: ['Never write “punishable under s. 101”.', 'Always run genus → species → exception → punishment.', 'BNS 304 is snatching.'],
  revisionPoints: ['101 = definition of murder; 103 = punishment.', 'Four clauses; exceptions → s. 105.', 'Virsa Singh on third clause; Punnayya on genus/species.'],
  relatedTopics: ['s-100', 's-103', 's-105', 'culpable-homicide-murder', 's-38'],
}

export default content
