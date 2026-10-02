#!/usr/bin/env node
/** Blocks CM-002+ completion until topic records carry provenance. */
import { readFileSync } from 'node:fs'
const subjects = readFileSync(new URL('../src/data/subjects.ts', import.meta.url), 'utf8')
const hasProvenance = subjects.includes('provenance') && subjects.includes('verificationStatus')
console.log(hasProvenance ? 'CM migration fields present' : 'CM-002–CM-012 BLOCKED: LawTopic has no provenance or verificationStatus')
process.exit(hasProvenance ? 0 : 2)
