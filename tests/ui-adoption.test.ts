import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { resolveUiTask, surfaceMeasure, UI_TASKS } from '../src/design-system/surfaces.ts'

const app = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../src/design-system/styles/adoption.css', import.meta.url), 'utf8')
const theme = readFileSync(new URL('../src/index.css', import.meta.url), 'utf8')

test('UI-003 to UI-013 each have a surface and the app adopts them', () => {
  assert.equal(UI_TASKS.length, 11)
  assert.equal(resolveUiTask({ type: 'home' }), 'UI-004')
  assert.equal(resolveUiTask({ type: 'topic' }), 'UI-005')
  assert.equal(resolveUiTask({ type: 'case-law' }), 'UI-006')
  assert.equal(resolveUiTask({ type: 'tool', slug: 'research-workbench' }), 'UI-007')
  assert.equal(resolveUiTask({ type: 'tool', slug: 'citation-verifier' }), 'UI-008')
  assert.equal(resolveUiTask({ type: 'tool', slug: 'judgment-analyzer' }), 'UI-009')
  assert.equal(resolveUiTask({ type: 'tool', slug: 'case-prep' }), 'UI-010')
  assert.equal(resolveUiTask({ type: 'tool', slug: 'legal-draft-studio' }), 'UI-011')
  assert.equal(resolveUiTask({ type: 'tool', slug: 'filing-checklists' }), 'UI-012')
  assert.equal(resolveUiTask({ type: 'tool', slug: 'practice-dashboard' }), 'UI-013')
  assert.equal(resolveUiTask({ type: 'contact' }), 'UI-013')
  assert.equal(surfaceMeasure('UI-007'), 'workspace')
  assert.equal(surfaceMeasure('UI-004'), 'workspace')
  assert.match(app, /cp-chambers/)
  assert.match(app, /data-ui-task=\{uiTask\}/)
  assert.match(css, /data-ui-measure='workspace'/)
  assert.match(theme, /#8b1e3f/)
  assert.doesNotMatch(theme, /#2563eb/i)
  assert.doesNotMatch(theme, /#10b981/i)
})
