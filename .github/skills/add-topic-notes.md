# Skill: Add Topic Learning Notes (Lazy-Loaded)

**Mandatory SOP** for full topic learning notes (single Study Topic body + structured fields + cases).

Global legal-content rules: [`.github/instructions/global-legal-content.md`](../instructions/global-legal-content.md).

Deep student-answer standard: [`.github/skills/student-answer-content.md`](student-answer-content.md).

Subject extras: [`.github/instructions/subjects/`](../instructions/subjects/).

## Architecture rule (non-negotiable)

| Layer | Location | What goes here |
|-------|----------|----------------|
| Metadata only | `src/data/subjects.ts` | id, name, type, range, note, keywords, highYield, cluster |
| Full notes | `src/data/topics/<subjectSlug>/<topicId>.ts` | `study` (preferred) or legacy `detailed`/`short`, plus sections, provisions, Q&A, cases, bareActPointers, examTips |
| Canonical graph | `src/data/knowledge/` | Reusable doctrines / cases / articles. Search here first. |

**Never** put study body / `short` / `detailed` / `cases` / `examTips` into `subjects.ts`.

**Never** copy a canonical doctrine or case essay into a topic file. Use `[[REF:TYPE:CATEGORY:SLUG]]` and the related-knowledge panel.

## Student-learning depth (non-negotiable)

CodePackr Law is designed to help students write **10-mark and 16-mark answers**.

A substantive topic must not be only a Bare Act digest. The Bare Act is the legal source layer. The Study Topic must add original student-friendly explanation, context, analysis, examples, verified case-law principles and examination guidance.

Where applicable, structure `study` around:

1. Topic at a Glance
2. Introduction
3. Meaning and Concept
4. Purpose / Why the Rule Exists
5. Historical / Legal Background
6. Definitions / Key Terms
7. Legal Foundation / Relevant Provisions
8. Essential Elements / Ingredients
9. Detailed Explanation of Each Element
10. Operation / Rules
11. Exceptions / Limitations
12. Important Distinctions
13. Practical Examples
14. Hypothetical Problem + Application
15. Leading Case Law + Legal Principle / Ratio
16. Current-Law Position
17. Common Misconceptions / Exam Traps
18. 10-Mark Answer Framework
19. 16-Mark Answer Framework
20. Model Answer Skeleton
21. Quick Revision Points
22. Q&A / MCQ-ready Points
23. Related Topics / Reusable Knowledge

Adapt this structure to the topic. Do not add irrelevant headings simply to increase length.

### 10-mark answer

Normally provide a coherent framework covering introduction, legal basis, core rule/doctrine, essential elements, relevant provisions, important authority, example/application, material exceptions and conclusion.

### 16-mark answer

Where appropriate, provide a fuller framework covering conceptual explanation, legal foundation, background, detailed principles/elements, provision analysis, exceptions, distinctions, multiple authorities, case principles, examples, hypothetical application, current position, analytical discussion and conclusion.

### Case-law quality

Do not list cases without explaining them. Verify and provide, where available, case name, citation/year, court, material facts, issue, decision, ratio/principle, significance and exam-use point. Reuse canonical case records.

### Examples

Include simple illustrations and examination-style hypotheticals when they materially improve understanding. Clearly label created hypotheticals as educational examples. Never invent a real judgment.

## Topic types

| `type` | Use for |
|----------|----------|
| `theme` | Broad theme / chapter area |
| `article` | Constitutional article |
| `section` | Key section cluster |
| `chapter` | Act chapter / Orders |
| `doctrine` | Named legal doctrine |
| `act` | Whole statute essentials |
| `format` | Petition / application skeleton — **only under subject `petition-formats`** |

## Petition formats

All petition/application formats live under `petition-formats`. Do not scatter them across Constitution, CPC, BNSS, PIL, etc.

## Steps

0. Search `src/data/knowledge` for equivalent doctrine/article/case/principle/definition. Reuse if it exists.
1. Confirm the topic exists in `subjects.ts`.
2. Create/update `src/data/topics/<subjectSlug>/<topicId>.ts`.
3. Export the existing `TopicContent` shape.
4. Use `study` as the authoritative Study Topic body.
5. Add page-specific examples, Q&A and exam guidance without duplicating canonical knowledge.
6. Add verified references and cross-links.
7. Validate and test.

## Do not

- Put full essays in `subjects.ts`
- Create Short Version / Detailed Version UI
- Create duplicate canonical doctrine/case records
- Produce only Bare Act summaries
- Dump section numbers without explaining their meaning and application
- List case names without principles
- Omit useful examples or hypothetical application
- Copy textbooks or database commentary
- Require a backend for notes
