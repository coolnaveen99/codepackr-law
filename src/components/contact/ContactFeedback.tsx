import { useState, useRef, type FormEvent } from 'react'
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
  Loader2,
  Scale,
} from 'lucide-react'
import { submitContactMessage, DEFAULT_CONTACT_SCRIPT_URL } from '../../lib/contactService'
import { setHomeUrl } from '../../lib/urls'

const CATEGORIES = [
  'Feedback & General Inquiry',
  'Statutory Content & Section Accuracy',
  'Sanhita Concordance Suggestion (BNS / BNSS / BSA)',
  'Supreme Court Judgment Ratio Request',
  'AIBE or Judicial Services MCQ Question Idea',
  'Courtroom Drafting Format Request',
  'Report Visual Bug or Broken Link',
  'Security or Privacy Inquiry',
] as const

interface ContactFeedbackProps {
  onBackToHome?: () => void
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

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

  const hiddenFormRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()
    const trimmedName = name.trim() || 'Anonymous Scholar'

    if (!trimmedEmail) {
      setError('Please enter your email address so we can reply to your inquiry.')
      return
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setError('Please enter a valid email address (e.g. name@domain.com).')
      return
    }

    if (!trimmedMessage || trimmedMessage.length < 5) {
      setError('Please enter a message of at least 5 characters.')
      return
    }

    setLoading(true)

    const computedSubject = subject.trim()
      ? `[${category}] ${subject.trim()}`
      : `[${category}] Note from ${trimmedName}`

    // 1. Dual-dispatch via hidden iframe form submission for 100% browser compatibility
    if (hiddenFormRef.current) {
      hiddenFormRef.current.action = DEFAULT_CONTACT_SCRIPT_URL
      const nameInput = hiddenFormRef.current.elements.namedItem('name') as HTMLInputElement
      const emailInput = hiddenFormRef.current.elements.namedItem('email') as HTMLInputElement
      const subjectInput = hiddenFormRef.current.elements.namedItem('subject') as HTMLInputElement
      const categoryInput = hiddenFormRef.current.elements.namedItem('category') as HTMLInputElement
      const messageInput = hiddenFormRef.current.elements.namedItem('message') as HTMLTextAreaElement

      if (nameInput) nameInput.value = trimmedName
      if (emailInput) emailInput.value = trimmedEmail
      if (subjectInput) subjectInput.value = computedSubject
      if (categoryInput) categoryInput.value = category
      if (messageInput) messageInput.value = trimmedMessage

      try {
        hiddenFormRef.current.submit()
      } catch (iframeErr) {
        console.warn('Hidden iframe submit fallback warning:', iframeErr)
      }
    }

    // 2. Submit to Firebase Firestore & webhook fetch
    const result = await submitContactMessage({
      name: trimmedName,
      email: trimmedEmail,
      category,
      subject: subject.trim(),
      message: trimmedMessage,
    })

    setLoading(false)

