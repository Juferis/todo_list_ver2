import express from "express";
import path from "path";
import bodyParser from "body-parser";
import morgan from "morgan";

const PORT = 3000;
const logger = morgan("dev");
const app = express();


// app.engine("html", require("pug").renderFile);
app.set("view engine", "html");
app.use(logger);

app.use(express.static(path.join(__dirname + "/src")));

app.get("/", () => console.log("hello!"));

const serverOn = () => console.log(`Express server is Running! http://localhost:${PORT}`);
app.listen(3000, serverOn);
