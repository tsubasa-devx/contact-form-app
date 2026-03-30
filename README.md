# Contact Form App

Node.js / Express を使って作成したお問い合わせフォームです。  
入力 → 確認 → 送信完了の一連の流れと、メール送信機能を実装しています。

---

## 🚀 機能

- お問い合わせフォーム（入力画面）
- 確認画面
- 完了画面
- Nodemailer を使ったメール送信
- dotenv による環境変数管理
- .env を gitignore で除外（セキュリティ対応）

---

## ⚠️ 注意事項

このアプリは Render の無料プランでデプロイしています。  
そのため、一定時間アクセスがないとサーバーがスリープ状態になり、  
初回アクセス時に起動まで数十秒ほどかかる場合があります。

---

## 🛠 使用技術

- Node.js
- Express
- Nodemailer
- dotenv
- HTML / CSS / JavaScript

---

## 📁 フォルダ構成

contact-form-app/
├── public/
│ ├── index.html
│ ├── confirm.html
│ ├── thanks.html
│ └── app.js
├── .env
├── .env.example
├── .gitignore
├── index.js
└── package.json

---

## ⚙️ セットアップ

### ① クローン

```bash
git clone https://github.com/tsubasa-devx/contact-form-app.git
cd contact-form-app
```

### ② 依存関係インストール

npm install

### ③ .env 作成

.env.example を参考に .env を作成

```bash
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-app-password
```

### ④ サーバー起動

npm start

### ⑤ ブラウザでアクセス

http://localhost:3000

---

## 📧 メール送信について

- Nodemailer を使用して Gmail から送信
- 送信元は自分のメールアドレス
- 返信先（replyTo）はユーザーのメールアドレス

---

## 🔐 セキュリティ

- .env は GitHub にアップロードしないよう .gitignore に設定
- 認証情報は環境変数で管理

---

## 💡 学習ポイント

- Express のルーティング（GET / POST）
- フォーム送信の流れ
- req.body の使い方
- フロントとバックエンドの連携
- メール送信の仕組み（Nodemailer）

---

## ✍️ 作成者

Tsubasa Otake

GitHub: https://github.com/tsubasa-devx
