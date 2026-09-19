import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
The Special Marriage Act, 1954 provides a secular, civil form of marriage open to any two persons in India (or Indian citizens abroad) irrespective of religion. It is the statute of choice for inter-religious marriages and for couples who prefer a non-religious ceremony.

Introduction
The SMA was enacted to enable a special form of marriage, registration of certain marriages, and divorce. It overrides personal-law barriers to inter-faith unions when the parties choose to marry under it.

Meaning and concept
Marriage under the SMA is a civil contract solemnised before a Marriage Officer after notice and the statutory waiting period (subject to objections). Conditions for solemnisation are in s. 4. Consequences include the severance of the member from an undivided family in certain cases (s. 19) and succession under the Indian Succession Act for parties married under the SMA (subject to the statutory scheme).

Conditions (s. 4)
1. Neither party has a living spouse.
2. Neither party is incapable of giving valid consent by reason of unsoundness of mind, or is suffering from mental disorder making them unfit for marriage and procreation, or is subject to recurrent attacks of insanity.
3. Male has completed 21 years; female has completed 18 years.
4. Parties are not within the degrees of prohibited relationship (custom may permit in limited cases).
5. Where the marriage is solemnised in the then State of Jammu and Kashmir, both parties are citizens of India domiciled in the territories to which the Act extends (historical clause; verify current territorial application).

Procedure
Notice of intended marriage (s. 5) → Marriage Notice Book and publication (s. 6) → objections (ss. 7–8) → declaration and solemnisation (ss. 11–12) → certificate (s. 13). If the marriage is not solemnised within three months, a fresh notice is required (s. 14).

Nullity and divorce
Void marriages (s. 24), voidable marriages (s. 25), legitimacy of children (s. 26), divorce (s. 27), alternate relief (s. 27A), and mutual consent divorce (s. 28) broadly parallel the structure of the Hindu Marriage Act but operate under the SMA’s own text.

