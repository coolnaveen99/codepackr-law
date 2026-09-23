import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
The Hindu Adoptions and Maintenance Act, 1956 (HAMA) is the principal statute on valid adoption and maintenance among Hindus. Examination questions cluster around: who may take and give in adoption (ss. 7–9), conditions for a valid adoption (ss. 6 and 11), the effect of adoption (s. 12), and the wife’s and dependants’ maintenance (ss. 18–22). Always write “Section 12 of the Hindu Adoptions and Maintenance Act, 1956”, never a bare section number.

Introduction
Adoption under Hindu law was traditionally a spiritual and familial institution. HAMA codified capacity, consent and ceremonial conditions, and fixed the legal effect of a valid adoption: the child is deemed the child of the adoptive parents for all purposes, with a clean break from the birth family subject to the statute. Maintenance under HAMA is a personal-law civil right distinct from interim/permanent alimony under the Hindu Marriage Act, 1955 and from s. 125 BNSS/CrPC, though the forums can overlap in practice.

Who may take in adoption (ss. 7–8)
Any male Hindu who is of sound mind and is not a minor may take a son or daughter in adoption, subject to the consent of his wife if she is alive and capable of consenting, unless she has renounced the world, ceased to be a Hindu, or been declared to be of unsound mind. A female Hindu who is of sound mind and not a minor may take a son or daughter in adoption if she is unmarried, or if married, where her husband is dead, has renounced the world, has ceased to be a Hindu, or has been declared to be of unsound mind, subject to the statutory text.

Who may give in adoption (s. 9)
The father, mother or guardian may give a child in adoption under the conditions laid down in s. 9. Where both parents are alive, the father’s right is subject to the mother’s consent unless she has renounced the world, ceased to be a Hindu, or been declared of unsound mind. After the father’s death, the mother may give the child in adoption. Guardian’s power is constrained and often requires court permission as the section provides.

Conditions for a valid adoption (ss. 6 and 11)
Section 6 states that no adoption is valid unless the person adopting has the capacity and right to take; the person giving has the capacity to give; the person adopted is capable of being taken; and the adoption complies with the other conditions of the Act (including s. 11).

Section 11 conditions include: if the adoption is of a son, the adoptive father or mother must not have a Hindu son, son’s son, or son’s son’s son living at the time of adoption; if of a daughter, must not have a Hindu daughter or son’s daughter living; the same child may not be adopted simultaneously by two or more persons; and the child must be actually given and taken in adoption with intent to transfer the child. A paper declaration without giving and taking is not enough.

Effect of adoption (s. 12)
An adopted child is deemed to be the child of the adoptive father or mother for all purposes from the date of the adoption. All ties with the birth family are severed, subject to statutory savings: the child does not divest any person of an estate vested before the adoption. Property rights accrue in the adoptive family from the date of adoption.

Maintenance of wife (s. 18)
A Hindu wife is entitled to be maintained by her husband during her lifetime, subject to the section. She may claim separate residence and maintenance for desertion, cruelty, virulent disease, keeping a concubine, conversion, or other justifying cause. Distinguish s. 18 HAMA from ss. 24–25 HMA and from s. 125 BNSS/CrPC.

Maintenance of dependants (ss. 21–22)
Section 21 defines dependants. Section 22 obliges the heirs of a deceased Hindu to maintain the dependants of the deceased out of the estate. Quantum depends on the estate and the needs of dependants.

