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

# 0. Dual-Track Student & Practitioner UX

This is the standard click path every subject and treatise page must implement:

```text
Hamburger / Home
  → Subject (Statutory Introduction + In-Force Status + Complete Numbered Catalog)
    → Click Section / Article / Order / Topic
      → Full Treatise Page (Book-Chapter Depth)
        → Jurisprudential Foundation & Legislative Intent
        → Statutory Deconstruction (Provisos, Explanations, Non-obstante clauses)
        → Procedural & Evidentiary Anchor (Forum, Jurisdiction, Limitation, Burden of Proof)
        → Official Statutory Illustrations (proving vs failing conditions) + Practical Hypotheticals
        → Landmark Case Law (Ratio Decidendi with Bench, Court, Facts, and Courtroom Application)
        → Courtroom Submissions (Prosecution/Petitioner vs Defence/Respondent arguments)
        → Case Brief Button → Structured Case Brief & Problem Assessment (IRAC Structure)
        → Written Submissions Button → Comprehensive Chamber Written Submissions (Appellate Standard)
```

- **Subject landing**: Statutory context card (`subjectIntros.ts`), in-force milestone dates, transitional summary (e.g. S. 531 BNSS savings), quick search/jump box, and the complete provision catalog grouped by Chapter/Part. High-yield themes sit prominently above the list.
- **Treatise page**: A complete chapter delivering both **Track A (Scholastic & Problem Solving Mastery)** for LL.B, LL.M, AIBE, and Judicial Services candidates, and **Track B (Litigation & Chamber Practice)** for junior advocates.
- **Dock Jump Targets**: Dedicated quick-access targets for `#statutory-illustrations`, `#case-law-ratios`, `#legal-brief`, and `#written-submissions`.
- **Zero Boilerplate Synthesizers**: Do not lead a study page with unverified IPC/CrPC/IEA mapping or generic boilerplate templates. Teach the actual working rule of that specific provision.
- **Navigation Integration**: Wire new subjects into `src/components/layout/NavDrawer.tsx` (`CODE_SLUGS` or `MORE_SLUGS`) and `src/components/home/HomePage.tsx`.

---

## Purpose & Jurisprudential Stance

This document establishes the **global instruction set for AI agents, legal scholars, and contributors on CodePackr Law**.

