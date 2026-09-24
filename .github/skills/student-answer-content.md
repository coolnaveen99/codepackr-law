# Skill: Student Answer & Deep Topic Content

**Full standard:** [`.github/instructions/student-answer-content.md`](../instructions/student-answer-content.md)

**Purpose:** CodePackr Law is primarily a law-student learning platform. Its study content must help a student understand a topic deeply and write a strong **10-mark or 16-mark examination answer**, not merely read a Bare Act summary.

## Core principle

```
UNDERSTAND → CONNECT → APPLY → WRITE → REVISE → PRACTICE
```

Never reduce a topic to:

```
BARE ACT → SECTION SUMMARY → FEW BULLETS
```

The Bare Act is the **legal source layer**, not the complete educational layer.

## Mandatory research-first rule

Before drafting a topic, research beyond the bare provision:

1. Primary/official law
2. Judicial interpretation
3. Reliable legal databases
4. Reputable legal news (context only)
5. Academic/educational sources (doctrine and history — not as Bare Act text)

Do not start writing merely because a section was found.

## Mandatory topic depth

Every substantive Study Topic should answer WHAT, WHY, HOW, WHEN, WHY NOT, EXCEPTIONS, WHAT COURTS SAID, HOW IT APPLIES, and HOW TO WRITE IT.

Use existing `TopicContent` fields:

- `study` — teaching body (meaning, ingredients, exceptions). **Not** exam-writing filler.
- `glance`, `sections`, `provisions`
- `examples`, `hypotheticals`, `distinctions`, `misconceptions`
- `cases` (teach ratio, do not dump names)
- `questionsAndAnswers` with **`marks: 10` and `marks: 16`** — full hall answers; this is what the jump buttons open

Do not rely on `examFrameworks` / `answerSkeleton` as the student-facing 10/16 content. Those lists were stripped from the study page. The dock buttons only find Q&A items.

**Q&A is never a short version.** `questionsAndAnswers[].answer` must be a complete 10-mark or 16-mark examination answer (introduction, meaning, ingredients, illustration mapped to an ingredient, exception, application, conclusion). `explanation` is extra scoring guidance, not a substitute for a tiny answer.

Statutory **definitions, illustrations and explanations** must be included on the Study Topic **when the official text prints them**, and then taught. Do not dump the Bare Act as the whole page. Do not invent Illustration (a) if the statute has none.

Adding a whole new subject: `.github/skills/add-new-subject.md`.


Not every heading is required on every topic. Do not omit important material merely to make content shorter. Do not pad.

## Quality bar

Reject content that is only a Bare Act summary, only section numbers, only case names, too short for a 10-mark answer, missing application, or unsupported.

If unverified: `needs-review`. Never invent provisions, citations, holdings, or mappings.

## Implementation rule

Do not create a second content architecture. Extend the existing Study Topic, knowledge graph, Q&A and MCQ systems.
