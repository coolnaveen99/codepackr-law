import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  verifyCitationSync,
  verifyCitation,
  verifyCitationListSync,
  resolveOfficialSources,
} from '../src/lib/citationVerification'
import { parseCitation } from '../src/lib/citationParser'

describe('PH4-020 Citation Verification Engine — Landmark Corpus Matching', () => {
  it('verifies landmark case by exact citation (Kesavananda Bharati)', () => {
    const res = verifyCitationSync('(1973) 4 SCC 225')
    assert.equal(res.status, 'verified')
    assert.equal(res.matchedRecord !== undefined, true)
    assert.equal(res.matchedRecord?.id, 'kesavananda-bharati-1973')
    assert.equal(res.matchedRecord?.year, 1973)
    assert.ok(res.confidence >= 0.85, `Expected confidence >= 0.85, got ${res.confidence}`)
    assert.ok(res.notes.some((n) => n.includes('Verified against landmark database')))
  })

  it('verifies landmark case by case name only', () => {
    const res = verifyCitationSync('Kesavananda Bharati v. State of Kerala')
    assert.equal(res.status, 'verified')
    assert.equal(res.matchedRecord?.id, 'kesavananda-bharati-1973')
    assert.ok(res.confidence >= 0.85)
  })

  it('verifies Vishaka landmark case by citation', () => {
    const res = verifyCitationSync('(1997) 6 SCC 241')
    assert.equal(res.status, 'verified')
    assert.equal(res.matchedRecord?.id, 'vishaka-1997')
    assert.equal(res.matchedRecord?.caseName, 'Vishaka v. State of Rajasthan')
  })

  it('verifies Maneka Gandhi with combined case name and citation', () => {
    const res = verifyCitationSync('Maneka Gandhi v. Union of India, (1978) 1 SCC 248')
    assert.equal(res.status, 'verified')
    assert.equal(res.matchedRecord?.id, 'maneka-gandhi-1978')
    assert.equal(res.year, '1978')
  })
})

describe('PH4-020 Citation Verification Engine — Status Model (Roadmap § 9)', () => {
  it('assigns PARTIAL status when party matches but citation/court differs', () => {
    const res = verifyCitationSync('Maneka Gandhi v. State of Maharashtra, 2021 Bom 100')
    assert.equal(res.status, 'partial')
    assert.ok(res.confidence >= 0.40 && res.confidence < 0.85)
    assert.ok(res.notes.some((n) => n.includes('Partial match found')))
  })

  it('assigns USER_PROVIDED status for user case name without database match', () => {
    const res = verifyCitationSync('Random Private Petitioner v. Private Commercial Respondent')
    assert.equal(res.status, 'user-provided')
    assert.equal(res.matchedRecord, undefined)
    assert.ok(res.notes.some((n) => n.includes('User-provided')))
  })

  it('assigns NOT_VERIFIED status for unverified citation with strict anti-hallucination note', () => {
    const res = verifyCitationSync('2023 INSC 99999')
    assert.equal(res.status, 'not-verified')
    assert.equal(res.matchedRecord, undefined)
    const hasAntiHallucination = res.notes.some((n) =>
      n.includes('Never interpret this as "the case does not exist"')
    )
    assert.equal(hasAntiHallucination, true)
  })

  it('handles empty input safely', () => {
    const res = verifyCitationSync('   ')
    assert.equal(res.raw, '')
    assert.equal(res.status, 'not-verified')
    assert.equal(res.confidence, 0)
  })
})

describe('PH4-020 Citation Verification Engine — Official Authority Links', () => {
  it('resolves Supreme Court official sources (e-SCR & SCI portal)', () => {
    const sources = resolveOfficialSources('Supreme Court of India', 'INSC')
    assert.ok(sources.some((s) => s.type === 'escr' && s.url.includes('escr.sci.gov.in')))
    assert.ok(sources.some((s) => s.type === 'official-court' && s.url.includes('sci.gov.in')))
    assert.ok(sources.some((s) => s.type === 'india-code'))
  })

  it('resolves High Court official registry (Delhi High Court)', () => {
    const sources = resolveOfficialSources('Delhi High Court', 'DHC')
    assert.ok(sources.some((s) => s.url.includes('delhihighcourt.nic.in')))
    assert.ok(sources.some((s) => s.type === 'india-code'))
  })
})

