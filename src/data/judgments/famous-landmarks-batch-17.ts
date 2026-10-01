import type { Judgment } from './types'

/**
 * Famous landmarks batch 17 — missing high-yield only (inventory-first).
 * DISPATCHER Phase 5 + ADD_FAMOUS_JUDGMENTS: no duplicates; verified citations.
 */

export const mohiniJain: Judgment = {
  id: 'mohini-jain-1992',
  caseName: 'Mohini Jain v. State of Karnataka',
  shortName: 'Mohini Jain',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1992,
  citation: '(1992) 3 SCC 666',
  bench: '2-Judge Bench',
  judges: ['Kuldip Singh, J.', 'R.M. Sahai, J.'],
  subject: 'Constitution',
  topics: ['Right to Education', 'Article 21', 'Capitation Fee', 'Private Colleges'],
  tags: ['AIBE', 'Judiciary', 'Education', 'Article 21', 'Capitation'],
  summary:
    'The Court held that the right to education is concomitant of the fundamental rights enshrined in Part III, and that charging capitation fee for admission to educational institutions is arbitrary and violative of Article 14. The judgment was an important precursor to Unni Krishnan and later Article 21A.',
  facts: [
    'A student challenged the demand of a large capitation fee as a condition for admission to a private medical college in Karnataka.',
    'The petition raised whether the State could permit commercialisation of education through capitation.',
  ],
  issues: [
    'Whether the right to education is part of the fundamental rights framework.',
    'Whether capitation-fee based admission is constitutional.',
  ],
  arguments: {
    appellant: [
      'Education is essential to life and dignity; capitation creates a wealth-based barrier and violates equality.',
    ],
    respondent: [
      'Private colleges need funds; regulation of fees is a policy matter for the State.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-21',
      article: 'Article 21',
      title: 'Protection of life and personal liberty',
      subjectSlug: 'constitution',
      topicId: 'fundamental-rights',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-14',
      article: 'Article 14',
      title: 'Equality before law',
      subjectSlug: 'constitution',
      topicId: 'fundamental-rights',
    },
  ],
  reasoning: [
    {
      heading: 'Education and fundamental rights',
      explanation:
        'The Court treated the right to education as flowing from the dignity and opportunity structure of Part III, rejecting a purely commercial model of professional education.',
    },
    {
      heading: 'Capitation as arbitrariness',
      explanation:
        'Demanding capitation fee as a price of admission was held to be arbitrary and discriminatory, favouring the rich over the meritorious poor.',
    },
  ],
  decision:
    'Capitation fee based admissions were condemned. The decision is read with Unni Krishnan (1993) and later T.M.A. Pai on private institutional autonomy.',
  holding:
    'Capitation fee for admission to educational institutions is unconstitutional; the right to education is integral to the fundamental-rights framework.',
  ratioDecidendi:
    'Commercialisation of education through capitation fees violates equality and is inconsistent with the constitutional commitment to education as part of a life of dignity.',
  relatedCases: [
    {
      caseName: 'Unni Krishnan, J.P. v. State of Andhra Pradesh',
      citation: '(1993) 1 SCC 645',
      relationship: 'Developed',
      judgmentId: 'unni-krishnan-1993',
    },
    {
      caseName: 'T.M.A. Pai Foundation v. State of Karnataka',
      citation: '(2002) 8 SCC 481',
      relationship: 'Later refined private education autonomy',
      judgmentId: 'tma-pai-2002',
    },
  ],
  examPoints: [
    'Capitation fee held unconstitutional.',
    'Education linked to Part III / dignity.',
    'Read with Unni Krishnan and Article 21A trajectory.',
  ],
  mcqs: [
    {
      id: 'mohini-jain-mcq-1',
      question: 'Mohini Jain primarily held that:',
      options: [
        'Capitation fees are mandatory for private colleges',
        'Capitation-fee admissions are unconstitutional',
        'Education is outside Article 21 entirely',
        'Only IITs may charge fees',
      ],
      correctIndex: 1,
      explanation: 'The Court condemned capitation-fee based admissions as arbitrary and unconstitutional.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1992) 3 SCC 666',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const nilabatiBehera: Judgment = {
  id: 'nilabati-behera-1993',
  caseName: 'Nilabati Behera v. State of Orissa',
  shortName: 'Nilabati Behera',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1993,
  citation: '(1993) 2 SCC 746',
  bench: '3-Judge Bench',
  judges: ['J.S. Verma, J.', 'Dr A.S. Anand, J.', 'N. Venkatachala, J.'],
  subject: 'Constitution',
  topics: ['Constitutional Tort', 'Article 21', 'Compensation', 'Custodial Death'],
  tags: ['AIBE', 'Judiciary', 'Article 21', 'Compensation', 'Custodial Death'],
  summary:
    'In a custodial death case, the Court awarded compensation under Article 32 and clarified that public law compensation for violation of fundamental rights is distinct from private tort damages, reinforcing the constitutional tort doctrine.',
  facts: [
    'A young man died in police custody; his mother petitioned the Supreme Court for justice and compensation.',
    'The State’s responsibility for custodial death and the nature of monetary relief under public law were in issue.',
  ],
  issues: [
    'Whether the Supreme Court can award compensation for violation of Article 21 in public law.',
    'How public-law compensation relates to private law tort claims.',
  ],
  arguments: {
    appellant: [
      'Custodial death is a clear violation of Article 21; the State must compensate in public law.',
    ],
    respondent: [
      'Compensation should be left to ordinary civil suits against individual officers.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-21',
      article: 'Article 21',
      title: 'Protection of life and personal liberty',
      subjectSlug: 'constitution',
      topicId: 'fundamental-rights',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-32',
      article: 'Article 32',
      title: 'Remedies for enforcement of fundamental rights',
      subjectSlug: 'constitution',
      topicId: 'art-32-226',
    },
  ],
  reasoning: [
    {
      heading: 'Public law compensation',
      explanation:
        'The Court held that monetary compensation can be awarded under Article 32/226 as a public-law remedy for established violation of fundamental rights, especially custodial violence.',
    },
    {
      heading: 'Distinct from private tort',
      explanation:
        'Such compensation does not displace the right to sue in tort; it is an additional constitutional response to State wrongdoing.',
    },
  ],
  decision:
    'Compensation was awarded to the petitioner. Nilabati Behera is a leading authority on constitutional tort and custodial death remedies.',
  holding:
    'Courts may award public-law compensation for violation of Article 21, including custodial death, independent of private tort claims.',
  ratioDecidendi:
    'Where the State violates fundamental rights, constitutional courts may grant compensatory relief in public law as an incident of enforcement under Articles 32 and 226.',
  relatedCases: [
    {
      caseName: 'D.K. Basu v. State of West Bengal',
      citation: '(1997) 1 SCC 416',
      relationship: 'Related (custodial safeguards)',
      judgmentId: 'dk-basu-1997',
    },
  ],
  examPoints: [
    'Constitutional tort / public-law compensation.',
    'Custodial death → Article 21 violation.',
    'Distinct from private law damages.',
  ],
  mcqs: [
    {
      id: 'nilabati-mcq-1',
      question: 'Nilabati Behera is primarily authority for:',
      options: [
        'Mandatory death penalty',
        'Public-law compensation for custodial death violating Article 21',
        'Abolition of police forces',
        'Private colleges’ fee autonomy',
      ],
      correctIndex: 1,
      explanation: 'The Court awarded constitutional compensation for custodial death as a public-law remedy.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1993) 2 SCC 746',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const rRajagopal: Judgment = {
  id: 'r-rajagopal-1994',
  caseName: 'R. Rajagopal v. State of Tamil Nadu',
  shortName: 'R. Rajagopal / Auto Shankar',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 1994,
  citation: '(1994) 6 SCC 632',
  bench: '2-Judge Bench',
  judges: ['B.P. Jeevan Reddy, J.', 'Suhas C. Sen, J.'],
  subject: 'Constitution',
  topics: ['Privacy', 'Freedom of Press', 'Prior Restraint', 'Article 21', 'Article 19'],
  tags: ['AIBE', 'Judiciary', 'Privacy', 'Press', 'Prior Restraint'],
  summary:
    'In the Auto Shankar publication controversy, the Court recognised the right to privacy as implicit in Article 21 and held that the State cannot impose prior restraint on publication of a biography based on public records, while clarifying remedies in damages for falsehood after publication.',
  facts: [
    'A magazine proposed to publish the life story of a condemned prisoner “Auto Shankar”, including alleged links with public officials.',
    'State authorities sought to restrain publication; the conflict between privacy, reputation, and press freedom arose.',
  ],
  issues: [
    'Whether a right to privacy exists under Article 21.',
    'Whether the State can pre-censor publication of material drawn from public records.',
  ],
  arguments: {
    appellant: [
      'Press freedom protects publication of matters of public record; prior restraint is exceptional.',
    ],
    respondent: [
      'Publication would violate privacy and defame officials; restraint is necessary.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-21',
      article: 'Article 21',
      title: 'Protection of life and personal liberty',
      subjectSlug: 'constitution',
      topicId: 'fundamental-rights',
    },
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-19',
      article: 'Article 19(1)(a)',
      title: 'Freedom of speech and expression',
      subjectSlug: 'constitution',
      topicId: 'fundamental-rights',
    },
  ],
  reasoning: [
    {
      heading: 'Privacy under Article 21',
      explanation:
        'The Court held that the right to privacy is implicit in the right to life and liberty under Article 21.',
    },
    {
      heading: 'Prior restraint and public records',
      explanation:
        'Once matter is in public records, the press may publish it; the State cannot generally impose prior restraint, though remedies for false allegations may follow in appropriate proceedings.',
    },
  ],
  decision:
    'Prior restraint was rejected in the terms framed; privacy was recognised as a constitutional value later amplified in Puttaswamy (2017).',
  holding:
    'Privacy is implicit in Article 21; the State cannot impose prior restraint on publication of material based on public records in the manner sought.',
  ratioDecidendi:
    'Freedom of the press and the right to privacy must be balanced; prior restraint on publishing public-record facts is presumptively impermissible, while privacy remains a constitutional interest against unlawful intrusion.',
  relatedCases: [
    {
      caseName: 'Justice K.S. Puttaswamy (Retd.) v. Union of India',
      citation: '(2017) 10 SCC 1',
      relationship: 'Developed (privacy as fundamental right)',
      judgmentId: 'puttaswamy-2017',
    },
    {
      caseName: 'Shreya Singhal v. Union of India',
      citation: '(2015) 5 SCC 1',
      relationship: 'Related (free speech)',
      judgmentId: 'shreya-singhal-2015',
    },
  ],
  examPoints: [
    'Privacy recognised under Article 21 (pre-Puttaswamy).',
    'Prior restraint on public-record publication rejected.',
    'Auto Shankar factual matrix.',
  ],
  mcqs: [
    {
      id: 'rajagopal-mcq-1',
      question: 'R. Rajagopal is important because it:',
      options: [
        'Abolished freedom of the press',
        'Recognised privacy under Article 21 and limited prior restraint on public-record publication',
        'Created the collegium',
        'Struck down Section 377 IPC',
      ],
      correctIndex: 1,
      explanation: 'The Court recognised privacy as implicit in Article 21 and constrained prior restraint regarding public records.',
    },
  ],
  source: {
    type: 'document',
    title: 'Supreme Court Cases (1994) 6 SCC 632',
    extractionMethod: 'manual',
    verified: true,
  },
  status: 'reviewed',
}

export const FAMOUS_LANDMARKS_BATCH_17: Judgment[] = [
  mohiniJain,
  nilabatiBehera,
  rRajagopal,
]
