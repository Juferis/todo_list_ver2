var express = require("express");
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

app.listen(3000, serverOn);
