import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
Section 5 of the Hindu Marriage Act, 1955 lays down the five conditions that must be fulfilled for a marriage between two Hindus to be valid. Breach of some conditions makes the marriage void (s. 11); breach of others may make it voidable (s. 12) or attract punishment (s. 18).

Introduction
Section 5 is the gateway provision of the HMA. A student who cannot list the five conditions accurately will lose marks on every validity question.

Meaning and concept
A marriage may be solemnised between any two Hindus if the following conditions are fulfilled:
(i) neither party has a spouse living at the time of the marriage;
(ii) at the time of the marriage, neither party is incapable of giving valid consent by reason of unsoundness of mind, or though capable of giving valid consent has been suffering from mental disorder of such a kind or to such an extent as to be unfit for marriage and the procreation of children, or has been subject to recurrent attacks of insanity;
(iii) the bridegroom has completed the age of twenty-one years and the bride the age of eighteen years;
(iv) the parties are not within the degrees of prohibited relationship, unless the custom or usage governing each of them permits of a marriage between the two;
(v) the parties are not sapindas of each other, unless the custom or usage governing each of them permits of a marriage between the two.

Why the rule exists
Monogamy, capacity, age, and the prohibition of close-blood marriages are the policy core of the codified Hindu marriage.

How the rule operates with neighbouring sections
- Ceremony: s. 7 (customary rites; saptapadi completes the marriage when included).
- Void consequence: s. 11 (bigamy, prohibited degrees, sapinda).
- Voidable consequence: s. 12 (impotence, force, fraud, pregnancy by another, certain mental conditions).
- Punishment: s. 17 (bigamy), s. 18 (contravention of other conditions).

Exceptions / custom
Custom can validate a marriage within prohibited degrees or sapinda relationship if the custom is ancient, certain and reasonable and governs both parties.

