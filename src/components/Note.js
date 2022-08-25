import Card from 'react-bootstrap/Card';
import EditIcon from '@mui/icons-material/Edit';

function Note(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.heading}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Card.Link href="#"><EditIcon/></Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Note;