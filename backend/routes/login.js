var express = require("express");
var router = express.Router();

var mysql = require("mysql");
const config = require("../public/javascripts/db_config.js");

router.post("/", function (req, res, next) {
  //フロントエンドからのパラメータ取得
  const userId = req.body.userId;
  const password = req.body.passowrd;

  //コネクションの用意
  const connection = mysql.createConnection(config.mysql_setting);
  connection.query(
    config.loginSQL,
    [userId, password],

    function (error, results, fields) {
      console.log(results);
      if (results.length >= 1) {
        res.send("OK");
      } else {
        res.send("NG");
      }
    }
  );
});

module.exports = router;
