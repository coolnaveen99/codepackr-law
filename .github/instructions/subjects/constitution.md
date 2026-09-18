# Constitution of India — subject-specific agent instructions

Read first: [`.github/instructions/global-legal-content.md`](../global-legal-content.md)

This file is **only** Constitution-specific. Do not repeat global architecture here.

| Field | Value |
|-------|--------|
| Subject id / slug | `constitution` |
| Name | Constitutional Law |
| Legislation | Constitution of India |
| Provision label | **Article** (also Part, Schedule, Constitutional Amendment) |
| Current through | **106th Amendment (2023)** — Nari Shakti Vandan Adhiniyam |
| Notes path | `src/data/topics/constitution/<topicId>.ts` |
| Provision catalog | `src/data/constitution/articles.ts` |
| Amendments | `src/data/constitution/amendments.ts` (1–106) |
| Cases | `src/data/constitution/cases.ts` |
| Canonical IDs | `ARTICLE:CONSTITUTION:ARTICLE-21`, `DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE`, `STATUTE:CONSTITUTION:AMENDMENT-106` |

## Structure

- Themes / doctrines first (Preamble, Fundamental Rights, DPSPs, basic structure, amendment).
- **Article-wise lessons** (`art-14`, `art-21`, `art-368`, …) grouped by cluster on the subject page.
- Dedicated notes override the catalog; otherwise `loadTopicContent` synthesises from `articles.ts`.

## Special rules

- Provision terminology is **Article**, not Section.
- Do not treat a pending Bill (including any “131st”) as passed. Current last amendment is the **106th**.
- Basic Structure, eclipse, severability, pith and substance, colourable legislation already exist as canonical doctrines — `[[REF:]]` them.
- Parts III and IV wrap to the FR / DPSP hub topics. Do not duplicate those essays on each article page.
- Historical cases stay labeled as cases; they are not “amendments”.
