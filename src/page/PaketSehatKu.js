import React, { Component } from "react";
import ModalImage from "../utils/ModalAKG"
import Food from "../json/food.json"
import CardMenu from "./card/CardMenu";
import { getFood } from "../api/api";

class PaketSehatKu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMenu:[],
    };
  }
componentDidMount(){
  this.setState({
    listMenu:Food.foods_recommend
  })
  // getFood().then((res)=>{
  //   this.setState({
  //   listMenu:res
  //   })
  // })
}
  render() {
    const menuSehatKu= this.state.listMenu.map((menu,index)=>(
     <CardMenu menu={menu} style={{alignItem:"center"}} />
    ))
    
    return (
      <div id="menuSehatRekomendasi">
        <section class="section-margin mb-lg-100" >
          <div class="container">
            <div class="section-intro mb-75px">
              <h4 class="intro-title" style={{fontFamily:"PT Serif", fontSize:"30px", color: "maroon"}}>Paket Sehat Ku </h4>
              <h2 style={{fontFamily:"PT Serif", fontSize:"50px"}}>Menu Sehat Rekomendasi Hari Ini</h2>
            </div>
            {/* data nanti ambil dari database */}
            <div class="owl-carousel owl-theme featured-carousel">
              {menuSehatKu}
            </div>
          </div>
        </section>
   {/* this value send to file ModalAKG */}
      </div>
    );
  }
}

export default PaketSehatKu;
