import type { Judgment } from './types'

/** Batch 19 — missing high-yield landmarks across non-excluded legal subjects. */

export const mohoriBibee: Judgment = {
  id: 'mohori-bibee-1903',
  caseName: 'Mohori Bibee v. Dharmodas Ghose',
  shortName: 'Mohori Bibee',
  court: 'Privy Council',
  jurisdiction: 'Contract Law',
  year: 1903,
  citation: 'ILR (1903) 30 Cal 539 (PC)',
  subject: 'Contract',
  topics: ['Minor Agreements', 'Capacity to Contract', 'Section 11', 'Section 68'],
  tags: ['AIBE', 'Judiciary', 'Contract', 'Minor'],
  summary: 'The Privy Council held that a minor is not competent to contract under Section 11 of the Indian Contract Act, 1872 and that an agreement entered into by a minor is void, not merely voidable.',
  facts: [
    'Dharmodas Ghose, a minor, executed a mortgage in favour of a moneylender.',
    'The lender knew of the minor’s age and sought enforcement of the transaction.'
  ],
  issues: [
    'Whether a minor can be a contracting party under Section 11 of the Contract Act.',
    'Whether a minor’s agreement is voidable or void ab initio.'
  ],
  arguments: {
    appellant: ['The transaction should be enforced according to the instrument and restitution principles.'],
    respondent: ['A minor lacks contractual capacity and the transaction cannot create contractual liability.']
  },
  provisions: [
    {
      actId: 'contract-act-1872',
      actName: 'Indian Contract Act, 1872',
      provisionId: 's-11',
      section: 'Section 11',
      title: 'Who are competent to contract',
      subjectSlug: 'contract'
    },
    {
      actId: 'contract-act-1872',
      actName: 'Indian Contract Act, 1872',
      provisionId: 's-68',
      section: 'Section 68',
      title: 'Claim for necessaries supplied to a person incapable of contracting',
      subjectSlug: 'contract'
    }
  ],
  reasoning: [
    {
      heading: 'Capacity is foundational',
      explanation: 'Section 11 makes majority, sound mind and absence of statutory disqualification conditions of contractual competence.'
    },
    {
      heading: 'Minor agreement',
      explanation: 'Because a minor is not competent to contract, the purported agreement cannot be treated as a valid contract capable of enforcement against the minor.'
    }
  ],
  decision: 'The minor’s mortgage transaction could not be enforced as a contractual obligation against him.',
  holding: 'An agreement entered into by a minor is void because the minor is not competent to contract under Section 11.',
  ratioDecidendi: 'Contractual capacity is a statutory prerequisite; a minor’s agreement does not become a valid contract merely because the other party has acted on it.',
  relatedCases: [],
  examPoints: ['Section 11 capacity.', 'Minor agreement is void, not merely voidable.', 'Distinguish Section 68 restitution for necessaries from contractual liability.'],
  mcqs: [
    {
      id: 'mohori-mcq-1',
      question: 'Mohori Bibee v. Dharmodas Ghose is the leading authority that a minor’s agreement is:',
      options: ['Voidable at the minor’s option', 'Void ab initio', 'Always enforceable', 'Valid if consideration exists'],
      correctIndex: 1,
      explanation: 'The Privy Council treated the minor as incompetent to contract under Section 11.'
    }
  ],
  source: { type: 'document', title: 'ILR (1903) 30 Cal 539 (PC)', extractionMethod: 'manual', verified: true },
  status: 'reviewed'
}

