import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 78 (and related): word, gesture or act intended to insult the modesty of a woman — intending to insult modesty, or knowing it to be likely that modesty will be insulted, by word, gesture, or act. Successor structure to IPC s. 509. Distinct from sexual harassment (s. 75) and from assault with intent to outrage modesty.',
  study: `Insulting the modesty of a woman under the BNS:\n\nWhoever, intending to insult the modesty of any woman, utters any word, makes any sound or gesture, or exhibits any object, intending that such word or sound shall be heard, or that such gesture or object shall be seen, by such woman, or intrudes upon the privacy of such woman, is punished as provided.\n\nKey points\n• Intention to insult modesty (or knowledge of likelihood, depending on the exact text).\n• Word, sound, gesture, object, or intrusion upon privacy.\n• Distinct from sexual harassment (four specific limbs under s. 75) and from criminal force/assault with intent to outrage modesty.\n\nCite the applicable BNS section for post-1 July 2024 acts.`,
  sections: [
    { id: 's-78-m1', title: 'Provenance', order: 1, content: ['Successor structure to IPC s. 509. Word/gesture/act intended to insult modesty.'] },
    { id: 's-78-m2', title: 'Elements', order: 2, content: ['Word, sound, gesture, object, or intrusion upon privacy; intention to insult modesty of a woman.'] },
    { id: 's-78-m3', title: 'Ingredients', order: 3, content: ['(1) Conduct of the specified kind. (2) Directed at a woman. (3) Intention to insult modesty (or statutory knowledge standard).'] },
    { id: 's-78-m4', title: 'Evidence', order: 4, content: ['Nature of the word/gesture/act; context; intention inferred from conduct.'] },
    { id: 's-78-m5', title: 'Procedure', order: 5, content: ['Forum per BNSS Schedule; often compoundable as per schedule.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-78', section: 's. 78', title: 'Word, gesture or act intended to insult the modesty of a woman' }],
  examples: [
    { id: 's-78-ex1', title: 'Insulting gesture', illustrationType: 'practical', description: 'A makes a deliberate gesture intending to insult B’s modesty in a public place. The offence is made out.' },
    { id: 's-78-ex2', title: 'Sexual harassment instead', illustrationType: 'fail-scenario', description: 'If the conduct fits a limb of sexual harassment (e.g. sexually coloured remarks as a pattern), s. 75 may be the more specific charge.' },
  ],
  hypotheticals: [{ id: 's-78-hypo', title: 'Modesty insult', facts: 'Accused utters words intending to insult a woman’s modesty.', question: 'Is the offence made out?', applicableLaw: 'BNS modesty-insult provisions.', analysis: 'Word + intention to insult modesty — yes.', conclusion: 'Offence established.' }],
  distinctions: [{ id: 's-78-dist', title: 'Insulting modesty vs Sexual harassment', left: 'Insulting modesty', right: 'Sexual harassment (s. 75)', rows: [{ point: 'Focus', left: 'Word/gesture/act intending to insult modesty', right: 'Four specific limbs (advances, demand, pornography, sexually coloured remarks)' }] }],
  misconceptions: [{ id: 's-78-trap', trap: 'Any rude remark to a woman is this offence.', correction: 'The intention (or statutory knowledge) to insult modesty must be proved. Ordinary rudeness without that mens rea is not enough.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-78-brief', draftingCategory: 'brief', question: 'Explain the offence of insulting the modesty of a woman under the BNS.', answer: 'Whoever, intending to insult the modesty of a woman, utters any word, makes any sound or gesture, or exhibits any object intending that it be heard or seen by her, or intrudes upon her privacy, commits the offence. Distinct from sexual harassment (s. 75).', explanation: 'Short note.' },
    { id: 's-78-sub', draftingCategory: 'submissions', question: 'Submissions on insulting modesty.', answer: 'I. Conduct (word/gesture/act/intrusion). II. Intention to insult modesty. III. Distinction from s. 75. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS modesty-insult provisions', 'BNS s. 75', 'IPC s. 509 (historical)'],
  examTips: ['Distinguish from sexual harassment and from outraging modesty by assault/criminal force.'],
  revisionPoints: ['Word/gesture/act + intention to insult modesty.', 'Includes intrusion upon privacy.', 'Not the same as s. 75.'],
  relatedTopics: ['s-75', 's-64', 's-130'],
}

export default content
