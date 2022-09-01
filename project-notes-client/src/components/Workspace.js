import React, { useState } from 'react';
import CreateNote from './CreateNote';
import Note from './Note';


function Workspace(props) {

    const [currentWorkspace, setCurrentWorkspace] = useState(props.currentWorkspace);
    const [notes, setNotes] = useState([]);

    function addNote(note, event) {
      event.preventDefault(); 
      setCurrentWorkspace((prevValues)=>{
        return {...prevValues, noteSet: currentWorkspace.noteSet.concat(note)}
      });
      
      props.updateWorkspace(currentWorkspace);
    }
  
    function deleteNote(noteId) {
      setNotes((prevNotes) => {
        return prevNotes.filter((item, index) => {
          return noteId !== index;
        });
      });

      props.updateWorkspace(currentWorkspace.id, notes);
    }

    console.log("Inside currentWorkspace Component: ", currentWorkspace);

    return (
        <>
            <div className="body">
                <h4>{currentWorkspace.title}</h4>
                {currentWorkspace.noteSet.map((note, index) => (
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