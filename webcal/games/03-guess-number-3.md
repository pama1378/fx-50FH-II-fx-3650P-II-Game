---
title: "估數字(III)"
english_title: "Guess a number III"
slug: guess-number-3
source: http://webcal.freehostia.com/casio.fx-50FH/GuessNumberIII.htm
programs: 1
declared_bytes: 132
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "SuperMANganese"
credits:
  - "程式由網友 SuperMANganese 提供。…"
dates:
  - "網友提供程式日期: 2009年7月30日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 估數字(III)

**Guess a number III** · 1 program(s) · [original page (GuessNumberIII.htm)](http://webcal.freehostia.com/casio.fx-50FH/GuessNumberIII.htm)

## 署名 / Credits

**作者：** SuperMANganese

原頁署名原文：

> 程式由網友 SuperMANganese 提供。…

**網友提供程式日期: 2009年7月30日**

## 程式 · 132 bytes

```
?→D: Ran# + E-3Ran# + E-6Ran#:
Fix 0:
Rnd(2+Ans(D-3→Y: Norm 1: 1→C: 0→M:
Lbl 1: FreqOn: E9 DT: -Ans DT: Y
; 0 DT: C◢
D◢ Rec(0,0: ?→X: ; 0 DT: Ans→Y: 1+M→M:
X≧D => Goto 1: C≧X => Goto
1: X nCr 1:
X>Y => X→D : Ans => Goto 1: Y>X
=> X→C:
Ans => Goto 1: Mo
```

## 玩法與說明（原文）

網友提供程式日期: 2009年7月30日

程式由網友 SuperMANganese 提供。
這個版本加入了防作弊的特點，另外亦可以自定隨機數的最大整數值，遊戲的目的是要找出這個隨機數字，每次估數字前會顯示該數值的可能範圍，若果估的數字正確，會顯示所用的總次(六十進數的值)。

注意: E 是按 EXP，而 Mo 是按 ALPHA MR
o,,,

操作示範(假定要估的數值是924):

按 Prog 1 再按 1000 EXE (表示要產生1-1000的隨機數及顯示1)

EXE (顯示1000，表示答案為1-1000的整數)

EXE 777 EXE (假設估777及顯示777) EXE (顯示1000，表示答案為777-1000的整數)

950 EXE (假設估950及顯示888) EXE (顯示950，表示答案為888-950的整數)

924 EXE (假設估924，顯示4o0o0，表示4次估中答案)

註1: 輸入數字非整數會MATH ERROR；輸入數字超出範圍，會重新顯示範圍及要求重新輸入，但會當作估一次。

註2: 如想知道答案，在顯示可能範圍時終止程式，再按按 RCL Y 可顯示答案。

註3: 3650可能會datafull，此時按1(editoff)即可。

註4: 隨機機範圍可由1~3至1~1000000000。

---

*源碼未經改動，原樣轉錄。見 [NOTICE](../NOTICE.md)。*
