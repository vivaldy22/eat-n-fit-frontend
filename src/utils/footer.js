import React, { Component } from "react";
import icon from "../assets/images/icons/enf.svg"
import { Link } from "react-router-dom";


class Footer extends Component {
  render() {
    return (
      // <div  style={{ background: "black" }} >
      //  <div className="container">
      //     <div className="row mt-5">
      //       <footer>
      //         <div class="footer-bottom  align-items-center text-center text-lg-left">
      //           <p style={{color:"white" , fontFamily: "PT Serif"}}>Copyright &copy; 2020</p>
      //           <p style={{color:"white" , fontFamily: "Lora", fontSize:"20px"}}> Eat & Fit </p>
      //         </div>
      //       </footer>
      //     </div>
      //   </div>
      // </div>

    <div>
     <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6" style={{marginLeft:"-10px"}}>
            <h6 style={{color:"white" , fontFamily: "Lora", fontSize:"30px", icon:`${icon}`}}> Eat & Fit</h6>
            <p class="text-justify"  style={{color:"white" , fontSize:"18px"}}>Penyedia jasa <i>makanan sehat</i> dengan varian menu yang
                  lezat dan kandungan gizi yang diukur oleh Nutrisionist terbaik
                  berdasarkan takaran angka kecukupan gizi yang diberikan khusus
                  untuk konsumen .</p>
          </div>

          <div class="col-xs-6 col-md-3" style={{marginLeft:"50px"}}>
            <h6>Paket</h6>
            <ul class="footer-links">
              <li><a href="#menuSehatRekomendasi">Paket Sehat Ku</a></li>
              <li><a href="#paketAcaraBesar">Paket Sehat Kita</a></li>
              <li><a href="#paketSeafood">Paket Seafood</a></li>
              <li><a href="#paketDagingAyam">Paket Daging Ayam</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3" style={{marginLeft:"-50px"}}>
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><Link to="/tentangKami">Tentang Kami</Link></li>
              <li><Link to="/caraPesan">Cara Pesan</Link></li>
              <li><Link to="/unduh">Unduh</Link></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2020 by Eat & Fit</p>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
    );
  }
}

export default Footer;
