/**
 * Phase 21 — offline / PWA helpers.
 * Cached shell must never be presented as current legal authority.
 */

export function isOnline(): boolean {
  if (typeof navigator === 'undefined' || typeof navigator.onLine !== 'boolean') return true
  return navigator.onLine
}

export function registerServiceWorker(): void {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      /* silent — SW optional on some hosts */
    })
  })
}

export type ConnectivityListener = (online: boolean) => void

export function subscribeConnectivity(listener: ConnectivityListener): () => void {
  if (typeof window === 'undefined') return () => {}
  const on = () => listener(true)
  const off = () => listener(false)
  window.addEventListener('online', on)
  window.addEventListener('offline', off)
  return () => {
    window.removeEventListener('online', on)
    window.removeEventListener('offline', off)
  }
}

/**
 * Roadmap §26 — Offline-first candidate features.
 * Client-side tools and curricula that operate without an active internet connection.
 */
export interface OfflineCandidate {
  key: string
  title: string
  description: string
  route: string
  storageType: 'localStorage' | 'sessionStorage' | 'static-bundle'
  offlineReady: boolean
}

export const OFFLINE_FIRST_CANDIDATES: readonly OfflineCandidate[] = [
  {
    key: 'mcqs',
    title: 'MCQ Practice Bank',
    description: 'Interactive multiple choice questions for AIBE and university examinations.',
    route: '/mcq',
    storageType: 'static-bundle',
    offlineReady: true,
  },
  {
    key: 'flashcards',
    title: 'Flashcards & Landmark Cases',
    description: 'Statutory section flashcards and landmark case ratio summaries.',
    route: '/flashcards',
    storageType: 'static-bundle',
    offlineReady: true,
  },
  {
    key: 'maxims',
    title: 'Legal Maxims & Principles',
    description: 'Curated index of Latin and common law maxims with statutory context.',
    route: '/maxims',
    storageType: 'static-bundle',
    offlineReady: true,
  },
  {
    key: 'calculators',
    title: 'Legal & Limitation Calculators',
    description: 'Deterministic date arithmetic, interest, notice period, and limitation worksheets.',
    route: '/tool/calculators',
    storageType: 'localStorage',
    offlineReady: true,
  },
  {
    key: 'saved-notes',
    title: 'Research Notes & Workbench',
    description: 'Browser-local research sessions, questions, issue notes, and authority matrices.',
    route: '/tool/research-workbench',
    storageType: 'localStorage',
    offlineReady: true,
  },
  {
    key: 'case-workspaces',
    title: 'Case Preparation Workspace',
    description: 'Litigation dossiers, party profiles, chronologies, witnesses, and hearing notes.',
    route: '/tool/case-prep',
    storageType: 'localStorage',
    offlineReady: true,
  },
  {
    key: 'draft-scaffolds',
    title: 'Legal Draft Studio',
    description: 'Court drafting templates, notices, petitions, and chamber forms.',
    route: '/tool/legal-draft-studio',
    storageType: 'localStorage',
    offlineReady: true,
  },
  {
    key: 'static-knowledge',
    title: 'Static Knowledge & Curriculum',
    description: 'Bare act concordances, doctrines, and syllabus summaries bundled in application code.',
    route: '/subjects',
    storageType: 'static-bundle',
    offlineReady: true,
  },
]

export function isOfflineFirstRoute(pathname: string): boolean {
  if (!pathname) return false
  const clean = pathname.split('?')[0].split('#')[0]
  return OFFLINE_FIRST_CANDIDATES.some(
    (c) => clean === c.route || clean.startsWith(`${c.route}/`),
  )
}

export function getOfflineCandidate(keyOrRoute: string): OfflineCandidate | undefined {
  return OFFLINE_FIRST_CANDIDATES.find(
    (c) => c.key === keyOrRoute || c.route === keyOrRoute || keyOrRoute.startsWith(`${c.route}/`),
  )
}

/**
 * Roadmap §26 — Anti-staleness safeguard.
 * Stale cached legal information must never be represented as current primary law.
 */
export const OFFLINE_LEGAL_STALENESS_WARNING =
  'Cached legal information may not reflect the latest statutory amendments, notifications, or judicial precedents. Always verify against current official primary sources.'

export interface LiveSourceStatus {
  status: 'online' | 'cached-offline' | 'unavailable'
  sourceName: string
  lastRetrievedText: string
  isOnline: boolean
  warning?: string
}

/**
 * Roadmap §26 — Explicit live-source differentiation.
 * Clearly differentiates:
 * 1. Online source (live)
 * 2. Cached offline copy with last retrieved timestamp and staleness warning
 * 3. Unavailable state when offline without local cache
 */
export function formatLiveSourceStatus(options: {
  isOnline?: boolean
  lastRetrieved?: string | number | Date | null
  sourceName?: string
}): LiveSourceStatus {
  const online = options.isOnline ?? isOnline()
  const sourceName = options.sourceName || 'Primary legal authority'

  let lastRetrievedText = 'Not recorded'
  if (options.lastRetrieved) {
    const date = new Date(options.lastRetrieved)
    if (!isNaN(date.getTime())) {
      lastRetrievedText = date.toISOString().split('T')[0]
    }
  }

  if (online) {
    return {
      status: 'online',
      sourceName,
      lastRetrievedText: lastRetrievedText !== 'Not recorded' ? lastRetrievedText : 'Live',
      isOnline: true,
    }
  }

  if (options.lastRetrieved) {
    return {
      status: 'cached-offline',
      sourceName,
      lastRetrievedText,
      isOnline: false,
      warning: OFFLINE_LEGAL_STALENESS_WARNING,
    }
  }

  return {
    status: 'unavailable',
    sourceName,
    lastRetrievedText: 'Unavailable offline',
    isOnline: false,
    warning: 'Online source is unavailable offline. Reconnect to access current official records.',
  }
}
