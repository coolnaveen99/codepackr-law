import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 103: punishment for murder — death or imprisonment for life, and fine. Sub-section (2): when a group of five or more persons acting in concert commits murder on grounds of race, caste, community, sex, place of birth, language, personal belief or any other similar ground, each member is punished with death or life, and fine (lynching / group-murder clause). IPC 302 → BNS 103. Definition is s. 101.',
  study: `Section 103 is the punishment section for murder.\n\n(1) Whoever commits murder shall be punished with death or imprisonment for life, and shall also be liable to fine.\n\n(2) When a group of five or more persons acting in concert commits murder on the ground of race, caste or community, sex, place of birth, language, personal belief or any other similar ground, each member of such group shall be punished with death or with imprisonment for life, and shall also be liable to fine.\n\nDeath remains subject to the Bachan Singh rarest-of-rare doctrine. s. 103(2) is a distinct group/lynching provision; it does not require the same prior-concert test as common intention (s. 3(5)), though the two may overlap on facts.\n\nNumber trap: do not cite s. 101 as the punishment section. Cite BNS s. 103 for post-1 July 2024 murders.`,
  sections: [
    { id: 's-103-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 302. Adds the group-murder / lynching clause in sub-section (2).'] },
    { id: 's-103-m2', title: 'Text', order: 2, content: ['(1) Death or life + fine. (2) Group of 5+ acting in concert on specified identity/belief grounds → each member death or life + fine.'] },
    { id: 's-103-m3', title: 'Ingredients for punishment', order: 3, content: ['Conviction for murder under s. 101 (no exception). For (2): group of five or more; acting in concert; murder on a listed ground.'] },
    { id: 's-103-m4', title: 'Sentencing', order: 4, content: ['Death only in rarest of rare cases (Bachan Singh). Life = remainder of natural life subject to commutation/remission.'] },
    { id: 's-103-m5', title: 'Procedure', order: 5, content: ['Court of Session; BNSS procedure; confirmation of death sentence as per BNSS/High Court rules.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-103', section: 's. 103', title: 'Punishment for murder' }],
  examples: [
    { id: 's-103-ex1', title: 'Ordinary murder', illustrationType: 'practical', description: 'A is convicted of murder under s. 101. Sentence under s. 103(1): death or life + fine, subject to rarest-of-rare analysis.' },
    { id: 's-103-ex2', title: 'Group murder on identity ground', illustrationType: 'practical', description: 'Five or more persons acting in concert kill a person on the ground of caste. Each member is punishable under s. 103(2) with death or life + fine.' },
  ],
  hypotheticals: [{ id: 's-103-hypo', title: 'Sentencing for murder', facts: 'Conviction under s. 101; no exception; facts are not rarest of rare.', question: 'What sentence under s. 103?', applicableLaw: 'BNS s. 103; Bachan Singh.', analysis: 'Death is not appropriate; imprisonment for life + fine under s. 103(1).', conclusion: 'Life imprisonment and fine.' }],
  distinctions: [{ id: 's-103-dist', title: 's. 103(1) vs s. 103(2)', left: 's. 103(1)', right: 's. 103(2)', rows: [{ point: 'Who', left: 'Whoever commits murder', right: 'Each member of a group of 5+ acting in concert' }, { point: 'Extra element', left: 'None beyond murder', right: 'Murder on listed identity/belief ground' }] }],
  misconceptions: [
    { id: 's-103-trap-1', trap: 'Punishment for murder is under s. 101.', correction: 'Definition is s. 101; punishment is s. 103.' },
    { id: 's-103-trap-2', trap: 's. 103(2) requires the same prior concert as s. 3(5).', correction: 's. 103(2) has its own “acting in concert” requirement for a group of five or more on listed grounds; it is distinct from common intention under s. 3(5).' },
  ],
  cases: [
    { name: 'Bachan Singh v. State of Punjab', year: 1980, citation: '(1980) 2 SCC 684', court: 'Supreme Court of India', holding: 'Death penalty may be imposed only in the rarest of rare cases when the alternative of life imprisonment is unquestionably foreclosed.', relevance: 'Governs choice between death and life under s. 103.' },
  ],
  questionsAndAnswers: [
    { id: 's-103-brief', draftingCategory: 'brief', question: 'State the punishment for murder under BNS s. 103.', answer: 'Death or imprisonment for life, and fine (s. 103(1)). When a group of five or more acting in concert commits murder on listed identity/belief grounds, each member is punishable with death or life and fine (s. 103(2)). Death only in rarest of rare cases.', explanation: 'Short note.' },
    { id: 's-103-sub', draftingCategory: 'submissions', question: 'Submissions on sentence under s. 103.', answer: 'I. Conviction under s. 101. II. s. 103(1) or (2). III. Rarest-of-rare analysis. IV. Prayer for life / death as appropriate.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 103', 'BNS s. 101', 'BNS s. 3(5)', 'Bachan Singh', 'IPC s. 302 (historical)'],
  examTips: ['Never write “punishable under s. 101”.', 'Mention s. 103(2) when the facts are a group killing on identity grounds.'],
  revisionPoints: ['103 = punishment for murder (death or life + fine).', '103(2) = group of 5+ on identity/belief grounds.', 'Death only in rarest of rare cases.'],
  relatedTopics: ['s-101', 's-100', 's-105', 's-3', 'culpable-homicide-murder'],
}

export default content
