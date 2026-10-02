# Codepackr Law — Site 100% Completion Playbook

**Status:** Master execution file for any AI or human finishing `law.codepackr.com`.  
**Repo:** `coolnaveen99/codepackr-law`  
**Live:** https://law.codepackr.com  
**Created:** 2026-09-25  
**Owner rule:** Follow this file phase by phase. Do not skip phases. Do not drop topics.

This document is the single execution plan that takes the site from “catalog live, product unfinished” to **100% done**.

Companion files (do not rewrite them; obey them):

| File | Role |
|------|------|
| `AI_INSTRUCTIONS.md` | Product identity, architecture, golden rules |
| `.github/copilot-instructions.md` | Non-negotiable legal + brand rules |
| `.github/instructions/global-legal-content.md` | Legal research / no-hallucination |
| `.github/instructions/student-answer-content.md` | IRAC + written submissions standard |
| `.github/skills/add-topic-notes.md` | How to add one topic file |
| `.github/skills/add-new-subject.md` | How to add a subject (rare) |
| `.github/skills/legal-content-workflow.md` | Content workflow |
| `.github/skills/reusable-legal-knowledge.md` | Canonical knowledge graph |
| `.github/skills/tool-quality-gate.md` | Tool pass/fail |
| `prompts/DISPATCHER.md` | Fast topic authoring router |
| `prompts/TOPIC_AUTHORING_AI_PROMPT.md` | Full treatise authoring |
| `prompts/UPGRADE_EXISTING_TOPIC_PROMPT.md` | Upgrade a weak topic |
| `prompts/SUBJECT_AUDIT_AND_EXPANSION_PROMPT.md` | Subject-wide missing-topic audit |
| `docs/missing-part.md` | Original architecture gaps (this playbook sequences them) |
| `docs/subject-coverage-checklist.md` | Live topic inventory — never let it drift |

---

## 0. What “100% done” means

Do **not** treat “checklist says 100%” as site-complete. Today the checklist means **every topic ID is registered**. Many pages are still synthesized fallbacks. The site is 100% done only when **all four layers** below are green.

### Layer A — Product shell (UX)

Homepage, subject page, topic page, practice, exam, case-law reader, knowledge browser, nav, search, progress, PWA/offline, privacy, light/dark, mobile.

### Layer B — Zero topic omission (catalog integrity)

Every BCI / AIBE / Judiciary syllabus doctrine, section, article, order, defence, remedy, and drafting format for the **20 locked subjects** has a dedicated clickable topic. No silent drops. No “we will add later” holes inside a subject that is marked complete.

### Layer C — Treatise quality floor

Every registered topic opens a real learning page that is **not** raw markdown and **not** an empty synthesizer stub.

- **High-yield topics:** full Senior Counsel / PhD treatise (Track A + Track B).
- **Other catalog topics:** structured minimum chapter (see §4 Quality Floor).
- Historical IPC / CrPC / IEA text is concordance only, visually labelled.

### Layer D — Launch readiness

Construction banner retired or reduced to a thin “content expanding” chip. Lint + build pass. Validation scripts pass. Core e2e paths pass. README matches live site. `docs/missing-part.md` checkboxes are `[x]`.

**The site is not 100% until Layers A–D are all green.**

---

## 1. Session start protocol (every AI session)

Copy this and do it before writing code.

```text
1. Read this file (docs/SITE_100_PERCENT_COMPLETION.md) — identify CURRENT PHASE.
2. Read AI_INSTRUCTIONS.md + .github/copilot-instructions.md.
3. If touching legal study text, also read:
   - .github/instructions/global-legal-content.md
   - .github/skills/add-topic-notes.md
   - .github/skills/reusable-legal-knowledge.md
4. Run: npm run audit
5. Open docs/subject-coverage-checklist.md Global Coverage Summary.
6. State in the session notes:
   - Phase you will finish (ONE phase, or one numbered batch inside a phase)
   - Files you will touch
   - Topics you will NOT delete
7. Work. Then run the Phase Exit Gate.
```

### Hard stops (never violate)

