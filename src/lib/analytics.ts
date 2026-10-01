/**
 * Phase 22 — aggregate-only, privacy-preserving usage metrics.
 * Roadmap §27: Analytics Without Legal-Data Surveillance.
 *
 * Allowed:
 * - Tool opened (slug)
 * - Workflow completion (opaque key)
 * - Feature usage counts (opaque key)
 * - Anonymous performance counters
 *
 * Never collected:
 * - Legal query text
 * - Case facts
 * - Client names
 * - Uploaded document contents
 * - Private notes
 * - Draft contents
 */

import { loadJson, saveJson } from './localStore'

const METRICS_KEY = 'cp-law:analytics:v1'
const PREF_KEY = 'cp-law:analytics:opt-in:v1'

export interface AggregateMetrics {
  toolOpens: Record<string, number>
  workflowCompletions: Record<string, number>
  featureUses: Record<string, number>
  performanceCounters: Record<string, number>
  lastUpdated: string
}

const EMPTY_METRICS: AggregateMetrics = {
  toolOpens: {},
  workflowCompletions: {},
  featureUses: {},
  performanceCounters: {},
  lastUpdated: new Date().toISOString(),
}

/** Check if analytics are enabled. Defaults to true (privacy-safe local counters), but user can opt out. */
export function isAnalyticsEnabled(): boolean {
  return loadJson<boolean>(PREF_KEY, true)
}

export function setAnalyticsEnabled(enabled: boolean): void {
  saveJson(PREF_KEY, enabled)
  if (!enabled) {
    clearAggregateMetrics()
  }
}

/**
 * Strict privacy validator for metric keys.
 * Rejects:
 * - Strings longer than 64 characters
 * - Strings containing spaces, punctuation, or newlines
 * - Strings looking like legal citations, case titles, or natural language sentences
 * - Empty or non-string inputs
 */
export function isPrivacySafeKey(key: unknown): boolean {
  if (typeof key !== 'string') return false
  const trimmed = key.trim()
  if (!trimmed || trimmed.length > 64) return false
  // Must only contain alphanumeric, hyphens, underscores, and colons (opaque slugs/identifiers)
  if (!/^[a-z0-9_:-]+$/i.test(trimmed)) return false
  // Reject keys with case law / legal indicators like 'v.' or 'vs'
  if (/^(v|vs|versus|section|sec|act)$/i.test(trimmed)) return false
  return true
}

function read(): AggregateMetrics {
  return loadJson<AggregateMetrics>(METRICS_KEY, {
    ...EMPTY_METRICS,
    toolOpens: {},
    workflowCompletions: {},
    featureUses: {},
    performanceCounters: {},
  })
}

function write(m: AggregateMetrics): void {
  m.lastUpdated = new Date().toISOString()
  saveJson(METRICS_KEY, m)
}

export function trackToolOpen(slug: string): void {
  if (!isAnalyticsEnabled() || !isPrivacySafeKey(slug)) return
  const m = read()
  m.toolOpens[slug] = (m.toolOpens[slug] || 0) + 1
  write(m)
}

export function trackWorkflow(key: string): void {
  if (!isAnalyticsEnabled() || !isPrivacySafeKey(key)) return
  const m = read()
  m.workflowCompletions[key] = (m.workflowCompletions[key] || 0) + 1
  write(m)
}

export function trackFeature(key: string): void {
  if (!isAnalyticsEnabled() || !isPrivacySafeKey(key)) return
  const m = read()
  m.featureUses[key] = (m.featureUses[key] || 0) + 1
  write(m)
}

export function trackPerformance(counterKey: string): void {
  if (!isAnalyticsEnabled() || !isPrivacySafeKey(counterKey)) return
  const m = read()
  if (!m.performanceCounters) m.performanceCounters = {}
  m.performanceCounters[counterKey] = (m.performanceCounters[counterKey] || 0) + 1
  write(m)
}

export function getAggregateMetrics(): AggregateMetrics {
  return read()
}

export function clearAggregateMetrics(): void {
  saveJson(METRICS_KEY, {
    ...EMPTY_METRICS,
    toolOpens: {},
    workflowCompletions: {},
    featureUses: {},
    performanceCounters: {},
  })
}

export const ANALYTICS_NS = METRICS_KEY
