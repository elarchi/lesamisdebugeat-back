const mongoose = require("mongoose");

const Event = mongoose.model("Event", {
  title: String,
  date: String,
  time: String,
  location: String,
  author: String,
  URLpictures: Array,
  description: String,
  price: Number,
  programme: String,
});

module.exports = Event;
