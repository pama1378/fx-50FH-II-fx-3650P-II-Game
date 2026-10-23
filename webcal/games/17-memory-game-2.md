---
title: "记忆游戏"
english_title: "Memory game II"
slug: memory-game-2
source: http://webcal.freehostia.com/casio.fx-50FH/memory_game2.htm
programs: 2
declared_bytes: 212
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "tonylcc1995"
referenced:
  - "SuperMANganese"
  - "roviury"
credits:
  - "程式由网友\ntonylcc1995 提供，SuperMANganese提供防作弊版本的意见及方法。"
  - "网友 roviury 提供程式简化意见。"
dates:
  - "程式更新日期: 2011年3月21日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 记忆游戏

**Memory game II** · 2 program(s) · [original page (memory_game2.htm)](http://webcal.freehostia.com/casio.fx-50FH/memory_game2.htm)

## 署名 / Credits

**作者：** tonylcc1995

*SuperMANganese 提供防作弊版本的意见及方法；roviury 提供程式简化意见*

原页署名原文：

> 程式由网友
tonylcc1995 提供，SuperMANganese提供防作弊版本的意见及方法。

> 网友 roviury 提供程式简化意见。

**程式更新日期: 2011年3月21日**

## 程式一 · 80 bytes

```
Rec( 0 , 0: Lbl 0:1+X→X◢ Fix 0: FreqOn:
E99 DT: - Ans
DT: Rnd((.5+Ran#)(B+E3XX
; 0 DT:
Norm 1: Ans◢ 0: ?→A: ; 0
DT: Ans→Y:
A=Y => Goto 0 : X◢ Y◢ A ◢ 0-1
```

## 程式二 · 132 bytes

```
0→B: Lbl 1: ?→C: C2≧21C => Goto 1:
Lbl 2: ?→M: M2≧E3M =>
Goto 2:
M-1→M: Lbl 0: C≦0 => 0-1: 1+M→M◢ Fix 0:
FreqOn: E99 DT: - Ans
DT: Rnd((.5+Ran#)(B+E3MM
; 0 DT:
Norm 1: Ans◢ 0: ?→A: ; 0
DT: Ans→B:
A=B => Goto 0 : C-1→C◢ M◢ B◢ A◢ Goto 0
```

## 玩法与说明（原文）

记忆游戏(II)

程式由网友
tonylcc1995 提供，SuperMANganese提供防作弊版本的意见及方法。

网友 roviury 提供程式简化意见。

与记忆游戏(I)比较，这个版本程式加入了防作弊的特点。

程式更新日期: 2011年3月21日

程式需要在 SD 模式下执行，因此在选择新程式位置后，按 4 选用SD模式。

注意 : E 是按 EXP。

游戏玩法及示范:

按 Prog 1 (显示关数1)

EXE (这时会显示一个记忆数字，假设是123)

EXE (显示A?表示输入要记忆数字)

123 EXE (输入记忆数字，由于正确再显示新关数为2)

EXE (显示另一个记忆数字，假设是4567)

EXE (显示A?表示输入要记忆数字)

4568 EXE (输入记忆数字，由于答错显示M及2(显示错误时的关数))

EXE (显示B及4567(记忆数字) )

EXE (显示A及4568(你输入的数字) )

EXE (显示Math ERROR表示游戏结束)

程式二游戏玩法及示范:

按 Prog 1

再按 2 EXE (输入2表示只有2次机会(你可以输入1至20的数值))

1 EXE (输入1表示开始时的关数为1(你可以输入1至999的数值)，这时显示关数M为1)

EXE (这时会显示一个记忆数字，假设是123)

EXE (显示A?表示输入要记忆数字)

123 EXE (输入记忆数字，由于正确再显示新关数M为2)

EXE (显示另一个记忆数字，假设是4567)

EXE (显示A?表示输入要记忆数字)

4568 EXE (输入记忆数字，由于答错显示C为1(即还有多1次机会))

EXE (显示M为2(显示错误时的关数))

EXE (显示B及4567(记忆数字) )

EXE (显示A及4568(你输入的数字) )

EXE (显示游戏的关数M为2)

EXE (显示另一个记忆数字，假设是7653)

EXE (显示A?表示输入要记忆数字)

7633 EXE (输入记忆数字，由于答错显示C为0(即没有机会了))

EXE (显示M为2(显示错误时的关数))

EXE (显示B及7653(记忆数字) )

EXE (显示A及7633(你输入的数字) )

EXE (显示Math ERROR表示游戏结束)

---

*源码未经改动，原样转录。见 [NOTICE](../NOTICE.md)。*
