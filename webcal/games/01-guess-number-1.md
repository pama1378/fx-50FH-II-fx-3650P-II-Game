---
title: "估數字(I)"
english_title: "Guess a number I"
slug: guess-number-1
source: http://webcal.freehostia.com/casio.fx-50FH/GuessNumber.htm
programs: 1
declared_bytes: 32
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "WebCal 站主"
referenced:
  - "yathimc"
  - "SuperMANganese"
credits:
  - "程式是參考論壇網友、yathimc及SuperMANganese的程式編寫及修改。"
references:
  - http://webcal.forumcircle.com/viewtopic.php?t=1481
dates:
  - "程式編寫日期: 2010年11月16日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 估數字(I)

**Guess a number I** · 1 program(s) · [original page (GuessNumber.htm)](http://webcal.freehostia.com/casio.fx-50FH/GuessNumber.htm)

## 署名 / Credits

**作者：** WebCal 站主

*本文參考 yathimc 及 SuperMANganese 的程式編寫及修改*

原頁署名原文：

> 程式是參考論壇網友、yathimc及SuperMANganese的程式編寫及修改。

原始討論：<http://webcal.forumcircle.com/viewtopic.php?t=1481>

**程式編寫日期: 2010年11月16日**

## 程式 · 32 bytes

```
ClrMemory: E3 Ran#→B: Lbl
0: ?→A: 1M+:
A-B => Ans ÷ Abs( Ans =>
Goto 0◢
Mo
```

## 玩法與說明（原文）

程式新版

程式是參考論壇網友、yathimc及SuperMANganese的程式編寫及修改。

程式會產生一個 0至999的整數，遊戲的目的是要找出這個數字，每次估數字時，若果估值較大時會顯示1的提示，若果估值較少會顯示 -
1的提示，若果估的數字正確，會顯示所用的總次(六十進數的值)。

程式編寫日期: 2010年11月16日

注意: E 是按 EXP，Mo 是按
ALPHA M+
o,,,

操作方法:

1. 先按 Prog 1 執行程式

2. 再輸入估計的數值 EXE 這時程式一會顯示 1 或 - 1 或 一個六十進數的數值。

3. 若果未估中數字，再按 EXE ，再重返步驟2，直至估中數值為止。

---

*源碼未經改動，原樣轉錄。見 [NOTICE](../NOTICE.md)。*
