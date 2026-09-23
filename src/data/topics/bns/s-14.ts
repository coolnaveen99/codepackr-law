import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 14: nothing is an offence which is done by a person bound by law to do it, or by mistake of fact (not of law) believing himself bound by law to do it. Successor to IPC s. 76. Mistake of law is no defence; mistake of fact is.',
  study: `Section 14 is the first general exception.\n\nTwo limbs\n1. Act done by a person who is bound by law to do it.\n2. Act done by a person who, by reason of a mistake of fact (and not by reason of a mistake of law), in good faith believes himself bound by law to do it.\n\nIgnorantia juris neminem excusat remains the rule: a mistaken belief that the law requires or permits the act is not a defence. A mistaken belief about a pure fact that leads the person to think he is legally bound may be a defence if the belief is held in good faith.\n\nClassic illustration: a soldier fires on a mob under orders that are lawful on the facts as he reasonably understands them.\n\nBurden: once the accused raises the exception, he must prove it on a preponderance of probabilities (BSA s. 108).\n\nCite BNS s. 14 for offences on or after 1 July 2024.`,
  sections: [
    { id: 's-14-m1', title: 'Provenance & Objective', order: 1, content: ['Successor to IPC s. 76. Protects persons who act under a legal duty or a good-faith factual belief that they are under such a duty.'] },
    { id: 's-14-m2', title: 'Textual Anatomy', order: 2, content: ['Bound by law; or mistake of fact (not law) in good faith believing oneself bound by law.'] },
    { id: 's-14-m3', title: 'Essential Ingredients', order: 3, content: ['(1) Act done. (2) Either actual legal obligation, or (3) good-faith mistake of fact leading to belief of legal obligation. Mistake of law is excluded.'] },
    { id: 's-14-m4', title: 'Evidentiary Burden (BSA)', order: 4, content: ['Accused bears the burden of the exception on preponderance of probabilities (BSA s. 108). Prosecution retains the burden on the ingredients of the offence beyond reasonable doubt.'] },
    { id: 's-14-m5', title: 'Procedure & Forum', order: 5, content: ['Raised as a defence at trial. Forum follows the substantive offence under BNSS.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-14', section: 's. 14', title: 'Act done by a person bound, or by mistake of fact believing himself bound, by law' }],
  examples: [
    { id: 's-14-ex1', title: 'Bound by law', illustrationType: 'practical', description: 'A police officer lawfully executes a warrant of arrest. The act of restraint is protected by s. 14.' },
    { id: 's-14-ex2', title: 'Mistake of law fails', illustrationType: 'fail-scenario', description: 'A believes (wrongly) that the law permits him to detain a neighbour for a civil debt. That is a mistake of law; s. 14 does not protect him.' },
  ],
  hypotheticals: [{ id: 's-14-hypo', title: 'Mistake of fact vs law', facts: 'A soldier is ordered to fire on a crowd. He reasonably believes the order is lawful on the facts presented to him.', question: 'Is s. 14 available?', applicableLaw: 'BNS s. 14; good faith; mistake of fact.', analysis: 'If the belief is as to facts (e.g., that the crowd is armed and the order is within authority) and is held in good faith, the exception may apply. A pure belief that “the law always allows soldiers to fire” is a mistake of law and fails.', conclusion: 'Depends on whether the mistake is of fact or of law.' }],
  distinctions: [{ id: 's-14-dist', title: 'Mistake of fact vs Mistake of law', left: 'Mistake of fact (protected)', right: 'Mistake of law (not protected)', rows: [{ point: 'Effect under s. 14', left: 'May ground the exception if good faith and belief of legal duty', right: 'No defence' }] }],
  misconceptions: [{ id: 's-14-trap', trap: 'Any honest belief that one is acting lawfully is a defence under s. 14.', correction: 'Only a good-faith mistake of fact that leads to a belief of being bound by law; pure mistake of law is excluded.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-14-brief', draftingCategory: 'brief', question: 'Explain the exception in BNS s. 14.', answer: 'Nothing is an offence which is done by a person bound by law to do it, or who by mistake of fact (not of law) in good faith believes himself bound by law to do it. Mistake of law is no defence.', explanation: 'Short note.' },
    { id: 's-14-sub', draftingCategory: 'submissions', question: 'Submissions on s. 14.', answer: 'I. Legal duty or good-faith factual belief of duty. II. Exclusion of mistake of law. III. Burden on accused (BSA s. 108). IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 14', 'BNS s. 17 (related justification)', 'BSA s. 108', 'IPC s. 76 (historical)'],
  examTips: ['Always contrast mistake of fact with mistake of law.', 'State the BSA s. 108 burden on the accused.'],
  revisionPoints: ['Bound by law, or good-faith mistake of fact believing bound by law.', 'Mistake of law is no defence.'],
  relatedTopics: ['s-17', 's-18', 'general-exceptions'],
}

export default content
