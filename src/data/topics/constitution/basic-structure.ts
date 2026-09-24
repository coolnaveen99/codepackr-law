import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Parliament may amend the Constitution under Article 368, including Fundamental Rights, but cannot damage or destroy its basic structure. Kesavananda Bharati (1973) is the 13-judge holding. There is no closed list of basic features.',

  study: `Topic at a glance
The basic structure doctrine is the judicial limit on [[REF:ARTICLE:CONSTITUTION:ARTICLE-368|Article 368]]. It is not a clause in the Constitution. It is a constitutional principle laid down by the Supreme Court.

Why does it exist?
If amending power were unlimited, a special majority could convert a republic into something else while keeping the same Preamble on paper. The doctrine exists to keep identity: democracy, rule of law, judicial review, federalism, secularism, and similar features identified case by case.

Historical development
Shankari Prasad (1951) and Sajjan Singh (1965) treated amendment as not “law” under Article 13, so Fundamental Rights could be amended. Golaknath (1967) barred amendment of Fundamental Rights and used prospective overruling. Kesavananda (1973) overruled that total bar: Parliament can amend Part III, but cannot destroy basic structure. Indira Gandhi v. Raj Narain applied it to the 39th Amendment. Minerva Mills struck the 42nd Amendment’s attempt to immunise amendments and to smash the FR–DPSP balance. I.R. Coelho opened Ninth Schedule laws inserted after 24 April 1973 to basic-structure review. The NJAC case (2015) struck the 99th Amendment.

Essential elements
1. There is a constitutional amendment (or a law tested through the amendment’s immunity, as in Coelho).
2. Identify the feature said to be basic.
3. Ask whether the amendment damages or destroys that feature — not whether it merely affects it.
4. There is no exhaustive catalogue. Cite the feature from a case, do not invent a new “basic feature” in the hall.

How it operates
The Court does not rewrite Article 368. It reads a limitation into the power to “amend”. Ordinary legislation is still tested under Part III and legislative competence. Basic structure is the extra test for the constituent power.

Important distinctions
Golaknath froze Part III. Kesavananda unfroze Part III and froze identity. Students who write “Fundamental Rights cannot be amended” are answering 1967, not 1973.

Current-law position
Kesavananda stands. The 106th Amendment (2023) is the latest enacted amendment; it has not been struck on basic-structure grounds. The 99th Amendment (NJAC) was struck. A 131st Amendment Bill (2026) was defeated and is not law.

Educational note
Reuse the canonical doctrine record rather than rewriting Kesavananda on every page: [[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE]].`,

  sections: [
    { id: 'bs-kb', title: 'Kesavananda holding', order: 1, content: [
      'Amending power is wide but not unlimited.',
      'Fundamental Rights may be amended; basic structure may not be destroyed.',
    ]},
    { id: 'bs-later', title: 'Later applications', order: 2, content: [
      'Minerva Mills — limited amending power itself is basic; FR–DPSP harmony.',
      'I.R. Coelho — Ninth Schedule insertions after 24 April 1973 are open to basic-structure review.',
    ]},
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-368', article: 'Article 368', title: 'Power of Parliament to amend the Constitution and procedure therefor' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-13', article: 'Article 13', title: 'Laws inconsistent with or in derogation of the Fundamental Rights' },
  ],

  examples: [
    { id: 'bs-ex-1', title: 'Example 1 — simple', description: 'A 2/3 majority cannot, by amendment, abolish judicial review of constitutional amendments and then pass any law it likes. That would destroy a basic feature even if Article 368 procedure was followed.' },
    { id: 'bs-ex-2', title: 'Example 2 — legal', description: 'Changing the number of puisne judges by amendment is ordinarily not a basic-structure problem. Replacing an independent appointment system with a commission the Court holds to be executive-dominated (NJAC) was held to be one.' },
  ],

  hypotheticals: [
    {
      id: 'bs-hypo',
      title: 'Examination hypothetical',
      facts: 'Parliament, following Article 368 procedure including ratification, inserts a clause: “No amendment made under this article shall be called in question in any court.”',
      question: 'Is the clause valid?',
      applicableLaw: 'Article 368; Kesavananda; Minerva Mills (limited amending power and judicial review as basic).',
      analysis: 'The clause tries to oust judicial review of amendments. Minerva Mills treated limited amending power and the role of the Court as basic. A total ouster of review of the constituent power is the very device Kesavananda exists to stop.',
      conclusion: 'Invalid as damaging basic structure. Educational hypothetical modelled on the 42nd Amendment clauses that Minerva Mills struck.',
    },
  ],

  distinctions: [
    {
      id: 'bs-golak-kes',
      title: 'Golaknath and Kesavananda',
      left: 'Golaknath (1967)',
      right: 'Kesavananda (1973)',
      rows: [
        { point: 'Part III', left: 'Cannot be amended', right: 'Can be amended, subject to basic structure' },
        { point: 'Device', left: 'Prospective overruling; amendment as “law” under Art 13', right: 'Limitation implied in “amend” in Art 368' },
        { point: 'Exam trap', left: 'Do not cite as current law', right: 'Current doctrine' },
      ],
    },
  ],

  misconceptions: [
    { id: 'bs-trap-1', trap: 'Fundamental Rights cannot be amended.', correction: 'That was Golaknath. Kesavananda allows amendment of Part III unless basic structure is destroyed.' },
    { id: 'bs-trap-2', trap: 'There is a fixed list of basic features in the Constitution.', correction: 'The list is judicial and open-ended. Cite features from cases.' },
    { id: 'bs-trap-3', trap: 'The 131st Amendment is the latest amendment.', correction: 'The 131st was a Bill defeated in 2026. The latest enacted amendment is the 106th (2023).' },
  ],

  questionsAndAnswers: [
    { id: 'bs-qa-1', question: 'Which case laid down the basic structure doctrine?', answer: 'Kesavananda Bharati v. State of Kerala (1973).', relatedProvisionIds: ['constitution-article-368'] },
    { id: 'bs-qa-2', question: 'Can Fundamental Rights be amended after Kesavananda?', answer: 'Yes, so long as the amendment does not damage or destroy the basic structure.', relatedProvisionIds: ['constitution-article-368'] },
    { id: 'bs-qa-3', question: 'What did I.R. Coelho hold about the Ninth Schedule?', answer: 'Laws inserted in the Ninth Schedule after 24 April 1973 are open to basic-structure review.', relatedProvisionIds: ['constitution-article-368'] },
  ],

  relatedTopics: ['Amendment of the Constitution', 'Article 14 — Equality', 'Fundamental Rights', 'Directive Principles (DPSP)'],

  cases: [
    { name: 'Kesavananda Bharati v. State of Kerala', year: 1973, citation: '(1973) 4 SCC 225', holding: 'Parliament cannot amend the Constitution so as to damage or destroy its basic structure.', relevance: 'Foundation. Always lead with this.' },
    { name: 'Indira Nehru Gandhi v. Raj Narain', year: 1975, citation: '1975 Supp SCC 1', holding: 'Applied basic structure to strike the 39th Amendment’s attempt to place the Prime Minister’s election beyond judicial review.', relevance: 'First major application after Kesavananda.' },
    { name: 'Minerva Mills Ltd. v. Union of India', year: 1980, citation: '(1980) 3 SCC 625', holding: 'Limited amending power is itself basic; parts of the 42nd Amendment that destroyed FR–DPSP harmony were struck.', relevance: 'High-frequency follow-up.' },
    { name: 'I.R. Coelho v. State of Tamil Nadu', year: 2007, citation: '(2007) 2 SCC 1', holding: 'Ninth Schedule insertions after 24 April 1973 are open to basic-structure review.', relevance: 'Ninth Schedule is not a vault.' },
    { name: 'Supreme Court Advocates-on-Record Assn. v. Union of India (NJAC)', year: 2015, citation: '(2016) 5 SCC 1', holding: 'The 99th Amendment (NJAC) was struck as damaging judicial independence, a basic feature.', relevance: 'Latest landmark application students must know.' },
  ],

  bareActPointers: ['Art 368', 'Art 13'],

  examFrameworks: [
    {
      marks: 10,
      question: 'Explain the basic structure doctrine.',
      steps: [
        'Define: implied limit on Art 368.',
        'Kesavananda holding in one accurate sentence.',
        'Two or three features (democracy, judicial review, rule of law) with a later case.',
        'Distinguish Golaknath.',
        'Conclude: Part III can be amended; identity cannot be destroyed.',
      ],
    },
    {
      marks: 16,
      question: 'Trace the development of the amending power from Shankari Prasad to I.R. Coelho. Is the basic structure doctrine justified?',
      steps: [
        'Shankari Prasad / Sajjan Singh.',
        'Golaknath and prospective overruling.',
        'Kesavananda in detail (13 judges; what was actually held).',
        'Indira Gandhi; Minerva Mills; Coelho; NJAC.',
        'No closed list; how a student should identify a feature.',
        'Critical comment: judicially created, but now part of constitutional identity.',
        'Current position including that Bills are not amendments.',
        'Conclusion.',
      ],
    },
  ],

  answerSkeleton: [
    'Introduction — Art 368 power + implied limit.',
    'History in four names: Shankari Prasad, Golaknath, Kesavananda, Minerva Mills.',
    'Holding and features.',
    'One application case matching the question (Coelho if Ninth Schedule; NJAC if judiciary).',
    'Golaknath distinction.',
    'Conclusion.',
  ],

  revisionPoints: [
    'Kesavananda 1973: amend, but do not destroy basic structure.',
    'Golaknath is not current law on a total bar.',
    'Minerva Mills; Coelho (Ninth Schedule after 24 Apr 1973); NJAC 2015.',
    'Latest enacted amendment = 106th, not a defeated Bill.',
  ],

  examTips: [
    'Write “damage or destroy”, not “affect”. Every amendment affects something.',
    'If the question is “latest amendment”, answer 106th, then offer basic structure only if asked.',
  ],
}

export default content
