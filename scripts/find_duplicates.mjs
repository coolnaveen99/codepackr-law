import fs from 'fs';
import path from 'path';

const dir = 'src/data/judgments';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts');
const dupList = [
  'sp-gupta-1981',
  'sunil-batra-1978',
  'arnesh-kumar-2014',
  'bhajan-lal-1992',
  'joginder-kumar-1994',
  'bennett-coleman-1972',
  'sakal-papers-1962',
  'vellore-citizens-1996',
  'rudul-sah-1983',
  'sharad-birdhichand-1984',
  'sarla-mudgal-1995',
  'balco-2012',
  'swiss-ribbons-2019'
];

for (const dup of dupList) {
  const hits = [];
  for (const f of files) {
    const content = fs.readFileSync(path.join(dir, f), 'utf8');
    const regex = new RegExp(`['"]id['"]\\s*:\\s*['"]${dup}['"]`);
    if (regex.test(content)) {
      hits.push(f);
    }
  }
  console.log(`${dup} --> ${hits.join(', ')}`);
}
