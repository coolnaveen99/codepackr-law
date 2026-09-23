import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance: 'Section 303: theft — dishonestly taking movable property out of the possession of any person without that person’s consent. Five ingredients (movable property; possession of another; taking out of possession; without consent; dishonest intention). Successor to IPC s. 378/379. Snatching (s. 304) is a related but distinct offence.',
  study: `Section 303 is the principal theft provision.\n\nDefinitional elements (classic five):\n1. Movable property\n2. In the possession of any person\n3. Taken out of that possession\n4. Without that person’s consent\n5. Dishonestly (intention to cause wrongful gain / wrongful loss)\n\nTaking must be complete; temporary removal with dishonest intention can suffice. Consent obtained by fear or misconception may be invalid (s. 28 principles).\n\nSnatching (s. 304) is a distinct offence involving sudden/quick seizure from the person.\n\nCite BNS s. 303 for post-1 July 2024 theft cases. Aggravated forms (theft in dwelling, by clerk/servant, etc.) have higher sections.`,
  sections: [
    { id: 's-303-m1', title: 'Provenance', order: 1, content: ['Successor to IPC ss. 378/379. Dishonest taking of movable property from possession without consent.'] },
    { id: 's-303-m2', title: 'Five Ingredients', order: 2, content: ['Movable property; possession of another; taking out of possession; without consent; dishonest intention.'] },
    { id: 's-303-m3', title: 'Ingredients detailed', order: 3, content: ['All five must be proved. Dishonest intention is the mens rea (wrongful gain/loss).'] },
    { id: 's-303-m4', title: 'Evidence', order: 4, content: ['Possession; manner of taking; absence of consent; intention inferred from conduct and circumstances.'] },
    { id: 's-303-m5', title: 'Procedure', order: 5, content: ['Forum and bailability per BNSS Schedule; often compoundable in simple cases as per schedule.'] },
  ],
  provisions: [{ actId: 'bns', actName: 'Bharatiya Nyaya Sanhita, 2023', provisionId: 'bns-303', section: 's. 303', title: 'Theft' }],
  examples: [
    { id: 's-303-ex1', title: 'Classic theft', illustrationType: 'practical', description: 'A dishonestly takes B’s bicycle from B’s possession without consent. Theft under s. 303.' },
    { id: 's-303-ex2', title: 'No dishonest intention', illustrationType: 'fail-scenario', description: 'A takes B’s umbrella by mistake, intending to return it. No dishonest intention; not theft.' },
  ],
  hypotheticals: [{ id: 's-303-hypo', title: 'Theft ingredients', facts: 'Accused removes a phone from the victim’s bag and leaves.', question: 'Is theft made out?', applicableLaw: 'BNS s. 303.', analysis: 'Movable property, from possession, without consent, dishonestly — if all proved, yes.', conclusion: 'Theft under s. 303.' }],
  distinctions: [{ id: 's-303-dist', title: 'Theft vs Snatching vs Extortion', left: 'Theft (s. 303)', right: 'Snatching (s. 304) / Extortion', rows: [{ point: 'Method', left: 'Dishonest taking from possession without consent', right: 'Sudden seizure from person / inducing delivery by fear' }] }],
  misconceptions: [{ id: 's-303-trap', trap: 'Theft requires permanent deprivation.', correction: 'Dishonest intention to cause wrongful gain/loss is enough; temporary taking with that intention can constitute theft.' }],
  cases: [],
  questionsAndAnswers: [
    { id: 's-303-brief', draftingCategory: 'brief', question: 'State the ingredients of theft under BNS s. 303.', answer: 'Movable property; in the possession of any person; taken out of that possession; without that person’s consent; dishonestly (intention to cause wrongful gain or wrongful loss).', explanation: 'Short note.' },
    { id: 's-303-sub', draftingCategory: 'submissions', question: 'Submissions on theft under s. 303.', answer: 'I. Five ingredients. II. Evidence of each. III. Distinction from snatching/extortion. IV. Prayer.', explanation: 'Submissions.' },
  ],
  bareActPointers: ['BNS s. 303', 'BNS s. 304', 'BNS extortion provisions', 'IPC ss. 378–379 (historical)'],
  examTips: ['Always list the five ingredients.', 'Distinguish theft, snatching, and extortion.'],
  revisionPoints: ['Five ingredients of theft.', 'Dishonest intention = wrongful gain/loss.', 'Snatching is s. 304 (sudden seizure).'],
  relatedTopics: ['s-304', 's-308', 's-309', 's-2'],
}

export default content
