# CodePackr Law — Master Instruction Listener & Dispatcher (`DISPATCHER.md`)

> **THE LISTENER ARCHITECTURE:**  
> This file functions as the **Central Listener and Event Router** for CodePackr Law.  
> Just like an event listener in software, you can give your AI assistant a single-line command:
>
> 💬 **`"add topics in BSA. follow prompts/DISPATCHER.md"`**  
> or  
> 💬 **`"add topic in Labour: Section 25F. follow prompts/DISPATCHER.md"`**  
> or  
> 💬 **`"update Article 21 in Constitution. follow prompts/DISPATCHER.md"`**
>
> **The Listener intercepts this command and performs 4 automatic redirections:**
> 1. **Subject Redirection**: Detects the subject (`BSA`, `Labour`, `Constitution`, etc.) and directs to the correct governing statute and directory (`src/data/topics/<subject>/`).
> 2. **Topic / Section Redirection**: If a specific section is given, it targets it. If only a subject is given (e.g., `"add topics in BSA"`), the listener consults the **Priority Queue** below and automatically selects the highest-yield missing provision!
> 3. **Schema Redirection**: Applies the Senior Counsel & PhD standard (5 Doctrinal Modules, dual statutory illustrations, extracted case ratios, IRAC Case Brief, Written Submissions, zero marks).
> 4. **Catalog Redirection**: Emits the exact entry for [`src/data/subjects.ts`](../src/data/subjects.ts).

---

## 🤖 INSTRUCTIONS FOR THE AI ASSISTANT (THE LISTENER ENGINE)

When the user gives a command and points you to this file:

### PHASE 1: LISTEN & PARSE INTENT
1. **Identify the Subject**: Determine which subject was called (BSA, BNS, BNSS, Constitution, CPC, Labour, Contract, Tort, Family).
2. **Identify Provision / Resolve from Priority Queue**:
   - **Scenario A (Specific Provision Named)**: User named a section/article (e.g., "Section 63", "Article 21", "Section 25F"). Use that provision.
   - **Scenario B (General Subject Request)**: User gave a general command like `"add topics in BSA"` or `"add more topics in Labour"`. **The Listener automatically selects the highest-priority provision** from the table in Phase 2!
3. **Determine the Operation Mode**:
   - If the file already exists in `src/data/topics/<subject>/<topicId>.ts` → **UPGRADE MODE** (preserve existing good citations, remove 10/16-mark phrasing, expand to 5 Senior Counsel modules).
   - If the file does not exist → **CREATION MODE** (formulate canonical `topicId`, generate catalog snippet, author full treatise).

---

### PHASE 2: SUBJECT ROUTING TABLE & PRIORITY QUEUE

The listener redirects according to this table. If no specific section was named, pick the first pending topic from the **High-Yield Priority Queue**:

