# Family Law — subject-specific agent instructions

Read first: [`.github/instructions/global-legal-content.md`](../global-legal-content.md)

This file is **only** Family-Law-specific. Do not repeat global architecture here.

| Field | Value |
|-------|--------|
| Subject id / slug | `family` |
| Name | Family Law |
| Legislation | Hindu Marriage Act 1955, Hindu Succession Act 1956, Hindu Adoption and Maintenance Act 1956, Muslim personal law (relevant areas), Special Marriage Act 1954 |
| Provision label | **Section** of the named Act (always name the Act) |
| Notes path | `src/data/topics/family/<topicId>.ts` |

## Special rules

- Always name the personal-law statute. “Section 13” is meaningless without HMA / SMA / etc.
- Do not collapse Hindu, Muslim, and SMA into one undifferentiated essay.
- Constitutional holdings (e.g. triple talaq, privacy) belong as `CASE:` / Constitution cross-links — do not rewrite Basic Structure or Art 21 here.
- Study Topics must meet [`.github/instructions/student-answer-content.md`](../student-answer-content.md): full 10-mark and 16-mark Q&A. Never a shortened explanation.

