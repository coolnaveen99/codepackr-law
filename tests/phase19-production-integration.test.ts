import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { configureContentRepository, getTopicContent } from '../src/content/ContentGateway'
import { CanonicalContentRepository } from '../src/content/ContentRepository'

describe('Post-migration Phase 19 production integration contracts', () => {
  it('falls back safely to legacy content when canonical delivery misses', async () => {
    configureContentRepository({
      async get() {
        return null
      },
      async getTopic() {
        return null
      },
      async getManifest() {
        return null
      },
      async getById() {
        return null
      },
    })

    try {
      const content = await getTopicContent('constitution', 'art-1')
      assert.ok(content)
      assert.equal(typeof content.glance, 'string')
      assert.equal(typeof content.study, 'string')
      assert.match(content.glance, /Article 1/)
    } finally {
      configureContentRepository(new CanonicalContentRepository())
    }
  })
})
