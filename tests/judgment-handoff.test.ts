import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  buildStarterJudgmentText,
  buildJudgmentAnalyzerUrl,
  saveJudgmentHandoff,
  loadAndClearJudgmentHandoff,
  JUDGMENT_HANDOFF_SESSION_KEY,
} from '../src/lib/judgmentHandoff'
import { emptyAuthorityRow } from '../src/lib/researchSession'

describe('PH3-070 Judgment Handoff — buildStarterJudgmentText', () => {
  it('formats case name, citation, and court into starter header', () => {
    const header = buildStarterJudgmentText({
      caseName: 'Kesavananda Bharati v. State of Kerala',
      citation: '(1973) 4 SCC 225',
      court: 'Supreme Court of India',
      canonicalEntityId: 'judgment:india:sc:1973:kesavananda',
    })

    assert.ok(header.includes('[Kesavananda Bharati v. State of Kerala — (1973) 4 SCC 225]'))
    assert.ok(header.includes('Court: Supreme Court of India'))
    assert.ok(header.includes('Canonical ID: judgment:india:sc:1973:kesavananda'))
    assert.ok(header.endsWith('---\n\n'))
  })

  it('returns empty string when no identifier or metadata exists', () => {
    assert.equal(buildStarterJudgmentText({}), '')
  })

  it('preserves custom text slot when provided in payload', () => {
    const custom = 'BRIEF FACTS: custom facts text\nHELD: order text'
    const res = buildStarterJudgmentText({ text: custom })
    assert.equal(res, custom)
  })
})

describe('PH3-070 Judgment Handoff — buildJudgmentAnalyzerUrl', () => {
  it('returns base URL when input is empty or invalid', () => {
    assert.equal(buildJudgmentAnalyzerUrl(), '/tool/judgment-analyzer')
    assert.equal(buildJudgmentAnalyzerUrl(''), '/tool/judgment-analyzer')
    assert.equal(buildJudgmentAnalyzerUrl({}), '/tool/judgment-analyzer')
  })

  it('builds URL query with public case name or citation only (§5.5 privacy)', () => {
    const row = emptyAuthorityRow()
    row.caseName = 'Maneka Gandhi v. Union of India'
    row.citation = 'AIR 1978 SC 597'
    row.holding = 'PRIVATE CONFIDENTIAL RESEARCH HOLDING NOTES DO NOT LEAK'

    const url = buildJudgmentAnalyzerUrl(row)
    assert.ok(url.startsWith('/tool/judgment-analyzer?case='))
    assert.ok(url.includes(encodeURIComponent('Maneka Gandhi v. Union of India')))
    // Ensure user holding notes are strictly excluded from URL
    assert.ok(!url.includes('CONFIDENTIAL'))
  })
})

describe('PH3-070 Judgment Handoff — storage & safe Node environment execution', () => {
  it('runs safely in SSR/Node environment without errors', () => {
    assert.doesNotThrow(() => {
      saveJudgmentHandoff('sample text')
    })
    const res = loadAndClearJudgmentHandoff()
    assert.deepEqual(res, { payload: null, initialText: '', source: null })
  })

  it('reads and clears handoff from sessionStorage', () => {
    const mockStorage: Record<string, string> = {
      [JUDGMENT_HANDOFF_SESSION_KEY]: JSON.stringify({
        caseName: 'Kesavananda Bharati',
        citation: '(1973) 4 SCC 225',
      }),
    }

    const originalWindow = globalThis.window
    // @ts-expect-error Mocking browser global for test
    globalThis.window = {
      location: { search: '' },
      sessionStorage: {
        getItem: (k: string) => mockStorage[k] || null,
        removeItem: (k: string) => delete mockStorage[k],
        setItem: (k: string, v: string) => {
          mockStorage[k] = v
        },
      },
    }

    try {
      const res = loadAndClearJudgmentHandoff()
      assert.equal(res.source, 'session')
      assert.equal(res.payload?.caseName, 'Kesavananda Bharati')
      assert.ok(res.initialText.includes('Kesavananda Bharati'))
      assert.equal(mockStorage[JUDGMENT_HANDOFF_SESSION_KEY], undefined)
    } finally {
      // @ts-expect-error Restoring global
      globalThis.window = originalWindow
    }
  })

  it('reads handoff from URL query search parameters', () => {
    const originalWindow = globalThis.window
    // @ts-expect-error Mocking browser global for test
    globalThis.window = {
      location: { search: '?case=Maneka%20Gandhi' },
      sessionStorage: {
        getItem: () => null,
        removeItem: () => {},
        setItem: () => {},
      },
    }

    try {
      const res = loadAndClearJudgmentHandoff()
      assert.equal(res.source, 'query')
      assert.equal(res.payload?.caseName, 'Maneka Gandhi')
      assert.ok(res.initialText.includes('Maneka Gandhi'))
    } finally {
      // @ts-expect-error Restoring global
      globalThis.window = originalWindow
    }
  })
})
