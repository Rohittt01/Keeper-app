import { useState, useEffect } from "react";
import AddNote from "./components/AddNote";
import Header from "./components/Header";
import Note from "./components/Note";

export default function App() {
  const [addNote, setAddNote] = useState({
    title: "",
    content: "",
  });

  const [note, setNote] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setAddNote((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function updateNote(event) {
    if (!addNote.title || !addNote.content) {
      alert("Please enter both title and content.");
      return;
    }

    setNote((prevNote) => [...prevNote, addNote]);
    setAddNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function deleteNote(id) {
    setNote((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  

  return (
    <>
      <Header />
      <AddNote
        updateNote={updateNote}
        handleChange={handleChange}
        addNote={addNote}
      />

      <Note note={note} deleteNote={deleteNote} />
    </>
  );
}
