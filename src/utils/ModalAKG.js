import React, { Component } from 'react';
import { Button, Modal } from "react-bootstrap";

class ModalAKG extends Component {
    render() { 
    
      //receive from paketSehatku
    let { show, handleClose, image } = this.props;
    const stylePicture = {
      borderRadius: "100px",
      height: "40px",
      width: "40px",
    };
    const styleImage = {
      marginTop: "10px",
    };

    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Kandungan AKG</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={image} style={{ width: "100%" }} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
}
}

export default ModalAKG;