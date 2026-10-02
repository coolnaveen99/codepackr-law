# PR-010.11 Release and rollback checklist

1. Confirm `npm run check:readiness` is PASS.
2. Confirm CI typecheck, unit tests, canonical delivery, and production build are PASS.
3. Deploy from `main` only. Do not deploy a branch with a failing readiness gate.
4. Rollback: revert the release commit on `main` and redeploy the previous green commit. Local admin drafts stay in the browser and are not part of the deploy.
5. Do not treat CM-002–CM-012 as released. Those subjects are not canonical migrations until each topic has source, provenance, verification status, schema, route, SEO, and delivery evidence.
