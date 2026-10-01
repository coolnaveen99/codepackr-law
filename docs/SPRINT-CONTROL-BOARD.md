# Sprint Control Board — CodePackr Law

**Owner:** Product / Architecture coordination  
**Applies to:** `coolnaveen99/codepackr-law` + `coolnaveen99/legal-content`  
**Roadmap position:** Phase 2 — Canonical Content + Legal Knowledge Graph  
**Updated:** 2026-10-01 (PA-001 + PA-002 COMPLETED)

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

## Verified work completed — Phase 2 foundation

| ID | Result | Evidence |
|---|---|---|
| LC-001 | **COMPLETED** | Full manifest is live at **719 entities**; CI regenerates the repository-wide manifest and relationship index on main. |
| LC-002 | **COMPLETED** | PIL entities are published and included in the live manifest; relationship tests pass. |
| LC-003 | **COMPLETED** | Relationship index reports **1,755 edges**; graph validation and relationship tests are wired into CI; full-scan validation is documented as PASS. |
| LC-004 | **COMPLETED** | Fundamental Rights corpus and collection v2 are present on main; subsequent manifest regeneration includes the changes. |
| LC-005 | **COMPLETED** | DPSP corpus and collection are present on main; subsequent manifest regeneration includes the changes. |
| LC-006 | **COMPLETED** | ContentGateway is canonical-first with legacy fallback; automated parity smoke passes. |
| LC-007 | **COMPLETED** | Automated application consumption/parity is PASS; canonical manifest/entity HTTP reads are verified. |
| PA-001 | **COMPLETED** | Production JS includes legal-content base URL, content-manifest, relationship-index. Live topic routes fetch canonical JSON. |
| PA-002 | **COMPLETED** | Production H1–H7 acceptance on https://law.codepackr.com — see evidence table below. Deploy asset `/assets/index-SXSV5M7T.js` (2026-10-01). |

## Current sprint backlog — production acceptance gate

| ID | Work | Repo | Owner | Status | Priority | Dependency |
|---|---|---|---|---|---|---|
| PA-001 | Confirm production deployment contains ContentGateway + knowledge-graph UI commits | codepackr-law | Deployment owner | **COMPLETED** | P0 | None |
| PA-002 | Complete production browser UX acceptance H1–H7 | codepackr-law | Product / legal-content owner | **COMPLETED** | P0 | PA-001 |
| PA-003 | Complete Phase 2 exit audit and production sign-off | both | QA / Architecture | **READY** | P0 | PA-001, PA-002 (met) |
| PA-004 | Decide and execute legacy-content removal after signed parity | codepackr-law | Architecture / Product | **DEFERRED** | P1 | PA-003 |
| PA-005 | Evaluate static/CDN mirror for canonical legal-content delivery | both | Solution Architect | **DEFERRED** | P1 | PA-003 |
| PH3-001 | Phase 3 — Legal Research Workbench architecture kickoff | codepackr-law | Solution Architect | **DEFERRED** | P0 | PA-003 |

### PA-002 — H1–H7 production evidence (2026-10-01)

Production asset: `/assets/index-SXSV5M7T.js` · last-modified **2026-10-01 05:18:41 GMT**

| Check | Status | Evidence |
|---|---|---|
| H1 PIL locus-standi canonical path | **PASS** | `/subjects/pil/pil-locus-standi` renders study notes; `topics/pil/locus-standi.json` **200** |
| H2 related knowledge-graph panel | **PASS** | Panel **Related in the legal knowledge graph** visible on PIL + CPC; `relationship-index.json` **200**; related entities fetched (e.g. PIL art-32/226, CPC s-30/s-31/s-27) |
| H3 CPC s.32 | **PASS** | `/subjects/cpc/s-32` renders (~12k text); `topics/cpc/s-32.json` **200**; no console `.map` crash |
| H4 tort nature/definition canonical path | **PASS** | `/subjects/tort/tort-definition` renders; after alias tries, `topics/torts/nature-definition.json` **200**; related tort topics load |
| H5 legacy fallback | **PASS** | `/subjects/company/company-indoor-management` — canonical topic JSON **404**, page still renders full treatise body (~20k text) via legacy |
| H6 no topic body to analytics | **PASS** | Clarity `POST u.clarity.ms/collect` body inspected; no study phrases (`Section 32 CPC compels`, `locus standi`, `Winfield`, etc.) |
| H7 mobile TopicDetail | **PASS** | Mobile viewport: `scrollWidth === clientWidth` (765); no horizontal overflow; related panel still present |

