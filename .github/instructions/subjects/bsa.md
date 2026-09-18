# Bharatiya Sakshya Adhiniyam — subject-specific agent instructions

Read first: [`.github/instructions/global-legal-content.md`](../global-legal-content.md)

This file is **only** BSA-specific. Do not repeat global architecture here.

| Field | Value |
|-------|--------|
| Subject id / slug | `bsa` |
| Name | Evidence (BSA / Evidence Act) |
| Legislation | Bharatiya Sakshya Adhiniyam, 2023 |
| Provision label | **Section** |
| Notes path | `src/data/topics/bsa/<topicId>.ts` |

## Structure

```text
BSA → Topics → Sections → Study → Cases → Q&A → MCQs → Practice → Exam
```

Indian Evidence Act, 1872 is **historical concordance only**. Never assume `IEA X = BSA Y`.

## Special rules

- Use BSA section numbers for current-law evidence questions on or after 1 July 2024.
- Preserve IEA citations in historical judgments and older exam questions; map only when verified.
- Digital / electronic records are a BSA headline change — verify against the Act text, do not guess section numbers.
- Estoppel and res gestae already exist as doctrine topics — reuse them; do not duplicate.
