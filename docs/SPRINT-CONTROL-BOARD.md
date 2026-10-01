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
Phase 2 exit          ← CLOSED (PA-003)
      ↓
Research Workbench (Phase 3)  ← not started; requires scheduled PH3-001
```

### 2. Content enhancement policy

Large-scale editorial enhancement remains **DEFERRED**.

### 3. Single-owner rule

Every active task has exactly one execution owner.

### 4. Shared-file rule

Do not concurrently edit manifests, core schemas, validation scripts, Content Gateway contracts, or shared architecture documents without recording the dependency.

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

## Definition of Done

A task may move to COMPLETED only with implementation/evaluation evidence, validation where applicable, reviewed diff, and recorded commit/PR evidence.

## Verified work completed — Phase 2 foundation

| ID | Result | Evidence |
|---|---|---|
| LC-001–LC-007 | **COMPLETED** | See prior board history; full manifest, graph, gateway, parity. |
| PA-001 | **COMPLETED** | Production JS includes legal-content base, content-manifest, relationship-index. |
| PA-002 | **COMPLETED** | H1–H7 production acceptance PASS. |
| PA-003 | **COMPLETED** | Phase 2 exit audit — `docs/PHASE-2-EXIT-AUDIT.md`. |
| PA-005 | **COMPLETED** | CDN/static mirror evaluation — `docs/PA-005-CDN-MIRROR-EVALUATION.md`. Decision: keep GitHub raw near-term; jsDelivr/Vercel as escalation. |

## Current sprint backlog

| ID | Work | Repo | Owner | Status | Priority | Dependency |
|---|---|---|---|---|---|---|
| PA-001 | Confirm production deployment contains ContentGateway + knowledge-graph UI | codepackr-law | Deployment owner | **COMPLETED** | P0 | None |
| PA-002 | Production browser UX acceptance H1–H7 | codepackr-law | Product / legal-content owner | **COMPLETED** | P0 | PA-001 |
| PA-003 | Phase 2 exit audit and production sign-off | both | QA / Architecture | **COMPLETED** | P0 | PA-001, PA-002 |
| PA-004 | Decide and execute legacy-content removal after signed parity | codepackr-law | Architecture / Product | **READY** | P1 | PA-003 (met) |
| PA-005 | Evaluate static/CDN mirror for canonical legal-content delivery | both | Solution Architect | **COMPLETED** | P1 | PA-003 (met) |
| PH3-001 | Phase 3 — Legal Research Workbench architecture kickoff | codepackr-law | Solution Architect | **READY** | P0 | PA-003 (met) |
| TD-001 | Commit full TopicDetail.tsx source (remove build-time restore stub) | codepackr-law | Core engineer | **READY** | P1 | None |
| PA-005b | Implement content CDN/mirror (only if Product schedules) | both | Solution Architect | **BACKLOG** | P2 | PA-005 decision |

### PA-005 — evaluation summary (2026-10-01)

Full write-up: **`docs/PA-005-CDN-MIRROR-EVALUATION.md`**

| Item | Result |
|---|---|
| Baseline (GitHub raw) latency | Manifest ~32–57 ms TTFB; entities ~70 ms; CORS `*` |
| Near-term decision | **Keep Option A — GitHub raw `main`** |
| Escalation if raw degrades | **Option B — jsDelivr** via `VITE_LEGAL_CONTENT_BASE_URL` |
| When release pin / SLA needed | **Option D (Vercel/CF mirror)** or **Option C (GitHub Pages)** |
| Rejected | Bundle full corpus into app |
| Implementation | **Not started** — tracked as PA-005b BACKLOG |

### PA-002 / PA-003 evidence

Retained in prior sections / `docs/PHASE-2-EXIT-AUDIT.md`. Do not reopen without regression evidence.

## Current verified state

- Canonical corpus: **719** entities; relationship graph ~**1,758** edges.
- ContentGateway: canonical-first + legacy fallback in production.
- PA-001 / PA-002 / PA-003 / **PA-005**: **COMPLETED**.
- Phase 2: **CLOSED**.
- Content delivery: **GitHub raw** (evaluated; mirror optional later).
- Legacy topic removal: **not executed** (PA-004 READY for decision).
- Phase 3: **READY to schedule** (PH3-001); **not started**.

## Dependency map

```
PA-001 (COMPLETED) → PA-002 (COMPLETED) → PA-003 (COMPLETED)
                                              ├──→ PA-004 (READY)
                                              ├──→ PA-005 (COMPLETED) → PA-005b (BACKLOG)
                                              └──→ PH3-001 (READY)
TD-001 (READY) — independent tech debt
```

## Active execution rules

- **Do not reopen** completed LC/PA items without regression evidence.
- **PA-004:** Product/Architecture decision required before any legacy file deletion.
- **PA-005b:** Do not implement a mirror until Product schedules it; env-only jsDelivr switch is allowed as an ops hotfix.
- **PH3-001:** Solution Architect may schedule; do not start without assignment.
- **TD-001:** Preferred before large TopicDetail feature work.
- Maximum four major WIP workstreams remain in force.

## Manifest rule

```
npm run manifest:refresh
node scripts/validate.mjs --graph-report
node scripts/test-relationships.mjs
```

CI regenerates the manifest and relationship index on pushes to `main`.

## Phase 2 exit gate — CLOSED

See `docs/PHASE-2-EXIT-AUDIT.md`.

## Next phase gate

**Phase 3 — Legal Research Workbench** may be scheduled via **PH3-001**.

Do not treat Phase 3 as automatically IN PROGRESS.