    if (result.success) {
      setSubmittedId(result.id || 'rec-' + Date.now().toString(36))
    } else {
      setError(result.error || 'Failed to submit message. Please try again or email codepackr@gmail.com.')
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

  const mailtoFallback = `mailto:codepackr@gmail.com?subject=${encodeURIComponent(
    `[CodePackr Law] ${category}: ${subject || 'Feedback'}`
  )}&body=${encodeURIComponent(
    `Name: ${name || 'N/A'}\nEmail: ${email || 'N/A'}\nCategory: ${category}\n\nMessage:\n${message}`
  )}`

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4 animate-fade-in">
      {/* Hidden iframe & form for resilient Google Apps Script email dispatch */}
      <form
        ref={hiddenFormRef}
        method="POST"
        target="hidden-contact-law-iframe"
        style={{ display: 'none' }}
      >
        <input type="hidden" name="name" />
        <input type="hidden" name="email" />
        <input type="hidden" name="subject" />
        <input type="hidden" name="category" />
        <input type="hidden" name="source" value="law.codepackr.com" />
        <textarea name="message" style={{ display: 'none' }} />
      </form>
      <iframe
        name="hidden-contact-law-iframe"
        style={{ display: 'none' }}
        title="Hidden contact submission frame"
      />

      <div>
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Law Library</span>
        </button>
      </div>

      <div className="rounded-3xl border border-blue-500/20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-6 sm:p-10 shadow-lg shadow-blue-500/[0.03]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/70 dark:border-blue-900/80 mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Direct Support &amp; Editorial Reference</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 dark:text-white">
              Contact CodePackr Law
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Have suggestions for legal topics, spotted an amendment or citation discrepancy, or want a new exam simulator or Sanhita mapper added? Let us know — every message goes directly to our team.
            </p>
          </div>

          <div className="shrink-0 flex items-center sm:flex-col gap-2 sm:items-end">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer shadow-2xs"
              title="Copy email address"
            >
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>codepackr@gmail.com</span>
              {copiedEmail ? (
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-slate-400" />
              )}
            </button>
            <span className="text-[11px] text-slate-500 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              Firebase Firestore &amp; Email Sync
            </span>
          </div>
        </div>

        <div className="pt-6">
          {submittedId ? (
            <div className="py-10 px-4 text-center space-y-5 animate-fade-in">
              <div className="w-16 h-16 rounded-3xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Message Sent Successfully!
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Thank you for your feedback. We have securely saved your message in Firestore and alerted our editorial desk. If your note requires a reply, we will contact you at{' '}
                  <strong className="text-slate-900 dark:text-white">{email}</strong>.
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
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm cursor-pointer"
                >
                  Send Another Message
                </button>
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer"
                >
                  Back to Law Library
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold">Submission Notice</p>
                    <p className="mt-0.5 text-xs">{error}</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    placeholder="e.g. Adv. Sharma or Law Student"
                    disabled={loading}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition disabled:opacity-60"
                  />
                </div>

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
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (error) setError(null)
                    }}
                    placeholder="e.g. yourname@domain.com"
                    disabled={loading}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition disabled:opacity-60"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5 sm:col-span-1">
                  <label
                    htmlFor="contact-category"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                  >
                    Category
                  </label>
                  <select
                    id="contact-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    disabled={loading}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition disabled:opacity-60"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                  >
                    Subject Line <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Correction in BNSS s. 480 bail grounds or suggestion for CPC order 39"
                    disabled={loading}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition disabled:opacity-60"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <span className="text-[11px] text-slate-400">{message.length} characters</span>
                </div>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value)
                    if (error) setError(null)
                  }}
                  placeholder="Share details of your inquiry, suggested legal ratio, Sanhita update, or study tool request here..."
                  disabled={loading}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition leading-relaxed resize-y disabled:opacity-60"
                />
              </div>

              <div className="p-3.5 rounded-2xl border border-blue-200/60 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 text-xs leading-relaxed flex items-start gap-2.5 text-slate-600 dark:text-slate-400">
                <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900 dark:text-white">Privacy Guarantee:</strong> CodePackr Law executes 100% locally in your browser. Never submit privileged client communications, sensitive case documents, or private personal data in contact inquiries.
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 text-xs py-1 text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>
                    Sends directly to <strong>codepackr@gmail.com</strong>
                  </span>
                </div>
                <a
                  href={mailtoFallback}
                  className="hover:underline flex items-center gap-1 text-[11px] text-blue-700 dark:text-blue-400 shrink-0"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Direct Mailto</span>
                </a>
              </div>

              <button
                id="btn-submit-contact-form"
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20 hover:shadow-lg disabled:opacity-60 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Message to codepackr@gmail.com...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-5 space-y-2">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
            <Scale className="w-4 h-4 text-blue-600" />
            <span>Need Help with Legal Content?</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            All MCQs, flashcards, and notes are curated strictly for student study and exam preparation. If you notice an amendment or judicial clarification that should be updated, please submit the provision number above.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-5 space-y-2">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
            <Mail className="w-4 h-4 text-blue-600" />
            <span>Direct Email Fallback</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Prefer using your own desktop email client? Send your message directly to{' '}
            <a href="mailto:codepackr@gmail.com" className="text-blue-700 dark:text-blue-300 font-semibold hover:underline">
              codepackr@gmail.com
            </a>
            . We typically respond within 24 to 48 hours.
          </p>
        </div>
      </div>
    </div>
  )
}
