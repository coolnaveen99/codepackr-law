import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
The Hindu Adoptions and Maintenance Act, 1956 (HAMA) regulates (a) who may adopt and be adopted and (b) the right of certain dependants to maintenance. Adoption under HAMA is irrevocable and severs the child’s ties with the birth family for the purposes of the Act.

Introduction
HAMA replaced the old customary law of adoption among Hindus with a statutory scheme. It also consolidates the right of the wife, children, aged parents and certain other dependants to maintenance.

Meaning and concept
Adoption (Chapter II): a valid adoption requires capacity of the adopter, capacity of the person giving in adoption, capacity of the child, and compliance with the other conditions in ss. 6–11. The effect (s. 12) is that the child is deemed the child of the adoptive parents for all purposes.

Maintenance (Chapter III): the wife’s right under s. 18 is lifelong (subject to disentitling conduct). Sections 19–22 deal with widowed daughter-in-law, children, aged parents and other dependants.

Essential conditions for a valid adoption (ss. 6–11)
1. The person adopting has the capacity and right to take in adoption (ss. 7–8).
2. The person giving in adoption has the capacity to do so (s. 9).
3. The person adopted is capable of being taken in adoption (s. 10 — generally unmarried, under 15, not already adopted).
4. Other conditions in s. 11 (including the age gap of 21 years when adopting a child of the opposite sex, and the prohibition on adopting a child of the same sex if a child of that sex is already living).

Capacity to adopt
- Male (s. 7): major, of sound mind; if married, consent of the wife is ordinarily required.
- Female (s. 8): major, of sound mind; if married, she may adopt only in the limited situations recognised by the section (widow, etc.).

Maintenance of wife (s. 18)
A Hindu wife is entitled to be maintained by her husband during her lifetime. She may live separately and still claim maintenance on grounds such as desertion, cruelty, leprosy, another wife living, concubine in the house, conversion or any other justifiable cause. She is disentitled if she is unchaste or ceases to be a Hindu by conversion.

