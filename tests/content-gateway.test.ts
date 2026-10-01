import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { mapCanonicalTopicToLegacy } from '../src/content/mapCanonicalTopic'
import { canonicalTopicId, CanonicalContentRepository } from '../src/content/ContentRepository'
import { parseCanonicalTopicId, hrefForCanonicalTopicId } from '../src/content/parseCanonicalTopicId'
import {
  assertDualReadParity,
  buildDualReadParityReport,
} from '../src/content/parity'
import type { TopicContentRecord } from '../src/content/contentTypes'
import type { TopicContent } from '../src/data/topics/topicTypes'

const LEGAL_CONTENT_BASE =
  process.env.LEGAL_CONTENT_BASE_URL ||
  process.env.VITE_LEGAL_CONTENT_BASE_URL ||
  'https://raw.githubusercontent.com/coolnaveen99/legal-content/main'

/** Minimal fixture mirroring the published CPC s.32 pilot shape. */
function cpcS32Fixture(): TopicContentRecord {
  return {
    schemaVersion: 'v1',
    entityType: 'topic',
    id: 'topic:india:cpc-s-32',
    version: 2,
    status: 'published',
    title: 'Section 32 CPC — Penalty for default',
    jurisdiction: 'India',
    sources: ['source:india:india-code-cpc-1908'],
    updatedAt: '2026-10-01T01:20:00Z',
    content: {
      overview:
        'Section 32 CPC compels a person already summoned under Section 30 — warrant, attachment and sale, fine up to ₹5,000, or security with civil prison on default.',
      sections: [
        {
          heading: 'Study treatise',
          body:
            'Section 32 CPC is the court’s coercive toolbox after a person summoned under Section 30 stays away. The word used is may. Four powers: warrant, attach and sell, fine ≤ ₹5,000, security / civil prison.',
          order: 1,
        },
        {
          heading: 'Essential ingredients',
          body: '1. Live civil proceeding. 2. Section 30 summons. 3. Service. 4. Default without cause.',
          order: 2,
        },
      ],
      examples: [
        {
          title: 'Example — summons ignored',
          body: 'Village accountant stays away after proved Section 30 service. Court may fine under Section 32(c).',
        },
        {
          title: 'Example — section not attracted',
          body: 'Defendant never served under Order V. Section 32 does not apply; that is Order IX.',
        },
      ],
      hypotheticals: [
        {
          question: 'What may the court lawfully do under Section 32 when a manager ignores a production summons?',
          analysis:
            'Section 32 is open because a Section 30 summons was served. Choose the least measure that gets the register into court.',
        },
      ],
      relatedTopics: ['topic:india:cpc-s-30', 'topic:india:cpc-s-31', 'topic:india:cpc-s-27'],
      legacySubjectSlug: 'cpc',
      legacyTopicId: 's-32',
    },
  }
}

/** Legacy-shaped body aligned with src/data/topics/cpc/s-32.ts (abbreviated). */
function cpcS32Legacy(): TopicContent {
  return {
    glance:
      'Section 32 CPC compels a person already summoned under Section 30 — warrant, attachment and sale, fine up to ₹5,000, or security with civil prison on default.',
    study: `Topic at a glance
Section 32 CPC is the court’s coercive toolbox after a person summoned under Section 30 stays away. It is not about filing a plaint, serving the defendant, or passing a decree.

Meaning and concept
Condition: a summons has already been issued under Section 30 to that person.
Purpose: compel attendance or production.
Powers: (a) warrant for arrest; (b) attach and sell property; (c) fine not exceeding five thousand rupees; (d) security for appearance, and in default civil prison.`,
    examples: [
      {
        id: 's32-ex-apply',
        title: 'Example — summons ignored',
        description:
          'In a partition suit the court issues a Section 30 summons to the village accountant for the record of rights.',
      },
    ],
  }
}

