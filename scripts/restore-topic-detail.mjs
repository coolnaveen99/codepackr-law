/**
 * TD-001: Assemble TopicDetail.tsx from scripts/td-source/part*.txt (committed full source fragments).
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const target = path.join(root, "src/components/subjects/TopicDetail.tsx")
const partsDir = path.join(root, "scripts/td-source")

if (fs.existsSync(target)) {
  const cur = fs.readFileSync(target, "utf8")
  if (
    cur.includes("TopicDetailProps") &&
    cur.includes("export function TopicDetail") &&
    cur.length > 20000 &&
    cur.includes("always surface canonical graph")
  ) {
    console.log("TopicDetail.tsx already full source; skip assemble")
    process.exit(0)
  }
}

const files = fs.readdirSync(partsDir).filter((f) => /^part\d+\.txt$/.test(f)).sort()
if (files.length === 0) {
  console.error("No scripts/td-source/part*.txt fragments found")
  process.exit(1)
}
const text = files.map((f) => fs.readFileSync(path.join(partsDir, f), "utf8")).join("")
if (!text.includes("export function TopicDetail") || text.length < 5000) {
  console.error("Assembled TopicDetail invalid", text.length)
  process.exit(1)
}
fs.mkdirSync(path.dirname(target), { recursive: true })
fs.writeFileSync(target, text)
console.log("Assembled TopicDetail.tsx (" + text.length + " bytes) from " + files.length + " parts")
