# Skill: Legal Content Workflow

**Mandatory SOP** for adding or changing Indian-law study content (subjects, topics, provisions, cases, MCQs, mappings).

Full rules: [`.github/instructions/global-legal-content.md`](../instructions/global-legal-content.md)

Subject extras (only): [`.github/instructions/subjects/`](../instructions/subjects/)

Knowledge graph: [`.github/skills/reusable-legal-knowledge.md`](reusable-legal-knowledge.md)

Topic file SOP: [`.github/skills/add-topic-notes.md`](add-topic-notes.md)

## Workflow

```text
RESEARCH → VERIFY → STRUCTURE → IMPLEMENT → CROSS-LINK → VALIDATE → TEST
```

Do not skip research for substantive legal content. Do not rely only on model memory.

### 1. Research

Inspect the repo first: `subjects.ts`, `src/data/knowledge`, existing topic files, questions, mappers.

Then use the source hierarchy in the global instructions:

1. Official / primary (India Code, Gazette, court sites)
2. Professional databases
3. Reputable legal news (context only)
4. Academic / educational (doctrine and history — not as Bare Act text)

### 2. Verify

Confirm current text, commencement, repeal, later amendments, and that a mapping is not a false equivalence.

If unverified: mark `needs-review`. Never invent numbers, citations, holdings, or URLs.

### 3. Structure

Reuse existing types. One Study Topic body. Canonical `TYPE:CATEGORY:SLUG` for reusable knowledge.

### 4. Implement

- Metadata → `src/data/subjects.ts`
- Notes → `src/data/topics/<slug>/<id>.ts`
- Provisions → existing catalogs (`constitution/articles.ts`, `bns/sections.ts`, …)
- Reusable doctrine/case/definition → `src/data/knowledge/` after `findExisting`
- MCQs → `src/data/questions/` (one MCQ system)

### 5. Cross-link

`[[REF:TYPE:CATEGORY:SLUG]]`, related topics, mapper links for historical ↔ current **only when verified**.

### 6. Validate

- No duplicate IDs
- No broken `[[REF:]]`
- Knowledge `registry.ts` still validates at module load
- No blind `IPC → BNS` / `CrPC → BNSS` / `IEA → BSA` replacements

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
