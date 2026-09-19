import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
The Hindu Succession Act, 1956 codifies intestate succession among Hindus. The single most important provision for exams is Section 6 (devolution of interest in coparcenary property), radically amended in 2005 to give daughters equal coparcenary rights by birth.

Introduction
Before 1956, Mitakshara and Dayabhaga schools governed succession with marked gender inequality. The 1956 Act introduced Class I and Class II heirs and made a female Hindu’s property her absolute property (s. 14). The 2005 amendment to s. 6 is the modern centrepiece.

Meaning and concept
Coparcenary property (Mitakshara) was traditionally limited to male members. Section 6 (as substituted in 2005) makes the daughter of a coparcener a coparcener by birth in her own right, with the same rights and liabilities as a son. The amendment is prospective in operation for partitions effected before 20 December 2004, with important Supreme Court clarifications.

Why the rule exists
Gender equality in inheritance and the constitutional mandate of equality required removal of the male-only character of the Mitakshara coparcenary.

Key provisions
- s. 6: Devolution of interest in coparcenary property (daughter as coparcener).
- s. 8: General rules of succession in the case of males (Class I, then Class II, then agnates, then cognates).
- s. 14: Property of a female Hindu to be her absolute property.
- ss. 15–16: Succession to the property of a female Hindu.

Essential points on s. 6 (2005)
1. Daughter of a coparcener becomes a coparcener by birth.
2. Same rights in the coparcenary property as she would have had if she had been a son.
3. Same liabilities and disabilities.
4. The amendment does not reopen partitions or testamentary dispositions that were effected before 20 December 2004.

