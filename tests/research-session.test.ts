import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  emptyResearchSession,
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
