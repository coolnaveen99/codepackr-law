import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { canonicalTopicId } from '../src/content/ContentRepository'
import {
  hrefForCanonicalTopicId,
  parseCanonicalTopicId,
  parseSubjectTopicFromPath,
} from '../src/content/parseCanonicalTopicId'
import { mapCanonicalTopicToLegacy } from '../src/content/mapCanonicalTopic'

describe('Post-migration Phase 17 content UX contracts', () => {
  it('maps representative canonical IDs to application topic routes', () => {
    const cases = [
      ['topic:india:cpc-s-32', 'cpc', 's-32', '/subjects/cpc/s-32'],
      ['topic:india:pil-locus-standi', 'pil', 'pil-locus-standi', '/subjects/pil/pil-locus-standi'],
      ['topic:india:tort-nature-definition', 'tort', 'nature-definition', '/subjects/tort/nature-definition'],
    ] as const

    for (const [id, subjectSlug, topicId, href] of cases) {
      assert.deepEqual(parseCanonicalTopicId(id), { subjectSlug, topicId })
      assert.equal(hrefForCanonicalTopicId(id), href)
      assert.equal(canonicalTopicId(subjectSlug, topicId), id)
    }
  })

  it('parses topic routes without changing encoded topic IDs', () => {
    assert.deepEqual(
      parseSubjectTopicFromPath('/subjects/pil/pil-locus-standi?view=study'),
      { subjectSlug: 'pil', topicId: 'pil-locus-standi' },
    )
    assert.deepEqual(
      parseSubjectTopicFromPath('/subjects/cpc/s-32'),
      { subjectSlug: 'cpc', topicId: 's-32' },
    )
  })

  it('normalizes canonical section content for the existing topic renderer', () => {
    const record = {
      schemaVersion: '1',
      entityType: 'topic' as const,
      id: 'topic:india:cpc-s-32',
      version: 1,
      status: 'published' as const,
      title: 'Section 32',
      jurisdiction: 'India',
      content: {
        overview: 'Overview',
        sections: [
          { id: 'a', heading: 'Rule', body: 'Body', order: 1 },
          { id: 'b', title: 'Example', content: ['Paragraph 1', 'Paragraph 2'], order: 2 },
        ],
        examples: [{ id: 'e1', title: 'Example', body: 'Example body' }],
      },
      sources: [],
      updatedAt: '2026-10-02T00:00:00.000Z',
    }
    const mapped = mapCanonicalTopicToLegacy(record)
    assert.equal(mapped.glance, 'Section 32')
    assert.equal(mapped.sections?.[0]?.title, 'Rule')
    assert.deepEqual(mapped.sections?.[0]?.content, ['Body'])
    assert.deepEqual(mapped.sections?.[1]?.content, ['Paragraph 1', 'Paragraph 2'])
    assert.equal(mapped.examples?.[0]?.description, 'Example body')
  })
})
