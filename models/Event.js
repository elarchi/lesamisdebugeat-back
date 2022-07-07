const mongoose = require("mongoose");

const Event = mongoose.model("Event", {
  title: String,
  date: String,
  Hours: String,
  location: String,
  author: String,
  URLpictures: Array,
  description: String,
  price: Number,
  reservationLink: String,
  programme: String,
});

module.exports = Event;
