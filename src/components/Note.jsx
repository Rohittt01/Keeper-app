import React, { useState } from 'react';
// import notes from './AllNotes';

export default function Note(props) {
  const {id, deleteNote, note} = props
  
  

  return (
    <div className="p-8 flex flex-wrap gap-6">
        {note.map((note, index) => (
    <div key={index} className="p-4 shadow-md rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white">
            <h2 className="text-2xl font-semibold">{note.title}</h2>
            <p className="text-md">{note.content}</p>

            <div className="flex flex-row justify-between items-end">
              <p>Date</p>
              <button onClick={() => {deleteNote(index)}}>
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
  )}

