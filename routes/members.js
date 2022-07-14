//obtenir tous les membres
//s'inscrire en tant que membre

const express = require("express");
const router = express.Router();
const formidable = require("express-formidable");
router.use(formidable());

//model's exportations
const Member = require("../models/Member");

//get the members
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

module.exports = router;
