import Header from './Header';
import Workspace from './Workspace';
import Footer from './Footer';
import React, { useState } from 'react';
import VerticalNavbar from './VerticalNavbar';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [workspace, setWorkspace] = useState([{
    id: uuidv4(),
    title: "New Workspace",
    noteSet: []
  }]);

  function addWorkspace(workspace, event) {
    setWorkspace((prevValues) => {
      return [...prevValues, workspace];
    });
    event.preventDefault();
  }

  function deleteWorkspace(workspaceId) {
    setWorkspace((prevWorkspaces) => {
      return prevWorkspaces.filter((item, index) => {
        return workspaceId !== index;
      });
    });
  }

  function updateWorkspace(workspaceid, newNoteSet) {
    const newState = workspace.map(workspaceObj => {
      if (workspaceObj.id === workspaceid) {
        return {...workspaceObj, noteSet: newNoteSet};
      }
      return workspaceObj;
    });
    
    setWorkspace(newState);
  }

  return (
    <div>
      {/* <Header/> */}

      <VerticalNavbar workspaces={workspace} submitWorkspace={addWorkspace}/>

      <Workspace 
        currentWorkspace={workspace[0]}
        updateWorkspace={updateWorkspace}
      />

      <form action="../../post" method="post" className="form">
        <Button type="submit">Connect to React</Button>
      </form>

      <Button onClick={() => console.log(workspace)}>Click me!</Button>

      <Footer/>
    </div>
  );
}

export default App;
