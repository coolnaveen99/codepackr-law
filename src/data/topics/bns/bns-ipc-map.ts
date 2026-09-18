import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  study: `IPC → BNS conversion

Canonical record: [[REF:PROCEDURE:CRIMINAL-LAW:IPC-TO-BNS]].

Use the mapper tool for a full concordance. Memorise the headline conversions and the number collisions.

Headline conversions
• 302 → 103 (murder punishment)
• 304 → 105 (culpable homicide NAM)
• 304A → 106 (rash/negligent death)
• 304B → 80 (dowry death)
• 307 → 109 (attempt to murder)
• 375/376 → 63/64
• 498A → 85/86
• 420 → 318
• 379 → 303
• 34 → 3(5)
• 149 → 190
• 124A → repealed; see s. 152 (different ingredients)

Number collisions
• BNS 304 = snatching (not culpable homicide)
• BNS 309 = robbery (not attempt to suicide)
• BNS 353 = public mischief (not assault on a public servant)

Transition
Date of offence, not date of FIR, decides IPC vs BNS on substance (s. 358 + Article 20(1)). Offences before 1 July 2024 stay IPC.

The interactive mapper is at the BNS ↔ IPC tool.`,
  examTips: [
    'Date of offence controls. Not date of FIR.',
    'Never paste 302, 376, 420, 498A into a post-1 July 2024 charge-sheet.',
  ],
  relatedTopics: ['culpable-homicide-murder', 'sexual-offences', 'offences-property', 's-358'],
}

export default content
