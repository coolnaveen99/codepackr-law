# Sprint Control Board — CodePackr Law

**Owner:** Product / Architecture coordination  
**Applies to:** `coolnaveen99/codepackr-law` + `coolnaveen99/legal-content`  
**Roadmap position:** Phase 2 — **CLOSED** · Phase 3 — **CLOSED** · Phase 4 implementation started  
**Updated:** 2026-10-01 (PH4-001 COMPLETED — Phase 4 Citation Verification Kickoff)

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
| PH3-060 | **COMPLETED** | Citation handoff helpers + verifier deep-link + Workbench integration + 55/55 tests + tsc |
| PH3-070 | **COMPLETED** | Judgment handoff helpers + starter template + JudgmentAnalyzer banner/sample/copy + Workbench integration + 63/63 tests + tsc |
| PH3-080 | **COMPLETED** | Session JSON import/export + DOCX note generation + Workbench UI integration + 69/69 tests + tsc |
| PH3-090 | **COMPLETED** | Mobile UX pass for matrix + note + 44px touch targets + responsive wrapping + 71/71 tests + tsc |
| PH3-100 | **COMPLETED** | Phase 3 exit audit (`docs/PHASE-3-EXIT-AUDIT.md`, criteria E1–E10 PASS) + 71/71 tests + tsc |
| PH4-001 | **COMPLETED** | Architecture kickoff doc (`docs/architecture/phase-4-citation-verification-kickoff.md`) |
| PH4-010 | **COMPLETED** | Extended parser for SCC OnLine, Neutral citations (INSC/HC), SCR & Supp + `tests/citation-parser.test.ts` + 88/88 tests + tsc |
| PH4-020 | **COMPLETED** | Verification engine matching against canonical manifest & `ALL_JUDGMENTS` + `tests/citation-verification.test.ts` + 100/100 tests + tsc |

## Current sprint backlog

| ID | Work | Status | Priority |
|---|---|---|---|
| PH4-001 | Phase 4 Architecture kickoff & contract | **COMPLETED** | P0 |
| PH4-010 | Extended parser for SCC OnLine, Neutral citations, & volume-less formats | **COMPLETED** | P0 |
| PH4-020 | Verification engine matching against canonical manifest & `ALL_JUDGMENTS` | **COMPLETED** | P0 |
| PH4-030 | Document citation extractor (multi-citation scanner for pasted text) | **READY** | P0 |
| PH4-040 | Authority network & official portal link generator (e-SCR, SCI, HC) | **BACKLOG** | P1 |
| PH4-050 | Citation Verifier UI overhaul: dashboard, filtering, & Workbench roundtrip | **BACKLOG** | P1 |
| PH4-100 | Phase 4 exit audit (evaluation against criteria V1–V10) | **BACKLOG** | P0 |
| PA-005b | CDN mirror implementation | **BACKLOG** | P2 |

### PH4-020 — COMPLETED (2026-10-01)

| Check | Result |
|---|---|
| Landmark corpus matching | **Yes** (Correlates against `ALL_JUDGMENTS` landmark database with exact citation, case name, & token overlap) |
| Canonical manifest integration | **Yes** (`verifyCitation` queries ContentGateway manifest and loads canonical judgment records asynchronously) |
| 5-tier status model adherence | **Yes** (`VERIFIED` >= 0.85, `PARTIAL` 0.50–0.84, `NOT_VERIFIED` 0.0, `CONFLICT`, `USER_PROVIDED`) |
| Anti-hallucination guarantee | **Yes** (Unverified citations retain explicit notice: "Never interpret this as 'the case does not exist'") |
| Official source resolution | **Yes** (`resolveOfficialSources` generates functional deep-links to e-SCR, SCI portal, High Courts, India Code) |
| Citation Verifier UI integration | **Yes** (`CitationVerifier.tsx` displays matched landmark details, confidence badge, ratio decidendi, and official links) |
| Automated unit tests & validation | **Yes** (12/12 dedicated unit tests in `tests/citation-verification.test.ts`, 100/100 test suite passing, `tsc --noEmit` clean) |

