# \<Subject name\> — subject-specific agent instructions

Read first: [`.github/instructions/global-legal-content.md`](../global-legal-content.md)

This file is **only** this subject. Do not copy the global architecture here.

SOP for adding the subject: [`.github/skills/add-new-subject.md`](../../skills/add-new-subject.md)

| Field | Value |
|-------|--------|
| Subject id / slug | `<slug>` |
| Name | `<full name>` |
| Short name | `<hamburger / card label>` |
| Legislation | `<current Act, year, Act number>` |
| Provision label | **Section** / **Article** / **Order** / **Principle** (use the real label) |
| In force | `<date or “still in force”>` |
| Kind | `catalog` or `theme` |
| Catalog | `<N sections, N chapters>` — `src/data/<slug>/` (omit if theme-only) |
| Notes path | `src/data/topics/<slug>/<topicId>.ts` |
| Canonical IDs | `<TYPE:CATEGORY:SLUG examples>` |

## Structure

```text
<Subject> → Introduction → Themes / doctrines → [every section/article] → Study page → Q&A (10 / 16)
```

## Special rules

- Cite **current** provision numbers. Historical Acts are concordance only.
- Never assume a 1:1 map from a repealed Act.
- Study Topics must meet [`.github/instructions/student-answer-content.md`](../student-answer-content.md).
- Every catalog row is a **full student study note**: meaning, ingredients, official illustrations when printed, labelled examples, full 10-mark and 16-mark Q&A. Never a Bare Act dump. Never a shortened Q&A.
- Do not put “how to write 10/16 marks” filler in `study`.
- Reuse canonical doctrines/cases via `[[REF:]]`. Do not duplicate them.

## Official source

- Primary: India Code / Gazette / Legislative Department (name the edition).
- Do not invent missing sections or illustrations.
