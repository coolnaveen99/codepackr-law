import { Award, ArrowRight } from 'lucide-react'

interface AibeWeightageMatrixProps {
  onSelectSubject: (slug: string) => void
  onSelectTool: (slug: string) => void
}

interface SyllabusItem {
  name: string
  slug: string
  questions: number
  tier: 'tier-1' | 'tier-2' | 'tier-3'
  notes: string
}

const AIBE_BLUEPRINT: SyllabusItem[] = [
  { name: 'Constitutional Law', slug: 'constitution', questions: 10, tier: 'tier-1', notes: 'Preamble, Fundamental Rights, Writs, Judiciary' },
  { name: 'Code of Civil Procedure (CPC)', slug: 'cpc', questions: 10, tier: 'tier-1', notes: 'Res Judicata, Pleadings, Injunctions, Orders I–LI' },
  { name: 'Criminal Procedure (BNSS / CrPC)', slug: 'bnss', questions: 10, tier: 'tier-1', notes: 'FIR, Arrest, Bail, Charges, Trials, Appeals' },
  { name: 'Penal Law (BNS / IPC)', slug: 'bns', questions: 8, tier: 'tier-1', notes: 'Offences against Body & Property, General Exceptions' },
  { name: 'Evidence Law (BSA / IEA)', slug: 'bsa', questions: 8, tier: 'tier-1', notes: 'Relevancy, Admissions, Electronic Evidence s. 63' },
  { name: 'Family & Succession Law', slug: 'family', questions: 8, tier: 'tier-1', notes: 'HMA, HSA, Muslim Law, Maintenance s. 144 BNSS' },
  { name: 'Law of Contract, SRA, TPA & NI Act', slug: 'contract', questions: 8, tier: 'tier-1', notes: 'Offer/Acceptance, Breach, S. 138 Cheque Dishonour' },
  { name: 'Law of Torts, CPA & Motor Vehicles', slug: 'tort', questions: 5, tier: 'tier-2', notes: 'Negligence, Defences, Consumer Act 2019, MACT' },
  { name: 'ADR & Arbitration Act', slug: 'adr', questions: 4, tier: 'tier-2', notes: 'Arbitration 1996, Mediation Act 2023, Lok Adalat' },
  { name: 'Professional Ethics & BCI Rules', slug: 'ethics', questions: 4, tier: 'tier-2', notes: 'Advocates Act 1961, Contempt of Court, BCI Standards' },
  { name: 'Public Interest Litigation (PIL)', slug: 'pil', questions: 4, tier: 'tier-2', notes: 'Locus Standi, Epistolary Jurisdiction, Mandamus' },
  { name: 'Administrative Law', slug: 'admin', questions: 3, tier: 'tier-3', notes: 'Natural Justice, Bias, Delegated Legislation' },
  { name: 'Company Law', slug: 'company', questions: 2, tier: 'tier-3', notes: 'Companies Act 2013, Incorporation, Oppression' },
  { name: 'Environmental Law', slug: 'environment', questions: 2, tier: 'tier-3', notes: 'EPA 1986, NGT Act 2010, Sustainable Development' },
  { name: 'Cyber Law', slug: 'cyber', questions: 2, tier: 'tier-3', notes: 'IT Act 2000, Digital Personal Data Protection' },
  { name: 'Labour & Industrial Laws', slug: 'labour', questions: 2, tier: 'tier-3', notes: 'Industrial Disputes Act, Code on Wages 2019' },
  { name: 'Taxation Laws', slug: 'taxation', questions: 2, tier: 'tier-3', notes: 'Income Tax Act 1961, CGST Act 2017' },
  { name: 'Land Acquisition (RFCTLARR)', slug: 'land', questions: 2, tier: 'tier-3', notes: 'RFCTLARR Act 2013, Rehabilitation, Compensation' },
]

export function AibeWeightageMatrix({ onSelectSubject, onSelectTool }: AibeWeightageMatrixProps) {
  return (
    <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 space-y-6 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-1">
            <Award className="w-4 h-4" /> Bar Council of India Official Blueprint
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-slate-950 dark:text-white">
            AIBE Examination & Judicial Services Weightage Matrix
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            100 questions distributed across the complete legal syllabus. Tier-1 subjects comprise 62% of the bar qualification exam.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onSelectTool('aibe-mcq')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors duration-150"
          >
            Launch AIBE Mock Exam <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Grid Table of Weights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {AIBE_BLUEPRINT.map((item) => (
          <div
            key={item.slug}
            className="p-4 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/50 flex flex-col justify-between hover:border-blue-300 dark:hover:border-blue-900 transition-colors duration-150"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <button
                  type="button"
                  onClick={() => onSelectSubject(item.slug)}
                  className="text-left font-bold text-sm text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150"
                >
                  {item.name}
                </button>
                <span className="shrink-0 px-2 py-0.5 rounded-lg bg-blue-100/70 dark:bg-blue-950 text-blue-800 dark:text-blue-200 text-xs font-black">
                  {item.questions} Qs
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal line-clamp-1">
                {item.notes}
              </p>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-[11px]">
              <span className={`font-semibold uppercase tracking-wider text-[10px] ${
                item.tier === 'tier-1'
                  ? 'text-blue-700 dark:text-blue-300 font-bold'
                  : item.tier === 'tier-2'
                  ? 'text-amber-600 dark:text-amber-400 font-bold'
                  : 'text-slate-500'
              }`}>
                {item.tier === 'tier-1' ? 'High Yield (Tier 1)' : item.tier === 'tier-2' ? 'Medium Yield (Tier 2)' : 'Standard (Tier 3)'}
              </span>
              <button
                type="button"
                onClick={() => onSelectSubject(item.slug)}
                className="text-blue-700 dark:text-blue-300 font-semibold hover:underline inline-flex items-center gap-0.5"
              >
                Study <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
