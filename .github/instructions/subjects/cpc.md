# Code of Civil Procedure — subject-specific agent instructions

Read first: [`.github/instructions/global-legal-content.md`](../global-legal-content.md)

This file is **only** CPC-specific. Do not repeat global architecture here.

| Field | Value |
|-------|--------|
| Subject id / slug | `cpc` |
| Name | Civil Procedure |
| Legislation | Code of Civil Procedure, 1908 (still in force) |
| Provision label | **Section / Order / Rule** |
| Notes path | `src/data/topics/cpc/<topicId>.ts` |

## Special rules

- CPC was **not** replaced by BNSS. BNSS is criminal procedure. Keep them separate.
- Orders and Rules are first-class provisions (e.g. Order VII, Order XXXIX). Do not flatten everything to “section”.
- Res judicata is a canonical doctrine topic — reuse it.
- Study Topics must meet [`.github/instructions/student-answer-content.md`](../student-answer-content.md): full 10-mark and 16-mark Q&A (`marks: 10 | 16`). Never a Bare Act dump. Never a shortened Q&A.
- This subject is **theme-first** today. If adding a complete Orders/sections catalog, follow [`.github/skills/add-new-subject.md`](../../skills/add-new-subject.md) (catalog kind) and keep CPC terminology (Section / Order / Rule).

