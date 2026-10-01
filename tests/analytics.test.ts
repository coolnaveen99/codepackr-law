import { describe, it, beforeEach } from 'node:test'
import assert from 'node:assert/strict'
import {
  trackToolOpen,
  trackWorkflow,
  trackFeature,
  trackPerformance,
  getAggregateMetrics,
  clearAggregateMetrics,
  isAnalyticsEnabled,
  setAnalyticsEnabled,
  isPrivacySafeKey,
  ANALYTICS_NS,
} from '../src/lib/analytics'

// Node.js mock localStorage
const store = new Map<string, string>()
;(globalThis as typeof globalThis & { localStorage: Storage }).localStorage = {
  getItem: (key: string) => store.get(key) ?? null,
  setItem: (key: string, value: string) => { store.set(key, value) },
  removeItem: (key: string) => { store.delete(key) },
  clear: () => store.clear(),
  key: (index: number) => Array.from(store.keys())[index] ?? null,
  get length() { return store.size },
} as Storage

describe('Phase 22 — Analytics Without Legal-Data Surveillance (Roadmap §27)', () => {
  beforeEach(() => {
    store.clear()
    setAnalyticsEnabled(true)
    clearAggregateMetrics()
  })

  it('validates privacy-safe opaque keys and rejects substantive legal content', () => {
    // Valid opaque keys
    assert.equal(isPrivacySafeKey('case-prep'), true)
    assert.equal(isPrivacySafeKey('research-workbench'), true)
    assert.equal(isPrivacySafeKey('citation_batch_verify'), true)
    assert.equal(isPrivacySafeKey('render:dossier:fast'), true)

    // Invalid: spaces and natural language
    assert.equal(isPrivacySafeKey('Kesavananda Bharati v. State of Kerala'), false)
    assert.equal(isPrivacySafeKey('What are the grounds for bail under Section 437?'), false)
    assert.equal(isPrivacySafeKey('client: Rajesh Kumar'), false)

    // Invalid: legal dispute indicators
    assert.equal(isPrivacySafeKey('v'), false)
    assert.equal(isPrivacySafeKey('vs'), false)
    assert.equal(isPrivacySafeKey('versus'), false)
    assert.equal(isPrivacySafeKey('section'), false)
    assert.equal(isPrivacySafeKey('act'), false)

    // Invalid: length > 64 chars
    assert.equal(isPrivacySafeKey('a'.repeat(65)), false)

    // Invalid: empty, null, or special punctuation
    assert.equal(isPrivacySafeKey(''), false)
    assert.equal(isPrivacySafeKey('   '), false)
    assert.equal(isPrivacySafeKey(null), false)
    assert.equal(isPrivacySafeKey(undefined), false)
    assert.equal(isPrivacySafeKey('<script>alert("x")</script>'), false)
  })

  it('records aggregate tool opens, workflow completions, feature uses, and performance counters', () => {
    trackToolOpen('case-prep')
    trackToolOpen('case-prep')
    trackToolOpen('research-workbench')

    trackWorkflow('bundle-export')
    trackWorkflow('bundle-export')

    trackFeature('citation-check')

    trackPerformance('render-chronology-ms')

    const metrics = getAggregateMetrics()
    assert.equal(metrics.toolOpens['case-prep'], 2)
    assert.equal(metrics.toolOpens['research-workbench'], 1)
    assert.equal(metrics.workflowCompletions['bundle-export'], 2)
    assert.equal(metrics.featureUses['citation-check'], 1)
    assert.equal(metrics.performanceCounters['render-chronology-ms'], 1)
    assert.ok(metrics.lastUpdated)
  })

  it('rejects surveillance payloads from ever reaching storage', () => {
    // Attempting to log confidential research notes, case facts, or client names
    trackToolOpen('Client: Tata Motors Ltd dispute')
    trackWorkflow('Petition under Article 226 for illegal detention')
    trackFeature('Confidential note: client admitted breach of clause 4')
    trackPerformance('Fact: FIR registered at Rohini Police Station')

    const metrics = getAggregateMetrics()
    assert.deepEqual(metrics.toolOpens, {})
    assert.deepEqual(metrics.workflowCompletions, {})
    assert.deepEqual(metrics.featureUses, {})
    assert.deepEqual(metrics.performanceCounters, {})
  })

  it('supports user opt-out and automatically purges counters on disable', () => {
    trackToolOpen('legal-calculators')
    let metrics = getAggregateMetrics()
    assert.equal(metrics.toolOpens['legal-calculators'], 1)

    // Opt-out
    setAnalyticsEnabled(false)
    assert.equal(isAnalyticsEnabled(), false)

    metrics = getAggregateMetrics()
    assert.deepEqual(metrics.toolOpens, {})

    // While opted out, tracking calls are completely suppressed
    trackToolOpen('case-prep')
    trackWorkflow('export')
    trackFeature('share')
    trackPerformance('load')

    metrics = getAggregateMetrics()
    assert.deepEqual(metrics.toolOpens, {})
    assert.deepEqual(metrics.workflowCompletions, {})
    assert.deepEqual(metrics.featureUses, {})
    assert.deepEqual(metrics.performanceCounters, {})

    // Re-enable
    setAnalyticsEnabled(true)
    assert.equal(isAnalyticsEnabled(), true)
    trackToolOpen('case-prep')
    assert.equal(getAggregateMetrics().toolOpens['case-prep'], 1)
  })

  it('clears aggregate metrics on demand while maintaining valid structure', () => {
    trackToolOpen('limitation-calculator')
    trackWorkflow('calculate')
    trackFeature('toggle-schedule')
    trackPerformance('calc-time')

    clearAggregateMetrics()

    const metrics = getAggregateMetrics()
    assert.deepEqual(metrics.toolOpens, {})
    assert.deepEqual(metrics.workflowCompletions, {})
    assert.deepEqual(metrics.featureUses, {})
    assert.deepEqual(metrics.performanceCounters, {})
    assert.ok(metrics.lastUpdated)
    assert.equal(ANALYTICS_NS, 'cp-law:analytics:v1')
  })
})
