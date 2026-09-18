# Contributing to Codepackr Law

Thank you for helping improve **Codepackr Law** (`law.codepackr.com`).

This project is part of the Codepackr family of 100% client-side, privacy-first tools.

---

## Required Reading

| Document | Purpose |
|----------|---------|
| [AI_INSTRUCTIONS.md](AI_INSTRUCTIONS.md) | Complete build & tool-addition guide |
| [`.github/skills/add-new-subject.md`](.github/skills/add-new-subject.md) | **Adding a subject and its 10/16-mark content** |
| [`.github/instructions/global-legal-content.md`](.github/instructions/global-legal-content.md) | Global legal-content architecture (every subject) |
| [`.github/copilot-instructions.md`](.github/copilot-instructions.md) | Golden rules |
| [`.github/skills/legal-content-workflow.md`](.github/skills/legal-content-workflow.md) | Research → verify → implement study content |
| [`.github/skills/add-new-tool.md`](.github/skills/add-new-tool.md) | Mandatory SOP for every new tool |
| [`.github/skills/tool-quality-gate.md`](.github/skills/tool-quality-gate.md) | Final checklist |

---

## Golden Rules (Summary)

1. **100% Client-Side** — Practice data stays in the browser.
2. **Complete Tools Only** — Sample/Demo, Reset, and clear feedback where applicable.
3. **Seal Brand** — Tailwind `blue-*` remapped to burgundy. Not Dev blue, not Finance green.
4. **Quality Gate** — Must be fully green before a PR is accepted.
5. **New subjects** — Follow `.github/skills/add-new-subject.md`. Catalog-first; full 10/16-mark Q&A; never a Bare Act dump.

---

## Development Setup

```bash
git clone https://github.com/coolnaveen99/codepackr-law.git
cd codepackr-law
npm install
npm run dev
npm run lint
npm run build
```

Both lint and build must pass with zero errors.

---

## Pull Requests

- Keep PRs focused.
- Reference the Quality Gate in the description.
- Do not submit incomplete tools.

Thank you for keeping Codepackr Law private, accurate, and useful for Indian law students.
