import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import React, { useState } from 'react';
import CreateNote from './CreateNote';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

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
  }

  function AddNote(note, event) {
    setNotes((prevValues) => {
      return [...prevValues, note];
    });
    setCreateNote(false);
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

      <Container fluid>
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          heading={note.heading}
          text={note.text}
          onClick={DeleteNote}
        />
      ))}
      </Container>

      <Button variant="link" className="addButton" onClick={ToggleCreateNote}>{showCreateNote ? <HighlightOffRoundedIcon fontSize="large"/> : <AddCircleOutlineRoundedIcon fontSize="large"/>}</Button>
      {showCreateNote ? <CreateNote submitNote={AddNote}/> : null}
      <Footer/>
    </div>
  );
}

export default App;
