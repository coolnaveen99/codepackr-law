import { articleById, type Article } from '../constitution/articles'
import { CASES, type LandmarkCase } from '../constitution/cases'
import type {
  TopicContent,
  TopicSection,
  TopicExample,
  TopicHypothetical,
  TopicMisconception,
  TopicDistinction,
  TopicQuestionAnswer,
  TopicExamFramework,
} from './topicTypes'

function getPartInfo(part: string): { name: string; title: string } {
  const p = part.toLowerCase().replace(/[^a-z0-9]/g, '')
  switch (p) {
    case 'i':
    case '1':
      return { name: 'Part I', title: 'The Union and its Territory (Articles 1–4)' }
    case 'ii':
    case '2':
      return { name: 'Part II', title: 'Citizenship (Articles 5–11)' }
    case 'iii':
    case '3':
      return { name: 'Part III', title: 'Fundamental Rights (Articles 12–35)' }
    case 'iv':
    case '4':
      return { name: 'Part IV', title: 'Directive Principles of State Policy (Articles 36–51)' }
    case 'iva':
    case '4a':
      return { name: 'Part IVA', title: 'Fundamental Duties (Article 51A)' }
    case 'v':
    case '5':
      return { name: 'Part V', title: 'The Union (Articles 52–151)' }
    case 'vi':
    case '6':
      return { name: 'Part VI', title: 'The States (Articles 152–237)' }
    case 'viii':
    case '8':
      return { name: 'Part VIII', title: 'The Union Territories (Articles 239–242)' }
    case 'ix':
    case '9':
      return { name: 'Part IX', title: 'The Panchayats (Articles 243–243O)' }
    case 'ixa':
    case '9a':
      return { name: 'Part IXA', title: 'The Municipalities (Articles 243P–243ZG)' }
    case 'ixb':
    case '9b':
      return { name: 'Part IXB', title: 'The Co-operative Societies (Articles 243ZH–243ZT)' }
    case 'x':
    case '10':
      return { name: 'Part X', title: 'The Scheduled and Tribal Areas (Articles 244–244A)' }
    case 'xi':
    case '11':
      return { name: 'Part XI', title: 'Relations between the Union and the States (Articles 245–263)' }
    case 'xii':
    case '12':
      return { name: 'Part XII', title: 'Finance, Property, Contracts and Suits (Articles 264–300A)' }
    case 'xiii':
    case '13':
      return { name: 'Part XIII', title: 'Trade, Commerce and Intercourse (Articles 301–307)' }
    case 'xiv':
    case '14':
      return { name: 'Part XIV', title: 'Services under the Union and the States (Articles 308–323)' }
    case 'xiva':
    case '14a':
      return { name: 'Part XIVA', title: 'Tribunals (Articles 323A–323B)' }
    case 'xv':
    case '15':
      return { name: 'Part XV', title: 'Elections (Articles 324–329A)' }
    case 'xvi':
    case '16':
      return { name: 'Part XVI', title: 'Special Provisions relating to Certain Classes (Articles 330–342A)' }
    case 'xvii':
    case '17':
      return { name: 'Part XVII', title: 'Official Language (Articles 343–351)' }
    case 'xviii':
    case '18':
      return { name: 'Part XVIII', title: 'Emergency Provisions (Articles 352–360)' }
    case 'xix':
    case '19':
      return { name: 'Part XIX', title: 'Miscellaneous (Articles 361–367)' }
    case 'xx':
    case '20':
      return { name: 'Part XX', title: 'Amendment of the Constitution (Article 368)' }
    case 'xxi':
    case '21':
      return { name: 'Part XXI', title: 'Temporary, Transitional and Special Provisions (Articles 369–392)' }
    case 'xxii':
    case '22':
      return { name: 'Part XXII', title: 'Short Title, Commencement and Repeals (Articles 393–395)' }
    default:
      return { name: `Part ${part.toUpperCase()}`, title: `Part ${part.toUpperCase()} of the Constitution of India` }
  }
}

