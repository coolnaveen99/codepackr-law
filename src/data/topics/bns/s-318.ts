import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 318 (and related cheating provisions): cheating — deceiving a person fraudulently or dishonestly to induce delivery of property, or to consent to retention of property, or to do/omit an act that causes or is likely to cause damage/harm to body, mind, reputation or property. Successor to IPC s. 415/420. Aggravated forms (cheating and dishonestly inducing delivery of property) carry higher punishment.',
  study: `Cheating under the BNS:\n\nWhoever, by deceiving any person, fraudulently or dishonestly induces the person so deceived to deliver any property, or to consent that any person shall retain any property, or intentionally induces the person so deceived to do or omit to do anything which he would not do or omit if he were not so deceived, and which act or omission causes or is likely to cause damage or harm to that person in body, mind, reputation or property, is said to cheat.\n\nKey points\n• Deception + fraudulent/dishonest inducement.\n• Delivery of property, or consent to retention, or act/omission causing damage/harm.\n• Mens rea: fraudulent or dishonest.\n\nThe aggravated form (cheating and dishonestly inducing delivery of property) is the classic “420-type” offence with higher punishment.\n\nCite the applicable BNS cheating sections for post-1 July 2024 acts.`,
  sections: [
    { id: 's-318-m1', title: 'Provenance', order: 1, content: ['Successor to IPC ss. 415/420. Deception + fraudulent/dishonest inducement.'] },
    { id: 's-318-m2', title: 'Definitional Elements', order: 2, content: ['Deception; fraudulent or dishonest inducement; delivery of property / consent to retention / act or omission causing damage or harm.'] },
    { id: 's-318-m3', title: 'Ingredients', order: 3, content: ['(1) Deception. (2) Fraudulent or dishonest inducement. (3) Delivery of property or other specified consequence. (4) Damage/harm where the act/omission limb is relied upon.'] },
    { id: 's-318-m4', title: 'Evidence', order: 4, content: ['Representation; falsity; knowledge/intention; inducement; delivery or act/omission; damage.'] },
    { id: 's-318-m5', title: 'Procedure', order: 5, content: ['Forum per BNSS Schedule; aggravated form often non-bailable / Sessions as applicable.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-318', section: 's. 318', title: 'Cheating' }],
  examples: [
    { id: 's-318-ex1', title: 'False representation inducing delivery', illustrationType: 'practical', description: 'A falsely represents that a product is genuine and induces B to pay. Cheating (and the aggravated form if delivery of property is induced dishonestly) is made out.' },
    { id: 's-318-ex2', title: 'Mere breach of contract', illustrationType: 'fail-scenario', description: 'A fails to perform a contract without any deception at the inception. Civil breach, not cheating, unless fraudulent/dishonest deception is proved.' },
  ],
  hypotheticals: [{ id: 's-318-hypo', title: 'Cheating vs civil dispute', facts: 'Accused took money promising a service and failed to deliver; evidence of intention to deceive from the start is weak.', question: 'Is cheating made out?', applicableLaw: 'BNS cheating provisions.', analysis: 'Without proof of deception and fraudulent/dishonest intention at the time of inducement, it may remain a civil dispute.', conclusion: 'Cheating requires proof of deception and mens rea; mere failure to perform is not enough.' }],
  distinctions: [{ id: 's-318-dist', title: 'Cheating vs Theft vs Extortion', left: 'Cheating', right: 'Theft / Extortion', rows: [{ point: 'Method', left: 'Deception inducing delivery or act/omission', right: 'Taking without consent / delivery under fear of injury' }] }],
  misconceptions: [{ id: 's-318-trap', trap: 'Every failed promise is cheating.', correction: 'Cheating requires deception and fraudulent or dishonest inducement. A genuine promise later broken is not cheating without mens rea at the time of the promise.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-318-brief', draftingCategory: 'brief', question: 'Define cheating under the BNS.', answer: 'Deceiving a person fraudulently or dishonestly so as to induce delivery of property, consent to retention of property, or an act/omission that causes or is likely to cause damage or harm to body, mind, reputation or property. Aggravated form: cheating and dishonestly inducing delivery of property.', explanation: 'Short note.' },
    { id: 's-318-sub', draftingCategory: 'submissions', question: 'Submissions on cheating.', answer: 'I. Deception. II. Fraudulent/dishonest inducement. III. Delivery or damage. IV. Distinction from civil breach. V. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS cheating provisions', 'BNS s. 303', 'BNS s. 308', 'IPC ss. 415/420 (historical)'],
  examTips: ['Stress deception + mens rea at the time of inducement.', 'Mere breach of contract is not cheating.'],
  revisionPoints: ['Deception + fraudulent/dishonest inducement + delivery or damage.', 'Not every failed promise is cheating.', 'Aggravated form = dishonestly inducing delivery of property.'],
  relatedTopics: ['s-303', 's-308', 's-2'],
}

export default content
