import { AMENDMENTS } from '../constitution/amendments'
import { ARTICLES, articleById } from '../constitution/articles'
import { CASES } from '../constitution/cases'
import {
  IDS,
  amendmentEntityId,
  articleEntityId,
  caseEntityId,
  partEntityId,
} from './ids'
import type { KnowledgeRelation, RelationKind } from './types'

function R(from: string, kind: RelationKind, to: string, context?: string): KnowledgeRelation {
  return { from, to, kind, context }
}

const CURATED: KnowledgeRelation[] = [
  R(IDS.basicStructure, 'established-by', caseEntityId('kesavananda')),
  R(IDS.basicStructure, 'applied-in', caseEntityId('raj-narain')),
  R(IDS.basicStructure, 'applied-in', caseEntityId('minerva-mills')),
  R(IDS.basicStructure, 'applied-in', caseEntityId('waman-rao')),
  R(IDS.basicStructure, 'applied-in', caseEntityId('coelho')),
  R(IDS.basicStructure, 'applied-in', caseEntityId('njac')),
  R(IDS.basicStructure, 'applied-in', caseEntityId('bommai')),
  R(IDS.basicStructure, 'related-article', articleEntityId('368')),
  R(IDS.basicStructure, 'related-doctrine', IDS.uca),
  R(IDS.basicStructure, 'related-topic', IDS.topicAmendment),
  R(IDS.basicStructure, 'see-also', IDS.basicFeatures),
  R(IDS.basicStructure, 'depends-on', IDS.judicialReview),

  R(caseEntityId('shankari-prasad'), 'overruled-by', caseEntityId('golaknath'), 'on whether amendments are ‘law’ under Article 13'),
  R(caseEntityId('sajjan-singh'), 'overruled-by', caseEntityId('golaknath')),
  R(caseEntityId('golaknath'), 'overruled-by', caseEntityId('kesavananda'), 'the total bar on amending Fundamental Rights'),
  R(IDS.prospectiveOverruling, 'established-by', caseEntityId('golaknath')),
  R(IDS.prospectiveOverruling, 'related-case', caseEntityId('kesavananda')),

  R(IDS.dueProcess, 'established-by', caseEntityId('maneka')),
  R(IDS.dueProcess, 'related-article', articleEntityId('21')),
  R(IDS.dueProcess, 'related-article', articleEntityId('14')),
  R(IDS.dueProcess, 'related-article', articleEntityId('19')),
  R(IDS.dueProcess, 'see-also', IDS.goldenTriangle),
  R(IDS.dueProcess, 'see-also', IDS.personalLiberty),
  R(IDS.dueProcess, 'see-also', IDS.procedureEstablished),
  R(IDS.dueProcess, 'related-principle', IDS.naturalJustice),

  R(IDS.goldenTriangle, 'established-by', caseEntityId('maneka')),
  R(IDS.goldenTriangle, 'applied-in', caseEntityId('coelho')),
  R(IDS.goldenTriangle, 'applied-in', caseEntityId('puttaswamy')),
  R(IDS.goldenTriangle, 'related-article', articleEntityId('14')),
  R(IDS.goldenTriangle, 'related-article', articleEntityId('19')),
  R(IDS.goldenTriangle, 'related-article', articleEntityId('21')),

  R(IDS.personalLiberty, 'interpreted-by', caseEntityId('maneka')),
  R(IDS.personalLiberty, 'interpreted-by', caseEntityId('puttaswamy')),
  R(IDS.personalLiberty, 'interpreted-by', caseEntityId('navtej')),
  R(IDS.personalLiberty, 'related-article', articleEntityId('21')),

  R(IDS.harmonious, 'applied-in', caseEntityId('minerva-mills')),
  R(IDS.harmonious, 'related-topic', IDS.topicFR),
  R(IDS.harmonious, 'related-topic', IDS.topicDPSP),
  R(IDS.harmonious, 'related-article', articleEntityId('37')),

  R(IDS.eclipse, 'related-article', articleEntityId('13')),
  R(IDS.eclipse, 'related-doctrine', IDS.severability),
  R(IDS.eclipse, 'see-also', IDS.defExistingLaw),
  R(IDS.severability, 'related-article', articleEntityId('13')),
  R(IDS.severability, 'see-also', IDS.readingDown),

  R(IDS.pith, 'related-article', articleEntityId('246')),
  R(IDS.pith, 'related-doctrine', IDS.colourable),
  R(IDS.pith, 'related-doctrine', IDS.repugnancy),
  R(IDS.colourable, 'related-article', articleEntityId('246')),
  R(IDS.repugnancy, 'related-article', articleEntityId('254')),
  R(IDS.occupiedField, 'related-article', articleEntityId('254')),
  R(IDS.occupiedField, 'related-doctrine', IDS.repugnancy),
  R(IDS.territorialNexus, 'related-article', articleEntityId('245')),

  R(IDS.reasonableClassification, 'related-article', articleEntityId('14')),
  R(IDS.reasonableClassification, 'related-principle', IDS.equality),
  R(IDS.manifestArbitrariness, 'related-article', articleEntityId('14')),
  R(IDS.manifestArbitrariness, 'related-doctrine', IDS.reasonableClassification),
  R(IDS.creamyLayer, 'established-by', caseEntityId('indra-sawhney')),
  R(IDS.creamyLayer, 'related-article', articleEntityId('16')),
  R(IDS.creamyLayer, 'applied-in', caseEntityId('nagaraaj')),
  R(IDS.creamyLayer, 'applied-in', caseEntityId('janhit')),

  R(IDS.proportionality, 'applied-in', caseEntityId('puttaswamy')),
  R(IDS.proportionality, 'related-article', articleEntityId('19')),
  R(IDS.proportionality, 'related-article', articleEntityId('21')),

  R(IDS.erp, 'related-article', articleEntityId('25')),
  R(IDS.erp, 'related-article', articleEntityId('26')),
  R(IDS.waiver, 'related-topic', IDS.topicFR),
  R(IDS.waiver, 'related-article', articleEntityId('13')),
  R(IDS.readingDown, 'see-also', IDS.maximUtRes),
  R(IDS.readingDown, 'see-also', IDS.severability),
  R(IDS.constitutionalMorality, 'applied-in', caseEntityId('navtej')),
  R(IDS.constitutionalMorality, 'related-principle', IDS.equality),
  R(IDS.uca, 'established-by', caseEntityId('kesavananda')),
  R(IDS.uca, 'applied-in', caseEntityId('minerva-mills')),
  R(IDS.uca, 'applied-in', caseEntityId('njac')),
  R(IDS.uca, 'depends-on', IDS.basicStructure),

  R(IDS.otherAuthorities, 'related-article', articleEntityId('12')),
  R(IDS.otherAuthorities, 'depends-on', IDS.defState),
  R(IDS.otherAuthorities, 'see-also', IDS.instrumentality),
  R(IDS.instrumentality, 'related-article', articleEntityId('12')),
  R(IDS.defState, 'related-article', articleEntityId('12')),
  R(IDS.defLaw, 'related-article', articleEntityId('13')),
  R(IDS.defLaw, 'related-case', caseEntityId('kesavananda')),
  R(IDS.defMoneyBill, 'related-article', articleEntityId('110')),
  R(IDS.defMoneyBill, 'see-also', IDS.procMoneyBill),
  R(IDS.procedureEstablished, 'related-article', articleEntityId('21')),
  R(IDS.procedureEstablished, 'related-doctrine', IDS.dueProcess),

  R(IDS.ninthSchedule, 'established-by', amendmentEntityId(1)),
  R(IDS.ninthSchedule, 'interpreted-by', caseEntityId('waman-rao')),
  R(IDS.ninthSchedule, 'interpreted-by', caseEntityId('coelho')),
  R(IDS.ninthSchedule, 'related-statute', amendmentEntityId(1)),
  R(IDS.antiDefection, 'established-by', amendmentEntityId(52)),
  R(IDS.antiDefection, 'interpreted-by', caseEntityId('kihoto')),
  R(IDS.antiDefection, 'related-statute', amendmentEntityId(91)),
  R(IDS.collegium, 'interpreted-by', caseEntityId('njac')),
  R(IDS.collegium, 'related-article', articleEntityId('124')),
  R(IDS.collegium, 'related-principle', IDS.independence),
  R(IDS.floorTest, 'established-by', caseEntityId('bommai')),
  R(IDS.floorTest, 'related-article', articleEntityId('356')),
  R(IDS.pil, 'related-article', articleEntityId('32')),
  R(IDS.pil, 'related-article', articleEntityId('226')),
  R(IDS.pil, 'see-also', IDS.writs),
  R(IDS.writs, 'related-article', articleEntityId('32')),
  R(IDS.writs, 'related-article', articleEntityId('226')),
  R(IDS.constitutionalRight, 'related-article', articleEntityId('300A')),
  R(IDS.constitutionalRight, 'related-statute', amendmentEntityId(44)),
  R(IDS.cooperativeFederalism, 'related-article', articleEntityId('263')),
  R(IDS.cooperativeFederalism, 'related-article', articleEntityId('279A')),
  R(IDS.asymmetricFederalism, 'related-article', articleEntityId('370')),
  R(IDS.asymmetricFederalism, 'related-article', articleEntityId('371A')),
  R(IDS.asymmetricFederalism, 'related-article', articleEntityId('239AA')),
  R(IDS.livingConstitution, 'related-article', articleEntityId('21')),
  R(IDS.livingConstitution, 'related-doctrine', IDS.dueProcess),
  R(IDS.basicFeatures, 'related-doctrine', IDS.basicStructure),

  R(IDS.ruleOfLaw, 'applied-in', caseEntityId('raj-narain')),
  R(IDS.ruleOfLaw, 'related-article', articleEntityId('14')),
  R(IDS.separation, 'related-article', articleEntityId('50')),
  R(IDS.separation, 'applied-in', caseEntityId('raj-narain')),
  R(IDS.judicialReview, 'applied-in', caseEntityId('minerva-mills')),
  R(IDS.judicialReview, 'related-article', articleEntityId('32')),
  R(IDS.judicialReview, 'related-article', articleEntityId('226')),
  R(IDS.federalism, 'applied-in', caseEntityId('bommai')),
  R(IDS.federalism, 'related-article', articleEntityId('1')),
  R(IDS.federalism, 'related-article', articleEntityId('3')),
  R(IDS.federalism, 'related-article', articleEntityId('246')),
  R(IDS.secularism, 'applied-in', caseEntityId('bommai')),
  R(IDS.secularism, 'related-article', articleEntityId('25')),
  R(IDS.independence, 'applied-in', caseEntityId('njac')),
  R(IDS.independence, 'related-article', articleEntityId('124')),
  R(IDS.naturalJustice, 'see-also', IDS.maximAudi),
  R(IDS.naturalJustice, 'see-also', IDS.maximNemoJudex),
  R(IDS.naturalJustice, 'related-doctrine', IDS.dueProcess),
  R(IDS.democracy, 'applied-in', caseEntityId('raj-narain')),
  R(IDS.democracy, 'related-article', articleEntityId('326')),
  R(IDS.democracy, 'related-article', articleEntityId('324')),
  R(IDS.equality, 'related-article', articleEntityId('14')),
  R(IDS.equality, 'related-doctrine', IDS.reasonableClassification),
  R(IDS.parliamentary, 'related-article', articleEntityId('74')),
  R(IDS.parliamentary, 'related-article', articleEntityId('75')),

  R(IDS.maximAudi, 'related-principle', IDS.naturalJustice),
  R(IDS.maximNemoJudex, 'related-principle', IDS.naturalJustice),
  R(IDS.maximUbiJus, 'related-article', articleEntityId('32')),
  R(IDS.maximUbiJus, 'see-also', IDS.writs),
  R(IDS.maximNemoTenetur, 'related-article', articleEntityId('20')),
  R(IDS.maximDelegatus, 'related-principle', IDS.separation),
  R(IDS.maximUtRes, 'related-doctrine', IDS.readingDown),
  R(IDS.maximSalus, 'see-also', IDS.procEmergency),
  R(IDS.maximFiat, 'related-principle', IDS.judicialReview),

  R(IDS.procAmendment, 'related-article', articleEntityId('368')),
  R(IDS.procAmendment, 'related-doctrine', IDS.basicStructure),
  R(IDS.procAmendment, 'related-topic', IDS.topicAmendment),
  R(IDS.procImpeach, 'related-article', articleEntityId('61')),
  R(IDS.procJudgeRemoval, 'related-article', articleEntityId('124')),
  R(IDS.procOrdinance, 'related-article', articleEntityId('123')),
  R(IDS.procEmergency, 'related-article', articleEntityId('352')),
  R(IDS.procEmergency, 'related-article', articleEntityId('359')),
  R(IDS.procEmergency, 'related-statute', amendmentEntityId(44)),
  R(IDS.procPresidentsRule, 'related-article', articleEntityId('356')),
  R(IDS.procPresidentsRule, 'interpreted-by', caseEntityId('bommai')),
  R(IDS.procPresidentsRule, 'see-also', IDS.floorTest),
  R(IDS.procMoneyBill, 'related-article', articleEntityId('110')),
  R(IDS.procMoneyBill, 'depends-on', IDS.defMoneyBill),
  R(IDS.procJointSitting, 'related-article', articleEntityId('108')),

  R(IDS.topicFR, 'related-topic', partEntityId('III')),
  R(IDS.topicFR, 'related-article', articleEntityId('12')),
  R(IDS.topicFR, 'related-article', articleEntityId('32')),
  R(IDS.topicFR, 'see-also', IDS.goldenTriangle),
  R(IDS.topicDPSP, 'related-topic', partEntityId('IV')),
  R(IDS.topicDPSP, 'related-article', articleEntityId('37')),
  R(IDS.topicDPSP, 'related-doctrine', IDS.harmonious),
  R(IDS.topicAmendment, 'related-article', articleEntityId('368')),
  R(IDS.topicAmendment, 'related-doctrine', IDS.basicStructure),
  R(IDS.topicAmendment, 'see-also', IDS.procAmendment),

  R(IDS.pleasure, 'related-article', articleEntityId('75')),
  R(IDS.defExistingLaw, 'related-article', articleEntityId('13')),
  R(IDS.defExistingLaw, 'related-doctrine', IDS.eclipse),
]