**Implementation commits supporting PA-002 (main):**
- ContentGateway mapped-only content + section normalize
- Tort file alias `nature-definition` (`ContentRepository.topicFileIdCandidates`)
- Related panel always shown; `canonicalTopicId` in `RelatedCanonicalTopics` (`fad41bbb`)
- Build-time TopicDetail restore + PA-002 hardens (`scripts/restore-topic-detail.mjs`) — **temporary**; prefer committing full `TopicDetail.tsx` later

## Current verified state

- Canonical corpus: **719 entities** (689 published, 30 review).
- Relationship graph: **1,755 edges**.
- Automated content validation: **PASS**.
- Automated application parity: **PASS**.
- ContentGateway: **canonical-first + legacy fallback** in production.
- Production deployment confirmation (PA-001): **PASS**.
- Human production UX checks H1–H7 (PA-002): **PASS**.
- Next gate: **PA-003** Phase 2 exit audit.
- Legacy topic removal: **not permitted yet** (PA-004 deferred).
- Phase 3: **not started** (blocked on PA-003).

## Acceptance criteria for the active gate

### PA-001 — COMPLETED

Production contains ContentGateway + legal-content fetches. Evidence recorded above.

### PA-002 — COMPLETED

H1–H7 production evidence recorded above. Do not reopen unless a regression is observed on https://law.codepackr.com.

### PA-003 — Phase 2 exit — READY

Close Phase 2 only when PA-001 and PA-002 are complete and the existing exit-gate requirements remain satisfied: canonical IDs, relationships, manifest integrity, gateway consumption, parity, application reads, CI evidence, and documented remaining gaps.

**Known residual gaps to document in the exit audit (not PA-002 blockers):**
- `TopicDetail.tsx` on main may still be a stub in git; production builds restore from `bbc15cc` via script — commit full source when practical.
- Catalog↔canonical id aliases remain incomplete beyond tort/PIL/CPC patterns already fixed.

## Dependency map

PA-001 (COMPLETED) ─→ PA-002 (COMPLETED) ─→ PA-003 (READY) ─→ PA-004
                                              ├──→ PA-005
                                              └──→ PH3-001

## Active execution rules

- **QA / Architecture:** may take **PA-003** now.
- **Architecture / Product:** PA-004 only after signed Phase 2 acceptance.
- **Solution Architect:** PA-005 and PH3-001 only after PA-003.
- Do not reopen completed LC-001–LC-007 / PA-001 / PA-002 unless new evidence identifies a regression.
- Do not start Phase 3 work before PA-003 closes the Phase 2 gate.
- Maximum four major WIP workstreams remain in force.

## Manifest rule

The manifest is a repository-wide artifact.

```
npm run manifest:refresh
node scripts/validate.mjs --graph-report
node scripts/test-relationships.mjs
```

CI regenerates the manifest and relationship index on pushes to `main`.

Do not publish a subject-only or pilot-only manifest as the final repository manifest.

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
- remaining migration gaps are documented;
- **PA-001 and PA-002 are COMPLETED with production evidence.**

## Next phase gate

Only after the Phase 2 exit audit should the team formally start:

**Phase 3 — Legal Research Workbench.**

Deep editorial enhancement remains a controlled later workstream, not a prerequisite for Phase 2 completion.
