import type { TopicContent } from '../loadTopicContent'

/**
 * Article 21 — Life & Personal Liberty
 * Subject: constitution | Topic id: art-21
 */
const content: TopicContent = {
  short: `Article 21 guarantees that no person shall be deprived of life or personal liberty except according to procedure established by law. After Maneka Gandhi (1978), the procedure must be fair, just and reasonable. The Supreme Court has expanded “life” to include dignity, privacy, health, clean environment, speedy trial and livelihood.`,

  detailed: `Text of Article 21
“No person shall be deprived of his life or personal liberty except according to procedure established by law.”

Pre-Maneka position
A.K. Gopalan (1950) treated “procedure established by law” as any enacted procedure, even if unfair. Article 21 was read in isolation from Articles 14 and 19.

Post-Maneka position (1978)
Maneka Gandhi held that the procedure must be fair, just and reasonable. Articles 14, 19 and 21 form a “golden triangle”. Any law depriving life or liberty must satisfy all three.

Expansion of “life”
The Court has held that “life” means more than animal existence. It includes:
• Right to live with human dignity
• Right to privacy (Puttaswamy, 2017)
• Right to health and medical care
• Right to clean environment
• Right to speedy trial
• Right to livelihood (limited contexts)
• Right against solitary confinement and cruel treatment

Personal liberty
Includes a wide range of rights relating to individual autonomy, subject to fair procedure and reasonable restrictions consistent with the golden triangle.

Exam focus
Link Maneka + golden triangle in almost every Art 21 answer. Privacy is now part of Art 21 (Puttaswamy). AIBE and Judiciary papers frequently test expansion cases.`,

  cases: [
    {
      name: 'Maneka Gandhi v. Union of India',
      year: 1978,
      citation: '(1978) 1 SCC 248',
      holding:
        'Procedure under Art 21 must be fair, just and reasonable; Arts 14, 19 and 21 form a golden triangle.',
      relevance: 'Landmark expansion of Article 21; overruled narrow Gopalan approach.',
    },
    {
      name: 'K.S. Puttaswamy v. Union of India',
      year: 2017,
      citation: '(2017) 10 SCC 1',
      holding: 'Right to privacy is a fundamental right under Article 21 (and the golden triangle).',
      relevance: 'Privacy is intrinsic to life and personal liberty.',
    },
    {
      name: 'Francis Coralie Mullin v. Administrator, UT of Delhi',
      year: 1981,
      citation: '(1981) 1 SCC 608',
      holding: 'Right to life includes the right to live with human dignity.',
      relevance: 'Classic authority on dignity as part of Art 21.',
    },
    {
      name: 'Olga Tellis v. Bombay Municipal Corporation',
      year: 1985,
      citation: '(1985) 3 SCC 545',
      holding: 'Right to livelihood is an important facet of the right to life under Art 21.',
      relevance: 'Livelihood and eviction of pavement dwellers.',
    },
  ],

  bareActPointers: ['Art 21', 'Art 14', 'Art 19'],

  examTips: [
    'Always link Maneka Gandhi + golden triangle (Arts 14, 19, 21) in answers.',
    'Privacy is part of Art 21 after Puttaswamy (2017).',
    'AIBE loves expansion cases: environment, health, speedy trial, dignity.',
    'Distinguish “procedure established by law” (Art 21) from “due process” language used in judgments after Maneka.',
  ],
}

export default content
