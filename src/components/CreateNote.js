import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreateNote() {
  return (
    <div className="create">
        <Form>
            <Form.Group className="mb-3" controlId="formNoteHeading">
                <Form.Label>Heading</Form.Label>
                <Form.Control type="text" placeholder="Enter Heading" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNoteText">
                <Form.Label>Text</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter Text" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
  );
}

export default CreateNote;