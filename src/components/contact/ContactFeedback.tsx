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
  'New Subject or Bare Act Request',
  'New Exam / Study Tool Idea',
  'Security or Privacy',
] as const

interface ContactFeedbackProps {
  onBackToHome?: () => void
}

export function ContactFeedback({ onBackToHome }: ContactFeedbackProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [category, setCategory] = useState<string>(CATEGORIES[0])
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submittedId, setSubmittedId] = useState<string | null>(null)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }

    if (!message.trim() || message.trim().length < 5) {
      setError('Please enter a message of at least 5 characters.')
      return
    }

    setLoading(true)

    const result = await submitContactMessage({
      name,
      email,
      category,
      subject,
      message,
    })

    setLoading(false)

    if (result.success && result.id) {
      setSubmittedId(result.id)
    } else {
      setError(result.error || 'Failed to submit message. Please try again.')
    }
  }

  const handleReset = () => {
    setName('')
    setEmail('')
    setCategory(CATEGORIES[0])
    setSubject('')
    setMessage('')
    setError(null)
    setSubmittedId(null)
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('codepackr@gmail.com')
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch {
      // ignore
    }
  }

  const handleBack = () => {
    if (onBackToHome) {
      onBackToHome()
    } else {
      setHomeUrl()
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      {/* Back button */}
      <div>
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Hero Header */}
      <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/70 dark:border-blue-900/80 mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Direct Support & Suggestions</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Contact & Feedback
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Have suggestions for legal topics, spotted an inaccurate provision or typo, or want a new exam tool
              added to CodePackr Law? Let us know — every message goes directly to our team.
            </p>
          </div>

          <div className="shrink-0 flex items-center sm:flex-col gap-2 sm:items-end">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
              title="Copy email address"
            >
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>codepackr@gmail.com</span>
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
            </button>
            <span className="text-[11px] text-slate-500 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              Direct Firebase Firestore sync
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="pt-6">
          {submittedId ? (
            /* Success View */
            <div className="py-8 px-4 text-center space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-3xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Message Sent Successfully!
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Thank you for your feedback. We have securely saved your message in Firestore. If your note requires a
                  reply, we will contact you at <strong className="text-slate-900 dark:text-white">{email}</strong>.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-mono bg-slate-100 dark:bg-slate-800 px-3.5 py-1.5 rounded-xl text-slate-600 dark:text-slate-300">
                <span>Reference ID:</span>
                <span className="font-semibold text-blue-700 dark:text-blue-300">#{submittedId}</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm"
                >
                  Send Another Message
                </button>
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                >
                  Back to Home
                </button>
              </div>
            </div>
          ) : (
            /* Form View */
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold">Submission Problem</p>
                    <p className="mt-0.5 text-xs">{error}</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                  >
                    Your Name <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Adv. Sharma, or Law Student"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                  >
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Topic / Category */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-category"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                  >
                    Topic / Category
                  </label>
                  <select
                    id="contact-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                  >
                    Subject <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Suggestion for BNSS trial flow tool"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <span className="text-[11px] text-slate-400">
                    {message.length} characters
                  </span>
                </div>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details of your question, suggestion, bug report, or request here..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition leading-relaxed"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-500 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>Submissions are stored privately in Firebase for our editorial review.</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-sm shadow-blue-600/20"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-5 space-y-2">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>Need Help with Legal Content?</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            All MCQs, flashcards, and notes are curated strictly for student study and exam preparation. If you notice an
            amendment or judicial clarification that should be updated, please submit the provision number above.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-5 space-y-2">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
            <Mail className="w-4 h-4 text-blue-600" />
            <span>Direct Email Fallback</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Prefer using your own email client? Send your message directly to{' '}
            <a
              href="mailto:codepackr@gmail.com"
              className="text-blue-700 dark:text-blue-300 font-semibold hover:underline"
            >
              codepackr@gmail.com
            </a>
            . We typically respond within 24 to 48 hours.
          </p>
        </div>
      </div>
    </div>
  )
}
