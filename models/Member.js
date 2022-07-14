const mongoose = require("mongoose");

const Member = mongoose.model("Member", {
  firstname: String,
  lastname: String,
  mainAdresse: String,
  localAdresse: String,
  telephone: String,
  email: String,
  display: {
    phoneBook: Boolean,
    headquarter: {
      member: Boolean,
      title: String,
      orderOfAppareance: Number,
    },
  },
  hasPaid: Boolean,
});

module.exports = Member;