describe('PH4-040 public verifier API', () => {
  it('retains the VerifiedCitation type surface while using the shared authority resolver', () => {
    const result = verifyCitationSync('(1973) 4 SCC 225')
    assert.equal(result.status, 'verified')
    assert.ok(result.officialSources.some((source) => source.url.includes('escr.sci.gov.in')))
  })

describe('PH4-040 Authority Network & Official Portal Link Generator', () => {
  it('emits e-SCR, SCR search, SCI judgments, and India Code for Supreme Court / INSC', () => {
    const sources = resolveOfficialSources({ courtHint: 'Supreme Court of India', neutralCourt: 'INSC' })
    assert.ok(sources.some((s) => s.type === 'escr' && s.url.includes('escr.sci.gov.in')))
    assert.ok(sources.some((s) => s.url.includes('scr.sci.gov.in/scrsearch')))
    assert.ok(sources.some((s) => s.url.includes('main.sci.gov.in/judgments')))
    assert.ok(sources.some((s) => s.type === 'india-code' && s.url.includes('indiacode.nic.in')))
    assert.ok(sources.some((s) => s.url.includes('services.ecourts.gov.in')))
  })

  it('resolves expanded High Court map (Kerala, Karnataka, Telangana)', () => {
    const ker = resolveOfficialSources({ neutralCourt: 'KER' })
    assert.ok(ker.some((s) => s.url.includes('highcourtofkerala.nic.in')))

    const kar = resolveOfficialSources({ neutralCourt: 'KAR' })
    assert.ok(kar.some((s) => s.url.includes('karnataka') || s.url.includes('kar.nic.in')))

    const tel = resolveOfficialSources({ neutralCourt: 'TEL' })
    assert.ok(tel.some((s) => s.url.includes('tshc.gov.in')))
  })

  it('prefers matched primary source URL when provided', () => {
    const sources = resolveOfficialSources({
      courtHint: 'Supreme Court of India',
      neutralCourt: 'INSC',
      matchedOfficialUrl: 'https://example.official/judgment/123',
    })
    assert.equal(sources[0].url, 'https://example.official/judgment/123')
    assert.equal(sources[0].name, 'Matched primary source')
  })

  it('does not false-positive Madras as Supreme Court (no bare "sc" substring trap)', () => {
    const sources = resolveOfficialSources({ courtHint: 'Madras High Court', neutralCourt: 'MAD' })
    assert.ok(sources.some((s) => s.url.includes('hcmadras.tn.gov.in')))
    assert.ok(sources.some((s) => s.type === 'official-court' && s.url.includes('hcmadras')))
  })

  it('attaches authority network on verified citation results', () => {
    const res = verifyCitationSync('(1973) 4 SCC 225')
    assert.equal(res.status, 'verified')
    assert.ok(res.officialSources.length >= 3)
    assert.ok(res.officialSources.some((s) => s.type === 'escr' || s.type === 'official-court'))
    assert.ok(res.officialSources.some((s) => s.type === 'india-code'))
  })

  it('deduplicates identical URLs in the authority network', () => {
    const sources = resolveOfficialSources({
      courtHint: 'Supreme Court of India',
      neutralCourt: 'INSC',
      matchedOfficialUrl: 'https://www.sci.gov.in/',
    })
    const urls = sources.map((s) => s.url)
    assert.equal(urls.length, new Set(urls).size)
  })
})

describe('PH4-020 Citation Verification Engine — Batch and Async Operations', () => {
  it('synchronously verifies a multi-line citation batch', () => {
    const text = '(1973) 4 SCC 225\n(1997) 6 SCC 241\n2023 INSC 99999'
    const results = verifyCitationListSync(text)
    assert.equal(results.length, 3)
    assert.equal(results[0].status, 'verified')
    assert.equal(results[1].status, 'verified')
    assert.equal(results[2].status, 'not-verified')
  })

  it('asynchronously verifies citation with ContentGateway integration', async () => {
    const res = await verifyCitation('(1973) 4 SCC 225')
    assert.equal(res.status, 'verified')
    assert.equal(res.matchedRecord?.id, 'kesavananda-bharati-1973')
  })
})
