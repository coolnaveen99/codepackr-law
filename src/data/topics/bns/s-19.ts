import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 19: nothing is an offence merely by reason of its being done with the knowledge that it is likely to cause harm, if it be done without any criminal intention to cause harm, and in good faith for the purpose of preventing or avoiding other harm to person or property. Successor to IPC s. 81 (necessity / lesser harm).',
  study: `Section 19 is the necessity / lesser-harm exception.\n\nRule: Nothing is an offence merely by reason of its being done with the knowledge that it is likely to cause harm, if it be done without any criminal intention to cause harm, and in good faith for the purpose of preventing or avoiding other harm to person or property.\n\nExplanation: it is a question of fact whether the harm to be prevented was of such a nature and so imminent as to justify the risk of doing the act with knowledge of likely harm.\n\nKey points: no criminal intention to cause the harm that results; good faith; purpose of preventing other harm; the balance of harms is a question of fact. Cite BNS s. 19 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-19-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 81. Justifies risking lesser harm to prevent greater harm.'] },
    { id: 's-19-m2', title: 'Text', order: 2, content: ['Knowledge of likely harm; no criminal intention to cause that harm; good faith; purpose of preventing other harm to person or property.'] },
    { id: 's-19-m3', title: 'Ingredients', order: 3, content: ['(1) Act done with knowledge of likely harm. (2) No criminal intention to cause that harm. (3) Good faith. (4) Purpose of preventing/avoiding other harm. (5) Harm to be prevented of such nature and imminence as to justify the risk (fact).'] },
    { id: 's-19-m4', title: 'Evidence', order: 4, content: ['Burden on accused on preponderance. Imminence and comparative harm are factual.'] },
    { id: 's-19-m5', title: 'Procedure', order: 5, content: ['Raised as a defence. Does not justify intentional infliction of the very harm the section is invoked to excuse.'],
    },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-19', section: 's. 19', title: 'Act likely to cause harm but done without criminal intent to prevent other harm' }],
  examples: [
    { id: 's-19-ex1', title: 'Lesser harm to prevent greater', illustrationType: 'practical', description: 'A pulls down a house to prevent a fire from spreading to a whole row of houses. The act may be protected by s. 19 if done in good faith without criminal intention to cause the harm of demolition for its own sake.' },
    { id: 's-19-ex2', title: 'No imminence', illustrationType: 'fail-scenario', description: 'A causes harm to prevent a purely speculative future risk that is not imminent. The explanation’s fact-test is likely to fail.' },
  ],
  hypotheticals: [{ id: 's-19-hypo', title: 'Necessity', facts: 'A causes property damage to stop an immediate threat to life.', question: 'Is s. 19 available?', applicableLaw: 'BNS s. 19.', analysis: 'If no criminal intention to cause the damage for its own sake, good faith, and the threat was imminent and of a nature that justified the risk, yes.', conclusion: 'Protected if the fact-test is met.' }],
  distinctions: [],
  misconceptions: [{ id: 's-19-trap', trap: 'Section 19 allows intentional harm whenever a greater good is claimed.', correction: 'There must be no criminal intention to cause the harm in question; the act must be in good faith to prevent other harm; and the balance of harms is a question of fact.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-19-brief', draftingCategory: 'brief', question: 'Explain the necessity exception in BNS s. 19.', answer: 'Nothing is an offence merely because it is done with knowledge of likely harm, if done without criminal intention to cause that harm, and in good faith to prevent other harm to person or property. Imminence and comparative harm are questions of fact.', explanation: 'Short note.' },
    { id: 's-19-sub', draftingCategory: 'submissions', question: 'Submissions on s. 19.', answer: 'I. No criminal intention. II. Good faith. III. Purpose of preventing other harm. IV. Imminence/balance. V. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 19', 'IPC s. 81 (historical)'],
  examTips: ['Stress “without criminal intention to cause harm” and the factual balance of harms.'],
  revisionPoints: ['Knowledge of likely harm + no criminal intent + good faith + prevent other harm.', 'Balance of harms is a question of fact.'],
  relatedTopics: ['s-18', 's-34', 'general-exceptions'],
}

export default content
