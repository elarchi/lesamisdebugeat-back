const mongoose = require("mongoose");

const Event = mongoose.model("Event", {
  title: String,
  date: String,
  time: String,
  location: String,
  URLpictures: Array,
  description: String,
  price: Number,
  programme: String,
  carousel: Boolean,
  comingSoonEvent: Boolean,
});

module.exports = Event;
