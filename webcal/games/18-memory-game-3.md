---
title: "记忆游戏"
english_title: "Memory game III (7 game)"
slug: memory-game-3
source: http://webcal.freehostia.com/casio.fx-50FH/game7.htm
programs: 1
declared_bytes: 118
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "kith"
credits:
  - "程式由网友 kith\n提供。"
dates:
  - "网友提供程式日期: 2009年11月13日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 记忆游戏

**Memory game III (7 game)** · 1 program(s) · [original page (game7.htm)](http://webcal.freehostia.com/casio.fx-50FH/game7.htm)

## 署名 / Credits

**作者：** kith

原页署名原文：

> 程式由网友 kith
提供。

**网友提供程式日期: 2009年11月13日**

## 程式 · 118 bytes

```
For 1→A To 7E3: Fix 0: Rnd(A％- . 5→Y: Rnd(A÷10-.5:
(Y≠7)(Ans-10Y≠7)(A-10Ans≠7)(A≠7Rnd(A÷7→B:
If A-2Rnd(A÷2: Then Norm1: 0→X: ?→X: B => X-A
=> Break:
X => B=0 => Break:
Else Norm 1: B => A◢ B=0 =>
0◢ IfEnd: Next
```

## 玩法与说明（原文）

拍7游戏

程式由网友 kith
提供。

网友提供程式日期: 2009年11月13日

游戏玩法：
由1开始数，玩家和计算机轮流报数。凡数字含有7或是7的倍数，便输入0。
例如:

先输入1 EXE (显示2) 3 EXE (显示4) 5 EXE (显示6) EXE 或0 EXE (显示8) ......
到7000时会结束游戏

注: 若想随机报数，则可将 If A-2Rnd(A÷2 改成 If .5>Ran#

---

*源码未经改动，原样转录。见 [NOTICE](../NOTICE.md)。*
