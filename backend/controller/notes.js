const Note = require("../models/notes.js");

async function handleGetNotes(req, res) {
  try {
    const allNotes = await Note.find({});
    return res.status(200).json(allNotes); // Use res.json for consistency
  } catch (error) {
    return res.status(500).json({ status: "Failed to fetch notes", error: error.message });
  }
}

async function handlePostNotes(req, res) {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ status: "Please fill all the required fields" }); // Use 400 Bad Request
  }

  try {
    const newNote = await Note.create({ title, description });
    return res.status(201).json({ status: "Successfully created", note: newNote });
  } catch (error) {
    return res.status(500).json({ status: "Failed to create note", error: error.message });
  }
}

async function handleDeleteNotes(req, res) {
  const { id } = req.params;
  try {
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      return res.status(404).json({ status: "Note not found" }); // Use 404 Not Found
    }
    return res.status(200).json({ status: "Note deleted successfully" });
  } catch (error) {
    return res.status(500).json({ status: "Failed to delete note", error: error.message });
  }
}

async function handleGetNoteById(req, res) {
  const { id } = req.params;
  try {
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ status: "Note does not exist" }); // Use 404 Not Found
    }
    return res.status(200).json(note);
  } catch (error) {
    return res.status(500).json({ status: "Failed to fetch note", error: error.message });
  }
}

module.exports = {
  handleGetNotes,
  handleGetNoteById,
  handleDeleteNotes,
  handlePostNotes,
};
