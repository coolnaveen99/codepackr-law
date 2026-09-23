import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 12 of the Hindu Marriage Act, 1955 makes a marriage voidable (valid until annulled) on the grounds of non-consummation owing to the respondent’s impotence, contravention of s. 5(ii) (mental capacity), consent obtained by force or fraud, or pregnancy of the respondent by another person at the time of marriage. Strict statutory bars and limitation periods apply to the force/fraud and pregnancy grounds.',

  study: `Section 12(1) provides that any marriage solemnised, whether before or after the commencement of the Act, shall be voidable and may be annulled by a decree of nullity on any of the following grounds:

(a) that the marriage has not been consummated owing to the impotence of the respondent; or
(b) that the marriage is in contravention of the condition specified in clause (ii) of section 5; or
(c) that the consent of the petitioner (or of the guardian in marriage where previously required) was obtained by force or by fraud as to the nature of the ceremony or as to any material fact or circumstance concerning the respondent; or
(d) that the respondent was at the time of the marriage pregnant by some person other than the petitioner.

A voidable marriage is valid until it is annulled. Until the decree of nullity, the parties are treated as husband and wife.

Section 12(2) imposes mandatory bars:
• On the force/fraud ground (clause (c)): no petition is to be entertained if presented more than one year after the force ceased or the fraud was discovered, or if the petitioner has, with full consent, lived with the other party as husband or wife after the force ceased or the fraud was discovered.
• On the pregnancy ground (clause (d)): the petitioner must have been ignorant of the facts at the time of marriage, the petition must be presented within one year of the marriage, and marital intercourse must not have taken place with the consent of the petitioner after discovery of the pregnancy.

These bars are strict and frequently decisive.`,

  sections: [
    {
      id: 'hma-s-12-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      order: 1,
      content: [
        'Section 12 provides the statutory grounds on which a marriage that is otherwise valid may be annulled because of a defect existing at the time of formation.',
        'Legislative objective: allow the aggrieved party to escape a marriage that was vitiated at inception by impotence, lack of mental capacity, vitiated consent, or concealment of pregnancy by another, while protecting the stability of marriages that have been affirmed by cohabitation after discovery of the defect.',
        'Doctrinal foundation: a voidable marriage is valid and produces full marital status until a decree of nullity is passed. The decree is constitutive: it annuls the marriage from the date of the decree (subject to the limited legitimacy of children under s. 16).',
      ],
    },
    {
      id: 'hma-s-12-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      order: 2,
      content: [
        'Clause (a): non-consummation owing to the respondent’s impotence (at the time of marriage and continuing).',
        'Clause (b): contravention of s. 5(ii) (mental capacity / unsoundness of mind / recurrent attacks of insanity).',
        'Clause (c): consent obtained by force or by fraud as to the nature of the ceremony or a material fact concerning the respondent.',
        'Clause (d): respondent pregnant by another person at the time of marriage.',
        'Sub-section (2): mandatory one-year limitation and cohabitation bars for clauses (c) and (d). These bars are jurisdictional in character and must be strictly observed.',
      ],
    },
    {
      id: 'hma-s-12-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      order: 3,
      content: [
        'For clause (a): the marriage has not been consummated owing to the impotence of the respondent; the impotence existed at the time of marriage and continued.',
        'For clause (b): the marriage contravenes s. 5(ii).',
        'For clause (c): consent of the petitioner (or guardian) was obtained by force or by fraud of the specified character; petition within one year of cessation of force / discovery of fraud; no full-consent cohabitation after that point.',
        'For clause (d): respondent was pregnant by another at the time of marriage; petitioner was ignorant of the fact; petition within one year of the marriage; no marital intercourse with the petitioner’s consent after discovery.',
      ],
    },
    {
      id: 'hma-s-12-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)',
      order: 4,
      content: [
        'The petitioner bears the burden of proving the chosen ground on a preponderance of probabilities.',
        'Impotence is typically proved by medical evidence. Mental incapacity under s. 5(ii) likewise requires medical and other reliable evidence.',
        'Force or fraud must be specifically pleaded and proved; the character of the fraud (nature of ceremony or material fact concerning the respondent) is critical.',
        'Pregnancy by another is proved by medical evidence and by the petitioner’s own evidence of ignorance and of the absence of subsequent consensual intercourse.',
        'Electronic records (messages, medical reports) must satisfy BSA s. 63 where treated as primary electronic evidence.',
      ],
    },
    {
      id: 'hma-s-12-module-5',
      title: 'Procedural Roadmap, Competent Forum & Limitation Act Checkpoints',
      order: 5,
      content: [
        'Competent court: District Court / Family Court having jurisdiction under the HMA and the Family Courts Act.',
        'Petition for decree of nullity under s. 12. The statutory bars in s. 12(2) operate as conditions of maintainability for the force/fraud and pregnancy grounds.',
        'Children of a voidable marriage that is annulled receive the same limited legitimacy under s. 16 as children of a void marriage.',
        'Appeal lies under the ordinary appellate provisions applicable to Family Court / District Court decrees.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'hma',
      actName: 'Hindu Marriage Act, 1955',
      provisionId: 'hma-12',
      section: 's. 12',
      title: 'Voidable marriages',
    },
  ],

  examples: [
    {
      id: 'hma-s-12-ill-1',
      title: 'Illustration 1 — Impotence (voidable)',
      illustrationType: 'statutory',
      description:
        'The marriage has never been consummated because the respondent was impotent at the time of marriage and remains so. The petitioner files under s. 12(1)(a). The marriage is voidable and may be annulled. Until the decree it remains valid.',
    },
    {
      id: 'hma-s-12-ill-2',
      title: 'Illustration 2 — Force/fraud barred by cohabitation',
      illustrationType: 'fail-scenario',
      description:
        'The petitioner discovers that consent was obtained by fraud as to a material fact concerning the respondent, but thereafter continues to live with the respondent as husband and wife with full consent. A subsequent petition under s. 12(1)(c) is barred by s. 12(2).',
    },
  ],

  hypotheticals: [
    {
      id: 'hma-s-12-hypo',
      title: 'Chamber Practice Hypothetical — Pregnancy ground and the statutory bars',
      facts:
        'W marries H on 1 January 2024. On 1 June 2024 she discovers that H was already pregnant by another man at the time of the marriage. She continues to live with H for two further months after discovery and then files a petition under s. 12(1)(d) on 1 September 2024.',
      question:
        'Is the petition maintainable?',
      applicableLaw: 'HMA s. 12(1)(d) and s. 12(2).',
      analysis:
        '1. Ground: Pregnancy by another at the time of marriage is a recognised ground under clause (d).\n2. Knowledge: W was ignorant at the time of marriage.\n3. Limitation: The petition is presented within one year of the marriage.\n4. Intercourse bar: Marital intercourse after discovery with the petitioner’s consent is a statutory bar. On the facts W continued to live with H after discovery; if that included consensual intercourse, the bar applies.\n5. Consequence: If consensual intercourse after discovery is established, the petition is barred.',
      conclusion:
        'The petition is likely barred under s. 12(2) if marital intercourse took place with W’s consent after she discovered the pregnancy. The bars are strict.',
    },
  ],

  distinctions: [
    {
      id: 'hma-s-12-dist-1',
      title: 'Voidable (s. 12) vs Void (s. 11)',
      left: 's. 12 Voidable',
      right: 's. 11 Void',
      rows: [
        { point: 'Status before decree', left: 'Valid until annulled', right: 'Void ab initio' },
        { point: 'Grounds', left: 'Impotence, s. 5(ii), force/fraud, pregnancy by another', right: 'Living spouse, prohibited degrees, sapinda' },
        { point: 'Bars / limitation', left: 'Strict one-year and cohabitation bars for force/fraud and pregnancy', right: 'No statutory limitation of the same kind' },
        { point: 'Effect of decree', left: 'Annuls a marriage that was valid until the decree', right: 'Declaratory of existing nullity' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 'hma-s-12-trap-1',
      trap: 'A voidable marriage under s. 12 is the same as a void marriage under s. 11.',
      correction:
        'A voidable marriage is valid until it is annulled by a decree of nullity. A void marriage is a nullity from the beginning.',
    },
    {
      id: 'hma-s-12-trap-2',
      trap: 'The one-year period and cohabitation bars under s. 12(2) are directory.',
      correction:
        'They are mandatory conditions of maintainability for the force/fraud and pregnancy grounds. Non-compliance bars the petition.',
    },
  ],

  cases: [],

  questionsAndAnswers: [
    {
      id: 'hma-s-12-brief',
      draftingCategory: 'brief',
      question:
        'Explain voidable marriages under Section 12 of the Hindu Marriage Act, 1955, including the statutory bars.',
      answer: `I. ISSUE
On what grounds may a marriage be annulled under s. 12, and what bars apply?

II. GOVERNING RULE
A marriage is voidable on the grounds of impotence (non-consummation), contravention of s. 5(ii), force or fraud, or pregnancy by another. For force/fraud and pregnancy, s. 12(2) imposes one-year limitation and cohabitation / intercourse bars.

III. APPLICATION
Identify the ground → verify the absence of the statutory bars → if the bars are clear, the petition is maintainable and the marriage may be annulled.

IV. CONCLUSION
Section 12 provides limited, tightly conditioned grounds of annulment. The marriage remains valid until the decree.`,
      explanation: 'IRAC note on voidable marriages.',
    },
    {
      id: 'hma-s-12-submissions',
      draftingCategory: 'submissions',
      question:
        'Draft Written Submissions seeking annulment under HMA s. 12 on the ground of force or fraud, addressing the statutory bars.',
      answer: `I. STATEMENT OF FACTS
[Insert the nature of the force or fraud, the date of discovery, and the absence of subsequent full-consent cohabitation.]

II. STATUTORY SCHEME
Section 12(1)(c) makes the marriage voidable where consent was obtained by force or by fraud of the specified character. Section 12(2) bars the petition if it is presented more than one year after the force ceased or the fraud was discovered, or if the petitioner has lived with the other party with full consent after that point.

III. APPLICATION
The fraud/force is established. The petition is within one year of discovery. There has been no full-consent cohabitation after discovery. The bars therefore do not apply.

IV. PRAYER
[Decree of nullity under s. 12; consequential reliefs.]`,
      explanation: 'Senior Counsel submissions for annulment under s. 12.',
    },
  ],

  bareActPointers: [
    'HMA s. 12 (entire, including sub-s. (2) bars)',
    'HMA s. 5(ii)',
    'HMA s. 11 (contrast — void)',
    'HMA s. 16 (legitimacy of children)',
  ],

  examTips: [
    'Always state that a voidable marriage is valid until annulled.',
    'For force/fraud and pregnancy, expressly address the one-year and cohabitation bars.',
    'Contrast clearly with s. 11 (void ab initio).',
  ],

  revisionPoints: [
    's. 12: impotence, s. 5(ii), force/fraud, pregnancy by another.',
    'Valid until decree of nullity.',
    'Strict one-year and cohabitation bars for force/fraud and pregnancy.',
  ],

  relatedTopics: ['hma-s-11', 'hma-s-5', 'hma-s-13', 'hma-s-13b'],
}

export default content
