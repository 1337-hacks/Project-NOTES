import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function VerticalNavbar(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
          <Button variant="primary" onClick={handleShow} className="me-2 verticalNavbar">
            <NavigateNextIcon/>
          </Button>
          <Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={true}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Project:NOTES</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
        </>
      );
}

export default VerticalNavbar;