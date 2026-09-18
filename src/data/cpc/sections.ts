export type CpcFlag = 'exam' | 'repealed' | 'omitted'

export type CpcSection = {
  id: string
  title: string
  cluster: string
  gist: string
  flags: CpcFlag[]
  related: string[]
}

export const CPC_SECTIONS: CpcSection[] = [
  { id: '1', title: 'Short title, commencement and extent', cluster: 'Preliminary', gist: 'CPC s. 1 — Short title, commencement and extent.', flags: [], related: [] },
  { id: '2', title: 'Definitions', cluster: 'Preliminary', gist: 'CPC s. 2 — Definitions.', flags: ['exam'], related: [] },
  { id: '9', title: 'Courts to try all civil suits unless barred', cluster: 'Jurisdiction and res judicata', gist: 'CPC s. 9 — Courts to try all civil suits unless barred.', flags: ['exam'], related: [] },
  { id: '10', title: 'Stay of suit', cluster: 'Jurisdiction and res judicata', gist: 'CPC s. 10 — Stay of suit.', flags: ['exam'], related: [] },
  { id: '11', title: 'Res judicata', cluster: 'Jurisdiction and res judicata', gist: 'CPC s. 11 — Res judicata.', flags: ['exam'], related: [] },
]

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
