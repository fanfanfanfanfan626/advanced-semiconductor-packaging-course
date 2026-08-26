(() => {
  const course = window.AdvancedPackagingCourse;
  const root = document.querySelector('[data-course-index-root]');
  if (!course || !root) return;

  const lessonHref = (lesson) => `lessons/${lesson.id}-${lesson.slug}.html`;
  let savedProgress = [];
  try {
    const parsed = JSON.parse(localStorage.getItem('advanced-packaging-completed') || '[]');
    savedProgress = Array.isArray(parsed) ? parsed : [];
  } catch {
    savedProgress = [];
  }
  const completed = new Set(savedProgress);
  const firstIncomplete = course.catalog.find((lesson) => !completed.has(lesson.id)) || course.catalog[0];
  const completedPercent = Math.round((completed.size / course.catalog.length) * 100);
  const trackCards = [
    { icon: '研', title: '投资研究路线', copy: '从技术结构走到产能、成本、价值链与公司研究。', modules: '模块 1 → 2 → 4 → 5', target: '#module-5' },
    { icon: '工', title: '工程科研路线', copy: '从互连、供电、热和可靠性进入协同设计与实验。', modules: '模块 1 → 2 → 3 → 6', target: '#module-3' },
    { icon: '学', title: '大学准备路线', copy: '先建立系统地图，再补电路、材料、传热、统计与编程。', modules: '模块 1 → 3 → 6', target: '#module-6' }
  ];

  root.innerHTML = `
    <nav class="site-topbar" aria-label="网站主导航">
      <a class="site-brand" href="index.html" aria-label="封装解构首页"><span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>封装解构<small>ADVANCED PACKAGING</small></span></a>
      <div class="site-nav-links"><a href="#paths">学习路线</a><a href="#course-map">课程目录</a><a href="guide.html">使用指南</a></div>
      <a class="nav-cta" href="${lessonHref(firstIncomplete)}">${completed.size ? '继续学习' : '开始学习'}</a>
    </nav>

    <header class="cover-hero">
      <div class="cover-copy">
        <p class="cover-kicker"><span></span>系统级半导体课程 · 2026</p>
        <h1>看懂芯片之后，<br><em>再看懂它们如何连接。</em></h1>
        <p class="cover-lede">从 wafer、die 与 package 出发，穿过 Chiplet、2.5D、HBM、混合键合和 CoWoS，最终建立能用于工程判断、投资研究与科研准备的完整框架。</p>
        <div class="cover-actions"><a class="cover-primary" href="${lessonHref(firstIncomplete)}">${completed.size ? `继续第 ${Number(firstIncomplete.id)} 课` : '从第一课开始'} <span>→</span></a><a class="cover-secondary" href="#course-map">浏览 40 课目录</a></div>
        <div class="cover-proof"><span><strong>40</strong> 节独立短课</span><span><strong>6</strong> 个知识模块</span><span><strong>32</strong> 个一手来源</span></div>
      </div>
      <div class="package-stage" role="img" aria-label="先进封装结构抽象图：计算裸片、I/O裸片和HBM通过微凸点连接到硅中介层与封装基板">
        <div class="stage-label label-die">LOGIC DIE</div>
        <div class="stage-label label-hbm">HBM STACK</div>
        <div class="package-die die-logic"><b>Compute</b><span></span><span></span><span></span></div>
        <div class="package-die die-io"><b>I/O</b><span></span><span></span></div>
        <div class="hbm-stack"><i></i><i></i><i></i><i></i><b>HBM</b></div>
        <div class="microbumps">${Array.from({ length: 20 }, () => '<i></i>').join('')}</div>
        <div class="interposer"><span></span><span></span><span></span><b>SILICON INTERPOSER</b></div>
        <div class="substrate"><i></i><i></i><i></i><b>PACKAGE SUBSTRATE</b></div>
        <div class="stage-caption"><span>01</span><p>把封装看成<strong>系统缩放平台</strong>，而不只是芯片外壳。</p></div>
      </div>
    </header>

    <section class="orientation-strip" aria-label="课程学习方式">
      <div><span>01</span><p><strong>先建立结构</strong>看清 die、中介层、基板与互连</p></div>
      <div><span>02</span><p><strong>再理解约束</strong>把性能拆成信号、供电、热与良率</p></div>
      <div><span>03</span><p><strong>最后形成判断</strong>连接工程、产业、投资与科研</p></div>
    </section>

    <section class="site-section" id="paths">
      <div class="site-section-head"><div><p class="section-index">01 / LEARNING PATHS</p><h2>同一套底座，三条使用路线</h2></div><p>不确定从哪里开始时，按顺序学习最稳妥；已有明确目标时，可沿一条路线快速建立框架。</p></div>
      <div class="track-grid">${trackCards.map((track) => `<a class="track-card" href="${track.target}"><span class="track-icon">${track.icon}</span><h3>${track.title}</h3><p>${track.copy}</p><small>${track.modules}</small><b>查看路线 →</b></a>`).join('')}</div>
    </section>

    <section class="site-section course-directory" id="course-map">
      <div class="site-section-head"><div><p class="section-index">02 / COURSE DIRECTORY</p><h2>完整课程目录</h2></div><p>每课约 8–15 分钟。案例答案可直接展开，不需要回复或等待下一课。</p></div>
      <div class="directory-tools">
        <label class="course-search"><span>搜索</span><input type="search" placeholder="搜索 HBM、良率、CoWoS、投资研究……" aria-label="搜索课程"></label>
        <div class="module-filters" aria-label="课程模块筛选"><button class="active" type="button" data-module-filter="all">全部</button>${course.modules.map((module) => `<button type="button" data-module-filter="${module.id}">模块 ${module.id}</button>`).join('')}</div>
        <p class="directory-count" aria-live="polite">显示全部 ${course.catalog.length} 课</p>
      </div>
      <div class="module-directory">${course.modules.map((module) => {
        const lessons = course.catalog.filter((lesson) => lesson.module === module.id);
        return `<section class="module-block site-module" id="module-${module.id}" data-module="${module.id}">
          <div class="module-title-row"><div class="module-number">0${module.id}</div><div><p class="eyebrow">LESSONS ${lessons[0].id}–${lessons[lessons.length - 1].id}</p><h2>${module.title}</h2><p>${module.summary}</p></div><a class="module-reference-link" href="reference/${module.reference}">模块速查 ↗</a></div>
          <div class="lesson-list">${lessons.map((lesson) => `<a class="lesson-link ${completed.has(lesson.id) ? 'is-complete' : ''}" data-search="${lesson.title.toLowerCase()}" href="${lessonHref(lesson)}"><span class="lesson-number">${lesson.id}</span><span>${lesson.title}</span><span class="lesson-state">${completed.has(lesson.id) ? '已完成' : '阅读'}</span></a>`).join('')}</div>
        </section>`;
      }).join('')}</div>
      <div class="empty-courses" hidden><strong>没有匹配课程</strong><p>换一个关键词，或切换到“全部”模块。</p></div>
    </section>

    <section class="closing-cta">
      <p class="section-index">03 / START HERE</p><h2>先获得地图，再钻进细节。</h2><p>第一课只解决一件事：先进封装为什么从“制造末端”变成了“系统设计的一部分”。</p><a href="${lessonHref(firstIncomplete)}">${completed.size ? '继续课程' : '开始第一课'} <span>→</span></a>
      ${completed.size ? `<div class="home-progress"><span style="width:${completedPercent}%"></span><small>已完成 ${completed.size} / 40 课</small></div>` : ''}
    </section>

    <footer class="site-footer"><a class="site-brand footer-brand" href="index.html"><span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>封装解构<small>ADVANCED PACKAGING</small></span></a><p>从物理结构到产业判断，一套面向投资、科研与大学准备的先进封装课程。</p><div><a href="guide.html">使用指南</a><a href="#course-map">课程目录</a><a href="lessons/0040-capstone-roadmap.html">结课路线</a><a href="https://github.com/fanfanfanfanfan626/advanced-semiconductor-packaging-course">GitHub 源码</a></div></footer>`;

  const input = root.querySelector('.course-search input');
  const buttons = Array.from(root.querySelectorAll('[data-module-filter]'));
  const count = root.querySelector('.directory-count');
  const empty = root.querySelector('.empty-courses');
  let activeModule = 'all';

  const filterCourses = () => {
    const query = input.value.trim().toLowerCase();
    let visibleLessons = 0;
    root.querySelectorAll('.site-module').forEach((module) => {
      const moduleMatch = activeModule === 'all' || module.dataset.module === activeModule;
      let moduleVisible = 0;
      module.querySelectorAll('.lesson-link').forEach((lesson) => {
        const match = moduleMatch && (!query || lesson.dataset.search.includes(query));
        lesson.hidden = !match;
        if (match) moduleVisible += 1;
      });
      module.hidden = moduleVisible === 0;
      visibleLessons += moduleVisible;
    });
    count.textContent = query || activeModule !== 'all' ? `找到 ${visibleLessons} 课` : `显示全部 ${course.catalog.length} 课`;
    empty.hidden = visibleLessons !== 0;
  };

  input.addEventListener('input', filterCourses);
  buttons.forEach((button) => button.addEventListener('click', () => {
    activeModule = button.dataset.moduleFilter;
    buttons.forEach((candidate) => candidate.classList.toggle('active', candidate === button));
    filterCourses();
  }));
})();
