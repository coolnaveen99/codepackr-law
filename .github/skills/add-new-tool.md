# Skill: Add New Tool to Codepackr Law (Student & Practice Tools SOP)

**Mandatory SOP** for creating, registering, and deploying client-side tools on CodePackr Law.

Every tool must serve either **Law Students / Aspirants** (examination simulation, flashcards, diagnostic MCQs) or **Junior Advocates / Practicing Litigators** (statutory mappers, limitation calculators, transition checkers, procedural flowcharts, drafting templates), operating with 100% client-side privacy.

---

## 1. Non-Negotiable Tool Directives

1. **100% Client-Side Privacy**: Zero data leaves the browser. No server calls with user notes, answers, scores, or draft pleadings.
2. **Seal Brand Integrity**: Accent color is **seal burgundy** (`#8B1E3F` / `#9F2D4A`) via remapped Tailwind `blue-*` in `src/index.css`. Never revert to Dev `#2563eb` or Finance green.
3. **Complete Interactive UX**:
   - Provide Sample / Demo state (pre-fills realistic legal data so the user can immediately test).
   - Clear / Reset action.
   - Comprehensive feedback states (loading, empty, error, results).
   - Mobile responsive and keyboard accessible (WCAG AA).
4. **India Legal Relevance**: Direct utility for Indian law students (AIBE, Judicial Services, LL.B) or litigators (trial/appellate practice, BNS/BNSS/BSA transition).
5. **Quality Gate Compliance**: Must fully pass [`.github/skills/tool-quality-gate.md`](tool-quality-gate.md).
6. **Existing-first**: Search the repository and canonical `src/data/knowledge` before creating a new tool. Extend an existing workflow when practical; do not create duplicate tools with overlapping purpose.
7. **Deterministic-first**: Before AI is introduced, prefer explainable, source-grounded, client-side workflows with visible inputs, transformations, sources, and outputs.
8. **AI is the final phase**: Do not add Groq, Gemini, OpenRouter, hosted LLM calls, autonomous legal drafting, or AI research/chat features while deterministic product phases remain open. AI integration is a final roadmap phase and requires a separate privacy/security review.

---

## 2. Tool Categories

| Category | Intended Scope | Representative Examples |
|----------|----------------|-------------------------|
| `mcq` | Diagnostic questions, mocks, and timed quizzes | Subject MCQ banks, AIBE Full Mock, Judicial Services Prelims simulator |
| `bare-acts` | Provision lookup, mappers, and transition guides | BNS ↔ IPC mapper, BNSS ↔ CrPC mapper, BSA ↔ IEA mapper, S. 531 transition checker |
| `study-aids` | Active recall, timers, and revision helpers | Section flashcards, Landmark case drill, Exam timer with alert intervals |
| `reference` | Quick courtroom and chamber reference utilities | Limitation calculator, Legal maxims, Legal Document Compare, Legal Draft Studio, BSA s. 63 certificate |
| `research` | Source-grounded legal research and authority discovery | Legal Research Workbench, Global Legal Search, Citation Verifier, Judgment Analyzer |
| `case-prep` | Structured case preparation without outcome prediction | Case Brief Builder, Judgment Compare, Case Chronology, Evidence Matrix, Argument Matrix |
| `practice` | Deterministic litigation/practice workflows | Filing Checklist, Hearing Preparation Checklist, Limitation Calculator, Procedural Flowchart |
| `drafting` | Structured drafting and document workflows | Legal Draft Studio, Draft Template Library, clause/document comparison, document redline |

### 2.1 Research-derived priority tool backlog

The following tool families are now part of the mandatory product backlog. They are derived from a 2026 review of Indian legal-research and document-review workflows, not from a request to clone third-party products.

#### A. Legal Research Workbench
Purpose:
- Search and organize legal propositions across canonical CodePackr content.
- Show subject/topic/provision/case relationships.
- Preserve source, jurisdiction, date and verification metadata.
- Provide a research trail that lets the user move from proposition → authority → explanation → related authorities.

Minimum deterministic capabilities:
- Exact and keyword search.
- Current vs historical law filtering.
- Subject, court, jurisdiction and date filters where data exists.
- Saved local research set/bookmarks.
- Source/verification status.
- Related concept/provision/case links.

#### B. Citation Verifier
Purpose:
- Check whether a cited Act, provision, case citation or canonical legal key exists in the verified CodePackr dataset.
- Detect malformed citations and current/historical mismatches where deterministic mappings exist.
- Link the user to the underlying source record.

