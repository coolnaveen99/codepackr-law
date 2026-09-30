import type { Judgment } from './types'

/** Batch 20 — missing high-yield landmarks across property, consumer, IPR, arbitration and tax law. */

export const lucknowDevelopmentAuthority: Judgment = {
  id: 'lucknow-development-authority-mk-gupta-1994',
  caseName: 'Lucknow Development Authority v. M.K. Gupta',
  shortName: 'LDA v. M.K. Gupta',
  court: 'Supreme Court of India',
  jurisdiction: 'Consumer Protection',
  year: 1994,
  citation: '(1994) 1 SCC 243',
  subject: 'Consumer Law',
  topics: ['Consumer Service', 'Deficiency in Service', 'Public Authorities', 'Compensation'],
  tags: ['AIBE', 'Judiciary', 'Consumer', 'Public Authority'],
  summary: 'The Supreme Court held that housing construction and allotment by a statutory development authority can constitute a service under the Consumer Protection Act and that deficiency in such service can attract consumer remedies.',
  facts: [
    'M.K. Gupta obtained a residential property through a scheme operated by the Lucknow Development Authority.',
    'Delay and deficiencies in the housing service led to proceedings under the Consumer Protection Act.'
  ],
  issues: [
    'Whether a statutory development authority providing housing is rendering a consumer service.',
    'Whether deficiency in that service can attract consumer compensation and accountability.'
  ],
  arguments: {
    appellant: ['The development authority relied on its statutory character and disputed consumer-forum liability.'],
    respondent: ['Housing construction and delivery for consideration falls within the consumer-service framework and deficient performance warrants relief.']
  },
  provisions: [
    {
      actId: 'consumer-protection-act-1986',
      actName: 'Consumer Protection Act, 1986',
      provisionId: 's-2-1-o',
      section: 'Section 2(1)(o)',
      title: 'Service',
      subjectSlug: 'tort'
    },
    {
      actId: 'consumer-protection-act-1986',
      actName: 'Consumer Protection Act, 1986',
      provisionId: 's-2-1-g',
      section: 'Section 2(1)(g)',
      title: 'Deficiency',
      subjectSlug: 'tort'
    }
  ],
  reasoning: [
    {
      heading: 'Service by public authorities',
      explanation: 'The statutory character of the provider does not by itself remove a housing activity performed for consideration from consumer protection where the statutory definition of service is satisfied.'
    },
    {
      heading: 'Deficiency and effective remedy',
      explanation: 'Delay or deficient performance in a covered housing service can support consumer relief, including compensation within the statutory framework.'
    }
  ],
  decision: 'The Court rejected the attempt to place the housing service outside consumer jurisdiction merely because the provider was a statutory authority.',
  holding: 'Housing construction and related services supplied by a statutory development authority for consideration can fall within consumer protection law.',
  ratioDecidendi: 'Consumer legislation is applied to covered services according to its statutory definitions; public or statutory status alone does not create an immunity from consumer jurisdiction.',
  relatedCases: [],
  examPoints: ['Service under the Consumer Protection Act.', 'Housing by development authorities.', 'Deficiency in service and compensation.'],
  mcqs: [
    {
      id: 'lda-mk-gupta-mcq-1',
      question: 'Lucknow Development Authority v. M.K. Gupta is chiefly associated with:',
      options: ['Consumer jurisdiction over housing services', 'Patent novelty', 'Arbitration seat', 'Tax avoidance'],
      correctIndex: 0,
      explanation: 'The decision recognised covered housing activities of statutory development authorities as consumer services.'
    }
  ],
  source: { type: 'document', title: '(1994) 1 SCC 243', extractionMethod: 'manual', verified: true },
  status: 'reviewed'
}

