import React, { useState } from "react";
import axios from "axios";
// import notes from './AllNotes';

export default function Note(props) {
  const { notes, setNotes } = props;

  if (!notes || notes.length === 0) {
    return; // Fallback message if there are no notes
  }

  function deleteNote(id) {
    axios.delete(`http://localhost:8001/notes/${id}`).then(() => {
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    });
  }
  const formatDate = (date) => {
    console.log(date);
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="p-8 flex flex-wrap gap-6">
      {notes.map((note) => (
        <div
          key={note._id}
          className="p-6 shadow-lg rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white border border-gray-200 transition-transform transform hover:scale-105"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {note.title}
          </h2>
          <p className="text-md text-gray-600 mb-4">{note.description}</p>

          <div className="flex flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              Created On: {formatDate(note.date)}
            </p>
            <button
              onClick={() => deleteNote(note._id)}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
