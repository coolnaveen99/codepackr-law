---
applyTo: "src/data/**"
---

# Legal content — Copilot / agent instructions

Follow [`.github/instructions/global-legal-content.md`](global-legal-content.md) for every law subject.

Then apply the matching subject file under [`.github/instructions/subjects/`](subjects/).

Operational SOP: [`.github/skills/legal-content-workflow.md`](../skills/legal-content-workflow.md)

Topic SOP (book standard): [`.github/skills/add-topic-notes.md`](../skills/add-topic-notes.md)

Quality model: `src/data/topics/cpc/s-32.ts`.

Depth: [`.github/instructions/student-answer-content.md`](student-answer-content.md).

Student-facing pages must read like a textbook chapter. Teach the heading on the page. Do not tell the student the page is only a digest and they should look elsewhere.

Do not ship `synthesizeCpc` / `synthesizeProvision` factory text as the finished chapter. Write `src/data/topics/<slug>/<id>.ts` for each section you touch.

## Non-negotiable

```text
RESEARCH → VERIFY → STRUCTURE → IMPLEMENT → CROSS-LINK → VALIDATE → TEST
```

1. Reuse existing architecture.
2. One Study Topic body (`study`). Full 10-mark and 16-mark Q&A.
3. Search `src/data/knowledge` before creating reusable records.
4. Never invent section numbers, citations, holdings, or official illustrations.
5. Never assume IPC X = BNS Y.
6. IPC, CrPC, IEA are not current-law subjects.
7. Original teaching. Do not copy textbooks.
8. Never put essays in `subjects.ts`.
9. Do not break existing tools.
10. `npm run lint` and `npm run build` must stay green.
11. A section page is a complete student chapter (meaning, ingredients, examples, application, full 10/16 Q&A).
12. New subjects follow `.github/skills/add-new-subject.md`.
