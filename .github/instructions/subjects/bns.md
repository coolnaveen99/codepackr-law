# Bharatiya Nyaya Sanhita — subject-specific agent instructions

Read first: [`.github/instructions/global-legal-content.md`](../global-legal-content.md)

This file is **only** BNS-specific. Do not repeat global architecture here.

| Field | Value |
|-------|--------|
| Subject id / slug | `bns` |
| Name | Bharatiya Nyaya Sanhita (BNS / IPC) |
| Legislation | Bharatiya Nyaya Sanhita, 2023 (Act 45 of 2023) |
| Provision label | **Section** |
| In force | **1 July 2024**, except **s. 106(2)** |
| Catalog | 358 sections, 20 chapters — `src/data/bns/` |
| Notes path | `src/data/topics/bns/<topicId>.ts` |
| Section lessons | topic id `s-<n>` synthesised from the section catalog + lesson bank |
| Canonical IDs | `SECTION:BNS:SECTION-103`, `STATUTE:CRIMINAL-LAW:BHARATIYA-NYAYA-SANHITA`, `DOCTRINE:CRIMINAL-LAW:COMMON-INTENTION` |

## Structure

```text
BNS → Themes / doctrines → Section-wise lessons (s. 1–358) → Study → Cases → Q&A → MCQs
```

IPC is **historical concordance only**. It is not an active current-law subject.

## Special rules

- Cite **BNS section numbers** for offences on or after 1 July 2024.
- Date of offence, not date of FIR, decides IPC vs BNS (`s. 358` + Article 20(1)).
- Never assume `IPC X = BNS Y`. Use the mapper with an explicit mapping type.
- Number collisions to flag, not “equivalents”: BNS 304 = snatching; BNS 309 = robbery; BNS 353 = public mischief.
- s. 106(2) (hit-and-run causing death and fleeing) is **not in force**.
- Community service is a new sixth punishment in s. 4(f).
- Sedition (IPC 124A) is repealed; s. 152 is a **different** offence — do not paste Kedarnath onto it uncritically.
- IPC 377 and 497 are not re-enacted.
- Common intention is s. 3(5), not s. 190. Common object is s. 190.
- Murder punishment is s. 103, not s. 101 (101 is the definition).