1. **100% client-side.** No network of grades, answers, notes, search payloads.
2. **Seal burgundy only.** Tailwind `blue-*` remapped in `src/index.css`. Never Dev blue or Finance emerald.
3. **Never delete a topic ID** from `src/data/subjects.ts` unless it is a proven duplicate of another ID *and* you add a redirect / alias.
4. **Never put full essays in `subjects.ts`.** Notes live in `src/data/topics/<slug>/<id>.ts`.
5. **Never invent sections, articles, illustrations, or case citations.** Unverified → `needs-review`.
6. **Never ship raw markdown** (`###`, `**`, `---`) in the UI. Use `ModularStudyRenderer`.
7. **Never treat IPC / CrPC / IEA as current criminal law.** Current = BNS / BNSS / BSA.
8. **One phase per PR / commit batch** unless the user names two adjacent phases.
9. **Do not start Phase N+1 while Phase N Exit Gate is red.**
10. **Do not add a 21st subject** unless the user explicitly asks and you follow `.github/skills/add-new-subject.md`.

---

## 2. Locked subject register (do not drop any)

These 20 slugs are frozen. Counts must never go *down* except when merging a proven duplicate (document the merge in the PR).

| # | Subject | Slug | AIBE Qs | Catalog floor (do not go below) | Priority |
|---|---------|------|---------|----------------------------------|----------|
| 1 | Constitutional Law | `constitution` | 10 | 523 | P0 |
| 2 | Criminal Procedure (BNSS / CrPC) | `bnss` | 10 | 539 | P0 |
| 3 | Code of Civil Procedure | `cpc` | 10 | 235 | P0 |
| 4 | Bharatiya Nyaya Sanhita (BNS / IPC) | `bns` | 8 | 368 | P0 |
| 5 | Evidence (BSA / IEA) | `bsa` | 8 | 177 | P0 |
| 6 | Family Law | `family` | 8 | 38 | P0 |
| 7 | Contract, SRA, TPA, NI Act | `contract` | 8 | 42 | P0 |
| 8 | Law of Torts | `tort` | 5 | 29 | P1 |
| 9 | ADR & Arbitration | `adr` | 4 | 125 | P1 |
| 10 | Professional Ethics | `ethics` | 4 | 80 | P1 |
| 11 | Petition Formats & Drafting | `petition-formats` | 0 | 8 | P1 |
| 12 | Public Interest Litigation | `pil` | 2 | 18 | P1 |
| 13 | Labour & Industrial Law | `labour` | 3 | 523 | P2 |
| 14 | Company Law | `company` | 2 | 561 | P2 |
| 15 | Taxation Laws | `taxation` | 2 | 51 | P2 |
| 16 | Administrative Law | `admin` | 2 | 44 | P2 |
| 17 | Environmental Law | `environment` | 2 | 31 | P2 |
| 18 | Cyber Law | `cyber` | 2 | 53 | P2 |
| 19 | Land Laws | `land` | 2 | 44 | P2 |
| 20 | Intellectual Property Rights | `ipr` | 2 | 63 | P2 |

**Grand floor: 3,552 registered topics.**  
If `npm run audit` reports fewer topics than the floor for a slug, **stop feature work and restore the missing IDs first.**

After any catalog change:

```bash
npm run checklist
npm run audit
```

---

## 3. Zero-omission protocol (how to add, never how to delete)

When a user or syllabus review finds a missing doctrine:

1. Confirm it is not already registered under another ID (`subjects.ts` search + knowledge graph search).
2. If it exists as a knowledge record only, add a subject topic that *reuses* the canonical ID via `[[REF:]]`.
3. If it is genuinely missing:
   - Add metadata in `src/data/subjects.ts` (`hasNotes: false` until the file exists).
   - Author `src/data/topics/<slug>/<id>.ts` with `prompts/TOPIC_AUTHORING_AI_PROMPT.md`.
   - Set `hasNotes: true`.
   - Run `npm run checklist`.
4. Cross-check against:
   - BCI / AIBE paper pattern for that subject
   - Subject instruction file `.github/instructions/subjects/<slug>.md` if present
   - Benchmark textbooks named in copilot-instructions (do not copy copyrighted text)
5. **Forbidden:** shrinking a subject “to keep the UI clean.” Use filters, clusters, and virtualization instead.

### Duplicate rule

If two IDs teach the same provision (example: `art-32` and `art-32-226` overlap):

- Keep both if one is a theme treatise and one is the article page.
- Do not delete the article page.
- Cross-link them in `related` / knowledge refs.

---

## 4. Quality floor for every topic page

A topic may be marked **Complete** in the checklist only if the opened page has:

