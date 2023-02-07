import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';

export default function CreateNote() {
    return 0;
}

// function CreateNote(props) {

//     const [showCreateNote, setCreateNote] = useState(false);
//     const [error, setError] = React.useState(false);
//     const [note, setNote] = React.useState({
//         heading: "",
//         text: ""
//     });

//     function clearNote() {
//         setNote({
//             heading: "",
//             text: ""
//         });
//     }

//     function changeText(event) {
//         const { name, value } = event.target;

//         setNote((prevValue) => {
//             return {
//                 ...prevValue,
//                 [name]: value
//             };
//         });
//     }


//     return (
//         <>
//             <Button variant="link" size="lg" className="addButton" onClick={() => setCreateNote(true)}>add</Button>

//             <Modal
//                 show={showCreateNote}
//                 onHide={() => setCreateNote(false)}
//                 size="lg"
//                 aria-labelledby="contained-modal-title-vcenter"
//                 centered
//                 onExited={() => clearNote()}
//                 >
//                 <Modal.Body className="dark">
//                     <Stack gap={3}>
//                         <Form 
//                             id="dark-form"
//                             onSubmit={(formEvent) => {
//                                 if(note.heading === "" || note.text === "") {
//                                     setError(true)
//                                     formEvent.preventDefault();
//                                 }
//                                 else {
//                                     props.submitNote(note, formEvent);
//                                     setCreateNote(false);
//                                 }
//                             }}
//                         >
//                             <Form.Group className="mb-3" controlId="formNoteHeading">
//                                 <Form.Control type="text" placeholder="Enter Heading" onChange={changeText} name="heading" value={note.heading} />
//                             </Form.Group>

//                             <Form.Group className="mb-3" controlId="formNoteText">
//                                 <Form.Control as="textarea" rows={3} placeholder="Enter Text" onChange={changeText} name="text" value={note.text} />
//                             </Form.Group>
//                             <Stack direction="horizontal" gap={2}>
//                                 <Button variant="success" type="submit">
//                                     Submit
//                                 </Button>
//                                 <Button variant="danger" onClick={() => setCreateNote(false)}>
//                                     Close
//                                 </Button>
//                             </Stack>
//                         </Form>

//                         {
//                             error && <Alert variant="warning" onClose={() => setError(false)} dismissible>
//                                 <Alert.Heading>Your note is incomplete!</Alert.Heading>
//                                 <p>
//                                     Please complete your note and try again.
//                                 </p>
//                             </Alert>
//                         }
//                     </Stack>
//                 </Modal.Body>
//             </Modal>
//         </>
//     );
// }

// export default CreateNote;