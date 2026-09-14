import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, '..');
const mode = process.argv.includes('--write') ? 'write' : 'check';

const context = { window: {} };
vm.runInNewContext(
  await readFile(path.join(root, 'assets', 'complete-course-data.js'), 'utf8'),
  context,
  { filename: 'complete-course-data.js' }
);
const course = context.window.AdvancedPackagingCourse;
if (!course) throw new Error('AdvancedPackagingCourse data was not loaded.');

const escapeAttribute = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const lessonHref = (lesson, prefix = '') => `${prefix}lessons/${lesson.id}-${lesson.slug}.html`;

function renderIndex() {
  return `
    <!-- prerendered: start -->
    <nav class="site-topbar" aria-label="网站主导航">
      <a class="site-brand" href="index.html">封装解构 <small>ADVANCED PACKAGING</small></a>
      <div class="site-nav-links"><a href="#paths">学习路线</a><a href="#course-map">课程目录</a><a href="guide.html">使用指南</a></div>
      <a class="nav-cta" href="${lessonHref(course.catalog[0])}">开始学习</a>
    </nav>
    <header class="cover-hero">
      <div class="cover-copy">
        <p class="cover-kicker">系统级半导体课程 · 免费中文开源课程</p>
        <h1>看懂芯片之后，<br><em>再看懂它们如何连接。</em></h1>
        <p class="cover-lede">从 wafer、die 与 package 出发，穿过 Chiplet、2.5D、HBM、混合键合和 CoWoS，建立可用于工程判断、产业研究、科研准备与大学专业选择的先进封装框架。</p>
        <div class="cover-actions"><a class="cover-primary" href="${lessonHref(course.catalog[0])}">从第一课开始 <span>→</span></a><a class="cover-secondary" href="#course-map">浏览 40 课目录</a></div>
        <div class="cover-proof"><span><strong>40</strong> 节独立短课</span><span><strong>6</strong> 个知识模块</span><span><strong>32</strong> 个一手来源</span></div>
      </div>
    </header>
    <section class="site-section" id="paths">
      <div class="site-section-head"><div><p class="section-index">LEARNING PATHS</p><h2>同一套底座，三条使用路线</h2></div></div>
      <div class="track-grid">
        <a class="track-card" href="#module-5"><h3>投资与产业研究</h3><p>从技术结构走到产能、成本、价值链、资料分级与公司研究。</p></a>
        <a class="track-card" href="#module-3"><h3>工程与科研</h3><p>从互连、供电、热和可靠性进入协同设计、验证与实验。</p></a>
        <a class="track-card" href="#module-6"><h3>大学专业准备</h3><p>映射电路、材料、机械、制造、统计与编程先修知识。</p></a>
      </div>
    </section>
    <section class="site-section course-directory" id="course-map">
      <div class="site-section-head"><div><p class="section-index">COURSE DIRECTORY</p><h2>40 课完整目录</h2></div><p>每课约 8–15 分钟；案例答案可直接展开，无需注册账号。</p></div>
      <div class="module-directory">${course.modules.map((module) => {
        const lessons = course.catalog.filter((lesson) => lesson.module === module.id);
        return `<section class="module-block site-module" id="module-${module.id}">
          <div class="module-title-row"><div class="module-number">0${module.id}</div><div><h2>${module.title}</h2><p>${module.summary}</p></div><a class="module-reference-link" href="reference/${module.reference}">模块速查 ↗</a></div>
          <div class="lesson-list">${lessons.map((lesson) => `<a class="lesson-link" href="${lessonHref(lesson)}"><span class="lesson-number">${lesson.id}</span><span>${lesson.title}</span><span>阅读</span></a>`).join('')}</div>
        </section>`;
      }).join('')}</div>
    </section>
    <section class="closing-cta"><h2>先获得地图，再钻进细节。</h2><p>第一课先解释先进封装为什么从制造末端变成系统设计的一部分。</p><a href="${lessonHref(course.catalog[0])}">开始第一课 <span>→</span></a></section>
    <footer class="site-footer"><a href="index.html">封装解构</a><p>Chinese-language open course on semiconductor and advanced packaging.</p><div><a href="guide.html">使用指南</a><a href="#course-map">课程目录</a><a href="https://github.com/fanfanfanfanfan626/advanced-semiconductor-packaging-course">GitHub 源码</a></div></footer>
    <!-- prerendered: end -->
  `;
}

