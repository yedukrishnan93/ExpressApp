var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var path = require("path");
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "usxs",
  database: "sample"
});

conn.connect(err => {
  if (err) throw err;
  console.log("connected");
});

router.get("/", (req, res) => {
  // res.render("login", { title: "Login" });
  res.sendFile(path.join(__dirname, "../public/views", "login.html"));
});

router.post("/", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  var query = `SELECT COUNT(*) FROM user WHERE username = '${username}' AND password = '${password}' `;
  conn.query(query, (err, result) => {
    if (err) throw err;
    console.log(result[0]["COUNT(*)"]);
    if (result[0]["COUNT(*)"] == 1) {
      //res.send("true");
      res.render("success", { msg: "login successfull" });
    } else {
      res.render("success", { msg: "login Failed" });
      //res.send("false");
    }
  });
});

module.exports = router;
