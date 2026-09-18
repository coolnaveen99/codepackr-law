# Codepackr Law — AI Agents, Prompts & Skills

This folder defines how AI assistants and contributors must work on **Codepackr Law** (`law.codepackr.com`).

---

## Quick Start

1. Read the master guide: [`../AI_INSTRUCTIONS.md`](../AI_INSTRUCTIONS.md)
2. Legal content (every subject): [`instructions/global-legal-content.md`](instructions/global-legal-content.md)
3. Follow the tool SOP: [`skills/add-new-tool.md`](skills/add-new-tool.md)
4. Pass the checklist: [`skills/tool-quality-gate.md`](skills/tool-quality-gate.md)

---

## Legal content (global + per subject)

| Document | File |
|----------|------|
| **Global agent instructions** | [`instructions/global-legal-content.md`](instructions/global-legal-content.md) |
| Copilot apply-to `src/data/**` | [`instructions/legal-content.instructions.md`](instructions/legal-content.instructions.md) |
| Constitution | [`instructions/subjects/constitution.md`](instructions/subjects/constitution.md) |
| BNS | [`instructions/subjects/bns.md`](instructions/subjects/bns.md) |
| BNSS | [`instructions/subjects/bnss.md`](instructions/subjects/bnss.md) |
| BSA | [`instructions/subjects/bsa.md`](instructions/subjects/bsa.md) |
| CPC | [`instructions/subjects/cpc.md`](instructions/subjects/cpc.md) |
| Contract | [`instructions/subjects/contract.md`](instructions/subjects/contract.md) |
| Family | [`instructions/subjects/family.md`](instructions/subjects/family.md) |
| Torts | [`instructions/subjects/torts.md`](instructions/subjects/torts.md) |
| Petition formats | [`instructions/subjects/petition-formats.md`](instructions/subjects/petition-formats.md) |

Global instructions control architecture, research, validation, mapper, current/historical law, MCQ/Practice/Exam. Subject files control name, legislation, provision terminology, and subject-specific exceptions only.

---

## Agents (Roles)

| Agent | File | Use when |
|-------|------|----------|
| **Legal Content** | [`agents/legal-content.yml`](agents/legal-content.yml) | Researching, verifying, and implementing study content for any law subject |
| **Core Engineer** | [`agents/core-engineer.yml`](agents/core-engineer.yml) | Building tools, MCQ logic, TypeScript, privacy |
| **UI Architect** | [`agents/ui-architect.yml`](agents/ui-architect.yml) | Layout, design system, accessibility, UX completeness |
| **SEO Specialist** | [`agents/seo-specialist.yml`](agents/seo-specialist.yml) | Metadata, slugs, README listings, discoverability |

Each agent points to its detailed prompt in `prompts/`.

---

## Prompts

| Prompt | File |
|--------|------|
| Legal Content | [`prompts/legal-content.prompt.md`](prompts/legal-content.prompt.md) |
| Core Engineer | [`prompts/core-engineer.prompt.md`](prompts/core-engineer.prompt.md) |
| UI Architect | [`prompts/ui-architect.prompt.md`](prompts/ui-architect.prompt.md) |
| SEO Specialist | [`prompts/seo-specialist.prompt.md`](prompts/seo-specialist.prompt.md) |

---

## Skills (SOPs)

| Skill | File | Purpose |
|-------|------|---------|
| **Legal Content Workflow** | [`skills/legal-content-workflow.md`](skills/legal-content-workflow.md) | Research → verify → implement legal study content |
| **Reusable Legal Knowledge** | [`skills/reusable-legal-knowledge.md`](skills/reusable-legal-knowledge.md) | Search-first canonical IDs, `[[REF:]]`, validation |
| **Add Topic Notes** | [`skills/add-topic-notes.md`](skills/add-topic-notes.md) | Lazy-loaded Study Topic files |
| **Add New Tool** | [`skills/add-new-tool.md`](skills/add-new-tool.md) | Mandatory step-by-step for every new tool |
| **Tool Quality Gate** | [`skills/tool-quality-gate.md`](skills/tool-quality-gate.md) | Final pass/fail checklist |

---

## Global Rules

- [`copilot-instructions.md`](copilot-instructions.md) — Golden rules for the whole project
- Brand accent: **Blue `#2563eb`**
- Privacy: 100% client-side only
- Focus: AIBE, Judiciary, BNS / BNSS / BSA, Bare Acts
- Current-law subjects: Constitution, BNS, BNSS, BSA, CPC, Contract, Family, Torts. IPC / CrPC / IEA are historical concordance only.

Never skip the Quality Gate. Never transmit practice data off-device. Never invent legal provisions, citations, or mappings.