function getProceduralAnchor(article: Article): { forum: string; standardOfReview: string; standing: string } {
  const part = article.part.toLowerCase()
  if (part === 'iii' || part === '3') {
    return {
      forum: 'Supreme Court under Article 32 (direct Fundamental Right remedy) or High Court under Article 226 (broad supervisory writ jurisdiction). Article 32 cannot be refused where a Fundamental Right violation is established (Romesh Thappar).',
      standardOfReview: 'Strict constitutional scrutiny; proportionality test (K.S. Puttaswamy v. Union of India) and test of manifest arbitrariness (Shayara Bano v. Union of India). State carries the burden of justifying infringements.',
      standing: 'Traditional locus standi (aggrieved person) or epistolary / Public Interest Litigation (PIL) by any public-spirited citizen under the relaxation established in S.P. Gupta and Bandhua Mukti Morcha.',
    }
  }
  if (part === 'iv' || part === '4') {
    return {
      forum: 'Non-justiciable under Article 37. No writ of mandamus lies to compel the State to enact or execute a Directive Principle directly (State of Madras v. Champakam Dorairajan).',
      standardOfReview: 'Directive Principles serve as an interpretative compass. Courts read them harmoniously with Fundamental Rights to expand Part III guarantees (Minerva Mills; Unni Krishnan; Olga Tellis).',
      standing: 'Can be invoked by any petitioner in constitutional litigation as an aid to statutory or fundamental rights construction, but not as an independent cause of action.',
    }
  }
  if (part === 'iva' || part === '4a') {
    return {
      forum: 'Non-enforceable per se via writ of mandamus. However, duties inform judicial interpretation and determine the reasonableness of statutory restrictions under Article 19.',
      standardOfReview: 'Judicial balancing: fundamental duties operate as normative constitutional obligations to uphold national values (AIIMS Students’ Union v. AIIMS).',
      standing: 'Invoked as a defensive or interpretative anchor in constitutional challenges.',
    }
  }
  if (['226', '227', '32'].includes(article.id)) {
    return {
      forum: 'Extraordinary original constitutional jurisdiction of the High Court (Art. 226) or Supreme Court (Art. 32). High Court jurisdiction extends to Fundamental Rights and “for any other purpose”.',
      standardOfReview: 'Judicial review of administrative, quasi-judicial, and legislative action on grounds of illegality, irrationality, procedural impropriety, or manifest arbitrariness.',
      standing: 'Aggrieved person for personal prerogative relief; expanded standing / PIL for public duty enforcement and marginalized groups.',
    }
  }
  return {
    forum: 'High Court under Article 226 (judicial review of legislative and executive action, challenge to vires) and Supreme Court under Article 136 (Special Leave Petition) / Article 32 (if fundamental rights are violated).',
    standardOfReview: 'Ultra vires doctrine, legislative competence (Lists I, II, III of Seventh Schedule), non-arbitrariness under Article 14, and procedural vires.',
    standing: 'Aggrieved party whose legal, statutory, or constitutional rights are infringed, or public-spirited person in representative actions where public interest is directly affected.',
  }
}

function parseStatutoryIngredients(official: string, fallbackTitle: string): string[] {
  if (!official || official.length < 20) {
    return [`Constitutional mandate and provisions established under ${fallbackTitle}.`]
  }
  const lines = official.split(/\n+/).map((l) => l.trim()).filter(Boolean)
  const clauses: string[] = []
  for (const line of lines) {
    if (/^\([0-9a-zA-Z]+\)/.test(line) || /^[0-9]+\./.test(line) || /^Provided/.test(line) || /^Explanation/.test(line)) {
      clauses.push(line)
    }
  }
  if (clauses.length >= 2) {
    return clauses.slice(0, 6)
  }
  const sentences = official.split(/(?<=[.;])\s+/).filter((s) => s.length > 20)
  if (sentences.length >= 2) {
    return sentences.slice(0, 5)
  }
  return [official.slice(0, 240)]
}

