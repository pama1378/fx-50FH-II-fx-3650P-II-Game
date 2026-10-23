---
title: "記憶遊戲"
english_title: "Memory game I"
slug: memory-game-1
source: http://webcal.freehostia.com/casio.fx-50FH/memory_game.htm
programs: 2
declared_bytes: 157
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "tonylcc1995"
credits:
  - "程式由網友\ntonylcc1995 提供。"
dates:
  - "更新日期: 2011年2月3日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 記憶遊戲

**Memory game I** · 2 program(s) · [original page (memory_game.htm)](http://webcal.freehostia.com/casio.fx-50FH/memory_game.htm)

## 署名 / Credits

**作者：** tonylcc1995

原頁署名原文：

> 程式由網友
tonylcc1995 提供。

**更新日期: 2011年2月3日**

## 程式一 · 47 bytes

```
ClrMemory: While A=BM+:
M◢ Fix 0:
Rnd( ( . 5 + Ran# )(B + E3MM→B:
Norm 1◢ ?→A: WhileEnd:
M◢ B◢ A ◢ 0-1
```

## 程式二 · 110 bytes

```
ClrMemory: While (C≦0) + (C≧21: ?→C: WhileEnd:
While (M≦0) + (M≧E3: ?→M: WhileEnd: 1M-:
Lbl 0: C≦0 => 0-1: 0→B: 1M+:
M◢ Fix 0:
Rnd( ( . 5 + Ran# )(B + E3MM→B: Norm 1◢ ?→A:
A=B => Goto 0: C-1→C◢ M◢ B◢ A◢ Goto 0
```

## 玩法與說明（原文）

記憶遊戲(I)

程式由網友
tonylcc1995 提供。

更新日期: 2011年2月3日

注意: E 是按 EXP 。

程式一遊戲玩法及示範:

按 Prog 1 (這時顯示關數M為1)

EXE (這時會顯示一個記憶數字，假設是123)

EXE (顯示A?表示輸入要記憶數字)

123 EXE (輸入記憶數字，由於正確再顯示新關數M為2)

EXE (顯示另一個記憶數字，假設是4567)

EXE (顯示A?表示輸入要記憶數字)

4568 EXE (輸入記憶數字，由於答錯顯示M為2(顯示錯誤時的關數))

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
