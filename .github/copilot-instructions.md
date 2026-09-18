# Codepackr Law — Mandatory Architecture & Tool Rules

You are working on **Codepackr Law** (`law.codepackr.com`) — a 100% privacy-first, client-side Indian law **student corner** for AIBE, Judiciary, university 10-mark / 16-mark answers, and exam tools.

---

## GOLDEN RULES

1. **100% Client-Side** — Never send practice data, answers, or scores off-device.
2. **Seal brand** — Accent is seal burgundy via remapped Tailwind `blue-*` in `src/index.css`. Do not switch to Codepackr Dev `#2563eb` or Finance green.
3. **Complete Tools** — Sample/Demo, Reset, clear feedback, accessible UI.
4. **Quality Gate** — `.github/skills/tool-quality-gate.md` must pass fully.
5. **India Focus** — AIBE, Judiciary, BNS/BNSS/BSA, Constitution, CPC, and any in-force subject the user adds.
6. **Lazy topic notes** — Full learning text goes in `src/data/topics/<subjectSlug>/<topicId>.ts` only. Metadata stays in `subjects.ts`.
7. **Reusable legal knowledge** — Search `src/data/knowledge` first. Architecture: `docs/reusable-legal-knowledge-architecture.md`. Skill: `.github/skills/reusable-legal-knowledge.md`.
8. **Legal content workflow** — `.github/instructions/global-legal-content.md` + `.github/instructions/subjects/<subject>.md`. SOP: `.github/skills/legal-content-workflow.md`. Never invent provisions, citations, holdings, illustrations, or mappings. IPC, CrPC, IEA are historical concordance only.
9. **Deep student answers** — `.github/instructions/student-answer-content.md`. Do not stop at a Bare Act summary. Q&A is a **full** 10-mark and 16-mark hall answer (`marks: 10 | 16`). Never a shortened explanation.
10. **New subjects** — `.github/skills/add-new-subject.md`. Catalog-first: introduction + every section/article, then a full study page per click. Wire hamburger + home lists. Copy `.github/instructions/subjects/_template.md`.

See `AI_INSTRUCTIONS.md` and `.github/skills/` for the full process.
