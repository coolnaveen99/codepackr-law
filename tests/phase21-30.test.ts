import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { escapeHtml, stripTags, limitUserText, isBlockedExtension, allowedTextMime } from '../src/lib/sanitize'
import { DRAFT_TIERS, tierLabel } from '../src/data/draftTiers'
import { COURT_PROFILES, STATE_PROFILES } from '../src/data/courtProfiles'

describe('sanitize (Phase 29)', () => {
  it('escapes HTML special characters', () => {
    assert.equal(escapeHtml('<script>alert("x")</script>'), '&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;')
  })
  it('strips tags', () => {
    assert.equal(stripTags('<b>Hello</b> world'), 'Hello world')
  })
  it('limits oversized text', () => {
    assert.equal(limitUserText('a'.repeat(1000), 100).length, 100)
  })
  it('blocks dangerous extensions', () => {
    assert.equal(isBlockedExtension('payload.exe'), true)
    assert.equal(isBlockedExtension('notes.txt'), false)
  })
  it('allows text-like MIME types', () => {
    assert.equal(allowedTextMime('text/plain'), true)
    assert.equal(allowedTextMime('application/javascript'), false)
  })
})

describe('draft tiers (Phase 25)', () => {
  it('defines four governance tiers', () => {
    assert.equal(DRAFT_TIERS.length, 4)
    assert.ok(tierLabel('verified').includes('Tier 1'))
    assert.ok(tierLabel('scaffold').includes('Tier 2'))
    assert.ok(tierLabel('catalogue').includes('Tier 3'))
    assert.ok(tierLabel('checklist').includes('Tier 4'))
  })
})

describe('court profiles (Phase 26)', () => {
  it('seeds states and courts with verification dates', () => {
    assert.ok(STATE_PROFILES.length >= 3)
    assert.ok(COURT_PROFILES.length >= 3)
    for (const c of COURT_PROFILES) {
      assert.ok(c.officialUrl.startsWith('http'))
      assert.ok(c.lastVerified)
    }
  })
})
