# ✦ Portfolio Website — Akaru Endo

自然言語処理（NLP）と情報理論を探究する学生のための、アバンギャルドでモダンな個人ポートフォリオサイトです。  
タイポグラフィを中心としたエモーショナルなデザイン（Kinetic Typography）と、数式が漂うインタラクティブなアニメーション体験を提供します。

---

## ✨ 主な特徴とデザインコンセプト

* **数式バックグラウンド（Math Drift Animation）**  
  情報理論やフーリエ変換などの数式（`I(X;Y)`, `D_KL` 等）が背景を浮遊する、NLP・学術アプローチを象徴する視覚演出。
* **Kinetic Typography & Dynamic Motion**  
  CSS Grid/Flexbox と JavaScript を駆使した巨大タイポグラフィ、無限ループのマーキー（Ticker）、スプリットアニメーション。
* **カーソル & マグネティックインタラクション**  
  マウスカーソルに追従するカスタムカーソルと、ボタンやリンクに吸い付く「Magnetic」ホバーエフェクト。
* **ダーク / ライティングコントラスト**  
  `mix-blend-mode: difference` や蛍光カラー（Lime `#d8ff36`）を差し色にした、メリハリのあるモノトーン・ダークテーマ。
* **完全レスポンシブ対応**  
  PCの大画面からスマートフォンまで、レイアウトが崩れない可変グリッド設計。

---

## 🛠 使用技術 (Tech Stack)

| カテゴリ | 技術 / 手法 |
| :--- | :--- |
| **Markup** | HTML5 (セマンティックタグ構造, BEM記法) |
| **Styling** | CSS3 (Custom Properties, CSS Grid, Flexbox, Keyframe Animations, `mix-blend-mode`) |
| **Scripting** | Vanilla JavaScript (ES6+, DOM Manipulation, Scroll/Cursor Events) |
| **Typography** | [Manrope](https://fonts.google.com/specimen/Manrope), [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif), [DM Mono](https://fonts.google.com/specimen/DM+Mono) |

---

## 📁 ディレクトリ構成

```text
.
├── index.html        # メインのHTML構造
├── style.css         # スタイルシート（レスポンシブ・アニメーション含む）
├── script.js         # カーソル追従、数式生成、ローダー等の制御スクリプト
└── images/           # ビジュアル・背景用画像アセット
    ├── image1.avif
    └── image3.jpg