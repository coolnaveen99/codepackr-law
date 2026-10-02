import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { searchSubjectsAndTopics } from '../src/data/liveSubjects'
import {
  buildCanonicalUrl,
  buildSubjectStructuredData,
  buildTopicStructuredData,
  buildToolStructuredData,
} from '../src/lib/seo'
import { hrefForCanonicalTopicId } from '../src/content/parseCanonicalTopicId'

describe('Post-migration Phase 18 search and SEO contracts', () => {
  it('keeps representative search results mapped to stable application topic IDs', () => {
    const cpc = searchSubjectsAndTopics('section 32')
    assert.ok(cpc.topics.some(({ subject, topic }) => subject.slug === 'cpc' && topic.id === 's-32'))

    const pil = searchSubjectsAndTopics('locus standi')
    assert.ok(pil.topics.some(({ subject, topic }) => subject.slug === 'pil' && topic.id === 'pil-locus-standi'))
  })

  it('maps canonical topic identities to indexable application URLs', () => {
    const ids = [
      'topic:india:cpc-s-32',
      'topic:india:pil-locus-standi',
      'topic:india:tort-nature-definition',
    ]
    for (const id of ids) {
      const href = hrefForCanonicalTopicId(id)
      assert.ok(href)
      assert.match(href, /^\/subjects\/[^/]+\/[^/]+$/)
      assert.equal(buildCanonicalUrl(href), `https://law.codepackr.com${href}`)
    }
  })

  it('generates stable canonical metadata and structured-data URLs', () => {
    assert.equal(buildCanonicalUrl('/subjects/cpc/s-32'), 'https://law.codepackr.com/subjects/cpc/s-32')
    assert.equal(buildCanonicalUrl('subjects/cpc/s-32'), 'https://law.codepackr.com/subjects/cpc/s-32')

    const subject = buildSubjectStructuredData({
      name: 'Code of Civil Procedure',
      slug: 'cpc',
      description: 'Civil procedure reference.',
    })
    assert.equal(subject.url, 'https://law.codepackr.com/subjects/cpc')
    assert.equal(subject['@type'], 'CollectionPage')

    const topic = buildTopicStructuredData(
      { name: 'Code of Civil Procedure', slug: 'cpc' },
      { id: 's-32', name: 'Section 32', note: 'Representative topic' },
    )
    assert.equal(topic.mainEntityOfPage, 'https://law.codepackr.com/subjects/cpc/s-32')
    assert.equal(topic['@type'], 'Article')

    const tool = buildToolStructuredData({
      name: 'Global Search',
      slug: 'global-search',
      description: 'Search law content.',
    })
    assert.equal(tool.url, 'https://law.codepackr.com/tool/global-search')
  })

  it('keeps the generated sitemap internally unique and aligned with representative routes', () => {
    const sitemapPath = path.resolve(process.cwd(), 'public/sitemap.xml')
    const xml = fs.readFileSync(sitemapPath, 'utf8')
    const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
    assert.ok(urls.length > 100)
    assert.equal(new Set(urls).size, urls.length)
    for (const href of [
      '/subjects/cpc/s-32',
      '/subjects/pil/pil-locus-standi',
      '/subjects/tort/nature-definition',
    ]) {
      assert.ok(urls.includes(`https://law.codepackr.com${href}`), `missing sitemap URL: ${href}`)
    }
  })
})