| Subject Mentioned | Slug & Folder | High-Yield Priority Queue (If no section specified) | Governing Statutes & Legal Nuances |
| :--- | :--- | :--- | :--- |
| **BSA / Evidence** | `bsa`<br>`src/data/topics/bsa/` | **1. `s-63`** (Electronic Records Certificate)<br>**2. `s-24`** (Confessions to Police)<br>**3. `s-32`** (Dying Declarations & Statements)<br>**4. `s-104-106`** (Burdens of Proof)<br>**5. `s-116`** (Estoppel) | **Bharatiya Sakshya Adhiniyam, 2023** (in force 1 July 2024). IEA 1872 is historical concordance only. Anchor ss. 104–106 burden of proof, s. 63 electronic evidence certificate, s. 24 admissions. |
| **Labour / Industrial Law** | `labour`<br>`src/data/topics/labour/` | **1. `s-25f-retrenchment`** (Mandatory Retrenchment Conditions)<br>**2. `s-2s-workman`** (Workman Definition & Tests)<br>**3. `s-10-reference`** (Order of Reference)<br>**4. `s-17b-interim-relief`** (Wages Pending HC/SC Appeal)<br>**5. `s-33-change-of-service`** (Protection during Pendency) | **Industrial Disputes Act, 1947 & Industrial Relations Code, 2020**. Anchor s. 25F mandatory conditions precedent for retrenchment, s. 2(s) workman definition, Labour Court vs Industrial Tribunal jurisdiction, s. 10(1) reference. |
| **BNS / Penal Law** | `bns`<br>`src/data/topics/bns/` | **1. `s-103`** (Murder vs Culpable Homicide)<br>**2. `s-111`** (Organised Crime)<br>**3. `s-304`** (Snatching)<br>**4. `s-64`** (Rape & Consent)<br>**5. `s-3-5`** (Common Intention) | **Bharatiya Nyaya Sanhita, 2023** (in force 1 July 2024). IPC is historical concordance. Watch section shifts (s. 103 murder, s. 111 organised crime, s. 304 snatching, s. 309 robbery). |
| **BNSS / Criminal Procedure** | `bnss`<br>`src/data/topics/bnss/` | **1. `s-35`** (Arrest Procedure & Safeguards)<br>**2. `s-187`** (Police Remand & 15 vs 60/90 Days)<br>**3. `s-480-482`** (Bail & Anticipatory Bail)<br>**4. `s-531`** (Transitional Rules & Repeal Savings)<br>**5. `s-193`** (Cognizance & Police Report) | **Bharatiya Nagarik Suraksha Sanhita, 2023**. Always analyze **Section 531 BNSS** transitional rules (pending FIRs vs post-1 July 2024). Anchor arrest (s. 35), custody limits, bail (ss. 480/482), speedy trial. |
| **Constitution / Constitutional Law** | `constitution`<br>`src/data/topics/constitution/` | **1. `art-21`** (Life & Personal Liberty / Due Process)<br>**2. `art-14`** (Equality & Non-Arbitrariness)<br>**3. `art-32-226`** (Writs & Alternative Remedy Exceptions)<br>**4. `art-300a`** (Right to Property & Eminent Domain)<br>**5. `art-19`** (Six Freedoms & Proportionality) | **Constitution of India (through 106th Amendment, 2023)**. Anchor Art 32 (SC) vs Art 226 (HC) writs, *Whirlpool* alternative remedy exceptions, *Shayara Bano* manifest arbitrariness, *Puttaswamy* 4-prong proportionality. |
| **CPC / Civil Procedure** | `cpc`<br>`src/data/topics/cpc/` | **1. `s-11-res-judicata`** (Res Judicata & Constructive RJ)<br>**2. `order-39-injunctions`** (Temporary Injunctions & Triple Test)<br>**3. `order-7-rule-11`** (Rejection of Plaint)<br>**4. `s-9-jurisdiction`** (Courts to Try All Civil Suits)<br>**5. `order-21-execution`** (Execution of Decrees) | **Code of Civil Procedure, 1908**. Anchor Section (substantive power) vs Order/Rule (procedure), pecuniary & territorial jurisdiction, Limitation Act 1963 schedule articles. |
| **Contract / Commercial Law** | `contract`<br>`src/data/topics/contract/` | **1. `s-56-frustration`** (Subsequent Impossibility vs Difficulty)<br>**2. `s-73-damages`** (Hadley v. Baxendale Measure)<br>**3. `s-10-free-consent`** (Vitiating Factors ss. 13-19)<br>**4. `s-27-restraint-of-trade`** (Non-Compete Covenants)<br>**5. `s-74-liquidated-damages`** (Penalty vs Genuine Pre-Estimate) | **Indian Contract Act, 1872**. Anchor s. 10 free consent, s. 23 public policy, s. 56 frustration (subsequent impossibility vs commercial difficulty), s. 73 *Hadley v. Baxendale* damages. |
| **Torts / Civil Wrongs** | `tort`<br>`src/data/topics/tort/` | **1. `strict-absolute-liability`** (Rylands vs M.C. Mehta Rule)<br>**2. `negligence-duty-of-care`** (Donoghue v. Stevenson & Caparo)<br>**3. `vicarious-liability`** (Course of Employment & Sovereign Immunity)<br>**4. `nuisance`** (Public vs Private & Reasonable User)<br>**5. `defamation-tort`** (Libel, Slander & Qualified Privilege) | **Law of Torts**. Non-statutory common law + Consumer Protection Act 2019 / Motor Vehicles Act. Anchor strict vs absolute liability (*M.C. Mehta* deep-pocket rule), *Donoghue v. Stevenson* duty of care, vicarious liability (*Nilabati Behera* state compensation). |
| **Family / Personal Law** | `family`<br>`src/data/topics/family/` | **1. `divorce-mutual-consent`** (s. 13B HMA & 6-Month Cooling Period Waiver)<br>**2. `void-voidable-marriages`** (s. 11 vs s. 12 HMA)<br>**3. `maintenance-s125-bnss`** (s. 144 BNSS / s. 125 CrPC & Overriding Personal Law)<br>**4. `restitution-conjugal-rights`** (s. 9 HMA & Privacy Challenges)<br>**5. `succession-coparcenary`** (s. 6 HSA & Vineeta Sharma Rule) | **Hindu Marriage Act 1955, SMA 1954, Muslim Personal Law, Waqf Act**. Anchor s. 11 void vs s. 12 voidable, s. 13B mutual consent divorce, s. 125 BNSS / personal law maintenance. |

