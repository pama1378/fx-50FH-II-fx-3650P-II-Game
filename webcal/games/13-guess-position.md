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

## 玩法與說明（原文）

更新日期: 2011年2月3日

程式會隨機産生一個座標(x, y)，其中 -499≦x≦500及-499≦y≦500，遊戲的目的是要找出這個位置，每次估位置的座標時，若果
答案不正確會顯示估計座標與正確正確座標的距離作為參，直至估的位置座標正確，會顯示所用的總次數(六十進數的值)。

注意: 10^( 是按shift log，Mo 是按
ALPHA M+
o,,,

操作方法:

1. 先按 Prog 1 執行程式

2. 再輸入估計座標，例如估計座標為 (0, 0)，按 0 EXE 0 EXE 這時會顯示?X及一個數值，這個數值就是估計點與正確點的距離。

3. 若果未估中位置，再按 EXE ，再重返步驟2，直至估中數值為止。若果估中位置，會顯示所使用的總次數(六十進數數值)，而程式亦終結。

---

*源碼未經改動，原樣轉錄。見 [NOTICE](../NOTICE.md)。*
