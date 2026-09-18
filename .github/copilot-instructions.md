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

See `AI_INSTRUCTIONS.md` and `.github/skills/` (including `add-topic-notes.md` and `reusable-legal-knowledge.md`) for the full process.
