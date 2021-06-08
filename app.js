var express = require("express");

const PORT = 3000;
var app = express();

function serverOn() {
  console.log(`Express server is Running! PORT=${PORT}`);
}

app.listen(3000, serverOn);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/home.html");
});
