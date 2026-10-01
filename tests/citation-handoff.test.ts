import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  buildCitationPayload,
  buildCitationVerifierUrl,
  loadAndClearCitationHandoff,
  saveCitationHandoff,
  CITATION_HANDOFF_SESSION_KEY,
} from '../src/lib/citationHandoff'
import { emptyAuthorityRow } from '../src/lib/researchSession'

describe('PH3-060 Citation Handoff — buildCitationPayload', () => {
  it('formats array of strings correctly and removes duplicates/empty items', () => {
    const input = ['(1973) 4 SCC 225', '  ', 'AIR 1978 SC 597', '(1973) 4 SCC 225']
    const payload = buildCitationPayload(input)
    assert.equal(payload, '(1973) 4 SCC 225\nAIR 1978 SC 597')
  })

  it('formats AuthorityRow objects with case name and citation', () => {
    const row1 = emptyAuthorityRow()
    row1.caseName = 'Kesavananda Bharati v. State of Kerala'
    row1.citation = '(1973) 4 SCC 225'

    const row2 = emptyAuthorityRow()
    row2.caseName = 'Maneka Gandhi v. Union of India'
    row2.citation = 'AIR 1978 SC 597'

    const row3 = emptyAuthorityRow()
    row3.caseName = 'Only Case Name'

    const row4 = emptyAuthorityRow()
    row4.citation = '2020 SCC OnLine SC 123'

    const payload = buildCitationPayload([row1, row2, row3, row4])
    assert.equal(
      payload,
      'Kesavananda Bharati v. State of Kerala, (1973) 4 SCC 225\nManeka Gandhi v. Union of India, AIR 1978 SC 597\nOnly Case Name\n2020 SCC OnLine SC 123'
    )
  })

  it('avoids repeating case name if already part of citation string', () => {
    const row = emptyAuthorityRow()
    row.caseName = 'Maneka Gandhi'
    row.citation = 'Maneka Gandhi v. Union of India, AIR 1978 SC 597'

    const payload = buildCitationPayload([row])
    assert.equal(payload, 'Maneka Gandhi v. Union of India, AIR 1978 SC 597')
  })
})

describe('PH3-060 Citation Handoff — buildCitationVerifierUrl', () => {
  it('returns base URL when payload is empty', () => {
    assert.equal(buildCitationVerifierUrl([]), '/tool/citation-verifier')
    assert.equal(buildCitationVerifierUrl('   '), '/tool/citation-verifier')
  })

  it('encodes query parameters into deep-link URL', () => {
    const row = emptyAuthorityRow()
    row.caseName = 'Kesavananda Bharati'
    row.citation = '(1973) 4 SCC 225'

    const url = buildCitationVerifierUrl([row])
    assert.ok(url.startsWith('/tool/citation-verifier?q='))
    assert.ok(url.includes(encodeURIComponent('Kesavananda Bharati, (1973) 4 SCC 225')))
  })
})

describe('PH3-060 Citation Handoff — storage & safe Node environment execution', () => {
  it('runs safely in SSR/Node environment without errors', () => {
    assert.doesNotThrow(() => {
      saveCitationHandoff('test citation')
    })
    const res = loadAndClearCitationHandoff()
    assert.deepEqual(res, { text: '', source: null })
  })

  it('reads and clears citation handoff when window and sessionStorage exist', () => {
    const mockStorage: Record<string, string> = {
      [CITATION_HANDOFF_SESSION_KEY]: 'AIR 1978 SC 597',
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
      const handoff = loadAndClearCitationHandoff()
      assert.equal(handoff.text, 'AIR 1978 SC 597')
      assert.equal(handoff.source, 'session')
      assert.equal(mockStorage[CITATION_HANDOFF_SESSION_KEY], undefined)
    } finally {
      // @ts-expect-error Restoring global
      globalThis.window = originalWindow
    }
  })

  it('prefers URL query over sessionStorage if both are present', () => {
    const mockStorage: Record<string, string> = {
      [CITATION_HANDOFF_SESSION_KEY]: 'from-session',
    }

    const originalWindow = globalThis.window
    // @ts-expect-error Mocking browser global for test
    globalThis.window = {
      location: { search: '?q=%281973%29%204%20SCC%20225' },
      sessionStorage: {
        getItem: (k: string) => mockStorage[k] || null,
        removeItem: (k: string) => delete mockStorage[k],
        setItem: (k: string, v: string) => {
          mockStorage[k] = v
        },
      },
    }

    try {
      const handoff = loadAndClearCitationHandoff()
      assert.equal(handoff.text, '(1973) 4 SCC 225')
      assert.equal(handoff.source, 'query')
    } finally {
      // @ts-expect-error Restoring global
      globalThis.window = originalWindow
    }
  })
})
