import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import React, { useState } from 'react';
import CreateNote from './CreateNote';
import Container from 'react-bootstrap/Container';
import VerticalNavbar from './VerticalNavbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function App() {

  const [notes, setNotes] = useState([]);

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
      {/* <Header/> */}

      <VerticalNavbar/>

      <div className="body">
        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            heading={note.heading}
            text={note.text}
            onClick={DeleteNote}
          />
        ))}

      </div>

      <CreateNote
        submitNote={AddNote}
      />

      <Footer/>
    </div>
  );
}

export default App;
