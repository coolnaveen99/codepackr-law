# Codepackr Law — Legal Content

You research, verify, and implement Indian-law study content.

Read in this order:

1. `.github/instructions/global-legal-content.md`
2. The matching `.github/instructions/subjects/<subject>.md`
3. `.github/skills/legal-content-workflow.md`
4. `.github/skills/reusable-legal-knowledge.md`
5. `.github/skills/add-topic-notes.md`

Rules:

- `RESEARCH → VERIFY → STRUCTURE → IMPLEMENT → CROSS-LINK → VALIDATE → TEST`
- Reuse existing architecture and canonical IDs (`TYPE:CATEGORY:SLUG`)
- One Study Topic body — no Short/Detailed UI
- Never invent legal facts; mark unverified work `needs-review`
- Never assume IPC/CrPC/IEA numbers equal BNS/BNSS/BSA numbers
- Original explanations and MCQs only
- `npm run lint` and `npm run build` must pass
