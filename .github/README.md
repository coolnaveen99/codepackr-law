# Codepackr Law — AI Agents, Prompts, Instructions & Skills

This directory governs how AI assistants, Senior Counsel reviewers, legal scholars, and developers build, maintain, and expand **Codepackr Law** (`law.codepackr.com`).

---

## Strategic Mission: Dual-Track Legal Library & Practice Reference

Codepackr Law is a 100% privacy-first, client-side **Digital Law Library & Practice Reference** engineered with dual-track excellence:
1. **Track A — Scholastic & Judicial Examination Mastery (PhD in Law Standard)**:
   - Deep jurisprudential grounding (analytical, historical, and sociological perspectives).
   - Legislative intent, statutory anatomy (sections, provisos, explanations, non-obstante clauses), and canons of interpretation.
   - Comprehensive university, AIBE, and State Judicial Services 10-mark and 16-mark structured answers (IRAC / ILAC frameworks).
   - Authoritative case law analysis (ratio decidendi clearly segregated from obiter dicta; landmark vs contemporary positions).
   - Rigorous legal doubt resolution (dispelling common statutory misconceptions and number collisions).
2. **Track B — Chamber & Courtroom Practice Reference (Senior Counsel Standard)**:
   - Rapid forensic reference for junior advocates and litigators during court hearings and chamber drafting.
   - Procedural mapping: Exact Forum, Territorial & Pecuniary Jurisdiction, Limitation Act schedule, and court fees.
   - Evidentiary standards: Mandatory statutory ingredients, burden of proof (BSA ss. 104–106), and electronic evidence certificates (BSA s. 63).
   - Core courtroom arguments: Petitioner/Prosecution essential submissions vs Respondent/Defence counter-arguments.
   - Authentic drafting anatomy: Verified petition structures, mandatory statutory averments, verification affidavits, and prayer formats.
   - 2024 Criminal Law Transition: Forensic clarity on Section 531 BNSS savings, grandfathering of pending proceedings, and date-of-offence applicability.

All tools execute strictly in the client's browser. Zero user notes, practice scores, or search queries ever leave the device. Theme: **Seal Burgundy** (`#8B1E3F` / `#9F2D4A`).

---

## Quick Navigation

1. **Master System Architecture**: [`../AI_INSTRUCTIONS.md`](../AI_INSTRUCTIONS.md)
2. **Global Legal & Practice Architecture**: [`instructions/global-legal-content.md`](instructions/global-legal-content.md)
3. **Dual-Track Content Depth Standard**: [`instructions/student-answer-content.md`](instructions/student-answer-content.md)
4. **Legal Content Workflow SOP**: [`skills/legal-content-workflow.md`](skills/legal-content-workflow.md)
5. **Adding a New Subject**: [`skills/add-new-subject.md`](skills/add-new-subject.md)
6. **Writing High-Yield Topic Treatises**: [`skills/add-topic-notes.md`](skills/add-topic-notes.md)
7. **Canonical Legal Knowledge Graph**: [`skills/reusable-legal-knowledge.md`](skills/reusable-legal-knowledge.md)
8. **Forensic Quality Gate**: [`skills/tool-quality-gate.md`](skills/tool-quality-gate.md)

---

## Legal & Subject Specifications (`instructions/`)

| Document | File | Purpose |
|----------|------|---------|
| **Global Legal Architecture** | [`instructions/global-legal-content.md`](instructions/global-legal-content.md) | Universal research, verification, dual-track content, and statutory rules |
| **Academic & Practice Depth** | [`instructions/student-answer-content.md`](instructions/student-answer-content.md) | PhD + Senior Counsel content standard for all substantive topics |
| **Copilot Data Directive** | [`instructions/legal-content.instructions.md`](instructions/legal-content.instructions.md) | Target instructions automatically applied to `src/data/**` |
| **Repository Rules** | [`instructions/project.md`](instructions/project.md) | Core technical, privacy, and versioning constraints |
| **Subject Template** | [`instructions/subjects/_template.md`](instructions/subjects/_template.md) | Master template for onboarded statutes |
| **Constitution of India** | [`instructions/subjects/constitution.md`](instructions/subjects/constitution.md) | Constitutional law through the 106th Amendment |
| **Bharatiya Nyaya Sanhita (BNS)** | [`instructions/subjects/bns.md`](instructions/subjects/bns.md) | Substantive criminal law (Act 45 of 2023) |
| **Bharatiya Nagarik Suraksha Sanhita (BNSS)**| [`instructions/subjects/bnss.md`](instructions/subjects/bnss.md) | Criminal procedure, bail, trial, S. 531 transition |
| **Bharatiya Sakshya Adhiniyam (BSA)** | [`instructions/subjects/bsa.md`](instructions/subjects/bsa.md) | Law of evidence, electronic certificates (S. 63), burden |
| **Code of Civil Procedure (CPC)** | [`instructions/subjects/cpc.md`](instructions/subjects/cpc.md) | Civil litigation, suits, injunctions, execution, O. VII R. 11 |
| **Indian Contract Act** | [`instructions/subjects/contract.md`](instructions/subjects/contract.md) | Formation, breach, damages, specific relief interplay |
| **Family Law** | [`instructions/subjects/family.md`](instructions/subjects/family.md) | Personal laws, succession, matrimonial relief, maintenance |
| **Law of Torts** | [`instructions/subjects/torts.md`](instructions/subjects/torts.md) | Common law wrongs, strict/absolute liability, statutory torts |
| **Petition Formats & Pleadings** | [`instructions/subjects/petition-formats.md`](instructions/subjects/petition-formats.md) | Chamber drafting, pleadings anatomy, mandatory averments |

