import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import CreateWorkspace from './CreateWorkspace';
import Modal from 'react-bootstrap/Modal';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';

function Header(props) {

  const [showBar, setShowBar] = useState(false);
  function handleCloseBar() {setShowBar(false)};
  function handleShowBar() {setShowBar(true)};

  const [showAbout, setShowAbout] = useState(false);
  function handleCloseAbout() {setShowAbout(false)};
  function handleShowAbout() {setShowAbout(true)};

  function openWorkspaceFunc(id) {
    handleCloseBar();
    props.openWorkspace(id);
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Stack direction="horizontal" gap={3}>
                <Nav.Link onClick={() => handleShowBar()}><MenuIcon/></Nav.Link>
                <Nav.Link onClick={()=> handleShowAbout()}><HomeIcon/></Nav.Link>
                <Nav.Link onClick={()=> handleShowAbout()}><InfoIcon/></Nav.Link>
                <Nav.Link onClick={()=> handleShowAbout()}><SettingsIcon/></Nav.Link>
              </Stack>
            </Nav>
            <Navbar.Text>Current: {props.currentWorkspace}</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* BURGER STACK OFFCANVAS */}
      <Offcanvas show={showBar} onHide={() => handleCloseBar()} scroll={true} backdrop={true}>
        <Offcanvas.Header closeButton className="dark">
          <Offcanvas.Title>Project:NOTES</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="dark">

          <Stack gap={3}>
            <CreateWorkspace submitWorkspace={props.submitWorkspace}/>

            <Offcanvas.Title>My Workspaces</Offcanvas.Title>
            <ListGroup>
              {props.workspaces.map((workspaces, index) => (
                  <ListGroup.Item action onClick={() => openWorkspaceFunc(workspaces.id)} key={workspaces.id} variant="dark">{workspaces.title}</ListGroup.Item>
              ))}

            </ListGroup>
          </Stack>
          
        </Offcanvas.Body>
      </Offcanvas>

      {/* ABOUT MODAL */}
      <Modal
        show={showAbout}
        onHide={handleCloseAbout}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="dark">
          <h4>About Project:NOTES</h4>
          <p>
            This is my very first personal project, Project:NOTES! This is a simple
            notetaking app that can be used in any application. Notes can be dragged
            around, and new workspaces can be created to create multiple groups of 
            notes. To add a new workspace, navigate to the menu stack seen on the 
            navbar.
          </p>
          <Button variant="danger" onClick={handleCloseAbout}>Close</Button>
        </Modal.Body>
      </Modal>

    </>
    
  );
}

export default Header;