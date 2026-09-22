# Skill: Legal Platform Maintenance & Stewardship

**Operational Checklist** for maintaining the legal accuracy, architectural stability, privacy, and code hygiene of CodePackr Law.

---

## Stewardship Principles

1. **Dual-Track Content Fidelity**: Ensure every topic and tool maintains both scholastic rigour (jurisprudential context, statutory deconstruction, IRAC answers) and practical litigation utility (forum, limitation, proving ingredients, courtroom arguments).
2. **Search Canonical Knowledge First**: Before committing any new legal entity, verify that `src/data/knowledge` was queried and canonical IDs (`TYPE:CATEGORY:SLUG`) were reused.
3. **Verify Applicable Law & Transitional Boundaries**:
   - Criminal law: Validate whether the subject matter falls under BNS/BNSS/BSA or historical IPC/CrPC/IEA.
   - Enforce Section 531 BNSS savings regarding ongoing investigations, inquiries, trials, and appeals.
4. **Zero Fabrication Policy**: Immediately flag any unverified citations, fabricated section numbers, or speculative statutory illustrations as `needs-review`.
5. **Preserve Routing & Stable Topic IDs**: Maintain backwards-compatible topic IDs (e.g. `s-103`, `art-21`) and URL slugs.
6. **Book Chapter Depth**: Ensure student-facing topic notes never regress into shallow bare-act digests or synthesizer boilerplate (`synthesizeProvision`, `synthesizeCpc`).
7. **Client-Side Privacy Enforcement**: Audit network tabs to confirm zero telemetry or practice data egress.
8. **Brand Guardrails**: Verify that Tailwind `blue-*` classes render as **seal burgundy** (`#8B1E3F` / `#9F2D4A`) and have not reverted to `#2563eb`.
9. **Build & Lint Verification**:
   - For source changes: Execute `npm run lint` and `npm run build`.
   - Documentation-only or `.github`-only changes do not trigger full production builds in CI.
