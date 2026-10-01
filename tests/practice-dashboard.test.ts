import test from 'node:test'
import assert from 'node:assert/strict'
import {
  countCompletedChecklistItems,
  countDraftActivity,
  hasResearchActivity,
  toggleFavouriteStatute,
} from '../src/lib/practiceDashboard'

test('Phase 13 counts completed checklist items only', () => {
  assert.equal(countCompletedChecklistItems({
    'bail:item-1': 'done',
    'bail:item-2': 'todo',
    'appeal:item-3': 'done',
    malformed: 'done',
  }), 2)
})

test('Phase 13 detects substantive local research activity', () => {
  assert.equal(hasResearchActivity({ question: { question: 'Section 34 interest' }, authorities: [] }), true)
  assert.equal(hasResearchActivity({ question: { question: '' }, authorities: [{ caseName: 'Example v State' }] }), true)
  assert.equal(hasResearchActivity({ question: { question: '' }, authorities: [{ caseName: '' }] }), false)
})

test('Phase 13 counts unique draft activity', () => {
  assert.equal(countDraftActivity({ recentlyUsed: ['a', 'b'], favorites: ['b', 'c'] }), 3)
  assert.equal(countDraftActivity({}), 0)
})

test('Phase 13 favourite statutes toggle without duplication', () => {
  const item = { id: 'bns', name: 'BNS 2023', href: '/subjects/bns' }
  const once = toggleFavouriteStatute([], item)
  assert.deepEqual(once, [item])
  assert.deepEqual(toggleFavouriteStatute(once, item), [])
})
