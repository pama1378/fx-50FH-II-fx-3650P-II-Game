---
title: "機妙算(MindMaster)遊戲"
english_title: "MindMaster II"
slug: mastermind-2
source: http://webcal.freehostia.com/casio.fx-50FH/masterMind2.htm
programs: 2
declared_bytes: 372
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "SuperMANganese"
credits:
  - "程式由網友 SuperMANganese\n提供。與前一個版本比較，改進之處是可以容許數字重複，因此可能的情況會增多，猜測難度亦提高。"
dates:
  - "更新日期: 2014年8月22日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 機妙算(MindMaster)遊戲

**MindMaster II** · 2 program(s) · [original page (masterMind2.htm)](http://webcal.freehostia.com/casio.fx-50FH/masterMind2.htm)

## 署名 / Credits

**作者：** SuperMANganese

原頁署名原文：

> 程式由網友 SuperMANganese
提供。與前一個版本比較，改進之處是可以容許數字重複，因此可能的情況會增多，猜測難度亦提高。

**更新日期: 2014年8月22日**

## 程式一 · 177 bytes

```
Fix 0: Rnd(9Ran#→A: Rnd(9Ran#→B:
Rnd(9Ran#→C:
Rnd(9Ran#→D: Norm 1: While Ans - 40: ClrStat: Lbl 1:
Rec( 0, 0: ?→X:
α≧Abs(X-A => 9 DT:
Lbl 2: If X=A: Then X+α→X: A-α→A:
1 DT: IfEnd: Lbl 3: A→M: B→A: C→B: D→C: M→D:
1+Y→Y:
Y=4 => Goto 3: Y≦4 =>
Goto 2: E2 DT: Σx
< 400 => Goto 1:
Fix 0: Rnd(A→A: Rnd(B→B: Rnd(C→C: Rnd(D→D: Norm 1:
Σx - 400◢ WhileEnd: π
```

## 程式二 · 195 bytes

```
FreqOn: ; 0 DT: Fix
0: Rnd(9Ran#→A: Rnd(9Ran#→B:
Rnd(9Ran#→C: Rnd(9Ran#→D: Norm 1: While Ans -
40: Σy
+ 1:ClrStat:
; Ans DT: , 0 DT:
Lbl 1: Rec( 0, 0: ?→X: α≧Abs(X-A
=> 9 DT:
Lbl 2: If X=A: Then X+α→X: A-α→A: 1 DT: IfEnd:
Lbl 3:
A→M: B→A: C→B: D→C: M→D: 1+Y→Y:Y=4 => Goto 3:
Y≦4 => Goto 2: E2
DT: Σx < 400
=> Goto 1: Fix 0:Rnd(A→A:
Rnd(B→B: Rnd(C→C: Rnd(D→D: Norm 1: Σx - 400◢
WhileEnd: Σy
```

## 玩法與說明（原文）

機妙算(MindMaster)遊戲 II

程式由網友 SuperMANganese
提供。與前一個版本比較，改進之處是可以容許數字重複，因此可能的情況會增多，猜測難度亦提高。

注意: 程式不可以在fx-3650P II上使用。

更新日期: 2014年8月22日

程式需要在 REG Lin 模式下執行，因此在選擇新程式位置後，按 5 1 選用REG Lin模式。

注意: 藍色的英文字為統計模式中的變數(Σx 按 Shift 1 2，Σy
按 Shift 1 → 2)，α是按SHIFT 7 → → 2，E 是按 EXP。

程式需要在 REG Lin 模式下執行，因此在選擇新程式位置後，按 5 1 選用REG Lin模式。

注意: 藍色的英文字為統計模式中的變數(Σx 按 Shift 1 2，Σy
按 Shift 1 → 2)，α是按SHIFT 7 → → 2，E 是按 EXP。

用法示範 (假設答案是3650) :

按 Prog 1 再按 1 EXE 1 EXE 2 EXE 2 EXE (表示猜1122)

(顯示0，十位0代表有0個數字位置及數字同時正確，個位0代表有0個數字正確但位置錯誤)

再按 3 EXE 3 EXE 4 EXE 4 EXE (表示猜3344)

(顯示10，十位1代表有1個數字位置及數字同時正確，個位0代表有0個數字正確但位置錯誤)

再按 5 EXE 5 EXE 6 EXE 6 EXE (表示猜5566)

(顯示2，十位0代表有0個數字位置及數字同時正確，個位2代表有2個數字正確但位置錯誤)

...

(猜中時程式一顯示π，程式二會顯示次數)

註:

1. 如在中途離開，請在完成輸入一組數字後才離開，否則可能無法知道答案的正確次序。

2. 此式運行時間較長, 每個輸入數字需運算約0.9秒。

3. 此式也可用作不重複版, 只須在程式開頭加上Lbl 9: 及在第二行Norm 1: 後加入程式碼 (A - B)(A - C)(A - D)(B -
C)(B - D)(C - D)=0 => Goto 9: 即可。

附錄程式原理:

(例如答案為3665, 猜6355, 顯示12)

1. 先檢定猜測中的第一個位(6),與3665中的第一個位(3)核對 (即X6 A3B6C6D5)

2. 然後把答案換位, 再次檢測 (即X6 A6B6C5D3 ; X6 A6B5C3D6 ; X6 A5B3C6D6)

3. 輸入猜測的第二個位(3), 與3665中的第二個位(6)核對 (即X3 A6B6C5D3)

4. 重複以上步驟, 直至全部驗證完成

5. 若檢驗出"數字正確但位置錯誤"，則猜的數與答案數均會加上一個細數α (例如驗出 X6 A6B6C5D3 => X6+α A6-αB6C5D3,
猜的6變成 6+α，答案的6變成 6-α) ，這樣該數字就不會再被驗出"數字正確但位置錯誤"了。

6. 每次輸入數字時，與最先檢驗的數字，會另外檢驗"數字位置及數字同時正確" 無論本身有沒有加上α，也不受影響。

---

*源碼未經改動，原樣轉錄。見 [NOTICE](../NOTICE.md)。*
