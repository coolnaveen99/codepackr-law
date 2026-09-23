import type { TopicContent } from '../topicTypes'

const study = `Topic at a glance
Family Law – I, Unit I: Sources and schools of personal laws. Indian family law is not a single code. Hindus, Muslims, Christians, Parsis and parties under the Special Marriage Act, 1954 are governed by different statutes and uncodified rules. Always name the personal law and the source you are applying.

Introduction
Before answering any family-law problem, identify: (1) which personal law applies; (2) whether a statute has codified the area; (3) whether custom or classical text still matters.

Application of personal laws
Hindu law (including Buddhists, Jains and Sikhs under the Hindu Marriage Act, 1955 and related Acts) applies as defined in those statutes. Muslim personal law applies under the Muslim Personal Law (Shariat) Application Act, 1937 in listed matters. Christians: Indian Christian Marriage Act, 1872 and Divorce Act, 1869. Parsis: Parsi Marriage and Divorce Act, 1936. Any two persons may marry under the Special Marriage Act, 1954.

Traditional and modern sources of Hindu law
Shruti, Smriti, commentaries (Mitakshara, Dayabhaga), custom, legislation and judicial precedent. After codification, the Hindu Code Acts occupy much of the field; custom survives where the statute saves it.

Classical schools of Hindu law
Mitakshara — joint family and coparcenary with birthright (modified by HSA 2005). Dayabhaga — Bengal school; no Mitakshara-type birthright coparcenary.

Sources of Muslim law
Quran, Sunnah, Ijma, Qiyas; classical schools. Shariat Act 1937; DMMA 1939; Muslim Women (Protection of Rights on Marriage) Act, 2019.

Current-law close
Open every long answer by naming the applicable personal law and governing statute.`

export default {
  glance:
    'FL-I Unit I — Which personal law applies; Hindu sources & Mitakshara/Dayabhaga; Muslim sources & schools; HMA, HSA, Shariat Act, SMA.',
  study,
  examples: [
    {
      id: 'src-ex-1',
      title: 'Example — choosing the statute',
      description:
        'Two Hindus marry with saptapadi — HMA 1955. Hindu and Christian before Marriage Officer — SMA 1954. Muslim wife seeks judicial divorce — DMMA 1939.',
    },
  ],
  hypotheticals: [
    {
      id: 'src-hypo',
      title: 'Classroom problem — conflict of personal law',
      facts: 'A (Hindu) and B (Muslim) marry privately without SMA notice. A seeks divorce under HMA.',
      question: 'Which law applies?',
      applicableLaw: 'Special Marriage Act, 1954; Hindu Marriage Act, 1955.',
      analysis: 'HMA applies only where both parties are Hindus as defined. Inter-religious civil marriage should be under SMA.',
      conclusion: 'Identify personal law first; do not assume HMA for mixed-religion parties.',
    },
  ],
  distinctions: [
    {
      id: 'src-dist',
      title: 'Mitakshara vs Dayabhaga',
      left: 'Mitakshara',
      right: 'Dayabhaga',
      rows: [
        { point: 'Region', left: 'Most of India', right: 'Bengal school' },
        { point: 'Coparcenary', left: 'Birthright (as modified by HSA 2005)', right: 'No Mitakshara-type birthright' },
      ],
    },
  ],
  misconceptions: [
    {
      id: 'src-m1',
      trap: 'Treating Family Law as one uniform code for all Indians.',
      correction: 'Personal laws differ by community; SMA is the main secular civil option.',
    },
  ],
  questionsAndAnswers: [
    {
      id: 'src-q10',
      draftingCategory: 'brief',
      question: 'Explain the sources of Hindu law and the main classical schools.',
      answer:
        'Introduction. Traditional sources: Shruti, Smriti, commentaries, custom. Modern: legislation and precedent. Schools: Mitakshara and Dayabhaga — difference on coparcenary. Codification by Hindu Code Acts. Conclusion.',
      explanation: 'Name both schools and one difference.',
    },
    {
      id: 'src-q16',
      draftingCategory: 'submissions',
      question: 'Discuss the application of personal laws in India for Hindus and Muslims and the role of modern statutes.',
      answer:
        'Introduction. Map of personal laws. Hindu: sources → schools → Code Acts. Muslim: classical sources → Shariat Act and special statutes. SMA as secular alternative. Method: identify community → statute → residual classical rule. Conclusion.',
      explanation: 'Hindu + Muslim maps plus SMA.',
    },
  ],
  bareActPointers: [
    'Muslim Personal Law (Shariat) Application Act, 1937',
    'Hindu Marriage Act, 1955 — s. 2',
    'Special Marriage Act, 1954',
  ],
  examTips: [
    'First sentence: which personal law applies.',
    'For joint family, name Mitakshara or Dayabhaga.',
  ],
  revisionPoints: [
    'Identify personal law before any section.',
    'Hindu: sources + Mitakshara/Dayabhaga + Code Acts.',
    'Muslim: classical sources + Shariat Act + special statutes.',
  ],
} satisfies TopicContent
