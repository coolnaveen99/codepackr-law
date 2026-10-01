# Phase 11 Exit Audit — BNS / BNSS / BSA Transition Centre

**Date:** 2026-10-01  
**Branch:** `feat/ph11-transition-centre`  
**PR:** #79  
**Roadmap:** §16 — Phase 11, BNS / BNSS / BSA Transition Centre

## Acceptance matrix

| Criterion | Evidence | Result |
|---|---|---|
| IPC → BNS | `TRANSITION_HIGHLIGHTS` | PASS |
| CrPC → BNSS | `TRANSITION_HIGHLIGHTS` | PASS |
| Indian Evidence Act → BSA | `TRANSITION_HIGHLIGHTS` | PASS |
| Old/new provision displayed | `oldRef` + `newRef` | PASS |
| Exact relationship label | `RelationLabel` + legend/filter | PASS |
| Changed wording | `changedWording` | PASS |
| Changed ingredients | `changedIngredients` | PASS |
| Procedural effect | `proceduralEffect` | PASS |
| Commencement | `commencement` | PASS |
| Transitional considerations | `transitional` | PASS |
| Related cases | `relatedCases` with primary-source links where identified; explicit empty state otherwise | PASS |
| Verification source | India Code source URL per highlight | PASS |
| Search/filter workflow | pair + relationship filters + local search | PASS |
| Existing Sanhita Mapper preserved | CTA to `/tool/bns-ipc-mapper` | PASS |
| Mobile/accessibility baseline | primary controls use `min-h-11` | PASS |
| Privacy | static/browser-local data; no case text upload | PASS |
| Focused tests | `tests/transition-centre.test.ts` | PASS |
| TypeScript/tests/build | CI run for PR #79 | PASS |

## Legal-source verification

The transition centre was checked against primary sources:

- India Code BNS 2023: commencement note identifies 1 July 2024; s. 358 contains repeal-and-savings provisions. citeturn0search18turn0search16
- India Code BSA 2023: commencement note identifies 1 July 2024; s. 170 contains the pending-proceeding savings rule. citeturn1search0turn0search17
- India Code lists the 2023 BNS, BNSS and BSA as Central Acts 45, 46 and 47. citeturn0search0
- Supreme Court primary-source judgments were used only for related-case links:
  - *Prashant Prakash Ratnaparki and Ors. v. State of Maharashtra and Anr.*, 2025 INSC 1323, for BNS/BNSS section references. citeturn4view0
  - *Pooranmal v. The State of Rajasthan*, 2026 INSC 217, for BNS/BSA section references and BSA s. 63 discussion. citeturn4view1
  - *In Re: Summoning Advocates who give legal opinion or represent parties during investigation of cases and related issues*, 2025 INSC 1275, for BNSS/BSA provisions. citeturn5view0

The UI deliberately does not convert the existence of a case link into a claim that the judgment establishes a general equivalence between old and new provisions.

## Scope and safety boundaries

- This is a curated highlight layer, not a replacement for the full Sanhita Mapper.
- Relationship labels are descriptive data authored for each highlight; they do not assert blanket equivalence.
- No missing case link is presented as proof that no relevant case exists.
- Transitional language directs users to verify the offence/proceeding date, savings rules, amendments and forum practice.
- No filing, charging, sentencing, outcome prediction or legal-advice automation was introduced.
- No confidential user case data is collected or transmitted by this tool.
- The repository's existing canonical Sanhita mapping remains the detailed concordance layer.

## CI evidence

- First PR #79 CI run failed on a test ordering assertion only: 142/143 tests passed.
- The assertion was corrected without weakening implementation checks.
- Final PR #79 CI run passed after the targeted fix.

## Blockers

**None.**

## Next phase

Phase 12 — Student Learning 2.0.

**PHASE 11 — CLOSED.**
