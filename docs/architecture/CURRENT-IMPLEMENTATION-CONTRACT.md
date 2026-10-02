# CodePackr Law — Current Implementation Contract

**Status:** Active source of truth for new implementation work  
**Updated:** 2026-10-02

## 1. Current product state

- Numbered roadmap Phases 0–32 are closed.
- UI redesign foundation/adoption work is closed.
- Production-readiness PR-001–PR-010 is recorded as completed.
- Do not reopen completed phases merely to start new feature work.
- Future work is handled through a current sprint/backlog task and this contract.

## 2. Product model

CodePackr Law is a privacy-first Indian Legal Workbench / Digital Law Library supporting:

**LEARN → UNDERSTAND → RESEARCH → VERIFY → PREPARE → DRAFT → HEARING PREPARE → REVIEW**

The product serves students, judicial aspirants, interns, researchers, educators, junior advocates and practicing lawyers.

## 3. Instruction hierarchy

When instructions overlap, use this order:

1. User's explicit current task and constraints.
2. This contract.
3. `AGENTS.md` / `AI_INSTRUCTIONS.md` / `.github/copilot-instructions.md`.
4. Domain-specific `.github/instructions/*`.
5. Domain-specific `.github/skills/*`.
6. Supporting prompts and historical documentation.

Historical/archive documents are reference material only. They do not define current execution order.

## 4. Mandatory implementation rules

### Preserve existing capability

A UI task must not silently remove or weaken:

- routes or canonical URLs
- legal content
- topic IDs
- tool functionality
- privacy guarantees
- source/copyright controls
- accessibility behavior
- SEO metadata
- local-storage contracts

### Preserve content

UI, routing and refactoring work is content-preserving.

Never replace substantive topic content with a short placeholder, summary, empty array, or fallback simply because the UI is being redesigned.

Content enhancement is a separate explicit task.

### Legal accuracy

Never invent:

- provisions
- cases
- citations
- holdings
- statutory illustrations
- official-source claims
- legal mappings

Unverified material must be clearly marked for review.

### Privacy

Legal research, notes, drafts, practice data and user data remain browser-local unless an explicitly approved architecture changes that boundary.

No hidden transmission of legal/user data.

### Legal safety

The product is assistive. Do not generate or present:

- guaranteed legal outcomes
- case-success predictions
- judicial-outcome predictions
- fabricated authorities
- claims that a generated draft is court-approved

### UI architecture

Use the adopted Chambers Record design system and current application shell.

New UI should use existing design-system primitives before introducing one-off styles.

Responsive desktop/mobile behavior, keyboard accessibility, focus visibility and reduced-motion support are implementation requirements, not optional final polish.

## 5. Content standards

The library should provide substantive legal explanations rather than bare-act dumps or one-line stubs.

Topic depth may be enhanced independently of UI work.

Do not impose an artificial requirement that every topic be rewritten into a fixed "10-mark" or "16-mark" format. Content should support academic answers, research and professional understanding according to the topic.

Existing accurate content must be retained during migration/refactoring.

## 6. Canonical content boundary

`legal-content` is the canonical legal-content/data boundary.

Application changes must not create a competing canonical source without an explicit architecture decision.

## 7. Sprint execution

Use:

ROADMAP/BACKLOG → architecture/dependency check → READY → implementation → validation → Sprint Board update → review/merge → post-merge validation.

Rules:

- one active implementation task at a time
- one clear owner
- check existing work before editing
- avoid overlapping workstreams
- update `docs/SPRINT-CONTROL-BOARD.md` before reporting completion
- never mark COMPLETED without evidence
- do not claim deployment or production validation without evidence

## 8. Validation

At minimum, choose validation appropriate to the change:

- TypeScript/typecheck
- unit/regression tests
- production build
- route/deep-link checks where routing changes
- responsive/accessibility checks where UI changes
- content integrity checks where legal content changes
- privacy/security checks where data/network behavior changes

Report failures honestly.

## 9. E2E

Playwright/E2E infrastructure is retained but expansion is paused while major UI work is underway.

Do not spend implementation effort expanding E2E unless the current sprint explicitly reactivates it.

## 10. Refactoring and cleanup

Before removing or archiving anything:

1. Search repository references.
2. Check runtime imports/exports.
3. Check scripts, CI, prompts and documentation references.
4. Check route/tool/content registries.
5. Determine whether it is historical evidence, active instruction, or dead material.
6. Prefer moving uncertain material to an archive over deleting it.
7. Preserve the original content exactly when archiving.
8. Update references to the new archive path when the reference remains useful.
9. Validate after cleanup.

Never delete uncertain files merely to make the repository smaller.

## 11. Completion report

Every completed implementation task must state:

- files changed
- behavior changed
- validation performed
- evidence/result
- known limitations
- Sprint Board status

No "completed" claim without evidence.
