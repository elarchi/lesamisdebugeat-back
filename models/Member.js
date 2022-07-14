const mongoose = require("mongoose");

const Member = mongoose.model("Member", {
  firstname: String,
  lastname: String,
  localAdresse: String,
  otherAdresse: String,
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
  URLavatar: String,
  photographyPermisison: Boolean,
});

module.exports = Member;
