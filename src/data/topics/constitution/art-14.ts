import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Article 14 guarantees equality before the law and equal protection of the laws to all persons. It prohibits class legislation, permits reasonable classification based on intelligible differentia and rational nexus, and strikes down state action tainted by manifest arbitrariness or disproportionality.',

  study: `Topic at a Glance
Article 14 of the Constitution of India is the cornerstone of constitutional democracy and the rule of law. It establishes a universal guarantee: “The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.”

Statutory Anatomy: The Two Limbs
1. Equality before the law (English / Diceyan origin):
   - Negative concept: Absence of special privilege in favour of any individual or class.
   - All persons are equally subject to the ordinary law of the land administered by ordinary courts.
   - No individual, official, or executive entity is above the law.
2. Equal protection of the laws (American 14th Amendment origin):
   - Positive concept: Equality of treatment under equal circumstances.
   - Like should be treated alike, but unequals cannot be treated equally without producing inequality.
   - Demands protective discrimination and reasonable affirmative measures by the State.

Who is Protected?
The text uses “any person”, unlike Article 19 which is restricted to citizens. Article 14 protects:
(a) Citizens and non-citizens / foreigners (Chairman, Railway Board v. Chandrima Das).
(b) Natural persons and juristic / artificial persons such as corporations, companies, and statutory authorities (Chiranjit Lal Chowdhuri v. Union of India).

Evolution of Judicial Scrutiny: From Classification to Manifest Arbitrariness
1. The Traditional Doctrine: Twin Test of Reasonable Classification
   Established in State of West Bengal v. Anwar Ali Sarkar (1952) and systematized in Ram Krishna Dalmia v. Justice S.R. Tendolkar (1958). While Article 14 forbids class legislation (giving arbitrary privileges to a closed group), it permits reasonable classification if two conditions are satisfied:
   (a) Intelligible Differentia: The classification must be founded on an intelligible differentia which distinguishes persons or things grouped together from others left out of the group.
   (b) Rational Nexus: The differentia must have a rational relation (nexus) to the legislative or executive object sought to be achieved by the statute.
2. The New Dynamism: Non-Arbitrariness Doctrine (The Royappa Leap)
   In E.P. Royappa v. State of Tamil Nadu (1974) 4 SCC 3, Justice P.N. Bhagwati propounded the activist dimension:
   “Equality is a dynamic concept with many aspects and dimensions and it cannot be ‘cribbed, cabined and confined’ within traditional and doctrinaire limits. From a positivistic point of view, equality is antithetic to arbitrariness. In fact, equality and arbitrariness are sworn enemies.”
3. The Golden Triangle (Maneka Gandhi v. Union of India, 1978):
   Articles 14, 19, and 21 are not mutually exclusive water-tight compartments. Any procedure depriving a person of life or personal liberty under Article 21 must also be just, fair, and reasonable, satisfying the non-arbitrariness standard of Article 14 and the reasonable restrictions of Article 19.
4. The Doctrine of Manifest Arbitrariness (Modern Standard):
   Formulated in Shayara Bano v. Union of India (2017) 9 SCC 1 (Triple Talaq case) and applied in Navtej Singh Johar v. Union of India (2018) and Joseph Shine v. Union of India (2019):
   Primary legislation as well as subordinate legislation can be struck down under Article 14 if it is “manifestly arbitrary” — i.e., enacted capriciously, irrationally, without determining principle, or disproportionate to its stated object.

Procedural & Courtroom Anchors (Senior Counsel Checklist)
1. Forum Selection:
   - Supreme Court under Article 32 (Direct approach; equality before law is a fundamental right).
   - High Court under Article 226 (Writ petition challenging primary legislation, rules, tenders, notifications, or discriminatory administrative action).
2. Presumption of Constitutionality & Evidentiary Burden:
   - Presumption is always in favour of the constitutionality of an enactment (Charanjit Lal Chowdhuri; Ram Krishna Dalmia).
   - The burden of proof lies upon the petitioner under Sections 104–106 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA) to establish that the classification lacks intelligible differentia or rational nexus, or is manifestly arbitrary.
   - However, where a classification is prima facie discriminatory on its face, the burden shifts to the State to show justification.
3. Remedies & Relief:
   - Writ of Certiorari to quash discriminatory orders, tender awards, or statutory rules.
   - Writ of Mandamus to compel equal treatment or consideration.
   - Severability: Striking down only the unconstitutional condition if the remainder can stand independently.

Current-Law Position & Milestone
Article 14 stands unamended in text, but its judicial scope has expanded dramatically. The 103rd Amendment (EWS reservation) was upheld as consistent with Article 14’s equality code in Janhit Abhiyan v. Union of India (2022). Current through the 106th Amendment (2023).`,

  sections: [
    {
      id: 'a14-limbs',
      title: 'The Two Limbs of Equality',
      order: 1,
      content: [
        'Equality before the law (Diceyan rule of law): Negative limb — no person is above the law.',
        'Equal protection of the laws (American origin): Positive limb — equals treated equally in similar circumstances.',
        'Applicable to “any person” — natural persons, juristic entities, citizens, and foreigners.',
      ],
    },
    {
      id: 'a14-twin-test',
      title: 'Traditional Twin Test of Reasonable Classification',
      order: 2,
      content: [
        '1. Intelligible Differentia: A clear, perceptible line dividing the class included from those excluded.',
        '2. Rational Nexus: A direct, real relation between that differentia and the statutory purpose.',
        'Prohibition of Class Legislation: Selecting arbitrary persons without reasonable basis fails Article 14.',
      ],
    },
    {
      id: 'a14-modern-doctrines',
      title: 'Modern Jurisprudence: Non-Arbitrariness & Manifest Arbitrariness',
      order: 3,
      content: [
        'E.P. Royappa (1974): Equality is antithetic to arbitrariness; arbitrary state action is inherently unequal.',
        'Maneka Gandhi (1978): Golden Triangle — Articles 14, 19, and 21 are read together.',
        'Shayara Bano (2017): Manifest arbitrariness strikes down primary legislation if capricious or irrational.',
      ],
    },
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-14', article: 'Article 14', title: 'Equality before law' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-15', article: 'Article 15', title: 'Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-16', article: 'Article 16', title: 'Equality of opportunity in matters of public employment' },
  ],

  examples: [
    {
      id: 'a14-ex-1',
      title: 'Illustration 1 — Valid Reasonable Classification (Applies)',
      description: 'The State enacts a fiscal statute imposing a higher entertainment tax on air-conditioned multiplex theatres compared to single-screen non-AC cinema halls. The classification is based on intelligible differentia (amenities, capital investment, customer capacity to pay) and bears a rational nexus to the object of progressive taxation. The classification is upheld under Article 14.',
    },
    {
      id: 'a14-ex-2',
      title: 'Illustration 2 — Class Legislation / Manifest Arbitrariness (Fails)',
      description: 'A government tender notification stipulates that only entities registered within a single district may bid for a statewide infrastructure contract, excluding all other qualified national contractors without any technical justification. The restriction lacks intelligible differentia related to the competence of contractors and constitutes arbitrary class legislation. The High Court quashes the tender condition as violative of Article 14.',
    },
  ],

  hypotheticals: [
    {
      id: 'a14-hypo',
      title: 'Chamber Practice Hypothetical (Cut-Off Date & Arbitrariness)',
      facts: 'The State Government issues a pension notification granting enhanced gratuity and pension benefits exclusively to employees who retired on or after 1 January 2024, denying the enhancement to employees who retired on 31 December 2023. The pensioners who retired prior to 1 January 2024 challenge the notification under Article 226, alleging that creating an artificial cleavage within an otherwise homogeneous class of pensioners based on an arbitrary cut-off date violates Article 14.',
      question: 'Evaluate the constitutional validity of the cut-off date in light of D.S. Nakara v. Union of India and subsequent Supreme Court decisions on financial constraints.',
      applicableLaw: 'Article 14 of the Constitution of India; Twin Test of Reasonable Classification; Doctrine of Non-Arbitrariness.',
      analysis: '1. Homogeneous Class: Pensioners form a single homogeneous class. In D.S. Nakara v. Union of India (1983), the Supreme Court ruled that dividing a homogeneous class of pensioners based on a fortuitous cut-off date without valid justification is arbitrary and discriminatory.\n2. Intelligible Differentia: The date of retirement creates an arbitrary division without differing entitlement.\n3. Rational Nexus: While the State may plead financial implications, fiscal constraints cannot justify invidious discrimination within identical pensioners where the formula itself is modified.\n4. Modern Qualifications: Contrast Nakara with later rulings (State of Punjab v. Amar Nath Goyal) where a cut-off date is upheld if tied to a specific financial package or event, provided it is not whimsical.',
      conclusion: 'If the State cannot demonstrate an independent rational justification or structural change, the arbitrary cut-off date is severed and struck down under Article 14, extending benefits to all similarly situated retirees.',
    },
  ],

  distinctions: [
    {
      id: 'a14-class-v-legis',
      title: 'Reasonable Classification vs Class Legislation',
      left: 'Reasonable Classification (Valid)',
      right: 'Class Legislation (Void under Art 14)',
      rows: [
        { point: 'Definition', left: 'Scientific grouping based on real differences.', right: 'Improper discrimination by conferring special privileges on a chosen few.' },
        { point: 'Differentia', left: 'Founded on intelligible, discernible criteria.', right: 'Arbitrary, artificial, or illusory distinctions.' },
        { point: 'Nexus', left: 'Direct rational connection with the statutory goal.', right: 'No rational relation; based on executive caprice.' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 'a14-trap-1',
      trap: 'Article 14 demands identical treatment for all human beings and institutions.',
      correction: 'Equality requires equal treatment of equals, not identical treatment of unequals. Reasonable classification is an essential mechanism of Article 14.',
    },
    {
      id: 'a14-trap-2',
      trap: 'Article 14 is limited to Indian citizens.',
      correction: 'The constitutional text protects “any person”. Foreigners and juristic corporations enjoy Article 14 protection (unlike Article 19).',
    },
    {
      id: 'a14-trap-3',
      trap: 'Manifest arbitrariness can only be used against executive action, not primary legislation.',
      correction: 'Shayara Bano (2017) settled that parliamentary and state primary statutes can also be invalidated on the ground of manifest arbitrariness.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 'a14-qa-10',
      draftingCategory: 'brief',
      question: 'Explain the twin test of reasonable classification under Article 14. How does the doctrine of manifest arbitrariness operate in contemporary constitutional law?',
      answer: `I. ISSUE & CONSTITUTIONAL MANDATE
Article 14 commands that the State shall not deny to any person equality before the law or equal protection of the laws. The core issue is how courts test state differentiation and executive/statutory action against this guarantee.

II. THE TWIN TEST OF REASONABLE CLASSIFICATION
Article 14 forbids class legislation, but permits reasonable classification. In State of West Bengal v. Anwar Ali Sarkar (1952) and Ram Krishna Dalmia v. Justice Tendolkar (1958), the Supreme Court established the two mandatory conditions:
1. Intelligible Differentia: The classification must be founded on an intelligible differentia distinguishing persons or things grouped together from others left out.
2. Rational Nexus: The differentia must have a rational relation to the object sought to be achieved by the impugned statute.

III. THE SHIFT TO MANIFEST ARBITRARINESS
While the twin test remains the classic standard, contemporary constitutional law has recognized non-arbitrariness as the substantive core of equality:
1. E.P. Royappa v. State of Tamil Nadu (1974): Equality is antithetic to arbitrariness. An arbitrary act necessarily involves denial of equality.
2. Shayara Bano v. Union of India (2017) 9 SCC 1: The Constitution Bench held that primary legislation can be struck down under Article 14 if it is “manifestly arbitrary” — enacted without determining principle, capriciously, or disproportionately.
3. Applied in Navtej Singh Johar (2018) and Joseph Shine (2019) to invalidate archaic penal provisions.

IV. APPLICATION & PROCEDURAL ENFORCEMENT
1. Forum: High Court under Article 226 or Supreme Court under Article 32.
2. Standing: Available to citizens, foreigners, and corporations.
3. Presumption: The law is presumed constitutional; the petitioner must show irrationality or lack of nexus under Sections 104–106 BSA.

V. CONCLUSION
Article 14 has evolved from a mechanical classification rule into a substantive charter of fairness, striking down class legislation, unguided discretion, and manifest arbitrariness. Current through the 106th Amendment (2023).`,
      explanation: 'Complete IRAC answer integrating the classic Dalmia twin test with modern Shayara Bano manifest arbitrariness.',
      relatedProvisionIds: ['constitution-article-14'],
    },
    {
      id: 'a14-qa-16',
      draftingCategory: 'submissions',
      question: 'Critically examine the evolution of Article 14 from the traditional doctrine of reasonable classification to the modern jurisprudence of non-arbitrariness, proportionality, and the Golden Triangle. Discuss with reference to leading authorities.',
      answer: `I. INTRODUCTION & CONSTITUTIONAL ARCHITECTURE
Article 14 is the foundational charter of the Indian Republic’s commitment to equality. Enshrined in Part III, it comprises two distinct concepts: the English negative concept of “equality before the law” (the rule of law, where no person is above ordinary law) and the American positive concept of “equal protection of the laws” (demanding that equal treatment be accorded to those in similar circumstances). The judicial interpretation of this provision has undergone one of the most remarkable transformations in global constitutional jurisprudence — moving from formalistic classification to substantive fairness, proportionality, and transformative constitutionalism.

II. THE CLASSICAL PHASE: DOCTRINE OF REASONABLE CLASSIFICATION
1. The Formulative Jurisprudence:
   In Charanjit Lal Chowdhuri v. Union of India (1951) and State of West Bengal v. Anwar Ali Sarkar (1952), the Court wrestled with state action creating special trial procedures. Chief Justice Patanjali Sastri and the majority held that Article 14 does not insist on mathematical uniformity.
2. Systematization in Ram Krishna Dalmia v. Justice Tendolkar (1958):
   Justice S.R. Das formulated the celebrated “Twin Test”:
   (a) Intelligible Differentia: Discernible, real characteristics separating the class from the rest.
   (b) Rational Nexus: A real, proximate connection between that characteristic and the legislative purpose.
   If either limb fails, the enactment degenerates into impermissible “class legislation” and is void under Article 13(2).

III. THE ACTIVIST BREAKTHROUGH: E.P. ROYAPPA AND THE NEW CONCEPT
1. Limitations of the Twin Test:
   By the 1970s, the Supreme Court recognized that executive despotism often evaded the twin test by formulating clever classifications.
2. The Royappa Dynamic (1974):
   Justice P.N. Bhagwati propounded that equality is a dynamic concept that cannot be cabined within mechanical classification formulas. Equality and arbitrariness are sworn enemies: where an act is arbitrary, it is inherently unequal in the political and constitutional sense.
3. Maneka Gandhi v. Union of India (1978) & The Golden Triangle:
   The Court synthesized Articles 14, 19, and 21 into an interdependent trinity. An administrative or legislative measure affecting liberty under Article 21 must satisfy the requirement of being “just, fair, and reasonable” under Article 14.

IV. CONTEMPORARY JURISPRUDENCE: MANIFEST ARBITRARINESS AND PROPORTIONALITY
1. Shayara Bano v. Union of India (2017):
   Justice Nariman firmly established that primary legislation can be struck down for “manifest arbitrariness” — where a statute is excessive, lacks determining principle, or is capricious on its face. This overruled the restrictive view in State of A.P. v. McDowell (1996).
2. The Proportionality Standard (K.S. Puttaswamy v. Union of India, 2017):
   When state action differentiates or intrudes upon fundamental freedoms, it must satisfy the four-pronged proportionality test:
   (a) Legitimate state goal;
   (b) Rational connection (suitability);
   (c) Necessity (least intrusive means);
   (d) Strict proportionality (balancing state aim against individual harm).
3. Transformative Equality in Navtej Johar (2018) and Joseph Shine (2019):
   Article 14 was utilized to dismantle institutional stereotypes and criminal provisions rooted in paternalism.

V. PROCEDURAL ROADMAP & LITIGATION STRATEGY (SENIOR COUNSEL REFERENCE)
1. Forum: High Court under Article 226 (wide remedial scope including contractual and administrative matters) or Supreme Court under Article 32.
2. Scope: Protects both natural citizens and juristic corporations (e.g. tenders, tax slabs, telecom spectrum allocation).
3. Pleading Ingredients:
   - Identify the comparators and demonstrate identical footing;
   - Demonstrate the lack of rational nexus or plead manifest arbitrariness with factual instances;
   - Anticipate the State’s defence of policy/economic discretion and rebut via proportionality.
4. Evidentiary Burden: Under Sections 104–106 BSA, petitioner must produce official circulars and comparative data to discharge initial burden.

VI. CONCLUSION & CURRENT-LAW MILESTONE
Article 14 has matured into an expansive shield against authoritarianism and systemic discrimination. From Anwar Ali Sarkar to Shayara Bano and Janhit Abhiyan (2022 EWS upholding), Article 14 remains the living conscience of Indian constitutionalism. Current through the 106th Amendment (2023).`,
      explanation: 'Comprehensive CREAC essay covering historical roots, the twin test, the Royappa revolution, manifest arbitrariness, and proportionality.',
      relatedProvisionIds: ['constitution-article-14', 'constitution-article-19', 'constitution-article-21'],
    },
    {
      id: 'a14-qa-short',
      question: 'Can primary legislation passed by Parliament be struck down for manifest arbitrariness under Article 14?',
      answer: 'Yes. In Shayara Bano v. Union of India (2017), the Supreme Court ruled that primary legislation can be struck down under Article 14 if it is manifestly arbitrary, capricious, irrational, or lacks determining principle.',
      relatedProvisionIds: ['constitution-article-14'],
    },
  ],

  relatedTopics: [
    'Fundamental Rights',
    'Article 19 — Freedoms',
    'Article 21 — Life & Personal Liberty',
    'Basic Structure Doctrine',
    'Protective Discrimination & Reservations',
  ],

  cases: [
    {
      name: 'State of West Bengal v. Anwar Ali Sarkar',
      year: 1952,
      citation: 'AIR 1952 SC 75',
      holding: 'Classification must rest on real and substantial distinctions; uncontrolled executive discretion to refer cases to special courts violates Article 14.',
      relevance: 'Foundational authority for reasonable classification and against class legislation.',
    },
    {
      name: 'Ram Krishna Dalmia v. Justice Tendolkar',
      year: 1958,
      citation: 'AIR 1958 SC 538',
      holding: 'Formulated the twin test of reasonable classification: intelligible differentia and rational nexus with the legislative object.',
      relevance: 'The classic locus classicus cited in all examinations.',
    },
    {
      name: 'E.P. Royappa v. State of Tamil Nadu',
      year: 1974,
      citation: '(1974) 4 SCC 3',
      holding: 'Equality is antithetic to arbitrariness. An arbitrary act is inherently unequal under Article 14.',
      relevance: 'Pioneered the activist non-arbitrariness doctrine.',
    },
    {
      name: 'Maneka Gandhi v. Union of India',
      year: 1978,
      citation: '(1978) 1 SCC 248',
      holding: 'Articles 14, 19, and 21 form a Golden Triangle; procedure depriving life or liberty must be fair, just, and non-arbitrary.',
      relevance: 'Integrated equality with due process and liberty.',
    },
    {
      name: 'Shayara Bano v. Union of India',
      year: 2017,
      citation: '(2017) 9 SCC 1',
      holding: 'Primary legislation can be invalidated under Article 14 on the ground of manifest arbitrariness.',
      relevance: 'Modern milestone on judicial review of statutes for arbitrariness.',
    },
  ],

  bareActPointers: ['Art 14', 'Arts 15–16', 'Art 12', 'Art 32', 'Art 226'],

  examTips: [
    'Always state both limbs: equality before the law and equal protection of the laws.',
    'Write the Twin Test clearly: (1) Intelligible Differentia, (2) Rational Nexus.',
    'Contrast the classic Dalmia classification test with the modern Royappa/Shayara Bano arbitrariness doctrine.',
    'Emphasize that Article 14 applies to “any person”, including foreigners and juristic corporations.',
  ],

  examFrameworks: [
    {
      draftingCategory: 'brief',
      question: 'Explain reasonable classification and manifest arbitrariness under Article 14.',
      steps: [
        'Introduction: Quote Article 14 and define the two limbs.',
        'State the Twin Test of reasonable classification (Dalmia / Anwar Ali).',
        'Explain the transition to non-arbitrariness (E.P. Royappa).',
        'State the modern standard of manifest arbitrariness (Shayara Bano).',
        'Provide one applied illustration and state forum (Art 32 / 226).',
        'Conclude with the current legal position under the 106th Amendment.',
      ],
    },
    {
      draftingCategory: 'submissions',
      question: 'Critically examine the evolution of Article 14 from classification to proportionality and the Golden Triangle.',
      steps: [
        'Detailed introduction: Diceyan Rule of Law vs American Equal Protection.',
        'Deconstruct reasonable classification vs impermissible class legislation.',
        'Analyze the Royappa leap: arbitrariness as the sworn enemy of equality.',
        'Examine Maneka Gandhi and the Golden Triangle (14-19-21 interaction).',
        'Analyze manifest arbitrariness (Shayara Bano) and the proportionality test (Puttaswamy).',
        'Provide Senior Counsel litigation roadmap (forum, burden of proof under BSA, pleadings).',
        'IRAC problem analysis and critical conclusion.',
      ],
    },
  ],

  revisionPoints: [
    'Article 14 = Equality before law (UK) + Equal protection of laws (US).',
    'Twin test: Intelligible differentia + Rational nexus.',
    'E.P. Royappa: Arbitrary = Unequal.',
    'Shayara Bano: Primary legislation can be struck down for manifest arbitrariness.',
    'Applies to citizens, non-citizens, and juristic entities.',
  ],
}

export default content
