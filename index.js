require("dotenv").config();

const express = require("express");
const formidable = require("express-formidable");

const app = express();
app.use(formidable());

app.listen(process.env.PORT, () => {
  console.log("Server has started 🚀");
});
