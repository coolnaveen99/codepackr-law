import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
Section 12 of the Hindu Marriage Act, 1955 deals with voidable marriages. Unlike void marriages under s. 11, a voidable marriage is valid until it is annulled by a decree of nullity.

Introduction
Students often confuse void and voidable. Memorise s. 12 grounds separately and note the limitation periods where the Act prescribes them.

Meaning and concept
A marriage is voidable and may be annulled by a decree of nullity on any of the following grounds, among others as set out in s. 12:
(1) Respondent was impotent at the time of the marriage and continued to be so until the institution of the proceeding.
(2) Marriage in contravention of the mental-capacity conditions in s. 5(ii).
(3) Consent of the petitioner (or of the guardian where required under the then-applicable law) was obtained by force or by fraud as to the nature of the ceremony or as to any material fact or circumstance concerning the respondent.
(4) Respondent was pregnant by some person other than the petitioner at the time of the marriage (with statutory conditions and bars).

Why the rule exists
These defects go to consent, capacity or deception. The law allows the aggrieved spouse to avoid the marriage without treating it as never having existed until the court so decrees.

How the rule operates
- Petition for nullity under s. 12.
- Force/fraud: petition must be filed within one year after the force ceased or the fraud was discovered; cohabitation with full consent after force ceased / fraud discovered is a bar.
- Pregnancy ground: strict conditions — petitioner was ignorant of the fact at marriage, proceedings within one year of marriage, and no marital intercourse after discovery of the ground.
- Children: s. 16 legitimacy rules apply with limits.

Current-law close
Cite Section 12 of the Hindu Marriage Act, 1955. List grounds. Stress that the marriage is valid until annulled. Contrast with s. 11.`

export default {
  glance:
    'Section 12 HMA — voidable marriages: impotence, mental incapacity (s. 5(ii)), force or fraud, pregnancy by another. Valid until annulled; watch limitation and bars.',
  study,
  examples: [
    {
      id: 's12-ex-1',
      title: 'Example — fraud',
      description:
        'Petitioner discovers after marriage that the respondent concealed an existing serious mental disorder going to s. 5(ii). Petition under s. 12 within time may succeed if statutory conditions are met.',
    },
    {
      id: 's12-ex-2',
      title: 'Example — bar after cohabitation',
      description:
        'Petitioner discovers fraud but continues to live as spouses with full consent for a long period. The force/fraud ground can be barred.',
    },
  ],
  hypotheticals: [
    {
      id: 's12-hypo',
      title: 'Classroom problem',
      facts:
        'W discovers six months after marriage that H was already impotent at the time of marriage and remains so. She files under s. 12.',
      question: 'Is the marriage void or voidable, and what must W prove?',
      applicableLaw: 'Section 12(1)(a) of the Hindu Marriage Act, 1955.',
      analysis:
        'Impotence makes the marriage voidable, not void. W must prove impotence at the time of marriage continuing until the petition. The marriage remains valid until the decree.',
      conclusion:
        'Voidable under s. 12; prove continuing impotence; cite the Act.',
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
        { point: 'Typical grounds', left: 'Impotence, force, fraud, pregnancy by another', right: 'Adultery, cruelty, desertion, etc.' },
      ],
    },
  ],
  misconceptions: [
    {
      id: 's12-m1',
      trap: 'Voidable marriage is the same as void marriage.',
      correction:
        'Void (s. 11) is void ab initio. Voidable (s. 12) is valid until a decree of nullity. Grounds and procedure differ.',
    },
  ],
  questionsAndAnswers: [
    {
      id: 's12-q10',
      marks: 10,
      question: 'Explain voidable marriages under Section 12 of the Hindu Marriage Act, 1955.',
      answer:
        'Introduction. List s. 12 grounds. Valid until annulled. Limitation and bars for force/fraud and pregnancy. Contrast s. 11. Conclusion with full citation.',
    },
    {
      id: 's12-q16',
      marks: 16,
      question: 'Distinguish void and voidable marriages. Discuss the grounds under Section 12 HMA.',
      answer:
        'Introduction. Comparative table s. 11 vs s. 12. Detailed s. 12 grounds with conditions and bars. Legitimacy (s. 16). Conclusion.',
    },
  ],
  bareActPointers: ['Hindu Marriage Act, 1955 — s. 12', 'Hindu Marriage Act, 1955 — s. 11', 'Hindu Marriage Act, 1955 — s. 5(ii)'],
  examTips: [
    'Write “voidable under s. 12 HMA — valid until annulled”.',
    'For force/fraud and pregnancy, mention the one-year and cohabitation bars.',
  ],
  revisionPoints: [
    's. 12: impotence, mental capacity, force/fraud, pregnancy by another.',
    'Valid until decree of nullity.',
    'Watch limitation and bars.',
  ],
} satisfies TopicContent
