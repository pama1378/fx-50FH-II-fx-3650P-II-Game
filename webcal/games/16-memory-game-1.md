---
title: "记忆游戏"
english_title: "Memory game I"
slug: memory-game-1
source: http://webcal.freehostia.com/casio.fx-50FH/memory_game.htm
programs: 2
declared_bytes: 157
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "tonylcc1995"
credits:
  - "程式由网友\ntonylcc1995 提供。"
dates:
  - "更新日期: 2011年2月3日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 记忆游戏

**Memory game I** · 2 program(s) · [original page (memory_game.htm)](http://webcal.freehostia.com/casio.fx-50FH/memory_game.htm)

## 署名 / Credits

**作者：** tonylcc1995

原页署名原文：

> 程式由网友
tonylcc1995 提供。

**更新日期: 2011年2月3日**

## 程式一 · 47 bytes

```
ClrMemory: While A=BM+:
M◢ Fix 0:
Rnd( ( . 5 + Ran# )(B + E3MM→B:
Norm 1◢ ?→A: WhileEnd:
M◢ B◢ A ◢ 0⁻¹
```

## 程式二 · 110 bytes

```
ClrMemory: While (C≦0) + (C≧21: ?→C: WhileEnd:
While (M≦0) + (M≧E3: ?→M: WhileEnd: 1M-:
Lbl 0: C≦0 => 0⁻¹: 0→B: 1M+:
M◢ Fix 0:
Rnd( ( . 5 + Ran# )(B + E3MM→B: Norm 1◢ ?→A:
A=B => Goto 0: C-1→C◢ M◢ B◢ A◢ Goto 0
```

## 玩法与说明（原文）

记忆游戏(I)

程式由网友
tonylcc1995 提供。

更新日期: 2011年2月3日

注意: E 是按 EXP 。

程式一游戏玩法及示范:

按 Prog 1 (这时显示关数M为1)

EXE (这时会显示一个记忆数字，假设是123)

EXE (显示A?表示输入要记忆数字)

123 EXE (输入记忆数字，由于正确再显示新关数M为2)

EXE (显示另一个记忆数字，假设是4567)

EXE (显示A?表示输入要记忆数字)

4568 EXE (输入记忆数字，由于答错显示M为2(显示错误时的关数))

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
