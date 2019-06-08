var express = require("express");
var router = express.Router();
var user = require("../model/user");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

function something() {
  console.log("workedddd");
}
router.post("/", function(req, res, next) {
  console.log(req.body);
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var email = req.body.email;
  var password = req.body.password;
  var userData = new user({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password
  });
  console.log(userData);
  userData.save(function(err) {
    if (err) throw err;
    console.log("inserted successfully");
    //res.send("inserted successfully");
    res.render("success");
  });
  console.log("worked");
});
module.exports = router;
