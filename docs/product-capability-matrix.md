# CodePackr Law — Product Capability Matrix

**Phase:** 0 — Baseline Audit and Stabilization  
**Repo:** coolnaveen99/codepackr-law  
**Live:** https://law.codepackr.com  
**Generated:** 2026-09-30  
**Source of truth for inventory:** `src/App.tsx`, `src/lib/urls.ts`, `src/data/tools.ts`, component tree  
**Status:** Inventory complete from repository inspection. Local `npm` quality command results belong in `docs/quality-baseline-2026-09.md`.

---

## 1. Route inventory

Path-based History API routes (`src/lib/urls.ts`). Hash routes are migrated once on boot.

| Route pattern | `AppRoute` type | Primary component | Nav / discoverability |
|---|---|---|---|
| `/` | `home` | `HomePage` | Header, mobile tab Home |
| `/subjects` | `subjects` | `SubjectsList` | Header, mobile Study |
| `/subjects/:slug` | `subject` | `SubjectDetail` | Subject list, header |
| `/subjects/:subjectSlug/:topicId` | `topic` | `TopicDetail` | Subject detail |
| `/tool/:slug` | `tool` | Tool component by slug | Home tool cards, header |
| `/case-law` | `case-law` | `CaseLawLibrary` | Header, mobile Judgments |
| `/case-law/judgment/:id` | `case-law` + id | `CaseLawLibrary` | Case library |
| `/knowledge` | `knowledge` | `KnowledgeBrowser` | Header |
| `/knowledge/:entityId` | `knowledge` + id | `KnowledgeBrowser` | Knowledge links |
| `/contact` or `/feedback` | `contact` | `ContactFeedback` | Footer, mobile More |

### Known route/docs inconsistency (track for Phase 1)

- Runtime navigation uses **`/subjects/...`** (`urls.ts`).
- Some SEO `setPageMeta` paths in `App.tsx` still use **`/subject/...`** (singular).
- Topic SEO path uses `/subject/${slug}/topic/${id}`; runtime uses `/subjects/${slug}/${id}`.

**Action:** Align SEO path strings with `urls.ts` in Phase 1 (no user-facing path break if runtime already correct).

---

## 2. Tool catalogue (`src/data/tools.ts`)

| # | Tool id / slug | Name | Category | Featured | Component | Data source (primary) | Client-side | Tests | Quality notes |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `aibe-mcq` | AIBE & Judiciary MCQ Practice | mcq | yes | `AibeMcqPractice` + practice/exam containers | subject MCQ banks / live subjects | yes | unit suite exists (`npm test`) | High yield; modes practice/exam |
| 2 | `bns-ipc-mapper` | BNS ↔ IPC Sanhita Mapper | bare-acts | yes | `BnsIpcMapper` | BNS/IPC mapping data | yes | partial | Flagship transition tool |
| 3 | `bnss-crpc-mapper` | BNSS ↔ CrPC Sanhita Mapper | bare-acts | yes | `BnsIpcMapper` (act param) | BNSS/CrPC mapping | yes | partial | Same shell as BNS mapper |
| 4 | `bsa-iea-mapper` | BSA ↔ Evidence Act Mapper | bare-acts | yes | `BnsIpcMapper` (act param) | BSA/IEA mapping | yes | partial | Same shell |
| 5 | `section-flashcards` | Important Section Flashcards | study-aids | yes | `SectionFlashcards` | curated sections | yes | TBD | Active recall |
| 6 | `exam-timer` | Exam Timer & Pacing Helper | study-aids | no | `ExamTimer` | none (local timer) | yes | TBD | AIBE / judiciary presets |
| 7 | `legal-maxims` | Legal Maxims Quiz & Dictionary | reference | no | `LegalMaximsTool` | maxims dataset | yes | TBD | Quiz + dictionary |
| 8 | `landmark-cases` | Landmark Case Laws Flashcards | reference | no | `LandmarkCasesTool` | landmark cases data | yes | TBD | Flashcard format |
| 9 | `case-law` / route `/case-law` | Case Law Library & Judgment Reader | reference | yes | `CaseLawLibrary` | `src/data/judgments` | yes | `validate:judgments` | Dedicated route, not only `/tool/` |
| 10 | `knowledge` / route `/knowledge` | Reusable Legal Knowledge | reference | yes | `KnowledgeBrowser` | `src/data/knowledge` | yes | TBD | Canonical entity IDs |
| 11 | `document-compare` | Legal Document Compare | reference | yes | `DocumentCompare` | user paste only | yes | TBD | Privacy-first diff |
| 12 | `legal-draft-studio` | Legal Draft Studio | reference | yes | `LegalDraftStudio` | draft catalogue / scaffolds | yes | TBD | Educational templates + checklists |

**Tool count registered in `TOOLS`:** 12 entries (case-law and knowledge also have first-class routes).

---

## 3. Study / library surfaces (not in TOOLS array)

