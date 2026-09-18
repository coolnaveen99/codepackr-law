import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Article 14 is the equality guarantee: equality before the law and equal protection of the laws. It permits reasonable classification, forbids class legislation, and (in later cases) strikes manifest arbitrariness. It is read with Articles 19 and 21 as the golden triangle after Maneka Gandhi.',

  study: `Topic at a glance
Article 14 is not a slogan. It is the constitutional test every State action must survive: is the person being treated as the law treats others, and if a distinction is made, is that distinction legally justified?

What does the article say?
“The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.”

Two limbs, one guarantee
Equality before the law is the negative limb — no special privilege, equal subjection to ordinary law (Dicey’s influence). Equal protection of the laws is the positive limb — equal treatment in equal circumstances, which is why reasonable classification is allowed. Indian constitutional law treats them as complementary, not as two unrelated rights.

Why does Article 14 exist?
A republic cannot leave equality to executive grace. Colonial administration ran on privileges, notifications and class legislation. Article 14 converts equality into a justiciable limit on [[REF:DEFINITION:CONSTITUTION:THE-STATE|the State]] under Article 12. Without it, Articles 15 and 16 would be isolated anti-discrimination rules; with it, they sit inside a general equality architecture.

Who is protected?
“Any person” — citizens and non-citizens, natural and (in settled teaching) juristic persons for this article. Contrast Article 19, which is citizens-only.

Essential elements
1. State action (or a law) is challenged.
2. A comparison class exists, or the complaint is that the action is arbitrary even without a tidy class.
3. If classification is used: intelligible differentia + rational nexus with the object (the twin test).
4. Class legislation — a closed privileged group with no rational basis — fails.
5. Later cases also ask whether the measure is manifestly arbitrary.

How the twin test operates
Intelligible differentia means the Court can see who is in and who is out. Rational nexus means that line must serve the statute’s object, not some other convenience. A tax on hotels of a certain rent can be valid; a tax that picks named rivals without a principle is not.

Manifest arbitrariness
Classification is the classic exam path. The modern path, associated with Shayara Bano (triple talaq) and later equality cases, is that a law or action can fail Article 14 for being capricious, excessive or disproportionate even if someone tries to dress it as a class. Do not abandon the twin test. Use arbitrariness when the problem is unreasonableness rather than a failed classification.

Golden triangle
After [[REF:CASE:CONSTITUTIONAL-LAW:MANEKA-GANDHI-1978|Maneka Gandhi]], Articles 14, 19 and 21 are read together. A procedure that is not fair also fails equality. A restriction that is not reasonable also fails liberty. This is how Article 14 became the gateway into due-process style review without amending the text of Article 21.

Exceptions and qualifications
Article 14 is not a bar on all special treatment. Protective discrimination under Articles 15(3)–(6) and 16(4)–(6) is a constitutional qualification, not a free-standing excuse to ignore 14. Reasonable classification remains the first defence of any reservation or special measure. The 103rd Amendment (EWS — Arts 15(6) and 16(6)) was upheld in Janhit Abhiyan (2022); students must treat that as current law, not as a 94th-Amendment-era freeze.

Current-law position
Article 14 is unamended in text. Its meaning is judicial. Classification, non-arbitrariness, and the 14–19–21 reading are the three tools. Always start with the text, then the twin test, then (if facts demand) arbitrariness and the golden triangle.

Educational note
This is original CodePackr teaching material. Confirm the Bare Act and the judgments before reproducing a holding in an answer.`,

  sections: [
    { id: 'a14-limbs', title: 'Two limbs', order: 1, content: [
      'Equality before the law — no special privilege; equal subjection to ordinary law.',
      'Equal protection of the laws — equal treatment in similar circumstances; permits reasonable classification.',
    ]},
    { id: 'a14-twin', title: 'Twin test of reasonable classification', order: 2, content: [
      'Intelligible differentia distinguishing those grouped together from others.',
      'Rational relation between that differentia and the object of the statute.',
    ]},
    { id: 'a14-arb', title: 'Manifest arbitrariness', order: 3, content: [
      'A measure may fail Article 14 for being capricious or excessive even where classification language is used.',
      'Do not drop the twin test. Use arbitrariness when the grievance is unreasonableness.',
    ]},
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-14', article: 'Article 14', title: 'Equality before law' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-15', article: 'Article 15', title: 'Prohibition of discrimination' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-16', article: 'Article 16', title: 'Equality of opportunity in public employment' },
  ],

  examples: [
    { id: 'a14-ex-simple', title: 'Example 1 — simple', description: 'A municipal rule that every hawker on a particular street must hold the same licence is equal treatment. A rule that only hawkers named in an officer’s notebook may sit there is class legislation unless a principle explains the names.' },
    { id: 'a14-ex-legal', title: 'Example 2 — legal', description: 'A tax on cinema halls with air-conditioning, leaving open-air theatres untaxed, can be a reasonable classification if the object is to tax a capacity to pay. A tax on “theatres owned by X” with no principle fails Article 14.' },
  ],

  hypotheticals: [
    {
      id: 'a14-hypo',
      title: 'Examination hypothetical',
      facts: 'A State notification exempts “new industrial units set up by women entrepreneurs after 1 April 2024” from a local entry tax for five years. A man who set up a similar unit on 2 April 2024 challenges the notification as violating Article 14.',
      question: 'Does the classification survive Article 14?',
      applicableLaw: 'Article 14 twin test; Article 15(3) protective discrimination for women is a related but distinct provision.',
      analysis: 'Ask: is “women entrepreneurs of new units after a date” an intelligible class? Yes. Is there a rational nexus with an object such as encouraging women’s participation in industry? If the object is genuine, the classification can stand under Article 14, and Article 15(3) supports special provision for women. The male petitioner is not similarly situated if the object is gendered economic inclusion. If the State cannot show any object beyond favouritism, the notification fails the nexus limb.',
      conclusion: 'Likely valid as reasonable classification / 15(3) special provision, unless the State’s object is a sham. Label this as an educational hypothetical, not a decided case.',
    },
  ],

  distinctions: [
    {
      id: 'a14-class-v-arb',
      title: 'Reasonable classification and manifest arbitrariness',
      left: 'Classification path',
      right: 'Arbitrariness path',
      rows: [
        { point: 'Question', left: 'Is the class intelligible and connected to the object?', right: 'Is the measure capricious, excessive or without principle?' },
        { point: 'Typical facts', left: 'Tax slabs, licences, cut-off dates', right: 'Sudden, harsh, or unexplained State action' },
        { point: 'Do not', left: 'Stop at “equality means treat everyone identically”', right: 'Ignore the twin test whenever a class is pleaded' },
      ],
    },
  ],

  misconceptions: [
    { id: 'a14-trap-1', trap: 'Article 14 requires identical treatment of all persons.', correction: 'It requires equal treatment of equals. Reasonable classification is part of Article 14, not an exception smuggled in from outside.' },
    { id: 'a14-trap-2', trap: 'Only citizens can claim Article 14.', correction: 'The text is “any person”. Article 19 is the citizens-only charter.' },
    { id: 'a14-trap-3', trap: 'Reservation automatically violates Article 14.', correction: 'Articles 15(3)–(6) and 16(4)–(6) are constitutional qualifications. The live questions are extent, creamy layer, and quantitative limits — not a blanket 14-bar.' },
  ],

  questionsAndAnswers: [
    { id: 'a14-qa-1', question: 'State the twin test of reasonable classification.', answer: 'Intelligible differentia, and a rational nexus between that differentia and the object of the statute.', relatedProvisionIds: ['constitution-article-14'] },
    { id: 'a14-qa-2', question: 'Is Article 14 confined to citizens?', answer: 'No. It protects “any person”.', relatedProvisionIds: ['constitution-article-14'] },
    { id: 'a14-qa-3', question: 'How is Article 14 read after Maneka Gandhi?', answer: 'Together with Articles 19 and 21 — procedure and restrictions must also be fair and non-arbitrary.', relatedProvisionIds: ['constitution-article-14'] },
  ],

  relatedTopics: ['Fundamental Rights', 'Article 19 — Freedoms', 'Article 21 — Life & Personal Liberty', 'Basic Structure Doctrine'],

  cases: [
    { name: 'State of West Bengal v. Anwar Ali Sarkar', year: 1952, citation: 'AIR 1952 SC 75', holding: 'A special-court law that left too much undefined discretion failed equal protection — classification must rest on a real and substantial distinction.', relevance: 'Early authority that class legislation and uncontrolled discretion fail Article 14.' },
    { name: 'Ram Krishna Dalmia v. Justice Tendolkar', year: 1958, citation: 'AIR 1958 SC 538', holding: 'Restated the twin test of reasonable classification and the presumption of constitutionality of classifications.', relevance: 'Standard citation for the two-limb test in answers.' },
    { name: 'E.P. Royappa v. State of Tamil Nadu', year: 1974, citation: '(1974) 4 SCC 3', holding: 'Equality is antithetic to arbitrariness; an arbitrary act is unequal in the political sense.', relevance: 'Bridge from classification to non-arbitrariness.' },
    { name: 'Maneka Gandhi v. Union of India', year: 1978, citation: '(1978) 1 SCC 248', holding: 'Articles 14, 19 and 21 are not mutually exclusive; procedure must be fair, just and reasonable.', relevance: 'Golden triangle. Use when facts involve liberty + procedure + equality.' },
    { name: 'Shayara Bano v. Union of India', year: 2017, citation: '(2017) 9 SCC 1', holding: 'Instant triple talaq was held unconstitutional; the majority used, among other grounds, manifest arbitrariness under Article 14.', relevance: 'Exam illustration of the arbitrariness path. State the holding; do not invent bench splits you have not verified in the judgment.' },
  ],

  bareActPointers: ['Art 14', 'Arts 15–16', 'Art 12'],

  examFrameworks: [
    {
      marks: 10,
      question: 'Explain equality before the law and equal protection of the laws. What is reasonable classification?',
      steps: [
        'Introduce Article 14 and quote or closely paraphrase the two limbs.',
        'Explain equality before the law (no privilege) and equal protection (equals treated equally).',
        'State the twin test with one illustration.',
        'Cite Ram Krishna Dalmia or Anwar Ali Sarkar for classification; mention Royappa if the question hints at arbitrariness.',
        'Note that classification is allowed; class legislation is not.',
        'Conclude: Article 14 is a justiciable limit on the State, not a demand for mechanical identity.',
      ],
    },
    {
      marks: 16,
      question: 'Article 14 has moved from classification to non-arbitrariness. Discuss with cases. How does it interact with Articles 19 and 21?',
      steps: [
        'Introduction: text + two limbs + why the article exists.',
        'Classification doctrine in detail (Dalmia / Anwar Ali).',
        'Shift to arbitrariness (Royappa) and later “manifest arbitrariness”.',
        'Maneka Gandhi and the golden triangle — procedure must be fair.',
        'Relationship with Articles 15 and 16 and protective discrimination, including 103rd Amendment / Janhit Abhiyan if reservation is in the question.',
        'Important distinctions: citizen vs person; classification vs class legislation; 14 vs 15.',
        'Work a short hypothetical through the twin test.',
        'Current position and a reasoned conclusion.',
      ],
    },
  ],

  answerSkeleton: [
    'Introduction — Article 14 text and the two limbs.',
    'Meaning — equals equally; unequals may be treated differently if the difference is real.',
    'Legal test — intelligible differentia + nexus.',
    'Authorities — Dalmia / Anwar Ali; Royappa; Maneka.',
    'Application — apply the test to the facts or a short example.',
    'Qualification — protective discrimination; not a citizens-only right.',
    'Conclusion — current legal position in one sentence.',
  ],

  revisionPoints: [
    'Art 14 = equality before law + equal protection; “any person”.',
    'Twin test: intelligible differentia + rational nexus.',
    'Class legislation fails; reasonable classification does not.',
    'Royappa: arbitrary = unequal. Maneka: 14–19–21 together.',
    'Do not freeze Part III at 2007 — 103rd Amendment (EWS) is current law.',
  ],

  examTips: [
    'Write the twin test in full. Examiners mark the two limbs separately.',
    'If facts show a cut-off date or a named favourite, that is a classification problem. If facts show a sudden cruel measure, add arbitrariness.',
    'Never say Article 14 is only for citizens.',
  ],
}

export default content
