import test, { beforeEach } from 'node:test'
import assert from 'node:assert/strict'
import { CP_LAW_NS, resetCpLawNamespace } from '../src/lib/localStore'

const store = new Map<string, string>()
;(globalThis as typeof globalThis & { localStorage: Storage }).localStorage = {
  getItem: (key: string) => store.get(key) ?? null,
  setItem: (key: string, value: string) => { store.set(key, value) },
  removeItem: (key: string) => { store.delete(key) },
  clear: () => store.clear(),
  key: (index: number) => Array.from(store.keys())[index] ?? null,
  get length() { return store.size },
} as Storage

beforeEach(() => store.clear())

test('Phase 16 resets one workspace without touching other namespaces', () => {
  localStorage.setItem(CP_LAW_NS.cases, JSON.stringify([{ id: 'case-1' }]))
  localStorage.setItem(CP_LAW_NS.study, JSON.stringify([{ id: 'study-1' }]))
  assert.equal(resetCpLawNamespace(CP_LAW_NS.cases), true)
  assert.equal(localStorage.getItem(CP_LAW_NS.cases), null)
  assert.notEqual(localStorage.getItem(CP_LAW_NS.study), null)
  assert.equal(resetCpLawNamespace(CP_LAW_NS.cases), false)
})
