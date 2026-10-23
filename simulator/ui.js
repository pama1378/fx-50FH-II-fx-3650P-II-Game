'use strict';
/* fx-50F PLUS 模拟器 UI 层 */
(function(){
const C = window.CASIO;
const calc = new C.Calc();

const S = {
  mode: 'COMP',        // COMP | PRGM
  entry: '',           // 輸入緩衝
  line1: '', line2: '',
  shift: false, alpha: false,
  progIdx: 0,
  running: false,      // 正在執行程式
  gen: null,           // 程式生成器
  awaitingInput: false,
  inputBuf: '',
  customCode: '',
  error: '',
};

const $ = id => document.getElementById(id);

/* ---------- 渲染 ---------- */
function render(){
  const ind = [];
  if(S.shift) ind.push('S');
  if(S.alpha) ind.push('A');
  if(calc.vars.M !== 0) ind.push('M');
  ind.push(calc.mode.angle === 'Deg' ? 'D' : calc.mode.angle === 'Rad' ? 'R' : 'G');
  if(calc.mode.fix != null) ind.push('FIX');
  if(calc.mode.sci != null) ind.push('SCI');
  ind.push(S.mode);
  $('ind').textContent = ind.join(' ');

  $('l1').textContent = S.line1;
  $('l2').textContent = S.line2;
  $('l2').className = S.error ? 'line err' : 'line';
  if(S.running) $('l1').classList.add('blink'); else $('l1').classList.remove('blink');
  document.body.classList.toggle('shifted', S.shift);
  document.body.classList.toggle('alphaed', S.alpha);
}

function showEntry(){
  S.line1 = S.entry || '';
  render();
}

/* ---------- 按鍵處理 ---------- */
function press(k){
  S.error = '';
  if(S.awaitingInput) return inputKey(k);
  if(S.running) return runKey(k);
  if(S.mode === 'PRGM') return prgmKey(k);
  if(S.mode === 'SD' || S.mode === 'REG') return statKey(k);

  // COMP 模式
  switch(k){
    case 'SHIFT': S.shift=!S.shift; S.alpha=false; return render();
    case 'ALPHA': S.alpha=!S.alpha; S.shift=false; return render();
    case 'MODE': return cycleMode();
    case 'REPLAY': if(S.mode==='PRGM'){ S.progIdx=(S.progIdx+1)%listFor().length; showProg(listFor()); } return;
    case 'ON': reset(); return;
    case 'AC': S.entry=''; S.line1=''; S.line2=''; return render();
    case 'DEL': S.entry=S.entry.slice(0,-1); return showEntry();
    case 'EXE': return evaluate();
  }
  const tok = tokenFor(k);
  if(tok != null){ S.entry += tok; S.shift=false; S.alpha=false; showEntry(); }
}

function cycleMode(){
  const order=['COMP','SD','REG','PRGM'];
  const i=order.indexOf(S.mode);
  S.mode=order[(i+1)%order.length];
  S.entry=''; S.statIdx=0; S.error=false;
  if(S.mode==='SD'||S.mode==='REG'){ calc.stat={freqOn:false,data:[],regMode:S.mode==='REG'?'Lin':'SD'}; }
  if(S.mode==='PRGM'){ S.progIdx=0; showProg(listFor()); return; }
  S.line1=S.mode; S.line2= S.mode==='COMP' ? '' : 'n='+calc.statSums().n;
  render();
}

const STAT_LABELS=['n','Σx','Σx²','x̄','Σy','Σxy'];
function statKey(k){
  if(/^[0-9.]$/.test(k) || k===',' || k==='−'){ S.entry+= (k==='−'?'-':k); S.line1=S.entry; return render(); }
  if(k==='DEL'){ S.entry=S.entry.slice(0,-1); S.line1=S.entry; return render(); }
  if(k==='AC'){ S.entry=''; S.line1=S.mode; S.line2=''; return render(); }
  if(k==='ON') return reset();
  if(k==='MODE') return cycleMode();
  if(k==='Ans'){
    S.statIdx=(S.statIdx+1)%STAT_LABELS.length;
    const lab=STAT_LABELS[S.statIdx];
    let v;
    try{ v=calc.getVar(lab); }catch(e){ v=NaN; }
    S.line1=lab; S.line2=calc.format(v);
    return render();
  }
  if(k==='EXE'){
    if(!S.entry) return;
    try{
      const parts=S.entry.split(',');
      const x=evalNum(parts[0]);
      const y=parts.length>1?evalNum(parts[1]):0;
      calc.addData(x,y,1); calc.ans=x;
      S.line1='n='+calc.statSums().n;
      S.line2= 'x='+calc.format(x) + (parts.length>1?' y='+calc.format(y):'');
      S.entry='';
      S.error=false;
    }catch(e){ S.error=true; S.line1='ERROR'; S.line2=e.message.slice(0,18); }
    return render();
  }
}

function evalNum(str){
  const p=new C.Parser(C.lex(str));
  return calc.evalNode(p.parseExpr(0));
}

function tokenFor(k){
  const shifted = {
    'sin':'sin⁻¹(', 'cos':'cos⁻¹(', 'tan':'tan⁻¹(',
    'log':'10^(', 'ln':'e^(', '√':'∛(',
  };
  const base = {
    '0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9',
    '.':'.', '+':'+', '−':'-', '×':'×', '÷':'÷', '^':'^',
    '(':'(', ')':')', ',':',',
    'x²':'²', 'x³':'³', 'x⁻¹':'⁻¹',
    '√':'√(', 'log':'log(', 'ln':'ln(', '∛':'∛(', 'e^':'e^(',
    'sin':'sin(', 'cos':'cos(', 'tan':'tan(',
    'Abs':'Abs(', 'π':'π', 'Ans':'Ans', 'EXP':'E', '°':'°',
  };
  if(S.shift && shifted[k]) return shifted[k];
  return base[k] != null ? base[k] : null;
}

function evaluate(){
  if(!S.entry){ return; }
  try{
    const p = new C.Parser(C.lex(S.entry));
    const node = p.parseExpr(0);
    const v = calc.evalNode(node);
    calc.ans = v;
    S.line2 = calc.format(v);
    S.line1 = S.entry;
    S.entry = '';
  }catch(e){
    S.error = true;
    S.line2 = e.message.replace('Syntax ERROR：','Syntax ');
    S.line1 = S.entry;
  }
  render();
}

function reset(){
  calc.reset();
  S.entry=''; S.line1=''; S.line2=''; S.progIdx=0; S.running=false; S.gen=null;
  S.awaitingInput=false; S.inputBuf=''; S.error=''; S.mode='COMP';
  render();
}

/* ---------- 程式模式 ---------- */
function programs(){ return (window.PROGRAMS||[]); }
function listFor(){
  const base = programs();
  if(S.customCode && S.customCode.trim()) return [...base, {n:99,title:'自訂程式',en:'custom',authors:['你'],declared:0,code:S.customCode}];
  return base;
}

function prgmKey(k){
  const list = listFor();
  if(!list.length){ S.line1='無程式'; render(); return; }
  switch(k){
    case 'MODE': S.mode='COMP'; S.line1=''; S.line2=''; return render();
    case 'ON': reset(); return;
    case '×': S.progIdx=(S.progIdx+1)%list.length; return showProg(list);
    case '÷': S.progIdx=(S.progIdx+list.length-1)%list.length; return showProg(list);
    case 'EXE': return startRun(list[S.progIdx]);
    case 'AC': S.mode='COMP'; S.line1=''; S.line2=''; return render();
    case 'DEL': {
      S.customCode = S.customCode.slice(0,-1);
      return showEdit();
    }
  }
  // 其餘按鍵：在程式編輯區追加 token
  const tok = tokenFor(k);
  if(tok != null){
    S.customCode += tok;
    S.shift=false; S.alpha=false;
    showEdit();
  }
}

function showEdit(){
  let bytes = 0, msg = '';
  try{ bytes = new C.Program(S.customCode).bytes; }
  catch(e){ msg = ' Syntax'; }
  S.line1 = S.customCode.slice(-16);
  S.line2 = bytes + 'b' + msg;
  S.error = !!msg;
  render();
}

function showProg(list){
  const p = list[S.progIdx];
  S.line1 = `${S.progIdx+1}/${list.length} ${p.title}`.slice(0,16);
  let comp = 0, err = '';
  try{ comp = new C.Program(p.code).bytes; }catch(e){ err = ' ERR'; }
  if(p.declared && comp && comp !== p.declared){
    S.line2 = `${p.declared}b(算${comp})${err}`;   // 标称与计算不一致时如实显示
  } else {
    S.line2 = `${p.declared || comp}b${err}`;
  }
  S.error = !!err;
  render();
}

function startRun(p){
  if(!p) return;
  let prog;
  try{ prog = new C.Program(p.code); }
  catch(e){ S.error=true; S.line1=p.title; S.line2=e.message.slice(0,20); return render(); }
  S.running = true;
  S.gen = prog.run(calc);
  S.line1 = 'RUN '+p.title.slice(0,10);
  S.line2 = '';
  render();
  stepRun();
}

function stepRun(val){
  if(!S.gen) return endRun();
  let r;
  try{ r = S.gen.next(val); }
  catch(e){ S.error=true; S.line1='ERROR'; S.line2=e.message.replace('Syntax ERROR：','Syntax '); S.running=false; S.gen=null; return render(); }
  if(r.done){ return endRun(); }
  const ev = r.value;
  if(ev.type === 'in'){
    S.awaitingInput = true; S.inputBuf='';
    S.line1 = '? '; S.line2 = '';
    render();
  } else if(ev.type === 'out'){
    S.line1 = '=';
    S.line2 = String(ev.value);
    S.awaitingInput = false;
    render();
  } else if(ev.type === 'clear'){
    S.line1=''; S.line2=''; render(); stepRun();
  } else {
    stepRun();
  }
}

function endRun(){
  S.running = false; S.gen = null; S.awaitingInput = false;
  S.line1 = 'END';
  render();
}

function runKey(k){
  if(S.awaitingInput) return;
  if(k==='EXE') return stepRun();
  if(k==='ON') return reset();
  if(k==='AC') return reset();
}

function inputKey(k){
  if(/^[0-9.]$/.test(k)){ S.inputBuf += k; S.line1 = '? '+S.inputBuf; return render(); }
  if(k==='DEL'){ S.inputBuf=S.inputBuf.slice(0,-1); S.line1='? '+S.inputBuf; return render(); }
  if(k==='−'){ S.inputBuf = S.inputBuf.startsWith('-')?S.inputBuf.slice(1):'-'+S.inputBuf; S.line1='? '+S.inputBuf; return render(); }
  if(k==='EXE'){
    const v = Number(S.inputBuf)||0;
    S.awaitingInput = false;
    S.line1 = '? '+S.inputBuf;
    return stepRun(v);
  }
  if(k==='ON') return reset();
}

/* ---------- 鍵盤佈局 ---------- */
// 5 列佈局，對齊 fx-50F PLUS / MS 系列：每鍵帶 SHIFT（金）與 ALPHA（紅）副標
const ROWS = [
  [{l:'SHIFT',k:'SHIFT',cls:'shift'},{l:'ALPHA',k:'ALPHA',cls:'alpha'},
   {l:'◀ ▶',k:'REPLAY',cls:'replay'},{l:'MODE',k:'MODE',cls:'mode'},{l:'ON',k:'ON',cls:'on'}],
  [{l:'x³',k:'x³',fn:1},{l:'x²',k:'x²',sh:'x³',fn:1},{l:'x⁻¹',k:'x⁻¹',fn:1},{l:'^',k:'^'},{l:'√',k:'√',sh:'∛',fn:1}],
  [{l:'log',k:'log',sh:'10ˣ',fn:1},{l:'ln',k:'ln',sh:'eˣ',fn:1},{l:'(-)',k:'−'},{l:'°′″',k:','},
   {l:'Abs',k:'Abs',al:'M',fn:1}],
  [{l:'sin',k:'sin',sh:'sin⁻¹',fn:1},{l:'cos',k:'cos',sh:'cos⁻¹',fn:1},{l:'tan',k:'tan',sh:'tan⁻¹',fn:1},
   {l:'(',k:'('},{l:')',k:')'}],
  [{l:'7',k:'7',num:1,al:'A'},{l:'8',k:'8',num:1,al:'B'},{l:'9',k:'9',num:1,al:'C'},
   {l:'DEL',k:'DEL'},{l:'AC',k:'AC'}],
  [{l:'4',k:'4',num:1,al:'D'},{l:'5',k:'5',num:1,al:'E'},{l:'6',k:'6',num:1,al:'F'},
   {l:'×',k:'×'},{l:'÷',k:'÷'}],
  [{l:'1',k:'1',num:1,al:'X'},{l:'2',k:'2',num:1,al:'Y'},{l:'3',k:'3',num:1,al:'M'},
   {l:'+',k:'+'},{l:'−',k:'−'}],
  [{l:'0',k:'0',num:1},{l:'.',k:'.'},{l:'EXP',k:'EXP',fn:1,sh:'π'},{l:'Ans',k:'Ans',fn:1},{l:'EXE',k:'EXE',cls:'exe'}],
];

function buildKeypad(){
  const kp = $('keypad');
  kp.innerHTML = '';
  for(const row of ROWS){
    for(const c of row){
      const b = document.createElement('button');
      b.className = 'key' + (c.num?' num':'') + (c.fn?' fn':'') + (c.cls?' '+c.cls:'');
      if(c.sh){ const s=document.createElement('span'); s.className='sh'; s.textContent=c.sh; b.appendChild(s); }
      if(c.al){ const a=document.createElement('span'); a.className='al'; a.textContent=c.al; b.appendChild(a); }
      const t=document.createElement('span'); t.textContent=c.l; b.appendChild(t);
      b.onclick = ()=>press(c.k);
      kp.appendChild(b);
    }
  }
}

/* ---------- 啟動 ---------- */
window.addEventListener('DOMContentLoaded', ()=>{
  buildKeypad();
  S.line1=''; S.line2='READY';
  render();
});
window.__press = press;  // 供測試
window.__setMode = m => {
  S.mode=m; S.entry=''; S.statIdx=0; S.line1=m; S.line2='';
  if(m==='SD'||m==='REG') calc.stat={freqOn:false,data:[],regMode:m==='REG'?'Lin':'SD'};
  render();
};
window.__state = () => S;
})();
