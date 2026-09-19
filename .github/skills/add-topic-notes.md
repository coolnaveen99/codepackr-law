# Skill: Add Topic Learning Notes (Lazy-Loaded)

**Mandatory SOP** for one section / article / topic.

The student must feel they opened a **short textbook chapter**, not a heading list and not a copy of the statute.

Quality model: `src/data/topics/cpc/s-32.ts` (Section 32 CPC). Match that depth before shipping any other catalog page.

Global rules: [`.github/instructions/global-legal-content.md`](../instructions/global-legal-content.md).
Depth: [`.github/skills/student-answer-content.md`](student-answer-content.md).
Subject extras: [`.github/instructions/subjects/`](../instructions/subjects/).

## Architecture

| Layer | Location | What goes here |
|-------|----------|----------------|
| Metadata only | `src/data/subjects.ts` | id, name, type, range, note, keywords, highYield, cluster |
| Full chapter | `src/data/topics/<subjectSlug>/<topicId>.ts` | `study` plus examples, hypotheticals, distinctions, full 10/16 Q&A, verified cases |
| Shared graph | `src/data/knowledge/` | Reuse with `[[REF:TYPE:CATEGORY:SLUG]]` |

Never put essays in `subjects.ts`.

Do **not** tell the student to “read the statute instead”. Teach the heading on the page. Internal data files may still store official text. Student-facing copy must not use the phrase “Bare Act”.

## Book standard (reject the page if any fail)

- `study` is original teaching for **this** heading only. Neighbouring sections are distinctions, not copy-paste.
- No factory template: “why this scores marks”, “heading fails”, “CPC not replaced by BNSS” as the whole note, Salem Advocate as a stock case on every CPC section, “plaint presented / service of summons” on a section that is not about institution.
- No exam-writing filler inside `study` (“a 10-mark question wants…”). That lives only in `questionsAndAnswers`.
- At least two **fact-specific** educational examples for this heading (one applies, one fails) plus one classroom hypothetical.
- Official printed illustrations of the statute: include and teach only when the statute actually prints them. Never invent “Illustration (a)” / “Illustration — applies” as if official.
- Cases: only verified name + citation + principle tied to **this** heading. If none are verified, leave `cases` empty. Never recycle one judgment across unrelated sections.
- 10-mark and 16-mark answers must explain this heading. They must not be a second copy of a template.
- Length: a catalog section should read like 4–8 printed pages of a student book, not a 12-line digest.

## Structure of `study`

1. Topic at a Glance
2. Introduction
3. Meaning and Concept
4. Purpose / Why the Rule Exists
5. Definitions / Key Terms
6. Legal Foundation
7. Essential Elements
8. How the Rule Operates (steps)
9. Exceptions / Limits
10. Distinctions from neighbours
11. Current-law close (short, accurate)

## Steps

0. Search `src/data/knowledge` first.
1. Confirm the catalog row (`s-<n>` / `art-<n>`).
2. Write or replace `src/data/topics/<subjectSlug>/<topicId>.ts`.
3. Prefer a hand-written file over `synthesizeCpc` / `synthesizeProvision`. Those generators are fallbacks, not the finished chapter.
4. Full Q&A with `marks: 10` and `marks: 16`.
5. `npm run lint` and `npm run build`.

## Do not

- Ship the synthesizer template as the study page
- Use the words “Bare Act” on the student page
- Invent official illustrations or judgments
- Batch-generate every section of an Act in one pass
