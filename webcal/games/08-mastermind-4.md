---
title: "機妙算(MindMaster)遊戲IV"
english_title: "MindMaster IV"
slug: mastermind-4
source: http://webcal.freehostia.com/casio.fx-50FH/masterMind4.htm
programs: 1
declared_bytes: 156
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "Mike"
credits:
  - "程式由網友 Mike\n提供。這個版本較簡短，並且容許猜的數字重複。"
dates:
  - "網友提供程式日期: 2009年12月7日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 機妙算(MindMaster)遊戲IV

**MindMaster IV** · 1 program(s) · [original page (masterMind4.htm)](http://webcal.freehostia.com/casio.fx-50FH/masterMind4.htm)

## 署名 / Credits

**作者：** Mike

原頁署名原文：

> 程式由網友 Mike
提供。這個版本較簡短，並且容許猜的數字重複。

**網友提供程式日期: 2009年12月7日**

## 程式 · 156 bytes

```
FreqOn: 0→Y: Lbl 0: Fix 0: Y<1 => Rnd( 9Ran#→A:
0→X ?→X: Y+ 4-1 →Y: 9(X=A ,
10^( X DT:
A→X: B→A: C→B: D→C: X→D: Y- Rnd(Y => Goto 0:
For 9→M To 0 Step - 1: Rnd( Σy10^(
- M→X:
X - Ans(Ans>0 , - X10^(MDT: IfEnd: Next: Norm 1:
Σx◢ Clrstat: Ans-40=>Goto 0: Y
```

## 玩法與說明（原文）

珠機妙算(MindMaster)遊戲 IV

程式由網友 Mike
提供。這個版本較簡短，並且容許猜的數字重複。

網友提供程式日期: 2009年12月7日

程式需要在 REG Lin 模式下執行，因此在選擇新程式位置後，按 5 1 選用REG Lin模式。

注意: 藍色的英文字為統計模式中的變數(Σx 按 Shift 1 2，Σy
按 Shift 1 → 2)，E 是按 EXP。

If Ans: Then X - (M=A) - (M=B) - (M=C) - (M=D:

用法示範 (假設答案是3650) :

按 Prog 1 再按 1 EXE 1 EXE 2 EXE 2 EXE (表示猜1122)

(顯示0，十位0代表有0個數字位置及數字同時正確，個位0代表有0個數字正確但位置錯誤)

再按 3 EXE 3 EXE 4 EXE 4 EXE (表示猜3344)

(顯示10，十位1代表有1個數字位置及數字同時正確，個位0代表有0個數字正確但位置錯誤)

再按 5 EXE 5 EXE 6 EXE 6 EXE (表示猜5566)

(顯示2，十位0代表有0個數字位置及數字同時正確，個位2代表有2個數字正確但位置錯誤)

...

(猜中時程式會顯示40，再顯示猜的總次數)

---

*源碼未經改動，原樣轉錄。見 [NOTICE](../NOTICE.md)。*
