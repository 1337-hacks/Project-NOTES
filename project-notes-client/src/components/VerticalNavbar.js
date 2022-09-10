import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MenuIcon from '@mui/icons-material/Menu';
import Draggable from "react-draggable";
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import CreateWorkspace from './CreateWorkspace';

function VerticalNavbar(props) {

    const [showBar, setShowBar] = useState(false);

    function handleCloseBar() {setShowBar(false)};
    function handleShowBar() {setShowBar(true)};

    function openWorkspaceFunc(id) {
      handleCloseBar();
      props.openWorkspace(id);
    }

    return (
      <>
        <Draggable axis="y" bounds={"parent"}>
          <Button variant="light" onClick={() => handleShowBar()} className="me-2 verticalNavbar">
            <MenuIcon/>
          </Button>
        </Draggable>

        <Offcanvas show={showBar} onHide={() => handleCloseBar()} scroll={true} backdrop={true}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Project:NOTES</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>

            <Stack gap={3}>
              <CreateWorkspace submitWorkspace={props.submitWorkspace}/>
              <ListGroup>
                <ListGroup.Item>My Workspaces</ListGroup.Item>

                {props.workspaces.map((workspaces, index) => (
                    <ListGroup.Item action onClick={() => openWorkspaceFunc(workspaces.id)} key={workspaces.id}>{workspaces.title}</ListGroup.Item>
                ))}

              </ListGroup>
            </Stack>
            
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
}

export default VerticalNavbar;