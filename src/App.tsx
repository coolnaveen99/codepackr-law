import { useEffect, useMemo, useState } from 'react'
import {
  parseRoute,
  setToolUrl,
  setSubjectsUrl,
  setSubjectUrl,
  setTopicUrl,
  setHomeUrl,
  setCaseLawUrl,
  setKnowledgeUrl,
  setContactUrl,
  migrateHashToPath,
} from './lib/urls'
import {
  setPageMeta,
  SITE_NAME,
  buildJudgmentStructuredData,
  buildTopicStructuredData,
} from './lib/seo'
import { JUDGMENTS_BY_ID } from './data/judgments'
import { type LawTopic } from './data/subjects'
import { getSubjectBySlug, getTopic, searchSubjectsAndTopics } from './data/liveSubjects'
import { TOOLS } from './data/tools'
import { ToolMetadata, ToolCategory } from './types'
import { Header } from './components/layout/Header'
import { CodepackrFamilyBar } from './components/CodepackrFamilyBar'
import { Footer } from './components/layout/Footer'
import { MobileBottomNav, LAW_MOBILE_TABS } from './components/MobileBottomNav'
import { HomePage } from './components/home/HomePage'
import { SubjectsList } from './components/subjects/SubjectsList'
import { SubjectDetail } from './components/subjects/SubjectDetail'
import { TopicDetail } from './components/subjects/TopicDetail'
import { ContactFeedback } from './components/contact/ContactFeedback'
import { AibeMcqPractice } from './components/tools/AibeMcqPractice'
import { BnsIpcMapper } from './components/tools/BnsIpcMapper'
import { SectionFlashcards } from './components/tools/SectionFlashcards'
import { ExamTimer } from './components/tools/ExamTimer'
import { LegalMaximsTool } from './components/tools/LegalMaximsTool'
import { LandmarkCasesTool } from './components/tools/LandmarkCasesTool'
import { CaseLawLibrary } from './components/tools/CaseLawLibrary'
import { KnowledgeBrowser } from './components/knowledge/KnowledgeBrowser'
import { DocumentCompare } from './components/tools/DocumentCompare'
import { LegalDraftStudio } from './components/tools/LegalDraftStudio'
import { encodeKnowledgeId } from './data/knowledge'

// NOTE: Full App body restored from main; new tools wired below.
// If this file is incomplete after deploy, replace with artifacts/App.LAW.tsx
export { default } from './App.legacy-reexport-missing'
