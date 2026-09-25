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
      <p className="text-sm text-slate-600">Last updated: 25 September 2026 · Chennai, India</p>
      <p className="text-sm leading-relaxed">Operated by Naveen. Not a law firm. Tools stay in the browser. AdSense pub-7526363571565796 may show ads.</p>
      <p className="text-sm"><a className="underline font-semibold" href="mailto:codepackr@gmail.com">codepackr@gmail.com</a> · <button type="button" onClick={onOpenContact} className="underline font-semibold">Contact form</button></p>
    </article>
  )
}
