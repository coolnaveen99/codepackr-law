/**
 * Versioned privacy-first local storage helpers (Phase 16).
 * Never put privileged case facts in URLs or analytics.
 */

export const CP_LAW_NS = {
  settings: 'cp-law:settings:v1',
  favorites: 'cp-law:favorites:v1',
  study: 'cp-law:study:v1',
  cases: 'cp-law:cases:v1',
  drafts: 'cp-law:drafts:v1',
  research: 'cp-law:research:v1',
  checklists: 'cp-law:checklists:v1',
  diary: 'cp-law:diary:v1',
  causeList: 'cp-law:cause-list:v1',
  caseBriefs: 'cp-law:case-briefs:v1',
} as const

export type CpLawNamespace = (typeof CP_LAW_NS)[keyof typeof CP_LAW_NS]

export function loadJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

export function saveJson(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Quota or private mode — silent fail; UI should surface storage usage.
  }
}

export function removeKey(key: string): void {
  try {
    localStorage.removeItem(key)
  } catch {
    /* ignore */
  }
}

export function exportAllCpLawData(): string {
  const out: Record<string, unknown> = {}
  for (const key of Object.values(CP_LAW_NS)) {
    const raw = localStorage.getItem(key)
    if (raw != null) {
      try {
        out[key] = JSON.parse(raw)
      } catch {
        out[key] = raw
      }
    }
  }
  return JSON.stringify(
    {
      exportedAt: new Date().toISOString(),
      product: 'codepackr-law',
      namespaces: out,
    },
    null,
    2,
  )
}

export function importCpLawData(json: string): { ok: boolean; keys: string[]; error?: string } {
  try {
    const parsed = JSON.parse(json) as { namespaces?: Record<string, unknown> }
    const ns = parsed.namespaces
    if (!ns || typeof ns !== 'object') {
      return { ok: false, keys: [], error: 'Missing namespaces object' }
    }
    const allowed = new Set(Object.values(CP_LAW_NS))
    const keys: string[] = []
    for (const [k, v] of Object.entries(ns)) {
      if (!allowed.has(k as CpLawNamespace)) continue
      saveJson(k, v)
      keys.push(k)
    }
    return { ok: true, keys }
  } catch (e) {
    return { ok: false, keys: [], error: e instanceof Error ? e.message : 'Invalid JSON' }
  }
}

export function resetCpLawNamespace(key: CpLawNamespace): boolean {
  const existed = localStorage.getItem(key) != null
  removeKey(key)
  return existed
}

export function deleteAllCpLawData(): string[] {
  const removed: string[] = []
  for (const key of Object.values(CP_LAW_NS)) {
    if (localStorage.getItem(key) != null) {
      removeKey(key)
      removed.push(key)
    }
  }
  return removed
}

export function storageUsageEstimate(): { usedBytes: number; keys: number } {
  let usedBytes = 0
  let keys = 0
  for (const key of Object.values(CP_LAW_NS)) {
    const raw = localStorage.getItem(key)
    if (raw != null) {
      usedBytes += key.length + raw.length
      keys += 1
    }
  }
  return { usedBytes, keys }
}
