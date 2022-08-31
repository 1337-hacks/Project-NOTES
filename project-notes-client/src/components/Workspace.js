import React, { useState } from 'react';
import CreateNote from './CreateNote';
import Note from './Note';


function Workspace(props) {

    const currentWorkspace = props.currentWorkspace;
    const [notes, setNotes] = useState([]);

    function addNote(note, event) {
      setNotes((prevValues) => {
        return [...prevValues, note];
      });
      
      event.preventDefault();
      props.updateWorkspace(currentWorkspace.id, notes);
    }
  
    function deleteNote(noteId) {
      setNotes((prevNotes) => {
        return prevNotes.filter((item, index) => {
          return noteId !== index;
        });
      });

      props.updateWorkspace(currentWorkspace.id, notes);
    }


    return (
        <>
            <div className="body">
                <h4>{currentWorkspace.title}</h4>
                {notes.map((note, index) => (
                    <Note
                        key={index}
                        id={index}
                        heading={note.heading}
                        text={note.text}
                        onClick={deleteNote}
                    />
                ))}
            </div>

            <CreateNote submitNote={addNote}/>
        </>
    );
}

export default Workspace;