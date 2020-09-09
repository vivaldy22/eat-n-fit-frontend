import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Unduh extends Component {
    render() {
        return (
        <div>
          {/* <div style={{ height: "500px", marginTop: "80px", alignItems:"center", marginLeft:"100px"}}>
            <h2 style={{color:"white" , fontFamily: "PT Serif"}}>Download Aplikasi Eat & Fit sekarang juga yuk...</h2>
            <a class="button"style={{backgroundColor:"white", fontStyle:"italic", alignItems:"center", 
            fontFamily:"PT Serif", fontSize:"20px", color:"black"}} id="download button">
              Download Aplikasi 
            </a>
          </div> */}
          <section class="cta-area text-center" style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
          <div class="container" style={{height:"500px", marginTop:"200px", fontFamily: "PT Serif"}}>
            <p>Untuk Menikmati layanan kami</p>
            <h2 style={{color:"white" , fontFamily: "PT Serif", fontSize:"45px"}}>Download Aplikasi Eat & Fit sekarang juga yuk...</h2>
            <a href="#" class="button"style={{fontStyle:"italic", alignItems:"center", color:"white",
            fontFamily:"PT Serif", fontSize:"20px", marginLeft: "410px"}} id="download button">
              Download Aplikasi
            </a>
          </div>
        </section>

        </div>
        );
    }
}

export default Unduh;