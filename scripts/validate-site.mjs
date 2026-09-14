import { readdir, readFile, stat } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, '..');
const errors = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === '.git') continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(fullPath));
    else files.push(fullPath);
  }
  return files;
}

async function exists(target) {
  try {
    const info = await stat(target);
    if (info.isDirectory()) return exists(path.join(target, 'index.html'));
    return info.isFile();
  } catch {
    return false;
  }
}

const files = (await walk(root)).sort();
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const lessonFiles = htmlFiles.filter((file) => path.dirname(file) === path.join(root, 'lessons'));
const referenceFiles = htmlFiles.filter((file) => path.dirname(file) === path.join(root, 'reference'));
const contentHtmlFiles = htmlFiles.filter((file) => path.basename(file) !== '404.html');

if (lessonFiles.length !== 40) errors.push(`Expected 40 lessons, found ${lessonFiles.length}.`);
if (referenceFiles.length !== 15) errors.push(`Expected 15 reference pages, found ${referenceFiles.length}.`);

const attributePattern = /\b(?:href|src)=["']([^"']+)["']/g;
const idPattern = /\bid=["']([^"']+)["']/g;

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const relativeFile = path.relative(root, file);
  const ids = new Set();
  for (const match of html.matchAll(idPattern)) {
    if (ids.has(match[1])) errors.push(`${relativeFile}: duplicate id "${match[1]}".`);
    ids.add(match[1]);
  }

  for (const match of html.matchAll(attributePattern)) {
    const value = match[1].trim();
    if (!value || value.startsWith('#') || /^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(value)) continue;
    if (value.startsWith('/')) {
      errors.push(`${relativeFile}: root-absolute URL breaks GitHub project Pages: ${value}`);
      continue;
    }
    const clean = decodeURIComponent(value.split('#')[0].split('?')[0]);
    if (!clean) continue;
    const target = path.resolve(path.dirname(file), clean);
    if (!target.startsWith(root + path.sep) && target !== root) {
      errors.push(`${relativeFile}: link escapes repository: ${value}`);
    } else if (!await exists(target)) {
      errors.push(`${relativeFile}: missing local target: ${value}`);
    }
  }

  if (contentHtmlFiles.includes(file)) {
    const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || '';
    if (!/<h1\b/i.test(main) || main.replace(/<[^>]+>/g, '').trim().length < 80) {
      errors.push(`${relativeFile}: initial HTML must contain a meaningful h1 and course content.`);
    }
    if (!/<title>[^<]+<\/title>/i.test(html)) errors.push(`${relativeFile}: missing a descriptive title.`);
    if (!/<meta\s+name=["']description["']\s+content=["'][^"']+["']/i.test(html)) {
      errors.push(`${relativeFile}: missing a meta description.`);
    }
    if (!/<link\s+rel=["']canonical["']\s+href=["']https:\/\/[^"']+["']/i.test(html)) {
      errors.push(`${relativeFile}: missing an HTTPS canonical URL.`);
    }
  }

  for (const match of html.matchAll(/<script\s+type=["']application\/ld\+json["']\s*>([\s\S]*?)<\/script>/gi)) {
    try {
      JSON.parse(match[1]);
    } catch (error) {
      errors.push(`${relativeFile}: invalid JSON-LD: ${error.message}`);
    }
  }
}

const siteBase = 'https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/';
const expectedSitemapUrls = new Set(contentHtmlFiles.map((file) => {
  const relative = path.relative(root, file).split(path.sep).join('/');
  return relative === 'index.html' ? siteBase : `${siteBase}${relative}`;
}));
const sitemapText = await readFile(path.join(root, 'sitemap.xml'), 'utf8');
const actualSitemapUrls = new Set(Array.from(sitemapText.matchAll(/<loc>([^<]+)<\/loc>/g), (match) => match[1]));
for (const url of expectedSitemapUrls) {
  if (!actualSitemapUrls.has(url)) errors.push(`sitemap.xml: missing ${url}`);
}
for (const url of actualSitemapUrls) {
  if (!expectedSitemapUrls.has(url)) errors.push(`sitemap.xml: unexpected ${url}`);
}

for (const file of files.filter((candidate) => candidate.endsWith('.js'))) {
  const result = spawnSync(process.execPath, ['--check', file], { encoding: 'utf8' });
  if (result.status !== 0) errors.push(`${path.relative(root, file)}: JavaScript syntax error\n${result.stderr.trim()}`);
}

const prerender = spawnSync(process.execPath, [path.join(root, 'scripts', 'prerender-static.mjs'), '--check'], { encoding: 'utf8' });
if (prerender.status !== 0) {
  errors.push(`Prerender verification failed:\n${(prerender.stderr || prerender.stdout).trim()}`);
}

const version = (await readFile(path.join(root, 'VERSION'), 'utf8')).trim();
const publicVersionMarkers = new Map([
  [path.join(root, 'CHANGELOG.md'), `## ${version}`],
  [path.join(root, 'index.html'), `"version": "${version}"`],
  [path.join(root, 'llms.txt'), `当前版本：${version}`],
]);
for (const [file, marker] of publicVersionMarkers) {
  if (!(await readFile(file, 'utf8')).includes(marker)) {
    errors.push(`${path.relative(root, file)}: missing current version marker ${marker}`);
  }
}

for (const file of files.filter((candidate) =>
  /\.(?:html|js|xml|txt|webmanifest|md)$/i.test(candidate)
  && candidate !== fileURLToPath(import.meta.url)
)) {
  const content = await readFile(file, 'utf8');
  if (content.includes('semiconductor-learning.netlify.app')) {
    errors.push(`${path.relative(root, file)}: contains legacy Netlify URL.`);
  }
  if (/file:\/\/\/|C:\\Users\\|\/Users\//.test(content)) {
    errors.push(`${path.relative(root, file)}: contains a local filesystem path.`);
  }
}

if (errors.length) {
  console.error(`Validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validation passed: ${htmlFiles.length} HTML pages, ${lessonFiles.length} lessons, ${referenceFiles.length} reference pages.`);
