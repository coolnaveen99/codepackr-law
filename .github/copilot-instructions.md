# Codepackr Law — Mandatory Architecture & Tool Rules

You are working on **Codepackr Law** (`law.codepackr.com`) — a 100% privacy-first, client-side Indian law learning platform focused on AIBE, Judiciary, Bare Act MCQs and flashcards.

---

## GOLDEN RULES

1. **100% Client-Side** — Never send practice data, answers, or scores off-device.
2. **Blue Brand** — Accent `#2563eb` only.
3. **Complete Tools** — Sample/Demo, Reset, clear feedback, accessible UI.
4. **Quality Gate** — `.github/skills/tool-quality-gate.md` must pass fully.
5. **India Focus** — Prioritise AIBE, Judiciary, BNS/BNSS/BSA, Constitution, CPC.
6. **Lazy topic notes** — Full learning text goes in `src/data/topics/<subjectSlug>/<topicId>.ts` only. Metadata stays in `subjects.ts`. Never dump full essays into the main subjects registry (keeps the bundle small for 1000+ topics).
7. **Reusable legal knowledge** — Before creating a doctrine, case, article, maxim, definition, or procedure, search `src/data/knowledge` and reuse the canonical ID. Architecture: `docs/reusable-legal-knowledge-architecture.md`. Skill: `.github/skills/reusable-legal-knowledge.md`.
8. **Legal content workflow** — For every subject follow `.github/instructions/global-legal-content.md` + the matching `.github/instructions/subjects/<subject>.md`. SOP: `.github/skills/legal-content-workflow.md`. Research and verify before implementing. Never invent provisions, citations, holdings, or mappings. Never assume IPC X = BNS Y (or CrPC/BNSS, IEA/BSA). IPC, CrPC, and the Indian Evidence Act are historical concordance only — not active current-law subjects. One Study Topic body; one MCQ/Practice/Exam system.

See `AI_INSTRUCTIONS.md` and `.github/skills/` (including `add-topic-notes.md`, `reusable-legal-knowledge.md`, and `legal-content-workflow.md`) for the full process.