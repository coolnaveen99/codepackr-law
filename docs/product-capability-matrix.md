# CodePackr Law — Product Capability Matrix

**Phase:** 0 inventory (refreshed post Phases 0–32)  
**Repo:** coolnaveen99/codepackr-law  
**Live:** https://law.codepackr.com  
**Updated:** 2026-09-30  
**Source of truth:** `src/App.tsx`, `src/lib/urls.ts`, `src/data/tools.ts`  
**Status:** Inventory aligned with main after enhancement-roadmap Phases 0–32.

---

## 1. Route inventory

| Route pattern | `AppRoute` type | Primary component |
|---|---|---|
| `/` | `home` | `HomePage` |
| `/subjects` | `subjects` | `SubjectsList` |
| `/subjects/:slug` | `subject` | `SubjectDetail` |
| `/subjects/:subjectSlug/:topicId` | `topic` | `TopicDetail` |
| `/tool/:slug` | `tool` | Tool by slug |
| `/case-law` | `case-law` | `CaseLawLibrary` |
| `/case-law/judgment/:id` | `case-law` + id | `CaseLawLibrary` |
| `/knowledge` | `knowledge` | `KnowledgeBrowser` |
| `/knowledge/:entityId` | `knowledge` + id | `KnowledgeBrowser` |
| `/contact` / `/feedback` | `contact` | `ContactFeedback` |

SEO paths use `/subjects/...` (aligned with runtime).

---

## 2. Tool catalogue (`src/data/tools.ts`)

**Registered tools: 32** (including `case-law` and `knowledge` entries that also have first-class routes).

| # | slug | Name | Status |
|---|---|---|---|
| 1 | `aibe-mcq` | AIBE & Judiciary MCQ Practice | Live |
| 2 | `research-workbench` | Legal Research Workbench | Live (Phase 3) |
| 3 | `citation-verifier` | Citation Verifier | Live (Phase 4) |
| 4 | `judgment-analyzer` | Judgment Analyzer | Live (Phase 5) |
| 5 | `judgment-compare` | Judgment Compare | Live (Phase 6) |
| 6 | `case-prep` | Case Preparation Workbench | Live (Phase 7) |
| 7 | `filing-checklists` | Filing & Court Checklists | Live (Phase 9) |
| 8 | `limitation-calculator` | Limitation Calculator | Live (Phase 10) |
| 9 | `transition-centre` | BNS / BNSS / BSA Transition Centre | Live (Phase 11) |
| 10 | `case-brief-builder` | Case Brief Builder | Live (Phase 12) |
| 11 | `study-planner` | Study Planner | Live (Phase 12) |
| 12 | `practice-dashboard` | Advocate Practice Dashboard | Live (Phase 13) |
| 13 | `cause-list-organizer` | Cause List Organizer | Live (Phase 14) |
| 14 | `primary-source-finder` | Primary Source Finder | Live (Phase 15) |
| 15 | `privacy-controls` | Privacy & Local Data | Live (Phase 16) |
| 16 | `global-search` | Global Search | Live (Phase 19) |
| 17 | `bns-ipc-mapper` | BNS ↔ IPC Sanhita Mapper | Live |
| 18 | `bnss-crpc-mapper` | BNSS ↔ CrPC Sanhita Mapper | Live |
| 19 | `bsa-iea-mapper` | BSA ↔ Evidence Act Sanhita Mapper | Live |
| 20 | `section-flashcards` | Important Section Flashcards | Live |
| 21 | `exam-timer` | Exam Timer & Pacing Helper | Live |
| 22 | `legal-maxims` | Legal Maxims Quiz & Dictionary | Live |
| 23 | `landmark-cases` | Landmark Case Laws Flashcards | Live |
| 24 | `case-law` | Case Law Library | Live (route `/case-law`) |
| 25 | `knowledge` | Reusable Legal Knowledge | Live (route `/knowledge`) |
| 26 | `document-compare` | Legal Document Compare | Live |
| 27 | `legal-draft-studio` | Legal Draft Studio | Live (Phase 8 + 25 tiers) |
| 28 | `concept-versus` | Concept Versus | Live (UI redesign restoration) |
| 29 | `court-forum-directory` | Court & Forum Directory | Live (Phase 26) |
| 30 | `research-bundle` | Senior Counsel Research Bundle | Live (Phase 27) |
| 31 | `neutral-analysis` | Neutral Analysis Mode | Live (Phase 28) |
| 32 | `usage-metrics` | Privacy-safe Usage Metrics | Live (Phase 22) |

