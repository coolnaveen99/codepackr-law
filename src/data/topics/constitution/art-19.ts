import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  glance:
    'Article 19 guarantees six basic democratic freedoms to Indian citizens: speech and expression, peaceful assembly, association, movement, residence, and profession/trade. These freedoms are not absolute; they are subject to exhaustively enumerated reasonable restrictions under clauses (2) to (6).',

  study: `Topic at a Glance
Article 19 of the Constitution of India is the charter of democratic civil liberties. It guarantees to every citizen six fundamental freedoms, balancing individual liberty with social order through specific, exhaustively enumerated heads of reasonable restrictions.

The Six Freedoms under Article 19(1)
1. Article 19(1)(a): Freedom of speech and expression.
   - Includes freedom of the press (Romesh Thappar v. State of Madras; Sakal Papers v. Union of India).
   - Commercial speech / advertising (Tata Press Ltd. v. MTNL).
   - Right to know / information (Union of India v. Association for Democratic Reforms).
   - Right to remain silent (Bijoe Emmanuel v. State of Kerala).
   - Freedom of internet communication and online expression (Anuradha Bhasin v. Union of India; Shreya Singhal v. Union of India).
2. Article 19(1)(b): Freedom to assemble peaceably and without arms (subject to public order under 19(3); Himat Lal v. Police Commissioner).
3. Article 19(1)(c): Freedom to form associations, unions, or co-operative societies (co-operative societies added by the 97th Amendment, 2011). Right to form association does not include a fundamental right to strike (All India Bank Employees Association v. National Industrial Tribunal).
4. Article 19(1)(d): Freedom to move freely throughout the territory of India (inter-state and intra-state movement; contrast Article 21 for travel abroad under Maneka Gandhi).
5. Article 19(1)(e): Freedom to reside and settle in any part of the territory of India.
6. [Former Article 19(1)(f): Right to acquire, hold, and dispose of property — deleted by the 44th Constitutional Amendment Act, 1978; relocated as a constitutional right under Article 300A].
7. Article 19(1)(g): Freedom to practise any profession, or to carry on any occupation, trade, or business.

The Mechanism of Reasonable Restrictions (Clauses 2 to 6)
Freedoms under Article 19 are not absolute. However, any restriction imposed by the State must satisfy a strict two-fold test:
1. Enumerated Ground: The restriction must be referable directly to one of the grounds exhaustively listed in clauses (2) to (6). Grounds cannot be invented by executive order or judicial expansion.
   - Article 19(2) grounds for speech: Sovereignty and integrity of India, security of the State, friendly relations with foreign States, public order, decency or morality, contempt of court, defamation, or incitement to an offence.
   - Articles 19(3) & (4): Sovereignty and integrity of India, public order (and morality for associations).
   - Articles 19(5) & (6): Interests of the general public, protection of Scheduled Tribes, or prescribing technical qualifications / state monopolies.
2. Standard of Reasonableness & Proportionality:
   - The restriction must be established by "law" (statutory enactment), not executive instructions without legislative backing (Kharak Singh v. State of U.P.).
   - The test of reasonableness is an objective test (State of Madras v. V.G. Row, 1952): the Court examines the nature of the right, the underlying purpose of the restriction, the extent and urgency of the evil sought to be remedied, and the proportionality of the measure.
   - The Modern Proportionality Doctrine (Modern Dental College; K.S. Puttaswamy): The State must choose the least restrictive means to achieve a legitimate public aim.

Citizens-Only Charter
Article 19 rights are expressly confined to "citizens". Non-citizens / foreigners cannot claim Article 19 freedoms (Hans Muller of Nuremberg v. Superintendent, Presidency Jail), though they enjoy Articles 14 and 21. Furthermore, in State Trading Corporation of India v. Commercial Tax Officer (1963), the Supreme Court held that companies and corporations are not citizens and cannot claim Article 19, though shareholders may invoke their individual freedoms when corporate action impinges on their rights (Bennett Coleman & Co. v. Union of India).

Procedural & Courtroom Anchors (Senior Counsel Checklist)
1. Forum: High Court under Article 226 or Supreme Court under Article 32.
2. Threshold Pleading: The petitioner must demonstrate:
   (a) Indian citizenship (affidavit / passport / voter ID / Aadhaar);
   (b) The direct and inevitable effect of the impugned state action upon the exercise of the freedom (Express Newspapers v. Union of India);
   (c) That the restriction does not fit within the enumerated grounds of 19(2)–(6) or is disproportionate / vague / overbroad.
3. Chilling Effect & Overbreadth:
   In Shreya Singhal v. Union of India (2015), Section 66A of the IT Act was struck down because it was vague and had a "chilling effect" on free speech. Discussion vs Advocacy vs Incitement: mere discussion or advocacy is protected; only incitement to violence or public disorder can be restricted.
4. Internet Shutdowns & Movement Orders:
   In Anuradha Bhasin v. Union of India (2020), the Supreme Court ruled that indefinite suspension of internet services violates Article 19(1)(a) and 19(1)(g). All suspension orders must be published, state reasons, and satisfy the proportionality test.

Current-Law Position & Milestone
Article 19 reflects modern digital rights and communicative autonomy. Current through the 106th Amendment (2023).`,

  sections: [
    {
      id: 'a19-six-freedoms',
      title: 'The Six Fundamental Freedoms (Art 19(1))',
      order: 1,
      content: [
        '19(1)(a): Freedom of speech and expression (includes press, commercial speech, and digital communication).',
        '19(1)(b): Peaceful assembly without arms.',
        '19(1)(c): Formation of associations, unions, and co-operative societies.',
        '19(1)(d) & (e): Free movement and residence throughout India.',
        '19(1)(g): Practice of any profession, trade, occupation, or business.',
      ],
    },
    {
      id: 'a19-restrictions-test',
      title: 'The Two-Pronged Test of Reasonable Restrictions',
      order: 2,
      content: [
        'Prong 1: Must fall strictly within the enumerated grounds of clauses (2) to (6).',
        'Prong 2: Must be reasonable, backed by statutory law, and proportionate (least intrusive measure).',
        'Vague, overbroad, or indefinite restrictions fail the constitutional test (Shreya Singhal; Anuradha Bhasin).',
      ],
    },
    {
      id: 'a19-citizenship-standing',
      title: 'Citizenship Requirement & Standing',
      order: 3,
      content: [
        'Available only to citizens of India; non-citizens and juristic companies cannot claim Art 19 directly.',
        'Shareholders and journalists can invoke their individual citizen rights to protect corporate press freedom (Bennett Coleman).',
      ],
    },
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-19', article: 'Article 19', title: 'Protection of certain rights regarding freedom of speech, etc.' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-14', article: 'Article 14', title: 'Equality before law' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-21', article: 'Article 21', title: 'Protection of life and personal liberty' },
  ],

  examples: [
    {
      id: 'a19-ex-1',
      title: 'Illustration 1 — Valid Reasonable Restriction (Upheld)',
      description: 'The State enacts a statute prohibiting public speeches and demonstrations that directly incite communal violence in an active riot-affected zone for a temporary period of 48 hours. The restriction is backed by law, directly serves “public order” under Article 19(2), and is narrowly tailored. The restriction is upheld.',
    },
    {
      id: 'a19-ex-2',
      title: 'Illustration 2 — Disproportionate / Vague Restriction (Fails)',
      description: 'A statutory provision penalizes the posting of any electronic message that causes “annoyance, inconvenience, or gross insult” without defining criminal intent or requiring incitement to public disorder. The provision is vague, overbroad, and creates a chilling effect on legitimate political criticism. The Supreme Court strikes it down under Article 19(1)(a) read with Article 19(2) (Shreya Singhal).',
    },
  ],

  hypotheticals: [
    {
      id: 'a19-hypo',
      title: '16-Mark Examination Hypothetical (Internet Shutdowns & Free Speech)',
      facts: 'Following student protests against a university fee hike, the District Magistrate issues an indefinite order under Section 163 BNSS (legacy Section 144 CrPC) and the Telecom Suspension Rules shutting down mobile internet and broadband connectivity across the entire district to “prevent the spread of rumours and preserve public order”. A journalist and a software professional challenge the indefinite suspension under Article 226/32, contending that their rights under Article 19(1)(a) and 19(1)(g) have been severely violated without demonstrating imminent threat of violence.',
      question: 'Examine the validity of the indefinite internet suspension order applying the principles laid down in Anuradha Bhasin v. Union of India. Can internet access be suspended indefinitely under Indian law?',
      applicableLaw: 'Article 19(1)(a) and 19(1)(g) of the Constitution of India; Article 19(2) & 19(6); Proportionality Doctrine; Anuradha Bhasin v. Union of India.',
      analysis: '1. Constitutional Status of Internet: In Anuradha Bhasin v. Union of India (2020), the Supreme Court ruled that freedom of speech and expression and the freedom to carry on trade/business using the internet are constitutionally protected under Article 19(1)(a) and 19(1)(g).\n2. Indefinite Suspension Impermissible: An indefinite suspension of internet services is impermissible in law. Suspension can only be for a temporary duration and must be subjected to periodic review.\n3. The Proportionality Test: The State must show that no less restrictive alternative (e.g. blocking specific URLs or targeting limited geographical zones) was available. A blanket shutdown across an entire district for student fee protests is disproportionate.\n4. Procedural Safeguards: Orders must be published, reasoned, and placed before the statutory Review Committee.',
      conclusion: 'The indefinite blanket internet shutdown violates Article 19(1)(a) and 19(1)(g) and fails the proportionality test. The High Court will quash the indefinite order and direct immediate restoration.',
    },
  ],

  distinctions: [
    {
      id: 'a19-speech-v-incitement',
      title: 'Discussion / Advocacy vs Incitement to Violence',
      left: 'Discussion & Advocacy (Protected under 19(1)(a))',
      right: 'Incitement to Disorder (Restrictable under 19(2))',
      rows: [
        { point: 'Threshold', left: 'Vehement criticism of government policy or public debate.', right: 'Direct call to violent action or imminent lawless behavior.' },
        { point: 'Constitutional Status', left: 'Fully protected as the lifeblood of democracy.', right: 'Valid ground for criminal prosecution under penal law.' },
        { point: 'Case Law Authority', left: 'Shreya Singhal v. UOI; Kedar Nath Singh v. State of Bihar.', right: 'Babulal Parate v. State of Maharashtra.' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 'a19-trap-1',
      trap: 'Article 19 rights are available to foreign nationals and multinational corporations.',
      correction: 'The text of Article 19 is explicitly restricted to “all citizens”. Non-citizens cannot claim Article 19 freedoms (though they enjoy Articles 14 and 21).',
    },
    {
      id: 'a19-trap-2',
      trap: 'The State can restrict free speech on any general ground of public welfare.',
      correction: 'The grounds of restriction under Article 19(2) are EXHAUSTIVE, not illustrative. The State cannot restrict speech on a ground not listed in 19(2).',
    },
    {
      id: 'a19-trap-3',
      trap: 'The right to form associations under Article 19(1)(c) includes a fundamental right to strike.',
      correction: 'The Supreme Court in All India Bank Employees Association (1962) and T.K. Rangarajan (2003) held that government employees have no fundamental right to strike.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 'a19-qa-10',
      marks: 10,
      question: 'Discuss the six fundamental freedoms guaranteed under Article 19(1) and the test of reasonable restrictions under Article 19(2)–(6).',
      answer: `I. ISSUE & CONSTITUTIONAL CONTEXT
Article 19(1) confers six democratic freedoms on citizens. The constitutional challenge revolves around whether state restrictions satisfy the strict requirements of Article 19(2)–(6).

II. THE SIX FREEDOMS (ARTICLE 19(1))
1. 19(1)(a): Freedom of speech and expression (includes freedom of press, right to know, and digital communication).
2. 19(1)(b): Freedom to assemble peaceably and without arms.
3. 19(1)(c): Freedom to form associations, unions, or co-operative societies (97th Amendment).
4. 19(1)(d): Freedom to move freely throughout the territory of India.
5. 19(1)(e): Freedom to reside and settle in any part of India.
6. 19(1)(g): Freedom to practise any profession, or carry on any occupation, trade, or business.
(Note: Art 19(1)(f) on property was repealed by the 44th Amendment in 1978).

III. THE TWO-FOLD TEST OF REASONABLE RESTRICTIONS
To be constitutionally valid, a restriction must satisfy two cumulative conditions:
1. Enumerated Grounds: Must fall strictly within the exhaustive grounds in clauses (2) to (6) (e.g. sovereignty & integrity, public order, decency, morality, contempt of court).
2. Reasonableness & Proportionality (V.G. Row; Modern Dental College):
   (a) Must be enacted by legislative law, not mere executive decree.
   (b) Must bear a direct rational nexus to the objective and adopt the least restrictive means.
   (c) Overbroad or vague laws create an impermissible chilling effect and are void (Shreya Singhal).

IV. CITIZENSHIP REQUIREMENT
Article 19 is a citizens-only charter. Foreigners and artificial legal entities cannot claim Article 19 directly (State Trading Corporation).

V. CONCLUSION
Freedoms under Article 19 form the bedrock of India’s constitutional democracy, protected against arbitrary curtailment by the strict discipline of clauses (2)–(6). Current through the 106th Amendment (2023).`,
      explanation: 'Formatted according to the IRAC method for 10-mark descriptive questions.',
      relatedProvisionIds: ['constitution-article-19'],
    },
    {
      id: 'a19-qa-16',
      marks: 16,
      question: 'Critically analyze the scope of freedom of speech and expression under Article 19(1)(a) in the digital era. How have the Supreme Court decisions in Shreya Singhal and Anuradha Bhasin expanded the boundaries of free speech and proportionality?',
      answer: `I. INTRODUCTION & CONSTITUTIONAL FOUNDATIONS
Freedom of speech and expression under Article 19(1)(a) has been described as the "ark of the constitutional covenant". It is the mother of all democratic liberties. The Constituent Assembly recognized that without the free flow of ideas, democratic accountability and truth cannot survive. While the text remains unamended, its content has expanded dynamically through judicial interpretation to encompass modern mediums of communication, journalism, and the digital internet age.

II. EXPANSIVE DIMENSIONS OF ARTICLE 19(1)(a)
1. Freedom of the Press:
   Although the Indian Constitution contains no separate express guarantee for the press, the Supreme Court in Romesh Thappar v. State of Madras (1950) and Sakal Papers v. Union of India (1962) held that press freedom is an inseparable facet of Article 19(1)(a). The State cannot impose pre-censorship or manipulate advertisement quotas to choke independent journalism (Bennett Coleman v. Union of India).
2. Commercial Speech & Right to Know:
   In Tata Press Ltd. v. MTNL (1995), commercial speech was held protected under 19(1)(a). In Union of India v. Association for Democratic Reforms (2002), the right to know the criminal antecedents and assets of electoral candidates was declared a fundamental right of voters.
3. The Right to Silence:
   In Bijoe Emmanuel v. State of Kerala (1986), Jehovah's Witnesses students who respectfully stood for the National Anthem without singing were protected; freedom of speech includes the freedom not to speak.

III. THE DIGITAL TRANSFORMATION: SHREYA SINGHAL AND OVERBREADTH
1. The Challenge to Section 66A IT Act:
   In Shreya Singhal v. Union of India (2015) 5 SCC 1, the Supreme Court struck down Section 66A of the Information Technology Act, 2000 in its entirety.
2. The Doctrinal Trinity: Discussion, Advocacy, Incitement:
   Justice Nariman established that mere discussion or even advocacy of an unpopular cause does not lose Article 19(1)(a) protection. State intervention is permissible only when discussion reaches the clear threshold of incitement to violence or public disorder.
3. Vagueness & The Chilling Effect:
   Vague statutory expressions such as "offensive" or "menacing" fail the test of reasonable restriction. A penal law that causes people to self-censor legitimate speech produces an unconstitutional "chilling effect".

IV. THE INTERNET AS A FUNDAMENTAL RIGHT: ANURADHA BHASIN
1. The Jurisprudential Ruling:
   In Anuradha Bhasin v. Union of India (2020) 3 SCC 637, the Supreme Court formally held that the right to freedom of speech and expression under Article 19(1)(a) and the right to carry on trade/business under Article 19(1)(g) using the medium of internet are constitutionally protected fundamental rights.
2. Application of the Proportionality Test:
   The Court ruled that indefinite suspension of internet services is illegal. The State must satisfy the four-fold proportionality test:
   (a) Legitimate state goal (e.g., national security);
   (b) Suitability;
   (c) Necessity (proving that less intrusive measures like blocking specific sites could not suffice);
   (d) Balancing individual rights against public interest.
3. Procedural Transparency: All suspension orders must be published and subjected to periodic review.

V. PROCEDURAL ROADMAP & LITIGATION STRATEGY (SENIOR COUNSEL REFERENCE)
1. Forum: High Court under Article 226 or Supreme Court under Article 32.
2. Citizenship Proof: Petition must establish Indian citizenship.
3. Pleading Standards: Plead exact infringement, demonstrate chilling effect, and attack the restriction on the ground that it is not referable to the enumerated heads of Article 19(2).
4. Evidentiary Burden: Under BSA ss. 104–106, the petitioner must establish restriction; the State bears the burden of proving that the restriction is reasonable and proportionate.

VI. CONCLUSION & CURRENT-LAW MILESTONE
Freedom of speech under Article 19(1)(a) has evolved from print newsprint to the digital frontier. By invalidating vague speech bans in Shreya Singhal and checking arbitrary digital blackouts in Anuradha Bhasin, the Supreme Court has anchored digital free expression to constitutional proportionality. Current through the 106th Amendment (2023).`,
      explanation: 'Exhaustive CREAC essay covering constitutional origins, landmark press cases, Shreya Singhal, Anuradha Bhasin, and digital rights.',
      relatedProvisionIds: ['constitution-article-19', 'constitution-article-14', 'constitution-article-21'],
    },
    {
      id: 'a19-qa-short',
      question: 'Is the right to access the internet a constitutionally protected right under Article 19?',
      answer: 'Yes. In Anuradha Bhasin v. Union of India (2020), the Supreme Court ruled that freedom of speech and expression and the right to carry on trade/business using the internet are constitutionally protected under Article 19(1)(a) and 19(1)(g).',
      relatedProvisionIds: ['constitution-article-19'],
    },
  ],

  relatedTopics: [
    'Article 14 — Equality',
    'Article 21 — Life & Personal Liberty',
    'Fundamental Rights',
    'Basic Structure Doctrine',
    'Emergency Provisions',
  ],

  cases: [
    {
      name: 'Romesh Thappar v. State of Madras',
      year: 1950,
      citation: 'AIR 1950 SC 124',
      holding: 'Freedom of speech and expression includes freedom of circulation and propagation of ideas; pre-censorship violates Article 19(1)(a).',
      relevance: 'Foundational ruling on freedom of the press and public order restrictions.',
    },
    {
      name: 'Bennett Coleman & Co. v. Union of India',
      year: 1973,
      citation: '(1972) 2 SCC 788',
      holding: 'Newsprint policy restricting page limits of newspapers directly abridges freedom of the press; shareholders can enforce 19(1)(a).',
      relevance: 'Extends standing to corporate shareholders defending press freedoms.',
    },
    {
      name: 'Shreya Singhal v. Union of India',
      year: 2015,
      citation: '(2015) 5 SCC 1',
      holding: 'Section 66A of the IT Act was struck down as vague, overbroad, and creating an unconstitutional chilling effect on free speech.',
      relevance: 'Distinguishes discussion and advocacy from incitement; modern speech milestone.',
    },
    {
      name: 'Anuradha Bhasin v. Union of India',
      year: 2020,
      citation: '(2020) 3 SCC 637',
      holding: 'Freedom of speech and trade over the internet is protected under Article 19(1)(a) and 19(1)(g); indefinite internet shutdowns are illegal.',
      relevance: 'Applies proportionality test to internet shutdowns and communication restrictions.',
    },
    {
      name: 'Bijoe Emmanuel v. State of Kerala',
      year: 1986,
      citation: '(1986) 3 SCC 615',
      holding: 'Freedom of speech under 19(1)(a) includes the right to remain silent; students cannot be compelled to sing the National Anthem.',
      relevance: 'Negative freedom of expression and religious liberty.',
    },
  ],

  bareActPointers: ['Art 19', 'Art 14', 'Art 21', 'Art 300A', 'Art 32', 'Art 226'],

  examTips: [
    'Memorize all six freedoms under 19(1)(a)–(g) and remember that 19(1)(f) (property) was omitted by the 44th Amendment in 1978.',
    'Always state that grounds under Article 19(2)–(6) are EXHAUSTIVE, not illustrative.',
    'Use the three-tier speech test from Shreya Singhal: Discussion → Advocacy → Incitement.',
    'Cite Anuradha Bhasin for internet shutdowns and proportionality analysis.',
  ],

  examFrameworks: [
    {
      marks: 10,
      question: 'Discuss the six freedoms and reasonable restrictions under Article 19.',
      steps: [
        'List all six active freedoms under Article 19(1).',
        'State that rights belong exclusively to citizens.',
        'Explain the two-part test of reasonable restrictions (grounds + reasonableness).',
        'Cite leading authorities: Romesh Thappar and Shreya Singhal.',
        'Give a practical illustration of an invalid restriction.',
        'Conclude with the current legal position under the 106th Amendment.',
      ],
    },
    {
      marks: 16,
      question: 'Critically analyze freedom of speech in the digital era with Shreya Singhal and Anuradha Bhasin.',
      steps: [
        'Introduction: Philosophy of free speech and democratic governance.',
        'Expansion of 19(1)(a): Press freedom, commercial speech, right to know, right to silence.',
        'Shreya Singhal: Invalidation of Section 66A IT Act, vagueness, overbreadth, chilling effect.',
        'Anuradha Bhasin: Internet as a fundamental medium under 19(1)(a)/(g), ban on indefinite shutdowns.',
        'The four-pronged proportionality test.',
        'Senior Counsel litigation checklist (forum, citizenship proof, BSA burden).',
        'Conclusion and future of digital speech.',
      ],
    },
  ],

  revisionPoints: [
    'Six freedoms: Speech, Assembly, Association, Movement, Residence, Trade.',
    'Property freedom (19(1)(f)) was omitted by 44th Amendment, 1978.',
    '19(2) grounds are exhaustive; restriction must be reasonable and enacted by law.',
    'Shreya Singhal: Discussion & Advocacy are protected; only incitement can be restricted.',
    'Anuradha Bhasin: Internet freedom is protected; indefinite suspension is illegal.',
  ],
}

export default content
