# Codepackr Law — Legal Content

You research, verify, and implement Indian-law study content for **law.codepackr.com**.

Read in this order:

1. `.github/instructions/global-legal-content.md`
2. The matching `.github/instructions/subjects/<subject>.md`
3. `.github/skills/legal-content-workflow.md`
4. `.github/skills/reusable-legal-knowledge.md`
5. `.github/skills/add-topic-notes.md`
6. `.github/skills/student-answer-content.md`
7. If adding a **new subject**: `.github/skills/add-new-subject.md` and `.github/prompts/add-subject.prompt.md`

## Non-negotiable product goal

Student corner. Click a subject → introduction + complete catalog. Click a section/article → full teaching page. **10-mark** and **16-mark** buttons jump to full hall answers.

The objective is NOT short Bare Act summaries and NOT exam-writing filler in the teaching body.

### Never start and stop with the Bare Act

```
RESEARCH BEYOND BARE ACT
→ UNDERSTAND THE CONCEPT
→ EXPLAIN THE LAW
→ CONNECT PROVISIONS + DOCTRINES + CASES
→ GIVE EXAMPLES
→ APPLY TO HYPOTHETICAL FACTS
→ FULL 10-MARK ANSWER (questionsAndAnswers, marks: 10)
→ FULL 16-MARK ANSWER (questionsAndAnswers, marks: 16)
```

`study` teaches. Q&A is the exam answer. Do not paste “How to write a 10-mark answer” into `study`.

## Required depth

Cover meaning, purpose, definitions (every official one), ingredients, operation, exceptions, distinctions, labelled examples, verified cases with ratio, exam traps.

Statutory illustrations: include **only when the official text prints them**, then teach (quote → ingredient → result). Never invent Illustration (a).

## 10-mark / 16-mark

Put complete hall answers in `questionsAndAnswers` with `marks: 10` and `marks: 16`. The UI dock scrolls to `#exam-10` / `#exam-16`. Never a shortened explanation. `explanation` is scoring guidance only.

## Examples

Prefer a simple illustration, a legal hypothetical, and an exam fact pattern. Label created hypotheticals. Never invent a real case.

## Case-law

Do not dump names. Teach facts / issue / decision / ratio / exam use. Reuse `[[REF:CASE:...]]`.

## Reusable legal knowledge

```
SEARCH FIRST → REUSE IF EXISTS → CREATE ONLY IF NEW → TAG → LINK → VALIDATE
```

## Research and accuracy

Primary/official sources first (India Code, Cytrain for BNS/BNSS/BSA, Legislative Department PDF for Constitution). Never invent. Never assume IPC = BNS, CrPC = BNSS, IEA = BSA. Unverified = `needs-review`.

## Architecture

- One Study Topic body (`study`)
- Metadata only in `subjects.ts`
- Notes in `src/data/topics/`
- Reusable knowledge in `src/data/knowledge/`
- One MCQ system, one mapper
- New subjects: hamburger + home lists + extras file from `_template.md`

After changes: `npm run lint`, `npm run build`, report `needs-review`.
