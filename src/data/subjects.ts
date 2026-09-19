/**
 * Codepackr Law — Subject & Topic registry
 *
 * Hierarchy: Subjects → Topics (themes / articles / doctrines) → Practice
 * Petition formats are a SEPARATE subject: petition-formats
 * Full notes: src/data/topics/<slug>/<id>.ts (lazy-loaded)
 */

import { BNS_SECTIONS } from './bns/sections'
import { BNSS_SECTIONS } from './bnss/sections'
import { BSA_SECTIONS } from './bsa/sections'
import { ARTICLES } from './constitution/articles'

export type SubjectPriority = 'high' | 'medium' | 'low'

export type TopicType = 'theme' | 'article' | 'section' | 'chapter' | 'doctrine' | 'act' | 'format'

export interface CaseCitation {
  name: string
  year?: number
  citation?: string
  holding: string
  relevance?: string
}

export interface LawTopic {
  id: string
  name: string
  type: TopicType
  range?: string
  note?: string
  keywords?: string[]
  highYield?: boolean
  cluster?: string
  short?: string
  detailed?: string
  cases?: CaseCitation[]
  bareActPointers?: string[]
  examTips?: string[]
}

export interface LawSubjectMeta {
  id: string
  slug: string
  name: string
  shortName: string
  priority: SubjectPriority
  aibeQuestions: number
  bareActs: string[]
  description: string
  keywords: string[]
  icon: string
  topics: LawTopic[]
  mcqSubjectKey?: string
}

function catalogSectionTopics(
  sections: { id: string; title: string; cluster: string; flags: string[]; ipc?: string; legacy?: string }[],
  code: string,
): LawTopic[] {
  return sections.map((s) => ({
    id: `s-${s.id.toLowerCase()}`,
    name: `Section ${s.id} — ${s.title}`,
    type: 'section' as const,
    range: `s. ${s.id}`,
    cluster: s.cluster,
    note: s.flags.includes('new')
      ? 'New provision'
      : s.ipc
        ? `IPC ${s.ipc}`
        : s.legacy
          ? `old ${s.legacy}`
          : undefined,
    keywords: [
      `section ${s.id}`,
      `${code} ${s.id}`,
      s.title.toLowerCase().slice(0, 48),
    ],
    highYield: s.flags.includes('exam'),
  }))
}

function bnsSectionTopics(): LawTopic[] {
  return catalogSectionTopics(BNS_SECTIONS, 'bns')
}

function bnssSectionTopics(): LawTopic[] {
  return catalogSectionTopics(BNSS_SECTIONS, 'bnss')
}

function bsaSectionTopics(): LawTopic[] {
  return catalogSectionTopics(BSA_SECTIONS, 'bsa')
}

const CONSTITUTION_HIGH_YIELD = new Set([
  '12', '13', '14', '15', '16', '19', '21', '21A', '32', '136', '141', '226', '352', '356', '368', '370',
])

function constitutionArticleTopics(): LawTopic[] {
  return ARTICLES.map((a) => ({
    id: `art-${a.id.toLowerCase()}`,
    name: a.omitted ? `Article ${a.id} — Omitted` : `Article ${a.id} — ${a.title}`,
    type: 'article' as const,
    range: `Art ${a.id}`,
    cluster: a.cluster,
    note: a.omitted ? 'Omitted' : undefined,
    keywords: [`article ${a.id}`, a.title.toLowerCase().slice(0, 48)],
    highYield: CONSTITUTION_HIGH_YIELD.has(a.id),
  }))
}

// FILE CONTINUES - use import from restore
// This is a broken intermediate - DO NOT USE
export const SUBJECTS: LawSubjectMeta[] = []
export const PRIORITY_ORDER: SubjectPriority[] = ['high', 'medium', 'low']
export const PRIORITY_LABELS: Record<SubjectPriority, string> = {
  high: 'High Priority (AIBE weightage)',
  medium: 'Medium Priority',
  low: 'Lower Weightage',
}
