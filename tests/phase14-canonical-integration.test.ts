import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { CanonicalContentRepository, canonicalTopicId } from '../src/content/ContentRepository'

const BASE =
  process.env.LEGAL_CONTENT_BASE_URL ||
  process.env.VITE_LEGAL_CONTENT_BASE_URL ||
  'https://raw.githubusercontent.com/coolnaveen99/legal-content/main'

describe('Post-migration Phase 14 canonical integration', () => {
  const repo = new CanonicalContentRepository(BASE)

  it('confirms canonical manifest identity and corpus availability', async () => {
    const manifest = await repo.getManifest()
    assert.ok(manifest, 'canonical manifest must be reachable')
    assert.equal(manifest.repository, 'coolnaveen99/legal-content')
    assert.ok((manifest.entities?.length ?? 0) >= 100, 'canonical corpus is unexpectedly small')
  })

  it('confirms relationship index availability', async () => {
    const index = await repo.getRelationshipIndex()
    assert.ok(index, 'relationship index must be reachable')
    assert.equal(index.repository, 'coolnaveen99/legal-content')
    assert.ok((index.edgeCount ?? 0) > 0, 'relationship graph must contain edges')
  })

  it('preserves stable canonical topic IDs across catalog forms', () => {
    assert.equal(canonicalTopicId('cpc', 's-32'), 'topic:india:cpc-s-32')
    assert.equal(canonicalTopicId('pil', 'pil-locus-standi'), 'topic:india:pil-locus-standi')
    assert.equal(canonicalTopicId('pil', 'locus-standi'), 'topic:india:pil-locus-standi')
    assert.equal(canonicalTopicId('tort', 'nature-definition'), 'topic:india:tort-nature-definition')
  })

  it('resolves representative canonical topics', async () => {
    const probes = [
      ['cpc', 's-32', 'topic:india:cpc-s-32'],
      ['pil', 'locus-standi', 'topic:india:pil-locus-standi'],
      ['tort', 'nature-definition', 'topic:india:tort-nature-definition'],
    ] as const

    for (const [subject, topicId, expectedId] of probes) {
      const topic = await repo.getTopic(subject, topicId)
      assert.ok(topic, `canonical topic missing: ${subject}/${topicId}`)
      assert.equal(topic.id, expectedId)
      assert.equal(topic.status, 'published')
    }
  })

  it('resolves graph relationships for a representative canonical topic', async () => {
    const edges = await repo.getOutboundRelations('topic:india:pil-locus-standi')
    assert.ok(edges.length > 0, 'expected outbound relationships for PIL locus standi')
    assert.ok(edges.every((edge) => edge.to.includes(':')), 'relationship targets must be canonical IDs')
  })
})
