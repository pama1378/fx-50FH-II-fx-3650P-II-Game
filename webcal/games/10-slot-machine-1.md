---
title: "老虎機(I) (Slot machine I)"
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

# 老虎機(I) (Slot machine I)

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

## 玩法與說明（原文）

更新日期: 2011年2月3日

註1: 開始時的現金總值為0，顯示現金餘額時第一行會顯示M字，第二行的數值為金額。

註2:
若果拉出三個不同數值，金額減$1，若有果其中兩個數值相同，金額加$2，若果拉中三個相同數值(非777)，金額加$8，若果拉中777，金額加$100。

操作方法:

按 Prog 1 (顯示第一個拉出的數值)

EXE (顯示第二個拉出的數值)

EXE (顯示第三個拉出的數值)

EXE (第一行有M字出現，顯示現在金額)

EXE (顯示另一次第一個拉出的數值)

EXE (顯示另一次第二個拉出的數值)

EXE (顯示另一次第三個拉出的數值)

EXE (第一行有M字出現，顯示現在金額)

........................

---

*源碼未經改動，原樣轉錄。見 [NOTICE](../NOTICE.md)。*
