# Code of Civil Procedure — subject-specific agent instructions

Read first: [`.github/instructions/global-legal-content.md`](../global-legal-content.md)

Topic SOP: [`.github/skills/add-topic-notes.md`](../../skills/add-topic-notes.md)

Quality model for every CPC section and Order: `src/data/topics/cpc/s-32.ts`.

| Field | Value |
|-------|--------|
| Subject id / slug | `cpc` |
| Name | Civil Procedure |
| Legislation | Code of Civil Procedure, 1908 (still in force) |
| Provision label | **Section / Order / Rule** |
| Notes path | `src/data/topics/cpc/<topicId>.ts` |

## Special rules

- CPC was **not** replaced by BNSS. Mention that once as a distinction if relevant. Do not make it the body of every page.
- Orders and Rules are first-class provisions.
- Do **not** leave a section on the `synthesizeCpc` template (Salem Advocate on every heading, “plaint presented / service of summons”, fake official illustrations).
- Write a dedicated file `src/data/topics/cpc/s-<n>.ts` or `o-<n>.ts`.
- Student-facing copy: never use the phrase “Bare Act”.
- Teach the actual working rule of that heading, with fact-specific examples and a classroom hypothetical.
