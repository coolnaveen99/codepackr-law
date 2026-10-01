import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  emptyResearchSession,
  emptyAuthorityRow,
  researchNoteFromSession,
} from '../src/lib/researchSession'

describe('PH3-020 research question fields', () => {
  it('includes court level, date range, act, and section in the note', () => {
    const session = emptyResearchSession()
    session.question = {
      question: 'Does s. 32 CPC apply after a s. 30 summons?',
      jurisdiction: 'India — All courts',
      courtLevel: 'District Court',
      dateFrom: '2020-01-01',
      dateTo: '2026-12-31',
      subjectSlug: 'cpc',
      act: 'CPC, 1908',
      section: 's. 32',
    }
    const note = researchNoteFromSession(session)
    assert.match(note, /Court level: District Court/)
    assert.match(note, /Subject: cpc/)
    assert.match(note, /Act: CPC, 1908/)
    assert.match(note, /Section: s\. 32/)
    assert.match(note, /Date range: 2020-01-01 – 2026-12-31/)
  })
})

describe('PH3-030 authority matrix fields', () => {
  it('includes date, paragraph, treatment, and source in the note', () => {
    const session = emptyResearchSession()
    const row = emptyAuthorityRow()
    row.caseName = 'Maneka Gandhi'
    row.court = 'Supreme Court'
    row.date = '1978-01-25'
    row.citation = 'AIR 1978 SC 597'
    row.statute = 'Art. 21'
    row.issue = 'Procedure established by law'
    row.holding = 'Procedure must be fair, just and reasonable'
    row.paragraph = 'user note — verify on reporter'
    row.treatment = 'followed'
    row.source = 'https://example.invalid/reporter'
    row.verification = 'partial'
    session.authorities = [row]
    const note = researchNoteFromSession(session)
    assert.match(note, /Maneka Gandhi/)
    assert.match(note, /Date: 1978-01-25/)
    assert.match(note, /Para: user note/)
    assert.match(note, /Treatment: followed/)
    assert.match(note, /Source: https:\/\/example\.invalid\/reporter/)
    assert.match(note, /Status: partial/)
  })
})
