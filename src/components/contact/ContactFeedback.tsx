import { useState, type FormEvent } from 'react'
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Copy,
  Check,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  HelpCircle,
} from 'lucide-react'
import { submitContactMessage } from '../../lib/contactService'
import { setHomeUrl } from '../../lib/urls'

const CATEGORIES = [
  'Feedback & General',
  'Bug Report',
  'Legal Content / Section Accuracy',
  'New Subject or Statute Request',
  'New Exam / Study Tool Idea',
  'Security or Privacy',
] as const