Never claim that a citation is “good law” merely because it exists. A future citator may separately record treatment status.

#### C. Judgment Analyzer / Judgment Decoder
Purpose:
- Structured judgment reading and decoding.
- Case identity, court, bench, date, facts, issues, arguments, statutory provisions, precedents, reasoning, findings, holding, ratio, obiter and final order.
- Clearly distinguish verified judgment facts from CodePackr explanation.

Never invent paragraph numbers, arguments, holdings, judges, procedural history or ratios.

#### D. Judgment Compare
Purpose:
- Compare two judgments/orders or two versions of a legal authority.
- Surface changes in issues, provisions, reasoning, holdings and referenced authorities when the underlying structured data supports comparison.
- Keep the comparison descriptive; do not predict judicial outcomes.

#### E. Case Brief Builder
Purpose:
- Turn verified case records into a structured study/practice brief.
- Support facts → issues → rule → reasoning → holding → ratio → practical significance.
- Allow local user notes without transmitting them.

#### F. Case Chronology
Purpose:
- Build an event timeline from user-entered case facts/documents.
- Sort dates deterministically.
- Flag missing/ambiguous dates.
- Separate user-provided facts from verified legal authorities.
- Export/print a clean chronology.

#### G. Evidence Matrix
Purpose:
- Map issues/elements to evidence, witnesses, documents, admissions, objections and proof status.
- Support prosecution/plaintiff and defence/respondent views without deciding which side will win.
- Include BSA/evidence-law references only when verified.

#### H. Argument Matrix
Purpose:
- Structure issue-wise submissions:
  Issue → proposition → authority → factual application → counterargument → response → relief/prayer.
- Keep authorities source-linked.
- Support both sides of an adversarial issue.
- Do not generate unsupported legal propositions.

#### I. Filing & Hearing Checklists
Purpose:
- Deterministic procedural checklists for common Indian legal workflows.
- Examples: civil filing, criminal filing, bail preparation, appeal preparation, evidence stage, hearing preparation.
- Clearly scope each checklist by court/forum/jurisdiction and law/version.
- Never imply that a generic checklist guarantees filing acceptance.

#### J. Limitation & Procedural Calculators
Purpose:
- Deterministic date calculations using verified statutory rules.
- Show the rule/limitation source, assumptions, excluded periods and calculation steps.
- Support historical/current law distinctions.
- Never hide assumptions or silently select a limitation article.

#### K. BNS / BNSS / BSA Transition Centre
Purpose:
- Current ↔ historical provision relationships.
- Commencement and transitional guidance.
- Explain that historical IPC/CrPC/IEA references are not automatically identical to BNS/BNSS/BSA provisions.
- Surface verification status for every mapping.

#### L. Global Legal Search
Purpose:
- One search surface across subjects, topics, provisions, cases, concepts, maxims, tools and verified source metadata.
- Support historical aliases such as IPC/CrPC/IEA while keeping current-law records distinct.
- Provide filters and clear result-type labels.
- Avoid mixing authoritative source text with explanatory content.

#### M. Document Compare / Redline
Existing tool that must continue to evolve:
- Compare legal documents locally where technically possible.
- Show additions, deletions and unchanged text clearly.
- Preserve document privacy.
- Support Word/PDF/text workflows only where the implementation can reliably extract the relevant content.
- Prefer side-by-side and redline views.
- Do not add risk scoring or AI clause judgments before the final AI phase.

#### N. Legal Draft Studio / Draft Template Library
Existing tool that must remain highly discoverable:
- Maintain a broad catalogue of verified/curated legal document types.
- Distinguish reviewed full templates, educational scaffolds, catalogue entries and checklists.
- Support subject/Act/category/search filtering.
- Always show templates when no filters are selected.
- Preserve sample loading, preview and export workflows.
- Never label generic catalogue scaffolds as court-approved, filing-ready or legally sufficient.

#### O. Concept Versus / Legal Concept Comparison
Existing tool:
- Compare two canonical legal concepts side-by-side.
- Show definition/summary, explanation, exam point and related tags where available.
- Link to canonical knowledge records.
- Keep the output educational and descriptive; never present the comparison as a case-specific legal conclusion.

---

## 3. Research Benchmarking Principles

Current legal-tech research shows several recurring workflow capabilities that should inform CodePackr design:

- Indian legal research platforms emphasize judgment/legislation discovery, citation checking and source-backed research.
- Modern document comparison products emphasize side-by-side comparison, redline/change visibility, clause-level differences and version comparison.
- Legal research systems increasingly distinguish corpus discovery from citation/output verification; CodePackr should preserve that distinction.
- Source visibility and the ability to inspect the underlying authority are more important than presenting an opaque answer.
- AI-assisted research and drafting may be added later, but deterministic verification and primary-source traceability must remain the foundation.

