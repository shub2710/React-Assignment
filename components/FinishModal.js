import React from "react";
import { Modal, Button } from "react-bootstrap";

function FinishModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Selected Slide Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.selectedSlides.join()}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FinishModal;