| Surface | Route | Component | Audience | Data | Client-side | Notes |
|---|---|---|---|---|---|---|
| Home | `/` | `HomePage` + hero/cards | all | tools + subjects search | yes | Dual-track hero, tool grid, construction banner |
| Subjects list | `/subjects` | `SubjectsList` | students | `liveSubjects` / subjects registry | yes | 20 curriculum subjects |
| Subject detail | `/subjects/:slug` | `SubjectDetail` | students | subject meta + topics | yes | Catalog + practice entry |
| Topic treatise | `/subjects/:slug/:topicId` | `TopicDetail` + `ModularStudyRenderer` | students / advocates | lazy `src/data/topics/**` | yes | Depth standard applies here |
| Contact / feedback | `/contact` | `ContactFeedback` | all | form (see component) | primarily client | Feedback channel |

---

## 4. Layout / shell

| Component | Role |
|---|---|
| `CodepackrFamilyBar` | Cross-product family bar |
| `Header` | Primary nav: home, subjects, tools, knowledge, case law, contact |
| `Footer` | Links + contact |
| `MobileBottomNav` | Tabs: home, study, judgments, search, more |
| `NavDrawer` | Drawer navigation |
| `LegalTrustView` | Trust / disclaimer surface |

---

## 5. Data domains (high level)

| Domain | Location | Role |
|---|---|---|
| Subject + topic registry | `src/data/subjects.ts`, `liveSubjects` | Catalog metadata; floors locked in playbook |
| Topic treatises | `src/data/topics/<subject>/` | Lazy full notes |
| Bare acts / sections | `src/data/bns`, `bnss`, `bsa`, `constitution`, `cpc`, … | Section catalogs |
| Judgments | `src/data/judgments` | Case law library |
| Knowledge graph | `src/data/knowledge` | Canonical reusable entities |
| Tools metadata | `src/data/tools.ts` | Tool registry |
| Draft studio content | under tools / data drafts | Educational scaffolds |

**Catalog floor (from existing Phase 0 freeze):** **3,552** registered topics across **20** subjects (see `docs/phase-0-baseline.md` and subject-coverage checklist).

---

## 6. Universal tool quality checklist (target)

Every production tool should eventually document:

| Criterion | Target |
|---|---|
| Loading state | Where async/lazy |
| Empty state | No data / no selection |
| Error state | Parse / validation failures |
| Reset | Clear session inputs |
| Sample / demo | Safe sample content |
| Copy / export | Where useful |
| Mobile layout | Usable ≤ 390px |
| Keyboard / labels | Semantic controls |
| Dark/light | Brand tokens (dark toggle currently no-op in App) |
| Legal disclaimer | Educational / not legal advice |
| Source / verification metadata | For legal claims |

**Phase 0 action:** Matrix records presence of tools; per-tool deep quality audit continues in later phases and `tool-quality-gate` skill.

---

## 7. Scripts relevant to baseline

| Script | Purpose |
|---|---|
| `npm run lint` | `tsc --noEmit` |
| `npm run checklist` | `scripts/generate_checklist.ts` |
| `npm run audit` | `scripts/audit_subjects.ts` |
| `npm run validate:topics` | topic file validation |
| `npm run validate:judgments` | judgment validation |
| `npm run build` | tsc + sitemap + vite build + prerender |
| `npm test` | `tests/unit.test.ts` |

---

## 8. Gaps vs enhancement roadmap (P0 tools not yet built)

These appear in `docs/law-platform-enhancement-roadmap.md` but are **not** present as dedicated tools/routes in the current App:

| Roadmap item | Status |
|---|---|
| Legal Research Workbench | Not built |
| Citation Verifier | Not built |
| Judgment Analyzer (paste/TXT/DOCX) | Not built as dedicated analyzer tool |
| Case Brief Builder / Chronology / Evidence / Argument matrices | Not built as workbench |
| Limitation / Interest calculators | Not built |
| Filing checklist system (expand beyond draft studio) | Partial via Draft Studio |
| Global unified search (beyond home search) | Partial (home subject/topic search) |
| BNS/BNSS/BSA Transition Centre (beyond mappers) | Partial (three mapper tools) |

Existing foundations that must not be rebuilt: privacy client-side model, subject catalog, mappers, case-law library, knowledge browser, draft studio, document compare, MCQ/practice, flashcards, maxims, exam timer.

---

## 9. Exit criteria tracking (Phase 0)

| Criterion | Status |
|---|---|
| Production build green | **Pending local/CI run** — record in quality baseline |
| No unresolved TypeScript errors | **Pending** `npm run lint` |
| No broken routes | Inventory complete; SEO path singular/plural inconsistency noted |
| Current content counts documented | Catalog floor 3,552 / 20 subjects documented |
| Current tool catalogue documented | This matrix |

---

## 10. Maintenance rule

When adding a route or tool:

1. Update `src/lib/urls.ts` and `App.tsx`.
2. Register tools in `src/data/tools.ts` when applicable.
3. Update this matrix.
4. Update homepage / nav if user-facing.
5. Run lint, checklist, audit, build; record in quality baseline when doing a formal baseline refresh.
