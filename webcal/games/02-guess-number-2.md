---
title: "估数字(II)"
english_title: "Guess a number II"
slug: guess-number-2
source: http://webcal.freehostia.com/casio.fx-50FH/GuessNumberII.htm
programs: 1
declared_bytes: 64
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "未具名网友"
credits:
  - "程式由网友 提供，\n计算机会随机产生一个1-1000的整数，游戏的目的是要找出这个数字，每次估数字前会显示该数值的可能范围(以小数形式表示)，若果估的数字正确，会显示所用的总次(六十进数的值)。"
references:
  - http://webcal.forumcircle.com/viewtopic.php?t=1490
dates:
  - "更新日期: 2011年2月3日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 估数字(II)

**Guess a number II** · 1 program(s) · [original page (GuessNumberII.htm)](http://webcal.freehostia.com/casio.fx-50FH/GuessNumberII.htm)

## 署名 / Credits

**作者：** 未具名网友

*原页作者名缺失，仅有论坛帖连结*

原页署名原文：

> 程式由网友 提供，
计算机会随机产生一个1-1000的整数，游戏的目的是要找出这个数字，每次估数字前会显示该数值的可能范围(以小数形式表示)，若果估的数字正确，会显示所用的总次(六十进数的值)。

原始讨论：<http://webcal.forumcircle.com/viewtopic.php?t=1490>

**更新日期: 2011年2月3日**

## 程式 · 64 bytes

```
ClrMemory: Fix 4: 1+E3
Ran#→B: 1→X: E3→Y:
While A≠BM+: X+Y÷E4→A: ?→A:
A>B =>A→Y:
A<B => A→X: WhileEnd: Norm 1: M°
```

## 玩法与说明（原文）

更新日期: 2011年2月3日

程式由网友 提供，
计算机会随机产生一个1-1000的整数，游戏的目的是要找出这个数字，每次估数字前会显示该数值的可能范围(以小数形式表示)，若果估的数字正确，会显示所用的总次(六十进数的值)。

注意: E 是按 EXP，而 M° 是按 ALPHA MR °'"

操作示范(假定要估的数值是924):

按 Prog 1 (显示1.1000表示答案为1-1000的整数)

777 EXE (假设估777，显示777.1000表示答案为777-1000的整数)

950 EXE (假设估950，显示888.0950表示答案为888-950的整数)

924 EXE (假设估924，显示4°0°0，表示4次估中答案)

注: 执行程式后，若未能估中答案，中途按 AC 或 ON 虽可终止程式，但计算机会保留在Fix 4(小数四位的设定)，请自行按SHIFT MODE 3 1
(Norm 1) 取消小数四位的设定。

---

*源码未经改动，原样转录。见 [NOTICE](../NOTICE.md)。*
