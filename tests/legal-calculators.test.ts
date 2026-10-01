import test from 'node:test'
import assert from 'node:assert/strict'
import { dateDifference, simpleInterest, compoundInterest, addDays, mactWorksheet, percentageOfBase } from '../src/lib/legalCalculators'

test('date difference is deterministic', () => {
  assert.deepEqual(dateDifference('2026-01-01','2026-01-31'), { totalDays:30, calendarYears:0, calendarMonths:0, calendarDays:30, formula:'Total days = 30; calendar span = 0y 0m 30d' })
})

test('simple and compound interest formulas are transparent', () => {
  const s=simpleInterest(100000,12,365); assert.equal(s?.interest,12000); assert.equal(s?.total,112000)
  const c=compoundInterest(100000,12,1,12); assert.ok(c); assert.ok(c!.interest > 12000)
})

test('deadline arithmetic does not infer a legal period', () => {
  assert.equal(addDays('2026-10-01',30),'2026-10-31')
})

test('MACT worksheet only totals user-entered heads', () => {
  const r=mactWorksheet({medical:1000,incomeLoss:2000,futureLoss:3000,care:400,property:100,other:500,interimCompensation:1000})
  assert.deepEqual(r?.gross,7000); assert.deepEqual(r?.net,6000)
})

test('fee and stamp arithmetic uses user-supplied rates', () => {
  assert.equal(percentageOfBase(100000,1.5),1500)
})
