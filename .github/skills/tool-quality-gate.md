# Skill: Tool Quality Gate — Codepackr Law (Forensic Release Standard)

**Mandatory Checklist.** Every tool, feature, and legal study component must pass every item below before being approved or merged.

---

## 1. Privacy & Client-Side Execution (Non-Negotiable)
- [ ] **Zero Data Egress**: No network requests carrying practice answers, exam scores, user queries, bookmarks, or draft pleadings.
- [ ] **No Substantive Analytics**: No telemetry containing academic performance or practice inputs.
- [ ] **Local Persistence**: `localStorage` used strictly for explicit opt-in features (e.g. bookmarks, dark mode preference), never required for baseline practice.

---

## 2. Forensic Legal Accuracy (Senior Counsel & PhD Standards)
- [ ] **Zero Hallucination**: Every statute, section number, constitutional article, case citation, and judicial holding is cross-verified against primary sources (India Code, SCR, SCC, Gazette).
- [ ] **Statutory Illustrations**: Included only when officially enacted in the statutory text; never fabricated.
- [ ] **2024 Transition Discipline**: BNS, BNSS, and BSA apply to offences/proceedings on or after 1 July 2024. IPC, CrPC, and IEA are treated as historical concordance only. Section 531 BNSS savings are explicitly respected.
- [ ] **No False Equivalences**: Mappings are qualified (direct, modified, split, combined) and never assumed identical.

---

## 3. User Experience & Interactivity
- [ ] **Sample / Demo State**: Pre-loads realistic, fact-based legal data so the user can immediately experience the tool.
- [ ] **Clear / Reset**: Functional button that instantly resets state cleanly without page reload.
- [ ] **Empty & Error States**: Context-sensitive, legally helpful guidance when inputs are invalid or results are empty.
- [ ] **Keyboard Accessibility**: Fully operable via keyboard (tab navigation, enter/space activation); meets WCAG AA contrast.
- [ ] **Touch Targets**: All interactive elements have touch targets of at least 44px × 44px.

---

## 4. Visual & Brand Integrity
- [ ] **Seal Burgundy Accent**: Primary accent is **seal burgundy** (`#8B1E3F` / `#9F2D4A`) achieved via remapped Tailwind `blue-*` classes in `src/index.css`. Never use Dev `#2563eb` or Finance emerald.
- [ ] **Card & Control Geometry**: Containers use `rounded-2xl` / `rounded-3xl`; form controls and buttons use `rounded-xl`.
- [ ] **Dual Theme Support**: Flawless rendering in both Light and Dark modes without unstyled flashes or illegible text.
- [ ] **Mobile Responsiveness**: Layout adapts fluidly across mobile viewports, tablets, and desktop displays.

---

## 5. Technical Hygiene & Build Integrity
- [ ] **TypeScript Clean**: Zero `any` abuse; strict typing for all props and data contracts.
- [ ] **Registered in Tools Registry**: Entry present in `src/data/tools.ts` with complete metadata.
- [ ] **Canonical Knowledge Reused**: Queries `src/data/knowledge` before minting any legal entity.
- [ ] **Clean Routing**: Direct URL routes resolve accurately without infinite redirects.
- [ ] **SEO Metadata**: Descriptive title and meta tags emphasizing client-side privacy.
- [ ] **Build Validation**: `npm run lint` and `npm run build` execute with zero errors.

---

*If any item remains unchecked, the tool or treatise is not ready for deployment.*