export const sarlaMudgal: Judgment = {
  id: 'sarla-mudgal-1995',
  caseName: 'Sarla Mudgal, President, Kalyani v. Union of India',
  shortName: 'Sarla Mudgal',
  court: 'Supreme Court of India',
  jurisdiction: 'Family Law',
  year: 1995,
  citation: '(1995) 3 SCC 635',
  subject: 'Family Law',
  topics: ['Conversion and Marriage', 'Bigamy', 'Hindu Marriage Act', 'Personal Law'],
  tags: ['AIBE', 'Judiciary', 'Family', 'Marriage', 'Bigamy'],
  summary: 'The Supreme Court considered whether a Hindu husband whose first marriage remained subsisting could convert to Islam and contract a second marriage without first dissolving the Hindu marriage.',
  facts: [
    'The petition concerned Hindu husbands who converted to Islam after contracting a first Hindu marriage and then sought to marry again.',
    'The validity of the second marriage and exposure to bigamy liability were examined.'
  ],
  issues: [
    'Whether conversion to Islam automatically dissolves a subsisting Hindu marriage.',
    'Whether a second marriage during subsistence of the first can attract Section 494 IPC.'
  ],
  arguments: {
    appellant: ['Conversion was relied upon as a basis for the second marriage.'],
    respondent: ['Conversion cannot be used to defeat obligations created by a subsisting Hindu marriage.']
  },
  provisions: [
    {
      actId: 'hindu-marriage-act-1955',
      actName: 'Hindu Marriage Act, 1955',
      provisionId: 's-17',
      section: 'Section 17',
      title: 'Punishment of bigamy',
      subjectSlug: 'family'
    }
  ],
  reasoning: [
    {
      heading: 'Conversion does not dissolve the first marriage',
      explanation: 'The Court held that conversion by one spouse does not by itself dissolve a marriage governed by the Hindu Marriage Act.'
    },
    {
      heading: 'Second marriage and bigamy',
      explanation: 'Where the first marriage remains legally subsisting, a subsequent marriage may attract the statutory consequences of bigamy.'
    }
  ],
  decision: 'The Court treated the first marriage as subsisting and rejected the use of conversion as a route to contract a second marriage while the first remained undissolved.',
  holding: 'Conversion to another religion does not by itself dissolve a subsisting Hindu marriage.',
  ratioDecidendi: 'A spouse cannot use unilateral conversion to circumvent the statutory conditions governing dissolution of a subsisting Hindu marriage.',
  relatedCases: [],
  examPoints: ['Section 17 HMA.', 'Conversion does not automatically dissolve the first marriage.', 'Bigamy and personal-law interaction.'],
  mcqs: [
    {
      id: 'sarla-mudgal-mcq-1',
      question: 'Sarla Mudgal principally concerns:',
      options: ['Adoption by a minor', 'Conversion followed by a second marriage during subsistence of the first', 'Guardianship of property', 'Maintenance after divorce only'],
      correctIndex: 1,
      explanation: 'The case addresses conversion and the validity/consequences of a second marriage while the first subsists.'
    }
  ],
  source: { type: 'document', title: '(1995) 3 SCC 635', extractionMethod: 'manual', verified: true },
  status: 'reviewed'
}

export const balco: Judgment = {
  id: 'balco-2012',
  caseName: 'Bharat Aluminium Co. v. Kaiser Aluminium Technical Services Inc.',
  shortName: 'BALCO',
  court: 'Supreme Court of India',
  jurisdiction: 'Arbitration',
  year: 2012,
  citation: '(2012) 9 SCC 552',
  subject: 'ADR',
  topics: ['Seat of Arbitration', 'Part I and Part II', 'Territoriality', 'Arbitration Act 1996'],
  tags: ['AIBE', 'Judiciary', 'Arbitration', 'Seat'],
  summary: 'The Constitution Bench established the territoriality approach to the Arbitration and Conciliation Act, 1996, holding that Part I is generally tied to arbitrations seated in India and giving juridical significance to the chosen seat.',
  facts: [
    'The dispute concerned the extent of Indian court jurisdiction over an arbitration connected with a foreign seat.',
    'The Court reconsidered earlier jurisprudence on the territorial reach of Part I of the 1996 Act.'
  ],
  issues: [
    'Whether Part I applies to arbitrations seated outside India.',
    'What legal significance attaches to the juridical seat of arbitration.'
  ],
  arguments: {
    appellant: ['Indian courts should retain supervisory jurisdiction despite a foreign seat.'],
    respondent: ['The statute adopts territoriality and court supervision follows the juridical seat.']
  },
  provisions: [
    {
      actId: 'arbitration-and-conciliation-act-1996',
      actName: 'Arbitration and Conciliation Act, 1996',
      provisionId: 's-2',
      section: 'Section 2',
      title: 'Scope and territorial application of the Act',
      subjectSlug: 'adr'
    },
    {
      actId: 'arbitration-and-conciliation-act-1996',
      actName: 'Arbitration and Conciliation Act, 1996',
      provisionId: 's-20',
      section: 'Section 20',
      title: 'Place of arbitration',
      subjectSlug: 'adr'
    }
  ],
  reasoning: [
    {
      heading: 'Territoriality',
      explanation: 'The statutory scheme links Part I to arbitrations seated in India, subject to the statutory framework and party choice recognised by the Act.'
    },
    {
      heading: 'Seat versus venue',
      explanation: 'The juridical seat determines the supervisory court framework, whereas a hearing venue may be chosen for convenience without necessarily becoming the legal seat.'
    }
  ],
  decision: 'The Constitution Bench adopted the territoriality approach and clarified the relationship between the arbitral seat and Indian court supervision.',
  holding: 'The juridical seat is central to determining the supervisory court framework, and Part I is generally territorially connected to India-seated arbitration.',
  ratioDecidendi: 'Party choice of juridical seat allocates supervisory jurisdiction and the Arbitration Act must be read according to its territorial structure.',
  relatedCases: [],
  examPoints: ['Seat versus venue.', 'Territoriality of Part I.', 'BALCO is the leading pre-2015 arbitration-seat authority.'],
  mcqs: [
    {
      id: 'balco-mcq-1',
      question: 'BALCO is principally associated with:',
      options: ['Criminal sentencing', 'Seat and territoriality of arbitration under the 1996 Act', 'Copyright ownership', 'Hindu succession'],
      correctIndex: 1,
      explanation: 'BALCO is the leading Constitution Bench decision on the territorial approach and juridical seat.'
    }
  ],
  source: { type: 'document', title: '(2012) 9 SCC 552', extractionMethod: 'manual', verified: true },
  status: 'reviewed'
}

