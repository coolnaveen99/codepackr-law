import type { TopicContent } from './loadTopicContent'
import { bnsSectionById } from '../bns/sections'
import { bnssSectionById } from '../bnss/sections'
import { bsaSectionById } from '../bsa/sections'

type CodeKind = 'bns' | 'bnss' | 'bsa'

const bareCache: Partial<Record<CodeKind, Record<string, string>>> = {}

async function loadBareAct(kind: CodeKind): Promise<Record<string, string>> {
  if (bareCache[kind]) return bareCache[kind]!
  const mod =
    kind === 'bns'
      ? await import('../bns/bareAct.json')
      : kind === 'bnss'
        ? await import('../bnss/bareAct.json')
        : await import('../bsa/bareAct.json')
  const data = (mod.default ?? mod) as Record<string, string>
  bareCache[kind] = data
  return data
}

function codeLabel(kind: CodeKind) {
  if (kind === 'bns') return 'BNS'
  if (kind === 'bnss') return 'BNSS'
  return 'BSA'
}

function catalogSection(kind: CodeKind, sectionId: string) {
  if (kind === 'bns') return bnsSectionById(sectionId)
  if (kind === 'bnss') return bnssSectionById(sectionId)
  return bsaSectionById(sectionId)
}

export async function synthesizeCatalogSection(
  kind: CodeKind,
  sectionId: string,
): Promise<TopicContent | null> {
  const p = catalogSection(kind, sectionId)
  if (!p) return null

  const bare = await loadBareAct(kind)
  const text = bare[sectionId] || bare[String(Number(sectionId))] || ''
  const label = codeLabel(kind)

  const study = text.trim()
    ? text.trim()
    : `${p.title}\n\n${label} s. ${p.id}. Official text for this section is being added. Confirm India Code.`

  return {
    study,
  }
}
