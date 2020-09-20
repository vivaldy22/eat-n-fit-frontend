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
    // const stylePicture = {
    //   borderRadius: "100px",
    //   height: "40px",
    //   width: "40px",
    // };
    // const styleImage = {
    //   marginTop: "10px",
    // };
    const myPacket = packet.food_composition.map((packet,index)=>(
    <div>
      {packet.food_name}
    </div>
    ))
    return (
    <div>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton style={{backgroundColor:"#b22222"}}>
            <Modal.Title style={{fontFamily:"Lora", fontSize:"30px", color: "white",  marginLeft:"auto"}}>
              Daftar Makanan
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="align-self-center mr-3" > 
            <img alt="packetPicture" src={packet.packet_picture} className="align-self-center" style={{height:"200px", width: "200px"}} />
          </Modal.Body>
          <Modal.Body >
           <h4 style={{fontFamily:"PT Serif"}}>
            {myPacket}
           </h4>
          </Modal.Body>
          <Modal.Footer style={{backgroundColor:"#b22222"}}>
            <Button variant="secondary" onClick={handleClose} style={{backgroundColor:"maroon"}}>
              Close 
            </Button>
            <a data-toggle="modal"  onClick={this.handleShowModal2} className="btn btn-primary" style={{color:"white", }}>lihat total AKG</a>
          </Modal.Footer>
        </Modal>  
      </div>

      <div>
        <Modal show={this.state.showModal2}>
          <Modal.Header closeButton onClick={this.handleCloseModal2} style={{backgroundColor:"#808000"}}>
            <Modal.Title className="align-self-center mr-3" style={{fontFamily:"Lora", fontSize:"20px", color:"white", backgroundColor:"#808000"}}>Takaran AKG dalam 1 paket</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{fontFamily:"Lora", backgroundColor: "#fcad10"}} > 
          <div >
            <h3  style={{fontFamily:"PT Serif"}}>-Total Kalori : {packet.total_calories} kkal</h3>
            <h3  style={{fontFamily:"PT Serif"}}>-Total Lemak : {packet.total_fat} gr</h3>
            <h3  style={{fontFamily:"PT Serif"}}>-Total Karbohidrat : {packet.total_carbs} gr</h3>
            <h3  style={{fontFamily:"PT Serif"}}>-Total Protein : {packet.total_protein} gr</h3>
          </div>
          </Modal.Body>
          <Modal.Footer style={{backgroundColor:"#808000"}}>
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