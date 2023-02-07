import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Draggable from "react-draggable";
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import CreateWorkspace from './CreateWorkspace';

export default function VerticalNavbar() {
  return 0;
}

// function VerticalNavbar(props) {

//     const [showBar, setShowBar] = useState(false);

//     function handleCloseBar() {setShowBar(false)};
//     function handleShowBar() {setShowBar(true)};

//     function openWorkspaceFunc(id) {
//       handleCloseBar();
//       props.openWorkspace(id);
//     }

//     return (
//       <>
//         {/* <Draggable axis="y" bounds={"parent"}> */}
//         <div className="verticalNavbar">
//           <Button variant="light" onClick={() => handleShowBar()} className="me-2 verticalNavbar">
//             Menu
//           </Button>
//         </div>
//         {/* </Draggable> */}

//         <Offcanvas show={showBar} onHide={() => handleCloseBar()} scroll={true} backdrop={true}>
//           <Offcanvas.Header closeButton className="dark text-bg-dark">
//             <Offcanvas.Title>Project:NOTES</Offcanvas.Title>
//           </Offcanvas.Header>
//           <Offcanvas.Body className="dark">

//             <Stack gap={3}>
//               <CreateWorkspace submitWorkspace={props.submitWorkspace}/>

//               <Offcanvas.Title>My Workspaces</Offcanvas.Title>
//               <ListGroup>
//                 {/* <ListGroup.Item variant="primary">My Workspaces</ListGroup.Item> */}

//                 {props.workspaces.map((workspaces, index) => (
//                     <ListGroup.Item action onClick={() => openWorkspaceFunc(workspaces.id)} key={workspaces.id} variant="dark">{workspaces.title}</ListGroup.Item>
//                 ))}

//               </ListGroup>
//             </Stack>
            
//           </Offcanvas.Body>
//         </Offcanvas>
//       </>
//     );
// }

// export default VerticalNavbar;