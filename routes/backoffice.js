//connexion
//create event
//update event
//delete event

const express = require("express");
const router = express.Router();

const formidable = require("express-formidable");
router.use(formidable());

const Event = require("../models/Event");
const Publication = require("../models/Publication");

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
      URLprogramme: req.fields.URLprogramme,
      display: {
        carousel: req.fields.display.carousel,
        comingSoonEvent: req.fields.display.comingSoonEvent,
      },
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
      URLprogramme: newEvent.URLprogramme,
      display: {
        carousel: newEvent.carousel,
        comingSoonEvent: newEvent.comingSoonEvent,
      },
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      error: error.message,
    });
  }
});

//create publication's route:
//------------------------
router.post("/backoffice/create-publication", async (req, res) => {
  console.log(req.fields);
  try {
    //publication creation
    const newPublication = new Publication({
      title: req.fields.title,
      date: req.fields.date,
      author: req.fields.author,
      edition: req.fields.edition,
      description: req.fields.description,
      price: req.fields.price,
      URLreservation: req.fields.URLreservation,
    });
    //save new publication
    await newPublication.save();
    res.status(200).json({
      _id: newPublication._id,
      message: "Publication created, saved and published",
      title: newPublication.title,
      date: newPublication.date,
      author: newPublication.author,
      edition: newPublication.edition,
      description: newPublication.description,
      price: newPublication.price,
      URLreservation: newPublication.URLreservation,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      error: error.message,
    });
  }
});

module.exports = router;
