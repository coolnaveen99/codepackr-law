import type { TopicContent } from '../loadTopicContent'

/**
 * Article 23 — Prohibition of traffic in human beings and forced labour
 * Subject: constitution | Topic id: art-23
 * Begar, forced labour, trafficking; People’s Union for Democratic Rights;
 * Bandhua Mukti Morcha; horizontal application against private employers.
 */
const content: TopicContent = {
  glance:
    'Article 23 prohibits traffic in human beings, begar, and other similar forms of forced labour. Contravention is an offence punishable by law. It has horizontal application and is a core protection of human dignity under Part III, enforced through labour statutes and bonded-labour legislation.',

  study: `Topic at a Glance
Article 23 of the Constitution of India prohibits traffic in human beings and begar and other similar forms of forced labour. Any contravention is an offence punishable in accordance with law. It is one of the Fundamental Rights against exploitation and operates both vertically (against the State) and horizontally (against private persons).

Statutory Anatomy
1. Article 23(1) — Traffic in human beings and begar and other similar forms of forced labour are prohibited; contravention is an offence punishable by law.
2. Article 23(2) — Nothing in this article shall prevent the State from imposing compulsory service for public purposes; in imposing such service the State shall not make any discrimination on grounds only of religion, race, caste or class or any of them.

Key Concepts
1. Begar: Work or service exacted without payment, historically associated with feudal and colonial exactions.
2. Forced labour: Work or service exacted under threat of penalty, including economic compulsion where a person is forced to work for less than the minimum wage (People’s Union for Democratic Rights v. Union of India, 1982 — the Asiad Workers case).
3. Traffic in human beings: Includes trafficking for sexual exploitation, forced labour, slavery-like practices, and sale of persons.

Leading Cases
1. People’s Union for Democratic Rights v. Union of India (1982): Non-payment of minimum wages amounts to forced labour under Article 23. The right is enforceable against private contractors; the State has a positive duty to ensure compliance.
2. Bandhua Mukti Morcha v. Union of India (1984): Bonded labour is a form of forced labour. The Court directed identification, release, and rehabilitation of bonded labourers and treated PIL as a legitimate tool for enforcement.
3. Sanjit Roy v. State of Rajasthan (1983): Even in famine-relief works, payment below minimum wage violates Article 23.

Article 23(2) — Compulsory Service for Public Purposes
The State may impose compulsory service for public purposes (e.g., military conscription, civic duties) without violating Article 23(1), provided there is no discrimination on the enumerated grounds only.

Procedural & Courtroom Anchors
1. Forum: Article 32 / 226 for constitutional enforcement; criminal prosecution under IPC/BNS trafficking and forced-labour offences; Bonded Labour System (Abolition) Act, 1976; labour law machinery.
2. Standing: Victim, NGO, public-spirited citizen (PIL), State.
3. Remedies: Release and rehabilitation; payment of minimum wages and arrears; prosecution of offenders; mandamus to labour and district authorities.

Current-Law Position & Milestone
Article 23 remains unamended. It is implemented through the Bonded Labour System (Abolition) Act, 1976, trafficking provisions under BNS, and minimum-wage legislation. Current through the 106th Amendment (2023).`,

  sections: [
    {
      id: 'a23-core',
      title: 'Article 23(1) — Prohibition of Trafficking and Forced Labour',
      order: 1,
      content: [
        'Prohibits traffic in human beings, begar, and other similar forms of forced labour.',
        'Contravention is an offence punishable by law.',
        'Forced labour includes economic compulsion to work below minimum wage (PUDR).',
      ],
    },
    {
      id: 'a23-public',
      title: 'Article 23(2) — Compulsory Service for Public Purposes',
      order: 2,
      content: [
        'State may impose compulsory service for public purposes.',
        'No discrimination on grounds only of religion, race, caste or class.',
      ],
    },
    {
      id: 'a23-cases',
      title: 'Leading Cases',
      order: 3,
      content: [
        'PUDR (1982): Non-payment of minimum wages is forced labour; horizontal enforcement.',
        'Bandhua Mukti Morcha (1984): Bonded labour; release and rehabilitation.',
        'Sanjit Roy (1983): Minimum wage even in famine-relief works.',
      ],
    },
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-23', article: 'Article 23', title: 'Prohibition of traffic in human beings and forced labour' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-21', article: 'Article 21', title: 'Protection of life and personal liberty' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-24', article: 'Article 24', title: 'Prohibition of employment of children in factories, etc' },
  ],

  examples: [
    {
      id: 'a23-ex-1',
      title: 'Illustration 1 — Below-Minimum Wage (Applies)',
      description: 'A private contractor employs construction workers and pays them substantially less than the notified minimum wage, threatening dismissal if they refuse. Under PUDR, this is forced labour under Article 23. The workers (or an NGO) may seek writ relief and statutory enforcement.',
    },
    {
      id: 'a23-ex-2',
      title: 'Illustration 2 — Lawful Compulsory Civic Duty (Does Not Violate)',
      description: 'A State law requires able-bodied adults to participate in a short emergency flood-relief duty with reasonable conditions and without discrimination on religion, race, caste or class. This falls within Article 23(2) and does not violate Article 23(1).',
    },
  ],

  hypotheticals: [
    {
      id: 'a23-hypo',
      title: 'Chamber Practice Hypothetical (Bonded Labour)',
      facts: 'Agricultural labourers in a district work for a landlord under advances that they can never repay; their movement is restricted and wages are adjusted against the debt. An NGO files a writ petition under Article 32 seeking release and rehabilitation.',
      question: 'Examine the constitutional and statutory framework applicable. What directions can the Court issue?',
      applicableLaw: 'Article 23; Bandhua Mukti Morcha; Bonded Labour System (Abolition) Act, 1976.',
      analysis: '1. The arrangement is bonded labour and forced labour under Article 23.\n2. Bandhua Mukti Morcha requires the State to identify, release, and rehabilitate bonded labourers.\n3. The Bonded Labour System (Abolition) Act extinguishes the debt and creates offences.\n4. The Court may direct surveys, release certificates, rehabilitation packages, and prosecution of offenders.',
      conclusion: 'The petition is maintainable. The Court should order immediate release, rehabilitation, and enforcement of the 1976 Act.',
    },
  ],

  distinctions: [
    {
      id: 'a23-dist-24',
      title: 'Article 23 vs Article 24',
      left: 'Article 23',
      right: 'Article 24',
      rows: [
        { point: 'Subject', left: 'Traffic in human beings, begar, forced labour (all ages)', right: 'Employment of children below 14 in factories, mines, hazardous work' },
        { point: 'Scope', left: 'Broader forced-labour and trafficking ban', right: 'Specific child-labour prohibition in hazardous occupations' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 'a23-trap-1',
      trap: 'Article 23 applies only against the State, not private employers.',
      correction: 'PUDR held that Article 23 has horizontal application. Private forced labour and non-payment of minimum wages are constitutional violations; the State must enforce the right.',
    },
    {
      id: 'a23-trap-2',
      trap: 'Any compulsory public service violates Article 23.',
      correction: 'Article 23(2) expressly permits compulsory service for public purposes without discrimination on the listed grounds.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 'a23-qa-10',
      draftingCategory: 'brief',
      question: 'Explain Article 23 of the Constitution. How has the Supreme Court interpreted “forced labour”?',
      answer: `I. ISSUE
Article 23 prohibits traffic in human beings, begar, and forced labour.

II. TEXT
Article 23(1) bans trafficking, begar, and similar forced labour; contravention is an offence. Article 23(2) permits compulsory service for public purposes without discrimination on religion, race, caste or class only.

III. FORCED LABOUR — PUDR
In People’s Union for Democratic Rights (1982), the Court held that forcing a person to work for less than the minimum wage is forced labour. The right is enforceable against private contractors; the State has a positive duty.

IV. BONDED LABOUR
Bandhua Mukti Morcha (1984) treated bonded labour as forced labour and mandated identification, release, and rehabilitation.

V. CONCLUSION
Article 23 is a dignity-based Fundamental Right with horizontal reach. Current through the 106th Amendment (2023).`,
      relatedProvisionIds: ['constitution-article-23'],
    },
    {
      id: 'a23-qa-16',
      draftingCategory: 'submissions',
      question: 'Critically examine the scope of Article 23. Discuss the horizontal application of the right against forced labour and the State’s positive obligations.',
      answer: `I. INTRODUCTION
Article 23 is a central anti-exploitation guarantee. It abolishes trafficking, begar, and forced labour and criminalises their practice.

II. TEXTUAL STRUCTURE
Clause (1) is prohibitory and penal. Clause (2) saves compulsory public service subject to non-discrimination.

III. EXPANSIVE READING OF FORCED LABOUR
PUDR expanded “forced labour” beyond physical coercion to economic compulsion — work below minimum wage under threat of starvation or dismissal. Sanjit Roy confirmed that even relief works must respect minimum wages.

IV. HORIZONTAL APPLICATION
Unlike purely vertical rights, Article 23 binds private employers. The State’s duty is not only to abstain but to enforce — through labour inspectors, bonded-labour machinery, and criminal law.

V. BONDED LABOUR AND PIL
Bandhua Mukti Morcha used PIL to operationalise Article 23 for invisible bonded labourers, directing surveys, release, and rehabilitation under the 1976 Act.

VI. TRAFFICKING
Modern trafficking for sexual and labour exploitation falls within “traffic in human beings”. Statutory frameworks under BNS and special laws give the constitutional ban concrete form.

VII. CONCLUSION
Article 23 is both a shield and a mandate for positive State action. Its effectiveness depends on minimum-wage enforcement, bonded-labour rehabilitation, and anti-trafficking prosecution. Current through the 106th Amendment (2023).`,
      relatedProvisionIds: ['constitution-article-23', 'constitution-article-21'],
    },
  ],

  bareActPointers: ['Article 23', 'Bonded Labour System (Abolition) Act, 1976'],
  examTips: [
    'Always cite PUDR on minimum wage as forced labour.',
    'Mention horizontal application and Bandhua Mukti Morcha.',
    'Note Article 23(2) exception for public-purpose compulsory service.',
  ],
  relatedTopics: ['art-21', 'art-24', 'fundamental-rights'],
}

export default content
