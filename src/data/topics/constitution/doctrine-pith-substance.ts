import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  short: `Pith and substance is used to decide whether a law falls under the Union, State or Concurrent List. Courts look at the true nature and character of the legislation. Incidental encroachment on another list does not make the law invalid if the pith and substance lies in a list within the legislature’s competence.`,

  detailed: `Context\nSeventh Schedule distributes legislative power (Union List, State List, Concurrent List). Challenges often allege that a State law trespasses on the Union List (or vice versa).\n\nDoctrine\n• Examine the true nature, character and object of the law (its “pith and substance”).\n• If the substance falls under an entry the legislature can enact, the law is valid.\n• Incidental or ancillary encroachment on another list is tolerated.\n\nRelated doctrines (do not mix in answers)\n• Colourable legislation — form is a disguise for lack of power.\n• Occupied field / repugnancy — mainly Concurrent List (Art 254).\n• Eclipse / severability — Fundamental Rights and validity of parts of statutes.\n\nExam focus\nState the test; apply to a fact pattern. Cite that incidental encroachment is not fatal.`,

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
