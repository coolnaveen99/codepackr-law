import test from 'node:test'
import assert from 'node:assert/strict'
import { PRIMARY_SOURCES } from '../src/data/primarySources'
import { filterPrimarySources, getPrimarySourceStats } from '../src/lib/primarySourceFinder'

test('Phase 15 source directory exposes official-first hierarchy', () => {
  assert.ok(PRIMARY_SOURCES.length >= 8)
  assert.ok(PRIMARY_SOURCES.some((source) => source.tier === 1))
  assert.ok(PRIMARY_SOURCES.some((source) => source.tier === 2))
  assert.ok(PRIMARY_SOURCES.every((source) => source.url.startsWith('https://')))
})

test('Phase 15 search matches authority and Act/section metadata', () => {
  const byAuthority = filterPrimarySources(PRIMARY_SOURCES, { query: 'official statute database' })
  assert.ok(byAuthority.some((source) => source.id === 'india-code'))

  const byAct = filterPrimarySources(PRIMARY_SOURCES, { query: 'cause lists' })
  assert.ok(byAct.some((source) => source.id === 'sci' || source.id === 'ecourts'))
})

test('Phase 15 tier and category filters narrow deterministically', () => {
  const official = filterPrimarySources(PRIMARY_SOURCES, { tier: 1 })
  assert.ok(official.length > 0)
  assert.ok(official.every((source) => source.tier === 1))

  const courts = filterPrimarySources(PRIMARY_SOURCES, { category: 'court' })
  assert.deepEqual(courts.map((source) => source.id), ['sci'])
})

test('Phase 15 verification stats reflect link status only', () => {
  const stats = getPrimarySourceStats(PRIMARY_SOURCES)
  assert.equal(stats.total, PRIMARY_SOURCES.length)
  assert.equal(stats.linkChecked, PRIMARY_SOURCES.length)
  assert.ok(stats.officialFirst >= 2)
})
