---
title: "估位置"
english_title: "Guess a position"
slug: guess-position
source: http://webcal.freehostia.com/casio.fx-50FH/guessPosition.htm
programs: 1
declared_bytes: 60
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "WebCal 站主"
dates:
  - "更新日期: 2011年2月3日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 估位置

**Guess a position** · 1 program(s) · [original page (guessPosition.htm)](http://webcal.freehostia.com/casio.fx-50FH/guessPosition.htm)

## 署名 / Credits

**作者：** WebCal 站主

**更新日期: 2011年2月3日**

## 程式 · 60 bytes

```
ClrMemory: 500 - Ran# 10^( 3→A:
500 - Ran# 10^( 3→B:
Lbl 0: ?→X: ?→Y: √( (A - X)2 + (B - Y)2→X : 1M+:
X => Goto 0: Mo
```

## 玩法与说明（原文）

更新日期: 2011年2月3日

程式会随机产生一个座标(x, y)，其中 -499≦x≦500及-499≦y≦500，游戏的目的是要找出这个位置，每次估位置的座标时，若果
答案不正确会显示估计座标与正确正确座标的距离作为参，直至估的位置座标正确，会显示所用的总次数(六十进数的值)。

注意: 10^( 是按shift log，Mo 是按
ALPHA M+
o,,,

操作方法:

1. 先按 Prog 1 执行程式

2. 再输入估计座标，例如估计座标为 (0, 0)，按 0 EXE 0 EXE 这时会显示?X及一个数值，这个数值就是估计点与正确点的距离。

3. 若果未估中位置，再按 EXE ，再重返步骤2，直至估中数值为止。若果估中位置，会显示所使用的总次数(六十进数数值)，而程式亦终结。

---

*源码未经改动，原样转录。见 [NOTICE](../NOTICE.md)。*
