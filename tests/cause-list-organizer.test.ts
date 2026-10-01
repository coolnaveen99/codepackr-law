import test from 'node:test'
import assert from 'node:assert/strict'
import { parseCauseList, sortCauseEntries, type CauseEntry } from '../src/lib/causeListOrganizer'

test('Phase 14 parses numbered entries and structured columns', () => {
  const entries = parseCauseList('Court: City Civil Court\nBench: Court No. 4\nDate: 2026-10-02\nTime: 10:30\n12. ABC v. XYZ | O.S. 12/2026 | A. Advocate | Evidence', { idPrefix: 'test' })
  assert.deepEqual(entries[0], { id:'test-1-12', court:'City Civil Court', bench:'Court No. 4', date:'2026-10-02', time:'10:30', item:'12', caseRef:'O.S. 12/2026', parties:'ABC v. XYZ', advocate:'A. Advocate', purpose:'Evidence', notes:'', mine:false })
})
test('Phase 14 supports item syntax and ignores non-items', () => {
  const entries = parseCauseList('12. ABC v XYZ\nItem 14: State v. DEF\nHeader text')
  assert.deepEqual(entries.map(e => e.item), ['12','14']); assert.equal(entries[0].parties, 'ABC v. XYZ')
})
test('Phase 14 sorts by date, time, court and item', () => {
  const base: CauseEntry = { id:'1',court:'B Court',bench:'',date:'2026-10-02',time:'09:30',item:'12',caseRef:'',parties:'A v B',advocate:'',purpose:'',notes:'',mine:false }
  const later={...base,id:'2',court:'A Court',time:'10:00',item:'2'}, next={...base,id:'3',date:'2026-10-03',time:'09:00',item:'1'}
  assert.deepEqual(sortCauseEntries([next,later,base]).map(e => e.id), ['1','2','3'])
})
