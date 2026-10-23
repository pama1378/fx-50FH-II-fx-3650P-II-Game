---
title: "机妙算(MindMaster)游戏IV"
english_title: "MindMaster IV"
slug: mastermind-4
source: http://webcal.freehostia.com/casio.fx-50FH/masterMind4.htm
programs: 1
declared_bytes: 156
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "Mike"
credits:
  - "程式由网友 Mike\n提供。这个版本较简短，并且容许猜的数字重复。"
dates:
  - "网友提供程式日期: 2009年12月7日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 机妙算(MindMaster)游戏IV

**MindMaster IV** · 1 program(s) · [original page (masterMind4.htm)](http://webcal.freehostia.com/casio.fx-50FH/masterMind4.htm)

## 署名 / Credits

**作者：** Mike

原页署名原文：

> 程式由网友 Mike
提供。这个版本较简短，并且容许猜的数字重复。

**网友提供程式日期: 2009年12月7日**

## 程式 · 156 bytes

```
FreqOn: 0→Y: Lbl 0: Fix 0: Y<1 => Rnd( 9Ran#→A:
0→X ?→X: Y+ 4⁻¹ →Y: 9(X=A ,
10^( X DT:
A→X: B→A: C→B: D→C: X→D: Y- Rnd(Y => Goto 0:
For 9→M To 0 Step - 1: Rnd( Σy10^(
- M→X:
X - Ans(Ans>0 , - X10^(MDT: IfEnd: Next: Norm 1:
Σx◢ Clrstat: Ans-40=>Goto 0: Y
```

## 玩法与说明（原文）

珠机妙算(MindMaster)游戏 IV

程式由网友 Mike
提供。这个版本较简短，并且容许猜的数字重复。

网友提供程式日期: 2009年12月7日

程式需要在 REG Lin 模式下执行，因此在选择新程式位置后，按 5 1 选用REG Lin模式。

注意: 蓝色的英文字为统计模式中的变数(Σx 按 Shift 1 2，Σy
按 Shift 1 → 2)，E 是按 EXP。

If Ans: Then X - (M=A) - (M=B) - (M=C) - (M=D:

用法示范 (假设答案是3650) :

按 Prog 1 再按 1 EXE 1 EXE 2 EXE 2 EXE (表示猜1122)

(显示0，十位0代表有0个数字位置及数字同时正确，个位0代表有0个数字正确但位置错误)

再按 3 EXE 3 EXE 4 EXE 4 EXE (表示猜3344)

(显示10，十位1代表有1个数字位置及数字同时正确，个位0代表有0个数字正确但位置错误)

再按 5 EXE 5 EXE 6 EXE 6 EXE (表示猜5566)

(显示2，十位0代表有0个数字位置及数字同时正确，个位2代表有2个数字正确但位置错误)

...

(猜中时程式会显示40，再显示猜的总次数)

---

*源码未经改动，原样转录。见 [NOTICE](../NOTICE.md)。*
