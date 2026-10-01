# Analytics Privacy Policy (Phase 22)

**Roadmap:** §27 — Analytics Without Legal-Data Surveillance  
**Applies to:** `coolnaveen99/codepackr-law`  
**Status:** Active & Enforced

---

## 1. Allowed (Aggregate Only)

All metrics are stored strictly client-side within the user's browser.

- **Tool opened:** Opaque URL slug (e.g. `case-prep`, `research-workbench`).
- **Workflow completion:** Opaque event key (e.g. `research-bundle-export`).
- **Feature use counts:** Opaque feature key (e.g. `citation-verify-batch`).
- **Anonymous performance counters:** Opaque benchmark keys (e.g. `render-dossier`).

---

## 2. Strictly Prohibited (Zero Surveillance)

Under no circumstances does Codepackr Law collect, log, or transmit:

- Legal search query strings or questions
- Case facts or dispute narratives
- Client, litigant, or advocate names
- Uploaded document contents or pasted judgments
- Private research notes, arguments, or chronologies
- Generated legal drafts or petition text

Any metric key containing spaces, punctuation, substantive legal terms (e.g. `versus`, `section`, `act`), or exceeding 64 characters is automatically rejected by the privacy filter.

---

## 3. Storage & User Controls

- **Metrics Storage:** `cp-law:analytics:v1` in browser `localStorage`.
- **Preference Storage:** `cp-law:analytics:opt-in:v1` in browser `localStorage`.
- **Viewer & Controls:** Users can inspect, clear, or toggle tracking via the **Privacy-safe usage metrics** workspace (`/tool/usage-metrics`).
- **Zero Third-Party Trackers:** No legal research or workflow data is sent to external advertising or analytics platforms.