---

### PHASE 3: CANONICAL TOPIC ID CONVENTIONS
If creating a new topic, formulate the `topicId`:
- Section topic: `s-<number>` or `s-<number>-<slug>` (e.g. `s-63`, `s-25f-retrenchment`)
- Article topic: `art-<number>` or `art-<number>-<slug>` (e.g. `art-21`, `art-300a`)
- Doctrine topic: `doctrine-<slug>` or `<theme-slug>` (e.g. `doctrine-frustration`, `promissory-estoppel`)

**If not already present in `src/data/subjects.ts`**, output the registration snippet:
```typescript
{
  id: '<TOPIC_ID>',
  name: '<Topic Display Name>',
  type: '<section|article|doctrine|concept>',
  range: '<s. XX or Art. XX>',
  cluster: '<Thematic Cluster>',
  note: '<Crisp scope note>',
  highYield: true,
  hasNotes: true,
}
```

---

### PHASE 4: THE SENIOR COUNSEL & PhD TREATISE SPECIFICATION

Generate the complete, unshortened file `src/data/topics/<subjectSlug>/<topicId>.ts` conforming strictly to `TopicContent`:

```typescript
import type { TopicContent } from '../topicTypes'

export default {
  glance: '<One powerful 2-sentence executive summary defining the legal doctrine, governing provision, and practical purpose.>',

  sections: [
    {
      id: '<TOPIC_ID>-module-1',
      title: 'Provenance, Legislative Objective & Doctrinal Foundations',
      content: '<Deep jurisprudential roots, legislative purpose, and historical development.>',
    },
    {
      id: '<TOPIC_ID>-module-2',
      title: 'Textual Anatomy, Provisos & Statutory Deconstruction',
      content: '<Exhaustive breakdown of statutory language, sub-clauses, non-obstante phrases, explanations, and exceptions.>',
    },
    {
      id: '<TOPIC_ID>-module-3',
      title: 'Mandatory Proving Ingredients & Essential Elements',
      content: '<Numbered breakdown of each factual and legal element required to invoke or establish this provision.>',
    },
    {
      id: '<TOPIC_ID>-module-4',
      title: 'Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)',
      content: '<Who bears the burden of proof, standard of proof, statutory presumptions, and digital evidence compliance under Section 63 BSA.>',
    },
    {
      id: '<TOPIC_ID>-module-5',
      title: 'Procedural Roadmap, Competent Forum & Limitation Act Checkpoints',
      content: '<Competent trial/appellate court, territorial and pecuniary jurisdiction, relevant Limitation Act 1963 Schedule Article and time window, plus common preliminary objections.>',
    },
  ],

  examples: [
    {
      id: '<TOPIC_ID>-ill-1',
      title: 'Illustration 1 — Proving Conditions Met (Provision Applies)',
      illustrationType: 'statutory',
      description: '<Concrete factual matrix meeting all statutory ingredients, explaining why liability/relief attaches.>',
    },
    {
      id: '<TOPIC_ID>-ill-2',
      title: 'Illustration 2 — Boundary Defect / Exception (Provision Fails)',
      illustrationType: 'fail-scenario',
      description: '<Fact pattern where one essential ingredient is missing or an exception applies, resulting in failure or rejection of the claim/charge.>',
    },
  ],

  hypotheticals: [
    {
      id: '<TOPIC_ID>-hypo',
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
      id: '<TOPIC_ID>-dist-1',
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
      id: '<TOPIC_ID>-trap-1',
      trap: '<Common advocate/student error or false assumption regarding this section.>',
      correction: '<Authoritative correction citing settled statutory or judicial principle.>',
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
  ],

  questionsAndAnswers: [
    {
      id: '<TOPIC_ID>-brief',
      draftingCategory: 'brief',
      question: 'Provide a structured Case Brief and legal problem assessment on <PROVISION_NAME>.',
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
      id: '<TOPIC_ID>-submissions',
      draftingCategory: 'submissions',
      question: 'Draft comprehensive Written Submissions on <PROVISION_NAME>, deconstructing the statutory scheme, evidentiary burden, precedents, and procedural pathways.',
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

---

### PHASE 5: MANDATORY QUALITY & INTEGRITY CHECKS
1. **ZERO 10/16 MARKS**: NEVER output "10-mark", "16-mark", or mark rubrics.
2. **ZERO RAW MARKDOWN IN UI**: Use the structured fields instead of dumping raw `#` or `---` text.
3. **ZERO HALLUCINATION**: Real case citations with real ratios only. If unverified, mark as `needs-review`.

OUTPUT THE COMPLETE CODE FILE NOW.
