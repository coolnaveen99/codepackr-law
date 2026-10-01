# Sprint Control Board — CodePackr Law

**Owner:** Product / Architecture coordination  
**Applies to:** `coolnaveen99/codepackr-law` + `coolnaveen99/legal-content`  
**Roadmap position:** Phase 2 — **CLOSED** · Phase 3 implementation started (PH3-010)  
**Updated:** 2026-10-01 (PH3-010 COMPLETED)

## Purpose

Operational sprint backlog. Roadmap = strategic SoT; this board = execution SoT.

## Verified completed

| ID | Result | Evidence |
|---|---|---|
| LC-001–LC-007 | **COMPLETED** | Prior evidence |
| PA-001–PA-005 | **COMPLETED** | Prior board + audit/decision/eval docs |
| PH3-001 | **COMPLETED** | `docs/architecture/phase-3-research-workbench-kickoff.md` |
| PH3-010 | **COMPLETED** | `src/lib/researchSession.ts` + Workbench localStorage wire-up |

## Current sprint backlog

| ID | Work | Status | Priority |
|---|---|---|---|
| PH3-001 | Phase 3 Research Workbench architecture kickoff | **COMPLETED** | P0 |
| PH3-010 | ResearchSession types + localStorage persistence | **COMPLETED** | P0 |
| TD-001 | Commit full TopicDetail.tsx source | **BLOCKED** | P1 |
| PA-005b | Implement content CDN/mirror (if scheduled) | **BACKLOG** | P2 |
| PH3-020 | Expand Workbench form (court level, dates, Act, section fields in UI) | **READY** | P0 |
| PH3-030 | Authority matrix full columns (paragraph, treatment, source) | **BACKLOG** | P0 |
| PH3-040 | Research note polish | **BACKLOG** | P0 |
| PH3-050 | ContentGateway suggest topics/provisions panel | **BACKLOG** | P0 |

### PH3-010 — evidence (2026-10-01)

| Item | Result |
|------|--------|
| Types module | `src/lib/researchSession.ts` — `ResearchSession`, `ResearchQuestion`, `IssueSet`, `AuthorityRow`, `VerificationStatus` |
| Storage key | `cp-law:research:v1` via existing `CP_LAW_NS.research` / `localStore` |
| API | `loadResearchSession`, `saveResearchSession`, `clearResearchSession`, `researchNoteFromSession` |
| UI | `ResearchWorkbench` loads/saves session on change; clear session; expanded verification statuses |
| Privacy | Browser-local only; no URL/analytics payload for session body |
| Commits | `083b47f1` / `5767d1eb` / `b7d57fc9` |

### TD-001 — still blocked

Large-file commit of `TopicDetail.tsx` still requires local human push (see prior board notes). Hybrid restore remains on main.

## Active rules

- Next Phase 3 build ticket: **PH3-020** (READY).
- Do not mark Phase 3 product exit complete until PH3-100.
- Do not delete legacy topics (PA-004).
