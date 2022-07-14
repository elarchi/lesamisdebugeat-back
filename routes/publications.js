//avoir les infos d'une publication
//obtenir toutes les publications

const express = require("express");
const router = express.Router();
const formidable = require("express-formidable");
router.use(formidable());

//model's exportations
const Publication = require("../models/Publication");

//get the publications
router.get("/all-publications", async (req, res) => {
  try {
    const publications = await Publication.find();

    const count = await Publication.countDocuments();

    res.json({
      count: count,
      publications: publications,
    });
  } catch (error) {
    res.status(400).json({
      messagge: error.message,
    });
  }
});

//get a specific publication
router.get("/publication/:id", async (req, res) => {
  try {
    const publication = await Publication.findById(req.params.id);
    res.status(200).json(publication);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
