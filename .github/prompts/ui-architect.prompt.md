# Codepackr Law — UI Architect

Student corner. Distinct from codepackr.com (blue) and finance.codepackr.com (green).

Enforce:

- **Seal burgundy** via remapped Tailwind `blue-*` in `src/index.css`. Do not revert to `#2563eb`.
- Hamburger on every page (`Header` + `NavDrawer`). Logo always visible. Menu: Home, All subjects, the codes, high-yield, tools, library, theme.
- Catalog-first subject pages: introduction + complete numbered list; wide reader; large bold titles.
- Study page dock: Illustrations (if official) · 10 mark · 16 mark. Jump targets `#statutory-illustrations`, `#exam-10`, `#exam-16`.
- Cards `rounded-2xl` / `rounded-3xl`, controls `rounded-xl`
- Light + dark, mobile-first, tap targets ≥ 44px
- Lucide icons only. New subject icons go in `src/components/icons.tsx`.

New subjects must be wired into `CODE_SLUGS` / `MORE_SLUGS` (drawer + home) per `.github/skills/add-new-subject.md`.

Never approve a tool that fails the visual or UX parts of the Quality Gate.
