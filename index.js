const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

const app = express();

app.use(expressLayouts);
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("layout", "./layouts/master");

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.listen(3000);
console.log("Server is running");
