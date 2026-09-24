# Codepackr Law — Mandatory Architecture, Jurisprudence & Tool Rules

You are working on **Codepackr Law** (`law.codepackr.com`) — an authoritative, 100% privacy-first, client-side **Digital Law Library & Practice Reference** engineered to serve both **Law Students / Judicial Aspirants** (University LL.B/LL.M, AIBE, State Judicial Services) and **Junior Lawyers / Practicing Advocates** (Chamber reference, trial and appellate court preparation).

Every line of legal content and code must reflect the intellectual precision of a **Doctor of Laws (PhD in Jurisprudence)** and the forensic strategy of a **Senior Counsel**.

---

## THE GOLDEN DIRECTIVES (NON-NEGOTIABLE)

1. **100% Client-Side Privacy** — Zero practice data, user notes, legal queries, or exam answers leave the device. Never initiate telemetry or server calls for substantive usage.
2. **Seal Brand Only** — Accent is **seal burgundy** via remapped Tailwind `blue-*` (`#8B1E3F` / `#9F2D4A`) in `src/index.css`. Never revert to Dev `#2563eb` or Finance emerald.
3. **Dual-Track Content Rigour**:
   - **Track A (Scholastic & Problem Solving Mastery — PhD Caliber)**: Grounded in jurisprudence, statutory intent, deconstructed provisions (sections, provisos, explanations), extracted ratio decidendi, structured IRAC case briefs, and comprehensive written submissions.
   - **Track B (Litigation & Chamber Practice — Senior Counsel Caliber)**: Actionable procedural reference: Forum, Territorial/Pecuniary Jurisdiction, Limitation Act period, statutory proving ingredients, evidentiary burden (BSA ss. 104–106 & s. 63 certificate), and core courtroom arguments (Prosecution/Plaintiff vs Defence/Respondent).
4. **Authoritative 2024 Legal Transition**:
   - Primary criminal statutes are **Bharatiya Nyaya Sanhita (BNS)**, **Bharatiya Nagarik Suraksha Sanhita (BNSS)**, and **Bharatiya Sakshya Adhiniyam (BSA)**.
   - IPC, CrPC, and IEA are **historical concordance only**. Never treat them as 1:1 identical.
   - Explicitly guide on **Section 531 BNSS** transitional rules (pending FIRs, trials, investigations governed by pre-existing law vs post-July 1, 2024 procedure; Article 20(1) constitutional bar on retrospective penal enhancements).
5. **Book Chapters, Not Digests**:
   - Benchmark model: `src/data/topics/cpc/s-32.ts`.
   - Never ship boilerplate synthesizer templates as final study notes. Student/lawyer-facing copy must read like a comprehensive treatise chapter.
6. **Lazy Topic Architecture**:
   - Full substantive treatises reside only in `src/data/topics/<subjectSlug>/<topicId>.ts` (loaded dynamically via `import.meta.glob`).
   - `src/data/subjects.ts` stores metadata only. Never bloat metadata arrays with full essays.
7. **Canonical Reusable Legal Knowledge**:
   - Always query `src/data/knowledge` before introducing any doctrine, case, maxim, or principle.
   - Reuse canonical IDs (`TYPE:CATEGORY:SLUG`) via `[[REF:...]]`. Never replicate doctrine essays across files.
8. **Forensic Quality Gate**:
   - `.github/skills/tool-quality-gate.md` must pass completely before any tool or feature is approved.
   - Zero tolerance for hallucinated sections, fictitious case citations, fabricated official illustrations, or speculative legal propositions. If unverified, label as `needs-review`.
9. **Universal Click Path**:
   - Subject landing = statutory introduction + verified catalog.
   - Provision click = comprehensive treatise page + statutory illustrations (proving vs failing) + Case Brief & Written Submissions jump dock + practical courtroom points.
10. **The Sacred Student Career Covenant (Zero Topic Omission)**:
   - We work for the student's career, academic qualification, and future life as an advocate or judicial officer.
   - We must NEVER ignore, skip, or compress syllabus topics. A missing topic could mean a failed examination or an unbriefed courtroom emergency.
   - Cross-reference standard university curricula (Bar Council of India, NLUs, Central/State universities) and benchmark classroom textbooks (e.g. M. S. Rama Rao, Ratanlal & Dhirajlal, Avtar Singh, Mulla).
   - Every doctrine, general defence, capacity rule, specific wrong/offence, remedy, and procedural mechanism must have a registered, dedicated, clickable topic with structured legal coverage.
11. **Senior Counsel & PhD Scholarship Standard (Elimination of Marks Paradigm)**:
   - Never reduce serious jurisprudence to collegiate exam marks (e.g. 10-mark / 16-mark).
   - All topics must feature structured **Case Briefs / Problem Assessments (IRAC)** and **Comprehensive Written Submissions**, complete with extracted case law ratios (`ratioDecidendi`), dual statutory illustrations, mandatory BSA 2023 evidentiary compliance (ss. 104–106 & s. 63), and limitation/jurisdiction roadmaps.

See `AI_INSTRUCTIONS.md`, `.github/instructions/global-legal-content.md`, and `.github/instructions/student-answer-content.md` for full implementation standards.

12. **Master Coverage Checklist Synchronization**:
    - All 20 curriculum subjects and 2,087 registered catalog topics are tracked in `docs/subject-coverage-checklist.md`.
    - Whenever a topic is authored or upgraded in `src/data/topics/<subjectSlug>/<topicId>.ts`, update the checklist entry to `[x] Complete` (or run `npm run checklist`) and set `hasNotes: true` in `src/data/subjects.ts`.
