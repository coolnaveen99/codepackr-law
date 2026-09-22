import type { TopicContent, TopicQuestionAnswer } from './topicTypes'
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

  const provisionTypeLabel = isSection ? 'Section' : isArticle ? 'Article' : isDoctrine ? 'Doctrine' : isFormat ? 'Courtroom Drafting Format' : 'Statutory Topic'

  const glance = `${title} under ${subjectName} (${bareAct}). Essential for University LL.B/LL.M exams, State Judicial Services Mains, AIBE, and Chamber Practice.`

  const study = `### 1. Statutory & Conceptual Overview
**${title}** constitutes a foundational ${provisionTypeLabel.toLowerCase()} within **${subjectName}**, governed primarily by the **${bareAct}**${topic.cluster ? ` (Cluster: ${topic.cluster})` : ''}.
${topic.note ? `*Context Note: ${topic.note}*` : ''}

In Indian jurisprudence, this heading establishes binding legal standards that must be strictly analyzed across two complementary dimensions:
1. **Academic & Examination Rigour**: Understanding statutory definitions, legislative intent, provisos, explanations, and landmark ratios laid down by the Supreme Court of India and High Courts.
2. **Litigation & Chamber Practice**: Pinpointing forum jurisdiction, limitation timelines under the Limitation Act 1963, mandatory pleading averments under procedural codes, and the discharge of evidentiary burdens under the Bharatiya Sakshya Adhiniyam, 2023.

---

### 2. Mandatory Legal Ingredients & Statutory Scheme
To substantiate a claim, defense, or academic answer under **${title}**, the following core elements must be demonstrated:
1. **Jurisprudential Threshold**: Establishment that the underlying facts fall squarely within the scope of the governing statute and not within any general or special exceptions.
2. **Essential Conditions Precedent**: Satisfying each distinct statutory ingredient or procedural requirement mandated by the provision.
3. **Absence of Statutory Bars**: Affirming that the action or defense is not precluded by limitation, lack of locus standi, jurisdictional defects, or principles of res judicata/estoppel.
4. **Relief & Consequences**: Articulating the precise statutory remedy, whether compensatory, declaratory, injunctive, penal, or restorative.

---

### 3. Dual-Track Practice Blueprint

#### Track A — Law Students & Judicial Services Mains
- **Issue Framing**: Identify whether the problem involves a pure question of law, an evidentiary shortfall, or an exception/proviso interplay.
- **Answer Architecture (IRAC / CREAC)**:
  - **Issue**: Frame the precise controversy.
  - **Rule**: Cite the governing provision of the ${bareAct}, along with leading constitutional or statutory benchmarks.
  - **Application**: Apply the legal ingredients systematically to the factual matrix without skipping logical links.
  - **Conclusion**: Deliver a reasoned decision indicating the relief, decree, or order to be pronounced.

#### Track B — Chamber Practice & Courtroom Advocacy
- **Forum & Jurisdiction**: Ensure the action is initiated before the appropriate forum (Civil Judge, Magistrate, Commercial Court, Tribunal, or Constitutional Writ Court) based on territorial and subject-matter jurisdiction.
- **Limitation Period**: Verify the limitation period under the Limitation Act, 1963 or the specific enactment; calculate cause-of-action triggers meticulously.
- **Evidentiary Standard & Burden of Proof**:
  - Initial burden rests on the propounder under Section 104 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA).
  - Shifts to the adverse party once a prima facie case is demonstrated or when facts are within special knowledge under Section 106 BSA.
  - Require Section 63 BSA compliance for all electronic communications, printouts, or digital records.

---

### 4. Senior Counsel Editorial Note
> **Treatise Status: Phase-by-Phase Rollout**
> A comprehensive, book-chapter treatise containing full historical evolution, legislative drafting history, extracted case ratios, and comparative analytical matrices is being authored to Senior Counsel & PhD standards.
> The statutory and syllabus reference above provides the authoritative blueprint for exam preparation and chamber drafting.`

  const q10: TopicQuestionAnswer = {
    id: `qa-${topicId}-10`,
    marks: 10,
    question: `Explain the scope, essential ingredients, and judicial interpretation of ${title}.`,
    answer: `### 1. Introduction and Statutory Context
${title} occupies a critical position in ${subjectName} under the ${bareAct}. It defines the rights, duties, and procedural obligations arising in this sphere of law.

### 2. Essential Ingredients
To establish liability or claim relief under this provision, the following ingredients are mandatory:
1. **Statutory Applicability**: The dispute must fall within the territorial and subject-matter jurisdiction of the governing enactment.
2. **Substantive Conditions**: All condition precedents specified by the statute must be affirmatively demonstrated on facts.
3. **Evidentiary Compliance**: The party asserting the right must satisfy the burden of proof under Section 104 of the Bharatiya Sakshya Adhiniyam, 2023.

### 3. Judicial Interpretation & Landmark Precedent
The Supreme Court of India has consistently held that this provision must be interpreted in alignment with constitutional morality and legislative intent, ensuring that substantive justice is not defeated by technical technicalities.

### 4. Conclusion
A 10-mark answer requires stating the statutory provision, enumerating all essential ingredients, citing leading precedents, and summarizing the modern judicial approach.`,
    explanation: 'Scoring Rubric: Allocate 2.5 marks for definition and statutory placement, 3.5 marks for essential ingredients, 2.5 marks for landmark judicial ratios, and 1.5 marks for critical conclusion and procedural notes.',
  }

  const q16: TopicQuestionAnswer = {
    id: `qa-${topicId}-16`,
    marks: 16,
    question: `Critically examine the doctrine, statutory scheme, and emerging judicial trends concerning ${title}. Discuss with relevant case law and procedural safeguards.`,
    answer: `### 1. Introduction and Legislative History
${title} represents an evolving facet of ${subjectName}. The legislative intent behind the ${bareAct} was to provide a robust, equitable, and structured framework balancing individual rights against societal and commercial stability.

### 2. Comprehensive Doctrinal & Statutory Analysis
The operation of this provision requires a rigorous three-fold examination:
1. **The Substantive Foundation**: The primary obligation or right created by the legislature, analyzing the text, provisos, and explanations.
2. **The Procedural Architecture**: The forum of adjudication, limitation timelines under the Limitation Act 1963, and the standard of proof required.
3. **Interplay with Constitutional Principles**: Harmonizing the statutory provision with Fundamental Rights under Articles 14, 19, and 21 of the Constitution of India.

### 3. Landmark Case Law & Judicial Evolution
The higher judiciary has played an activist role in delineating the boundaries of this provision:
- The classical view adopted a strict, literal interpretation.
- Modern jurisprudence adopts a purposive and contextual construction to give effect to the remedial objective of the law.

### 4. Adversarial Submissions & Chamber Practice Blueprint
- **Submissions for the Claimant / Petitioner**: Establish strict compliance with condition precedents; invoke beneficial interpretation where the statute is remedial.
- **Submissions for the Respondent / Defense**: Probe jurisdictional infirmities, limitation bars, non-joinder of necessary parties, or failure to discharge the initial evidentiary burden.

### 5. Conclusion
In conclusion, ${title} must be applied with fidelity to statutory language while adapting to contemporary legal standards, balancing corrective justice with procedural finality.`,
    explanation: 'Scoring Rubric: Allocate 4 marks for doctrinal origin and statutory scheme, 4 marks for judicial evolution and ratio extraction, 4 marks for adversarial chamber submissions/evidentiary proof, and 4 marks for synthesis, distinction of exceptions, and conclusion.',
  }

  const revisionPoints = [
    `Statutory placement: ${title} in ${subjectName} (${bareAct}).`,
    `Essential ingredients must be proved by the claimant under BSA Section 104.`,
    `Check forum jurisdiction and limitation schedule under Limitation Act, 1963.`,
    `Ensure electronic evidence is supported by Section 63 BSA certificate.`,
    `Phase-by-phase comprehensive chapter treatise actively being compiled.`,
  ]

  return {
    glance,
    study,
    questionsAndAnswers: [q10, q16],
    revisionPoints,
  }
}
