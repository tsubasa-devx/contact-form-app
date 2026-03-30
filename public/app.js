// URLのパラメータを取りやすくする
// window.location.search=今のURLの?以降を取る。
const params = new URLSearchParams(window.location.search);

const name = params.get('name');
const email = params.get('email');
const message = params.get('message');

document.getElementById('name').textContent = `名前: ${name}`;
document.getElementById('email').textContent = `メールアドレス: ${email}`;
document.getElementById('message').textContent = `お問い合わせ内容: ${message}`;

document.getElementById('hiddenName').value = name;
document.getElementById('hiddenEmail').value = email;
document.getElementById('hiddenMessage').value = message;
