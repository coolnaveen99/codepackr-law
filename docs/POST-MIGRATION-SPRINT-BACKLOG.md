# Post-Migration Sprint Backlog — CodePackr Law

**Date:** 2026-10-02  
**Execution rule:** one phase at a time; implementation, validation, evidence, board update, then exit.

## Phase 14 — Canonical Application Integration

**Status:** COMPLETED — 2026-10-02

| Ticket | Task | Status |
|---|---|---|
| INT-014.01 | Verify canonical manifest repository identity and non-empty entity inventory | COMPLETED |
| INT-014.02 | Verify relationship-index identity and graph edges | COMPLETED |
| INT-014.03 | Verify stable topic-ID mapping for CPC, PIL and Tort aliases | COMPLETED |
| INT-014.04 | Verify representative canonical topic delivery | COMPLETED |
| INT-014.05 | Verify ContentGateway canonical-first mapping contract | COMPLETED |
| INT-014.06 | Verify legacy fallback remains available without deleting legacy modules | COMPLETED |
| INT-014.07 | Add executable Phase 14 integration regression test | COMPLETED |
| INT-014.08 | Run CI and record exact evidence | COMPLETED — Law CI #463 |
| INT-014.09 | Create Phase 14 exit audit and close the phase | COMPLETED |

**Exit criteria:** canonical manifest and relationship index are reachable; representative entities resolve; stable IDs map correctly; ContentGateway remains canonical-first; fallback remains intact; executable tests pass in CI.

## Phase 15 — Legacy Dependency Readiness

**Status:** COMPLETED — 2026-10-02

| Ticket | Task | Status |
|---|---|---|
| INT-015.01 | Inventory fallback-dependent catalog routes | COMPLETED |
| INT-015.02 | Compare catalog topic IDs to canonical published IDs | COMPLETED — audit mechanism verified |
| INT-015.03 | Produce subject-level migration gap report | COMPLETED — no deletion scope authorized |
| INT-015.04 | Define scoped deletion candidates and rollback | COMPLETED — criteria documented; candidates none |
| INT-015.05 | PA-004 removal execution decision | COMPLETED — retain fallback |

**Exit:** Phase 15 closes as a readiness audit. Legacy content remains intentionally retained under PA-004.

## Phase 16 — Canonical Delivery Hardening

| Ticket | Task | Status |
|---|---|---|
| INT-016.01 | Delivery origin/version contract | COMPLETED — default pinned to `coolnaveen99/legal-content/main`; manifest repository + version checked |
| INT-016.02 | Cache/failure behavior audit | COMPLETED — repository memoizes manifest/relationship-index fetches; failed delivery resolves safely to `null`; delivery script uses a 15s timeout and fails the CI gate on delivery errors |
| INT-016.03 | Environment override validation | COMPLETED — `VITE_LEGAL_CONTENT_BASE_URL` → `LEGAL_CONTENT_BASE_URL` → pinned canonical default; trailing slash normalized |
| INT-016.04 | Delivery regression CI gate | COMPLETED — `check:canonical-delivery` is part of Law CI and now verifies fetched entity ID/entityType/status against manifest entries |

**Phase 16 exit:** Canonical delivery origin, manifest version/repository identity, environment override precedence, timeout/error behavior and manifest-to-entity identity are covered by the executable delivery gate. No legacy content was removed.

## Phase 17 — Content UX Validation

| Ticket | Task | Status |
|---|---|---|
| INT-017.01 | Topic route matrix | PLANNED |
| INT-017.02 | Provision/judgment navigation | PLANNED |
| INT-017.03 | Related-content navigation | PLANNED |
| INT-017.04 | Missing/unpublished content states | PLANNED |
| INT-017.05 | Desktop/mobile content smoke | PLANNED |

## Phase 18 — Search & SEO Canonicalization

| Ticket | Task | Status |
|---|---|---|
| INT-018.01 | Search-to-canonical-ID validation | PLANNED |
| INT-018.02 | Canonical URL validation | PLANNED |
| INT-018.03 | Metadata/OG validation | PLANNED |
| INT-018.04 | Sitemap/content parity | PLANNED |

## Phase 19 — Production Integration Validation

| Ticket | Task | Status |
|---|---|---|
| INT-019.01 | Production build | PLANNED |
| INT-019.02 | Deployment verification | PLANNED |
| INT-019.03 | Representative canonical route smoke | PLANNED |
| INT-019.04 | Legacy fallback safety smoke | PLANNED |
| INT-019.05 | Production evidence record | PLANNED |

## Phase 20 — Final Integration Closure

| Ticket | Task | Status |
|---|---|---|
| INT-020.01 | Reconcile all phase evidence | PLANNED |
| INT-020.02 | Final architecture review | PLANNED |
| INT-020.03 | Final integration acceptance | PLANNED |
| INT-020.04 | Maintenance backlog handoff | PLANNED |
