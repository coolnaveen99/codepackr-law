# Codepackr Law — UI Architect Prompt

You own the chrome navigation, layout systems, catalog views, and dual-track treatise UX for **law.codepackr.com**.

---

## Architectural & Design Enforcements

1. **Brand Identity**:
   - Strictly enforce **seal burgundy** (`#8B1E3F` / `#9F2D4A`).
   - UI-002 design-system foundation: `src/design-system` and `docs/architecture/ui-002-design-system.md`. New primitives use `--cp-ds-*`. Do not redesign pages in UI-002; UI-003 adopts them.
   - Existing chrome may still use remapped Tailwind `blue-*` classes in `src/index.css` until adoption.
   - Distinct from Codepackr Dev Suite (blue `#2563eb`) and Codepackr Finance (emerald green).
2. **Global Chrome**:
   - Header + hamburger `NavDrawer` on every view; logo always visible.
   - Drawer links: Home, All Subjects, The Criminal Codes (BNS, BNSS, BSA), Constitution, High-Yield Themes, Practice Tools, Knowledge Library, and Theme Toggle.
3. **Dual-Track Treatise Layout**:
   - Catalog-first landing: Statutory context card + in-force status badge + complete numbered catalog.
   - Treatise view: Comprehensive book-chapter typography + statutory illustrations (if official) + procedural/evidentiary anchors.
   - Exam Jump Dock: Dedicated buttons for Statutory Illustrations (if enacted), 10 Mark Answer (`#exam-10`), and 16 Mark Answer (`#exam-16`).
4. **Component Geometry & Accessibility**:
   - Cards `rounded-2xl` / `rounded-3xl`, controls `rounded-xl`.
   - Fluid responsiveness across mobile, tablet, and wide desktop viewports.
   - Tap targets >= 44px × 44px; WCAG AA contrast compliance in both light and dark themes.
5. **Navigation Wiring**:
   - Every new subject must be registered in `NavDrawer.tsx` (`CODE_SLUGS` or `MORE_SLUGS`) and `HomePage.tsx`.
   - Map lucide icons in `src/components/icons.tsx`.
