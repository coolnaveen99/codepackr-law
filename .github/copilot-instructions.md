# Codepackr Law — Mandatory Architecture & Tool Rules

You are working on **Codepackr Law** (`law.codepackr.com`) — a 100% privacy-first, client-side Indian law **student corner** for AIBE, Judiciary, university 10-mark / 16-mark answers, and exam tools.

---

## GOLDEN RULES

1. **100% Client-Side** — Never send practice data, answers, or scores off-device.
2. **Seal brand** — Accent is seal burgundy via remapped Tailwind `blue-*` in `src/index.css`.
3. **Complete Tools** — Sample/Demo, Reset, clear feedback, accessible UI.
4. **Quality Gate** — `.github/skills/tool-quality-gate.md` must pass fully.
5. **India Focus** — AIBE, Judiciary, BNS/BNSS/BSA, Constitution, CPC, and any in-force subject the user adds.
6. **Lazy topic notes** — Full learning text goes in `src/data/topics/<subjectSlug>/<topicId>.ts` only.
7. **Reusable legal knowledge** — Search `src/data/knowledge` first.
8. **Legal content workflow** — `.github/instructions/global-legal-content.md` + subject file + `.github/skills/add-topic-notes.md`.
9. **Book chapters, not digests** — Quality model: `src/data/topics/cpc/s-32.ts`. Do not ship synthesizer templates. Student-facing copy must not say “Bare Act”.
10. **Deep student answers** — Full 10-mark and 16-mark hall answers (`marks: 10 | 16`).
11. **New subjects** — `.github/skills/add-new-subject.md`.

See `AI_INSTRUCTIONS.md` and `.github/skills/` for the full process.
