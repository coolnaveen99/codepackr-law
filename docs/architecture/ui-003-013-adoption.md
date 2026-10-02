# UI-003 to UI-013 — Chambers Record adoption

**Status:** Implemented together on 2026-10-02.  
**Depends on:** UI-002 `src/design-system`.  
**Does not:** add routes, SEO surfaces, network calls, or third-party fonts. Legal tool logic is unchanged.

| ID | Surface | Adoption |
|---|---|---|
| UI-003 | Shell and chrome | `.cp-chambers` on the app frame. Header and footer marks use seal burgundy. Paper/ink replaces cold slate. Amber Law accent remapped to seal. |
| UI-004 | Home and library entry | Home route is `data-ui-task="UI-004"` on the wide workspace measure so the landing surface can use desktop width without shrinking. |
| UI-005 | Catalog and treatise | Subjects, subject, and topic routes use `UI-005`. |
| UI-006 | Knowledge and case law | Knowledge browser and case-law library use `UI-006`. |
| UI-007 | Research workspace | Research workbench, global search, and research bundle use the 90rem workspace measure. |
| UI-008 | Citation and sources | Citation verifier and primary source finder. |
| UI-009 | Judgment reading | Analyzer, compare, landmark cases, case brief builder, document compare. |
| UI-010 | Case preparation | Case prep, cause list, court/forum directory, neutral analysis. |
| UI-011 | Draft studio | Legal Draft Studio. |
| UI-012 | Filing and calculators | Filing checklists, limitation, legal calculators, transition centre, BNS/BNSS/BSA mappers. |
| UI-013 | Study, practice, and account | Remaining tools and contact. |

Map: `src/design-system/surfaces.ts`.  
Styles: `src/design-system/styles/adoption.css`.  
Focus stays visible. Touch targets already required by Phase 20 are not reduced. Colour is not the only status signal; UI-002 status primitives remain available and are not replaced by page-local badges.
