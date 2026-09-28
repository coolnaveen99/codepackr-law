import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const templatePath = path.join(distDir, 'index.html');
const sitemapPath = path.resolve('public/sitemap.xml');
if (!fs.existsSync(templatePath)) throw new Error('dist/index.html not found');
if (!fs.existsSync(sitemapPath)) throw new Error('public/sitemap.xml not found');

const template = fs.readFileSync(templatePath, 'utf8');
const toolSource = fs.readFileSync(path.resolve('src/data/tools.ts'), 'utf8');

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.isFile() && full.endsWith('.ts')) out.push(full);
  }
  return out;
}

const judgmentSource = walk(path.resolve('src/data/judgments')).map(f => fs.readFileSync(f, 'utf8')).join('\n');
const subjectSource = fs.existsSync(path.resolve('src/data/subjects.ts'))
  ? fs.readFileSync(path.resolve('src/data/subjects.ts'), 'utf8')
  : '';

const esc = (value) => String(value)
  .replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const pretty = (s) => s.split('/').filter(Boolean).pop()?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Codepackr Law';

function findTool(slug) {
  const re = new RegExp(`slug:\\s*['"]${slug.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')}['"][\\s\\S]*?(?=\\n  },|\\n},)`);
  const text = toolSource.match(re)?.[0] || '';
  return {
    name: text.match(/name:\s*['"]([^'"]+)['"]/)?.[1],
    description: text.match(/description:\s*['"]([^'"]+)['"]/)?.[1]
  };
}

function findJudgment(id) {
  const re = new RegExp(`id:\\s*['"]${id.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')}['"][\\s\\S]*?(?=\\n\\s*\\},\\s*\\n|\\n\\s*\\})`);
  const text = judgmentSource.match(re)?.[0] || '';
  return {
    name: text.match(/caseName:\s*['"]([^'"]+)['"]/)?.[1],
    summary: text.match(/summary:\s*['"]([^'"]+)['"]/)?.[1]
  };
}

function metadataFor(route) {
  if (!route) return {
    title: 'Codepackr Law — Indian Law Library & Practice Reference',
    description: 'Free digital Indian law library and practice reference covering statutes, case law, legal concepts, drafting formats, study notes, and exam preparation tools.'
  };
  if (route === 'case-law') return {
    title: 'Case Law Library — Supreme Court Landmark Judgments | Codepackr Law',
    description: 'Search and study Indian Supreme Court landmark judgments with facts, issues, statutory provisions, reasoning, ratio, and exam-focused notes.'
  };
  if (route === 'knowledge') return {
    title: 'Legal Knowledge Graph & Canonical Concepts | Codepackr Law',
    description: 'Canonical legal doctrines, definitions, legal maxims, and constitutional principles linked across Indian law study material.'
  };
  if (route.startsWith('tool/')) {
    const slug = route.slice(5);
    const tool = findTool(slug);
    return {
      title: `${tool.name || pretty(slug)} — Free Legal Practice Tool | Codepackr Law`,
      description: tool.description || `Free Indian law practice and study tool for ${pretty(slug)}.`
    };
  }
  if (route.startsWith('case-law/judgment/')) {
    const id = route.slice('case-law/judgment/'.length);
    const j = findJudgment(id);
    return {
      title: `${j.name || `Judgment ${pretty(id)}`} — Ratio, Facts & Case Brief | Codepackr Law`,
      description: j.summary || `Study the facts, issues, reasoning and ratio of ${j.name || 'this Indian judgment'} in Codepackr Law.`
    };
  }
  if (route.startsWith('subjects/')) {
    const parts = route.split('/');
    const subject = parts[1] || '';
    const topic = parts[2];
    if (topic) return {
      title: `${pretty(topic)} — ${pretty(subject)} | Codepackr Law`,
      description: `Study ${pretty(topic)} under ${pretty(subject)} with statutory provisions, concepts, explanations, and exam-oriented legal notes.`
    };
    return {
      title: `${pretty(subject)} — Indian Law Subject & Bare Act Reference | Codepackr Law`,
      description: `Study ${pretty(subject)} with statutory provisions, concepts, topics, and exam-oriented legal reference material.`
    };
  }
  return {
    title: `${pretty(route)} | Codepackr Law`,
    description: `Indian law reference material and practice resources for ${pretty(route)} from Codepackr Law.`
  };
}

const urls = [...fs.readFileSync(sitemapPath, 'utf8').matchAll(/<loc>https:\/\/law\.codepackr\.com\/([^<]*)<\/loc>/g)]
  .map(m => m[1].replace(/^\/+|\/+$/g, ''));
const pages = ['', ...urls].filter((v, i, a) => a.indexOf(v) === i);

for (const route of pages) {
  const { title, description } = metadataFor(route);
  const canonical = route ? `https://law.codepackr.com/${route}` : 'https://law.codepackr.com/';
  let html = template;
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${esc(title)}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*"/i, `<meta name="description" content="${esc(description)}"`);
  html = html.replace(/<link rel="canonical" href="[^"]*"/i, `<link rel="canonical" href="${canonical}"`);
  html = html.replace(/<meta property="og:title" content="[^"]*"/i, `<meta property="og:title" content="${esc(title)}"`);
  html = html.replace(/<meta property="og:description" content="[^"]*"/i, `<meta property="og:description" content="${esc(description)}"`);
  html = html.replace(/<meta property="og:url" content="[^"]*"/i, `<meta property="og:url" content="${canonical}"`);
  html = html.replace(/<meta property="og:image:alt" content="[^"]*"/i, `<meta property="og:image:alt" content="${esc(title)}"`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*"/i, `<meta name="twitter:title" content="${esc(title)}"`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*"/i, `<meta name="twitter:description" content="${esc(description)}"`);
  html = html.replace(/<meta name="twitter:image:alt" content="[^"]*"/i, `<meta name="twitter:image:alt" content="${esc(title)}"`);
  const crawler = `<div id="root" data-codepackr-prerendered="true"><main style="max-width:900px;margin:40px auto;padding:20px;font-family:system-ui,sans-serif"><p style="color:#8B1E3F">Codepackr Law</p><h1>${esc(title)}</h1><p>${esc(description)}</p><p>Indian law reference, case law and legal study tools.</p></main></div>`;
  html = html.replace(/<div id="root">[\\s\\S]*?<\/div>/i, crawler);
  if (!route) fs.writeFileSync(path.join(distDir, 'index.html'), html);
  else {
    const dir = path.join(distDir, route);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
    fs.writeFileSync(path.join(distDir, `${route}.html`), html);
  }
}
console.log(`Prerendered ${pages.length} Codepackr Law social-preview pages.`);
