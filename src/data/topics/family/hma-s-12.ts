import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
Section 12 of the Hindu Marriage Act, 1955 deals with voidable marriages. Unlike void marriages under s. 11, a voidable marriage is valid until annulled by a decree of nullity.

Grounds (salient)
Impotence of the respondent at the time of marriage continuing until the petition; marriage in contravention of s. 5(ii) (mental capacity); consent obtained by force or by fraud as to the nature of the ceremony or a material fact concerning the respondent; pregnancy of the respondent by another person at the time of marriage — subject to strict statutory conditions and bars.

Bars
Force/fraud: petition within one year after force ceased or fraud discovered; cohabitation with full consent after discovery is a bar. Pregnancy ground: ignorance at marriage, petition within one year of marriage, and no marital intercourse after discovery.

Current-law close
Cite Section 12 of the Hindu Marriage Act, 1955. Stress valid until annulled. Contrast with s. 11.`

export default {
  glance:
    'Section 12 HMA — voidable marriages: impotence, mental incapacity (s. 5(ii)), force or fraud, pregnancy by another. Valid until annulled; watch limitation and bars.',
  study,
  examples: [
    {
      id: 's12-ex-1',
      title: 'Example — fraud',
      description: 'Petitioner discovers concealment of a serious mental disorder going to s. 5(ii). Petition under s. 12 within time may succeed if conditions are met.',
    },
    {
      id: 's12-ex-2',
      title: 'Example — bar after cohabitation',
      description: 'Petitioner discovers fraud but continues cohabitation with full consent. Force/fraud ground can be barred.',
    },
  ],
  hypotheticals: [
    {
      id: 's12-hypo',
      title: 'Classroom problem',
      facts: 'W discovers six months after marriage that H was impotent at marriage and remains so. She files under s. 12.',
      question: 'Void or voidable? What must W prove?',
      applicableLaw: 'Section 12(1)(a) of the Hindu Marriage Act, 1955.',
      analysis: 'Impotence makes the marriage voidable. Prove impotence at marriage continuing until the petition. Marriage valid until decree.',
      conclusion: 'Voidable under s. 12; cite the Act.',
    },
  ],
  distinctions: [
    {
      id: 's12-dist',
      title: 'Voidable (s. 12) vs Divorce (s. 13)',
      left: 'Nullity — s. 12',
      right: 'Divorce — s. 13',
      rows: [
        { point: 'Theory', left: 'Annulment — defect at formation', right: 'Dissolution of a valid marriage' },
        { point: 'Status before decree', left: 'Marriage treated as valid', right: 'Marriage valid until decree' },
      ],
    },
  ],
  misconceptions: [
    {
      id: 's12-m1',
      trap: 'Voidable marriage is the same as void marriage.',
      correction: 'Void (s. 11) is void ab initio. Voidable (s. 12) is valid until a decree of nullity.',
    },
  ],
  questionsAndAnswers: [
    {
      id: 's12-q10',
      draftingCategory: 'brief',
      question: 'Explain voidable marriages under Section 12 of the Hindu Marriage Act, 1955.',
      answer:
        'Introduction. List s. 12 grounds. Valid until annulled. Limitation and bars for force/fraud and pregnancy. Contrast s. 11. Conclusion with full citation.',
      explanation: 'Mention one-year and cohabitation bars.',
    },
    {
      id: 's12-q16',
      draftingCategory: 'submissions',
      question: 'Distinguish void and voidable marriages. Discuss the grounds under Section 12 HMA.',
      answer:
        'Introduction. Comparative table s. 11 vs s. 12. Detailed s. 12 grounds with conditions and bars. Legitimacy (s. 16). Conclusion with HMA citation.',
      explanation: 'Bars and comparison are high-value points.',
    },
  ],
  bareActPointers: ['Hindu Marriage Act, 1955 — s. 12', 'Hindu Marriage Act, 1955 — s. 11', 'Hindu Marriage Act, 1955 — s. 5(ii)'],
  examTips: ['Write “voidable under s. 12 HMA — valid until annulled”.', 'For force/fraud and pregnancy, mention the bars.'],
  revisionPoints: ['s. 12: impotence, mental capacity, force/fraud, pregnancy by another.', 'Valid until decree of nullity.', 'Watch limitation and bars.'],
} satisfies TopicContent
