# Sprint Control Board — CodePackr Law

**Owner:** Product / Architecture coordination  
**Applies to:** `coolnaveen99/codepackr-law` + `coolnaveen99/legal-content`  
**Roadmap position:** Phase 2 — Canonical Content + Legal Knowledge Graph  
**Updated:** 2026-10-01 (PA-001 closed; PA-002 active blockers recorded)

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

The previous LC-001–LC-007 backlog has been re-audited against both repositories as of **2026-10-01**. These items are no longer active work.

| ID | Result | Evidence |
|---|---|---|
| LC-001 | **COMPLETED** | Full manifest is live at **719 entities**; CI regenerates the repository-wide manifest and relationship index on main. |
| LC-002 | **COMPLETED** | PIL entities are published and included in the live manifest; relationship tests pass. |
| LC-003 | **COMPLETED** | Relationship index reports **1,755 edges**; graph validation and relationship tests are wired into CI; full-scan validation is documented as PASS. |
| LC-004 | **COMPLETED** | Fundamental Rights corpus and collection v2 are present on main; subsequent manifest regeneration includes the changes. |
| LC-005 | **COMPLETED** | DPSP corpus and collection are present on main; subsequent manifest regeneration includes the changes. |
| LC-006 | **COMPLETED** | ContentGateway is canonical-first with legacy fallback; automated parity smoke passes. |
| LC-007 | **COMPLETED** | Automated application consumption/parity is PASS; canonical manifest/entity HTTP reads are verified. |
| PA-001 | **COMPLETED** | Production JS bundle (`index-CeudlBgn.js`, later redeploys) contains `raw.githubusercontent.com/coolnaveen99/legal-content`, `content-manifest`, `relationship-index`, and `topic:india:` markers. Live topic routes fetch canonical JSON (e.g. `topics/pil/locus-standi.json`, `topics/cpc/s-32.json`). |

**Audit conclusion:** the old sprint board was stale. The Phase 2 foundation work represented by LC-001–LC-007 is substantially implemented and has automated evidence. PA-001 production deployment confirmation is **PASS**. It must not remain in the active queue.

## Current sprint backlog — production acceptance gate

Only genuinely pending work remains below.

| ID | Work | Repo | Owner | Status | Priority | Dependency |
|---|---|---|---|---|---|---|
| PA-001 | Confirm production deployment contains ContentGateway + knowledge-graph UI commits | codepackr-law | Deployment owner | **COMPLETED** | P0 | None |
| PA-002 | Complete production browser UX acceptance H1–H7 | codepackr-law | Product / legal-content owner | **BLOCKED** | P0 | PA-001 (met); see blockers below |
| PA-003 | Complete Phase 2 exit audit and production sign-off | both | QA / Architecture | **BLOCKED** | P0 | PA-001 (met), PA-002 |
| PA-004 | Decide and execute legacy-content removal after signed parity | codepackr-law | Architecture / Product | **DEFERRED** | P1 | PA-003 |
| PA-005 | Evaluate static/CDN mirror for canonical legal-content delivery | both | Solution Architect | **DEFERRED** | P1 | PA-003 |
| PH3-001 | Phase 3 — Legal Research Workbench architecture kickoff | codepackr-law | Solution Architect | **DEFERRED** | P0 | PA-003 |

### PA-002 blockers (named)

1. **H3 CPC s.32 render crash** — production console `TypeError: Cannot read properties of undefined (reading 'map')` when rendering canonical CPC section shape (`heading`/`body`) vs app `TopicSection.content[]`. Partial mitigation on main: `mapCanonicalTopic` section normalize + ContentGateway returns mapped-only content (`d1932d1`). Must re-verify after green deploy.
2. **TopicDetail.tsx corruption on main** — a failed large-file write left a stub component; Vercel `tsc` failed (`IntrinsicAttributes` / unused imports). Emergency mitigation on main: `scripts/restore-topic-detail.mjs` fetches last good blob from `bbc15cc` before `tsc` (`c7db189`, `6c1db333`). **Source-of-truth restore still required:** commit full `TopicDetail.tsx` from `bbc15cc` (plus harden) so builds do not depend on network fetch.
3. **H2 related knowledge-graph panel** — not observed on PIL locus-standi in the partial UX pass; re-check after TopicDetail restore.
4. **H4–H7** — not completed; blocked behind stable TopicDetail + H3.

### PA-002 partial evidence (do not treat as complete)

| Check | Status | Notes |
|---|---|---|
| H1 PIL locus-standi canonical path | **PASS (partial)** | Study notes rendered; network `manifests/content-manifest.json` + `topics/pil/locus-standi.json` **200** |
| H2 related knowledge-graph panel | **FAIL / not observed** | No related panel headings in the recorded pass |
| H3 CPC s.32 | **FAIL** | White screen + `.map` TypeError before TopicDetail restore |
| H4 tort nature/definition | **PENDING** | Catalog id `tort-definition` under subject slug `tort` |
| H5 legacy fallback | **PENDING** | |
| H6 analytics body leak | **PENDING** | Clarity/GTM present; topic-body payload check not finished |
| H7 mobile overflow | **PENDING** | |

