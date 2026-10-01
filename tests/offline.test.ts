import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import {
  isOnline,
  subscribeConnectivity,
  registerServiceWorker,
  OFFLINE_FIRST_CANDIDATES,
  isOfflineFirstRoute,
  getOfflineCandidate,
  formatLiveSourceStatus,
  OFFLINE_LEGAL_STALENESS_WARNING,
} from '../src/lib/offline'

describe('Phase 21 — PWA / Offline (Roadmap §26)', () => {
  it('detects online state and supports connectivity subscription safely', () => {
    // In Node.js environment without browser navigator, defaults to true
    assert.equal(typeof isOnline(), 'boolean')

    // subscribeConnectivity returns an unsubscribe cleanup function
    const unsubscribe = subscribeConnectivity((_online) => {})
    assert.equal(typeof unsubscribe, 'function')
    unsubscribe()

    // registerServiceWorker executes safely in SSR/Node without throwing
    assert.doesNotThrow(() => {
      registerServiceWorker()
    })
  })

  it('registers all 8 roadmap §26 offline-first candidate categories', () => {
    const expectedKeys = [
      'mcqs',
      'flashcards',
      'maxims',
      'calculators',
      'saved-notes',
      'case-workspaces',
      'draft-scaffolds',
      'static-knowledge',
    ]

    assert.equal(OFFLINE_FIRST_CANDIDATES.length, 8)
    for (const key of expectedKeys) {
      const candidate = OFFLINE_FIRST_CANDIDATES.find((c) => c.key === key)
      assert.ok(candidate, `Missing candidate key: ${key}`)
      assert.ok(candidate.title.length > 0)
      assert.ok(candidate.description.length > 0)
      assert.ok(candidate.route.startsWith('/'))
      assert.equal(candidate.offlineReady, true)
    }
  })

  it('matches offline-first routes accurately', () => {
    // Exact routes
    assert.equal(isOfflineFirstRoute('/mcq'), true)
    assert.equal(isOfflineFirstRoute('/flashcards'), true)
    assert.equal(isOfflineFirstRoute('/maxims'), true)
    assert.equal(isOfflineFirstRoute('/tool/calculators'), true)
    assert.equal(isOfflineFirstRoute('/tool/research-workbench'), true)
    assert.equal(isOfflineFirstRoute('/tool/case-prep'), true)
    assert.equal(isOfflineFirstRoute('/tool/legal-draft-studio'), true)
    assert.equal(isOfflineFirstRoute('/subjects'), true)

    // Subpaths
    assert.equal(isOfflineFirstRoute('/subjects/constitutional-law'), true)
    assert.equal(isOfflineFirstRoute('/subjects/cpc/s-32'), true)

    // Clean query parameters and hashes
    assert.equal(isOfflineFirstRoute('/mcq?subject=crpc#q1'), true)

    // Non-offline or invalid routes
    assert.equal(isOfflineFirstRoute('/random-unknown-page'), false)
    assert.equal(isOfflineFirstRoute(''), false)
  })

  it('finds offline candidates by key or route', () => {
    const calcByKey = getOfflineCandidate('calculators')
    assert.ok(calcByKey)
    assert.equal(calcByKey?.route, '/tool/calculators')

    const subjectByRoute = getOfflineCandidate('/subjects/torts')
    assert.ok(subjectByRoute)
    assert.equal(subjectByRoute?.key, 'static-knowledge')

    assert.equal(getOfflineCandidate('non-existent'), undefined)
  })

  it('differentiates live online vs cached offline vs unavailable states', () => {
    // 1. Online state
    const onlineStatus = formatLiveSourceStatus({
      isOnline: true,
      sourceName: 'Supreme Court e-SCR',
    })
    assert.equal(onlineStatus.status, 'online')
    assert.equal(onlineStatus.isOnline, true)
    assert.equal(onlineStatus.warning, undefined)
    assert.equal(onlineStatus.sourceName, 'Supreme Court e-SCR')

    // 2. Cached offline state with last retrieved date
    const cachedStatus = formatLiveSourceStatus({
      isOnline: false,
      lastRetrieved: '2026-09-30T10:00:00.000Z',
      sourceName: 'India Code Bare Act',
    })
    assert.equal(cachedStatus.status, 'cached-offline')
    assert.equal(cachedStatus.isOnline, false)
    assert.equal(cachedStatus.lastRetrievedText, '2026-09-30')
    assert.equal(cachedStatus.warning, OFFLINE_LEGAL_STALENESS_WARNING)

    // 3. Unavailable state without cached copy
    const unavailableStatus = formatLiveSourceStatus({
      isOnline: false,
      lastRetrieved: null,
      sourceName: 'Live High Court Cause List',
    })
    assert.equal(unavailableStatus.status, 'unavailable')
    assert.equal(unavailableStatus.isOnline, false)
    assert.ok(unavailableStatus.warning?.includes('unavailable offline'))
  })

  it('enforces anti-staleness warning preventing stale cache from posing as current law', () => {
    assert.ok(
      OFFLINE_LEGAL_STALENESS_WARNING.includes('not reflect the latest statutory amendments'),
      'Warning must emphasize that cached legal data may not reflect recent amendments',
    )
    assert.ok(
      OFFLINE_LEGAL_STALENESS_WARNING.includes('Always verify against current official primary sources'),
      'Warning must mandate verification against official primary sources',
    )
  })

  it('verifies Web App Manifest structure and theme tokens', () => {
    const manifestPath = path.resolve('public/manifest.webmanifest')
    assert.ok(fs.existsSync(manifestPath), 'manifest.webmanifest must exist in public/')

    const raw = fs.readFileSync(manifestPath, 'utf8')
    const manifest = JSON.parse(raw)

    assert.equal(manifest.name, 'Codepackr Law')
    assert.equal(manifest.short_name, 'Codepackr Law')
    assert.equal(manifest.start_url, '/')
    assert.equal(manifest.scope, '/')
    assert.equal(manifest.display, 'standalone')
    assert.equal(manifest.theme_color, '#8B1E3F') // Seal burgundy
    assert.ok(Array.isArray(manifest.icons) && manifest.icons.length > 0)
    assert.ok(manifest.icons.some((i: { src: string }) => i.src === '/favicon.svg'))
  })

  it('verifies Service Worker shell caching contract', () => {
    const swPath = path.resolve('public/sw.js')
    assert.ok(fs.existsSync(swPath), 'sw.js must exist in public/')

    const swContent = fs.readFileSync(swPath, 'utf8')
    assert.ok(swContent.includes("const CACHE = 'cp-law-shell-v1'"))
    assert.ok(swContent.includes("const SHELL = ['/', '/index.html', '/manifest.webmanifest', '/favicon.svg']"))
    assert.ok(swContent.includes("self.addEventListener('install'"))
    assert.ok(swContent.includes("self.addEventListener('activate'"))
    assert.ok(swContent.includes("self.addEventListener('fetch'"))
    assert.ok(swContent.includes('skipWaiting'))
    assert.ok(swContent.includes('clients.claim'))
  })
})
