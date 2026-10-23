'use strict';
/* fx-50F PLUS 操作层：按键 → 状态机（菜单、光标、SHIFT/ALPHA、程序区） */
(function(){
const C = window.CASIO;
const calc = new C.Calc();

const MODE_ITEMS = [['COMP',1],['CMPLX',2],['BASE',3],['SD',4],['REG',5],['PRGM',6]];

const S = {
  mode:'COMP',
  menu:null,            // null | MODE | SETUP | PRGM | FIX | SCI | NORM | LIB
  entry:'', cursor:0, ins:true,
  shift:false, alpha:false,
  line1:'', line2:'', error:false, off:false,
  hist:[], histIdx:-1,
  prog:'', 
  running:false, gen:null, awaitingInput:false, inputBuf:'',
  libIdx:0, statIdx:0,
};

const $ = id => document.getElementById(id);

/* ---------------- 显示 ---------------- */
function render(){
  const ind=[];
  if(S.shift) ind.push('S');
  if(S.alpha) ind.push('A');
  if(S.ins) ind.push('INS');
  if(calc.vars.M!==0) ind.push('M');
  ind.push(calc.mode.angle==='Deg'?'D':calc.mode.angle==='Rad'?'R':'G');
  if(calc.mode.fix!=null) ind.push('FIX');
  if(calc.mode.sci!=null) ind.push('SCI');
  ind.push(S.mode);
  $('ind').textContent = ind.join(' ');
  $('l1').textContent = S.off ? '' : S.line1;
  $('l2').textContent = S.off ? '' : S.line2;
  $('l2').className = 'line' + (S.error?' err':'');
  $('l1').className = 'line' + (S.running?' blink':'');
  document.body.classList.toggle('shifted', S.shift);
  document.body.classList.toggle('alphaed', S.alpha);
}

/* 把光标画进输入行 */
function showEntry(){
  if(S.off) return render();
  const e=S.entry;
  S.line1 = e.slice(0,S.cursor) + '▏' + e.slice(S.cursor);
  render();
}

/* ---------------- 模式 / 设置菜单 ---------------- */
function openModeMenu(){
  S.menu='MODE';
  S.line1='1COMP 2CMPLX 3BASE';
  S.line2='4SD 5REG 6PRGM';
  render();
}
function openSetup(){
  S.menu='SETUP';
  S.line1='1Fix 2Sci 3Norm';
  S.line2='4Disp 5Cont 6STAT';
  render();
}
function selectMode(n){
  const item = MODE_ITEMS.find(x=>x[1]===n);
  S.menu=null;
  if(!item) return render();
  const name=item[0];
  if(name==='PRGM'){ S.mode='PRGM'; return openPrgmMenu(); }
  S.mode=name;
  if(name==='SD'||name==='REG') calc.stat={freqOn:false,data:[],regMode:name==='REG'?'Lin':'SD'};
  S.entry=''; S.cursor=0; S.line1=''; S.line2='';
  render();
}
function selectSetup(n){
  if(n===1){ S.menu='FIX'; S.line1='Fix 0-9?'; S.line2=''; return render(); }
  if(n===2){ S.menu='SCI'; S.line1='Sci 0-9?'; S.line2=''; return render(); }
  if(n===3){ S.menu='NORM'; S.line1='1Norm1 2Norm2'; S.line2=''; return render(); }
  if(n===4){ S.menu=null; S.mode='COMP'; S.line1='Disp'; S.line2='Deg'; return render(); }
  if(n===5){ S.menu=null; S.mode='COMP'; S.line1='Contrast'; S.line2='■■■■■'; return render(); }
  if(n===6){ S.menu=null; S.mode='COMP'; calc.stat.freqOn=!calc.stat.freqOn;
             S.line1='STAT'; S.line2=calc.stat.freqOn?'FreqOn':'FreqOff'; return render(); }
  render();
}

/* ---------------- 程序模式 ---------------- */
function progBytes(){ try{ return new C.Program(S.prog).bytes; }catch(e){ return 0; } }
function openPrgmMenu(){
  S.menu='PRGM';
  S.line1='1EDIT 2RUN 3LIB';
  S.line2=progBytes()+'b /680';
  render();
}
function openLib(){
  const list=window.PROGRAMS||[];
  if(!list.length){ S.menu=null; S.line1='NO DATA'; return render(); }
  S.menu='LIB';
  const p=list[S.libIdx];
  S.line1=(S.libIdx+1)+'/'+list.length+' '+p.title;
  S.line2='EXE载入 ▶跳过';
  render();
}

/* ---------------- 求值 ---------------- */
function evaluate(){
  if(!S.entry) return render();
  try{
    const node=new C.Parser(C.lex(S.entry)).parseExpr(0);
    const v=calc.evalNode(node);
    calc.ans=v;
    S.hist.push(S.entry); S.histIdx=S.hist.length;
    S.line2=calc.format(v);
    S.line1=S.entry;
    S.entry=''; S.cursor=0; S.error=false;
  }catch(e){
    S.error=true;
    S.line1=S.entry;
    S.line2=e.message.replace('Syntax ERROR：','Syntax ').slice(0,16);
  }
  render();
}

/* ---------------- SHIFT / ALPHA ---------------- */
const ALPHA_MAP={'7':'A','8':'B','9':'C','4':'D','5':'E','6':'F','1':'X','2':'Y','3':'M'};

function shiftedToken(k){
  switch(k){
    case 'sin': return 'sin⁻¹(';
    case 'cos': return 'cos⁻¹(';
    case 'tan': return 'tan⁻¹(';
    case 'log': return '10^(';
    case 'ln':  return 'e^(';
    case '√':   return '∛(';
    case 'EXP': return 'π';
    default: return null;
  }
}
function baseToken(k){
  const m={'0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9',
    '.':'.','+':'+','−':'-','×':'×','÷':'÷','^':'^','(':'(',')':')',
    'x²':'²','x³':'³','x⁻¹':'⁻¹','√':'√(','log':'log(','ln':'ln(','sin':'sin(',
    'cos':'cos(','tan':'tan(','Abs':'Abs(','π':'π','Ans':'Ans','EXP':'E','°':'°'};
  return m[k]!=null?m[k]:null;
}

/* ---------------- 按键分发 ---------------- */
function press(k){
  if(S.off){ if(k==='ON'){ S.off=false; reset(); } return; }
  if(S.menu) return menuKey(k);
  if(S.awaitingInput) return inputKey(k);
  if(S.running) return runKey(k);
  if(S.mode==='PRGM') return prgmKey(k);
  if(S.mode==='SD'||S.mode==='REG') return statKey(k);

  switch(k){
    case 'SHIFT': S.shift=!S.shift; S.alpha=false; return render();
    case 'ALPHA': S.alpha=!S.alpha; S.shift=false; return render();
    case 'MODE': if(S.shift){ S.shift=false; return openSetup(); } return openModeMenu();
    case 'ON': return reset();
    case 'AC': S.entry=''; S.cursor=0; S.line1=''; S.line2=''; S.error=false; return render();
    case 'DEL':
      if(S.shift){ S.shift=false; S.ins=!S.ins; return render(); }
      if(S.cursor>0){ S.entry=S.entry.slice(0,S.cursor-1)+S.entry.slice(S.cursor); S.cursor--; }
      return showEntry();
    case '▶': if(S.cursor<S.entry.length) S.cursor++; return showEntry();
    case '◀': if(S.cursor>0) S.cursor--; return showEntry();
    case '▲': if(S.hist.length){ S.histIdx=Math.max(0,(S.histIdx||S.hist.length)-1);
                S.entry=S.hist[S.histIdx]||''; S.cursor=S.entry.length; return showEntry(); } return;
    case '▼': if(S.hist.length){ S.histIdx=Math.min(S.hist.length-1,(S.histIdx||0)+1);
                S.entry=S.hist[S.histIdx]||''; S.cursor=S.entry.length; return showEntry(); } return;
    case 'EXE': return evaluate();
  }

  if(S.shift){ const t=shiftedToken(k); S.shift=false; if(t!=null) return insert(t); return render(); }
  if(S.alpha){ S.alpha=false; const v=ALPHA_MAP[k]; if(v) return insert(v); return render(); }
  const t=baseToken(k);
  if(t!=null) insert(t);
}

function insert(t){
  if(S.ins) S.entry=S.entry.slice(0,S.cursor)+t+S.entry.slice(S.cursor);
  else S.entry=S.entry.slice(0,S.cursor)+t+S.entry.slice(S.cursor+1);
  S.cursor+=t.length;
  showEntry();
}

/* ---------------- 菜单按键 ---------------- */
function menuKey(k){
  if(k==='ON'){ S.menu=null; return reset(); }
  if(k==='AC'){ S.menu=null; S.line1=''; S.line2=''; return render(); }
  if(S.menu==='MODE'){ const n=+k; if(n>=1&&n<=6) return selectMode(n); return; }
  if(S.menu==='SETUP'){ const n=+k; if(n>=1&&n<=6) return selectSetup(n); return; }
  if(S.menu==='FIX'||S.menu==='SCI'){
    const n=+k;
    if(n>=0&&n<=9){
      if(S.menu==='FIX'){ calc.mode.fix=n; calc.mode.sci=null; }
      else { calc.mode.sci=n; calc.mode.fix=null; }
      S.menu=null; S.mode='COMP'; S.line1=''; S.line2=''; render();
    }
    return;
  }
  if(S.menu==='NORM'){
    if(k==='1'||k==='2'){ calc.mode.norm=+k; calc.mode.fix=null; calc.mode.sci=null;
      S.menu=null; S.mode='COMP'; S.line1=''; S.line2=''; }
    return render();
  }
  if(S.menu==='PRGM'){
    if(k==='1'){ S.menu=null; S.line1=S.prog.slice(-16); S.line2=progBytes()+'b'; return render(); }
    if(k==='2'){ if(!S.prog){ S.menu=null; S.line1='NO PROGRAM'; return render(); }
                 S.menu=null; return startRun(); }
    if(k==='3'){ return openLib(); }
    return;
  }
  if(S.menu==='LIB'){
    const list=window.PROGRAMS||[];
    if(k==='▶'){ S.libIdx=(S.libIdx+1)%list.length; return openLib(); }
    if(k==='◀'){ S.libIdx=(S.libIdx+list.length-1)%list.length; return openLib(); }
    if(k==='EXE'){ S.prog=list[S.libIdx].code; S.menu=null; S.line1='LOADED'; S.line2=progBytes()+'b'; return render(); }
    if(k==='AC'){ S.menu=null; S.line1=''; S.line2=''; return render(); }
    return;
  }
}

/* ---------------- 程序编辑 ---------------- */
function prgmKey(k){
  if(k==='MODE'){ S.mode='COMP'; S.line1=''; S.line2=''; return render(); }
  if(k==='ON') return reset();
  if(k==='SHIFT'){ S.shift=!S.shift; return render(); }
  if(k==='ALPHA'){ S.alpha=!S.alpha; return render(); }
  if(k==='DEL'){ S.prog=S.prog.slice(0,-1); S.line1=S.prog.slice(-16); S.line2=progBytes()+'b'; return render(); }
  if(k==='AC'){ S.line1=''; S.line2=progBytes()+'b'; return render(); }
  if(k==='EXE'){ return openPrgmMenu(); }
  const t=baseToken(k);
  if(t!=null){ S.prog+=t; S.line1=S.prog.slice(-16); S.line2=progBytes()+'b'; return render(); }
}

/* ---------------- 统计模式 ---------------- */
function statKey(k){
  if(k==='MODE') return openModeMenu();
  if(k==='ON') return reset();
  if(k==='SHIFT'){ S.shift=!S.shift; return render(); }
  if(/^[0-9.]$/.test(k)||k==='−') return insert(k==='−'?'-':k);
  if(k==='DEL'){ if(S.cursor>0){ S.entry=S.entry.slice(0,S.cursor-1)+S.entry.slice(S.cursor); S.cursor--; } return showEntry(); }
  if(k==='AC'){ S.entry=''; S.cursor=0; S.line1=S.mode; S.line2=''; return render(); }
  if(k===',') return insert(',');
  if(k==='EXE'){
    if(!S.entry) return render();
    try{
      const parts=S.entry.split(',');
      const x=evalNum(parts[0]);
      const y=parts.length>1?evalNum(parts[1]):0;
      calc.addData(x,y,1); calc.ans=x;
      S.line1='n='+calc.statSums().n;
      S.line2='x='+calc.format(x);
      S.entry=''; S.cursor=0; S.error=false;
    }catch(e){ S.error=true; S.line1='ERROR'; S.line2=e.message.slice(0,16); }
    return render();
  }
  if(k==='Ans'){
    const labels=['n','Σx','Σx²','x̄','Σy','Σxy'];
    S.statIdx=(S.statIdx+1)%labels.length;
    const lab=labels[S.statIdx];
    S.line1=lab; S.line2=calc.format(calc.getVar(lab));
    return render();
  }
}
function evalNum(str){ return calc.evalNode(new C.Parser(C.lex(str)).parseExpr(0)); }

/* ---------------- 执行 ---------------- */
function startRun(){
  let prog;
  try{ prog=new C.Program(S.prog); }
  catch(e){ S.error=true; S.line1='Syntax'; S.line2=e.message.slice(0,16); return render(); }
  S.running=true; S.gen=prog.run(calc);
  S.line1='RUN'; S.line2=''; render();
  step();
}
function step(val){
  if(!S.gen) return endRun();
  let r;
  try{ r=S.gen.next(val); }
  catch(e){ S.error=true; S.line1='ERROR';
            S.line2=e.message.replace(/Syntax ERROR：?/,'Syntax ').slice(0,16);
            S.running=false; S.gen=null; return render(); }
  if(r.done) return endRun();
  const ev=r.value;
  if(ev.type==='in'){ S.awaitingInput=true; S.inputBuf=''; S.line1='?'; S.line2=''; return render(); }
  if(ev.type==='out'){ S.line1='='; S.line2=String(ev.value); return render(); }
  if(ev.type==='clear'){ S.line1=''; S.line2=''; render(); return step(); }
  step();
}
function endRun(){ S.running=false; S.gen=null; S.awaitingInput=false; S.line1='END'; render(); }
function runKey(k){ if(k==='ON') return reset(); if(k==='EXE') return step(); }
function inputKey(k){
  if(/^[0-9.]$/.test(k)){ S.inputBuf+=k; S.line1='?'+S.inputBuf; return render(); }
  if(k==='DEL'){ S.inputBuf=S.inputBuf.slice(0,-1); S.line1='?'+S.inputBuf; return render(); }
  if(k==='−'){ S.inputBuf=S.inputBuf.startsWith('-')?S.inputBuf.slice(1):'-'+S.inputBuf; S.line1='?'+S.inputBuf; return render(); }
  if(k==='EXE'){ const v=Number(S.inputBuf)||0; S.awaitingInput=false; return step(v); }
  if(k==='ON') return reset();
}

function reset(){
  calc.reset();
  S.mode='COMP'; S.menu=null; S.entry=''; S.cursor=0; S.ins=true;
  S.line1=''; S.line2=''; S.error=false; S.running=false; S.gen=null;
  S.awaitingInput=false; S.inputBuf=''; S.shift=false; S.alpha=false; S.off=false;
  render();
}

/* ---------------- 键盘 ---------------- */
const ROWS = [
  [{l:'SHIFT',k:'SHIFT',cls:'shift'},{l:'ALPHA',k:'ALPHA',cls:'alpha'},
   {l:'◀',k:'◀',cls:'replay'},{l:'▶',k:'▶',cls:'replay'},{l:'▲▼',k:'▲',cls:'replay'}],
  [{l:'x³',k:'x³',fn:1},{l:'x²',k:'x²',sh:'x³',fn:1},{l:'x⁻¹',k:'x⁻¹',fn:1},{l:'^',k:'^'},{l:'√',k:'√',sh:'∛',fn:1}],
  [{l:'log',k:'log',sh:'10ˣ',fn:1},{l:'ln',k:'ln',sh:'eˣ',fn:1},{l:'(-)',k:'−'},{l:'°′″',k:'°',fn:1},{l:'Abs',k:'Abs',fn:1}],
  [{l:'sin',k:'sin',sh:'sin⁻¹',fn:1},{l:'cos',k:'cos',sh:'cos⁻¹',fn:1},{l:'tan',k:'tan',sh:'tan⁻¹',fn:1},{l:'(',k:'('},{l:')',k:')'}],
  [{l:'7',k:'7',num:1,al:'A'},{l:'8',k:'8',num:1,al:'B'},{l:'9',k:'9',num:1,al:'C'},{l:'DEL',k:'DEL'},{l:'AC',k:'AC'}],
  [{l:'4',k:'4',num:1,al:'D'},{l:'5',k:'5',num:1,al:'E'},{l:'6',k:'6',num:1,al:'F'},{l:'×',k:'×'},{l:'÷',k:'÷'}],
  [{l:'1',k:'1',num:1,al:'X'},{l:'2',k:'2',num:1,al:'Y'},{l:'3',k:'3',num:1,al:'M'},{l:'+',k:'+'},{l:'−',k:'−'}],
  [{l:'0',k:'0',num:1},{l:'.',k:'.'},{l:'EXP',k:'EXP',sh:'π',fn:1},{l:'Ans',k:'Ans',fn:1},{l:'EXE',k:'EXE',cls:'exe'}],
];

function buildKeypad(){
  const kp=$('keypad'); if(!kp) return;
  kp.innerHTML='';
  for(const row of ROWS){
    for(const c of row){
      const b=document.createElement('button');
      b.className='key'+(c.num?' num':'')+(c.fn?' fn':'')+(c.cls?' '+c.cls:'');
      if(c.sh){ const s=document.createElement('span'); s.className='sh'; s.textContent=c.sh; b.appendChild(s); }
      if(c.al){ const a=document.createElement('span'); a.className='al'; a.textContent=c.al; b.appendChild(a); }
      const t=document.createElement('span'); t.textContent=c.l; b.appendChild(t);
      b.onclick=()=>press(c.k);
      kp.appendChild(b);
    }
  }
}

window.addEventListener('DOMContentLoaded', ()=>{ buildKeypad(); reset(); S.line2='READY'; render(); });
window.__press=press;
window.__state=()=>S;
window.__calc=()=>calc;
})();
