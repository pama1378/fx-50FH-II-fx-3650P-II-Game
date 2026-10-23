---
title: "老虎機II (Slot machine II)"
english_title: "Slot machine II"
slug: slot-machine-2
source: http://webcal.freehostia.com/casio.fx-50FH/slotMachine2.htm
programs: 1
declared_bytes: 149
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "望月"
  - "SuperMANganese"
  - "roviury"
credits:
  - "程式初版由網友望月編寫及最後版本由網友SuperMANganese及\nroviury修改。"
references:
  - http://webcal.forumcircle.com/viewtopic.php?t=1340
dates:
  - "程式更新日期: 2011年2月3日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 老虎機II (Slot machine II)

**Slot machine II** · 1 program(s) · [original page (slotMachine2.htm)](http://webcal.freehostia.com/casio.fx-50FH/slotMachine2.htm)

## 署名 / Credits

**作者：** 望月、SuperMANganese、roviury

*初版由望月編寫，最後版本由 SuperMANganese 及 roviury 修改*

原頁署名原文：

> 程式初版由網友望月編寫及最後版本由網友SuperMANganese及
roviury修改。

原始討論：<http://webcal.forumcircle.com/viewtopic.php?t=1340>

**程式更新日期: 2011年2月3日**

## 程式 · 149 bytes

```
E2→M◢ 1→X:
Lbl 0: M→D:
log( M: ?→X: Fix 0: X- Rnd(X
=> Goto 0:
X≧5 => 5X>M =>
Goto 0: XM-: Rnd( 9Ran#→A◢
Rnd( 9Ran#→B◢ Rnd( 9Ran#→C◢ Norm 1:
ABC=0 => 3XM+:
ABC=1 => 13XM+: ABC=73
=> 83XM+:
6X((A=B)+(A=C)+(B=CM+: 1=Abs(A-B
=> 6X(2B-A=CM+:
M-D◢ M◢ Goto 0
```

## 玩法與說明（原文）

程式更新日期: 2011年2月3日

程式初版由網友望月編寫及最後版本由網友SuperMANganese及
roviury修改。

注意: E是按 EXP 。

操作方法:

按 Prog 1 (先顯示本金 $100) EXE

1 EXE (輸入投注金額(註1))

EXE (顯示第一個拉出的數值(A值))

EXE (顯示第二個拉出的數值(B值))

EXE (顯示第三個拉出的數值(C值))

EXE (顯示該次的盈利或虧損)

EXE (顯示最後的本金)

程式會重複上述藍色的步驟，但本金為0時會顯示Math ERROR。

註1: 投注金額必須為整數，否則要重新輸入投注金額。投注金額最高限制為現時本金的五分之一，但本金小於$5時，則沒有五分之一的限制，但仍須輸入整數。

註2: 賠率的計算方法如下: (有重覆者，以較大賠率為準)
有兩個數字一樣 + 5倍

三個數中有0的話 + 2倍

三個數為連續數 (例: 2,3,4 或 8,7,6 ,而不是 3,5,7 或 4,5,3) + 5倍

三個數中有0的話 及 三個數為連續數 +8倍

有兩個數字一樣 及 三個數中有0的話 + 8倍

有三個數字一樣 + 17倍

三個零 + 19倍

三個一 + 30倍

三個七 + 100倍

---

*源碼未經改動，原樣轉錄。見 [NOTICE](../NOTICE.md)。*
