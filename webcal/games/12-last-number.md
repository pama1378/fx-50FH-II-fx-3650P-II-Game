---
title: "最后数值"
english_title: "Last number"
slug: last-number
source: http://webcal.freehostia.com/casio.fx-50FH/lastNumber.htm
programs: 1
declared_bytes: 64
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "WebCal 站主"
dates:
  - "程式编写日期: 2008年3月10日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 最后数值

**Last number** · 1 program(s) · [original page (lastNumber.htm)](http://webcal.freehostia.com/casio.fx-50FH/lastNumber.htm)

## 署名 / Credits

**作者：** WebCal 站主

**程式编写日期: 2008年3月10日**

## 程式 · 64 bytes

```
ClrMemory: Fix 0: 18 + Rnd( 9Ran#→A:
Norm 1: Ans→B: While 1: ?→A:
A³ - 6A² + 11A - 6 => log(
0: B - A→B:
log( B: B→A: M=0→M: WhileEnd
```

## 玩法与说明（原文）

程式编写日期: 2008年3月10日

游戏目的是要避免成为最后输入数值者(败方)。程式会先产生一个随机的整数A(18-27)，游戏由两名玩家轮流输入数值，数值可以是 1, 2 或
3，每一次输入数值后，原先的整数会减以输入的数值成为新的整数，当最后输入数值令整数A变成0或负数者为败方，这时计算机会出现Math ERROR。

操作方法:

1. 先按 Prog 1 执行程式，显示A?及现时整数数值；

2. 第一位现家输入 1、2或3的数值再按 EXE，这时会显示A?及现时整数数值；

3. 第二位现家输入 1、2或3的数值再按 EXE，这时会显示A?及现时整数数值；

4. 不断重复步骤2及3，直至最后输入数值出现Math ERROR者为败方。

注1: 没有M的细字代表由第一位玩家输入数值，有M细字代表由第二位玩家输入数值。

注2: 出现Math ERROR时，没有M细字代表第一位玩家为败方，相反有M细字代表第二位玩家为败方。

注3: 若果输入的数值不是1、2或3，会立即出现Math ERROR，亦即是立即成为败方。

---

*源码未经改动，原样转录。见 [NOTICE](../NOTICE.md)。*
