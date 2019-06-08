//var mongoose = require("mongoose");
var express = require("express");
var user = require("../../routes/users");
function something() {
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  console.log("function Worked", firstname, lastname, email, password);
  var userData = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password
  };
  user.something(userData);
}
function gotoLogin() {
  window.location.href = "login";
}
