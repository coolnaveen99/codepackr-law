# Indian Contract Act — subject-specific agent instructions

Read first: [`.github/instructions/global-legal-content.md`](../global-legal-content.md)

This file is **only** Contract-specific. Do not repeat global architecture here.

| Field | Value |
|-------|--------|
| Subject id / slug | `contract` |
| Name | Law of Contract |
| Legislation | Indian Contract Act, 1872 (still in force — **not** replaced by the 2023 criminal-law reforms) |
| Provision label | **Section** |
| Notes path | `src/data/topics/contract/<topicId>.ts` |

## Special rules

- This is **current law**. Do not treat it as historical and do not “migrate” it to BNS/BNSS/BSA.
- Related commercial statutes (Sale of Goods, Partnership, NI Act, Specific Relief) are separate — do not fold them into Contract topics unless the topic already says so.
- Reuse canonical maxims (`consensus ad idem`, etc.) from `src/data/knowledge` when they exist.
