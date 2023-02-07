import Header from './Header';
import Workspace from './Workspace';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import VerticalNavbar from './VerticalNavbar';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/esm/Container';

function App() {

  const [workspace, setWorkspace] = useState([{
    id: uuidv4(),
    title: "New Workspace",
    noteSet: []
  }]);

  const [currentWS, setCurrentWS] = useState(workspace[0].id);
  const [currentWSName, setCurrentWSName]  = useState(workspace[0].title);
  
  const [renderWorkspace, setRenderWorkspace] = useState(true);
  
  useEffect(()=> {
    setTimeout(()=> {
      setRenderWorkspace(true);
    }, 1000);
  }, [renderWorkspace]);

  useEffect(()=> {
    const WS = workspace.findIndex((obj)=> obj.id === currentWS);
    setCurrentWSName(workspace[WS].title);
  }, [currentWS])

  function addWorkspace(workspace, event) {
    event.preventDefault();
    setWorkspace((prevValues) => {
      return [...prevValues, workspace];
    });
  }

  function deleteWorkspace(workspaceId) {

    console.log("Delete Workspace");

    setWorkspace((prevWorkspaces) => {
      return prevWorkspaces.filter((item, index) => {
        return workspaceId !== index;
      });
    });
  }

  function updateWorkspace(currentWorkspace) {
    const newState = workspace.map(workspaceObj => {
      if (workspaceObj.id === currentWorkspace.id) {
        console.log("Entered!");
        return {...workspaceObj, noteSet: currentWorkspace.noteSet};
      }
      return workspaceObj;
    });
    
    console.log({newState, currentWorkspace});
    setWorkspace(() => newState);
  }

  function openWorkspace(workspaceId) {
    console.log("Hello world!");
    setRenderWorkspace(false);
    setCurrentWS(workspaceId);
    // setRenderWorkspace(true);
  }
  
  return (
    <div>
      {/* <Header 
        currentWorkspace={currentWSName} 
        workspaces={workspace} 
        openWorkspace={openWorkspace} 
        submitWorkspace={addWorkspace} 
        deleteWorkspace={deleteWorkspace}
      />
      
      {renderWorkspace ? 
        <Workspace 
          currentWorkspace={workspace.find((obj)=> obj.id === currentWS)}
          updateWorkspace={updateWorkspace}
          id={workspace.find((obj)=> obj.id === currentWS)}
        /> 
        : 
        <div className="body loadingBody">
          <Spinner animation="border" role="status" className="loadingSpinner">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      }
      
      <form action="../../post" method="post" className="form">
        <Button type="submit">Connect to React</Button>
      </form>

      <Button onClick={() => console.log(workspace)}>View Workspaces</Button>
      <Button onClick={() => console.log(currentWS)}>View current workspace</Button>
      <Button onClick={() => setRenderWorkspace(true)}>Render workspace</Button> */}

      <Footer/>
    </div>
  );
}

export default App;
