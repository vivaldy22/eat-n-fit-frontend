import React, { Component } from 'react';
import { Button, Modal } from "react-bootstrap";

class ModalPacket extends Component {
 constructor(props){
   super(props);
   this.state={
     showModal2:false,
   }
 }
 handleShowModal2=()=>{
   this.setState({
     showModal2:true,
   })
   this.props.handleClose()
 }

 handleCloseModal2=()=>{
  this.setState({
    showModal2:false,
  })
}


  render() { 
    
      //receive from paketSehatKita
    let { show, handleClose, packet } = this.props;
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
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{fontFamily:"Lora"}}>
              List Makanan
            </Modal.Title>
          </Modal.Header>
          <Modal.Body> 
            <img src={packet.packet_picture} class="align-self-center" style={{height:"200px", width: "200px"}} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} style={{backgroundColor:"maroon"}}>
              Close 
            </Button>
            <a data-toggle="modal"  onClick={this.handleShowModal2} class="btn btn-primary" style={{color:"white", }}>lihat total AKG</a>
          </Modal.Footer>
        </Modal>  
      </div>

      <div>
        <Modal show={this.state.showModal2} >
          <Modal.Header closeButton onClick={this.handleCloseModal2}>
            <Modal.Title style={{fontFamily:"Lora"}}>AKG</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
            {/* <img src={packet.packet_picture} class="align-self-center" style={{height:"200px", width: "200px"}} /> */}
            Total AKGJHJD
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModal2} style={{backgroundColor:"maroon", fontFamily:"Lora"}}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>       
      </div>
    </div>
    );
}
}

export default ModalPacket;