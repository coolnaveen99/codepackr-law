import { ShieldCheck, Scale, ExternalLink, MessageSquare } from 'lucide-react'

interface FooterProps {
  onOpenContact?: () => void
}

export function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 mt-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="size-8 rounded-lg bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 text-white flex items-center justify-center">
                <Scale className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-slate-900 dark:text-white">
                CodePackr <span className="text-amber-700 dark:text-amber-400">Law</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
              Digital law library &amp; practice reference for AIBE, Judiciary, and advocates — statutory treatises,
              extracted case law ratios, and chamber drafting.
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 px-2.5 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              Stays on this device · free educational core
            </span>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Study</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>All subjects</li>
              <li>Constitution</li>
              <li>BNS</li>
              <li>BNSS</li>
              <li>BSA</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Feedback &amp; Support</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                {onOpenContact ? (
                  <button
                    type="button"
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-1.5 hover:text-amber-700 dark:hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Contact &amp; Feedback
                  </button>
                ) : (
                  <span className="inline-flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    Contact &amp; Feedback
                  </span>
                )}
              </li>
              <li>
                <a href="mailto:codepackr@gmail.com" className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
                  codepackr@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Codepackr family</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="https://www.codepackr.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
                  Codepackr Dev Suite <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://study.codepackr.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
                  Codepackr Study <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://finance.codepackr.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
                  Codepackr Finance <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Codepackr Law. All rights reserved.</p>
          <p className="text-center sm:text-right max-w-md">
            Educational utility — not legal advice. Free educational core; no proprietary headnotes. Prefer official
            sources.
          </p>
        </div>
      </div>
    </footer>
  )
}
