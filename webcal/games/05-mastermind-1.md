---
title: "机妙算(MindMaster)游戏"
english_title: "MindMaster I"
slug: mastermind-1
source: http://webcal.freehostia.com/casio.fx-50FH/masterMind.htm
programs: 2
declared_bytes: 320
platform: "CASIO fx-50FH / fx-50F PLUS / fx-3650P II"
authors:
  - "WebCal 站主"
dates:
  - "程式编写日期: 2007年9月17日"
license: "see NOTICE.md — code unmodified, rights with original authors"
---

# 机妙算(MindMaster)游戏

**MindMaster I** · 2 program(s) · [original page (masterMind.htm)](http://webcal.freehostia.com/casio.fx-50FH/masterMind.htm)

## 署名 / Credits

**作者：** WebCal 站主

**程式编写日期: 2007年9月17日**

## 第一个程式 · 154 bytes

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

## 第二个程式 · 166 bytes

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

## 玩法与说明（原文）

机妙算(MindMaster)游戏 I

程式编写日期: 2007年9月17日

程式需要在 SD 模式下执行，因此在选择新程式位置后，按 4 选用SD模式。

注意: 蓝色的英文字为统计模式中的变数(Σx 按 shift 1 2 )

按 Prog 1 再按 1 EXE 2 EXE 3 EXE 4 EXE (1, 2, 3,
4为猜测的数值，这时会显示一个提示数值，十位的数值代表位置及数值正确，个位数值代表数值正确但位置错误)

再输入其它猜测数值，直至猜中四个数值为止，若果是第一个程式，最后会显示π值。若果是第二个程式，最后会显示猜测的总次数。

若果使用第二个程式，游戏完结后，请按Mode 1返回正常模式。

---

*源码未经改动，原样转录。见 [NOTICE](../NOTICE.md)。*
