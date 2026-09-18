import type { TopicContent } from '../topicTypes'

const content: TopicContent = {
  glance: 's. 2(2) decree. ss. 36–74 and Order XXI execution. s. 47 keeps execution questions inside execution.',
  study: `Introduction\nA decree is the formal expression of an adjudication that conclusively determines the rights of the parties (s. 2(2)). Without execution it is paper.\n\nEssentials\ns. 38 — court which passed the decree or the court to which it is sent.\ns. 47 — questions between the parties relating to execution, discharge or satisfaction — executing court, not a fresh suit.\ns. 51 — modes: payment, possession, arrest, attachment, appointment of receiver.\ns. 56 — no arrest of women on a money decree.\ns. 60 — what can be attached; statutory exemptions.\nOrder XXI — the working procedure.\n\nIllustration\nMoney decree unpaid. Decree-holder files execution, attaches a bank account, and seeks sale of a plot if needed.\n\nFail-illustration\nStranger claims the attached house. That is a claim petition under Order XXI rr. 58–59, not s. 47.\n\nAuthority\nHarnandrai Badridas AIR 1973 SC 2423 — s. 47 avoids a second round.\nJolly George Varghese AIR 1980 SC 470 — arrest is not a punishment for honest poverty.\n\nClose with ss. 47, 51, 60 and Order XXI CPC, 1908.`,
  cases: [
    { name: 'Harnandrai Badridas v. Debidutt Bhagwati Prasad', year: 1973, citation: 'AIR 1973 SC 2423', holding: 'Execution questions stay in the executing court.' },
    { name: 'Jolly George Varghese v. Bank of Cochin', year: 1980, citation: 'AIR 1980 SC 470', holding: 'Civil imprisonment is not for honest inability to pay.' },
  ],
  questionsAndAnswers: [
    { id: 'ex-10', marks: 10, question: 'Explain s. 47 CPC.', answer: 'Questions between parties relating to execution, discharge or satisfaction are decided by the executing court. No separate suit. Harnandrai Badridas. Cite s. 47 and Order XXI CPC, 1908.' },
    { id: 'ex-16', marks: 16, question: 'Decree-holder starts a new suit alleging the judgment-debtor has already paid a third person. Advise.', answer: 'Issue. Fresh suit or execution?\nRule. s. 47.\nApplication. Payment and satisfaction are execution questions. Return the plaintiff to the executing court.\nConclusion. s. 47 CPC, 1908.' },
  ],
  examTips: ['Name the mode under s. 51. Then open Order XXI.'],
}
export default content
