import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 24: in offences requiring a particular intent or knowledge, a person who does the act in a state of intoxication shall be liable as if he had the same intent or knowledge as he would have had if he had not been intoxicated, unless the intoxicant was administered without his knowledge or against his will. Successor to IPC s. 86.',
  study: `Section 24 deals with voluntary intoxication in intent/knowledge offences.\n\nRule: In cases where an act done would be an offence if done with a particular intent or knowledge, a person who does the act in a state of intoxication shall be liable to be dealt with as if he had the same intent or knowledge as he would have had if he had not been intoxicated, unless the thing which intoxicated him was administered without his knowledge or against his will.\n\nEffect: voluntary intoxication does not negate the intent or knowledge that the offence requires; the law attributes the intent/knowledge the person would have had if sober. Only involuntary intoxication (cross-refer s. 23) changes the position.\n\nCite BNS s. 24 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-24-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 86. Prevents voluntary intoxication from being used to negate mens rea.'] },
    { id: 's-24-m2', title: 'Text', order: 2, content: ['Offence requiring particular intent/knowledge; act done while intoxicated; liable as if sober, unless intoxicant administered without knowledge or against will.'] },
    { id: 's-24-m3', title: 'Ingredients', order: 3, content: ['(1) Offence requires particular intent or knowledge. (2) Act done while intoxicated. (3) Intoxication not involuntary → attributed intent/knowledge of a sober person.'] },
    { id: 's-24-m4', title: 'Evidence', order: 4, content: ['Prosecution need not prove actual intent if the sober-person attribution applies; defence may prove involuntary administration to escape the attribution.'] },
    { id: 's-24-m5', title: 'Procedure', order: 5, content: ['Applies at the stage of proving mens rea for intent/knowledge offences.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-24', section: 's. 24', title: 'Offence requiring particular intent or knowledge committed by one who is intoxicated' }],
  examples: [
    { id: 's-24-ex1', title: 'Voluntary intoxication no defence', illustrationType: 'practical', description: 'A gets drunk of his own will and then commits an offence requiring intention. Under s. 24 he is treated as having the intent he would have had if sober.' },
    { id: 's-24-ex2', title: 'Involuntary exception', illustrationType: 'fail-scenario', description: 'If the intoxicant was administered against his will, the attribution rule does not apply; s. 23 may then be considered.' },
  ],
  hypotheticals: [{ id: 's-24-hypo', title: 'Drunk intent offence', facts: 'Accused voluntarily intoxicated; commits an intent-based offence.', question: 'Does intoxication negate mens rea?', applicableLaw: 'BNS s. 24.', analysis: 'No. He is liable as if he had the intent/knowledge he would have had if sober.', conclusion: 'Mens rea attributed; conviction may follow.' }],
  distinctions: [],
  misconceptions: [{ id: 's-24-trap', trap: 'Voluntary drunkenness is always a defence to intent offences.', correction: 'Under s. 24 it is not; the law attributes the sober person’s intent/knowledge unless the intoxication was involuntary.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-24-brief', draftingCategory: 'brief', question: 'Explain BNS s. 24.', answer: 'In offences requiring particular intent or knowledge, a person who acts while intoxicated is liable as if he had the intent/knowledge he would have had if sober, unless the intoxicant was administered without his knowledge or against his will.', explanation: 'Short note.' },
    { id: 's-24-sub', draftingCategory: 'submissions', question: 'Submissions on s. 24.', answer: 'I. Intent/knowledge offence. II. Voluntary intoxication. III. Attribution rule. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 24', 'BNS s. 23', 'IPC s. 86 (historical)'],
  examTips: ['State that voluntary intoxication does not negate mens rea for intent/knowledge offences.'],
  revisionPoints: ['Voluntary intoxication → attributed sober intent/knowledge.', 'Involuntary → see s. 23.'],
  relatedTopics: ['s-23', 's-22', 'doctrine-mens-rea'],
}

export default content
