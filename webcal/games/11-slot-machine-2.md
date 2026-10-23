---
title: "老虎机II (Slot machine II)"
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
  - "程式初版由网友望月编写及最后版本由网友SuperMANganese及\nroviury修改。"
references:
  - http://webcal.forumcircle.com/viewtopic.php?t=1340
dates:
  - "程式更新日期: 2011年2月3日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 老虎机II (Slot machine II)

**Slot machine II** · 1 program(s) · [original page (slotMachine2.htm)](http://webcal.freehostia.com/casio.fx-50FH/slotMachine2.htm)

## 署名 / Credits

**作者：** 望月、SuperMANganese、roviury

*初版由望月编写，最后版本由 SuperMANganese 及 roviury 修改*

原页署名原文：

> 程式初版由网友望月编写及最后版本由网友SuperMANganese及
roviury修改。

原始讨论：<http://webcal.forumcircle.com/viewtopic.php?t=1340>

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

## 玩法与说明（原文）

程式更新日期: 2011年2月3日

程式初版由网友望月编写及最后版本由网友SuperMANganese及
roviury修改。

注意: E是按 EXP 。

操作方法:

按 Prog 1 (先显示本金 $100) EXE

1 EXE (输入投注金额(注1))

EXE (显示第一个拉出的数值(A值))

EXE (显示第二个拉出的数值(B值))

EXE (显示第三个拉出的数值(C值))

EXE (显示该次的盈利或亏损)

EXE (显示最后的本金)

程式会重复上述蓝色的步骤，但本金为0时会显示Math ERROR。

注1: 投注金额必须为整数，否则要重新输入投注金额。投注金额最高限制为现时本金的五分之一，但本金小于$5时，则没有五分之一的限制，但仍须输入整数。

注2: 赔率的计算方法如下: (有重覆者，以较大赔率为准)
有两个数字一样 + 5倍

三个数中有0的话 + 2倍

三个数为连续数 (例: 2,3,4 或 8,7,6 ,而不是 3,5,7 或 4,5,3) + 5倍

三个数中有0的话 及 三个数为连续数 +8倍

有两个数字一样 及 三个数中有0的话 + 8倍

有三个数字一样 + 17倍

三个零 + 19倍

三个一 + 30倍

三个七 + 100倍

---

*源码未经改动，原样转录。见 [NOTICE](../NOTICE.md)。*
