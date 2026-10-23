---
title: "記憶遊戲"
english_title: "Memory game II"
slug: memory-game-2
source: http://webcal.freehostia.com/casio.fx-50FH/memory_game2.htm
programs: 2
declared_bytes: 212
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "tonylcc1995"
referenced:
  - "SuperMANganese"
  - "roviury"
credits:
  - "程式由網友\ntonylcc1995 提供，SuperMANganese提供防作弊版本的意見及方法。"
  - "網友 roviury 提供程式簡化意見。"
dates:
  - "程式更新日期: 2011年3月21日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 記憶遊戲

**Memory game II** · 2 program(s) · [original page (memory_game2.htm)](http://webcal.freehostia.com/casio.fx-50FH/memory_game2.htm)

## 署名 / Credits

**作者：** tonylcc1995

*SuperMANganese 提供防作弊版本的意見及方法；roviury 提供程式簡化意見*

原頁署名原文：

> 程式由網友
tonylcc1995 提供，SuperMANganese提供防作弊版本的意見及方法。

> 網友 roviury 提供程式簡化意見。

**程式更新日期: 2011年3月21日**

## 程式一 · 80 bytes

```
Rec( 0 , 0: Lbl 0:1+X→X◢ Fix 0: FreqOn:
E99 DT: - Ans
DT: Rnd((.5+Ran#)(B+E3XX
; 0 DT:
Norm 1: Ans◢ 0: ?→A: ; 0
DT: Ans→Y:
A=Y => Goto 0 : X◢ Y◢ A ◢ 0-1
```

## 程式二 · 132 bytes

```
0→B: Lbl 1: ?→C: C2≧21C => Goto 1:
Lbl 2: ?→M: M2≧E3M =>
Goto 2:
M-1→M: Lbl 0: C≦0 => 0-1: 1+M→M◢ Fix 0:
FreqOn: E99 DT: - Ans
DT: Rnd((.5+Ran#)(B+E3MM
; 0 DT:
Norm 1: Ans◢ 0: ?→A: ; 0
DT: Ans→B:
A=B => Goto 0 : C-1→C◢ M◢ B◢ A◢ Goto 0
```

## 玩法與說明（原文）

記憶遊戲(II)

程式由網友
tonylcc1995 提供，SuperMANganese提供防作弊版本的意見及方法。

網友 roviury 提供程式簡化意見。

與記憶遊戲(I)比較，這個版本程式加入了防作弊的特點。

程式更新日期: 2011年3月21日

程式需要在 SD 模式下執行，因此在選擇新程式位置後，按 4 選用SD模式。

注意 : E 是按 EXP。

遊戲玩法及示範:

按 Prog 1 (顯示關數1)

EXE (這時會顯示一個記憶數字，假設是123)

EXE (顯示A?表示輸入要記憶數字)

123 EXE (輸入記憶數字，由於正確再顯示新關數為2)

EXE (顯示另一個記憶數字，假設是4567)

EXE (顯示A?表示輸入要記憶數字)

4568 EXE (輸入記憶數字，由於答錯顯示M及2(顯示錯誤時的關數))

EXE (顯示B及4567(記憶數字) )

EXE (顯示A及4568(你輸入的數字) )

EXE (顯示Math ERROR表示遊戲結束)

程式二遊戲玩法及示範:

按 Prog 1

再按 2 EXE (輸入2表示只有2次機會(你可以輸入1至20的數值))

1 EXE (輸入1表示開始時的關數為1(你可以輸入1至999的數值)，這時顯示關數M為1)

EXE (這時會顯示一個記憶數字，假設是123)

EXE (顯示A?表示輸入要記憶數字)

123 EXE (輸入記憶數字，由於正確再顯示新關數M為2)

EXE (顯示另一個記憶數字，假設是4567)

EXE (顯示A?表示輸入要記憶數字)

4568 EXE (輸入記憶數字，由於答錯顯示C為1(即還有多1次機會))

EXE (顯示M為2(顯示錯誤時的關數))

EXE (顯示B及4567(記憶數字) )

EXE (顯示A及4568(你輸入的數字) )

EXE (顯示遊戲的關數M為2)

EXE (顯示另一個記憶數字，假設是7653)

EXE (顯示A?表示輸入要記憶數字)

7633 EXE (輸入記憶數字，由於答錯顯示C為0(即沒有機會了))

EXE (顯示M為2(顯示錯誤時的關數))

EXE (顯示B及7653(記憶數字) )

EXE (顯示A及7633(你輸入的數字) )

EXE (顯示Math ERROR表示遊戲結束)

---

*源碼未經改動，原樣轉錄。見 [NOTICE](../NOTICE.md)。*
