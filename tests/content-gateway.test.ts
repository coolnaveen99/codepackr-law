import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { mapCanonicalTopicToLegacy } from '../src/content/mapCanonicalTopic'
import { canonicalTopicId, CanonicalContentRepository } from '../src/content/ContentRepository'
import { parseCanonicalTopicId, hrefForCanonicalTopicId } from '../src/content/parseCanonicalTopicId'
import type { TopicContentRecord } from '../src/content/contentTypes'

const LEGAL_CONTENT_BASE =
  process.env.LEGAL_CONTENT_BASE_URL ||
  'https://raw.githubusercontent.com/coolnaveen99/legal-content/main'

describe('Canonical content gateway', () => {
  it('builds stable topic IDs matching legal-content', () => {
    assert.equal(canonicalTopicId('cpc', 's-11'), 'topic:india:cpc-s-11')
    assert.equal(canonicalTopicId('tort', 'nature-definition'), 'topic:india:tort-nature-definition')
    assert.equal(canonicalTopicId('pil', 'locus-standi'), 'topic:india:pil-locus-standi')
  })

  it('parses canonical topic IDs into app routes', () => {
    assert.deepEqual(parseCanonicalTopicId('topic:india:pil-locus-standi'), {
      subjectSlug: 'pil',
      topicId: 'locus-standi',
    })
    assert.equal(hrefForCanonicalTopicId('topic:india:cpc-s-32'), '/subjects/cpc/s-32')
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

describe('Live legal-content parity', () => {
  const repo = new CanonicalContentRepository(LEGAL_CONTENT_BASE)

  it('loads full content-manifest from legal-content', async () => {
    const manifest = await repo.getManifest()
    assert.ok(manifest, 'manifest must load')
    assert.ok((manifest!.entities?.length ?? 0) >= 100, `expected full catalog, got ${manifest!.entities?.length}`)
    assert.equal(manifest!.repository, 'coolnaveen99/legal-content')
  })

  it('loads relationship-index from legal-content', async () => {
    const index = await repo.getRelationshipIndex()
    assert.ok(index, 'relationship-index must load')
    assert.ok((index!.edgeCount ?? 0) >= 40, `expected graph edges, got ${index!.edgeCount}`)
  })

  it('resolves PIL locus-standi via manifest path', async () => {
    const topic = await repo.getTopic('pil', 'locus-standi')
    assert.ok(topic, 'pil locus-standi must resolve')
    assert.equal(topic!.id, 'topic:india:pil-locus-standi')
    assert.equal(topic!.status, 'published')
    assert.ok(Array.isArray(topic!.content?.relatedTopics) && topic!.content.relatedTopics.length > 0)
  })

  it('resolves CPC s.32 benchmark treatise', async () => {
    const topic = await repo.getTopic('cpc', 's-32')
    assert.ok(topic, 'cpc s-32 must resolve')
    assert.equal(topic!.id, 'topic:india:cpc-s-32')
    const mapped = mapCanonicalTopicToLegacy(topic!)
    assert.ok((mapped.study || '').length > 100, 'study body should be non-trivial')
  })

  it('resolves tort nature-definition (slug tort vs dir torts)', async () => {
    const topic = await repo.getTopic('tort', 'nature-definition')
    assert.ok(topic, 'tort nature-definition must resolve via id/alias')
    assert.equal(topic!.id, 'topic:india:tort-nature-definition')
  })

  it('returns outbound relatedTopics for PIL from graph index', async () => {
    const edges = await repo.getOutboundRelations('topic:india:pil-locus-standi')
    const related = edges.filter((e) => e.field === 'relatedTopics')
    assert.ok(related.length >= 3, `expected PIL related topics, got ${related.length}`)
  })
})
