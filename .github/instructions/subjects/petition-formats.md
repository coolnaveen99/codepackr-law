# Petition Formats & Drafting — subject-specific agent instructions

Read first: [`.github/instructions/global-legal-content.md`](../global-legal-content.md)

This file is **only** drafting-specific. Do not repeat global architecture here.

| Field | Value |
|-------|--------|
| Subject id / slug | `petition-formats` |
| Name | Petition Formats & Drafting |
| Legislation | n/a (skeletons only) |
| Provision label | **Format** |
| Notes path | `src/data/topics/petition-formats/<topicId>.ts` |

## Special rules

- **All** petition / application formats live in this subject. Do not put format topics under Constitution, CPC, BNSS, or PIL.
- `study` must be a **skeleton** (headings + what each part contains), not a real court filing with fake parties or cause titles that look like live pleadings.
- Cross-link the underlying law (Art 32, Order VII, BNSS bail sections) via `[[REF:]]` / related topics. Do not copy those essays into the format file.
