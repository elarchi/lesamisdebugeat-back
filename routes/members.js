//obtenir tous les membres
//s'inscrire en tant que membre

const express = require("express");
const router = express.Router();
const formidable = require("express-formidable");
router.use(formidable());

//model's exportations
const Member = require("../models/Member");

//get all the members
router.get("/all-members", async (req, res) => {
  try {
    const members = await Member.find();
    const count = await Member.countDocuments();

    res.status(200).json({
      count: count,
      members: members,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// member's subscription
router.post("/members/subscription", async (req, res) => {
  console.log(req.fields);
  try {
    //member creation
    const newMember = new Member({
      firstname: req.fields.firstname,
      lastname: req.fields.lastname,
      localAdresse: req.fields.localAdresse,
      otherAdresse: req.fields.otherAdresse,
      telephone: req.fields.telephone,
      email: req.fields.email,
      display: {
        phoneBook: req.fields.phoneBook,
        headquarter: {
          member: req.fields.member,
          title: req.fields.title,
          orderOfAppareance: req.fields.orderOfAppareance,
        },
      },
      hasPaid: req.fields.hasPaid,
      URLavatar: req.fields.URLavatar,
      photographyPermisison: req.fields.photographyPermission,
    });
    //save new member
    await newMember.save();
    res.status(200).json({
      _id: newMember._id,
      message: "Member created, saved and published",
      firstname: newMember.firstname,
      lastname: newMember.lastname,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      error: error.message,
    });
  }
});

module.exports = router;
