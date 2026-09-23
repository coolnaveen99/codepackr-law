import type { TopicContent } from '../loadTopicContent'

/**
 * Article 25 — Freedom of conscience and free profession, practice and propagation of religion
 * Subject: constitution | Topic id: art-25
 * Freedom of religion; ERP test; Shirur Mutt; Sabarimala; essential practices;
 * public order, morality, health; social welfare and reform.
 */
const content: TopicContent = {
  glance:
    'Article 25 guarantees freedom of conscience and the right freely to profess, practise and propagate religion, subject to public order, morality, health, and other Part III provisions. The State may regulate secular activities associated with religion and provide for social welfare and reform. The essential religious practices (ERP) test and cases such as Shirur Mutt and Sabarimala define its modern scope.',

  study: `Topic at a Glance
Article 25 of the Constitution of India guarantees to all persons freedom of conscience and the right freely to profess, practise and propagate religion. The right is subject to public order, morality and health, and to the other provisions of Part III. Clause (2) saves State regulation of secular activities associated with religion and laws for social welfare and reform, including the opening of Hindu religious institutions of a public character to all classes and sections of Hindus.

Statutory Anatomy
1. Article 25(1) — Subject to public order, morality and health and to the other provisions of this Part, all persons are equally entitled to freedom of conscience and the right freely to profess, practise and propagate religion.
2. Article 25(2)(a) — Nothing in this article shall affect the operation of any existing law or prevent the State from making any law regulating or restricting any economic, financial, political or other secular activity which may be associated with religious practice.
3. Article 25(2)(b) — Nothing in this article shall prevent the State from making any law providing for social welfare and reform or the throwing open of Hindu religious institutions of a public character to all classes and sections of Hindus.

Who is Protected?
“All persons” — citizens and non-citizens. The right is individual, not only institutional (contrast Article 26).

Profess, Practise, Propagate
1. Profess: Declare one’s faith.
2. Practise: Perform rituals and observances of the religion.
3. Propagate: Spread one’s religion by exposition; does not include a fundamental right to convert another by force, fraud or allurement (Rev. Stainislaus v. State of M.P., 1977).

Essential Religious Practices (ERP) Test
In Commissioner, Hindu Religious Endowments v. Sri Lakshmindra Thirtha Swamiar of Sri Shirur Mutt (1954), the Court held that the Constitution protects practices essential or integral to a religion, as determined by the court with reference to the doctrine and tenets of that religion. Secular or non-essential practices may be regulated under Article 25(2)(a).

Leading Modern Cases
1. Indian Young Lawyers Association v. State of Kerala (Sabarimala, 2018): Exclusion of women of a certain age from the Sabarimala temple was held not to be an essential practice; the exclusion violated equality and freedom of religion of the excluded women. Constitutional morality and equality informed the analysis.
2. The Court continues to refine the ERP test; academic and judicial debate persists on whether courts should determine “essentiality” or adopt alternative approaches (e.g., anti-exclusion, anti-discrimination).

Limits
Public order, morality, health; other Fundamental Rights (notably Articles 14, 15, 17, 21); State power under Article 25(2) for secular regulation and social reform.

Procedural & Courtroom Anchors
1. Forum: Article 32 / 226.
2. Standing: Individual believer, denomination (often with Article 26), or public interest in systemic exclusion cases.
3. Typical issues: Challenge to State regulation of temples/wakfs; challenge to exclusionary customs; conversion statutes; dress and practice in public institutions.

Current-Law Position & Milestone
Article 25 remains unamended. Shirur Mutt, Stainislaus, and Sabarimala remain central. Current through the 106th Amendment (2023).`,

  sections: [
    {
      id: 'a25-core',
      title: 'Article 25(1) — Freedom of Conscience and Religion',
      order: 1,
      content: [
        'All persons equally entitled to freedom of conscience and to profess, practise and propagate religion.',
        'Subject to public order, morality, health, and other Part III provisions.',
        'Propagation does not include forced or fraudulent conversion (Stainislaus).',
      ],
    },
    {
      id: 'a25-clause2',
      title: 'Article 25(2) — Secular Regulation and Social Reform',
      order: 2,
      content: [
        'State may regulate economic, financial, political or other secular activity associated with religious practice.',
        'State may provide for social welfare and reform and open public Hindu religious institutions to all classes and sections of Hindus.',
      ],
    },
    {
      id: 'a25-erp',
      title: 'Essential Religious Practices Test',
      order: 3,
      content: [
        'Shirur Mutt (1954): Protection for practices essential/integral to the religion.',
        'Sabarimala (2018): Exclusion of women held not essential; equality and constitutional morality applied.',
      ],
    },
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-25', article: 'Article 25', title: 'Freedom of conscience and free profession, practice and propagation of religion' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-26', article: 'Article 26', title: 'Freedom to manage religious affairs' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-14', article: 'Article 14', title: 'Equality before law' },
  ],

  examples: [
    {
      id: 'a25-ex-1',
      title: 'Illustration 1 — Valid Regulation of Secular Activity (Applies)',
      description: 'A State law regulates the accounting and audit of a temple’s commercial offerings and shop rents. Under Article 25(2)(a), economic and secular activities associated with religion may be regulated. The law is valid if it does not interfere with essential religious practices.',
    },
    {
      id: 'a25-ex-2',
      title: 'Illustration 2 — Forced Conversion Ban (Valid Limit on Propagation)',
      description: 'A State anti-conversion law penalises conversion by force, fraud or allurement. Under Stainislaus, the right to propagate does not include a right to convert another by such means. The core of Article 25(1) remains intact.',
    },
  ],

  hypotheticals: [
    {
      id: 'a25-hypo',
      title: 'Chamber Practice Hypothetical (Exclusion from Temple)',
      facts: 'A public Hindu temple excludes a section of devotees on grounds of caste, citing custom. The excluded devotees petition the High Court under Articles 25 and 17.',
      question: 'Advise on the constitutional validity of the exclusion.',
      applicableLaw: 'Article 25(1) and 25(2)(b); Article 17; Article 14; Shirur Mutt; Sabarimala.',
      analysis: '1. Article 25(2)(b) expressly empowers the State to throw open Hindu public religious institutions to all classes and sections of Hindus.\n2. Caste-based exclusion engages Article 17 and the equality code.\n3. Even under the ERP test, practices that contradict constitutional morality and equality are unlikely to be protected as essential.\n4. The exclusion is constitutionally vulnerable; the Court may direct access and restrain the custom.',
      conclusion: 'The exclusion is liable to be struck down. Article 25 protects freedom of religion within the framework of equality and social reform under clause (2)(b).',
    },
  ],

  distinctions: [
    {
      id: 'a25-dist-26',
      title: 'Article 25 vs Article 26',
      left: 'Article 25',
      right: 'Article 26',
      rows: [
        { point: 'Bearer of right', left: 'Every person (individual)', right: 'Every religious denomination or section' },
        { point: 'Focus', left: 'Conscience, profession, practice, propagation', right: 'Manage own affairs in matters of religion; institutions; property' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 'a25-trap-1',
      trap: 'The right to propagate includes an unrestricted right to convert others.',
      correction: 'Stainislaus held that propagation does not include a fundamental right to convert another by force, fraud or allurement. States may regulate such conversions.',
    },
    {
      id: 'a25-trap-2',
      trap: 'All religious practices are immune from State regulation.',
      correction: 'Only essential religious practices are protected. Secular activities associated with religion may be regulated under Article 25(2)(a); social welfare and reform under 25(2)(b).',
    },
  ],

  questionsAndAnswers: [
    {
      id: 'a25-qa-10',
      draftingCategory: 'brief',
      question: 'Explain the scope of Article 25 of the Constitution. What is the essential religious practices test?',
      answer: `I. ISSUE
Article 25 guarantees freedom of conscience and the right to profess, practise and propagate religion, subject to limits.

II. TEXT
Article 25(1) grants the right to all persons, subject to public order, morality, health and other Part III provisions. Article 25(2) allows regulation of secular activities associated with religion and laws for social welfare and reform, including opening public Hindu institutions to all Hindus.

III. ERP TEST
Shirur Mutt held that essential or integral practices of a religion are protected; non-essential or secular practices may be regulated. The court determines essentiality with reference to the religion’s tenets.

IV. PROPAGATION
Stainislaus: no fundamental right to convert another by force, fraud or allurement.

V. CONCLUSION
Article 25 balances religious freedom with public order, equality and reform. Current through the 106th Amendment (2023).`,
      relatedProvisionIds: ['constitution-article-25'],
    },
    {
      id: 'a25-qa-16',
      draftingCategory: 'submissions',
      question: 'Critically examine the freedom of religion under Article 25 with reference to the ERP test, Sabarimala, and the State’s power of social reform.',
      answer: `I. INTRODUCTION
Article 25 is the primary individual guarantee of religious freedom. Its interpretation has oscillated between strong protection of essential practices and subordination of exclusionary customs to equality and constitutional morality.

II. STRUCTURE OF ARTICLE 25
Clause (1) confers freedom of conscience and the right to profess, practise and propagate. Clause (2) is an express limitation and empowerment: secular regulation and social reform, including opening of public Hindu religious institutions.

III. SHIRUR MUTT AND THE ERP TEST
The Court protected essential religious practices and allowed regulation of secular activities. The ERP test made the judiciary the arbiter of what is “essential” — a role that has drawn both support and criticism.

IV. SABARIMALA AND CONSTITUTIONAL MORALITY
In Sabarimala, the exclusion of women of a certain age was held not essential to the religion. The majority invoked equality, dignity and constitutional morality. The decision illustrates that Article 25 does not immunise practices that conflict with other Part III rights.

V. SOCIAL REFORM UNDER 25(2)(b)
The clause is a deliberate constitutional choice: religious freedom coexists with the State’s power to reform and to dismantle caste-based exclusion in public Hindu institutions — reinforcing Articles 14, 15 and 17.

VI. CONCLUSION
Article 25 protects sincere religious freedom but not at the cost of equality and dignity. The ERP test remains influential; Sabarimala shows its limits. Current through the 106th Amendment (2023).`,
      relatedProvisionIds: ['constitution-article-25', 'constitution-article-26', 'constitution-article-14'],
    },
  ],

  bareActPointers: ['Article 25'],
  examTips: [
    'State Shirur Mutt ERP test and Sabarimala outcome.',
    'Distinguish profess/practise/propagate; cite Stainislaus on conversion.',
    'Always mention Article 25(2)(a) and (b) limits.',
  ],
  relatedTopics: ['art-26', 'freedom-religion', 'art-14', 'art-17', 'fundamental-rights'],
}

export default content
