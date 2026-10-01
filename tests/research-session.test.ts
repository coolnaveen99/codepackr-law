import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  emptyResearchSession,
  emptyAuthorityRow,
  researchNoteFromSession,
  researchNoteFilename,
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
    assert.match(note, /Court level:\*\*\s*District Court/)
    assert.match(note, /Subject:\*\*\s*cpc/)
    assert.match(note, /Act:\*\*\s*CPC, 1908/)
    assert.match(note, /Section:\*\*\s*s\. 32/)
    assert.match(note, /Date range:\*\*\s*2020-01-01 – 2026-12-31/)
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
    assert.match(note, /Date:\*\*\s*1978-01-25/)
    assert.match(note, /Para \/ pin cite:\*\*\s*user note/)
    assert.match(note, /Treatment:\*\*\s*followed/)
    assert.match(note, /Source:\*\*\s*https:\/\/example\.invalid\/reporter/)
    assert.match(note, /Verification status:\*\*\s*partial/)
  })
})

describe('PH3-040 research note polish / export', () => {
  it('uses clearer section labels and structured authority blocks', () => {
    const session = emptyResearchSession()
    session.question.question = 'Test question'
    session.shortAnswer = 'Tentative yes'
    const row = emptyAuthorityRow()
    row.caseName = 'Sample Case'
    row.citation = 'AIR 1978 SC 1'
    session.authorities = [row]
    const note = researchNoteFromSession(session)
    assert.match(note, /^# Research Note/m)
    assert.match(note, /## 1\. Question presented/)
    assert.match(note, /### Matter filters/)
    assert.match(note, /## 4\. Authority matrix/)
    assert.match(note, /### 1\. Sample Case/)
    assert.match(note, /## 6\. Counter-authorities and contrary views/)
    assert.match(note, /not legal advice/i)
    assert.match(note, /Paragraph \/ pin cites verified/)
  })

  it('builds a safe markdown filename from act/section', () => {
    const session = emptyResearchSession()
    session.question.act = 'CPC, 1908'
    session.question.section = 's. 32'
    const name = researchNoteFilename(session)
    assert.match(name, /^research-note-cpc-1908-\d{4}-\d{2}-\d{2}\.md$/)
  })
})
