# CodePackr Law — Current AI Instructions

**Read first:** `docs/architecture/CURRENT-IMPLEMENTATION-CONTRACT.md`

This file contains the stable AI rules for building and maintaining CodePackr Law. Historical phase playbooks are archived and do not define current execution order.

## Product identity

CodePackr Law is a privacy-first Indian Legal Workbench / Digital Law Library.

Core lifecycle:

`LEARN → UNDERSTAND → RESEARCH → VERIFY → PREPARE → DRAFT → HEARING PREPARE → REVIEW`

Stack: React 18, TypeScript, Vite, Tailwind CSS v4.

## Golden rules

1. Preserve existing functionality unless the task explicitly changes it.
2. Preserve existing substantive legal content during UI, routing and refactoring work.
3. Never delete topic IDs to simplify UI or data.
4. Never invent legal provisions, cases, citations, holdings, mappings or official illustrations.
5. Mark uncertain legal material for review.
6. Keep legal/user data browser-local under the established privacy boundary.
7. Do not make or present legal outcome predictions or fabricated certainty.
8. Use the adopted Chambers Record design system for new UI.
9. Build responsive and accessible UI by default.
10. Prefer existing components, utilities and design tokens before creating duplicates.
11. Keep canonical legal content aligned with the `legal-content` repository.
12. Update the Sprint Board with validation evidence before reporting completion.

## Legal-content work

Before changing legal study content, read:

- `.github/instructions/global-legal-content.md`
- matching file under `.github/instructions/subjects/` when applicable
- `.github/skills/legal-content-workflow.md`
- `.github/skills/add-topic-notes.md`
- `.github/skills/reusable-legal-knowledge.md`
- `.github/skills/judgment-case-notes.md` when judgments are involved
- `.github/instructions/student-answer-content.md` when academic/practice depth is involved

Search reusable legal knowledge before creating duplicate doctrine/case/concept records.

## Topic depth

Topics should provide substantive legal learning material. Do not replace existing detailed content with one-line summaries.

Do not impose an artificial fixed "10-mark" or "16-mark" format on every topic. The content model should support academic, research and professional use according to the topic.

## Tool work

For new tools or substantial tool changes, read:

- `.github/skills/add-new-tool.md`
- `.github/skills/tool-quality-gate.md`

## New subjects

For a genuinely new subject, read:

- `.github/skills/add-new-subject.md`
- `.github/instructions/subjects/_template.md`
- the relevant legal-content workflow instructions

Do not add a new subject as part of ordinary UI work.

## Validation

Choose validation according to the change:

- typecheck/build for code changes
- focused unit/regression tests for behavior changes
- route/deep-link checks for routing changes
- responsive/accessibility checks for UI changes
- content validation for legal-content changes
- privacy/security validation for data/network changes

E2E infrastructure is retained but expansion is paused during major UI transformation unless the current sprint explicitly reactivates it.

## Sprint discipline

Never invent a next phase.

Read `docs/SPRINT-CONTROL-BOARD.md`, execute the current task, validate it, update the board, then report completion.

When uncertain whether a file is obsolete, archive it instead of deleting it and preserve its original content.
