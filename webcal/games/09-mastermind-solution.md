---
title: "机妙算解答(MindMaster Solution)"
english_title: "MindMaster solution"
slug: mastermind-solution
source: http://webcal.freehostia.com/casio.fx-50FH/masterMind_solution.htm
programs: 1
declared_bytes: 494
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "SuperMANganese"
credits:
  - "程式由网友 SuperMANganese 提供。"
dates:
  - "网友提供程式日期: 2009年7月24日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 机妙算解答(MindMaster Solution)

**MindMaster solution** · 1 program(s) · [original page (masterMind_solution.htm)](http://webcal.freehostia.com/casio.fx-50FH/masterMind_solution.htm)

## 署名 / Credits

**作者：** SuperMANganese

原页署名原文：

> 程式由网友 SuperMANganese 提供。

**网友提供程式日期: 2009年7月24日**

## 程式 · 494 bytes

```
FreqOn: Rad: ; 8 DT: 1→C: 4→D:
For 1→X To 9 Step 2:
1111X+11cos( πX◢ ?→A: ?→B: D-A-B→D:
A+B=0 =>
0, 0 ; X-n-1 DT: A+B=0 => Goto 1:
If A+B>C: Then A+B→C:
X+(A<B) cos( πX:
Ans , Ans+cos( πAns)(1≧Abs(A-B DT:
Else CD=1 => Y, M DT: Y→M: X+(A≦B) cos( πX→Y:
A+B=2 => X+(A<B)cos(πX→M:IfEnd:
Lbl 1: D≦0 => Break:Next:
- (Σx≠Σy
; 0 DT: C=1 => 0, 0
; Σy-n DT:
11E2Σx+11n◢
?→A: ?→B:A+B+1→X:
Σy=Σx +cos( πΣx => A-B+2→X:
Ans => 0, Σx-Σy DT:
cos( πΣx)(A=0, cos( πΣy)(B=0)(A≠2 DT:
X=1 => Σy-Σx , Σx-Σy DT:
If C+D≧3: Then Σx →M:
D=> Σx +cos(πΣx →M:
C+D≧4 => Σx+cos( πΣx)(C+2minX≦2→Y:
IfEnd:
If X≧2: Then M+cos( πM→A: Σx →M: A-Σx, 0 DT: IfEnd:
If X≧3: Then Y+cos(πY→A:Σy→Y:0,A-Σy DT:IfEnd:
While 1:
E3Y+E2M+E1Σx +Σy◢ ?→A: ?→B:
If A+B<4: Then
Y+cos( πY→A: cos( πΣx DT:
Σx →Y: A-Σx DT: 2B→B: IfEnd:
B≧2 => Σy-Σx ,Σx -Σy DT:
If (Σx =Σy)+(B=4: Then M→A:Y→M:
A→Y:IfEnd:WhileEnd
```

## 玩法与说明（原文）

程式由网友 SuperMANganese 提供。

网友提供程式日期: 2009年7月24日

程式需要在 REG Lin 模式下执行，因此在选择新程式位置后，按 5 1 选用REG Lin模式。

注意: 蓝色的英文字为统计模式中的变数(Σx 按 Shift 1 2，Σy
按 Shift 1 → 2，n 按 Shift 1 3，minX
按 Shift 2 2 1)，E 是按 EXP。

用法示范 (假设答案是0137) :

按 Prog 1 (显示1100,表示要猜1100)

1 EXE (表示1个数字及位置对) 1 EXE (表示1个数字对但位置错)

(显示3322,表示要猜3322)

0 EXE (表示0个数字及位置对) 1 EXE (表示1个数字对但位置错)

(显示5544) 0 EXE 0 EXE

(显示7766) 0 EXE 1 EXE

(显示1144) 1 EXE 0 EXE

(显示0137) (即答案是0137)

注1: 此程式若在不重复版使用，请注意有些mastermind程式(例如mastermind(I))不能正确判断重复的情况，请在第二行及第八行的
?→B:后加上程式码 .5(B-A→B: 即可使用。

注2: 请留意程式执行后会变成Rad模式，按 Shift MODE 1 可返回Deg模式。若果 不想这样的话, 可删去第一行的 Rad:
并在每一个π后加上细 r (按shift Ans 2))。

注3: 理论上程式可在九步内得解答，当然这不一定是最快的解法，但基于计数机的限制，故采用这个有系统的解法。

---

*源码未经改动，原样转录。见 [NOTICE](../NOTICE.md)。*
