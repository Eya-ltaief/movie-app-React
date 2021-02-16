import React, {useState} from "react"; 
import {Button , Modal, Form} from "react-bootstrap";


export default function ModalCart({AddMovie}) { 
  const styles = {marginLeft:"50%", marginTop:"2%", marginBottom:"2%"
}
const [newInput, setNewInput] = useState({});
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    setNewInput({ ...newInput, [e.target.name]: e.target.value });
    
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={styles}>
      <Button variant="primary" onClick={handleShow}>
        Add a new movie 
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="form-style">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Movie Tilte</Form.Label>
              <br />
              <input type="text" name="name" onChange={handleChange}></input>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Image URL</Form.Label>
              <br />
              <input type="text" name="image" onChange={handleChange}></input>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Date of release</Form.Label>
              <br />
              <input type="text" name="date" onChange={handleChange}></input>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Type</Form.Label>
              <br />
              <input type="text" name="type" onChange={handleChange}></input>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Rating</Form.Label>
              <br />
              <input type="value" name="rating" onChange={handleChange}></input>
            </Form.Group>
            <Button variant="primary" type="submit" style={{marginLeft:"30%"}} onClick={(e) => {
              AddMovie(newInput);
              e.preventDefault();
              setNewInput({});
              handleClose()
            }}>
              Add movie
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  );
}




