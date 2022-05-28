//フレームワークのインスタンス生成
var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function (socket) {
  socket.emit("chat message", "ようこそチャットアプリへ");
  socket.broadcast.emit("chat message", "新しいユーザがログインしました。");
  socket.on("disconnect", function () {
    io.emit("chat message", "ユーザの接続がログアウトしました。");
  });
  socket.on("chat message", function (msg) {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });
});

server.listen(3000, function () {
  console.log("listening on *:3000");
});
