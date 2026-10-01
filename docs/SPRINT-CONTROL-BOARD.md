# Sprint Control Board — CodePackr Law

**Owner:** Product / Architecture coordination  
**Applies to:** `coolnaveen99/codepackr-law` + `coolnaveen99/legal-content`  
**Roadmap position:** Phase 2 — **CLOSED** · Phase 3 not started  
**Updated:** 2026-10-01 (PA-003 Phase 2 exit audit COMPLETED)

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

Continue when scheduled:
- legal accuracy corrections;
- source/provenance;
- historical/current-law corrections;
- relationship building;
- representative benchmark content;
- Judgment Decoder benchmark work.

Defer:
- mass topic rewriting;
- making every topic book-length;
- mass illustrations/hypotheticals;
- exhaustive judgment decoding;
- mass visual-study expansion.

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

## Definition of Ready

A task may move to READY only when objective, owner, repository, affected area, dependencies, acceptance criteria, and overlap checks are clear.

## Definition of Done

A task may move to COMPLETED only with implementation evidence, validation/tests, CI where applicable, reviewed diff, and recorded commit/PR/check evidence.

## Verified work completed — Phase 2 foundation

| ID | Result | Evidence |
|---|---|---|
| LC-001 | **COMPLETED** | Full manifest **719** entities; CI regenerates manifest + relationship index on main. |
| LC-002 | **COMPLETED** | PIL published; relationship tests pass. |
| LC-003 | **COMPLETED** | Relationship index **1,758** edges (audit day); CI graph validation. |
| LC-004 | **COMPLETED** | Fundamental Rights corpus on main. |
| LC-005 | **COMPLETED** | DPSP corpus on main. |
| LC-006 | **COMPLETED** | ContentGateway canonical-first + legacy fallback; parity PASS. |
| LC-007 | **COMPLETED** | Automated app consumption/parity PASS. |
| PA-001 | **COMPLETED** | Production JS includes legal-content base, content-manifest, relationship-index. |
| PA-002 | **COMPLETED** | H1–H7 production acceptance PASS — evidence table retained below. |
| PA-003 | **COMPLETED** | Phase 2 exit audit PASS — see `docs/PHASE-2-EXIT-AUDIT.md`. |

## Current sprint backlog

| ID | Work | Repo | Owner | Status | Priority | Dependency |
|---|---|---|---|---|---|---|
| PA-001 | Confirm production deployment contains ContentGateway + knowledge-graph UI | codepackr-law | Deployment owner | **COMPLETED** | P0 | None |
| PA-002 | Production browser UX acceptance H1–H7 | codepackr-law | Product / legal-content owner | **COMPLETED** | P0 | PA-001 |
| PA-003 | Phase 2 exit audit and production sign-off | both | QA / Architecture | **COMPLETED** | P0 | PA-001, PA-002 |
| PA-004 | Decide and execute legacy-content removal after signed parity | codepackr-law | Architecture / Product | **READY** | P1 | PA-003 (met) |
| PA-005 | Evaluate static/CDN mirror for canonical legal-content delivery | both | Solution Architect | **READY** | P1 | PA-003 (met) |
| PH3-001 | Phase 3 — Legal Research Workbench architecture kickoff | codepackr-law | Solution Architect | **READY** | P0 | PA-003 (met) |
| TD-001 | Commit full TopicDetail.tsx source (remove build-time restore stub) | codepackr-law | Core engineer | **READY** | P1 | None |

### PA-002 — H1–H7 production evidence (2026-10-01) — retained

Production asset: `/assets/index-SXSV5M7T.js` · last-modified **2026-10-01 05:18:41 GMT**

| Check | Status | Evidence |
|---|---|---|
| H1 PIL locus-standi | **PASS** | Canonical JSON 200; study notes render |
| H2 related knowledge-graph panel | **PASS** | Panel visible; relationship-index 200 |
| H3 CPC s.32 | **PASS** | Treatise renders; topic JSON 200 |
| H4 tort nature/definition | **PASS** | Alias → topics/torts/nature-definition.json 200 |
| H5 legacy fallback | **PASS** | company topic canonical 404; legacy body renders |
| H6 no topic body to analytics | **PASS** | Clarity collect body free of study phrases |
| H7 mobile TopicDetail | **PASS** | No horizontal overflow; related panel present |

### PA-003 — Phase 2 exit evidence (2026-10-01)

Full matrix: **`docs/PHASE-2-EXIT-AUDIT.md`**

| Re-validation | Result |
|---|---|
| Manifest entities | **719** (0 duplicate IDs) |
| Relationship edges | **1758** |
| `parity:legal-content` | **PASS** |
| CORS | `access-control-allow-origin: *` |
| Production bundle gateway strings | **PASS** |
| Exit criteria E1–E14 | **PASS** |

## Current verified state

- Canonical corpus: **719** entities (689 published, 30 review).
- Relationship graph: **1,758** edges (audit re-measure).
- Automated content validation: **PASS**.
- Automated application parity: **PASS**.
- ContentGateway: **canonical-first + legacy fallback** in production.
- PA-001 / PA-002 / PA-003: **COMPLETED**.
- Phase 2: **CLOSED**.
- Legacy topic removal: **not executed** (PA-004 READY for decision only).
- Phase 3: **READY to schedule** (PH3-001); **not started**.

## Dependency map

```
PA-001 (COMPLETED) → PA-002 (COMPLETED) → PA-003 (COMPLETED)
                                              ├──→ PA-004 (READY)
                                              ├──→ PA-005 (READY)
                                              └──→ PH3-001 (READY)
TD-001 (READY) — independent tech debt
```

## Active execution rules

- **Do not reopen** LC-001–LC-007 / PA-001 / PA-002 / PA-003 unless new regression evidence appears.
- **PA-004:** Product/Architecture decision required before any legacy file deletion.
- **PA-005 / PH3-001:** Solution Architect may schedule; do not start without assignment.
- **TD-001:** Preferred before large TopicDetail feature work.
- Maximum four major WIP workstreams remain in force.
- Large-scale content enhancement remains deferred by policy.

## Manifest rule

```
npm run manifest:refresh
node scripts/validate.mjs --graph-report
node scripts/test-relationships.mjs
```

CI regenerates the manifest and relationship index on pushes to `main`.

## Phase 2 exit gate — CLOSED

All required bullets satisfied with evidence in `docs/PHASE-2-EXIT-AUDIT.md` (2026-10-01).

## Next phase gate

**Phase 3 — Legal Research Workbench** may be scheduled via **PH3-001**.

Do not treat Phase 3 as automatically IN PROGRESS.