export const novartis: Judgment = {
  id: 'novartis-2013',
  caseName: 'Novartis AG v. Union of India',
  shortName: 'Novartis',
  court: 'Supreme Court of India',
  jurisdiction: 'Intellectual Property Rights',
  year: 2013,
  citation: '(2013) 6 SCC 1',
  subject: 'IPR',
  topics: ['Patentability', 'Section 3(d)', 'Evergreening', 'Pharmaceutical Patents'],
  tags: ['AIBE', 'Judiciary', 'Patent', 'Section 3(d)', 'IPR'],
  summary: 'The Supreme Court interpreted Section 3(d) of the Patents Act, 1970 in the context of a pharmaceutical patent application and emphasised that a new form of a known substance must satisfy the statutory requirement of enhanced therapeutic efficacy.',
  facts: [
    'Novartis sought patent protection for a beta-crystalline form of imatinib mesylate.',
    'The application was rejected under the statutory patentability framework, including Section 3(d), and the dispute reached the Supreme Court.'
  ],
  issues: [
    'Whether the claimed crystalline form satisfied Section 3(d).',
    'How enhanced efficacy is to be assessed for a new form of a known substance.'
  ],
  arguments: {
    appellant: ['The claimed form had improved properties and satisfied patentability requirements.'],
    respondent: ['Section 3(d) requires enhanced therapeutic efficacy, not merely advantageous physicochemical properties.']
  },
  provisions: [
    {
      actId: 'patents-act-1970',
      actName: 'Patents Act, 1970',
      provisionId: 's-3d',
      section: 'Section 3(d)',
      title: 'What are not inventions',
      subjectSlug: 'ipr'
    }
  ],
  reasoning: [
    {
      heading: 'Enhanced therapeutic efficacy',
      explanation: 'For the relevant pharmaceutical new-form claim, the statutory standard focuses on enhanced therapeutic efficacy rather than every form of increased physical or chemical property.'
    },
    {
      heading: 'Anti-evergreening function',
      explanation: 'Section 3(d) operates as a substantive patentability filter against extending monopoly protection to new forms of known substances without the required efficacy improvement.'
    }
  ],
  decision: 'The patent claim was rejected under Section 3(d).',
  holding: 'For a new form of a known pharmaceutical substance falling within Section 3(d), enhanced therapeutic efficacy is the relevant statutory requirement.',
  ratioDecidendi: 'Section 3(d) must be applied as enacted and requires the claimed new form to cross the statutory threshold of enhanced therapeutic efficacy.',
  relatedCases: [],
  examPoints: ['Section 3(d).', 'Enhanced therapeutic efficacy.', 'Pharmaceutical patentability and evergreening.'],
  mcqs: [
    {
      id: 'novartis-mcq-1',
      question: 'Novartis AG v. Union of India is the leading case on:',
      options: ['Patent opposition only', 'Section 3(d) and enhanced therapeutic efficacy', 'Trademark passing off', 'Copyright fair dealing'],
      correctIndex: 1,
      explanation: 'The Supreme Court’s decision centred on the Section 3(d) requirement for pharmaceutical patentability.'
    }
  ],
  source: { type: 'document', title: '(2013) 6 SCC 1', extractionMethod: 'manual', verified: true },
  status: 'reviewed'
}