### Minimum floor (every catalog topic, including long Acts)

- Title + provision citation (Article / Section / Order)
- Current-law status (in force / omitted / transitional)
- Short doctrinal statement (not a one-liner stub)
- Ingredients or operative parts
- At least one worked illustration **or** an explicit “no official illustration” note
- Related topics (previous / next provision where numbered)
- Rendered through `ModularStudyRenderer` (no raw markdown)
- Track B mini-block: forum / limitation / evidence pointer when applicable

### Full treatise (mandatory for all `highYield: true` topics)

Follow `prompts/TOPIC_AUTHORING_AI_PROMPT.md` and `.github/skills/student-answer-content.md`:

- Legislative intent
- Provision deconstruction (clauses, provisos, explanations)
- Dual illustrations (applies vs fails)
- IRAC case brief with extracted ratio (verified cases only)
- Written submissions skeleton (both sides)
- BSA ss. 104–106 and s. 63 where evidence/digital records matter
- Concordance note if BNS/BNSS/BSA maps to IPC/CrPC/IEA
- Exam points **without** “10-mark / 16-mark” pedagogy

Benchmark file: `src/data/topics/cpc/s-32.ts`.

### Honesty badge (required on UI)

Each topic card and topic header must show one of:

- `Full treatise`
- `Structured catalog note`
- `Needs review`

Never label a synthesizer stub as “Full treatise.”

---

## 5. Phase map (execute in this order)

```text
Phase 0  Integrity freeze + measurement
Phase 1  Homepage 100%
Phase 2  Subject page 100%
Phase 3  Topic page + progress graph
Phase 4  Practice mode 100%
Phase 5  Exam simulation 100%
Phase 6  Case law library 100%
Phase 7  High-yield treatise completion (P0 subjects)
Phase 8  Remaining catalog quality floor (all 20 subjects)
Phase 9  Launch hardening (tests, SEO, banner, docs)
```

Work unit: **one phase**, or **one numbered batch inside a phase** (example: Phase 7 Batch BNS-HY-01).

---

# PHASE 0 — Integrity freeze + measurement

**Goal:** Make it impossible to lose topics while later phases change UI.

### Tasks

- [ ] 0.1 Add `src/lib/progress.ts` (or `src/data/progress.ts`) with **browser-only** localStorage keys:
  - `cplaw.progress.v1` — `{ topicId, subjectSlug, completedAt }[]`
  - `cplaw.lastRead.v1` — `{ subjectSlug, topicId, sectionId?, updatedAt }`
  - `cplaw.exam.v1` — in-progress exam snapshot (used in Phase 5)
  - Never store this off-device.
- [ ] 0.2 Add `src/utils/topics/topicValidation.ts`:
  - Every `SUBJECTS[].topics[].id` is unique per subject.
  - Every `hasNotes: true` topic has a glob-resolvable file under `src/data/topics/<slug>/<id>.ts`.
  - No subject topic count below the floor table in §2.
- [ ] 0.3 Add npm script `"validate:topics": "npx tsx scripts/validate_topics.ts"`.
- [ ] 0.4 Extend `npm run audit` output to print:
  - catalog count vs floor
  - `hasNotes` count
  - high-yield count
  - files missing for `hasNotes: true`
- [ ] 0.5 Document current baseline numbers in `docs/phase-0-baseline.md` (generate once, commit).
- [ ] 0.6 Confirm construction banner still tells the truth (do not remove it in Phase 0).

### Files likely touched

`package.json`, `scripts/audit_subjects.ts`, new `scripts/validate_topics.ts`, new progress helper, `docs/phase-0-baseline.md`.

### Exit gate

```bash
npm run lint
npm run audit
npm run validate:topics
npm run build
```

All pass. Topic count per subject ≥ floor. Zero deleted IDs vs baseline.

---

# PHASE 1 — Homepage 100%

**Files:** `src/components/home/*`, `src/App.tsx` only if routing/search wiring needs it.

### Product intent

A student or junior advocate lands and can reach a subject or high-yield topic in **two clicks**. The page must look finished, not like a manifesto.

### Tasks

- [ ] 1.1 **Banner.** Keep `UnderConstructionBanner` until Phase 9, but:
  - Collapse by default.
  - Show one honest line: catalog live / treatises expanding.
  - Do not repeat the 3,552 figure in the banner if the stats bar already shows it.
