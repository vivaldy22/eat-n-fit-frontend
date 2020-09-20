import React, { Component } from "react";
// import Packet from "../json/packet.json"
import CardPacket from "../utils/card/CardPacket";


class EventPacket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPacket:[],
    };
  }
  componentDidMount(){
    this.setState({
      // listPacket:Packet.packet
      listPacket: this.props.packets
    })
    // getPacket().then((res)=>{
    //   this.setState({
    //   listMenu:res
    //   })
    // })
  }
  render() {
    const paketKita= this.state.listPacket.map((packet,index)=>(
      <CardPacket packet={packet} style={{alignItem:"center"}} />
     ))
    return (
      <div id="paketAcaraBesar">
        <section class="section-margin mb-lg-100" >
          <div class="container">
            <div class="section-intro mb-75px">
              <h4 class="intro-title" style={{fontFamily:"PT Serif", fontSize:"30px", color: "maroon"}}>Paket Sehat Kita </h4>
              <h2 style={{fontFamily:"PT Serif", fontSize:"50px"}}>Acara Besar</h2>
            </div>
            <div class="owl-carousel owl-theme featured-carousel">
              {paketKita}
              {console.log(this.state.listPacket)}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default EventPacket;
