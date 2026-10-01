# Sprint Control Board — CodePackr Law

**Owner:** Product / Architecture coordination  
**Applies to:** `coolnaveen99/codepackr-law` + `coolnaveen99/legal-content`  
**Roadmap position:** Phase 2 — **CLOSED** · Phase 3 not started  
**Updated:** 2026-10-01 (PA-005 CDN mirror evaluation COMPLETED)

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
| PA-004 | **COMPLETED** (decision only) | `docs/PA-004-LEGACY-REMOVAL-DECISION.md` — dual-read retained; no mass deletion |
| PA-005 | **COMPLETED** | `docs/PA-005-CDN-MIRROR-EVALUATION.md` — keep GitHub raw near-term |

## Current sprint backlog

| ID | Work | Repo | Owner | Status | Priority | Dependency |
|---|---|---|---|---|---|---|
| PA-001 | Confirm production deployment contains ContentGateway + knowledge-graph UI | codepackr-law | Deployment owner | **COMPLETED** | P0 | None |
| PA-002 | Production browser UX acceptance H1–H7 | codepackr-law | Product / legal-content owner | **COMPLETED** | P0 | PA-001 |
| PA-003 | Phase 2 exit audit and production sign-off | both | QA / Architecture | **COMPLETED** | P0 | PA-001, PA-002 |
| PA-004 | Decide legacy-content removal policy | codepackr-law | Architecture / Product | **COMPLETED** | P1 | PA-003 |
| PA-005 | Evaluate static/CDN mirror for canonical legal-content delivery | both | Solution Architect | **COMPLETED** | P1 | PA-003 |
| PA-005b | Implement content CDN/mirror (only if Product schedules) | both | Solution Architect | **BACKLOG** | P2 | PA-005 |
| PH3-001 | Phase 3 — Legal Research Workbench architecture kickoff | codepackr-law | Solution Architect | **READY** | P0 | PA-003 (met) |
| TD-001 | Commit full TopicDetail.tsx source (remove build-time restore stub) | codepackr-law | Core engineer | **READY** | P1 | None |

### PA-005 — evaluation summary (2026-10-01)

Full write-up: **`docs/PA-005-CDN-MIRROR-EVALUATION.md`**

| Item | Result |
|---|---|
| Baseline (GitHub raw) latency | Manifest ~32–57 ms TTFB; entities ~70 ms; CORS `*` |
| Near-term decision | **Keep Option A — GitHub raw `main`** |
| Escalation if raw degrades | **Option B — jsDelivr** via `VITE_LEGAL_CONTENT_BASE_URL` |
| When release pin / SLA needed | **Option D (Vercel/CF mirror)** or **Option C (GitHub Pages)** |
| Rejected | Bundle full corpus into app |
| Implementation | **Not started** — **PA-005b BACKLOG** |

### PA-004 — Decision evidence (2026-10-01)

| Item | Result |
|------|--------|
| Decision document | `docs/PA-004-LEGACY-REMOVAL-DECISION.md` |
| Mass deletion executed? | **No** |
| Dual-read retained? | **Yes** (ContentGateway → canonical → legacy) |
| Removal criteria | Documented; future deletion only via `PA-004-EXEC-<scope>` |

### PA-002 / PA-003 evidence (retained)

H1–H7 PASS; Phase 2 exit matrix in `docs/PHASE-2-EXIT-AUDIT.md`.

## Current verified state

- Phase 2: **CLOSED**.
- PA-001 / PA-002 / PA-003 / PA-004 (decision) / **PA-005**: **COMPLETED**.
- Content delivery: **GitHub raw** (evaluated; mirror optional later via PA-005b).
- Legacy modules: **retained**; dual-read **required** until scoped EXEC criteria met.
- Next READY (P0): **PH3-001** Phase 3 architecture kickoff.
- Next READY (P1): **TD-001** TopicDetail source restore.

## Dependency map

```
PA-001 → PA-002 → PA-003 (all COMPLETED)
                      ├──→ PA-004 (COMPLETED — decision only; no deletion)
                      ├──→ PA-005 (COMPLETED) → PA-005b (BACKLOG)
                      └──→ PH3-001 (READY)
TD-001 (READY)
```

## Active execution rules

- **Do not reopen** completed PA/LC items without regression evidence.
- **Do not delete** `src/data/topics/**` or remove legacy fallback without a new READY `PA-004-EXEC-*` ticket.
- **PA-005b:** Do not implement a mirror until Product schedules it; env-only jsDelivr switch is allowed as an ops hotfix.
- **PH3-001:** may be scheduled; not auto-started.
- **TD-001:** preferred before large TopicDetail feature work.
- Maximum four major WIP workstreams remain in force.

## Phase 2 exit gate — CLOSED

Evidence: `docs/PHASE-2-EXIT-AUDIT.md`.

## Next phase gate

**Phase 3 — Legal Research Workbench** may be scheduled via **PH3-001**.