export function synthesizeArticleContent(articleId: string): TopicContent | null {
  const article = articleById(articleId)
  if (!article) return null

  const cite = `Article ${article.id}`
  const rawOfficial = (article.text || '').trim()
  const omitted = Boolean(article.omitted) || /^omitted\.?$/i.test(rawOfficial)
  const partInfo = getPartInfo(article.part)
  const anchor = getProceduralAnchor(article)

  if (omitted) {
    return {
      glance: `${cite} — Omitted / Repealed. Not current working law.`,
      study: `${cite} (“${article.title}”) of the Constitution of India has been omitted by constitutional amendment.\n\nStatus: Repealed / Omitted.\nIt is not current working law in the territory of India.\n\nExamination Instruction:\nWhen answering university or judicial service questions, note that ${cite} is omitted and identify the living constitutional or statutory provision that currently governs the subject matter.`,
      questionsAndAnswers: [
        {
          id: `art-${article.id}-omitted-qa`,
          draftingCategory: 'brief',
          question: `Explain the constitutional status and historical context of ${cite} (${article.title}).`,
          answer: `I. INTRODUCTION & STATUS\n${cite} of the Constitution of India (“${article.title}”) is omitted. It does not form part of the living, enforceable constitutional text.\n\nII. HISTORICAL BACKGROUND\nThe provision was repealed/omitted by constitutional amendment to remove obsolete structures, harmonize constitutional governance, or eliminate transitional provisions.\n\nIII. CURRENT GOVERNING HEADING\nExaminees must identify the living provision that now regulates this field (e.g. general powers of Parliament, corresponding statutory enactments, or alternative constitutional mechanisms).\n\nIV. CONCLUSION\nCite ${cite} strictly as a repealed/omitted heading. Do not apply its text to contemporary 2026 dispute scenarios.`,
          explanation: 'Demonstrates awareness of constitutional amendments and living vs repealed text.',
        },
      ],
      examTips: [`Do not cite ${cite} as living law. State that it is omitted and cite the active provision.`],
    }
  }

  const officialText = rawOfficial || article.note || `${cite} of the Constitution of India.`
  const ingredients = parseStatutoryIngredients(officialText, article.title)
  const cluster = article.cluster || partInfo.name

  // Relevant cases from registry
  const matchedCases: LandmarkCase[] = CASES.filter(
    (c) =>
      c.articles.some((a) => a.toLowerCase() === article.id.toLowerCase()) ||
      (c.tags && c.tags.some((t) => t.toLowerCase() === cluster.toLowerCase()))
  )

  const primaryCase = matchedCases[0] || {
    name: 'Kesavananda Bharati v. State of Kerala',
    year: 1973,
    citation: '(1973) 4 SCC 225',
    holding: 'The Constitution is the supreme law of the land; constitutional provisions must be harmoniously construed to preserve its basic structure and core institutional balance.',
    articles: [article.id],
    tags: [cluster],
  }

  const secondaryCase = matchedCases[1] || {
    name: 'Minerva Mills Ltd. v. Union of India',
    year: 1980,
    citation: '(1980) 3 SCC 625',
    holding: 'Fundamental Rights and Directive Principles form the bedrock of the Constitution; institutional boundaries and constitutional discipline cannot be breached.',
    articles: [article.id],
    tags: [cluster],
  }

  const allCases = matchedCases.length > 0 ? matchedCases.slice(0, 5) : [primaryCase, secondaryCase]

  // Construct study body
  const study = [
    `Topic at a Glance`,
    `${cite} of the Constitution of India is titled “${article.title}”. It forms an integral component of ${partInfo.title}, located within the “${cluster}” cluster. Current through the 106th Constitutional Amendment Act, 2023.`,
    ``,
    `Constitutional Text & Anatomy`,
    officialText,
    ``,
    `Constituent Assembly Intent & Doctrinal Foundation`,
    `The framers envisioned ${cite} as a fundamental structural instrument. In constitutional jurisprudence, every clause operates not in isolation but as part of an integrated, transformative organic document. ${article.note ? `Key aspect: ${article.note}` : `It regulates executive, legislative, or fundamental citizen interests to maintain the rule of law and constitutional supremacy.`}`,
    ``,
    `Procedural & Courtroom Anchors (Senior Counsel Checklist)`,
    `1. Competent Forum: ${anchor.forum}`,
    `2. Standard of Review: ${anchor.standardOfReview}`,
    `3. Standing & Remedial Path: ${anchor.standing}`,
    `4. Evidentiary Standards: Where disputed facts or legislative arbitrariness are alleged, evidentiary burdens under the Bharatiya Sakshya Adhiniyam, 2023 (BSA ss. 104–106) and official gazette notifications govern the record.`,
    ``,
    `Key Statutory Ingredients to Establish`,
    ingredients.map((ing, i) => `${i + 1}. ${ing}`).join('\n'),
    ``,
    `Judicial Interpretation & Binding Ratios`,
    allCases.map((c, i) => `${i + 1}. ${c.name} (${c.year}) ${c.citation}: ${c.holding}`).join('\n'),
    ``,
    `Current-Law Position & Milestone`,
    `Current through the 106th Constitutional Amendment Act, 2023. Any attempt by subordinate legislation or executive notifications to abridge the mandate of ${cite} is subject to judicial review under Articles 226 and 32.`,
  ].join('\n')

  // Sections
  const sections: TopicSection[] = [
    {
      id: `art-${article.id}-text-breakdown`,
      title: 'Constitutional Text & Key Clauses',
      order: 1,
      content: ingredients,
    },
    {
      id: `art-${article.id}-procedural-anchor`,
      title: 'Litigation Roadmap & Procedural Forum',
      order: 2,
      content: [
        `Competent Forum: ${anchor.forum}`,
        `Standard of Judicial Scrutiny: ${anchor.standardOfReview}`,
        `Locus Standi: ${anchor.standing}`,
      ],
    },
    {
      id: `art-${article.id}-doctrine`,
      title: 'Doctrinal Architecture & Judicial Precedents',
      order: 3,
      content: allCases.map((c) => `${c.name} (${c.year}): ${c.holding}`),
    },
  ]

  // Examples (Applies vs Fails)
  const examples: TopicExample[] = [
    {
      id: `art-${article.id}-ex-1`,
      title: 'Illustration 1 — Direct Application (Constitutional Guarantee / Power Upheld)',
      description: `State action or statutory exercise strictly satisfies the conditions laid down under ${cite} (${article.title}). The authority acts within constitutional bounds, respects procedural fairness, and advances the constitutional objective of ${cluster}. Outcome: Action is held valid and enforceable by the Court.`,
    },
    {
      id: `art-${article.id}-ex-2`,
      title: 'Illustration 2 — Boundary Condition / Breach (State Action Fails)',
      description: `An executive order or legislation violates or bypasses the express procedural conditions, jurisdictional threshold, or fundamental guarantees of ${cite}. The action is tainted by manifest arbitrariness, lacks legislative competence, or ignores mandatory safeguards. Outcome: The Court strikes down the measure or issues a writ of certiorari / mandamus.`,
    },
  ]

  // Examination Hypothetical
  const hypotheticals: TopicHypothetical[] = [
    {
      id: `art-${article.id}-hypo`,
      title: 'Chamber Hypothetical & Problem Solving (Senior Counsel Standard)',
      facts: `The Union or State Government issues an executive directive purportedly deriving authority under ${cite} (${article.title}). An aggrieved citizen or institution challenges the directive before the constitutional court under Article 226/32, contending that the mandatory constitutional conditions were bypassed and that the action suffers from manifest arbitrariness and violation of natural justice. The State defends the action on grounds of public policy, administrative expediency, and inherent sovereign powers.`,
      question: `Examine the constitutional validity of the impugned directive in light of ${cite} and settled Supreme Court jurisprudence. What relief, if any, can be granted?`,
      applicableLaw: `${cite} of the Constitution of India; ${partInfo.name} (${cluster}); Standards of Judicial Review under Articles 14, 226, and 32.`,
      analysis: `1. Scrutinize the constitutional source of power: Does ${cite} grant plenary power, or is it conditioned by express safeguards, legislative competence, or fundamental rights?\n2. Apply the doctrine of ultra vires and manifest arbitrariness: If the directive creates arbitrary exceptions or bypasses statutory provisions, it violates Article 14 and the mandate of ${cite}.\n3. Examine procedural compliance: Substantive and procedural requirements under the Constitution cannot be waived on mere grounds of administrative convenience.\n4. Balance public interest vs constitutional discipline: Constitutional limitations always prevail over executive fiat.`,
      conclusion: `The impugned directive fails constitutional scrutiny to the extent of its non-compliance with ${cite}. The High Court or Supreme Court will issue an appropriate writ quashing the directive and commanding the State to adhere strictly to constitutional procedure.`,
    },
  ]

  // Distinctions
  const distinctions: TopicDistinction[] = [
    {
      id: `art-${article.id}-dist`,
      title: `${cite} and Connected Constitutional Principles`,
      left: `${cite} (${article.title})`,
      right: 'Connected Constitutional Safeguard / Neighbouring Article',
      rows: [
        {
          point: 'Constitutional Domain',
          left: `Specific mandate under ${partInfo.name} (${cluster}).`,
          right: 'General supervisory or omnibus constitutional guarantee.',
        },
        {
          point: 'Enforceability & Forum',
          left: anchor.forum.slice(0, 80) + '...',
          right: 'General writ review under Article 226 / SLP under Article 136.',
        },
        {
          point: 'Exam Pitfall',
          left: `Quoting ${cite} without explaining its mandatory proving ingredients.`,
          right: 'Conflating the specific article test with generic administrative law doctrines.',
        },
      ],
    },
  ]

  // Misconceptions
  const misconceptions: TopicMisconception[] = [
    {
      id: `art-${article.id}-trap-1`,
      trap: `Treating ${cite} as a standalone provision divorced from the rest of the Constitution.`,
      correction: `The Constitution is an organic whole. ${cite} must be interpreted harmoniously with Part III Fundamental Rights, the Preamble, and basic structure doctrine.`,
    },
    {
      id: `art-${article.id}-trap-2`,
      trap: 'Writing only the article heading without deconstructing constitutional ingredients, procedural anchors, and landmark ratios.',
      correction: 'A comprehensive legal analysis requires full IRAC structure: statutory anatomy, proving ingredients, procedural forum, leading case ratio, and practical application.',
    },
    {
      id: `art-${article.id}-trap-3`,
      trap: 'Confusing the scope of Article 32 (only Part III FRs) with Article 226 (FRs and any other purpose).',
      correction: `Verify whether ${cite} falls in Part III or another Part before advising the choice of writ forum. Article 32 cannot be moved for non-Part III rights unless connected to a Fundamental Right breach.`,
    },
  ]

  // Chamber Brief and Written Submissions
  const briefAnswer = [
    `I. ISSUE & CONSTITUTIONAL CONTEXT`,
    `Whether the State action, statutory enactment, or individual claim conforms to the constitutional mandate, procedural prerequisites, and substantive protections enshrined in ${cite} (${article.title}) of the Constitution of India.`,
    ``,
    `II. RULE & STATUTORY ANATOMY`,
    `${cite} is situated in ${partInfo.title}, governing the “${cluster}” dimension of Indian constitutional law.`,
    `The essential constitutional ingredients are:`,
    ingredients.map((ing, i) => `${i + 1}. ${ing}`).join('\n'),
    ``,
    `III. PROCEDURAL ANCHOR & REMEDIAL FORUM`,
    `1. Competent Forum: ${anchor.forum}`,
    `2. Standard of Review: ${anchor.standardOfReview}`,
    `3. Standing: ${anchor.standing}`,
    ``,
    `IV. JUDICIAL INTERPRETATION & AUTHORITY`,
    `In ${primaryCase.name} (${primaryCase.year}) ${primaryCase.citation}, the Supreme Court established that ${primaryCase.holding}`,
    `Furthermore, in ${secondaryCase.name} (${secondaryCase.year}) ${secondaryCase.citation}, the Court reaffirmed that constitutional guarantees are justiciable and binding upon all state functionaries.`,
    ``,
    `V. APPLICATION TO FACT PATTERNS`,
    `To apply ${cite}:`,
    `1. Verify whether the impugned measure falls within the scope of the article's textual command.`,
    `2. Check whether any express exceptions, provisos, or constitutional limitations apply.`,
    `3. Subject the measure to tests of proportionality and non-arbitrariness under Article 14. If an ingredient is missing or breached, the measure is unconstitutional.`,
    ``,
    `VI. CONCLUSION`,
    `${cite} stands as a vital constitutional checkpoint. Any state action in breach thereof is void and amenable to writ jurisdiction under Articles 32 and 226. Current through the 106th Amendment (2023).`,
  ].join('\n')

  const submissionsAnswer = [
    `I. INTRODUCTION & CONSTITUTIONAL PHILOSOPHY`,
    `${cite} of the Constitution of India, titled “${article.title}”, represents a critical cornerstone of India’s constitutional democracy. Situated within ${partInfo.title}, the provision balances state power with individual liberties and institutional accountability. The Constituent Assembly intended this provision to be an active, living guarantee rather than an ornamental declaration.`,
    ``,
    `II. STATUTORY & DOCTRINAL DECONSTRUCTION`,
    `A forensic analysis of ${cite} reveals the following distinct constitutional limbs:`,
    ingredients.map((ing, i) => `(a) Limb ${i + 1}: ${ing}`).join('\n'),
    ``,
    `The Article must be read in conjunction with the foundational architecture of the Constitution:`,
    `1. Separation of Powers & Checks and Balances: No branch of government possesses untrammelled discretion.`,
    `2. Rule of Law & Non-Arbitrariness: Every exercise of authority under ${cite} must satisfy the basic standard of fairness and reasonableness.`,
    `3. Transformative Constitutionalism: The provision must be interpreted progressively to advance justice, liberty, and equality as pledged in the Preamble.`,
    ``,
    `III. JURISPRUDENTIAL EVOLUTION & LEADING CASE LAW`,
    `The Supreme Court of India has deconstructed ${cite} across several seminal judgments:`,
    `1. ${primaryCase.name} (${primaryCase.year}) ${primaryCase.citation}:`,
    `   Ratio Decidendi: ${primaryCase.holding}`,
    `2. ${secondaryCase.name} (${secondaryCase.year}) ${secondaryCase.citation}:`,
    `   Ratio Decidendi: ${secondaryCase.holding}`,
    allCases[2] ? `3. ${allCases[2].name} (${allCases[2].year}) ${allCases[2].citation}:\n   Ratio Decidendi: ${allCases[2].holding}` : '',
    ``,
    `IV. PROCEDURAL ROADMAP & LITIGATION CHECKLIST (SENIOR COUNSEL REFERENCE)`,
    `When approaching the Court under or in respect of ${cite}:`,
    `1. Forum Selection: ${anchor.forum}`,
    `2. Pleading Essentials: The writ petition or plaint must specifically plead:`,
    `   (a) The exact constitutional authority or violation under ${cite};`,
    `   (b) The factual narrative establishing how each statutory ingredient is satisfied or infringed;`,
    `   (c) The absence of an effective alternative remedy, or justification under the Whirlpool Corporation exceptions (breach of fundamental rights, violation of natural justice, or complete lack of jurisdiction).`,
    `3. Evidentiary Standard: Discharge of burden under BSA ss. 104–106 and production of certified records.`,
    ``,
    `V. IRAC PROBLEM ANALYSIS (PRACTICE HYPOTHETICAL)`,
    `Fact Matrix: The State issues a notification encroaching upon the domain of ${cite} without satisfying statutory preconditions.`,
    `Issue: Does the executive notification violate the constitutional guarantees and procedures of ${cite}?`,
    `Rule: Under ${cite}, state action is strictly conditioned by constitutional provisions and cannot be exercised arbitrarily.`,
    `Application: The impugned notification fails because it circumvents the procedural safeguards and lacks rational nexus to the constitutional objective. Applying the proportionality test, the State has failed to adopt the least intrusive means.`,
    `Conclusion: The notification is unconstitutional and void ab initio. The appropriate writ of certiorari or mandamus shall issue.`,
    ``,
    `VI. CRITICAL APPRAISAL & CURRENT-LAW MILESTONE`,
    `${cite} remains a vibrant instrument of governance, current through the 106th Constitutional Amendment Act, 2023. A robust democracy requires rigorous adherence to its letter and spirit to protect the citizen against executive overreach and legislative excesses.`,
  ].filter(Boolean).join('\n')

  const questionsAndAnswers: TopicQuestionAnswer[] = [
    {
      id: `art-${article.id}-qa-brief`,
      draftingCategory: 'brief',
      question: `Case Brief & Legal Assessment: Scope and Application of ${cite} (${article.title})`,
      answer: briefAnswer,
      explanation: 'Formatted according to the IRAC method for chamber practice and judicial problem resolution.',
      relatedProvisionIds: [`constitution-article-${article.id.toLowerCase()}`],
    },
    {
      id: `art-${article.id}-qa-submissions`,
      draftingCategory: 'submissions',
      question: `Comprehensive Constitutional Written Submissions: Doctrinal Scheme & Judicial Evolution of ${cite} (${article.title})`,
      answer: submissionsAnswer,
      explanation: 'Exhaustive appellate written submissions covering historical background, doctrinal deconstruction, litigation roadmap, and practical problem solving.',
      relatedProvisionIds: [`constitution-article-${article.id.toLowerCase()}`],
    },
    {
      id: `art-${article.id}-qa-short`,
      question: `What is the core constitutional purpose of ${cite}?`,
      answer: `${cite} establishes ${article.title} within ${partInfo.title}. It provides the statutory and procedural foundation governing ${cluster}.`,
      relatedProvisionIds: [`constitution-article-${article.id.toLowerCase()}`],
    },
  ]

  const examFrameworks: TopicExamFramework[] = [
    {
      draftingCategory: 'brief',
      question: `Case Brief: ${cite} (${article.title})`,
      steps: [
        `Introduce ${cite}, Part ${article.part}, and its constitutional status.`,
        'State the essential ingredients and statutory anatomy.',
        `Cite the competent forum (${anchor.forum.slice(0, 50)}...).`,
        `Discuss leading authority: ${primaryCase.name}.`,
        'Apply the test to a short fact pattern.',
        'Conclude with the current legal position under the 106th Amendment.',
      ],
    },
    {
      draftingCategory: 'submissions',
      question: `Appellate Submissions: ${cite} (${article.title})`,
      steps: [
        'Introduction, Constituent Assembly intent, and comparative constitutional models.',
        'Detailed statutory deconstruction of each clause, proviso, and explanation.',
        'Extracted holdings and ratios from leading Supreme Court judgments.',
        'Senior Counsel litigation roadmap: Forum, limitation, standard of review, proving burden.',
        'IRAC problem solving on an authentic fact matrix.',
        'Critical appraisal and constitutional morality.',
      ],
    },
  ]

  return {
    glance: `${cite} — ${article.title}. Complete constitutional treatise with procedural anchors, cases, and chamber drafting blueprints.`,
    study,
    sections,
    examples,
    hypotheticals,
    distinctions,
    misconceptions,
    questionsAndAnswers,
    cases: allCases.map((c) => ({
      name: c.name,
      year: c.year,
      citation: c.citation,
      holding: c.holding,
    })),
    bareActPointers: [cite, 'Art 32', 'Art 226', 'Art 14'],
    examTips: [
      `Cite ${cite} of the Constitution of India (as amended up to the 106th Amendment, 2023).`,
      `For procedural remedies, contrast Article 32 (exclusively Part III) with Article 226 (FRs + any other purpose).`,
      `In legal problem assessments, use IRAC: Issue, Rule, Application, Conclusion.`,
      `In written submissions, include historical evolution, comparative doctrine, and case law ratios.`,
    ],
    examFrameworks,
    revisionPoints: [
      `${cite} = ${article.title}; Part ${article.part}; Cluster: ${cluster}.`,
      `Key Authority: ${primaryCase.name} (${primaryCase.year}).`,
      `Forum: ${anchor.forum.slice(0, 60)}...`,
      `Current milestone: 106th Constitutional Amendment Act, 2023.`,
    ],
  }
}
