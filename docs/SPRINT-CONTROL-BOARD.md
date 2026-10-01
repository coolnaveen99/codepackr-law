# Sprint Control Board — CodePackr Law

**Owner:** Product / Architecture coordination  
**Applies to:** `coolnaveen99/codepackr-law` + `coolnaveen99/legal-content`  
**Roadmap position:** Phase 2 — **CLOSED** · Phase 3 not started  
**Updated:** 2026-10-01 (PA-004 decision COMPLETED — dual-read retained)

## Purpose

This is the operational sprint backlog for the current CodePackr Law platform work.

It exists to prevent:
- overlapping work;
- duplicate content migration;
- conflicting edits to shared infrastructure;
- premature large-scale content enhancement;
- unclear ownership;
- work being marked complete without evidence.

The roadmap remains the strategic source of truth. This board is the execution source of truth for the active sprint.

## Operating decisions

### 1. Current strategic position

```
Canonical content
      ↓
Stable IDs
      ↓
Validated relationships
      ↓
Manifest / versioning
      ↓
Content Gateway
      ↓
Legacy parity
      ↓
Application canonical consumption
      ↓
Phase 2 exit          ← CLOSED (PA-003, 2026-10-01)
      ↓
Research Workbench (Phase 3)  ← not started; requires scheduled PH3-001
```

### 2. Content enhancement policy

Large-scale editorial enhancement remains **DEFERRED**.

### 3. Single-owner rule

Every active task has exactly one execution owner.

### 4. Shared-file rule

Do not concurrently edit:
- `manifests/content-manifest.json`;
- core schemas;
- validation scripts;
- Content Gateway contracts;
- shared architecture documents.

### 5. WIP limit

Maximum four major workstreams may be IN PROGRESS.

## Status definitions

| Status | Meaning |
|---|---|
| BACKLOG | Identified but not yet prepared |
| READY | Definition of Ready satisfied; can be started |
| ACCEPTED | Assigned and approved for the sprint, but not started |
| IN PROGRESS | Owner is actively implementing |
| BLOCKED | Cannot proceed because a named dependency/blocker exists |
| REVIEW | Implementation complete; awaiting technical/content review |
| QA | Validation/testing in progress |
| COMPLETED | Definition of Done and evidence satisfied |
| DEFERRED | Deliberately postponed; remains visible |
| CANCELLED | Explicitly removed from roadmap/backlog |

## Verified work completed — Phase 2 foundation

| ID | Result | Evidence |
|---|---|---|
| LC-001–LC-007 | **COMPLETED** | Prior board evidence retained |
| PA-001 | **COMPLETED** | Production gateway strings + canonical fetches |
| PA-002 | **COMPLETED** | H1–H7 production PASS |
| PA-003 | **COMPLETED** | `docs/PHASE-2-EXIT-AUDIT.md` |
| PA-004 | **COMPLETED** | Decision: **no mass legacy removal**; dual-read retained — `docs/PA-004-LEGACY-REMOVAL-DECISION.md` |

## Current sprint backlog

| ID | Work | Repo | Owner | Status | Priority | Dependency |
|---|---|---|---|---|---|---|
| PA-001 | Confirm production deployment contains ContentGateway + knowledge-graph UI | codepackr-law | Deployment owner | **COMPLETED** | P0 | None |
| PA-002 | Production browser UX acceptance H1–H7 | codepackr-law | Product / legal-content owner | **COMPLETED** | P0 | PA-001 |
| PA-003 | Phase 2 exit audit and production sign-off | both | QA / Architecture | **COMPLETED** | P0 | PA-001, PA-002 |
| PA-004 | Decide and execute legacy-content removal after signed parity | codepackr-law | Architecture / Product | **COMPLETED** | P1 | PA-003 |
| PA-005 | Evaluate static/CDN mirror for canonical legal-content delivery | both | Solution Architect | **READY** | P1 | PA-003 (met) |
| PH3-001 | Phase 3 — Legal Research Workbench architecture kickoff | codepackr-law | Solution Architect | **READY** | P0 | PA-003 (met) |
| TD-001 | Commit full TopicDetail.tsx source (remove build-time restore stub) | codepackr-law | Core engineer | **READY** | P1 | None |

### PA-004 — Decision evidence (2026-10-01)

| Item | Result |
|------|--------|
| Decision document | `docs/PA-004-LEGACY-REMOVAL-DECISION.md` |
| Mass deletion executed? | **No** |
| Dual-read retained? | **Yes** (ContentGateway → canonical → legacy) |
| Canonical topics (manifest) | **326** |
| Legacy topic modules (`src/data/topics/**/*.ts`) | **~3,561** |
| Production dependency on legacy | **Yes** — H5 company indoor-management still needs legacy when canonical 404 |
| Removal criteria | Documented (coverage + parity + production spot-check + board EXEC ticket per scope) |
| Future deletion tickets | Only via new READY `PA-004-EXEC-<scope>` after criteria met |

**Verdict:** PA-004 **decision gate CLOSED**. Execution of file deletion is **not authorized** and remains blocked by coverage criteria.

### PA-002 — H1–H7 production evidence (retained)

| Check | Status |
|---|---|
| H1–H7 | **PASS** (2026-10-01) — see prior board revision / PRODUCTION-ACCEPTANCE |

### PA-003 — Phase 2 exit (retained)

Full matrix: **`docs/PHASE-2-EXIT-AUDIT.md`**

## Current verified state

- Phase 2: **CLOSED**.
- PA-001 / PA-002 / PA-003 / PA-004 (decision): **COMPLETED**.
- Legacy modules: **retained**; dual-read **required** until scoped EXEC criteria met.
- Next READY (P0): **PH3-001** Phase 3 architecture kickoff.
- Next READY (P1): **PA-005** CDN mirror evaluation; **TD-001** TopicDetail source restore.

## Dependency map

```
PA-001 → PA-002 → PA-003 (all COMPLETED)
                      ├──→ PA-004 (COMPLETED — decision only; no deletion)
                      ├──→ PA-005 (READY)
                      └──→ PH3-001 (READY)
TD-001 (READY)
```

## Active execution rules

- **Do not reopen** completed PA/LC items without regression evidence.
- **Do not delete** `src/data/topics/**` or remove legacy fallback without a new READY `PA-004-EXEC-*` ticket and criteria in the decision doc.
- **PH3-001 / PA-005:** may be scheduled; not auto-started.
- **TD-001:** preferred before large TopicDetail feature work.
- Maximum four major WIP workstreams remain in force.

## Phase 2 exit gate — CLOSED

Evidence: `docs/PHASE-2-EXIT-AUDIT.md`.

## Next phase gate

**Phase 3 — Legal Research Workbench** may be scheduled via **PH3-001**.
