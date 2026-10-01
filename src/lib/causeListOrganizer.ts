export interface CauseEntry {
  id: string; court: string; bench: string; date: string; time: string; item: string;
  caseRef: string; parties: string; advocate: string; purpose: string; notes: string; mine: boolean
}
export interface CauseParseDefaults { date?: string; court?: string; bench?: string; time?: string; idPrefix?: string }
const clean = (v: string) => v.trim().replace(/\s+/g, ' ')
function itemLine(line: string) {
  const m = line.match(/^(?:item\s*)?(\d+)[.)\-:]\s*(.+)$/i) || line.match(/^item\s+(\d+)\s+(.+)$/i) || line.match(/^(\d+)\s{2,}(.+)$/)
  return m ? { item: m[1], rest: clean(m[2]) } : null
}
function columns(rest: string) {
  const parts = rest.split(/\s*\|\s*|\t+/).map(clean).filter(Boolean)
  return parts.length > 1 ? parts : [rest]
}
function parties(value: string) {
  const parts = value.split(/\s+(?:v\.?|versus)\s+/i).map(clean).filter(Boolean)
  return parts.length > 1 ? parts.join(' v. ') : clean(value)
}
export function parseCauseList(raw: string, defaults: CauseParseDefaults = {}): CauseEntry[] {
  let court = defaults.court ?? '', bench = defaults.bench ?? '', date = defaults.date ?? '', time = defaults.time ?? ''
  const out: CauseEntry[] = [], prefix = defaults.idPrefix ?? 'cl'
  for (const rawLine of raw.split(/\r?\n/)) {
    const line = clean(rawLine); if (!line) continue
    const header = line.match(/^(court|bench|date|time)\s*:\s*(.+)$/i)
    if (header) { const v = clean(header[2]); const k = header[1].toLowerCase(); if (k === 'court') court=v; if (k === 'bench') bench=v; if (k === 'date') date=v; if (k === 'time') time=v; continue }
    const parsed = itemLine(line); if (!parsed) continue
    const c = columns(parsed.rest)
    out.push({ id: `${prefix}-${out.length + 1}-${parsed.item}`, court, bench, date, time, item: parsed.item, caseRef: c[1] ?? '', parties: parties(c[0]), advocate: c[2] ?? '', purpose: c[3] ?? '', notes: '', mine: false })
  }
  return out
}
export function sortCauseEntries(entries: CauseEntry[]): CauseEntry[] {
  return [...entries].sort((a,b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time) || a.court.localeCompare(b.court) || a.bench.localeCompare(b.bench) || String(a.item).localeCompare(String(b.item), undefined, { numeric: true }))
}
