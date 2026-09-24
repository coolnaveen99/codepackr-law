# CodePackr Law — Global AI Agent Instructions for Legal Content & Subject Architecture

**Canonical location:** `.github/instructions/global-legal-content.md`

This is the **global instruction set for AI agents working on CodePackr Law**. Use it for every law subject. Subject-specific files live in [`.github/instructions/subjects/`](subjects/) and must contain **only** subject-specific requirements — do not copy this file into them.

Related:
- Skill SOP: [`.github/skills/legal-content-workflow.md`](../skills/legal-content-workflow.md)
- **Add a subject:** [`.github/skills/add-new-subject.md`](../skills/add-new-subject.md)
- Knowledge graph: [`.github/skills/reusable-legal-knowledge.md`](../skills/reusable-legal-knowledge.md)
- Topic notes: [`.github/skills/add-topic-notes.md`](../skills/add-topic-notes.md)
- Architecture: [`docs/reusable-legal-knowledge-architecture.md`](../../docs/reusable-legal-knowledge-architecture.md)

---

## Repository binding (this codebase)

Conceptual models in this document map onto **existing** Codepackr Law types. Reuse them. Do not create a parallel subject/topic/provision/MCQ system.

| Concept in these instructions | This repository |
|-------------------------------|-----------------|
| Subject | `src/data/subjects.ts` (`LawSubjectMeta`) |
| Topic | `LawTopic` metadata in `subjects.ts` + notes in `src/data/topics/<slug>/<id>.ts` |
| One Study Topic body | `TopicContent.study` via `loadTopicContent` — no Short/Detailed UI |
| Canonical reusable knowledge | `src/data/knowledge/` — IDs are `TYPE:CATEGORY:SLUG` |
| Constitution provisions | `src/data/constitution/articles.ts` → `ARTICLE:CONSTITUTION:ARTICLE-21` |
| BNS provisions | `src/data/bns/sections.ts` → `SECTION:BNS:SECTION-103` |
| Cases | `src/data/constitution/cases.ts`, `src/data/bns/cases.ts`, `src/data/judgments/` |
| MCQ / Practice / Exam | `src/data/questions/` + existing MCQ tool — one system |
| Legal Key Mapper (IPC↔BNS etc.) | tool `bns-ipc-mapper` + `src/data/sections/bnsIpcData.ts` — extend, do not fork |
| Provision readers | `TopicDetail` + knowledge pages — do not invent a second reader per statute |

**ID rule:** If an entity already has a canonical ID (for example `ARTICLE:CONSTITUTION:ARTICLE-21` or `SECTION:BNS:SECTION-103`), **reuse it**. Do not mint a second ID such as `PROVISION:CONSTITUTION:21` for the same thing.

**Current-law subjects** in `subjects.ts` are Constitution, BNS, BNSS, BSA, CPC, Contract, Family, Torts, petition-formats, and any in-force subject added via `.github/skills/add-new-subject.md`. IPC, CrPC, and the Indian Evidence Act are **historical concordance only** (mappers + aliases), not active current-law subjects.

---

# 0. Catalog-first student UX (current product)

This is the click path every catalog subject must copy:

```text
Hamburger / Home
  → Subject (introduction + complete numbered list)
    → Click Section 1 / Article 21 / Section 107
      → Full study page
        → 10 mark button → full 10-mark answer
        → 16 mark button → full 16-mark answer
```

- Subject landing: intro card (`subjectIntros.ts`) + jump box + every provision, grouped by chapter/part. Themes sit above the list.
- Study page: teaching `study` + official illustrations when printed + labelled examples + Q&A dock.
- Do not lead a study page with unverified IPC/CrPC/IEA mapping.
- Do not dump the Bare Act as the whole page.
- New subjects: `.github/skills/add-new-subject.md`. Extras file from `.github/instructions/subjects/_template.md`.
- Wire hamburger: `src/components/layout/NavDrawer.tsx` (`CODE_SLUGS` or `MORE_SLUGS`) and `src/components/home/HomePage.tsx`.