Current-law close
Cite the Special Marriage Act, 1954 by section. It is available to every person; religion is irrelevant. For couples who marry under personal law, the SMA does not automatically apply unless they register or solemnise under it.`

export default {
  glance:
    'Special Marriage Act, 1954 — secular civil marriage open to any two persons. Conditions (s. 4), notice and solemnisation procedure, void/voidable marriages (ss. 24–25), divorce including mutual consent (ss. 27–28).',
  study,
  examples: [
    {
      id: 'sma-ex-inter',
      title: 'Example — inter-religious marriage',
      description:
        'A Hindu man and a Muslim woman wish to marry without either converting. They give notice under the SMA, observe the statutory period, and solemnise the marriage before the Marriage Officer. The marriage is valid under the SMA.',
    },
    {
      id: 'sma-ex-void',
      title: 'Example — living spouse',
      description:
        'A person already married under personal law attempts to marry another person under the SMA without dissolving the first marriage. The second marriage is void under s. 24.',
    },
  ],
  hypotheticals: [
    {
      id: 'sma-hypo',
      title: 'Classroom problem',
      facts:
        'Two adults of different religions complete the SMA notice formalities. An objector claims that the marriage would violate the personal law of one party.',
      question: 'Does the objection succeed?',
      applicableLaw: 'Sections 4, 7 and 8 of the Special Marriage Act, 1954.',
      analysis:
        'The SMA expressly permits marriage between any two persons who satisfy s. 4. Personal-law restrictions that would prevent an inter-religious marriage under religious law do not bar a marriage under the SMA. The objection must be tested against the statutory conditions and the procedure for objections, not against personal law alone.',
      conclusion: 'Personal-law incompatibility is not, by itself, a ground to prevent solemnisation under the SMA.',
    },
  ],
  distinctions: [
    {
      id: 'sma-dist',
      title: 'SMA vs Hindu Marriage Act',
      left: 'Special Marriage Act, 1954',
      right: 'Hindu Marriage Act, 1955',
      rows: [
        { point: 'Applicability', left: 'Any two persons', right: 'Hindus, Buddhists, Jains, Sikhs' },
        { point: 'Ceremony', left: 'Civil solemnisation before Marriage Officer', right: 'Customary rites (saptapadi etc.)' },
        { point: 'Succession', left: 'Indian Succession Act regime (subject to SMA provisions)', right: 'Hindu Succession Act' },
      ],
    },
  ],
  misconceptions: [
    { id: 'sma-m1', trap: 'Thinking only inter-religious couples can use the SMA.', correction: 'Any two persons who satisfy s. 4 may marry under the SMA, including two Hindus who prefer a civil ceremony.' },
    { id: 'sma-m2', trap: 'Assuming personal law can override s. 4 conditions.', correction: 'Once the parties choose the SMA, the statutory conditions govern.' },
  ],
  questionsAndAnswers: [
    {
      id: 'sma-q-10',
      marks: 10,
      question: 'State the conditions for solemnisation of a marriage under Section 4 of the Special Marriage Act, 1954.',
      answer:
        'Introduction. Section 4 of the Special Marriage Act, 1954 lays down the conditions that must be fulfilled for a marriage to be solemnised under the Act.\n\nConditions. (a) Neither party has a spouse living. (b) Neither party is incapable of giving valid consent by reason of unsoundness of mind, or is suffering from mental disorder of such a kind or to such an extent as to be unfit for marriage and the procreation of children, or is subject to recurrent attacks of insanity. (c) The male has completed the age of twenty-one years and the female the age of eighteen years. (d) The parties are not within the degrees of prohibited relationship (with a limited custom-based exception). (e) The historical clause relating to domicile in the then State of Jammu and Kashmir where applicable.\n\nProcedure. Notice, publication, opportunity for objections, declaration and solemnisation before the Marriage Officer follow the conditions.\n\nConclusion. Section 4 is the gateway; breach can render the marriage void under s. 24.',
    },
    {
      id: 'sma-q-16',
      marks: 16,
      question: 'Compare the Special Marriage Act, 1954 with the Hindu Marriage Act, 1955 with reference to applicability, conditions of marriage, and divorce.',
      answer:
        'Introduction. Both statutes provide a legal framework for marriage and its dissolution, but they serve different constituencies and rest on different policy foundations.\n\nApplicability. The HMA applies to Hindus, Buddhists, Jains and Sikhs. The SMA is open to any two persons, regardless of religion, and is the natural vehicle for inter-religious marriages.\n\nConditions. Both require monogamy, mental capacity, and minimum ages (21 for the male, 18 for the female). Both prohibit degrees of prohibited relationship, with limited custom exceptions. The HMA additionally refers to sapinda relationship; the SMA’s prohibited-degree table is self-contained.\n\nSolemnisation. HMA recognises customary rites (including saptapadi). SMA requires civil solemnisation before a Marriage Officer after statutory notice.\n\nDivorce. Both provide fault grounds and mutual-consent divorce. The wording and numbering differ (HMA ss. 13–13B; SMA ss. 27–28), but the conceptual structure is parallel. The SMA also contains its own void and voidable provisions (ss. 24–25).\n\nSuccession and family consequences. Marriage under the SMA can affect membership of an undivided family and attracts the Indian Succession Act regime in the manner provided by the SMA; HMA parties remain under the Hindu Succession Act.\n\nConclusion. Choose the SMA when religion is irrelevant or the parties are of different religions; choose the HMA when both parties are governed by Hindu law and prefer a customary ceremony. Always cite the correct Act and section.',
    },
  ],
  cases: [],
  bareActPointers: [
    'Section 4 Special Marriage Act, 1954',
    'Section 5 Special Marriage Act, 1954',
    'Section 24 Special Marriage Act, 1954',
    'Section 25 Special Marriage Act, 1954',
    'Section 27 Special Marriage Act, 1954',
    'Section 28 Special Marriage Act, 1954',
  ],
  examTips: [
    'Emphasise that SMA is religion-neutral.',
    'List the s. 4 conditions accurately.',
    'Compare with HMA on applicability and ceremony.',
    'Do not apply HMA section numbers to SMA questions.',
  ],
  revisionPoints: [
    's. 4 = conditions for civil marriage.',
    'Open to any two persons.',
    'ss. 24–25 = void / voidable.',
    'ss. 27–28 = divorce / mutual consent.',
  ],
} satisfies TopicContent
