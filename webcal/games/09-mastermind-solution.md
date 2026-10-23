---
title: "機妙算解答(MindMaster Solution)"
english_title: "MindMaster solution"
slug: mastermind-solution
source: http://webcal.freehostia.com/casio.fx-50FH/masterMind_solution.htm
programs: 1
declared_bytes: 494
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "SuperMANganese"
credits:
  - "程式由網友 SuperMANganese 提供。"
dates:
  - "網友提供程式日期: 2009年7月24日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 機妙算解答(MindMaster Solution)

**MindMaster solution** · 1 program(s) · [original page (masterMind_solution.htm)](http://webcal.freehostia.com/casio.fx-50FH/masterMind_solution.htm)

## 署名 / Credits

**作者：** SuperMANganese

原頁署名原文：

> 程式由網友 SuperMANganese 提供。

**網友提供程式日期: 2009年7月24日**

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

## 玩法與說明（原文）

程式由網友 SuperMANganese 提供。

網友提供程式日期: 2009年7月24日

程式需要在 REG Lin 模式下執行，因此在選擇新程式位置後，按 5 1 選用REG Lin模式。

注意: 藍色的英文字為統計模式中的變數(Σx 按 Shift 1 2，Σy
按 Shift 1 → 2，n 按 Shift 1 3，minX
按 Shift 2 2 1)，E 是按 EXP。

用法示範 (假設答案是0137) :

按 Prog 1 (顯示1100,表示要猜1100)

1 EXE (表示1個數字及位置對) 1 EXE (表示1個數字對但位置錯)

(顯示3322,表示要猜3322)

0 EXE (表示0個數字及位置對) 1 EXE (表示1個數字對但位置錯)

(顯示5544) 0 EXE 0 EXE

(顯示7766) 0 EXE 1 EXE

(顯示1144) 1 EXE 0 EXE

(顯示0137) (即答案是0137)

註1: 此程式若在不重複版使用，請注意有些mastermind程式(例如mastermind(I))不能正確判斷重複的情況，請在第二行及第八行的
?→B:後加上程式碼 .5(B-A→B: 即可使用。

註2: 請留意程式執行後會變成Rad模式，按 Shift MODE 1 可返回Deg模式。若果 不想這樣的話, 可刪去第一行的 Rad:
並在每一個π後加上細 r (按shift Ans 2))。

註3: 理論上程式可在九步內得解答，當然這不一定是最快的解法，但基於計數機的限制，故採用這個有系統的解法。

---

*源碼未經改動，原樣轉錄。見 [NOTICE](../NOTICE.md)。*
