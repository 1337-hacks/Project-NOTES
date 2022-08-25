import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert';

function CreateNote(props) {

    const [error, setError] = React.useState(false);

    const [note, setNote] = React.useState({
        heading: "",
        text: ""
    });

    function changeText(event) {
        const { name, value } = event.target;

        setNote((prevValue) => {
        return {
            ...prevValue,
            [name]: value
        };
        });
    }


    return (
    <div className="create">
        <Form 
            onSubmit={(formEvent) => {
                if(note.heading === "" || note.text === "") {
                    setError(true)
                    formEvent.preventDefault();
                }
                else {
                    props.submitNote(note, formEvent);
                    setNote({
                        heading: "",
                        text: ""
                    });
                }
            }}
        >
            <Form.Group className="mb-3" controlId="formNoteHeading">
                <Form.Label>Heading</Form.Label>
                <Form.Control type="text" placeholder="Enter Heading" onChange={changeText} name="heading" value={note.heading} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNoteText">
                <Form.Label>Text</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter Text" onChange={changeText} name="text" value={note.text} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

        {
            error && <Alert variant="warning" onClose={() => setError(false)} dismissible>
                <Alert.Heading>Your note is incomplete!</Alert.Heading>
                <p>
                    Please complete your note and try again.
                </p>
            </Alert>
        }
    </div>
    );
}

export default CreateNote;