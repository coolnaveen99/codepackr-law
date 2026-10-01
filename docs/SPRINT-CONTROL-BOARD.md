# Sprint Control Board — CodePackr Law

**Owner:** Product / Architecture coordination  
**Applies to:** `coolnaveen99/codepackr-law` + `coolnaveen99/legal-content`  
**Roadmap position:** Phase 2 — Canonical Content + Legal Knowledge Graph  
**Updated:** 2026-10-01

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

We are working through the Phase 2 foundation:

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
Phase 2 exit
      ↓
Research Workbench (Phase 3)
```

### 2. Content enhancement policy

Large-scale editorial enhancement is **DEFERRED**.

Continue now:
- canonical migration;
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

Reviewers may be multiple people, but execution ownership is singular.

### 4. Shared-file rule

Do not concurrently edit:
- `manifests/content-manifest.json`;
- core schemas;
- validation scripts;
- Content Gateway contracts;
- shared architecture documents.

If a task needs a shared file, record the dependency first.

### 5. WIP limit

Maximum four major workstreams may be IN PROGRESS:

1. Canonical content migration
2. Knowledge graph / validation
3. Application Gateway / parity
4. CI / DevOps / release

New work should normally remain READY until a WIP slot opens.

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

A task may move to READY only when:
- objective is clear;
- owner is known;
- repository is known;
- affected area is identified;
- dependencies are identified;
- acceptance criteria exist;
- overlap with active work has been checked.

## Definition of Done

A task may move to COMPLETED only when applicable:
- implementation/content exists;
- authoritative sources were checked for legal claims;
- schema/reference validation passes;
- tests pass;
- build/CI evidence exists where applicable;
- diff was reviewed;
- no unrelated changes remain;
- manifest is synchronized when entity changes require it;
- application parity is verified when migration affects app reads;
- exact commit/PR/check evidence is recorded.

## Current sprint backlog

| ID | Work | Repo | Owner | Status | Priority | Dependency |
|---|---|---|---|---|---|---|
| LC-001 | Full 673-entity manifest synchronization | legal-content | DevOps owner | BLOCKED | P0 | GitHub CLI authentication |
| LC-002 | PIL migration + validation | legal-content | Content owner | IN PROGRESS | P0 | LC-001 for final manifest |
| LC-003 | Knowledge-graph relationship audit/validation | legal-content | Grok | IN PROGRESS | P0 | Existing schemas |
| LC-004 | Fundamental Rights canonical migration | legal-content | Naveen | ACCEPTED | P0 | Canonical schemas / LC-003 as needed |
| LC-005 | DPSP canonical migration | legal-content | Friend | ACCEPTED | P0 | Canonical schemas / LC-003 as needed |
| LC-006 | Content Gateway + canonical/legacy parity | codepackr-law | Senior Developer | READY | P0 | LC-001, LC-003 |
| LC-007 | Application canonical-read verification | codepackr-law | Developer | BLOCKED | P0 | LC-006 |
| LC-008 | Phase 2 exit audit and evidence | both | QA / Architecture | BACKLOG | P0 | LC-001–LC-007 |
| LC-009 | Research Workbench architecture | codepackr-law | Solution Architect | DEFERRED | P1 | LC-008 |
| LC-010 | Citation Verification architecture | codepackr-law | Research/Architecture | DEFERRED | P1 | LC-009 |
| LC-011 | Judgment Analyzer architecture | codepackr-law | Software Architect | DEFERRED | P1 | LC-009 |
| LC-012 | Mass content enhancement wave | legal-content | Content team | DEFERRED | P2 | Phase 2/3 foundation |

## Dependency map

```
LC-001 ─┐
        ├──→ LC-006 ─→ LC-007 ─┐
LC-003 ─┘                       │
                                ├──→ LC-008 ─→ LC-009
LC-002 ─────────────────────────┤             │
LC-004 ─────────────────────────┤             ├──→ LC-010
LC-005 ─────────────────────────┘             └──→ LC-011

LC-012 remains DEFERRED until the platform workflow provides evidence
for the next editorial enhancement wave.
```

## Parallel-work rules

### Naveen
Own only LC-004 unless a new task is explicitly accepted.

### Friend
Own only LC-005 unless a new task is explicitly accepted.

### Grok
Own LC-003. Do not modify the Fundamental Rights or DPSP corpus unless explicitly required for relationship validation.

### DevOps
Own LC-001 and release/CI dependencies.

### Application developer team
Own LC-006/LC-007 after dependencies are satisfied.

### QA / Architecture
Own the Phase 2 evidence gate, not the implementation of other owners' tasks.

## Manifest rule

The manifest is a repository-wide artifact.

Do not push a subject-only or pilot-only manifest as the final manifest.

Whenever entity changes require regeneration:

```
npm run manifest
npm run validate
npm test
```

If the full manifest cannot be safely regenerated/pushed, mark the task BLOCKED rather than publishing an incomplete manifest.

## Sprint review questions

Before starting a new task:

1. Is it already on this board?
2. Does another owner touch the same files?
3. What dependency does it have?
4. Does it consume a WIP slot?
5. Does it advance the current roadmap phase?
6. Is it foundation, migration, accuracy maintenance, or deferred enhancement?
7. What evidence will prove completion?

## Phase 2 exit gate

Do not declare Phase 2 complete until:

- canonical repository identity is stable;
- schemas are validated;
- canonical IDs are validated;
- relationships are validated;
- manifest generation/validation is reproducible;
- representative content is migrated;
- full-manifest synchronization is verified;
- Content Gateway reads canonical content;
- legacy parity is tested;
- application canonical consumption is verified;
- CI is green;
- remaining migration gaps are documented.

## Next phase gate

Only after the Phase 2 exit audit should the team formally start:

**Phase 3 — Legal Research Workbench.**

Deep editorial enhancement remains a controlled later workstream, not a prerequisite for Phase 2 completion.
