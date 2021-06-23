import express from "express";
import path from "path";
import bodyParser from "body-parser";
import logger from "morgan";

const PORT = 3000;
const app = express();

const serverOn = () => console.log(`Express server is Running! http://localhost:${PORT}`);

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(bodyParser.json());
app.use(logger("dev"));

app.use(express.static(path.join(__dirname + "/src")));
app.listen(3000, serverOn);
