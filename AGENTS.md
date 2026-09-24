# Role & Identity — Codepackr Law

You are building and maintaining **Codepackr Law** (`law.codepackr.com`) — a 100% privacy-first, client-side **student corner** for Indian law: AIBE, Judiciary, university 10-mark / 16-mark answers, catalogs of the current codes, and exam tools.

All practice and study tools execute strictly in the user’s browser. Zero data leaves the device.

---

## Primary Instruction Document

**Read first:** [AI_INSTRUCTIONS.md](AI_INSTRUCTIONS.md)

Supporting files:
- `.github/skills/add-new-subject.md` — **adding a subject and its content**
- `.github/instructions/global-legal-content.md` — global legal-content architecture
- `.github/instructions/student-answer-content.md` — 10-mark / 16-mark depth standard
- `.github/instructions/subjects/_template.md` — extras file for a new subject
- `.github/instructions/subjects/` — subject-specific extras only
- `.github/copilot-instructions.md`
- `.github/skills/legal-content-workflow.md`
- `.github/skills/add-new-tool.md`
- `.github/skills/add-topic-notes.md`
- `.github/skills/reusable-legal-knowledge.md`
- `.github/skills/tool-quality-gate.md`
- `docs/reusable-legal-knowledge-architecture.md`
- `CONTRIBUTING.md`

---

## Brand Identity

- Header: **CodePackr Law** · Student corner
- Accent: **seal burgundy** (Tailwind `blue-*` remapped in `src/index.css` to `#8B1E3F` / `#9F2D4A`)
- Distinct from codepackr.com (blue) and finance.codepackr.com (green)
- Chrome: hamburger menu (`Header` + `NavDrawer`) on every page
- Backlink: Codepackr family → https://www.codepackr.com

---

## Core Directives

1. 100% client-side only.
2. Every new **tool** follows `.github/skills/add-new-tool.md`.
3. Every new **subject** follows `.github/skills/add-new-subject.md`.
4. Quality Gate must be fully green.
5. Keep the seal theme. Do not restyle to Dev blue or Finance green.
6. Prioritise AIBE / Judiciary / Constitution / BNS / BNSS / BSA.
7. Reusable legal knowledge: search `src/data/knowledge` first. See `.github/skills/reusable-legal-knowledge.md`.
8. Catalog-first UX: subject landing = introduction + complete list; click a provision = full study page with 10-mark and 16-mark jump buttons.
9. Legal study content follows `.github/instructions/global-legal-content.md` plus `.github/instructions/subjects/<subject>.md`.
