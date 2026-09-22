# Codepackr Law — Complete AI Instructions

**Purpose**  
Single source of truth for any AI (or human) building or extending **Codepackr Law** (`law.codepackr.com`).

---

## 1. Project Identity

| Item | Value |
|------|-------|
| Product name | Codepackr Law |
| Live URL | https://law.codepackr.com |
| Repo | https://github.com/coolnaveen99/codepackr-law |
| Parent | Codepackr (https://www.codepackr.com) |
| Accent color | **Seal burgundy** (Tailwind `blue-*` remapped in `src/index.css`; do not use Dev `#2563eb` or Finance green) |
| Stack | React 18 + TypeScript + Vite + Tailwind CSS v4 |
| Privacy | 100% client-side. Zero practice / academic data leaves the browser. |

**Tagline**  
*Student corner — section-wise notes, 10-mark and 16-mark answers, private exam tools*

**Mandatory header backlink**  
`← Codepackr Dev Suite` → `https://www.codepackr.com`

---

## 2. Golden Rules (Non-Negotiable)

1. **100% Client-Side** — Never send MCQ answers, scores, flashcards, or user notes to any server.
2. **Ephemeral by Default** — Persist only on explicit user action (and label it clearly).
3. **Seal Brand Only** — Tailwind `blue-*` is remapped to seal burgundy in `src/index.css`. Do not restyle to Study indigo or Finance emerald.
4. **Complete Tools Only** — Sample/Demo (where relevant), Reset, clear feedback, accessible UI.
5. **Quality Gate Mandatory** — `.github/skills/tool-quality-gate.md` must be fully green.
6. **India-Focused Content** — AIBE, State Judiciary, new criminal laws (BNS, BNSS, BSA), Constitution, CPC, Contract, Family Law, and any in-force subject you add via `.github/skills/add-new-subject.md`.
7. **Lazy topic notes** — Full topic learning text must live in `src/data/topics/<subjectSlug>/<topicId>.ts`, never in `subjects.ts`.
8. **Reusable legal knowledge** — Search `src/data/knowledge` before creating any doctrine, case, article, maxim, definition, principle, or procedure. Reuse the canonical ID. Never duplicate canonical explanations. Follow `docs/reusable-legal-knowledge-architecture.md`.
9. **Catalog-first subjects** — Click a subject → introduction + complete catalog. Click a section/article → full study page with 10-mark and 16-mark jump buttons. Never a Bare Act dump. Never a shortened Q&A.
10. **The Sacred Student Career Covenant (Zero Topic Omission)** — Law students and judicial service aspirants stake their careers, university degrees, and lives on Codepackr Law. An omitted or truncated topic in our library could be the exact 10-mark question, 16-mark essay, or short note that appears on their exam, or an emergency pleading needed in court. We must NEVER arbitrarily omit, drop, or miss topics from any subject. When structuring any subject, cross-reference standard university syllabi (Bar Council of India, NLUs, Central/State universities) and benchmark classroom textbooks (e.g. M. S. Rama Rao, Ratanlal & Dhirajlal, Avtar Singh, Mulla). Every doctrine, general defence, capacity rule, specific wrong/offence, remedy, and procedural mechanism must have a registered, dedicated, clickable topic.

---

## 3. Mandatory Reading Before Coding

1. `.github/copilot-instructions.md`
2. `.github/instructions/global-legal-content.md` — **required before changing any legal study content**
3. `.github/instructions/student-answer-content.md` — **10-mark / 16-mark depth; do not stop at Bare Act summaries**
4. `.github/skills/add-new-subject.md` — **required before adding any new subject**
5. `.github/instructions/subjects/_template.md` then `.github/instructions/subjects/<subject>.md`
6. `.github/skills/legal-content-workflow.md`
7. `.github/skills/add-new-tool.md`
8. `.github/skills/add-topic-notes.md` — **required before adding any Study Topic content**
9. `.github/skills/reusable-legal-knowledge.md` — **required before creating reusable legal records**
10. `.github/skills/tool-quality-gate.md`
11. `docs/reusable-legal-knowledge-architecture.md`
12. `CONTRIBUTING.md`
13. This file (`AI_INSTRUCTIONS.md`)

---

## 4. Target Architecture

```
src/
├── components/
│   ├── tools/           # One component (or folder) per tool
│   ├── subjects/        # SubjectsList, SubjectDetail, TopicDetail
│   ├── home/            # HomePage (codes first, tools second)
│   ├── layout/          # Header, NavDrawer (hamburger), Footer
│   └── ui/
├── data/
│   ├── tools.ts         # Tool registry
│   ├── subjects.ts      # Subject + topic METADATA only (no full notes)
│   ├── subjectIntros.ts # Catalog intro cards
│   ├── questions/       # Static MCQ banks
│   ├── reference/       # Maxims, landmark cases (reference tools)
│   ├── constitution/    # Article digest + official 2024 text
│   ├── bns/             # BNS 2023 catalog + bareAct.json
│   ├── bnss/            # BNSS 2023 catalog + bareAct.json
│   ├── bsa/             # BSA 2023 catalog + bareAct.json
│   ├── knowledge/       # Canonical graph (doctrines, concepts, maxims, validation)
│   └── topics/          # Full learning notes — one file per topic (lazy-loaded)
│       ├── loadTopicContent.ts
│       ├── synthesizeProvision.ts
│       └── <subjectSlug>/<topicId>.ts
├── lib/
│   ├── urls.ts
│   └── utils.ts
├── App.tsx
└── index.css           # seal burgundy via remapped blue-* scale
```

### Topic content rule (performance)

- `subjects.ts` = list/search metadata only (can grow to 1000+ topics safely).
- Full `short` / `detailed` / `cases` / `examTips` = separate file under `topics/`, loaded with `import.meta.glob` only when the student opens that topic.
- Never ship all topic essays in the main bundle.

MCQ and flashcard content must be static TS modules shipped with the app. Never require a backend for core practice.

---

## 5. How to Add a New Tool

Follow `.github/skills/add-new-tool.md` exactly.

Categories for Law:

| Category        | Purpose                          | Examples                                      |
|-----------------|----------------------------------|-----------------------------------------------|
| `mcq`           | Practice questions & mocks       | Subject MCQ banks, AIBE mock, Daily quiz      |
| `bare-acts`     | Section lookup & mapping         | BNS↔IPC mapper, Important sections            |
| `study-aids`    | Flashcards, timers, notes        | Section flashcards, Exam timer                |
| `reference`     | Quick reference helpers          | Legal maxims, Landmark case flashcards        |

### Priority Build Order

1. AIBE-style MCQ practice (one high-weight subject first: Constitution or BNS)
2. Exam timer
3. Section flashcards for key Acts
4. BNS ↔ IPC / BNSS ↔ CrPC simple mappers
5. Full subject banks + mock test mode
6. High-yield topic notes under `src/data/topics/` (lazy)
7. Remaining tools

---

## 6. How to Add Topic Learning Notes

Follow `.github/skills/add-topic-notes.md` exactly.

1. Topic must already exist in `subjects.ts` (id + subject slug).
2. Create `src/data/topics/<subjectSlug>/<topicId>.ts` exporting `TopicContent`.
3. TopicDetail lazy-loads via `loadTopicContent` — no App.tsx changes needed.

## 6A. How to Add a New Subject

Follow `.github/skills/add-new-subject.md` exactly. Prompt: `.github/prompts/add-subject.prompt.md`.

1. Copy `.github/instructions/subjects/_template.md` → `subjects/<slug>.md`.
2. Register metadata in `src/data/subjects.ts`.
3. Add theme notes under `src/data/topics/<slug>/`.
4. If the Act has a numbered list: verified catalog + intro + `CATALOG_SLUGS` + synthesizer.
5. Wire hamburger (`CODE_SLUGS` / `MORE_SLUGS`) and home lists; map the icon.
6. Every opened page must have full 10-mark and 16-mark Q&A (`marks: 10 | 16`).

The student click path must match BNS: subject → introduction + all items → click item 1 / 107 → full details.

---

## 7. Design Tokens

```css
/* Seal identity — do not revert to Dev #2563eb */
/* Tailwind blue-* is remapped in src/index.css */
```

- Cards: `rounded-2xl`
- Controls: `rounded-xl`
- Icons: `lucide-react` only
- Light + Dark mode required

---

## 8. Privacy Checklist

- [ ] No network calls with user answers or scores
- [ ] No analytics events containing practice data
- [ ] localStorage only for explicit opt-in features
- [ ] Sample / demo questions contain no real personal data
- [ ] Topic notes are static client modules only (no CMS fetch of user data)

---

## 9. Definition of Done

A tool is finished only when:

1. Registered in tools registry
2. Clean URL works
3. Required UX actions present
4. Light & dark + mobile correct
5. Lint + build pass
6. README updated
7. Privacy checklist green
8. Quality Gate fully green

Topic notes are done when the file exists under `topics/`, matches `TopicContent`, and opens correctly from Subject → TopicDetail.

---

## 10. Content Notes (Law-Specific)

- Prefer the **new criminal laws**: Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), Bharatiya Sakshya Adhiniyam (BSA).
- IPC, CrPC, and the Indian Evidence Act are **historical concordance only** — not active current-law subjects. Support them via the mapper; never assume a 1:1 equivalent.
- High-weight AIBE subjects: Constitutional Law, CPC, BNSS, BNS, BSA, Contract, Family Law.
- **Q&A must be full 10-mark and 16-mark answers.** Never a shortened explanation. Put `marks: 10 | 16` so the jump buttons work.
- Do not dump Bare Act text as the study page. Do not put “how to write 10/16 marks” filler in `study`.
- Statutory illustrations: include them **only when the official text prints them**, then teach them.
- Official sources: India Code / Cytrain (BNS, BNSS, BSA); Legislative Department 2024 PDF (Constitution — Cytrain has none).
- All MCQ content must be original or clearly licensed. Start with small curated sets and expand.
- Topic notes: prioritise `highYield: true` topics; include 3–5 case citations with holdings.
- Follow `.github/instructions/global-legal-content.md` for research, verification, and the no-hallucination rule.

---

## 11. Final Orders to Any AI

- Never skip the Quality Gate.
- Never transmit practice data off-device.
- Never restyle away from seal burgundy to Dev blue or Finance green.
- Never ship incomplete tools.
- **Never put full topic essays into `subjects.ts`** — use `src/data/topics/` only.
- **Never duplicate canonical legal knowledge.** Search `src/data/knowledge` first.
- **Never invent provisions, illustrations, citations, or mappings.**
- **Never add a subject without `.github/skills/add-new-subject.md`.**
- When in doubt, re-read this file, `.github/skills/add-new-subject.md`, `.github/instructions/global-legal-content.md`, `.github/skills/legal-content-workflow.md`, `.github/skills/add-new-tool.md`, `.github/skills/add-topic-notes.md`, and `.github/skills/reusable-legal-knowledge.md`.

Build carefully. Protect privacy. Serve Indian law students well.
