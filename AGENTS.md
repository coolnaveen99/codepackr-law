# Role & Identity — Codepackr Law (Senior Counsel & PhD Standard)

You are building and maintaining **Codepackr Law** (`law.codepackr.com`) — an authoritative, 100% privacy-first, client-side **Digital Law Library & Practice Reference** engineered to serve both:
1. **Law Students & Judicial Aspirants**: University LL.B/LL.M, AIBE, and State Judicial Services Mains preparation with in-depth statutory deconstruction, jurisprudential roots, extracted case ratios, and structured 10-mark / 16-mark answers (IRAC/ILAC).
2. **Junior Lawyers & Practicing Advocates**: Chamber reference, trial and appellate procedural roadmaps, forum/jurisdiction checkpoints, limitation periods, mandatory proving ingredients, evidentiary burdens under BSA (ss. 104–106 & s. 63), and authentic courtroom drafting formats.

All practice and study tools execute strictly in the user’s browser. Zero data leaves the device.

---

## Primary Instruction Document

**Read first:** [AI_INSTRUCTIONS.md](AI_INSTRUCTIONS.md)

Supporting files:
- `.github/skills/add-new-subject.md` — **adding a subject and its content**
- `.github/instructions/global-legal-content.md` — global legal-content architecture
- `.github/instructions/student-answer-content.md` — academic and practice depth standard
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

- Header: **CodePackr Law** · Digital Law Library & Practice Reference
- Accent: **seal burgundy** (Tailwind `blue-*` remapped in `src/index.css` to `#8B1E3F` / `#9F2D4A`)
- Distinct from codepackr.com (blue) and finance.codepackr.com (green)
- Chrome: hamburger menu (`Header` + `NavDrawer`) on every page
- Backlink: Codepackr family → https://www.codepackr.com

---

## Core Directives

1. 100% client-side only. Zero data egress.
2. Every new **tool** follows `.github/skills/add-new-tool.md`.
3. Every new **subject** follows `.github/skills/add-new-subject.md`.
4. Quality Gate must be fully green before completion.
5. Keep the seal theme. Do not restyle to Dev blue or Finance green.
6. Prioritise AIBE / Judiciary / Constitution / BNS / BNSS / BSA and core practice statutes (CPC, Contract, Family, Torts).
7. Reusable legal knowledge: search `src/data/knowledge` first. See `.github/skills/reusable-legal-knowledge.md`.
8. Dual-Track UX: subject landing = statutory introduction + in-force status + complete catalog; click a provision = comprehensive book-chapter treatise with procedural/evidentiary anchors and 10-mark and 16-mark jump buttons.
9. Legal study content follows `.github/instructions/global-legal-content.md` plus `.github/instructions/subjects/<subject>.md`.
10. Zero hallucination: Never invent sections, cases, citations, holdings, or official illustrations. If unverified, mark as `needs-review`.
11. The Sacred Student Career Covenant (Zero Topic Omission): We work for student careers, degrees, and life goals. An omitted or truncated topic in our library could cause a student to fail an exam or an advocate to miss a cause of action. We must NEVER arbitrarily ignore or drop syllabus topics. Always cross-reference standard university curricula (BCI, NLUs) and benchmark classroom textbooks (e.g. M. S. Rama Rao, Ratanlal & Dhirajlal, Avtar Singh, Mulla). Every single doctrine, defense, capacity rule, specific wrong, remedy, and procedural mechanism must have a registered, dedicated, clickable topic.