---


## Purpose

This is the **global instruction set for AI agents working on CodePackr Law**.

Use these instructions for every law subject. Subject-specific files in `.github/instructions/subjects/` (`constitution.md`, `bns.md`, `bnss.md`, `bsa.md`, `cpc.md`, `contract.md`, `family.md`, `torts.md`, `petition-formats.md`) should contain only subject-specific requirements.

The goal is to create one reusable legal-learning architecture and a reliable research, verification, mapping, validation, and testing workflow.

---

# 1. Core Workflow

Always follow:

```text
RESEARCH → VERIFY → STRUCTURE → IMPLEMENT → CROSS-LINK → VALIDATE → TEST
```

Do not rely solely on internal model knowledge for substantive legal content.

Before changing code, inspect the existing repository, types, data, routes, components, skills/agent instructions, and shared utilities. Reuse existing architecture instead of creating duplicates.

---

# 2. Universal Law Subject Architecture

All subjects should conceptually follow:

```text
LAW SUBJECT
  ↓
SUBJECT OVERVIEW
  ↓
MAJOR PART / AREA
  ↓
TOPIC
  ↓
SUBTOPIC
  ↓
STUDY CONTENT
  ↓
LEGAL PROVISIONS
  ↓
EXAMPLES
  ↓
CASE LAW
  ↓
QUESTIONS & ANSWERS
  ↓
EXAM POINTS
  ↓
MCQ PRACTICE
  ↓
EXAM SIMULATION
```

Adapt terminology to each legislation:

- Constitution → Article
- BNS → Section
- BNSS → Section
- BSA → Section
- CPC → Section / Order / Rule
- Contract Act → Section
- Other laws → use their actual provision terminology

Do not force every law into the same provision label.

---

# 3. One Authoritative Study Version

Do not maintain duplicate structures such as:

- Short Version
- Detailed Version
- Quick Version
- Full Version

unless there is a genuine product requirement.

Use one authoritative topic record containing structured sections such as:

```text
Introduction
Key Concepts
Definitions
Relevant Provisions
Detailed Explanation
Essential Elements
Procedure / Rules
Exceptions / Limitations
Examples
Case Law
Questions & Answers
Exam Points
Related Topics
```

Only render sections that contain content.

---

# 4. Learning-First Experience

Primary journey:

```text
SUBJECT (intro + catalog) → TOPIC / SECTION / ARTICLE → STUDY → ILLUSTRATIONS → 10-MARK / 16-MARK Q&A
```

Do not make MCQ Practice the primary entry point from a subject/topic learning page.
Do not hide a high-yield subject from the hamburger.

---

# 5. Reusable Data Architecture

Use existing project types where possible. Conceptually support:

```ts
Subject
Topic
LegalProvision
LegalCase
QuestionAnswer
McqQuestion
LegalKeyMapping
SourceMetadata
```

Every entity should have a canonical ID/key and reusable references instead of duplicated content.

---

# 6. Generic Legal Provision Model

The provision layer must support different legal structures:

```ts
interface LegalProvision {
  id: string
  subjectId: string
  provisionType: 'article' | 'section' | 'order' | 'rule' | 'schedule' | 'regulation' | 'other'
  provisionNumber: string
  title?: string
  text?: string
  summary?: string
  topicIds?: string[]
  caseIds?: string[]
  status?: 'current' | 'historical' | 'repealed' | 'amended'
  source?: {
    name: string
    url?: string
    accessedAt?: string
  }
}
```

Use the actual repository model if equivalent functionality already exists.

---

# 7. Generic Case-Law Architecture

Use one canonical case record reusable across subjects/topics.

Conceptually support:

```ts
interface LegalCase {
  id: string
  name: string
  citation?: string
  year?: number
  court?: string
  overview?: string
  facts?: string
  issues?: string[]
  provisions?: string[]
  decision?: string
  ratioDecidendi?: string
  obiterDicta?: string
  examPoints?: string[]
  subjectIds?: string[]
  topicIds?: string[]
}
```

Do not duplicate the same case unnecessarily.

---

# 8. Generic MCQ Architecture

Reuse the existing MCQ type where possible.

Every MCQ should be linked to:

- Subject
- Topic
- Provision where relevant
- Correct answer
- Explanation
- Difficulty where supported

Do not create separate MCQ systems for individual subjects.

---

# 9. Practice Mode

Practice is a learning/reinforcement mode.

Support limited sessions such as:

- 10 questions
- 15 questions
- 20 questions

Use random unique selection and subject/topic filtering.

Practice may provide instant feedback, explanations, progress, and score.

Do not expose the complete question bank in one session.

---

# 10. Exam Simulation

Use one common Exam Simulation architecture.

Allow:

### Scope
- Specific Topic
- Multiple Topics
- Mixed Topics
- All Topics

### Question count
- 10
- 20
- 30
- 50
- 100
- Custom

### Timer
- 10 minutes
- 20 minutes
- 30 minutes
- 60 minutes
- 90 minutes
- Custom

During the exam:

- No instant feedback
- Previous/Next
- Question palette
- Answer status
- Mark for Review
- Clear Answer
- Remaining timer
- Submit confirmation

At timeout, automatically submit.

After submission show score, percentage, correct, incorrect, unattempted, topic performance, review, explanations, and Study This Topic.

---

# 11. Common Question Selection Engine

Use one reusable utility conceptually:

```ts
selectQuestions({ subjectId, topicIds, count, mode })
```

Requirements:

- Subject filtering
- Topic filtering
- Multiple-topic filtering
- Mixed selection
- Random selection
- No duplicates
- Requested count
- Graceful insufficient-bank handling

---

# 12. Canonical Legal Keys

Use canonical reusable keys such as:

```text
SUBJECT:CONSTITUTION
SUBJECT:BNS
SUBJECT:BNSS
SUBJECT:BSA

TOPIC:CONSTITUTION:FUNDAMENTAL-RIGHTS

PROVISION:CONSTITUTION:21
PROVISION:BNS:103
PROVISION:BNSS:173
PROVISION:BSA:104

CASE:KESAVANANDA-BHARATI
```

Follow existing repository ID conventions if suitable.

---

# 13. Legal Key Mapper

Implement one central reusable Legal Key Mapper.

Initial migration relationships:

```text
IPC  ↔ BNS
CrPC ↔ BNSS
IEA  ↔ BSA
```

Do not assume every old provision has a one-to-one equivalent.

Support mapping types such as:

```ts
type LegalMappingType =
  | 'direct-equivalent'
  | 'partial-equivalent'
  | 'split-equivalent'
  | 'combined-equivalent'
  | 'modified-equivalent'
  | 'no-direct-equivalent'
  | 'historical-reference'
```

Conceptually:

```ts
interface LegalKeyMapping {
  id: string
  fromLaw: string
  fromKey: string
  toLaw?: string
  toKeys?: string[]
  mappingType: LegalMappingType
  note?: string
  effectiveDate?: string
  status?: 'verified' | 'needs-review'
  source?: { name: string; url?: string }
}
```

---

# 14. No False Equivalence

Never assume:

```text
IPC X = BNS Y
CrPC X = BNSS Y
IEA X = BSA Y
```

A relationship may be direct, partial, split, combined, modified, or have no direct equivalent.

Every mapping must be verified. If uncertain, use:

```text
status = needs-review
```

Never guess.

---

# 15. Legal Key Resolver

Provide reusable functions conceptually:

```ts
resolveLegalKey(key)
getLegacyKeys(key)
getCurrentKeys(key)
getRelatedLegalKeys(key)
```

A resolver must distinguish historical source keys, current related keys, mapping type, and verification status.

