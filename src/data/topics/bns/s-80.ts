import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 80: dowry death — where the death of a woman is caused by burns or bodily injury or occurs otherwise than under normal circumstances within seven years of marriage, and it is shown that she was subjected to cruelty or harassment by her husband or any relative of her husband for or in connection with demand for dowry, such husband or relative is deemed to have caused the death. Successor to IPC s. 304B. Presumption and reverse burden are central.',
  study: `Section 80 is the dowry-death provision.\n\nIngredients (classic):\n1. Death of a woman by burns or bodily injury or otherwise than under normal circumstances.\n2. Within seven years of marriage.\n3. She was subjected to cruelty or harassment by her husband or any relative of her husband.\n4. Such cruelty or harassment was for or in connection with a demand for dowry.\n\nWhen these are shown, the husband or relative is deemed to have caused the death. The prosecution must prove the basic facts; the presumption then operates. “Dowry” and “cruelty” draw meaning from the Dowry Prohibition Act and related BNS provisions (e.g. cruelty under s. 85).\n\nPunishment is as stated in the section (minimum term, which may extend to life).\n\nCite BNS s. 80 for post-1 July 2024 dowry deaths. Date-of-offence rule applies.`,
  sections: [
    { id: 's-80-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 304B. Deeming provision for dowry death within seven years of marriage.'] },
    { id: 's-80-m2', title: 'Ingredients', order: 2, content: ['Death by burns/injury or otherwise than normal; within 7 years of marriage; cruelty/harassment by husband or relative; for or in connection with dowry demand.'] },
    { id: 's-80-m3', title: 'Deeming & Burden', order: 3, content: ['When the basic facts are shown, the husband/relative is deemed to have caused the death. Prosecution proves the foundational facts; defence may rebut.'] },
    { id: 's-80-m4', title: 'Evidence', order: 4, content: ['Medical cause of death; timing relative to marriage; evidence of dowry demand and cruelty/harassment (letters, witnesses, prior complaints).'] },
    { id: 's-80-m5', title: 'Procedure', order: 5, content: ['Sessions trial; often charged with s. 85 (cruelty) and homicide sections in the alternative.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-80', section: 's. 80', title: 'Dowry death' }],
  examples: [
    { id: 's-80-ex1', title: 'Classic dowry death', illustrationType: 'practical', description: 'A woman dies of burns within three years of marriage; evidence shows repeated dowry demands and harassment by the husband. s. 80 is attracted.' },
    { id: 's-80-ex2', title: 'Death after seven years', illustrationType: 'fail-scenario', description: 'Death occurs eight years after marriage. The seven-year limb fails; s. 80 does not apply (other homicide/cruelty sections may).' },
  ],
  hypotheticals: [{ id: 's-80-hypo', title: 'Dowry death ingredients', facts: 'Death within 5 years of marriage by burns; prior dowry harassment by in-laws proved.', question: 'Is s. 80 made out?', applicableLaw: 'BNS s. 80.', analysis: 'Death otherwise than normal + within 7 years + cruelty/harassment for dowry by relative — yes; deeming applies.', conclusion: 's. 80 attracted.' }],
  distinctions: [{ id: 's-80-dist', title: 's. 80 vs s. 85 vs Murder', left: 's. 80 (dowry death)', right: 's. 85 (cruelty) / s. 101 (murder)', rows: [{ point: 'Focus', left: 'Death within 7 years + dowry-linked cruelty → deeming', right: 'Cruelty as a standalone offence / ordinary murder ingredients' }] }],
  misconceptions: [{ id: 's-80-trap', trap: 'Any death of a married woman within seven years is dowry death.', correction: 'The prosecution must still show cruelty or harassment for or in connection with a demand for dowry. The seven-year period alone is not enough.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-80-brief', draftingCategory: 'brief', question: 'State the ingredients of dowry death under BNS s. 80.', answer: 'Death of a woman by burns or bodily injury or otherwise than under normal circumstances, within seven years of marriage, and cruelty or harassment by the husband or his relative for or in connection with a demand for dowry. When shown, the husband/relative is deemed to have caused the death.', explanation: 'Short note.' },
    { id: 's-80-sub', draftingCategory: 'submissions', question: 'Submissions on s. 80.', answer: 'I. Death and timing. II. Cruelty/harassment for dowry. III. Deeming. IV. Rebuttal if any. V. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 80', 'BNS s. 85', 'Dowry Prohibition Act', 'IPC s. 304B (historical)'],
  examTips: ['List all four ingredients.', 'State the deeming consequence and the seven-year limit.'],
  revisionPoints: ['Death within 7 years + dowry-linked cruelty/harassment → deemed to have caused death.', 'Seven years is mandatory.', 'Often charged with s. 85.'],
  relatedTopics: ['s-85', 's-100', 's-101', 's-64'],
}

export default content
