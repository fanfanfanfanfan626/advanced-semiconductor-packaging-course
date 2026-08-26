(() => {
  const course = window.AdvancedPackagingCourse;
  const root = document.querySelector('[data-complete-lesson-root]');
  const id = document.body.dataset.courseLesson;
  if (!course || !root || !id) return;

  const lesson = course.lessons[id];
  const catalogIndex = course.catalog.findIndex((item) => item.id === id);
  const item = course.catalog[catalogIndex];
  if (!lesson || !item) {
    root.innerHTML = '<div class="course-error"><h1>课程数据未找到</h1><p>请从课程总目录重新进入。</p></div>';
    return;
  }

  const module = course.modules.find((entry) => entry.id === item.module);
  const previous = course.catalog[catalogIndex - 1];
  const next = course.catalog[catalogIndex + 1];
  const sourceNumber = Object.fromEntries(lesson.sources.map((key, index) => [key, index + 1]));
  const citation = (key) => key && sourceNumber[key] ? ` <a href="#source-${sourceNumber[key]}">[${sourceNumber[key]}]</a>` : '';
  const lessonHref = (entry) => entry ? `${entry.id}-${entry.slug}.html` : '';

  document.title = `第${Number(id)}课｜${lesson.title}`;
  root.innerHTML = `
    <header class="hero">
      <div class="breadcrumb"><a href="../index.html">课程总目录</a><span>›</span><span>模块 ${module.id} · ${module.title}</span><span>›</span><span>第 ${Number(id)} 课</span></div>
      <p class="eyebrow">Semiconductor &amp; Advanced Packaging · Lesson ${id}</p>
      <h1>${lesson.title}</h1>
      <p class="lede">${lesson.lede}</p>
      <div class="win"><strong>本课结果</strong><p>${lesson.win}</p></div>
    </header>

    <section class="section">
      <div class="section-head"><p class="eyebrow">01 · Core model</p><h2>${lesson.modelTitle}</h2></div>
      ${lesson.formula ? `<div class="equation">${lesson.formula}</div>` : ''}
      <div class="model-grid">${lesson.steps.map((step) => `<article class="model-step"><h3>${step.title}</h3><p>${step.body}${citation(step.source)}</p></article>`).join('')}</div>
    </section>

    <section class="section">
      <div class="section-head"><p class="eyebrow">02 · Three anchors</p><h2>三个必须抓住的判断点</h2></div>
      <div class="concept-grid">${lesson.ideas.map((idea) => `<article class="concept-card"><span class="concept-tag">${idea.tag}</span><h3>${idea.title}</h3><p>${idea.body}${citation(idea.source)}</p></article>`).join('')}</div>
    </section>

    <section class="section">
      <div class="section-head"><p class="eyebrow">03 · Mission lenses</p><h2>工程、投资与科研同时看</h2></div>
      <div class="lens-grid">
        <article class="lens-panel engineering"><h3>工程镜头</h3><p>${lesson.lenses.engineering}</p></article>
        <article class="lens-panel investment"><h3>投资镜头</h3><p>${lesson.lenses.investment}</p></article>
        <article class="lens-panel research"><h3>科研 / 专业镜头</h3><p>${lesson.lenses.research}</p></article>
      </div>
    </section>

    <section class="section">
      <div class="section-head"><p class="eyebrow">04 · Worked decision</p><h2>${lesson.case.title}</h2><p>答案已包含在页面中，可直接展开；不需要在对话中提交。</p></div>
      <article class="case-card">
        <p><strong>情境：</strong>${lesson.case.prompt}</p>
        <button class="button secondary" type="button" data-reveal="case-answer-${id}" aria-expanded="false">看判断标准</button>
        <div class="case-answer" id="case-answer-${id}" hidden><h3>${lesson.case.answer}</h3><p>${lesson.case.reasoning}</p></div>
      </article>
    </section>

    <section class="section" id="primary-source">
      <div class="section-head"><p class="eyebrow">05 · Primary sources</p><h2>本课一手资料</h2></div>
      <ol class="source-list">${lesson.sources.map((key, index) => { const source = course.sources[key]; return `<li id="source-${index + 1}"><a href="${source.url}">${source.title}</a>：${source.note}</li>`; }).join('')}</ol>
    </section>

    <nav class="next-step" aria-label="课程导航">
      <h2>本课压缩结论</h2>
      <p>${lesson.takeaway}</p>
      <p>${previous ? `<a href="${lessonHref(previous)}">← 第${Number(previous.id)}课</a>　·　` : ''}<a href="../reference/${module.reference}">模块速查表</a>　·　<a href="../index.html">课程总目录</a>${next ? `　·　<a href="${lessonHref(next)}">第${Number(next.id)}课 →</a>` : ''}</p>
    </nav>`;
})();