Do not silently rewrite historical references.

---

# 16. Historical Law Handling

Remove IPC, CrPC, and Indian Evidence Act from the active **current-law subject list**, but do not delete every historical reference.

Historical references may be required for:

- Historical judgments
- Older case law
- Previous examination questions
- Legal history
- Comparative learning

Label historical/repealed status appropriately and connect to current law through the mapper only where a verified relationship exists.

---

# 17. Current Subject Migration

Active current-law subjects should include:

```text
Constitution of India
BNS
BNSS
BSA
...
```

IPC, CrPC, and Indian Evidence Act must not remain active current-law subjects.

Historical content must remain usable where required.

---

# 18. BNS / BNSS / BSA

BNS, BNSS, and BSA must use the same generic architecture as all other subjects.

Do not create duplicated special architectures.

```text
BNS  → Topics → Sections → Study → Cases → Q&A → MCQs → Practice → Exam
BNSS → Topics → Sections → Study → Cases → Q&A → MCQs → Practice → Exam
BSA  → Topics → Sections → Study → Cases → Q&A → MCQs → Practice → Exam
```

---

# 19. Section Number Migration

When updating references:

1. Identify the legislation.
2. Determine whether the reference is historical or current.
3. Verify the applicable current provision.
4. Preserve historical references where required.
5. Add a verified current mapping where applicable.
6. Update only confirmed references.
7. Validate every changed reference.

Never perform a blind global replacement.

---

# 20. MCQ Migration

When migrating MCQs:

- Preserve question text unless a reference must change.
- Preserve options.
- Preserve correct answer.
- Preserve explanation.
- Update subject/topic references as required.
- Update provision references only when verified.
- Preserve historical law references for historical questions.
- Ensure current-law questions use current provisions.

Never globally replace `IPC → BNS`, `CrPC → BNSS`, or `IEA → BSA` inside every MCQ.

---

# 21. Multi-Source Legal Research

Do not rely on one website or internal model knowledge for substantive legal research.

Research, compare, verify, and synthesize.

## Level 1 — Primary/Official Sources

Prioritize:

- India Code
- Legislative Department, Government of India
- Official Gazette of India
- Supreme Court of India
- Official High Court websites
- Official Government Ministry/Department websites
- Official statutory/regulatory authority websites

Use these for actual Acts, Articles, Sections, Rules, Regulations, Amendments, Notifications, Commencement, Repeal, and judgments/orders.

## Level 2 — Professional Legal Databases

Where accessible, use established platforms such as:

- SCC Online
- Manupatra
- Indian Kanoon
- CaseMine
- GoJuris
- LexisNexis
- Westlaw

Use them for case discovery, citation verification, related cases, precedent research, statutory interpretation, historical research, and commentary.

The actual statute or judgment remains authoritative where available.

## Level 3 — Legal News and Analysis

Use established legal publications such as:

- LiveLaw
- Bar & Bench
- Other reputable Indian legal news sources

Use them for recent judgments, legal developments, legislation, amendments, procedural developments, and context.

Do not use legal news as the sole authority for a judicial holding.

## Level 4 — Academic/Educational Sources

Use reputable law journals, university publications, peer-reviewed articles, established textbooks, Law Commission reports, Parliamentary committee reports, and reputable legal education resources for historical background, theory, doctrines, legislative history, and explanations.

Do not present academic commentary as statutory text or judicial holding.

---

# 22. Multi-Source Research Workflow

For important topics:

```text
PRIMARY SOURCE
      +
LEGAL DATABASE
      +
LEGAL ANALYSIS
      ↓
COMPARE
      ↓
VERIFY
      ↓
SYNTHESIZE
      ↓
CREATE ORIGINAL CODEPACKR CONTENT
```

Do not copy content from one website.

---

# 23. Case-Law Research

For every important case:

