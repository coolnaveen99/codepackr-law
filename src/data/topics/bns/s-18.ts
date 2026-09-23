import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 18: nothing is an offence which is done by accident or misfortune, without any criminal intention or knowledge, in the doing of a lawful act in a lawful manner by lawful means and with proper care and caution. Successor to IPC s. 80.',
  study: `Section 18 is the accident exception.\n\nRule: Nothing is an offence which is done by accident or misfortune, and without any criminal intention or knowledge, in the doing of a lawful act in a lawful manner by lawful means and with proper care and caution.\n\nAll elements must coexist: accident/misfortune; no criminal intention or knowledge; lawful act; lawful manner; lawful means; proper care and caution. If any element fails (e.g., the underlying act was unlawful, or care was lacking), the exception does not apply.\n\nCite BNS s. 18 for post-1 July 2024 acts.`,
  sections: [
    { id: 's-18-m1', title: 'Provenance', order: 1, content: ['Successor to IPC s. 80. Protects pure accidents in the course of lawful, careful conduct.'] },
    { id: 's-18-m2', title: 'Text', order: 2, content: ['Accident or misfortune; without criminal intention or knowledge; lawful act; lawful manner; lawful means; proper care and caution.'] },
    { id: 's-18-m3', title: 'Ingredients', order: 3, content: ['All six elements must be present. Absence of any one defeats the exception.'] },
    { id: 's-18-m4', title: 'Evidence', order: 4, content: ['Burden on accused on preponderance. Evidence of the lawful nature of the activity and of due care is essential.'] },
    { id: 's-18-m5', title: 'Procedure', order: 5, content: ['Raised as a complete defence. If care was lacking, liability may shift to rash/negligent offences (e.g., s. 106).'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-18', section: 's. 18', title: 'Accident in doing a lawful act' }],
  examples: [
    { id: 's-18-ex1', title: 'True accident', illustrationType: 'practical', description: 'A is lawfully cutting a tree with proper care. The tree falls in an unforeseeable way and injures B. s. 18 may protect.' },
    { id: 's-18-ex2', title: 'Lack of care', illustrationType: 'fail-scenario', description: 'A fires a gun in a crowded place without checking the line of fire. The resulting injury is not protected by s. 18; care was lacking.' },
  ],
  hypotheticals: [{ id: 's-18-hypo', title: 'Accident', facts: 'Lawful activity; unexpected injury; care was taken.', question: 'Is s. 18 available?', applicableLaw: 'BNS s. 18.', analysis: 'If all elements (including proper care) are proved, yes.', conclusion: 'Protected if care and lawfulness are established.' }],
  distinctions: [],
  misconceptions: [{ id: 's-18-trap', trap: 'Any unintended injury is an accident under s. 18.', correction: 'The underlying act must be lawful, done in a lawful manner by lawful means, and with proper care. Unintended results of unlawful or careless acts are not protected.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-18-brief', draftingCategory: 'brief', question: 'Explain the accident exception in BNS s. 18.', answer: 'Nothing is an offence done by accident or misfortune, without criminal intention or knowledge, in doing a lawful act in a lawful manner by lawful means with proper care and caution. All elements are mandatory.', explanation: 'Short note.' },
    { id: 's-18-sub', draftingCategory: 'submissions', question: 'Submissions on s. 18.', answer: 'I. Accident/misfortune. II. No criminal intent/knowledge. III. Lawful act, manner, means, care. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 18', 'IPC s. 80 (historical)'],
  examTips: ['List all the cumulative conditions; missing care or lawfulness defeats the defence.'],
  revisionPoints: ['Accident + no criminal intent/knowledge + lawful act/manner/means + proper care.'],
  relatedTopics: ['s-19', 's-106', 'general-exceptions'],
}

export default content
