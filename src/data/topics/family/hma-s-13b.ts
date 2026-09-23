import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
Section 13B of the Hindu Marriage Act, 1955 provides for divorce by mutual consent. It is a no-fault route: both parties must agree that the marriage should be dissolved and must have been living separately for one year or more.

Introduction
Section 13B was inserted to allow spouses who have amicably decided to end the marriage to obtain a decree without proving a matrimonial offence under s. 13.

Meaning and concept
A petition for divorce under s. 13B may be presented by both parties together on the ground that they have been living separately for a period of one year or more, that they have not been able to live together, and that they have mutually agreed that the marriage should be dissolved.

Procedure (two-motion)
1. Joint petition (first motion).
2. After a statutory waiting / cooling-off period, a second motion. The court, on being satisfied of the truth of the averments and that consent was not obtained by force, fraud or undue influence, passes a decree of divorce.
3. The Supreme Court in Amardeep Singh v. Harveen Kaur (2017) held that the six-month cooling-off period under s. 13B(2) is directory and may be waived where the court is satisfied that the statutory conditions are met and further waiting would only prolong the agony.

Essential ingredients
- Joint petition by both parties.
- Living separately for one year or more.
- Inability to live together.
- Mutual agreement to dissolve the marriage.
- Free consent (not obtained by force, fraud or undue influence).

Current-law close
Cite Section 13B of the Hindu Marriage Act, 1955. Mention the one-year separation and the possibility of waiver of the cooling-off period after Amardeep Singh.`

export default {
  glance:
    'Section 13B HMA — divorce by mutual consent. Joint petition, living separately ≥ 1 year, mutual agreement. Cooling-off period is directory and can be waived (Amardeep Singh).',
  study,
  examples: [
    {
      id: 's13b-ex',
      title: 'Example — standard mutual consent',
      description:
        'Spouses have lived separately for 18 months, cannot reconcile, and jointly file under s. 13B. After the first motion the court, satisfied that consent is free, waives the remaining cooling-off and grants the decree on the second motion.',
    },
  ],
  hypotheticals: [
    {
      id: 's13b-hypo',
      title: 'Classroom problem',
      facts:
        'Parties lived separately for 14 months. At the second motion the wife withdraws her consent and alleges pressure.',
      question: 'Can the court still grant divorce under s. 13B?',
      applicableLaw: 'Section 13B of the Hindu Marriage Act, 1955.',
      analysis:
        'Mutual consent must continue till the decree. If consent is withdrawn and the court finds it was not free, or is no longer present, s. 13B fails. The parties may then pursue other remedies (e.g. s. 13 on fault grounds) if available.',
      conclusion: 'Consent must subsist; withdrawal can defeat s. 13B.',
    },
  ],
  distinctions: [
    {
      id: 's13b-dist',
      title: 's. 13B vs s. 13',
      left: 'Section 13B',
      right: 'Section 13',
      rows: [
        { point: 'Consent', left: 'Mutual and continuing', right: 'Not required' },
        { point: 'Fault', left: 'No fault need be proved', right: 'Statutory ground must be proved' },
        { point: 'Separation', left: '1 year living separately', right: 'Desertion ground requires 2 years' },
      ],
    },
  ],
  misconceptions: [
    { id: 's13b-m1', trap: 'Treating the six-month wait as mandatory in every case.', correction: 'Amardeep Singh: directory; can be waived in appropriate cases.' },
    { id: 's13b-m2', trap: 'Allowing a unilateral petition under s. 13B.', correction: 'The petition must be joint.' },
  ],
  questionsAndAnswers: [
    {
      id: 's13b-q-10',
      draftingCategory: 'brief',
      question: 'Explain divorce by mutual consent under Section 13B of the Hindu Marriage Act, 1955.',
      answer:
        'Introduction. Section 13B of the Hindu Marriage Act, 1955 provides for divorce by mutual consent.\n\nIngredients. Both parties must have been living separately for one year or more; they must not have been able to live together; and they must have mutually agreed that the marriage should be dissolved.\n\nProcedure. A joint petition is presented. After the statutory interval the parties move a second motion. The court, if satisfied of the truth of the statements and that consent was free, grants the decree.\n\nCooling-off. The period under s. 13B(2) is directory and may be waived where the court finds that the requirements are met and further delay is unnecessary (Amardeep Singh v. Harveen Kaur).\n\nConclusion. Emphasise joint petition, one-year separation, free consent, and the waiver principle.',
    },
    {
      id: 's13b-q-16',
      draftingCategory: 'submissions',
      question: 'Distinguish divorce under Section 13 from divorce under Section 13B of the Hindu Marriage Act, 1955. Discuss the cooling-off period under Section 13B.',
      answer:
        'Introduction. Sections 13 and 13B of the Hindu Marriage Act, 1955 are alternative routes to divorce.\n\nSection 13. Fault or status based. One spouse petitions against the other and must prove a ground such as adultery, cruelty, desertion (two years), conversion, unsound mind, etc. Consent of the respondent is not required.\n\nSection 13B. Consent based. Both parties jointly petition on the basis of living separately for one year or more, inability to live together, and mutual agreement to dissolve the marriage. No matrimonial offence need be proved.\n\nCooling-off under s. 13B(2). The statute provides for a period between the first and second motions. In Amardeep Singh v. Harveen Kaur (2017) the Supreme Court held that this period is directory, not mandatory, and may be waived when the court is satisfied that the statutory conditions are fulfilled and that waiting would only prolong the agony of the parties.\n\nWithdrawal of consent. Consent must continue until the decree; a genuine withdrawal can defeat the s. 13B petition.\n\nConclusion. Contrast fault vs consent, one-year vs two-year periods, joint vs unilateral petition, and state the Amardeep Singh waiver principle. Always name the Hindu Marriage Act, 1955.',
    },
  ],
  cases: [
    {
      name: 'Amardeep Singh v. Harveen Kaur',
      year: 2017,
      citation: '(2017) 8 SCC 746',
      holding: 'The six-month cooling-off period under s. 13B(2) is directory and can be waived by the court in appropriate cases.',
      relevance: 'Procedure under s. 13B.',
    },
  ],
  bareActPointers: ['Section 13B Hindu Marriage Act, 1955', 'Section 13 Hindu Marriage Act, 1955'],
  examTips: [
    'State the three ingredients: separation ≥ 1 year, inability to live together, mutual agreement.',
    'Cite Amardeep Singh for waiver of cooling-off.',
    'Consent must continue till the decree.',
    'Contrast with s. 13.',
  ],
  revisionPoints: [
    's. 13B = mutual consent divorce.',
    'Joint petition + 1 year separation.',
    'Cooling-off directory (Amardeep Singh).',
    'Consent must subsist.',
  ],
} satisfies TopicContent
