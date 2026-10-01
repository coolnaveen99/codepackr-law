# Sprint Control Board — CodePackr Law

**Owner:** Product / Architecture coordination  
**Applies to:** `coolnaveen99/codepackr-law` + `coolnaveen99/legal-content`  
**Roadmap position:** Phase 2 — **CLOSED** · Phase 3 implementation started  
**Updated:** 2026-10-01 (PH3-050 COMPLETED — ContentGateway authority suggestions)

## Verified completed

| ID | Result | Evidence |
|---|---|---|
| LC-001–LC-007 | **COMPLETED** | Prior evidence |
| PA-001–PA-005 | **COMPLETED** | Prior board + docs |
| PH3-001 | **COMPLETED** | Architecture kickoff doc |
| PH3-010 | **COMPLETED** | `src/lib/researchSession.ts` + Workbench persistence |
| TD-001 | **COMPLETED** | Full `TopicDetail.tsx` on main |
| PH3-020 | **COMPLETED** | Workbench form: court level, date range, subject, Act, section |
| PH3-030 | **COMPLETED** | Authority matrix: date, paragraph, treatment, source + note + tests |
| PH3-040 | **COMPLETED** | Research note polish: clearer section labels + Download `.md` |
| PH3-050 | **COMPLETED** | ContentGateway suggestion engine (`src/content/suggestions.ts`) + Workbench panel + note Canonical ID + tests |

## Current sprint backlog

| ID | Work | Status | Priority |
|---|---|---|---|
| PH3-010 | ResearchSession types + localStorage | **COMPLETED** | P0 |
| PH3-020 | Expand Workbench form fields | **COMPLETED** | P0 |
| PH3-030 | Authority matrix column expansion | **COMPLETED** | P0 |
| PH3-040 | Research note polish / export | **COMPLETED** | P0 |
| PH3-050 | ContentGateway authority suggestions | **COMPLETED** | P0 |
| PH3-060 | Deep-link hand-off to Citation Verifier | **DEVELOPED (Pending validation)** | P1 |
| PA-005b | CDN mirror implementation | **BACKLOG** | P2 |

### PH3-060 — DEVELOPMENT COMPLETE (Pending final validation)

*Status:* **DEVELOPED (Pending final validation)**  
*Privacy boundary compliance:* Zero privileged client facts or research notes in URLs; only published citation strings and case names are handed off (§5.5).

| Item | Details |
|---|---|
| **Changes made** | • Created `src/lib/citationHandoff.ts` (`buildCitationPayload`, `buildCitationVerifierUrl`, `saveCitationHandoff`, `loadAndClearCitationHandoff`).<br>• Updated `src/components/tools/CitationVerifier.tsx` to read incoming hand-offs on mount, prefill citation textarea, and display a return banner to Workbench.<br>• Updated `src/components/tools/ResearchWorkbench.tsx` with batch "Verify in Citation Verifier ↗" in the Authority Matrix header and individual "Verify ↗" actions on authority rows.<br>• Authored unit tests in `tests/citation-handoff.test.ts` for citation formatting, encoding, and storage safety. |
| **Blockers** | None. |
| **Next action** | Execute final validation phase (run test runner and typecheck) to verify all tests pass, then mark task COMPLETED. |

### PH3-030 — COMPLETED (2026-10-01)

| Check | Result |
|-------|--------|
| Decision date field | **Yes** (`type="date"`) |
| Paragraph / pin cite | **Yes** |
| Treatment select | **Yes** (followed / applied / distinguished / overruled / doubted / cited / persuasive) |
| Source URL/reporter | **Yes** |
| Note includes new columns | **Yes** |
| Unit tests | `tests/research-session.test.ts` (PH3-020 + PH3-030) |
| Privacy | Browser-local only |

### PH3-040 — COMPLETED (2026-10-01)

| Check | Result |
|-------|--------|
| Clearer section labels | **Yes** (Matter filters, Authority matrix, Counter-authorities and contrary views) |
| Structured authority blocks | **Yes** (markdown `###` + labelled bullets) |
| Download `.md` | **Yes** (`downloadResearchNoteMarkdown`) |
| Filename helper | **Yes** (`researchNoteFilename`) |
| Unit tests | `tests/research-session.test.ts` (PH3-020 + 030 + 040) |
| Privacy | Browser-local only; export is user-initiated download |

### PH3-050 — COMPLETED (2026-10-01)

| Check | Result |
|-------|--------|
| Candidate provision/topic resolution | **Yes** (`normalizeSectionCandidates`, `inferSubjectSlug`, `suggestAuthorities`) |
| Graph relationship suggestions | **Yes** (resolves `relatedTopics`, `relatedJudgments`, `doctrines` via `getRelatedEntityIds`) |
| Workbench suggestions panel | **Yes** (read-only ContentGateway assist, search input, type badges, treatise link, one-click add to matrix) |
| Canonical entity tracking | **Yes** (`AuthorityRow.canonicalEntityId` populated, displayed, and linked in UI & markdown note) |
| Suggestion label & verification | **Yes** ("Suggestion — verify before reliance"; defaults to `needs-review`, never auto-filled to `verified`) |
| Unit tests | 35/35 passing (`tests/content-gateway.test.ts` + `tests/research-session.test.ts` + `tests/unit.test.ts`) |
| Lint & build | Green (`npm run lint` / `tsc --noEmit`) |
| Privacy | 100% client-side; zero practice data transmitted |

## Next READY

**PH3-060** — Deep-link hand-off to Citation Verifier with citation payload (P1 on roadmap backlog).
Residual P2 item: **PA-005b** (CDN mirror implementation).
