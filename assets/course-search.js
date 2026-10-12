(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;if(root)root.AdvancedPackagingSearch=api;}(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const normalizeSearchText=value=>String(value??'').normalize('NFKC').toLowerCase().replace(/[\p{P}\p{S}_]+/gu,' ').replace(/\s+/g,' ').trim();
  function strings(value){if(typeof value==='string')return [value];if(Array.isArray(value))return value.flatMap(strings);if(value&&typeof value==='object')return Object.values(value).flatMap(strings);return [];}
  function buildSearchDocument(course,lesson){const detail=course.lessons?.[lesson.id]||{};return normalizeSearchText([...strings(lesson),...strings(detail),...strings(course.searchAliases?.[lesson.id]),...(detail.sources||[]).flatMap(key=>strings(course.sources?.[key]))].join(' '));}
  function matchesSearch(document,query){return normalizeSearchText(query).split(' ').filter(Boolean).every(word=>normalizeSearchText(document).includes(word));}
  function parseSearchQuery(query,validModules=[]){const p=new URLSearchParams(query),m=p.get('module');return {query:(p.get('q')||'').trim(),module:validModules.includes(m)?m:'all'};}
  function buildSearchQuery(query,module='all'){const p=new URLSearchParams();if(query.trim())p.set('q',query.trim());if(module!=='all')p.set('module',module);return p.toString();}
  return {normalizeSearchText,buildSearchDocument,matchesSearch,parseSearchQuery,buildSearchQuery};
}));
