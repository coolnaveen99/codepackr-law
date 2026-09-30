/**
 * Phase 22 — aggregate-only, privacy-preserving usage metrics.
 * Never stores legal query text, case facts, client names, notes or drafts.
 */

import { loadJson, saveJson } from './localStore'

const KEY = 'cp-law:analytics:v1'

export interface AggregateMetrics {
  toolOpens: Record<string, number>
  workflowCompletions: Record<string, number>
  featureUses: Record<string, number>
  lastUpdated: string
}

const EMPTY: AggregateMetrics = {
  toolOpens: {},
  workflowCompletions: {},
  featureUses: {},
  lastUpdated: new Date().toISOString(),
}

function read(): AggregateMetrics {
  return loadJson<AggregateMetrics>(KEY, { ...EMPTY, toolOpens: {}, workflowCompletions: {}, featureUses: {} })
}

function write(m: AggregateMetrics): void {
  m.lastUpdated = new Date().toISOString()
  saveJson(KEY, m)
}

export function trackToolOpen(slug: string): void {
  if (!slug || slug.length > 64) return
  const m = read()
  m.toolOpens[slug] = (m.toolOpens[slug] || 0) + 1
  write(m)
}

export function trackWorkflow(key: string): void {
  if (!key || key.length > 64) return
  const m = read()
  m.workflowCompletions[key] = (m.workflowCompletions[key] || 0) + 1
  write(m)
}

export function trackFeature(key: string): void {
  if (!key || key.length > 64) return
  const m = read()
  m.featureUses[key] = (m.featureUses[key] || 0) + 1
  write(m)
}

export function getAggregateMetrics(): AggregateMetrics {
  return read()
}

export function clearAggregateMetrics(): void {
  saveJson(KEY, { ...EMPTY, toolOpens: {}, workflowCompletions: {}, featureUses: {} })
}

export const ANALYTICS_NS = KEY
