import type { TopicContent } from '../loadTopicContent'

/**
 * Doctrine of Pith and Substance
 * Subject: constitution | Topic id: doctrine-pith-substance
 * Migrated to structured Study Topic fields from existing short/detailed text only.
 */
const content: TopicContent = {
  study: `Context
Seventh Schedule distributes legislative power (Union List, State List, Concurrent List). Challenges often allege that a State law trespasses on the Union List (or vice versa).

Doctrine
• Examine the true nature, character and object of the law (its “pith and substance”).
• If the substance falls under an entry the legislature can enact, the law is valid.
• Incidental or ancillary encroachment on another list is tolerated.

Related doctrines (do not mix in answers)
• Colourable legislation — form is a disguise for lack of power.
• Occupied field / repugnancy — mainly Concurrent List (Art 254).
• Eclipse / severability — Fundamental Rights and validity of parts of statutes.

Exam focus
State the test; apply to a fact pattern. Cite that incidental encroachment is not fatal.`,

  short: `Pith and substance is used to decide whether a law falls under the Union, State or Concurrent List. Courts look at the true nature and character of the legislation. Incidental encroachment on another list does not make the law invalid if the pith and substance lies in a list within the legislature’s competence.`,

  detailed: `Context
Seventh Schedule distributes legislative power (Union List, State List, Concurrent List). Challenges often allege that a State law trespasses on the Union List (or vice versa).

Doctrine
• Examine the true nature, character and object of the law (its “pith and substance”).
• If the substance falls under an entry the legislature can enact, the law is valid.
• Incidental or ancillary encroachment on another list is tolerated.

Related doctrines (do not mix in answers)
• Colourable legislation — form is a disguise for lack of power.
• Occupied field / repugnancy — mainly Concurrent List (Art 254).
• Eclipse / severability — Fundamental Rights and validity of parts of statutes.

Exam focus
State the test; apply to a fact pattern. Cite that incidental encroachment is not fatal.`,

  sections: [
    {
      id: 'pith-substance-context',
      title: 'Legislative lists context',
      order: 1,
      content: [
        'The Seventh Schedule distributes legislative power among the Union List, State List and Concurrent List.',
        'Challenges often allege that a State law trespasses on the Union List (or vice versa).',
      ],
    },
    {
      id: 'pith-substance-test',
      title: 'Pith and substance test',
      order: 2,
      content: [
        'Courts examine the true nature, character and object of the law (its pith and substance).',
        'If the substance falls under an entry the legislature can enact, the law is valid.',
        'Incidental or ancillary encroachment on another list is tolerated and does not make the law invalid.',
      ],
    },
    {
      id: 'pith-substance-related',
      title: 'Related doctrines (do not mix)',
      order: 3,
      content: [
        'Colourable legislation — form is a disguise for lack of power.',
        'Occupied field / repugnancy — mainly Concurrent List (Article 254).',
        'Eclipse / severability — Fundamental Rights and validity of parts of statutes.',
      ],
    },
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-246', article: 'Article 246', title: 'Subject-matter of laws made by Parliament and by State Legislatures' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-seventh-schedule', title: 'Seventh Schedule — Union, State and Concurrent Lists' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-254', article: 'Article 254', title: 'Inconsistency between Union and State laws' },
  ],

  examples: [
    {
      id: 'pith-substance-encroachment-example',
      title: 'Incidental encroachment',
      description: 'If the true nature and character of a law lie within a list entry the legislature can enact, an incidental encroachment on another list does not by itself invalidate the law.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 'pith-substance-qa-1',
      question: 'What do courts examine under pith and substance?',
      answer: 'The true nature, character and object of the law.',
      explanation: 'If the substance falls under a competent list entry, the law is valid despite incidental encroachment.',
      relatedProvisionIds: ['constitution-article-246'],
    },
    {
      id: 'pith-substance-qa-2',
      question: 'Does incidental encroachment on another list invalidate a law?',
      answer: 'No. Incidental or ancillary encroachment is tolerated if the pith and substance lies within the legislature’s competence.',
      explanation: 'Do not confuse this with colourable legislation or repugnancy under Article 254.',
      relatedProvisionIds: ['constitution-article-246', 'constitution-article-254'],
    },
  ],

  relatedTopics: ['Colourable legislation', 'Repugnancy (Art 254)', 'Seventh Schedule'],

  cases: [
    {
      name: 'Prafulla Kumar Mukherjee v. Bank of Commerce',
      year: 1947,
      citation: 'AIR 1947 PC 60',
      holding: 'Pith and substance determines competence; incidental encroachment does not invalidate the law.',
      relevance: 'Classic Privy Council authority still cited in India.',
    },
    {
      name: 'State of Bombay v. F.N. Balsara',
      year: 1951,
      citation: 'AIR 1951 SC 318',
      holding: 'Applied pith and substance to Bombay prohibition law vis-à-vis federal lists.',
      relevance: 'Early Supreme Court application.',
    },
  ],

  bareActPointers: ['Seventh Schedule', 'Art 246', 'Art 254'],

  examTips: [
    'Write: true nature and character of the law = pith and substance.',
    'Incidental encroachment ≠ invalidity if substance is within competence.',
    'Do not confuse with colourable legislation or repugnancy (Art 254).',
    'Always name the competing list entries in application questions.',
  ],
}

export default content
