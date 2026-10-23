---
title: "對戰遊戲(I)"
english_title: "Fighting game I"
slug: fighting-game-1
source: http://webcal.freehostia.com/casio.fx-50FH/fighting.htm
programs: 4
declared_bytes: 2354
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "wimwim"
referenced:
  - "roviury"
credits:
  - "程式由網友 wimwim 提供，網友 roviury\n提供簡化意見。"
  - "程式由網友 wimwim 提供。"
dates:
  - "程式更新日期: 2011年6月18日"
  - "網友提供程式日期: 2009年6月12日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 對戰遊戲(I)

**Fighting game I** · 4 program(s) · [original page (fighting.htm)](http://webcal.freehostia.com/casio.fx-50FH/fighting.htm)

## 署名 / Credits

**作者：** wimwim

*roviury 提供簡化意見*

原頁署名原文：

> 程式由網友 wimwim 提供，網友 roviury
提供簡化意見。

> 程式由網友 wimwim 提供。

**程式更新日期: 2011年6月18日 / 網友提供程式日期: 2009年6月12日**

## 第一個程式 · 515 bytes

```
E2→C: Fix3: E3→Y: 2C→M: Y+M÷E3◢ Y→D: M→X: D+X÷E3◢
Lbl 0: ?→A: (A>6) + (A≠1)(A≠3)(M<C(7-A => Goto 0: Fix 0: Lbl 1:
Rnd( 6Ran#+.5→B: X=5C => B=3 => Goto 1: 4C≦X => B=6 => Goto 1:
M-5C => B=4 => X≦3C => Goto
1: M=5C => B=1 => Goto 1:
B=5 => D=E3 => Goto 1: B=2 => X<5C => Goto 1: B=4 => X<3C => Goto 1:
B=5 => X<2C => Goto
1: Fix3: B◢ A=1 => 80M- => B-4 =>
D-70→D:
A=1 => B=3 =>
14+D→D: A=2 => 5CM- => B-4 =>
D-5C→D:
A=2 => B=3 => C+D→D: A=4 => 3CM-: A=5 => 2CM- => C+Y→Y:
B=1 => A-4 => Y-70→Y: B=1 => X-80→X: B=2 => A-4 => Y-5C→Y:
B=2 => X-5C→X: B=4 => X-3C→X: B=5=>
C+D→D: B=5=>X-2C→X:
B=1 => A=3 =>
14+Y→Y: B=2 => A=3 => C+Y→Y: A=6 => 50M+:
B=6 => 50+X→X: CM+:C+X→X: M>5C => 5C→M: X>5C => 5C→X:
Y>E3 => E3→Y:
D>E3 => E3→D: D<0 => 0→D:Y<0 => 0→Y:Y+M÷E3◢
D+X÷E3◢ DY => Goto 0: D => BAD◢ Y=>GD◢ Norm 1
```

## 第二個程式 · 635 bytes

```
E2→C: Fix3: E3→Y: 2C→M: Y+M÷E3◢ Y→D: M→X: D+X÷E3◢ Lbl 0:
?→A: (A>6) + (A≠1)(A≠3)(M<C(7-A => Goto 0: Fix 0: Lbl
1:
Rnd( 6Ran#+.5→B: M-5C => X≦4C=> 3C≦D => B=4 => Goto 1:
M-5C => B=4 => Goto 1: D≦3C => 3C≦X => B=6 => Goto
1:
D≦2C => Y>D => 2C≦X => 5→B: D≦C => D>Y => 1→B:
D≦C => X=5C => Y≦5C => 2→B: M-5C => X≦4C => D<C => B=3 => Goto
1:
4C≦X => B=6 => Goto 1: 3C≦Y => B=1 => Goto 1: M=5C => D<5C => B=1 =>
Goto 1: X=5C => B=3 => Goto 1:
D>7C => B=5 => Goto 1: B=2 => X<5C =>
Goto 1: B=4 => X<3C => Goto 1: B=5 => X<2C => Goto
1: Fix3: B◢
A=1 => 80M- =>B-4 =>
D-70→D: A=1 => B=3 =>
14+D→D:
A=2 => 5CM- => B-4 =>
D-5C→D: A=2 => B=3 => C+D→D:
A=4 => 3CM-: A=5 => 2CM- => C+Y→Y: B=1 => A-4 => Y-70→Y:
B=1 => X-80→X: B=2 => A-4 => Y-5C→Y:
B=2 => X-5C→X: B=4 => X-3C→X: B=5 => C+D→D: B=5 => X-2C→X: B=1 => A=3
=> 14+Y→Y: B=2 => A=3 => C+Y→Y: A=6 => 50M+: B=6 => 50+X→X: CM+:
C+X→X: M>5C => 5C→M: X>5C => 5C→X: Y>E3 => E3→Y:
D>E3 => E3→D:
D<0 => 0→D: Y<0 => 0→Y: Y+M÷E3◢ D+X÷E3◢ DY => Goto 0: D => BAD◢
Y => GD◢ Norm 1
B=5 => X<2C => Goto 1: Fix3: B◢
A=1 => 80M- => B-4 => D-70→D: A=1 => B=3 => 14+D→D:
A=2 => 5CM- => B-4 => D-5C→D: A=2 => B=3 => C+D→D:
A=4 => 3CM-: A=5 => 2CM- => C+Y→Y:
```

## 第一個程式 · 542 bytes

```
E2→C: Fix3: E3→Y: 2C→M: Y+M÷E3◢ Y→D: M→X: D+X÷E3◢
Lbl 0: ?→A: A>6 => Goto
0: A=2 => M<5C => Goto 0:
A=4 => M<3C => Goto 0: A=5 => M<2C => Goto 0: Fix 0: Lbl 1:
Rnd( 6Ran#+.5→B: X=5C => B=3 => Goto 1: 4C≦X => B=6 => Goto 1:
M-5C => B=4 => X≦3C => Goto
1: M=5C => B=1 => Goto 1:
B=5 => D=E3 => Goto 1: B=2 => X<5C => Goto 1: B=4 => X<3C => Goto 1:
B=5 => X<2C => Goto
1: Fix3: B◢ A=1 => B-4 => D-70→D: A=1 => 80M-:
A=2 => B-4 => D-5C→D: A=2 => 5CM-: A=1 => B=3 =>
14+D→D:
A=2 => B=3 => C+D→D: A=4 => 3CM-: A=5 => C+Y→Y: A=5 => 2CM-:
B=1 => A-4 => Y-70→Y: B=1 => X-80→X: B=2 => A-4 => Y-5C→Y:
B=2 => X-5C→X: B=4 => X-3C→X: B=5=>
C+D→D: B=5=>X-2C→X:
B=1 => A=3 =>
14+Y→Y: B=2 => A=3 => C+Y→Y: A=6 => 50M+:
B=6 => 50+X→X: CM+:C+X→X: M>5C => 5C→M: X>5C => 5C→X:
Y>E3 => E3→Y:
D>E3 => E3→D: D<0 => 0→D:Y<0 => 0→Y:Y+M÷E3◢
D+X÷E3◢ DY => Goto 0: D => BAD◢ Y=>GD◢ Norm 1
```

## 第二個程式 · 662 bytes

```
E2→C: Fix3: E3→Y: 2C→M: Y+M÷E3◢ Y→D: M→X: D+X÷E3◢ Lbl 0:
?→A: A>6 => Goto
0: A=2 => M<5C => Goto 0: A=4 => M<3C => Goto 0:
A=5 => M<2C => Goto 0: Fix 0: Lbl
1: Rnd( 6Ran#+.5→B: M-5C => X≦4C
=> 3C≦D => B=4 => Goto 1: M-5C => B=4 => Goto 1: D≦3C => 3C≦X =>
B=6 => Goto
1: D≦2C => Y>D => 2C≦X => 5→B: D≦C => D>Y => 1→B:
D≦C => X=5C => Y≦5C => 2→B: M-5C => X≦4C => D<C => B=3 => Goto
1:
4C≦X => B=6 => Goto 1: 3C≦Y => B=1 => Goto 1: M=5C => D<5C => B=1 =>
Goto 1: X=5C => B=3 => Goto 1:
D>7C => B=5 => Goto 1: B=2 => X<5C =>
Goto 1: B=4 => X<3C => Goto 1: B=5 => X<2C => Goto
1: Fix3: B◢A=1 =>
B-4 => D-70→D: A=1 => 80M-: A=2 => B-4 => D-5C→D: A=2 => 5CM-:
A=1 => B=3 =>
14+D→D: A=2 => B=3 => C+D→D: A=4 => 3CM-: A=5 => C+Y→Y:
A=5 => 2CM-: B=1 => A-4 => Y-70→Y: B=1 => X-80→X: B=2 => A-4 => Y-5C→Y:
B=2 => X-5C→X: B=4 => X-3C→X: B=5 => C+D→D: B=5 => X-2C→X: B=1 => A=3
=> 14+Y→Y: B=2 => A=3 => C+Y→Y: A=6 => 50M+: B=6 => 50+X→X: CM+:
C+X→X: M>5C => 5C→M: X>5C => 5C→X: Y>E3 => E3→Y:
D>E3 => E3→D:
D<0 => 0→D: Y<0 => 0→Y: Y+M÷E3◢ D+X÷E3◢ DY => Goto 0: D => BAD◢
Y => GD◢ Norm 1
```

## 玩法與說明（原文）

程式由網友 wimwim 提供，網友 roviury
提供簡化意見。

遊戲是玩家與電腦進行對戰，第二個程式較長(改進版)，電腦的實力亦較強。

程式更新日期: 2011年6月18日

注意: E 是按 EXP 。

註1: 出招方式輸入1-6整數
1: 標準攻擊 (對方HP減70, 但己方MP減少 80)
2: 必殺技 (對方HP減500, 但己方MP減少500)
3: 防禦 (減少己方HP損失20%)
4: 100%防禦 (己方HP不會有任何損失, 但己方MP減少300)
5: 恢復HP (己方HP恢復100, 但己方MP減少200)
6: 恢復MP (己方MP恢復50)

註2: 每個回合 MP數值會自動增加100

註3: 當電腦的HP數值減少至0，而已方的HP大於0則獲勝(顯示GD)。當己方的HP數值減少至0，而電腦的HP大於0則戰敗(顯示BAD)。當電腦及己方的HP數值同時減少至0則表示打成平手，這時不會顯示GD或BAD，程式會直接終止(顯示Norm
1)。

操作示範:

按 Prog 1 (顯示1000.200，即玩家的HP為1000及MP為200)

EXE (顯示1000.200，即電腦的HP為1000及MP為200)

EXE (顯示A?表示輸入出招選擇(1-6的整數)，若果選用1)

1 EXE (顯示B表示電腦出招的選擇(1-6))

EXE (顯示己方的HP及MP)

EXE (顯示電腦的HP及MP)

.....繼續遊戲...

若果出現GD表示獲勝，若果出現BAD表示戰敗，若果沒有出現GD或BAD，而出現程式直接終止(顯示Norm 1)表示打成平手。

程式舊版

程式由網友 wimwim 提供。

網友提供程式日期: 2009年6月12日

注意: E 是按 EXP 。

---

*源碼未經改動，原樣轉錄。見 [NOTICE](../NOTICE.md)。*