- [ ] 1.2 **Hero copy fix (`DualTrackHero.tsx`).**
  - Track A (Students) must talk about syllabus coverage, IRAC study, AIBE / Judiciary — **not** chamber drafting as the first column.
  - Track B (Advocates) keeps jurisdiction, BSA proof, pleading skeletons.
  - Remove mixed “chamber briefs” heading from Track A.
- [ ] 1.3 **Continue Learning row** (new component `ContinueLearning.tsx`).
  - If `cplaw.lastRead.v1` exists, show subject + topic + “Resume”.
  - If empty, show 4 default high-yield jumps (Art. 21, BNS s. 103, BNSS s. 480, CPC Order 39).
- [ ] 1.4 **Stats honesty (`LibraryStatsBar`).**
  - Keep: 20 subjects, catalog count, client-side privacy.
  - Add: “Full treatises” count vs “Catalog notes” count (derived from `hasNotes` + a `depth` flag if you add one).
  - Do not claim 100% treatise quality if Layer C is unfinished.
- [ ] 1.5 **Omni-search.**
  - Keep live subject + topic results.
  - Add “View all N matches” that opens Subjects list or a dedicated search view with the query preserved.
  - Cap on homepage dropdown may stay 16, but the overflow path is mandatory.
- [ ] 1.6 **Wings grid.**
  - Default tab: `All Wings` is OK, but first visible wing should be Wing 1 (Constitutional & Criminal Trilogy).
  - Each subject card: AIBE Q, topic count, 3 high-yield chips, Open Catalog.
  - Cards must not wrap or clip on 360px.
- [ ] 1.7 **AIBE matrix** stays, but each row must open the subject, not a dead tool.
- [ ] 1.8 **Tools deck** stays below wings. Empty-state already exists; keep it.
- [ ] 1.9 **Tone pass.** Keep one short covenant paragraph. Cut repeated “PhD / Sacred / forensic chamber” stacking so the page reads as a library, not a brochure.
- [ ] 1.10 Light + dark + 360 / 768 / 1280 check.

### Exit gate

- [ ] Track A copy is student-correct.
- [ ] Resume works after visiting one topic and returning home.
- [ ] Search overflow has a path.
- [ ] No topic links 404.
- [ ] `npm run lint && npm run build`

---

# PHASE 2 — Subject page 100%

**File:** `src/components/subjects/SubjectDetail.tsx` (+ small helpers).

### Product intent

Subject landing = introduction + complete catalog. Student can jump to Art/Sec/Order instantly. Long catalogs (500+) must stay usable.

### Tasks

- [ ] 2.1 Sticky command bar: back link, search, jump-to-number, filter pills.
- [ ] 2.2 **Progress strip** — `X / Y topics opened` and `X completed` from local progress; high-yield remaining count.
- [ ] 2.3 **Continue Learning card** at top when last-read belongs to this subject.
- [ ] 2.4 **Depth badges** on every topic row: Full treatise / Catalog note / Needs review.
- [ ] 2.5 **Chapter / cluster TOC** (sticky on `md+`). Constitution: Part / cluster. BNS / BNSS / BSA: chapter. CPC: sections vs Orders I–LI. Clicking a cluster scrolls or filters the list.
- [ ] 2.6 **Virtualize or paginate** lists over 80 items (windowing or “Load chapter”). Do not unmount topics from data — only from the DOM.
- [ ] 2.7 Filters must actually change the view: All; High-yield; Chapters & clusters (TOC + grouped list).
- [ ] 2.8 **Practice this subject** CTA → Phase 4 route with subject preselected. If Phase 4 is not built yet, wire to existing MCQ tool with subject query.
- [ ] 2.9 Mapper CTA on `bns` / `bnss` / `bsa` → `#/tool/bns-ipc-mapper`.
- [ ] 2.10 Historical concordance callout on criminal subjects: “IPC/CrPC/IEA are maps, not current text.”
- [ ] 2.11 Empty search state: “No topics match — catalog still contains Y topics.”
- [ ] 2.12 Never hide non-high-yield topics except when the High-yield filter is on.

### Exit gate

- [ ] Constitution, BNSS, BNS, CPC each open and remain scroll-smooth.
- [ ] Jump “21” on Constitution opens Art. 21 topic.
- [ ] Jump “480” on BNSS opens s. 480.
- [ ] Jump “39” on CPC opens Order 39.
- [ ] Topic count displayed === `subject.topics.length` === audit floor or higher.
- [ ] `npm run lint && npm run build`

