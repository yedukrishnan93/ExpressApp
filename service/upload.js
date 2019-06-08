var fs = require("fs");
var path = require("path");
var async = require("async");
var cmd = require("node-cmd");
var mysql = require("mysql");
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "usxs",
  database: "sample"
});
var query1 =
  "CREATE TABLE IF NOT EXISTS `media`( `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,`media_name` VARCHAR(20) NOT NULL,`media_path` VARCHAR(50) NOT NULL ,PRIMARY KEY(`id`))";

conn.query(query1, (err, result) => {
  if (err) throw err;
  console.log("created", result);
});

var query2 = "insert into media set  ?";

(exports.fileupload = function(req, res) {
  console.log(req.file);
  var fileArray = req.file;
  fs.readFile(req.file.path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
  var data = {
    media_name: req.file.filename,
    media_path: req.file.path
  };
  conn.query(query2, data, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
  // res.send({ success: "successfully stored" });
  res.render("success", { msg: "successfully stored" });
}),
  function(err) {
    if (err) {
      console.log("error", err);
    } else {
      console.log("finished");
      res.render("success", { msg: "successfully stored" });

      cmd.run("rm -rf ./fileprint");
    }
  };
