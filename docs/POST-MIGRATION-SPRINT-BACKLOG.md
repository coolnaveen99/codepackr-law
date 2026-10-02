# Post-Migration Sprint Backlog — CodePackr Law

**Date:** 2026-10-02  
**Execution rule:** one phase at a time; implementation, validation, evidence, board update, then exit.

## Phase 14 — Canonical Application Integration

**Status:** IN PROGRESS

| Ticket | Task | Status |
|---|---|---|
| INT-014.01 | Verify canonical manifest repository identity and non-empty entity inventory | READY |
| INT-014.02 | Verify relationship-index identity and graph edges | READY |
| INT-014.03 | Verify stable topic-ID mapping for CPC, PIL and Tort aliases | READY |
| INT-014.04 | Verify representative canonical topic delivery | READY |
| INT-014.05 | Verify ContentGateway canonical-first mapping contract | READY |
| INT-014.06 | Verify legacy fallback remains available without deleting legacy modules | READY |
| INT-014.07 | Add executable Phase 14 integration regression test | READY |
| INT-014.08 | Run CI and record exact evidence | READY |
| INT-014.09 | Create Phase 14 exit audit and close the phase | READY |

**Exit criteria:** canonical manifest and relationship index are reachable; representative entities resolve; stable IDs map correctly; ContentGateway remains canonical-first; fallback remains intact; executable tests pass in CI.

## Phase 15 — Legacy Dependency Readiness

| Ticket | Task | Status |
|---|---|---|
| INT-015.01 | Inventory fallback-dependent catalog routes | PLANNED |
| INT-015.02 | Compare catalog topic IDs to canonical published IDs | PLANNED |
| INT-015.03 | Produce subject-level migration gap report | PLANNED |
| INT-015.04 | Define scoped deletion candidates and rollback | PLANNED |
| INT-015.05 | PA-004 removal execution decision | PLANNED |

## Phase 16 — Canonical Delivery Hardening

| Ticket | Task | Status |
|---|---|---|
| INT-016.01 | Delivery origin/version contract | PLANNED |
| INT-016.02 | Cache/failure behavior audit | PLANNED |
| INT-016.03 | Environment override validation | PLANNED |
| INT-016.04 | Delivery regression CI gate | PLANNED |

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
