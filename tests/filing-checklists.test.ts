import test from 'node:test'
import assert from 'node:assert/strict'
import { FILING_CHECKLISTS } from '../src/data/filingChecklists'

test('Phase 9 filing checklist system', () => {
  {
    assert.deepEqual(FILING_CHECKLISTS.map((x) => x.id), [
      'civil-suit','criminal-complaint','bail','appeal','revision','writ','arbitration',
      'consumer-complaint','mact-claim','family-petition','execution-petition','cheque-dishonour','rti-appeal',
    ])
  }

  {
    for (const checklist of FILING_CHECKLISTS) {
      assert.match(checklist.lastReviewed, /^2026-/)
      assert.match(checklist.disclaimer.toLowerCase(), /verify/)
      assert.ok(checklist.items.length > 3)
      for (const item of checklist.items) {
        assert.ok(item.requirement.length > 5)
        assert.ok(item.why.length > 5)
        assert.ok(item.source.length > 2)
        assert.ok(['mandatory','conditional'].includes(item.mandatory))
      }
    }
  }

  assert.equal(FILING_CHECKLISTS.every((c) => c.items.every((i) => i.layer === 'central')), true)
  assert.equal(FILING_CHECKLISTS.some((c) => c.items.some((i) => i.source.toLowerCase().includes('local'))), true)
});
