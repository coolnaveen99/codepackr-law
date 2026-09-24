import type { TopicContent } from '../loadTopicContent'

/**
 * Article 18 — Abolition of Titles
 * Subject: constitution | Topic id: art-18
 * Abolition of titles (except military and academic); Balaji Raghavan on Bharat Ratna and Padma awards;
 * restrictions on acceptance of foreign titles.
 */
const content: TopicContent = {
  glance:
    'Article 18 abolishes titles (other than military and academic distinctions). No citizen may accept a title from a foreign State. Bharat Ratna and Padma awards are not “titles” when used without prefixes or suffixes (Balaji Raghavan). The Article reinforces the republican equality code of Part III.',

  study: `Topic at a Glance
Article 18 of the Constitution of India abolishes titles and restricts the acceptance of foreign titles and presents. It is a structural equality provision designed to prevent the recreation of a titled aristocracy in a democratic republic.

Statutory Anatomy
1. Article 18(1) — No title, not being a military or academic distinction, shall be conferred by the State.
2. Article 18(2) — No citizen of India shall accept any title from any foreign State.
3. Article 18(3) — No person who is not a citizen of India shall, while he holds any office of profit or trust under the State, accept without the consent of the President any title from any foreign State.
4. Article 18(4) — No person holding any office of profit or trust under the State shall, without the consent of the President, accept any present, emolument, or office of any kind from or under any foreign State.

Military and Academic Distinctions
Military ranks and academic degrees (Ph.D., D.Litt., etc.) are expressly saved. They are functional designations, not hereditary or honorific titles of nobility.

National Awards — Balaji Raghavan v. Union of India (1996)
A Constitution Bench examined whether Bharat Ratna, Padma Vibhushan, Padma Bhushan and Padma Shri violate Article 18:
- These awards are not “titles” within the meaning of Article 18(1).
- They are national recognitions of excellence in various fields.
- The Court directed that the awards must not be used as prefixes or suffixes to the name of the awardee (e.g., one may not style oneself “Padma Shri X”).
- Subject to that condition, the awards are constitutionally valid.

Foreign Titles and Presents
Clauses (2)–(4) protect the dignity of the Republic and the independence of public office-holders. Acceptance of foreign titles by citizens is barred; non-citizens holding office under the State and all office-holders accepting foreign presents require Presidential consent.

Procedural & Courtroom Anchors
1. Forum: Article 32 / 226 for challenges to conferment or misuse of titles/awards; ordinary criminal or service law for related misconduct.
2. Standing: Any citizen in a public-interest challenge to systemic misuse; the affected office-holder in personal cases.
3. Remedies: Declaration that a purported title is void; mandamus restraining use of awards as prefixes/suffixes; directions to the Union on the awards framework.

Current-Law Position & Milestone
Article 18 remains unamended. The Balaji Raghavan guidelines continue to govern the use of national awards. Current through the 106th Amendment (2023).`,

  sections: [
    {
      id: 'a18-abolition',
      title: 'Abolition of Titles — Article 18(1)',
      order: 1,
      content: [
        'State shall not confer any title other than military or academic distinctions.',
        'Aimed at preventing a new aristocracy in a republican democracy.',
      ],
    },
    {
      id: 'a18-foreign',
      title: 'Foreign Titles and Presents — Clauses (2)–(4)',
      order: 2,
      content: [
        'Citizens may not accept titles from foreign States.',
        'Non-citizens holding office under the State need Presidential consent for foreign titles.',
        'Office-holders need Presidential consent for foreign presents, emoluments or offices.',
      ],
    },
    {
      id: 'a18-awards',
      title: 'National Awards — Balaji Raghavan',
      order: 3,
      content: [
        'Bharat Ratna and Padma awards are not “titles” under Article 18(1).',
        'They must not be used as prefixes or suffixes to the awardee’s name.',
      ],
    },
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-18', article: 'Article 18', title: 'Abolition of titles' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-14', article: 'Article 14', title: 'Equality before law' },
  ],

  examples: [
    {
      id: 'a18-ex-1',
      title: 'Illustration 1 — Valid Academic Distinction (Applies)',
      description: 'A university confers the degree of Doctor of Science on a researcher. This is an academic distinction expressly saved by Article 18(1) and is valid.',
    },
    {
      id: 'a18-ex-2',
      title: 'Illustration 2 — Misuse of Padma Award as Prefix (Fails)',
      description: 'An awardee of Padma Shri styles himself “Padma Shri X” on official letterheads and in court pleadings. This violates the Balaji Raghavan direction that national awards must not be used as prefixes or suffixes.',
    },
  ],

  hypotheticals: [
    {
      id: 'a18-hypo',
      title: 'Chamber Practice Hypothetical (Foreign Honour)',
      facts: 'A sitting High Court judge, who is an Indian citizen, is offered a knighthood by a foreign government for his contribution to international commercial arbitration. He seeks advice on whether he may accept it.',
      question: 'Advise the judge with reference to Article 18.',
      applicableLaw: 'Article 18(2); Article 18(4); judicial ethics and independence.',
      analysis: '1. Article 18(2) prohibits any citizen from accepting a title from a foreign State. A knighthood is a classic foreign title.\n2. Even if characterised as an honour rather than a hereditary title, acceptance by a sitting judge raises independence and propriety concerns under the broader constitutional ethos.\n3. Article 18(4) additionally restricts acceptance of presents or offices from foreign States by persons holding office of profit or trust under the State without Presidential consent.\n4. The safest and constitutionally correct course is to decline the knighthood.',
      conclusion: 'The judge should not accept the foreign title. Article 18(2) is a clear bar for citizens.',
    },
  ],

  distinctions: [
    {
      id: 'a18-dist-awards',
      title: 'Titles vs National Awards',
      left: 'Titles (prohibited)',
      right: 'National Awards (permitted with conditions)',
      rows: [
        { point: 'Nature', left: 'Honorific designations of nobility or rank', right: 'Recognition of excellence in specified fields' },
        { point: 'Use with name', left: 'Typically used as prefix/suffix', right: 'Must not be used as prefix/suffix (Balaji Raghavan)' },
        { point: 'Constitutional status', left: 'Barred by Article 18(1) (except military/academic)', right: 'Not “titles”; constitutionally valid' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 'a18-trap-1',
      trap: 'Bharat Ratna and Padma awards are unconstitutional titles under Article 18.',
      correction: 'Balaji Raghavan held that these awards are not titles. They are valid provided they are not used as prefixes or suffixes.',
    },
    {
      id: 'a18-trap-2',
      trap: 'Military ranks and academic degrees are also prohibited titles.',
      correction: 'Article 18(1) expressly saves military and academic distinctions.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 'a18-qa-10',
      draftingCategory: 'brief',
      question: 'Explain Article 18 of the Constitution. Are Bharat Ratna and Padma awards compatible with the abolition of titles?',
      answer: `I. ISSUE
Article 18 abolishes titles and restricts foreign titles and presents.

II. SCHEME OF ARTICLE 18
1. Clause (1): No title (other than military or academic distinction) shall be conferred by the State.
2. Clause (2): No citizen shall accept a title from a foreign State.
3. Clauses (3)–(4): Restrictions on non-citizens in office and on acceptance of foreign presents by office-holders, subject to Presidential consent.

III. NATIONAL AWARDS
In Balaji Raghavan v. Union of India (1996) the Supreme Court held that Bharat Ratna and Padma awards are not “titles”. They recognise excellence and are valid, provided they are not used as prefixes or suffixes to the awardee’s name.

IV. CONCLUSION
Article 18 protects republican equality. National awards, properly used, are consistent with it. Current through the 106th Amendment (2023).`,
      relatedProvisionIds: ['constitution-article-18'],
    },
    {
      id: 'a18-qa-16',
      draftingCategory: 'submissions',
      question: 'Critically examine the scope of Article 18. Discuss the distinction between titles and national awards with reference to Balaji Raghavan and the republican equality code.',
      answer: `I. INTRODUCTION
Article 18 is a structural provision of the equality code. It prevents the re-emergence of a titled aristocracy and protects the independence of public office from foreign honour systems.

II. TEXTUAL SCHEME
Clause (1) abolishes titles conferred by the State, saving only military and academic distinctions. Clauses (2)–(4) regulate foreign titles and presents. The design is both anti-feudal and anti-colonial.

III. BALAJI RAGHAVAN AND NATIONAL AWARDS
The Constitution Bench held that Bharat Ratna and Padma awards are not titles. They are national recognitions of merit. The Court, however, insisted that they must not be used as prefixes or suffixes, lest they acquire the social function of titles. This preserves both the awards system and the equality principle.

IV. REPUBLICAN EQUALITY
Article 18 works with Articles 14–17 to dismantle hierarchies of status. While Articles 14–16 address classification and discrimination, and Article 17 abolishes Untouchability, Article 18 abolishes formal titles. Together they articulate a single constitutional vision of equal citizenship.

V. CONTEMPORARY RELEVANCE
Debates occasionally arise about the proliferation of awards or their political use. The constitutional answer remains the Balaji Raghavan framework: awards are permissible; title-like use is not. Foreign honours for citizens remain barred under clause (2).

VI. CONCLUSION
Article 18 is a quiet but essential pillar of republican equality. National awards, confined to their proper role, do not violate it. Current through the 106th Amendment (2023).`,
      relatedProvisionIds: ['constitution-article-18', 'constitution-article-14'],
    },
  ],

  bareActPointers: ['Article 18'],
  examTips: [
    'Always cite Balaji Raghavan on Bharat Ratna / Padma awards.',
    'Note the military and academic exceptions.',
    'Mention the foreign-title bar under clause (2).',
  ],
  relatedTopics: ['art-14', 'art-15', 'art-17', 'fundamental-rights'],
}

export default content
