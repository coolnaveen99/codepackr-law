import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
The Special Marriage Act, 1954 (SMA) provides a secular, civil form of marriage open to any two persons, regardless of religion. It is the correct statute for inter-religious marriages and for parties who want a civil marriage. Always write “Section 4 of the Special Marriage Act, 1954”.

Introduction
Unlike the Hindu Marriage Act, 1955, the SMA is not a personal-law code for one community. It creates a uniform civil procedure: notice, objections, solemnisation before the Marriage Officer, and a certificate. Divorce, nullity and other matrimonial reliefs are provided inside the same Act.

Conditions relating to solemnisation (s. 4)
A marriage may be solemnised if: neither party has a spouse living; neither is incapable of giving valid consent by reason of unsoundness of mind, or unfit for marriage and procreation by mental disorder, or subject to recurrent attacks of insanity; the male has completed 21 years and the female 18 years; and the parties are not within the degrees of prohibited relationship — subject to permitted custom not contrary to public policy.

Notice and procedure (ss. 5–16)
Parties give notice to the Marriage Officer of the district in which at least one has resided for the prescribed period. Notice is published. Objections may be made within thirty days on the ground that the marriage would violate s. 4. After the objection period (or after objections are rejected), the marriage may be solemnised before the Marriage Officer and three witnesses. A marriage certificate is issued.

Void, voidable and divorce
The SMA has its own void, voidable and divorce provisions. Do not cite HMA section numbers for an SMA marriage. Mutual consent divorce exists under the SMA with its own procedure.

Why parties choose the SMA
Inter-religious couples; parties who reject religious ceremonies; couples who want a clear civil record and uniform divorce forum.

Current-law close
For civil/secular/inter-religious marriage problems, open with the Special Marriage Act, 1954, s. 4 conditions, notice procedure, and the Act’s own nullity and divorce chapters.`

export default {
  glance:
    'Special Marriage Act, 1954 — secular civil marriage for any two persons; s. 4 conditions; notice and solemnisation before Marriage Officer; Act’s own void/voidable and divorce provisions.',
  study,
  examples: [
    {
      id: 'sma-ex-inter',
      title: 'Example — inter-religious civil marriage',
      description:
        'A Hindu and a Christian marry under the SMA after notice and solemnisation before the Marriage Officer and three witnesses.',
    },
    {
      id: 'sma-ex-objection',
      title: 'Example — objection period',
      description:
        'Within thirty days a third party objects that the bridegroom has a living spouse. If proved, the marriage cannot be solemnised under s. 4.',
    },
  ],
  hypotheticals: [
    {
      id: 'sma-hypo',
      title: 'Classroom problem — wrong statute',
      facts:
        'A Muslim woman and a Hindu man marry in a private ceremony without SMA notice. They later seek divorce under the HMA.',
      question: 'What is the difficulty?',
      applicableLaw: 'Special Marriage Act, 1954; personal laws as applicable.',
      analysis:
        'HMA applies only to Hindus (and related categories under s. 2 HMA). A civil inter-religious marriage should have been solemnised under the SMA.',
      conclusion:
        'Advise SMA for inter-religious civil marriage; do not assume HMA applies to both parties.',
    },
  ],
  distinctions: [
    {
      id: 'sma-dist-hma',
      title: 'SMA vs HMA',
      left: 'Special Marriage Act, 1954',
      right: 'Hindu Marriage Act, 1955',
      rows: [
        { point: 'Who may marry', left: 'Any two persons', right: 'Hindus, Buddhists, Jains, Sikhs (s. 2 HMA)' },
        { point: 'Form', left: 'Civil — notice + Marriage Officer', right: 'Customary rites (s. 7 HMA)' },
        { point: 'Inter-religious', left: 'Designed for it', right: 'Not the correct statute without conversion' },
      ],
    },
  ],
  misconceptions: [
    {
      id: 'sma-m1',
      trap: 'Using HMA section numbers for an SMA marriage.',
      correction: 'SMA has its own conditions, nullity and divorce sections.',
    },
    {
      id: 'sma-m2',
      trap: 'Treating SMA as only registration of a religious marriage.',
      correction: 'SMA is a complete code for solemnisation of a civil marriage.',
    },
  ],
  questionsAndAnswers: [
    {
      id: 'sma-q-10',
      draftingCategory: 'brief',
      question: 'Explain the conditions and procedure for solemnisation of marriage under the Special Marriage Act, 1954.',
      answer:
        'Introduction. The SMA provides a secular civil marriage for any two persons.\n\nConditions — s. 4. No living spouse; mental capacity; ages 21/18; not within prohibited degrees subject to permitted custom.\n\nProcedure. Notice to Marriage Officer; publication; thirty days for objections; solemnisation before officer and three witnesses; certificate.\n\nIllustration. Inter-religious couple completes notice, faces no valid objection, solemnises before the officer — valid SMA marriage.\n\nConclusion. Cite s. 4 and the notice–solemnisation scheme of the Special Marriage Act, 1954.',
      explanation: 'Must include s. 4 and notice/objection procedure.',
    },
    {
      id: 'sma-q-16',
      draftingCategory: 'submissions',
      question: 'Compare marriage under the Special Marriage Act, 1954 with the Hindu Marriage Act, 1955. When should parties prefer the SMA?',
      answer:
        'Introduction. HMA is personal-law for Hindus (and related groups). SMA is secular civil marriage for any two persons.\n\nApplicability and form. HMA s. 2 vs SMA open to all. HMA s. 7 customary rites vs SMA notice and Marriage Officer.\n\nConditions and reliefs. Both enforce monogamy and capacity, but texts differ. Each Act has its own nullity and divorce chapters.\n\nWhen to prefer SMA. Inter-religious unions; civil ceremony and civil record; avoidance of conversion solely to attract a personal law.\n\nConclusion. Choose the statute by applicability; cite SMA 1954 or HMA 1955 expressly.',
      explanation: 'Comparison + clear preference cases scores well.',
    },
  ],
  cases: [],
  bareActPointers: ['Special Marriage Act, 1954 — ss. 4–16 and matrimonial relief chapters'],
  examTips: [
    'SMA = any two persons; civil notice procedure.',
    'Do not use HMA sections for SMA marriages.',
    'State thirty-day objection period and three witnesses.',
  ],
  revisionPoints: [
    's. 4 conditions; notice; objections; Marriage Officer.',
    'Secular / inter-religious use-case.',
    'Own nullity and divorce chapters — not HMA numbers.',
  ],
} satisfies TopicContent
