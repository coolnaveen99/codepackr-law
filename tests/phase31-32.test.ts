import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  PREFERRED_SOURCE_TIERS,
  PROHIBITED_CONTENT_CATEGORIES,
  FREE_LAYER_COMMITMENTS,
  MONETIZATION_RULES,
  isPreferredTierOrdered,
  SOURCE_TIER_LABEL,
} from '../src/data/sourcePolicy'

describe('Phase 31 source policy', () => {
  it('orders official sources first', () => {
    assert.equal(PREFERRED_SOURCE_TIERS[0], 'official_government')
    assert.ok(isPreferredTierOrdered())
  })

  it('labels every preferred tier', () => {
    for (const tier of PREFERRED_SOURCE_TIERS) {
      assert.ok(SOURCE_TIER_LABEL[tier].length > 0)
    }
  })

  it('lists prohibited proprietary categories', () => {
    assert.ok(PROHIBITED_CONTENT_CATEGORIES.includes('proprietary_headnotes'))
    assert.ok(PROHIBITED_CONTENT_CATEGORIES.includes('paid_database_annotations'))
    assert.equal(PROHIBITED_CONTENT_CATEGORIES.length, 5)
  })
})

describe('Phase 32 monetization trust', () => {
  it('keeps basic layer free and bans safety paywalls', () => {
    assert.equal(MONETIZATION_RULES.basicLayerFree, true)
    assert.equal(MONETIZATION_RULES.noPaywallOnSafetyInfo, true)
    assert.equal(MONETIZATION_RULES.noAggressiveAdsInSensitiveWorkflows, true)
    assert.equal(MONETIZATION_RULES.noOutcomePredictionSales, true)
  })

  it('documents free-layer commitments', () => {
    assert.ok(FREE_LAYER_COMMITMENTS.length >= 4)
    assert.ok(FREE_LAYER_COMMITMENTS.some((c) => /never paywalled|remain free/i.test(c)))
  })
})
