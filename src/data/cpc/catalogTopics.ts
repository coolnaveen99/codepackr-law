import { CPC_SECTIONS } from './sections'
import { CPC_ORDERS } from './orders'

export function cpcCatalogTopics() {
  const sections = CPC_SECTIONS.map((s) => ({
    id: `s-${s.id.toLowerCase()}`,
    name: `Section ${s.id} — ${s.title}`,
    type: 'section' as const,
    range: `s. ${s.id}`,
    cluster: s.cluster,
    note: s.flags.includes('repealed') ? 'Repealed' : s.flags.includes('omitted') ? 'Omitted' : undefined,
    keywords: [`section ${s.id}`, `cpc ${s.id}`, s.title.toLowerCase().slice(0, 48)],
    highYield: s.flags.includes('exam'),
  }))
  const orders = CPC_ORDERS.map((o) => ({
    id: `o-${o.id.toLowerCase()}`,
    name: `Order ${o.roman} — ${o.title}`,
    type: 'chapter' as const,
    range: `Order ${o.roman}`,
    cluster: o.cluster,
    keywords: [`order ${o.roman}`, `order ${o.id}`, o.title.toLowerCase().slice(0, 48)],
    highYield: o.flags.includes('exam'),
  }))
  return [...sections, ...orders]
}
