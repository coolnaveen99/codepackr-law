import type { CpcSection } from './types'
import { CPC_SECTIONS_A } from './sections-a'
import { CPC_SECTIONS_B } from './sections-b'

export type { CpcFlag, CpcSection } from './types'

export const CPC_SECTIONS: CpcSection[] = [...CPC_SECTIONS_A, ...CPC_SECTIONS_B]

const BY_ID = new Map(CPC_SECTIONS.map((s) => [s.id.toLowerCase(), s]))

export function cpcSectionById(id: string) {
  return BY_ID.get(id.toLowerCase())
}

export function cpcSectionTopicId(sectionId: string) {
  return `s-${sectionId.toLowerCase()}`
}

export function cpcSectionIdFromTopicId(topicId: string): string | null {
  const match = topicId.match(/^s-(\d+[a-z]*)$/i)
  return match?.[1] ?? null
}
