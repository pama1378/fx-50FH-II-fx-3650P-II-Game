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
  if(S.mode === 'PRGM') ind.push('PRGM');
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

  // COMP 模式
  switch(k){
    case 'SHIFT': S.shift=!S.shift; S.alpha=false; return render();
    case 'ALPHA': S.alpha=!S.alpha; S.shift=false; return render();
    case 'MODE': S.mode='PRGM'; S.progIdx=0; showProg(listFor()); return;
    case 'ON': reset(); return;
    case 'AC': S.entry=''; S.line1=''; S.line2=''; return render();
    case 'DEL': S.entry=S.entry.slice(0,-1); return showEntry();
    case 'EXE': return evaluate();
  }
  const tok = tokenFor(k);
  if(tok != null){ S.entry += tok; S.shift=false; S.alpha=false; showEntry(); }
}

function tokenFor(k){
  const shifted = {
    'sin':'sin⁻¹(', 'cos':'cos⁻¹(', 'tan':'tan⁻¹(',
    'log':'10^(', 'ln':'e^(', '√':'x³',
    'x²':'x²', 'x³':'x³',
  };
  const base = {
    '0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9',
    '.':'.', '+':'+', '−':'-', '×':'×', '÷':'÷', '^':'^',
    '(':'(', ')':')', ',':',',
    'x²':'²', 'x³':'³', 'x⁻¹':'⁻¹',
    '√':'√(', 'log':'log(', 'ln':'ln(',
    'sin':'sin(', 'cos':'cos(', 'tan':'tan(',
    'Abs':'Abs(', 'π':'π', 'Ans':'Ans', 'EXP':'E',
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
  }
}

function showProg(list){
  const p = list[S.progIdx];
  S.line1 = `${S.progIdx+1}/${list.length} ${p.title}`.slice(0,16);
  S.line2 = `P${p.n} ${p.declared?p.declared+'b':''}`;
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
const ROWS = [
  [['SHIFT','SHIFT'],['ALPHA','ALPHA'],['MODE','MODE'],['ON','ON']],
  [['x³','x³'],['x²','x²'],['^','^'],['√','√'],['log','log'],['ln','ln'],['x⁻¹','x⁻¹'],['Abs','Abs']],
  [['sin','sin'],['cos','cos'],['tan','tan'],['(','('],[')',')'],['π','π'],['EXP','EXP'],['Ans','Ans']],
  [['7','7'],['8','8'],['9','9'],['DEL','DEL'],['AC','AC']],
  [['4','4'],['5','5'],['6','6'],['×','×'],['÷','÷']],
  [['1','1'],['2','2'],['3','3'],['+','+'],['−','−']],
  [['0','0'],['.','.'],[',',','],['EXE','EXE']],
];

function buildKeypad(){
  const kp = $('keypad');
  kp.innerHTML = '';
  for(const row of ROWS){
    const r = document.createElement('div');
    r.className = 'krow';
    for(const [label,key] of row){
      const b = document.createElement('button');
      b.className = 'key' + (key==='EXE'?' exe':'') + (key==='ON'?' on':'') + (label.length>2?' wide':'');
      b.textContent = label;
      b.onclick = ()=>press(key);
      r.appendChild(b);
    }
    kp.appendChild(r);
  }
}

/* ---------- 自訂程式 ---------- */
function initCustom(){
  const ta = $('custom');
  ta.addEventListener('input', ()=>{ S.customCode = ta.value; });
  $('customRun').onclick = ()=>{
    S.mode='PRGM';
    S.progIdx = programs().length; // 最後一項 = 自訂
    const p = {n:99,title:'自訂程式',en:'custom',authors:['你'],declared:0,code:S.customCode};
    startRun(p);
  };
  $('customInfo').onclick = ()=>{
    try{
      const pr = new C.Program(S.customCode);
      S.line1 = 'bytes';
      S.line2 = pr.bytes + ' (' + (680-pr.bytes) + ' left)';
    }catch(e){
      S.error=true; S.line1='Syntax'; S.line2=e.message.slice(0,20);
    }
    render();
  };
}

/* ---------- 啟動 ---------- */
window.addEventListener('DOMContentLoaded', ()=>{
  buildKeypad();
  initCustom();
  S.line1=''; S.line2='READY';
  render();
});
window.__press = press;  // 供測試
})();
