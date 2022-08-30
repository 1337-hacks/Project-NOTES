import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

function CreateNote(props) {

    const [showCreateNote, setCreateNote] = useState(false);
    const [error, setError] = React.useState(false);
    const [note, setNote] = React.useState({
        heading: "",
        text: ""
    });

    function clearNote() {
        setNote({
            heading: "",
            text: ""
        });
    }

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
    <>
        <Button variant="link" size="lg" className="addButton" onClick={() => setCreateNote(true)}><AddCircleOutlineRoundedIcon fontSize="large"/></Button>

        <Modal
            show={showCreateNote}
            onHide={() => setCreateNote(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onExited={() => clearNote()}
            >
            <Modal.Header closeButton>
                <Modal.Title>Take a note...</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form 
                    onSubmit={(formEvent) => {
                        if(note.heading === "" || note.text === "") {
                            setError(true)
                            formEvent.preventDefault();
                        }
                        else {
                            props.submitNote(note, formEvent);
                            setCreateNote(false);
                        }
                    }}
                >
                    <Form.Group className="mb-3" controlId="formNoteHeading">
                        <Form.Control type="text" placeholder="Enter Heading" onChange={changeText} name="heading" value={note.heading} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formNoteText">
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
            </Modal.Body>
        </Modal>
    </>
    );
}

export default CreateNote;