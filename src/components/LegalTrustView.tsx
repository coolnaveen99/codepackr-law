interface Props {
  page: 'about' | 'privacy'
  onBack: () => void
  onOpenContact: () => void
}

export function LegalTrustView({ page, onBack, onOpenContact }: Props) {
  const isAbout = page === 'about'
  return (
    <article className="max-w-3xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
      <button type="button" onClick={onBack} className="text-sm font-semibold text-blue-700 hover:underline">
        ← Back to Law library
      </button>
      <h1 className="text-2xl font-bold">{isAbout ? 'About Codepackr Law' : 'Privacy Policy — Codepackr Law'}</h1>
      <p className="text-sm text-slate-600">Last updated: 30 September 2026 · Chennai, India</p>
      <p className="text-sm leading-relaxed">
        Operated by Naveen. Not a law firm. Educational utility only — not legal advice. Tools and notes stay in the
        browser by default.
      </p>

      {isAbout ? (
        <>
          <section className="space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">Free educational layer</h2>
            <p>
              Core study surfaces, educational tools, primary-source links, and safety disclaimers remain free. We do
              not put basic legal educational access behind a paywall.
            </p>
          </section>
          <section className="space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">Sources &amp; copyright</h2>
            <p>
              Prefer official portals (India Code, court and eCourts sites), original Codepackr explanations, and
              documents you paste yourself. We do not scrape or ship proprietary headnotes, paid-database annotations,
              or subscription-only commentary.
            </p>
            <p>
              Third-party research products may inform feature design; they are not a content source to copy. See
              product policies on copyright and data governance in the repository docs.
            </p>
          </section>
          <section className="space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">Advertising</h2>
            <p>
              AdSense (pub-7526363571565796) may show site-level ads. Aggressive advertising is not placed inside
              sensitive document workflows (drafting, case prep, document compare while editing).
            </p>
          </section>
        </>
      ) : (
        <>
          <section className="space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">Local-first storage</h2>
            <p>
              Study progress, research notes, drafts, and practice data stay in browser storage under versioned
              namespaces. Aggregate tool-open counts (if enabled) never include query text, case facts, or draft
              content.
            </p>
          </section>
          <section className="space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">No case-fact analytics</h2>
            <p>
              We do not sell outcome predictions or use your matter text for advertising profiles. Optional cloud sync
              is not part of the free layer and is not shipped as a default.
            </p>
          </section>
          <section className="space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">Export and delete</h2>
            <p>
              Use Privacy &amp; Local Data in the tools list to export, import, or delete versioned Codepackr Law
              namespaces on this device.
            </p>
          </section>
        </>
      )}

      <p className="text-sm">
        <a className="underline font-semibold" href="mailto:codepackr@gmail.com">
          codepackr@gmail.com
        </a>{' '}
        ·{' '}
        <button type="button" onClick={onOpenContact} className="underline font-semibold">
          Contact form
        </button>
      </p>
    </article>
  )
}
