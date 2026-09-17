import type { TopicContent } from '../loadTopicContent'

/**
 * Article 14 — Equality
 * Subject: constitution | Topic id: art-14
 */
const content: TopicContent = {
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