export const narandasKarsondas: Judgment = {
  id: 'narandas-karsondas-1977',
  caseName: 'Narandas Karsondas v. S.A. Kamtam',
  shortName: 'Narandas Karsondas',
  court: 'Supreme Court of India',
  jurisdiction: 'Property Law',
  year: 1977,
  citation: '(1977) 3 SCC 247',
  subject: 'Transfer of Property',
  topics: ['Mortgage', 'Right of Redemption', 'Sale of Immovable Property', 'Section 60'],
  tags: ['AIBE', 'Judiciary', 'TPA', 'Mortgage'],
  summary: 'The Supreme Court explained that a contract for sale does not itself create an interest in immovable property and that the mortgagor’s right of redemption is not extinguished merely by a contract for sale or a power of sale; completion of the sale in the legally required manner is material.',
  facts: [
    'The dispute arose from a mortgage and an attempted sale of the mortgaged property.',
    'The mortgagor asserted that the right of redemption had not been extinguished by the transaction relied upon by the mortgagee.'
  ],
  issues: [
    'Whether a contract for sale itself creates an interest in immovable property.',
    'Whether the right of redemption is extinguished before completion of the legally required sale.'
  ],
  arguments: {
    appellant: ['The mortgagee relied on the sale mechanism and contended that the mortgagor’s redemption right had ended.'],
    respondent: ['The statutory right of redemption continued until the requirements for extinguishment were actually satisfied.']
  },
  provisions: [
    {
      actId: 'transfer-of-property-act-1882',
      actName: 'Transfer of Property Act, 1882',
      provisionId: 's-54',
      section: 'Section 54',
      title: 'Sale',
      subjectSlug: 'contract'
    },
    {
      actId: 'transfer-of-property-act-1882',
      actName: 'Transfer of Property Act, 1882',
      provisionId: 's-60',
      section: 'Section 60',
      title: 'Right of mortgagor to redeem',
      subjectSlug: 'contract'
    }
  ],
  reasoning: [
    {
      heading: 'Contract for sale versus transfer',
      explanation: 'Section 54 distinguishes a contract for sale from the completed transfer of ownership; an agreement to sell does not by itself create an interest or charge in the property.'
    },
    {
      heading: 'Continuing redemption right',
      explanation: 'The right of redemption survives until it is extinguished in the manner recognised by law; a mere contract for sale is insufficient to end it.'
    }
  ],
  decision: 'The Court protected the statutory redemption principle and distinguished an agreement to sell from a completed transfer of ownership.',
  holding: 'A contract for sale does not itself transfer an interest in immovable property, and the equity of redemption is not extinguished merely by such a contract.',
  ratioDecidendi: 'Sections 54 and 60 of the Transfer of Property Act preserve the distinction between an agreement to sell and completed transfer while protecting the mortgagor’s statutory right of redemption until lawful extinguishment.',
  relatedCases: [],
  examPoints: ['Section 54 TPA.', 'Section 60 TPA.', 'Agreement to sell is not completed transfer.', 'Right of redemption.'],
  mcqs: [
    {
      id: 'narandas-mcq-1',
      question: 'Under Narandas Karsondas, a mere contract for sale of mortgaged property:',
      options: ['Automatically extinguishes redemption', 'Creates ownership immediately', 'Does not by itself extinguish the right of redemption', 'Converts the mortgage into a lease'],
      correctIndex: 2,
      explanation: 'The Court treated the right of redemption as continuing until lawful extinguishment.'
    }
  ],
  source: { type: 'document', title: '(1977) 3 SCC 247', extractionMethod: 'manual', verified: true },
  status: 'reviewed'
}