---

# PHASE 3 — Topic page + progress graph

**File:** `src/components/subjects/TopicDetail.tsx`

### Tasks

- [ ] 3.1 Persist last-read on mount (subject + topic + optional heading id).
- [ ] 3.2 In-page section nav with active heading (study, illustrations, IRAC, submissions, exam points).
- [ ] 3.3 Prev / next topic by catalog order (stable IDs, wrap disabled at ends).
- [ ] 3.4 Related knowledge via existing `RelatedKnowledge` / `[[REF:]]`.
- [ ] 3.5 Link provision → Bare Act mapper when a concordance exists.
- [ ] 3.6 Link cases → `/case-law` judgment id when the judgment exists; otherwise plain citation text (do not invent a reader page).
- [ ] 3.7 Mark complete control (explicit user click). Store in `cplaw.progress.v1`.
- [ ] 3.8 Practice 10 from this topic (Phase 4 hook).
- [ ] 3.9 If content is synthesized fallback, show `Structured catalog note` + short “full treatise expanding” note. Do not pretend it is a book chapter.
- [ ] 3.10 No raw markdown. If a file still has markdown, pass it through `ModularStudyRenderer` only.

### Exit gate

- [ ] Opening Art. 21, BNS s. 103, CPC s. 11, BNSS s. 480 all render modules.
- [ ] Back to subject restores search/filter if feasible; at minimum lands on the subject.
- [ ] Progress increments only on explicit complete (default = explicit).
- [ ] `npm run lint && npm run build`

---

# PHASE 4 — Practice mode 100%

Split out of `AibeMcqPractice.tsx` if it is doing too much.

### New / dedicated pieces

- [x] 4.1 `PracticeSetup` — subject, topic, mixed topics, question count (10 / 15 / 20), start disabled if bank too small.
- [x] 4.2 `QuestionRenderer` — reusable, accessible options, no instant key leak.
- [x] 4.3 `PracticeSession` model in memory + optional local snapshot.
- [x] 4.4 Instant feedback **in practice only** after an answer is locked.
- [x] 4.5 `PracticeResult` — score, time, per-question review.
- [x] 4.6 Review Answers, Practice Again, Back to Topic, Back to Subject.
- [x] 4.7 Every explanation links to topic id + provision when metadata exists.
- [x] 4.8 Add `topicId` + `subjectSlug` on every question in existing banks. Do not delete questions to make types pass — fix the types.
- [x] 4.9 Sample / Reset / clear states per quality gate.

### Exit gate

- [x] Start 10 Q Constitution practice → finish → review → back to topic.
- [x] Insufficient-bank path shown if topic has fewer questions than requested.
- [x] No answers leave the device.
- [x] Quality gate file checked.
- [x] `npm run lint && npm run build`

---

# PHASE 5 — Exam simulation 100%

Must **not** reuse practice instant feedback.

### Tasks

- [x] 5.1 `ExamSetup` — AIBE 3h30 / Judiciary 2h / custom minutes; subject / mixed / all; question count validation.
- [x] 5.2 `ExamSession` owns the timer (or a dedicated `ExamTimer` that this session controls — one owner only).
- [x] 5.3 Palette states: current, answered, unanswered, marked for review. Accessible labels.
- [x] 5.4 Submit confirm: attempted / unanswered / marked.
- [x] 5.5 Timeout submits without losing the in-progress answer.
- [x] 5.6 `beforeunload` + in-app back protection while exam active.
- [x] 5.7 Refresh recovery from `cplaw.exam.v1`.
- [x] 5.8 `ExamResult` includes time used. No score leak during the paper.
- [x] 5.9 `ExamReview` links wrong answers to Study Topic.
- [x] 5.10 Zero instant feedback before submit.

### Exit gate

- [x] Timed 5-question custom exam can be completed, timed out, and recovered after refresh.
- [x] Practice and Exam cannot be confused in the UI.
- [x] `npm run lint && npm run build`

---

# PHASE 6 — Case law library 100%

### Tasks

