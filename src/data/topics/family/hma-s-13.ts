import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
Section 13 of the Hindu Marriage Act, 1955 is the principal fault-based (and status-based) divorce provision. It lists grounds available to either spouse and additional grounds available only to the wife. Mutual consent is a separate route under s. 13B.

Introduction
Divorce under the HMA is not at will. The petitioner must prove a statutory ground. Section 13 is the core list; s. 13A allows the court to grant judicial separation instead; s. 13B provides mutual consent.

Meaning and concept
Either party may present a petition on the grounds in s. 13(1), including adultery, cruelty, desertion for two years, conversion, incurable unsoundness of mind / mental disorder, venereal disease in a communicable form, renunciation of the world, and presumption of death (seven years). The wife has additional grounds under s. 13(2).

Essential grounds (s. 13(1)) — high-yield
- Adultery: voluntary sexual intercourse with any person other than the spouse after the marriage.
- Cruelty: conduct that causes reasonable apprehension of harm or injury; includes mental cruelty (modern case law).
- Desertion: continuous period of not less than two years immediately preceding the petition; intention to desert and absence without consent.
- Conversion: ceased to be a Hindu by conversion to another religion.
- Unsound mind / mental disorder of such a kind and to such an extent that the petitioner cannot reasonably be expected to live with the respondent.
- Renunciation; presumption of death (seven years).

Wife’s special grounds (s. 13(2))
Include pre-Act bigamy situations, rape / sodomy / bestiality by the husband, and non-resumption of cohabitation after certain maintenance decrees.

Alternate relief (s. 13A)
In any divorce proceeding the court may, if it considers it just to do so, pass a decree of judicial separation instead of divorce.