Current-law close
Cite the Hindu Adoptions and Maintenance Act, 1956 — ss. 6–12 for adoption and ss. 18–22 for maintenance. For matrimonial interim/permanent alimony cite the Hindu Marriage Act, 1955; for summary maintenance cite s. 125 BNSS/CrPC.`

export default {
  glance:
    'Hindu Adoptions and Maintenance Act, 1956 — capacity to take/give (ss. 7–9), conditions (ss. 6, 11), effect of adoption (s. 12), wife’s maintenance (s. 18), dependants (ss. 21–22).',
  study,
  examples: [
    {
      id: 'hama-ex-valid',
      title: 'Example — valid adoption',
      description:
        'A Hindu male of sound mind, major, with his wife’s consent, takes a Hindu boy under fifteen. Natural parents give with required consent. Giving and taking is performed. Valid under ss. 6 and 11; s. 12 deems the boy the adoptive parents’ child.',
    },
    {
      id: 'hama-ex-son-living',
      title: 'Example — adoption invalid where Hindu son living',
      description:
        'Adoptive father already has a living Hindu son and purports to adopt another son. The adoption violates s. 11 and is invalid.',
    },
    {
      id: 'hama-ex-maint',
      title: 'Example — wife’s separate residence and maintenance',
      description:
        'Husband deserts the wife without reasonable cause. She may claim separate residence and maintenance under s. 18 HAMA.',
    },
  ],
  hypotheticals: [
    {
      id: 'hama-hypo',
      title: 'Classroom problem — effect of adoption',
      facts:
        'C is validly adopted by A in 2018. In 2017 a share in C’s birth-family property had already vested in C’s birth brother under a completed partition. C claims that share after adoption.',
      question: 'Does s. 12 allow C to reopen the vested estate?',
      applicableLaw: 'Section 12 of the Hindu Adoptions and Maintenance Act, 1956.',
      analysis:
        'Section 12 severs birth-family ties from the date of adoption but provides that the adopted child shall not divest any person of an estate vested before the adoption.',
      conclusion:
        'C cannot divest the already vested estate. Cite s. 12 HAMA and the non-divesting rule.',
    },
  ],
  distinctions: [
    {
      id: 'hama-dist-maint',
      title: 'HAMA maintenance vs HMA vs s. 125',
      left: 'HAMA ss. 18–22',
      right: 'HMA ss. 24–25 / s. 125 BNSS',
      rows: [
        { point: 'Nature', left: 'Personal-law civil right under HAMA', right: 'Matrimonial (HMA) or summary statutory (s. 125)' },
        { point: 'Interim in divorce', left: 'Not the HMA pendente lite tool', right: 's. 24 HMA is interim during HMA case' },
      ],
    },
  ],
  misconceptions: [
    {
      id: 'hama-m1',
      trap: 'Treating adoption as valid by agreement alone without giving and taking.',
      correction: 'Section 11 requires actual giving and taking with intent to transfer the child.',
    },
    {
      id: 'hama-m2',
      trap: 'Assuming an adopted child always reopens past successions in the birth family.',
      correction: 'Section 12 does not divest estates already vested before adoption.',
    },
  ],
  questionsAndAnswers: [
    {
      id: 'hama-q-10',
      draftingCategory: 'brief',
      question: 'Explain the conditions for a valid adoption under the Hindu Adoptions and Maintenance Act, 1956.',
      answer:
        'Introduction. Validity is governed by Sections 6 and 11 of the Hindu Adoptions and Maintenance Act, 1956, read with capacity in ss. 7–9.\n\nSection 6. Capacity and right to take; capacity to give; capacity to be taken; compliance with other conditions including s. 11.\n\nSection 11. Living son/grandson bars for son adoption; living daughter/son’s daughter bars for daughter adoption; no simultaneous adoption by two persons; actual giving and taking with intent to transfer.\n\nIllustration. A has a living Hindu son and adopts another boy — invalid under s. 11.\n\nEffect. Valid adoption attracts s. 12 from the date of adoption.\n\nConclusion. Cite ss. 6 and 11 HAMA 1956 and the giving-and-taking requirement.',
      explanation: 'Must mention giving and taking and living-child bars.',
    },
    {
      id: 'hama-q-16',
      draftingCategory: 'submissions',
      question: 'Discuss the effect of a valid adoption under Section 12 HAMA and the wife’s right to maintenance under Section 18 HAMA.',
      answer:
        'Introduction. Section 12 fixes the status of a validly adopted child. Section 18 protects a Hindu wife’s maintenance.\n\nSection 12. From the date of adoption the child is deemed the child of the adoptive parents for all purposes. Birth-family ties are severed, subject to savings: no divesting of estates vested before adoption.\n\nIllustration. Property vested in a birth-family heir before adoption cannot be reopened merely by s. 12.\n\nSection 18. Wife is entitled to maintenance from the husband. Separate residence and maintenance may be claimed for desertion, cruelty, virulent disease, concubine, conversion, or other justifying cause, subject to statutory disentitlements.\n\nDistinction. ss. 24–25 HMA apply inside matrimonial proceedings; s. 125 BNSS is summary; s. 18 HAMA is personal-law civil right.\n\nDependants. ss. 21–22 oblige heirs to maintain dependants out of the estate.\n\nConclusion. Cite ss. 12 and 18 of the Hindu Adoptions and Maintenance Act, 1956.',
      explanation: 'Non-divesting rule + HAMA/HMA/s.125 distinction score highly.',
    },
  ],
  cases: [],
  bareActPointers: ['Hindu Adoptions and Maintenance Act, 1956 — ss. 6–12, 18, 20–22'],
  examTips: [
    'Always name HAMA with the section.',
    'Validity: capacity + s. 6 + s. 11 giving and taking.',
    'Effect: s. 12 + non-divesting.',
    'Wife: s. 18 grounds for separate residence and maintenance.',
  ],
  revisionPoints: [
    'ss. 6 & 11 — conditions; giving and taking.',
    'ss. 7–9 — who may take / give.',
    's. 12 — deemed child; non-divesting.',
    's. 18 — wife’s maintenance; ss. 21–22 dependants.',
  ],
} satisfies TopicContent
