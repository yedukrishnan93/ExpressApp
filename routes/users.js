var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var user = require("../model/user");
var mysql = require("mysql");
const path = require("path");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "usxs",
  database: "sample"
});

connection.connect(err => {
  if (err) throw err;
  console.log("connected");
});
var query =
  "CREATE TABLE IF NOT EXISTS `user` (`id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,`username` varchar(255) DEFAULT NULL ,`email` varchar(255) DEFAULT NULL ,`password` varchar(255) DEFAULT  NULL,PRIMARY KEY (`id`))";
connection.query(query, function(err, result) {
  if (err) throw err;
  console.log(result);
});
var query2 = "insert into user set ?";
router.get("/", (req, res, next) => {
  /*  data = {
    username: req.body.name,
    email: req.body.email,
    password: req.body.password
  };
  connection.query(query2, data, (err, result) => {
    if (err) throw err;
    res.send(result);
  }); */
  res.sendFile("/views/index.html");
});
module.exports = router;
