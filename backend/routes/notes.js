const {
  handleGetNotes,
  handlePostNotes,
  handleDeleteNotes,
  handleGetNoteById,
} = require("../controller/notes.js");
const Note = require("../models/notes.js");
const express = require("express");

const router = express.Router();

router.route("/").get(handleGetNotes).post(handlePostNotes);

router.route("/:id").get(handleGetNoteById).delete(handleDeleteNotes);

module.exports = router;
