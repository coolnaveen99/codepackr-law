import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Section 8 consolidates the rules governing the amount of fine, imprisonment in default of payment of fine (or of community service), proportional termination on part payment, and related recovery mechanics. It is the successor to the cluster of IPC sections 63–70 and now expressly covers default of community service.',

  study: `Section 8 is the operational code for fines under the BNS. It performs five principal functions:

(1) Where no maximum sum is expressed, the fine is unlimited but must not be excessive.
(2) In every case in which a fine is imposed (whether the offence is punishable with imprisonment as well as fine, or with imprisonment or fine, or with fine only), the court may direct that in default of payment the offender shall suffer a further term of imprisonment; that term is in excess of any other imprisonment to which the offender may have been sentenced or may become liable under commutation.
(3) When the offence is punishable with imprisonment as well as fine, the default term shall not exceed one-fourth of the maximum term of imprisonment fixed for the offence.
(4) The imprisonment in default of fine (or of community service) may be of any description to which the offender might have been sentenced for the offence, except that when the offence is punishable only with fine or community service the default imprisonment must be simple and is subject to the monetary ceilings in sub-section (5).
(5) Default imprisonment terminates on full payment or levy of the fine, and terminates proportionally on part payment (illustrated in the section itself).

Community service (the new punishment under s. 4(f)) is expressly brought within the default regime: failure to perform community service can attract the same default-imprisonment consequences as failure to pay a fine.

Date-of-offence rule: for offences on or after 1 July 2024 cite BNS s. 8; the substance is continuous with the former IPC regime, with the addition of community-service default.`,

  sections: [
    {
      id: 's-8-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      order: 1,
      content: [
        'Section 8 consolidates and modernises the fine-related provisions that formerly occupied IPC sections 63 to 70. The principal innovation is the express inclusion of default of community service within the same machinery.',
        'Legislative objective: (a) prevent excessive fines; (b) give the court a calibrated power to enforce payment (or performance of community service) by the threat of additional imprisonment; (c) ensure that default imprisonment remains proportionate and terminates on payment or proportional part-payment.',
        'Doctrinal foundation: fine is a distinct punishment under s. 4(e). Imprisonment in default is not a substitute that extinguishes the fine; it is an additional coercive measure. The fine remains recoverable even after the default term has been served (subject to the recovery rules and any limitation applicable to the levy process).',
      ],
    },
    {
      id: 's-8-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      order: 2,
      content: [
        'Sub-section (1): unlimited fine where no sum is expressed, but “shall not be excessive”.',
        'Sub-section (2): power to order imprisonment in default of payment of fine in the two classes of offence described in clauses (a) and (b); the default term is in excess of any other imprisonment.',
        'Sub-section (3): ceiling of one-fourth of the maximum imprisonment fixed for the offence when the offence is punishable with imprisonment as well as fine.',
        'Sub-section (4): description of the default imprisonment (any description to which the offender might have been sentenced for the offence), subject to the special rule in sub-section (5).',
        'Sub-section (5): when the offence is punishable with fine or community service only, default imprisonment must be simple and is capped at two months (fine ≤ ₹5,000), four months (fine ≤ ₹10,000), or one year (any other case).',
        'Sub-section (6): termination of default imprisonment on full payment/levy, and proportional termination on part payment, with the statutory illustration.',
      ],
    },
    {
      id: 's-8-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      order: 3,
      content: [
        'For a lawful sentence of fine: (i) the offence section authorises fine; (ii) the amount is fixed by the court (or is unlimited but not excessive under sub-s. (1)).',
        'For a lawful order of imprisonment in default: (i) a fine (or community-service obligation) has been imposed; (ii) the court records a direction under sub-s. (2); (iii) the term respects the ceilings in sub-ss. (3) or (5); (iv) the description of imprisonment respects sub-ss. (4) and (5).',
        'For proportional release: the proportion of the fine paid or levied must be such that the term already suffered is not less than proportional to the unpaid balance (sub-s. (6)(b) and the Illustration).',
      ],
    },
    {
      id: 's-8-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)',
      order: 4,
      content: [
        'The amount of fine and the order of default imprisonment are part of the sentence. No separate burden under BSA ss. 104–106 arises for the application of s. 8 itself.',
        'Ability to pay may be considered by the court when fixing the quantum of fine; any material relied upon (income documents, electronic bank records, etc.) must satisfy ordinary admissibility rules, including BSA s. 63 where electronic records are primary evidence.',
        'Once the sentence is passed, non-payment is a matter of record; the prosecution does not have to re-prove the offence at the stage of enforcing the default term.',
      ],
    },
    {
      id: 's-8-module-5',
      title: 'Procedural Roadmap, Competent Forum & Limitation Act Checkpoints',
      order: 5,
      content: [
        'The direction under s. 8 is recorded in the judgment of sentence. Recovery of the fine proceeds under the fine-recovery machinery of the BNSS (and any applicable revenue-recovery laws).',
        'Appeal against the quantum of fine or the default term lies to the ordinary appellate forum under the BNSS together with any challenge to the conviction or the principal sentence.',
        'Limitation for levy of the fine is governed by the BNSS recovery provisions and any special limitation rules; the default-imprisonment order itself does not create a fresh limitation period for the fine.',
        'Competent court: the court that is authorised to pass the sentence for the offence.',
      ],
    },
  ],

  provisions: [
    {
      actId: 'bns',
      actName: 'Bharatiya Nyaya Sanhita, 2023',
      provisionId: 'bns-8',
      section: 's. 8',
      title: 'Amount of fine, liability in default of payment of fine, etc.',
    },
  ],

  examples: [
    {
      id: 's-8-ill-1',
      title: 'Illustration 1 — Proportional termination (statutory illustration adapted)',
      illustrationType: 'statutory',
      description:
        'A is sentenced to a fine of ₹1,000 and to four months’ imprisonment in default of payment. If ₹750 of the fine is paid or levied before the expiration of one month of the imprisonment, A is discharged as soon as the first month has expired. If ₹500 is paid or levied before the expiration of two months, A is discharged as soon as the two months are completed. The Illustration in s. 8(6) itself demonstrates the proportional-release rule.',
    },
    {
      id: 's-8-ill-2',
      title: 'Illustration 2 — Boundary defect (excessive fine)',
      illustrationType: 'fail-scenario',
      description:
        'An offence is punishable with fine only. The court imposes a fine of several crores on an indigent first offender for a trivial regulatory breach. Even though sub-section (1) speaks of an “unlimited” fine, the amount is challengeable as excessive. The appellate court may reduce it.',
    },
  ],

  hypotheticals: [
    {
      id: 's-8-hypo',
      title: 'Chamber Practice Hypothetical — Default of community service',
      facts:
        'F is convicted of a minor offence for which the court imposes community service under s. 4(f) in lieu of a fine. F fails to perform the ordered hours of community service.',
      question:
        'What coercive consequence is available under s. 8?',
      applicableLaw: 'BNS s. 8 (especially sub-ss. (4) and (5)); s. 4(f).',
      analysis:
        '1. Threshold: Community service is a punishment under s. 4(f) and is expressly brought within the default regime of s. 8.\n2. Ingredient verification: The court may direct imprisonment in default of community service; when the offence is punishable with fine or community service only, the default imprisonment must be simple and is subject to the ceilings in sub-s. (5).\n3. Consequence: The default term is additional and terminates on performance or on the proportional principles of sub-s. (6) adapted to the service obligation.',
      conclusion:
        'The court may lawfully order simple imprisonment in default of community service within the statutory ceilings. The power is the same machinery that applies to default of fine.',
    },
  ],

  distinctions: [
    {
      id: 's-8-dist-1',
      title: 'Fine vs Imprisonment in default of fine',
      left: 'Fine (s. 4(e) + s. 8)',
      right: 'Imprisonment in default (s. 8)',
      rows: [
        { point: 'Nature', left: 'Primary punishment', right: 'Additional coercive measure' },
        { point: 'Effect of serving default term', left: 'Fine remains recoverable', right: 'Does not extinguish the fine liability' },
        { point: 'Termination', left: 'On payment or levy', right: 'On full payment/levy or proportional part-payment (sub-s. (6))' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 's-8-trap-1',
      trap: 'Once the offender serves the default imprisonment, the fine is automatically wiped out.',
      correction:
        'Default imprisonment is in addition to the fine. The fine remains recoverable according to the recovery rules even after the default term has been undergone.',
    },
    {
      id: 's-8-trap-2',
      trap: 'The court may impose an unlimited fine without any restraint.',
      correction:
        'Sub-section (1) expressly provides that the fine “shall not be excessive”. Grossly disproportionate fines are open to appellate correction.',
    },
    {
      id: 's-8-trap-3',
      trap: 'Community service has no default consequence under s. 8.',
      correction:
        'Section 8 expressly brings default of community service within the same imprisonment-in-default regime that applies to non-payment of fine.',
    },
  ],

  cases: [],

  questionsAndAnswers: [
    {
      id: 's-8-brief',
      draftingCategory: 'brief',
      question:
        'Explain the scheme of fine and imprisonment in default under Section 8 of the Bharatiya Nyaya Sanhita, 2023.',
      answer: `I. ISSUE
How is the amount of fine fixed and what follows if it is not paid (or if community service is not performed)?

II. GOVERNING RULE
Sub-s. (1): unlimited but not excessive where no sum is expressed.
Sub-s. (2): power to order additional imprisonment in default.
Sub-ss. (3)–(5): ceilings and description of the default term (including the special simple-imprisonment rule for fine/community-service-only offences).
Sub-s. (6): termination on full or proportional part-payment.

III. APPLICATION
Fix a non-excessive fine → record a default direction within the statutory ceilings → enforce or release according to sub-s. (6).

IV. CONCLUSION
Default imprisonment is coercive and additional; the fine (or community-service obligation) survives.`,
      explanation: 'IRAC overview of s. 8.',
    },
    {
      id: 's-8-submissions',
      draftingCategory: 'submissions',
      question:
        'Draft Written Submissions on the proper quantum of fine and the limits of imprisonment in default under BNS s. 8, including the new community-service default.',
      answer: `I. STATEMENT OF FACTS
[Insert conviction, offence section, means of the offender, and any community-service order.]

II. STATUTORY SCHEME
Section 8 supplies the complete machinery for quantum, default, description, ceilings and proportional release. Community service is expressly included.

III. MANDATORY INGREDIENTS & CEILINGS
(a) Fine not excessive (sub-s. (1));
(b) Default term within one-fourth ceiling or the monetary ceilings of sub-s. (5);
(c) Description of default imprisonment compliant with sub-ss. (4) and (5).

IV. REBUTTAL
“Default term wipes out the fine” — contrary to the text and long-standing principle.
“Unlimited fine means no appellate control” — “shall not be excessive” is justiciable.

V. PRAYER
[Appropriate prayer for reduction of fine, suspension or reduction of default term, or clarification of community-service default.]`,
      explanation: 'Senior Counsel submissions on fine and default.',
    },
  ],

  bareActPointers: [
    'BNS s. 8 (entire)',
    'BNS s. 4(e) & (f) (fine and community service)',
    'IPC ss. 63–70 (historical)',
  ],

  examTips: [
    'Always mention that fine must not be excessive and that default imprisonment is additional, not a substitute.',
    'Note the new express coverage of community-service default.',
    'Recite the proportional-release rule and the statutory illustration.',
  ],

  revisionPoints: [
    'Fine unlimited but not excessive (sub-s. (1)).',
    'Default imprisonment is additional and terminates on payment or proportional part-payment.',
    'Special simple-imprisonment ceilings when offence is fine/community-service only (sub-s. (5)).',
    'Community service default is expressly covered.',
  ],

  relatedTopics: ['s-4', 's-7', 's-9'],
}

export default content
