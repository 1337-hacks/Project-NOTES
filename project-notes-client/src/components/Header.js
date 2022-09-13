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
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

import SplitButton from 'react-bootstrap/SplitButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header(props) {

  const [showWSOptions, setShowWSOptions] = useState(false);
  function handleCloseWSOptions() {setShowWSOptions(false)};
  function handleShowWSOptions() {setShowWSOptions(true)};

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

            {props.workspaces.map((workspaces, index) => (
              <Dropdown as={ButtonGroup}>
                <Container fluid>
                  <Row>
                    <ButtonGroup>
                    <Col sm={10} className="d-grid gap-2">
                      <Button 
                        id="ws-btn"
                        variant="primary" 
                        onClick={() => openWorkspaceFunc(workspaces.id)} 
                        key={workspaces.id}
                      >
                        {workspaces.title}
                      </Button>
                    </Col>
                    <Col sm={2} className="d-grid gap-2">
                      <Dropdown.Toggle split 
                        id="ws-dropdown" 
                        variant="primary"
                      />
                    </Col>
                    </ButtonGroup>
                  </Row>
                </Container>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/edit">Rename</Dropdown.Item>
                  <Dropdown.Item onClick={() => props.deleteWorkspace(workspaces.id)}>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ))}

            {/* <ListGroup>
              {props.workspaces.map((workspaces, index) => (
                  <ListGroup.Item action 
                  onClick={() => openWorkspaceFunc(workspaces.id)} 
                  key={workspaces.id} 
                  variant="dark">
                    <div>
                      {workspaces.title}
                    </div>
                    {showWSOptions && <DeleteRoundedIcon onClick={() => props.deleteWorkspace(workspaces.id)}/>}
                  </ListGroup.Item>
              ))}
            </ListGroup> */}

            {/* <SplitButton
              variant="success" 
              onClick={() => openWorkspaceFunc(workspaces.id)} 
              key={workspaces.id}
              title={workspaces.title}
            >
              <Dropdown.Item href="#/edit">Rename</Dropdown.Item>
              <Dropdown.Item href="#/delete">Delete</Dropdown.Item>
            </SplitButton> */}
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
          <Stack gap={3}>
            <h4>About Project:NOTES</h4>
            <Container fluid>
              <h5>Project:NOTES</h5>
              
              <p>
                This is my very first personal project. Project:NOTES is a simple notetaking app 
                that works similarly to Google Keep and Windows Sticky Notes.
              </p>
              
              <h5>Features</h5>

              <ul>
                <li>Add, *edit (to be completed)* and delete notes easily</li>
                <li>Drag notes around and rearrange to your preferences</li>
                <li>Create workspaces to work on different groups of notes</li>
              </ul>

              <h5>Technologies used</h5>

              <ul>
                <li>MERN Stack (MongoDB, Express, React, Node)</li>
                <li>React-Bootstrap</li>
                <li>MUI (Icons)</li>
              </ul>
            </Container>
          </Stack>
          
          <Button variant="danger" onClick={handleCloseAbout}>Close</Button>
        </Modal.Body>
      </Modal>

    </>
    
  );
}

export default Header;