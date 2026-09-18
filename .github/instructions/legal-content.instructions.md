---
applyTo: "src/data/**"
---

# Legal content — Copilot / agent instructions

Follow [`.github/instructions/global-legal-content.md`](global-legal-content.md) for every law subject.

Then apply the matching subject file under [`.github/instructions/subjects/`](subjects/) (constitution, bns, bnss, bsa, cpc, contract, family, torts, petition-formats). Subject files contain **only** subject-specific rules.

Operational SOP: [`.github/skills/legal-content-workflow.md`](../skills/legal-content-workflow.md)

Depth standard: [`.github/instructions/student-answer-content.md`](student-answer-content.md) — do **not** stop at a Bare Act summary. Teach concept, elements, exceptions, cases, examples, application, and 10-mark / 16-mark answer frameworks.

## Non-negotiable

```text
RESEARCH → VERIFY → STRUCTURE → IMPLEMENT → CROSS-LINK → VALIDATE → TEST
```

1. Reuse existing architecture. Do not create a second subject, topic, MCQ, case, or mapper system.
2. One Study Topic body (`study`). No Short/Detailed UI.
3. Canonical IDs are `TYPE:CATEGORY:SLUG`. Search `findExisting` in `src/data/knowledge` before creating anything reusable.
4. Never invent article/section numbers, citations, holdings, amendments, mappings, or source URLs. If unverified: `needs-review`.
5. Never assume `IPC X = BNS Y` (or CrPC/BNSS, IEA/BSA). Mapping types only; historical labels stay historical.
6. IPC, CrPC, and the Indian Evidence Act are not active current-law subjects.
7. Original CodePackr explanations and MCQs. Do not copy textbooks or database commentary.
8. Never put full essays in `subjects.ts`. Notes live in `src/data/topics/<slug>/<id>.ts`.
9. Do not break existing subjects, MCQs, search, practice, or exam flows.
10. `npm run lint` and `npm run build` must stay green.
