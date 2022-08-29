import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MenuIcon from '@mui/icons-material/Menu';
import Draggable from "react-draggable";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

function VerticalNavbar(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
          <Draggable axis="y" bounds={"parent"}>
            <Button variant="light" onClick={handleShow} className="me-2 verticalNavbar">
              <MenuIcon/>
            </Button>
          </Draggable>

          <Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={true}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Project:NOTES</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

              <Stack gap={3}>
                <ListGroup>
                  <ListGroup.Item action href="#3">Add a Workspace</ListGroup.Item>
                </ListGroup>
                <ListGroup>
                  <ListGroup.Item>My Workspaces</ListGroup.Item>
                  <ListGroup.Item action href="#3">Map</ListGroup.Item>
                  <ListGroup.Item action href="#3">Workspaces</ListGroup.Item>
                  <ListGroup.Item action href="#3">Here!</ListGroup.Item>
                </ListGroup>
              </Stack>
              
            </Offcanvas.Body>
          </Offcanvas>
        </>
      );
}

export default VerticalNavbar;