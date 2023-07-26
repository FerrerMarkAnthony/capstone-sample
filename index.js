const express = require("express");
const path = require("path");
const app = express();

app.get("/", function (req, res) {
  // res.sender("pages/index")
  res.sendFile(path.join(__dirname, "/pages/index.html"));
});

app.get("/about", function (req, res) {
  // res.sender("pages/about")
  res.sendFile(path.join(__dirname, "/pages/about.html"));
});

app.listen(3000);
console.log("Server is running");
