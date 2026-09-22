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

---

## 2. Tool Categories

| Category | Intended Scope | Representative Examples |
|----------|----------------|-------------------------|
| `mcq` | Diagnostic questions, mocks, and timed quizzes | Subject MCQ banks, AIBE Full Mock, Judicial Services Prelims simulator |
| `bare-acts` | Provision lookup, mappers, and transition guides | BNS ↔ IPC mapper, BNSS ↔ CrPC mapper, BSA ↔ IEA mapper, S. 531 transition checker |
| `study-aids` | Active recall, timers, and revision helpers | Section flashcards, Landmark case drill, Exam timer with alert intervals |
| `reference` | Quick courtroom and chamber reference utilities | Limitation Act calculator, Legal maxims glossary, BSA s. 63 certificate drafting tool |

---

## 3. Step-by-Step Implementation Sequence

1. **Register in Tool Registry**: Add entry to `src/data/tools.ts` (`id`, `slug`, `name`, `category`, `description`, `keywords`, `icon`, `priority`, `badge`).
2. **Build Component**: Create `src/components/tools/<ToolName>.tsx` (or subfolder if complex). Implement sample data, reset, responsive layout, and dark mode.
3. **Wire Routing**: Ensure clean URL works via `src/App.tsx` routing.
4. **Add SEO & Metadata**: Configure title and meta description emphasizing client-side privacy and Indian legal utility.
5. **Update README.md**: Add tool to the featured list in `README.md`.
6. **Execute Verification**:
   - `npm run lint`
   - `npm run build`
7. **Complete Quality Gate**: Verify all checkboxes in [`.github/skills/tool-quality-gate.md`](tool-quality-gate.md).
