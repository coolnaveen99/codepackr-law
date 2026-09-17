import type { TopicContent } from '../loadTopicContent'

/**
 * Article 19 — Freedoms
 * Subject: constitution | Topic id: art-19
 * Settled black-letter on Art 19(1) freedoms and reasonable restrictions.
 */
const content: TopicContent = {
  study: `Text focus
Article 19(1) guarantees to citizens: (a) freedom of speech and expression; (b) assemble peaceably and without arms; (c) form associations or unions (or cooperative societies); (d) move freely throughout India; (e) reside and settle in any part of India; (g) practise any profession, or carry on any occupation, trade or business. (Clause (f) on property was deleted by the 44th Amendment.)

Reasonable restrictions
Clauses (2)–(6) permit the State to impose reasonable restrictions on specified grounds (e.g. sovereignty and integrity, security of the State, public order, decency or morality, contempt of court, defamation, incitement to an offence — for speech under Art 19(2)).

Who enjoys Art 19
Article 19 rights are available to citizens (not to all “persons” unlike Arts 14 and 21).

Link with Arts 14 and 21
After Maneka Gandhi, restrictions affecting liberty and speech are often tested through the golden triangle of Articles 14, 19 and 21.

Exam focus
Name the six freedoms, state that restrictions must be reasonable and on enumerated grounds, and note citizenship requirement.`,

  short: `Article 19(1) guarantees six freedoms to citizens (speech, assembly, association, movement, residence, profession). Clauses (2)–(6) allow reasonable restrictions on specified grounds. Available to citizens; read with Arts 14 and 21 after Maneka.`,

  detailed: `Text focus
Article 19(1) guarantees to citizens: (a) freedom of speech and expression; (b) assemble peaceably and without arms; (c) form associations or unions (or cooperative societies); (d) move freely throughout India; (e) reside and settle in any part of India; (g) practise any profession, or carry on any occupation, trade or business. (Clause (f) on property was deleted by the 44th Amendment.)

Reasonable restrictions
Clauses (2)–(6) permit the State to impose reasonable restrictions on specified grounds (e.g. sovereignty and integrity, security of the State, public order, decency or morality, contempt of court, defamation, incitement to an offence — for speech under Art 19(2)).

Who enjoys Art 19
Article 19 rights are available to citizens (not to all “persons” unlike Arts 14 and 21).

Link with Arts 14 and 21
After Maneka Gandhi, restrictions affecting liberty and speech are often tested through the golden triangle of Articles 14, 19 and 21.

Exam focus
Name the six freedoms, state that restrictions must be reasonable and on enumerated grounds, and note citizenship requirement.`,

  sections: [
    {
      id: 'art-19-freedoms',
      title: 'Six freedoms (Art 19(1))',
      order: 1,
      content: [
        'Speech and expression; peaceful unarmed assembly; associations/unions/cooperative societies; free movement; residence and settlement; profession/occupation/trade/business.',
        'The former property freedom under Art 19(1)(f) was repealed by the 44th Amendment.'
      ],
    },
    {
      id: 'art-19-restrictions',
      title: 'Reasonable restrictions',
      order: 2,
      content: [
        'Restrictions must be reasonable and fall within the grounds listed in Art 19(2)–(6).',
        'Courts examine both the purpose and the proportionality/reasonableness of the restriction.'
      ],
    }
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-19', article: 'Article 19', title: 'Protection of certain rights regarding freedom of speech, etc.' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-14', article: 'Article 14', title: 'Equality before law' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-21', article: 'Article 21', title: 'Protection of life and personal liberty' }
  ],

  examples: [
    {
      id: 'art-19-speech-example',
      title: 'Speech restriction',
      description: 'A law limiting speech must not only pursue a ground listed in Article 19(2) but also be a reasonable restriction; an overbroad ban may fail reasonableness review.',
    }
  ],

  questionsAndAnswers: [
    {
      id: 'art-19-qa-1',
      question: 'Are Article 19 freedoms available to non-citizens?',
      answer: 'No. Article 19 rights are guaranteed to citizens.',
      explanation: 'Contrast with Articles 14 and 21, which speak of “person”.',
      relatedProvisionIds: ['constitution-article-19'],
    },
    {
      id: 'art-19-qa-2',
      question: 'What is required for a valid restriction under Article 19?',
      answer: 'The restriction must be reasonable and based on a ground specified in the relevant clause of Article 19(2)–(6).',
      explanation: '',
      relatedProvisionIds: ['constitution-article-19'],
    },
    {
      id: 'art-19-qa-3',
      question: 'Which freedom was deleted by the 44th Amendment?',
      answer: 'The freedom to acquire, hold and dispose of property under the former Article 19(1)(f).',
      explanation: '',
      relatedProvisionIds: ['constitution-article-19'],
    }
  ],

  relatedTopics: ['Article 14 — Equality', 'Article 21 — Life & Personal Liberty', 'Fundamental Rights', 'Basic Structure Doctrine'],

  cases: [
    {
      name: 'Maneka Gandhi v. Union of India',
      year: 1978,
      citation: '(1978) 1 SCC 248',
      holding: 'Articles 14, 19 and 21 form a golden triangle; procedure affecting liberty must be fair, just and reasonable.',
      relevance: 'Links Art 19 analysis with Arts 14 and 21.',
    },
    {
      name: 'Shreya Singhal v. Union of India',
      year: 2015,
      citation: '(2015) 5 SCC 1',
      holding: 'Section 66A of the IT Act was struck down as unconstitutional for vagueness and overbreadth violating Article 19(1)(a).',
      relevance: 'Modern landmark on free speech and reasonable restrictions.',
    }
  ],

  bareActPointers: ['Art 19', 'Art 14', 'Art 21'],

  examTips: ['List all six freedoms clearly.', 'Always write: reasonable restriction + enumerated ground.', 'State that Art 19 is for citizens.', 'Link to golden triangle when procedure/liberty overlaps.'],
}

export default content
