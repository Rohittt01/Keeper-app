import React, { useState } from "react";

export default function NoteApp(props) {
  const {addNote, updateNote, handleChange} = props
  

  return (
    
      <div className="flex flex-row justify-center items-center p-8">
        <div className="shadow-md rounded-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white relative flex flex-col p-4">
          <input
            type="text"
            name="title"
            value={addNote.title}
            onChange={handleChange}
            className="w-full h-12 sm:h-16 p-2 focus:outline-none"
            placeholder="Title"
          />
          <textarea
            name="content"
            onChange={handleChange}
            className="w-full h-24 sm:h-32 p-2 outline-none focus:ring-0 border-none"
            placeholder="Add Notes..."
            value={addNote.content}
          ></textarea>
          <button
            onClick={updateNote}
            className="p-4 sm:p-6 hover:text-yellow-300 text-yellow-400 sm:text-2xl md:text-3xl absolute right-4 sm:right-10 bottom-8 sm:bottom-[-46px]"
          >
            <i className="fa-solid fa-circle-plus"></i>
          </button>
        </div>
      </div>
    
  );
}

