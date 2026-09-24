import fs from 'node:fs'
import path from 'node:path'

const repositoryRoot = fs.existsSync(path.resolve('src/data')) ? path.resolve('.') : path.resolve('codepackr-law-main')
const files = [
  path.join(repositoryRoot, 'src/data/topics/tort/tort-interference-business.ts'),
  path.join(repositoryRoot, 'src/data/topics/tort/tort-remedies-damages.ts'),
  path.join(repositoryRoot, 'src/data/topics/tort/tort-remoteness-damage.ts'),
]

const contractDirectory = path.join(repositoryRoot, 'src/data/topics/contract')
for (const name of fs.readdirSync(contractDirectory)) {
  if (name.endsWith('.ts')) files.push(path.join(contractDirectory, name))
}

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8')
  let output = ''
  let quote = ''
  let escaped = false

  for (let index = 0; index < source.length; index++) {
    const character = source[index]
    if (quote) {
      output += character
      if (escaped) escaped = false
      else if (character === '\\') escaped = true
      else if (character === quote) quote = ''
      continue
    }

    if (character === "'" || character === '"' || character === '`') {
      quote = character
      output += character
    } else if (character === '\\' && source[index + 1] === 'n') {
      output += '\n'
      index++
    } else {
      output += character
    }
  }

  const normalized = output.replace("from '../topicTypes'\\n\\nexport default", "from '../topicTypes'\n\nexport default")
  fs.writeFileSync(file, normalized, 'utf8')
}

console.log(`Normalized ${files.length} Tort topic files.`)