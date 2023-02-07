import Card from 'react-bootstrap/Card';
import React, { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Draggable from "react-draggable";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Note() {
  return 0;
}

// function Note(props) {

//   const [hover, setHover] = useState(false);

//   return (
//     <Draggable defaultPosition={{x: 10, y: 10}} bounds="parent">
//       <Container style={{ width: '18rem' , backgroundColor: "#FFFFFF"}} className="note" onMouseOver={() =>setHover(true)} onMouseLeave={() =>setHover(false)}>
//         <Row>
//           <Col>
//             <h5>{props.heading}</h5>
//             <p>{props.text}</p>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <ListGroup className="list-group-flush">
//               <ListGroup.Item>
//                 <Button variant="link" onClick={() => props.edit(props.id)}>edit</Button>
//                 <Button variant="link" onClick={() => props.delete(props.id)}>delete</Button>
//               </ListGroup.Item>
//             </ListGroup>
//           </Col>
//         </Row>
//       </Container>
//     </Draggable>
//   );
// }

// export default Note;