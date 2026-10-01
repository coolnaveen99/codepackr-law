import { useMemo, useState } from 'react'
import { Download, Shield, Trash2, Upload } from 'lucide-react'
import {
  CP_LAW_NS,
  deleteAllCpLawData,
  exportAllCpLawData,
  importCpLawData,
  resetCpLawNamespace,
  storageUsageEstimate,
} from '../../lib/localStore'

export function PrivacyControls() {
  const [msg, setMsg] = useState<string | null>(null)
  const [importText, setImportText] = useState('')
  const usage = useMemo(() => storageUsageEstimate(), [msg])

  const handleExport = () => {
    const json = exportAllCpLawData()
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `codepackr-law-local-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
    setMsg('Export downloaded.')
  }

  const handleImport = () => {
    const r = importCpLawData(importText)
    if (r.ok) setMsg(`Imported ${r.keys.length} namespace(s): ${r.keys.join(', ') || 'none'}`)
    else setMsg(`Import failed: ${r.error}`)
  }

  const handleResetWorkspace = (key: (typeof CP_LAW_NS)[keyof typeof CP_LAW_NS]) => {
    if (!confirm(`Reset local workspace ${key}?`)) return
    setMsg(resetCpLawNamespace(key) ? `Reset: ${key}` : `No data stored for ${key}.`)
  }

  const handleDelete = () => {
    if (!confirm('Delete all CodePackr Law local data on this browser?')) return
    const removed = deleteAllCpLawData()
    setMsg(removed.length ? `Deleted: ${removed.join(', ')}` : 'Nothing to delete.')
  }

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
          <Shield className="size-4" /> Privacy & Local Data
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Versioned browser storage</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
          Case notes, study plans and diaries stay in your browser under versioned keys. Nothing is sent to analytics.
        </p>
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-950">
          Do not store confidential, privileged or personally identifiable case information unless you understand the
          security implications of local browser storage.
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5">
        <div className="text-xs font-extrabold uppercase text-slate-500">Storage usage (estimate)</div>
        <div className="mt-2 text-sm font-bold">
          {usage.keys} keys · ~{Math.round(usage.usedBytes / 1024)} KB
        </div>
        <ul className="mt-3 grid sm:grid-cols-2 gap-1 text-xs font-mono text-slate-600">
          {Object.values(CP_LAW_NS).map((k) => (
            <li key={k}>{k}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-3">
        <button
          type="button"
          onClick={handleExport}
          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold"
        >
          <Download className="size-3.5" /> Export all local data
        </button>
        <label className="block text-xs font-bold text-slate-600">
          Import JSON
          <textarea
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
            rows={4}
            className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent p-2.5 text-xs font-mono"
            placeholder="Paste export JSON…"
          />
        </label>
        <button
          type="button"
          onClick={handleImport}
          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold"
        >
          <Upload className="size-3.5" /> Import
        </button>
        <div className="space-y-2">
          <div className="text-xs font-extrabold uppercase text-slate-500">Reset individual workspace</div>
          <div className="grid sm:grid-cols-2 gap-2">
            {Object.values(CP_LAW_NS).map((key) => (
              <button key={key} type="button" onClick={() => handleResetWorkspace(key)} className="min-h-11 rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-left text-[11px] font-bold font-mono">Reset {key}</button>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={handleDelete}
          className="inline-flex items-center gap-1.5 rounded-xl border border-red-200 text-red-800 px-3 py-2 text-xs font-bold"
        >
          <Trash2 className="size-3.5" /> Delete all local data
        </button>
        {msg && <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">{msg}</p>}
      </section>

      <p className="text-[11px] text-slate-500">
        Never put legal facts in URLs. Never log user legal text in production analytics.
      </p>
    </div>
  )
}
