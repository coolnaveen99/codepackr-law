import { useState, useEffect, useMemo } from 'react'
import {
  ArrowLeft,
  BookOpen,
  Scale,
  Sparkles,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Loader2,
  PenLine,
  Award,
  Link2,
  CheckCircle2,
} from 'lucide-react'
import type { LawSubjectMeta, LawTopic, CaseCitation } from '../../data/subjects'
import {
  getStudyBody,
  getLegalBrief,
  getWrittenSubmissions,
  type TopicContent,
} from '../../data/topics/loadTopicContent'
import { getTopicContent } from '../../content/ContentGateway'
import { Badge } from '../ui/Badge'
import { RelatedKnowledge } from '../knowledge/RelatedKnowledge'
import { RichLegalText } from '../knowledge/RichLegalText'
import { ModularStudyRenderer } from './ModularStudyRenderer'
import { knowledgeIdForTopic } from '../../data/knowledge'
import {
  setLastRead,
  markTopicCompleted,
  isTopicCompleted,
  getProgress,
} from '../../lib/progress'
import { ALL_JUDGMENTS } from '../../data/judgments'
import type { Judgment } from '../../data/judgments/types'

// FILE CONTINUES - SEE RESTORE
export function TopicDetail() { return null }
