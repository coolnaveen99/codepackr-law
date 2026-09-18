---
applyTo: "src/data/**"
---

# Legal content — Copilot / agent instructions

Follow [`.github/instructions/global-legal-content.md`](global-legal-content.md) for every law subject.

Then apply the matching subject file under [`.github/instructions/subjects/`](subjects/) (constitution, bns, bnss, bsa, cpc, contract, family, torts, petition-formats, or a new extras file from `_template.md`). Subject files contain **only** subject-specific rules.

Operational SOP: [`.github/skills/legal-content-workflow.md`](../skills/legal-content-workflow.md)

New subject SOP: [`.github/skills/add-new-subject.md`](../skills/add-new-subject.md)

Depth standard: [`.github/instructions/student-answer-content.md`](student-answer-content.md) — do **not** stop at a Bare Act summary. Teach concept, elements, exceptions, cases, examples, application. Put **full** 10-mark and 16-mark answers in `questionsAndAnswers` with `marks: 10 | 16` (jump buttons). Never a shortened Q&A. Never dump “how to write 10/16 marks” into `study`.

## Non-negotiable

```text
RESEARCH → VERIFY → STRUCTURE → IMPLEMENT → CROSS-LINK → VALIDATE → TEST
```

1. Reuse existing architecture. Do not create a second subject, topic, MCQ, case, or mapper system.
2. One Study Topic body (`study`). No Short/Detailed UI. **Q&A answers are full 10-mark / 16-mark answers — never a shortened explanation.**
3. Canonical IDs are `TYPE:CATEGORY:SLUG`. Search `findExisting` in `src/data/knowledge` before creating anything reusable.
4. Never invent article/section numbers, citations, holdings, amendments, mappings, or source URLs. If unverified: `needs-review`.
5. Never assume `IPC X = BNS Y` (or CrPC/BNSS, IEA/BSA). Mapping types only; historical labels stay historical.
6. IPC, CrPC, and the Indian Evidence Act are not active current-law subjects.
7. Original CodePackr explanations and MCQs. Do not copy textbooks or database commentary. Statutory illustrations and definitions from the Act **must be included and taught**, not dumped and not omitted.
8. Never put full essays in `subjects.ts`. Notes live in `src/data/topics/<slug>/<id>.ts`.
9. Do not break existing subjects, MCQs, search, practice, or exam flows.
10. `npm run lint` and `npm run build` must stay green.
11. A section/article page is a complete student study note (meaning, ingredients, every official statutory illustration/definition/explanation, application, full 10-mark and 16-mark Q&A). **Never ship a Bare Act dump as the Study Topic.**
12. New subjects follow `.github/skills/add-new-subject.md` (hamburger, intro, catalog or themes, icon).
