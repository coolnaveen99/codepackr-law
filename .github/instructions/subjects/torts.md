# Law of Torts — subject-specific agent instructions

Read first: [`.github/instructions/global-legal-content.md`](../global-legal-content.md)

This file is **only** Torts-specific. Do not repeat global architecture here.

| Field | Value |
|-------|--------|
| Subject id / slug | `tort` |
| Name | Law of Torts |
| Legislation | Largely uncodified common law + specific statutes (e.g. Motor Vehicles Act, Consumer Protection Act, environmental statutes) |
| Provision label | **Principle / case / statute section** as applicable — do not force “Article” or “BNS Section” |
| Notes path | `src/data/topics/tort/<topicId>.ts` |

## Special rules

- Torts is not BNS. Criminal assault/hurt essays belong on BNS; civil wrongs stay here. Cross-link when both apply.
- Leading cases are the backbone. Reuse a canonical `CASE:` record; do not duplicate the same case essay per topic.
- Where a statute applies (MVA, CPA), cite that statute’s section — not a BNS section — unless the facts also disclose an offence.
