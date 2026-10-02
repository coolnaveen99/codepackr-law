# PR-006 — Legal-content Integrity Audit

**Status:** IMPLEMENTED  
**Date:** 2026-10-02  
**Repositories:** `coolnaveen99/codepackr-law` + `coolnaveen99/legal-content`

## Objective

Establish an executable integrity audit between the application topic catalog and the canonical `legal-content` repository.

The audit deliberately distinguishes **canonical repository integrity** from **migration coverage**. A coverage gap is reported as migration work; it is not hidden and it does not justify deleting the application's legacy fallback.

## Checks

1. Canonical manifest exists and identifies `coolnaveen99/legal-content`.
2. Manifest IDs and paths are unique.
3. Every canonical topic entry can be delivered and parsed.
4. Canonical topic identity/entity type/status are consistent.
5. Published canonical topics have source references.
6. Every application catalog topic with `hasNotes !== false` is mapped to its canonical ID.
7. Coverage is reported by subject.
8. Canonical topics that are not represented by the current application catalog are reported separately.

## Command

```bash
npm run audit:legal-content
```

The audit is intentionally **PASS WITH MIGRATION GAPS** while full catalog migration is incomplete. It exits non-zero only for canonical manifest/delivery/integrity failures.

## Current architecture decision

The application remains **canonical-first with legacy fallback**. This is required while canonical coverage is below the complete catalog. No legacy topic files are deleted by PR-006.

## Exit criteria

PR-006 is complete when the audit is executable in CI and produces an explicit, repeatable coverage report. Full migration coverage remains a subsequent content-migration workstream.
