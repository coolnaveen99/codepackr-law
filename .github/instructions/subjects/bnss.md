# Bharatiya Nagarik Suraksha Sanhita — subject-specific agent instructions

Read first: [`.github/instructions/global-legal-content.md`](../global-legal-content.md)

This file is **only** BNSS-specific. Do not repeat global architecture here.

| Field | Value |
|-------|--------|
| Subject id / slug | `bnss` |
| Name | Criminal Procedure (BNSS / CrPC) |
| Legislation | Bharatiya Nagarik Suraksha Sanhita, 2023 |
| Provision label | **Section** |
| Notes path | `src/data/topics/bnss/<topicId>.ts` |
| Current notes | `arrest`, `fir-investigation`, `charge-trial`, `appeals-revision` |

## Structure

```text
BNSS → Topics → Sections → Study → Cases → Q&A → MCQs → Practice → Exam
```

This is **procedure**. Substantive offences belong on BNS. Evidence belongs on BSA.

CrPC, 1973 is **historical concordance only**. Never assume `CrPC X = BNSS Y`.

## Special rules

- Use BNSS section numbers for procedure on or after 1 July 2024.
- Preserve CrPC citations in historical judgments and older exam questions; map only when verified.
- Do not duplicate BNS offence essays here. Cross-link to BNS section topics / canonical knowledge.
- FIR, arrest, bail, charge, trial, and appeals are procedure topics — keep them on this subject.
