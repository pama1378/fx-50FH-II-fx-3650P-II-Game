---
title: "對戰遊戲(II)"
english_title: "Fighting game II"
slug: fighting-game-2
source: http://webcal.freehostia.com/casio.fx-50FH/fighting2.htm
programs: 2
declared_bytes: 919
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "wimwim"
credits:
  - "程式由網友 wimwim 提供，網友 roviury\n提供簡化意見。…"
  - "程式由網友 wimwim 提供。"
dates:
  - "程式更新日期: 2012年12月25日"
  - "網友提供程式日期: 2009年6月18日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 對戰遊戲(II)

**Fighting game II** · 2 program(s) · [original page (fighting2.htm)](http://webcal.freehostia.com/casio.fx-50FH/fighting2.htm)

## 署名 / Credits

**作者：** wimwim

原頁署名原文：

> 程式由網友 wimwim 提供，網友 roviury
提供簡化意見。…

> 程式由網友 wimwim 提供。

**程式更新日期: 2012年12月25日 / 網友提供程式日期: 2009年6月18日**

## 程式 · 448 bytes

```
E2→C: Fix3: E3→Y: 2C→M: Y+M÷E3◢
Y→D: M→X: D+X÷E3◢
Lbl 0: ?→A: (A>6) + (A≠1)(A≠3)(M<C(7-A => Goto 0: Lbl 1:
?→B: (B>6) + (B≠1)(B≠3)(X<C(7-B => Goto 1:
A◢ B◢ A=1 => B-4 => D-70→D: A=1 => 80M-:
A=2 => B-4 => D-5C→D: A=2 => 5CM-: A=1 => B=3 => 14+D→D:
A=2 => B=3 => C+D→D: A=4 => 3CM-: A=5 => C+Y→Y: A=5 => 2CM-:
B=1 => A-4 => Y-70→Y: B=1 => X- 80→X: B=2 => A-4 => Y-5C→Y:
B=2 => X-5C→X: B=4 => X-3C→X: B=5=> C+D→D: B=5=>X-2C→X:
B=1 => A=3 => 14+Y→Y: B=2 => A=3 => C+Y→Y: A=6 => 50M+:
B=6 => 50+X→X: CM+: C+X→X: M>5C => 5C→M: X>5C => 5C→X:
Y>E3 => E3→Y: D>E3 => E3→D: D<0 => 0→D:Y<0 => 0→Y:Y+M÷E3◢
D+X÷E3◢ DY => Goto 0: D =>
2-GD◢ Y=>1-GD◢ Norm 1
```

## 程式 · 471 bytes

```
E2→C: Fix3: E3→Y: 2C→M: Y+M÷E3◢
Y→D: M→X: D+X÷E3◢
Lbl 0: ?→A: A>6 => Goto 0: A=2 => M<5C => Goto 0:
A=4 => M<3C => Goto 0: A=5 => M<2C => Goto 0: Lbl 1:
?→B: B=2 => X<5C => Goto 1: B=4 => X<3C => Goto 1:
B=5 => X<2C => Goto 1: A◢ B◢ A=1 => B-4 => D-70→D: A=1 => 80M-:
A=2 => B-4 => D-5C→D: A=2 => 5CM-: A=1 => B=3 => 14+D→D:
A=2 => B=3 => C+D→D: A=4 => 3CM-: A=5 => C+Y→Y: A=5 => 2CM-:
B=1 => A-4 => Y-70→Y: B=1 => X- 80→X: B=2 => A-4 => Y-5C→Y:
B=2 => X-5C→X: B=4 => X-3C→X: B=5=> C+D→D: B=5=>X-2C→X:
B=1 => A=3 => 14+Y→Y: B=2 => A=3 => C+Y→Y: A=6 => 50M+:
B=6 => 50+X→X: CM+: C+X→X: M>5C => 5C→M: X>5C => 5C→X:
Y>E3 => E3→Y: D>E3 => E3→D: D<0 => 0→D:Y<0 => 0→Y:Y+M÷E3◢
D+X÷E3◢ DY => Goto 0: D =>
2-GD◢ Y=>1-GD◢ Norm 1
```

## 玩法與說明（原文）

程式由網友 wimwim 提供，網友 roviury
提供簡化意見。這個程式需要兩個玩家(人對人版本，由兩個玩家互相對戰)，為了使遊戲公平，第一個玩家輸入對戰招式時(1-6數值)，請不要給第二個玩家看見，第二個玩家輸入對戰招式後，程式會顯示兩方所使用的招式、HP值及MP值。

程式更新日期: 2012年12月25日

注意: E 是按 EXP 。

註1: 出招方式輸入1-6整數
1: 標準攻擊 (對方HP減70, 但己方MP減少 80)
2: 必殺技 (對方HP減500, 但己方MP減少500)
3: 防禦 (減少己方HP損失20%)
4: 100%防禦 (己方HP不會有任何損失, 但己方MP減少300)
5: 恢復HP (己方HP恢復100, 但己方MP減少200)
6: 恢復MP (己方MP恢復50)

註2: 每個回合 MP數值會自動增加100

註3: 當對方的HP數值減少至0，而已方的HP大於0則獲勝。當己方的HP數值減少至0，而對方的HP大於0則戰敗。
第一個玩家獲勝會顯示1-GD，第二個玩家獲勝會顯示2-GD，當雙方的HP數值同時減少至0則表示打成平手，這時不會顯示1-GD或2-GD，程式會直接終止(顯示Norm
1)。

操作示範:

按 Prog 1 (顯示1000.200，即第一個玩家的HP為1000及MP為200)

EXE (顯示1000.200，即第二個玩家的HP為1000及MP為200)

EXE (顯示A?表示第一個玩家輸入出招選擇(1-6的整數)，若果選用1)

1 EXE (顯示B?表示第二個玩家輸入出招選擇(1-6的整數)，若果選用1)

1 EXE (顯示第一個玩家的HP及MP)

EXE (顯示第二個玩家的HP及MP)

.....繼續遊戲...直至完結

程式舊版

程式由網友 wimwim 提供。

網友提供程式日期: 2009年6月18日

注意: E 是按 EXP 。

---

*源碼未經改動，原樣轉錄。見 [NOTICE](../NOTICE.md)。*
