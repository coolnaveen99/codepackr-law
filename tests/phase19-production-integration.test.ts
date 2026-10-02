import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { configureContentRepository, getTopicContent } from '../src/content/ContentGateway'

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

    const content = await getTopicContent('constitution', 'art-1')

    assert.ok(content)
    assert.equal(content.glance !== undefined, true)
    assert.equal(content.study !== undefined, true)
  })
})
