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
| Accent color | **Blue `#2563eb`** |
| Stack | React 18 + TypeScript + Vite + Tailwind CSS v4 |
| Privacy | 100% client-side. Zero practice / academic data leaves the browser. |

**Tagline**  
*100% Client-Side Indian Law Learning Tools — AIBE, Judiciary, Bare Acts & MCQs*

**Mandatory header backlink**  
`← Codepackr Dev Suite` → `https://www.codepackr.com`

---

## 2. Golden Rules (Non-Negotiable)

1. **100% Client-Side** — Never send MCQ answers, scores, flashcards, or user notes to any server.
2. **Ephemeral by Default** — Persist only on explicit user action (and label it clearly).
3. **Blue Brand Only** — Accent `#2563eb`. Do not use Study indigo or Finance emerald.
4. **Complete Tools Only** — Sample/Demo (where relevant), Reset, clear feedback, accessible UI.
5. **Quality Gate Mandatory** — `.github/skills/tool-quality-gate.md` must be fully green.
6. **India-Focused Content** — Prioritise AIBE, State Judiciary, new criminal laws (BNS, BNSS, BSA), Constitution, CPC, Contract, Family Law.
7. **Lazy topic notes** — Full topic learning text must live in `src/data/topics/<subjectSlug>/<topicId>.ts`, never in `subjects.ts`.

---

## 3. Mandatory Reading Before Coding

1. `.github/copilot-instructions.md`
2. `.github/skills/add-new-tool.md`
3. `.github/skills/add-topic-notes.md` — **required before adding any short/detailed topic content**
4. `.github/skills/tool-quality-gate.md`
5. `CONTRIBUTING.md`
6. This file (`AI_INSTRUCTIONS.md`)

---

## 4. Target Architecture

```
src/
├── components/
│   ├── tools/           # One component (or folder) per tool
│   ├── subjects/        # SubjectsList, SubjectDetail, TopicDetail
│   ├── layout/
│   └── ui/
├── data/
│   ├── tools.ts         # Tool registry
│   ├── subjects.ts      # Subject + topic METADATA only (no full notes)
│   ├── questions/       # Static MCQ banks
│   ├── reference/       # Maxims, landmark cases (reference tools)
│   └── topics/          # Full learning notes — one file per topic (lazy-loaded)
│       ├── loadTopicContent.ts
│       ├── constitution/
│       │   ├── art-14.ts
│       │   ├── art-21.ts
│       │   └── ...
│       └── <subjectSlug>/
│           └── <topicId>.ts
├── lib/
│   ├── urls.ts
│   └── utils.ts
├── App.tsx
└── index.css           # --brand: #2563eb
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

---

## 7. Design Tokens

```css
:root {
  --brand: #2563eb;
  --brand-hover: #1d4ed8;
}
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
- Still support legacy names (IPC, CrPC, Evidence Act) via mappers where useful.
- High-weight AIBE subjects: Constitutional Law, CPC, BNSS/CrPC, BNS/IPC, BSA/Evidence, Contract, Family Law.
- Keep explanations short and section-focused (AIBE allows only unmarked Bare Acts).
- All MCQ content must be original or clearly licensed for this use. Start with small curated sets and expand.
- Topic notes: prioritise `highYield: true` topics; include 3–5 case citations with holdings.

---

## 11. Final Orders to Any AI

- Never skip the Quality Gate.
- Never transmit practice data off-device.
- Never change the brand color away from blue `#2563eb`.
- Never ship incomplete tools.
- **Never put full topic essays into `subjects.ts`** — use `src/data/topics/` only.
- When in doubt, re-read this file, `.github/skills/add-new-tool.md`, and `.github/skills/add-topic-notes.md`.

Build carefully. Protect privacy. Serve Indian law students well.
