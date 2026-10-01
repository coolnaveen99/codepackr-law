import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { analyzeChronology, normalizeList, type ChronologyEntry } from '../src/lib/casePrep'

const entries: ChronologyEntry[] = [
  { id: '1', date: '2024-01-01', event: 'Agreement', source: 'Agreement', disputed: false },
  { id: '2', date: '2024-03-15', event: 'Notice', source: 'Notice', disputed: true },
  { id: '3', date: '2024-03-20', event: 'Reply', source: '', disputed: false },
]

describe('PH7 case preparation chronology', () => {
  it('sorts entries and detects material date gaps', () => {
    const result = analyzeChronology(entries, 30)
    assert.deepEqual(result.ordered.map((entry) => entry.id), ['1', '2', '3'])
    assert.equal(result.gaps[0].days, 74)
  })

  it('preserves disputed-date flags and incomplete source records', () => {
    const result = analyzeChronology(entries)
    assert.equal(result.disputed.length, 1)
    assert.equal(result.incomplete.length, 1)
    assert.equal(result.incomplete[0].id, '3')
  })
})

describe('PH7 case preparation list parsing', () => {
  it('normalizes comma- and line-separated parties/documents', () => {
    assert.deepEqual(normalizeList('A, B\nC'), ['A', 'B', 'C'])
  })
})
