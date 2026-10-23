---
title: "記憶遊戲"
english_title: "Memory game III (7 game)"
slug: memory-game-3
source: http://webcal.freehostia.com/casio.fx-50FH/game7.htm
programs: 1
declared_bytes: 118
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "kith"
credits:
  - "程式由網友 kith\n提供。"
dates:
  - "網友提供程式日期: 2009年11月13日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 記憶遊戲

**Memory game III (7 game)** · 1 program(s) · [original page (game7.htm)](http://webcal.freehostia.com/casio.fx-50FH/game7.htm)

## 署名 / Credits

**作者：** kith

原頁署名原文：

> 程式由網友 kith
提供。

**網友提供程式日期: 2009年11月13日**

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

## 玩法與說明（原文）

拍7遊戲

程式由網友 kith
提供。

網友提供程式日期: 2009年11月13日

遊戲玩法：
由1開始數，玩家和計算機輪流報數。凡數字含有7或是7的倍數，便輸入0。
例如:

先輸入1 EXE (顯示2) 3 EXE (顯示4) 5 EXE (顯示6) EXE 或0 EXE (顯示8) ......
到7000時會結束遊戲

註: 若想隨機報數，則可將 If A-2Rnd(A÷2 改成 If .5>Ran#

---

*源碼未經改動，原樣轉錄。見 [NOTICE](../NOTICE.md)。*
