var express = require("express");
var session = require("express-session");
var path = require("path");
var bodyParser = require("body-parser");
var logger = require("morgan");

var PORT = 3000;
var DB = undefined;
var app = express();

var serverOn = function() {
  console.log(`Express server is Running! http://localhost:${PORT}`);
}

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(bodyParser.json());
app.use(logger("dev"));

app.use(express.static(path.join(__dirname + "/src")));

app.get("/", function (req, res) {
  if(DB !== undefined) {
    console.log("Data 존재");
    res.render(__dirname + "/home.html", {DB: DB});
  } else {
    console.log("Data 없음");
    res.render(__dirname + "/home.html");
  }
});
app.post("/", function(req, res) {
  DB = req.body;
  console.log(DB);
  res.render(__dirname + "/home.html", {DB: DB})
});


app.listen(3000, serverOn);
