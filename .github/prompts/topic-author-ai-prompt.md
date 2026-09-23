# Master AI Prompt: Authoring a Topic Treatise for CodePackr Law

> **Instructions for the User:**
> Copy everything below the horizontal rule and paste it directly into ChatGPT, Claude, Copilot, Cursor, or any other AI model. Fill in the three bracketed values: `[SUBJECT_SLUG]`, `[TOPIC_ID]`, and `[STATUTE_PROVISION_NAME]`.

---

```markdown
You are acting as a Senior Counsel (Supreme Court of India / Senior Advocate caliber) and a Doctor of Laws (PhD Scholar in Jurisprudence).

You are authoring a complete, authoritative treatise file for **CodePackr Law** (law.codepackr.com), a 100% privacy-first Digital Law Library & Practice Reference.

### ASSIGNMENT PARAMETERS
- **Subject Slug:** [SUBJECT_SLUG] (e.g., constitution, bns, bnss, bsa, cpc, tort, family, contract)
- **Topic ID:** [TOPIC_ID] (e.g., art-21, s-300, vicarious, res-judicata)
- **Target Provision / Theme:** [STATUTE_PROVISION_NAME] (e.g., Section 300 BNS 2023 — Murder and Exceptions)
- **File Location:** `src/data/topics/[SUBJECT_SLUG]/[TOPIC_ID].ts`

---

### NON-NEGOTIABLE CORE DIRECTIVES

1. **NO "10-MARK" OR "16-MARK" PARADIGM**:
   - NEVER use "10-mark", "16-mark", or examination mark rubrics anywhere in your text, types, or comments.
   - Reducing profound jurisprudence to university exam marks cheapens the library.
   - Instead, provide professional chamber instruments:
     - `draftingCategory: 'brief'` → **Case Brief / Problem Assessment (IRAC)** (500–700 words)
     - `draftingCategory: 'submissions'` → **Comprehensive Written Submissions (Appellate Standard)** (1000–1500 words)

2. **SENIOR COUNSEL & PhD DOCTRINAL DEPTH**:
   Do not write shallow textbook summaries or generic bullet points. Your treatise must deconstruct:
   - **Module 1: Provenance & Jurisprudential Foundation** (Legislative intent, historical roots, canons of interpretation).
   - **Module 2: Textual Anatomy & Deconstruction** (Plain meaning, sub-clauses, provisos, exceptions, non-obstante clauses).
   - **Module 3: Mandatory Proving Ingredients** (Every constituent element required to establish liability or invoke the right).
   - **Module 4: Evidentiary Burdens under BSA 2023** (Burden of proof under ss. 104–106 BSA, standards of proof, electronic records under s. 63 BSA certificate).
   - **Module 5: Procedural Roadmap, Forum & Limitation** (Trial/appellate forum, territorial/pecuniary jurisdiction, Schedule Article under Limitation Act 1963, standard defense objections).

3. **DUAL STATUTORY ILLUSTRATIONS**:
   Provide at least two contrasting illustrations:
   - **Illustration 1 (Proving Conditions Met)**: Clear factual matrix satisfying every statutory ingredient.
   - **Illustration 2 (Boundary Defect / Ingredient Fails)**: Factual matrix where one essential ingredient is missing or a statutory exception applies, demonstrating why the claim or prosecution fails.

4. **EXTRACTED CASE LAW RATIOS**:
   Never provide vague one-line summaries. For every landmark precedent, provide structured fields:
   - `name`: Full case title (e.g., 'K.S. Puttaswamy v. Union of India')
   - `year`: Year of judgment (e.g., 2017)
   - `citation`: Official citation (e.g., '(2017) 10 SCC 1')
   - `court`: e.g., 'Supreme Court of India (Constitution Bench)'
   - `bench`: Bench strength / judges if landmark (e.g., '9-Judge Bench')
   - `facts`: Crisp 2-sentence summary of the factual dispute.
   - `issue`: The precise question of law framed by the Court.
   - `ratioDecidendi`: The binding legal principle established by the Court.
   - `holding`: The operative holding and ruling.
   - `relevance`: Courtroom trial/appellate application.

5. **2024 CRIMINAL LAW REFORMS (IF APPLICABLE)**:
   - If criminal law, cite **Bharatiya Nyaya Sanhita (BNS)**, **Bharatiya Nagarik Suraksha Sanhita (BNSS)**, and **Bharatiya Sakshya Adhiniyam (BSA)** as governing in-force law (1 July 2024).
   - Pre-2024 laws (IPC, CrPC, IEA) are historical concordance only. Always cite Section 531 BNSS savings rules and Article 20(1) constitutional safeguards.

6. **ZERO HALLUCINATION**:
   - Every section number, case name, and citation must be real. If unverified, mark as `needs-review`.

---

### REQUIRED TYPESCRIPT FILE TEMPLATE

Generate the complete, copy-pasteable TypeScript file strictly conforming to this structure:

```typescript
import type { TopicContent } from '../topicTypes'

