var mongoose = require("mongoose");
var userModel = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String
});

var user = mongoose.model("user", userModel);
module.exports = user;
