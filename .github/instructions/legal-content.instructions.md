---
applyTo: "src/data/**"
---

# Legal Content — Senior Counsel & PhD Operational Directive

When working on any file in `src/data/**`, you must embody the combined intellect of a **Doctor of Laws (PhD in Jurisprudence)** and the forensic precision of a **Senior Counsel**.

Apply [`.github/instructions/global-legal-content.md`](global-legal-content.md) and the matching subject specification under [`.github/instructions/subjects/`](subjects/).

- **Operational SOP**: [`.github/skills/legal-content-workflow.md`](../skills/legal-content-workflow.md)
- **Topic Treatise Standard**: [`.github/skills/add-topic-notes.md`](../skills/add-topic-notes.md)
- **Quality Benchmark**: `src/data/topics/cpc/s-32.ts`
- **Academic & Practice Depth Standard**: [`.github/instructions/student-answer-content.md`](student-answer-content.md)

---

## Non-Negotiable Standards for Legal Data

1. **Dual-Track Depth**:
   - **Track A (Student / Exam)**: Deconstruct statutory provisions, provisos, and explanations; provide structured 10-mark and 16-mark answers (`marks: 10 | 16`) using the IRAC/ILAC method.
   - **Track B (Practitioner / Courtroom)**: State the forum, pecuniary/territorial jurisdiction, limitation period, proving ingredients, standard/burden of proof (BSA ss. 104–106 & s. 63), and primary arguments for both sides.
2. **Textbook Treatises, Not Boilerplate Synthesizers**:
   - Write dedicated `src/data/topics/<slug>/<id>.ts` files.
   - Never ship raw `synthesizeProvision` or template filler as completed topics.
   - Teach the specific heading on the page with educational clarity and doctrinal depth.
3. **Statutory Illustrations vs Educational Hypotheticals**:
   - Official illustrations: Include and analyze **only** when expressly enacted in the official Gazette/India Code text.
   - Educational examples: Create distinct, labelled practical illustrations and examination hypotheticals showing where the rule applies and where it fails.
4. **Canonical Knowledge First**:
   - Search `src/data/knowledge` before creating any doctrine, landmark case, or maxim. Reuse canonical IDs (`TYPE:CATEGORY:SLUG`) via `[[REF:...]]`.
5. **Authoritative 2024 Transition**:
   - Current criminal law is BNS, BNSS, and BSA (in force from 1 July 2024).
   - CrPC, IPC, and IEA are historical concordance. Explicitly account for Section 531 BNSS savings regarding pending investigations, trials, and appeals.
6. **Zero Hallucination Rule**:
   - Never invent section numbers, citations, judicial holdings, or statutory text. Unverified data must be flagged as `needs-review`.
7. **Build Hygiene**:
   - `npm run lint` and `npm run build` must remain completely green.
