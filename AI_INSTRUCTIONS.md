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

---

## 3. Mandatory Reading Before Coding

1. `.github/copilot-instructions.md`
2. `.github/skills/add-new-tool.md`
3. `.github/skills/tool-quality-gate.md`
4. `CONTRIBUTING.md`
5. This file (`AI_INSTRUCTIONS.md`)

---

## 4. Target Architecture

Evolve from the current scaffold toward the same clean patterns as codepackr-study / codepackr-finance:

```
src/
├── components/
│   ├── tools/           # One component (or folder) per tool
│   ├── layout/
│   └── ui/
├── data/
│   ├── tools.ts         # Tool registry
│   └── questions/       # Static MCQ / flashcard data (client-side only)
├── lib/
│   ├── urls.ts
│   └── utils.ts
├── App.tsx
└── index.css           # --brand: #2563eb
```

MCQ and flashcard content must be static JSON/TS modules shipped with the app (or loaded from public/). Never require a backend for core practice.

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
6. Remaining tools

---

## 6. Design Tokens

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

## 7. Privacy Checklist

- [ ] No network calls with user answers or scores
- [ ] No analytics events containing practice data
- [ ] localStorage only for explicit opt-in features
- [ ] Sample / demo questions contain no real personal data

---

## 8. Definition of Done

A tool is finished only when:

1. Registered in tools registry
2. Clean URL works
3. Required UX actions present
4. Light & dark + mobile correct
5. Lint + build pass
6. README updated
7. Privacy checklist green
8. Quality Gate fully green

---

## 9. Content Notes (Law-Specific)

- Prefer the **new criminal laws**: Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), Bharatiya Sakshya Adhiniyam (BSA).
- Still support legacy names (IPC, CrPC, Evidence Act) via mappers where useful.
- High-weight AIBE subjects: Constitutional Law, CPC, BNSS/CrPC, BNS/IPC, BSA/Evidence, Contract, Family Law.
- Keep explanations short and section-focused (AIBE allows only unmarked Bare Acts).
- All MCQ content must be original or clearly licensed for this use. Start with small curated sets and expand.

---

## 10. Final Orders to Any AI

- Never skip the Quality Gate.
- Never transmit practice data off-device.
- Never change the brand color away from blue `#2563eb`.
- Never ship incomplete tools.
- When in doubt, re-read this file and `.github/skills/add-new-tool.md`.

Build carefully. Protect privacy. Serve Indian law students well.
