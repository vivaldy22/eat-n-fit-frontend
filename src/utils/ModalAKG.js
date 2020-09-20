import React, { Component } from 'react';
import { Button, Modal, ModalBody } from "react-bootstrap";

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
          <Modal.Header closeButton style={{backgroundColor:"#808000"}}>
            <Modal.Title style={{fontFamily:"Lora", marginLeft:"auto", color:"white", fontSize:"38px"}}>Takaran AKG</Modal.Title>
          </Modal.Header>
          <Modal.Body class="align-self-center mr-3" >
            <img src={menu.food_picture} class="align-self-center mr-3"  style={{height:"200px", width: "200px", alignContent:"center"}}/>
          </Modal.Body>
          <ModalBody >
          <div>
            <h4 style={{fontFamily:"PT Serif"}}>-Total Kalori : {menu.food_calories} kkal</h4>
            <h4 style={{fontFamily:"PT Serif"}}>-Total Lemak : {menu.food_fat} gr</h4>
            <h4 style={{fontFamily:"PT Serif"}}>-Total Karbohidrat : {menu.food_carbs} gr</h4>
            <h4 style={{fontFamily:"PT Serif"}}>-Total Protein : {menu.food_protein} gr</h4>
          </div>
          </ModalBody>
          <Modal.Footer style={{backgroundColor:"#808000"}}>
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