### PH4-010 — COMPLETED (2026-10-01)

| Check | Result |
|---|---|
| SCC & SCC Supp formats | **Yes** (Parentheses, brackets, and `1993 Supp (1) SCC 123` formats with volume/page extraction) |
| SCC OnLine database citations | **Yes** (Supreme Court & High Court benches: `2021 SCC OnLine SC 345`, `2022 SCC OnLine Del 108`) |
| Indian Neutral Citations | **Yes** (Supreme Court `2023 INSC 123` & High Courts colon/space: `2023:DHC:1234`, `2024:BOM:567`) |
| AIR & SCR official reports | **Yes** (`AIR 1978 SC 597`, `AIR 2020 Bom 45`, `[1950] SCR 88` with court hint resolution) |
| Case name prefix extraction | **Yes** (Extracts clean party names preceding citation strings, e.g. `Kesavananda Bharati v. State of Kerala, [1973] 4 SCC 225`) |
| Anti-hallucination safeguard | **Yes** (Unrecognized inputs flagged `not-verified` with explicit notice: "Never interpret this as 'the case does not exist'") |
| Citation Verifier UI integration | **Yes** (Updated badge styles, placeholder with neutral citations, sample loaders, and court descriptions) |
| Automated unit tests & validation | **Yes** (17/17 dedicated unit tests in `tests/citation-parser.test.ts`, 88/88 test suite passing, `tsc --noEmit` clean) |

### PH4-001 — COMPLETED (2026-10-01)

| Check | Result |
|---|---|
| Strategic scope & non-goals | **Yes** (Roadmap § 9; visible verification, 100% on-device, zero paywall scraping) |
| Architecture contract published | **Yes** (`docs/architecture/phase-4-citation-verification-kickoff.md`) |
| 5-tier status model defined | **Yes** (`VERIFIED`, `PARTIAL`, `NOT_VERIFIED`, `CONFLICT`, `USER_PROVIDED`) |
| Anti-hallucination rule | **Yes** ("Never convert 'not found' into 'case does not exist'") |
| Phased backlog scheduled | **Yes** (`PH4-010` through `PH4-100`) |
| Exit criteria defined | **Yes** (Criteria V1–V10) |

### PH3-100 — COMPLETED (2026-10-01)

| Check | Result |
|---|---|
| Exit audit evaluation | **Yes** (`docs/PHASE-3-EXIT-AUDIT.md` verifying exit criteria E1–E10) |
| Unified research workflow (E1) | **Yes** (Question → Issues → Authority Matrix → Note generation without re-copying) |
| Client-side persistence & export (E2, E7) | **Yes** (`localStorage` v1 + JSON import/export + Markdown & legal Word `.docx` download) |
| Verification model (E3) | **Yes** (6-tier status model; suggestions default to `needs-review`, never auto-verified) |
| ContentGateway suggestions (E4) | **Yes** (Statutory provisions, related topics, and landmark judgments via graph) |
| Inter-tool deep linking (E5, E6) | **Yes** (Citation Verifier & Judgment Analyzer bi-directional hand-off with back-links) |
| Privacy & ethics boundaries (E8) | **Yes** (100% on-device; zero client facts/research text transmitted or leaked in query strings) |
| Mobile accessibility baseline (E9) | **Yes** (44px touch targets, responsive card rows, `overflow-x-hidden`, wrapped note preview) |
| Unit tests & validation (E10) | **Yes** (71/71 tests passing in `npm test` across 25 suites; `npm run lint` / `tsc --noEmit` green) |

### PH3-090 — COMPLETED (2026-10-01)