Current-law close
Cite Section 5 of the Hindu Marriage Act, 1955. Always list all five conditions. Do not stop at monogamy and age.`

export default {
  glance:
    'Section 5 HMA — five conditions for a valid Hindu marriage: monogamy, mental capacity, ages 21/18, not within prohibited degrees, not sapindas (custom may permit the last two).',
  study,
  examples: [
    {
      id: 's5-ex-ok',
      title: 'Example — all conditions met',
      description:
        'Both parties Hindu, unmarried, of sound mind, aged 25 and 22, not within prohibited degrees or sapinda relationship. Saptapadi performed. Valid under s. 5 read with s. 7.',
    },
    {
      id: 's5-ex-fail',
      title: 'Example — living spouse',
      description:
        'H already has a living wife. He marries W2. Condition (i) is breached. The second marriage is void under s. 11(i).',
    },
  ],
  hypotheticals: [
    {
      id: 's5-hypo',
      title: 'Classroom problem',
      facts:
        'A boy of 20 marries a girl of 17. Both are Hindus, unmarried, of sound mind, and not within prohibited degrees. Custom does not permit under-age marriage.',
      question: 'Is the marriage valid under s. 5?',
      applicableLaw: 'Section 5(iii) of the Hindu Marriage Act, 1955; Prohibition of Child Marriage Act.',
      analysis:
        'Section 5(iii) requires the bridegroom to have completed 21 years and the bride 18 years. Both ages are short. The marriage does not satisfy s. 5(iii). Consequences under the child-marriage legislation and possible voidability/voidness must be analysed separately; the s. 5 condition itself is not met.',
      conclusion: 'Condition (iii) fails. State the age requirement accurately.',
    },
  ],
  distinctions: [
    {
      id: 's5-dist',
      title: 's. 5 conditions vs consequences',
      left: 'Section 5',
      right: 'ss. 11 / 12 / 18',
      rows: [
        { point: 'Role', left: 'States the conditions for a valid marriage', right: 'State the legal consequence of breach' },
        { point: 'Bigamy', left: 'Condition (i)', right: 'Void under s. 11 + punishment under s. 17' },
      ],
    },
  ],
  misconceptions: [
    { id: 's5-m1', trap: 'Listing only monogamy and age.', correction: 'All five conditions must be stated.' },
    { id: 's5-m2', trap: 'Ignoring the custom exception for prohibited degrees and sapinda.', correction: 'Custom can permit if it governs both parties.' },
  ],
  questionsAndAnswers: [
    {
      id: 's5-q-10',
      marks: 10,
      question: 'State and explain the conditions for a valid Hindu marriage under Section 5 of the Hindu Marriage Act, 1955.',
      answer:
        'Introduction. Section 5 of the Hindu Marriage Act, 1955 prescribes the conditions that must be fulfilled for a marriage between two Hindus to be valid.\n\nConditions. (i) Neither party has a spouse living — monogamy. (ii) Mental capacity: neither party is incapable of giving valid consent by reason of unsoundness of mind, or is suffering from mental disorder making them unfit for marriage and procreation, or is subject to recurrent attacks of insanity. (iii) Age: bridegroom 21 years, bride 18 years. (iv) Not within degrees of prohibited relationship, unless custom governing each permits. (v) Not sapindas of each other, unless custom governing each permits.\n\nCeremony. Section 7 recognises customary rites; where saptapadi is included, the marriage is complete on the seventh step.\n\nConsequences. Breach of (i), (iv) or (v) generally renders the marriage void under s. 11. Other breaches may lead to voidability under s. 12 or punishment under s. 18.\n\nConclusion. List all five limbs of s. 5 and link them to ss. 7, 11 and 12.',
    },
    {
      id: 's5-q-16',
      marks: 16,
      question: 'Discuss Section 5 of the Hindu Marriage Act, 1955. What is the effect of non-compliance with its conditions?',
      answer:
        'Introduction. Section 5 is the foundation of a valid Hindu marriage under the Hindu Marriage Act, 1955.\n\nTextual conditions. Set out all five conditions in full: monogamy; mental capacity (three sub-clauses); ages 21 and 18; prohibited degrees (with custom exception); sapinda relationship (with custom exception).\n\nCustom. The exceptions in clauses (iv) and (v) require a custom that is ancient, certain, reasonable and binding on both parties.\n\nEffect of non-compliance. (a) Living spouse / prohibited degrees / sapinda → marriage void under s. 11; bigamy also attracts s. 17 and the penal law. (b) Certain mental conditions, force, fraud, pregnancy by another → voidable under s. 12; decree of nullity required. (c) Age violation → interacts with the Prohibition of Child Marriage Act; the HMA itself does not automatically void every under-age marriage in the same way as s. 11. (d) Section 18 provides punishment for contravention of certain conditions.\n\nCeremony. Validity of the rites is governed by s. 7; registration under s. 8 is directory for validity (though States may make rules).\n\nConclusion. A complete answer states s. 5 in full, explains the custom exceptions, and maps each major breach to s. 11, s. 12 or s. 18. Always name the Hindu Marriage Act, 1955.',
    },
  ],
  cases: [
    {
      name: 'Sarla Mudgal v. Union of India',
      year: 1995,
      citation: '(1995) 3 SCC 635',
      holding: 'Second marriage after conversion to Islam without dissolving the first Hindu marriage is void under s. 11 and constitutes bigamy.',
      relevance: 'Section 5(i) monogamy and s. 11.',
    },
  ],
  bareActPointers: ['Section 5 Hindu Marriage Act, 1955', 'Section 7 Hindu Marriage Act, 1955', 'Section 11 Hindu Marriage Act, 1955', 'Section 12 Hindu Marriage Act, 1955'],
  examTips: [
    'Write all five conditions; do not stop at two.',
    'Mention the custom exception for prohibited degrees and sapinda.',
    'Link breach to s. 11 / s. 12 / s. 18.',
    'Always name the Act.',
  ],
  revisionPoints: [
    's. 5 = five conditions.',
    'Monogamy + capacity + age 21/18 + prohibited degrees + sapinda.',
    'Custom may save (iv) and (v).',
    'Breach → s. 11 / s. 12 / s. 18.',
  ],
} satisfies TopicContent