- [x] 6.1 Add 5–10 **reviewed** pilot judgments in `src/data/judgments/` (Kesavananda, Maneka, Puttaswamy, Lalita Kumari, D.K. Basu, Shreya Singhal, Shayara Bano as the default set if sources verify).
- [x] 6.2 Each record: facts, issues, provisions, arguments, reasoning, decision, ratio, exam points, related cases, source URL or local PDF.
- [x] 6.3 Original judgment is **opt-in load**, never bundled as the default payload.
- [x] 6.4 If PDF exists under `public/judgments/`, lazy viewer: page nav, zoom, fullscreen. If no PDF, show official source link + “source not bundled”.
- [x] 6.5 Connect provisions → subject topic routes.
- [x] 6.6 Connect judgments → topics and topics → judgments.
- [x] 6.7 Continue Reading + last-read section for judgments.
- [x] 6.8 `src/utils/judgments/judgmentValidation.ts` + `"validate:judgments"` script.
- [x] 6.9 Broken related-case IDs fail validation.
- [x] 6.10 Do not scrape copyrighted full-text into the repo without a verified public-domain / official source.

### Exit gate

- [x] `/case-law` search + open + bookmark (local only) works.
- [x] `npm run validate:judgments`
- [x] `npm run lint && npm run build`

---

# PHASE 7 — High-yield treatise completion (P0)

**Do not start UI refactors here.** Only content + checklist.

Use `prompts/DISPATCHER.md` or `prompts/UPGRADE_EXISTING_TOPIC_PROMPT.md`.

### Batch order (mandatory)

1. `constitution` — every `highYield: true` theme + Arts 12–32, 136, 141, 226, 300A, 311, 324, 352–360, 368, Basic Structure
2. `bns` — ss. 1–3, 3(5)/common intention, punishments, general exceptions, 63–99, 100–106 / s. 103, 111, 303–309, attempt/abetment/conspiracy
3. `bnss` — s. 35, 187, 193/210, 223–271 cluster, 480–483, 528–530, 531 transitional
4. `bsa` — s. 4, 15–24, 32, 57–63, 104–106, 116
5. `cpc` — ss. 2, 9–11, 15–20, 51–74, 96–100, 113–115, 148A, 151; Orders I, II, V–IX, XIV, XX–XXIII, XXXVII–XXXIX, XLI
6. `family` — all 38 (subject is small; finish the subject)
7. `contract` — ICA 10, 23, 27, 56, 73; SRA 10, 14, 34, 38–42; TPA lis pendens / part performance / mortgage; NI 138

### Per-topic steps

```text
1. Confirm ID exists in subjects.ts. If missing, ADD — never skip.
2. Search src/data/knowledge for reusable doctrine/case/maxim.
3. Author or upgrade src/data/topics/<slug>/<id>.ts
4. Set hasNotes: true
5. Depth = full treatise
6. npm run checklist
7. Open the topic in UI; confirm ModularStudyRenderer; no raw markdown
```

### Session size

Maximum **5 full treatises** or **15 catalog-floor upgrades** per session. Quality over dump.

### Exit gate

- [x] Every P0 `highYield: true` topic has a full treatise file.
- [x] `npm run audit` high-yield P0 = 100% files present.
- [x] No topic ID removed.

---

# PHASE 8 — Remaining catalog quality floor (all 20)

Goal: **every remaining ID** meets §4 Minimum Floor. This is how we keep the Zero Omission covenant without pretending every labour/company section is a 4,000-word chapter on day one.

### Subject order

P0 leftovers → P1 (`tort`, `adr`, `ethics`, `petition-formats`, `pil`) → P2 (`labour`, `company`, `taxation`, `admin`, `environment`, `cyber`, `land`, `ipr`).

### Rules

- [x] 8.1 Numbered Acts: one file per section/article/order already in the catalog. Do not merge 20 sections into one “chapter dump” and delete IDs.
- [x] 8.2 Omitted / repealed provisions stay as short “omitted” chapters with amendment note. They still count.
- [x] 8.3 Company (561) and Labour (523) and Constitution leftover articles: use structured catalog notes + official heading + operative gist + related. Upgrade to full treatise only when high-yield or user-prioritized.
- [x] 8.4 After each subject batch: `npm run checklist && npm run validate:topics`.
- [x] 8.5 If a synthesizer exists, it may **seed** a file but the committed file must already pass the minimum floor (no “TODO lorem”).

### Exit gate

