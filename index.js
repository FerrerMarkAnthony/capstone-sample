const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.listen(3000);
console.log("Server is running");
