export type CpcFlag = 'exam' | 'repealed' | 'omitted'

export type CpcSection = {
  id: string
  title: string
  cluster: string
  gist: string
  flags: CpcFlag[]
  related: string[]
}
