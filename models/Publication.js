const mongoose = require("mongoose");

const Publication = mongoose.model("Publication", {
  title: String,
  date: String,
  author: String,
  edition: String,
  description: String,
  Urlpicture: String,
  price: Number,
  URLreservation: String,
});

module.exports = Publication;
