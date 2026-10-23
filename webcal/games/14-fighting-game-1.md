---
title: "对战游戏(I)"
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
  - "程式由网友 wimwim 提供，网友 roviury\n提供简化意见。"
  - "程式由网友 wimwim 提供。"
dates:
  - "程式更新日期: 2011年6月18日"
  - "网友提供程式日期: 2009年6月12日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 对战游戏(I)

**Fighting game I** · 4 program(s) · [original page (fighting.htm)](http://webcal.freehostia.com/casio.fx-50FH/fighting.htm)

## 署名 / Credits

**作者：** wimwim

*roviury 提供简化意见*

原页署名原文：

> 程式由网友 wimwim 提供，网友 roviury
提供简化意见。

> 程式由网友 wimwim 提供。

**程式更新日期: 2011年6月18日 / 网友提供程式日期: 2009年6月12日**

## 第一个程式 · 515 bytes

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

## 第二个程式 · 635 bytes

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

## 第一个程式 · 542 bytes

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

## 第二个程式 · 662 bytes

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

## 玩法与说明（原文）

程式由网友 wimwim 提供，网友 roviury
提供简化意见。

游戏是玩家与电脑进行对战，第二个程式较长(改进版)，电脑的实力亦较强。

程式更新日期: 2011年6月18日

注意: E 是按 EXP 。

注1: 出招方式输入1-6整数
1: 标准攻击 (对方HP减70, 但己方MP减少 80)
2: 必杀技 (对方HP减500, 但己方MP减少500)
3: 防御 (减少己方HP损失20%)
4: 100%防御 (己方HP不会有任何损失, 但己方MP减少300)
5: 恢复HP (己方HP恢复100, 但己方MP减少200)
6: 恢复MP (己方MP恢复50)

注2: 每个回合 MP数值会自动增加100

注3: 当电脑的HP数值减少至0，而已方的HP大于0则获胜(显示GD)。当己方的HP数值减少至0，而电脑的HP大于0则战败(显示BAD)。当电脑及己方的HP数值同时减少至0则表示打成平手，这时不会显示GD或BAD，程式会直接终止(显示Norm
1)。

操作示范:

按 Prog 1 (显示1000.200，即玩家的HP为1000及MP为200)

EXE (显示1000.200，即电脑的HP为1000及MP为200)

EXE (显示A?表示输入出招选择(1-6的整数)，若果选用1)

1 EXE (显示B表示电脑出招的选择(1-6))

EXE (显示己方的HP及MP)

EXE (显示电脑的HP及MP)

.....继续游戏...

若果出现GD表示获胜，若果出现BAD表示战败，若果没有出现GD或BAD，而出现程式直接终止(显示Norm 1)表示打成平手。

程式旧版

程式由网友 wimwim 提供。

网友提供程式日期: 2009年6月12日

注意: E 是按 EXP 。

---

*源码未经改动，原样转录。见 [NOTICE](../NOTICE.md)。*
