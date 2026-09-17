import { useState } from 'react'

export default function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
        <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://www.codepackr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              >
                ← Codepackr Dev Suite
              </a>
              <h1 className="font-semibold text-lg tracking-tight">
                <span className="text-blue-600 dark:text-blue-400">Codepackr</span> Law
              </h1>
            </div>
            <button
              onClick={() => setDark(!dark)}
              className="text-sm px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {dark ? 'Light' : 'Dark'}
            </button>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-12">
          <section className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              Indian Law Learning Tools
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              AIBE & Judiciary MCQs, Bare Act practice, flashcards and more — 100% client-side and private.
            </p>
          </section>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'AIBE MCQ Practice', desc: 'Subject-wise and full mock tests for AIBE' },
              { title: 'BNS / BNSS / BSA Banks', desc: 'New criminal law MCQs and section practice' },
              { title: 'Constitution MCQs', desc: 'High-weight Constitutional Law questions' },
              { title: 'Section Flashcards', desc: 'Important Bare Act sections for quick revision' },
              { title: 'BNS ↔ IPC Mapper', desc: 'Quick mapping between old and new criminal laws' },
              { title: 'Exam Timer', desc: 'Timed practice matching AIBE / Judiciary format' },
            ].map((tool) => (
              <div
                key={tool.title}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 hover:border-blue-300 dark:hover:border-blue-700 transition cursor-pointer"
              >
                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">{tool.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{tool.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-12">
            Scaffold ready. Build tools using the rules in AI_INSTRUCTIONS.md and .github/skills/.
          </p>
        </main>
      </div>
    </div>
  )
}
