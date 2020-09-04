import React, { Component } from "react";
import icon from "../assets/images/icons/enf.svg"

class Footer extends Component {
  render() {
    return (
      <div  style={{ background: "black" }} >
        <section class="cta-area text-center">
          <div >
            <p style={{color:"white" , fontFamily: "PT Serif"}}>Untuk Menikmati layanan kami</p>
            <h2 style={{color:"white" , fontFamily: "PT Serif"}}>Download Aplikasi Eat 'N Fit sekarang juga yuk...</h2>
            <a class="button"style={{backgroundColor:"#fcad10", fontStyle:"italic", 
            fontFamily:"PT Serif", fontSize:"20px", color:"black"}}>
              Download Aplikasi
            </a>
          </div>
        </section>
        <div className="container">
          <div className="row mt-5">
            <footer>
              <div class="footer-bottom  align-items-center text-center text-lg-left">
                <p style={{color:"white" , fontFamily: "PT Serif"}}>Copyright &copy; 2020</p>
                <p style={{color:"white" , fontFamily: "Lora", fontSize:"20px"}}> Eat & Fit </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
