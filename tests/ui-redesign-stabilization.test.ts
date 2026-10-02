import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const header = readFileSync(new URL('../src/components/layout/Header.tsx', import.meta.url), 'utf8')
const app = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../src/index.css', import.meta.url), 'utf8')
const adoption = readFileSync(new URL('../src/design-system/styles/adoption.css', import.meta.url), 'utf8')
const packageJson = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))

test('UI-RD shell: overlays have deterministic mutual exclusion and scroll locking', () => {
  assert.match(header, /setSearchOpen\(false\)/)
  assert.match(header, /setMobileNavOpen\(false\)\s*\n\s*setSearchOpen\(true\)/)
  assert.match(header, /document\.body\.classList\.toggle\('nav-open', overlayOpen\)/)
  assert.match(header, /closeSearchAndRestoreFocus/)
  assert.match(header, /mobileNavPanelRef/)
})

test('UI-RD shell: search and mobile navigation expose modal semantics and keyboard closure', () => {
  assert.match(header, /role="dialog" aria-modal="true" aria-label="CodePackr Law navigation"/)
  assert.match(header, /role="dialog" aria-modal="true" aria-label="Global search"/)
  assert.match(header, /event\.key === 'Escape'/)
  assert.match(header, /event\.key !== 'Tab'/)
})

test('UI-RD responsive: shell removes the desktop rail and clips page overflow', () => {
  assert.match(css, /@media \(max-width: 1023px\)[\s\S]*--cp-rail: 0px/)
  assert.match(adoption + css, /overflow-x: clip/)
  assert.match(css, /cp-law-search-suggestions \{ grid-template-columns: 1fr; \}/)
})

test('UI-RD route integrity: App keeps explicit route-to-surface mappings', () => {
  for (const marker of [
    "route.type === 'home'",
    "route.type === 'subjects'",
    "route.type === 'subject'",
    "route.type === 'topic'",
    "route.type === 'tool'",
    "route.type === 'case-law'",
    "route.type === 'knowledge'",
    "route.type === 'contact'",
  ]) assert.ok(app.includes(marker), marker)
})

test('UI-RD performance: tool routes remain lazy-loaded and CI retains production gates', () => {
  assert.match(app, /lazy\(\(\) => import\(/)
  assert.equal(packageJson.scripts.build.includes('vite build'), true)
  assert.equal(packageJson.scripts.test.includes('tests/*.test.ts'), true)
})
