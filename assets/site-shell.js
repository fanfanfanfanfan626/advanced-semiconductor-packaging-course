(() => {
  if (document.querySelector('[data-site-shell]')) return;

  const inNestedFolder = /\/(lessons|reference)\//.test(location.pathname.replace(/\\/g, '/'));
  const base = inNestedFolder ? '../' : '';
  const file = decodeURIComponent(location.pathname.split('/').pop() || '');
  const lessonMatch = file.match(/^(\d{4})-/);
  const lessonId = lessonMatch ? lessonMatch[1] : null;
  const lessonNumber = lessonId ? Number(lessonId) : null;
  let savedProgress = [];
  try {
    const parsed = JSON.parse(localStorage.getItem('advanced-packaging-completed') || '[]');
    savedProgress = Array.isArray(parsed) ? parsed : [];
  } catch {
    savedProgress = [];
  }
  const completed = new Set(savedProgress);
  const moduleForLesson = (number) => number <= 12 ? 1 : number <= 20 ? 2 : number <= 26 ? 3 : number <= 31 ? 4 : number <= 36 ? 5 : 6;

  document.body.classList.add(lessonId ? 'course-lesson-page' : 'course-reference-page');
  document.body.insertAdjacentHTML('afterbegin', `
    <header class="lesson-sitebar" data-site-shell>
      <a class="lesson-brand" href="${base}index.html"><span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>封装解构<small>ADVANCED PACKAGING</small></span></a>
      ${lessonId ? `<div class="lesson-location"><span>模块 ${moduleForLesson(lessonNumber)}</span><i></i><strong>第 ${lessonNumber} / 40 课</strong></div>` : '<div class="lesson-location"><strong>课程参考资料</strong></div>'}
      <nav aria-label="课程网站导航"><a href="${base}guide.html">使用指南</a><a href="${base}index.html#course-map">完整目录</a><a href="https://github.com/fanfanfanfanfan626/advanced-semiconductor-packaging-course">GitHub 源码</a></nav>
      ${lessonId ? `<div class="lesson-rail" aria-hidden="true"><span style="width:${(lessonNumber / 40) * 100}%"></span></div>` : ''}
    </header>`);

  if (!lessonId) return;

  const dock = document.createElement('aside');
  dock.className = `lesson-progress-dock${completed.has(lessonId) ? ' is-complete' : ''}`;
  dock.setAttribute('aria-label', '学习进度');
  dock.innerHTML = `<span>${completed.has(lessonId) ? '本课已完成' : '读完这一课？'}</span><button type="button">${completed.has(lessonId) ? '已完成 ✓' : '标记完成'}</button>`;
  document.body.append(dock);

  dock.querySelector('button').addEventListener('click', () => {
    if (completed.has(lessonId)) completed.delete(lessonId);
    else completed.add(lessonId);
    localStorage.setItem('advanced-packaging-completed', JSON.stringify(Array.from(completed).sort()));
    const done = completed.has(lessonId);
    dock.classList.toggle('is-complete', done);
    dock.querySelector('span').textContent = done ? '本课已完成' : '读完这一课？';
    dock.querySelector('button').textContent = done ? '已完成 ✓' : '标记完成';
  });
})();
