import express from "express";
const app = express();
const port = 3000;
import bodyParser from "body-parser";

var headers = [];
var bodies = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/view-blogs", (req, res) => {
  res.render("view.ejs", { header: headers, body: bodies });
});

app.get("", (req, res) => {});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/submit", (req, res) => {
  if ((req.body["header"] && req.body["body"]) === "") {
    res.render("create.ejs", { message: "Please enter a header or body" });
  } else {
    const header = req.body["header"];
    const body = req.body["body"];
    headers.push(header);
    bodies.push(body);
    res.render("create.ejs");
  }
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