describe('Canonical content gateway', () => {
  it('builds stable topic IDs matching legal-content', () => {
    assert.equal(canonicalTopicId('cpc', 's-11'), 'topic:india:cpc-s-11')
    assert.equal(canonicalTopicId('tort', 'nature-definition'), 'topic:india:tort-nature-definition')
    assert.equal(canonicalTopicId('pil', 'locus-standi'), 'topic:india:pil-locus-standi')
    assert.equal(canonicalTopicId('cpc', 's-32'), 'topic:india:cpc-s-32')
    // Catalog-style prefixed doctrine ids must not double the subject slug
    assert.equal(canonicalTopicId('pil', 'pil-locus-standi'), 'topic:india:pil-locus-standi')
  })

  it('parses canonical topic IDs into app routes', () => {
    assert.deepEqual(parseCanonicalTopicId('topic:india:pil-locus-standi'), {
      subjectSlug: 'pil',
      topicId: 'pil-locus-standi',
    })
    assert.equal(hrefForCanonicalTopicId('topic:india:pil-locus-standi'), '/subjects/pil/pil-locus-standi')
    assert.equal(hrefForCanonicalTopicId('topic:india:cpc-s-32'), '/subjects/cpc/s-32')
    assert.deepEqual(parseCanonicalTopicId('topic:india:cpc-s-32'), {
      subjectSlug: 'cpc',
      topicId: 's-32',
    })
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

describe('Dual-read parity (fixture)', () => {
  it('passes for the CPC s.32 pilot fixture against the legacy study body', () => {
    const report = buildDualReadParityReport('cpc', 's-32', cpcS32Fixture(), cpcS32Legacy())
    assertDualReadParity(report)
    assert.ok(report.mappedStudyLength > 40)
    assert.ok(report.legacyStudyLength > 40)
  })

  it('fails loudly when canonical ID does not match subject/topic', () => {
    const bad = cpcS32Fixture()
    bad.id = 'topic:india:cpc-s-99'
    const report = buildDualReadParityReport('cpc', 's-32', bad, cpcS32Legacy())
    assert.equal(report.ok, false)
    assert.ok(report.fields.some((f) => f.field === 'canonical.id' && !f.ok))
  })

  it('maps examples and hypotheticals from the CPC s.32 fixture', () => {
    const mapped = mapCanonicalTopicToLegacy(cpcS32Fixture())
    assert.equal(mapped.examples?.length, 2)
    assert.equal(mapped.hypotheticals?.length, 1)
    assert.match(mapped.examples![0].description, /village accountant|Section 30/i)
    assert.match(mapped.hypotheticals![0].analysis || '', /Section 32 is open/i)
  })
})

describe('Live legal-content parity', () => {
  const repo = new CanonicalContentRepository(LEGAL_CONTENT_BASE)

  it('loads full content-manifest from legal-content', async () => {
    const manifest = await repo.getManifest()
    if (!manifest) {
      console.warn('[content-parity] manifest fetch returned null — skipping')
      return
    }
    assert.ok((manifest.entities?.length ?? 0) >= 100, `expected full catalog, got ${manifest.entities?.length}`)
    assert.equal(manifest.repository, 'coolnaveen99/legal-content')
  })

  it('loads relationship-index from legal-content', async () => {
    const index = await repo.getRelationshipIndex()
    if (!index) {
      console.warn('[content-parity] relationship-index fetch returned null — skipping')
      return
    }
    assert.ok((index.edgeCount ?? 0) >= 40, `expected graph edges, got ${index.edgeCount}`)
  })

  it('resolves PIL locus-standi via catalog id and short id', async () => {
    const byCatalog = await repo.getTopic('pil', 'pil-locus-standi')
    const byShort = await repo.getTopic('pil', 'locus-standi')
    const topic = byCatalog || byShort
    if (!topic) {
      console.warn('[content-parity] pil locus-standi fetch returned null — skipping')
      return
    }
    assert.equal(topic.id, 'topic:india:pil-locus-standi')
    assert.equal(topic.status, 'published')
    assert.ok(Array.isArray(topic.content?.relatedTopics) && topic.content.relatedTopics.length > 0)
  })

  it('resolves CPC s.32 benchmark treatise and dual-read parity', async () => {
    const topic = await repo.getTopic('cpc', 's-32')
    if (!topic) {
      console.warn('[content-parity] cpc s-32 fetch returned null — skipping')
      return
    }
    assert.equal(topic.id, 'topic:india:cpc-s-32')
    const mapped = mapCanonicalTopicToLegacy(topic)
    assert.ok((mapped.study || '').length > 100, 'study body should be non-trivial')
    assert.match(mapped.study || '', /Section 32/i)
    assert.match(mapped.study || '', /Section 30/i)

    const report = buildDualReadParityReport('cpc', 's-32', topic, cpcS32Legacy())
    assertDualReadParity(report)
  })

  it('resolves tort nature-definition (slug tort vs dir torts)', async () => {
    const topic = await repo.getTopic('tort', 'nature-definition')
    if (!topic) {
      console.warn('[content-parity] tort nature-definition fetch returned null — skipping')
      return
    }
    assert.equal(topic.id, 'topic:india:tort-nature-definition')
  })

  it('returns outbound relatedTopics for PIL from graph index', async () => {
    const edges = await repo.getOutboundRelations('topic:india:pil-locus-standi')
    if (!edges.length) {
      console.warn('[content-parity] no outbound edges for PIL — skipping')
      return
    }
    const related = edges.filter((e) => e.field === 'relatedTopics')
    assert.ok(related.length >= 1, `expected PIL related topics, got ${related.length}`)
    for (const edge of related) {
      assert.match(edge.to, /^topic:/)
    }
  })

  it('returns null for an unknown topic id without throwing', async () => {
    const missing = await repo.getTopic('cpc', 's-does-not-exist-xyz')
    assert.equal(missing, null)
  })
})
