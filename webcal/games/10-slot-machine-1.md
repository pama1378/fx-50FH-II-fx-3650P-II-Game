---
title: "老虎机(I) (Slot machine I)"
english_title: "Slot machine I"
slug: slot-machine-1
source: http://webcal.freehostia.com/casio.fx-50FH/slotMachine.htm
programs: 1
declared_bytes: 64
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "WebCal 站主"
dates:
  - "更新日期: 2011年2月3日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 老虎机(I) (Slot machine I)

**Slot machine I** · 1 program(s) · [original page (slotMachine.htm)](http://webcal.freehostia.com/casio.fx-50FH/slotMachine.htm)

## 署名 / Credits

**作者：** WebCal 站主

**更新日期: 2011年2月3日**

## 程式 · 64 bytes

```
ClrMemory: While 1M-: Fix 0: Rnd( 9Ran#→A◢
Rnd( 9Ran#→B◢ Rnd( 9Ran#→C:
Norm 1◢
ABC=73
=> 92M+: 3((A=B)+(A=C)+(B=CM+:
M◢ WhileEnd
```

## 玩法与说明（原文）

更新日期: 2011年2月3日

注1: 开始时的现金总值为0，显示现金余额时第一行会显示M字，第二行的数值为金额。

注2:
若果拉出三个不同数值，金额减$1，若有果其中两个数值相同，金额加$2，若果拉中三个相同数值(非777)，金额加$8，若果拉中777，金额加$100。

操作方法:

按 Prog 1 (显示第一个拉出的数值)

EXE (显示第二个拉出的数值)

EXE (显示第三个拉出的数值)

EXE (第一行有M字出现，显示现在金额)

EXE (显示另一次第一个拉出的数值)

EXE (显示另一次第二个拉出的数值)

EXE (显示另一次第三个拉出的数值)

EXE (第一行有M字出现，显示现在金额)

........................

---

*源码未经改动，原样转录。见 [NOTICE](../NOTICE.md)。*
