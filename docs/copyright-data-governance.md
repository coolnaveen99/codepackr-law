# Copyright and Data Governance — Codepackr Law

**Phase:** 31  
**Product:** law.codepackr.com  
**Date:** 2026-09-30  
**Status:** Binding product policy for contributors and agents

## Purpose

Protect Codepackr Law from copyright and data-governance risk while preserving a useful, privacy-first Indian legal workbench grounded in primary sources and original educational material.

## Hard prohibitions

Do **not** scrape, copy, or reproduce proprietary legal databases or editorial material without permission.

Do **not** copy or ingest:

- proprietary headnotes;
- paid database annotations;
- proprietary case summaries from subscription products;
- copyrighted commercial template wording;
- subscription-only commentary or headnote text;
- bulk dumps from paid research platforms used as training or product content.

Third-party products may be used for **feature research and market understanding only** — never as a source for copying content into the repository or shipped product.

## Preferred sources (in order)

1. Official government / court publications and portals  
2. India Code and other official statutory repositories  
3. Supreme Court / High Court / eCourts published materials  
4. Official tribunal or ministry publications  
5. Appropriately reusable public-domain or clearly licensed material  
6. **Original** Codepackr explanations, study structure, and educational scaffolding  
7. **User-provided** documents (paste/upload stays on-device)  
8. Properly licensed datasets with documented licence terms  

Secondary commentary and commercial databases are pointers for the user to verify elsewhere — not content to mirror.

## AI and training caution

A September 2026 U.S. appellate ruling involving Thomson Reuters and Ross Intelligence is a useful **engineering warning** about copyright risk when proprietary legal editorial material is used in AI training. It is **not** an Indian-law ruling and must not be presented as one.

Codepackr Law does not ship a remote AI that trains on proprietary headnotes. Any future AI feature must remain source-grounded, citation-safe, and subject to `docs/ai-architecture-contract.md` and this policy.

## Content authorship rules

| Content type | Allowed origin |
|---|---|
| Statute text / section structure | Official / India Code style public sources; educational paraphrase with source hints |
| Case ratios / study notes | Original Codepackr educational synthesis; verified public judgments |
| Draft templates | Original educational scaffolds; never copied commercial form banks |
| Headnotes / paid annotations | Never |
| User drafts / case facts | User-supplied; browser-local only |

## Contributor / agent checklist

Before adding legal text or datasets:

- [ ] Source is official, public, original, user-provided, or clearly licensed  
- [ ] No paid-database headnote or annotation text  
- [ ] Licence or public-status noted in metadata where material is non-trivial  
- [ ] AI-assisted drafts marked for human review where required by verification policy  

## Related documents

- `docs/legal-content-verification-policy.md`  
- `docs/ai-architecture-contract.md`  
- `docs/security-baseline.md`  
- `docs/analytics-privacy-policy.md`  
