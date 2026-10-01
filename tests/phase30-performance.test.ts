import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

describe('Phase 30 performance boundaries', () => {
  it('keeps the judgment glob non-eager in the Vite runtime', () => {
    const source = readFileSync('src/data/judgments/lazy.ts', 'utf8')
    assert.match(source, /eager:\s*false/)
  })

  it('keeps the Case Law Library on the lazy loader path', () => {
    const source = readFileSync('src/components/tools/CaseLawLibrary.tsx', 'utf8')
    assert.match(source, /data\/judgments\/lazy/)
    assert.match(source, /loadAllJudgments/)
  })
})
