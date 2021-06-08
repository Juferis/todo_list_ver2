var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var logger = require("morgan");

const PORT = 3000;
var app = express();

function serverOn() {
  console.log(`Express server is Running! PORT=${PORT}`);
}

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(logger("dev")); // GET / 200 4.746 ms - 303과 같은 로그를 기록
app.use(express.static(path.join(__dirname + "/src")));
app.get("/", function (req, res) {
  res.render(__dirname + "/home.html");
});

app.listen(3000, serverOn);
