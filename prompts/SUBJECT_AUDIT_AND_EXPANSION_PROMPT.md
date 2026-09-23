# CodePackr Law — Subject Overhaul & Gap-Filling Prompt (`SUBJECT_AUDIT_AND_EXPANSION_PROMPT.md`)

> **WHEN TO USE THIS PROMPT:**  
> Use this prompt when you want to **completely overhaul an entire subject** (e.g., BNS, BSA, BNSS, Labour, CPC, Constitution) by doing **BOTH**:
> 1. **Upgrading all existing topic files** to the Senior Counsel & PhD standard.
> 2. **Identifying and authoring new missing statutory sections** that currently lack dedicated treatise files.

---

## 📋 The Copy-Paste Master Prompt for Subject Overhaul & Gap Filling

Copy and paste the block below into your AI assistant, replacing `[SUBJECT_NAME]` and `[SUBJECT_SLUG]` (e.g. `Bharatiya Nyaya Sanhita, 2023` and `bns`):

```markdown
You are acting as a Senior Counsel (Supreme Court of India / Senior Advocate caliber) and a Doctor of Laws (PhD Scholar in Jurisprudence).

We are performing a complete Subject Overhaul and Gap-Filling expansion for [SUBJECT_NAME] (`src/data/topics/[SUBJECT_SLUG]/`) on CodePackr Law (law.codepackr.com).

### OUR DUAL MISSION
1. **Upgrade Existing Topics**: Review all existing files in `src/data/topics/[SUBJECT_SLUG]/`, purge all 10/16-mark collegiate language, and elevate them to the 5 Senior Counsel Doctrinal Modules.
2. **Author High-Yield Missing Sections**: Identify key statutory sections in [SUBJECT_NAME] that currently lack dedicated files (or only have synthesized fallbacks), and author complete, dedicated treatise files for them.

---

### PHASE 1: GAP ANALYSIS & PRIORITY INVENTORY
First, examine the current subject topics and output an inventory table with two columns:
1. **Existing Files to Upgrade**: List all current `.ts` files in `src/data/topics/[SUBJECT_SLUG]/`.
2. **Missing High-Yield Provisions to Create**: List the top 5–10 critical statutory sections from the Act that require dedicated files (e.g. for BNS: Section 103 Murder, Section 111 Organised Crime, Section 69 Deceitful Intercourse, Section 304 Snatching, Section 113 Terrorist Acts; for BSA: Section 63 Electronic Records, Section 24 Confessions, Section 32 Statements).

---

### PHASE 2: BATCH EXECUTION WORKFLOW
Once the inventory is established, author or upgrade the topic files one by one. For each topic:

1. **Target File Path**: `src/data/topics/[SUBJECT_SLUG]/[topicId].ts`
2. **Catalog Registration**: If a new provision, provide the snippet for `src/data/subjects.ts` (`hasNotes: true`).
3. **Strict Senior Counsel Standard**:
   - **Glance**: 2-sentence executive summary.
   - **5 Doctrinal Modules**:
     - Module 1: Provenance, Legislative Objective & Doctrinal Foundations
     - Module 2: Textual Anatomy, Provisos & Statutory Deconstruction
     - Module 3: Mandatory Proving Ingredients & Essential Elements
     - Module 4: Evidentiary Burdens under BSA 2023 (ss. 104–106 & s. 63)
     - Module 5: Procedural Roadmap, Competent Forum & Limitation Act Checkpoints
   - **Dual Illustrations**:
     - Illustration 1: Proving Conditions Met (Provision Applies)
     - Illustration 2: Boundary Defect / Exception (Provision Fails)
   - **Chamber Hypothetical**: Realistic courtroom dispute with facts, legal question, applicable law, multi-point analysis, and definitive conclusion.
   - **Distinction Table & Misconceptions**: Forensic differences vs confused neighbour concepts and common traps.
   - **Extracted Case Ratios**: Real Supreme Court / High Court citations with `court`, `bench`, `facts`, `issue`, `ratioDecidendi`, `holding`, and `relevance`.
   - **Courtroom Drafting Q&A**:
     - `brief`: Case Brief / Problem Assessment (IRAC Method)
     - `submissions`: Comprehensive Written Submissions (Appellate Standard)
   - **Zero Marks**: Absolutely NO references to "10-mark", "16-mark", or university mark rubrics.
   - **Checklist Synchronization**: Mark each completed topic as `[x] Complete` in `docs/subject-coverage-checklist.md` (or run `npm run checklist`).

Begin by listing the Phase 1 Gap Analysis inventory table, and then proceed with Topic 1.
```

---

## ⚡ Quick One-Line Invocation (For Coding Agents like Antigravity / Cursor)

If you are using an agent with file system access, you can run this single command:

```text
Overhaul [SUBJECT]: upgrade all existing files in src/data/topics/[SUBJECT_SLUG]/ and author the top missing high-yield sections to Senior Counsel standard. Follow prompts/DISPATCHER.md and prompts/SUBJECT_AUDIT_AND_EXPANSION_PROMPT.md.
```

Example for BNS:
```text
Overhaul BNS: upgrade all 10 existing files in src/data/topics/bns/ and author the top missing sections (s-103, s-111, s-304, s-69, s-113) to Senior Counsel standard. Follow prompts/DISPATCHER.md and prompts/SUBJECT_AUDIT_AND_EXPANSION_PROMPT.md.
```

Example for BSA:
```text
Overhaul BSA: upgrade all 7 existing files in src/data/topics/bsa/ and author the top missing sections (s-63, s-24, s-32, s-104-106, s-116) to Senior Counsel standard. Follow prompts/DISPATCHER.md and prompts/SUBJECT_AUDIT_AND_EXPANSION_PROMPT.md.
```
