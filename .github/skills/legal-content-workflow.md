# Skill: Legal Content Workflow (Senior Counsel & PhD Operational SOP)

**Mandatory SOP** for researching, verifying, drafting, and implementing Indian-law treatises, topics, provisions, cases, and tools.

Full rules: [`.github/instructions/global-legal-content.md`](../instructions/global-legal-content.md)  
Depth standard: [`.github/instructions/student-answer-content.md`](../instructions/student-answer-content.md)  
Benchmark model: `src/data/topics/cpc/s-32.ts`

---

## The Dual-Track Pipeline

```text
RESEARCH BEYOND BARE ACT
        ↓
VERIFY COMMENCEMENT & TRANSITION (S. 531 BNSS / Art 20(1))
        ↓
DECONSTRUCT JURISPRUDENCE & STATUTE (PhD Caliber)
        ↓
ESTABLISH PROCEDURAL ANCHOR & PROVING STANDARD (Senior Counsel)
        ↓
IMPLEMENT LAZY TREATISE (`src/data/topics/<slug>/<id>.ts`)
        ↓
FORMULATE IRAC / CREAC EXAM ANSWERS (marks: 10 | 16)
        ↓
CROSS-LINK CANONICAL KNOWLEDGE (`[[REF:TYPE:CATEGORY:SLUG]]`)
        ↓
VALIDATE KNOWLEDGE GRAPH & PASS QUALITY GATES (Lint + Build)
```

---

## Step-by-Step Execution

### 1. Research (Level 1 to Level 4)
- **Primary Law**: Official Gazette of India, India Code, Legislative Department publications.
- **Judicial Authorities**: Supreme Court Reports (SCR), Supreme Court Cases (SCC), All India Reporter (AIR). Extract the exact *ratio decidendi*; separate binding law from *obiter dicta*.
- **Canonical Graph**: Check `src/data/knowledge` before minting any doctrine, case, or maxim.

### 2. Verify Commencement & Transitional Status
- **Date-of-Offence Verification**: For criminal law, confirm whether the provision applies to post-July 1, 2024 acts (BNS) or historical acts (IPC).
- **Section 531 BNSS Savings Check**: Explicitly document that pending trials and investigations continue under CrPC, 1973.
- **Number Collisions**: Verify that BNS/BNSS numbers are not conflated with IPC/CrPC numbers (e.g., BNS 304 snatching, BNS 309 robbery, BNSS 482 anticipatory bail).

### 3. Dual-Track Structuring
Every substantive treatise file must contain:
- **Track A (Scholastic & Exam Mastery)**:
  - Meaning, concept, and jurisprudential origin.
  - Deconstruction of statutory text (sub-sections, provisos, explanations).
  - Canons of statutory interpretation applied.
  - Landmark precedents with extracted ratio decidendi.
  - Complete 10-Mark Answer (`marks: 10`) formatted using IRAC.
  - Complete 16-Mark Answer (`marks: 16`) formatted using CREAC.
- **Track B (Litigation & Chamber Practice)**:
  - Competent forum and territorial/pecuniary limits.
  - Limitation Act, 1963 schedule anchor.
  - Indispensable statutory ingredients to be proved in court.
  - Standard and burden of proof under BSA (ss. 104–106) and electronic certificate requirements (s. 63).
  - Essential pleadings averments (Order VI Rule 2 CPC).
  - Core adversarial submissions: Prosecution/Plaintiff vs Defence/Respondent arguments.

### 4. Implementation
- **Metadata Only**: Register minimal search metadata in `src/data/subjects.ts` (`id`, `name`, `type`, `cluster`, `highYield`). Never place essays in `subjects.ts`.
- **Full Treatise**: Write the comprehensive book chapter in `src/data/topics/<slug>/<id>.ts`.
- **Never ship boilerplate synthesizers**: Replace factory templates (`synthesizeProvision`, `synthesizeCpc`) with authentic treatises.

### 5. Cross-Link Reusable Knowledge
- Link canonical records via `[[REF:TYPE:CATEGORY:SLUG]]`.
- Add verified mapper relationships in `src/data/sections/` when connecting reformed codes to historical equivalents.

### 6. Validate & Test
- Run `npm run lint` and `npm run build`.
- Verify that no duplicate IDs exist and no `[[REF:...]]` references are broken.
- Ensure the Quality Gate checklist is completely green.