function autoFromCases(): KnowledgeRelation[] {
  const out: KnowledgeRelation[] = []
  for (const c of CASES) {
    const cid = caseEntityId(c.id)
    for (const art of c.articles) {
      if (!articleById(art)) continue
      out.push(R(articleEntityId(art), 'interpreted-by', cid))
      out.push(R(cid, 'applied-in', articleEntityId(art)))
    }
  }
  return out
}

function autoFromArticles(): KnowledgeRelation[] {
  const out: KnowledgeRelation[] = []
  for (const a of ARTICLES) {
    for (const tag of a.amendments ?? []) {
      const n = Number.parseInt(tag, 10)
      if (!Number.isFinite(n)) continue
      if (!AMENDMENTS.some((am) => am.n === n)) continue
      out.push(R(articleEntityId(a.id), 'related-statute', amendmentEntityId(n)))
    }
  }
  return out
}

export function allRelations(): KnowledgeRelation[] {
  const raw = [...CURATED, ...autoFromCases(), ...autoFromArticles()]
  const seen = new Set<string>()
  const out: KnowledgeRelation[] = []
  for (const r of raw) {
    const key = `${r.from}|${r.kind}|${r.to}`
    if (seen.has(key)) continue
    seen.add(key)
    out.push(r)
  }
  return out
}
