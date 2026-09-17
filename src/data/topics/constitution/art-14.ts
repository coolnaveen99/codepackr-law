import type { TopicContent } from '../loadTopicContent'

/**
 * Article 14 — Equality
 * Subject: constitution | Topic id: art-14
 * Migrated to structured Study Topic fields from existing short/detailed text only.
 */
const content: TopicContent = {
  study: `Text
“The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.”

Two limbs
• Equality before the law — absence of special privilege; equal subjection to ordinary law (Dicey’s influence).
• Equal protection of the laws — equal treatment in similar circumstances; allows reasonable classification.

Reasonable classification (classic test)
A classification is valid if:
1. It is based on an intelligible differentia that distinguishes those grouped together from others; and
2. That differentia has a rational relation to the object of the statute.

Class legislation is forbidden; reasonable classification is not.

Modern development
The Supreme Court has also struck down laws or actions that are “manifestly arbitrary” (e.g. Shayara Bano on triple talaq aspects; other cases on arbitrariness under Art 14). Art 14 is often read with Arts 19 and 21 (golden triangle after Maneka).

Exam focus
State the twin test clearly. Distinguish reasonable classification from class legislation. Mention arbitrariness where the fact pattern involves unreasonableness rather than pure classification.`,

  short: `Article 14 guarantees equality before the law and equal protection of the laws. It permits reasonable classification but forbids class legislation. The twin test is: (1) intelligible differentia, and (2) rational nexus with the object sought to be achieved. Later cases also use the “manifest arbitrariness” standard.`,

  detailed: `Text
“The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.”

Two limbs
• Equality before the law — absence of special privilege; equal subjection to ordinary law (Dicey’s influence).
• Equal protection of the laws — equal treatment in similar circumstances; allows reasonable classification.

Reasonable classification (classic test)
A classification is valid if:
1. It is based on an intelligible differentia that distinguishes those grouped together from others; and
2. That differentia has a rational relation to the object of the statute.

Class legislation is forbidden; reasonable classification is not.

Modern development
The Supreme Court has also struck down laws or actions that are “manifestly arbitrary” (e.g. Shayara Bano on triple talaq aspects; other cases on arbitrariness under Art 14). Art 14 is often read with Arts 19 and 21 (golden triangle after Maneka).

Exam focus
State the twin test clearly. Distinguish reasonable classification from class legislation. Mention arbitrariness where the fact pattern involves unreasonableness rather than pure classification.`,

  sections: [
    {
      id: 'art-14-two-limbs',
      title: 'Two limbs of Article 14',
      order: 1,
      content: [
        'Equality before the law means absence of special privilege and equal subjection to ordinary law (Dicey’s influence).',
        'Equal protection of the laws means equal treatment in similar circumstances and allows reasonable classification.',
      ],
    },
    {
      id: 'art-14-reasonable-classification',
      title: 'Reasonable classification (classic twin test)',
      order: 2,
      content: [
        'A classification is valid if it is based on an intelligible differentia that distinguishes those grouped together from others.',
        'That differentia must have a rational relation to the object of the statute.',
        'Class legislation is forbidden; reasonable classification is not.',
      ],
    },
    {
      id: 'art-14-arbitrariness',
      title: 'Manifest arbitrariness',
      order: 3,
      content: [
        'Later cases also use the “manifest arbitrariness” standard under Article 14.',
        'Article 14 is often read with Articles 19 and 21 (golden triangle after Maneka).',
      ],
    },
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-14', article: 'Article 14', title: 'Equality before law' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-15', article: 'Article 15', title: 'Prohibition of discrimination' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-16', article: 'Article 16', title: 'Equality of opportunity in public employment' },
  ],

  examples: [
    {
      id: 'art-14-classification-example',
      title: 'Reasonable classification vs class legislation',
      description: 'A statute that groups persons by an intelligible differentia rationally linked to its object can be valid; a statute that creates a privileged class without such a basis is class legislation and is forbidden.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 'art-14-qa-1',
      question: 'What is the twin test for reasonable classification under Article 14?',
      answer: 'Intelligible differentia distinguishing those grouped together from others, and a rational nexus between that differentia and the object of the statute.',
      explanation: 'Class legislation is void; reasonable classification is valid.',
      relatedProvisionIds: ['constitution-article-14'],
    },
    {
      id: 'art-14-qa-2',
      question: 'How does arbitrariness relate to Article 14?',
      answer: 'Equality is antithetic to arbitrariness; manifest arbitrariness can invalidate a law or State action under Article 14.',
      explanation: 'The Royappa line opened the arbitrariness dimension; Shayara Bano illustrates modern use of manifest arbitrariness.',
      relatedProvisionIds: ['constitution-article-14'],
    },
  ],

  relatedTopics: ['Article 19 — Freedoms', 'Article 21 — Life & Personal Liberty', 'Fundamental Rights'],

  cases: [
    {
      name: 'State of West Bengal v. Anwar Ali Sarkar',
      year: 1952,
      citation: 'AIR 1952 SC 75',
      holding:
        'Classification must rest on intelligible differentia with a rational nexus to the object of the law.',
      relevance: 'Early leading case on reasonable classification under Art 14.',
    },
    {
      name: 'E.P. Royappa v. State of Tamil Nadu',
      year: 1974,
      citation: '(1974) 4 SCC 3',
      holding: 'Equality is antithetic to arbitrariness; Art 14 strikes at arbitrariness in State action.',
      relevance: 'Opened the arbitrariness dimension of Art 14.',
    },
    {
      name: 'Shayara Bano v. Union of India',
      year: 2017,
      citation: '(2017) 9 SCC 1',
      holding:
        'Manifest arbitrariness can invalidate a law under Art 14; triple talaq held unconstitutional by majority.',
      relevance: 'Modern use of arbitrariness; high exam visibility.',
    },
  ],

  bareActPointers: ['Art 14', 'Art 15', 'Art 16'],

  examTips: [
    'Always write the twin test: intelligible differentia + rational nexus.',
    'Class legislation is void; reasonable classification is valid.',
    'Arbitrariness (Royappa / Shayara Bano line) is a separate and important strand.',
    'Link Art 14 with Arts 19 and 21 when the question involves liberty or fairness of procedure.',
  ],
}

export default content