Current-law close
Cite Section 13 of the Hindu Marriage Act, 1955 by clause. Do not confuse with s. 13B (mutual consent). Cruelty and desertion are the most frequently tested grounds.`

export default {
  glance:
    'Section 13 HMA — fault grounds of divorce (adultery, cruelty, desertion 2 years, conversion, unsound mind, etc.) plus wife’s special grounds under s. 13(2). Alternate relief under s. 13A.',
  study,
  examples: [
    {
      id: 's13-ex-cruelty',
      title: 'Example — mental cruelty',
      description:
        'Continuous false allegations of infidelity, public humiliation, and refusal of marital obligations over years. The injured spouse may seek divorce under s. 13(1)(ia) on the ground of cruelty.',
    },
    {
      id: 's13-ex-desertion',
      title: 'Example — desertion period',
      description:
        'Spouse left the matrimonial home 18 months ago. A petition under s. 13(1)(ib) is premature; the continuous period must be not less than two years immediately preceding the petition.',
    },
  ],
  hypotheticals: [
    {
      id: 's13-hypo',
      title: 'Classroom problem',
      facts:
        'Wife leaves the home alleging repeated physical assault. Husband files for restitution under s. 9. Wife files for divorce under s. 13(1)(ia).',
      question: 'How should the court treat the two petitions?',
      applicableLaw: 'Sections 9, 13(1)(ia) and 13A of the Hindu Marriage Act, 1955.',
      analysis:
        'If cruelty is proved, the withdrawal is with reasonable excuse and restitution fails. Divorce (or judicial separation under s. 13A) can be granted on the cruelty ground.',
      conclusion: 'Cruelty defeats restitution and supports divorce. Name the exact clause.',
    },
  ],
  distinctions: [
    {
      id: 's13-dist',
      title: 's. 13 vs s. 13B',
      left: 'Section 13',
      right: 'Section 13B',
      rows: [
        { point: 'Basis', left: 'Fault or status ground', right: 'Mutual consent' },
        { point: 'Petition', left: 'By one spouse against the other', right: 'Joint petition' },
        { point: 'Separation period', left: 'Desertion = 2 years (if that ground is used)', right: 'Living separately for 1 year or more' },
      ],
    },
  ],
  misconceptions: [
    { id: 's13-m1', trap: 'Citing “Section 13” without the Act name or the clause.', correction: 'Write Section 13(1)(ia) of the Hindu Marriage Act, 1955 for cruelty.' },
    { id: 's13-m2', trap: 'Treating irretrievable breakdown as a statutory ground under s. 13.', correction: 'It is not an independent statutory ground; courts may consider it within cruelty or while exercising other powers.' },
  ],
  questionsAndAnswers: [
    {
      id: 's13-q-10',
      marks: 10,
      question: 'Enumerate the grounds of divorce available to either spouse under Section 13(1) of the Hindu Marriage Act, 1955.',
      answer:
        'Introduction. Section 13(1) of the Hindu Marriage Act, 1955 lists the grounds on which either the husband or the wife may petition for divorce.\n\nGrounds. (i) Adultery — voluntary sexual intercourse with any person other than the spouse after the marriage. (ii) Cruelty. (iii) Desertion for a continuous period of not less than two years immediately preceding the petition. (iv) Conversion — ceased to be a Hindu by conversion to another religion. (v) Incurably of unsound mind or mental disorder of such a kind and to such an extent that the petitioner cannot reasonably be expected to live with the respondent. (vi) Venereal disease in a communicable form. (vii) Renunciation of the world by entering a religious order. (viii) Not heard of as being alive for seven years or more (presumption of death).\n\nNote. Older references to virulent leprosy have been affected by later amendments and medical reality; state the current statutory text accurately.\n\nConclusion. List the clauses and give a one-line meaning for cruelty and desertion.',
    },
    {
      id: 's13-q-16',
      marks: 16,
      question: 'Discuss the ground of cruelty under Section 13(1)(ia) of the Hindu Marriage Act, 1955. How does it interact with restitution of conjugal rights?',
      answer:
        'Introduction. Cruelty was inserted as a ground of divorce by the 1976 amendment and is now the most litigated ground under Section 13(1)(ia) of the Hindu Marriage Act, 1955.\n\nMeaning. Cruelty may be physical or mental. Mental cruelty is conduct that causes a reasonable apprehension in the mind of the petitioner that it is harmful or injurious to live with the other spouse. The standard is that of a reasonable person in the circumstances of the parties.\n\nIllustrations from case law. Persistent false allegations of unchastity, sustained denial of marital obligations, public humiliation, and prolonged mutual hostility leading to irretrievable breakdown have been treated as mental cruelty (e.g. lines of authority including Naveen Kohli).\n\nBurden. The petitioner must prove the conduct. Isolated acts may not suffice; a course of conduct is usually required.\n\nInteraction with s. 9. Restitution of conjugal rights requires that the withdrawal is without reasonable excuse. Proven cruelty is a reasonable excuse. Therefore a finding of cruelty under s. 13(1)(ia) ordinarily defeats a petition for restitution and supports divorce or, under s. 13A, judicial separation.\n\nConclusion. Define cruelty, give physical and mental illustrations, cite the clause as Section 13(1)(ia) of the Hindu Marriage Act, 1955, and explain why it bars restitution.',
    },
  ],
  cases: [
    {
      name: 'Naveen Kohli v. Neelu Kohli',
      year: 2006,
      citation: '(2006) 4 SCC 558',
      holding: 'Prolonged mutual hostility and separation can justify divorce on the ground of cruelty; irretrievable breakdown is a relevant consideration.',
      relevance: 'Mental cruelty under s. 13(1)(ia).',
    },
  ],
  bareActPointers: [
    'Section 13 Hindu Marriage Act, 1955',
    'Section 13A Hindu Marriage Act, 1955',
    'Section 13B Hindu Marriage Act, 1955',
    'Section 9 Hindu Marriage Act, 1955',
  ],
  examTips: [
    'Always cite the clause (e.g. s. 13(1)(ia) for cruelty).',
    'Desertion requires two years immediately preceding the petition.',
    'Distinguish s. 13 from s. 13B.',
    'Mention s. 13A alternate relief.',
  ],
  revisionPoints: [
    's. 13(1) = fault / status grounds for either spouse.',
    'Cruelty = s. 13(1)(ia); desertion = 2 years.',
    's. 13(2) = wife’s special grounds.',
    's. 13A = judicial separation instead of divorce.',
  ],
} satisfies TopicContent
