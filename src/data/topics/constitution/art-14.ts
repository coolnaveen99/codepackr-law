import type { TopicContent } from '../topicTypes'

/**
 * Article 14 — Equality before law
 * Senior Counsel & PhD standard — 5 Doctrinal Modules
 * Brief + written submissions only (no collegiate mark rubrics)
 */
export default {
  glance:
    'Article 14 guarantees that the State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India. It forbids class legislation, permits reasonable classification on intelligible differentia with rational nexus, and invalidates State action that is arbitrary or manifestly arbitrary.',

  sections: [
    {
      id: 'art-14-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      order: 1,
      content: [
        'Article 14 text: “The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.”',
        'Dual intellectual provenance: (i) equality before the law — Diceyan rule of law (no person above the ordinary law); (ii) equal protection of the laws — American Fourteenth Amendment tradition (likes treated alike).',
        'Legislative objective: embed the rule of law and non-arbitrary governance as a justiciable Fundamental Right binding the State under Article 12, enforceable under Articles 32 and 226.',
        'Doctrinal arc: formal classification (Anwar Ali Sarkar; Ram Krishna Dalmia) → non-arbitrariness as the soul of equality (E.P. Royappa) → Golden Triangle with Articles 19 and 21 (Maneka Gandhi) → manifest arbitrariness as a ground to strike primary legislation (Shayara Bano) → proportionality discipline in rights-limiting measures (Puttaswamy).',
        'Scope of “person”: citizens and non-citizens; natural and juristic persons (Chiranjit Lal Chowdhuri; Chairman, Railway Board v. Chandrima Das). Unlike Article 19, Article 14 is not citizen-restricted.',
      ],
    },
    {
      id: 'art-14-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      order: 2,
      content: [
        '“The State shall not deny”: obligatory restraint on all authorities within Article 12 — legislative, executive, and instrumentalities of the State.',
        '“Any person”: inclusive subject; corporations and foreigners may invoke Article 14 in tenders, taxation, and administrative discrimination.',
        '“Equality before the law”: negative limb — absence of special privilege; equal subjection to ordinary courts and ordinary law.',
        '“Equal protection of the laws”: positive limb — equality of treatment in equal circumstances; permits protective and remedial classification when constitutionally structured (Articles 15(3)–(6), 16(4)–(6)).',
        'No internal proviso in Article 14; companion articles (15, 16, 17, 18) particularise discrimination bans and affirmative mandates. Article 14 remains the general equality guarantee against which all State action is tested.',
        'Territory clause: “within the territory of India” situates the guarantee geographically while the personal reach remains “any person.”',
      ],
    },
    {
      id: 'art-14-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      order: 3,
      content: [
        '1. State action: Impugned measure must be attributable to the State (Article 12) — statute, rule, notification, tender condition, or administrative order.',
        '2. Differential treatment: Petitioner and comparators are similarly situated, yet treated differently; or a class is selected without real basis (class legislation).',
        '3. Twin-test failure (classification challenge): (a) no intelligible differentia, or (b) differentia lacks rational nexus to the object of the law.',
        '4. Arbitrariness (Royappa line): State action is capricious, unguided, or based on irrelevant considerations — equality is antithetic to arbitrariness.',
        '5. Manifest arbitrariness (Shayara Bano): For primary or subordinate legislation — excessive, disproportionate, lacking determining principle, or enacted without adequate determining principle.',
        '6. Presumption and burden: Law is presumed constitutional; petitioner must discharge initial burden of irrationality or arbitrariness; face discrimination may shift the justificatory onus to the State.',
        '7. Remedy mapping: Certiorari to quash; mandamus to compel equal consideration; severability of the offending clause where the remainder can stand.',
      ],
    },
    {
      id: 'art-14-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)',
      order: 4,
      content: [
        'Section 104 BSA: Whoever asserts a fact must prove it. Petitioner asserting discriminatory classification must place the impugned instrument, the class included/excluded, and comparative data where available.',
        'Sections 105–106 BSA: Facts especially within State knowledge — internal file notings, criteria for cut-off dates, financial models for pension packages — attract an expectation that the State explain; silence supports adverse inference in writ fact-finding.',
        'Section 63 BSA: Electronic tender portals, e-gazette notifications, and digital selection algorithms require reliable electronic proof when formally relied upon; constitutional courts still demand authenticity of digital records used to justify classification.',
        'Presumption of constitutionality: Charanjit Lal / Dalmia line — courts start from validity; Article 14 is not a licence to re-legislate policy unless the constitutional threshold is crossed.',
        'Standard in writs: Preponderance and constitutional scrutiny, not criminal proof beyond reasonable doubt. Statistical and documentary evidence of disparate impact strengthens the case when intent is denied.',
      ],
    },
    {
      id: 'art-14-module-5',
      title: 'Procedural Roadmap, Competent Forum & Limitation Act Checkpoints',
      order: 5,
      content: [
        'Forum: Supreme Court under Article 32; High Court under Article 226 (preferred for local tenders, service rules, and State legislation).',
        'Maintainability: Pure questions of vires and fundamental-right discrimination are writ-worthy; contractual disputes may still attract Article 14 where State is the contracting party and process is arbitrary (modern tender jurisprudence).',
        'Alternative remedy: Self-restraint yields where the challenge is to the validity of the rule or to systemic discrimination; factual service disputes may be routed to tribunals first.',
        'Limitation and delay: Writs are discretionary; stale challenges to one-time selections may fail, but continuing discriminatory schemes are continuing wrongs. Laches is fact-sensitive.',
        'Severability and reading down: Prefer surgical invalidation of the offending condition over striking the entire scheme where text permits.',
        'Common preliminary objections: policy/economic discretion, locus, delay, disputed facts — answer with the constitutional character of equality and the record of differential treatment.',
      ],
    },
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-14', article: 'Article 14', title: 'Equality before law' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-15', article: 'Article 15', title: 'Prohibition of discrimination' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-16', article: 'Article 16', title: 'Equality of opportunity in public employment' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-12', article: 'Article 12', title: 'Definition of State' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-32', article: 'Article 32', title: 'Remedies for enforcement of rights conferred by this Part' },
  ],

  examples: [
    {
      id: 'art-14-ill-1',
      title: 'Illustration 1 — Proving Conditions Met (Provision Applies)',
      illustrationType: 'statutory',
      description:
        'A statewide infrastructure tender confines eligibility to entities registered in a single district, excluding all other qualified national bidders without technical or capacity justification. The restriction is class legislation: no intelligible differentia linked to competence, and no rational nexus to project delivery. Article 14 is violated; the eligibility condition is liable to be quashed.',
    },
    {
      id: 'art-14-ill-2',
      title: 'Illustration 2 — Boundary Defect / Exception (Provision Fails)',
      illustrationType: 'fail-scenario',
      description:
        'A fiscal statute levies higher entertainment tax on air-conditioned multiplexes than on single-screen non-AC halls. Differentia (amenities, capital, ability to pay) is intelligible and bears a rational nexus to progressive revenue. The classification is reasonable; a bare Article 14 challenge fails.',
    },
  ],

  hypotheticals: [
    {
      id: 'art-14-hypo',
      title: 'Chamber Practice Hypothetical & Problem Solving (Senior Counsel Standard)',
      facts:
        'A State pension notification grants enhanced gratuity only to employees who retired on or after 1 January 2024, denying the same formula to those who retired on 31 December 2023. Pre-cut-off pensioners petition under Article 226, relying on D.S. Nakara.',
      question:
        'Is the cut-off date constitutionally sustainable under Article 14?',
      applicableLaw:
        'Article 14; twin test of reasonable classification; non-arbitrariness; D.S. Nakara; later fiscal-package decisions (e.g. Amar Nath Goyal line).',
      analysis:
        '1. Threshold & Jurisdiction: Article 226 is maintainable against a State notification affecting a defined class of pensioners.\n2. Ingredient Verification: Pensioners under a common scheme are ordinarily a homogeneous class; a pure calendar cut-off needs independent rational justification.\n3. Evidentiary Scrutiny: State must produce the financial package design and decision record; petitioner places the notification and comparator cohort.\n4. Defenses & Rebuttal: Fiscal constraint is relevant if tied to a new scheme or funding event; a whimsical overnight split of identically situated retirees remains vulnerable under Nakara.',
      conclusion:
        'Absent a demonstrated structural or fiscal event justifying the split, the cut-off is arbitrary. The Court may sever the date and extend the benefit to the excluded cohort or remand for a rational redesign.',
    },
  ],

  distinctions: [
    {
      id: 'art-14-dist-class',
      title: 'Reasonable Classification vs Class Legislation',
      left: 'Reasonable Classification (Valid)',
      right: 'Class Legislation (Void)',
      rows: [
        { point: 'Statutory basis', left: 'Article 14 permits scientific grouping', right: 'Article 14 forbids arbitrary privilege for a closed few' },
        { point: 'Essential ingredients', left: 'Intelligible differentia + rational nexus to object', right: 'Artificial selection; no real differentia or nexus' },
        { point: 'Stage of invocation', left: 'Defence of a statute or scheme under challenge', right: 'Attack on the face of discriminatory selection' },
        { point: 'Legal consequence', left: 'Classification upheld; measure survives', right: 'Offending provision struck or severed' },
      ],
    },
    {
      id: 'art-14-dist-15',
      title: 'Article 14 vs Article 15',
      left: 'Article 14',
      right: 'Article 15',
      rows: [
        { point: 'Statutory basis', left: 'General equality before law / equal protection', right: 'Specific ban on discrimination on religion, race, caste, sex, place of birth' },
        { point: 'Essential ingredients', left: 'Arbitrariness or failed classification', right: 'Discrimination on enumerated grounds (subject to clauses (3)–(6))' },
        { point: 'Stage of invocation', left: 'Any State classification or arbitrary action', right: 'Access, education, and related discrimination claims on listed grounds' },
        { point: 'Legal consequence', left: 'Quash arbitrary measure; compel equal treatment', right: 'Quash ground-based discrimination; enable protective discrimination' },
      ],
    },
  ],

  misconceptions: [
    {
      id: 'art-14-trap-1',
      trap: 'Article 14 requires identical treatment of all persons in all circumstances.',
      correction:
        'Equality demands equal treatment of equals, not identical treatment of unequals. Reasonable classification is an integral working principle of Article 14.',
    },
    {
      id: 'art-14-trap-2',
      trap: 'Article 14 protects only Indian citizens.',
      correction:
        'The text protects “any person.” Foreigners and juristic persons may invoke Article 14 (unlike the citizen-centric freedoms in Article 19).',
    },
    {
      id: 'art-14-trap-3',
      trap: 'Manifest arbitrariness can invalidate only executive action, not Acts of the legislature.',
      correction:
        'Shayara Bano held that primary legislation may be struck down for manifest arbitrariness — capricious, excessive, or lacking determining principle.',
    },
  ],

  cases: [
    {
      name: 'Ram Krishna Dalmia v. Justice S.R. Tendolkar',
      year: 1958,
      citation: 'AIR 1958 SC 538',
      holding:
        'Article 14 permits reasonable classification if founded on intelligible differentia having a rational nexus to the object of the statute; class legislation is forbidden.',
      relevance:
        'Cite as the locus classicus for the twin test when defending or attacking legislative classification.',
    },
    {
      name: 'E.P. Royappa v. State of Tamil Nadu',
      year: 1974,
      citation: '(1974) 4 SCC 3',
      holding:
        'Equality is antithetic to arbitrariness; arbitrary State action is inherently unequal and violates Article 14.',
      relevance:
        'Lead authority for challenging unguided discretion, mala fide transfers, and capricious administrative orders beyond formal classification analysis.',
    },
    {
      name: 'Shayara Bano v. Union of India',
      year: 2017,
      citation: '(2017) 9 SCC 1',
      holding:
        'Manifest arbitrariness is a ground to invalidate primary legislation under Article 14 where the law is capricious, excessive, or lacks determining principle.',
      relevance:
        'Cite when attacking statutory provisions (not only executive acts) as constitutionally arbitrary on their face.',
    },
    {
      name: 'D.S. Nakara v. Union of India',
      year: 1983,
      citation: '(1983) 1 SCC 305',
      holding:
        'Artificial cut-off dates that split a homogeneous class of pensioners without rational justification violate Article 14.',
      relevance:
        'Standard authority in service and pension cut-off litigation; distinguish later cases where cut-offs are tied to genuine financial packages.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 'art-14-brief',
      draftingCategory: 'brief',
      question:
        'Provide a structured Case Brief and legal problem assessment on Article 14, covering the twin test of reasonable classification and the doctrine of manifest arbitrariness.',
      answer: `I. ISSUE & JURISDICTIONAL THRESHOLD
Whether the impugned State measure denies equality before the law or equal protection of the laws by failing the twin test of reasonable classification or by being arbitrary / manifestly arbitrary. Forum: Article 32 or Article 226.

II. GOVERNING RULE & STATUTORY ANATOMY
Article 14 comprises equality before the law and equal protection of the laws. Classification is valid only if (1) intelligible differentia and (2) rational nexus to the object (Dalmia). Equality is antithetic to arbitrariness (Royappa). Primary legislation may fall for manifest arbitrariness (Shayara Bano). Articles 14, 19 and 21 form the Golden Triangle (Maneka Gandhi).

III. APPLICATION TO FACTUAL DISPUTE
Identify comparators, map the differentia, test nexus to the stated object, and alternatively plead unguided discretion or manifest excess. Produce the instrument and decision record; shift justificatory burden where discrimination is facial.

IV. CONCLUSION & OPERATIVE ADVICE
Seek certiorari to quash the offending condition, mandamus for equal consideration, and severability where appropriate. Preserve fiscal and policy defences only when tied to real structural justification, not calendar caprice.`,
      explanation:
        'IRAC chamber brief for Article 14 classification and arbitrariness challenges.',
      relatedProvisionIds: ['constitution-article-14'],
    },
    {
      id: 'art-14-submissions',
      draftingCategory: 'submissions',
      question:
        'Draft comprehensive Written Submissions on Article 14, deconstructing the equality code, evidentiary burden, precedents, and remedial pathways.',
      answer: `I. STATEMENT OF FACTS & PROCEDURAL PROVENANCE
The petitioner challenges State action that differentially treats similarly situated persons or selects a class without rational basis. Jurisdiction is invoked under Article 32 / Article 226 for declaratory and coercive relief.

II. STATUTORY SCHEME & JURISPRUDENTIAL INTENT
Article 14 embeds the rule of law and equal protection. It forbids class legislation while permitting scientific classification. Judicial doctrine has moved from Dalmia’s twin test to Royappa’s non-arbitrariness and Shayara Bano’s manifest arbitrariness, aligning equality with fairness and determining principle.

III. SATISFACTION OF MANDATORY PROVING INGREDIENTS
The record will show: (1) State authorship of the measure; (2) differential treatment of equals or artificial class selection; (3) absence of intelligible differentia or rational nexus; and/or (4) capricious or excessive design. Under BSA ss. 104–106, the petitioner places the instrument and comparators; the State must explain special-knowledge facts supporting the classification.

IV. JUDICIAL PRECEDENTS & RATIO DECIDENDI
Dalmia: twin test. Anwar Ali Sarkar: special procedures tested against equality. Royappa: arbitrariness equals inequality. Maneka Gandhi: equality informs liberty procedures. Shayara Bano: manifest arbitrariness strikes statutes. Nakara: homogeneous pensioner class and cut-offs. Janhit Abhiyan: EWS amendment sustained within the equality code’s structured affirmative framework.

V. REBUTTAL OF ADVERSARY’S CONTENTIONS & PRELIMINARY OBJECTIONS
Policy discretion is not a carte blanche for irrational cuts. Presumption of constitutionality yields to demonstrated arbitrariness. Alternative remedy does not bar pure vires challenges. Delay does not validate a continuing discriminatory scheme.

VI. PRAYER / RELIEF SOUGHT
(a) Declaration of violation of Article 14; (b) certiorari quashing the impugned condition or notification; (c) mandamus for equal treatment or reconsideration; (d) severability directions; (e) costs.`,
      explanation:
        'Appellate-standard written submissions for Article 14 enforcement.',
      relatedProvisionIds: [
        'constitution-article-14',
        'constitution-article-15',
        'constitution-article-32',
      ],
    },
  ],

  bareActPointers: [
    'Article 14, Constitution of India',
    'Articles 12, 15, 16, 32, 226',
    'BSA 2023 ss. 104–106 (burden of proof); s. 63 (electronic records in tender/algorithm challenges)',
  ],

  examTips: [
    'Structure every Article 14 opinion as: limbs → twin test → Royappa arbitrariness → Shayara Bano (if statute) → remedy.',
    'Never argue that Article 14 forbids all classification; attack the differentia or the nexus.',
    'For cut-off dates, start with Nakara and distinguish genuine financial-package cases.',
  ],

  revisionPoints: [
    'Article 14: equality before the law + equal protection; forbids class legislation; permits reasonable classification.',
    'Twin test: intelligible differentia + rational nexus (Dalmia); arbitrariness is inequality (Royappa); manifest arbitrariness can void statutes (Shayara Bano).',
    'Forum: Articles 32 and 226; presumption of constitutionality; BSA burdens on disputed facts.',
    'Key authorities: Dalmia, Royappa, Maneka Gandhi, Shayara Bano, Nakara.',
  ],

  relatedTopics: ['art-15', 'art-16', 'art-21', 'equality-reservation', 'fundamental-rights'],
} satisfies TopicContent
