import type { Judgment } from './types'

export const shreyaSinghal: Judgment = {
  id: 'shreya-singhal-2015',
  caseName: 'Shreya Singhal v. Union of India',
  shortName: 'Shreya Singhal',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law',
  year: 2015,
  citation: '(2015) 5 SCC 1',
  bench: '2-Judge Bench',
  judges: ['J. Chelameswar, J.', 'R.F. Nariman, J.'],
  subject: 'Constitution',
  topics: ['Freedom of Speech', 'Article 19(1)(a)', 'Section 66A IT Act', 'Internet'],
  tags: ['AIBE', 'Judiciary', 'Free Speech', 'IT Act', 'Article 19'],
  summary:
    'The Supreme Court struck down Section 66A of the Information Technology Act, 2000 as unconstitutional for vagueness and overbreadth, violating Article 19(1)(a) read with Article 19(2).',
  facts: [
    'Section 66A criminalised sending "offensive" messages through communication services.',
    'Petitioners challenged arrests and the chilling effect of the vague provision on online speech.',
  ],
  issues: [
    'Whether Section 66A IT Act is unconstitutional for vagueness and overbreadth under Article 19(1)(a).',
  ],
  arguments: {
    appellant: [
      'Terms such as "offensive" and "annoyance" are vague and undefined, enabling arbitrary prosecution and chilling free speech.',
    ],
    respondent: [
      'The provision is necessary to curb online abuse and can be read down to constitutional applications.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-19',
      article: 'Article 19(1)(a)',
      title: 'Freedom of speech and expression',
      subjectSlug: 'constitution',
    },
  ],
  reasoning: [
    {
      heading: 'Vagueness and overbreadth',
      explanation:
        'A penal law that does not define the boundaries of criminal speech with clarity fails Article 19(1)(a) and invites arbitrary enforcement.',
    },
    {
      heading: 'No saving by Article 19(2)',
      explanation:
        'Section 66A was not narrowly tailored to the exhaustive grounds under Article 19(2) such as defamation, public order, or incitement to an offence.',
    },
  ],
  decision:
    'Section 66A was struck down in its entirety. Section 69A and the intermediary framework were largely upheld with procedural safeguards.',
  holding:
    'Section 66A IT Act is unconstitutional for vagueness and overbreadth under Article 19(1)(a).',
  ratioDecidendi:
    'Criminal restrictions on speech must be precise and fall within Article 19(2); vague offences that chill legitimate expression are void.',
  relatedCases: [
    {
      caseName: 'K.A. Abbas v. Union of India',
      citation: '(1970) 2 SCC 780',
      relationship: 'Cited',
    },
  ],
  examPoints: [
    'Section 66A IT Act struck down.',
    'Vagueness and overbreadth doctrine applied to online speech.',
    'Article 19(2) grounds are exhaustive.',
  ],
  mcqs: [
    {
      id: 'shreya-mcq-1',
      question: 'Shreya Singhal struck down which provision?',
      options: ['Section 79 IT Act', 'Section 66A IT Act', 'Section 69A IT Act entirely', 'Article 19(1)(a)'],
      correctIndex: 1,
      explanation: 'Section 66A of the IT Act was struck down as unconstitutional.',
    },
  ],
  source: { type: 'document', title: 'Supreme Court Cases (2015) 5 SCC 1', extractionMethod: 'manual', verified: true },
  status: 'reviewed',
}

export const shayaraBano: Judgment = {
  id: 'shayara-bano-2017',
  caseName: 'Shayara Bano v. Union of India',
  shortName: 'Shayara Bano',
  court: 'Supreme Court of India',
  jurisdiction: 'Constitutional Law & Personal Law',
  year: 2017,
  citation: '(2017) 9 SCC 1',
  bench: '5-Judge Constitution Bench',
  judges: ['J.S. Khehar, C.J.', 'Kurian Joseph, J.', 'R.F. Nariman, J.', 'U.U. Lalit, J.', 'S. Abdul Nazeer, J.'],
  subject: 'Constitution',
  topics: ['Triple Talaq', 'Article 14', 'Article 25', 'Personal Law'],
  tags: ['AIBE', 'Judiciary', 'Gender', 'Personal Law', 'Article 14'],
  summary:
    'By a 3:2 majority, the Court set aside the practice of Talaq-e-Biddat (instant triple talaq) as unconstitutional, applying among other tests the doctrine of manifest arbitrariness under Article 14.',
  facts: [
    'Shayara Bano challenged the practice of instantaneous triple talaq after being divorced by her husband through that form.',
    'The Court examined whether the practice was essential to Islam and whether it survived constitutional scrutiny.',
  ],
  issues: [
    'Whether Talaq-e-Biddat is protected under Article 25 as an essential religious practice.',
    'Whether the practice is void for arbitrariness under Article 14.',
  ],
  arguments: {
    appellant: [
      'Instant triple talaq is arbitrary, unilateral, and not an essential religious practice; it violates Articles 14, 15 and 21.',
    ],
    respondent: [
      'Personal law is protected under Article 25; reform should come from the legislature, not the Court.',
    ],
  },
  provisions: [
    {
      actId: 'constitution',
      actName: 'Constitution of India',
      provisionId: 'art-14',
      article: 'Article 14',
      title: 'Equality before law',
      subjectSlug: 'constitution',
      topicId: 'art-14',
    },
  ],
  reasoning: [
    {
      heading: 'Manifest arbitrariness',
      explanation:
        'A majority held that talaq-e-biddat is manifestly arbitrary, allowing the marital bond to be broken whimsically without opportunity for reconciliation.',
    },
    {
      heading: 'Essential practices',
      explanation:
        'The practice was not accepted as an essential religious practice immune from constitutional scrutiny under Article 25.',
    },
  ],
  decision:
    'Talaq-e-Biddat was set aside. Parliament later enacted the Muslim Women (Protection of Rights on Marriage) Act, 2019.',
  holding:
    'Instant triple talaq (talaq-e-biddat) is unconstitutional and void.',
  ratioDecidendi:
    'A practice that is manifestly arbitrary under Article 14 and not an essential religious practice cannot claim protection under Article 25.',
  relatedCases: [
    {
      caseName: 'Shamim Ara v. State of U.P.',
      citation: '(2002) 7 SCC 518',
      relationship: 'Applied',
    },
  ],
  examPoints: [
    '3:2 majority; triple talaq struck down.',
    'Manifest arbitrariness under Article 14.',
    'Led to the 2019 legislation criminalising the practice.',
  ],
  mcqs: [
    {
      id: 'shayara-mcq-1',
      question: 'Shayara Bano is primarily associated with invalidation of:',
      options: ['Polygamy', 'Talaq-e-Biddat (instant triple talaq)', 'Nikah halala only', 'Maintenance under Section 125 CrPC'],
      correctIndex: 1,
      explanation: 'The Court set aside the practice of instant triple talaq by a majority.',
    },
  ],
  source: { type: 'document', title: 'Supreme Court Cases (2017) 9 SCC 1', extractionMethod: 'manual', verified: true },
  status: 'reviewed',
}

export const LEGACY_BATCH_B2: Judgment[] = [shreyaSinghal, shayaraBano]
