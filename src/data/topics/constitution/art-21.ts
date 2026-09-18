import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Article 21 says no person shall be deprived of life or personal liberty except according to procedure established by law. After Maneka Gandhi (1978) that procedure must be fair, just and reasonable. “Life” now includes dignity, privacy, health, livelihood and related claims developed by the Court — always tie them back to the text and a holding.',

  study: `Topic at a glance
Article 21 is the most examined Fundamental Right after equality. The text is short. The case law is not. A good answer starts with the words, then A.K. Gopalan, then Maneka Gandhi, then the expansion of “life”, then limits.

What does the article say?
“No person shall be deprived of life or personal liberty except according to procedure established by law.”

Meaning
Two interests: life, and personal liberty. One condition: a procedure established by law. “Person” is not confined to citizens. The State cannot take either interest by executive whim.

Why does it exist?
Personal liberty was the first casualty of emergency and colonial special powers. The framers chose “procedure established by law” rather than the American “due process” phrase. The Supreme Court later read fairness into that procedure, so Indian law now has a judicial due-process discipline without a textual amendment.

Historical development
A.K. Gopalan (1950) read Article 21 narrowly: if there is a law, and a procedure, the Court does not ask whether the procedure is fair. Maneka Gandhi (1978) rejected that silo. Procedure must be fair, just and reasonable; Articles 14, 19 and 21 are a [[REF:CONCEPT:CONSTITUTIONAL-LAW:GOLDEN-TRIANGLE|golden triangle]]. Francis Coralie Mullin and later cases expanded “life” beyond animal existence to dignity. K.S. Puttaswamy (2017) held privacy to be a Fundamental Right, located primarily in Article 21 read with 14 and 19.

Essential elements
1. A deprivation of life or personal liberty.
2. By the State (Article 12).
3. There must be a law.
4. There must be a procedure.
5. After Maneka, that procedure must be fair, just and reasonable — not a mere ritual.

How the rule operates
Ask: is there a deprivation? Is there a statute? Is the procedure fair in the Article 14 sense? If the claim is an expanded facet (health, livelihood, environment, speedy trial), name the case that actually established that facet. Do not invent a new facet in the examination hall.

Exceptions and limits
Article 21 is not a free-standing welfare code. Directive Principles guide the State; they are not themselves Article 21. During emergency, Article 359 may suspend enforcement of specified rights, with the post-44th-Amendment protection of Articles 20 and 21. Capital punishment survives on a restricted “rarest of rare” judicial discipline (Bachan Singh) — do not write that Article 21 abolishes the death penalty.

Current-law position
Text unchanged. Meaning: Gopalan is not good law on fairness of procedure. Maneka is the gateway. Puttaswamy is the privacy case. Always verify later holdings before expanding the list of “life includes…”.

Educational note
Original CodePackr explanation. Confirm the Bare Act and the judgment before treating a facet as settled.`,

  sections: [
    { id: 'a21-text', title: 'Text and two interests', order: 1, content: [
      'Life and personal liberty are the two protected interests.',
      'Deprivation is allowed only by a procedure established by law — and, after Maneka, a fair procedure.',
    ]},
    { id: 'a21-maneka', title: 'Maneka Gandhi turning point', order: 2, content: [
      'Articles 14, 19 and 21 are read together.',
      'A passport impoundment without a fair hearing failed that combined test.',
    ]},
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-21', article: 'Article 21', title: 'Protection of life and personal liberty' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-21a', article: 'Article 21A', title: 'Right to education' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-22', article: 'Article 22', title: 'Protection against arrest and detention' },
  ],

  examples: [
    { id: 'a21-ex-simple', title: 'Example 1 — simple', description: 'The police lock a person in a thana overnight with no entry in the diary and no production before a magistrate. That is a deprivation of personal liberty without a lawful, fair procedure.' },
    { id: 'a21-ex-legal', title: 'Example 2 — legal', description: 'A law authorises interception of private communication. After Puttaswamy, the State must show legality, necessity and proportionality. A blanket, unguided interception power is the Article 21 problem.' },
  ],

  hypotheticals: [
    {
      id: 'a21-hypo',
      title: 'Examination hypothetical',
      facts: 'A municipal corporation shuts a pavement dweller’s shelter overnight, without notice, to “beautify” a road before a summit. The dweller has lived there for years and works nearby.',
      question: 'Does Article 21 assist?',
      applicableLaw: 'Article 21 (life includes livelihood and dignity in the Olga Tellis / Francis Coralie line); procedure must be fair after Maneka; eviction jurisprudence requires process.',
      analysis: 'There is a deprivation of livelihood/shelter, which later cases have read into “life”. Even if the corporation has a statute, overnight eviction without notice is not a fair procedure. Article 14 (arbitrariness) and 21 travel together. The answer is not that pavement dwelling is a permanent title; it is that deprivation without process fails Article 21.',
      conclusion: 'Article 21 is attracted. Relief is typically notice, hearing, and rehabilitation process as the Court has required in eviction cases — not a freehold in the pavement. Educational hypothetical.',
    },
  ],

  distinctions: [
    {
      id: 'a21-gopalan-maneka',
      title: 'Gopalan and Maneka',
      left: 'A.K. Gopalan (1950)',
      right: 'Maneka Gandhi (1978)',
      rows: [
        { point: 'Procedure', left: 'Any procedure in a law is enough', right: 'Procedure must be fair, just and reasonable' },
        { point: 'Articles 14, 19, 21', left: 'Read in separate silos', right: 'Read as a golden triangle' },
        { point: 'Exam use', left: 'History / overruled on fairness', right: 'Current gateway case' },
      ],
    },
  ],

  misconceptions: [
    { id: 'a21-trap-1', trap: 'Article 21 uses the words “due process of law”.', correction: 'The text is “procedure established by law”. Fairness was read in by Maneka, not by a textual amendment.' },
    { id: 'a21-trap-2', trap: 'Every social claim is a Fundamental Right under Article 21.', correction: 'Only those facets the Court has actually recognised, tied to deprivation of life or liberty. DPSPs are not automatically Article 21.' },
    { id: 'a21-trap-3', trap: 'Article 21A replaced Article 21 for education.', correction: 'Article 21A is a specific right to elementary education (86th Amendment). Article 21 remains the general liberty/life guarantee.' },
  ],

  questionsAndAnswers: [
    { id: 'a21-qa-1', question: 'What is the text of Article 21?', answer: 'No person shall be deprived of life or personal liberty except according to procedure established by law.', relatedProvisionIds: ['constitution-article-21'] },
    { id: 'a21-qa-2', question: 'Which case required the procedure to be fair, just and reasonable?', answer: 'Maneka Gandhi v. Union of India (1978).', relatedProvisionIds: ['constitution-article-21'] },
    { id: 'a21-qa-3', question: 'Which case held privacy to be a Fundamental Right?', answer: 'K.S. Puttaswamy v. Union of India (2017).', relatedProvisionIds: ['constitution-article-21'] },
  ],

  relatedTopics: ['Article 14 — Equality', 'Article 19 — Freedoms', 'Writs (Arts 32 & 226)', 'Emergency Provisions'],

  cases: [
    { name: 'A.K. Gopalan v. State of Madras', year: 1950, citation: 'AIR 1950 SC 27', holding: 'Read Article 21 as satisfied by any legally enacted procedure; articles were treated as mutually exclusive.', relevance: 'Historical starting point. Do not cite it as current law on fairness.' },
    { name: 'Maneka Gandhi v. Union of India', year: 1978, citation: '(1978) 1 SCC 248', holding: 'Procedure under Article 21 must be fair, just and reasonable; Arts 14, 19 and 21 are read together.', relevance: 'The turning point. Always state this holding in a 10-mark answer.' },
    { name: 'Francis Coralie Mullin v. Administrator, Delhi', year: 1981, citation: '(1981) 1 SCC 608', holding: 'Life includes the right to live with human dignity, not mere animal existence.', relevance: 'Standard citation for the expanded meaning of “life”.' },
    { name: 'Olga Tellis v. Bombay Municipal Corporation', year: 1985, citation: '(1985) 3 SCC 545', holding: 'The right to livelihood is an important facet of the right to life; eviction of pavement dwellers requires a fair procedure.', relevance: 'Use in livelihood / eviction fact patterns.' },
    { name: 'K.S. Puttaswamy v. Union of India', year: 2017, citation: '(2017) 10 SCC 1', holding: 'Privacy is a Fundamental Right, primarily under Article 21 read with 14 and 19.', relevance: 'Privacy, Aadhaar, surveillance, data questions.' },
  ],

  bareActPointers: ['Art 21', 'Art 21A', 'Art 22', 'Art 20'],

  examFrameworks: [
    {
      marks: 10,
      question: 'Explain “procedure established by law” under Article 21 with case law.',
      steps: [
        'Quote Article 21.',
        'Explain life and personal liberty; “any person”.',
        'Gopalan in one sentence (narrow), Maneka in three (fair procedure + golden triangle).',
        'One illustration (passport, arrest, eviction).',
        'Conclude with the current position: law + fair procedure.',
      ],
    },
    {
      marks: 16,
      question: 'The Supreme Court has expanded Article 21 into a charter of positive rights. Discuss critically with cases.',
      steps: [
        'Text and original design (procedure established by law).',
        'Gopalan to Maneka in detail.',
        'Expansion of “life”: dignity, livelihood, privacy — name the case for each facet you use.',
        'Limits: not every DPSP; emergency; death penalty still on the books.',
        'Relationship with Articles 14, 19, 21A and 22.',
        'Hypothetical application.',
        'Critical comment: expansion is judicial; students must not invent new facets.',
        'Conclusion.',
      ],
    },
  ],

  answerSkeleton: [
    'Introduction — text of Article 21.',
    'Gopalan (history) → Maneka (current gateway).',
    'Meaning of life and personal liberty, with two named facets and cases.',
    'Fair procedure + Articles 14 and 19.',
    'Apply to facts / example.',
    'Limits and current position.',
  ],

  revisionPoints: [
    'Art 21: life + personal liberty; any person; procedure established by law.',
    'Maneka: procedure must be fair; 14–19–21 together.',
    'Puttaswamy: privacy. Olga Tellis: livelihood. Francis Coralie: dignity.',
    'Do not write “due process” as the constitutional text.',
  ],

  examTips: [
    'Always contrast Gopalan and Maneka. That contrast carries marks.',
    'Name the case for every expanded facet. “Life includes everything” scores zero.',
  ],
}

export default content
