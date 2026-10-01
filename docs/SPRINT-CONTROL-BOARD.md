# Sprint Control Board — CodePackr Law

**Owner:** Product / Architecture coordination  
**Applies to:** `coolnaveen99/codepackr-law` + `coolnaveen99/legal-content`  
**Roadmap position:** Phase 2 — **CLOSED** · Phase 3 — **kickoff complete** (implementation not auto-started)  
**Updated:** 2026-10-01 (PH3-001 COMPLETED)

## Purpose

Operational sprint backlog for CodePackr Law. Roadmap is strategic source of truth; this board is execution source of truth.

## Strategic position

```
Phase 2 exit          ← CLOSED (PA-003)
      ↓
PH3-001 architecture kickoff  ← COMPLETED (2026-10-01)
      ↓
Phase 3 implementation tickets (PH3-010+)  ← not started until scheduled
```

## Verified completed work

| ID | Result | Evidence |
|---|---|---|
| LC-001–LC-007 | **COMPLETED** | Prior evidence |
| PA-001 | **COMPLETED** | Production gateway |
| PA-002 | **COMPLETED** | H1–H7 PASS |
| PA-003 | **COMPLETED** | `docs/PHASE-2-EXIT-AUDIT.md` |
| PA-004 | **COMPLETED** | Decision: retain dual-read — `docs/PA-004-LEGACY-REMOVAL-DECISION.md` |
| PH3-001 | **COMPLETED** | Architecture kickoff — `docs/architecture/phase-3-research-workbench-kickoff.md` |

## Current sprint backlog

| ID | Work | Repo | Owner | Status | Priority | Dependency |
|---|---|---|---|---|---|---|
| PA-001 | Production ContentGateway deployment confirmation | codepackr-law | Deployment | **COMPLETED** | P0 | — |
| PA-002 | Production UX H1–H7 | codepackr-law | Product | **COMPLETED** | P0 | PA-001 |
| PA-003 | Phase 2 exit audit | both | QA / Architecture | **COMPLETED** | P0 | PA-001, PA-002 |
| PA-004 | Legacy removal decision | codepackr-law | Architecture / Product | **COMPLETED** | P1 | PA-003 |
| PH3-001 | Phase 3 Research Workbench architecture kickoff | codepackr-law | Solution Architect | **COMPLETED** | P0 | PA-003 |
| PA-005 | Evaluate static/CDN mirror for legal-content | both | Solution Architect | **READY** | P1 | PA-003 |
| TD-001 | Commit full TopicDetail.tsx (remove build-time restore) | codepackr-law | Core engineer | **READY** | P1 | — |
| PH3-010 | ResearchSession types + localStorage persistence | codepackr-law | Core engineer | **BACKLOG** | P0 | PH3-001 |
| PH3-020 | Expand Workbench form fields (court, dates, Act, section) | codepackr-law | Core engineer | **BACKLOG** | P0 | PH3-010 |
| PH3-030 | Authority matrix + full verification status model | codepackr-law | Core engineer | **BACKLOG** | P0 | PH3-010 |
| PH3-040 | Research note sections (roadmap-aligned) | codepackr-law | Core engineer | **BACKLOG** | P0 | PH3-010 |
| PH3-050 | ContentGateway suggest topics/provisions panel | codepackr-law | Core engineer | **BACKLOG** | P0 | PH3-010 |

### PH3-001 — Kickoff evidence (2026-10-01)

| Item | Result |
|------|--------|
| Architecture doc | `docs/architecture/phase-3-research-workbench-kickoff.md` |
| Baseline inventory | Existing `ResearchWorkbench.tsx` + tools registry documented |
| Gaps vs roadmap | Form fields, matrix columns, Gateway assists, cross-tool hand-off |
| Session model | Proposed `ResearchSession` types (implement in PH3-010) |
| Privacy / non-goals | Recorded |
| Full Phase 3 product exit | **Not claimed** — requires PH3-010+ and PH3-100 exit audit |

## Current verified state

- Phase 2: **CLOSED**.
- PH3-001: **COMPLETED** (docs only; no Phase 3 feature code in this task).
- Phase 3 implementation: **not started** (BACKLOG tickets).
- Dual-read legacy: **retained** (PA-004).
- Next READY: **PA-005**, **TD-001** (promote PH3-010 when Product schedules Phase 3 build).

## Active execution rules

- Do not mark Phase 3 **product** complete from kickoff docs alone.
- Do not auto-start PH3-010+ until status is READY/ACCEPTED.
- Do not delete legacy topics without PA-004-EXEC criteria.
- Max four major WIP workstreams.

## Next actions

1. Schedule **PH3-010** (session model) when Phase 3 build starts, **or**
2. Take **PA-005** / **TD-001** if prioritised over Workbench implementation.
