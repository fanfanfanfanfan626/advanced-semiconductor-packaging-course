(() => {
  const course = window.AdvancedPackagingCourse;
  const root = document.querySelector('[data-module-reference-root]');
  const id = Number(document.body.dataset.courseModule);
  if (!course || !root || !id) return;
  const module = course.modules.find((entry) => entry.id === id);
  if (!module) return;
  const lessons = course.catalog.filter((entry) => entry.module === id);
  document.title = `模块${id}速查｜${module.title}`;
  root.innerHTML = `
    <header class="hero"><div class="breadcrumb"><a href="../index.html">课程总目录</a><span>›</span><span>模块 ${id}</span></div><p class="eyebrow">Module ${String(id).padStart(2, '0')} · Print-friendly</p><h1>${module.title}</h1><p class="lede">${module.summary}</p></header>
    <section class="section"><div class="section-head"><p class="eyebrow">Decision rules</p><h2>判断规则</h2></div><div class="reference-grid">${module.rules.map((rule, index) => `<article class="reference-card"><h3>${String(index + 1).padStart(2, '0')}</h3><p>${rule}</p></article>`).join('')}</div></section>
    <section class="section"><div class="section-head"><p class="eyebrow">Vocabulary</p><h2>本模块术语</h2></div><table class="reference-table"><tbody>${module.terms.map((entry) => `<tr><td>${entry.term}</td><td>${entry.definition}</td></tr>`).join('')}</tbody></table></section>
    <section class="section"><div class="section-head"><p class="eyebrow">Lessons</p><h2>对应课程</h2></div><div class="lesson-list">${lessons.map((lesson) => `<a class="lesson-link" href="../lessons/${lesson.id}-${lesson.slug}.html"><span class="lesson-number">${lesson.id}</span><span>${lesson.title}</span><span>→</span></a>`).join('')}</div></section>
    <nav class="next-step"><h2>模块输出</h2><p>${module.output}</p><p><a href="../index.html">← 返回课程总目录</a></p></nav>`;
})();
