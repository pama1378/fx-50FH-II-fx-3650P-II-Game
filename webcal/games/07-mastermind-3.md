---
title: "机妙算(MindMaster)游戏III"
english_title: "MindMaster III"
slug: mastermind-3
source: http://webcal.freehostia.com/casio.fx-50FH/masterMind3.htm
programs: 2
declared_bytes: 466
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "SuperMANganese"
credits:
  - "程式由网友 SuperMANganese 提供。这个版可以选择猜的数字可重复或不重复重。"
dates:
  - "更新日期: 2014年8月22日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 机妙算(MindMaster)游戏III

**MindMaster III** · 2 program(s) · [original page (masterMind3.htm)](http://webcal.freehostia.com/casio.fx-50FH/masterMind3.htm)

## 署名 / Credits

**作者：** SuperMANganese

原页署名原文：

> 程式由网友 SuperMANganese 提供。这个版可以选择猜的数字可重复或不重复重。

**更新日期: 2014年8月22日**

## 程式一 · 224 bytes

```
?→M: Lbl 9: Fix 0: Rnd(9Ran#→A: Rnd(9Ran#→B:
Rnd(9Ran#→C:
Rnd(9Ran#→D: Norm 1: M(0=(A-B)(A-C)(A-D)(B-C)(B-D)(C-D
=> Goto 9: Lbl 0: ClrStat: Lbl 1:
Rec( 0, 0: ?→X:
α≧Abs(X-A => 9 DT:
Lbl 2: If X=A: Then X+α→X: A-α→A:
1 DT: IfEnd: Lbl 3: A→M: B→A: C→B: D→C: M→D:
1+Y→Y:
Y=4 => Goto 3: Y≦4 =>
Goto 2: E2 DT: Σx
< 400 => Goto 1:
Fix 0: Rnd(A→A: Rnd(B→B: Rnd(C→C: Rnd(D→D: Norm 1:
Σx - 400◢ Ans - 40 =>
Goto 0: π
```

## 程式二 · 242 bytes

```
FreqOn: ; 0 DT:
?→M: Lbl 9: Fix
0: Rnd(9Ran#→A: Rnd(9Ran#→B:
Rnd(9Ran#→C: Rnd(9Ran#→D: Norm 1: M(0=(A-B)(A-C)(A-D)
(B-C)(B-D)(C-D => Goto 9: Lbl 0: Σy
+ 1: ClrStat:
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
Ans - 40 => Goto 0: Σy
```

## 玩法与说明（原文）

机妙算(MindMaster)游戏 III

程式由网友 SuperMANganese 提供。这个版可以选择猜的数字可重复或不重复重。

更新日期: 2014年8月22日

注意: 程式不可以在fx-3650P II上使用。

程式需要在 REG Lin 模式下执行，因此在选择新程式位置后，按 5 1 选用REG Lin模式。

注意: 蓝色的英文字为统计模式中的变数(Σx 按 Shift 1 2，Σy
按 Shift 1 → 2)，α是按SHIFT 7 → → 2，E 是按 EXP。

程式需要在 REG Lin 模式下执行，因此在选择新程式位置后，按 5 1 选用REG Lin模式。

注意: 蓝色的英文字为统计模式中的变数(Σx 按 Shift 1 2，Σy
按 Shift 1 → 2)，α是按SHIFT 7 → → 2，E 是按 EXP。

用法示范 (假设答案是3650) :

按 Prog 1 再按 0 EXE (输入0代表猜的数字可重复，若输入1则代表不重复)

1 EXE 1 EXE 2 EXE 2 EXE (表示猜1122)

(显示0，十位0代表有0个数字位置及数字同时正确，个位0代表有0个数字正确但位置错误)

再按 3 EXE 3 EXE 4 EXE 4 EXE (表示猜3344)

(显示10，十位1代表有1个数字位置及数字同时正确，个位0代表有0个数字正确但位置错误)

再按 5 EXE 5 EXE 6 EXE 6 EXE (表示猜5566)

(显示2，十位0代表有0个数字位置及数字同时正确，个位2代表有2个数字正确但位置错误)

...

(猜中时程式一显示π，程式二会显示次数)

注:

1. 如在中途离开，请在完成输入一组数字后才离开，否则可能无法知道答案的正确次序。

2. 此式运行时间较长, 每个输入数字需运算约0.9秒。

附录程式原理:

(例如答案为3665, 猜6355, 显示12)

1. 先检定猜测中的第一个位(6),与3665中的第一个位(3)核对 (即X6 A3B6C6D5)

2. 然后把答案换位, 再次检测 (即X6 A6B6C5D3 ; X6 A6B5C3D6 ; X6 A5B3C6D6)

3. 输入猜测的第二个位(3), 与3665中的第二个位(6)核对 (即X3 A6B6C5D3)

4. 重复以上步骤, 直至全部验证完成

5. 若检验出"数字正确但位置错误"，则猜的数与答案数均会加上一个细数α (例如验出 X6 A6B6C5D3 => X6+α A6-αB6C5D3,
猜的6变成 6+α，答案的6变成 6-α) ，这样该数字就不会再被验出"数字正确但位置错误"了。

6. 每次输入数字时，与最先检验的数字，会另外检验"数字位置及数字同时正确" 无论本身有没有加上α，也不受影响。

---

*源码未经改动，原样转录。见 [NOTICE](../NOTICE.md)。*
