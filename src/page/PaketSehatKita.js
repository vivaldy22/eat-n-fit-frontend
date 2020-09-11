import React, { Component } from "react";
import img from "../assets/images/bg-header.jpg";
import img1 from "../img/home/sehat.jpg";
import imgUlangTahun from "../img/home/ulangtahun.jpg";
import imgKantor from "../img/home/office.jpg";
import imgAqiqah from "../img/home/aqiqah.jpg" 
import imgWedding from "../img/home/wedding.jpg"
import Packet from "../json/packet.json"
import CardPacket from "./card/CardPacket";


class PaketSehatKita extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPacket:[],
    };
  }
  componentDidMount(){
    this.setState({
      listPacket:Packet.packet_name
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
              <h4 class="intro-title" style={{fontFamily:"PT Serif", fontSize:"30px", color: "maroon"}}>Paket Sehat Ku </h4>
              <h2 style={{fontFamily:"PT Serif", fontSize:"50px"}}>Menu Sehat Rekomendasi Hari Ini</h2>
            </div>
            {/* data nanti ambil dari database */}
            <div class="owl-carousel owl-theme featured-carousel">
              {paketKita}
              {console.log(this.state.listPacket)}
            </div>
          </div>
        </section>
   {/* this value send to file ModalAKG */}
      </div>
    );
  }
}

export default PaketSehatKita;
