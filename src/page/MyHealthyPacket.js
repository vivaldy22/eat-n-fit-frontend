import React, { Component } from "react";
import ModalImage from "../utils/ModalAKG"
import Food from "../json/food.json"
import CardMenu from "../utils/card/CardMenu";
import { getFood, getToken } from "../api/api";
import {Col, Row, Carousel, CarouselItem} from 'react-bootstrap'
import "./MyHealthPacket.css";



class MyHealthyPacket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMenu:[],
      token:"",
    };
  }
componentDidMount(){
  this.setState({
    listMenu:Food.foods_recommend
  })
  // getToken().then((res)=>{
  //  sessionStorage.setItem("auth-token", res.token);
  // })
  // const token = sessionStorage.getItem("auth-token");

  // getFood(token).then((res)=>{
  //   console.log("ini console log res", res)
  //   // var recommend = {res} 
  //   this.setState({
  //   listMenu: res
  //   })
  // }).catch(e=>console.log(e))
  // console.log("my healthy packet") 
}

// render() {
//   const menuSehatKu = this.state.listMenu.map((menu,index)=>(
//   <Carousel.Item >
//   <CardMenu menu={menu} style={{alignItem:"center"}} />
//   </Carousel.Item>
//   ))
//    return (
//         <div id="menuSehatRekomendasi" >
//           <section className="section-margin mb-lg-100" >
//             <div className="container">
//               <div className="section-intro mb-75px">
//                 <h4 className="intro-title" style={{fontFamily:"PT Serif", fontSize:"30px", color: "maroon"}}>Paket Sehat Ku </h4>
//                 <h2 style={{fontFamily:"PT Serif", fontSize:"50px"}}>Menu Sehat Rekomendasi Hari Ini</h2>
//               </div>
//               {/* data nanti ambil dari database */}
//                 <Carousel>
//                     {menuSehatKu}
//                 </Carousel>
//             </div>
//           </section>
//      {/* this value send to file ModalAKG */}
//         </div>
//       );
//     }

    render() {

      const menuSehatKu = this.state.listMenu.map((menu,index)=>(
        <CardMenu menu={menu} />
      ))
      
      return (
        <div id="menuSehatRekomendasi">
          <section class="section-margin mb-lg-100" >
            <div class="container">
              <div class="section-intro mb-75px">
                <h4 class="intro-title" style={{fontFamily:"PT Serif", fontSize:"30px", color: "maroon", marginTop:"-100px"}}>Paket Sehat Ku</h4>
                <h2 style={{fontFamily:"PT Serif", fontSize:"50px"}}>Menu Sehat Rekomendasi Hari Ini</h2>
              </div>
              {/* data nanti ambil dari database */}
              <div class="owl-carousel owl-theme featured-carousel">
                {menuSehatKu}
              </div>
              </div>
          </section>
        </div>
      );
    }
}
export default MyHealthyPacket;
