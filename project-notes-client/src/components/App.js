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

  const [currentWorkspace, setCurrentWorkspace] = useState(workspace[0].id);
  
  const [renderWorkspace, setRenderWorkspace] = useState(true);
  
  useEffect(()=> {
    setTimeout(()=> {
      setRenderWorkspace(true);
    }, 1000);
  }, [renderWorkspace]);

  function addWorkspace(workspace, event) {
    event.preventDefault();
    setWorkspace((prevValues) => {
      return [...prevValues, workspace];
    });
  }

  function deleteWorkspace(workspaceId) {
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
    setCurrentWorkspace(workspaceId);
    // setRenderWorkspace(true);
  }
  
  return (
    <div>
      {/* <Header/> */}

      <VerticalNavbar workspaces={workspace} openWorkspace={openWorkspace} submitWorkspace={addWorkspace}/>

      {renderWorkspace ? 
        <Workspace 
          currentWorkspace={workspace.find((obj)=> obj.id === currentWorkspace)}
          updateWorkspace={updateWorkspace}
          id={workspace.find((obj)=> obj.id === currentWorkspace)}
        /> 
        : 
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      }
      
      <form action="../../post" method="post" className="form">
        <Button type="submit">Connect to React</Button>
      </form>

      <Button onClick={() => console.log(workspace)}>View Workspaces</Button>
      <Button onClick={() => console.log(currentWorkspace)}>View current workspace</Button>
      <Button onClick={() => setRenderWorkspace(true)}>Render workspace</Button>

      <Footer/>
    </div>
  );
}

export default App;
