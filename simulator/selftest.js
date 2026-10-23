/* fx-50F PLUS 引擎自检：Node 与浏览器共用 */
(function(root){
  function run(C){
    const results=[];
    const t=(name,fn)=>{ try{ const v=fn(); results.push({name, ok:v===true||v===undefined, got:v===false?'false':undefined}); }catch(e){ results.push({name, ok:false, got:e.message}); } };
    const eq=(name,got,want)=>results.push({name, ok:got===want, got:String(got), want:String(want)});

    const runProg=(src,inputs)=>{
      const c=new C.Calc(); const p=new C.Program(src); const g=p.run(c);
      const outs=[]; let r=g.next(), i=0;
      while(!r.done){ const e=r.value;
        if(e.type==='in'){ r=g.next(i<inputs.length?inputs[i++]:0); }
        else if(e.type==='out'){ outs.push(e.value); r=g.next(); }
        else r=g.next();
      }
      return outs;
    };

    const cases=[
      ['輸入並加一','?→A: A+1◢',[5],['6']],
      ['While 循環','1→A: While A<5: A+1→A: WhileEnd: A◢',[],['5']],
      ['For 循環','0→F: For 1→A To 5: F+A→F: Next: F◢',[],['15']],
      ['If/Then 真','3→A: If A>2: Then: 100◢: Else: 200◢: IfEnd:',[],['100']],
      ['If/Then 假','1→A: If A>2: Then: 100◢: Else: 200◢: IfEnd:',[],['200']],
      ['單行 If','5→A: If A=5: 99◢:',[],['99']],
      ['=> 條件','3→A: A>2 => 7◢',[],['7']],
      ['Goto 回圈','0→A: Lbl 0: A+1→A: A<3 => Goto 0: A◢',[],['3']],
      ['平方/立方','2²+3³◢',[],['31']],
      ['倒數','4⁻¹◢',[],['0.25']],
      ['隱式乘法','6 A◢',[],['0']],
    ];
    for(const [name,src,inputs,want] of cases) eq(name, JSON.stringify(runProg(src,inputs)), JSON.stringify(want));

    const c=new C.Calc();
    eq('默認 1234.5678', c.format(1234.5678), '1234.5678');
    eq('Norm2 0.0001', c.format(0.0001), '1ᴇ-4');
    eq('Norm2 1e10', c.format(1e10), '1ᴇ10');
    c.mode.fix=3; eq('Fix3 保留尾隨零', c.format(2), '2.000'); c.mode.fix=null;
    c.mode.sci=2; eq('Sci2 尾數保留零', c.format(0.00042), '4.20ᴇ-4'); c.mode.sci=null;
    eq('六十進數 53', c.formatDMS(53), `53°00'00"`);
    t('六十進數 1.5', ()=> c.formatDMS(1.5)===`1°30'00"` || c.formatDMS(1.5));

    c.addData(1,2); c.addData(3,4); c.addData(5,6);
    eq('統計 n', c.getVar('n'), 3);
    eq('統計 Σx', c.getVar('Σx'), 9);
    eq('統計 Σxy', c.getVar('Σxy'), 44);

    eq('三角 sin30', Math.round(c.callFn('sin',[{type:'num',v:30}])*1e6)/1e6, 0.5);
    eq('立方根', Math.round(c.callFn('∛',[{type:'num',v:27}])), 3);

    if(root.PROGRAMS){
      let okc=0, bad=[];
      for(const p of root.PROGRAMS){
        try{ new C.Program(p.code); okc++; }catch(e){ bad.push(p.n); }
      }
      eq('程序可編譯數', okc, 16);
    }
    return results;
  }
  if(typeof module!=='undefined' && module.exports) module.exports={run};
  else root.runSelfTest=run;
})(typeof window!=='undefined'?window:globalThis);
