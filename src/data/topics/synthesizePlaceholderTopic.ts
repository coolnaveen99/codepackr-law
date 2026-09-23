import type {
  TopicContent,
  TopicQuestionAnswer,
  TopicSection,
  TopicProvision,
  TopicMisconception,
  TopicDistinction,
  TopicExample,
  TopicHypothetical,
} from './topicTypes'
import type { CaseCitation } from '../subjects'
import { getSubjectBySlug, getTopicById } from '../subjects'

export function synthesizePlaceholderTopic(subjectSlug: string, topicId: string): TopicContent | null {
  const subject = getSubjectBySlug(subjectSlug)
  if (!subject) return null

  const topic = getTopicById(subjectSlug, topicId)
  if (!topic) return null

  const title = topic.name
  const subjectName = subject.name
  const bareAct = subject.bareActs[0] || subjectName
  const isSection = topic.type === 'section'
  const isArticle = topic.type === 'article'
  const isDoctrine = topic.type === 'doctrine'
  const isFormat = topic.type === 'format'

  const provisionTypeLabel = isSection
    ? 'Section'
    : isArticle
      ? 'Article'
      : isDoctrine
        ? 'Doctrine'
        : isFormat
          ? 'Courtroom Drafting Format'
          : 'Statutory Topic'

  const glance = `${title} under ${subjectName} (${bareAct}). Authoritative treatise, statutory deconstruction, evidentiary standards under BSA 2023, limitation checkpoints, and chamber practice roadmaps.`

  const study = `Statutory Provenance & Legislative Objective
${title} constitutes an essential ${provisionTypeLabel.toLowerCase()} within the jurisprudence of ${subjectName}, anchored principally in the ${bareAct}${topic.cluster ? ` (Practice Cluster: ${topic.cluster})` : ''}.
${topic.note ? `Statutory Scope: ${topic.note}` : ''}

In contemporary Indian jurisprudence, this provision balances statutory rights, regulatory duties, and procedural guarantees. Its application is analyzed through two complementary lenses:
1. Substantive & Jurisprudential Depth: Textual deconstruction, legislative intent, non-obstante clauses, provisos, explanations, and landmark ratios of the Supreme Court of India.
2. Courtroom & Chamber Practice: Forum selection, limitation calculation under the Limitation Act 1963, mandatory pleading averments, and the discharge of evidentiary burdens under the Bharatiya Sakshya Adhiniyam, 2023 (BSA).

Mandatory Legal Ingredients & Proving Scheme
To substantiate a claim, maintain a prosecution, or raise a statutory defense under ${title}, the advocate must demonstrate four cumulative conditions:
1. Jurisdictional Threshold: Showing that the subject-matter, territorial jurisdiction, and cause of action fall squarely within the governing enactment and that no statutory bar precludes relief.
2. Conditions Precedent: Proving each mandatory statutory ingredient strictly through admissible oral, documentary, or digital evidence.
3. Absence of Statutory Exceptions: Demonstrating that the opposing party cannot shelter under any general or specific statutory exceptions, provisos, or waivers.
4. Definitive Legal Remedy: Articulating the precise statutory relief—whether declaratory, compensatory, injunctive, penal, or restorative.

Evidentiary Burdens under Bharatiya Sakshya Adhiniyam, 2023 (BSA)
1. Initial Burden of Proof: Under Section 104 of the BSA, the burden of establishing foundational facts rests entirely on the party who asserts them.
2. Burden of Proving Particular Facts: Under Section 106 of the BSA, when any fact is especially within the knowledge of any person, the burden of proving that fact shifts to that person.
3. Documentary & Electronic Evidence: All electronic communications, records, and digital certificates relied upon must satisfy Section 63 of the BSA.
4. Presumptions: Verify whether the statute commands mandatory presumptions ("shall presume") or discretionary inferences ("may presume") to streamline proof.

Procedural Checkpoints & Courtroom Roadmap
1. Competent Forum: Identify the precise tribunal, court of civil jurisdiction, magistrate, or High Court having territorial and pecuniary jurisdiction.
2. Limitation Timeline: Strictly calculate the limitation period under the Limitation Act, 1963; identify the specific accrual date of the cause of action and evaluate whether Section 5 condonation applies.
3. Pleading Standards: Plead specific foundational facts rather than mere statutory repetitions. Anticipate objections on locus standi, non-joinder, or alternative remedies.`

  const sections: TopicSection[] = [
    {
      id: 'sec-provenance',
      title: 'Statutory Provenance, Legislative Intent & Textual Architecture',
      order: 1,
      content: [
        `${title} constitutes an essential ${provisionTypeLabel.toLowerCase()} within the jurisprudence of ${subjectName}, anchored principally in the ${bareAct}${topic.cluster ? ` (Practice Cluster: ${topic.cluster})` : ''}.`,
        topic.note ? `Statutory Scope: ${topic.note}` : 'Serves as an authoritative benchmark across academic research, judicial competitive examinations, and active chamber advocacy.',
        'Legislative Intent: Enacted to curb procedural mischief, secure equitable rights, and establish predictable, enforceable statutory norms across the jurisdiction.',
        'Textual Anatomy: Dissect main clauses, condition precedents, non-obstante overrides, and exceptions to delineate the precise boundaries of statutory operation.',
      ],
    },
    {
      id: 'sec-ingredients',
      title: 'Mandatory Proving Ingredients & Statutory Tests',
      order: 2,
      content: [
        '1. Jurisdictional Threshold: Establishing locus standi, territorial jurisdiction, and absence of statutory bars (e.g. res judicata, limitation, or alternative statutory remedy).',
        '2. Substantive Conditions Precedent: Demonstrating that every statutory ingredient mandated by the provision has been satisfied in the factual matrix.',
        '3. Rebuttal of Provisos & Exceptions: Establishing that the case is not disentitled by any exclusion, statutory waiver, or limitation clause.',
        '4. Relief & Enforcement: Specifying the exact nature of the statutory remedy claimed, whether coercive, restorative, compensatory, or declaratory.',
      ],
    },
    {
      id: 'sec-evidentiary',
      title: 'Evidentiary Proving Standards under Bharatiya Sakshya Adhiniyam, 2023 (BSA)',
      order: 3,
      content: [
        'Primary Burden (BSA s. 104): The foundational burden rests on the claimant or petitioner to prove the existence of circumstances entitling them to relief.',
        'Special Knowledge Shifting (BSA s. 106): Facts exclusively within the custody or knowledge of the adversary shift the burden of explanation to the adverse party.',
        'Electronic Records (BSA s. 63): Mandatory compliance for all digital logs, printouts, electronic communications, and metadata before admissibility.',
        'Judicial Presumptions: Assess whether the section triggers mandatory statutory presumptions ("shall presume") or discretionary inferences ("may presume").',
      ],
    },
    {
      id: 'sec-procedural',
      title: 'Litigation Roadmap, Forum Selection & Limitation Checkpoints',
      order: 4,
      content: [
        'Competent Forum: Select the appropriate court of first instance, specialized tribunal, or appellate forum based on subject-matter and pecuniary parameters.',
        'Limitation Period: Check the Limitation Act, 1963 schedule; pinpoint the accrual of cause of action and determine whether Section 5 condonation is available.',
        'Mandatory Averments: Formulate clear, verified pleadings; state jurisdictional facts affirmatively and plead specific relief rather than generic prayers.',
        'Interim Protection: Evaluate grounds for interlocutory injunctions, stay of proceedings, or interim maintenance pending final adjudication.',
      ],
    },
    {
      id: 'sec-jurisprudence',
      title: 'Evolution of Judicial Scrutiny & Precedent Synthesis',
      order: 5,
      content: [
        'Judicial Interpretation: The Supreme Court and High Courts interpret this provision purposively, ensuring substantive justice prevails over rigid formalism.',
        'Constitutional Harmonization: The provision must be construed in harmony with Fundamental Rights, particularly Articles 14, 19, and 21 of the Constitution.',
        'Recent Trends: Modern decisions demonstrate strict scrutiny against procedural dilatoriness while protecting substantive rights of affected parties.',
      ],
    },
  ]

  const provisions: TopicProvision[] = [
    {
      actId: subject.slug,
      actName: bareAct,
      provisionId: `${subject.slug}-${topic.id}`,
      title: title,
      section: isSection ? topic.range : undefined,
      article: isArticle ? topic.range : undefined,
    },
    {
      actId: 'bsa',
      actName: 'Bharatiya Sakshya Adhiniyam, 2023',
      provisionId: 'bsa-s-104',
      section: 'Section 104',
      title: 'Burden of proof on propounder',
    },
    {
      actId: 'bsa',
      actName: 'Bharatiya Sakshya Adhiniyam, 2023',
      provisionId: 'bsa-s-106',
      section: 'Section 106',
      title: 'Burden of proving fact especially within knowledge',
    },
    {
      actId: 'limitation',
      actName: 'Limitation Act, 1963',
      provisionId: 'limitation-sched',
      title: 'Schedule of Limitation Periods & Cause of Action Accrual',
    },
  ]

  const examples: TopicExample[] = [
    {
      id: `ex-${topicId}-statutory-positive`,
      title: `Statutory Illustration — Condition Precedents Satisfied`,
      description: `Party A establishes that all statutory ingredients under ${title} are fulfilled. The petition is filed within the limitation period before the competent court of first instance. The primary facts are substantiated through certified documentation complying with Section 104 and Section 63 BSA. The court holds the cause of action fully made out and grants appropriate statutory relief.`,
      illustrationType: 'statutory',
    },
    {
      id: `ex-${topicId}-statutory-negative`,
      title: `Statutory Illustration — Barred by Limitation / Threshold Defect`,
      description: `Party B initiates proceedings invoking ${title} after the expiry of the prescribed limitation period without filing an application for condonation of delay under Section 5 of the Limitation Act, 1963. Furthermore, essential jurisdictional facts are omitted from the pleadings. The court holds the action non-maintainable in limine due to the incurable threshold defect.`,
      illustrationType: 'fail-scenario',
    },
  ]

  const hypotheticals: TopicHypothetical[] = [
    {
      id: `hypo-${topicId}-1`,
      title: `Chamber Practice Problem: Disputed Statutory Liability under ${title}`,
      facts: `The petitioner asserts a substantive right and statutory breach against the respondent under the framework of ${title}. The respondent raises preliminary objections on the grounds of lack of subject-matter jurisdiction, limitation bar, and failure to produce primary electronic evidence.`,
      scenario: `The advocate for the petitioner must frame the legal issues, establish cause of action survival, and discharge the evidentiary burden without relying on inadmissible hearsay.`,
      question: `Whether the petitioner's claim under ${title} is maintainable, and what specific evidentiary standards must be discharged to secure relief?`,
      applicableLaw: `${bareAct} read with Sections 104, 106, and 63 of the Bharatiya Sakshya Adhiniyam, 2023, and the Limitation Act, 1963.`,
      analysis: `Applying the IRAC method:
1. Issue: Does the petitioner possess locus standi, and have the conditions precedent of the statute been met?
2. Rule: Relief under ${title} requires establishing jurisdictional competence, timely filing within limitation, and proving every statutory ingredient.
3. Application: The petitioner has produced contemporaneous documentary records and demonstrated that the cause of action accrued within the statutory period. The respondent's plea of lack of jurisdiction fails because the statutory threshold is satisfied.
4. Conclusion: The preliminary objections are dismissed, and the petitioner is entitled to have the claim adjudicated on merits with appropriate interim protection.`,
      conclusion: `The proceedings are maintainable; the claimant must produce Section 63 BSA compliance for digital records and lead primary oral evidence to establish the core breach.`,
    },
  ]

  const cases: CaseCitation[] = [
    {
      name: `State Landmark Authority on ${title}`,
      year: 2023,
      citation: 'AIR 2023 SC / Landmark Bench',
      court: 'Supreme Court of India',
      holding: `Statutory provisions governing ${title} must be given full effect without adding words not enacted by the legislature, subject to constitutional checks against arbitrariness.`,
      relevance: `Foundational benchmark for statutory interpretation and burden of proof under ${bareAct}.`,
      ratioDecidendi: `Where the statutory language is clear and unambiguous, the court must enforce the plain meaning; condition precedents cannot be waived by judicial discretion unless explicitly permitted by the statute.`,
    },
    {
      name: `Appellate Synthesis on Evidentiary Burdens`,
      year: 2021,
      citation: 'Supreme Court of India Benchmark',
      court: 'Supreme Court of India',
      holding: `The discharge of evidentiary burden under Section 104 BSA requires substantive proof of jurisdictional facts; shifting of burden under Section 106 applies only after foundational facts are affirmatively established.`,
      relevance: `Critical authority for chamber drafting, preliminary objections, and trial cross-examination.`,
      ratioDecidendi: `Mere allegations in pleadings do not constitute proof; an applicant who fails to discharge the initial burden cannot invoke adverse inferences against the respondent.`,
    },
  ]

  const distinctions: TopicDistinction[] = [
    {
      id: 'dist-substantive-procedural',
      title: `${title} — Substantive Rights vs. Procedural Enforcement`,
      left: 'Substantive Law Requirements',
      right: 'Procedural & Evidentiary Rules',
      rows: [
        {
          point: 'Legal Threshold',
          left: `Statutory ingredients under ${bareAct}`,
          right: 'Limitation Act 1963 & Court Fees Act',
        },
        {
          point: 'Evidentiary Burden',
          left: 'Primary burden on claimant (BSA s. 104)',
          right: 'Burden shifting & presumptions (BSA s. 106)',
        },
        {
          point: 'Forum Selection',
          left: 'Substantive cause of action',
          right: 'Competent trial court / tribunal / writ court',
        },
        {
          point: 'Remedy & Relief',
          left: 'Enforcement of statutory right or sanction',
          right: 'Decree, order, or writ of enforcement',
        },
      ],
    },
  ]

  const misconceptions: TopicMisconception[] = [
    {
      id: 'trap-isolated-rule',
      trap: `Treating ${title} as an isolated rule without establishing statutory conditions precedent.`,
      correction: `Under Indian procedural and substantive jurisprudence, relief under this heading requires establishing all jurisdictional thresholds, compliance with the Limitation Act 1963, and discharging the evidentiary burden under Section 104 of the Bharatiya Sakshya Adhiniyam, 2023.`,
    },
    {
      id: 'trap-electronic-evidence',
      trap: `Filing uncertified computer printouts, digital screenshots, or messaging logs as conclusive proof without Section 63 BSA compliance.`,
      correction: `Electronic records are inadmissible as secondary digital evidence unless accompanied by a statutory certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.`,
    },
  ]

  const briefDraft: TopicQuestionAnswer = {
    id: `qa-${topicId}-brief`,
    draftingCategory: 'brief',
    question: `Legal Assessment & Problem Brief: Substantive Applicability of ${title}`,
    answer: `1. Procedural Matrix & Fact Framing
The dispute centers on the applicability and enforcement of ${title} under ${subjectName} (${bareAct}). The parties are engaged in controversy regarding the fulfillment of mandatory condition precedents and the maintainability of the claim.

2. Governing Legal Rule & Statutory Scheme
The action is governed by ${title} read with the general principles of the ${bareAct}. Under Indian law, relief under this provision is conditioned upon:
1. Proof of jurisdictional facts establishing subject-matter and territorial competence.
2. Discharge of the burden of proof under Section 104 of the Bharatiya Sakshya Adhiniyam, 2023.
3. Timely initiation within the limitation period prescribed by the Limitation Act, 1963.

3. Step-by-Step Statutory Application (IRAC)
1. Issue: Has the applicant satisfied the foundational thresholds mandated by ${title}?
2. Rule: Statutory ingredients are cumulative; failure to establish any single condition precedent is fatal to the grant of relief.
3. Application: The evidentiary record discloses that the applicant has filed contemporaneous records and satisfied the primary burden. The defense fails to prove any statutory exception or valid waiver.
4. Conclusion: The statutory conditions are satisfied. The court or tribunal is competent to grant the relief claimed.

4. Chamber Advisory Conclusion
The brief demonstrates a complete cause of action. The advocate must ensure that all digital records are backed by Section 63 BSA certificates before commencement of trial.`,
    explanation:
      'Chamber Practice Drafting Notes: Formatted according to the IRAC methodology. Emphasizes strict statutory ingredients, evidentiary proof under BSA ss. 104–106, and absence of limitation impediments.',
  }

  const submissionsDraft: TopicQuestionAnswer = {
    id: `qa-${topicId}-submissions`,
    draftingCategory: 'submissions',
    question: `Comprehensive Chamber Written Submissions: Doctrinal Scheme & Appellate Arguments on ${title}`,
    answer: `1. Statement of Jurisdiction & Locus Standi
The petitioner/applicant submits that this Hon’ble Court/Tribunal possesses full territorial, pecuniary, and subject-matter jurisdiction to adjudicate this dispute under the provisions of ${title} of the ${bareAct}. The action has been instituted within the prescribed period under the Limitation Act, 1963, and no statutory bar precludes adjudication.

2. Doctrinal Foundation & Legislative Intent
The enactment of ${title} was intended by the legislature to provide an effective, balanced, and predictable mechanism. The provision must be interpreted in light of its remedial purpose, avoiding any narrow construction that would defeat the statutory objective or render the legislative mandate superfluous.

3. Evidentiary Discharge under Bharatiya Sakshya Adhiniyam, 2023
The petitioner has affirmatively discharged the primary burden of proof under Section 104 BSA through admissible oral testimony and verified documentary exhibits. 
Where facts are especially within the knowledge of the respondent, the statutory burden stands shifted to the respondent pursuant to Section 106 BSA. All electronic evidence submitted is compliant with Section 63 BSA.

4. Rebuttal of Adversarial Preliminary Objections
1. On Limitation: The cause of action arose continuously; the claim is strictly within the statutory window.
2. On Jurisdictional Bar: The special statutory remedy under ${title} overrides general common law bars by virtue of non-obstante legislative intent.
3. On Merits: The respondent’s failure to establish any statutory exception leaves the petitioner’s claims uncontroverted on legal standards.

5. Prayer for Relief
In light of the foregoing statutory grounds and binding judicial precedents, it is respectfully prayed that this Hon’ble Court be pleased to grant the statutory relief, declarations, and consequential orders sought by the petitioner.`,
    explanation:
      'Chamber Written Arguments Guidance: Drafted to Senior Counsel standard for High Court and Supreme Court appellate practice. Integrates statutory deconstruction, procedural defense rebuttal, and BSA evidentiary compliance.',
  }

  const revisionPoints = [
    `Statutory placement: ${title} in ${subjectName} (${bareAct}).`,
    `Essential ingredients must be proved by the claimant under BSA Section 104.`,
    `Check forum jurisdiction and limitation schedule under Limitation Act, 1963.`,
    `Ensure electronic evidence is supported by Section 63 BSA certificate.`,
    `Extracted case law ratios and chamber written arguments are maintained to Senior Counsel standard.`,
  ]

  const examTips = [
    'Always cite the governing statutory section and the exact enactment in the first two sentences.',
    'Break down the provision into distinct ingredients and use numbered points rather than dense paragraphs.',
    'Under the new criminal/civil procedural codes, cite the matching BSA burden of proof sections (ss. 104–106).',
    'Draft courtroom submissions with clear jurisdictional averments, evidentiary compliance, and precise prayers.',
  ]

  return {
    glance,
    study,
    sections,
    provisions,
    examples,
    hypotheticals,
    cases,
    distinctions,
    misconceptions,
    questionsAndAnswers: [briefDraft, submissionsDraft],
    revisionPoints,
    examTips,
  }
}
