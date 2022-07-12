//avoir les infos d'un event
//obtenir tous les events

const express = require("express");
const router = express.Router();
const formidable = require("express-formidable");
router.use(formidable());

//model's exportations
const Event = require("../models/Event");

//get the events
router.get("/all-events", async (req, res) => {
  try {
    const events = await Event.find();

    const count = await Event.countDocuments();

    res.json({
      count: count,
      events: events,
    });
  } catch (error) {
    res.status(400).json({
      messagge: error.message,
    });
  }
});

module.exports = router;
