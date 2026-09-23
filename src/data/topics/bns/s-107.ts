import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 107: abetment of suicide — if any person commits suicide, whoever abets the commission of such suicide shall be punished with imprisonment up to the statutory term and fine. Successor to IPC s. 306. Requires proof of abetment (instigation, conspiracy, or intentional aid) and the suicide. Mere harassment without the elements of abetment is not enough.',
  study: `Section 107 is the offence of abetment of suicide.\n\nIngredients:\n1. The person has committed suicide.\n2. The accused abetted the commission of that suicide (instigation, conspiracy, or intentional aid under s. 45).\n\nThe prosecution must prove a positive act of abetment — a proximate instigation or aid that left the deceased with no option. Ordinary marital discord or harassment, without more, has been held insufficient in the case law under the old s. 306; the same approach applies under s. 107.\n\nWhen the deceased is a married woman and the facts also disclose dowry-linked cruelty, s. 80 and s. 85 may be charged in the alternative or together.\n\nCite BNS s. 107 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-107-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 306. Abetment of suicide.'] },
    { id: 's-107-m2', title: 'Ingredients', order: 2, content: ['(1) Suicide committed. (2) Abetment by the accused (s. 45 modes).'] },
    { id: 's-107-m3', title: 'Abetment standard', order: 3, content: ['Positive act of instigation, conspiracy, or intentional aid; proximate and leaving no option. Mere harassment without more is insufficient.'] },
    { id: 's-107-m4', title: 'Evidence', order: 4, content: ['Suicide; words/conduct of the accused; proximity and causation; dying declarations, notes, witness accounts.'] },
    { id: 's-107-m5', title: 'Procedure', order: 5, content: ['Often charged with s. 85/s. 80 in marital death cases; Sessions trial as applicable.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-107', section: 's. 107', title: 'Abetment of suicide' }],
  examples: [
    { id: 's-107-ex1', title: 'Clear instigation', illustrationType: 'practical', description: 'A persistently and proximately instigates B to kill himself; B does so. Abetment of suicide under s. 107 is made out.' },
    { id: 's-107-ex2', title: 'Ordinary discord', illustrationType: 'fail-scenario', description: 'Marital quarrels without a positive act of abetment. s. 107 is not made out (though s. 85 may still apply on appropriate facts).' },
  ],
  hypotheticals: [{ id: 's-107-hypo', title: 'Abetment of suicide', facts: 'Deceased left a note naming continuous instigation by the accused immediately before the suicide.', question: 'Is s. 107 attracted?', applicableLaw: 'BNS s. 107; s. 45.', analysis: 'If the instigation is proved as a proximate positive act of abetment — yes.', conclusion: 's. 107 may be made out.' }],
  distinctions: [{ id: 's-107-dist', title: 's. 107 vs s. 80 vs s. 85', left: 's. 107 (abetment of suicide)', right: 's. 80 / s. 85', rows: [{ point: 'Focus', left: 'Abetment of the act of suicide', right: 'Dowry death deeming / cruelty as a standalone offence' }] }],
  misconceptions: [{ id: 's-107-trap', trap: 'Any suicide after harassment is abetment of suicide.', correction: 'The prosecution must prove abetment in the s. 45 sense — a positive, proximate act of instigation, conspiracy, or intentional aid. Harassment alone is not enough.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-107-brief', draftingCategory: 'brief', question: 'Explain abetment of suicide under BNS s. 107.', answer: 'If a person commits suicide, whoever abets that suicide (by instigation, conspiracy, or intentional aid) is punished under s. 107. A positive, proximate act of abetment is required; mere harassment without more is insufficient.', explanation: 'Short note.' },
    { id: 's-107-sub', draftingCategory: 'submissions', question: 'Submissions on s. 107.', answer: 'I. Suicide. II. Abetment (s. 45 mode). III. Proximity and positive act. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 107', 'BNS s. 45', 'BNS s. 80', 'BNS s. 85', 'IPC s. 306 (historical)'],
  examTips: ['Stress the need for a positive act of abetment, not mere harassment.', 'Link to s. 80/85 in marital death fact patterns.'],
  revisionPoints: ['Suicide + abetment (s. 45) = s. 107.', 'Positive proximate act required.', 'Harassment alone ≠ abetment of suicide.'],
  relatedTopics: ['s-45', 's-80', 's-85', 's-100'],
}

export default content
