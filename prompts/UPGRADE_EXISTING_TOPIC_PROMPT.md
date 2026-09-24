# CodePackr Law — Master AI Prompt: Upgrade & Overwrite Existing Topic

> **When to use this prompt:**
> Use this prompt when you have an **existing topic file** that was previously created, and you want an AI to review its contents, retain valid legal points, and completely upgrade/overwrite it to the latest **Senior Counsel & PhD Standard** (with 5 modules, extracted case ratios, dual statutory illustrations, IRAC case brief, and comprehensive written submissions, with zero 10/16-mark references).

---

```markdown
You are acting as a Senior Counsel (Supreme Court of India / Senior Advocate caliber) and a Doctor of Laws (PhD Scholar in Jurisprudence).

You are auditing, expanding, and completely upgrading an existing legal topic file for **CodePackr Law** (law.codepackr.com), a 100% privacy-first Digital Law Library & Practice Reference.

### YOUR AUDIT & UPGRADE MISSION
1. **Preserve Valid Core Data**: Retain all genuine statutory sections, accurate case names, and valid doctrinal facts from the existing file.
2. **Purge the 10/16-Mark Paradigm**: Completely remove all references to "10-mark", "16-mark", or university exam marks from texts, questions, and comments.
3. **Upgrade to 5 Doctrinal Modules**: Expand shallow bullet points into deep statutory deconstruction (Provenance, Textual Anatomy, Mandatory Ingredients, BSA 2023 Evidentiary Burdens, Procedural/Limitation Roadmaps).
4. **Elevate Case Citations to Extracted Ratios**: Convert raw case citations into full forensic matrices (`court`, `bench`, `facts`, `issue`, `ratioDecidendi`, `relevance`).
5. **Add Dual Contrasting Illustrations**: Ensure there is both an Illustration that works (proving conditions met) and an Illustration that fails (boundary defect / missing ingredient).
6. **Elevate Q&A to Courtroom Drafting**:
   - `draftingCategory: 'brief'` → **Case Brief / Problem Assessment (IRAC)** (500–700 words)
   - `draftingCategory: 'submissions'` → **Comprehensive Written Submissions (Appellate Standard)** (1000–1500 words)
7. **Output Drop-in Replacement**: Return the complete, unshortened TypeScript code ready to directly overwrite the target file.

---

### TARGET FILE METADATA
- Target File Path: [EXISTING_FILE_PATH] (e.g., `src/data/topics/tort/vicarious.ts`)
- Subject Slug: [SUBJECT_SLUG] (e.g., `tort`, `constitution`, `cpc`, `bns`, `bnss`, `bsa`)
- Topic ID: [TOPIC_ID] (e.g., `vicarious`, `art-21`, `s-300`)

---

### EXISTING FILE CONTENT TO AUDIT & UPGRADE
Paste the entire existing file content below:
```typescript
[PASTE EXISTING FILE CONTENT HERE]
```

---

### REQUIRED UPGRADED OUTPUT SCHEMA

Return the complete, upgraded TypeScript code file conforming to `TopicContent`:

```typescript
import type { TopicContent } from '../topicTypes'

export default {
  glance: '<Refined 2-sentence executive summary defining the legal doctrine, governing provision, and practical purpose.>',

  sections: [
    {
      id: '[TOPIC_ID]-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      content: '<Deep jurisprudential roots, legislative purpose, and historical development.>',
    },
    {
      id: '[TOPIC_ID]-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      content: '<Exhaustive textual breakdown of sub-clauses, provisos, non-obstante clauses, and explanations.>',
    },
    {
      id: '[TOPIC_ID]-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      content: '<Numbered breakdown of every essential ingredient required to establish the wrong or claim.>',
    },
    {
      id: '[TOPIC_ID]-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)',
      content: '<Burden and standard of proof under BSA 2023, presumptions, and digital evidence certificate requirements.>',
    },
    {
      id: '[TOPIC_ID]-module-5',
      title: 'Procedural Roadmap, Competent Forum & Limitation Act Checkpoints',
      content: '<Trial/appellate forum, territorial/pecuniary jurisdiction, Limitation Act 1963 schedule article & window, common preliminary objections.>',
    },
  ],

  examples: [
    {
      id: '[TOPIC_ID]-ill-1',
      title: 'Illustration 1 — Proving Conditions Met (Provision Applies)',
      illustrationType: 'statutory',
      description: '<Concrete factual matrix satisfying all mandatory ingredients.>',
    },
    {
      id: '[TOPIC_ID]-ill-2',
      title: 'Illustration 2 — Boundary Defect / Exception (Provision Fails)',
      illustrationType: 'fail-scenario',
      description: '<Fact pattern where one essential element is missing or an exception applies, causing the action to fail.>',
    },
  ],

  hypotheticals: [
    {
      id: '[TOPIC_ID]-hypo',
      title: 'Chamber Practice Hypothetical & Problem Solving (Senior Counsel Standard)',
      facts: '<Detailed, realistic courtroom factual dispute.>',
      question: '<Specific legal issue framed for determination.>',
      applicableLaw: '<Statutes and doctrines applicable.>',
      analysis: '1. Forum & Threshold: Maintainability analysis.\n2. Element Matching: Fact-to-law verification.\n3. Evidentiary Scrutiny: Burden of proof.\n4. Defenses & Counter-Arguments: Addressing rebuttal.',
      conclusion: '<Definitive courtroom ruling or chamber opinion.>',
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
  ],

  cases: [
    {
      name: '<Preserved / Upgraded Landmark Case Name>',
      year: 2023,
      citation: '<Official Law Report Citation>',
      court: 'Supreme Court of India',
      bench: '<Bench Strength / Coram>',
      facts: '<Two sentences summarizing the factual matrix.>',
      issue: '<The core question of law decided.>',
      ratioDecidendi: '<The binding rule of law formulated by the Court.>',
      holding: '<The operative ruling.>',
      relevance: '<Courtroom trial/appellate application.>',
    },
  ],

  questionsAndAnswers: [
    {
      id: '[TOPIC_ID]-brief',
      draftingCategory: 'brief',
      question: 'Provide a structured Case Brief and legal problem assessment on [TOPIC_NAME].',
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
      question: 'Draft comprehensive Written Submissions on [TOPIC_NAME], deconstructing the statutory scheme, evidentiary burden, precedents, and procedural pathways.',
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

Generate the complete, upgraded, unshortened code file now.
```
