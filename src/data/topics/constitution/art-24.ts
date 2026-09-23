import type { TopicContent } from '../loadTopicContent'

/**
 * Article 24 — Prohibition of employment of children in factories, etc.
 * Subject: constitution | Topic id: art-24
 * Child labour ban under 14 in factories, mines, hazardous work;
 * M.C. Mehta; Child Labour (Prohibition and Regulation) Act; CLPR Amendment 2016.
 */
const content: TopicContent = {
  glance:
    'Article 24 prohibits the employment of children below the age of fourteen years in any factory or mine or in any other hazardous employment. It is a specific child-protection guarantee within the rights against exploitation and is implemented through the Child and Adolescent Labour (Prohibition and Regulation) Act.',

  study: `Topic at a Glance
Article 24 of the Constitution of India provides that no child below the age of fourteen years shall be employed to work in any factory or mine or engaged in any other hazardous employment. It is a focused child-labour prohibition within Part III’s rights against exploitation.

Constitutional Text
No child below the age of fourteen years shall be employed to work in any factory or mine or engaged in any other hazardous employment.

Scope
1. Age threshold: Below 14 years.
2. Sectors: Factory, mine, and any other hazardous employment.
3. Absolute in the listed spheres — no “reasonable restriction” clause in the Article itself.

Relationship with Article 21A and Directive Principles
Article 24 complements Article 21A (free and compulsory education for ages 6–14) and Directive Principles on child protection (e.g., Article 39(e) and (f)). Employment of children in hazardous work undermines both education and health.

Leading Cases
1. M.C. Mehta v. State of Tamil Nadu (1996) — Child Labour case: The Court directed a survey of child labour in hazardous industries, withdrawal of children, provision of education, and creation of a welfare fund. Employers of children in hazardous work were directed to pay compensation.
2. The Court has consistently treated Article 24 as enforceable and has used PIL to drive policy and enforcement.

Statutory Implementation
1. Child Labour (Prohibition and Regulation) Act, 1986, as amended by the Child and Adolescent Labour (Prohibition and Regulation) Act, 2016:
   - Complete prohibition of employment of children below 14 in all occupations and processes (with limited family-enterprise and entertainment exceptions under strict conditions).
   - Adolescents (14–18) prohibited from hazardous occupations and processes.
2. Factories Act, Mines Act, and allied labour laws reinforce the ban in specific sectors.

Procedural & Courtroom Anchors
1. Forum: Article 32 / 226; criminal and labour prosecution under CLPR Act and sectoral statutes; National/State Commissions for Protection of Child Rights.
2. Standing: Child, parent/guardian, NGO, public-spirited citizen, State.
3. Remedies: Prohibition of employment; rescue and rehabilitation; education under Article 21A / RTE Act; prosecution and penalties against employers; compensation as directed in M.C. Mehta.

Current-Law Position & Milestone
Article 24 remains unamended. The 2016 amendment to the child-labour statute expanded the ban for children under 14 beyond the original hazardous list. Current through the 106th Amendment (2023).`,

  sections: [
    {
      id: 'a24-text',
      title: 'Constitutional Mandate',
      order: 1,
      content: [
        'No child below 14 years shall be employed in any factory or mine or any other hazardous employment.',
        'Specific child-protection guarantee within rights against exploitation.',
      ],
    },
    {
      id: 'a24-statute',
      title: 'Statutory Framework',
      order: 2,
      content: [
        'Child and Adolescent Labour (Prohibition and Regulation) Act — ban on employment of children under 14; regulation of adolescents in non-hazardous work.',
        'M.C. Mehta (1996): survey, education, welfare fund, employer compensation.',
      ],
    },
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-24', article: 'Article 24', title: 'Prohibition of employment of children in factories, etc' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-23', article: 'Article 23', title: 'Prohibition of traffic in human beings and forced labour' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-21a', article: 'Article 21A', title: 'Right to education' },
  ],

  examples: [
    {
      id: 'a24-ex-1',
      title: 'Illustration 1 — Hazardous Factory Work (Applies)',
      description: 'A 12-year-old is employed in a fireworks factory. This is prohibited under Article 24 and the CLPR Act. The employer is liable; the child must be withdrawn and provided education and rehabilitation.',
    },
    {
      id: 'a24-ex-2',
      title: 'Illustration 2 — Non-Hazardous Family Help (Contextual)',
      description: 'A 13-year-old occasionally helps in a family-owned non-hazardous shop after school hours under parental care. Statutory exceptions for family enterprises (strictly construed) may apply; Article 24’s core concern is hazardous employment. Education under Article 21A remains paramount.',
    },
  ],

  hypotheticals: [
    {
      id: 'a24-hypo',
      title: 'Chamber Practice Hypothetical (Hazardous Industry)',
      facts: 'An NGO discovers children aged 10–13 working in a metal-polishing unit with toxic fumes. The unit has no licence and pays the children in kind. The NGO approaches the High Court under Article 226.',
      question: 'What constitutional and statutory violations are made out? What relief can the Court grant?',
      applicableLaw: 'Article 24; Article 21A; Article 23; CLPR Act; M.C. Mehta v. State of Tamil Nadu.',
      analysis: '1. Employment of children under 14 in hazardous work violates Article 24.\n2. Denial of education engages Article 21A and the RTE Act.\n3. Forced or exploitative conditions may also engage Article 23.\n4. Relief: immediate withdrawal, prosecution, compensation, enrolment in school, directions to labour and education authorities following M.C. Mehta.',
      conclusion: 'The petition should succeed. The Court must order rescue, rehabilitation, education, and enforcement action against the employer.',
    },
  ],

  distinctions: [
    {
      id: 'a24-dist-23',
      title: 'Article 24 vs Article 23',
      left: 'Article 24',
      right: 'Article 23',
      rows: [
        { point: 'Focus', left: 'Child employment in factories, mines, hazardous work', right: 'Trafficking, begar, forced labour (all ages)' },
        { point: 'Age', left: 'Below 14 years', right: 'No age limit in the text' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 'a24-trap-1',
      trap: 'Article 24 bans all work by children under 14 in every setting.',
      correction: 'The constitutional text targets factories, mines, and hazardous employment. The CLPR Act has expanded statutory prohibitions; limited family-enterprise exceptions are statutory, not constitutional expansions of Article 24 itself.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 'a24-qa-10',
      draftingCategory: 'brief',
      question: 'Explain Article 24 of the Constitution. How has it been enforced by the Supreme Court and statute?',
      answer: `I. ISSUE
Article 24 prohibits employment of children below 14 in factories, mines, or other hazardous employment.

II. TEXT AND PURPOSE
It protects children from hazardous work that endangers health and education, complementing Article 21A and Article 39(e)–(f).

III. ENFORCEMENT
M.C. Mehta (1996) directed withdrawal of child labour from hazardous industries, education, welfare funds, and employer compensation. The CLPR Act (as amended in 2016) prohibits employment of children under 14 and regulates adolescent labour in non-hazardous work.

IV. CONCLUSION
Article 24 is a justiciable child-protection guarantee. Current through the 106th Amendment (2023).`,
      relatedProvisionIds: ['constitution-article-24'],
    },
    {
      id: 'a24-qa-16',
      draftingCategory: 'submissions',
      question: 'Critically examine Article 24 in the light of the right to education and the statutory regime against child labour.',
      answer: `I. INTRODUCTION
Article 24 is a specific ban on child employment in hazardous settings. Its full meaning emerges when read with Article 21A, Directive Principles, and the CLPR Act.

II. CONSTITUTIONAL TEXT
Children below 14 must not work in factories, mines, or other hazardous employment. The provision is absolute within its sphere.

III. LINK WITH EDUCATION
Article 21A mandates free and compulsory education for ages 6–14. Hazardous child labour is incompatible with that mandate. Enforcement of Article 24 is therefore also an educational and dignity concern under Articles 21 and 21A.

IV. M.C. MEHTA AND POSITIVE OBLIGATIONS
The Supreme Court used PIL to require surveys, withdrawal, schooling, and a welfare fund, treating the State as duty-bound to make Article 24 real.

V. STATUTORY EXPANSION
The 2016 amendments moved towards a broader ban on employment of children under 14, with narrow exceptions, and restricted adolescents from hazardous work — aligning statute more closely with the constitutional and educational scheme.

VI. CONCLUSION
Article 24 remains a vital, enforceable guarantee. Its effectiveness depends on labour inspection, education access, and rehabilitation. Current through the 106th Amendment (2023).`,
      relatedProvisionIds: ['constitution-article-24', 'constitution-article-21a'],
    },
  ],

  bareActPointers: ['Article 24', 'Child and Adolescent Labour (Prohibition and Regulation) Act'],
  examTips: [
    'Cite M.C. Mehta (1996) on child labour directions.',
    'Link Article 24 with Article 21A and education.',
    'Distinguish constitutional text (hazardous) from broader statutory ban.',
  ],
  relatedTopics: ['art-23', 'art-21a', 'fundamental-rights'],
}

export default content
