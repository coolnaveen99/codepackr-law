import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
Family Law – II, Unit IV: Gift under Islamic law (hiba). Immediate transfer of property without consideration. Three essentials: declaration, acceptance, delivery of possession.

Introduction
Hiba is distinct from wasiyat (will) and from sale. High-yield: three essentials, musha (undivided share), marz-ul-maut (death-bed gift).

Essentials of a valid hiba
(1) Declaration by competent donor; (2) acceptance by donee; (3) delivery of possession — actual or constructive. Intention must be immediate transfer.

Musha
Gift of an undivided share in property capable of division may be irregular unless possession is given as the law accepts. Distinguish divisible and indivisible property.

Marz-ul-maut
Gift during death-illness is specially limited and may take effect only to the extent of the testamentary third if conditions of marz-ul-maut are met.

Current-law close
Cite hiba essentials: declaration, acceptance, possession. Distinguish wasiyat and marz-ul-maut.`

export default {
  glance:
    'FL-II Unit IV — Hiba: declaration, acceptance, delivery of possession; musha; marz-ul-maut vs ordinary gift.',
  study,
  examples: [
    {
      id: 'hiba-ex-1',
      title: 'Example — valid hiba',
      description: 'Donor declares gift of a house, donee accepts, possession is handed over. Valid hiba.',
    },
  ],
  hypotheticals: [
    {
      id: 'hiba-hypo',
      title: 'Classroom problem — no possession',
      facts: 'Donor executes a gift deed but continues to possess as owner; donee never gets possession.',
      question: 'Is the hiba complete?',
      applicableLaw: 'Muslim law of hiba — delivery of possession.',
      analysis: 'Without delivery of possession the third essential fails.',
      conclusion: 'Hiba not complete until possession passes as required.',
    },
  ],
  distinctions: [
    {
      id: 'hiba-dist',
      title: 'Hiba vs Wasiyat',
      left: 'Hiba (gift)',
      right: 'Wasiyat (will)',
      rows: [
        { point: 'When effective', left: 'Immediate inter vivos', right: 'Operates on death' },
        { point: 'Quantum', left: 'Whole property if essentials met', right: 'Generally limited to one-third for non-heirs without consent' },
      ],
    },
  ],
  misconceptions: [
    {
      id: 'hiba-m1',
      trap: 'A registered gift deed without possession is always a complete hiba.',
      correction: 'Delivery of possession is a classical essential under Muslim law.',
    },
  ],
  questionsAndAnswers: [
    {
      id: 'hiba-q10',
      draftingCategory: 'brief',
      question: 'Explain the essentials of a valid gift (hiba) under Muslim law.',
      answer:
        'Introduction. Definition. Three essentials: declaration, acceptance, delivery of possession. Brief musha note. Conclusion.',
      explanation: 'All three essentials must appear.',
    },
    {
      id: 'hiba-q16',
      draftingCategory: 'submissions',
      question: 'Discuss hiba with special reference to musha and marz-ul-maut.',
      answer:
        'Introduction. Essentials. Musha problems. Marz-ul-maut and one-third relationship. Distinction from wasiyat. Illustration. Conclusion.',
      explanation: 'Musha + marz-ul-maut are high-yield.',
    },
  ],
  bareActPointers: ['Muslim personal law — hiba', 'Muslim Personal Law (Shariat) Application Act, 1937'],
  examTips: ['List declaration, acceptance, possession.', 'Separate hiba from wasiyat and marz-ul-maut.'],
  revisionPoints: [
    'Hiba = immediate gift; three essentials.',
    'Musha — undivided share problems.',
    'Marz-ul-maut — death-bed limits.',
  ],
} satisfies TopicContent
