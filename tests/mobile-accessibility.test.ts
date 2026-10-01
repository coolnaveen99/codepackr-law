import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const css = readFileSync(new URL('../src/mobile-tokens.css', import.meta.url), 'utf8')
const topic = readFileSync(new URL('../src/components/subjects/TopicDetail.tsx', import.meta.url), 'utf8')
const app = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8')
const nav = readFileSync(new URL('../src/components/MobileBottomNav.tsx', import.meta.url), 'utf8')

test('Phase 20 baseline provides 44px mobile controls and visible keyboard focus', () => {
  assert.match(css, /--cp-touch-target:\s*44px/)
  assert.match(css, /@media \(max-width: 639px\)/)
  assert.match(css, /min-height:\s*var\(--cp-touch-target\)/)
  assert.match(css, /:focus-visible/)
  assert.match(css, /outline:\s*3px solid/)
})

test('Phase 20 supports reduced motion and safe mobile bottom navigation', () => {
  assert.match(css, /prefers-reduced-motion/)
  assert.match(css, /env\(safe-area-inset-bottom/)
  assert.match(app, /cp-mobile-main-pad/)
  assert.match(nav, /min-h-\[44px\]/)
})

test('Phase 20 converts the existing comparison table to a narrow-screen card layout', () => {
  assert.match(topic, /cp-responsive-table/)
  assert.match(topic, /data-label="Parameter"/)
  assert.match(topic, /data-label=\{item\.left\}/)
  assert.match(topic, /data-label=\{item\.right\}/)
})
