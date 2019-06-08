var app = require("express");
var router = app.Router();
var mysql = require("mysql");
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "usxs",
  database: "sakila"
});

router.get("/categories", (req, res) => {
  var query = "select name,category_id from category";
  conn.query(query, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });
});

router.post("/categories", (req, res) => {
  console.log(req.query);
  var data = req.query;
  var query2 =
    "SELECT t1.film_id,t1.category_id,t2.title from film_category t1 JOIN film t2 ON t1.film_id = t2.film_id WHERE t1.category_id = ?";
  conn.query(query2, data.id, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

router.post("/film", (req, res) => {
  console.log(req.query);
  var data = req.query;
  var query2 = `SELECT t1.film_id,t1.category_id,t3.description,t3.release_year,t4.name from film_category t1 
    JOIN film_text t2 ON t1.film_id = t2.film_id join film t3 on t1.film_id = t3.film_id join language t4 on
    t3.language_id =t4.language_id WHERE t1.film_id = ?`;
  conn.query(query2, data.id, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

router.post("/actors", (req, res) => {
  var data = req.query;
  var query3 = `SELECT t1.film_id,t1.actor_id,t2.first_name,t2.last_name from film_actor t1 
  join actor t2 on t2.actor_id = t1.actor_id WHERE film_id =?`;
  conn.query(query3, data.id, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
