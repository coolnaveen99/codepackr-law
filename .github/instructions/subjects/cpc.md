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
