# Skill: Legal Content Workflow

**Mandatory SOP** for adding or changing Indian-law study content (subjects, topics, provisions, cases, MCQs, mappings).

Full rules: [`.github/instructions/global-legal-content.md`](../instructions/global-legal-content.md)

Depth standard: [`.github/instructions/student-answer-content.md`](../instructions/student-answer-content.md)

Student answer-depth rules: [`.github/skills/student-answer-content.md`](student-answer-content.md)

Subject extras (only): [`.github/instructions/subjects/`](../instructions/subjects/)

Knowledge graph: [`.github/skills/reusable-legal-knowledge.md`](reusable-legal-knowledge.md)

Topic file SOP: [`.github/skills/add-topic-notes.md`](add-topic-notes.md)

New subject SOP: [`.github/skills/add-new-subject.md`](add-new-subject.md)

## Workflow

```
RESEARCH BEYOND BARE ACT
→ VERIFY
→ UNDERSTAND
→ STRUCTURE FOR LEARNING
→ IMPLEMENT
→ CROSS-LINK
→ VALIDATE
→ TEST
```

Do not skip research for substantive legal content. Do not rely only on model memory.

### 1. Research

Inspect the repo first: `subjects.ts`, `src/data/knowledge`, existing topic files, questions, mappers.

Research the topic beyond the Bare Act:
1. Primary/official law
2. Judicial authorities
3. Reliable legal databases
4. Reputable legal reporting for context/recent developments
5. Academic/educational sources for doctrine, theory and history

The Bare Act is the legal source layer. It is not the complete student-learning layer.

### 2. Verify

Confirm current text, commencement, repeal, later amendments, and that a mapping is not a false equivalence.

For cases verify the case identity, citation, court, facts, issue, decision and ratio/principle where available.

If unverified: mark `needs-review`. Never invent numbers, citations, holdings or URLs.

### 3. Structure for student learning

Every substantive topic should be detailed enough to support a 10-mark answer and, where appropriate, expansion to a 16-mark answer.

`study` teaches the law. `questionsAndAnswers` with `marks: 10 | 16` is the exam answer the jump buttons open. Do not paste “how to write 10/16 marks” into `study`.

Normally cover in research (then place on the correct field):
- Introduction, meaning/concept, purpose
- Definitions / every official illustration
- Essential elements, operation, exceptions, distinctions
- Practical examples and a labelled hypothetical
- Leading case law with principles/ratio
- Common misconceptions
- Full 10-mark answer and full 16-mark answer in Q&A
- Related reusable knowledge (`[[REF:]]`)

Do not make content longer through repetition.

### 4. Implement

- Metadata → `src/data/subjects.ts`
- Notes → `src/data/topics/<slug>/<id>.ts`
- New subject (hamburger, intro, catalog) → `.github/skills/add-new-subject.md`
- Provisions → existing catalogs (`src/data/bns|bnss|bsa|constitution/`)
- Reusable doctrine/case/definition → `src/data/knowledge/` after search
- MCQs → `src/data/questions/`

### 5. Cross-link

`[[REF:TYPE:CATEGORY:SLUG]]`, related topics, mapper links for historical ↔ current **only when verified**.

Search the knowledge graph before creating duplicate doctrine, case, definition, principle, maxim or provision records.

### 6. Validate

- No duplicate IDs
- No broken `[[REF:]]`
- Knowledge `registry.ts` still validates
- No blind `IPC → BNS` / `CrPC → BNSS` / `IEA → BSA` replacements
- Examples/hypotheticals are clearly labelled educational
- Bare Act text is never confused with paraphrase or commentary

### 7. Test

```bash
npm run lint
npm run build
```

Open the subject page, one topic, related knowledge, and (if MCQs changed) practice/exam.

## Do not

- Create a second reader, MCQ engine, or mapper
- Put essays in `subjects.ts`
- Duplicate a canonical doctrine/case
- Treat IPC / CrPC / IEA as current-law subjects
- Copy textbooks or database commentary
- Generate only Bare Act summaries for substantive topics
- Produce case-name lists without explaining the legal principle
- Invent statutory illustrations
- Omit examples/application where they materially help understanding
- Add a subject without following `add-new-subject.md`
