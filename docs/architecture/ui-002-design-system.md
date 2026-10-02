# UI-002 — Chambers Record design system

**Status:** Foundation complete. Pages are not redesigned.  
**Next:** UI-003 may adopt these primitives. Do not start UI-003 from this task.  
**Product:** CodePackr Law, 2026 direction.

## Direction

Chambers Record is a working legal library, not a marketing skin and not the existing page chrome. It is built from first principles for study and chamber use:

- Paper and ink, not cold slate dashboards.
- One brand accent: seal burgundy `#8B1E3F`, with raised seal `#9F2D4A` in dark mode.
- Distinct from Codepackr Dev (`#2563EB`) and Codepackr Finance emerald.
- Status is a label plus a mark plus a border pattern. Colour is never the only signal.
- No third-party fonts, analytics, or network calls. System stacks only.
- Existing pages keep the remapped Tailwind `blue-*` chrome until a later adoption task.

## Token order

Primitive values live in `src/design-system/tokens.ts`.  
CSS custom properties in `src/design-system/styles/tokens.css` use the `--cp-ds-*` prefix so they do not override Phase 20 `--cp-space-*` / `--cp-touch-target` tokens.  
Components consume semantic roles (`--cp-ds-canvas`, `--cp-ds-accent`, `--cp-ds-ink`) and never raw product hex.

Light semantic tokens sit on `:root`. Dark semantic tokens sit on `html.dark`, the theme class the app already uses.

## What this foundation includes

- Seal burgundy colour system and warm ink / paper neutrals
- Display, UI, and citation type roles
- 4px spacing scale and 12-column responsive grid
- Treatise (`46rem`), content (`70rem`), and workspace (`90rem`) measures
- Button, field, select, textarea, tabs, badge
- Panel, table (stacked under 640px via `data-label`)
- Verification, source-kind, in-force, and citation primitives
- Workspace frame, rail, canvas, inspector, toolbar
- 44px touch floor, visible `:focus-visible`, hover, disabled, and `prefers-reduced-motion`

## Legal vocabulary

Verification labels match the existing client-side model: `verified`, `partial`, `not-verified`, `conflict`, `user-provided`, `needs-review`, `parsed`.  
Source kinds: statute, judgment, gazette, official portal, commentary, historical code, user note.  
In-force: in force, transitional (1 July 2024 codes), historical.  
These primitives do not verify citations and do not claim a source exists.

## Out of scope

- Page, chrome, catalog, and tool restyles
- New routes or SEO surfaces
- Replacing `src/components/ui/Badge.tsx`
- UI-003
