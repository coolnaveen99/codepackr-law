/**
 * PH4-040 — Authority Network & Official Portal Link Generator.
 * Client-side only official deep-links for citation verification.
 */

export interface OfficialSourceLink {
  name: string
  url: string
  type: 'official-court' | 'india-code' | 'escr' | 'open-portal'
}

export interface AuthorityLinkContext {
  courtHint?: string
  neutralCourt?: string
  neutralIndex?: string
  year?: string
  caseName?: string
  matchedOfficialUrl?: string
}

const HIGH_COURT_URL_MAP: Record<string, { name: string; url: string }> = {
  DEL: { name: 'Delhi High Court', url: 'https://delhihighcourt.nic.in/' },
  DHC: { name: 'Delhi High Court', url: 'https://delhihighcourt.nic.in/' },
  BOM: { name: 'Bombay High Court', url: 'https://bombayhighcourt.nic.in/' },
  CAL: { name: 'Calcutta High Court', url: 'https://www.calcuttahighcourt.gov.in/' },
  MAD: { name: 'Madras High Court', url: 'https://hcmadras.tn.gov.in/' },
  ALL: { name: 'Allahabad High Court', url: 'https://www.allahabadhighcourt.in/' },
  AHC: { name: 'Allahabad High Court', url: 'https://www.allahabadhighcourt.in/' },
  KER: { name: 'Kerala High Court', url: 'https://highcourtofkerala.nic.in/' },
  GUJ: { name: 'Gujarat High Court', url: 'https://gujarathighcourt.nic.in/' },
  KAR: { name: 'Karnataka High Court', url: 'https://karnatakajudiciary.kar.nic.in/' },
  PAT: { name: 'Patna High Court', url: 'https://patnahighcourt.gov.in/' },
  RAJ: { name: 'Rajasthan High Court', url: 'https://hcraj.nic.in/' },
  PNH: { name: 'Punjab & Haryana High Court', url: 'https://highcourtchd.gov.in/' },
  'P&H': { name: 'Punjab & Haryana High Court', url: 'https://highcourtchd.gov.in/' },
  PHHC: { name: 'Punjab & Haryana High Court', url: 'https://highcourtchd.gov.in/' },
  MPHC: { name: 'Madhya Pradesh High Court', url: 'https://mphc.gov.in/' },
  MP: { name: 'Madhya Pradesh High Court', url: 'https://mphc.gov.in/' },
  ORI: { name: 'Orissa High Court', url: 'https://orissahighcourt.nic.in/' },
  TEL: { name: 'Telangana High Court', url: 'https://tshc.gov.in/' },
  APHC: { name: 'Andhra Pradesh High Court', url: 'https://aphc.gov.in/' },
  AP: { name: 'Andhra Pradesh High Court', url: 'https://aphc.gov.in/' },
  GAU: { name: 'Gauhati High Court', url: 'https://ghconline.gov.in/' },
  CHH: { name: 'Chhattisgarh High Court', url: 'https://highcourt.cg.gov.in/' },
  HP: { name: 'Himachal Pradesh High Court', url: 'https://hphighcourt.nic.in/' },
  JKHC: { name: 'J&K and Ladakh High Court', url: 'https://jkhighcourt.nic.in/' },
  UTT: { name: 'Uttarakhand High Court', url: 'https://highcourtofuttarakhand.gov.in/' },
  SIK: { name: 'Sikkim High Court', url: 'https://hcs.gov.in/' },
  MAN: { name: 'Manipur High Court', url: 'https://hcmimphal.nic.in/' },
  MEG: { name: 'Meghalaya High Court', url: 'https://meghalayahighcourt.nic.in/' },
  TRI: { name: 'Tripura High Court', url: 'https://thc.nic.in/' },
  JHR: { name: 'Jharkhand High Court', url: 'https://jharkhandhighcourt.nic.in/' },
  JHAR: { name: 'Jharkhand High Court', url: 'https://jharkhandhighcourt.nic.in/' },
}

function isSupremeCourtHint(courtHint?: string, neutralCourt?: string): boolean {
  const nc = (neutralCourt || '').toUpperCase()
  if (nc === 'INSC' || nc === 'SC') return true
  if (!courtHint) return false
  const h = courtHint.toLowerCase().trim()
  if (h.includes('supreme court') || h === 'sc' || h === 's.c.' || h === 'sci') return true
  if (/\bsupreme\b/.test(h) || /\bsc\b/.test(h) || h.endsWith(' sc') || h.startsWith('sc ')) return true
  return false
}

/**
 * Build the authority network for a citation.
 * Prefer explicit court/neutral keys; fall back to eCourts + India Code.
 */
export function resolveOfficialSources(
  courtHintOrCtx?: string | AuthorityLinkContext,
  neutralCourt?: string
): OfficialSourceLink[] {
  const ctx: AuthorityLinkContext =
    typeof courtHintOrCtx === 'object' && courtHintOrCtx !== null
      ? courtHintOrCtx
      : { courtHint: typeof courtHintOrCtx === 'string' ? courtHintOrCtx : undefined, neutralCourt }

  const sources: OfficialSourceLink[] = []
  const seen = new Set<string>()

  const push = (link: OfficialSourceLink) => {
    if (!link.url || seen.has(link.url)) return
    seen.add(link.url)
    sources.push(link)
  }

  if (ctx.matchedOfficialUrl) {
    push({
      name: 'Matched primary source',
      url: ctx.matchedOfficialUrl,
      type: 'official-court',
    })
  }

  const sc = isSupremeCourtHint(ctx.courtHint, ctx.neutralCourt)
  const benchKey = (ctx.neutralCourt || '').toUpperCase()

  if (sc || !ctx.courtHint) {
    push({
      name: 'Supreme Court e-SCR (Digital SCR)',
      url: 'https://escr.sci.gov.in/',
      type: 'escr',
    })
    push({
      name: 'Supreme Court Reports (SCR Search)',
      url: 'https://scr.sci.gov.in/scrsearch/',
      type: 'escr',
    })
    push({
      name: 'Supreme Court of India — Judgments',
      url: 'https://main.sci.gov.in/judgments',
      type: 'official-court',
    })
    push({
      name: 'Supreme Court of India (Official Portal)',
      url: 'https://www.sci.gov.in/',
      type: 'official-court',
    })
  }

  if (benchKey && HIGH_COURT_URL_MAP[benchKey]) {
    const hc = HIGH_COURT_URL_MAP[benchKey]
    push({
      name: `${hc.name} Official Registry`,
      url: hc.url,
      type: 'official-court',
    })
  } else if (ctx.courtHint && !sc) {
    const hintLower = ctx.courtHint.toLowerCase()
    let matchedHc: { name: string; url: string } | undefined
    for (const entry of Object.values(HIGH_COURT_URL_MAP)) {
      if (hintLower.includes(entry.name.toLowerCase().replace(' high court', ''))) {
        matchedHc = entry
        break
      }
    }
    if (matchedHc) {
      push({
        name: `${matchedHc.name} Official Registry`,
        url: matchedHc.url,
        type: 'official-court',
      })
    }
  }

  push({
    name: 'eCourts Services India',
    url: 'https://services.ecourts.gov.in/',
    type: 'official-court',
  })
  push({
    name: 'India Code (Digital Repository of Acts)',
    url: 'https://www.indiacode.nic.in/',
    type: 'india-code',
  })

  return sources
}
