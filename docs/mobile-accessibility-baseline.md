# Mobile and Accessibility Baseline (Phase 20)

**Product:** CodePackr Law  
**Date:** 2026-09-30

## Required

- Minimum **44px** touch targets on primary actions
- Sticky action bars must not block content permanently
- Filters: prefer bottom-sheet / collapsible panels on narrow screens
- Metadata blocks collapsible where dense
- Wide tables → card layout under ~640px width
- Keyboard navigation for interactive controls
- Visible focus states (ring / outline)
- Screen-reader labels on icon-only buttons
- Adequate colour contrast (body text and status chips)
- Respect `prefers-reduced-motion` where animations exist

## Status must not rely on colour alone

Status chips for verified / warning / unverified / error must also use:

- text label
- optional icon
- border / pattern, not only fill colour

## Tool checklist (ongoing)

| Tool area | Mobile notes |
|-----------|--------------|
| Research / case prep matrices | Horizontal scroll or stacked cards |
| Calculators | Full-width inputs; large date pickers |
| Cause list / diary | Card rows; sticky "mark mine" |
| Global search | Full-width input; grouped results |
| Privacy controls | Destructive actions require confirm |

## Verification

Manual pass on a mid-size phone viewport after each major tool batch. Automated a11y suite is a later enhancement.
