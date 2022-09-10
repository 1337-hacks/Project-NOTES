import React, { useState, useEffect } from 'react';
import CreateNote from './CreateNote';
import Note from './Note';


function Workspace(props) {

    const currentWorkspace = props.currentWorkspace;
    const [notes, setNotes] = useState([]);

    useEffect(()=> {
      props.updateWorkspace(currentWorkspace);
    }, [currentWorkspace]);

    function addNote(note, event) {
      setNotes((prevValues) => {
        return [...prevValues, note];
      });
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