import React, {useState} from "react";
import {Button , Modal, Form} from "react-bootstrap";
import ReactDOM from 'react-dom';

export default function ModalCart(AddMovie) { 
  const styles = {marginLeft:"50%", marginTop:"2%", marginBottom:"2%"
}
const [newInput, setNewInput] = useState({
    id: Math.random(),
    image: "",
    rating: "",
    name: "",
    date: "",
    type: "",
    description: "",
  });
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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Movie Tilte</Form.Label>
              <input type="text" name="name" onChange={handleChange}></input>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>image url</Form.Label>
              <input type="text" name="image" onChange={handleChange}></input>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Date of release</Form.Label>
              <input type="text" name="date" onChange={handleChange}></input>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Type</Form.Label>
              <input type="text" name="type" onChange={handleChange}></input>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Rating</Form.Label>
              <input type="text" name="rating" onChange={handleChange}></input>
            </Form.Group>
            <Button variant="primary" type="submit" style={{marginLeft:"42%"}} onClick={(e) => {
              AddMovie(newInput);
              e.preventDefault();
               setNewInput({
                id: Math.random(),
                image: "",
                rating: "",
                name: "",
                date: "",
                type: "",
                description: "",
              });
            }}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}




