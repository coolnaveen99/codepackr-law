import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
Muslim personal law in India (marriage, dower, divorce, maintenance and inheritance) is largely uncodified and drawn from the Quran, Hadith, and the schools of jurisprudence (mainly Hanafi for Sunnis and Shia schools for Shias). Key statutory interventions are the Muslim Personal Law (Shariat) Application Act, 1937, the Dissolution of Muslim Marriages Act, 1939, and the Muslim Women (Protection of Rights on Marriage) Act, 2019 (triple talaq).

Introduction
Unlike the Hindu Marriage Act, there is no single comprehensive code for Muslim family law. The Shariat Act 1937 directs that in specified matters the rule of decision shall be the Muslim Personal Law (Shariat). The 1939 Act gives Muslim women a statutory right to seek judicial divorce on specified grounds. The 2019 Act criminalises instantaneous triple talaq and provides civil consequences.

Meaning and concept
- Marriage (nikah) is a civil contract. Essentials include proposal and acceptance, competent parties, and (in most schools) presence of witnesses.
- Dower (mahr) is a sum payable by the husband to the wife; it may be prompt or deferred.
- Divorce: forms include talaq (by husband), khula (at the instance of the wife with consideration), mubaraat (mutual), and judicial divorce under the 1939 Act.
- Triple talaq (talaq-e-biddat) in one sitting was held unconstitutional in Shayara Bano (2017) and is now an offence under the 2019 Act.

Why the statutory layer exists
To give Muslim women access to judicial divorce (1939) and to eliminate the practice of instantaneous triple talaq (2017 judgment + 2019 Act) while leaving the bulk of personal law to the Shariat.

Key statutory points
- Dissolution of Muslim Marriages Act, 1939: grounds for the wife include husband’s whereabouts unknown for 4 years, failure to provide maintenance for 2 years, imprisonment, failure to perform marital obligations, impotence, cruelty, etc.
- Muslim Women (Protection of Rights on Marriage) Act, 2019: any pronouncement of talaq by a Muslim husband upon his wife in any form (spoken, written, electronic) resulting in instantaneous and irrevocable divorce is void and illegal; it is a cognizable and compoundable offence.

Maintenance
After the Shah Bano controversy and the Muslim Women (Protection of Rights on Divorce) Act, 1986, the Supreme Court’s later jurisprudence (e.g. Danial Latifi) has read the 1986 Act so as to secure a reasonable and fair provision and maintenance for the divorced Muslim woman. Section 125 BNSS / CrPC remains available subject to the statutory scheme.

