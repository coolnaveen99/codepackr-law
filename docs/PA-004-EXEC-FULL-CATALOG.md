# PA-004-EXEC-FULL-CATALOG — Legacy Fallback Retirement

**Scope:** Full application topic catalog  
**Repositories:** `coolnaveen99/codepackr-law` + `coolnaveen99/legal-content`  
**Execution date:** 2026-10-02

## Objective

Retire the runtime legacy topic fallback only after proving that every real legacy topic has a published canonical counterpart.

This is a new execution workstream under PA-004. It does not reopen the closed migration Phases 14–20.

## Evidence discovered before execution

The canonical migration registry reports:

- 3,561 legacy topic-path records.
- 3,551 exact migrated topic records.
- 10 excluded records are helper/generator modules, not catalog topics.
- Canonical topic files are present under `legal-content/topics/**`.

Representative previously cited gaps were rechecked:

- Company indoor-management: canonical record exists and is published.
- CPC s.32: canonical record exists and is published.
- Tort nature/definition: canonical record exists and is published.

## Implementation

### 1. Full-catalog parity gate

Added:

`scripts/parity-legal-content-full.mjs`

The gate:

1. scans the current `src/data/topics/**/*.ts` catalog;
2. excludes only the 10 known non-topic helper modules;
3. requires a migration-manifest record for every real topic;
4. requires the canonical target file to exist;
5. requires `entityType=topic`;
6. accepts `published` or `review` as a valid migrated canonical state and reports review-state topics separately;
7. requires a canonical `topic:india:...` ID;
8. rejects duplicate canonical targets;
9. requires the expected 3,551 real legacy topics and 3,561 migration records.

The gate runs in Law CI after checking out `coolnaveen99/legal-content` beside the application.

### 2. Runtime fallback retirement

`ContentGateway.getTopicContent()` now uses the canonical repository only.

If a canonical topic is unavailable or not published, the gateway returns `null` rather than silently loading a legacy topic module. Review-state migration records therefore remain non-production until separately verified and published.

The legacy topic files remain in the repository as rollback/source data. They are not deleted by this execution.

### 3. Compatibility mapping

`mapCanonicalTopicToLegacy` remains because the existing TopicDetail content shape still consumes the canonical record through the application's compatibility mapping. This is a shape adapter, not a content fallback.

## Current gate status

**Migration parity: PASS (Law CI #507).**

The full-catalog gate verified all 3,551 real legacy topics resolve to canonical topic entities. The canonical repository's integrity, delivery, and production-readiness gates also passed in the same CI run.

**Publication readiness is separate:** 112 migrated canonical topics are currently `review` and are intentionally not treated as production-published. They remain canonical migrated content pending authoritative provenance/current-law verification.

## Rollback

If the CI gate exposes a missing/invalid canonical topic:

1. restore the previous ContentGateway fallback commit;
2. keep the legacy files intact;
3. fix the canonical record in `legal-content`;
4. rerun full-catalog parity;
5. repeat until the gate is green.

## Safety

- No legacy topic files are deleted.
- No canonical IDs are changed.
- No legal text is rewritten by this execution.
- No migration phase 14–20 is reopened.
