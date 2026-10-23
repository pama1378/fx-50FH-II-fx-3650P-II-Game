---
title: "猜数字游戏"
english_title: "Guess the number game"
slug: guess-the-number-game
source: http://webcal.freehostia.com/casio.fx-50FH/GuessNumber2.htm
programs: 1
declared_bytes: 182
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "lugia249"
credits:
  - "程式由网友\nlugia249 提供，玩家输入三个不同整数(1-30)，猜测电脑的搅珠结果。"
dates:
  - "更新日期: 2011年1月27日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 猜数字游戏

**Guess the number game** · 1 program(s) · [original page (GuessNumber2.htm)](http://webcal.freehostia.com/casio.fx-50FH/GuessNumber2.htm)

## 署名 / Credits

**作者：** lugia249

原页署名原文：

> 程式由网友
lugia249 提供，玩家输入三个不同整数(1-30)，猜测电脑的搅珠结果。

**更新日期: 2011年1月27日**

## 程式 · 182 bytes

```
MM-: While 1: M◢ 5M-:
?→A: ?→B: ?→C: Fix 0:
Rnd(30Ran# + . 5→D: Lbl 1: Rnd(30Ran#
+ . 5→X:
X=D => Goto 1: Rnd(30Ran# + . 5→Y: Y=D
=> Goto 1:
Y=X => Goto 1: D+X÷60+Y÷602: Norm 2: Anso◢
(X=C) + (Y=A) + (Y=B) + (Y=CM+:
A+B+C=D+X+Y => ABC=DXY => 225M+:
WhileEnd
```

## 玩法与说明（原文）

程式由网友
lugia249 提供，玩家输入三个不同整数(1-30)，猜测电脑的搅珠结果。

更新日期: 2011年1月27日

注意: Anso 是按 Ans
o,,,

25( (D=A) + (D=B) + (D=C) + (X=A) + (X=B) +

注: 每猜一次数字后，程式会抧除 $5 作为下注费用，若果猜中一些数字或三个数字全部猜中，则按下列规则获得奖金。

(i) 猜中其中一个数字，奖金为$25 (实际赢 $20)

(ii) 猜中其中二个数字，奖金为$50 (实际赢 $45)

(iii) 猜中三个数字(全中)，奖金为$300 (实际赢 $295)

操作示范:

1. 先按 Prog 1 执行程式，这时会显示M及0表示现有的总金额。

2. 再输入三个不同1至30的整数(猜测的数值)，例如按 23 EXE 24 EXE 25EXE。

3. 程式会以度分秒形式显示三个数值的搅珠结果，假定是24, 23,
21则会显示24o23o21

4. 再按 EXE 会显示M值 45 (假设猜中两个数值，所以现有总金额变为 $45)

5. 再按 EXE 会继续下一次猜数值游戏，若不想继续游戏可按 AC 终止程式，否则将由步骤2
开始再重复进行游戏。

---

*源码未经改动，原样转录。见 [NOTICE](../NOTICE.md)。*