| Check | Result |
|---|---|
| Mobile overflow safety | **Yes** (`w-full overflow-x-hidden`, responsive container padding prevents horizontal overflow) |
| Minimum 44px touch targets | **Yes** (`min-h-[44px]` on all primary note export & session actions, 38px on matrix row actions) |
| Responsive matrix row layout | **Yes** (Vertical stack with status dropdown and touch-friendly actions eliminates squishing on <375px screens) |
| Responsive action bar | **Yes** (2-column touch grid on mobile / flex wrap on desktop) |
| Research note wrapping | **Yes** (`break-words` and `overflow-x-auto` on note preview `<pre>` blocks) |
| Privacy boundary compliance | **Yes** (100% browser-local; zero substantive research text or telemetry transmitted — roadmap §5.5) |
| Unit tests & validation | **Yes** (71/71 tests passing in `npx tsx --test`, `npm run lint` / `tsc --noEmit` green) |

### PH3-080 — COMPLETED (2026-10-01)

| Check | Result |
|---|---|
| JSON session export | **Yes** (`exportResearchSessionJson`, `downloadResearchSessionJson` with safe filename) |
| JSON session import | **Yes** (`validateAndNormalizeSession` validates/coerces, file picker in UI with status banner) |
| Word .docx note generation | **Yes** (`generateResearchNoteDocx`, `downloadResearchNoteDocx` using `docx` with 1-inch margins, styled sections) |
| Workbench UI polish | **Yes** (Export JSON, Import JSON, Download .docx with spinner, Copied note confirmation) |
| Privacy boundary compliance | **Yes** (100% client-side file save/load; zero session data in URLs or remote servers — roadmap §5.5) |
| Unit tests & validation | **Yes** (69/69 tests passing in `npx tsx --test`, `npm run lint` / `tsc --noEmit` green) |

### PH3-070 — COMPLETED (2026-10-01)

| Check | Result |
|---|---|
| Handoff starter template | **Yes** (`buildStarterJudgmentText` formats case metadata header + slot for pasted judgment text) |
| Deep-link URL generator | **Yes** (`buildJudgmentAnalyzerUrl` generates `/tool/judgment-analyzer?case=...`) |
| Storage fallback & safe lifecycle | **Yes** (`saveJudgmentHandoff`, `loadAndClearJudgmentHandoff` with `sessionStorage` fallback & cleanup) |
| Judgment Analyzer mount hook | **Yes** (populates starter slot, shows notification banner with "Return to Workbench" backlink) |
| Landmark sample loader | **Yes** (one-click "Load sample landmark" Maneka Gandhi test fixture for heuristic parsing) |
| Holding extraction copy-back | **Yes** (one-click "Copy Held for Workbench" with visual copy confirmation) |
| Research Workbench integration | **Yes** (per-row "Analyze ↗" actions in Authority Matrix) |
| Privacy boundary compliance | **Yes** (Zero privileged client facts, questions, or notes in URL query strings — roadmap §5.5) |
| Unit tests & validation | **Yes** (63/63 tests passing in `npx tsx --test`, `npm run lint` / `tsc --noEmit` green) |

### PH3-060 — COMPLETED (2026-10-01)

| Check | Result |
|---|---|
| Handoff payload extraction | **Yes** (`buildCitationPayload` formats citation/case name, deduplicates, safe from note leakage) |
| Deep-link URL generator | **Yes** (`buildCitationVerifierUrl` generates `/tool/citation-verifier?q=...`) |
| Storage fallback & safe lifecycle | **Yes** (`saveCitationHandoff`, `loadAndClearCitationHandoff` with `sessionStorage` fallback & cleanup) |
| Citation Verifier mount hook | **Yes** (populates textarea, shows notification banner with "Return to Workbench" backlink) |
| Research Workbench integration | **Yes** (Authority Matrix header batch "Verify in Citation Verifier ↗" + per-row "Verify ↗") |
| Privacy boundary compliance | **Yes** (Zero privileged client facts, questions, or notes in URL query strings — roadmap §5.5) |
| Unit tests & validation | **Yes** (55/55 tests passing in `npx tsx --test`, `npm run lint` / `tsc --noEmit` green) |

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

**PH4-030** — Document citation extractor (multi-citation scanner for pasted text) (P0).  
Residual backlog: **PA-005b** (CDN mirror implementation, P2).
