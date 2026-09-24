import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
Family Law – I, Unit V: Minority and guardianship. Principal statutes: Hindu Minority and Guardianship Act, 1956 (HMGA); Guardians and Wards Act, 1890 (GWA). Always name the statute.

Introduction
Guardianship concerns the person and property of a minor. HMGA applies to Hindus as defined. GWA is the general statute for court appointment of guardians. Welfare of the minor is paramount.

Hindu Minority and Guardianship Act, 1956
Minor: person who has not completed eighteen years. Natural guardians of a Hindu minor for person and separate property: father, and after him the mother — subject to the statutory text and welfare (s. 13). Section 8 restricts natural guardian’s powers over the minor’s property; court permission is required for certain transfers. Testamentary and de facto guardians are recognised within limits.

Guardians and Wards Act, 1890
Court may appoint guardian of person or property. Welfare is paramount. Procedure for appointment, removal and duties is under GWA.

Muslim law (essentials)
Guardianship of the person (hizanat) and of property are distinguished. Mother often has priority for custody of young children subject to classical conditions; father/male agnates important for property. Modern courts prioritise welfare.

Current-law close
Cite HMGA 1956 and GWA 1890. End with welfare of the minor as paramount.`

export default {
  glance:
    'FL-I Unit V — HMGA 1956 natural guardians & s. 8 limits; GWA 1890 court appointment; welfare paramount; Muslim hizanat essentials.',
  study,
  examples: [
    {
      id: 'guard-ex-1',
      title: 'Example — natural guardian',
      description:
        'Hindu minor’s father is alive and capable. He is natural guardian of person and separate property under HMGA, subject to welfare and s. 8 limits.',
    },
  ],
  hypotheticals: [
    {
      id: 'guard-hypo',
      title: 'Classroom problem — sale of minor’s property',
      facts: 'Mother as guardian sells Hindu minor’s immovable property without court permission.',
      question: 'Is the sale valid?',
      applicableLaw: 'Section 8 of the Hindu Minority and Guardianship Act, 1956.',
      analysis:
        'Section 8 requires prior court permission for listed transfers of the minor’s property. Sale without permission is voidable at the instance of the minor as the section provides.',
      conclusion: 'Without court permission, the transfer is vulnerable under s. 8 HMGA.',
    },
  ],
  distinctions: [
    {
      id: 'guard-dist',
      title: 'HMGA vs GWA',
      left: 'HMGA 1956',
      right: 'GWA 1890',
      rows: [
        { point: 'Applicability', left: 'Hindus (as defined)', right: 'General court procedure for guardians' },
        { point: 'Focus', left: 'Natural/testamentary guardians and limits', right: 'Appointment, removal, duties by court' },
      ],
    },
  ],
  misconceptions: [
    {
      id: 'guard-m1',
      trap: 'Mother can never be natural guardian while the father is alive.',
      correction: 'HMGA names father then mother, but welfare is paramount under s. 13.',
    },
  ],
  questionsAndAnswers: [
    {
      id: 'guard-q10',
      marks: 10,
      question: 'Who are the natural guardians of a Hindu minor under the HMGA, 1956?',
      answer:
        'Introduction. Minor defined. Natural guardians: father then mother for person and separate property. Welfare paramount (s. 13). s. 8 property limits. Conclusion with HMGA citation.',
      explanation: 'Mention s. 8 and s. 13.',
    },
    {
      id: 'guard-q16',
      marks: 16,
      question: 'Discuss guardianship of minors under Hindu law and the Guardians and Wards Act, 1890.',
      answer:
        'Introduction. HMGA scheme. Powers and s. 8. GWA court appointment and welfare. Brief Muslim custody contrast. Conclusion — welfare paramount; cite HMGA and GWA.',
      explanation: 'Cover both statutes.',
    },
  ],
  bareActPointers: [
    'Hindu Minority and Guardianship Act, 1956 — ss. 4, 6, 8, 13',
    'Guardians and Wards Act, 1890',
  ],
  examTips: ['Welfare of the minor is paramount.', 's. 8 HMGA is high-yield.'],
  revisionPoints: [
    'HMGA — natural guardians; s. 8; s. 13 welfare.',
    'GWA — court-appointed guardians.',
  ],
} satisfies TopicContent
