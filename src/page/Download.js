import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Download extends Component {
    render() {
        return (
        <div>
         <section className="cta-area text-center" style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
          <div className="container" style={{height:"500px", marginTop:"200px", fontFamily: "PT Serif"}}>
            <p>Untuk Menikmati layanan kami</p>
            <h2 style={{color:"white" , fontFamily: "PT Serif", fontSize:"45px"}}>Download Aplikasi Eat & Fit sekarang juga yuk...</h2>
            <Link  className="button" to="/unduhAplikasi" style={{fontStyle:"italic", alignItems:"center", color:"white",
            fontFamily:"PT Serif", fontSize:"20px", marginLeft: "410px"}} id="download button">
              Download Aplikasi
            </Link>
          </div>
        </section>
       </div>
        );
    }
}

export default Download;