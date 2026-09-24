import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 104: punishment for murder by a person under sentence of imprisonment for life — death, or as the section provides. Successor to IPC s. 303 (which was struck down in Mithu; the BNS reformulates the position). Apply only as per the current statutory text and constitutional constraints.',
  study: `Section 104 addresses murder committed by a person already under sentence of imprisonment for life.\n\nHistorical note: IPC s. 303 mandated death for murder by a life convict and was struck down as unconstitutional in Mithu v. State of Punjab (1983). The BNS provision must be read in light of that constitutional holding and the current statutory text — mandatory death cannot be revived in a form that repeats the vice identified in Mithu.\n\nIn practice: sentence for murder remains governed by s. 103 (death or life) and the rarest-of-rare doctrine; the fact that the offender was already a life convict is an aggravating circumstance in sentencing, not an automatic mandatory death.\n\nCite the current BNS text and Bachan Singh / Mithu principles for post-1 July 2024 cases.`,
  sections: [
    { id: 's-104-m1', title: 'Provenance & Constitutional Constraint', order: 1, content: ['IPC s. 303 (mandatory death for murder by life convict) was struck down in Mithu. BNS s. 104 must be applied consistently with that holding and Bachan Singh.'] },
    { id: 's-104-m2', title: 'Current Approach', order: 2, content: ['Murder by a life convict is still murder under s. 101; punishment under s. 103 (death or life) with the life-convict status as an aggravating factor in the rarest-of-rare analysis.'] },
    { id: 's-104-m3', title: 'Ingredients', order: 3, content: ['(1) Murder under s. 101. (2) Offender under sentence of imprisonment for life at the time. (3) Sentence per s. 103 and constitutional principles.'] },
    { id: 's-104-m4', title: 'Sentencing', order: 4, content: ['No mandatory death. Rarest-of-rare analysis applies; prior life sentence is relevant but not conclusive for death.'] },
    { id: 's-104-m5', title: 'Procedure', order: 5, content: ['Same as for murder under s. 103; confirmation of death if imposed.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-104', section: 's. 104', title: 'Punishment for murder by life-convict' }],
  examples: [
    { id: 's-104-ex1', title: 'Life convict commits murder', illustrationType: 'practical', description: 'A, already serving life imprisonment, commits murder. He is sentenced under the murder scheme (s. 103) with his status as a life convict considered in the rarest-of-rare analysis — not by a mandatory death rule.' },
    { id: 's-104-ex2', title: 'Mandatory death invalid', illustrationType: 'fail-scenario', description: 'A sentence of mandatory death solely because the offender was a life convict would repeat the vice struck down in Mithu and would not stand.' },
  ],
  hypotheticals: [{ id: 's-104-hypo', title: 'Sentencing life convict for murder', facts: 'Life convict convicted of a subsequent murder.', question: 'Is death mandatory?', applicableLaw: 'BNS s. 103/104; Mithu; Bachan Singh.', analysis: 'No. Death only if rarest-of-rare criteria are met; prior life sentence is an aggravating factor, not an automatic mandate.', conclusion: 'Discretionary death or life under constitutional principles.' }],
  distinctions: [],
  misconceptions: [{ id: 's-104-trap', trap: 'Murder by a life convict automatically attracts the death penalty.', correction: 'Mandatory death for murder by a life convict was struck down in Mithu. Sentencing follows s. 103 and the rarest-of-rare doctrine; prior life sentence is relevant but not conclusive.' }],
  cases: [
    { name: 'Mithu v. State of Punjab', year: 1983, citation: '(1983) 2 SCC 277', court: 'Supreme Court of India', holding: 'IPC s. 303 (mandatory death for murder by a life convict) is unconstitutional.', relevance: 'Governs any application of BNS s. 104; mandatory death on that ground alone is invalid.' },
  ],
  questionsAndAnswers: [
    { id: 's-104-brief', draftingCategory: 'brief', question: 'How is murder by a life convict punished under the BNS after Mithu?', answer: 'Mandatory death solely on the ground that the offender was a life convict is unconstitutional (Mithu). The offender is sentenced under the ordinary murder scheme (s. 103) with the prior life sentence as an aggravating factor in the rarest-of-rare analysis.', explanation: 'Short note.' },
    { id: 's-104-sub', draftingCategory: 'submissions', question: 'Submissions on sentence for murder by a life convict.', answer: 'I. Murder under s. 101. II. Prior life sentence as aggravating factor only. III. Mithu — no mandatory death. IV. Rarest-of-rare analysis. V. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 104', 'BNS s. 103', 'Mithu v. State of Punjab', 'Bachan Singh'],
  examTips: ['Always cite Mithu — mandatory death for murder by life convict is invalid.', 'Sentence under s. 103 + rarest-of-rare.'],
  revisionPoints: ['Mithu struck down mandatory death for murder by life convict.', 'Prior life sentence = aggravating factor, not automatic death.', 'Apply s. 103 + Bachan Singh.'],
  relatedTopics: ['s-103', 's-101', 's-105'],
}

export default content
