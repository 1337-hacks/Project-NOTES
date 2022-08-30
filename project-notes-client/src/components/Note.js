import Card from 'react-bootstrap/Card';
import EditIcon from '@mui/icons-material/Edit';
import React, {useState} from "react";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Draggable from "react-draggable";

function Note(props) {

  const [hover, setHover] = React.useState(false);

  return (
    <Draggable defaultPosition={{x: 10, y: 10}} bounds='parent'>
      <Card style={{ width: '18rem' }} className="note" onMouseOver={() =>setHover(true)} onMouseLeave={() =>setHover(false)}>
        <Card.Body>
          <Card.Title>{props.heading}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
        {
          hover && 
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Button variant="link"><EditIcon/></Button>
                <Button variant="link" onClick={() => props.onClick(props.id)}><DeleteRoundedIcon/></Button>
              </ListGroup.Item>
            </ListGroup>
        }
      </Card>
    </Draggable>
  );
}

export default Note;