export const swissRibbons: Judgment = {
  id: 'swiss-ribbons-2019',
  caseName: 'Swiss Ribbons Pvt. Ltd. v. Union of India',
  shortName: 'Swiss Ribbons',
  court: 'Supreme Court of India',
  jurisdiction: 'Company / Insolvency Law',
  year: 2019,
  citation: '(2019) 4 SCC 17',
  subject: 'Company Law',
  topics: ['IBC 2016', 'Constitutionality', 'Financial Creditors', 'Operational Creditors', 'Insolvency Resolution'],
  tags: ['AIBE', 'Judiciary', 'IBC', 'Company Law', 'Insolvency'],
  summary: 'The Supreme Court upheld the constitutional validity of key provisions of the Insolvency and Bankruptcy Code, 2016, including the statutory distinction between financial and operational creditors and the insolvency-resolution framework.',
  facts: [
    'The petitioners challenged several provisions of the Insolvency and Bankruptcy Code, 2016 on constitutional grounds.',
    'The challenge included the differential treatment of financial and operational creditors and the operation of the resolution process.'
  ],
  issues: [
    'Whether the challenged IBC provisions violate constitutional equality guarantees.',
    'Whether the statutory distinction between financial and operational creditors is legally intelligible.'
  ],
  arguments: {
    appellant: ['Differential treatment under the IBC was challenged as arbitrary and discriminatory.'],
    respondent: ['Financial and operational creditors have materially different roles and risk profiles within insolvency proceedings.']
  },
  provisions: [
    {
      actId: 'insolvency-and-bankruptcy-code-2016',
      actName: 'Insolvency and Bankruptcy Code, 2016',
      provisionId: 's-7',
      section: 'Section 7',
      title: 'Initiation of corporate insolvency resolution process by financial creditor',
      subjectSlug: 'company'
    },
    {
      actId: 'insolvency-and-bankruptcy-code-2016',
      actName: 'Insolvency and Bankruptcy Code, 2016',
      provisionId: 's-9',
      section: 'Section 9',
      title: 'Application by operational creditor',
      subjectSlug: 'company'
    }
  ],
  reasoning: [
    {
      heading: 'Different creditor classes',
      explanation: 'The Court found an intelligible basis for distinguishing financial creditors from operational creditors, including differences in the nature of their contracts and financial exposure.'
    },
    {
      heading: 'Resolution rather than mere recovery',
      explanation: 'The Court recognised the Code’s emphasis on resolution of the corporate debtor and preservation of value rather than treating insolvency law as a simple debt-recovery mechanism.'
    }
  ],
  decision: 'The principal constitutional challenges were rejected and the challenged provisions were upheld, subject to the specific holdings in the judgment.',
  holding: 'The IBC’s differentiated treatment of financial and operational creditors has a rational statutory basis, and the Code is oriented toward resolution and value preservation.',
  ratioDecidendi: 'Constitutional validity depends on the statutory purpose and intelligible differences between creditor classes; the IBC establishes a resolution framework rather than a conventional recovery forum.',
  relatedCases: [],
  examPoints: ['Financial vs operational creditors.', 'IBC as resolution legislation.', 'Constitutional challenge to IBC provisions.'],
  mcqs: [
    {
      id: 'swiss-ribbons-mcq-1',
      question: 'Swiss Ribbons is a leading authority on:',
      options: ['Patent infringement', 'Constitutional validity and structure of the IBC', 'Minor contracts', 'Arbitration seat'],
      correctIndex: 1,
      explanation: 'The case upheld key IBC provisions and addressed the statutory distinction between financial and operational creditors.'
    }
  ],
  source: { type: 'document', title: '(2019) 4 SCC 17', extractionMethod: 'manual', verified: true },
  status: 'reviewed'
}

export const FAMOUS_LANDMARKS_BATCH_19: Judgment[] = [
  mohoriBibee,
  sarlaMudgal,
  balco,
  novartis,
  swissRibbons,
]
