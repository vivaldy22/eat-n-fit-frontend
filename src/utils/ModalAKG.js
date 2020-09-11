import React, { Component } from 'react';
import { Button, Modal } from "react-bootstrap";

class ModalAKG extends Component {
    render() { 
    
      //receive from paketSehatku
    let { show, handleClose, menu } = this.props;
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
            <Modal.Title style={{fontFamily:"Lora"}}>Kandungan AKG</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={menu.food_picture} class="align-self-center mr-3" style={{height:"200px", width: "200px", alignContent:"center"}} />
            <h3></h3>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} style={{backgroundColor:"maroon", fontFamily:"Lora"}}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        
      </div>
    );
}
}

export default ModalAKG;