export const rgAnand: Judgment = {
  id: 'rg-anand-1978',
  caseName: 'R.G. Anand v. Deluxe Films',
  shortName: 'R.G. Anand',
  court: 'Supreme Court of India',
  jurisdiction: 'Intellectual Property Rights',
  year: 1978,
  citation: '(1978) 4 SCC 118',
  subject: 'IPR',
  topics: ['Copyright', 'Idea-Expression', 'Substantial Similarity', 'Originality'],
  tags: ['AIBE', 'Judiciary', 'Copyright', 'IPR'],
  summary: 'The Supreme Court formulated the leading Indian approach distinguishing an unprotectable idea from protectable expression and assessing whether the later work amounts to an infringement of copyright.',
  facts: [
    'R.G. Anand, a playwright, alleged that a later film substantially reproduced his play.',
    'The dispute required the Court to distinguish common ideas or themes from protectable expression and to assess substantial similarity.'
  ],
  issues: [
    'Whether copyright can subsist in an idea or theme as such.',
    'What test should be applied to determine infringement between a play and a film.'
  ],
  arguments: {
    appellant: ['The later film was alleged to reproduce the protected expression and substantial features of the play.'],
    respondent: ['Common ideas and themes are not monopolised by copyright and the works were sufficiently different.']
  },
  provisions: [
    {
      actId: 'copyright-act-1957',
      actName: 'Copyright Act, 1957',
      provisionId: 's-13',
      section: 'Section 13',
      title: 'Works in which copyright subsists',
      subjectSlug: 'ipr'
    },
    {
      actId: 'copyright-act-1957',
      actName: 'Copyright Act, 1957',
      provisionId: 's-14',
      section: 'Section 14',
      title: 'Meaning of copyright',
      subjectSlug: 'ipr'
    }
  ],
  reasoning: [
    {
      heading: 'Idea-expression distinction',
      explanation: 'Copyright protects original expression in a qualifying work, not a bare idea, theme or general concept capable of independent expression.'
    },
    {
      heading: 'Overall similarity',
      explanation: 'The Court emphasised a practical comparison of the later work as a whole with the protected work to determine whether the later work has appropriated protected expression rather than merely a common idea.'
    }
  ],
  decision: 'The Court rejected copyright monopoly over ideas as such and applied the infringement analysis to the alleged copying of expression.',
  holding: 'There is no copyright in a mere idea, theme or plot as such; infringement depends on substantial appropriation of protected expression.',
  ratioDecidendi: 'Copyright protects original expression rather than ideas, and infringement is assessed by comparing the works to determine whether protected expression has been substantially reproduced.',
  relatedCases: [],
  examPoints: ['Idea versus expression.', 'Copyright infringement test.', 'Substantial similarity.'],
  mcqs: [
    {
      id: 'rg-anand-mcq-1',
      question: 'R.G. Anand is the leading Indian authority on:',
      options: ['Idea-expression distinction in copyright', 'Mortgage redemption', 'Foreign-award enforcement', 'Tax computation'],
      correctIndex: 0,
      explanation: 'The case explains that copyright protects expression rather than a bare idea or theme.'
    }
  ],
  source: { type: 'document', title: '(1978) 4 SCC 118; 1978 AIR 1613', extractionMethod: 'manual', verified: true },
  status: 'reviewed'
}

export const renusagar: Judgment = {
  id: 'renusagar-1994',
  caseName: 'Renusagar Power Co. Ltd. v. General Electric Co.',
  shortName: 'Renusagar',
  court: 'Supreme Court of India',
  jurisdiction: 'Arbitration',
  year: 1994,
  citation: '1994 Supp (1) SCC 644',
  subject: 'ADR',
  topics: ['Foreign Awards', 'Public Policy', 'Enforcement', 'Arbitration'],
  tags: ['AIBE', 'Judiciary', 'Arbitration', 'Public Policy'],
  summary: 'The Supreme Court gave an important restrictive interpretation of public policy in the enforcement of a foreign arbitral award, identifying the fundamental policy of Indian law, interests of India, and justice or morality as relevant grounds in the then governing statutory framework.',
  facts: [
    'General Electric sought enforcement in India of a foreign arbitral award against Renusagar.',
    'Renusagar resisted enforcement, including on the ground that enforcement would be contrary to Indian public policy.'
  ],
  issues: [
    'What meaning should be given to public policy when enforcing a foreign award under the Foreign Awards (Recognition and Enforcement) Act, 1961.',
    'Whether the alleged contraventions were sufficient to refuse enforcement.'
  ],
  arguments: {
    appellant: ['Enforcement was opposed on grounds including public policy and the statutory restrictions applicable to foreign awards.'],
    respondent: ['The award satisfied the statutory enforcement conditions and public policy should not be used as an unrestricted merits review.']
  },
  provisions: [
    {
      actId: 'foreign-awards-recognition-enforcement-act-1961',
      actName: 'Foreign Awards (Recognition and Enforcement) Act, 1961',
      provisionId: 's-7',
      section: 'Section 7',
      title: 'Conditions for enforcement of foreign awards',
      subjectSlug: 'adr'
    }
  ],
  reasoning: [
    {
      heading: 'Narrow public-policy control',
      explanation: 'The Court construed public policy in the foreign-award context as a restricted enforcement control rather than an invitation to reopen the merits of the arbitral dispute.'
    },
    {
      heading: 'Three recognised grounds',
      explanation: 'The judgment identified fundamental policy of Indian law, the interests of India, and justice or morality within the then statutory public-policy analysis.'
    }
  ],
  decision: 'The Court interpreted the public-policy ground in the foreign-award enforcement framework and applied that standard to the award before it.',
  holding: 'Public policy in foreign-award enforcement was given a narrow and structured meaning rather than treated as a general merits-review jurisdiction.',
  ratioDecidendi: 'The statutory public-policy exception for foreign awards must be applied restrictively, preserving the finality of international arbitration while retaining the specific statutory safeguards.',
  relatedCases: [],
  examPoints: ['Foreign award enforcement.', 'Public policy.', 'Renusagar test and later statutory developments.'],
  mcqs: [
    {
      id: 'renusagar-mcq-1',
      question: 'Renusagar is principally associated with:',
      options: ['Public policy in foreign-award enforcement', 'Copyright originality', 'Consumer housing services', 'Mortgage redemption'],
      correctIndex: 0,
      explanation: 'The decision is a leading authority on the public-policy ground for enforcement of foreign arbitral awards.'
    }
  ],
  source: { type: 'document', title: '1994 Supp (1) SCC 644; AIR 1994 SC 860', extractionMethod: 'manual', verified: true },
  status: 'reviewed'
}

