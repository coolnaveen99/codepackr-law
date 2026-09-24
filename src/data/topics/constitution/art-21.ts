import type { TopicContent } from '../topicTypes'

/**
 * Article 21 — Protection of life and personal liberty
 * Senior Counsel & PhD standard — 5 Doctrinal Modules
 * Brief + written submissions only (no collegiate mark rubrics)
 */
export default {
  glance:
    'Article 21 provides that no person shall be deprived of life or personal liberty except according to procedure established by law. After Maneka Gandhi (1978), that procedure must be just, fair and reasonable, and the Article has become the constitutional foundation of dignity, privacy, livelihood, environment, speedy trial and public-law compensation.',

  sections: [
    {
      id: 'art-21-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      order: 1,
      content: [
        'Article 21 is the textual core of personal liberty in the Constitution of India: “No person shall be deprived of his life or personal liberty except according to procedure established by law.”',
        'Constituent Assembly provenance: the framers rejected the American “due process of law” formulation after advice that it might obstruct social and agrarian reform. They preferred “procedure established by law” (drawing on Japanese constitutional language) so that a competent legislature’s procedure would ordinarily suffice.',
        'Doctrinal trajectory: A.K. Gopalan v. State of Madras (1950) treated the clause as formal positivism—any enacted procedure, and Fundamental Rights as water-tight compartments. Maneka Gandhi v. Union of India (1978) overturned that isolation and required the procedure to be just, fair and reasonable, reading Articles 14, 19 and 21 as a Golden Triangle.',
        'Legislative objective in modern application: to restrain arbitrary State deprivation of life and liberty while allowing lawful criminal process, preventive measures and regulation that survive proportionality and non-arbitrariness scrutiny.',
        'Structural primacy: after the 44th Amendment, enforcement of Articles 20 and 21 cannot be suspended under Article 359 during a national emergency—correcting the ADM Jabalpur interregnum, later repudiated in Puttaswamy.',
      ],
    },
    {
      id: 'art-21-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      order: 2,
      content: [
        '“No person”: natural persons—citizens and non-citizens (Chairman, Railway Board v. Chandrima Das). Corporations do not enjoy Article 21 “life” in the same sense as natural persons.',
        '“Life”: not mere animal existence (Francis Coralie Mullin). Includes dignity, livelihood conditions, health, environment, and related unenumerated facets developed case-by-case.',
        '“Personal liberty”: wider than freedom from physical restraint; encompasses autonomy, movement, privacy and related personal freedoms when read with Articles 14 and 19 (Maneka Gandhi; Puttaswamy).',
        '“Except according to procedure established by law”: (i) there must be a valid law; (ii) the law must prescribe a procedure; (iii) post-Maneka, that procedure must be just, fair and reasonable and consistent with Articles 14 and 19 where those articles are engaged.',
        'No internal proviso in Article 21 itself; limits and expansions operate through judicial construction, companion articles (20, 22, 19), and the emergency non-suspension rule under Article 359 as amended.',
        'Companion textual architecture: Article 21A (education 6–14); Article 22 (arrest and preventive detention safeguards); Article 20 (ex post facto, double jeopardy, self-incrimination).',
      ],
    },
    {
      id: 'art-21-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      order: 3,
      content: [
        '1. Deprivation: State action (or State-accountable action) that curtails life or personal liberty—detention, surveillance, eviction without process, custodial violence, denial of medical care in custody, etc.',
        '2. Subject: A “person” (natural person) whose life or liberty is affected.',
        '3. Absence of valid law: No legislative authorisation, or only executive instructions where statute is required (Puttaswamy legality prong; Kharak Singh line).',
        '4. Defective procedure: Procedure exists but is unfair, opaque, non-hearing, discriminatory, or otherwise arbitrary (Maneka Gandhi).',
        '5. Disproportionality (privacy and analogous intrusions): Failure of legality, legitimate aim, rational nexus, necessity (least restrictive means), and balancing (Puttaswamy).',
        '6. For public-law compensation claims: Proof of constitutional tort—custodial death, illegal detention, or gross Article 21 violation attributable to the State (Rudul Sah; Nilabati Behera).',
        '7. Defence burden once prima facie deprivation is shown: State must establish lawful source of power, fair procedure, and (where applicable) proportionate justification.',
      ],
    },
    {
      id: 'art-21-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)',
      order: 4,
      content: [
        'Constitutional adjudication is not a pure BSA trial, but when facts are disputed—custody logs, medical cause of death, CCTV, electronic surveillance records—BSA principles guide the record.',
        'Section 104 BSA: The party who asserts a fact must prove it. Petitioner alleging illegal detention or custodial violence must place primary facts; State must produce custody records, medical reports and authorising orders.',
        'Sections 105–106 BSA: Special knowledge and exceptions—where facts are especially within State knowledge (lock-up registers, interrogation records), the Court may expect the State to explain; failure supports adverse inference in constitutional fact-finding.',
        'Section 63 BSA: Electronic records (body-cam, CCTV, server logs, FRT databases) require the prescribed certificate and integrity conditions for formal proof in criminal/civil trials; constitutional courts may still examine electronic material for writ fact-finding while insisting on reliability.',
        'Presumptions and official acts: Official records of arrest and production before Magistrate are starting points; fabricated or missing records strengthen the Article 21 case (D.K. Basu compliance culture).',
        'Standard: Constitutional courts apply a flexible standard appropriate to writ jurisdiction—preponderance for compensatory public-law relief; criminal conviction still requires proof beyond reasonable doubt in the criminal forum.',
      ],
    },
    {
      id: 'art-21-module-5',
      title: 'Procedural Roadmap, Competent Forum & Limitation Act Checkpoints',
      order: 5,
      content: [
        'Forum: Supreme Court under Article 32 (Fundamental Right enforcement); High Court under Article 226 (habeas corpus, certiorari, mandamus, prohibition, quo warranto, and compensation).',
        'Habeas corpus: Immediate production and legality of detention; no rigid alternative-remedy bar where liberty is at stake.',
        'Alternative remedy: Ordinary rule of self-restraint yields where fundamental rights, natural justice, or pure questions of vires are raised (Whirlpool principle applied mutatis mutandis).',
        'Limitation: Writs are discretionary; unexplained delay may defeat relief, but ongoing detention or continuing surveillance is a continuing wrong. Public-law compensation is not a pure tort suit under the Limitation Act, yet courts notice delay and laches.',
        'Parallel tracks: Criminal prosecution (BNS/BNSS) for custodial offences; civil suit for private damages; writ for constitutional declaration, release, and public-law compensation—tracks are cumulative, not exclusive (Nilabati Behera).',
        'Preliminary objections commonly raised by State: maintainability, delay, disputed facts requiring evidence, sovereign immunity (rejected for constitutional torts in the Nilabati line).',
      ],
    },
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-21', article: 'Article 21', title: 'Protection of life and personal liberty' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-14', article: 'Article 14', title: 'Equality before law' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-19', article: 'Article 19', title: 'Protection of certain rights regarding freedom of speech, etc' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-22', article: 'Article 22', title: 'Protection against arrest and detention in certain cases' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-32', article: 'Article 32', title: 'Remedies for enforcement of rights conferred by this Part' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-226', article: 'Article 226', title: 'Power of High Courts to issue certain writs' },
  ],

  examples: [
    {
      id: 'art-21-ill-1',
      title: 'Illustration 1 — Proving Conditions Met (Provision Applies)',
      illustrationType: 'statutory',
      description:
        'Passport authorities impound a citizen’s passport under an executive circular, without reasons, without show-cause notice, and without post-decisional hearing. There is deprivation of personal liberty (right to travel abroad as an aspect of liberty after Maneka Gandhi), no fair procedure, and arbitrariness under Article 14. The order is liable to be quashed under Articles 21 and 14 read with 19.',
    },
    {
      id: 'art-21-ill-2',
      title: 'Illustration 2 — Boundary Defect / Exception (Provision Fails)',
      illustrationType: 'fail-scenario',
      description:
        'An accused is convicted of murder after a full trial with counsel, cross-examination, reasoned judgment, and appellate review under BNSS. Sentence of life imprisonment is imposed under BNS. Deprivation of liberty is backed by a just, fair and reasonable procedure established by law. A bare Article 21 challenge to the conviction, without procedural illegality or jurisdictional error, fails.',
    },
  ],

  hypotheticals: [
    {
      id: 'art-21-hypo',
      title: 'Chamber Practice Hypothetical & Problem Solving (Senior Counsel Standard)',
      facts:
        'A Municipal Corporation deploys city-wide facial-recognition cameras that continuously capture and match biometric faceprints of all pedestrians against police databases. The system rests only on an administrative circular; there is no statute, no data-minimisation protocol, and no judicial warrant process. A resident approaches the High Court under Article 226.',
      question:
        'Is the regime consistent with Article 21 privacy as declared in K.S. Puttaswamy? What relief is available?',
      applicableLaw:
        'Article 21; Articles 14 and 19; K.S. Puttaswamy v. Union of India (2017); principle of legality for deprivation of liberty/privacy.',
      analysis:
        '1. Threshold & Jurisdiction: Article 226 is maintainable for enforcement of Fundamental Rights and for certiorari/prohibition against ultra vires executive action.\n2. Ingredient Verification: Continuous biometric capture is an intrusion into informational privacy (part of Article 21). Legality requires a valid law—not a mere circular.\n3. Evidentiary Scrutiny: State must produce the circular, vendor contracts, and retention architecture; absence of statutory foundation is often undisputed.\n4. Defenses & Rebuttal: “Public safety” is a legitimate aim only if a law exists and less restrictive alternatives are considered; mass suspicionless matching fails necessity and balancing under Puttaswamy.',
      conclusion:
        'The regime is unconstitutional at the legality threshold. The Court should restrain further deployment, direct deletion or sealing of unlawfully collected biometric logs, and require any future system to rest on clear legislation with procedural safeguards.',
    },
  ],

  distinctions: [
    {
      id: 'art-21-dist-gopalan-maneka',
      title: 'A.K. Gopalan (1950) vs Maneka Gandhi (1978)',
      left: 'A.K. Gopalan (1950)',
      right: 'Maneka Gandhi (1978)',
      rows: [
        { point: 'Meaning of procedure', left: 'Any procedure enacted by a competent legislature', right: 'Procedure must be just, fair and reasonable' },
        { point: 'Relationship of rights', left: 'Articles 19 and 21 as separate silos', right: 'Golden Triangle—Articles 14, 19 and 21 read together' },
        { point: 'Scope of liberty', left: 'Primarily freedom from physical restraint', right: 'Expansive personal liberty including dignity and related autonomy' },
        { point: 'Legal consequence', left: 'Minimal judicial review of fairness of procedure', right: 'Substantive and procedural due-process scrutiny' },
      ],
    },
    {
      id: 'art-21-dist-21a',
      title: 'Article 21 vs Article 21A',
      left: 'Article 21',
      right: 'Article 21A',
      rows: [
        { point: 'Statutory basis', left: 'Original Fundamental Right—life and personal liberty', right: '86th Amendment—free and compulsory education ages 6–14' },
        { point: 'Essential ingredients', left: 'Deprivation only by fair procedure established by law', right: 'State duty to provide elementary education in manner prescribed by law' },
        { point: 'Stage of invocation', left: 'Any life/liberty deprivation—criminal, administrative, socio-economic', right: 'Elementary education access and RTE enforcement' },
        { point: 'Legal consequence', left: 'Release, quashing, compensation, structural mandamus', right: 'Admission, facilities, 25% quota enforcement (non-minority)' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 'art-21-trap-1',
      trap: 'Article 21 abolishes capital punishment.',
      correction:
        'Bachan Singh v. State of Punjab (1980) upheld the constitutional validity of the death penalty, confining its award to the rarest-of-rare framework. Article 21 regulates the fairness of the process; it does not automatically repeal capital sentencing.',
    },
    {
      id: 'art-21-trap-2',
      trap: 'Article 21 can be suspended during a national emergency under Article 352.',
      correction:
        'After the 44th Amendment, the President cannot suspend enforcement of Articles 20 and 21 under Article 359. ADM Jabalpur does not represent current law; Puttaswamy expressly repudiated its approach to liberty.',
    },
    {
      id: 'art-21-trap-3',
      trap: 'Article 21 is limited to biological survival.',
      correction:
        'Francis Coralie Mullin and the later dignity–privacy line establish that “life” includes living with human dignity and the conditions that make life meaningful, not mere animal existence.',
    },
  ],

  cases: [
    {
      name: 'Maneka Gandhi v. Union of India',
      year: 1978,
      citation: '(1978) 1 SCC 248',
      holding:
        'Procedure established by law under Article 21 must be just, fair and reasonable; Articles 14, 19 and 21 form an integrated code. Passport impounding without fair hearing violates personal liberty.',
      relevance:
        'Lead authority for challenging any liberty-restricting order that lacks natural justice or is arbitrary. Cite for Golden Triangle and substantive due process.',
    },
    {
      name: 'K.S. Puttaswamy v. Union of India',
      year: 2017,
      citation: '(2017) 10 SCC 1',
      holding:
        'Privacy is a Fundamental Right under Article 21 (and related provisions). State intrusion must satisfy legality, legitimate aim, and proportionality (suitability, necessity, balancing). ADM Jabalpur’s approach to liberty is rejected.',
      relevance:
        'Mandatory citation for surveillance, data protection, Aadhaar-linked challenges, and any informational-privacy pleading. Structure written submissions on the proportionality prongs.',
    },
    {
      name: 'Nilabati Behera v. State of Orissa',
      year: 1993,
      citation: '(1993) 2 SCC 746',
      holding:
        'Constitutional courts may award monetary compensation under public law for custodial death and Article 21 violations; sovereign immunity does not bar such relief. Public-law compensation is distinct from private tort damages.',
      relevance:
        'Cite in Article 32/226 petitions seeking compensation for custodial violence, illegal detention, or State atrocity, alongside criminal prosecution.',
    },
    {
      name: 'Francis Coralie Mullin v. Administrator, Union Territory of Delhi',
      year: 1981,
      citation: '(1981) 1 SCC 608',
      holding:
        'Right to life includes the right to live with human dignity and the bare necessities of life; it is not confined to animal existence.',
      relevance:
        'Foundational citation when expanding Article 21 beyond physical restraint—prison conditions, dignity, and socio-economic facets.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 'art-21-brief',
      draftingCategory: 'brief',
      question:
        'Provide a structured Case Brief and legal problem assessment on Article 21 (protection of life and personal liberty), focusing on the evolution from Gopalan to Maneka Gandhi and Puttaswamy.',
      answer: `I. ISSUE & JURISDICTIONAL THRESHOLD
Whether deprivation of life or personal liberty is supported by a procedure established by law that is just, fair and reasonable, and whether State intrusion into privacy or dignity satisfies legality and proportionality. Forum: Article 32 before the Supreme Court or Article 226 before the High Court; habeas corpus where detention is alleged.

II. GOVERNING RULE & STATUTORY ANATOMY
Article 21 textually requires procedure established by law. Maneka Gandhi holds that the procedure must be just, fair and reasonable and that Articles 14, 19 and 21 are interlinked. Puttaswamy holds that privacy is intrinsic to Article 21 and that intrusions require valid law and proportional design. Unenumerated facets (livelihood, environment, speedy trial, dignity) are applications of “life,” not free-standing textual clauses.

III. APPLICATION TO FACTUAL DISPUTE
Map the impugned action to (a) deprivation, (b) source of power, (c) procedural fairness, and (d) where privacy is engaged, the Puttaswamy prongs. Executive circulars without statute fail legality. Convictions after full fair trial ordinarily satisfy Article 21; custodial abuse and suspicionless mass surveillance ordinarily do not.

IV. CONCLUSION & OPERATIVE ADVICE
Advise immediate writ remedy for ongoing detention or surveillance; seek production of authorising law and custody records; plead public-law compensation where constitutional tort is made out; preserve parallel criminal remedies. Do not suspend Article 21 analysis during emergency—enforcement cannot be suspended under Article 359 post-44th Amendment.`,
      explanation:
        'IRAC chamber brief for Article 21 problem assessment without collegiate mark rubrics.',
      relatedProvisionIds: ['constitution-article-21', 'constitution-article-14', 'constitution-article-32'],
    },
    {
      id: 'art-21-submissions',
      draftingCategory: 'submissions',
      question:
        'Draft comprehensive Written Submissions on Article 21, deconstructing the constitutional scheme, evidentiary expectations, precedents, and procedural pathways for enforcement and public-law compensation.',
      answer: `I. STATEMENT OF FACTS & PROCEDURAL PROVENANCE
The petitioner challenges State action that deprives life or personal liberty—or intrudes upon privacy and dignity—without fair procedure or proportional statutory foundation. Jurisdiction is invoked under Article 32 / Article 226 for declaratory, prohibitory, mandatory and compensatory relief.

II. STATUTORY SCHEME & JURISPRUDENTIAL INTENT
Article 21 forbids deprivation of life or personal liberty except according to procedure established by law. The Constituent Assembly preferred that phrase over American due process, yet Maneka Gandhi read fairness and reasonableness into “procedure,” integrating Articles 14 and 19. The 44th Amendment entrenched non-suspension of Articles 20 and 21 during emergency. The provision is both a shield against arbitrary power and a fountainhead of positive obligations in custody, health, and environmental cases.

III. SATISFACTION OF MANDATORY PROVING INGREDIENTS
The petitioner will establish: (1) State-attributable deprivation or intrusion; (2) absence of valid law or presence of unfair procedure; (3) where applicable, failure of Puttaswamy proportionality; (4) for compensation, constitutional tort on the Nilabati standard. Under BSA logic, facts especially within State knowledge—custody registers, medical charts, surveillance architecture—must be explained by the State; electronic records should satisfy reliability expectations akin to Section 63 BSA when formally proved.

IV. JUDICIAL PRECEDENTS & RATIO DECIDENDI
Maneka Gandhi: fair, just and reasonable procedure; Golden Triangle. Francis Coralie Mullin: life means dignity, not animal existence. Olga Tellis: livelihood as facet of life, subject to fair process. Puttaswamy: privacy as Fundamental Right; legality and proportionality. Rudul Sah and Nilabati Behera: public-law compensation for Article 21 violations. D.K. Basu: custodial safeguards as practical enforcement of Article 21. Bachan Singh: death penalty not per se unconstitutional; rarest-of-rare discipline.

V. REBUTTAL OF ADVERSARY’S CONTENTIONS & PRELIMINARY OBJECTIONS
Sovereign immunity does not bar constitutional compensation. Alternative remedy does not oust habeas or pure vires challenges. Delay does not legitimise continuing detention or ongoing unlawful surveillance. “Procedure established by law” is not satisfied by arbitrary executive instructions where statute is constitutionally required.

VI. PRAYER / RELIEF SOUGHT
(a) Declaration that the impugned action violates Article 21 (and Articles 14/19 as engaged); (b) certiorari/prohibition/mandamus as appropriate; (c) production of the petitioner and custody records where detention is alleged; (d) public-law compensation; (e) structural directions for compliance with constitutional safeguards; (f) costs.`,
      explanation:
        'Appellate-standard written submissions for Article 21 enforcement and compensation.',
      relatedProvisionIds: [
        'constitution-article-21',
        'constitution-article-14',
        'constitution-article-32',
        'constitution-article-226',
      ],
    },
  ],

  bareActPointers: [
    'Article 21, Constitution of India',
    'Articles 14, 19, 20, 22, 32, 226, 359 (as amended by the 44th Amendment)',
    'BSA 2023 ss. 104–106 (burden) and s. 63 (electronic records) in fact-heavy custody and surveillance disputes',
  ],

  examTips: [
    'Always open with text → Gopalan → Maneka Gandhi → Puttaswamy proportionality when privacy is engaged.',
    'Separate pure liberty deprivation (detention) from privacy/surveillance (legality + proportionality) and from public-law compensation (Nilabati).',
    'Never assert that Article 21 is suspended in emergency after the 44th Amendment.',
  ],

  revisionPoints: [
    'Article 21: no deprivation of life or personal liberty except by just, fair and reasonable procedure established by law (Maneka Gandhi).',
    'Ingredients: deprivation + person + lawfulness of source + fairness of procedure + proportionality for privacy intrusions.',
    'Forum: Articles 32 and 226; habeas for detention; public-law compensation available; BSA burdens guide disputed facts.',
    'Locus classicus cluster: Maneka Gandhi (procedure); Puttaswamy (privacy); Nilabati Behera (compensation); Francis Coralie Mullin (dignity).',
  ],

  relatedTopics: ['art-14', 'art-19', 'art-20', 'art-21a', 'art-22', 'art-32-226', 'fundamental-rights'],
} satisfies TopicContent
