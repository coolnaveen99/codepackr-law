import { describe, expect, it } from 'vitest'
import { FILING_CHECKLISTS } from '../src/data/filingChecklists'

describe('Phase 9 filing checklist system', () => {
  it('covers every roadmap filing type', () => {
    expect(FILING_CHECKLISTS.map((x) => x.id)).toEqual([
      'civil-suit','criminal-complaint','bail','appeal','revision','writ','arbitration',
      'consumer-complaint','mact-claim','family-petition','execution-petition','cheque-dishonour','rti-appeal',
    ])
  })

  it('keeps every checklist sourced and explicitly caveated', () => {
    for (const checklist of FILING_CHECKLISTS) {
      expect(checklist.lastReviewed).toMatch(/^2026-/)
      expect(checklist.disclaimer.toLowerCase()).toContain('verify')
      expect(checklist.items.length).toBeGreaterThan(3)
      for (const item of checklist.items) {
        expect(item.requirement.length).toBeGreaterThan(5)
        expect(item.why.length).toBeGreaterThan(5)
        expect(item.source.length).toBeGreaterThan(2)
        expect(['mandatory','conditional']).toContain(item.mandatory)
      }
    }
  })

  it('keeps national baseline separate from local additions', () => {
    expect(FILING_CHECKLISTS.every((c) => c.items.every((i) => i.layer === 'central'))).toBe(true)
    expect(FILING_CHECKLISTS.some((c) => c.items.some((i) => i.source.toLowerCase().includes('local')))).toBe(true)
  })
})
