import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  short: `Res judicata (S. 11 CPC) bars re-litigation of a matter that has been finally decided between the same parties. Res sub judice (S. 10) stays a later suit when the same matter is already pending in a competent court. Both promote finality and prevent multiplicity of proceedings.`,

  detailed: `Res judicata — Section 11 CPC\n\nConditions (classic):\n1. Matter directly and substantially in issue in the former suit\n2. Same matter in issue in the later suit\n3. Former suit between the same parties or parties under whom they claim\n4. Parties litigating under the same title\n5. Court that decided the former suit was competent\n6. Former suit was heard and finally decided\n\nRes sub judice — Section 10 CPC\nWhere a suit is pending in a competent court between the same parties on the same matter, a later suit must be stayed (not dismissed).\n\nDifference (exam favourite)\n• Res judicata → former suit already decided → later suit barred\n• Res sub judice → former suit still pending → later suit stayed\n\nExam focus: list conditions of S. 11; contrast S. 10 vs S. 11; constructive res judicata in short form.`,

  cases: [
    {
      name: 'Satyadhyan Ghosal v. Deorajin Debi',
      year: 1960,
      citation: 'AIR 1960 SC 941',
      holding: 'Res judicata applies to different stages of the same proceedings in appropriate contexts.',
      relevance: 'Scope of res judicata beyond a second independent suit.',
    },
    {
      name: 'Hope Plantations Ltd. v. Taluk Land Board',
      year: 1999,
      citation: '(1999) 5 SCC 590',
      holding: 'Constructive res judicata — matter which might and ought to have been raised is treated as decided.',
      relevance: 'Constructive res judicata under Expl. IV to S. 11.',
    },
  ],

  bareActPointers: ['S. 10 CPC', 'S. 11 CPC', 'Order II Rule 2'],

  examTips: [
    'Memorise the six conditions of S. 11 in order.',
    'S. 10 = stay (pending); S. 11 = bar (decided).',
    'Constructive res judicata is a frequent MCQ angle.',
    'Same parties + same title + competent court are easy marks in short answers.',
  ],
}

export default content
