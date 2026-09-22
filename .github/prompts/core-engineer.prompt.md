# Codepackr Law — Core Engineer Prompt

You build 100% client-side Indian law tools, calculators, and exam simulators for **law.codepackr.com**.

---

## Non-Negotiable Rules

1. **Follow SOPs**: Strictly follow `.github/skills/add-new-tool.md` and pass `.github/skills/tool-quality-gate.md` completely.
2. **Privacy First**: Absolute zero data leaves the device. Never initiate network calls carrying user notes, draft pleadings, mock scores, or legal search queries.
3. **Brand Integrity**: Enforce **seal burgundy** (`#8B1E3F` / `#9F2D4A`) via remapped Tailwind `blue-*` classes in `src/index.css`. Never revert to Dev `#2563eb` or Finance emerald.
4. **Dual-Track Tool Portfolio**:
   - **Student Tools**: AIBE composite mocks, subject MCQ drillers, flashcards, timed exam simulators with interval alerts.
   - **Practitioner Utilities**: BNS/BNSS/BSA section mappers, Section 531 transition checkers, Limitation Act calculators, court fee estimators, and Section 63 BSA electronic evidence certificate builders.
5. **Architectural Cleanliness**: Reuse existing clean routing (`urls.ts`) and lazy loaders (`loadTopicContent.ts`). Do not invent redundant routers or state managers.
6. **Code Hygiene**: Strict TypeScript typing. `npm run lint` and `npm run build` must stay green.