- [x] `hasNotes: true` for **every** registered topic **or** an explicit documented generator that produces the minimum floor at runtime *and* is reviewed. Prefer real files for P0/P1. Runtime synthesis is allowed for P2 long tails only if the UI badge says `Structured catalog note` and validation still lists the ID.
- [x] Audit count ≥ floor for all 20 slugs.
- [x] `docs/subject-coverage-checklist.md` regenerated.

---

# PHASE 9 — Launch hardening

### Tasks

- [x] 9.1 Replace the large construction banner with a slim “Library expanding daily” chip **only after** Phases 1–6 and Phase 7 are green.
- [x] 9.2 README: remove “(coming soon)” if the site is live; list real tools and real counts from audit.
- [x] 9.3 Update `docs/missing-part.md` — tick every item that shipped; leave only true futures.
- [x] 9.4 Unit tests: question selection, scoring, progress read/write, judgment search.
- [x] 9.5 E2E (Playwright or equivalent, if added): Home → Subject → Topic; Practice setup → result; Exam timeout path.
- [x] 9.6 Responsive pass: 360, 390, 412, 768, 1024, 1440.
- [x] 9.7 SEO: titles/descriptions per subject and tool; sitemap if finance-pattern scripts exist; no fake “100% treatise” claims.
- [x] 9.8 PWA / offline: core catalog + already-visited topic files. No new backend.
- [x] 9.9 Privacy copy matches reality (localStorage keys listed in privacy page if one exists).
- [x] 9.10 Quality gate on every tool.
- [x] 9.11 Final audit committed as `docs/phase-9-launch-audit.md`.

### Exit gate (site = 100% done)

```text
[x] Layer A product shell green (Phases 1–6)
[x] Layer B zero omission: 20 slugs, counts >= floor (Phase 0 + 8)
[x] Layer C: all P0 high-yield = full treatises; all other IDs = minimum floor (Phases 7–8)
[x] Layer D: banner slim, docs true, lint/build/validate green (Phase 9)
[x] npm run lint
[x] npm run audit
[x] npm run validate:topics
[x] npm run validate:judgments
[x] npm run test:run
[x] npm run build
```

When this block is green, the site may be called **100% done** for launch. Further treatise upgrades continue as content ops, not as “unfinished product.”

---

## 6. AI commit / PR rules

- Branch: `feat/phase-<n>-<short-slug>` from `main`.
- Commit message: `feat(law): phase <n> <what>`
  Example: `feat(law): phase 1 homepage resume row and track copy`
- Never mix Phase 7 content dumps with Phase 1 CSS in one commit.
- After content batches: include checklist diff.
- If `main` is protected, open a PR. Do not force-push.

---

## 7. Suggested user prompts (copy-paste)

**Start next work**

```text
Follow docs/SITE_100_PERCENT_COMPLETION.md.
Finish the next unfinished phase only.
Do not delete topics.
Run the phase exit gate before you stop.
```

**Homepage only**

```text
Follow docs/SITE_100_PERCENT_COMPLETION.md Phase 1 exactly.
```

**Subject page only**

```text
Follow docs/SITE_100_PERCENT_COMPLETION.md Phase 2 exactly.
```

**One treatise**

```text
Follow prompts/DISPATCHER.md and docs/SITE_100_PERCENT_COMPLETION.md §4 + Phase 7 rules.
Subject: [slug] Topic: [id]
```

**Audit a subject for missing syllabus topics**

```text
Follow prompts/SUBJECT_AUDIT_AND_EXPANSION_PROMPT.md
and the Zero-omission protocol in docs/SITE_100_PERCENT_COMPLETION.md §3.
Add missing IDs. Never remove existing IDs.
```

---

## 8. Out of scope until 100% launch

Do not start these before Phase 9 exit gate is green:

- Cloud accounts / synced progress
- Personalized spaced repetition
- All-subject mega mock as a new product surface (the exam pool can exist in Phase 5, marketing later)
- New Codepackr family sites
- Restyling to indigo or emerald
- Adding extra subjects beyond the 20 locked slugs

---

## 9. Definition of done for a single AI turn

An AI turn is successful only if:

1. It named the phase.
2. It did not delete catalog IDs.
3. It left `npm run lint` and `npm run build` green (or reported the exact error).
4. It listed remaining unchecked boxes in that phase.
5. It updated this file’s phase checkboxes if a task actually shipped.

Update the checkboxes in **this file** when a task is done so the next AI does not redo or skip work.
