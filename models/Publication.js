const mongoose = require("mongoose");

const Publication = mongoose.model("Publication", {
  title: String,
  date: String,
  author: String,
  edition: String,
  description: String,
  price: Number,
  reservationLink: String,
});

module.exports = Publication;
s;
