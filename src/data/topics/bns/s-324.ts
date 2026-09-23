import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 324 (and related): mischief — intentional destruction or diminution of the value/utility of property, with intent to cause or knowledge of likelihood of wrongful loss or damage. Successor to IPC s. 425/426. Aggravated forms (mischief by fire, to public property, etc.) carry higher punishment.',
  study: `Mischief under the BNS:\n\nWhoever, with intent to cause, or knowing that he is likely to cause, wrongful loss or damage to the public or to any person, causes the destruction of any property, or any such change in any property or in the situation thereof as destroys or diminishes its value or utility, or affects it injuriously, commits mischief.\n\nKey points\n• Intentional destruction or injurious change to property.\n• Intent to cause or knowledge of likelihood of wrongful loss or damage.\n• Property may be movable or immovable.\n\nAggravated forms (mischief by fire/explosive, mischief affecting public property, animals, etc.) have higher sections and punishments.\n\nCite the applicable BNS mischief sections for post-1 July 2024 acts.`,
  sections: [
    { id: 's-324-m1', title: 'Provenance', order: 1, content: ['Successor to IPC ss. 425/426. Intentional destruction/diminution of property with intent/knowledge of wrongful loss.'] },
    { id: 's-324-m2', title: 'Definitional Elements', order: 2, content: ['Destruction or injurious change to property; intent to cause or knowledge of likelihood of wrongful loss or damage.'] },
    { id: 's-324-m3', title: 'Ingredients', order: 3, content: ['(1) Destruction or change diminishing value/utility of property. (2) Intent to cause or knowledge of likelihood of wrongful loss or damage.'] },
    { id: 's-324-m4', title: 'Evidence', order: 4, content: ['Nature of the act; damage caused; intention/knowledge inferred from conduct.'] },
    { id: 's-324-m5', title: 'Procedure', order: 5, content: ['Forum per BNSS Schedule; aggravated forms more serious.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-324', section: 's. 324', title: 'Mischief' }],
  examples: [
    { id: 's-324-ex1', title: 'Intentional damage', illustrationType: 'practical', description: 'A deliberately breaks B’s window intending to cause loss. Mischief is made out.' },
    { id: 's-324-ex2', title: 'Accidental damage', illustrationType: 'fail-scenario', description: 'A accidentally knocks over a vase. Without intent or knowledge of likelihood of wrongful loss, mischief is not made out (accident exception may also apply).' },
  ],
  hypotheticals: [{ id: 's-324-hypo', title: 'Mischief', facts: 'Accused sets fire to a shed knowing it will destroy the owner’s goods.', question: 'Is mischief made out?', applicableLaw: 'BNS mischief provisions.', analysis: 'Destruction of property with knowledge of likelihood of wrongful loss — yes (and possibly the aggravated fire form).', conclusion: 'Mischief established.' }],
  distinctions: [],
  misconceptions: [{ id: 's-324-trap', trap: 'Any damage to property is mischief.', correction: 'There must be intent to cause or knowledge of likelihood of wrongful loss or damage. Pure accident without that mens rea is not mischief.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-324-brief', draftingCategory: 'brief', question: 'Define mischief under the BNS.', answer: 'Intentionally causing destruction or injurious change to property, with intent to cause or knowledge of likelihood of wrongful loss or damage to the public or any person. Aggravated forms (fire, public property, etc.) carry higher punishment.', explanation: 'Short note.' },
    { id: 's-324-sub', draftingCategory: 'submissions', question: 'Submissions on mischief.', answer: 'I. Destruction/injurious change. II. Intent or knowledge of wrongful loss. III. Aggravating facts if any. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS mischief provisions', 'BNS s. 18', 'IPC ss. 425–426 (historical)'],
  examTips: ['Stress the mens rea (intent or knowledge of wrongful loss).', 'Mention aggravated forms when fire or public property is involved.'],
  revisionPoints: ['Destruction/injurious change + intent/knowledge of wrongful loss = mischief.', 'Accident without mens rea is not mischief.', 'Aggravated forms for fire, public property, etc.'],
  relatedTopics: ['s-18', 's-303', 's-41'],
}

export default content
