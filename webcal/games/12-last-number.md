---
title: "最後數值"
english_title: "Last number"
slug: last-number
source: http://webcal.freehostia.com/casio.fx-50FH/lastNumber.htm
programs: 1
declared_bytes: 64
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "WebCal 站主"
dates:
  - "程式編寫日期: 2008年3月10日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 最後數值

**Last number** · 1 program(s) · [original page (lastNumber.htm)](http://webcal.freehostia.com/casio.fx-50FH/lastNumber.htm)

## 署名 / Credits

**作者：** WebCal 站主

**程式編寫日期: 2008年3月10日**

## 程式 · 64 bytes

```
ClrMemory: Fix 0: 18 + Rnd( 9Ran#→A:
Norm 1: Ans→B: While 1: ?→A:
A3 - 6A2 + 11A - 6 => log(
0: B - A→B:
log( B: B→A: M=0→M: WhileEnd
```

## 玩法與說明（原文）

程式編寫日期: 2008年3月10日

遊戲目的是要避免成為最後輸入數值者(敗方)。程式會先產生一個隨機的整數A(18-27)，遊戲由兩名玩家輪流輸入數值，數值可以是 1, 2 或
3，每一次輸入數值後，原先的整數會減以輸入的數值成為新的整數，當最後輸入數值令整數A變成0或負數者為敗方，這時計算機會出現Math ERROR。

操作方法:

1. 先按 Prog 1 執行程式，顯示A?及現時整數數值；

2. 第一位現家輸入 1、2或3的數值再按 EXE，這時會顯示A?及現時整數數值；

3. 第二位現家輸入 1、2或3的數值再按 EXE，這時會顯示A?及現時整數數值；

4. 不斷重複步驟2及3，直至最後輸入數值出現Math ERROR者為敗方。

註1: 沒有M的細字代表由第一位玩家輸入數值，有M細字代表由第二位玩家輸入數值。

註2: 出現Math ERROR時，沒有M細字代表第一位玩家為敗方，相反有M細字代表第二位玩家為敗方。

註3: 若果輸入的數值不是1、2或3，會立即出現Math ERROR，亦即是立即成為敗方。

---

*源碼未經改動，原樣轉錄。見 [NOTICE](../NOTICE.md)。*