function renderLesson(id) {
  const lesson = course.lessons[id];
  const catalogIndex = course.catalog.findIndex((item) => item.id === id);
  const item = course.catalog[catalogIndex];
  const module = course.modules.find((entry) => entry.id === item.module);
  const previous = course.catalog[catalogIndex - 1];
  const next = course.catalog[catalogIndex + 1];
  const sourceNumber = Object.fromEntries(lesson.sources.map((key, index) => [key, index + 1]));
  const citation = (key) => key && sourceNumber[key] ? ` <a href="#source-${sourceNumber[key]}">[${sourceNumber[key]}]</a>` : '';
  const localHref = (entry) => entry ? `${entry.id}-${entry.slug}.html` : '';

  return `
    <!-- prerendered: start -->
    <header class="hero">
      <div class="breadcrumb"><a href="../index.html">课程总目录</a><span>›</span><span>模块 ${module.id} · ${module.title}</span><span>›</span><span>第 ${Number(id)} 课</span></div>
      <p class="eyebrow">Semiconductor &amp; Advanced Packaging · Lesson ${id}</p>
      <h1>${lesson.title}</h1><p class="lede">${lesson.lede}</p>
      <div class="win"><strong>本课结果</strong><p>${lesson.win}</p></div>
    </header>
    <section class="section"><div class="section-head"><p class="eyebrow">Core model</p><h2>${lesson.modelTitle}</h2></div>
${lesson.formula ? `    <div class="equation">${lesson.formula}</div>\n` : ''}
    <div class="model-grid">${lesson.steps.map((step) => `<article class="model-step"><h3>${step.title}</h3><p>${step.body}${citation(step.source)}</p></article>`).join('')}</div>
    </section>
    <section class="section"><div class="section-head"><p class="eyebrow">Three anchors</p><h2>三个必须抓住的判断点</h2></div>
      <div class="concept-grid">${lesson.ideas.map((idea) => `<article class="concept-card"><span class="concept-tag">${idea.tag}</span><h3>${idea.title}</h3><p>${idea.body}${citation(idea.source)}</p></article>`).join('')}</div>
    </section>
    <section class="section"><div class="section-head"><p class="eyebrow">Mission lenses</p><h2>工程、投资与科研同时看</h2></div>
      <div class="lens-grid"><article class="lens-panel engineering"><h3>工程镜头</h3><p>${lesson.lenses.engineering}</p></article><article class="lens-panel investment"><h3>投资镜头</h3><p>${lesson.lenses.investment}</p></article><article class="lens-panel research"><h3>科研 / 专业镜头</h3><p>${lesson.lenses.research}</p></article></div>
    </section>
    <section class="section"><div class="section-head"><p class="eyebrow">Worked decision</p><h2>${lesson.case.title}</h2></div>
      <article class="case-card"><p><strong>情境：</strong>${lesson.case.prompt}</p><details><summary>看判断标准</summary><h3>${lesson.case.answer}</h3><p>${lesson.case.reasoning}</p></details></article>
    </section>
    <section class="section" id="primary-source"><div class="section-head"><p class="eyebrow">Primary sources</p><h2>本课一手资料</h2></div>
      <ol class="source-list">${lesson.sources.map((key, index) => { const source = course.sources[key]; return `<li id="source-${index + 1}"><a href="${escapeAttribute(source.url)}">${source.title}</a>：${source.note}</li>`; }).join('')}</ol>
    </section>
    <nav class="next-step" aria-label="课程导航"><h2>本课压缩结论</h2><p>${lesson.takeaway}</p><p>${previous ? `<a href="${localHref(previous)}">← 第${Number(previous.id)}课</a>　·　` : ''}<a href="../reference/${module.reference}">模块速查表</a>　·　<a href="../index.html">课程总目录</a>${next ? `　·　<a href="${localHref(next)}">第${Number(next.id)}课 →</a>` : ''}</p></nav>
    <!-- prerendered: end -->
  `;
}

