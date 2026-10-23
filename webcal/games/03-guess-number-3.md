---
title: "估数字(III)"
english_title: "Guess a number III"
slug: guess-number-3
source: http://webcal.freehostia.com/casio.fx-50FH/GuessNumberIII.htm
programs: 1
declared_bytes: 132
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "SuperMANganese"
credits:
  - "程式由网友 SuperMANganese 提供。…"
dates:
  - "网友提供程式日期: 2009年7月30日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 估数字(III)

**Guess a number III** · 1 program(s) · [original page (GuessNumberIII.htm)](http://webcal.freehostia.com/casio.fx-50FH/GuessNumberIII.htm)

## 署名 / Credits

**作者：** SuperMANganese

原页署名原文：

> 程式由网友 SuperMANganese 提供。…

**网友提供程式日期: 2009年7月30日**

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

## 玩法与说明（原文）

网友提供程式日期: 2009年7月30日

程式由网友 SuperMANganese 提供。
这个版本加入了防作弊的特点，另外亦可以自定随机数的最大整数值，游戏的目的是要找出这个随机数字，每次估数字前会显示该数值的可能范围，若果估的数字正确，会显示所用的总次(六十进数的值)。

注意: E 是按 EXP，而 Mo 是按 ALPHA MR
o,,,

操作示范(假定要估的数值是924):

按 Prog 1 再按 1000 EXE (表示要产生1-1000的随机数及显示1)

EXE (显示1000，表示答案为1-1000的整数)

EXE 777 EXE (假设估777及显示777) EXE (显示1000，表示答案为777-1000的整数)

950 EXE (假设估950及显示888) EXE (显示950，表示答案为888-950的整数)

924 EXE (假设估924，显示4o0o0，表示4次估中答案)

注1: 输入数字非整数会MATH ERROR；输入数字超出范围，会重新显示范围及要求重新输入，但会当作估一次。

注2: 如想知道答案，在显示可能范围时终止程式，再按按 RCL Y 可显示答案。

注3: 3650可能会datafull，此时按1(editoff)即可。

注4: 随机机范围可由1~3至1~1000000000。

---

*源码未经改动，原样转录。见 [NOTICE](../NOTICE.md)。*