Every substantive provision, topic, and tool must reflect two unified disciplines:
1. **The Doctor of Laws (PhD in Jurisprudence)**: Rigorous theoretical context (analytical, historical, sociological, and constitutional jurisprudence), statutory interpretation canons (literal, purposive *Heydon's Case*, harmonious construction, *ejusdem generis*), legislative intent, and disciplined IRAC/ILAC structuring.
2. **The Senior Counsel (Senior Advocate)**: Practical courtroom utility, trial and appellate procedural fluency, forum and pecuniary/territorial jurisdiction, limitation periods, proving statutory ingredients, evidentiary appreciation (burden under BSA ss. 104–106 and electronic records under s. 63), and strategic adversarial submissions.

Subject-specific files in [`.github/instructions/subjects/`](subjects/) contain only subject-specific nuances — do not duplicate global architecture into them.

### The Sacred Student Career Covenant (Zero Topic Omission Directive)

**Law students and judicial service aspirants place their faith, university degrees, and life career trajectories in CodePackr Law.** We work for the student's career and their life. An omitted, skipped, or arbitrarily pruned topic in our library could cause a student to fail an exam or an advocate to miss a cause of action.

1. **Zero Omission Standard**: AI agents, maintainers, and contributors must NEVER arbitrarily ignore, prune, or drop syllabus topics from any legal subject.
2. **Authoritative Syllabus Benchmarking**: When architecting or updating any subject catalog in `src/data/subjects.ts`, conduct an exhaustive cross-reference against:
   - The Bar Council of India (BCI) Model Curriculum and National Law University (NLU) course outlines.
   - Revered classroom textbooks and standard treatises (e.g., M. S. Rama Rao, Ratanlal & Dhirajlal, Avtar Singh, Mulla, R.K. Bangia).
   - University LL.B/LL.M question banks and State Judicial Services Mains examination syllabi.
3. **Dedicated Provision & Topic Registration**: Every distinct concept, general defence, capacity rule, specific wrong/offence, remedy, and procedural mechanism must have a registered, dedicated, clickable topic with structured Case Briefs and Written Submissions. If an exhaustive chapter treatise is pending rollout, the topic must still be registered so that `synthesizePlaceholderTopic` provides an authoritative syllabus reference immediately.

---

### Modular Design Standard (Zero Raw Markdown in UI)

All topic study treatises and courtroom drafts must strictly adhere to the **Modular Design Standard**:
1. **Zero Raw Markdown Tokens**: Raw markdown syntax (`###`, `##`, `#`, `---`, `> `) must **never** be printed as unrendered plain text to the user.
2. **Modular Component Presentation**:
   - `Topic at a glance`: Presented in a prominent, styled summary card.
   - `Study Notes & Modules`: Rendered as clean, bordered visual modules with badge indicators (`Module 1`, `Module 2`, etc.) via `ModularStudyRenderer`.
   - `Callouts & Notes`: Editorial notes, provisos, and judicial commentaries must render as distinct callout cards with left accent borders and subtle background tint.
   - `Structured Data Properties`: Prefer structuring content into `TopicContent` properties (`sections`, `provisions`, `hypotheticals`, `distinctions`, `misconceptions`, `questionsAndAnswers`).
   - `Rich Inline Typography`: Bold phrases (`**term**`) are rendered in crisp, high-contrast weights, and statutory citations are cleanly anchored.
   - `Case Briefs and Written Submissions`: Structured in distinct IRAC and CREAC sections without markdown artifacts.

---

# 1. Dual-Track Core Workflow

Every substantive legal topic must strictly follow this forensic pipeline:

```text
RESEARCH BEYOND BARE ACT
        ↓
VERIFY PRIMARY LAW & COMMENCEMENT (Transition S. 531 BNSS / Art 20(1))
        ↓
DECONSTRUCT JURISPRUDENTIAL INTENT & STATUTORY ANATOMY
        ↓
ESTABLISH PROCEDURAL ANCHOR (Forum, Limitation, Evidentiary Burden)
        ↓
STRUCTURE COMPREHENSIVE TREATISE (Study Body)
        ↓
DRAFT AUTHENTIC HYPOTHETICALS & EXTRACT CASE RATIOS
        ↓
FORMULATE IRAC 10-MARK & 16-MARK EXAMINATION ANSWERS
        ↓
CROSS-LINK REUSABLE KNOWLEDGE (`[[REF:TYPE:CATEGORY:SLUG]]`)
        ↓
VALIDATE & EXECUTE QUALITY GATES (Lint + Build)
```

Never rely solely on internal model memory for substantive legal texts, citations, or procedural rules. Always cross-verify with primary legislation (Gazette of India, India Code) and authoritative law reports (SCC, SCR, AIR).

---

# 2. Universal Law Subject Architecture (Dual-Track Model)

All subjects conceptually adhere to the combined Academic & Practitioner Hierarchy:

```text
LAW SUBJECT (e.g. Criminal Law / Civil Procedure / Constitutional Law)
  ↓
STATUTORY OVERVIEW & COMMENCEMENT (In-force dates, transitional rules, legislative intent)
  ↓
MAJOR PART / CHAPTER / CLUSTER
  ↓
PROVISION / TOPIC TREATISE
  ├─► TRACK A: SCHOLASTIC & EXAM MASTERY (PhD Depth)
  │     ├─ Meaning, Concept & Jurisprudential Roots
  │     ├─ Statutory Text Deconstruction (Clauses, Provisos, Explanations)
  │     ├─ Canons of Interpretation Applied
  │     ├─ Landmark Precedents (Ratio Decidendi extracted)
  │     ├─ Full 10-Mark Structured Examination Answer (IRAC)
  │     └─ Full 16-Mark Comprehensive Analytical Answer (CREAC)
  │
  └─► TRACK B: LITIGATION & CHAMBER PRACTICE (Senior Counsel Precision)
        ├─ Forum & Competent Court (Magistrate / Sessions / High Court / Civil Court)
        ├─ Pecuniary & Territorial Jurisdiction Checkpoints
        ├─ Limitation Period (Limitation Act, 1963 schedule / special limitation)
        ├─ Mandatory Statutory Ingredients to be Proved
        ├─ Standard & Burden of Proof (BSA ss. 104–106, S. 63 electronic certificate)
        ├─ Courtroom Arguments: Petitioner/Prosecution vs Respondent/Defence
        └─ Pleading & Drafting Averments (Mandatory statements under O. VI R. 2)
  ↓
LABELLED EDUCATIONAL EXAMPLES & FACT PATTERNS (Applies vs Fails)
  ↓
HIGH-YIELD REVISION POINTS & DOUBT-RESOLUTION MATRIX (Common traps)
  ↓
MCQ PRACTICE & DIAGNOSTIC RATIONALES
  ↓
SIMULATED EXAM / TIME-BOUND BENCHMARK
```

Adapt terminology strictly to each enactment:
- Constitution → **Article** (also Part, Schedule, Constitutional Amendment)
- Bharatiya Nyaya Sanhita (BNS) → **Section**
- Bharatiya Nagarik Suraksha Sanhita (BNSS) → **Section**
- Bharatiya Sakshya Adhiniyam (BSA) → **Section**
- Code of Civil Procedure (CPC) → **Section / Order / Rule**
- Commercial / Personal Statutes → **Section** (always specify the statute)

Never force disparate statutes into a single generic label.

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

# 18. Bharatiya Nyaya Sanhita, BNSS & BSA — Senior Counsel & PhD Rigour

BNS, BNSS, and BSA constitute the reformed foundation of Indian criminal jurisprudence in force from 1 July 2024. They must be approached with acute statutory discernment:

```text
BNS (Substantive Law)  → Defines offences, mental states, and punishments
BNSS (Procedural Law)  → Regulates investigation, arrest, remand, bail, trial, appeals
BSA (Law of Evidence)  → Governs relevancy, admissibility, electronic records, proof
```

### A. Bharatiya Nyaya Sanhita (BNS, 2023)
- **Applicability & Ex-Post Facto Bar**: The date of the alleged offence — not the date of FIR or trial — strictly determines applicability under Article 20(1) of the Constitution and Section 358 BNS. Pre-July 1, 2024 acts are governed substantively by IPC.
- **Critical Number Collisions (Advocate & Student Warning Matrix)**:
  - **BNS s. 304** is **Snatching** (New specific offence) — *NOT* Culpable Homicide (IPC s. 304).
  - **BNS s. 309** is **Robbery** — *NOT* Attempt to Commit Suicide (IPC s. 309, unconstitutional under Mental Healthcare Act 2017 and dropped in BNS).
  - **BNS s. 353** is **Statements Conducing to Public Mischief** — *NOT* Assault on Public Servant (IPC s. 353 → now BNS s. 132).
  - **BNS s. 103** is **Punishment for Murder** — *NOT* s. 101 (s. 101 defines murder).
  - **BNS s. 3(5)** is **Common Intention** — *NOT* s. 190 (s. 190 is Common Object in an unlawful assembly).
- **Substantive Novelties**:
  - Community service enacted as a recognized sixth punishment under Section 4(f).
  - Organized Crime (s. 111) and Terrorist Acts (s. 113) incorporated into general penal law.
  - Mob lynching carved out under Section 103(2) with capital punishment/life imprisonment.
  - Section 106(2) (Hit-and-run causing death and escaping) is **NOT IN FORCE / HELD IN ABEYANCE** — must be explicitly tagged as unnotified.
  - Sedition (IPC 124A) is repealed; Section 152 BNS penalizes acts endangering sovereignty, unity, and integrity of India — never cite *Kedar Nath Singh* blindly without noting statutory textual differences.
  - Adultery (IPC 497) and Unnatural Offences (IPC 377) have been omitted in conformity with *Joseph Shine* and *Navtej Singh Johar*.

### B. Bharatiya Nagarik Suraksha Sanhita (BNSS, 2023)
- **Section 531 Savings Clause (Transitional Grandfathering)**:
  - **Section 531(2)(a) BNSS** explicitly commands that any appeal, application, trial, inquiry, or investigation pending immediately before 1 July 2024 **shall be disposed of, continued, held, or made in accordance with the provisions of CrPC, 1973** as if BNSS had not come into force.
  - Senior Counsel rule: Never advise or answer that CrPC is wiped out. For pending cases, CrPC remains the governing procedural code.
- **Litigation & Trial Checkpoints**:
  - **Information & FIR**: Section 173 BNSS (old s. 154); incorporates mandatory preliminary inquiry in offences punishable between 3 to 7 years (s. 173(3)) and Electronic/Zero FIR.
  - **Arrest Safeguards**: Section 35 BNSS (consolidates old s. 41 and s. 41A notice of appearance); permission from DSP required for arresting persons infirm or aged above 60 for offences under 3 years.
  - **Police Custody & Remand**: Section 187 BNSS (replaces old s. 167); allows police custody of 15 days in whole or in parts during the initial 40 or 60 days of detention.
  - **Bail Hierarchy**:
    - Bailable offences: Section 478 BNSS (old s. 436).
    - Undertrial release: Section 479 BNSS (first-time offender released on one-third period).
    - Non-bailable bail before Court/Magistrate: Section 480 BNSS (old s. 437).
    - Anticipatory Bail: Section 482 BNSS (old s. 438) — *CRITICAL: Section 482 BNSS is Anticipatory Bail, NOT Inherent Powers!*
    - High Court / Sessions Special Bail Powers: Section 483 BNSS (old s. 439).
    - Inherent Powers of High Court: Section 528 BNSS (old s. 482).
  - **Trial in Absentia**: Section 356 BNSS enables trial of proclaimed offenders absconding after 90 days of charge framing.

### C. Bharatiya Sakshya Adhiniyam (BSA, 2023)
- **The Evidentiary Triad**: Relevancy (Fact in Issue vs Relevant Fact, ss. 3–50) → Admissibility & Mode of Proof (Oral & Documentary, ss. 56–93) → Burden & Standard of Proof (ss. 104–120).
- **Electronic Records & Section 63 Certificate**:
  - Electronic records are elevated to primary evidence (s. 57) subject to conditions in Section 63 BSA (replaces s. 65B IEA).
  - Section 63(4) mandates an accompanying certificate signed by the person in charge of the device/system or an expert.
  - In practice: Failure to produce the Section 63 certificate at the time of tendering electronic evidence renders the evidence inadmissible in court (*Arjun Panditrao* doctrine preserved).
- **Burden of Proof & Presumptions**:
  - General burden of proof lies on who asserts: Section 104 BSA (old s. 101).
  - Burden of proving fact especially within knowledge: Section 109 BSA (old s. 106).
  - Reverse burdens and statutory presumptions: Section 116 (dowry death), Section 117 (abetment of suicide).


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
