# Sprint Control Board — CodePackr Law

**Owner:** Product / Architecture coordination  
**Applies to:** `coolnaveen99/codepackr-law` + `coolnaveen99/legal-content`  
**Roadmap position:** Phase 2 — **CLOSED** · Phase 3 implementation started  
**Updated:** 2026-10-01 (PH3-020 COMPLETED — Workbench form fields expanded)

## Verified completed

| ID | Result | Evidence |
|---|---|---|
| LC-001–LC-007 | **COMPLETED** | Prior evidence |
| PA-001–PA-005 | **COMPLETED** | Prior board + docs |
| PH3-001 | **COMPLETED** | Architecture kickoff doc |
| PH3-010 | **COMPLETED** | `src/lib/researchSession.ts` + Workbench persistence |
| TD-001 | **COMPLETED** | Full `TopicDetail.tsx` on main |
| PH3-020 | **COMPLETED** | Workbench UI: court level, date range, subject, Act, section; note + unit test |

## Current sprint backlog

| ID | Work | Status | Priority |
|---|---|---|---|
| TD-001 | Commit full TopicDetail.tsx source | **COMPLETED** | P1 |
| PH3-010 | ResearchSession types + localStorage | **COMPLETED** | P0 |
| PH3-020 | Expand Workbench form fields | **COMPLETED** | P0 |
| PH3-030 | Authority matrix column expansion | **READY** | P0 |
| PH3-040 | Research note polish / export | **BACKLOG** | P0 |
| PH3-050 | ContentGateway authority suggestions | **BACKLOG** | P0 |
| PA-005b | CDN mirror implementation | **BACKLOG** | P2 |

### PH3-020 — COMPLETED (2026-10-01)

| Check | Result |
|-------|--------|
| Court level select | **Yes** (SC / HC / District / Tribunal / Trial / Appellate) |
| Date from / date to | **Yes** (`type="date"`) |
| Subject, Act, Section separate inputs | **Yes** |
| Session model fields | Already on `ResearchQuestion` (PH3-010) |
| Research note includes new fields | **Yes** (subject/act/section lines) |
| Unit test | `tests/research-session.test.ts` |
| Privacy | Still browser-local only; no URL/analytics case facts |

## Next READY

**PH3-030** — Expand authority matrix columns (date, paragraph, treatment, source) to match roadmap matrix.