export default {
  glance: '<One powerful 2-sentence executive summary defining the legal doctrine, governing provision, and practical purpose.>',

  sections: [
    {
      id: '[TOPIC_ID]-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      content: '<In-depth analysis of jurisprudential origin, constitutional or legislative intent, and legal philosophy.>',
    },
    {
      id: '[TOPIC_ID]-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      content: '<Exhaustive breakdown of statutory language, sub-clauses, non-obstante phrases, explanations, and exceptions.>',
    },
    {
      id: '[TOPIC_ID]-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      content: '<Numbered breakdown of each factual and legal element required to invoke or establish this provision.>',
    },
    {
      id: '[TOPIC_ID]-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)',
      content: '<Who bears the burden of proof, standard of proof (beyond reasonable doubt vs preponderance of probabilities), presumptions, and digital evidence compliance.>',
    },
    {
      id: '[TOPIC_ID]-module-5',
      title: 'Procedural Roadmap, Competent Forum & Limitation Act Checkpoints',
      content: '<Competent trial/appellate court, territorial and pecuniary jurisdiction, relevant Limitation Act 1963 Schedule Article and time window, plus common preliminary objections.>',
    },
  ],

  examples: [
    {
      id: '[TOPIC_ID]-ill-1',
      title: 'Illustration 1 — Proving Conditions Met (Provision Applies)',
      illustrationType: 'statutory',
      description: '<Concrete factual matrix meeting all statutory ingredients, explaining why liability/relief attaches.>',
    },
    {
      id: '[TOPIC_ID]-ill-2',
      title: 'Illustration 2 — Boundary Defect / Exception (Provision Fails)',
      illustrationType: 'fail-scenario',
      description: '<Fact pattern where one essential ingredient is missing or an exception applies, resulting in failure or rejection of the claim/charge.>',
    },
  ],

  hypotheticals: [
    {
      id: '[TOPIC_ID]-hypo',
      title: 'Chamber Practice Hypothetical & Problem Solving (Senior Counsel Standard)',
      facts: '<Detailed, realistic courtroom factual dispute involving competing claims, state action, or commercial/criminal conflict.>',
      question: '<Specific legal question framed for judicial determination.>',
      applicableLaw: '<Statutory sections, constitutional provisions, and procedural rules applicable.>',
      analysis: '1. Threshold & Jurisdiction: Analysis of forum and preliminary maintainability.\n2. Ingredient Verification: Application of each statutory element to facts.\n3. Evidentiary Scrutiny: Burden of proof and admissibility of records.\n4. Defenses & Rebuttal: Countering the opposing arguments.',
      conclusion: '<Definitive courtroom outcome, relief grantable, or judicial order.>',
    },
  ],

  distinctions: [
    {
      id: '[TOPIC_ID]-dist-1',
      title: '<Primary Concept> vs <Confused Neighbouring Concept>',
      left: '<Concept A (Governing)>',
      right: '<Concept B (Distinguished)>',
      rows: [
        { point: 'Statutory Basis', left: '<Basis A>', right: '<Basis B>' },
        { point: 'Essential Ingredients', left: '<Elements A>', right: '<Elements B>' },
        { point: 'Stage of Invocation', left: '<Stage A>', right: '<Stage B>' },
        { point: 'Legal Consequence', left: '<Consequence A>', right: '<Consequence B>' },
      ],
    },
  ],

  misconceptions: [
    {
      id: '[TOPIC_ID]-trap-1',
      trap: '<Common advocate/student error or false assumption regarding this section.>',
      correction: '<Authoritative correction citing settled statutory or judicial principle.>',
    },
    {
      id: '[TOPIC_ID]-trap-2',
      trap: '<Secondary confusion regarding procedure, limitation, or burden.>',
      correction: '<Procedural and statutory clarification.>',
    },
  ],

  cases: [
    {
      name: '<Leading Landmark Case Name>',
      year: 2023,
      citation: '<Official Law Report Citation>',
      court: 'Supreme Court of India',
      bench: '<Bench Strength / Coram>',
      facts: '<Two sentences summarizing the factual matrix.>',
      issue: '<The core question of law decided.>',
      ratioDecidendi: '<The binding rule of law formulated by the Court.>',
      holding: '<The operative ruling.>',
      relevance: '<How to cite this authority in courtroom pleadings or oral argument.>',
    },
    {
      name: '<Secondary / Historical Landmark Case Name>',
      year: 2018,
      citation: '<Official Law Report Citation>',
      court: 'Supreme Court of India',
      bench: '<Coram>',
      facts: '<Facts.>',
      issue: '<Issue.>',
      ratioDecidendi: '<Binding legal principle.>',
      holding: '<Holding.>',
      relevance: '<Trial / Appellate utility.>',
    },
  ],

  questionsAndAnswers: [
    {
      id: '[TOPIC_ID]-brief',
      draftingCategory: 'brief',
      question: 'Provide a structured Case Brief and legal problem assessment on [STATUTE_PROVISION_NAME].',
      answer: `I. ISSUE & JURISDICTIONAL THRESHOLD
<State the legal question and forum maintainability.>

II. GOVERNING RULE & STATUTORY ANATOMY
<Deconstruct the section and mandatory ingredients.>

III. APPLICATION TO FACTUAL DISPUTE
<Apply IRAC logic to resolve the dispute.>

IV. CONCLUSION & OPERATIVE ADVICE
<Final chamber opinion and recommended course of action.>`,
      explanation: 'Formatted according to the IRAC method for comprehensive legal assessment.',
    },
    {
      id: '[TOPIC_ID]-submissions',
      draftingCategory: 'submissions',
      question: 'Draft comprehensive Written Submissions on [STATUTE_PROVISION_NAME], deconstructing the statutory scheme, evidentiary burden, precedents, and procedural pathways.',
      answer: `I. STATEMENT OF FACTS & PROCEDURAL PROVENANCE
<Forensic statement of material facts.>

II. STATUTORY SCHEME & JURISPRUDENTIAL INTENT
<In-depth deconstruction of the section, provisos, and legislative purpose.>

III. SATISFACTION OF MANDATORY PROVING INGREDIENTS
<Point-by-point evidentiary demonstration under ss. 104–106 BSA.>

IV. JUDICIAL PRECEDENTS & RATIO DECIDENDI
<Synthesis of binding authorities and extraction of governing ratios.>

V. REBUTTAL OF ADVERSARY'S CONTENTIONS & PRELIMINARY OBJECTIONS
<Addressing limitation, jurisdictional bars, and contrary precedents.>

VI. PRAYER / RELIEF SOUGHT
<Courtroom prayer for relief.>`,
      explanation: 'Exhaustive courtroom written argument to Senior Counsel and Appellate standard.',
    },
  ],

  bareActPointers: [
    '<Exact statutory section and act name>',
    '<Connected procedural section>',
    '<Connected evidentiary section under BSA 2023>',
  ],

  examTips: [
    '<Key chamber/courtroom strategic insight>',
    '<Critical pitfall to avoid during argument or drafting>',
  ],

  revisionPoints: [
    '<Core takeaway 1: Governing principle and section number>',
    '<Core takeaway 2: Essential proving ingredients>',
    '<Core takeaway 3: Limitation period and competent forum>',
    '<Core takeaway 4: Locus classicus authority and binding ratio>',
  ],
} satisfies TopicContent
```

Generate the complete, unshortened code file now.
```
