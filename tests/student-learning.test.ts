import test from 'node:test'
import assert from 'node:assert/strict'
import {
  getStudyStats,
  getStudyStatus,
  sortStudyItems,
  SAMPLE_CASE_BRIEF,
  SAMPLE_STUDY_ITEM,
} from '../src/lib/studentLearning'

test('Phase 12 sample data is safe and explicitly marked as sample content', () => {
  assert.match(SAMPLE_CASE_BRIEF.citation, /verified citation/i)
  assert.match(SAMPLE_CASE_BRIEF.laterTreatment, /independently verified/i)
  assert.match(SAMPLE_STUDY_ITEM.topic, /Sample topic/i)
  assert.equal(SAMPLE_STUDY_ITEM.weak, true)
})

test('study planner classifies completion and due dates deterministically', () => {
  const base = { id: '1', subject: 'C', topic: 'T', cycles: 1, done: false, weak: false, notes: '' }
  assert.equal(getStudyStatus({ ...base, targetDate: '2026-09-30' }, '2026-10-01'), 'overdue')
  assert.equal(getStudyStatus({ ...base, targetDate: '2026-10-01' }, '2026-10-01'), 'due')
  assert.equal(getStudyStatus({ ...base, targetDate: '2026-10-02' }, '2026-10-01'), 'planned')
  assert.equal(getStudyStatus({ ...base, targetDate: '2026-10-02', done: true }, '2026-10-01'), 'completed')
})

test('study planner stats count weak open items and due/overdue items', () => {
  const items = [
    { ...SAMPLE_STUDY_ITEM, id: 'a', targetDate: '2026-09-30', weak: true },
    { ...SAMPLE_STUDY_ITEM, id: 'b', targetDate: '2026-10-01', weak: true },
    { ...SAMPLE_STUDY_ITEM, id: 'c', targetDate: '2026-10-03', weak: false },
    { ...SAMPLE_STUDY_ITEM, id: 'd', targetDate: '2026-09-01', done: true, weak: true },
  ]
  assert.deepEqual(getStudyStats(items, '2026-10-01'), { total: 4, done: 1, weak: 2, due: 2 })
})

test('study planner sorts overdue and due work before planned and completed work', () => {
  const items = [
    { ...SAMPLE_STUDY_ITEM, id: 'planned', targetDate: '2026-10-04' },
    { ...SAMPLE_STUDY_ITEM, id: 'done', targetDate: '2026-10-01', done: true },
    { ...SAMPLE_STUDY_ITEM, id: 'overdue', targetDate: '2026-09-30' },
    { ...SAMPLE_STUDY_ITEM, id: 'due', targetDate: '2026-10-01', done: false },
  ]
  assert.deepEqual(sortStudyItems(items, '2026-10-01').map((x) => x.id), ['overdue', 'due', 'planned', 'done'])
})
