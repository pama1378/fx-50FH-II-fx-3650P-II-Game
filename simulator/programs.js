/* generated from webcal/games — do not edit */
window.PROGRAMS = [
 {
  "n": 1,
  "slug": "guess-number-1",
  "title": "估数字(I)",
  "en": "Guess a number I",
  "authors": [
   "WebCal 站主"
  ],
  "declared": 32,
  "code": "ClrMemory: E3 Ran#→B: Lbl\n0: ?→A: 1M+:\nA-B => Ans ÷ Abs( Ans =>\nGoto 0◢\nM°"
 },
 {
  "n": 2,
  "slug": "guess-number-2",
  "title": "估数字(II)",
  "en": "Guess a number II",
  "authors": [
   "未具名网友"
  ],
  "declared": 64,
  "code": "ClrMemory: Fix 4: 1+E3\nRan#→B: 1→X: E3→Y:\nWhile A≠BM+: X+Y÷E4→A: ?→A:\nA>B =>A→Y:\nA<B => A→X: WhileEnd: Norm 1: M°"
 },
 {
  "n": 3,
  "slug": "guess-number-3",
  "title": "估数字(III)",
  "en": "Guess a number III",
  "authors": [
   "SuperMANganese"
  ],
  "declared": 132,
  "code": "?→D: Ran# + E-3Ran# + E-6Ran#:\nFix 0:\nRnd(2+Ans(D-3→Y: Norm 1: 1→C: 0→M:\nLbl 1: FreqOn: E9 DT: -Ans DT: Y\n; 0 DT: C◢\nD◢ Rec(0,0: ?→X: ; 0 DT: Ans→Y: 1+M→M:\nX≧D => Goto 1: C≧X => Goto\n1: X nCr 1:\nX>Y => X→D : Ans => Goto 1: Y>X\n=> X→C:\nAns => Goto 1: M°"
 },
 {
  "n": 4,
  "slug": "guess-the-number-game",
  "title": "猜数字游戏",
  "en": "Guess the number game",
  "authors": [
   "lugia249"
  ],
  "declared": 182,
  "code": "MM-: While 1: M◢ 5M-:\n?→A: ?→B: ?→C: Fix 0:\nRnd(30Ran# + . 5→D: Lbl 1: Rnd(30Ran#\n+ . 5→X:\nX=D => Goto 1: Rnd(30Ran# + . 5→Y: Y=D\n=> Goto 1:\nY=X => Goto 1: D+X÷60+Y÷60²: Norm 2: Ans°◢\n25( (D=A) + (D=B) + (D=C) + (X=A) + (X=B) +\n(X=C) + (Y=A) + (Y=B) + (Y=CM+:\nA+B+C=D+X+Y => ABC=DXY => 225M+:\nWhileEnd"
 },
 {
  "n": 5,
  "slug": "mastermind-1",
  "title": "机妙算(MindMaster)游戏",
  "en": "MindMaster I",
  "authors": [
   "WebCal 站主"
  ],
  "declared": 320,
  "code": "ClrMemory: Fix 0: Lbl 0: Rnd( 9Ran#→A:\nRnd( 9Ran#→B: Rnd( 9Ran#→C:\nRnd( 9Ran#→D: (A - B)(A - C)(A - D)(B - C)\n(B - D)(C - D)=0 => Goto 0: Norm 1: Lbl 1:\nX + 1→X: ?→Y: 10(Y=AM+: Y=BM+:\nY=CM+:\nY=DM+: D→Y: A→D: B→A: C→B: Y→C: 0→Y:\nX - 4 => Goto 1: 0→X: MM-◢\nAns - 40 => Goto 1: π\nClrStat: Fix 0: Lbl 0: Rnd( 9Ran#→A:\nRnd( 9Ran#→B: Rnd( 9Ran#→C:\nRnd( 9Ran#→D: (A - B)(A - C)(A - D)(B - C)\n(B - D)(C - D)=0 => Goto 0: Norm 1: Lbl 2:\nRec(0, 0: Lbl 1:\nX + 1→X: ?→M: Y + 10(M=A)+(M=B)+(M=C)+\n(M=D→Y: D→M: A→D: B→A: C→B: M→C: 0→M:\nX - 4 => Goto 1: 1 DT:\nY◢ Ans - 40 => Goto 2:\nΣx"
 },
 {
  "n": 6,
  "slug": "mastermind-2",
  "title": "机妙算(MindMaster)游戏",
  "en": "MindMaster II",
  "authors": [
   "SuperMANganese"
  ],
  "declared": 372,
  "code": "Fix 0: Rnd(9Ran#→A: Rnd(9Ran#→B:\nRnd(9Ran#→C:\nRnd(9Ran#→D: Norm 1: While Ans - 40: ClrStat: Lbl 1:\nRec( 0, 0: ?→X:\nα≧Abs(X-A => 9 DT:\nLbl 2: If X=A: Then X+α→X: A-α→A:\n1 DT: IfEnd: Lbl 3: A→M: B→A: C→B: D→C: M→D:\n1+Y→Y:\nY=4 => Goto 3: Y≦4 =>\nGoto 2: E2 DT: Σx\n< 400 => Goto 1:\nFix 0: Rnd(A→A: Rnd(B→B: Rnd(C→C: Rnd(D→D: Norm 1:\nΣx - 400◢ WhileEnd: π\nFreqOn: ; 0 DT: Fix\n0: Rnd(9Ran#→A: Rnd(9Ran#→B:\nRnd(9Ran#→C: Rnd(9Ran#→D: Norm 1: While Ans -\n40: Σy\n+ 1:ClrStat:\n; Ans DT: , 0 DT:\nLbl 1: Rec( 0, 0: ?→X: α≧Abs(X-A\n=> 9 DT:\nLbl 2: If X=A: Then X+α→X: A-α→A: 1 DT: IfEnd:\nLbl 3:\nA→M: B→A: C→B: D→C: M→D: 1+Y→Y:Y=4 => Goto 3:\nY≦4 => Goto 2: E2\nDT: Σx < 400\n=> Goto 1: Fix 0:Rnd(A→A:\nRnd(B→B: Rnd(C→C: Rnd(D→D: Norm 1: Σx - 400◢\nWhileEnd: Σy"
 },
 {
  "n": 7,
  "slug": "mastermind-3",
  "title": "机妙算(MindMaster)游戏III",
  "en": "MindMaster III",
  "authors": [
   "SuperMANganese"
  ],
  "declared": 466,
  "code": "?→M: Lbl 9: Fix 0: Rnd(9Ran#→A: Rnd(9Ran#→B:\nRnd(9Ran#→C:\nRnd(9Ran#→D: Norm 1: M(0=(A-B)(A-C)(A-D)(B-C)(B-D)(C-D\n=> Goto 9: Lbl 0: ClrStat: Lbl 1:\nRec( 0, 0: ?→X:\nα≧Abs(X-A => 9 DT:\nLbl 2: If X=A: Then X+α→X: A-α→A:\n1 DT: IfEnd: Lbl 3: A→M: B→A: C→B: D→C: M→D:\n1+Y→Y:\nY=4 => Goto 3: Y≦4 =>\nGoto 2: E2 DT: Σx\n< 400 => Goto 1:\nFix 0: Rnd(A→A: Rnd(B→B: Rnd(C→C: Rnd(D→D: Norm 1:\nΣx - 400◢ Ans - 40 =>\nGoto 0: π\nFreqOn: ; 0 DT:\n?→M: Lbl 9: Fix\n0: Rnd(9Ran#→A: Rnd(9Ran#→B:\nRnd(9Ran#→C: Rnd(9Ran#→D: Norm 1: M(0=(A-B)(A-C)(A-D)\n(B-C)(B-D)(C-D => Goto 9: Lbl 0: Σy\n+ 1: ClrStat:\n; Ans DT: , 0 DT:\nLbl 1: Rec( 0, 0: ?→X: α≧Abs(X-A\n=> 9 DT:\nLbl 2: If X=A: Then X+α→X: A-α→A: 1 DT: IfEnd:\nLbl 3:\nA→M: B→A: C→B: D→C: M→D: 1+Y→Y:Y=4 => Goto 3:\nY≦4 => Goto 2: E2\nDT: Σx < 400\n=> Goto 1: Fix 0:Rnd(A→A:\nRnd(B→B: Rnd(C→C: Rnd(D→D: Norm 1: Σx - 400◢\nAns - 40 => Goto 0: Σy"
 },
 {
  "n": 8,
  "slug": "mastermind-4",
  "title": "机妙算(MindMaster)游戏IV",
  "en": "MindMaster IV",
  "authors": [
   "Mike"
  ],
  "declared": 156,
  "code": "FreqOn: 0→Y: Lbl 0: Fix 0: Y<1 => Rnd( 9Ran#→A:\n0→X ?→X: Y+ 4⁻¹ →Y: 9(X=A ,\n10^( X DT:\nA→X: B→A: C→B: D→C: X→D: Y- Rnd(Y => Goto 0:\nFor 9→M To 0 Step - 1: Rnd( Σy10^(\n- M→X:\nIf Ans: Then X - (M=A) - (M=B) - (M=C) - (M=D:\nX - Ans(Ans>0 , - X10^(MDT: IfEnd: Next: Norm 1:\nΣx◢ Clrstat: Ans-40=>Goto 0: Y"
 },
 {
  "n": 9,
  "slug": "mastermind-solution",
  "title": "机妙算解答(MindMaster Solution)",
  "en": "MindMaster solution",
  "authors": [
   "SuperMANganese"
  ],
  "declared": 494,
  "code": "FreqOn: Rad: ; 8 DT: 1→C: 4→D:\nFor 1→X To 9 Step 2:\n1111X+11cos( πX◢ ?→A: ?→B: D-A-B→D:\nA+B=0 =>\n0, 0 ; X-n-1 DT: A+B=0 => Goto 1:\nIf A+B>C: Then A+B→C:\nX+(A<B) cos( πX:\nAns , Ans+cos( πAns)(1≧Abs(A-B DT:\nElse CD=1 => Y, M DT: Y→M: X+(A≦B) cos( πX→Y:\nA+B=2 => X+(A<B)cos(πX→M:IfEnd:\nLbl 1: D≦0 => Break:Next:\n- (Σx≠Σy\n; 0 DT: C=1 => 0, 0\n; Σy-n DT:\n11E2Σx+11n◢\n?→A: ?→B:A+B+1→X:\nΣy=Σx +cos( πΣx => A-B+2→X:\nAns => 0, Σx-Σy DT:\ncos( πΣx)(A=0, cos( πΣy)(B=0)(A≠2 DT:\nX=1 => Σy-Σx , Σx-Σy DT:\nIf C+D≧3: Then Σx →M:\nD=> Σx +cos(πΣx →M:\nC+D≧4 => Σx+cos( πΣx)(C+2minX≦2→Y:\nIfEnd:\nIf X≧2: Then M+cos( πM→A: Σx →M: A-Σx, 0 DT: IfEnd:\nIf X≧3: Then Y+cos(πY→A:Σy→Y:0,A-Σy DT:IfEnd:\nWhile 1:\nE3Y+E2M+E1Σx +Σy◢ ?→A: ?→B:\nIf A+B<4: Then\nY+cos( πY→A: cos( πΣx DT:\nΣx →Y: A-Σx DT: 2B→B: IfEnd:\nB≧2 => Σy-Σx ,Σx -Σy DT:\nIf (Σx =Σy)+(B=4: Then M→A:Y→M:\nA→Y:IfEnd:WhileEnd"
 },
 {
  "n": 10,
  "slug": "slot-machine-1",
  "title": "老虎机(I) (Slot machine I)",
  "en": "Slot machine I",
  "authors": [
   "WebCal 站主"
  ],
  "declared": 64,
  "code": "ClrMemory: While 1M-: Fix 0: Rnd( 9Ran#→A◢\nRnd( 9Ran#→B◢ Rnd( 9Ran#→C:\nNorm 1◢\nABC=7³\n=> 92M+: 3((A=B)+(A=C)+(B=CM+:\nM◢ WhileEnd"
 },
 {
  "n": 11,
  "slug": "slot-machine-2",
  "title": "老虎机II (Slot machine II)",
  "en": "Slot machine II",
  "authors": [
   "望月",
   "SuperMANganese",
   "roviury"
  ],
  "declared": 149,
  "code": "E2→M◢ 1→X:\nLbl 0: M→D:\nlog( M: ?→X: Fix 0: X- Rnd(X\n=> Goto 0:\nX≧5 => 5X>M =>\nGoto 0: XM-: Rnd( 9Ran#→A◢\nRnd( 9Ran#→B◢ Rnd( 9Ran#→C◢ Norm 1:\nABC=0 => 3XM+:\nABC=1 => 13XM+: ABC=7³\n=> 83XM+:\n6X((A=B)+(A=C)+(B=CM+: 1=Abs(A-B\n=> 6X(2B-A=CM+:\nM-D◢ M◢ Goto 0"
 },
 {
  "n": 12,
  "slug": "last-number",
  "title": "最后数值",
  "en": "Last number",
  "authors": [
   "WebCal 站主"
  ],
  "declared": 64,
  "code": "ClrMemory: Fix 0: 18 + Rnd( 9Ran#→A:\nNorm 1: Ans→B: While 1: ?→A:\nA³ - 6A² + 11A - 6 => log(\n0: B - A→B:\nlog( B: B→A: M=0→M: WhileEnd"
 },
 {
  "n": 13,
  "slug": "guess-position",
  "title": "估位置",
  "en": "Guess a position",
  "authors": [
   "WebCal 站主"
  ],
  "declared": 60,
  "code": "ClrMemory: 500 - Ran# 10^( 3→A:\n500 - Ran# 10^( 3→B:\nLbl 0: ?→X: ?→Y: √( (A - X)² + (B - Y)²→X : 1M+:\nX => Goto 0: M°"
 },
 {
  "n": 14,
  "slug": "fighting-game-1",
  "title": "对战游戏(I)",
  "en": "Fighting game I",
  "authors": [
   "wimwim"
  ],
  "declared": 2354,
  "code": "E2→C: Fix3: E3→Y: 2C→M: Y+M÷E3◢ Y→D: M→X: D+X÷E3◢\nLbl 0: ?→A: (A>6) + (A≠1)(A≠3)(M<C(7-A => Goto 0: Fix 0: Lbl 1:\nRnd( 6Ran#+.5→B: X=5C => B=3 => Goto 1: 4C≦X => B=6 => Goto 1:\nM-5C => B=4 => X≦3C => Goto\n1: M=5C => B=1 => Goto 1:\nB=5 => D=E3 => Goto 1: B=2 => X<5C => Goto 1: B=4 => X<3C => Goto 1:\nB=5 => X<2C => Goto\n1: Fix3: B◢ A=1 => 80M- => B-4 =>\nD-70→D:\nA=1 => B=3 =>\n14+D→D: A=2 => 5CM- => B-4 =>\nD-5C→D:\nA=2 => B=3 => C+D→D: A=4 => 3CM-: A=5 => 2CM- => C+Y→Y:\nB=1 => A-4 => Y-70→Y: B=1 => X-80→X: B=2 => A-4 => Y-5C→Y:\nB=2 => X-5C→X: B=4 => X-3C→X: B=5=>\nC+D→D: B=5=>X-2C→X:\nB=1 => A=3 =>\n14+Y→Y: B=2 => A=3 => C+Y→Y: A=6 => 50M+:\nB=6 => 50+X→X: CM+:C+X→X: M>5C => 5C→M: X>5C => 5C→X:\nY>E3 => E3→Y:\nD>E3 => E3→D: D<0 => 0→D:Y<0 => 0→Y:Y+M÷E3◢\nD+X÷E3◢ DY => Goto 0: D => BAD◢ Y=>GD◢ Norm 1\nE2→C: Fix3: E3→Y: 2C→M: Y+M÷E3◢ Y→D: M→X: D+X÷E3◢ Lbl 0:\n?→A: (A>6) + (A≠1)(A≠3)(M<C(7-A => Goto 0: Fix 0: Lbl\n1:\nRnd( 6Ran#+.5→B: M-5C => X≦4C=> 3C≦D => B=4 => Goto 1:\nM-5C => B=4 => Goto 1: D≦3C => 3C≦X => B=6 => Goto\n1:\nD≦2C => Y>D => 2C≦X => 5→B: D≦C => D>Y => 1→B:\nD≦C => X=5C => Y≦5C => 2→B: M-5C => X≦4C => D<C => B=3 => Goto\n1:\n4C≦X => B=6 => Goto 1: 3C≦Y => B=1 => Goto 1: M=5C => D<5C => B=1 =>\nGoto 1: X=5C => B=3 => Goto 1:\nD>7C => B=5 => Goto 1: B=2 => X<5C =>\nGoto 1: B=4 => X<3C => Goto 1: B=5 => X<2C => Goto\n1: Fix3: B◢\nA=1 => 80M- =>B-4 =>\nD-70→D: A=1 => B=3 =>\n14+D→D:\nA=2 => 5CM- => B-4 =>\nD-5C→D: A=2 => B=3 => C+D→D:\nA=4 => 3CM-: A=5 => 2CM- => C+Y→Y: B=1 => A-4 => Y-70→Y:\nB=1 => X-80→X: B=2 => A-4 => Y-5C→Y:\nB=2 => X-5C→X: B=4 => X-3C→X: B=5 => C+D→D: B=5 => X-2C→X: B=1 => A=3\n=> 14+Y→Y: B=2 => A=3 => C+Y→Y: A=6 => 50M+: B=6 => 50+X→X: CM+:\nC+X→X: M>5C => 5C→M: X>5C => 5C→X: Y>E3 => E3→Y:\nD>E3 => E3→D:\nD<0 => 0→D: Y<0 => 0→Y: Y+M÷E3◢ D+X÷E3◢ DY => Goto 0: D => BAD◢\nY => GD◢ Norm 1\nB=5 => X<2C => Goto 1: Fix3: B◢\nA=1 => 80M- => B-4 => D-70→D: A=1 => B=3 => 14+D→D:\nA=2 => 5CM- => B-4 => D-5C→D: A=2 => B=3 => C+D→D:\nA=4 => 3CM-: A=5 => 2CM- => C+Y→Y:\nE2→C: Fix3: E3→Y: 2C→M: Y+M÷E3◢ Y→D: M→X: D+X÷E3◢\nLbl 0: ?→A: A>6 => Goto\n0: A=2 => M<5C => Goto 0:\nA=4 => M<3C => Goto 0: A=5 => M<2C => Goto 0: Fix 0: Lbl 1:\nRnd( 6Ran#+.5→B: X=5C => B=3 => Goto 1: 4C≦X => B=6 => Goto 1:\nM-5C => B=4 => X≦3C => Goto\n1: M=5C => B=1 => Goto 1:\nB=5 => D=E3 => Goto 1: B=2 => X<5C => Goto 1: B=4 => X<3C => Goto 1:\nB=5 => X<2C => Goto\n1: Fix3: B◢ A=1 => B-4 => D-70→D: A=1 => 80M-:\nA=2 => B-4 => D-5C→D: A=2 => 5CM-: A=1 => B=3 =>\n14+D→D:\nA=2 => B=3 => C+D→D: A=4 => 3CM-: A=5 => C+Y→Y: A=5 => 2CM-:\nB=1 => A-4 => Y-70→Y: B=1 => X-80→X: B=2 => A-4 => Y-5C→Y:\nB=2 => X-5C→X: B=4 => X-3C→X: B=5=>\nC+D→D: B=5=>X-2C→X:\nB=1 => A=3 =>\n14+Y→Y: B=2 => A=3 => C+Y→Y: A=6 => 50M+:\nB=6 => 50+X→X: CM+:C+X→X: M>5C => 5C→M: X>5C => 5C→X:\nY>E3 => E3→Y:\nD>E3 => E3→D: D<0 => 0→D:Y<0 => 0→Y:Y+M÷E3◢\nD+X÷E3◢ DY => Goto 0: D => BAD◢ Y=>GD◢ Norm 1\nE2→C: Fix3: E3→Y: 2C→M: Y+M÷E3◢ Y→D: M→X: D+X÷E3◢ Lbl 0:\n?→A: A>6 => Goto\n0: A=2 => M<5C => Goto 0: A=4 => M<3C => Goto 0:\nA=5 => M<2C => Goto 0: Fix 0: Lbl\n1: Rnd( 6Ran#+.5→B: M-5C => X≦4C\n=> 3C≦D => B=4 => Goto 1: M-5C => B=4 => Goto 1: D≦3C => 3C≦X =>\nB=6 => Goto\n1: D≦2C => Y>D => 2C≦X => 5→B: D≦C => D>Y => 1→B:\nD≦C => X=5C => Y≦5C => 2→B: M-5C => X≦4C => D<C => B=3 => Goto\n1:\n4C≦X => B=6 => Goto 1: 3C≦Y => B=1 => Goto 1: M=5C => D<5C => B=1 =>\nGoto 1: X=5C => B=3 => Goto 1:\nD>7C => B=5 => Goto 1: B=2 => X<5C =>\nGoto 1: B=4 => X<3C => Goto 1: B=5 => X<2C => Goto\n1: Fix3: B◢A=1 =>\nB-4 => D-70→D: A=1 => 80M-: A=2 => B-4 => D-5C→D: A=2 => 5CM-:\nA=1 => B=3 =>\n14+D→D: A=2 => B=3 => C+D→D: A=4 => 3CM-: A=5 => C+Y→Y:\nA=5 => 2CM-: B=1 => A-4 => Y-70→Y: B=1 => X-80→X: B=2 => A-4 => Y-5C→Y:\nB=2 => X-5C→X: B=4 => X-3C→X: B=5 => C+D→D: B=5 => X-2C→X: B=1 => A=3\n=> 14+Y→Y: B=2 => A=3 => C+Y→Y: A=6 => 50M+: B=6 => 50+X→X: CM+:\nC+X→X: M>5C => 5C→M: X>5C => 5C→X: Y>E3 => E3→Y:\nD>E3 => E3→D:\nD<0 => 0→D: Y<0 => 0→Y: Y+M÷E3◢ D+X÷E3◢ DY => Goto 0: D => BAD◢\nY => GD◢ Norm 1"
 },
 {
  "n": 15,
  "slug": "fighting-game-2",
  "title": "对战游戏(II)",
  "en": "Fighting game II",
  "authors": [
   "wimwim"
  ],
  "declared": 919,
  "code": "E2→C: Fix3: E3→Y: 2C→M: Y+M÷E3◢\nY→D: M→X: D+X÷E3◢\nLbl 0: ?→A: (A>6) + (A≠1)(A≠3)(M<C(7-A => Goto 0: Lbl 1:\n?→B: (B>6) + (B≠1)(B≠3)(X<C(7-B => Goto 1:\nA◢ B◢ A=1 => B-4 => D-70→D: A=1 => 80M-:\nA=2 => B-4 => D-5C→D: A=2 => 5CM-: A=1 => B=3 => 14+D→D:\nA=2 => B=3 => C+D→D: A=4 => 3CM-: A=5 => C+Y→Y: A=5 => 2CM-:\nB=1 => A-4 => Y-70→Y: B=1 => X- 80→X: B=2 => A-4 => Y-5C→Y:\nB=2 => X-5C→X: B=4 => X-3C→X: B=5=> C+D→D: B=5=>X-2C→X:\nB=1 => A=3 => 14+Y→Y: B=2 => A=3 => C+Y→Y: A=6 => 50M+:\nB=6 => 50+X→X: CM+: C+X→X: M>5C => 5C→M: X>5C => 5C→X:\nY>E3 => E3→Y: D>E3 => E3→D: D<0 => 0→D:Y<0 => 0→Y:Y+M÷E3◢\nD+X÷E3◢ DY => Goto 0: D =>\n2-GD◢ Y=>1-GD◢ Norm 1\nE2→C: Fix3: E3→Y: 2C→M: Y+M÷E3◢\nY→D: M→X: D+X÷E3◢\nLbl 0: ?→A: A>6 => Goto 0: A=2 => M<5C => Goto 0:\nA=4 => M<3C => Goto 0: A=5 => M<2C => Goto 0: Lbl 1:\n?→B: B=2 => X<5C => Goto 1: B=4 => X<3C => Goto 1:\nB=5 => X<2C => Goto 1: A◢ B◢ A=1 => B-4 => D-70→D: A=1 => 80M-:\nA=2 => B-4 => D-5C→D: A=2 => 5CM-: A=1 => B=3 => 14+D→D:\nA=2 => B=3 => C+D→D: A=4 => 3CM-: A=5 => C+Y→Y: A=5 => 2CM-:\nB=1 => A-4 => Y-70→Y: B=1 => X- 80→X: B=2 => A-4 => Y-5C→Y:\nB=2 => X-5C→X: B=4 => X-3C→X: B=5=> C+D→D: B=5=>X-2C→X:\nB=1 => A=3 => 14+Y→Y: B=2 => A=3 => C+Y→Y: A=6 => 50M+:\nB=6 => 50+X→X: CM+: C+X→X: M>5C => 5C→M: X>5C => 5C→X:\nY>E3 => E3→Y: D>E3 => E3→D: D<0 => 0→D:Y<0 => 0→Y:Y+M÷E3◢\nD+X÷E3◢ DY => Goto 0: D =>\n2-GD◢ Y=>1-GD◢ Norm 1"
 },
 {
  "n": 16,
  "slug": "memory-game-1",
  "title": "记忆游戏",
  "en": "Memory game I",
  "authors": [
   "tonylcc1995"
  ],
  "declared": 157,
  "code": "ClrMemory: While A=BM+:\nM◢ Fix 0:\nRnd( ( . 5 + Ran# )(B + E3MM→B:\nNorm 1◢ ?→A: WhileEnd:\nM◢ B◢ A ◢ 0⁻¹\nClrMemory: While (C≦0) + (C≧21: ?→C: WhileEnd:\nWhile (M≦0) + (M≧E3: ?→M: WhileEnd: 1M-:\nLbl 0: C≦0 => 0⁻¹: 0→B: 1M+:\nM◢ Fix 0:\nRnd( ( . 5 + Ran# )(B + E3MM→B: Norm 1◢ ?→A:\nA=B => Goto 0: C-1→C◢ M◢ B◢ A◢ Goto 0"
 },
 {
  "n": 17,
  "slug": "memory-game-2",
  "title": "记忆游戏",
  "en": "Memory game II",
  "authors": [
   "tonylcc1995"
  ],
  "declared": 212,
  "code": "Rec( 0 , 0: Lbl 0:1+X→X◢ Fix 0: FreqOn:\nE99 DT: - Ans\nDT: Rnd((.5+Ran#)(B+E3XX\n; 0 DT:\nNorm 1: Ans◢ 0: ?→A: ; 0\nDT: Ans→Y:\nA=Y => Goto 0 : X◢ Y◢ A ◢ 0⁻¹\n0→B: Lbl 1: ?→C: C²≧21C => Goto 1:\nLbl 2: ?→M: M²≧E3M =>\nGoto 2:\nM-1→M: Lbl 0: C≦0 => 0⁻¹: 1+M→M◢ Fix 0:\nFreqOn: E99 DT: - Ans\nDT: Rnd((.5+Ran#)(B+E3MM\n; 0 DT:\nNorm 1: Ans◢ 0: ?→A: ; 0\nDT: Ans→B:\nA=B => Goto 0 : C-1→C◢ M◢ B◢ A◢ Goto 0"
 },
 {
  "n": 18,
  "slug": "memory-game-3",
  "title": "记忆游戏",
  "en": "Memory game III (7 game)",
  "authors": [
   "kith"
  ],
  "declared": 118,
  "code": "For 1→A To 7E3: Fix 0: Rnd(A％- . 5→Y: Rnd(A÷10-.5:\n(Y≠7)(Ans-10Y≠7)(A-10Ans≠7)(A≠7Rnd(A÷7→B:\nIf A-2Rnd(A÷2: Then Norm1: 0→X: ?→X: B => X-A\n=> Break:\nX => B=0 => Break:\nElse Norm 1: B => A◢ B=0 =>\n0◢ IfEnd: Next"
 }
];
