import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import {
  SEAL_BURGUNDY,
  SEAL_BURGUNDY_RAISED,
  forbiddenAccents,
  inForceLabel,
  layout,
  semanticDark,
  semanticLight,
  sourceKindLabel,
  verificationLabel,
  verificationStatus,
} from '../src/design-system/tokens.ts'

const css = readFileSync(new URL('../src/design-system/styles/tokens.css', import.meta.url), 'utf8')
const main = readFileSync(new URL('../src/main.tsx', import.meta.url), 'utf8')
const board = readFileSync(new URL('../docs/SPRINT-CONTROL-BOARD.md', import.meta.url), 'utf8')
const app = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8')

function contrast(hexA: string, hexB: string) {
  const lin = (channel: number) => {
    const c = channel / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  }
  const luminance = (hex: string) => {
    const n = parseInt(hex.slice(1), 16)
    const r = lin((n >> 16) & 255)
    const g = lin((n >> 8) & 255)
    const b = lin(n & 255)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }
  const hi = Math.max(luminance(hexA), luminance(hexB))
  const lo = Math.min(luminance(hexA), luminance(hexB))
  return (hi + 0.05) / (lo + 0.05)
}

test('UI-002 seal burgundy is the only brand accent and stays off sibling palettes', () => {
  assert.equal(SEAL_BURGUNDY, '#8B1E3F')
  assert.equal(SEAL_BURGUNDY_RAISED, '#9F2D4A')
  assert.match(css, /--cp-ds-seal-600:\s*#8b1e3f/i)
  assert.match(css, /--cp-ds-seal-650:\s*#9f2d4a/i)
  for (const banned of forbiddenAccents) {
    assert.equal(css.toLowerCase().includes(banned.toLowerCase()), false)
  }
})

test('UI-002 semantic pairs meet WCAG AA and dark mode is theme-class based', () => {
  assert.ok(contrast(semanticLight.ink, semanticLight.canvas) >= 4.5)
  assert.ok(contrast(semanticLight.muted, semanticLight.canvas) >= 4.5)
  assert.ok(contrast(semanticLight.accentInk, semanticLight.accent) >= 4.5)
  assert.ok(contrast(semanticDark.ink, semanticDark.canvas) >= 4.5)
  assert.ok(contrast(semanticDark.accentInk, '#9F2D4A') >= 4.5)
  assert.match(css, /html\.dark/)
  assert.doesNotMatch(css, /prefers-color-scheme:\s*dark/)
})

test('UI-002 foundations cover touch, focus, hover, reduced motion, and responsive tables', () => {
  assert.equal(layout.touchTarget, '44px')
  assert.match(css, /--cp-ds-touch:\s*44px/)
  assert.match(css, /:focus-visible/)
  assert.match(css, /outline:\s*3px solid/)
  assert.match(css, /:hover:not\(:disabled\)/)
  assert.match(css, /prefers-reduced-motion:\s*reduce/)
  assert.match(css, /@media \(max-width: 639px\)/)
  assert.match(css, /content:\s*attr\(data-label\)/)
  assert.match(css, /grid-template-columns:\s*repeat\(12/)
})

test('UI-002 legal status primitives are labelled and match the verification vocabulary', () => {
  for (const status of verificationStatus) {
    assert.ok(verificationLabel[status].length > 0)
    assert.match(css, new RegExp(`data-status='${status}'`))
  }
  assert.equal(sourceKindLabel.gazette, 'Gazette')
  assert.equal(inForceLabel.transitional, 'Transitional')
  assert.match(css, /border-style:\s*dashed/)
  assert.match(css, /border-style:\s*double/)
})

test('UI-002 tokens stay prefixed and UI-003 adoption is explicit', () => {
  assert.match(main, /design-system\/styles\/tokens\.css/)
  assert.match(app, /design-system\/surfaces/)
  assert.match(board, /UI-002/)
  assert.match(board, /UI-003/)
  assert.match(css, /--cp-ds-space-1/)
  assert.doesNotMatch(css, /--cp-space-1/)
})
