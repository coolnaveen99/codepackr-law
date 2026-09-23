import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 13B of the Hindu Marriage Act, 1955 provides for divorce by mutual consent. Both parties must jointly petition on the grounds of living separately for one year or more, inability to live together, and mutual agreement to dissolve the marriage. The six-month cooling-off period under s. 13B(2) is directory and may be waived (Amardeep Singh v. Harveen Kaur). Consent must subsist until the decree.',

  study: `Section 13B was inserted by the Marriage Laws (Amendment) Act, 1976 to provide a no-fault, consent-based route to divorce for Hindus.

Sub-section (1): A joint petition may be presented by both parties on the ground that they have been living separately for a period of one year or more, that they have not been able to live together, and that they have mutually agreed that the marriage should be dissolved.

Sub-section (2): On the motion of both parties made not earlier than six months after the presentation of the petition and not later than eighteen months after that date, if the petition has not been withdrawn, the Court shall, on being satisfied after hearing the parties and making such inquiry as it thinks fit that a marriage has been solemnized and that the averments are true, pass a decree of divorce.

The Supreme Court in Amardeep Singh v. Harveen Kaur (2017) 8 SCC 746 held that the six-month period is directory, not mandatory, and may be waived where the Court is satisfied that the statutory conditions are fulfilled and that further waiting would only prolong the agony of the parties. Subsequent decisions have confirmed that the one-year separation period under s. 13B(1) can, in appropriate cases, also be considered for waiver in conjunction with the proviso to s. 14(1).

Consent must continue until the decree is passed. A genuine withdrawal of consent by either party before the final decree defeats the s. 13B petition.

Section 13B is distinct from the fault-based grounds under s. 13. It requires no proof of matrimonial offence.`,

  sections: [
    {
      id: 'hma-s-13b-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      order: 1,
      content: [
        'Section 13B was inserted by Act 68 of 1976 to enable spouses who have irretrievably broken down their marriage and who mutually agree to separate to obtain a clean, no-fault decree without the acrimony of contested proceedings under s. 13.',
        'Legislative objective: reduce collusive and prolonged litigation, respect party autonomy where both spouses have freely decided to end the marriage, and provide a structured two-motion procedure with a cooling-off interval.',
        'Doctrinal foundation: mutual consent divorce rests on the continuing free consent of both parties. The Court retains a supervisory role to verify that the marriage was solemnized, that the averments are true, and that consent was not obtained by force, fraud or undue influence. The cooling-off period is a safeguard, not an inflexible barrier (Amardeep Singh).',
      ],
    },
    {
      id: 'hma-s-13b-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      order: 2,
      content: [
        'Sub-section (1) — three cumulative grounds: (i) living separately for one year or more; (ii) not able to live together; (iii) mutual agreement that the marriage should be dissolved. The petition must be joint.',
        'Sub-section (2) — second motion window: not earlier than six months and not later than eighteen months after the first motion. If the petition is not withdrawn, the Court, after hearing and inquiry, passes the decree if satisfied of the truth of the averments and that a marriage was solemnized.',
        'Cooling-off: the six-month interval is directory and may be waived (Amardeep Singh). The one-year separation period under sub-s. (1) has also been held capable of waiver in appropriate cases by reference to the proviso to s. 14(1).',
        'Consent must remain free and continuing until the decree. Withdrawal of consent before the decree defeats the petition.',
      ],
    },
    {
      id: 'hma-s-13b-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      order: 3,
      content: [
        '1. Joint petition by both parties to the marriage.',
        '2. The parties have been living separately for a period of one year or more (subject to any lawful waiver).',
        '3. They have not been able to live together.',
        '4. They have mutually agreed that the marriage should be dissolved.',
        '5. Consent is free (not obtained by force, fraud or undue influence) and continues until the decree.',
        '6. The Court is satisfied, after hearing and inquiry, that a marriage was solemnized and that the averments are true.',
      ],
    },
    {
      id: 'hma-s-13b-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)',
      order: 4,
      content: [
        'The parties must satisfy the Court of the truth of the averments in the joint petition. The standard is the ordinary civil standard of proof on a preponderance of probabilities.',
        'Living separately, inability to live together, and mutual agreement are primarily established by the pleadings, affidavits and oral evidence of the parties. Documentary evidence (rent agreements, correspondence, settlement deeds) may be relied upon and must satisfy ordinary admissibility rules, including BSA s. 63 for electronic records.',
        'If one party alleges that consent was obtained by force, fraud or undue influence, that party bears the burden of establishing the vitiating circumstance.',
      ],
    },
    {
      id: 'hma-s-13b-module-5',
      title: 'Procedural Roadmap, Competent Forum & Limitation Act Checkpoints',
      order: 5,
      content: [
        'Competent court: the District Court (Family Court where established) having jurisdiction under the HMA / Family Courts Act.',
        'Procedure: joint first-motion petition → cooling-off (or waiver) → joint second motion → inquiry and decree.',
        'Withdrawal: either party may withdraw consent before the decree; a genuine withdrawal defeats s. 13B.',
        'Appeal: a decree under s. 13B is appealable under the ordinary appellate provisions applicable to Family Court / District Court decrees.',
        'No separate limitation period beyond the statutory windows in s. 13B(2) itself.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'hma',
      actName: 'Hindu Marriage Act, 1955',
      provisionId: 'hma-13b',
      section: 's. 13B',
      title: 'Divorce by mutual consent',
    },
  ],

  examples: [
    {
      id: 'hma-s-13b-ill-1',
      title: 'Illustration 1 — Standard mutual-consent decree with waiver',
      illustrationType: 'statutory',
      description:
        'Spouses have lived separately for eighteen months, have reached a comprehensive settlement on maintenance and property, and jointly file under s. 13B. At the second-motion stage the Court, satisfied that reconciliation is impossible and that consent is free, waives the remaining cooling-off period under Amardeep Singh and grants the decree.',
    },
    {
      id: 'hma-s-13b-ill-2',
      title: 'Illustration 2 — Withdrawal of consent (boundary)',
      illustrationType: 'fail-scenario',
      description:
        'After the first motion the wife withdraws her consent and states that she was pressured into signing the petition. The Court finds that free consent no longer exists. The s. 13B petition fails. The parties may pursue other remedies (including contested divorce under s. 13) if available.',
    },
  ],

  hypotheticals: [
    {
      id: 'hma-s-13b-hypo',
      title: 'Chamber Practice Hypothetical — Waiver of cooling-off and continuing consent',
      facts:
        'P and Q have lived separately for sixteen months. They jointly filed a s. 13B petition and simultaneously applied for waiver of the six-month period, stating that all issues of maintenance, custody and property have been settled by a written agreement and that there is no possibility of reconciliation. At the hearing for the second motion Q states that she now wishes to reconcile.',
      question:
        'Can the Court still grant the decree under s. 13B?',
      applicableLaw:
        'HMA s. 13B; Amardeep Singh v. Harveen Kaur (2017) 8 SCC 746; principles of free and continuing consent.',
      analysis:
        '1. Threshold: The statutory ingredients of living separately, inability to live together and initial mutual agreement appear to be met.\n2. Waiver: The Court has discretion under Amardeep Singh to waive the cooling-off period if satisfied that further waiting is pointless.\n3. Continuing consent: Consent must subsist until the decree. Q’s statement that she now wishes to reconcile is a withdrawal of consent.\n4. Consequence: Once free consent is withdrawn, the foundation of s. 13B disappears. The Court cannot pass a decree against the will of one party under this section.',
      conclusion:
        'The decree cannot be granted. Withdrawal of consent before the final decree defeats the s. 13B petition.',
    },
  ],

  distinctions: [
    {
      id: 'hma-s-13b-dist-1',
      title: 's. 13B (mutual consent) vs s. 13 (fault / status grounds)',
      left: 's. 13B',
      right: 's. 13',
      rows: [
        { point: 'Nature', left: 'No-fault, consent-based', right: 'Fault or status-based' },
        { point: 'Petition', left: 'Joint by both parties', right: 'Usually unilateral' },
        { point: 'Proof required', left: 'Living separately ≥ 1 year, inability to live together, mutual agreement, free consent', right: 'Statutory ground (cruelty, desertion, adultery, etc.) must be proved' },
        { point: 'Consent of respondent', left: 'Essential and must continue', right: 'Not required' },
        { point: 'Cooling-off', left: 'Six-month period (directory; waivable)', right: 'None under s. 13' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 'hma-s-13b-trap-1',
      trap: 'The six-month cooling-off period under s. 13B(2) is mandatory in every case.',
      correction:
        'Amardeep Singh held that the period is directory and may be waived where the Court is satisfied that the conditions are met and further waiting would only prolong the agony.',
    },
    {
      id: 'hma-s-13b-trap-2',
      trap: 'A unilateral petition can be filed under s. 13B.',
      correction:
        'The petition must be presented by both parties together. A unilateral petition is not maintainable under s. 13B.',
    },
    {
      id: 'hma-s-13b-trap-3',
      trap: 'Once the first motion is filed, consent cannot be withdrawn.',
      correction:
        'Consent must continue until the decree is passed. A genuine withdrawal before the decree defeats the petition.',
    },
  ],

  cases: [
    {
      name: 'Amardeep Singh v. Harveen Kaur',
      year: 2017,
      citation: '(2017) 8 SCC 746',
      court: 'Supreme Court of India',
      bench: '2-Judge Bench',
      facts: 'Parties sought waiver of the statutory six-month period under s. 13B(2) after having lived separately for a long time and settled all issues.',
      issue: 'Whether the six-month cooling-off period under s. 13B(2) is mandatory or directory.',
      ratioDecidendi:
        'The statutory waiting period of at least six months mentioned in Section 13B(2) is not mandatory but directory. The Court may exercise its discretion to waive the requirement having regard to the facts and circumstances of the case if there is no possibility of reconciliation and the waiting period would serve no purpose except to prolong the agony of the parties.',
      holding: 'Cooling-off period held directory and waived on the facts.',
      relevance:
        'Binding authority on the power of the Court to waive the six-month interval under s. 13B(2). Must be cited in every mutual-consent petition seeking early decree.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 'hma-s-13b-brief',
      draftingCategory: 'brief',
      question:
        'Explain divorce by mutual consent under Section 13B of the Hindu Marriage Act, 1955, including the cooling-off period and the principle of continuing consent.',
      answer: `I. ISSUE
What are the ingredients and procedure for divorce by mutual consent under s. 13B, and when may the cooling-off period be waived?

II. GOVERNING RULE
Joint petition on living separately ≥ 1 year, inability to live together, and mutual agreement. Second motion after the statutory interval (directory; waivable under Amardeep Singh). Consent must remain free and continuing until the decree.

III. APPLICATION
Verify joint petition, separation, free consent, and whether waiver is justified. If consent is withdrawn before the decree, s. 13B fails.

IV. CONCLUSION
s. 13B is a no-fault, consent-based route. The cooling-off period is a safeguard that the Court may relax when further waiting is pointless; consent must subsist.`,
      explanation: 'IRAC chamber assessment of s. 13B.',
    },
    {
      id: 'hma-s-13b-submissions',
      draftingCategory: 'submissions',
      question:
        'Draft comprehensive Written Submissions on a petition under HMA s. 13B seeking waiver of the cooling-off period and addressing the requirement of continuing free consent.',
      answer: `I. STATEMENT OF FACTS & PROCEDURAL PROVENANCE
[Insert dates of marriage, separation, first motion, settlement terms, and the application for waiver.]

II. STATUTORY SCHEME
Section 13B(1) requires living separately for one year or more, inability to live together, and mutual agreement. Section 13B(2) provides the second-motion window. Amardeep Singh holds the six-month interval directory and waivable.

III. SATISFACTION OF MANDATORY INGREDIENTS
(a) Joint petition;
(b) Separation ≥ 1 year (or lawful waiver);
(c) Inability to live together;
(d) Free and continuing mutual agreement;
(e) No force, fraud or undue influence.

IV. WAIVER OF COOLING-OFF
The parties have settled all ancillary issues; reconciliation is impossible; further waiting would only prolong agony. Waiver is therefore justified under Amardeep Singh.

V. CONTINUING CONSENT
Both parties reaffirm consent at the second-motion hearing. Any subsequent withdrawal would defeat the petition, but none has occurred.

VI. PRAYER
[Decree of divorce under s. 13B with effect from the date of the decree; waiver of the remaining cooling-off period.]`,
      explanation: 'Senior Counsel standard written submissions for a mutual-consent divorce with waiver.',
    },
  ],

  bareActPointers: [
    'HMA s. 13B (entire)',
    'HMA s. 13 (contrast — fault grounds)',
    'HMA s. 14 (proviso — related to early petitions)',
    'Amardeep Singh v. Harveen Kaur (2017) 8 SCC 746',
  ],

  examTips: [
    'Always state the three ingredients of s. 13B(1) and the continuing-consent rule.',
    'Cite Amardeep Singh for the directory character of the six-month period.',
    'Contrast clearly with s. 13 (fault vs consent, unilateral vs joint, proof vs agreement).',
  ],

  revisionPoints: [
    's. 13B = mutual consent divorce; joint petition required.',
    'Living separately ≥ 1 year + inability to live together + mutual agreement.',
    'Cooling-off period is directory and waivable (Amardeep Singh).',
    'Consent must continue until the decree; withdrawal defeats the petition.',
  ],

  relatedTopics: ['hma-s-13', 'hma-s-9', 'hma-s-11', 'hma-s-12'],
}

export default content
