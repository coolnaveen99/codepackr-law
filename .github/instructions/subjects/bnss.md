# Bharatiya Nagarik Suraksha Sanhita — subject-specific agent instructions

Read first: [`.github/instructions/global-legal-content.md`](../global-legal-content.md)

This file is **only** BNSS-specific. Do not repeat global architecture here.

| Field | Value |
|-------|--------|
| Subject id / slug | `bnss` |
| Name | Criminal Procedure (BNSS / CrPC) |
| Legislation | Bharatiya Nagarik Suraksha Sanhita, 2023 |
| Provision label | **Section** |
| Catalog | 531 sections, 39 chapters — `src/data/bnss/` |
| Notes path | `src/data/topics/bnss/<topicId>.ts` |
| Section lessons | topic id `s-<n>` synthesised from the section catalog |
| Current essays | `arrest`, `fir-investigation`, `bail`, `charge-trial`, `appeals-revision`, `bnss-crpc-map`, `doctrine-speedy-trial` |

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
- Study Topics must meet [`.github/instructions/student-answer-content.md`](../student-answer-content.md). Cite **BNSS** section numbers for procedure on or after 1 July 2024.
- Verified teaching map: FIR s. 173 (old 154); arrest s. 35 (old 41, notice folded in); how-made s. 43; remand s. 187 (old 167); cognizance s. 210 (old 190); Sessions charge ss. 250–251; bail ss. 478–483 (old 436–439); anticipatory s. 482 (old 438); inherent s. 528 (old 482). Do not treat BNSS 482 as inherent power.
- Never assume `CrPC X = BNSS Y`.
