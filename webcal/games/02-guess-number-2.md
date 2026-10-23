---
title: "估數字(II)"
english_title: "Guess a number II"
slug: guess-number-2
source: http://webcal.freehostia.com/casio.fx-50FH/GuessNumberII.htm
programs: 1
declared_bytes: 64
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "未具名網友"
credits:
  - "程式由網友 提供，\n計算機會隨機產生一個1-1000的整數，遊戲的目的是要找出這個數字，每次估數字前會顯示該數值的可能範圍(以小數形式表示)，若果估的數字正確，會顯示所用的總次(六十進數的值)。"
references:
  - http://webcal.forumcircle.com/viewtopic.php?t=1490
dates:
  - "更新日期: 2011年2月3日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 估數字(II)

**Guess a number II** · 1 program(s) · [original page (GuessNumberII.htm)](http://webcal.freehostia.com/casio.fx-50FH/GuessNumberII.htm)

## 署名 / Credits

**作者：** 未具名網友

*原頁作者名缺失，僅有論壇帖連結*

原頁署名原文：

> 程式由網友 提供，
計算機會隨機產生一個1-1000的整數，遊戲的目的是要找出這個數字，每次估數字前會顯示該數值的可能範圍(以小數形式表示)，若果估的數字正確，會顯示所用的總次(六十進數的值)。

原始討論：<http://webcal.forumcircle.com/viewtopic.php?t=1490>

**更新日期: 2011年2月3日**

## 程式 · 64 bytes

```
ClrMemory: Fix 4: 1+E3
Ran#→B: 1→X: E3→Y:
While A≠BM+: X+Y÷E4→A: ?→A:
A>B =>A→Y:
A<B => A→X: WhileEnd: Norm 1: Mo
```

## 玩法與說明（原文）

更新日期: 2011年2月3日

程式由網友 提供，
計算機會隨機產生一個1-1000的整數，遊戲的目的是要找出這個數字，每次估數字前會顯示該數值的可能範圍(以小數形式表示)，若果估的數字正確，會顯示所用的總次(六十進數的值)。

注意: E 是按 EXP，而 Mo 是按 ALPHA MR
o,,,

操作示範(假定要估的數值是924):

按 Prog 1 (顯示1.1000表示答案為1-1000的整數)

777 EXE (假設估777，顯示777.1000表示答案為777-1000的整數)

950 EXE (假設估950，顯示888.0950表示答案為888-950的整數)

924 EXE (假設估924，顯示4o0o0，表示4次估中答案)

註: 執行程式後，若未能估中答案，中途按 AC 或 ON 雖可終止程式，但計算機會保留在Fix 4(小數四位的設定)，請自行按SHIFT MODE 3 1
(Norm 1) 取消小數四位的設定。

---

*源碼未經改動，原樣轉錄。見 [NOTICE](../NOTICE.md)。*
