import express from "express";
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/view-blogs", (req, res) => {
  res.render("view.ejs");
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
