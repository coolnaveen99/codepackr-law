export type ToolCategory = 'mcq' | 'bare-acts' | 'study-aids' | 'reference'

export interface ToolMetadata {
  id: string
  slug: string
  name: string
  category: ToolCategory
  description: string
  keywords: string[]
  icon: string
  badge?: string
  priority: number
  featured?: boolean
}

export type LawSubject = 
  | 'all'
  | 'constitution'
  | 'bns' // Bharatiya Nyaya Sanhita (formerly IPC)
  | 'bnss' // Bharatiya Nagarik Suraksha Sanhita (formerly CrPC)
  | 'bsa' // Bharatiya Sakshya Adhiniyam (formerly Evidence)
  | 'cpc' // Civil Procedure Code
  | 'contract' // Law of Contract & Specific Relief
  | 'family' // Family Law
  | 'aibe-mock' // Full Composite Mock

export interface McqQuestion {
  id: string
  subject: LawSubject
  subjectLabel: string
  question: string
  options: [string, string, string, string]
  correctIndex: number // 0, 1, 2, 3
  explanation: string
  bareActSection?: string
  examSource?: string // e.g. "AIBE XVII", "DJS Prelims 2022"
  difficulty?: 'easy' | 'medium' | 'hard'
}

export interface SectionMapping {
  id: string
  actType: 'bns-ipc' | 'bnss-crpc' | 'bsa-iea'
  newAct: string
  newSection: string
  newTitle: string
  oldAct: string
  oldSection: string
  oldTitle: string
  keyChanges: string
  punishmentOrNotes?: string
  category: string
  highlight?: boolean
}

export interface LawFlashcard {
  id: string
  act: string
  sectionOrArticle: string
  title: string
  summary: string
  keyElements: string[]
  landmarkCase?: string
  tag: string
}

export interface LegalMaxim {
  id: string
  latin: string
  meaning: string
  literalTranslation: string
  application: string
  keyCaseOrSubject: string
}

export interface LandmarkCase {
  id: string
  caseName: string
  year: number
  citation?: string
  bench?: string
  subject: string
  ratioDecidendi: string
  significance: string
  keyArticlesOrSections: string[]
}
