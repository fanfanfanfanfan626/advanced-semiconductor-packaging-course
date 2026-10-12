(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.AdvancedPackagingState = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const COURSE_ID = 'advanced-semiconductor-packaging-course';
  const STATE_KEY = 'advanced-packaging-state-v1';
  const LEGACY_KEY = 'advanced-packaging-completed';
  const IDS = Array.from({length:40}, (_, i) => String(i+1).padStart(4,'0'));
  const id = value => typeof value === 'string' || typeof value === 'number' ? String(value).padStart(4,'0') : '';
  const validTime = value => value === null || (typeof value === 'string' && /^\d{4}-\d\d-\d\dT/.test(value) && Number.isFinite(Date.parse(value)));
  const fresh = () => ({version:1, completedIds:[], lastVisitedId:null, lastVisitedAt:null, updatedAt:null});
  function normalize(value, ids=IDS) {
    const v = value && typeof value === 'object' ? value : {};
    const requested = new Set(Array.isArray(v.completedIds) ? v.completedIds.map(id) : []);
    const last = ids.includes(id(v.lastVisitedId)) ? id(v.lastVisitedId) : null;
    return {version:1, completedIds:ids.filter(n=>requested.has(n)), lastVisitedId:last,
      lastVisitedAt:last && validTime(v.lastVisitedAt) ? v.lastVisitedAt : null,
      updatedAt:validTime(v.updatedAt) ? v.updatedAt : null};
  }
  function getResumeLessonId(value, ids=IDS) {
    if (!ids.length) return null;
    const s=normalize(value,ids), done=new Set(s.completedIds), at=ids.indexOf(s.lastVisitedId);
    if (at>=0) { const next=ids.slice(at).find(n=>!done.has(n)); if(next) return next; }
    return ids.find(n=>!done.has(n)) || s.lastVisitedId || ids[ids.length-1];
  }
  function createStore(options={}) {
    const ids=options.catalogIds || IDS, now=options.now || (()=>new Date().toISOString());
    let storage=options.storage, memory=fresh(), available=true;
    if (!('storage' in options)) { try { storage=globalThis.localStorage; } catch { storage=null; } }
    if (!storage) available=false;
    const read=key=>{try{return storage?.getItem(key) ?? null;}catch{available=false;storage=null;return null;}};
    const write=(key,value)=>{try{if(storage)storage.setItem(key,value);else available=false;}catch{available=false;storage=null;}};
    const parse=text=>{try{return JSON.parse(text);}catch{return null;}};
    const copy=()=>({...memory,completedIds:[...memory.completedIds]});
    const persist=value=>{
      memory=normalize(value,ids);
      write(STATE_KEY,JSON.stringify(memory));
      if(available){try{storage.setItem(LEGACY_KEY,JSON.stringify(memory.completedIds));}catch{/* primary versioned state remains durable */}}
      return copy();
    };
    const load=()=>{
      const stored=parse(read(STATE_KEY));
      if(stored && stored.version===1){memory=normalize(stored,ids);return copy();}
      const legacy=parse(read(LEGACY_KEY));
      if(Array.isArray(legacy))return persist({...memory,completedIds:legacy});
      return copy();
    };
    const visit=lesson=>{const s=load(),n=id(lesson);return ids.includes(n)?persist({...s,lastVisitedId:n,lastVisitedAt:now(),updatedAt:now()}):s;};
    const toggleCompleted=lesson=>{const s=load(),n=id(lesson);if(!ids.includes(n))return s;const done=new Set(s.completedIds);done.has(n)?done.delete(n):done.add(n);return persist({...s,completedIds:[...done],updatedAt:now()});};
    const exportJson=()=>JSON.stringify({courseId:COURSE_ID,...load(),exportedAt:now()},null,2);
    const validateImport=text=>{
      if(typeof text!=='string'||text.length>100000)throw Error('进度文件过大或格式无效。');
      let v;try{v=JSON.parse(text);}catch{throw Error('文件不是有效的 JSON。');}
      if(!v||v.courseId!==COURSE_ID||v.version!==1)throw Error('课程或进度版本不匹配。');
      if(!Array.isArray(v.completedIds)||v.completedIds.some(n=>typeof n!=='string'||!ids.includes(n))||new Set(v.completedIds).size!==v.completedIds.length)throw Error('课程编号无效或重复。');
      if(v.lastVisitedId!==null&&!ids.includes(v.lastVisitedId))throw Error('最后阅读位置无效。');
      if(!validTime(v.lastVisitedAt)||!validTime(v.updatedAt))throw Error('进度时间无效。');
      return normalize(v,ids);
    };
    const importJson=text=>persist({...validateImport(text),updatedAt:now()});
    return {load,visit,toggleCompleted,exportJson,validateImport,importJson,reset:()=>persist(fresh()),
      isPersistent:()=>available,getResumeLessonId:()=>getResumeLessonId(load(),ids)};
  }
  return {COURSE_ID,STATE_KEY,LEGACY_KEY,DEFAULT_CATALOG_IDS:IDS,normalizeState:normalize,getResumeLessonId,createStore};
}));