Current-law close
Cite the Hindu Succession Act, 1956 and the Hindu Succession (Amendment) Act, 2005. For the operation of s. 6, the leading authorities are Vineeta Sharma v. Rakesh Sharma (2020) and Prakash v. Phulavati (2016) (the latter partly clarified by the former).`

export default {
  glance:
    'Hindu Succession Act, 1956 — s. 6 (daughter as coparcener after 2005 amendment), s. 8 (male intestate succession), s. 14 (female’s absolute property), ss. 15–16 (succession to female’s property).',
  study,
  examples: [
    {
      id: 'hsa-ex-daughter',
      title: 'Example — daughter as coparcener',
      description:
        'A Mitakshara Hindu dies in 2010 leaving a son and a daughter. Under amended s. 6 both children are coparceners by birth and take equal shares in the coparcenary property.',
    },
    {
      id: 'hsa-ex-partition',
      title: 'Example — pre-2004 partition',
      description:
        'A registered partition of the HUF was effected in 2002. The 2005 amendment does not reopen that partition; the daughter cannot claim a fresh share in the already partitioned property solely on the basis of the amendment.',
    },
  ],
  hypotheticals: [
    {
      id: 'hsa-hypo',
      title: 'Classroom problem',
      facts:
        'Father dies intestate in 2018 leaving self-acquired property and an interest in ancestral property. He is survived by widow, son and married daughter.',
      question: 'How does the property devolve?',
      applicableLaw: 'Sections 6, 8 and 14 of the Hindu Succession Act, 1956 (as amended).',
      analysis:
        'The interest in the coparcenary property devolves under s. 6 with the daughter treated as a coparcener. The self-acquired property devolves under s. 8 among Class I heirs (widow, son, daughter) equally.',
      conclusion: 'Both children and the widow take; the daughter’s coparcenary right is not dependent on her marital status.',
    },
  ],
  distinctions: [
    {
      id: 'hsa-dist',
      title: 'Coparcenary interest vs self-acquired property',
      left: 'Coparcenary (s. 6)',
      right: 'Self-acquired (s. 8)',
      rows: [
        { point: 'Devolution', left: 'By survivorship / notional partition rules under s. 6', right: 'By Class I / II heirs under s. 8' },
        { point: 'Daughter’s right', left: 'Coparcener by birth after 2005', right: 'Class I heir' },
      ],
    },
  ],
  misconceptions: [
    { id: 'hsa-m1', trap: 'Saying the 2005 amendment is fully retrospective.', correction: 'It does not reopen partitions or dispositions effected before 20 December 2004.' },
    { id: 'hsa-m2', trap: 'Treating a married daughter as excluded from Class I.', correction: 'Marital status is irrelevant; daughter is a Class I heir and, after 2005, a coparcener.' },
  ],
  questionsAndAnswers: [
    {
      id: 'hsa-q-10',
      marks: 10,
      question: 'Explain the effect of the 2005 amendment to Section 6 of the Hindu Succession Act, 1956.',
      answer:
        'Introduction. Section 6 of the Hindu Succession Act, 1956 was substituted by the Hindu Succession (Amendment) Act, 2005 to remove gender discrimination in the Mitakshara coparcenary.\n\nPre-amendment. Only male members were coparceners by birth.\n\nPost-amendment. The daughter of a coparcener becomes a coparcener by birth in her own right, with the same rights and liabilities as a son. She can demand partition and is subject to the same disabilities.\n\nLimitation. The amendment does not affect any partition or testamentary disposition that had been effected before 20 December 2004.\n\nCase law. Vineeta Sharma v. Rakesh Sharma (2020) clarified that the right accrues by birth and the living status of the father on the commencement date is not decisive in the manner earlier suggested.\n\nConclusion. Always cite both the 1956 Act and the 2005 amendment, and note the cut-off for pre-existing partitions.',
    },
    {
      id: 'hsa-q-16',
      marks: 16,
      question: 'Discuss the rules of intestate succession to the property of a male Hindu under the Hindu Succession Act, 1956, with special reference to the position of the daughter after 2005.',
      answer:
        'Introduction. Intestate succession to a male Hindu is governed by Sections 6 and 8 of the Hindu Succession Act, 1956. Section 6 deals with the interest in coparcenary property; Section 8 deals with other property.\n\nSection 6 after 2005. The daughter is a coparcener by birth. On the death of a male coparcener, his interest devolves by testamentary or intestate succession, and the daughter shares equally with the son.\n\nSection 8. Property other than the interest in coparcenary property devolves first upon Class I heirs (son, daughter, widow, mother, and certain lineal descendants of predeceased children). In the absence of Class I heirs it goes to Class II, then agnates, then cognates.\n\nAbsolute property of female (s. 14). Any property possessed by a female Hindu, whether acquired before or after the Act, is held by her as full owner and not as a limited owner.\n\nIllustration. Father dies in 2015 leaving ancestral interest and self-acquired house, survived by widow, son and daughter. Both children take equal shares in the coparcenary interest; the house is divided equally among widow, son and daughter as Class I heirs.\n\nConclusion. The combined effect of amended s. 6 and s. 8 is gender-equal succession. Cite the Act, the 2005 amendment, and Vineeta Sharma.',
    },
  ],
  cases: [
    {
      name: 'Vineeta Sharma v. Rakesh Sharma',
      year: 2020,
      citation: '(2020) 9 SCC 1',
      holding: 'Daughter is a coparcener by birth; the living status of the father on the date of the 2005 amendment is not a condition for the daughter’s right.',
      relevance: 'Authoritative interpretation of amended s. 6.',
    },
    {
      name: 'Prakash v. Phulavati',
      year: 2016,
      citation: '(2016) 2 SCC 36',
      holding: 'The 2005 amendment is prospective; rights crystallised before the amendment are not reopened (later clarified by Vineeta Sharma on the “living father” aspect).',
      relevance: 'Temporal operation of the amendment.',
    },
  ],
  bareActPointers: [
    'Section 6 Hindu Succession Act, 1956',
    'Section 8 Hindu Succession Act, 1956',
    'Section 14 Hindu Succession Act, 1956',
    'Section 15 Hindu Succession Act, 1956',
    'Hindu Succession (Amendment) Act, 2005',
  ],
  examTips: [
    'Always mention the 2005 amendment when discussing s. 6.',
    'Distinguish coparcenary interest (s. 6) from other property (s. 8).',
    'Cite Vineeta Sharma (2020) for the current position of the daughter.',
    'Note the 20 December 2004 cut-off for partitions.',
  ],
  revisionPoints: [
    's. 6 (2005) = daughter is coparcener by birth.',
    's. 8 = Class I → Class II → agnates → cognates.',
    's. 14 = female’s property is absolute.',
    'Vineeta Sharma is the leading authority.',
  ],
} satisfies TopicContent
