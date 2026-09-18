import type { TopicContent } from '../loadTopicContent'

/**
 * Basic Structure Doctrine
 * Subject: constitution | Topic id: basic-structure
 * Migrated to structured Study Topic fields from existing short/detailed text only.
 */
const content: TopicContent = {
  study: `Origin
Kesavananda Bharati v. State of Kerala (1973) — 13-Judge Bench. The Court held that while Parliament has wide power to amend under Article 368, it cannot alter or destroy the “basic structure” or essential features of the Constitution.

Illustrative basic features (non-exhaustive)
• Supremacy of the Constitution
• Republican and democratic form of government
• Secular character
• Separation of powers
• Federal character
• Judicial review
• Rule of law
• Free and fair elections
• Independence of the judiciary
• Harmony between Fundamental Rights and DPSPs (in later readings)

Important later cases
• Indira Nehru Gandhi v. Raj Narain (1975) — free and fair elections; rule of law
• Minerva Mills (1980) — limited amending power itself is basic; balance of FR and DPSP
• I.R. Coelho (2007) — laws in Ninth Schedule after 24 April 1973 open to basic structure review
• NJAC case (2015) — independence of judiciary as basic structure

Exam focus
Kesavananda is the foundation. Minerva Mills and Coelho are frequently tested. Basic structure is a limit on Art 368, not a list frozen in 1973 — the Court develops it case by case.`,

  sections: [
    {
      id: 'basic-structure-origin',
      title: 'Origin — Kesavananda Bharati (1973)',
      order: 1,
      content: [
        'Kesavananda Bharati v. State of Kerala (1973) was decided by a 13-Judge Bench.',
        'Parliament has wide power to amend under Article 368, but cannot alter or destroy the basic structure or essential features of the Constitution.',
      ],
    },
    {
      id: 'basic-structure-features',
      title: 'Illustrative basic features (non-exhaustive)',
      order: 2,
      content: [
        'Illustrative features include supremacy of the Constitution, republican and democratic form of government, secular character, separation of powers, federal character, judicial review, rule of law, free and fair elections, and independence of the judiciary.',
        'Later readings also refer to harmony between Fundamental Rights and DPSPs.',
        'The list is not exhaustive; the Court develops it case by case.',
      ],
    },
    {
      id: 'basic-structure-later-cases',
      title: 'Important later developments',
      order: 3,
      content: [
        'Indira Nehru Gandhi v. Raj Narain (1975) — free and fair elections; rule of law.',
        'Minerva Mills (1980) — limited amending power itself is basic; balance of FR and DPSP.',
        'I.R. Coelho (2007) — laws in the Ninth Schedule after 24 April 1973 are open to basic structure review.',
        'NJAC case (2015) — independence of the judiciary as basic structure.',
      ],
    },
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-368', article: 'Article 368', title: 'Power of Parliament to amend the Constitution' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-13', article: 'Article 13', title: 'Laws inconsistent with Fundamental Rights' },
  ],

  examples: [
    {
      id: 'basic-structure-amendment-example',
      title: 'Limit on Article 368',
      description: 'An amendment under Article 368 that damages or destroys an essential feature of the Constitution can be struck down under the basic structure doctrine, even though Parliament’s amending power is otherwise wide.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 'basic-structure-qa-1',
      question: 'What did Kesavananda Bharati hold about Parliament’s amending power?',
      answer: 'Parliament cannot amend the Constitution so as to damage or destroy its basic structure.',
      explanation: 'The doctrine was laid down by a 13-Judge Bench in 1973 and is a limit on Article 368.',
      relatedProvisionIds: ['constitution-article-368'],
    },
    {
      id: 'basic-structure-qa-2',
      question: 'Is the list of basic features fixed once and for all?',
      answer: 'No. The list is illustrative and non-exhaustive; the Court develops it case by case.',
      explanation: 'Minerva Mills and Coelho are frequently tested follow-up authorities.',
      relatedProvisionIds: ['constitution-article-368'],
    },
  ],

  relatedTopics: ['Fundamental Rights', 'Judicial review', 'Article 368 — Amendment'],

  cases: [
    {
      name: 'Kesavananda Bharati v. State of Kerala',
      year: 1973,
      citation: '(1973) 4 SCC 225',
      holding:
        'Parliament cannot amend the Constitution so as to damage or destroy its basic structure.',
      relevance: 'Origin of the basic structure doctrine; 13-Judge Bench.',
    },
    {
      name: 'Minerva Mills Ltd. v. Union of India',
      year: 1980,
      citation: '(1980) 3 SCC 625',
      holding:
        'Limited amending power is itself part of the basic structure; harmony between FR and DPSP.',
      relevance: 'Strengthened Kesavananda; struck down parts of 42nd Amendment.',
    },
    {
      name: 'I.R. Coelho v. State of Tamil Nadu',
      year: 2007,
      citation: '(2007) 2 SCC 1',
      holding:
        'Laws inserted in the Ninth Schedule after 24 April 1973 are open to basic structure review.',
      relevance: 'Ninth Schedule is not a complete immunity from judicial review.',
    },
  ],

  bareActPointers: ['Art 368', 'Art 13'],

  examTips: [
    'Start every basic structure answer with Kesavananda (1973) and the 13-Judge Bench.',
    'List 4–5 illustrative features; stress the list is not exhaustive.',
    'Minerva Mills + Coelho are high-frequency follow-up cases.',
    'Basic structure limits Art 368; it does not freeze the Constitution in 1973.',
  ],
}

export default content
