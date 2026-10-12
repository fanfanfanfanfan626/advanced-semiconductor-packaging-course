const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const state=require('../assets/course-state.js'),search=require('../assets/course-search.js');
const root=path.resolve(__dirname,'..');
class Memory {constructor(values={}){this.data={...values};}getItem(key){return this.data[key]??null;}setItem(key,value){this.data[key]=value;}}
const now=()=> '2026-10-12T08:00:00.000Z';
test('legacy migration filters unknown and duplicate IDs',()=>{const memory=new Memory({[state.LEGACY_KEY]:'["0003","9999","0001","0001"]'}),store=state.createStore({storage:memory,now});assert.deepEqual(store.load().completedIds,['0001','0003']);assert.deepEqual(JSON.parse(memory.getItem(state.LEGACY_KEY)),['0001','0003']);});
test('last-visited unfinished resume, then next lesson',()=>{const s=state.createStore({storage:new Memory(),now});s.visit('0020');assert.equal(s.getResumeLessonId(),'0020');s.toggleCompleted('0020');assert.equal(s.getResumeLessonId(),'0021');});
test('all complete still returns a valid lesson',()=>{assert.equal(state.getResumeLessonId({completedIds:state.DEFAULT_CATALOG_IDS,lastVisitedId:'0030'}),'0030');});
test('export import round trip and reset',()=>{const a=state.createStore({storage:new Memory(),now}),b=state.createStore({storage:new Memory(),now});a.visit('0020');a.toggleCompleted('0001');b.importJson(a.exportJson());assert.deepEqual(b.load(),a.load());b.reset();assert.equal(b.getResumeLessonId(),'0001');assert.deepEqual(b.load().completedIds,[]);});
test('invalid import never changes existing state',()=>{const s=state.createStore({storage:new Memory(),now});s.visit('0007');const before=s.exportJson();for(const text of ['{','{}',JSON.stringify({...JSON.parse(before),completedIds:['9999']}),JSON.stringify({...JSON.parse(before),version:2}),JSON.stringify({...JSON.parse(before),lastVisitedAt:'nonsense'})])assert.throws(()=>s.importJson(text));assert.equal(s.exportJson(),before);});
test('storage denied remains usable and is explicitly nonpersistent',()=>{const s=state.createStore({storage:{getItem(){throw Error('denied');},setItem(){throw Error('denied');}},now});s.visit('0002');s.toggleCompleted('0002');assert.deepEqual(s.load().completedIds,['0002']);assert.equal(s.isPersistent(),false);});
test('malformed legacy state does not crash',()=>{const s=state.createStore({storage:new Memory({[state.LEGACY_KEY]:'broken'}),now});assert.deepEqual(s.load().completedIds,[]);});
test('readable stale storage cannot overwrite memory after a failed write',()=>{
  const stale=JSON.stringify({version:1,completedIds:['0001'],lastVisitedId:null,lastVisitedAt:null,updatedAt:null});
  const s=state.createStore({storage:{getItem:k=>k===state.STATE_KEY?stale:null,setItem(){throw Error('quota');}},now});
  s.load();s.toggleCompleted('0002');assert.deepEqual(s.load().completedIds,['0001','0002']);assert.equal(s.isPersistent(),false);
  s.reset();assert.deepEqual(s.load().completedIds,[]);
});
test('legacy synchronization failure does not invalidate primary save',()=>{
  const memory=new Memory();const setter=memory.setItem.bind(memory);memory.setItem=(key,value)=>{if(key===state.LEGACY_KEY)throw Error('legacy denied');setter(key,value);};
  const s=state.createStore({storage:memory,now});s.toggleCompleted('0001');assert.equal(s.isPersistent(),true);assert.deepEqual(s.load().completedIds,['0001']);
});
const context={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'assets/complete-course-data.js'),'utf8'),context);const course=context.window.AdvancedPackagingCourse;
const docs=new Map(course.catalog.map(lesson=>[lesson.id,search.buildSearchDocument(course,lesson)]));
test('bilingual concepts beyond lesson titles',()=>{for(const [q,id] of [['known good die','0003'],['hybrid bonding','0014'],['玻璃芯','0015'],['PowerVia','0022'],['协同优化','0026'],['２．５Ｄ fan-out','0013']])assert.ok(search.matchesSearch(docs.get(id),q),q);assert.equal(search.matchesSearch(docs.get('0022'),'PowerVia nonexistentterm'),false);});
test('shareable search and module state',()=>{const q=search.buildSearchQuery('混合键合 hybrid bonding','2');assert.deepEqual(search.parseSearchQuery('?'+q,['1','2']),{query:'混合键合 hybrid bonding',module:'2'});assert.equal(search.parseSearchQuery('?module=99',['1','2']).module,'all');});
test('no-JS index keeps all 40 lesson links',()=>{const html=fs.readFileSync(path.join(root,'index.html'),'utf8');assert.equal(new Set([...html.matchAll(/href="lessons\/(\d{4})-[^"]+\.html"/g)].map(m=>m[1])).size,40);});

// Minimal DOM contract harness; this is not a browser or layout test.
function mountLesson(store) {
  const span={textContent:''},button={textContent:'',disabled:false,listeners:{},addEventListener(name,fn){this.listeners[name]=fn;}};
  const dock={classList:{toggle(){}},setAttribute(){},querySelector(selector){return selector==='span'?span:button;},
    set innerHTML(html){span.textContent=html.match(/<span>(.*?)<\/span>/)[1];button.textContent=html.match(/<button[^>]*>(.*?)<\/button>/)[1];}};
  const document={querySelector(){return null;},createElement(){return dock;},body:{classList:{add(){}},insertAdjacentHTML(){},append(){}}};
  vm.runInNewContext(fs.readFileSync(path.join(root,'assets/site-shell.js'),'utf8'),{
    document,location:{pathname:'/lessons/0001-system-scaling-map.html'},window:{AdvancedPackagingState:{createStore:()=>store}}
  });
  return {span,button,click:()=>button.listeners.click()};
}
for(const [name,storage] of [
  ['absent',null],
  ['read denied',{getItem(){throw Error('denied');},setItem(){throw Error('denied');}}],
  ['write denied',{getItem(){return null;},setItem(){throw Error('quota');}}]
]) test(`lesson immediately warns when storage is ${name}`,()=>{
  const store=state.createStore({storage,now}),ui=mountLesson(store);
  assert.equal(ui.span.textContent,'本地存储不可用，仅本页有效');assert.equal(ui.button.disabled,false);
  ui.click();assert.equal(ui.button.textContent,'已完成 ✓');assert.deepEqual(store.load().completedIds,['0001']);
  ui.click();assert.equal(ui.button.textContent,'标记完成');assert.deepEqual(store.load().completedIds,[]);
  assert.equal(ui.span.textContent,'本地存储不可用，仅本页有效');
});
test('persistent lesson keeps its normal initial and completed labels',()=>{
  const store=state.createStore({storage:new Memory(),now}),ui=mountLesson(store);
  assert.equal(ui.span.textContent,'读完这一课？');ui.click();assert.equal(ui.span.textContent,'本课已完成');
  assert.equal(mountLesson(store).span.textContent,'本课已完成');
});
test('missing progress store disables saving without a false success',()=>{
  const ui=mountLesson(null);assert.equal(ui.span.textContent,'学习进度暂不可用');
  assert.equal(ui.button.textContent,'无法保存');assert.equal(ui.button.disabled,true);ui.click();
  assert.equal(ui.button.textContent,'无法保存');
});