1. Search the official court source where possible.
2. Cross-check using a reliable legal database.
3. Check reputable legal reporting for context.
4. Verify the actual judgment/order.
5. Record only supported facts and holdings.

Verify:

- Case name
- Citation
- Year
- Court
- Bench
- Date
- Relevant provisions
- Facts
- Issues
- Arguments where relevant
- Decision
- Ratio decidendi
- Obiter dicta where relevant

Never invent facts, judges, citations, paragraph numbers, holdings, or legal principles.

---

# 24. Current-Law Verification

Before publishing current-law information verify:

- Current statutory text
- Amendments
- Commencement
- Repeal status
- Substitution
- Relevant later judgments
- Current judicial interpretation

Historical law must be clearly identified.

---

# 25. Source Metadata

Where supported, store:

```ts
interface SourceMetadata {
  name: string
  type: 'official' | 'court' | 'legal-database' | 'legal-news' | 'academic' | 'educational'
  url?: string
  accessedAt?: string
  verifiedAt?: string
  verificationStatus: 'verified' | 'cross-checked' | 'needs-review'
}
```

Never invent source URLs.

---

# 26. Content Layers

Keep separate:

1. **Legal Source** — actual constitutional/statutory text
2. **Student Explanation** — original plain-language explanation
3. **Case Law** — verified judicial decisions
4. **Questions & Answers** — conceptual learning
5. **Exam Points** — revision material
6. **MCQs** — assessment

Never label paraphrased material as Bare Act text.

---

# 27. Copyright / Original Content

Use legal websites and databases for research, discovery, verification, cross-referencing, and context.

Do not copy substantial copyrighted explanations, question banks, articles, textbooks, or database content verbatim.

Create original CodePackr explanations and original MCQs.

Handle statutory/constitutional text separately with accurate source attribution and applicable publication requirements.

---

# 28. Content Reuse

Do not duplicate the same provision, definition, case, doctrine, or reusable concept across many files when a canonical record can be referenced.

Use keys/IDs such as:

```text
PROVISION:...
CASE:...
TOPIC:...
```

This reduces inconsistency and maintenance cost.

---

# 29. Search and Cross-Linking

Search should understand both current and historical references, for example:

```text
Article 21
BNS 103
BNSS 173
BSA 104
IPC 302
CrPC 154
IEA 101
```

Legacy searches should lead to historical references and verified current relationships.

Connect:

```text
Subject → Topic → Provision → Case → Q&A → MCQ → Practice → Exam
```

and, where verified:

```text
Historical Provision → Legal Key Mapper → Current Related Provision
```

---

# 30. Subject Configuration

Prefer configuration over scattered subject-specific conditionals.

Conceptually:

```ts
const subjectConfig = {
  constitution: { provisionLabel: 'Article' },
  bns: { provisionLabel: 'Section' },
  bnss: { provisionLabel: 'Section' },
  bsa: { provisionLabel: 'Section' },
  cpc: { provisionLabel: 'Section / Order / Rule' }
}
```

Extend as needed for future subjects.

---

# 31. Generic Readers

Use reusable readers where possible:

```text
TopicReader
ProvisionReader
JudgmentReader
McqPracticeSession
ExamSession
```

Do not create separate readers for every law unless a genuine law-specific feature requires it.

---

# 32. Validation

Run validation for:

### Subjects
- Duplicate IDs
- Duplicate codes
- Invalid references
- Incorrect current/historical status

### Topics
- Duplicate IDs
- Invalid subject IDs
- Invalid parent IDs
- Broken related-topic references

### Provisions
- Duplicate keys
- Invalid subject references
- Invalid provision types
- Broken topic/case references

### Cases
- Duplicate case IDs
- Broken provision references
- Broken topic references

### MCQs
- Duplicate IDs
- Invalid subject references
- Invalid topic references
- Invalid correctIndex
- Missing explanations/options
- Invalid provision keys

### Mapper
- Duplicate mappings
- Broken source/target keys
- Mapping loops
- Unsupported mapping types
- Unverified mappings marked verified

