import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import React, { useState } from 'react';
import CreateNote from './CreateNote';

function App() {

  const [showCreateNote, setCreateNote] = useState(false);
  const [notes, setNotes] = useState([]);

  function ToggleCreateNote() {
    if(showCreateNote) {
      setCreateNote(false);
    }
    else {
      setCreateNote(true);
    }

    console.log(showCreateNote);
  }

  function AddNote(note, event) {
    setNotes((prevValues) => {
      return [...prevValues, note];
    });

    event.preventDefault();
  }

  function DeleteNote(noteId) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return noteId !== index;
      });
    });
  }

  return (
    <div>
      <Header/>

      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.heading}
          content={note.text}
          onClick={DeleteNote}
        />
      ))}

      <button className="addButton" onClick={ToggleCreateNote}>{showCreateNote ? <HighlightOffRoundedIcon/> : <AddCircleOutlineRoundedIcon/>}</button>
      {showCreateNote ? <CreateNote/> : null}
      <Footer/>
    </div>
  );
}

export default App;
