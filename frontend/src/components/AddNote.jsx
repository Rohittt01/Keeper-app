import React, { useEffect, useState } from "react";
import axios from "axios";

export default function NoteApp({setNotes}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState("");

    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
    };

    useEffect(() => {
      addNote()
    }, [])

    const addNote = async () => {
      try {
        const response = await axios.post("http://localhost:8001/notes", {
          title,
          description,
        });
        setNotes((prevNotes) => [...prevNotes, response.data.note])
        console.log("Note added successfully:", response.data);
        setTitle("");
        setDescription("");
      } catch (error) {
        console.error("Error adding note:", error);
      }
    };

  return (
    <div className="flex flex-row justify-center items-center p-8">
      <div className="shadow-md rounded-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white relative flex flex-col p-4">
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleTitleChange}
          className="w-full h-12 sm:h-16 p-2 focus:outline-none"
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleDescriptionChange}
          className="w-full h-24 sm:h-32 p-2 outline-none focus:ring-0 border-none"
          placeholder="Add Notes..."
          value={description}
        ></textarea>
        <button
          onClick={addNote}
          className="p-4 sm:p-6 hover:text-yellow-300 text-yellow-400 sm:text-2xl md:text-3xl absolute right-4 sm:right-10 bottom-8 sm:bottom-[-46px]"
        >
          <i className="fa-solid fa-circle-plus"></i>
        </button>
      </div>
    </div>
  );
}