---

# 33. No-Hallucination Rule

Never invent:

- Article numbers
- Section numbers
- Legal provisions
- Case names
- Citations
- Court holdings
- Amendments
- Rules
- Regulations
- Government notifications
- Source URLs
- Legal mappings

If information cannot be verified, mark it:

```text
needs-review
```

Do not guess.

---

# 34. Do Not Break Existing Subjects

Before changing shared components, identify all consumers.

Do not accidentally break:

- Existing subjects
- Existing topics
- Existing MCQs
- Navigation
- Search
- Learning progress
- Practice Mode
- Exam Simulation
- Case law
- Provision links

---

# 35. Subject-Specific Instructions

When a subject-specific Markdown file exists:

```text
GLOBAL AGENT INSTRUCTIONS
        +
SUBJECT-SPECIFIC INSTRUCTIONS
        ↓
IMPLEMENTATION
```

Global instructions control:

- Architecture
- Research methodology
- Source hierarchy
- Validation
- Legal Key Mapper
- Current/historical law handling
- MCQ architecture
- Practice
- Exam
- Cross-linking

Subject-specific files control:

- Subject name
- Subject code
- Applicable legislation
- Provision terminology
- Subject-specific structure
- Special legal requirements
- Subject-specific exceptions

Do not duplicate these global instructions in every subject file.

---

# 36. Implementation Order

Follow this order unless the existing architecture requires a different safe sequence:

1. Repository audit
2. Identify reusable architecture
3. Standardize subject/topic/provision models
4. Standardize learning components
5. Standardize MCQ/Practice/Exam architecture
6. Implement Legal Key Mapper
7. Migrate IPC/CrPC/IEA current-subject references to BNS/BNSS/BSA where verified
8. Preserve historical references
9. Update verified section/provision references
10. Update search/cross-linking
11. Run validation
12. Run tests/build
13. Review unresolved items

---

# 37. Testing

Run where configured:

- TypeScript checks
- ESLint
- Unit tests
- Integration tests
- Build
- Existing application tests

Verify:

- Subject pages
- Topic pages
- Provision pages
- Case-law pages
- Search
- MCQ Practice
- Exam Simulation
- Timer
- Auto-submit
- Progress
- Cross-links
- Legacy/current key resolution

---

# 38. Final Report

After implementation report:

1. Files created
2. Files modified
3. Files removed
4. Common architecture changes
5. Subject model changes
6. Topic model changes
7. Provision model changes
8. Case-law changes
9. MCQ changes
10. Practice changes
11. Exam changes
12. Legal Key Mapper changes
13. IPC → BNS migration status
14. CrPC → BNSS migration status
15. IEA → BSA migration status
16. Number of references changed
17. Historical references preserved
18. Validation results
19. Tests executed
20. Build result
21. Items requiring manual legal verification
22. Git branch/commit information

Never claim completion if major work remains.

---

# 39. Final Principle

Build CodePackr Law as **one reusable legal-learning platform**, not a collection of separate implementations.

The target is:

```text
                    CODEPACKR LAW
                         │
                  SUBJECT REGISTRY
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
    CONSTITUTION         BNS            BNSS
          │              │              │
          └──────────────┼──────────────┘
                         ▼
                  COMMON TOPIC MODEL
                         │
                         ▼
                COMMON PROVISION MODEL
                         │
                         ▼
                  COMMON CASE MODEL
                         │
                         ▼
                    COMMON Q&A
                         │
                         ▼
                   COMMON MCQ
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
           PRACTICE               EXAM

                    +
              LEGAL KEY MAPPER
                    │
          ┌─────────┼─────────┐
          ▼         ▼         ▼
         IPC       CrPC       IEA
          │         │         │
          ▼         ▼         ▼
         BNS       BNSS       BSA
```

The architecture must be reusable, maintainable, legally traceable, source-aware, and ready for future Indian law subjects.
