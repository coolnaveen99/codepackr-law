# Skill: Add or Update a Legal Draft Template

**Use when** adding a new pleading/notice/affidavit skeleton or case-file checklist to Codepackr Law.

## Non-negotiables

1. **Educational scaffold only** — every template must include a clear disclaimer (not legal advice; not court-approved).
2. **Correct statute map** after 1 July 2024:
   - Regular bail before Magistrate → **BNSS s. 480** (not CrPC 437 alone)
   - Regular bail before Sessions/HC → **BNSS s. 483** (not 480, not CrPC 439 alone)
   - Anticipatory bail → **BNSS s. 482**
   - Never ship CrPC-only captions for new BNSS matters without transitional note
3. **100% client-side** — no upload of user facts or drafts.
4. **Annexure hints** for court-bound drafts (FIR, remand, O.7 R.14 list, etc.).
5. **`lastReviewed` date** (ISO) on every template object.

## Steps

1. Add entry to `src/data/draft-templates.ts` (`DRAFT_TEMPLATES` or `CASE_FILE_CHECKLISTS`).
2. Fields: `id`, `slug`, `name`, `category`, `statute`, `description`, `disclaimer`, `fields[]`, `build()`, optional `annexures`, `lastReviewed`.
3. Prefer structural heads from CPC/BNSS over copying third-party full text.
4. If the tool UI changes, update `LegalDraftStudio.tsx` only if needed (usually data-only).
5. Register is already done via `legal-draft-studio` tool; sitemap picks TOOLS automatically on `npm run build`.
6. Optional: mention new template in README practice tools list.
7. Run `npm run lint`.

## SEO

Tool page SEO lives in `App.tsx` `setPageMeta` for `legal-draft-studio` / `document-compare`. When adding a major template family, extend keywords on that tool meta (bail, notice, plaint, etc.).

## Future templates

Priority backlog: anticipatory bail (482), written statement (O.8), vakalatnama layout, S.80 CPC notice, default bail checklist, commercial Statement of Truth checklist.
