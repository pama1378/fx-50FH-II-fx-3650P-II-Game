---
title: "对战游戏(II)"
english_title: "Fighting game II"
slug: fighting-game-2
source: http://webcal.freehostia.com/casio.fx-50FH/fighting2.htm
programs: 2
declared_bytes: 919
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "wimwim"
credits:
  - "程式由网友 wimwim 提供，网友 roviury\n提供简化意见。…"
  - "程式由网友 wimwim 提供。"
dates:
  - "程式更新日期: 2012年12月25日"
  - "网友提供程式日期: 2009年6月18日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 对战游戏(II)

**Fighting game II** · 2 program(s) · [original page (fighting2.htm)](http://webcal.freehostia.com/casio.fx-50FH/fighting2.htm)

## 署名 / Credits

**作者：** wimwim

原页署名原文：

> 程式由网友 wimwim 提供，网友 roviury
提供简化意见。…

> 程式由网友 wimwim 提供。

**程式更新日期: 2012年12月25日 / 网友提供程式日期: 2009年6月18日**

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

## 玩法与说明（原文）

程式由网友 wimwim 提供，网友 roviury
提供简化意见。这个程式需要两个玩家(人对人版本，由两个玩家互相对战)，为了使游戏公平，第一个玩家输入对战招式时(1-6数值)，请不要给第二个玩家看见，第二个玩家输入对战招式后，程式会显示两方所使用的招式、HP值及MP值。

程式更新日期: 2012年12月25日

注意: E 是按 EXP 。

注1: 出招方式输入1-6整数
1: 标准攻击 (对方HP减70, 但己方MP减少 80)
2: 必杀技 (对方HP减500, 但己方MP减少500)
3: 防御 (减少己方HP损失20%)
4: 100%防御 (己方HP不会有任何损失, 但己方MP减少300)
5: 恢复HP (己方HP恢复100, 但己方MP减少200)
6: 恢复MP (己方MP恢复50)

注2: 每个回合 MP数值会自动增加100

注3: 当对方的HP数值减少至0，而已方的HP大于0则获胜。当己方的HP数值减少至0，而对方的HP大于0则战败。
第一个玩家获胜会显示1-GD，第二个玩家获胜会显示2-GD，当双方的HP数值同时减少至0则表示打成平手，这时不会显示1-GD或2-GD，程式会直接终止(显示Norm
1)。

操作示范:

按 Prog 1 (显示1000.200，即第一个玩家的HP为1000及MP为200)

EXE (显示1000.200，即第二个玩家的HP为1000及MP为200)

EXE (显示A?表示第一个玩家输入出招选择(1-6的整数)，若果选用1)

1 EXE (显示B?表示第二个玩家输入出招选择(1-6的整数)，若果选用1)

1 EXE (显示第一个玩家的HP及MP)

EXE (显示第二个玩家的HP及MP)

.....继续游戏...直至完结

程式旧版

程式由网友 wimwim 提供。

网友提供程式日期: 2009年6月18日

注意: E 是按 EXP 。

---

*源码未经改动，原样转录。见 [NOTICE](../NOTICE.md)。*
