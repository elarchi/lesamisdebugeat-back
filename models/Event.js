const mongoose = require("mongoose");

const Event = mongoose.model("Event", {
  title: String,
  date: String,
  time: String,
  location: String,
  URLpictures: Array,
  description: String,
  price: String,
  programme: String,
  display: { carousel: Boolean, comingSoonEvent: Boolean },
  URLprogrammation: String,
});

module.exports = Event;