Current-law close
Cite the Hindu Adoptions and Maintenance Act, 1956 by section. Maintenance under HAMA co-exists with interim and permanent alimony under the Hindu Marriage Act (ss. 24–25) and with s. 125 BNSS / CrPC.`

export default {
  glance:
    'Hindu Adoptions and Maintenance Act, 1956 — conditions for valid adoption (ss. 6–11), effect of adoption (s. 12), wife’s maintenance (s. 18), and maintenance of other dependants (ss. 19–22).',
  study,
  examples: [
    {
      id: 'hama-ex-adopt',
      title: 'Example — valid adoption',
      description:
        'A childless Hindu couple, both majors and of sound mind, take a boy under 15 years in adoption with the consent of the natural parents. The age gap and other s. 11 conditions are satisfied. The adoption is valid and irrevocable.',
    },
    {
      id: 'hama-ex-maint',
      title: 'Example — wife living separately',
      description:
        'Husband brings a second wife into the house. The first wife leaves and claims maintenance under s. 18. She is entitled to live separately and to maintenance; the presence of another wife is a statutory ground.',
    },
  ],
  hypotheticals: [
    {
      id: 'hama-hypo',
      title: 'Classroom problem',
      facts:
        'A Hindu male aged 40, already having a living son, wants to adopt a girl child of 10 years. His wife consents.',
      question: 'Is the adoption permissible?',
      applicableLaw: 'Sections 7, 10 and 11 of the Hindu Adoptions and Maintenance Act, 1956.',
      analysis:
        'Section 11 prohibits the adoption of a child of a particular sex if a child of the same sex is already living. Here the existing child is a son and the proposed adoptee is a girl, so the same-sex bar does not apply. The age gap of 21 years is satisfied. Wife’s consent is present. The adoption can be valid.',
      conclusion: 'Permissible if all other conditions of ss. 6–11 are met.',
    },
  ],
  distinctions: [
    {
      id: 'hama-dist',
      title: 'HAMA maintenance vs HMA alimony',
      left: 'HAMA s. 18',
      right: 'HMA ss. 24–25',
      rows: [
        { point: 'Nature', left: 'Substantive right of the wife against the husband', right: 'Relief in pending / concluded matrimonial proceedings' },
        { point: 'Forum', left: 'Civil court / family court under HAMA', right: 'Court seized of the HMA petition' },
      ],
    },
  ],
  misconceptions: [
    { id: 'hama-m1', trap: 'Treating adoption as revocable by the adoptive parents.', correction: 'Section 15: a valid adoption cannot be cancelled.' },
    { id: 'hama-m2', trap: 'Assuming a married woman can freely adopt during the husband’s lifetime.', correction: 'Section 8 restricts a married woman’s capacity while the husband is alive and competent.' },
  ],
  questionsAndAnswers: [
    {
      id: 'hama-q-10',
      marks: 10,
      question: 'State the conditions for a valid adoption under the Hindu Adoptions and Maintenance Act, 1956.',
      answer:
        'Introduction. Sections 6 to 11 of the Hindu Adoptions and Maintenance Act, 1956 prescribe the requisites of a valid adoption.\n\nRequisites (s. 6). The adopter must have capacity and right; the giver must have capacity; the child must be capable of being adopted; and the other conditions of the Chapter must be complied with.\n\nCapacity (ss. 7–8). A major Hindu male of sound mind may adopt; if married, the wife’s consent is ordinarily required. A major Hindu female of sound mind may adopt in the situations recognised by s. 8.\n\nChild (s. 10). Generally Hindu, not already adopted, unmarried, and under fifteen years (unless custom permits otherwise).\n\nOther conditions (s. 11). Include the prohibition on adopting a child of the same sex when a child of that sex is already living, and the minimum age difference of twenty-one years when the adopter and the child are of opposite sexes.\n\nEffect (s. 12). The child is deemed the child of the adoptive parents for all purposes; ties with the birth family are severed for the purposes of the Act.\n\nConclusion. List ss. 6–12 and emphasise irrevocability under s. 15.',
    },
    {
      id: 'hama-q-16',
      marks: 16,
      question: 'Discuss the right of a Hindu wife to maintenance under Section 18 of the Hindu Adoptions and Maintenance Act, 1956. How does it interact with the Hindu Marriage Act?',
      answer:
        'Introduction. Section 18 of the Hindu Adoptions and Maintenance Act, 1956 confers on a Hindu wife a right to be maintained by her husband during her lifetime.\n\nContent of the right. The husband is bound to maintain the wife. She may claim to live separately without forfeiting the right on the grounds enumerated in s. 18(2): desertion, cruelty, virulent leprosy, another wife living, concubine kept in the house, conversion of the husband, or any other justifiable cause.\n\nDisentitlement (s. 18(3)). The wife is not entitled to separate residence and maintenance if she is unchaste or ceases to be a Hindu by conversion to another religion.\n\nQuantum. The amount is determined according to the principles in s. 23 (status, needs, income, etc.).\n\nInteraction with HMA. Sections 24 and 25 of the Hindu Marriage Act provide for interim maintenance and permanent alimony in proceedings under that Act. The two remedies are concurrent; a wife may pursue HAMA independently of any matrimonial petition. Section 125 BNSS / CrPC provides a third, summary remedy.\n\nConclusion. Section 18 is a substantive, lifelong right subject to statutory disentitlements. Always name the Hindu Adoptions and Maintenance Act, 1956 and distinguish it from HMA alimony and s. 125 proceedings.',
    },
  ],
  cases: [],
  bareActPointers: [
    'Section 6 Hindu Adoptions and Maintenance Act, 1956',
    'Section 7 Hindu Adoptions and Maintenance Act, 1956',
    'Section 8 Hindu Adoptions and Maintenance Act, 1956',
    'Section 11 Hindu Adoptions and Maintenance Act, 1956',
    'Section 12 Hindu Adoptions and Maintenance Act, 1956',
    'Section 18 Hindu Adoptions and Maintenance Act, 1956',
  ],
  examTips: [
    'List the four heads under s. 6 and the key conditions of s. 11.',
    'Emphasise that a valid adoption is irrevocable (s. 15).',
    'For maintenance, state both the right and the disentitling conduct under s. 18(3).',
    'Distinguish HAMA s. 18 from HMA ss. 24–25 and s. 125 BNSS.',
  ],
  revisionPoints: [
    'ss. 6–11 = conditions for valid adoption.',
    's. 12 = effect; s. 15 = irrevocable.',
    's. 18 = wife’s lifelong maintenance right.',
    'Consent of wife ordinarily required for male adopter.',
  ],
} satisfies TopicContent