Current-law close
Do not apply the Hindu Marriage Act to Muslims. For divorce by the wife, cite the 1939 Act. For triple talaq, cite Shayara Bano and the 2019 Act. Always keep Muslim personal law distinct from HMA and SMA.`

export default {
  glance:
    'Muslim personal law (un-codified core) + Shariat Act 1937 + Dissolution of Muslim Marriages Act 1939 + Muslim Women (Protection of Rights on Marriage) Act 2019 (triple talaq). Marriage is a contract; triple talaq is void and an offence.',
  study,
  examples: [
    {
      id: 'mpl-ex-1939',
      title: 'Example — judicial divorce under 1939 Act',
      description:
        'A Muslim wife whose husband has failed to provide maintenance for more than two years and has treated her with cruelty may petition under the Dissolution of Muslim Marriages Act, 1939 for a decree of dissolution.',
    },
    {
      id: 'mpl-ex-triple',
      title: 'Example — triple talaq after 2019',
      description:
        'Husband sends a WhatsApp message pronouncing talaq three times in one go. Under the 2019 Act the pronouncement is void; the marriage subsists and the husband is liable to the penal consequences of the Act.',
    },
  ],
  hypotheticals: [
    {
      id: 'mpl-hypo',
      title: 'Classroom problem',
      facts:
        'A Muslim husband pronounces “talaq, talaq, talaq” in a single sitting in 2024 and claims the marriage is dissolved. The wife approaches the court.',
      question: 'What is the legal position?',
      applicableLaw:
        'Muslim Women (Protection of Rights on Marriage) Act, 2019; Shayara Bano v. Union of India (2017).',
      analysis:
        'Instantaneous triple talaq is void under the 2019 Act. The marriage continues. The husband may be prosecuted for the offence under the Act. The wife retains her rights arising from the subsisting marriage, including maintenance.',
      conclusion:
        'The talaq is of no legal effect; cite the 2019 Act and Shayara Bano.',
    },
  ],
  distinctions: [
    {
      id: 'mpl-dist',
      title: 'Muslim divorce vs HMA divorce',
      left: 'Muslim personal law / 1939 / 2019 Acts',
      right: 'Hindu Marriage Act, 1955',
      rows: [
        { point: 'Source', left: 'Primarily uncodified + limited statutes', right: 'Fully codified statute' },
        { point: 'Triple talaq', left: 'Void and an offence (2019 Act)', right: 'No equivalent concept' },
        { point: 'Wife’s judicial divorce', left: '1939 Act grounds', right: 's. 13 HMA grounds' },
      ],
    },
  ],
  misconceptions: [
    { id: 'mpl-m1', trap: 'Applying Section 13 HMA to a Muslim couple.', correction: 'HMA does not apply; use Muslim personal law and the 1939 / 2019 Acts.' },
    { id: 'mpl-m2', trap: 'Treating triple talaq as still effective after 2019.', correction: 'It is void and an offence under the 2019 Act.' },
  ],
  questionsAndAnswers: [
    {
      id: 'mpl-q-10',
      marks: 10,
      question: 'Explain the legal position of instantaneous triple talaq in India after 2019.',
      answer:
        'Introduction. Instantaneous triple talaq (talaq-e-biddat) was a form of divorce under certain schools of Muslim law by which the husband pronounced talaq three times in one sitting.\n\nShayara Bano (2017). The Supreme Court held the practice of instantaneous triple talaq to be unconstitutional and not an essential religious practice.\n\n2019 Act. The Muslim Women (Protection of Rights on Marriage) Act, 2019 declares any pronouncement of talaq by a Muslim husband upon his wife resulting in instantaneous and irrevocable divorce to be void and illegal. It creates a cognizable and compoundable offence.\n\nConsequence. The marriage is not dissolved by such a pronouncement. The wife retains the status of a married woman and the consequential rights.\n\nConclusion. Cite both Shayara Bano and the 2019 Act; do not treat triple talaq as effective.',
    },
    {
      id: 'mpl-q-16',
      marks: 16,
      question: 'Discuss the grounds on which a Muslim wife may seek dissolution of marriage under the Dissolution of Muslim Marriages Act, 1939. How does this statute interact with the 2019 triple-talaq legislation?',
      answer:
        'Introduction. The Dissolution of Muslim Marriages Act, 1939 gives a Muslim wife a statutory right to obtain a decree of dissolution of marriage on the grounds set out in Section 2.\n\nPrincipal grounds (s. 2). (i) Husband’s whereabouts unknown for four years; (ii) neglect or failure to provide maintenance for two years; (iii) sentence of imprisonment for seven years or more; (iv) failure to perform marital obligations for three years without reasonable cause; (v) impotence at the time of marriage and continuing; (vi) insanity for two years or leprosy / virulent venereal disease; (vii) if she was given in marriage before fifteen and repudiates before eighteen (option of puberty), provided the marriage was not consummated; (viii) cruelty (including physical ill-treatment, association with women of evil repute, obstruction in religious practice, unequal treatment between wives, etc.); (ix) any other ground recognised by Muslim law as valid for dissolution.\n\nProcedure. The wife presents a petition in the competent court; the court, if satisfied, passes a decree of dissolution.\n\nInteraction with 2019 Act. The 2019 Act deals only with instantaneous triple talaq by the husband. It does not displace the 1939 Act. A wife may still sue for dissolution under the 1939 Act on the statutory grounds even if the husband has not pronounced talaq.\n\nConclusion. List the major clauses of s. 2 of the 1939 Act, note the option of puberty, and keep the 2019 Act confined to the voidness and criminality of instantaneous triple talaq.',
    },
  ],
  cases: [
    {
      name: 'Shayara Bano v. Union of India',
      year: 2017,
      citation: '(2017) 9 SCC 1',
      holding: 'The practice of instantaneous triple talaq is unconstitutional and not protected as an essential religious practice.',
      relevance: 'Foundation for the 2019 Act.',
    },
    {
      name: 'Danial Latifi v. Union of India',
      year: 2001,
      citation: '(2001) 7 SCC 740',
      holding: 'The Muslim Women (Protection of Rights on Divorce) Act, 1986 must be read so as to secure a reasonable and fair provision and maintenance for the divorced Muslim woman.',
      relevance: 'Maintenance of divorced Muslim women.',
    },
  ],
  bareActPointers: [
    'Muslim Personal Law (Shariat) Application Act, 1937',
    'Dissolution of Muslim Marriages Act, 1939',
    'Muslim Women (Protection of Rights on Marriage) Act, 2019',
    'Muslim Women (Protection of Rights on Divorce) Act, 1986',
  ],
  examTips: [
    'Never apply HMA sections to Muslim parties.',
    'For triple talaq: Shayara Bano + 2019 Act.',
    'For wife’s judicial divorce: list the main grounds under the 1939 Act.',
    'Keep maintenance under the 1986 Act / Danial Latifi distinct from s. 125 BNSS.',
  ],
  revisionPoints: [
    'Marriage = contract (nikah) + mahr.',
    '1939 Act = wife’s statutory grounds of divorce.',
    '2019 Act = triple talaq void + offence.',
    'Shayara Bano is the constitutional foundation.',
  ],
} satisfies TopicContent
