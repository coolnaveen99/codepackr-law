import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const header = readFileSync(new URL('../src/components/layout/Header.tsx', import.meta.url), 'utf8')
const app = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../src/index.css', import.meta.url), 'utf8')

test('shell navigation closes all overlays before desktop navigation actions', () => {
  assert.match(header, /const closeOverlays = () =>/)
  assert.match(header, /const runNavigationAction = (action: () => void) =>/)
  assert.match(header, /onClick={() => runNavigationAction(onHome)}/)
  assert.match(header, /onClick={() => runNavigationAction(item.action)}/)
  assert.match(header, /onClick={() => runNavigationAction(onOpenKnowledge)}/)
  assert.match(header, /onClick={() => runNavigationAction(onOpenCaseLaw)}/)
})

test('desktop collapse reserves content space and mobile navigation is viewport anchored', () => {
  assert.match(app, /sidebarCollapsed ? 'lg:pl-[6.75rem]' : 'lg:pl-[18.5rem]'/)
  assert.match(css, /.cp-law-mobile-nav { position: fixed; top: 6.125rem;/)
  assert.match(css, /.cp-law-sidebar.is-collapsed { width: 4.75rem; }/)
})

test('search and mobile navigation are mutually exclusive state surfaces', () => {
  assert.match(header, /const openSearch = () => {s*setMobileNavOpen(false)s*setSearchOpen(true)/)
  assert.match(header, /const runMobileAction = (action: () => void) => {s*runNavigationAction(action)/)
})
