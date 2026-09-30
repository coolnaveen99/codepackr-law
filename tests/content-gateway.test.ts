import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { mapCanonicalTopicToLegacy } from '../src/content/mapCanonicalTopic'
import { canonicalTopicId } from '../src/content/ContentRepository'
import type { TopicContentRecord } from '../src/content/contentTypes'

describe('Canonical content gateway', () => {
  it('builds stable topic IDs matching legal-content', () => {
    assert.equal(canonicalTopicId('cpc', 's-11'), 'topic:india:cpc-s-11')
  })

  it('maps a canonical topic record onto the legacy TopicContent study body', () => {
    const record: TopicContentRecord = {
      schemaVersion: 'v1',
      entityType: 'topic',
      id: 'topic:india:cpc-s-11',
      version: 1,
      status: 'published',
      title: 'Section 11 CPC — Res judicata',
      jurisdiction: 'India',
      sources: ['source:india:india-code-cpc-1908'],
      updatedAt: '2026-09-30T18:00:00Z',
      content: {
        overview: 'Section 11 bars a later suit after a final decision.',
        sections: [{ heading: 'Essentials', body: 'Former suit, competent court, same parties.', order: 1 }],
        examples: [{ title: 'Applies', body: 'Second title suit after a merits dismissal.' }],
      },
    }
    const mapped = mapCanonicalTopicToLegacy(record)
    assert.match(mapped.study || '', /Section 11 bars a later suit/)
    assert.match(mapped.study || '', /Essentials/)
    assert.equal(mapped.examples?.[0]?.description, 'Second title suit after a merits dismissal.')
    assert.equal(mapped.glance, 'Section 11 CPC — Res judicata')
  })

  it('preserves an embedded legacy study field when present', () => {
    const record: TopicContentRecord = {
      schemaVersion: 'v1',
      entityType: 'topic',
      id: 'topic:india:cpc-s-11',
      version: 1,
      status: 'published',
      title: 'Section 11 CPC',
      jurisdiction: 'India',
      sources: [],
      updatedAt: '2026-09-30T18:00:00Z',
      content: {
        overview: 'Overview text',
        study: 'Full treatise body from the pilot record.',
      },
    }
    const mapped = mapCanonicalTopicToLegacy(record)
    assert.equal(mapped.study, 'Full treatise body from the pilot record.')
  })
})
