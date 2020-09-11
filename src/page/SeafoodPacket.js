import React, { Component } from 'react';
import Food from "../json/food.json"
import { getFood } from "../api/api";
import CardMenu from "../utils/card/CardMenu";

class SeafoodPacket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSeafood:[]
    };
  }
componentDidMount(){
  // this.setState({
  //   listSeafood:Food.foods_Seafood
  // })
  getFood().then((res)=>{
    this.setState({
    listMenu:res.menu
    })
  })
}
    render() {

      const menuSeafood = this.state.listSeafood.map((menu,index)=>(
        <CardMenu menu={menu} />
      ))
      
      return (
        <div id="paketSeafood">
          <section class="section-margin mb-lg-100" >
            <div class="container">
              <div class="section-intro mb-75px">
                <h4 class="intro-title" style={{fontFamily:"PT Serif", fontSize:"30px", color: "maroon"}}>Paket Seafood </h4>
                <h2 style={{fontFamily:"PT Serif", fontSize:"50px"}}>Menu Olahan Seafood</h2>
              </div>
              {/* data nanti ambil dari database */}
              <div class="owl-carousel owl-theme featured-carousel">
                {menuSeafood}
              </div>
            </div>
          </section>
      {/* this value send to file ModalAKG */}
        </div>
      );
    }
}


export default SeafoodPacket;