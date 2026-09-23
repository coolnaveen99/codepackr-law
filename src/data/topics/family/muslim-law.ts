import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
Muslim personal law in India is largely uncodified for classical marriage and divorce, supplemented by statutes: the Muslim Personal Law (Shariat) Application Act, 1937; the Dissolution of Muslim Marriages Act, 1939 (DMMA); and the Muslim Women (Protection of Rights on Marriage) Act, 2019. Always name the statute. Do not write a bare “section 2” without the Act.

Introduction
Muslim family law questions test: nature of Muslim marriage (nikah), essentials of a valid marriage, dower (mahr), forms of divorce, and the 2019 Act on instant triple talaq. Constitutional holdings (Shayara Bano) must be cited as case law.

Nature of Muslim marriage
Nikah is a civil contract with religious significance. It requires proposal and acceptance (ijab and qubul) at the same meeting, competent parties, and absence of prohibited relationship. Witnesses are required under Sunni law as commonly applied in India.

Essentials of a valid marriage
Parties must be of sound mind and have attained puberty (subject to school and guardianship rules). Free consent is required. Parties must not fall within prohibited degrees. Classical rules on inter-faith capacity should be stated carefully and not overstated beyond settled exam positions.

Dower (mahr)
Dower is a sum or property the husband must pay the wife. It may be specified or unspecified, prompt or deferred. It is a debt against the husband’s estate and a protection for the wife.

Divorce — overview
Forms include talaq, khula, mubarat, and judicial dissolution under the Dissolution of Muslim Marriages Act, 1939.

Talaq and the 2019 Act
The Supreme Court in Shayara Bano held talaq-e-biddat (instant triple talaq) unconstitutional. The Muslim Women (Protection of Rights on Marriage) Act, 2019 declares any pronouncement of instantaneous triple talaq (spoken, written or electronic) void and illegal, creates a criminal offence, and provides for subsistence allowance and related protection as enacted.

Dissolution of Muslim Marriages Act, 1939
A Muslim wife may obtain a decree for dissolution on grounds in s. 2, including: husband’s whereabouts unknown for four years; neglect or failure to provide maintenance for two years; imprisonment for seven years or more; failure to perform marital obligations for three years; impotence; insanity or severe disease as specified; and cruelty (with statutory illustrations).

Maintenance
Identify which statute applies on the facts: Muslim personal law, the 1986 Muslim Women Act, or s. 125 BNSS/CrPC. Do not collapse them into one vague claim.

