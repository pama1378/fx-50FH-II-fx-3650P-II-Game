# 贡献指南

## 收录标准

只收两类：

1. **转录**（`games/`）— 从 WebCal 或其他来源原样收录。必须附出处网址与原作者署名，**不得改动程式码**。
2. **原创**（`original/`）— 自己写的。front matter 注明 `author:` 与 `license:`。

## 转录新条目

1. 在 `games/` 新增 `NN-slug.md`，编号接续
2. Front matter 至少要有 `title`、`source`、`credits`、`declared_bytes`
3. 程式码放 fenced block，**逐字转录**
4. 更新 `index.json` 与 README 表格

## 原创新条目

1. 放进 `original/`，front matter 写 `author:` 和 `license:`（建议 MIT 或 CC0）
2. 控制在 680 bytes 内，并写下实际位元组数
3. 说明演算法要点

## 严禁

- 修改转录来的程式码，哪怕只是把 `→` 换成 `->`
- 拿掉署名或改写作者名
- 对转录内容重新授权

## 位元组数怎么量

键入完成后看 `Prog` 列表的位元组显示，或逐字元数。漏一个 `:` 就差 1 byte。
