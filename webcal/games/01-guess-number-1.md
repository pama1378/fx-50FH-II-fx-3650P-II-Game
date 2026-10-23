---
title: "估数字(I)"
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
  - "程式是参考论坛网友、yathimc及SuperMANganese的程式编写及修改。"
references:
  - http://webcal.forumcircle.com/viewtopic.php?t=1481
dates:
  - "程式编写日期: 2010年11月16日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 估数字(I)

**Guess a number I** · 1 program(s) · [original page (GuessNumber.htm)](http://webcal.freehostia.com/casio.fx-50FH/GuessNumber.htm)

## 署名 / Credits

**作者：** WebCal 站主

*本文参考 yathimc 及 SuperMANganese 的程式编写及修改*

原页署名原文：

> 程式是参考论坛网友、yathimc及SuperMANganese的程式编写及修改。

原始讨论：<http://webcal.forumcircle.com/viewtopic.php?t=1481>

**程式编写日期: 2010年11月16日**

## 程式 · 32 bytes

```
ClrMemory: E3 Ran#→B: Lbl
0: ?→A: 1M+:
A-B => Ans ÷ Abs( Ans =>
Goto 0◢
M°
```

## 玩法与说明（原文）

程式新版

程式是参考论坛网友、yathimc及SuperMANganese的程式编写及修改。

程式会产生一个 0至999的整数，游戏的目的是要找出这个数字，每次估数字时，若果估值较大时会显示1的提示，若果估值较少会显示 -
1的提示，若果估的数字正确，会显示所用的总次(六十进数的值)。

程式编写日期: 2010年11月16日

注意: E 是按 EXP，M° 是按
ALPHA M+ °'"

操作方法:

1. 先按 Prog 1 执行程式

2. 再输入估计的数值 EXE 这时程式一会显示 1 或 - 1 或 一个六十进数的数值。

3. 若果未估中数字，再按 EXE ，再重返步骤2，直至估中数值为止。

---

*源码未经改动，原样转录。见 [NOTICE](../NOTICE.md)。*
