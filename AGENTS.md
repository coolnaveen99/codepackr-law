# CodePackr Law — Agent Instructions

Read `docs/architecture/CURRENT-IMPLEMENTATION-CONTRACT.md` first.

## Current state

- Phase 0–32 roadmap: closed.
- UI redesign foundation/adoption: closed.
- Production readiness PR-001–PR-010: recorded complete.
- Major UI work is the current product direction.
- E2E infrastructure remains available, but expansion is paused unless explicitly reactivated.

## Required instruction chain

1. `docs/architecture/CURRENT-IMPLEMENTATION-CONTRACT.md`
2. `AI_INSTRUCTIONS.md`
3. `.github/copilot-instructions.md`
4. Relevant domain instructions under `.github/instructions/`
5. Relevant skills under `.github/skills/`
6. Supporting prompts only when the task needs them.

Historical documents under `docs/archive/` are reference-only.

## Before coding

- Read the current Sprint Board.
- Identify the current executable task.
- Check dependencies and existing changes.
- Search before deleting, moving, replacing, or duplicating files.
- For legal-content changes, read the applicable legal-content and subject instructions.
- For UI work, use the adopted design system and shell.

## Non-negotiable product rules

- Preserve existing routes, tools, legal content, topic IDs, privacy, SEO and source/copyright controls.
- UI/refactoring work must not reduce substantive legal content.
- Never invent legal authorities, provisions, citations, holdings or official-source claims.
- Keep user/legal data browser-local unless an explicitly approved architecture changes that boundary.
- No legal outcome predictions or fabricated certainty.
- Prefer reusable design-system primitives over one-off UI styles.
- Accessibility and responsive behavior are implementation requirements.

## Completion

Before reporting completion:

- validate the changed behavior with the appropriate tests/build/audits;
- update `docs/SPRINT-CONTROL-BOARD.md` with status, evidence, blockers and next action;
- report exact validation evidence and limitations.

Never mark work completed without evidence.
