# 貢獻指南

## 收錄標準

只收兩類：

1. **轉錄**（`games/`）— 從 WebCal 或其他來源原樣收錄。必須附出處網址與原作者署名，**不得改動程式碼**。
2. **原創**（`original/`）— 自己寫的。front matter 註明 `author:` 與 `license:`。

## 轉錄新條目

1. 在 `games/` 新增 `NN-slug.md`，編號接續
2. Front matter 至少要有 `title`、`source`、`credits`、`declared_bytes`
3. 程式碼放 fenced block，**逐字轉錄**
4. 更新 `index.json` 與 README 表格

## 原創新條目

1. 放進 `original/`，front matter 寫 `author:` 和 `license:`（建議 MIT 或 CC0）
2. 控制在 680 bytes 內，並寫下實際位元組數
3. 說明演算法要點

## 嚴禁

- 修改轉錄來的程式碼，哪怕只是把 `→` 換成 `->`
- 拿掉署名或改寫作者名
- 對轉錄內容重新授權

## 位元組數怎麼量

鍵入完成後看 `Prog` 列表的位元組顯示，或逐字元數。漏一個 `:` 就差 1 byte。
