import type { TopicContent } from '../loadTopicContent'

/**
 * Doctrine of Eclipse
 * Subject: constitution | Topic id: doctrine-eclipse
 * Constitutional Dormancy, Pre- vs Post-Constitution Laws (Art 13(1) vs 13(2)),
 * Non-Citizens' Rights, and Judicial Revival without Re-enactment.
 */
const content: TopicContent = {
  study: `## 1. Conceptual Genesis & Constitutional Text

The **Doctrine of Eclipse** is a foundational principle of Indian constitutional jurisprudence rooted in **Article 13(1)** of the Constitution. Article 13(1) provides:
> *"All laws in force in the territory of India immediately before the commencement of this Constitution, in so far as they are inconsistent with the provisions of this Part, shall, to the extent of such inconsistency, be void."*

The central question that arose before the Supreme Court was: Does the word **"void"** in Article 13(1) mean that an inconsistent pre-Constitution statute is completely dead, obliterated from the statute book, and non-existent for all purposes?

In the landmark case of *Bhikaji Narain Dhakras v. State of Madhya Pradesh* (1955), Chief Justice Sudhi Ranjan Das answered in the negative. The Supreme Court formulated the **Doctrine of Eclipse**:
- An inconsistent pre-Constitution law is **not dead or still-born**; it was validly enacted by a competent legislature prior to January 26, 1950.
- Upon the commencement of the Constitution, the shadow of the newly born Fundamental Right falls upon the inconsistent statutory provision, casting it into a state of **dormancy or moribund suspension (an eclipse)**.
- The statute remains on the statute book in an inoperative state as against citizens whose fundamental rights it infringes. However, it remains operative regarding pre-Constitution transactions, liabilities, non-citizens, or persons who cannot claim the benefit of that specific Fundamental Right.
- **Revival:** If the shadow is removed by a subsequent constitutional amendment curing the inconsistency, the law **automatically shakes off the eclipse and becomes fully enforceable again without the necessity of fresh legislative re-enactment**.

---

## 2. Historical & Jurisprudential Evolution

### A. Pre-Constitution Acts Not Void Ab Initio: *Keshavan Madhava Menon v. State of Bombay* (1951)
A 7-judge Constitution Bench held that Article 13(1) is strictly prospective in operation, not retroactive. A prosecution commenced under the Indian Press (Emergency Powers) Act, 1931 prior to January 26, 1950 for an offense committed before the Constitution came into force was not extinguished by Article 13(1), because the law was valid when enacted. Article 13(1) does not wipe out past acts or liabilities.

### B. Invalidation and the Eclipse Formulated: *Behram Khurshid Pesikaka v. State of Bombay* (1955)
In a prosecution under the Bombay Prohibition Act, 1949, the Supreme Court had previously held part of Section 13(b) unconstitutional as violating Article 19(1)(f) regarding medicinal and toilet preparations containing alcohol. The Constitution Bench held that the declaration of invalidity did not obliterate the section from the statute book; it merely rendered the section unenforceable against persons exercising their constitutional right.

### C. The Definitive Landmark: *Bhikaji Narain Dhakras v. State of M.P.* (1955)
The C.P. & Berar Motor Vehicles (Amendment) Act, 1947 empowered the State Government to monopolize motor transport services, excluding private motor transport operators.
- On January 26, 1950, this provision became inconsistent with Article 19(1)(g) (right to practice any profession, trade, or business) because reasonable restrictions under Article 19(6) did not then permit state monopolies.
- In 1951, Parliament enacted the **Constitution (First Amendment) Act, 1951**, amending Article 19(6) to expressly permit State monopolies in trade or commerce.
- In 1955, the State government sought to enforce the 1947 Act. Private operators challenged this, arguing that the 1947 Act became dead and void upon the commencement of the Constitution and could not be revived without being re-enacted by the State Legislature.
- **Holding:** The Supreme Court rejected this contention. The 1947 Act was valid when enacted. On January 26, 1950, it was merely overshadowed or eclipsed by Article 19(1)(g). Once the First Constitutional Amendment lifted the shadow from Article 19(6), the Act became active and enforceable again on its own vigor without fresh legislation.

---

## 3. Applicability to Post-Constitution Laws: Article 13(2)

The most contested doctrinal frontier was whether the Doctrine of Eclipse applies to **post-Constitution laws** enacted in violation of Article 13(2):
> *"The State shall not make any law which takes away or abridges the rights conferred by this Part and any law made in contravention of this clause shall, to the extent of the contravention, be void."*

### The "Still-Born Law" Rule: *Deep Chand* and *Mahendra Lal Jaini*
- In *Deep Chand v. State of U.P.* (1959), Subba Rao J. drew a fundamental constitutional distinction:
  - **Article 13(1) (Pre-Constitution Laws):** Enacted by a competent legislature before Part III existed; not void ab initio, but eclipsed.
  - **Article 13(2) (Post-Constitution Laws):** Imposes a total, express prohibition on legislative competence. A law enacted in violation of Article 13(2) is **born dead (still-born)**. A still-born law is a nullity *ab initio* and cannot be revived by any subsequent constitutional amendment. It must be enacted anew.
- In *Mahendra Lal Jaini v. State of U.P.* (1963), a Constitution Bench affirmed *Deep Chand*: the Doctrine of Eclipse **does not apply to post-Constitution laws against citizens**.

### The Exception for Non-Citizens: *State of Gujarat v. Ambica Mills Ltd.* (1974)
In *Ambica Mills*, the Supreme Court introduced a critical refinement:
- The Bombay Labour Welfare Fund Act, 1953 (a post-Constitution law) was challenged by a company on the ground that it violated Article 19(1)(f).
- The Supreme Court held that companies and corporations are not "citizens" under Article 19 and cannot claim Article 19 fundamental rights.
- Therefore, a post-Constitution law violating an Article 19 right is **not still-born for all purposes**. It is void only *vis-à-vis citizens*. As against non-citizens, corporations, and foreigners, the law was never void and remains completely operative.
- Hence, the law remains dormant (eclipsed) only in relation to citizens, demonstrating a modified application of dormancy even to post-Constitution statutes.`,

  sections: [
    {
      id: 'eclipse-foundation',
      title: 'Conceptual Essence & Article 13(1) Constitutional Text',
      order: 1,
      content: [
        'Article 13(1) renders pre-Constitution laws inconsistent with Fundamental Rights "void to the extent of such inconsistency".',
        'Under Bhikaji Narain Dhakras, "void" does not mean wiped out from existence; the statute is merely overshadowed (eclipsed) and remains dormant.',
        'If the constitutional barrier is removed by an amendment, the statute revives automatically without the legislature needing to re-enact it.',
      ],
    },
    {
      id: 'eclipse-post-const-divide',
      title: 'The Great Divide: Pre-Constitution vs Post-Constitution Laws',
      order: 2,
      content: [
        'Article 13(1) laws were validly born prior to 1950 and are merely eclipsed by Part III (Bhikaji).',
        'Article 13(2) laws enacted in violation of Fundamental Rights lack legislative competence and are still-born (void ab initio) under Deep Chand and Mahendra Lal Jaini; eclipse does not apply to revive them against citizens.',
      ],
    },
    {
      id: 'eclipse-ambica-mills',
      title: 'Non-Citizens and the Doctrine of Relative Voidness',
      order: 3,
      content: [
        'In State of Gujarat v. Ambica Mills (1974), the Supreme Court ruled that a post-Constitution law violating an Article 19 right is not void against non-citizens/corporations who possess no Article 19 rights.',
        'A post-Constitution statute may remain dormant regarding citizens but alive and enforceable regarding non-citizens.',
      ],
    },
  ],

  provisions: [
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-13', article: 'Article 13', title: 'Laws inconsistent with or in derogation of the Fundamental Rights' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-19', article: 'Article 19', title: 'Protection of certain rights regarding freedom of speech, etc.' },
    { actId: 'constitution', actName: 'Constitution of India', provisionId: 'constitution-article-368', article: 'Article 368', title: 'Power of Parliament to amend the Constitution and procedure therefor' },
  ],

  examples: [
    {
      id: 'eclipse-transport-monopoly-example',
      title: 'State Transport Monopoly and the First Amendment (Bhikaji)',
      description: 'The C.P. & Berar Motor Vehicles Act 1947 allowed the Provincial Government to monopolize transport routes. Upon the commencement of the Constitution on 26 Jan 1950, it was eclipsed by Art 19(1)(g) because Art 19(6) did not yet authorize state monopolies. When the Constitution (First Amendment) Act 1951 amended Art 19(6) to permit state monopolies, the shadow was removed, and the 1947 Act sprang back into full force without needing any fresh enactment by the State Assembly.',
    },
    {
      id: 'eclipse-post-constitution-stillborn-example',
      title: 'Post-Constitution Legislation Violating Article 14 (Still-Born)',
      description: 'In 1960, Parliament enacts a statute arbitrarily confiscating the property of a class of citizens without compensation or hearing, violating Article 14 and Article 19. Under the rule in Deep Chand v. State of U.P. (1959), this statute is still-born and void ab initio under Article 13(2). Even if the Constitution were later amended to alter property rights, the 1960 statute could never revive under the Doctrine of Eclipse; Parliament must enact a brand-new statute.',
    },
  ],

  hypotheticals: [
    {
      id: 'eclipse-hypo-1',
      title: 'The Pre-Constitution Press Act and Foreign Corporation Challenge',
      scenario: 'The Colonial Cinematograph and Press Censorship Act, 1938 prohibited the publication of certain political periodicals without prior executive license. On 26 January 1950, this was challenged as violating Article 19(1)(a). The Court held that the provision was dormant against Indian citizens. In 2024, a foreign multinational media corporation registered in the UK challenges an order passed under the same 1938 Act seizing its printing press in Mumbai, claiming the 1938 Act was killed by Article 13(1) in 1950. Decide the validity of the seizure.',
      analysis: '1. Prospective Nature of Art 13(1) & Eclipse: Under Keshavan Madhava Menon and Bhikaji, pre-Constitution laws are not wiped out or void ab initio; they are merely eclipsed to the extent of inconsistency with Fundamental Rights. 2. Non-Citizenship Status: Article 19(1)(a) is explicitly guaranteed only to "citizens" of India. Under State of Gujarat v. Ambica Mills (1974) and STC v. CTO (1963), foreign companies and non-citizens cannot invoke Article 19 rights. 3. Legal Enforceability: Because the 1938 Act was never unconstitutional vis-à-vis non-citizens, it remained fully alive and operational against them. The seizure order passed against the foreign media corporation under the 1938 Act is completely valid and enforceable.',
    },
  ],

  distinctions: [
    {
      conceptA: 'Doctrine of Eclipse',
      conceptB: 'Doctrine of Severability',
      points: [
        'Eclipse deals with the temporal dormancy and revival of an otherwise valid law when obscured by a Fundamental Right.',
        'Severability deals with the structural surgery of separating unconstitutional clauses from constitutional clauses within the same enactment.',
        'In Eclipse, the entire provision remains on the statute book in a shadowed condition; in Severability, the invalid portion is judicially excised or struck down, leaving the remainder intact.',
        'Eclipse applies primarily to pre-Constitution laws (and relative voidness under Art 13(1)); Severability applies equally to pre- and post-Constitution enactments under both Art 13(1) and Art 13(2).',
      ],
    },
    {
      conceptA: 'Pre-Constitution Laws (Art 13(1))',
      conceptB: 'Post-Constitution Laws (Art 13(2))',
      points: [
        'Enacted by a legislature having competent authority when passed; not void ab initio.',
        'Enacted under an express constitutional prohibition; void ab initio and still-born (Deep Chand).',
        'Fully subject to the Doctrine of Eclipse; revives when the constitutional impediment is removed.',
        'Cannot be revived by constitutional amendment against citizens; must be re-enacted de novo.',
      ],
    },
  ],

  misconceptions: [
    {
      misconception: 'When a pre-Constitution law is declared void under Article 13(1), it is automatically repealed and erased from the statute book.',
      correction: 'A judicial declaration under Article 13(1) does not repeal the statute. Only the legislature can repeal a statute. The law remains on the statute book in a dormant, inoperative state (eclipsed) and revives automatically if the constitutional defect is removed.',
    },
    {
      misconception: 'The Doctrine of Eclipse applies identically to all post-Constitution laws.',
      correction: 'The Supreme Court in Deep Chand and Mahendra Lal Jaini clearly held that post-Constitution laws violating Fundamental Rights are still-born and cannot revive under Eclipse. However, Ambica Mills recognized an exception for relative voidness against non-citizens who cannot claim Article 19 rights.',
    },
  ],

  questionsAndAnswers: [
    {
      id: 'eclipse-qa-10m',
      draftingCategory: 'brief',
      question: 'Explain the Doctrine of Eclipse with reference to Article 13(1) of the Constitution. Discuss the seminal decision in Bhikaji Narain Dhakras v. State of Madhya Pradesh.',
      answer: `### 1. Synopsis / Introduction
The Doctrine of Eclipse is a foundational principle of Indian constitutional interpretation governing the status of pre-Constitution laws that conflict with Fundamental Rights under **Article 13(1)**. The doctrine establishes that such laws are not wiped out or void ab initio, but remain in a dormant, overshadowed state ("eclipsed"), capable of automatic revival once the constitutional impediment is removed.

---

### 2. Constitutional Text: Article 13(1)
Article 13(1) states:
> *"All laws in force in the territory of India immediately before the commencement of this Constitution, in so far as they are inconsistent with the provisions of this Part, shall, to the extent of such inconsistency, be void."*

The Supreme Court had to resolve whether "void" in Article 13(1) meant completely non-existent or merely unenforceable.

---

### 3. Landmark Landmark: *Bhikaji Narain Dhakras v. State of M.P.* (AIR 1955 SC 781)
1. **Facts:** The C.P. & Berar Motor Vehicles (Amendment) Act, 1947 empowered the Provincial Government to monopolize motor transport services. On January 26, 1950, this provision conflicted with Article 19(1)(g) because reasonable restrictions under Article 19(6) did not yet permit State commercial monopolies.
2. **Subsequent Constitutional Amendment:** In 1951, Parliament passed the **Constitution (First Amendment) Act, 1951**, amending Article 19(6) to expressly permit State monopolies.
3. **The Argument:** Transport operators argued that the 1947 Act had become void and dead on 26 January 1950, and could not be enforced in 1955 without fresh legislative enactment.
4. **Supreme Court Ratio (Das, Acting C.J.):**
   - The 1947 Act was valid when enacted prior to the Constitution; it was not still-born.
   - Upon the commencement of the Constitution, the shadow of Article 19(1)(g) fell upon it, rendering it dormant (eclipsed).
   - Once the First Amendment amended Article 19(6), the shadow was lifted. The 1947 Act **revived automatically** and became operative without any need for fresh legislation.

---

### 4. Key Attributes of the Doctrine of Eclipse
- **Dormancy, not Extinction:** The statute is not wiped off the statute book; it remains alive for past acts, liabilities, and non-citizens.
- **Automatic Revival:** The removal of the constitutional inconsistency lifts the eclipse immediately.
- **Application Scope:** Applies universally to pre-Constitution laws under Article 13(1).

---

### 5. Conclusion
The Doctrine of Eclipse harmonizes statutory continuity with constitutional supremacy, preventing legislative chaos and recognizing that valid pre-independence laws need not be mechanically re-enacted once constitutional impediments are cured.`,
      relatedProvisionIds: ['constitution-article-13', 'constitution-article-19'],
    },
    {
      id: 'eclipse-qa-16m',
      draftingCategory: 'submissions',
      question: '"The Doctrine of Eclipse reflects the nuanced jurisprudence of constitutional dormancy rather than legislative extinction." Trace the evolution of the Doctrine of Eclipse from Keshavan Madhava Menon to Bhikaji Narain Dhakras. Critically examine whether the doctrine applies to post-Constitution laws in light of Deep Chand, Mahendra Lal Jaini, and State of Gujarat v. Ambica Mills.',
      answer: `### 1. Introduction: Constitutional Anchor and Doctrinal Premise
When the Sovereign Democratic Republic of India adopted its Constitution on January 26, 1950, it inherited an immense corpus of colonial statutes. To ensure that these laws conformed to democratic values, Article 13 was enacted as the constitutional sentinel. Under Article 13(1), pre-Constitution laws inconsistent with Fundamental Rights are declared "void to the extent of such inconsistency". 

The judicial interpretation of the term "void" gave birth to the **Doctrine of Eclipse**—a doctrine establishing that an unconstitutional pre-Constitution statute is not wiped out of legal existence, but is merely obscured and rendered dormant by the shadow of Fundamental Rights, ready to revive the moment the constitutional obstruction is lifted.

---

### 2. Genesis and Evolutionary Trajectory

#### A. Prospective Operation: *Keshavan Madhava Menon v. State of Bombay* (1951 SCR 228)
A 7-judge Constitution Bench settled that Article 13(1) has no retrospective effect. It does not obliterate pre-Constitution laws from the inception of time. A prosecution initiated under the Indian Press (Emergency Powers) Act, 1931 prior to January 26, 1950 remained valid because the law was valid when the offense was committed.

#### B. The Eclipse Formulated: *Bhikaji Narain Dhakras v. State of M.P.* (1955) 2 SCR 589
Chief Justice Sudhi Ranjan Das articulated the classic doctrine. The C.P. & Berar Motor Vehicles (Amendment) Act, 1947 created a state monopoly over commercial motor routes, conflicting with Article 19(1)(g) on January 26, 1950. However, when the Constitution (First Amendment) Act, 1951 amended Article 19(6) to allow state monopolies, the Supreme Court ruled:
> *"The true position is that the impugned Act for the time being was eclipsed or overshadowed by the fundamental right and remained dormant and cannot be said to be dead altogether... When the shadow is removed by the amendment of the Constitution, the Act becomes free from all blemish or infirmity and remains valid and operative."*

---

### 3. The Central Constitutional Dilemma: Does Eclipse Apply to Post-Constitution Laws?

The jurisprudence split sharply over whether the Doctrine of Eclipse applies to laws enacted **after** January 26, 1950 under **Article 13(2)**:
> *"The State shall not make any law which takes away or abridges the rights conferred by this Part and any law made in contravention of this clause shall, to the extent of the contravention, be void."*

#### A. The "Still-Born" Doctrine: *Deep Chand v. State of U.P.* (AIR 1959 SC 648)
Justice K. Subba Rao drew a rigid conceptual dichotomy between Article 13(1) and 13(2):
1. **Pre-Constitution Laws (Art 13(1)):** Enacted by a competent legislature with full constitutional capacity at the time of passage. They are validly born; hence, an inconsistency emerging on 26 Jan 1950 merely eclipses their enforceability.
2. **Post-Constitution Laws (Art 13(2)):** Article 13(2) imposes an absolute constitutional prohibition on legislative competence (*"The State shall not make any law..."*). A law enacted in violation of Part III is **born dead (still-born)**. A still-born law is void *ab initio* and a complete nullity; no subsequent constitutional amendment can revive a corpse. The legislature must re-enact the statute from scratch.

#### B. Affirmation of the Still-Born Rule: *Mahendra Lal Jaini v. State of U.P.* (AIR 1963 SC 1019)
A unanimous Constitution Bench affirmed *Deep Chand*, holding that the Doctrine of Eclipse **does not apply to post-Constitution laws** enacted in violation of Fundamental Rights, because legislative power was lacking at the time of birth.

---

### 4. The Modern Synthesis: Relative Voidness & Non-Citizens in *State of Gujarat v. Ambica Mills* (1974) 4 SCC 656
In *Ambica Mills*, Justice K.K. Mathew delivered an epochal judgment that refined the rigid "still-born" dogma:
1. **The Issue:** The Bombay Labour Welfare Fund Act, 1953 (a post-Constitution law) took over unpaid accumulations from employers. A company challenged the law under Article 19(1)(f).
2. **Citizenship Barrier:** The Court noted that under *State Trading Corporation v. CTO* (1963), companies are juristic persons, not "citizens", and therefore cannot invoke Article 19.
3. **The Doctrine of Relative Voidness:** Justice Mathew held that a post-Constitution law violating an Article 19 right is **not void in the absolute sense**. It is void only *vis-à-vis citizens* whose rights are breached. As against non-citizens, corporations, and foreigners, the law was **never void and remains fully valid and enforceable**.
4. **Impact on Eclipse:** *Ambica Mills* proved that even a post-Constitution law can exist in a state of partial or relative dormancy, softening the absolutist doctrine of *Deep Chand*.

---

### 5. Comparative Matrix: Pre- vs Post-Constitution Application

| Parameter | Pre-Constitution Law (Art 13(1)) | Post-Constitution Law (Art 13(2)) |
| :--- | :--- | :--- |
| **Status at Enactment** | Validly enacted by a competent legislature. | Enacted in breach of constitutional prohibition. |
| **Initial Effect of Conflict** | Overshadowed / Dormant (Eclipsed). | Void ab initio / Still-born as against citizens (*Deep Chand*). |
| **Effect of Constitutional Amendment** | **Revives automatically** without re-enactment (*Bhikaji*). | **Does not revive** against citizens; must be re-enacted (*Mahendra Lal*). |
| **Status regarding Non-Citizens** | Fully enforceable. | Enforceable if the violated right belongs only to citizens (*Ambica Mills*). |

---

### 6. Conclusion
The Doctrine of Eclipse is a masterclass in judicial pragmatism. It bridges the transition from a colonial regime to a rights-based constitutional republic. While the strict rule of *Deep Chand* maintains legislative accountability under Article 13(2), the sophisticated doctrine of relative voidness in *Ambica Mills* demonstrates that the shadow of unconstitutionality is a nuanced legal shield, protecting rights without needlessly obliterating statutory infrastructure.`,
      relatedProvisionIds: ['constitution-article-13', 'constitution-article-19', 'constitution-article-368'],
    },
  ],

  cases: [
    {
      name: 'Keshavan Madhava Menon v. State of Bombay',
      year: 1951,
      citation: '1951 SCR 228',
      holding: 'Article 13(1) is prospective; it does not render pre-Constitution laws void ab initio or extinguish pre-Constitution offenses and proceedings.',
      relevance: 'Foundational authority on prospective nature of Article 13(1).',
    },
    {
      name: 'Bhikaji Narain Dhakras v. State of Madhya Pradesh',
      year: 1955,
      citation: 'AIR 1955 SC 781',
      holding: 'Pre-Constitution laws inconsistent with Fundamental Rights are not dead but eclipsed; when the constitutional impediment is removed by amendment, the law revives automatically without re-enactment.',
      relevance: 'Classic landmark establishing the Doctrine of Eclipse.',
    },
    {
      name: 'Deep Chand v. State of U.P.',
      year: 1959,
      citation: 'AIR 1959 SC 648',
      holding: 'Post-Constitution laws violating Article 13(2) are still-born and void ab initio; the Doctrine of Eclipse does not apply to revive them against citizens.',
      relevance: 'Established the still-born law doctrine for post-Constitution enactments.',
    },
    {
      name: 'Mahendra Lal Jaini v. State of U.P.',
      year: 1963,
      citation: 'AIR 1963 SC 1019',
      holding: 'Affirmed Deep Chand; held that the Doctrine of Eclipse applies only to pre-Constitution laws under Article 13(1), not post-Constitution laws under Article 13(2).',
      relevance: 'Constitution bench affirmation on scope of eclipse.',
    },
    {
      name: 'State of Gujarat v. Ambica Mills Ltd.',
      year: 1974,
      citation: '(1974) 4 SCC 656',
      holding: 'A post-Constitution law violating Article 19 is not void ab initio as against non-citizens or corporations who do not possess Article 19 rights; established relative voidness.',
      relevance: 'Relative voidness and applicability of laws to non-citizens.',
    },
  ],

  bareActPointers: [
    'Art 13(1) — Pre-Constitution laws inconsistent with FRs void to the extent of inconsistency',
    'Art 13(2) — State shall not make any law taking away/abridging FRs',
    'Art 13(3) — Definition of "law" and "laws in force"',
    'Art 19(1) & (6) — Citizen freedoms and State commercial monopolies',
  ],
}

export default content
