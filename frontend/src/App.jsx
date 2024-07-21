import { useState, useEffect } from "react";
import axios from 'axios'
import AddNote from "./components/AddNote";
import Header from "./components/Header";
import Note from "./components/Note";

export default function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetchNote()
  }, [])

  function fetchNote(){
    axios.get("http://localhost:8001/notes").then((res) => {
      console.log(res.data);
      setNotes(res.data)
    }).catch((error)=> {
      console.log(error);
    })
  }
  return (
    <>
      <Header />
      <AddNote setNotes={setNotes} />
      <Note notes={notes} setNotes={setNotes} />
    </>
  );
}
