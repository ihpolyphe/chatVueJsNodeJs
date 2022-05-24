exports.mysql_setting = {
  host: "localhost",
  user: "dev",
  password: "Route246",
  database: "chat_app_db",
  timezone: "jst",
};

exports.loginSQL =
  "SELECT * from user_infomations where user_id=? AND password=?";
exports.insertRecordSQL =
  "INSERT INTO chat_histories(history_index, user_id,message,date_time) VALUES(?,?,?,?)";
exports.getHistoriesSQL = "SELECT * FROM chat_histories";
exports.deleteHsitorySQL = "TRUNCATE TABLE chat_histories";