External products are **research benchmarks only**. Do not copy proprietary UI, databases, headnotes, annotations, templates, text, or trade dress.

---

## 4. Practice / Drafting Tools

| Tool | Path | Data |
|------|------|------|
| Legal Document Compare | `src/components/tools/DocumentCompare.tsx` | Inline/local samples |
| Legal Draft Studio | `src/components/tools/LegalDraftStudio.tsx` | `src/data/draft-templates.ts` |
| Concept Versus | `src/components/tools/ConceptVersus.tsx` | `src/data/knowledge/concepts.ts` |

When adding a **new draft template** (not a new tool page), follow [add-legal-draft-template.md](add-legal-draft-template.md) instead of this full SOP.

---

## 5. Step-by-Step Implementation Sequence

1. **Register in Tool Registry**: Add entry to `src/data/tools.ts` (`id`, `slug`, `name`, `category`, `description`, `keywords`, `icon`, `priority`, `badge`).
2. **Build Component**: Create `src/components/tools/<ToolName>.tsx` (or subfolder if complex). Implement sample data, reset, responsive layout, and dark mode.
3. **Wire Routing**: Ensure clean URL works via `src/App.tsx` routing (`/tool/<slug>`).
4. **Add SEO & Metadata**: Configure title and meta description in App `setPageMeta` emphasizing client-side privacy and Indian legal utility.
5. **Sitemap**: `scripts/generate_sitemap.ts` already iterates `TOOLS` — run `npm run build` (or `npm run sitemap`) so `/tool/<slug>` is published.
6. **Navigation visibility**: For important practice tools, add appropriate visibility in sidebar/mobile navigation and, where justified, Home/featured or topbar entry points. A tool is not considered discoverable merely because its route exists.
7. **Cross-linking**: Link the new tool from related subject/topic/provision/case workflows where useful. Prefer canonical knowledge IDs over duplicated data.
8. **Update README.md**: Add tool to the featured list in `README.md` when appropriate.
9. **Execute Verification**:
   - `npm run lint`
   - `npm run build`
   - Relevant unit/integration tests
   - Manual/conceptual workflow verification for empty, sample, reset, results, export and mobile states.
10. **Complete Quality Gate**: Verify all checkboxes in [`.github/skills/tool-quality-gate.md`](tool-quality-gate.md).

---

## 6. Tool-Specific Verification Requirements

### Research tools
- [ ] Primary/source records are identifiable.
- [ ] Current vs historical law is distinguishable.
- [ ] Court/jurisdiction/date filters behave correctly where supported.
- [ ] No fabricated citations or authorities.
- [ ] Search results distinguish source text from explanatory content.
- [ ] User research notes remain local.

### Case-preparation tools
- [ ] Case identity and source metadata are preserved.
- [ ] Facts, issues, arguments, reasoning and holding are separated.
- [ ] Ratio/obiter are not conflated.
- [ ] User-entered facts are not presented as verified judicial facts.
- [ ] No outcome prediction, winner prediction or judge prediction.

### Document comparison tools
- [ ] Two-document input is clear.
- [ ] Additions/deletions are visually distinguishable.
- [ ] Side-by-side or redline view is available where supported.
- [ ] No user document is uploaded without explicit user action.
- [ ] Large/unsupported files fail safely with a useful message.
- [ ] Export does not silently alter source content.

### Drafting tools
- [ ] Empty catalogue shows available templates rather than a blank state caused by an unnecessary filter.
- [ ] Subject/Act/search/category filters work independently and together.
- [ ] Template provenance/status is visible.
- [ ] Sample → edit → preview → export works.
- [ ] Educational scaffolds are not represented as verified legal forms.

### Checklist/calculator tools
- [ ] Inputs and assumptions are explicit.
- [ ] Calculation steps are inspectable.
- [ ] Effective dates and historical/current law are handled.
- [ ] Jurisdiction/forum scope is visible.
- [ ] Results include the relevant source/verification status.

---

## 7. SEO checklist (every new tool)

- [ ] Unique `<title>` and meta description (privacy + India legal keywords)
- [ ] Keywords include common search phrases (e.g. bail application format BNSS, legal notice India)
- [ ] Breadcrumb Home → Tool
- [ ] Sitemap entry via TOOLS registry
- [ ] Featured flag only if homepage card is desired
