export type JudgmentStatus = 'draft' | 'reviewed' | 'published'

export interface JudgmentProvision {
  actId: string
  actName: string
  provisionId: string
  section?: string
  article?: string
  title?: string
}

export interface JudgmentReasoning {
  heading: string
  explanation: string
}

export interface JudgmentReference {
  judgmentId?: string
  caseName: string
  citation?: string
  relationship?: string
}

export interface JudgmentMcq {
  id: string
  question: string
  options: [string, string, string, string]
  correctIndex: number
  explanation: string
}

export interface JudgmentSource {
  type: 'pdf' | 'url' | 'document'
  title?: string
  pdfPath?: string
  sourceUrl?: string
  pageCount?: number
  extractionMethod?: 'text' | 'ocr' | 'manual'
  verified?: boolean
}

export interface Judgment {
  id: string
  caseName: string
  shortName?: string
  court?: string
  jurisdiction?: string
  year?: number
  judgmentDate?: string
  citation?: string
  neutralCitation?: string
  bench?: string
  judges?: string[]
  subject: string
  topics: string[]
  tags: string[]
  summary: string
  facts: string[]
  issues: string[]
  arguments?: {
    appellant?: string[]
    respondent?: string[]
    otherParties?: string[]
  }
  provisions: JudgmentProvision[]
  reasoning: JudgmentReasoning[]
  decision: string
  holding?: string
  ratioDecidendi?: string
  obiterDicta?: string
  relatedCases?: JudgmentReference[]
  examPoints?: string[]
  mcqs?: JudgmentMcq[]
  source: JudgmentSource
  status: JudgmentStatus
}

export interface JudgmentProgress {
  judgmentId: string
  completedSections: string[]
  lastSection: string
  percent: number
}

export interface JudgmentFilters {
  subject?: string
  court?: string
  year?: number
  topic?: string
  provisionId?: string
  bookmarkedOnly?: boolean
}
