'use strict';
(() => {
  const root=document.querySelector('[data-progress-tools]');
  if(!root||!window.AdvancedPackagingState)return;
  const store=window.AdvancedPackagingState.createStore(),status=root.querySelector('[data-status]');
  const refresh=()=>{const s=store.load();root.querySelector('[data-summary]').textContent=`已完成 ${s.completedIds.length} / 40 课${s.lastVisitedId?'，最后阅读第 '+Number(s.lastVisitedId)+' 课':''}。${store.isPersistent()?'':'此浏览器未开放持久存储，请及时导出。'}`;};
  root.querySelector('[data-export]').addEventListener('click',()=>{
    const url=URL.createObjectURL(new Blob([store.exportJson()],{type:'application/json'}));
    const link=document.createElement('a');link.href=url;link.download='advanced-packaging-progress.json';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
    status.textContent='已请求下载进度文件，请检查浏览器下载列表。';
  });
  root.querySelector('[data-import]').addEventListener('change',async event=>{
    const file=event.target.files[0];if(!file)return;
    try{
      if(file.size>100000)throw Error('文件过大，请选择课程导出的 JSON。');
      const text=await file.text();const imported=store.validateImport(text);
      if(!confirm(`导入的记录包含 ${imported.completedIds.length} 课。将替换当前浏览器中的进度；建议先导出备份。继续吗？`))return;
      store.importJson(text);status.textContent=store.isPersistent()?'进度已导入。':'已载入当前页，但浏览器拒绝保存，请导出保管。';refresh();
    }catch(error){status.textContent='没有导入：'+error.message;}finally{event.target.value='';}
  });
  root.querySelector('[data-reset]').addEventListener('click',()=>{
    if(!confirm('清除当前浏览器中的课程进度？可先导出备份。此操作无法直接撤销。'))return;
    store.reset();refresh();status.textContent=store.isPersistent()?'本机进度已清除。':'浏览器拒绝写入，未确认清除持久记录。';
  });
  refresh();window.addEventListener('storage',refresh);
})();
