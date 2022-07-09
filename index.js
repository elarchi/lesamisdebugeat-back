require("dotenv").config();

const express = require("express");
const app = express();

const formidable = require("express-formidable");
app.use(formidable());

const cors = require("cors");
app.use(cors());

//database connection:
//------------------------
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

//routes'structure:s
//------------------------
const backofficeRoutes = require("./routes/backoffice");
app.use(backofficeRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome on 'lesamisdebugeat' API",
  });
});

app.all("*", function (req, res) {
  res.json({ message: "Page not found" });
});

//listening to the server:
//------------------------
app.listen(process.env.PORT, () => {
  console.log("Server has started ✅");
});
