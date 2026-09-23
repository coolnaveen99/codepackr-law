import type { TopicContent } from '../loadTopicContent'

/**
 * Article 26 — Freedom to manage religious affairs
 * Subject: constitution | Topic id: art-26
 * Denominational rights; establish and maintain institutions; manage matters of religion;
 * own and administer property; Shirur Mutt; secular regulation of property.
 */
const content: TopicContent = {
  glance:
    'Article 26 guarantees every religious denomination or section thereof the right to establish and maintain institutions for religious and charitable purposes, manage its own affairs in matters of religion, own and acquire property, and administer such property in accordance with law. Subject to public order, morality and health. It is the institutional counterpart of Article 25.',

  study: `Topic at a Glance
Article 26 of the Constitution of India confers collective rights on every religious denomination or any section thereof. Subject to public order, morality and health, a denomination may establish and maintain institutions for religious and charitable purposes, manage its own affairs in matters of religion, own and acquire movable and immovable property, and administer such property in accordance with law.

Statutory Anatomy
1. Article 26(a) — Right to establish and maintain institutions for religious and charitable purposes.
2. Article 26(b) — Right to manage its own affairs in matters of religion.
3. Article 26(c) — Right to own and acquire movable and immovable property.
4. Article 26(d) — Right to administer such property in accordance with law.

Religious Denomination
In Shirur Mutt (1954), the Court adopted a working definition: a collection of individuals with a common faith, a common organisation, and a distinctive name. Sects and sub-sects may qualify as denominations or sections thereof.

Matters of Religion vs Secular Matters
Article 26(b) protects management of “matters of religion” — doctrines, rituals, and essential practices. Secular aspects — especially property administration under 26(d) — may be regulated by law. Temple entry, accounts, and appointment of non-spiritual officers often fall on the secular side when they do not trench upon essential religious functions.

Relationship with Article 25
Article 25 is primarily individual; Article 26 is institutional/denominational. Both are subject to public order, morality and health. Article 25(2) expressly allows social reform and secular regulation that may affect denominational claims.

Leading Cases
1. Shirur Mutt (1954): Defined denomination; protected essential religious affairs; allowed regulation of secular administration of property.
2. Subsequent temple and wakf cases have refined the boundary between religious and secular administration, generally upholding reasonable statutory supervision of property and finances while protecting core religious functions.

Procedural & Courtroom Anchors
1. Forum: Article 32 / 226.
2. Standing: Denomination, math, trust, or office-bearer representing the denomination.
3. Typical disputes: State takeover of temple management; appointment of executive officers; audit and alienation of property; challenges to denominational exclusion rules (often intertwined with Articles 25 and 14).

Current-Law Position & Milestone
Article 26 remains unamended. Shirur Mutt remains the foundational authority. Current through the 106th Amendment (2023).`,

  sections: [
    {
      id: 'a26-rights',
      title: 'Four Denominational Rights',
      order: 1,
      content: [
        '26(a): Establish and maintain institutions for religious and charitable purposes.',
        '26(b): Manage own affairs in matters of religion.',
        '26(c): Own and acquire property.',
        '26(d): Administer such property in accordance with law.',
      ],
    },
    {
      id: 'a26-denomination',
      title: 'Religious Denomination — Shirur Mutt',
      order: 2,
      content: [
        'Collection of individuals with common faith, common organisation, and distinctive name.',
        'Sects and sections may qualify.',
      ],
    },
    {
      id: 'a26-secular',
      title: 'Religious vs Secular Administration',
      order: 3,
      content: [
        'Matters of religion (26(b)) are protected.',
        'Property administration (26(d)) is “in accordance with law” — open to reasonable regulation.',
      ],
    },
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-26', article: 'Article 26', title: 'Freedom to manage religious affairs' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-25', article: 'Article 25', title: 'Freedom of conscience and free profession, practice and propagation of religion' },
  ],

  examples: [
    {
      id: 'a26-ex-1',
      title: 'Illustration 1 — Valid Property Regulation (Applies)',
      description: 'A State Hindu Religious Endowments Act requires temples to maintain audited accounts and restricts alienation of immovable property without statutory approval. Under Article 26(d), administration of property is in accordance with law. The regulation is valid if it does not interfere with essential religious functions under 26(b).',
    },
    {
      id: 'a26-ex-2',
      title: 'Illustration 2 — Interference with Essential Ritual (Fails)',
      description: 'A State order directs a denomination to alter its core liturgical rite and appoint a non-adherent as spiritual head. This trenches upon “matters of religion” under Article 26(b) and is unconstitutional unless saved by public order, morality or health — which ordinary administrative preference does not satisfy.',
    },
  ],

  hypotheticals: [
    {
      id: 'a26-hypo',
      title: 'Chamber Practice Hypothetical (Temple Management)',
      facts: 'A State statute appoints a government officer as executive manager of a denominational temple, with power over finances and staff, while leaving ritual worship to the traditional priests. The denomination challenges the statute under Article 26.',
      question: 'Examine the constitutional validity of the statute.',
      applicableLaw: 'Article 26(b) and 26(d); Shirur Mutt; Article 25(2)(a).',
      analysis: '1. Administration of property may be regulated by law (26(d)).\n2. Management of matters of religion (26(b)) remains with the denomination.\n3. If the officer’s powers are confined to secular administration (accounts, property, non-spiritual staff) and do not dictate essential rituals or spiritual office, the statute is likely valid.\n4. If the officer can override essential religious decisions, the statute violates 26(b).',
      conclusion: 'Validity depends on the religious/secular line. Purely secular supervision is sustainable; intrusion into essential religious affairs is not.',
    },
  ],

  distinctions: [
    {
      id: 'a26-dist-25',
      title: 'Article 26 vs Article 25',
      left: 'Article 26',
      right: 'Article 25',
      rows: [
        { point: 'Rights-holder', left: 'Religious denomination or section', right: 'Every person (individual)' },
        { point: 'Content', left: 'Institutions, religious affairs, property', right: 'Conscience, profess, practise, propagate' },
        { point: 'Property', left: 'Express rights to own and administer (subject to law)', right: 'No dedicated property clause' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 'a26-trap-1',
      trap: 'Article 26 gives denominations absolute immunity from State law on property.',
      correction: 'Article 26(d) expressly subjects administration of property to law. Reasonable regulation of secular administration is constitutional.',
    },
    {
      id: 'a26-trap-2',
      trap: 'Article 26 and Article 25 are interchangeable.',
      correction: 'Article 25 is primarily individual; Article 26 is denominational and institutional. Both must be read together but protect different dimensions of religious freedom.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 'a26-qa-10',
      draftingCategory: 'brief',
      question: 'Explain Article 26 of the Constitution. What is a religious denomination?',
      answer: `I. ISSUE
Article 26 guarantees denominational rights to manage religious affairs and institutions.

II. TEXT
Subject to public order, morality and health, every religious denomination or section may: (a) establish and maintain institutions for religious and charitable purposes; (b) manage its own affairs in matters of religion; (c) own and acquire property; (d) administer such property in accordance with law.

III. DENOMINATION — SHIRUR MUTT
A collection of individuals with a common faith, common organisation, and distinctive name. Sections and sects may qualify.

IV. RELIGIOUS VS SECULAR
Matters of religion are protected under 26(b). Property administration under 26(d) is subject to law and reasonable secular regulation.

V. CONCLUSION
Article 26 is the institutional pillar of religious freedom. Current through the 106th Amendment (2023).`,
      relatedProvisionIds: ['constitution-article-26'],
    },
    {
      id: 'a26-qa-16',
      draftingCategory: 'submissions',
      question: 'Critically examine the freedom of religious denominations under Article 26. How do courts draw the line between matters of religion and secular administration?',
      answer: `I. INTRODUCTION
Article 26 protects collective religious freedom. Its practical application turns on the distinction between matters of religion and secular administration of property and institutions.

II. STRUCTURE
The four sub-clauses cover institutions, religious affairs, ownership of property, and administration of property in accordance with law. Limits are public order, morality and health.

III. SHIRUR MUTT FRAMEWORK
The Court defined denomination and held that essential religious practices and affairs are protected, while secular activities and property administration may be regulated.

IV. THE RELIGIOUS / SECULAR LINE
Ritual, doctrine, and spiritual office generally fall under 26(b). Accounts, commercial property, and non-spiritual staff generally fall under 26(d) and Article 25(2)(a). Difficult cases arise when administrative control indirectly affects religious practice — courts examine substance over form.

V. INTERPLAY WITH ARTICLE 25 AND EQUALITY
Denominational claims cannot override individual freedom of religion or equality. Exclusionary practices may fail under Articles 14, 17 and 25 even if framed as denominational rights.

VI. CONCLUSION
Article 26 secures institutional autonomy within a regulated secular framework. Property and finances may be supervised; essential religion may not be dictated by the State. Current through the 106th Amendment (2023).`,
      relatedProvisionIds: ['constitution-article-26', 'constitution-article-25'],
    },
  ],

  bareActPointers: ['Article 26'],
  examTips: [
    'Define denomination using Shirur Mutt.',
    'Separate 26(b) matters of religion from 26(d) property administration.',
    'Always read with Article 25.',
  ],
  relatedTopics: ['art-25', 'freedom-religion', 'fundamental-rights'],
}

export default content
