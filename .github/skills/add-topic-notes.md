# Skill: Add Topic Learning Notes (Lazy-Loaded)

**Mandatory SOP** for full topic learning notes (single Study Topic body + structured fields + cases).

Global legal-content rules: [`.github/instructions/global-legal-content.md`](../instructions/global-legal-content.md).

Deep student-answer standard: [`.github/skills/student-answer-content.md`](student-answer-content.md).

Subject extras: [`.github/instructions/subjects/`](../instructions/subjects/).

## Architecture rule (non-negotiable)

| Layer | Location | What goes here |
|-------|----------|----------------|
| Metadata only | `src/data/subjects.ts` | id, name, type, range, note, keywords, highYield, cluster |
| Full notes | `src/data/topics/<subjectSlug>/<topicId>.ts` | `study` (teaching body), statutory illustrations when official, examples, **full** Q&A with `marks: 10 \| 16`, cases, hypotheticals |
| Canonical graph | `src/data/knowledge/` | Reusable doctrines / cases / articles. Search here first. |

**Never** put study body / `short` / `detailed` / `cases` / `examTips` into `subjects.ts`. Do not create a Short Version of the Study Topic or of the Q&A.

**Never** copy a canonical doctrine or case essay into a topic file. Use `[[REF:TYPE:CATEGORY:SLUG]]` and the related-knowledge panel.

## Student-learning depth (non-negotiable)

CodePackr Law is designed to help students write **10-mark and 16-mark answers**.

A substantive topic must not be only a Bare Act digest. The Bare Act is the legal source layer. The Study Topic must add original student-friendly explanation, context, analysis, examples, verified case-law principles and examination guidance.

Where applicable, structure `study` around teaching (not exam-writing filler):

1. Topic at a Glance
2. Introduction
3. Meaning and Concept
4. Purpose / Why the Rule Exists
5. Definitions / Key Terms (every statutory definition, taught)
6. Legal Foundation / Relevant Provisions
7. Essential Elements / Ingredients
8. How the Rule Operates
9. Exceptions / Limitations
10. Important Distinctions
11. Current-law cite (one short close)

Put **10-mark and 16-mark answer frameworks in `questionsAndAnswers`** (`marks: 10` and `marks: 16`). The UI jump buttons scroll there. Do **not** paste “How to write a 10-mark answer” / model skeleton into `study`.

New subjects: `.github/skills/add-new-subject.md`. Catalog rows use topic id `s-<n>` or `art-<n>`.


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
5. Add page-specific examples, **full** Q&A (`marks: 10` and `marks: 16`, never shortened) and exam guidance without duplicating canonical knowledge. Include every official statutory definition, illustration and explanation and teach it. Do not invent illustrations the Act does not print.
6. Add verified references and cross-links.
7. Validate and test. Click the 10-mark and 16-mark buttons on the page.

## Do not

- Put full essays in `subjects.ts`
- Create Short Version / Detailed Version UI
- Create duplicate canonical doctrine/case records
- Produce only Bare Act summaries
- Dump section numbers without explaining their meaning and application
- List case names without principles
- Omit useful examples or hypothetical application
- Invent statutory illustrations
- Put “how to write 10/16 marks” filler or model skeletons in `study`
- Copy textbooks or database commentary
- Require a backend for notes
