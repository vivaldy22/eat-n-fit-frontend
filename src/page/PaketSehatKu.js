import React, { Component } from "react";
import ModalImage from "../utils/ModalAKG"
import Food from "../json/food.json"
import CardMenu from "./card/CardMenu";
import { getFood } from "../api/api";

class PaketSehatKu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      listMenu:[]
    };
  }
componentDidMount(){
  this.setState({
    listMenu:Food.menu
  })
  // getFood().then((res)=>{
  //   this.setState({
  //   listMenu:res.menu
  //   })
  // })
}
  handleShow = () => {
    this.setState({
      show: true,
    });
  };
  handleCancel = () => {
    this.setState({
      show: false,
    });
  };

  render() {

    const menuSehatKu= this.state.listMenu.map((menu,index)=>(
     <CardMenu image={ menu.food_picture } food_name={menu.food_name} desc={menu.food_desc} price={menu.food_price} handleShow={this.handleShow} cancel={this.handleCancel} show={this.state.show} />
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
      <ModalImage
            show={show}
            handleClose={handleClose}
            image={image}
        />
 
      </div>
    );
  }
}

export default PaketSehatKu;