## Current verified state

- Canonical corpus: **719 entities** (689 published, 30 review).
- Relationship graph: **1,755 edges**.
- Automated content validation: **PASS**.
- Automated application parity: **PASS** (source/tests).
- ContentGateway: **canonical-first + legacy fallback** implemented; production bundle contains legal-content base URL and manifest/relationship fetches.
- Production deployment confirmation (PA-001 / A10): **PASS**.
- Human production UX checks H1–H7 (PA-002): **INCOMPLETE** — H1 partial pass; H2/H3 failed or not observed; H4–H7 pending.
- Application build health: **AT RISK** until full `TopicDetail.tsx` is restored on main (emergency build-time restore script is temporary).
- Legacy topic removal: **not permitted yet**.
- Phase 3: **not started**.

## Acceptance criteria for the active gate

### PA-001 — Deployment confirmation — COMPLETED

Verify that the production deployment of main contains the ContentGateway, relationship-resolution, and related-topic UI changes. Record the deployed commit/deployment SHA. Do not infer deployment from GitHub source alone.

**Evidence recorded:** production asset `/assets/index-CeudlBgn.js` (and subsequent redeploys) includes `https://raw.githubusercontent.com/coolnaveen99/legal-content/main`, `content-manifest`, `relationship-index`; live topic pages issue canonical entity GETs.

### PA-002 — Human UX acceptance — BLOCKED

On https://law.codepackr.com, verify the existing acceptance matrix:

- H1 PIL locus-standi loads from the canonical path.
- H2 related knowledge-graph panel is visible and links work.
- H3 CPC s.32 renders correctly.
- H4 tort nature/definition renders through the canonical path.
- H5 legacy fallback works when canonical content is unavailable.
- H6 no substantive topic body is sent to analytics; verify in browser Network tools.
- H7 mobile TopicDetail/related links work without horizontal overflow.

Record actual evidence; do not mark PASS from source inspection alone.

**Unblock path:**
1. Restore full `src/components/subjects/TopicDetail.tsx` from `bbc15cc` onto main and push.
2. Confirm Vercel build is green without relying solely on the emergency restore script.
3. Re-run H1–H7 on production; record pass/fail with URLs and network evidence.

### PA-003 — Phase 2 exit

Close Phase 2 only when PA-001 and PA-002 are complete and the existing exit-gate requirements remain satisfied: canonical IDs, relationships, manifest integrity, gateway consumption, parity, application reads, CI evidence, and documented remaining gaps.

## Dependency map

PA-001 (COMPLETED) ─→ PA-002 (BLOCKED) ─→ PA-003 ─→ PA-004
                                         ├──→ PA-005
                                         └──→ PH3-001

PA-004 remains deferred until the signed production parity/UX decision.
PA-005 is an architecture improvement, not a blocker to the current automated canonical-content validation.
PH3-001 must not start until PA-003 closes the Phase 2 gate.

## Active execution rules

- **Deployment owner:** PA-001 is **COMPLETED** — do not reopen unless a regression removes ContentGateway from production.
- **Product / legal-content owner:** owns PA-002; must clear TopicDetail restore + H1–H7 evidence before PA-003.
- **QA / Architecture:** owns PA-003 evidence gate after PA-002.
- **Architecture / Product:** owns PA-004 only after signed Phase 2 acceptance.
- **Solution Architect:** owns PA-005 and PH3-001 only after their dependencies are satisfied.
- Do not reopen completed LC-001–LC-007 unless new evidence identifies a regression.
- Do not start Phase 3 work before PA-003 closes the Phase 2 gate.
- Maximum four major WIP workstreams remain in force.
- The emergency `scripts/restore-topic-detail.mjs` path is **temporary**; remove or no-op it after full TopicDetail is committed.

## Manifest rule

The manifest is a repository-wide artifact.

The current canonical repository uses:

```
npm run manifest:refresh
node scripts/validate.mjs --graph-report
node scripts/test-relationships.mjs
```

CI also regenerates the manifest and relationship index on pushes to `main`.

Do not publish a subject-only or pilot-only manifest as the final repository manifest. If a full regeneration fails, keep the work BLOCKED and do not publish an incomplete artifact.

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
- remaining migration gaps are documented;
- **PA-001 and PA-002 are COMPLETED with production evidence.**

## Next phase gate

Only after the Phase 2 exit audit should the team formally start:

**Phase 3 — Legal Research Workbench.**

Deep editorial enhancement remains a controlled later workstream, not a prerequisite for Phase 2 completion.
