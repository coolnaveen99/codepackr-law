# Code of Civil Procedure (CPC) — Subject Instructions (Senior Counsel & PhD Benchmark)

Read first: [`.github/instructions/global-legal-content.md`](../global-legal-content.md) and [`.github/instructions/student-answer-content.md`](../student-answer-content.md).

Topic SOP: [`.github/skills/add-topic-notes.md`](../../skills/add-topic-notes.md).
Quality model for every section, Order, and Rule: `src/data/topics/cpc/s-32.ts`.

This document governs civil procedural law and civil litigation practice under the **Code of Civil Procedure, 1908 (Act 5 of 1908)**.

---

## 1. Statutory & Practice Metadata

| Dimension | Specification |
|-----------|---------------|
| **Subject Slug** | `cpc` |
| **Official Title** | Code of Civil Procedure, 1908 (Act No. 5 of 1908) |
| **Short Display Name** | CPC (Civil Procedure) |
| **Status** | In force (Continues unamended by the 2023 criminal law reforms) |
| **Provision Label** | **Section / Order / Rule** (Distinguish substantive Section from procedural Order/Rule) |
| **Catalog Scope** | 158 Sections, 51 Orders (`src/data/cpc/`) |
| **Treatise Path** | `src/data/topics/cpc/<topicId>.ts` (topic id `s-<n>` or `o-<n>`) |
| **Canonical IDs** | `SECTION:CPC:SECTION-9`, `ORDER:CPC:ORDER-7-RULE-11`, `DOCTRINE:CIVIL-PROCEDURE:RES-JUDICATA` |

---

## 2. Civil Litigation & Courtroom Anchors (Senior Counsel Checklist)

For every section and order treatise in CPC:
1. **Jurisdiction of Civil Courts (Section 9 CPC)**:
   - Civil courts possess plenary jurisdiction to try all suits of a civil nature unless expressly barred (by statute, e.g. RERA, NCLT, DRT) or impliedly barred.
2. **Plaint & Rejection of Plaint (Order VII Rule 11 CPC — Litigator's Cardinal Tool)**:
   - Grounds: (a) no cause of action, (b) undervalued and not corrected, (c) insufficient stamp/court fee, (d) barred by any law (e.g. limitation, res judicata).
   - *Senior Counsel Practice Rule*: An application under Order VII Rule 11 must be adjudicated **exclusively on the averments made in the plaint**. The defence in the written statement or documents produced by the defendant cannot be looked into at this stage (*Dahiben v. Arvindbhai Kalyanji Bhanusali*).
3. **Res Judicata (Section 11) vs Bar under Order II Rule 2**:
   - Section 11: Bars a subsequent trial of an issue directly and substantially in issue in a former suit between the same parties decided on merits.
   - Constructive Res Judicata (Explanation IV): Any matter which might and ought to have been made a ground of attack or defence is deemed directly in issue.
   - Order II Rule 2: Bars omission to sue for one of several reliefs arising from the same cause of action without leave of the court.
4. **Temporary Injunctions (Order XXXIX Rules 1 & 2 — The Threefold Test)**:
   - Prima facie case (serious question to be tried).
   - Balance of convenience (greater hardship to plaintiff if refused than to defendant if granted).
   - Irreparable injury (injury incapable of being compensated in terms of money).
5. **Written Statement & Timelines (Order VIII Rule 1)**:
   - 30 days normal; extendable to 90 days for reasons recorded in writing (*Kailash v. Nanhku* — directory in regular civil suits).
   - Note exception for Commercial Courts: Strict 120-day outer limit with forfeiture of defence (*SCG Contracts India v. K.S. Chamankar Infrastructure*).
6. **Framing of Issues (Order XIV)**:
   - The court frames issues of fact and issues of law from allegations in pleadings, interrogatories, and documents produced.
7. **Execution of Decrees (Sections 36–74 & Order XXI)**:
   - Execution is the fruit of litigation. Section 47 mandates that all questions arising between parties relating to execution, discharge, or satisfaction must be determined by the executing court, not by a separate suit.

---

## 3. Ban on Generic Boilerplate

- Reject the `synthesizeCpc` template (e.g., placing *Salem Advocate Bar Association* indiscriminately on every section).
- Write dedicated, authentic treatises for each section or Order (matching `src/data/topics/cpc/s-32.ts`).

---

## 4. Academic & Examination Architecture (PhD Standard)

1. **IRAC 10-Mark Answer (`marks: 10`)**:
   - Issue: The civil procedural obstacle or relief claimed.
   - Rule: Relevant Section and Order/Rule of CPC, statutory conditions.
   - Application: Forensic analysis of the pleadings, timeline, and jurisdiction.
   - Conclusion: Order to be passed (e.g., rejection of plaint, grant of interim injunction).
2. **CREAC 16-Mark Answer (`marks: 16`)**:
   - Advanced jurisprudential treatise: The dichotomy between substantive law and procedural law (*processual law is handmaid of justice*), history of CPC amendments (1976, 1999, 2002), alternate dispute resolution under Section 89 (*Afcons Infrastructure*), inherent powers under Section 151, and landmark appellate decisions.
