import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  parseCitation,
  parseCitationList,
  normalizeCitationKey,
  extractCitationsFromDocument,
  scanDocumentCitationSpans,
  NEUTRAL_BENCH_MAP,
  SCC_ONLINE_BENCH_MAP,
} from '../src/lib/citationParser'

describe('PH4-010 Extended Citation Parser — SCC & SCC Supp formats', () => {
  it('parses standard SCC citation with parentheses', () => {
    const res = parseCitation('(2020) 5 SCC 1')
    assert.equal(res.style, 'scc')
    assert.equal(res.year, '2020')
    assert.equal(res.volume, '5')
    assert.equal(res.page, '1')
    assert.equal(res.reporter, 'SCC')
    assert.equal(res.courtHint, 'Supreme Court of India')
    assert.equal(res.status, 'parsed')
  })

  it('parses bracketed SCC citation with case name prefix', () => {
    const res = parseCitation('Kesavananda Bharati v. State of Kerala, [1973] 4 SCC 225')
    assert.equal(res.style, 'scc')
    assert.equal(res.caseName, 'Kesavananda Bharati v. State of Kerala')
    assert.equal(res.year, '1973')
    assert.equal(res.volume, '4')
    assert.equal(res.page, '225')
    assert.equal(res.status, 'parsed')
  })

  it('parses SCC supplement citation', () => {
    const res = parseCitation('1993 Supp (1) SCC 123')
    assert.equal(res.style, 'scc')
    assert.equal(res.year, '1993')
    assert.equal(res.volume, '1')
    assert.equal(res.page, '123')
    assert.equal(res.isSupplement, true)
    assert.equal(res.reporter, 'SCC (Supp)')
    assert.equal(res.status, 'parsed')
  })
})

describe('PH4-010 Extended Citation Parser — SCC OnLine electronic database', () => {
  it('parses Supreme Court SCC OnLine citation', () => {
    const res = parseCitation('2021 SCC OnLine SC 345')
    assert.equal(res.style, 'scc-online')
    assert.equal(res.year, '2021')
    assert.equal(res.reporter, 'SCC OnLine SC')
    assert.equal(res.page, '345')
    assert.equal(res.courtHint, 'Supreme Court of India')
    assert.equal(res.status, 'parsed')
  })

  it('parses High Court SCC OnLine citation with case name', () => {
    const res = parseCitation('Shreya Singhal v. Union of India 2015 SCC OnLine SC 248')
    assert.equal(res.style, 'scc-online')
    assert.equal(res.caseName, 'Shreya Singhal v. Union of India')
    assert.equal(res.year, '2015')
    assert.equal(res.page, '248')
    assert.equal(res.status, 'parsed')
  })

  it('parses Delhi High Court SCC OnLine citation', () => {
    const res = parseCitation('(2022) SCC OnLine Del 108')
    assert.equal(res.style, 'scc-online')
    assert.equal(res.year, '2022')
    assert.equal(res.courtHint, 'Delhi High Court')
    assert.equal(res.page, '108')
  })
})

describe('PH4-010 Extended Citation Parser — Indian Neutral Citations (INSC & High Courts)', () => {
  it('parses Supreme Court Neutral Citation (INSC)', () => {
    const res = parseCitation('2023 INSC 123')
    assert.equal(res.style, 'neutral')
    assert.equal(res.year, '2023')
    assert.equal(res.neutralCourt, 'INSC')
    assert.equal(res.neutralIndex, '123')
    assert.equal(res.courtHint, 'Supreme Court of India')
    assert.equal(res.status, 'parsed')
  })

  it('parses Supreme Court Neutral Citation with case name', () => {
    const res = parseCitation(
      'Association for Democratic Reforms v. Union of India, 2024 INSC 113'
    )
    assert.equal(res.style, 'neutral')
    assert.equal(res.caseName, 'Association for Democratic Reforms v. Union of India')
    assert.equal(res.year, '2024')
    assert.equal(res.neutralCourt, 'INSC')
    assert.equal(res.neutralIndex, '113')
    assert.equal(res.status, 'parsed')
  })

  it('parses High Court colon-separated Neutral Citation (DHC, BOM, KER)', () => {
    const dhc = parseCitation('2023:DHC:1234')
    assert.equal(dhc.style, 'neutral')
    assert.equal(dhc.year, '2023')
    assert.equal(dhc.neutralCourt, 'DHC')
    assert.equal(dhc.neutralIndex, '1234')
    assert.equal(dhc.courtHint, 'Delhi High Court')

    const bom = parseCitation('2024:BOM:567')
    assert.equal(bom.style, 'neutral')
    assert.equal(bom.neutralCourt, 'BOM')
    assert.equal(bom.neutralIndex, '567')
    assert.equal(bom.courtHint, 'Bombay High Court')

    const ker = parseCitation('2022:KER:890')
    assert.equal(ker.style, 'neutral')
    assert.equal(ker.neutralCourt, 'KER')
    assert.equal(ker.courtHint, 'Kerala High Court')
  })

  it('parses High Court space-separated Neutral Citation when bench is recognized', () => {
    const res = parseCitation('2023 DHC 1234')
    assert.equal(res.style, 'neutral')
    assert.equal(res.year, '2023')
    assert.equal(res.neutralCourt, 'DHC')
    assert.equal(res.neutralIndex, '1234')
    assert.equal(res.courtHint, 'Delhi High Court')
  })
})

