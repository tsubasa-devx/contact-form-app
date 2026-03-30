import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// サーバー作成
const app = express();

// dirnameを作る
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// ミドルウェア
// publicフォルダに絶対pathをつくる
// formのデータ受け取り
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

// api
// トップページを表示
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// /confirmを作る
app.post('/confirm', (req, res) => {
  //省略形
  const { name, email, message } = req.body;
  // const name = req.body.name
  // const email = req.body.email
  // const message = req.body.message

  res.redirect(
    `/confirm.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`,
  );
});

// /thanks を作る
app.post('/thanks', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"お問い合わせフォーム" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: 'お問い合わせが届きました',
      text: `名前: ${name}
      メール: ${email}
      内容: ${message}`,
    });

    res.sendFile(path.join(__dirname, 'public', 'thanks.html'));
  } catch (error) {
    console.error(error);
    res.send('メール送信失敗');
  }
});

// サーバー起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
