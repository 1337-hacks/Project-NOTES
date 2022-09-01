import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { v4 as uuidv4 } from 'uuid';
import Stack from 'react-bootstrap/Stack';

function CreateWorkspace(props) {

    const [showAddWS, setShowAddWS] = useState(false);
    
    const handleCloseAddWS = () => setShowAddWS(false);
    const handleShowAddWS = () => setShowAddWS(true);

    const [error, setError] = useState(false);

    const [workspace, setWorkspace] = useState({
        id: uuidv4(),
        title: "",
        noteSet: []
    });

    function clearTitle() {
        setWorkspace({
            title: "",
            noteSet: []
        });
    }; 

    function changeText(event) {
        const { name, value } = event.target;

        setWorkspace((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    return (
        <>
            <ListGroup>
                <ListGroup.Item action onClick={handleShowAddWS}>Add a Workspace</ListGroup.Item>
            </ListGroup>

            <Modal
                show={showAddWS}
                onHide={handleCloseAddWS}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onExited={() => clearTitle()}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Add a Workspace
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Stack gap={3}>
                        <Form 
                        onSubmit={(formEvent) => {
                            if(workspace.title === "") {
                                setError(true)
                                formEvent.preventDefault();
                            }
                            else {
                                props.submitWorkspace(workspace, formEvent);
                                handleCloseAddWS();
                            }
                        }}
                        >
                            <Form.Group className="mb-3" controlId="formNoteHeading">
                                <Form.Control type="text" placeholder="Enter Workspace Title" onChange={changeText} name="title" value={workspace.title} />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                        {
                        error && <Alert variant="warning" onClose={() => setError(false)} dismissible>
                            <Alert.Heading>No name..?</Alert.Heading>
                            <p>
                            Please enter a name for your workspace.
                            </p>
                        </Alert>
                        }
                    </Stack>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CreateWorkspace;