describe('PH4-010 Extended Citation Parser — AIR & SCR official reports', () => {
  it('parses Supreme Court AIR citation with case name', () => {
    const res = parseCitation('Maneka Gandhi v. Union of India, AIR 1978 SC 597')
    assert.equal(res.style, 'air')
    assert.equal(res.caseName, 'Maneka Gandhi v. Union of India')
    assert.equal(res.year, '1978')
    assert.equal(res.reporter, 'AIR')
    assert.equal(res.courtHint, 'Supreme Court of India')
    assert.equal(res.page, '597')
  })

  it('parses High Court AIR citation', () => {
    const res = parseCitation('AIR 2020 Bom 45')
    assert.equal(res.style, 'air')
    assert.equal(res.year, '2020')
    assert.equal(res.courtHint, 'Bombay High Court')
    assert.equal(res.page, '45')
  })

  it('parses Supreme Court Reports (SCR) citation', () => {
    const res = parseCitation('[1950] SCR 88')
    assert.equal(res.style, 'scr')
    assert.equal(res.year, '1950')
    assert.equal(res.reporter, 'SCR')
    assert.equal(res.page, '88')
    assert.equal(res.courtHint, 'Supreme Court of India (official reporter)')
  })
})

describe('PH4-010 Extended Citation Parser — Fallback & anti-hallucination rules', () => {
  it('flags name-only input as user-provided', () => {
    const res = parseCitation('A.K. Gopalan v. State of Madras')
    assert.equal(res.style, 'name-only')
    assert.equal(res.caseName, 'A.K. Gopalan v. State of Madras')
    assert.equal(res.status, 'user-provided')
  })

  it('flags unrecognized input as not-verified with explicit anti-hallucination note', () => {
    const res = parseCitation('Unrecognized Case Citation 9999 XYZ')
    assert.equal(res.style, 'unknown')
    assert.equal(res.status, 'not-verified')
    const hasAntiHallucination = res.notes.some((n) =>
      n.includes('Never interpret this as "the case does not exist"')
    )
    assert.equal(hasAntiHallucination, true)
  })

  it('handles empty input gracefully', () => {
    const res = parseCitation('   ')
    assert.equal(res.raw, '')
    assert.equal(res.style, 'unknown')
    assert.equal(res.status, 'not-verified')
  })

  it('parses multi-item list and normalizes citation keys', () => {
    const text =
      '(2020) 5 SCC 1;\n2023 INSC 123\n\nAIR 1978 SC 597; Kesavananda Bharati v. State of Kerala'
    const list = parseCitationList(text)
    assert.equal(list.length, 4)
    assert.equal(list[0].style, 'scc')
    assert.equal(list[1].style, 'neutral')
    assert.equal(list[2].style, 'air')
    assert.equal(list[3].style, 'name-only')

    const norm1 = normalizeCitationKey('(2020) 5 SCC 1')
    const norm2 = normalizeCitationKey('[2020] 5 SCC 1')
    assert.equal(norm1, norm2)
  })
})

describe('PH4-030 Document citation extractor', () => {
  const SAMPLE_PROSE = `
    The Court relied on Kesavananda Bharati v. State of Kerala, (1973) 4 SCC 225,
    and the procedure analysis in Maneka Gandhi v. Union of India, AIR 1978 SC 597.
    Later neutral citation practice appears in Association for Democratic Reforms
    v. Union of India, 2024 INSC 113. High Court electronic reports include
    2022 SCC OnLine Del 108. SCR illustrations include [1950] SCR 88.
  `

  it('extracts multiple citations from continuous judgment prose', () => {
    const hits = extractCitationsFromDocument(SAMPLE_PROSE)
    assert.ok(hits.length >= 4, `expected >=4 citations, got ${hits.length}`)
    assert.ok(hits.some((h) => h.style === 'scc' || h.reporter === 'SCC'))
    assert.ok(hits.some((h) => h.style === 'air' || /AIR/i.test(h.raw)))
    assert.ok(hits.some((h) => h.style === 'neutral' || /INSC/i.test(h.raw)))
    assert.ok(hits.some((h) => h.style === 'scc-online' || /OnLine/i.test(h.raw)))
  })

  it('attaches case name prefixes when present before the reporter citation', () => {
    const hits = extractCitationsFromDocument(
      'Relying on Kesavananda Bharati v. State of Kerala, (1973) 4 SCC 225 the Bench held…',
    )
    assert.ok(hits.length >= 1)
    assert.equal(hits[0].style, 'scc')
    assert.match(hits[0].caseName || '', /Kesavananda/i)
  })

  it('deduplicates repeated citations in the same document', () => {
    const hits = extractCitationsFromDocument(
      'See (1973) 4 SCC 225. Earlier discussion of (1973) 4 SCC 225 remains controlling.',
    )
    const scc = hits.filter((h) => h.style === 'scc' && h.page === '225')
    assert.equal(scc.length, 1)
  })

  it('falls back to line-oriented list when prose has no reporter patterns', () => {
    const hits = extractCitationsFromDocument(
      'Maneka Gandhi v. Union of India\nKesavananda Bharati v. State of Kerala',
    )
    assert.ok(hits.length >= 2)
    assert.ok(hits.every((h) => h.style === 'name-only' || h.caseName))
  })

  it('scanDocumentCitationSpans returns ordered non-overlapping spans', () => {
    const spans = scanDocumentCitationSpans(SAMPLE_PROSE)
    assert.ok(spans.length >= 4)
    for (let i = 1; i < spans.length; i++) {
      assert.ok(spans[i].start >= spans[i - 1].end, 'spans must not overlap and stay ordered')
    }
  })

  it('returns empty array for empty input', () => {
    assert.deepEqual(extractCitationsFromDocument(''), [])
    assert.deepEqual(scanDocumentCitationSpans('   '), [])
  })
})
