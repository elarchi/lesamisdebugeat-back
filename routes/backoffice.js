//connexion
//create event
//update event
//delete event

const express = require("express");
const router = express.Router();
const formidable = require("express-formidable");
router.use(formidable());

const Event = require("..models/Event");

router.post("/backoffice/create-event", async (req, res) => {
  try {
    const newEvent = new Event({
      title: req.fields.title,
      date: req.fields.date,
      time: req.fields.time,
      location: req.fields.location,
      author: req.fields.author,
      URLpictures: req.fields.URLpictures,
      description: req.fields.description,
      price: req.fields.price,
      programme: req.fields.programme,
    });
  } catch {}
});
