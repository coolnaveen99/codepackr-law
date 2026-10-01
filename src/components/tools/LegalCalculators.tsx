import { useMemo, useState } from 'react'
import { Calculator, AlertTriangle } from 'lucide-react'
import { CALCULATOR_META, compoundInterest, dateDifference, mactWorksheet, percentageOfBase, simpleInterest, addDays } from '../../lib/legalCalculators'

type Tab = 'date'|'interest'|'deadline'|'mact'|'fee'|'stamp'

const money = (n: number) => new Intl.NumberFormat('en-IN', { maximumFractionDigits: 2 }).format(n)

export function LegalCalculators() {
  const [tab, setTab] = useState<Tab>('date')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [principal, setPrincipal] = useState('100000')
  const [rate, setRate] = useState('9')
  const [days, setDays] = useState('365')
  const [years, setYears] = useState('1')
  const [frequency, setFrequency] = useState('12')
  const [deadlineStart, setDeadlineStart] = useState('')
  const [deadlineDays, setDeadlineDays] = useState('30')
  const [noticeStart, setNoticeStart] = useState('')
  const [noticeDays, setNoticeDays] = useState('30')
  const [base, setBase] = useState('100000')
  const [feeRate, setFeeRate] = useState('1')
  const [mact, setMact] = useState({ medical:'0', incomeLoss:'0', futureLoss:'0', care:'0', property:'0', other:'0', interimCompensation:'0' })

  const dateResult = useMemo(() => dateDifference(start, end), [start,end])
  const simple = useMemo(() => simpleInterest(Number(principal), Number(rate), Number(days)), [principal,rate,days])
  const compound = useMemo(() => compoundInterest(Number(principal), Number(rate), Number(years), Number(frequency)), [principal,rate,years,frequency])
  const deadline = useMemo(() => addDays(deadlineStart, Number(deadlineDays)), [deadlineStart,deadlineDays])
  const notice = useMemo(() => addDays(noticeStart, Number(noticeDays)), [noticeStart,noticeDays])
  const fee = useMemo(() => percentageOfBase(Number(base), Number(feeRate)), [base,feeRate])
  const mactResult = useMemo(() => mactWorksheet(Object.fromEntries(Object.entries(mact).map(([k,v]) => [k, Number(v)])) as any), [mact])

  const tabs: Array<[Tab,string]> = [['date','Date Difference'],['interest','Interest'],['deadline','Deadline'],['mact','MACT Worksheet'],['fee','Court Fee'],['stamp','Stamp Duty']]

  const input = (label:string, value:string, onChange:(v:string)=>void, type='number') => (
    <label className="block text-xs font-bold text-slate-600 dark:text-slate-300">{label}
      <input type={type} value={value} onChange={(e)=>onChange(e.target.value)} className="mt-1 min-h-11 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-3 text-sm font-semibold" />
    </label>
  )

  const meta = tab === 'date' ? CALCULATOR_META.dateDifference : tab === 'interest' ? CALCULATOR_META.simpleInterest : tab === 'deadline' ? CALCULATOR_META.deadline : tab === 'mact' ? CALCULATOR_META.mact : tab === 'fee' ? CALCULATOR_META.fee : CALCULATOR_META.stamp

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]"><Calculator className="size-4" /> Legal Calculators</div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Deterministic legal arithmetic</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">Formulas are transparent and inputs remain in your browser. A calculation is arithmetic, not a finding that a particular legal rule, rate, limitation period or entitlement applies.</p>
        <div className="mt-5 flex flex-wrap gap-2" role="tablist" aria-label="Calculator types">
          {tabs.map(([id,label]) => <button key={id} type="button" role="tab" aria-selected={tab===id} onClick={()=>setTab(id)} className={`min-h-11 px-3 rounded-xl border text-xs font-bold ${tab===id?'bg-[#8B1E3F] text-white border-[#8B1E3F]':'border-slate-200 dark:border-slate-700'}`}>{label}</button>)}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
        {tab === 'date' && <div className="grid gap-4 sm:grid-cols-2">{input('Start date',start,setStart,'date')}{input('End date',end,setEnd,'date')}<Result value={dateResult ? dateResult.formula : 'Enter both dates'} /></div>}
        {tab === 'interest' && <div className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">{input('Principal (₹)',principal,setPrincipal)}{input('Annual rate (%)',rate,setRate)}{input('Days',days,setDays)}{input('Years',years,setYears)}{input('Compounds per year',frequency,setFrequency)}</div>
          {simple && <Result value={`Simple: ₹${money(simple.interest)} interest; ₹${money(simple.total)} total — ${simple.formula}`} />}
          {compound && <Result value={`Compound: ₹${money(compound.interest)} interest; ₹${money(compound.total)} total — ${compound.formula}`} />}
        </div>}
        {tab === 'deadline' && <div className="grid gap-4 sm:grid-cols-2">{input('Reference date',deadlineStart,setDeadlineStart,'date')}{input('Period (days)',deadlineDays,setDeadlineDays)}<Result value={deadline ? `Reference + ${deadlineDays} days → ${deadline}` : 'Enter a reference date'} /></div>}
        {tab === 'mact' && <div className="space-y-4"><div className="grid gap-4 sm:grid-cols-2">{Object.entries(mact).map(([k,v])=>input(k.replace(/([A-Z])/g,' $1'),v,(x)=>setMact({...mact,[k]:x})) )}</div>{mactResult && <Result value={`Worksheet gross: ₹${money(mactResult.gross)}; less interim compensation: ₹${money(Number(mact.interimCompensation))}; worksheet net: ₹${money(mactResult.net)}`} />}</div>}
        {(tab === 'fee' || tab === 'stamp') && <div className="grid gap-4 sm:grid-cols-2">{input('Base amount (₹)',base,setBase)}{input('Rate (%)',feeRate,setFeeRate)}<Result value={percentageOfBase(Number(base),Number(feeRate)) === null ? 'Enter valid values' : `Illustrative amount: ₹${money(percentageOfBase(Number(base),Number(feeRate)) || 0)} — ${base} × ${feeRate}%`} /></div>}
        {tab === 'deadline' && <div className="mt-4 border-t border-slate-100 dark:border-slate-800 pt-4 grid gap-4 sm:grid-cols-2">{input('Notice reference date',noticeStart,setNoticeStart,'date')}{input('Notice period (days)',noticeDays,setNoticeDays)}<Result value={notice ? `Notice reference + ${noticeDays} days → ${notice}` : 'Optional notice-period worksheet'} /></div>}
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-950 space-y-2">
        <div className="font-extrabold flex items-center gap-1.5"><AlertTriangle className="size-4" /> Legal basis and assumptions</div>
        <div><strong>Formula:</strong> {meta.formula}</div>
        <div><strong>Assumptions:</strong> {meta.assumptions.join(' ')}</div>
        <div><strong>Legal basis:</strong> {meta.legalBasis}</div>
        <div><strong>Source:</strong> {meta.source}</div>
        <div><strong>Warning:</strong> {meta.warning}</div>
      </section>
    </div>
  )
}

function Result({ value }: { value: string }) {
  return <div className="sm:col-span-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-4 text-sm font-semibold">{value}</div>
}
