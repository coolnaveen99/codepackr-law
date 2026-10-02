# Skill: Academic & Practice Content Depth (Senior Counsel & PhD Rubric)

**Full standard:** [`.github/instructions/student-answer-content.md`](../instructions/student-answer-content.md)  
**Quality model:** `src/data/topics/cpc/s-32.ts`

This skill defines the criteria for drafting substantive topic and provision treatises on CodePackr Law, serving both **law students / judicial service aspirants** and **junior advocates / practicing litigators**.

---

## Core Philosophy

```text
UNDERSTAND JURISPRUDENCE → DECONSTRUCT STATUTE → ANCHOR FORUM & BURDEN → APPLY TO FACTS → WRITE IRAC EXAM ANSWERS → PREPARE COURTROOM ARGUMENTS
```

Never reduce a topic to a Bare Act digest or a series of bullet points.

---

## Dual-Track Field Mapping in `TopicContent`

Utilize existing TypeScript properties in `TopicContent` to satisfy both tracks:

1. **`study` (The Master Treatise Body)**:
   - Topic at a Glance.
   - Introduction & Jurisprudential Grounding (Philosophical context & legislative intent).
   - Statutory Anatomy Deconstructed (Sub-sections, provisos, explanations, non-obstante clauses).
   - Essential Statutory Ingredients (Physical acts, mental states).
   - Procedural & Forum Anchor (Competent court, pecuniary/territorial bounds, Limitation Act period).
   - Evidentiary Proof Requirements (BSA ss. 104–106 burden, Section 63 electronic certificate).
   - Adversarial Submissions (Prosecution/Plaintiff essentials vs Defence/Respondent counter-arguments).
   - Exceptions, Provisos & Limitations.
   - Statutory Distinctions (Distinguishing neighbouring sections and false equivalences).
   - 2024 Transitional Note (Applicability, date of offence, S. 531 BNSS savings).
2. **`cases` (Ratio Decidendi Extraction)**:
   - Strictly verify case name, citation, court, and bench.
   - Extract the binding legal principle (*ratio decidendi*); never dump raw case names without their proposition.
3. **`examples` & `hypotheticals`**:
   - Contrastive practical examples: One where the rule applies, one where it fails.
   - Detailed, realistic classroom/exam hypothetical showing step-by-step legal analysis.
4. **`questionsAndAnswers` (Answer / Practice Dock)**:
   - Provide substantive, complete answers appropriate to the topic and audience.
   - Use IRAC, CREAC, problem-analysis, comparative analysis or another suitable framework.
   - Do not require fixed mark values or artificial word-count targets.
   - Case Briefs and Written Submissions must remain clearly separated by `draftingCategory`.
5. **`distinctions` & `misconceptions`**:
   - Resolve subtle doubts, section-number collisions, and common exam/courtroom traps.

---

## Quality Gate Checklist

Reject any topic treatise that:
- [ ] Reads like a Bare Act dump or unedited statutory paste.
- [ ] Relies on generic synthesizer boilerplate (`synthesizeProvision`, `synthesizeCpc`).
- [ ] Omits the competent forum, limitation period, or evidentiary burden.
- [ ] Provides shallow, abbreviated, or placeholder answers where substantive analysis is required.
- [ ] Confuses IPC/CrPC/IEA section numbers with BNS/BNSS/BSA.
- [ ] Contains fictitious cases, citations, or unverified statutory illustrations.
