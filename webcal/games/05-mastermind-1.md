---
title: "機妙算(MindMaster)遊戲"
english_title: "MindMaster I"
slug: mastermind-1
source: http://webcal.freehostia.com/casio.fx-50FH/masterMind.htm
programs: 2
declared_bytes: 320
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "WebCal 站主"
dates:
  - "程式編寫日期: 2007年9月17日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 機妙算(MindMaster)遊戲

**MindMaster I** · 2 program(s) · [original page (masterMind.htm)](http://webcal.freehostia.com/casio.fx-50FH/masterMind.htm)

## 署名 / Credits

**作者：** WebCal 站主

**程式編寫日期: 2007年9月17日**

## 第一個程式 · 154 bytes

```
ClrMemory: Fix 0: Lbl 0: Rnd( 9Ran#→A:
Rnd( 9Ran#→B: Rnd( 9Ran#→C:
Rnd( 9Ran#→D: (A - B)(A - C)(A - D)(B - C)
(B - D)(C - D)=0 => Goto 0: Norm 1: Lbl 1:
X + 1→X: ?→Y: 10(Y=AM+: Y=BM+:
Y=CM+:
Y=DM+: D→Y: A→D: B→A: C→B: Y→C: 0→Y:
X - 4 => Goto 1: 0→X: MM-◢
Ans - 40 => Goto 1: π
```

## 第二個程式 · 166 bytes

```
ClrStat: Fix 0: Lbl 0: Rnd( 9Ran#→A:
Rnd( 9Ran#→B: Rnd( 9Ran#→C:
Rnd( 9Ran#→D: (A - B)(A - C)(A - D)(B - C)
(B - D)(C - D)=0 => Goto 0: Norm 1: Lbl 2:
Rec(0, 0: Lbl 1:
X + 1→X: ?→M: Y + 10(M=A)+(M=B)+(M=C)+
(M=D→Y: D→M: A→D: B→A: C→B: M→C: 0→M:
X - 4 => Goto 1: 1 DT:
Y◢ Ans - 40 => Goto 2:
Σx
```

## 玩法與說明（原文）

機妙算(MindMaster)遊戲 I

程式編寫日期: 2007年9月17日

程式需要在 SD 模式下執行，因此在選擇新程式位置後，按 4 選用SD模式。

注意: 藍色的英文字為統計模式中的變數(Σx 按 shift 1 2 )

按 Prog 1 再按 1 EXE 2 EXE 3 EXE 4 EXE (1, 2, 3,
4為猜測的數值，這時會顯示一個提示數值，十位的數值代表位置及數值正確，個位數值代表數值正確但位置錯誤)

再輸入其它猜測數值，直至猜中四個數值為止，若果是第一個程式，最後會顯示π值。若果是第二個程式，最後會顯示猜測的總次數。

若果使用第二個程式，遊戲完結後，請按Mode 1返回正常模式。

---

*源碼未經改動，原樣轉錄。見 [NOTICE](../NOTICE.md)。*