export const kpVarghese: Judgment = {
  id: 'kp-varghese-1981',
  caseName: 'K.P. Varghese v. Income Tax Officer, Ernakulam',
  shortName: 'K.P. Varghese',
  court: 'Supreme Court of India',
  jurisdiction: 'Tax Law',
  year: 1981,
  citation: '(1981) 4 SCC 173',
  subject: 'Taxation',
  topics: ['Income Tax', 'Statutory Interpretation', 'Section 52', 'Mischief Rule'],
  tags: ['AIBE', 'Judiciary', 'Tax', 'Interpretation'],
  summary: 'The Supreme Court interpreted the former Section 52(2) of the Income-tax Act, 1961 in light of its statutory purpose and held that the provision was directed at cases involving understatement of consideration rather than every genuine transfer made below market value.',
  facts: [
    'K.P. Varghese transferred property for a declared consideration that was lower than the alleged fair market value.',
    'The Revenue sought to apply the then Section 52(2) on the basis of the disparity between declared consideration and market value.'
  ],
  issues: [
    'Whether the former Section 52(2) applied merely because fair market value exceeded declared consideration by the statutory margin.',
    'How statutory purpose and legislative history should inform the interpretation of a taxing provision.'
  ],
  arguments: {
    appellant: ['The provision should not impose tax on a genuine transaction merely because its stated price was below market value without understatement of consideration.'],
    respondent: ['The statutory language was relied upon to support the Revenue’s valuation-based approach.']
  },
  provisions: [
    {
      actId: 'income-tax-act-1961',
      actName: 'Income-tax Act, 1961',
      provisionId: 's-52-2-historical',
      section: 'Section 52(2) (historical)',
      title: 'Former provision concerning transfer of property',
      subjectSlug: 'taxation'
    }
  ],
  reasoning: [
    {
      heading: 'Purpose controls a literal overreach',
      explanation: 'The Court examined the object and legislative background of the provision rather than treating the text as authorising taxation of every bona fide transaction at a price below market value.'
    },
    {
      heading: 'Mischief-rule application',
      explanation: 'The judgment is a leading Indian authority for using legislative purpose, context and the mischief addressed by Parliament to avoid an interpretation producing results outside the provision’s intended field.'
    }
  ],
  decision: 'The Court construed the former Section 52(2) in the context of understatement of consideration and rejected an interpretation that would automatically tax every genuine undervalue transfer.',
  holding: 'The former Section 52(2) targeted understatement of consideration and was not intended as a general tax on bona fide transfers merely because the declared consideration was below market value.',
  ratioDecidendi: 'A taxing provision must be read in its statutory context and purpose; literal language should not be extended beyond the mischief Parliament addressed.',
  relatedCases: [],
  examPoints: ['Mischief rule.', 'Purposive interpretation.', 'Historical Section 52(2) of the Income-tax Act.'],
  mcqs: [
    {
      id: 'kp-varghese-mcq-1',
      question: 'K.P. Varghese is a leading Indian authority for:',
      options: ['Purposive and mischief-oriented statutory interpretation', 'Arbitration seat', 'Copyright infringement', 'Mortgage redemption'],
      correctIndex: 0,
      explanation: 'The judgment is widely cited for interpreting statutory language in light of purpose, context and the mischief addressed.'
    }
  ],
  source: { type: 'document', title: '(1981) 4 SCC 173; AIR 1981 SC 1922', extractionMethod: 'manual', verified: true },
  status: 'reviewed'
}

export const FAMOUS_LANDMARKS_BATCH_20: Judgment[] = [
  lucknowDevelopmentAuthority,
  narandasKarsondas,
  rgAnand,
  renusagar,
  kpVarghese,
]
