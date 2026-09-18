import React from 'react'
import { ShieldCheck, Scale, ExternalLink } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 mt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-2xl bg-blue-600 text-white flex items-center justify-center">
                <Scale className="w-4 h-4" />
              </div>
              <span className="text-slate-900 dark:text-white">
                <span className="font-extrabold">CodePackr</span>{' '}
                <span className="font-display italic text-lg font-semibold text-blue-700 dark:text-blue-300">Law</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              100% Client-Side Indian Law Learning Tools for AIBE, State Judicial Services, Bare Act revisions, and new criminal laws.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-3 py-1.5 rounded-xl border border-blue-200 dark:border-blue-900">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Zero-Telemetry Privacy Guarantee</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
              Curated Law Tools
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>• AIBE & Judiciary MCQ Practice</li>
              <li>• BNS ↔ IPC & Criminal Laws Mapper</li>
              <li>• Important Section Flashcards</li>
              <li>• AIBE / Judiciary Exam Timer</li>
              <li>• Latin Legal Maxims Dictionary & Quiz</li>
              <li>• Landmark Supreme Court Judgments</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
              Codepackr Family
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href="https://www.codepackr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition inline-flex items-center gap-1.5"
                >
                  <span>Codepackr Dev Suite (Parent)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://study.codepackr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition inline-flex items-center gap-1.5"
                >
                  <span>Codepackr Study (Indigo)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://finance.codepackr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition inline-flex items-center gap-1.5"
                >
                  <span>Codepackr Finance (Emerald)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>© 2026 Codepackr Law. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Client-side educational utility. Bare Act references are for study preparation and academic revision.
          </p>
        </div>
      </div>
    </footer>
  )
}
