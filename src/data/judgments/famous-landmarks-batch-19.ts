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

export const FAMOUS_LANDMARKS_BATCH_19: Judgment[] = [
  mohoriBibee,
  novartis,
]
