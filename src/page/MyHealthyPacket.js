import React, {Component} from "react";
import CardMenu from "../utils/card/CardMenu";
import "./MyHealthPacket.css";

class MyHealthyPacket extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listMenu: [],
			token: "",
		};
	}
	
	componentDidMount() {
		this.setState({
			// listMenu:Food.foods_recommend
			listMenu: this.props.foods
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
		
		const menuSehatKu = this.state.listMenu.map((menu, index) => (
			<CardMenu menu={menu}/>
		))
		
		return (
			<div id="menuSehatRekomendasi">
				<section className="section-margin mb-lg-100">
					<div className="container">
						<div className="section-intro mb-75px">
							<h4 className="intro-title"
									style={{fontFamily: "PT Serif", fontSize: "30px", color: "maroon", marginTop: "-100px"}}>Paket Sehat
								Ku</h4>
							<h2 style={{fontFamily: "PT Serif", fontSize: "50px"}}>Menu Sehat Rekomendasi Hari Ini</h2>
						</div>
						{/* data nanti ambil dari database */}
						<div className="owl-carousel owl-theme featured-carousel">
							{menuSehatKu}
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default MyHealthyPacket;
