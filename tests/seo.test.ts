import assert from 'node:assert/strict'
import test from 'node:test'
import { buildCanonicalUrl, DEFAULT_OG_IMAGE } from '../src/lib/seo'

test('SEO Phase 24 canonical URL generation uses one canonical origin', () => {
  assert.equal(buildCanonicalUrl('/tool/global-search'), 'https://law.codepackr.com/tool/global-search')
  assert.equal(buildCanonicalUrl('subjects/constitution'), 'https://law.codepackr.com/subjects/constitution')
  assert.equal(buildCanonicalUrl('/case-law/judgment/kesavananda-bharati-1973'), 'https://law.codepackr.com/case-law/judgment/kesavananda-bharati-1973')
})

test('SEO Phase 24 uses a crawlable absolute Open Graph image', () => {
  assert.equal(DEFAULT_OG_IMAGE, 'https://www.codepackr.com/assets/og/default.png?v=20260928')
  assert.match(DEFAULT_OG_IMAGE, /^https:\/\//)
})
