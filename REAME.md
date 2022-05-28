# chat with Vur.js+Node.js

チャット機能 with Vue.js

参考:[Socket.io, Express.js と Vue.js を利用したチャットアプリの作り方](https://reffect.co.jp/html/socket-io-express-js-vue-js-chat#vuejs)

# 動かし方

```
node index.js
```

ブラウザで`localhost:3000`へ接続

# install

サーバ立てる

- npm install express

  ページのリロードでソースを更新

- npm install -save-dev nodemon

  双方向通信フレームワーク

- npm install socket.io

# ライフサイクルフック

Vue.js のインスタンス生成から破棄（ライフサイクル）までに実行される関数
https://qiita.com/KWS_0901/items/5105677462f69f197ad2

# やりたいこと

- Node.js でログイン、ログアウト機能
- ログイン、ログアウト情報とチャット内容を別にする
- Heroku へデプロイ
- ページ階層作ってほかの機能とか盛り込む
