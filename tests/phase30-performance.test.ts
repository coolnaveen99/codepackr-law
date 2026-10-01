import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { isJudgmentDataLazy } from '../src/data/judgments/lazy'

describe('Phase 30 performance boundaries', () => {
  it('uses Vite lazy glob loading for the judgment corpus', () => {
    assert.equal(isJudgmentDataLazy(), true)
  })
})
