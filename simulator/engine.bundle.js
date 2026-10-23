/* fx-50F PLUS simulator engine bundle — generated, do not edit */
(function(root){

/* ==== core.js ==== */
/* CASIO fx-50F PLUS 模拟器核心引擎
 * 与 UI 解耦：Node 可 require 后无头测试。
 */

const SINGLE = {
  '(':'(', ')':')', ',':',', ';':';', ':':':',
  '+':'+', '-':'-', '−':'-', '×':'×', '*':'×', '÷':'÷', '/':'÷',
  '^':'^', '!':'!', '=':'=', '>':'>', '<':'<', '?':'?',
  '→':'→', '◢':'◢', '°':'°',
  '²':'²', '³':'³', '⁻¹':'⁻¹', '≠':'≠', '≦':'≦', '≧':'≧',
};
const MULTI = [
  ['ClrMemory','cmd'],['ClrStat','cmd'],['WhileEnd','cmd'],['LpWhile','cmd'],
  ['FreqOff','cmd'],['FreqOn','cmd'],['IfEnd','cmd'],['While','cmd'],
  ['Goto','cmd'],['Else','cmd'],['Then','cmd'],['If','cmd'],['For','cmd'],
  ['Step','cmd'],['Next','cmd'],['To','cmd'],['Break','cmd'],['Return','cmd'],['Lbl','cmd'],
  ['Do','cmd'],['Prog','cmd'],['DT','cmd'],['Fix','cmd'],['Sci','cmd'],['Norm','cmd'],
  ['Deg','cmd'],['Rad','cmd'],['Gra','cmd'],['Cls','cmd'],
  ['Ans','var'],['Ran#','fn'],
  ['Rnd(','fn'],['e^(','fn'],['∛(','fn'],['min(','fn'],['max(','fn'],['min','fn'],['max','fn'],['Abs(','fn'],['Int(','fn'],['Intg(','fn'],['Frac(','fn'],
  ['√(','fn'],['log(','fn'],['ln(','fn'],
  ['sin⁻¹(','fn'],['cos⁻¹(','fn'],['tan⁻¹(','fn'],
  ['sin(','fn'],['cos(','fn'],['tan(','fn'],
  ['Rec(','fn'],['Pol(','fn'],['Not(','fn'],['Neg(','fn'],['Conjg(','fn'],
  ['sinh(','fn'],['cosh(','fn'],['tanh(','fn'],
  ['Σx²','var'],['Σy²','var'],['Σxy','var'],['Σx','var'],['Σy','var'],
  ['M+','cmd'],['M-','cmd'],['M−','cmd'],
  ['=>','op'],['→','op'],['◢','op'],
  ['x²','op'],['x³','op'],['x⁻¹','op'],
  ['⁻¹','op'],['²','op'],['³','op'],
  ['π','num'],['i','var'],['α','var'],['n','var'],['nCr','op'],['nPr','op'],['Clrstat','cmd'],['％','op'],['%','op'],
].sort((a,b)=>b[0].length-a[0].length);

function lex(src){
  const out=[]; let i=0;
  while(i<src.length){
    const c=src[i];
    if(/[ \t\r\n]/.test(c)){ i++; continue; }
    // 小數：允許原頁把「.5」排成「. 5」（中間插了空格）
    let dotStart=-1;
    if(c==='.'){ let k=i+1; while(src[k]===' ')k++; if(/[0-9]/.test(src[k]||'')) dotStart=k; }
    if(/[0-9]/.test(c) || dotStart>=0){
      let j=(dotStart>=0?dotStart:i), dot=(dotStart>=0);
      while(j<src.length){
        const d=src[j];
        if(/[0-9]/.test(d)){ j++; }
        else if(d==='.' && !dot){ dot=true; j++; }
        else break;
      }
      let num=(dotStart>=0? '0.'+src.slice(dotStart,j) : src.slice(i,j));
      if(src[j]==='E' && (src[j+1]==='-'||src[j+1]==='+')){
        if(/[0-9]/.test(src[j+2]||'')){ let e=j+2; while(/[0-9]/.test(src[e]||''))e++; num+='E'+src.slice(j+1,e); j=e; }
      } else if(src[j]==='E' && /[0-9]/.test(src[j+1]||'')){
        let e=j+1; while(/[0-9]/.test(src[e]||''))e++; num+='E'+src.slice(j+1,e); j=e;
      }
      out.push({k:'num', v:num}); i=j; continue;
    }
    if(c==='E' && (/[0-9]/.test(src[i+1]||'') || ((src[i+1]==='-'||src[i+1]==='+') && /[0-9]/.test(src[i+2]||'')))){
      // 单独 E 后接数字 = EXP 键，等价 1×10^n，作为数字常量
      let j=i+1;
      if(src[j]==='-'||src[j]==='+') j++;
      while(j<src.length && /[0-9]/.test(src[j])) j++;
      const exp=src.slice(i+1,j);
      out.push({k:'num', v:'1E'+exp, expToken:true});
      i=j; continue;
    }
    let hit=null;
    for(const [txt,kind] of MULTI){ if(src.startsWith(txt,i)){ hit=[txt,kind]; break; } }
    if(hit){ out.push({k:hit[1], v:hit[0]}); i+=hit[0].length; continue; }
    if(/[A-FXYZM]/.test(c)){ out.push({k:'var', v:c}); i++; continue; }
    if(SINGLE[c]){ out.push({k:'op', v:SINGLE[c]}); i++; continue; }
    throw new Error('Syntax ERROR：无法识别 "'+c+'"（位置 '+i+'）');
  }
  return out;
}

/* ---------- 表达式解析（Pratt） ---------- */
const BINPREC = {
  'or':1, 'Or':1,
  'and':2, 'And':2,
  '=':3,'≠':3,'>':3,'<':3,'≧':3,'≦':3,
  '+':4,'-':4,
  '×':5,'÷':5,'nCr':5,'nPr':5,
  '^':7,
};

function Parser(tokens){
  this.t=tokens; this.i=0;
}
Parser.prototype.peek=function(n){ return this.t[this.i+(n||0)]; };
Parser.prototype.next=function(){ return this.t[this.i++]; };
Parser.prototype.eat=function(v){ const t=this.peek(); if(t && t.v===v){ this.i++; return true;} return false; };

Parser.prototype.parseExpr=function(minPrec){
  let left=this.parseUnary();
  for(;;){
    const t=this.peek();
    if(!t) break;
    let op=t.v;
    // 隐式乘法：值后面紧跟值
    if(isValueStart(t) && (minPrec||0)<=6){
      const rhs=this.parsePow();
      left={type:'bin', op:'×', l:left, r:rhs, implicit:true};
      continue;
    }
    const prec=BINPREC[op]||0;
    if(prec===0 || prec<(minPrec||0)) break;
    this.next();
    const right=this.parseExpr(op==='^'?prec:prec+1);
    left={type:'bin', op, l:left, r:right};
  }
  return left;
};

function isValueStart(t){
  if(!t) return false;
  if(t.k==='num'||t.k==='var') return true;
  if(t.k==='fn') return true;
  if(t.v==='(') return true;
  return false;
}

Parser.prototype.parsePow=function(){
  let base=this.parseUnary();
  const t=this.peek();
  if(t && (t.v==='²'||t.v==='³'||t.v==='⁻¹'||t.v==='!')){
    this.next();
    base={type:'post', op:t.v, arg:base};
  }
  return base;
};

Parser.prototype.parseUnary=function(){
  const t=this.peek();
  if(t && t.v==='-'){
    this.next();
    return {type:'un', op:'-', arg:this.parseUnary()};
  }
  if(t && t.v==='+'){ this.next(); return this.parseUnary(); }
  if(t && t.v==='Not('){ this.next(); const a=this.parseExpr(0); this.eat(')'); return {type:'un',op:'Not',arg:a}; }
  let node=this.parsePrimary();
  // 后缀
  for(;;){
    const p=this.peek();
    if(p && (p.v==='²'||p.v==='³'||p.v==='⁻¹'||p.v==='!')){ this.next(); node={type:'post',op:p.v,arg:node}; }
    else break;
  }
  return node;
};

Parser.prototype.parsePrimary=function(){
  const t=this.next();
  if(!t) throw new Error('Syntax ERROR：表达式意外结束');
  if(t.k==='num'){
    if(t.v==='π') return {type:'num', v:Math.PI};
    return {type:'num', v:parseFloat(t.v.replace('E','e'))};
  }
  if(t.k==='var') return {type:'var', name:t.v};
  if(t.v==='('){ const e=this.parseExpr(0); this.eat(')'); return e; }
  if(t.k==='fn'){
    const name=t.v.replace('(','');
    if(name==='Ran#'){ return {type:'call', name:'Ran#'}; }
    if(name==='EXP'){ const a=this.parseExpr(0); this.eat(')'); return {type:'bin',op:'EXP',l:{type:'num',v:10},r:a}; }
    // 带括号的函数
    if(t.v.endsWith('(')){
      const args=[this.parseExpr(0)];
      while(this.eat(',')) args.push(this.parseExpr(0));
      this.eat(')');
      return {type:'call', name, args};
    }
    // min/max 常被原页写作 2minX（少了括号）
    if(name==='min'||name==='max'){
      const args=[this.parseExpr(8)];
      if(this.eat(',')) args.push(this.parseExpr(8));
      return {type:'call', name, args};
    }
    return {type:'call', name};
  }
  if(t.v==='-') { return {type:'un',op:'-',arg:this.parseUnary()}; }
  throw new Error('Syntax ERROR：意外的 "'+t.v+'"');
};

function parseExpr(src){ const p=new Parser(lex(src)); const e=p.parseExpr(0); if(p.i<p.t.length) throw new Error('Syntax ERROR：多余的内容 "'+p.t[p.i].v+'"'); return e; }




/* ==== engine.js ==== */
/* fx-50F PLUS 执行引擎：求值、语句、程序运行 */

const ERR = {
  Math: 'Math ERROR', Syntax: 'Syntax ERROR', Stack: 'Stack ERROR',
  Memory: 'Memory ERROR', Arg: 'Argument ERROR', Range: 'Range ERROR',
};

class Calc {
  constructor(){
    this.reset();
  }
  reset(){
    this.vars = {A:0,B:0,C:0,D:0,E:0,F:0,X:0,Y:0,M:0,Z:0,'α':0};
    this.ans = 0;
    this.mode = { fix:null, sci:null, norm:2, angle:'Deg' };
    this.stat = { freqOn:false, data:[], regMode:'Lin' };
    this.progs = ['', '', '', ''];
    this.history = [];
  }
  // ---- 統計
  addData(x, y, f){
    this.stat.data.push({x, y:(y==null?0:y), f:(f==null?1:f)});
  }
  statSums(){
    let n=0,sx=0,sy=0,sxx=0,syy=0,sxy=0;
    for(const d of this.stat.data){
      const f=d.f; n+=f; sx+=d.x*f; sy+=d.y*f;
      sxx+=d.x*d.x*f; syy+=d.y*d.y*f; sxy+=d.x*d.y*f;
    }
    return {n,sx,sy,sxx,syy,sxy};
  }
  regression(){
    const S=this.statSums();
    const den=S.n*S.sxx-S.sx*S.sx;
    if(den===0) throw new Error(ERR.Math);
    const b=(S.n*S.sxy-S.sx*S.sy)/den;
    const a=(S.sy-b*S.sx)/S.n;
    return {a,b,r:0};
  }

  // ---- 角度换算
  toRad(v){
    if(this.mode.angle==='Rad') return v;
    if(this.mode.angle==='Gra') return v*Math.PI/200;
    return v*Math.PI/180;
  }
  fromRad(v){
    if(this.mode.angle==='Rad') return v;
    if(this.mode.angle==='Gra') return v*200/Math.PI;
    return v*180/Math.PI;
  }
  // ---- 变量
  getVar(name){
    if(name==='Ans') return this.ans;
    if(name==='π') return Math.PI;
    if(name in this.vars) return this.vars[name];
    const st=this.stat;
    if(['n','Σx','Σy','Σx²','Σy²','Σxy','x̄','ȳ'].includes(name)){
      const S=this.statSums();
      return name==='n'?S.n : name==='Σx'?S.sx : name==='Σy'?S.sy
           : name==='Σx²'?S.sxx : name==='Σy²'?S.syy : name==='Σxy'?S.sxy
           : name==='x̄'?S.sx/S.n : S.sy/S.n;
    }
    if(name==='A'||name==='B'){ const r=this.regression(); return name==='A'?r.a:r.b; }
    throw new Error(ERR.Syntax);
  }
  setVar(name, v){
    if(!(name in this.vars)) throw new Error(ERR.Syntax);
    this.vars[name]=v;
  }

  evalNode(nd){
    switch(nd.type){
      case 'num': return nd.v;
      case 'var': return this.getVar(nd.name);
      case 'un': {
        const a=this.evalNode(nd.arg);
        if(nd.op==='-') return -a;
        if(nd.op==='Not') return a===0?1:0;
        return a;
      }
      case 'post': {
        const a=this.evalNode(nd.arg);
        if(nd.op==='²') return a*a;
        if(nd.op==='³') return a*a*a;
        if(nd.op==='⁻¹'){ if(a===0) throw new Error(ERR.Math); return 1/a; }
        if(nd.op==='!') return factorial(a);
        return a;
      }
      case 'bin': {
        // 短路不需要，但比较与逻辑按 0/1
        const a=this.evalNode(nd.l);
        const b=this.evalNode(nd.r);
        switch(nd.op){
          case '+': return a+b;
          case '-': return a-b;
          case '×': return a*b;
          case '÷': if(b===0) throw new Error(ERR.Math); return a/b;
          case 'nCr': return nCr(a,b);
          case 'nPr': return nPr(a,b);
          case 'EXP': return a*Math.pow(10,b);
          case '^': {
            const r=Math.pow(a,b);
            if(!isFinite(r)||isNaN(r)) throw new Error(ERR.Math);
            return r;
          }
          case '=': return a===b?1:0;
          case '≠': return a!==b?1:0;
          case '>': return a>b?1:0;
          case '<': return a<b?1:0;
          case '≧': return a>=b?1:0;
          case '≦': return a<=b?1:0;
          case 'and': case 'And': return (a!==0&&b!==0)?1:0;
          case 'or': case 'Or': return (a!==0||b!==0)?1:0;
        }
        throw new Error(ERR.Syntax);
      }
      case 'call': return this.callFn(nd.name, nd.args||[]);
    }
    throw new Error(ERR.Syntax);
  }
  callFn(name, args){
    const a = args.length? this.evalNode(args[0]) : 0;
    switch(name){
      case 'Ran#': return Math.floor(Math.random()*1000)/1000;  // fx-50F PLUS：三位小数
      case 'Rnd': return Math.round(a);
      case 'min': return Math.min(a, this.evalNode(args[1]));
      case 'max': return Math.max(a, this.evalNode(args[1]));
      case 'Abs': return Math.abs(a);
      case 'Int': return Math.trunc(a);
      case 'Intg': return Math.floor(a);
      case 'Frac': return a-Math.trunc(a);
      case '√': if(a<0) throw new Error(ERR.Math); return Math.sqrt(a);
      case '∛': return Math.cbrt(a);
      case 'e^': return Math.exp(a);
      case 'log': if(a<=0) throw new Error(ERR.Math); return Math.log10(a);
      case 'ln': if(a<=0) throw new Error(ERR.Math); return Math.log(a);
      case 'sin': return trim(this.sin(this.toRad(a)));
      case 'cos': return trim(this.cos(this.toRad(a)));
      case 'tan': {
        const r=this.tan(this.toRad(a));
        if(!isFinite(r)) throw new Error(ERR.Math);
        return trim(r);
      }
      case 'sin⁻¹': return this.fromRad(Math.asin(a));
      case 'cos⁻¹': return this.fromRad(Math.acos(a));
      case 'tan⁻¹': return this.fromRad(Math.atan(a));
      case 'sinh': return Math.sinh(a);
      case 'cosh': return Math.cosh(a);
      case 'tanh': return Math.tanh(a);
      case 'Pol': { const y=this.evalNode(args[1]); const r=Math.hypot(a,y); this.vars.X=r; this.vars.Y=this.fromRad(Math.atan2(y,a)); return r; }
      case 'Rec': { const t=this.toRad(this.evalNode(args[1])); this.vars.X=a*Math.cos(t); this.vars.Y=a*Math.sin(t); return this.vars.X; }
      default: throw new Error(ERR.Syntax);
    }
  }
  sin(x){ const v=Math.sin(x); return Math.abs(v)<1e-12?0:v; }
  cos(x){ const v=Math.cos(x); return Math.abs(v)<1e-12?0:v; }
  tan(x){ const c=this.cos(x); return Math.abs(c)<1e-12?NaN:this.sin(x)/c; }

  /* ---------- 显示格式 ---------- */
  formatDMS(v){
    const neg=v<0, a=Math.abs(v);
    let d=Math.floor(a), rem=(a-d)*60, m=Math.floor(rem), sec=(rem-m)*60;
    sec=Math.round(sec*100)/100;
    if(sec>=60){sec-=60;m+=1;} if(m>=60){m-=60;d+=1;}
    const pad=n=>String(n).padStart(2,'0');
    let secStr = sec===0 ? '00'
      : (sec < 10 ? '0' : '') + String(Math.round(sec*100)/100).replace(/\.0+$/,'').replace(/(\.\d)0$/,'$1');
    return (neg?'-':'')+d+'°'+pad(m)+"'"+secStr+'"';
  }
  format(v, dms){
    if(typeof v!=='number'||isNaN(v)) return 'ERROR';
    if(!isFinite(v)) return 'Math ERROR';
    if(dms) return this.formatDMS(v);
    const m=this.mode;
    if(v===0) return m.fix!=null ? (0).toFixed(m.fix) : '0';
    if(m.fix!=null){
      if(Math.abs(v)>=1e10) return sci(v, m.fix, true);
      return v.toFixed(m.fix);            // Fix n：保留尾隨零
    }
    if(m.sci!=null) return sci(v, m.sci, false);
    const av=Math.abs(v);
    const low=Math.pow(10,-m.norm);                  // Norm1=1e-2 / Norm2=1e-9
    if(av<low || av>=1e10) return sci(v, 9, true);
    return plain(v);
  }
}

function stripZeros(s){
  return s.includes('.') ? s.replace(/0+$/,'').replace(/\.$/,'') : s;
}
function sci(v, dec, strip){
  let e=Math.floor(Math.log10(Math.abs(v)));
  let mant=v/Math.pow(10,e);
  let s=mant.toFixed(dec);
  if(Math.abs(Number(s))>=10){ mant/=10; e+=1; s=mant.toFixed(dec); }
  return (strip?stripZeros(s):s)+'ᴇ'+e;
}
function plain(v){
  let s=Number(v).toPrecision(10);
  if(s.includes('e')) s=Number(v).toFixed(10);
  return stripZeros(s);
}

function trim(v){ return Math.round(v*1e13)/1e13; }
function roundFixed(v,d){
  const s=v.toFixed(d);
  return s.indexOf('.')>=0 ? s.replace(/0+$/,'').replace(/\.$/,'') : s;
}
function nCr(n,r){ r=Math.round(r); n=Math.round(n); if(r<0||n<0||r>n) throw new Error(ERR.Math); let x=1; for(let i=0;i<r;i++) x=x*(n-i)/(i+1); return Math.round(x); }
function nPr(n,r){ n=Math.round(n); r=Math.round(r); if(r<0||n<0||r>n) throw new Error(ERR.Math); let x=1; for(let i=0;i<r;i++) x*=n-i; return x; }
function factorial(n){
  if(n<0||!Number.isInteger(n)||n>69) throw new Error(ERR.Math);
  let r=1; for(let i=2;i<=n;i++) r*=i; return r;
}




/* ==== prog.js ==== */
/* 程序执行器 v2：语句表 + 生成器，事件驱动（输入/输出） */


function splitStatements(tokens){
  const out=[]; let cur=[]; let depth=0;
  const flush=()=>{ if(cur.length){ out.push({kind:'stmt',t:cur}); cur=[]; } };
  for(const t of tokens){
    if(t.v==='(') depth++;
    else if(t.v===')'){ if(depth>0) depth--; }
    if(depth<=0 && (t.v==='Else'||t.v==='Then') && cur.length){
      flush(); cur.push(t); continue;
    }
    if(depth<=0 && (t.v===':'||t.v==='◢')){
      flush();
      if(t.v==='◢') out.push({kind:'disp'});
      continue;
    }
    cur.push(t);
  }
  flush();
  return out;
}
const first = st => st.kind==='stmt'&&st.t.length ? st.t[0].v : null;

function matchBlocks(list){
  const stack=[], M={};
  for(let i=0;i<list.length;i++){
    const f=first(list[i]);
    if(f==='While'||f==='For'||f==='Do') stack.push({op:f,i});
    else if(f==='Then') stack.push({op:'Then',i,elseI:null});
    else if(f==='Else'){
      for(let k=stack.length-1;k>=0;k--){
        if(stack[k].op==='Then'){ stack[k].elseI=i; break; }
      }
    }
    else if(f==='WhileEnd'){ const o=pop(stack,'While'); if(o){ M[o.i]=i; M[i]=o.i; } }
    else if(f==='Next'){ const o=pop(stack,'For'); if(o){ M[o.i]=i; M[i]=o.i; } }
    else if(f==='LpWhile'){ const o=pop(stack,'Do'); if(o){ M[o.i]=i; M[i]=o.i; } }
    else if(f==='IfEnd'){
      const o=pop(stack,'Then');
      if(o){ M[o.i]=o.elseI!=null?o.elseI:i; M[i]=o.i; if(o.elseI!=null) M[o.elseI]=i; }
    }
  }
  return M;
}
function pop(stack,op){
  for(let k=stack.length-1;k>=0;k--){ if(stack[k].op===op){ const o=stack[k]; stack.length=k; return o; } }
  return null;
}
function topIdx(t,ch){
  let d=0;
  for(let i=0;i<t.length;i++){
    if(t[i].v==='(') d++;
    else if(t[i].v===')') d--;
    else if(d===0 && t[i].v===ch) return i;
  }
  return -1;
}

class Program {
  constructor(text, index){
    this.text=text; this.index=index||0;
    this.tokens=lex(text);
    this.list=splitStatements(this.tokens);
    this.match=matchBlocks(this.list);
    this.labels={};
    this.list.forEach((st,i)=>{ if(first(st)==='Lbl'&&st.t[1]) this.labels[String(st.t[1].v)]=i; });
    this.bytes=countBytes(this.tokens);
    this.size=this.bytes;
  }
  evalT(calc,t){
    // 原頁偶把 Else/Then 與同一行代碼併在一起，這裡先剝掉前導命令
    while(t && t.length && (t[0].v==='Else'||t[0].v==='Then')) t=t.slice(1);
    if(!t||!t.length) return 0;   // 空表達式（原頁排版造成的空句）按 0 處理，不中斷程式
    const p=new Parser(t);
    return calc.evalNode(p.parseExpr(0));
  }
  /* 执行一条语句的 token 序列；返回 flow 对象或 null */
  *execDT(calc, t){
    // 形式：[x] [, y] [; freq] DT
    const di=t.findIndex(x=>x.v==='DT');
    const pre=t.slice(0,di);
    const semi=topIdx(pre,';');
    const main=semi>=0?pre.slice(0,semi):pre;
    const freq=semi>=0?this.evalT(calc,pre.slice(semi+1)):1;
    const comma=topIdx(main,',');
    if(comma>=0){
      const xp=main.slice(0,comma), yp=main.slice(comma+1);
      const x=xp.length?this.evalT(calc,xp):calc.ans;
      const y=yp.length?this.evalT(calc,yp):0;
      calc.addData(x,y,freq); calc.ans=x;
    } else {
      const x=main.length?this.evalT(calc,main):calc.ans;   // 空表示沿用 Ans
      calc.addData(x,0,freq); calc.ans=x;
    }
  }
  *exec(calc, t){
    const f0=t[0]&&t[0].v;
    // 原頁常把 Else/Then 與後續代碼寫在同一語句，甚至混在表達式裡
    const kSE=t.findIndex(x=>x.v==='Else'||x.v==='Then');
    if(kSE>0){
      yield* this.exec(calc,t.slice(0,kSE));
      return t.length>kSE+1 ? yield* this.exec(calc,t.slice(kSE+1)) : null;
    }
    if(f0==='Else'||f0==='Then'){
      return t.length>1 ? yield* this.exec(calc,t.slice(1)) : null;
    }
    // 嵌套語句裡也可能帶 DT（如 Else X , Y DT）
    if(t.some(x=>x.v==='DT')) return yield* this.execDT(calc,t);
    const lastT=t[t.length-1];
    if(lastT && (lastT.v==='M+'||lastT.v==='M-') && t.length>1){
      const v=this.evalT(calc,t.slice(0,-1));
      calc.vars.M += (lastT.v==='M+'? v : -v);
      calc.ans=v;
      return null;
    }
    const a=topIdx(t,'=>');
    if(a>=0){
      if(this.evalT(calc,t.slice(0,a))===0) return null;
      return yield* this.exec(calc,t.slice(a+1));
    }
    const to=topIdx(t,'→');
    if(to>=0){
      const v=this.evalT(calc,t.slice(0,to)); calc.ans=v;
      for(let k=to+1;k<t.length;k++){
        const vn=t[k]&&t[k].v;
        if(vn&&/^[A-FXYZM]$/.test(vn)) calc.setVar(vn,v);
      }
      return null;
    }
    const f=t[0]&&t[0].v;
    if(f==='Goto'){ const n=String(t[1]?t[1].v:'0'); if(!(n in this.labels)) throw new Error(ERR.Syntax); return {goto:n}; }
    if(f==='Break') return {break:true};
    if(f==='Return') return {return:true};
    if(f==='M+'){ calc.vars.M+=calc.ans; return null; }
    if(f==='M-'){ calc.vars.M-=calc.ans; return null; }
    calc.ans=this.evalT(calc,t);
    return null;
  }
  *run(calc){
    const L=this.list,M=this.match;
    let pc=0, guard=0;
    let lastWasExpr=false;
    const loops=[];  // {kind, start, varName, to, step}
    let curSt=null;
    try{
    while(pc<L.length){
      if(++guard>2000000) throw new Error(ERR.Stack);
      const st=L[pc]; curSt=st;
      if(st.kind==='disp'){ lastWasExpr=false; yield {type:'out', value:calc.format(calc.ans, calc._dms)}; pc++; continue; }
      const t=st.t, f=first(st);
      if(t.some(x=>x.v==='DT')){ yield* this.execDT(calc,t); pc++; continue; }
      switch(f){
        case 'ClrMemory': calc.vars={A:0,B:0,C:0,D:0,E:0,F:0,X:0,Y:0,M:0,Z:0}; calc.ans=0; pc++; continue;
        case 'ClrStat': case 'Clrstat': calc.stat={freqOn:calc.stat.freqOn,data:[],regMode:calc.stat.regMode}; pc++; continue;
        case 'DT': { yield* this.execDT(calc,t); pc++; continue; }
        case 'Fix': calc.mode.fix=t[1]?Number(t[1].v):0; pc++; continue;
        case 'Sci': calc.mode.sci=t[1]?Number(t[1].v):0; pc++; continue;
        case 'Norm': calc.mode.norm=t[1]?Number(t[1].v):2; pc++; continue;
        case 'Deg': calc.mode.angle='Deg'; pc++; continue;
        case 'Rad': calc.mode.angle='Rad'; pc++; continue;
        case 'Gra': calc.mode.angle='Gra'; pc++; continue;
        case 'FreqOn': calc.stat.freqOn=true; pc++; continue;
        case 'FreqOff': calc.stat.freqOn=false; pc++; continue;
        case 'Lbl': pc++; continue;
        case 'Goto': { const r=yield* this.exec(calc,t); if(r&&r.goto!=null){ loops.length=0; pc=this.labels[r.goto]; continue; } pc++; continue; }
        case 'While': {
          if(this.evalT(calc,t.slice(1))===0){ pc=(M[pc]!=null?M[pc]:pc)+1; continue; }
          loops.push({kind:'while',start:pc}); pc++; continue;
        }
        case 'WhileEnd': {
          const lp=loops[loops.length-1];
          if(!lp||lp.kind!=='while'){ pc++; continue; }   // 被 Goto 越過時容錯
          pc=lp.start; continue;
        }
        case 'Do': loops.push({kind:'do',start:pc}); pc++; continue;
        case 'LpWhile': {
          const lp=loops[loops.length-1];
          if(!lp||lp.kind!=='do'){ pc++; continue; }
          if(this.evalT(calc,t.slice(1))!==0) pc=lp.start;
          else { loops.pop(); pc++; }
          continue;
        }
        case 'For': {
          const toIdx=t.findIndex(x=>x.v==='To');
          const stepIdx=t.findIndex(x=>x.v==='Step');
          if(toIdx<0) throw new Error(ERR.Syntax);
          // 语法：For <起点>→<变量> To <终点> [Step <步长>]
          const head=t.slice(1,toIdx);
          const arr=topIdx(head,'→');
          let varName, from;
          if(arr>=0){
            from=this.evalT(calc,head.slice(0,arr));
            varName=head[arr+1]&&head[arr+1].v;
          } else {
            varName=head[0]&&head[0].v;
            from=calc.getVar(varName);
          }
          const to=this.evalT(calc,t.slice(toIdx+1, stepIdx>0?stepIdx:undefined));
          const step=stepIdx>0?this.evalT(calc,t.slice(stepIdx+1)):1;
          calc.setVar(varName,from);
          if(step>0?from>to:from<to){ pc=(M[pc]!=null?M[pc]:pc)+1; continue; }
          loops.push({kind:'for',start:pc,varName,to,step}); pc++; continue;
        }
        case 'Next': {
          const lp=loops[loops.length-1];
          if(!lp||lp.kind!=='for'){ pc++; continue; }     // 被 Goto 越過時容錯
          const v=calc.getVar(lp.varName)+lp.step;
          calc.setVar(lp.varName,v);
          if(lp.step>0?v>lp.to:v<lp.to){ loops.pop(); pc++; } else pc=lp.start+1;
          continue;
        }
        case 'If': {
          const nextIsThen = pc+1<L.length && first(L[pc+1])==='Then';
          const cond=this.evalT(calc,t.slice(1))!==0;
          if(nextIsThen){
            if(cond) pc+=2;                       // 进入 Then 之后的语句
            else {
              const j=M[pc+1];
              if(j!=null && first(L[j])==='Else'){
                // Else 可能与后续代码写在同一语句内（原页常见）
                const st2=L[j];
                if(st2.t.length>1) yield* this.exec(calc, st2.t.slice(1));
                pc=j+1;
              } else pc=(j!=null?j:pc+1)+1;
            }
          } else {
            pc += cond?1:2;                        // 单行 If：跳过下一条语句
          }
          continue;
        }
        case 'Then': pc++; continue;
        case 'Else': {
          // 条件为真时走到这里：跳过 else 分支
          const j=M[pc];
          pc=(j!=null?j:pc)+1;
          continue;
        }
        case 'IfEnd': pc++; continue;
        case 'Prog': pc++; continue;
        case 'Cls': yield {type:'clear'}; pc++; continue;
      }
      // 输入
      if(f==='?'){
        const val=yield {type:'in'};
        const a=topIdx(t,'→');
        if(a>=0){ const vn=t[a+1]&&t[a+1].v; if(vn&&/^[A-FXYZM]$/.test(vn)) calc.setVar(vn,Number(val)); }
        calc.ans=Number(val);
        pc++; continue;
      }
      // 普通语句（可能含 => / 赋值）
      lastWasExpr = topIdx(t,'→')<0 && topIdx(t,'=>')<0;
      calc._dms = t.length>0 && t[t.length-1].v==='°';
      const r=yield* this.exec(calc,t);
      if(r){
        if(r.goto!=null){ pc=this.labels[r.goto]; continue; }
        if(r.break){ pc=(M[pc]!=null?M[pc]:pc)+1; loops.pop(); continue; }
        if(r.return) return;
      }
      pc++;
    }
    }catch(e){
      const txt = curSt && curSt.t ? curSt.t.map(x=>x.v).join(' ') : (curSt? curSt.kind : '?');
      e.message += '  @「'+txt.slice(0,60)+'」';
      throw e;
    }
    // 程序自然结束：若最后是表达式，结果留在屏幕上（真机行为）
    if(lastWasExpr) yield {type:'out', value:calc.format(calc.ans, calc._dms)};
  }
}

function countBytes(tokens){
  let n=0;
  for(const t of tokens){
    if(t.k==='num') n+=Math.max(1,t.v.replace('.','').replace('E','').length);
    else n+=1;
  }
  return n;
}




root.CASIO = { lex, Parser, parseExpr, Calc, ERR, Program, splitStatements, countBytes };
})(typeof module!=='undefined'?module.exports:(typeof window!=='undefined'?window:globalThis));
