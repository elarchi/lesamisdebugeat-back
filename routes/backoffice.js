//connexion
//create event
//update event
//delete event

const express = require("express");
const router = express.Router();

const formidable = require("express-formidable");
router.use(formidable());

const Event = require("../models/Event");

//create event's route:
//------------------------
router.post("/backoffice/create-event", async (req, res) => {
  console.log(req.fields);
  try {
    //event creation
    const newEvent = new Event({
      title: req.fields.title,
      date: req.fields.date,
      time: req.fields.time,
      location: req.fields.location,
      URLpictures: req.fields.URLpictures,
      description: req.fields.description,
      price: req.fields.price,
      programme: req.fields.programme,
    });
    //save new event
    await newEvent.save();
    res.status(200).json({
      _id: newEvent._id,
      message: "Event created, saved and published",
      title: newEvent.title,
      date: newEvent.date,
      time: newEvent.time,
      location: newEvent.location,
      author: newEvent.author,
      URLpictures: newEvent.URLpictures,
      description: newEvent.description,
      price: newEvent.price,
      programme: newEvent.programme,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      error: error.message,
    });
  }
});

module.exports = router;
