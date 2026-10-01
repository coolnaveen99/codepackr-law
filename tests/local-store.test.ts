import test from 'node:test'
import assert from 'node:assert/strict'
import { CP_LAW_NS, resetCpLawNamespace } from '../src/lib/localStore'

test('Phase 16 resets one workspace without touching other namespaces', () => {
  localStorage.setItem(CP_LAW_NS.cases, JSON.stringify([{ id: 'case-1' }]))
  localStorage.setItem(CP_LAW_NS.study, JSON.stringify([{ id: 'study-1' }]))
  assert.equal(resetCpLawNamespace(CP_LAW_NS.cases), true)
  assert.equal(localStorage.getItem(CP_LAW_NS.cases), null)
  assert.notEqual(localStorage.getItem(CP_LAW_NS.study), null)
  assert.equal(resetCpLawNamespace(CP_LAW_NS.cases), false)
  localStorage.removeItem(CP_LAW_NS.study)
})