Current-law close
Name Shariat Act 1937, DMMA 1939, 2019 Act, and Shayara Bano. Do not treat Muslim law as a single sectioned code like the HMA.`

export default {
  glance:
    'Muslim personal law — nikah as contract, dower, talaq and DMMA 1939 judicial divorce, Muslim Women (Protection of Rights on Marriage) Act 2019 (instant triple talaq void/illegal). Always name the source.',
  study,
  examples: [
    {
      id: 'mpl-ex-nikah',
      title: 'Example — essentials of nikah',
      description:
        'Offer and acceptance in one meeting between competent parties with required witnesses; mahr fixed. Valid nikah.',
    },
    {
      id: 'mpl-ex-2019',
      title: 'Example — instant triple talaq',
      description:
        'Husband sends “talaq talaq talaq” in one sitting. Under the 2019 Act the pronouncement is void and illegal; Shayara Bano held such talaq unconstitutional.',
    },
    {
      id: 'mpl-ex-dmma',
      title: 'Example — wife’s judicial divorce',
      description:
        'Husband fails to provide maintenance for two years. Wife petitions under s. 2 DMMA 1939 for dissolution.',
    },
  ],
  hypotheticals: [
    {
      id: 'mpl-hypo',
      title: 'Classroom problem — triple talaq and 2019 Act',
      facts:
        'H pronounces instantaneous triple talaq upon W in 2021 and stops maintenance. W seeks a declaration and protection.',
      question: 'What is the status of the talaq and what remedies may W invoke?',
      applicableLaw:
        'Muslim Women (Protection of Rights on Marriage) Act, 2019; Shayara Bano; DMMA 1939 / maintenance law as applicable.',
      analysis:
        'The 2019 Act declares instantaneous triple talaq void and illegal. The marriage is not dissolved by the void pronouncement. W may pursue maintenance and other statutory reliefs.',
      conclusion:
        'Instant triple talaq is void under the 2019 Act; cite Shayara Bano and the Act by full name.',
    },
  ],
  distinctions: [
    {
      id: 'mpl-dist-divorce',
      title: 'Classical talaq vs DMMA vs 2019 Act',
      left: 'Classical / other modes',
      right: 'DMMA 1939 / 2019 Act',
      rows: [
        { point: 'Who initiates', left: 'Often husband (talaq); khula/mubarat involve wife/both', right: 'DMMA: wife seeks court decree; 2019 Act voids instant triple talaq' },
        { point: 'Instant triple talaq', left: 'Historically claimed under some schools', right: 'Unconstitutional (Shayara Bano); void & illegal under 2019 Act' },
      ],
    },
  ],
  misconceptions: [
    {
      id: 'mpl-m1',
      trap: 'Writing that Muslim marriage is only a sacrament like classical Hindu marriage.',
      correction: 'Nikah is characterised as a civil contract with religious significance.',
    },
    {
      id: 'mpl-m2',
      trap: 'Stating that instant triple talaq is still a valid private divorce.',
      correction: 'Shayara Bano held it unconstitutional; the 2019 Act declares it void and illegal.',
    },
  ],
  questionsAndAnswers: [
    {
      id: 'mpl-q-10',
      draftingCategory: 'brief',
      question: 'Explain the essentials of a valid Muslim marriage and the concept of dower (mahr).',
      answer:
        'Introduction. Muslim marriage (nikah) is a civil contract with religious significance.\n\nEssentials. Ijab and qubul at the same meeting; competent parties; free consent; absence of prohibited relationship; witnesses under Sunni law as commonly applied.\n\nDower. Specified or unspecified; prompt or deferred; a debt and protection for the wife.\n\nIllustration. Consent exchanged with witnesses and mahr fixed — valid nikah.\n\nConclusion. State nikah as contract, list essentials, explain mahr.',
      explanation: 'Cover ijab-qubul, competence, and mahr types.',
    },
    {
      id: 'mpl-q-16',
      draftingCategory: 'submissions',
      question: 'Discuss divorce under Muslim law with reference to Shayara Bano, the 2019 Act, and judicial dissolution under DMMA 1939.',
      answer:
        'Introduction. Divorce may be extra-judicial or judicial under DMMA 1939. Instant triple talaq is controlled by constitutional law and the 2019 Act.\n\nShayara Bano. Talaq-e-biddat held unconstitutional.\n\n2019 Act. Instantaneous triple talaq void and illegal; offence and subsistence protection as enacted.\n\nDMMA 1939. Wife may obtain dissolution on s. 2 grounds: whereabouts unknown four years; failure to maintain two years; long imprisonment; failure of marital obligations three years; impotence; specified disease; cruelty.\n\nIllustration. Instant triple talaq by message — void under 2019 Act; W may also seek DMMA relief if grounds exist.\n\nConclusion. Cite Shayara Bano, the 2019 Act, and DMMA by name.',
      explanation: 'Need Shayara Bano + 2019 Act + at least three DMMA grounds.',
    },
  ],
  cases: [
    {
      name: 'Shayara Bano v. Union of India',
      year: 2017,
      citation: '(2017) 9 SCC 1',
      holding: 'Declared talaq-e-biddat (instant triple talaq) unconstitutional.',
      relevance: 'Pair with the 2019 Act in modern answers.',
    },
  ],
  bareActPointers: [
    'Muslim Personal Law (Shariat) Application Act, 1937',
    'Dissolution of Muslim Marriages Act, 1939 — s. 2',
    'Muslim Women (Protection of Rights on Marriage) Act, 2019',
  ],
  examTips: [
    'Never leave talaq without Shayara Bano and the 2019 Act.',
    'List DMMA s. 2 grounds for wife’s judicial divorce.',
    'Explain mahr as a debt and protection.',
  ],
  revisionPoints: [
    'Nikah = contract; ijab + qubul; mahr.',
    'Shayara Bano + 2019 Act = instant triple talaq void/illegal.',
    'DMMA 1939 — wife’s judicial dissolution grounds.',
  ],
} satisfies TopicContent
