# CodePackr Law — Simplified Quick-Prompts (1-Minute Copy & Paste)

Use these short, simplified prompts when you don't want to copy long templates. They are already tuned for **Senior Counsel & PhD Standards** and can be pasted directly into ChatGPT, Claude, Cursor, Copilot, or DeepSeek.

---

## ⚡ Option 1: The Universal Short Prompt (For Any Subject / Topic)

Just copy the block below, replace the bracketed items, and send:

```markdown
Act as a Senior Counsel (Supreme Court of India) and PhD Scholar in Jurisprudence authoring for CodePackr Law (law.codepackr.com).

Generate the complete, unshortened TypeScript topic file for:
- Subject: [SUBJECT_NAME] (folder: src/data/topics/[SUBJECT_SLUG]/)
- Topic / Provision: [PROVISION_OR_TOPIC_NAME]
- Target File: src/data/topics/[SUBJECT_SLUG]/[TOPIC_ID].ts

STRICT REQUIREMENTS:
1. ZERO EXAM MARKS: Never mention 10-mark or 16-mark. Use draftingCategory: 'brief' (Case Brief / IRAC Problem Assessment) and draftingCategory: 'submissions' (Appellate Written Submissions).
2. 5 DOCTRINAL MODULES: (1) Provenance & Jurisprudential Foundation, (2) Textual Anatomy & Provisos, (3) Mandatory Proving Ingredients, (4) BSA 2023 Evidentiary Burdens (ss. 104–106 & s. 63), (5) Procedural Roadmap, Forum & Limitation Act 1963.
3. DUAL ILLUSTRATIONS: Include Illustration 1 (Proving conditions met) and Illustration 2 (Boundary failure / defect where section fails).
4. EXTRACTED CASE LAW RATIOS: For landmark cases, provide name, year, citation, court, bench, facts, issue, ratioDecidendi, holding, and relevance.
5. TYPESCRIPT SCHEMA: Output complete code matching `TopicContent` from `../topicTypes`.

Generate the complete, copy-pasteable TypeScript code file now.
```

---

## 🏛️ Option 2: Pre-Tuned for Constitutional Law

Copy and paste this directly when working on **Constitutional Law**:

```markdown
Act as a Senior Constitutional Counsel (Supreme Court of India) and PhD in Constitutional Jurisprudence for CodePackr Law (law.codepackr.com).

Generate the complete TypeScript treatise file for:
- Subject: Constitutional Law (slug: `constitution`)
- Target Provision: [ARTICLE_OR_DOCTRINE, e.g. "Article 21: Right to Life & Personal Liberty" or "Article 32/226: Prerogative Writs"]
- Target File: `src/data/topics/constitution/[TOPIC_ID, e.g. art-21 or art-32-226].ts`

CONSTITUTIONAL LAW DIRECTIVES:
1. Strict Senior Counsel depth: Deconstruct legislative intent, Constituent Assembly Debates (if landmark), and the 106th Constitutional Amendment Act (2023).
2. Anchor Judicial Review Standards: Apply the Golden Triangle (Arts 14, 19, 21), Shayara Bano Manifest Arbitrariness, and Puttaswamy 4-Prong Proportionality Test.
3. Anchor Writ Jurisdiction: Clearly distinguish Article 32 (Supreme Court) vs Article 226 (High Court), alternative remedy exceptions (Whirlpool doctrine), and locus standi.
4. Extracted Case Law Ratios: Cite Constitution Bench authorities with full ratioDecidendi, bench strength, court, and courtroom application.
5. Dual Statutory Illustrations: Provide one where executive/legislative action violates the Constitution and is quashed, and one where state restriction is upheld as valid reasonable classification/procedure established by law.
6. Chamber Drafting:
   - `draftingCategory: 'brief'` → Case Brief (IRAC Problem Assessment)
   - `draftingCategory: 'submissions'` → Comprehensive Constitutional Writ Petition Submissions (Appellate Standard)
7. NO 10-MARK OR 16-MARK PHRASING: Completely prohibited.

Generate the full TypeScript code matching `TopicContent` now.
```

---

## 🏭 Option 3: Pre-Tuned for Labour & Industrial Law

Copy and paste this directly when working on **Labour & Industrial Law**:

```markdown
Act as a Senior Labour Law Counsel and PhD Scholar in Industrial Jurisprudence for CodePackr Law (law.codepackr.com).

Generate the complete TypeScript treatise file for:
- Subject: Labour and Industrial Law (slug: `labour`)
- Target Topic / Provision: [TOPIC_OR_SECTION, e.g. "Retrenchment under Section 25F Industrial Disputes Act / Industrial Relations Code" or "Definition of Workman under Section 2(s)"]
- Target File: `src/data/topics/labour/[TOPIC_ID, e.g. s-25f-retrenchment or workman-def].ts`

LABOUR LAW DIRECTIVES:
1. Dual Statutory Concordance: Contrast provisions of the Industrial Disputes Act, 1947 with the incoming Industrial Relations Code, 2020.
2. Mandatory Statutory Ingredients: List the non-negotiable conditions precedent (e.g. 1 month's notice / wages in lieu, 15 days average pay per year of continuous service under s. 25B, notice to appropriate government).
3. Forum & Procedural Roadmap: Conciliation Officer (s. 12), failure report, reference under s. 10(1), Labour Court vs Industrial Tribunal jurisdiction, limitation, and s. 17B interim relief during High Court challenges.
4. Evidentiary Burdens under BSA 2023: Management's burden to prove fair and proper domestic enquiry, compliance with natural justice, and production of muster rolls/wage sheets.
5. Extracted Landmark Precedents: Full ratios for leading authorities (e.g., State Bank of India v. N. Sundara Money, Bangalore Water Supply v. A. Rajappa, Syndicate Bank v. General Secretary).
6. Dual Illustrations: One where retrenchment is void ab initio due to non-compliance with condition precedent, and one valid discharge/closure.
7. Chamber Drafting:
   - `draftingCategory: 'brief'` → Case Brief & Problem Assessment (IRAC)
   - `draftingCategory: 'submissions'` → Comprehensive Statement of Claim / Written Submissions before the Industrial Tribunal
8. NO 10-MARK OR 16-MARK WORDS: Strictly prohibited.

Generate the full TypeScript code matching `TopicContent` now.
```

---

## ⚖️ Option 4: Quick Update / Overwrite Prompt (For Any Existing File)

If a file already exists and you want the AI to clean and upgrade it:

```markdown
Act as a Senior Counsel and PhD in Jurisprudence for CodePackr Law.

Review this existing file and upgrade it to our latest Senior Counsel & PhD standard:
- File to overwrite: `src/data/topics/[SUBJECT_SLUG]/[TOPIC_ID].ts`

INSTRUCTIONS:
1. Keep all accurate statutory references and genuine case names from the existing content.
2. Completely PURGE any mention of "10-mark" or "16-mark" exam answers.
3. Expand into 5 Doctrinal Modules (Provenance, Textual Anatomy, Mandatory Ingredients, BSA 2023 Evidentiary Burdens, Procedural Roadmap).
4. Upgrade cases to structured extracted ratios (`ratioDecidendi`, `court`, `bench`, `facts`, `issue`).
5. Add Dual Contrasting Illustrations (one that succeeds, one that fails).
6. Provide Case Brief (IRAC) and Comprehensive Written Submissions.

EXISTING CODE TO UPGRADE:
[PASTE YOUR EXISTING CODE HERE]

Output the complete, updated TypeScript file ready to overwrite the original.
```
