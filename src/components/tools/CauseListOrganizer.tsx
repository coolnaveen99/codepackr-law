import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { FileUp, ListOrdered, Star, Trash2 } from 'lucide-react'
import { CP_LAW_NS, loadJson, saveJson } from '../../lib/localStore'
import { parseCauseList, sortCauseEntries, type CauseEntry } from '../../lib/causeListOrganizer'

const today = new Date().toISOString().slice(0, 10)
const EMPTY = { date: today, court: '', bench: '', time: '' }

export function CauseListOrganizer() {
  const [raw, setRaw] = useState('')
  const [defaults, setDefaults] = useState(EMPTY)
  const [entries, setEntries] = useState<CauseEntry[]>([])
  const [onlyMine, setOnlyMine] = useState(false)
  const [sortMode, setSortMode] = useState<'schedule'|'court'|'item'>('schedule')
  const [fileError, setFileError] = useState('')

  useEffect(() => setEntries(loadJson<CauseEntry[]>(CP_LAW_NS.causeList, [])), [])
  const persist = (next: CauseEntry[]) => { const bounded=next.slice(0,200); setEntries(bounded); saveJson(CP_LAW_NS.causeList,bounded) }
  const patch = (id:string, change:Partial<CauseEntry>) => persist(entries.map(e => e.id===id ? {...e,...change} : e))

  const addText = (text:string) => {
    const parsed = parseCauseList(text, {...defaults, idPrefix:`cl-${Date.now()}`})
    if (!parsed.length) return false
    persist([...parsed,...entries]); return true
  }
  const parse = () => { if (addText(raw)) setRaw('') }
  const importFile = (event:ChangeEvent<HTMLInputElement>) => {
    const file=event.target.files?.[0]; event.currentTarget.value=''
    if (!file) return
    if (!file.name.toLowerCase().endsWith('.txt') && file.type !== 'text/plain') { setFileError('Use a plain-text (.txt) cause-list export.'); return }
    const reader=new FileReader()
    reader.onload=()=>{ const ok=addText(typeof reader.result==='string'?reader.result:''); setFileError(ok?'':'No numbered cause-list items were detected.') }
    reader.onerror=()=>setFileError('The selected text file could not be read locally.')
    reader.readAsText(file)
  }
  const visible=useMemo(()=>{
    const filtered=onlyMine?entries.filter(e=>e.mine):entries
    if(sortMode==='item') return [...filtered].sort((a,b)=>String(a.item).localeCompare(String(b.item),undefined,{numeric:true}))
    if(sortMode==='court') return [...filtered].sort((a,b)=>a.court.localeCompare(b.court)||a.date.localeCompare(b.date)||String(a.item).localeCompare(String(b.item),undefined,{numeric:true}))
    return sortCauseEntries(filtered)
  },[entries,onlyMine,sortMode])

  return <div className="space-y-5">
    <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
      <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]"><ListOrdered className="size-4"/> Cause List Organizer</div>
      <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Organise your board work</h1>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">Paste or import text obtained from an official cause list. CodePackr organises user-provided data locally; it is not the official eCourts source.</p>
      <div className="mt-3 rounded-xl border border-blue-200 bg-blue-50 p-3 text-xs text-blue-950">Source: user-provided / official source link.{' '}
        <a href="https://services.ecourts.gov.in/ecourtindia_v6/?p=cause_list" target="_blank" rel="noreferrer" className="font-bold underline">eCourts Services — Cause Lists</a>{' · '}
        <a href="https://hcservices.ecourts.gov.in/hcservices/main.php" target="_blank" rel="noreferrer" className="font-bold underline">High Court Services</a>
      </div>
    </section>

    <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-3">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {([['date','Cause-list date'],['court','Court / forum'],['bench','Bench / court number'],['time','Time (optional)']] as const).map(([key,label]) =>
          <label key={key} className="text-xs font-bold text-slate-600 dark:text-slate-300">{label}
            <input type={key==='date'?'date':key==='time'?'time':'text'} value={defaults[key]} onChange={e=>setDefaults({...defaults,[key]:e.target.value})} className="mt-1 w-full min-h-11 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-3 text-sm font-normal"/>
          </label>)}
      </div>
      <label className="block text-xs font-bold text-slate-600 dark:text-slate-300">Paste cause-list text
        <textarea value={raw} onChange={e=>setRaw(e.target.value)} rows={7} placeholder={'12. ABC v. XYZ | O.S. 12/2026 | A. Advocate | Evidence\n13. State v. DEF | Crl.O.P. 44/2026 | B. Advocate | Hearing'} className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent p-2.5 text-sm font-mono"/>
      </label>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={parse} disabled={!raw.trim()} className="min-h-11 rounded-xl bg-[#8B1E3F] text-white px-3 py-2 text-xs font-bold disabled:opacity-50">Parse &amp; add</button>
        <label className="min-h-11 inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs font-bold cursor-pointer"><FileUp className="size-3.5"/> Import .txt<input className="sr-only" type="file" accept=".txt,text/plain" onChange={importFile}/></label>
      </div>
      {fileError && <p className="text-xs font-semibold text-red-600" role="alert">{fileError}</p>}
      <p className="text-[11px] text-slate-500">For reliable mapping, separate case, advocate and purpose with <code>|</code> or tabs. Review parser output against the source.</p>
    </section>

    <section className="flex flex-wrap items-center gap-2" aria-label="Cause list filters">
      <label className="min-h-11 inline-flex items-center gap-2 text-xs font-bold"><input type="checkbox" checked={onlyMine} onChange={e=>setOnlyMine(e.target.checked)}/> Only my matters</label>
      <label className="min-h-11 inline-flex items-center gap-2 text-xs font-bold">Sort
        <select value={sortMode} onChange={e=>setSortMode(e.target.value as typeof sortMode)} className="min-h-11 rounded-xl border border-slate-200 dark:border-slate-700 px-2 bg-transparent">
          <option value="schedule">Date / time / court / item</option><option value="court">Court / date / item</option><option value="item">Item number</option>
        </select>
      </label>
      <button type="button" onClick={()=>persist([])} disabled={!entries.length} className="min-h-11 rounded-xl border border-red-200 text-red-700 px-3 text-xs font-bold disabled:opacity-50">Clear all</button>
      <span className="text-xs text-slate-500">{visible.length} displayed · {entries.length} stored locally</span>
    </section>

    {visible.length===0 ? <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">No entries yet. Obtain the current list from the official source, then paste or import it here.</div> :
      <ul className="space-y-3" aria-label="Parsed cause list entries">{visible.map(entry =>
        <li key={entry.id} className={`rounded-2xl border p-4 space-y-3 ${entry.mine?'border-[#8B1E3F]/40 bg-[#8B1E3F]/5':'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'}`}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
            <Field label="Item" value={entry.item} onChange={v=>patch(entry.id,{item:v})}/>
            <Field label="Case / reference" value={entry.caseRef} onChange={v=>patch(entry.id,{caseRef:v})}/>
            <Field label="Parties" value={entry.parties} onChange={v=>patch(entry.id,{parties:v})}/>
            <Field label="Advocate" value={entry.advocate} onChange={v=>patch(entry.id,{advocate:v})}/>
            <Field label="Court / forum" value={entry.court} onChange={v=>patch(entry.id,{court:v})}/>
            <Field label="Bench / court no." value={entry.bench} onChange={v=>patch(entry.id,{bench:v})}/>
            <Field label="Date" type="date" value={entry.date} onChange={v=>patch(entry.id,{date:v})}/>
            <Field label="Time" type="time" value={entry.time} onChange={v=>patch(entry.id,{time:v})}/>
            <Field label="Purpose" value={entry.purpose} onChange={v=>patch(entry.id,{purpose:v})}/>
            <label className="text-xs font-bold text-slate-600 dark:text-slate-300 sm:col-span-2">Hearing notes / preparation
              <textarea value={entry.notes} onChange={e=>patch(entry.id,{notes:e.target.value})} rows={2} className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent p-2.5 text-sm font-normal"/>
            </label>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-[11px] text-slate-500">{entry.date||'Date —'}{entry.time?` · ${entry.time}`:''}{entry.court?` · ${entry.court}`:''}{entry.bench?` · ${entry.bench}`:''}</div>
            <div className="flex gap-2">
              <button type="button" onClick={()=>patch(entry.id,{mine:!entry.mine})} className={`min-h-11 rounded-xl border px-3 text-xs font-bold inline-flex items-center gap-1 ${entry.mine?'border-[#8B1E3F] text-[#8B1E3F]':'border-slate-200 dark:border-slate-700'}`}><Star className={`size-3.5 ${entry.mine?'fill-current':''}`}/>{entry.mine?'My matter':'Mark mine'}</button>
              <button type="button" aria-label={`Delete cause-list item ${entry.item}`} onClick={()=>persist(entries.filter(x=>x.id!==entry.id))} className="min-h-11 min-w-11 rounded-xl border border-red-200 text-red-700 inline-flex items-center justify-center"><Trash2 className="size-4"/></button>
            </div>
          </div>
        </li>)}</ul>}
  </div>
}

function Field({label,value,onChange,type='text'}:{label:string;value:string;onChange:(value:string)=>void;type?:'text'|'date'|'time'}) {
  return <label className="text-xs font-bold text-slate-600 dark:text-slate-300">{label}<input type={type} value={value} onChange={e=>onChange(e.target.value)} className="mt-1 w-full min-h-11 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-3 text-sm font-normal"/></label>
}
