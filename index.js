require("dotenv").config();

const express = require("express");
const formidable = require("express-formidable");

const app = express();
app.use(formidable());

app.all("*", function (req, res) {
  res.json({ message: "Page not found" });
});

app.listen(process.env.PORT, () => {
  console.log("Server has started ✅");
});
