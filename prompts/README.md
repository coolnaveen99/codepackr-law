# CodePackr Law — AI Prompts Library

This directory contains reusable prompts for legal-content authoring and maintenance.

## Current execution rule

Do **not** use a prompt as the project roadmap.

For every implementation task, first read:

1. `docs/architecture/CURRENT-IMPLEMENTATION-CONTRACT.md`
2. `docs/SPRINT-CONTROL-BOARD.md`
3. `AI_INSTRUCTIONS.md`
4. relevant domain instructions/skills.

Prompts are task-specific helpers, not substitutes for the current architecture or sprint board.

## Available prompts

| Scenario | Prompt |
|---|---|
| Topic authoring | `TOPIC_AUTHORING_AI_PROMPT.md` |
| New topic / subject workflow | `NEW_TOPIC_OR_SUBJECT_PROMPT.md` |
| Upgrade an existing topic | `UPGRADE_EXISTING_TOPIC_PROMPT.md` |
| Subject audit / expansion | `SUBJECT_AUDIT_AND_EXPANSION_PROMPT.md` |
| Famous judgments | `ADD_FAMOUS_JUDGMENTS.md` |
| Judgment depth | `JUDGMENT_AND_BRIEF_DEPTH.md` |
| Content dispatcher | `DISPATCHER.md` |
| Admin publishing | `ADMIN_CONTENT_PUBLISHING_AI_PROMPT.md` |

## Topic workflow

Before using a topic prompt:

- verify the topic/subject exists or that a new-subject task is explicitly approved;
- preserve existing substantive content;
- check reusable legal knowledge first;
- follow the applicable legal-content and subject instructions;
- never invent authorities or citations;
- validate the resulting content and update the Sprint Board when the task is complete.

Legacy quick prompts and the old site-completion playbook are preserved under `docs/archive/legacy-instructions/` and are not current instructions.
