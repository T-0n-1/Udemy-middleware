import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  res.send(`
    <h1>Your band name is</h1>
    <h2> ${req.body.street}${req.body.pet}</h2>
    <form action="/restart" method="POST">
    <input type="submit" value="Restart">
    </form>`);
});
app.post("/restart", (req, res) => {
  res.redirect("/");
});

app.get("/", (req, res) => {res.sendFile(__dirname + "/public/index.html")});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
