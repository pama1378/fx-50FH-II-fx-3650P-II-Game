---
title: "猜數字遊戲"
english_title: "Guess the number game"
slug: guess-the-number-game
source: http://webcal.freehostia.com/casio.fx-50FH/GuessNumber2.htm
programs: 1
declared_bytes: 182
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "lugia249"
credits:
  - "程式由網友\nlugia249 提供，玩家輸入三個不同整數(1-30)，猜測電腦的攪珠結果。"
dates:
  - "更新日期: 2011年1月27日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 猜數字遊戲

**Guess the number game** · 1 program(s) · [original page (GuessNumber2.htm)](http://webcal.freehostia.com/casio.fx-50FH/GuessNumber2.htm)

## 署名 / Credits

**作者：** lugia249

原頁署名原文：

> 程式由網友
lugia249 提供，玩家輸入三個不同整數(1-30)，猜測電腦的攪珠結果。

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

## 玩法與說明（原文）

程式由網友
lugia249 提供，玩家輸入三個不同整數(1-30)，猜測電腦的攪珠結果。

更新日期: 2011年1月27日

注意: Anso 是按 Ans
o,,,

25( (D=A) + (D=B) + (D=C) + (X=A) + (X=B) +

註: 每猜一次數字後，程式會抧除 $5 作為下注費用，若果猜中一些數字或三個數字全部猜中，則按下列規則獲得獎金。

(i) 猜中其中一個數字，獎金為$25 (實際贏 $20)

(ii) 猜中其中二個數字，獎金為$50 (實際贏 $45)

(iii) 猜中三個數字(全中)，獎金為$300 (實際贏 $295)

操作示範:

1. 先按 Prog 1 執行程式，這時會顯示M及0表示現有的總金額。

2. 再輸入三個不同1至30的整數(猜測的數值)，例如按 23 EXE 24 EXE 25EXE。

3. 程式會以度分秒形式顯示三個數值的攪珠結果，假定是24, 23,
21則會顯示24o23o21

4. 再按 EXE 會顯示M值 45 (假設猜中兩個數值，所以現有總金額變為 $45)

5. 再按 EXE 會繼續下一次猜數值遊戲，若不想繼續遊戲可按 AC 終止程式，否則將由步驟2
開始再重複進行遊戲。

---

*源碼未經改動，原樣轉錄。見 [NOTICE](../NOTICE.md)。*
