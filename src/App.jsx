import { useState, useEffect } from "react";
import AddNote from "./components/AddNote";
import Header from "./components/Header";
import Note from "./components/Note";

export default function App() {
  const [addNote, setAddNote] = useState({
    title: "",
    content: "",
  });

  const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];

  const [note, setNote] = useState(storedNotes);

  function handleChange(event) {
    const { name, value } = event.target;
    setAddNote((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function updateNote(event) {
    event.preventDefault(); // Ensure this is called to prevent default form submission behavior
    if (!addNote.title || !addNote.content) {
      alert("Please enter both title and content.");
      return;
    }

    setNote((prevNote) => [...prevNote, addNote]);
    setAddNote({
      title: "",
      content: "",
    });
  }

  function deleteNote(id) {
    setNote((prevNotes) => {
      if (!prevNotes || prevNotes.length === 0) {
        return []; // Return an empty array if there are no notes
      }
      return prevNotes.filter((note, index) => index !== id);
    });
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(note));
  }, [note]);

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
