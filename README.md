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

````bash
git clone https://github.com/tsubasa-devx/contact-form-app.git
cd contact-form-app

### ② 依存関係インストール

```bash
npm install
````
