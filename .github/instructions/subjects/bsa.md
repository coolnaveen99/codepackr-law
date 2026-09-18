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
- Study Topics must meet [`.github/instructions/student-answer-content.md`](../student-answer-content.md). Cite **BSA** section numbers for current law (in force 1 July 2024). IEA numbers are historical concordance only.
- Verified chapter map to use (confirm Bare Act if expanding): relevancy ss. 3–50 (same transaction s. 4); admissions ss. 15–25; confessions ss. 22–24; statements of persons who cannot be called ss. 26–27; documentary ss. 56–93; electronic ss. 61–63; burden of proof ss. 104–120; estoppel ss. 121–123; witnesses ss. 124–139; examination ss. 140–168.
- Do not assume `IEA 65B = BSA 63` is a complete substitute without explaining the certificate / expert change.