All listed tools are wired in `App.tsx` (or dedicated routes for case-law / knowledge).

---

## 3. Cross-cutting (Phases 16–32)

| Capability | Location |
|---|---|
| Versioned local storage | `src/lib/localStore.ts` |
| Offline / PWA shell | `public/sw.js`, `manifest.webmanifest`, `OfflineBanner`, `src/lib/offline.ts` |
| Aggregate analytics only | `src/lib/analytics.ts` |
| Sanitize helpers | `src/lib/sanitize.ts` |
| Source / copyright policy constants | `src/data/sourcePolicy.ts` |
| Draft tiers / governance | `src/data/draftTiers.ts` |
| Court / state seed | `src/data/courtProfiles.ts` |
| AI architecture (policy only) | `docs/ai-architecture-contract.md` |
| Content verification policy | `docs/legal-content-verification-policy.md` |
| Copyright governance | `docs/copyright-data-governance.md` |
| Monetization trust | `docs/monetization-trust-policy.md` |

---

## 4. Catalog floor

**3,552** registered topics across **20** subjects (see `docs/phase-0-baseline.md` / subject-coverage checklist). Counts must not drop except on documented merges.

---

## 5. Gaps vs roadmap (honest)

| Item | Status |
|---|---|
| Phases 0–32 numbered deliverables | **Closed** as client-side / policy MVPs — see `docs/phase-*-implementation.md` |
| Remote citation DB / PDF OCR | Not in scope (honest MVP limits) |
| Cloud sync / team workspace / paid tier | Future optional (Phase 32 policy); **not shipped** |
| Content depth upgrade of all topics | Ongoing under `content-depth-and-judgment-decoder-standard.md` / `SITE_100_PERCENT_COMPLETION.md` |
| Full E2E / responsive test matrix | Partial — unit tests exist; deeper E2E still optional quality work |
| Dark mode toggle | Still no-op in `App.tsx` (product remains light) |
| Formal `npm` command evidence rows | Operator fills `docs/quality-baseline-2026-09.md` on local/CI run |

---

## 6. Scripts

| Script | Purpose |
|---|---|
| `npm run lint` | `tsc --noEmit` |
| `npm run checklist` | Subject coverage checklist |
| `npm run audit` | Floor / notes / high-yield / missing files |
| `npm run validate:topics` | Topic integrity |
| `npm run validate:judgments` | Judgment integrity |
| `npm test` | Unit tests |
| `npm run build` | Production build |

---

## 7. Maintenance rule

When adding a route or tool: update `urls.ts` / `App.tsx` / `tools.ts`, this matrix, nav if needed, then run lint + test + build.


## Phase 25 — Draft Catalogue Governance

The Legal Draft Studio now enforces four governance tiers rather than treating all document entries as equivalent:

1. **Tier 1 — Verified full template:** reviewed substantive educational template; professional completion still required.
2. **Tier 2 — Structured educational scaffold:** structured drafting aid requiring completion and verification.
3. **Tier 3 — Catalogue entry:** document-type discovery only; no generic pleading body or export.
4. **Tier 4 — Checklist:** filing/readiness checklist, not a pleading.

Unclassified entries default conservatively to Tier 2. The catalogue generator emits Tier 3 entries and no longer constructs a generic pseudo-pleading.


## UI redesign regression additions — 2026-10-02

| Capability | Status | Regression protection |
|---|---|---|
| Legal Draft Studio | RESTORED / VISIBLE | Primary navigation + default template catalogue |
| Legal Document Compare | RESTORED / VISIBLE | Primary navigation + production route matrix |
| Concept Versus | RESTORED / NEW SURFACE | Tool registry + primary navigation + production route matrix |
| Draft template discovery | RESTORED | Catalogue renders without requiring an initial filter |
