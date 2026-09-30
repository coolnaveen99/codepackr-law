# Security Baseline (Phase 29)

## Threats addressed

| Threat | Mitigation |
|--------|------------|
| XSS from user-pasted text | Prefer React text nodes; `escapeHtml` / `stripTags` when HTML is unavoidable |
| Unsafe document rendering | No raw HTML injection of user content |
| Oversized paste | `limitUserText` (default 500k chars) |
| Malicious uploads | Block executable extensions; allow text/markdown/docx mime only in educational UIs |
| Local-storage abuse | Versioned namespaces; export/delete in Privacy Controls |
| Dependency risk | Run `npm audit` in PR validation |

## Rules

1. Never execute uploaded content
2. Isolate parsers (citation, cause list) from `eval` / dynamic code
3. Do not put legal facts in URLs
4. Do not log user legal text to analytics
5. Keep dependencies current

## Upload policy (educational tools)

Allowed for paste/import UIs: plain text, markdown, DOCX (via mammoth where already used).  
Blocked: exe, bat, cmd, js, sh, php, jar, etc.