function renderReference(module) {
  const lessons = course.catalog.filter((entry) => entry.module === module.id);
  return `
    <!-- prerendered: start -->
    <header class="hero"><div class="breadcrumb"><a href="../index.html">课程总目录</a><span>›</span><span>模块 ${module.id}</span></div><p class="eyebrow">Module ${String(module.id).padStart(2, '0')} · Print-friendly</p><h1>${module.title}</h1><p class="lede">${module.summary}</p></header>
    <section class="section"><div class="section-head"><h2>判断规则</h2></div><div class="reference-grid">${module.rules.map((rule, index) => `<article class="reference-card"><h3>${String(index + 1).padStart(2, '0')}</h3><p>${rule}</p></article>`).join('')}</div></section>
    <section class="section"><div class="section-head"><h2>本模块术语</h2></div><table class="reference-table"><tbody>${module.terms.map((entry) => `<tr><td>${entry.term}</td><td>${entry.definition}</td></tr>`).join('')}</tbody></table></section>
    <section class="section"><div class="section-head"><h2>对应课程</h2></div><div class="lesson-list">${lessons.map((lesson) => `<a class="lesson-link" href="../lessons/${lesson.id}-${lesson.slug}.html"><span class="lesson-number">${lesson.id}</span><span>${lesson.title}</span><span>→</span></a>`).join('')}</div></section>
    <nav class="next-step"><h2>模块输出</h2><p>${module.output}</p><p><a href="../index.html">← 返回课程总目录</a></p></nav>
    <!-- prerendered: end -->
  `;
}

function replaceMain(html, attribute, content) {
  const pattern = new RegExp(`<main([^>]*\\b${attribute}\\b[^>]*)>[\\s\\S]*?<\\/main>`);
  if (!pattern.test(html)) throw new Error(`Missing main element with ${attribute}.`);
  return html.replace(pattern, `<main$1>${content}</main>`);
}

const expected = new Map();
const indexPath = path.join(root, 'index.html');
expected.set(indexPath, replaceMain(await readFile(indexPath, 'utf8'), 'data-course-index-root', renderIndex()));

for (const item of course.catalog) {
  if (!course.lessons[item.id]) continue;
  const file = path.join(root, 'lessons', `${item.id}-${item.slug}.html`);
  expected.set(file, replaceMain(await readFile(file, 'utf8'), 'data-complete-lesson-root', renderLesson(item.id)));
}

for (const module of course.modules) {
  const file = path.join(root, 'reference', module.reference);
  const html = await readFile(file, 'utf8');
  if (html.includes('data-module-reference-root')) {
    expected.set(file, replaceMain(html, 'data-module-reference-root', renderReference(module)));
  }
}

const courseIndex = `# 封装解构：40 课课程索引\n\n` + course.modules.map((module) => {
  const lessons = course.catalog.filter((item) => item.module === module.id);
  return `## 模块 ${module.id}：${module.title}\n\n${module.summary}\n\n${lessons.map((lesson) => `- [第 ${Number(lesson.id)} 课：${lesson.title}](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/${lessonHref(lesson)})${course.lessons[lesson.id]?.takeaway ? ` — ${course.lessons[lesson.id].takeaway}` : ''}`).join('\n')}`;
}).join('\n\n') + '\n';
expected.set(path.join(root, 'COURSE_INDEX.md'), courseIndex);

const mismatches = [];
for (const [file, content] of expected) {
  let current = '';
  try { current = await readFile(file, 'utf8'); } catch { current = ''; }
  if (current !== content) {
    if (mode === 'write') await writeFile(file, content, 'utf8');
    else mismatches.push(path.relative(root, file));
  }
}

if (mismatches.length) {
  console.error(`Prerendered files are stale: ${mismatches.join(', ')}`);
  process.exit(1);
}
console.log(`${mode === 'write' ? 'Wrote' : 'Verified'} ${expected.size} prerendered discovery files.`);
