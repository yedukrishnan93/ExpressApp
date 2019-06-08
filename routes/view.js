var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var user = require("../model/user");
var path = require("path");
var http = require("http");
var io = require("socket.io")(http);
/* mongoose.connect(
  "mongodb://127.0.0.1:27017/sample",
  { useNewUrlParser: true },
  function(er) {
    if (er) throw er;
    console.log("connected successfully");
  }
); */
router.get("/", function(req, res, next) {
  res.sendFile(path.join(__dirname, "../public/views", "index.html"));
});

io.on("connection", function(socket) {
  console.log("a user connected");
});

module.exports = router;
