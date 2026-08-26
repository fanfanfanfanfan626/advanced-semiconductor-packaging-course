(() => {
  const tabLists = document.querySelectorAll('[role="tablist"]');

  tabLists.forEach((tabList) => {
    const tabs = Array.from(tabList.querySelectorAll('[role="tab"]'));
    const activate = (tab) => {
      tabs.forEach((candidate) => {
        const selected = candidate === tab;
        candidate.setAttribute('aria-selected', String(selected));
        candidate.tabIndex = selected ? 0 : -1;
        const panel = document.getElementById(candidate.getAttribute('aria-controls'));
        if (panel) panel.hidden = !selected;
      });
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activate(tab));
      tab.addEventListener('keydown', (event) => {
        if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
        event.preventDefault();
        const delta = event.key === 'ArrowRight' ? 1 : -1;
        const next = tabs[(index + delta + tabs.length) % tabs.length];
        activate(next);
        next.focus();
      });
    });
  });

  document.querySelectorAll('form[data-quiz]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const chosen = form.querySelector('input[type="radio"]:checked');
      const feedback = form.querySelector('[data-feedback]');
      if (!feedback) return;

      if (!chosen) {
        feedback.textContent = '先选一个判断，再查看反馈。';
        feedback.className = 'feedback incorrect';
        return;
      }

      const correct = chosen.value === form.dataset.answer;
      feedback.textContent = correct
        ? form.dataset.correct
        : form.dataset.incorrect;
      feedback.className = `feedback ${correct ? 'correct' : 'incorrect'}`;
    });
  });

  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-reveal]');
    if (!button) return;
    const target = document.getElementById(button.dataset.reveal);
    if (!target) return;
    const willShow = target.hidden;
    target.hidden = !willShow;
    button.setAttribute('aria-expanded', String(willShow));
    button.textContent = willShow ? '收起判断标准' : '看判断标准';
  });
})();
