# Legal Content Verification Policy (Phase 18)

**Product:** CodePackr Law  
**Date:** 2026-09-30

## Required metadata (target model)

Every legal record should eventually support:

| Field | Purpose |
|-------|---------|
| author | Who drafted the educational record |
| reviewer | Who reviewed against primary sources |
| source | Primary or secondary source used |
| sourceDate | Date of the source instrument / judgment |
| lastVerified | Last human verification date |
| nextReview | Scheduled re-check |
| status | Lifecycle status (below) |

## Statuses

| Status | Meaning |
|--------|---------|
| `draft` | Work in progress; not promoted |
| `needs-review` | Published educational content awaiting legal review |
| `verified` | Checked against cited primary/reported source |
| `superseded` | Replaced by a newer verified record |
| `historical` | Correct for a past legal state; not current law |
| `deprecated` | Should not be relied on; retained for audit |

## Review triggers

Re-verify when:

- Statute or schedule changes
- Rules / regulations change
- Commencement or notification changes
- Important judgment changes interpretation
- Court practice or registry requirements change
- State-specific rules diverge from central baseline

## Tool-facing rules

- Calculators and checklists must show formula, source, and local-rule warnings
- Citation tools must never convert "not found" into "does not exist"
- Transition mappings must use relation labels (not blanket "equivalent")
- User-pasted judgment text is always `user-provided` until independently verified

## Honest scope

Existing static curriculum content will be backfilled to this model over time. New tools in Phases 11–20 already surface source and disclaimer text in the UI.