---

## Agents (`agents/`)

Specialized personas configured for repository workflows:

| Agent | File | Primary Responsibility |
|-------|------|------------------------|
| **Legal Content** | [`agents/legal-content.yml`](agents/legal-content.yml) | Researches, verifies, and drafts treatises with PhD rigour and Senior Counsel insight |
| **Subject Author** | [`agents/subject-author.yml`](agents/subject-author.yml) | Onboards complete statutory catalogs and drafts section treatises |
| **Core Engineer** | [`agents/core-engineer.yml`](agents/core-engineer.yml) | Builds 100% client-side privacy tools, calculators, and exam simulators |
| **UI Architect** | [`agents/ui-architect.yml`](agents/ui-architect.yml) | Enforces seal burgundy branding, catalog accessibility, and dual-track reader UX |
| **SEO Specialist** | [`agents/seo-specialist.yml`](agents/seo-specialist.yml) | Optimizes discoverability for law students, aspirants, and legal professionals |
| **Project Maintainer**| [`agents/project-maintainer.md`](agents/project-maintainer.md) | Guards repo integrity, canonical knowledge graph validation, and build hygiene |

---

## Prompts (`prompts/`)

Operational system prompts matching agent roles:
- [`prompts/legal-content.prompt.md`](prompts/legal-content.prompt.md)
- [`prompts/add-subject.prompt.md`](prompts/add-subject.prompt.md)
- [`prompts/core-engineer.prompt.md`](prompts/core-engineer.prompt.md)
- [`prompts/ui-architect.prompt.md`](prompts/ui-architect.prompt.md)
- [`prompts/seo-specialist.prompt.md`](prompts/seo-specialist.prompt.md)
- [`prompts/project-maintainer.md`](prompts/project-maintainer.md)

---

## Skills & Standard Operating Procedures (`skills/`)

- **[`skills/legal-content-workflow.md`](skills/legal-content-workflow.md)** — Research → Verify → Structure → Implement → Cross-Link → Validate → Test.
- **[`skills/student-answer-content.md`](skills/student-answer-content.md)** — Operational rubric for 10-mark and 16-mark answers and courtroom notes.
- **[`skills/add-topic-notes.md`](skills/add-topic-notes.md)** — SOP for lazy-loaded topic treatise files (`s-32.ts` benchmark).
- **[`skills/add-new-subject.md`](skills/add-new-subject.md)** — SOP for onboarding an Act or high-yield legal domain.
- **[`skills/reusable-legal-knowledge.md`](skills/reusable-legal-knowledge.md)** — Search-first canonical entity management (`TYPE:CATEGORY:SLUG`).
- **[`skills/add-new-tool.md`](skills/add-new-tool.md)** — SOP for client-side tools and practice aids.
- **[`skills/tool-quality-gate.md`](skills/tool-quality-gate.md)** — Forensic pass/fail release gate.
- **[`skills/project-maintenance.md`](skills/project-maintenance.md)** — Routine verification and codebase maintenance.

---

## Non-Negotiable Directives

1. **Zero Hallucination Standard**: Never invent a section number, citation, judicial holding, statutory illustration, or procedural step. If an authority is unverified, tag it as `needs-review`.
2. **Current Law Primacy**: BNS, BNSS, and BSA govern offences and proceedings on or after 1 July 2024. IPC, CrPC, and IEA are historical concordance only. Never state `IPC = BNS` without forensic qualification.
3. **Client-Side Privacy**: Absolute zero data leakage. All notes, mock exams, flashcards, and search queries remain exclusively on the user's browser.
