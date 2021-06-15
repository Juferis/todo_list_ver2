var express = require("express");
var session = require("express-session");
var path = require("path");
var bodyParser = require("body-parser");
var logger = require("morgan");
var FileStore = require('session-file-store')(session);

var PORT = 3000;
var app = express();

var serverOn = function() {
  console.log(`Express server is Running! PORT=${PORT}`);
}

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(logger("dev"));

app.use(session({
  secret: "kljaljwd1293",
  resave: false,
  saveUninitialized: true,
  store: new FileStore()
}))
app.use(express.static(path.join(__dirname + "/src")));

app.get("/", function (req, res) {
  res.render(__dirname + "/home.html");
});

app.listen(3000, serverOn);
