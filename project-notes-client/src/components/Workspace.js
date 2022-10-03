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

    function editNote(noteId) {
      console.log("To be completed!");
    }
  
    function deleteNote(noteId) {
      const set = currentWorkspace.noteSet;

      setCurrentWorkspace((prevValues)=> {
        return {...prevValues, noteSet: set.filter((note, index) => noteId !== index)}
      });
    }


    return (
        <>
            <div className="workspace">
                {currentWorkspace.noteSet.map((note, index) => (
                    <Note
                        key={index}
                        id={index}
                        heading={note.heading}
                        text={note.text}
                        edit={editNote}
                        delete={deleteNote}
                    />
                ))}
            </div>

            <CreateNote submitNote={addNote}/>
        </>
    );
}

export default Workspace;