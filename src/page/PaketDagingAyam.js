import React, { Component } from 'react';
import Food from "../json/food.json"
import CardMenu from "./card/CardMenu";
import { getFood } from "../api/api";

class PaketDagingAyam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listChickenMenu:[]
    };
  }
componentDidMount(){
  // this.setState({
  //   listChickenMenu:Food.foods_Chicken
  // })
  getFood().then((res)=>{
    this.setState({
    listMenu:res.menu
    })
  })
}
    render() {
      const chickenMenu= this.state.listChickenMenu.map((menu,index)=>(
        <CardMenu menu={menu} />
       ))

       return (
        <div id="paketDagingAyam">
          <section class="section-margin mb-lg-100" >
            <div class="container">
              <div class="section-intro mb-75px">
                <h4 class="intro-title" style={{fontFamily:"PT Serif", fontSize:"30px", color: "maroon"}}>Paket Daging Ayam </h4>
                <h2 style={{fontFamily:"PT Serif", fontSize:"50px"}}>Menu Olahan Daging Ayam</h2>
              </div>
              {/* data nanti ambil dari database */}
              <div class="owl-carousel owl-theme featured-carousel">
                {chickenMenu}
              </div>
            </div>
          </section>
     {/* this value send to file ModalAKG */}
        </div>
      );
    }
}

export default PaketDagingAyam;