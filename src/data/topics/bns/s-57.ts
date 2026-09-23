import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 57 (and related): abetment of an offence punishable with death or life imprisonment — when the offence is not committed, the abettor faces a substantial term (as provided). When the offence is committed, ordinary abetment punishment rules (s. 49 etc.) apply. Successor structure to IPC s. 115.',
  study: `Abetment of capital / life offences under the BNS:\n\nWhen a person abets an offence punishable with death or imprisonment for life:\n• If the offence is not committed in consequence of the abetment, and no express provision applies, the abettor is punished with a substantial term (as stated in the section) and/or fine.\n• If the offence is committed, the general rule under s. 49 (punishment as for the offence) or the specific provision applies.\n\nThis is a more serious residual abetment scale than the ordinary one-fourth rule under s. 51.\n\nCite BNS s. 57 for post-1 July 2024 acts. Always identify whether the abetted act was completed.`,
  sections: [
    { id: 's-57-m1', title: 'Provenance', order: 1, content: ['Successor structure to IPC s. 115. Enhanced residual punishment for abetment of death/life offences when not committed.'] },
    { id: 's-57-m2', title: 'When Offence Not Committed', order: 2, content: ['Abetment of offence punishable with death or life; act not committed; substantial term as provided.'] },
    { id: 's-57-m3', title: 'When Offence Committed', order: 3, content: ['Ordinary abetment rules (s. 49 / specific sections) — full punishment of the offence.'] },
    { id: 's-57-m4', title: 'Ingredients', order: 4, content: ['(1) Abetment. (2) Object offence punishable with death or life. (3) Act not committed (for this residual scale).'] },
    { id: 's-57-m5', title: 'Procedure', order: 5, content: ['Charge under abetment framework with the appropriate scale (s. 57 vs s. 49).'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-57', section: 's. 57', title: 'Abetment of offence punishable with death or life imprisonment' }],
  examples: [
    { id: 's-57-ex1', title: 'Abetment of murder not completed', illustrationType: 'practical', description: 'A instigates B to commit murder. B refuses. A is punishable under the enhanced residual scale for abetment of a death-punishable offence when not committed.' },
    { id: 's-57-ex2', title: 'Murder completed', illustrationType: 'practical', description: 'If B commits the murder in consequence, A is punished under s. 49 (or specific provision) as for the offence of murder — not under the “not committed” scale.' },
  ],
  hypotheticals: [{ id: 's-57-hypo', title: 'Scale selection', facts: 'Abetment of an offence punishable with life; the offence is not committed.', question: 'Which punishment scale?', applicableLaw: 'BNS s. 57; s. 49; s. 51.', analysis: 'Object is death/life offence and act not committed → s. 57 enhanced residual scale (not the ordinary one-fourth under s. 51).', conclusion: 's. 57 scale applies.' }],
  distinctions: [{ id: 's-57-dist', title: 's. 57 vs s. 51 vs s. 49', left: 's. 57', right: 's. 51 / s. 49', rows: [{ point: 'When', left: 'Abetment of death/life offence; act not committed', right: 'Ordinary residual when not committed / full punishment when committed' }] }],
  misconceptions: [{ id: 's-57-trap', trap: 'Abetment of murder when not committed is only punishable with one-fourth of the term.', correction: 'For offences punishable with death or life, the residual scale when the act is not committed is the enhanced scale under s. 57, not the ordinary one-fourth under s. 51.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-57-brief', draftingCategory: 'brief', question: 'Explain the punishment for abetment of an offence punishable with death or life when the offence is not committed.', answer: 'Under the residual rule for such abetment when the act is not committed, the abettor faces a substantial term as provided in s. 57 (higher than the ordinary one-fourth scale under s. 51). If the offence is committed, s. 49 (or a specific provision) applies.', explanation: 'Short note.' },
    { id: 's-57-sub', draftingCategory: 'submissions', question: 'Submissions on s. 57.', answer: 'I. Abetment of death/life offence. II. Act not committed. III. s. 57 scale. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 57', 'BNS s. 49', 'BNS s. 51', 'BNS s. 45', 'IPC s. 115 (historical)'],
  examTips: ['Distinguish the three scales: s. 49 (committed), s. 57 (death/life not committed), s. 51 (ordinary not committed).'],
  revisionPoints: ['Death/life offence abetted but not committed → s. 57 enhanced residual.', 'Committed → s. 49 full punishment.', 'Ordinary offence not committed → s. 51 one-fourth.'],
  relatedTopics: ['s-45', 's-49', 's-51', 's-101'],
}

export default content
